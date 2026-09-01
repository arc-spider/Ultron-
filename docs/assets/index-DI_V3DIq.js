(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function j_(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var uh={exports:{}},Bo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var z0;function HS(){if(z0)return Bo;z0=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var p in l)p!=="key"&&(c[p]=l[p])}else c=l;return l=c.ref,{$$typeof:o,type:s,key:h,ref:l!==void 0?l:null,props:c}}return Bo.Fragment=e,Bo.jsx=i,Bo.jsxs=i,Bo}var B0;function GS(){return B0||(B0=1,uh.exports=HS()),uh.exports}var pt=GS(),fh={exports:{}},st={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var F0;function VS(){if(F0)return st;F0=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),S=Symbol.for("react.activity"),g=Symbol.iterator;function E(C){return C===null||typeof C!="object"?null:(C=g&&C[g]||C["@@iterator"],typeof C=="function"?C:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,y={};function x(C,V,_e){this.props=C,this.context=V,this.refs=y,this.updater=_e||T}x.prototype.isReactComponent={},x.prototype.setState=function(C,V){if(typeof C!="object"&&typeof C!="function"&&C!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,C,V,"setState")},x.prototype.forceUpdate=function(C){this.updater.enqueueForceUpdate(this,C,"forceUpdate")};function z(){}z.prototype=x.prototype;function H(C,V,_e){this.props=C,this.context=V,this.refs=y,this.updater=_e||T}var D=H.prototype=new z;D.constructor=H,w(D,x.prototype),D.isPureReactComponent=!0;var I=Array.isArray;function L(){}var O={H:null,A:null,T:null,S:null},b=Object.prototype.hasOwnProperty;function N(C,V,_e){var be=_e.ref;return{$$typeof:o,type:C,key:V,ref:be!==void 0?be:null,props:_e}}function Y(C,V){return N(C.type,V,C.props)}function k(C){return typeof C=="object"&&C!==null&&C.$$typeof===o}function Q(C){var V={"=":"=0",":":"=2"};return"$"+C.replace(/[=:]/g,function(_e){return V[_e]})}var me=/\/+/g;function Se(C,V){return typeof C=="object"&&C!==null&&C.key!=null?Q(""+C.key):V.toString(36)}function J(C){switch(C.status){case"fulfilled":return C.value;case"rejected":throw C.reason;default:switch(typeof C.status=="string"?C.then(L,L):(C.status="pending",C.then(function(V){C.status==="pending"&&(C.status="fulfilled",C.value=V)},function(V){C.status==="pending"&&(C.status="rejected",C.reason=V)})),C.status){case"fulfilled":return C.value;case"rejected":throw C.reason}}throw C}function P(C,V,_e,be,Ce){var ee=typeof C;(ee==="undefined"||ee==="boolean")&&(C=null);var Me=!1;if(C===null)Me=!0;else switch(ee){case"bigint":case"string":case"number":Me=!0;break;case"object":switch(C.$$typeof){case o:case e:Me=!0;break;case v:return Me=C._init,P(Me(C._payload),V,_e,be,Ce)}}if(Me)return Ce=Ce(C),Me=be===""?"."+Se(C,0):be,I(Ce)?(_e="",Me!=null&&(_e=Me.replace(me,"$&/")+"/"),P(Ce,V,_e,"",function(je){return je})):Ce!=null&&(k(Ce)&&(Ce=Y(Ce,_e+(Ce.key==null||C&&C.key===Ce.key?"":(""+Ce.key).replace(me,"$&/")+"/")+Me)),V.push(Ce)),1;Me=0;var de=be===""?".":be+":";if(I(C))for(var De=0;De<C.length;De++)be=C[De],ee=de+Se(be,De),Me+=P(be,V,_e,ee,Ce);else if(De=E(C),typeof De=="function")for(C=De.call(C),De=0;!(be=C.next()).done;)be=be.value,ee=de+Se(be,De++),Me+=P(be,V,_e,ee,Ce);else if(ee==="object"){if(typeof C.then=="function")return P(J(C),V,_e,be,Ce);throw V=String(C),Error("Objects are not valid as a React child (found: "+(V==="[object Object]"?"object with keys {"+Object.keys(C).join(", ")+"}":V)+"). If you meant to render a collection of children, use an array instead.")}return Me}function F(C,V,_e){if(C==null)return C;var be=[],Ce=0;return P(C,be,"","",function(ee){return V.call(_e,ee,Ce++)}),be}function $(C){if(C._status===-1){var V=C._result;V=V(),V.then(function(_e){(C._status===0||C._status===-1)&&(C._status=1,C._result=_e)},function(_e){(C._status===0||C._status===-1)&&(C._status=2,C._result=_e)}),C._status===-1&&(C._status=0,C._result=V)}if(C._status===1)return C._result.default;throw C._result}var ve=typeof reportError=="function"?reportError:function(C){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var V=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof C=="object"&&C!==null&&typeof C.message=="string"?String(C.message):String(C),error:C});if(!window.dispatchEvent(V))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",C);return}console.error(C)},le={map:F,forEach:function(C,V,_e){F(C,function(){V.apply(this,arguments)},_e)},count:function(C){var V=0;return F(C,function(){V++}),V},toArray:function(C){return F(C,function(V){return V})||[]},only:function(C){if(!k(C))throw Error("React.Children.only expected to receive a single React element child.");return C}};return st.Activity=S,st.Children=le,st.Component=x,st.Fragment=i,st.Profiler=l,st.PureComponent=H,st.StrictMode=s,st.Suspense=m,st.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=O,st.__COMPILER_RUNTIME={__proto__:null,c:function(C){return O.H.useMemoCache(C)}},st.cache=function(C){return function(){return C.apply(null,arguments)}},st.cacheSignal=function(){return null},st.cloneElement=function(C,V,_e){if(C==null)throw Error("The argument must be a React element, but you passed "+C+".");var be=w({},C.props),Ce=C.key;if(V!=null)for(ee in V.key!==void 0&&(Ce=""+V.key),V)!b.call(V,ee)||ee==="key"||ee==="__self"||ee==="__source"||ee==="ref"&&V.ref===void 0||(be[ee]=V[ee]);var ee=arguments.length-2;if(ee===1)be.children=_e;else if(1<ee){for(var Me=Array(ee),de=0;de<ee;de++)Me[de]=arguments[de+2];be.children=Me}return N(C.type,Ce,be)},st.createContext=function(C){return C={$$typeof:h,_currentValue:C,_currentValue2:C,_threadCount:0,Provider:null,Consumer:null},C.Provider=C,C.Consumer={$$typeof:c,_context:C},C},st.createElement=function(C,V,_e){var be,Ce={},ee=null;if(V!=null)for(be in V.key!==void 0&&(ee=""+V.key),V)b.call(V,be)&&be!=="key"&&be!=="__self"&&be!=="__source"&&(Ce[be]=V[be]);var Me=arguments.length-2;if(Me===1)Ce.children=_e;else if(1<Me){for(var de=Array(Me),De=0;De<Me;De++)de[De]=arguments[De+2];Ce.children=de}if(C&&C.defaultProps)for(be in Me=C.defaultProps,Me)Ce[be]===void 0&&(Ce[be]=Me[be]);return N(C,ee,Ce)},st.createRef=function(){return{current:null}},st.forwardRef=function(C){return{$$typeof:p,render:C}},st.isValidElement=k,st.lazy=function(C){return{$$typeof:v,_payload:{_status:-1,_result:C},_init:$}},st.memo=function(C,V){return{$$typeof:d,type:C,compare:V===void 0?null:V}},st.startTransition=function(C){var V=O.T,_e={};O.T=_e;try{var be=C(),Ce=O.S;Ce!==null&&Ce(_e,be),typeof be=="object"&&be!==null&&typeof be.then=="function"&&be.then(L,ve)}catch(ee){ve(ee)}finally{V!==null&&_e.types!==null&&(V.types=_e.types),O.T=V}},st.unstable_useCacheRefresh=function(){return O.H.useCacheRefresh()},st.use=function(C){return O.H.use(C)},st.useActionState=function(C,V,_e){return O.H.useActionState(C,V,_e)},st.useCallback=function(C,V){return O.H.useCallback(C,V)},st.useContext=function(C){return O.H.useContext(C)},st.useDebugValue=function(){},st.useDeferredValue=function(C,V){return O.H.useDeferredValue(C,V)},st.useEffect=function(C,V){return O.H.useEffect(C,V)},st.useEffectEvent=function(C){return O.H.useEffectEvent(C)},st.useId=function(){return O.H.useId()},st.useImperativeHandle=function(C,V,_e){return O.H.useImperativeHandle(C,V,_e)},st.useInsertionEffect=function(C,V){return O.H.useInsertionEffect(C,V)},st.useLayoutEffect=function(C,V){return O.H.useLayoutEffect(C,V)},st.useMemo=function(C,V){return O.H.useMemo(C,V)},st.useOptimistic=function(C,V){return O.H.useOptimistic(C,V)},st.useReducer=function(C,V,_e){return O.H.useReducer(C,V,_e)},st.useRef=function(C){return O.H.useRef(C)},st.useState=function(C){return O.H.useState(C)},st.useSyncExternalStore=function(C,V,_e){return O.H.useSyncExternalStore(C,V,_e)},st.useTransition=function(){return O.H.useTransition()},st.version="19.2.8",st}var H0;function Gd(){return H0||(H0=1,fh.exports=VS()),fh.exports}var Et=Gd();const kS=j_(Et);var hh={exports:{}},Fo={},dh={exports:{}},ph={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var G0;function XS(){return G0||(G0=1,(function(o){function e(P,F){var $=P.length;P.push(F);e:for(;0<$;){var ve=$-1>>>1,le=P[ve];if(0<l(le,F))P[ve]=F,P[$]=le,$=ve;else break e}}function i(P){return P.length===0?null:P[0]}function s(P){if(P.length===0)return null;var F=P[0],$=P.pop();if($!==F){P[0]=$;e:for(var ve=0,le=P.length,C=le>>>1;ve<C;){var V=2*(ve+1)-1,_e=P[V],be=V+1,Ce=P[be];if(0>l(_e,$))be<le&&0>l(Ce,_e)?(P[ve]=Ce,P[be]=$,ve=be):(P[ve]=_e,P[V]=$,ve=V);else if(be<le&&0>l(Ce,$))P[ve]=Ce,P[be]=$,ve=be;else break e}}return F}function l(P,F){var $=P.sortIndex-F.sortIndex;return $!==0?$:P.id-F.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var h=Date,p=h.now();o.unstable_now=function(){return h.now()-p}}var m=[],d=[],v=1,S=null,g=3,E=!1,T=!1,w=!1,y=!1,x=typeof setTimeout=="function"?setTimeout:null,z=typeof clearTimeout=="function"?clearTimeout:null,H=typeof setImmediate<"u"?setImmediate:null;function D(P){for(var F=i(d);F!==null;){if(F.callback===null)s(d);else if(F.startTime<=P)s(d),F.sortIndex=F.expirationTime,e(m,F);else break;F=i(d)}}function I(P){if(w=!1,D(P),!T)if(i(m)!==null)T=!0,L||(L=!0,Q());else{var F=i(d);F!==null&&J(I,F.startTime-P)}}var L=!1,O=-1,b=5,N=-1;function Y(){return y?!0:!(o.unstable_now()-N<b)}function k(){if(y=!1,L){var P=o.unstable_now();N=P;var F=!0;try{e:{T=!1,w&&(w=!1,z(O),O=-1),E=!0;var $=g;try{t:{for(D(P),S=i(m);S!==null&&!(S.expirationTime>P&&Y());){var ve=S.callback;if(typeof ve=="function"){S.callback=null,g=S.priorityLevel;var le=ve(S.expirationTime<=P);if(P=o.unstable_now(),typeof le=="function"){S.callback=le,D(P),F=!0;break t}S===i(m)&&s(m),D(P)}else s(m);S=i(m)}if(S!==null)F=!0;else{var C=i(d);C!==null&&J(I,C.startTime-P),F=!1}}break e}finally{S=null,g=$,E=!1}F=void 0}}finally{F?Q():L=!1}}}var Q;if(typeof H=="function")Q=function(){H(k)};else if(typeof MessageChannel<"u"){var me=new MessageChannel,Se=me.port2;me.port1.onmessage=k,Q=function(){Se.postMessage(null)}}else Q=function(){x(k,0)};function J(P,F){O=x(function(){P(o.unstable_now())},F)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(P){P.callback=null},o.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<P?Math.floor(1e3/P):5},o.unstable_getCurrentPriorityLevel=function(){return g},o.unstable_next=function(P){switch(g){case 1:case 2:case 3:var F=3;break;default:F=g}var $=g;g=F;try{return P()}finally{g=$}},o.unstable_requestPaint=function(){y=!0},o.unstable_runWithPriority=function(P,F){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var $=g;g=P;try{return F()}finally{g=$}},o.unstable_scheduleCallback=function(P,F,$){var ve=o.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?ve+$:ve):$=ve,P){case 1:var le=-1;break;case 2:le=250;break;case 5:le=1073741823;break;case 4:le=1e4;break;default:le=5e3}return le=$+le,P={id:v++,callback:F,priorityLevel:P,startTime:$,expirationTime:le,sortIndex:-1},$>ve?(P.sortIndex=$,e(d,P),i(m)===null&&P===i(d)&&(w?(z(O),O=-1):w=!0,J(I,$-ve))):(P.sortIndex=le,e(m,P),T||E||(T=!0,L||(L=!0,Q()))),P},o.unstable_shouldYield=Y,o.unstable_wrapCallback=function(P){var F=g;return function(){var $=g;g=F;try{return P.apply(this,arguments)}finally{g=$}}}})(ph)),ph}var V0;function WS(){return V0||(V0=1,dh.exports=XS()),dh.exports}var mh={exports:{}},Nn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var k0;function qS(){if(k0)return Nn;k0=1;var o=Gd();function e(m){var d="https://react.dev/errors/"+m;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)d+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+m+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,d,v){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:S==null?null:""+S,children:m,containerInfo:d,implementation:v}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,d){if(m==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return Nn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Nn.createPortal=function(m,d){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(e(299));return c(m,d,null,v)},Nn.flushSync=function(m){var d=h.T,v=s.p;try{if(h.T=null,s.p=2,m)return m()}finally{h.T=d,s.p=v,s.d.f()}},Nn.preconnect=function(m,d){typeof m=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,s.d.C(m,d))},Nn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Nn.preinit=function(m,d){if(typeof m=="string"&&d&&typeof d.as=="string"){var v=d.as,S=p(v,d.crossOrigin),g=typeof d.integrity=="string"?d.integrity:void 0,E=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;v==="style"?s.d.S(m,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:S,integrity:g,fetchPriority:E}):v==="script"&&s.d.X(m,{crossOrigin:S,integrity:g,fetchPriority:E,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},Nn.preinitModule=function(m,d){if(typeof m=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var v=p(d.as,d.crossOrigin);s.d.M(m,{crossOrigin:v,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&s.d.M(m)},Nn.preload=function(m,d){if(typeof m=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var v=d.as,S=p(v,d.crossOrigin);s.d.L(m,v,{crossOrigin:S,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},Nn.preloadModule=function(m,d){if(typeof m=="string")if(d){var v=p(d.as,d.crossOrigin);s.d.m(m,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:v,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else s.d.m(m)},Nn.requestFormReset=function(m){s.d.r(m)},Nn.unstable_batchedUpdates=function(m,d){return m(d)},Nn.useFormState=function(m,d,v){return h.H.useFormState(m,d,v)},Nn.useFormStatus=function(){return h.H.useHostTransitionStatus()},Nn.version="19.2.8",Nn}var X0;function YS(){if(X0)return mh.exports;X0=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),mh.exports=qS(),mh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var W0;function ZS(){if(W0)return Fo;W0=1;var o=WS(),e=Gd(),i=YS();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(s(188))}function d(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,r=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(r=u.return,r!==null){a=r;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),t;if(f===r)return m(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==r.return)a=u,r=f;else{for(var _=!1,R=u.child;R;){if(R===a){_=!0,a=u,r=f;break}if(R===r){_=!0,r=u,a=f;break}R=R.sibling}if(!_){for(R=f.child;R;){if(R===a){_=!0,a=f,r=u;break}if(R===r){_=!0,r=f,a=u;break}R=R.sibling}if(!_)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function v(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=v(t),n!==null)return n;t=t.sibling}return null}var S=Object.assign,g=Symbol.for("react.element"),E=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),z=Symbol.for("react.consumer"),H=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),L=Symbol.for("react.suspense_list"),O=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),N=Symbol.for("react.activity"),Y=Symbol.for("react.memo_cache_sentinel"),k=Symbol.iterator;function Q(t){return t===null||typeof t!="object"?null:(t=k&&t[k]||t["@@iterator"],typeof t=="function"?t:null)}var me=Symbol.for("react.client.reference");function Se(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===me?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case w:return"Fragment";case x:return"Profiler";case y:return"StrictMode";case I:return"Suspense";case L:return"SuspenseList";case N:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case T:return"Portal";case H:return t.displayName||"Context";case z:return(t._context.displayName||"Context")+".Consumer";case D:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case O:return n=t.displayName||null,n!==null?n:Se(t.type)||"Memo";case b:n=t._payload,t=t._init;try{return Se(t(n))}catch{}}return null}var J=Array.isArray,P=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$={pending:!1,data:null,method:null,action:null},ve=[],le=-1;function C(t){return{current:t}}function V(t){0>le||(t.current=ve[le],ve[le]=null,le--)}function _e(t,n){le++,ve[le]=t.current,t.current=n}var be=C(null),Ce=C(null),ee=C(null),Me=C(null);function de(t,n){switch(_e(ee,n),_e(Ce,t),_e(be,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?r0(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=r0(n),t=o0(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}V(be),_e(be,t)}function De(){V(be),V(Ce),V(ee)}function je(t){t.memoizedState!==null&&_e(Me,t);var n=be.current,a=o0(n,t.type);n!==a&&(_e(Ce,t),_e(be,a))}function Ge(t){Ce.current===t&&(V(be),V(Ce)),Me.current===t&&(V(Me),Oo._currentValue=$)}var Ot,it;function ut(t){if(Ot===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Ot=n&&n[1]||"",it=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ot+t+it}var ht=!1;function at(t,n){if(!t||ht)return"";ht=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var Ee=function(){throw Error()};if(Object.defineProperty(Ee.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Ee,[])}catch(ce){var oe=ce}Reflect.construct(t,[],Ee)}else{try{Ee.call()}catch(ce){oe=ce}t.call(Ee.prototype)}}else{try{throw Error()}catch(ce){oe=ce}(Ee=t())&&typeof Ee.catch=="function"&&Ee.catch(function(){})}}catch(ce){if(ce&&oe&&typeof ce.stack=="string")return[ce.stack,oe.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=r.DetermineComponentFrameRoot(),_=f[0],R=f[1];if(_&&R){var B=_.split(`
`),ne=R.split(`
`);for(u=r=0;r<B.length&&!B[r].includes("DetermineComponentFrameRoot");)r++;for(;u<ne.length&&!ne[u].includes("DetermineComponentFrameRoot");)u++;if(r===B.length||u===ne.length)for(r=B.length-1,u=ne.length-1;1<=r&&0<=u&&B[r]!==ne[u];)u--;for(;1<=r&&0<=u;r--,u--)if(B[r]!==ne[u]){if(r!==1||u!==1)do if(r--,u--,0>u||B[r]!==ne[u]){var ge=`
`+B[r].replace(" at new "," at ");return t.displayName&&ge.includes("<anonymous>")&&(ge=ge.replace("<anonymous>",t.displayName)),ge}while(1<=r&&0<=u);break}}}finally{ht=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?ut(a):""}function qt(t,n){switch(t.tag){case 26:case 27:case 5:return ut(t.type);case 16:return ut("Lazy");case 13:return t.child!==n&&n!==null?ut("Suspense Fallback"):ut("Suspense");case 19:return ut("SuspenseList");case 0:case 15:return at(t.type,!1);case 11:return at(t.type.render,!1);case 1:return at(t.type,!0);case 31:return ut("Activity");default:return""}}function Kt(t){try{var n="",a=null;do n+=qt(t,a),a=t,t=t.return;while(t);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var $t=Object.prototype.hasOwnProperty,en=o.unstable_scheduleCallback,Pt=o.unstable_cancelCallback,Qt=o.unstable_shouldYield,W=o.unstable_requestPaint,Dt=o.unstable_now,Mt=o.unstable_getCurrentPriorityLevel,U=o.unstable_ImmediatePriority,M=o.unstable_UserBlockingPriority,K=o.unstable_NormalPriority,se=o.unstable_LowPriority,he=o.unstable_IdlePriority,Ae=o.log,Ue=o.unstable_setDisableYieldValue,ue=null,fe=null;function we(t){if(typeof Ae=="function"&&Ue(t),fe&&typeof fe.setStrictMode=="function")try{fe.setStrictMode(ue,t)}catch{}}var Fe=Math.clz32?Math.clz32:Ke,Oe=Math.log,Le=Math.LN2;function Ke(t){return t>>>=0,t===0?32:31-(Oe(t)/Le|0)|0}var Qe=256,Ne=262144,G=4194304;function Te(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function pe(t,n,a){var r=t.pendingLanes;if(r===0)return 0;var u=0,f=t.suspendedLanes,_=t.pingedLanes;t=t.warmLanes;var R=r&134217727;return R!==0?(r=R&~f,r!==0?u=Te(r):(_&=R,_!==0?u=Te(_):a||(a=R&~t,a!==0&&(u=Te(a))))):(R=r&~f,R!==0?u=Te(R):_!==0?u=Te(_):a||(a=r&~t,a!==0&&(u=Te(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Re(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Ie(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ye(){var t=G;return G<<=1,(G&62914560)===0&&(G=4194304),t}function ke(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Ve(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Vt(t,n,a,r,u,f){var _=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var R=t.entanglements,B=t.expirationTimes,ne=t.hiddenUpdates;for(a=_&~a;0<a;){var ge=31-Fe(a),Ee=1<<ge;R[ge]=0,B[ge]=-1;var oe=ne[ge];if(oe!==null)for(ne[ge]=null,ge=0;ge<oe.length;ge++){var ce=oe[ge];ce!==null&&(ce.lane&=-536870913)}a&=~Ee}r!==0&&Ut(t,r,0),f!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=f&~(_&~n))}function Ut(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var r=31-Fe(n);t.entangledLanes|=n,t.entanglements[r]=t.entanglements[r]|1073741824|a&261930}function Un(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var r=31-Fe(a),u=1<<r;u&n|t[r]&n&&(t[r]|=n),a&=~u}}function ei(t,n){var a=n&-n;return a=(a&42)!==0?1:Yr(a),(a&(t.suspendedLanes|n))!==0?0:a}function Yr(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Zr(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Kr(){var t=F.p;return t!==0?t:(t=window.event,t===void 0?32:D0(t.type))}function Hs(t,n){var a=F.p;try{return F.p=t,n()}finally{F.p=a}}var Ii=Math.random().toString(36).slice(2),fn="__reactFiber$"+Ii,Tn="__reactProps$"+Ii,Vn="__reactContainer$"+Ii,os="__reactEvents$"+Ii,il="__reactListeners$"+Ii,al="__reactHandles$"+Ii,ls="__reactResources$"+Ii,Ta="__reactMarker$"+Ii;function Aa(t){delete t[fn],delete t[Tn],delete t[os],delete t[il],delete t[al]}function Qi(t){var n=t[fn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Vn]||a[fn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=p0(t);t!==null;){if(a=t[fn])return a;t=p0(t)}return n}t=a,a=t.parentNode}return null}function Ji(t){if(t=t[fn]||t[Vn]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function cs(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function Ra(t){var n=t[ls];return n||(n=t[ls]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function hn(t){t[Ta]=!0}var sl=new Set,A={};function q(t,n){re(t,n),re(t+"Capture",n)}function re(t,n){for(A[t]=n,t=0;t<n.length;t++)sl.add(n[t])}var ie=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ae={},ze={};function Xe(t){return $t.call(ze,t)?!0:$t.call(ae,t)?!1:ie.test(t)?ze[t]=!0:(ae[t]=!0,!1)}function Pe(t,n,a){if(Xe(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function qe(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function We(t,n,a,r){if(r===null)t.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+r)}}function $e(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function lt(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Je(t,n,a){var r=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var u=r.get,f=r.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(_){a=""+_,f.call(this,_)}}),Object.defineProperty(t,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(_){a=""+_},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Rt(t){if(!t._valueTracker){var n=lt(t)?"checked":"value";t._valueTracker=Je(t,n,""+t[n])}}function tn(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return t&&(r=lt(t)?t.checked?"true":"false":t.value),t=r,t!==a?(n.setValue(t),!0):!1}function Yt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var It=/[\n"\\]/g;function zt(t){return t.replace(It,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function He(t,n,a,r,u,f,_,R){t.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?t.type=_:t.removeAttribute("type"),n!=null?_==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+$e(n)):t.value!==""+$e(n)&&(t.value=""+$e(n)):_!=="submit"&&_!=="reset"||t.removeAttribute("value"),n!=null?mt(t,_,$e(n)):a!=null?mt(t,_,$e(a)):r!=null&&t.removeAttribute("value"),u==null&&f!=null&&(t.defaultChecked=!!f),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?t.name=""+$e(R):t.removeAttribute("name")}function Ln(t,n,a,r,u,f,_,R){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Rt(t);return}a=a!=null?""+$e(a):"",n=n!=null?""+$e(n):a,R||n===t.value||(t.value=n),t.defaultValue=n}r=r??u,r=typeof r!="function"&&typeof r!="symbol"&&!!r,t.checked=R?t.checked:!!r,t.defaultChecked=!!r,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(t.name=_),Rt(t)}function mt(t,n,a){n==="number"&&Yt(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function vn(t,n,a,r){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&r&&(t[a].defaultSelected=!0)}else{for(a=""+$e(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,r&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function ti(t,n,a){if(n!=null&&(n=""+$e(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+$e(a):""}function Ti(t,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(J(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=$e(n),t.defaultValue=a,r=t.textContent,r===a&&r!==""&&r!==null&&(t.value=r),Rt(t)}function ni(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Bt=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function nn(t,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":r?t.setProperty(n,a):typeof a!="number"||a===0||Bt.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Ai(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="");for(var u in n)r=n[u],n.hasOwnProperty(u)&&a[u]!==r&&nn(t,u,r)}else for(var f in n)n.hasOwnProperty(f)&&nn(t,f,n[f])}function Nt(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var zi=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ca=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function us(t){return Ca.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function ji(){}var ru=null;function ou(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Gs=null,Vs=null;function sp(t){var n=Ji(t);if(n&&(t=n.stateNode)){var a=t[Tn]||null;e:switch(t=n.stateNode,n.type){case"input":if(He(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+zt(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==t&&r.form===t.form){var u=r[Tn]||null;if(!u)throw Error(s(90));He(r,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===t.form&&tn(r)}break e;case"textarea":ti(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&vn(t,!!a.multiple,n,!1)}}}var lu=!1;function rp(t,n,a){if(lu)return t(n,a);lu=!0;try{var r=t(n);return r}finally{if(lu=!1,(Gs!==null||Vs!==null)&&(ql(),Gs&&(n=Gs,t=Vs,Vs=Gs=null,sp(n),t)))for(n=0;n<t.length;n++)sp(t[n])}}function Qr(t,n){var a=t.stateNode;if(a===null)return null;var r=a[Tn]||null;if(r===null)return null;a=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var $i=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),cu=!1;if($i)try{var Jr={};Object.defineProperty(Jr,"passive",{get:function(){cu=!0}}),window.addEventListener("test",Jr,Jr),window.removeEventListener("test",Jr,Jr)}catch{cu=!1}var wa=null,uu=null,rl=null;function op(){if(rl)return rl;var t,n=uu,a=n.length,r,u="value"in wa?wa.value:wa.textContent,f=u.length;for(t=0;t<a&&n[t]===u[t];t++);var _=a-t;for(r=1;r<=_&&n[a-r]===u[f-r];r++);return rl=u.slice(t,1<r?1-r:void 0)}function ol(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function ll(){return!0}function lp(){return!1}function kn(t){function n(a,r,u,f,_){this._reactName=a,this._targetInst=u,this.type=r,this.nativeEvent=f,this.target=_,this.currentTarget=null;for(var R in t)t.hasOwnProperty(R)&&(a=t[R],this[R]=a?a(f):f[R]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?ll:lp,this.isPropagationStopped=lp,this}return S(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ll)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ll)},persist:function(){},isPersistent:ll}),n}var fs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cl=kn(fs),jr=S({},fs,{view:0,detail:0}),Bv=kn(jr),fu,hu,$r,ul=S({},jr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:pu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==$r&&($r&&t.type==="mousemove"?(fu=t.screenX-$r.screenX,hu=t.screenY-$r.screenY):hu=fu=0,$r=t),fu)},movementY:function(t){return"movementY"in t?t.movementY:hu}}),cp=kn(ul),Fv=S({},ul,{dataTransfer:0}),Hv=kn(Fv),Gv=S({},jr,{relatedTarget:0}),du=kn(Gv),Vv=S({},fs,{animationName:0,elapsedTime:0,pseudoElement:0}),kv=kn(Vv),Xv=S({},fs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Wv=kn(Xv),qv=S({},fs,{data:0}),up=kn(qv),Yv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Zv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Kv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Qv(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Kv[t])?!!n[t]:!1}function pu(){return Qv}var Jv=S({},jr,{key:function(t){if(t.key){var n=Yv[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=ol(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Zv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:pu,charCode:function(t){return t.type==="keypress"?ol(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ol(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),jv=kn(Jv),$v=S({},ul,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),fp=kn($v),ex=S({},jr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:pu}),tx=kn(ex),nx=S({},fs,{propertyName:0,elapsedTime:0,pseudoElement:0}),ix=kn(nx),ax=S({},ul,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),sx=kn(ax),rx=S({},fs,{newState:0,oldState:0}),ox=kn(rx),lx=[9,13,27,32],mu=$i&&"CompositionEvent"in window,eo=null;$i&&"documentMode"in document&&(eo=document.documentMode);var cx=$i&&"TextEvent"in window&&!eo,hp=$i&&(!mu||eo&&8<eo&&11>=eo),dp=" ",pp=!1;function mp(t,n){switch(t){case"keyup":return lx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function gp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ks=!1;function ux(t,n){switch(t){case"compositionend":return gp(n);case"keypress":return n.which!==32?null:(pp=!0,dp);case"textInput":return t=n.data,t===dp&&pp?null:t;default:return null}}function fx(t,n){if(ks)return t==="compositionend"||!mu&&mp(t,n)?(t=op(),rl=uu=wa=null,ks=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return hp&&n.locale!=="ko"?null:n.data;default:return null}}var hx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _p(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!hx[t.type]:n==="textarea"}function vp(t,n,a,r){Gs?Vs?Vs.push(r):Vs=[r]:Gs=r,n=$l(n,"onChange"),0<n.length&&(a=new cl("onChange","change",null,a,r),t.push({event:a,listeners:n}))}var to=null,no=null;function dx(t){e0(t,0)}function fl(t){var n=cs(t);if(tn(n))return t}function xp(t,n){if(t==="change")return n}var Sp=!1;if($i){var gu;if($i){var _u="oninput"in document;if(!_u){var Mp=document.createElement("div");Mp.setAttribute("oninput","return;"),_u=typeof Mp.oninput=="function"}gu=_u}else gu=!1;Sp=gu&&(!document.documentMode||9<document.documentMode)}function yp(){to&&(to.detachEvent("onpropertychange",Ep),no=to=null)}function Ep(t){if(t.propertyName==="value"&&fl(no)){var n=[];vp(n,no,t,ou(t)),rp(dx,n)}}function px(t,n,a){t==="focusin"?(yp(),to=n,no=a,to.attachEvent("onpropertychange",Ep)):t==="focusout"&&yp()}function mx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return fl(no)}function gx(t,n){if(t==="click")return fl(n)}function _x(t,n){if(t==="input"||t==="change")return fl(n)}function vx(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var ii=typeof Object.is=="function"?Object.is:vx;function io(t,n){if(ii(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var u=a[r];if(!$t.call(n,u)||!ii(t[u],n[u]))return!1}return!0}function bp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Tp(t,n){var a=bp(t);t=0;for(var r;a;){if(a.nodeType===3){if(r=t+a.textContent.length,t<=n&&r>=n)return{node:a,offset:n-t};t=r}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=bp(a)}}function Ap(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Ap(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Rp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Yt(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Yt(t.document)}return n}function vu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var xx=$i&&"documentMode"in document&&11>=document.documentMode,Xs=null,xu=null,ao=null,Su=!1;function Cp(t,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Su||Xs==null||Xs!==Yt(r)||(r=Xs,"selectionStart"in r&&vu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ao&&io(ao,r)||(ao=r,r=$l(xu,"onSelect"),0<r.length&&(n=new cl("onSelect","select",null,n,a),t.push({event:n,listeners:r}),n.target=Xs)))}function hs(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Ws={animationend:hs("Animation","AnimationEnd"),animationiteration:hs("Animation","AnimationIteration"),animationstart:hs("Animation","AnimationStart"),transitionrun:hs("Transition","TransitionRun"),transitionstart:hs("Transition","TransitionStart"),transitioncancel:hs("Transition","TransitionCancel"),transitionend:hs("Transition","TransitionEnd")},Mu={},wp={};$i&&(wp=document.createElement("div").style,"AnimationEvent"in window||(delete Ws.animationend.animation,delete Ws.animationiteration.animation,delete Ws.animationstart.animation),"TransitionEvent"in window||delete Ws.transitionend.transition);function ds(t){if(Mu[t])return Mu[t];if(!Ws[t])return t;var n=Ws[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in wp)return Mu[t]=n[a];return t}var Dp=ds("animationend"),Up=ds("animationiteration"),Lp=ds("animationstart"),Sx=ds("transitionrun"),Mx=ds("transitionstart"),yx=ds("transitioncancel"),Np=ds("transitionend"),Op=new Map,yu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");yu.push("scrollEnd");function Ri(t,n){Op.set(t,n),q(n,[t])}var hl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},di=[],qs=0,Eu=0;function dl(){for(var t=qs,n=Eu=qs=0;n<t;){var a=di[n];di[n++]=null;var r=di[n];di[n++]=null;var u=di[n];di[n++]=null;var f=di[n];if(di[n++]=null,r!==null&&u!==null){var _=r.pending;_===null?u.next=u:(u.next=_.next,_.next=u),r.pending=u}f!==0&&Pp(a,u,f)}}function pl(t,n,a,r){di[qs++]=t,di[qs++]=n,di[qs++]=a,di[qs++]=r,Eu|=r,t.lanes|=r,t=t.alternate,t!==null&&(t.lanes|=r)}function bu(t,n,a,r){return pl(t,n,a,r),ml(t)}function ps(t,n){return pl(t,null,null,n),ml(t)}function Pp(t,n,a){t.lanes|=a;var r=t.alternate;r!==null&&(r.lanes|=a);for(var u=!1,f=t.return;f!==null;)f.childLanes|=a,r=f.alternate,r!==null&&(r.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(u=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,u&&n!==null&&(u=31-Fe(a),t=f.hiddenUpdates,r=t[u],r===null?t[u]=[n]:r.push(n),n.lane=a|536870912),f):null}function ml(t){if(50<Ro)throw Ro=0,Of=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Ys={};function Ex(t,n,a,r){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ai(t,n,a,r){return new Ex(t,n,a,r)}function Tu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ea(t,n){var a=t.alternate;return a===null?(a=ai(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Ip(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function gl(t,n,a,r,u,f){var _=0;if(r=t,typeof t=="function")Tu(t)&&(_=1);else if(typeof t=="string")_=CS(t,a,be.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case N:return t=ai(31,a,n,u),t.elementType=N,t.lanes=f,t;case w:return ms(a.children,u,f,n);case y:_=8,u|=24;break;case x:return t=ai(12,a,n,u|2),t.elementType=x,t.lanes=f,t;case I:return t=ai(13,a,n,u),t.elementType=I,t.lanes=f,t;case L:return t=ai(19,a,n,u),t.elementType=L,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case H:_=10;break e;case z:_=9;break e;case D:_=11;break e;case O:_=14;break e;case b:_=16,r=null;break e}_=29,a=Error(s(130,t===null?"null":typeof t,"")),r=null}return n=ai(_,a,n,u),n.elementType=t,n.type=r,n.lanes=f,n}function ms(t,n,a,r){return t=ai(7,t,r,n),t.lanes=a,t}function Au(t,n,a){return t=ai(6,t,null,n),t.lanes=a,t}function zp(t){var n=ai(18,null,null,0);return n.stateNode=t,n}function Ru(t,n,a){return n=ai(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Bp=new WeakMap;function pi(t,n){if(typeof t=="object"&&t!==null){var a=Bp.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Kt(n)},Bp.set(t,n),n)}return{value:t,source:n,stack:Kt(n)}}var Zs=[],Ks=0,_l=null,so=0,mi=[],gi=0,Da=null,Bi=1,Fi="";function ta(t,n){Zs[Ks++]=so,Zs[Ks++]=_l,_l=t,so=n}function Fp(t,n,a){mi[gi++]=Bi,mi[gi++]=Fi,mi[gi++]=Da,Da=t;var r=Bi;t=Fi;var u=32-Fe(r)-1;r&=~(1<<u),a+=1;var f=32-Fe(n)+u;if(30<f){var _=u-u%5;f=(r&(1<<_)-1).toString(32),r>>=_,u-=_,Bi=1<<32-Fe(n)+u|a<<u|r,Fi=f+t}else Bi=1<<f|a<<u|r,Fi=t}function Cu(t){t.return!==null&&(ta(t,1),Fp(t,1,0))}function wu(t){for(;t===_l;)_l=Zs[--Ks],Zs[Ks]=null,so=Zs[--Ks],Zs[Ks]=null;for(;t===Da;)Da=mi[--gi],mi[gi]=null,Fi=mi[--gi],mi[gi]=null,Bi=mi[--gi],mi[gi]=null}function Hp(t,n){mi[gi++]=Bi,mi[gi++]=Fi,mi[gi++]=Da,Bi=n.id,Fi=n.overflow,Da=t}var An=null,Jt=null,yt=!1,Ua=null,_i=!1,Du=Error(s(519));function La(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ro(pi(n,t)),Du}function Gp(t){var n=t.stateNode,a=t.type,r=t.memoizedProps;switch(n[fn]=t,n[Tn]=r,a){case"dialog":_t("cancel",n),_t("close",n);break;case"iframe":case"object":case"embed":_t("load",n);break;case"video":case"audio":for(a=0;a<wo.length;a++)_t(wo[a],n);break;case"source":_t("error",n);break;case"img":case"image":case"link":_t("error",n),_t("load",n);break;case"details":_t("toggle",n);break;case"input":_t("invalid",n),Ln(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":_t("invalid",n);break;case"textarea":_t("invalid",n),Ti(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||a0(n.textContent,a)?(r.popover!=null&&(_t("beforetoggle",n),_t("toggle",n)),r.onScroll!=null&&_t("scroll",n),r.onScrollEnd!=null&&_t("scrollend",n),r.onClick!=null&&(n.onclick=ji),n=!0):n=!1,n||La(t,!0)}function Vp(t){for(An=t.return;An;)switch(An.tag){case 5:case 31:case 13:_i=!1;return;case 27:case 3:_i=!0;return;default:An=An.return}}function Qs(t){if(t!==An)return!1;if(!yt)return Vp(t),yt=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Kf(t.type,t.memoizedProps)),a=!a),a&&Jt&&La(t),Vp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Jt=d0(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Jt=d0(t)}else n===27?(n=Jt,qa(t.type)?(t=eh,eh=null,Jt=t):Jt=n):Jt=An?xi(t.stateNode.nextSibling):null;return!0}function gs(){Jt=An=null,yt=!1}function Uu(){var t=Ua;return t!==null&&(Yn===null?Yn=t:Yn.push.apply(Yn,t),Ua=null),t}function ro(t){Ua===null?Ua=[t]:Ua.push(t)}var Lu=C(null),_s=null,na=null;function Na(t,n,a){_e(Lu,n._currentValue),n._currentValue=a}function ia(t){t._currentValue=Lu.current,V(Lu)}function Nu(t,n,a){for(;t!==null;){var r=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),t===a)break;t=t.return}}function Ou(t,n,a,r){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var f=u.dependencies;if(f!==null){var _=u.child;f=f.firstContext;e:for(;f!==null;){var R=f;f=u;for(var B=0;B<n.length;B++)if(R.context===n[B]){f.lanes|=a,R=f.alternate,R!==null&&(R.lanes|=a),Nu(f.return,a,t),r||(_=null);break e}f=R.next}}else if(u.tag===18){if(_=u.return,_===null)throw Error(s(341));_.lanes|=a,f=_.alternate,f!==null&&(f.lanes|=a),Nu(_,a,t),_=null}else _=u.child;if(_!==null)_.return=u;else for(_=u;_!==null;){if(_===t){_=null;break}if(u=_.sibling,u!==null){u.return=_.return,_=u;break}_=_.return}u=_}}function Js(t,n,a,r){t=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var _=u.alternate;if(_===null)throw Error(s(387));if(_=_.memoizedProps,_!==null){var R=u.type;ii(u.pendingProps.value,_.value)||(t!==null?t.push(R):t=[R])}}else if(u===Me.current){if(_=u.alternate,_===null)throw Error(s(387));_.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Oo):t=[Oo])}u=u.return}t!==null&&Ou(n,t,a,r),n.flags|=262144}function vl(t){for(t=t.firstContext;t!==null;){if(!ii(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function vs(t){_s=t,na=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Rn(t){return kp(_s,t)}function xl(t,n){return _s===null&&vs(t),kp(t,n)}function kp(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},na===null){if(t===null)throw Error(s(308));na=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else na=na.next=n;return a}var bx=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,r){t.push(r)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},Tx=o.unstable_scheduleCallback,Ax=o.unstable_NormalPriority,dn={$$typeof:H,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Pu(){return{controller:new bx,data:new Map,refCount:0}}function oo(t){t.refCount--,t.refCount===0&&Tx(Ax,function(){t.controller.abort()})}var lo=null,Iu=0,js=0,$s=null;function Rx(t,n){if(lo===null){var a=lo=[];Iu=0,js=Hf(),$s={status:"pending",value:void 0,then:function(r){a.push(r)}}}return Iu++,n.then(Xp,Xp),n}function Xp(){if(--Iu===0&&lo!==null){$s!==null&&($s.status="fulfilled");var t=lo;lo=null,js=0,$s=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function Cx(t,n){var a=[],r={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){r.status="fulfilled",r.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(r.status="rejected",r.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),r}var Wp=P.S;P.S=function(t,n){Cg=Dt(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Rx(t,n),Wp!==null&&Wp(t,n)};var xs=C(null);function zu(){var t=xs.current;return t!==null?t:Zt.pooledCache}function Sl(t,n){n===null?_e(xs,xs.current):_e(xs,n.pool)}function qp(){var t=zu();return t===null?null:{parent:dn._currentValue,pool:t}}var er=Error(s(460)),Bu=Error(s(474)),Ml=Error(s(542)),yl={then:function(){}};function Yp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Zp(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(ji,ji),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Qp(t),t;default:if(typeof n.status=="string")n.then(ji,ji);else{if(t=Zt,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(r){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=r}},function(r){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Qp(t),t}throw Ms=n,er}}function Ss(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ms=a,er):a}}var Ms=null;function Kp(){if(Ms===null)throw Error(s(459));var t=Ms;return Ms=null,t}function Qp(t){if(t===er||t===Ml)throw Error(s(483))}var tr=null,co=0;function El(t){var n=co;return co+=1,tr===null&&(tr=[]),Zp(tr,t,n)}function uo(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function bl(t,n){throw n.$$typeof===g?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Jp(t){function n(Z,X){if(t){var te=Z.deletions;te===null?(Z.deletions=[X],Z.flags|=16):te.push(X)}}function a(Z,X){if(!t)return null;for(;X!==null;)n(Z,X),X=X.sibling;return null}function r(Z){for(var X=new Map;Z!==null;)Z.key!==null?X.set(Z.key,Z):X.set(Z.index,Z),Z=Z.sibling;return X}function u(Z,X){return Z=ea(Z,X),Z.index=0,Z.sibling=null,Z}function f(Z,X,te){return Z.index=te,t?(te=Z.alternate,te!==null?(te=te.index,te<X?(Z.flags|=67108866,X):te):(Z.flags|=67108866,X)):(Z.flags|=1048576,X)}function _(Z){return t&&Z.alternate===null&&(Z.flags|=67108866),Z}function R(Z,X,te,xe){return X===null||X.tag!==6?(X=Au(te,Z.mode,xe),X.return=Z,X):(X=u(X,te),X.return=Z,X)}function B(Z,X,te,xe){var et=te.type;return et===w?ge(Z,X,te.props.children,xe,te.key):X!==null&&(X.elementType===et||typeof et=="object"&&et!==null&&et.$$typeof===b&&Ss(et)===X.type)?(X=u(X,te.props),uo(X,te),X.return=Z,X):(X=gl(te.type,te.key,te.props,null,Z.mode,xe),uo(X,te),X.return=Z,X)}function ne(Z,X,te,xe){return X===null||X.tag!==4||X.stateNode.containerInfo!==te.containerInfo||X.stateNode.implementation!==te.implementation?(X=Ru(te,Z.mode,xe),X.return=Z,X):(X=u(X,te.children||[]),X.return=Z,X)}function ge(Z,X,te,xe,et){return X===null||X.tag!==7?(X=ms(te,Z.mode,xe,et),X.return=Z,X):(X=u(X,te),X.return=Z,X)}function Ee(Z,X,te){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=Au(""+X,Z.mode,te),X.return=Z,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case E:return te=gl(X.type,X.key,X.props,null,Z.mode,te),uo(te,X),te.return=Z,te;case T:return X=Ru(X,Z.mode,te),X.return=Z,X;case b:return X=Ss(X),Ee(Z,X,te)}if(J(X)||Q(X))return X=ms(X,Z.mode,te,null),X.return=Z,X;if(typeof X.then=="function")return Ee(Z,El(X),te);if(X.$$typeof===H)return Ee(Z,xl(Z,X),te);bl(Z,X)}return null}function oe(Z,X,te,xe){var et=X!==null?X.key:null;if(typeof te=="string"&&te!==""||typeof te=="number"||typeof te=="bigint")return et!==null?null:R(Z,X,""+te,xe);if(typeof te=="object"&&te!==null){switch(te.$$typeof){case E:return te.key===et?B(Z,X,te,xe):null;case T:return te.key===et?ne(Z,X,te,xe):null;case b:return te=Ss(te),oe(Z,X,te,xe)}if(J(te)||Q(te))return et!==null?null:ge(Z,X,te,xe,null);if(typeof te.then=="function")return oe(Z,X,El(te),xe);if(te.$$typeof===H)return oe(Z,X,xl(Z,te),xe);bl(Z,te)}return null}function ce(Z,X,te,xe,et){if(typeof xe=="string"&&xe!==""||typeof xe=="number"||typeof xe=="bigint")return Z=Z.get(te)||null,R(X,Z,""+xe,et);if(typeof xe=="object"&&xe!==null){switch(xe.$$typeof){case E:return Z=Z.get(xe.key===null?te:xe.key)||null,B(X,Z,xe,et);case T:return Z=Z.get(xe.key===null?te:xe.key)||null,ne(X,Z,xe,et);case b:return xe=Ss(xe),ce(Z,X,te,xe,et)}if(J(xe)||Q(xe))return Z=Z.get(te)||null,ge(X,Z,xe,et,null);if(typeof xe.then=="function")return ce(Z,X,te,El(xe),et);if(xe.$$typeof===H)return ce(Z,X,te,xl(X,xe),et);bl(X,xe)}return null}function Ye(Z,X,te,xe){for(var et=null,Ct=null,Ze=X,ft=X=0,St=null;Ze!==null&&ft<te.length;ft++){Ze.index>ft?(St=Ze,Ze=null):St=Ze.sibling;var wt=oe(Z,Ze,te[ft],xe);if(wt===null){Ze===null&&(Ze=St);break}t&&Ze&&wt.alternate===null&&n(Z,Ze),X=f(wt,X,ft),Ct===null?et=wt:Ct.sibling=wt,Ct=wt,Ze=St}if(ft===te.length)return a(Z,Ze),yt&&ta(Z,ft),et;if(Ze===null){for(;ft<te.length;ft++)Ze=Ee(Z,te[ft],xe),Ze!==null&&(X=f(Ze,X,ft),Ct===null?et=Ze:Ct.sibling=Ze,Ct=Ze);return yt&&ta(Z,ft),et}for(Ze=r(Ze);ft<te.length;ft++)St=ce(Ze,Z,ft,te[ft],xe),St!==null&&(t&&St.alternate!==null&&Ze.delete(St.key===null?ft:St.key),X=f(St,X,ft),Ct===null?et=St:Ct.sibling=St,Ct=St);return t&&Ze.forEach(function(Ja){return n(Z,Ja)}),yt&&ta(Z,ft),et}function tt(Z,X,te,xe){if(te==null)throw Error(s(151));for(var et=null,Ct=null,Ze=X,ft=X=0,St=null,wt=te.next();Ze!==null&&!wt.done;ft++,wt=te.next()){Ze.index>ft?(St=Ze,Ze=null):St=Ze.sibling;var Ja=oe(Z,Ze,wt.value,xe);if(Ja===null){Ze===null&&(Ze=St);break}t&&Ze&&Ja.alternate===null&&n(Z,Ze),X=f(Ja,X,ft),Ct===null?et=Ja:Ct.sibling=Ja,Ct=Ja,Ze=St}if(wt.done)return a(Z,Ze),yt&&ta(Z,ft),et;if(Ze===null){for(;!wt.done;ft++,wt=te.next())wt=Ee(Z,wt.value,xe),wt!==null&&(X=f(wt,X,ft),Ct===null?et=wt:Ct.sibling=wt,Ct=wt);return yt&&ta(Z,ft),et}for(Ze=r(Ze);!wt.done;ft++,wt=te.next())wt=ce(Ze,Z,ft,wt.value,xe),wt!==null&&(t&&wt.alternate!==null&&Ze.delete(wt.key===null?ft:wt.key),X=f(wt,X,ft),Ct===null?et=wt:Ct.sibling=wt,Ct=wt);return t&&Ze.forEach(function(FS){return n(Z,FS)}),yt&&ta(Z,ft),et}function Wt(Z,X,te,xe){if(typeof te=="object"&&te!==null&&te.type===w&&te.key===null&&(te=te.props.children),typeof te=="object"&&te!==null){switch(te.$$typeof){case E:e:{for(var et=te.key;X!==null;){if(X.key===et){if(et=te.type,et===w){if(X.tag===7){a(Z,X.sibling),xe=u(X,te.props.children),xe.return=Z,Z=xe;break e}}else if(X.elementType===et||typeof et=="object"&&et!==null&&et.$$typeof===b&&Ss(et)===X.type){a(Z,X.sibling),xe=u(X,te.props),uo(xe,te),xe.return=Z,Z=xe;break e}a(Z,X);break}else n(Z,X);X=X.sibling}te.type===w?(xe=ms(te.props.children,Z.mode,xe,te.key),xe.return=Z,Z=xe):(xe=gl(te.type,te.key,te.props,null,Z.mode,xe),uo(xe,te),xe.return=Z,Z=xe)}return _(Z);case T:e:{for(et=te.key;X!==null;){if(X.key===et)if(X.tag===4&&X.stateNode.containerInfo===te.containerInfo&&X.stateNode.implementation===te.implementation){a(Z,X.sibling),xe=u(X,te.children||[]),xe.return=Z,Z=xe;break e}else{a(Z,X);break}else n(Z,X);X=X.sibling}xe=Ru(te,Z.mode,xe),xe.return=Z,Z=xe}return _(Z);case b:return te=Ss(te),Wt(Z,X,te,xe)}if(J(te))return Ye(Z,X,te,xe);if(Q(te)){if(et=Q(te),typeof et!="function")throw Error(s(150));return te=et.call(te),tt(Z,X,te,xe)}if(typeof te.then=="function")return Wt(Z,X,El(te),xe);if(te.$$typeof===H)return Wt(Z,X,xl(Z,te),xe);bl(Z,te)}return typeof te=="string"&&te!==""||typeof te=="number"||typeof te=="bigint"?(te=""+te,X!==null&&X.tag===6?(a(Z,X.sibling),xe=u(X,te),xe.return=Z,Z=xe):(a(Z,X),xe=Au(te,Z.mode,xe),xe.return=Z,Z=xe),_(Z)):a(Z,X)}return function(Z,X,te,xe){try{co=0;var et=Wt(Z,X,te,xe);return tr=null,et}catch(Ze){if(Ze===er||Ze===Ml)throw Ze;var Ct=ai(29,Ze,null,Z.mode);return Ct.lanes=xe,Ct.return=Z,Ct}finally{}}}var ys=Jp(!0),jp=Jp(!1),Oa=!1;function Fu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Hu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Pa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ia(t,n,a){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(Lt&2)!==0){var u=r.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),r.pending=n,n=ml(t),Pp(t,null,a),n}return pl(t,r,n,a),ml(t)}function fo(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,Un(t,a)}}function Gu(t,n){var a=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var _={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=_:f=f.next=_,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:r.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:r.shared,callbacks:r.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Vu=!1;function ho(){if(Vu){var t=$s;if(t!==null)throw t}}function po(t,n,a,r){Vu=!1;var u=t.updateQueue;Oa=!1;var f=u.firstBaseUpdate,_=u.lastBaseUpdate,R=u.shared.pending;if(R!==null){u.shared.pending=null;var B=R,ne=B.next;B.next=null,_===null?f=ne:_.next=ne,_=B;var ge=t.alternate;ge!==null&&(ge=ge.updateQueue,R=ge.lastBaseUpdate,R!==_&&(R===null?ge.firstBaseUpdate=ne:R.next=ne,ge.lastBaseUpdate=B))}if(f!==null){var Ee=u.baseState;_=0,ge=ne=B=null,R=f;do{var oe=R.lane&-536870913,ce=oe!==R.lane;if(ce?(xt&oe)===oe:(r&oe)===oe){oe!==0&&oe===js&&(Vu=!0),ge!==null&&(ge=ge.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});e:{var Ye=t,tt=R;oe=n;var Wt=a;switch(tt.tag){case 1:if(Ye=tt.payload,typeof Ye=="function"){Ee=Ye.call(Wt,Ee,oe);break e}Ee=Ye;break e;case 3:Ye.flags=Ye.flags&-65537|128;case 0:if(Ye=tt.payload,oe=typeof Ye=="function"?Ye.call(Wt,Ee,oe):Ye,oe==null)break e;Ee=S({},Ee,oe);break e;case 2:Oa=!0}}oe=R.callback,oe!==null&&(t.flags|=64,ce&&(t.flags|=8192),ce=u.callbacks,ce===null?u.callbacks=[oe]:ce.push(oe))}else ce={lane:oe,tag:R.tag,payload:R.payload,callback:R.callback,next:null},ge===null?(ne=ge=ce,B=Ee):ge=ge.next=ce,_|=oe;if(R=R.next,R===null){if(R=u.shared.pending,R===null)break;ce=R,R=ce.next,ce.next=null,u.lastBaseUpdate=ce,u.shared.pending=null}}while(!0);ge===null&&(B=Ee),u.baseState=B,u.firstBaseUpdate=ne,u.lastBaseUpdate=ge,f===null&&(u.shared.lanes=0),Ga|=_,t.lanes=_,t.memoizedState=Ee}}function $p(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function em(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)$p(a[t],n)}var nr=C(null),Tl=C(0);function tm(t,n){t=ha,_e(Tl,t),_e(nr,n),ha=t|n.baseLanes}function ku(){_e(Tl,ha),_e(nr,nr.current)}function Xu(){ha=Tl.current,V(nr),V(Tl)}var si=C(null),vi=null;function za(t){var n=t.alternate;_e(ln,ln.current&1),_e(si,t),vi===null&&(n===null||nr.current!==null||n.memoizedState!==null)&&(vi=t)}function Wu(t){_e(ln,ln.current),_e(si,t),vi===null&&(vi=t)}function nm(t){t.tag===22?(_e(ln,ln.current),_e(si,t),vi===null&&(vi=t)):Ba()}function Ba(){_e(ln,ln.current),_e(si,si.current)}function ri(t){V(si),vi===t&&(vi=null),V(ln)}var ln=C(0);function Al(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||jf(a)||$f(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var aa=0,ct=null,kt=null,pn=null,Rl=!1,ir=!1,Es=!1,Cl=0,mo=0,ar=null,wx=0;function sn(){throw Error(s(321))}function qu(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!ii(t[a],n[a]))return!1;return!0}function Yu(t,n,a,r,u,f){return aa=f,ct=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,P.H=t===null||t.memoizedState===null?Fm:cf,Es=!1,f=a(r,u),Es=!1,ir&&(f=am(n,a,r,u)),im(t),f}function im(t){P.H=vo;var n=kt!==null&&kt.next!==null;if(aa=0,pn=kt=ct=null,Rl=!1,mo=0,ar=null,n)throw Error(s(300));t===null||mn||(t=t.dependencies,t!==null&&vl(t)&&(mn=!0))}function am(t,n,a,r){ct=t;var u=0;do{if(ir&&(ar=null),mo=0,ir=!1,25<=u)throw Error(s(301));if(u+=1,pn=kt=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}P.H=Hm,f=n(a,r)}while(ir);return f}function Dx(){var t=P.H,n=t.useState()[0];return n=typeof n.then=="function"?go(n):n,t=t.useState()[0],(kt!==null?kt.memoizedState:null)!==t&&(ct.flags|=1024),n}function Zu(){var t=Cl!==0;return Cl=0,t}function Ku(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Qu(t){if(Rl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Rl=!1}aa=0,pn=kt=ct=null,ir=!1,mo=Cl=0,ar=null}function Fn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pn===null?ct.memoizedState=pn=t:pn=pn.next=t,pn}function cn(){if(kt===null){var t=ct.alternate;t=t!==null?t.memoizedState:null}else t=kt.next;var n=pn===null?ct.memoizedState:pn.next;if(n!==null)pn=n,kt=t;else{if(t===null)throw ct.alternate===null?Error(s(467)):Error(s(310));kt=t,t={memoizedState:kt.memoizedState,baseState:kt.baseState,baseQueue:kt.baseQueue,queue:kt.queue,next:null},pn===null?ct.memoizedState=pn=t:pn=pn.next=t}return pn}function wl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function go(t){var n=mo;return mo+=1,ar===null&&(ar=[]),t=Zp(ar,t,n),n=ct,(pn===null?n.memoizedState:pn.next)===null&&(n=n.alternate,P.H=n===null||n.memoizedState===null?Fm:cf),t}function Dl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return go(t);if(t.$$typeof===H)return Rn(t)}throw Error(s(438,String(t)))}function Ju(t){var n=null,a=ct.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=ct.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=wl(),ct.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),r=0;r<t;r++)a[r]=Y;return n.index++,a}function sa(t,n){return typeof n=="function"?n(t):n}function Ul(t){var n=cn();return ju(n,kt,t)}function ju(t,n,a){var r=t.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var u=t.baseQueue,f=r.pending;if(f!==null){if(u!==null){var _=u.next;u.next=f.next,f.next=_}n.baseQueue=u=f,r.pending=null}if(f=t.baseState,u===null)t.memoizedState=f;else{n=u.next;var R=_=null,B=null,ne=n,ge=!1;do{var Ee=ne.lane&-536870913;if(Ee!==ne.lane?(xt&Ee)===Ee:(aa&Ee)===Ee){var oe=ne.revertLane;if(oe===0)B!==null&&(B=B.next={lane:0,revertLane:0,gesture:null,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null}),Ee===js&&(ge=!0);else if((aa&oe)===oe){ne=ne.next,oe===js&&(ge=!0);continue}else Ee={lane:0,revertLane:ne.revertLane,gesture:null,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null},B===null?(R=B=Ee,_=f):B=B.next=Ee,ct.lanes|=oe,Ga|=oe;Ee=ne.action,Es&&a(f,Ee),f=ne.hasEagerState?ne.eagerState:a(f,Ee)}else oe={lane:Ee,revertLane:ne.revertLane,gesture:ne.gesture,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null},B===null?(R=B=oe,_=f):B=B.next=oe,ct.lanes|=Ee,Ga|=Ee;ne=ne.next}while(ne!==null&&ne!==n);if(B===null?_=f:B.next=R,!ii(f,t.memoizedState)&&(mn=!0,ge&&(a=$s,a!==null)))throw a;t.memoizedState=f,t.baseState=_,t.baseQueue=B,r.lastRenderedState=f}return u===null&&(r.lanes=0),[t.memoizedState,r.dispatch]}function $u(t){var n=cn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var r=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var _=u=u.next;do f=t(f,_.action),_=_.next;while(_!==u);ii(f,n.memoizedState)||(mn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,r]}function sm(t,n,a){var r=ct,u=cn(),f=yt;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var _=!ii((kt||u).memoizedState,a);if(_&&(u.memoizedState=a,mn=!0),u=u.queue,nf(lm.bind(null,r,u,t),[t]),u.getSnapshot!==n||_||pn!==null&&pn.memoizedState.tag&1){if(r.flags|=2048,sr(9,{destroy:void 0},om.bind(null,r,u,a,n),null),Zt===null)throw Error(s(349));f||(aa&127)!==0||rm(r,n,a)}return a}function rm(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=ct.updateQueue,n===null?(n=wl(),ct.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function om(t,n,a,r){n.value=a,n.getSnapshot=r,cm(n)&&um(t)}function lm(t,n,a){return a(function(){cm(n)&&um(t)})}function cm(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!ii(t,a)}catch{return!0}}function um(t){var n=ps(t,2);n!==null&&Zn(n,t,2)}function ef(t){var n=Fn();if(typeof t=="function"){var a=t;if(t=a(),Es){we(!0);try{a()}finally{we(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:t},n}function fm(t,n,a,r){return t.baseState=a,ju(t,kt,typeof r=="function"?r:sa)}function Ux(t,n,a,r,u){if(Ol(t))throw Error(s(485));if(t=n.action,t!==null){var f={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){f.listeners.push(_)}};P.T!==null?a(!0):f.isTransition=!1,r(f),a=n.pending,a===null?(f.next=n.pending=f,hm(n,f)):(f.next=a.next,n.pending=a.next=f)}}function hm(t,n){var a=n.action,r=n.payload,u=t.state;if(n.isTransition){var f=P.T,_={};P.T=_;try{var R=a(u,r),B=P.S;B!==null&&B(_,R),dm(t,n,R)}catch(ne){tf(t,n,ne)}finally{f!==null&&_.types!==null&&(f.types=_.types),P.T=f}}else try{f=a(u,r),dm(t,n,f)}catch(ne){tf(t,n,ne)}}function dm(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){pm(t,n,r)},function(r){return tf(t,n,r)}):pm(t,n,a)}function pm(t,n,a){n.status="fulfilled",n.value=a,mm(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,hm(t,a)))}function tf(t,n,a){var r=t.pending;if(t.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,mm(n),n=n.next;while(n!==r)}t.action=null}function mm(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function gm(t,n){return n}function _m(t,n){if(yt){var a=Zt.formState;if(a!==null){e:{var r=ct;if(yt){if(Jt){t:{for(var u=Jt,f=_i;u.nodeType!==8;){if(!f){u=null;break t}if(u=xi(u.nextSibling),u===null){u=null;break t}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Jt=xi(u.nextSibling),r=u.data==="F!";break e}}La(r)}r=!1}r&&(n=a[0])}}return a=Fn(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:gm,lastRenderedState:n},a.queue=r,a=Im.bind(null,ct,r),r.dispatch=a,r=ef(!1),f=lf.bind(null,ct,!1,r.queue),r=Fn(),u={state:n,dispatch:null,action:t,pending:null},r.queue=u,a=Ux.bind(null,ct,u,f,a),u.dispatch=a,r.memoizedState=t,[n,a,!1]}function vm(t){var n=cn();return xm(n,kt,t)}function xm(t,n,a){if(n=ju(t,n,gm)[0],t=Ul(sa)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=go(n)}catch(_){throw _===er?Ml:_}else r=n;n=cn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(ct.flags|=2048,sr(9,{destroy:void 0},Lx.bind(null,u,a),null)),[r,f,t]}function Lx(t,n){t.action=n}function Sm(t){var n=cn(),a=kt;if(a!==null)return xm(n,a,t);cn(),n=n.memoizedState,a=cn();var r=a.queue.dispatch;return a.memoizedState=t,[n,r,!1]}function sr(t,n,a,r){return t={tag:t,create:a,deps:r,inst:n,next:null},n=ct.updateQueue,n===null&&(n=wl(),ct.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(r=a.next,a.next=t,t.next=r,n.lastEffect=t),t}function Mm(){return cn().memoizedState}function Ll(t,n,a,r){var u=Fn();ct.flags|=t,u.memoizedState=sr(1|n,{destroy:void 0},a,r===void 0?null:r)}function Nl(t,n,a,r){var u=cn();r=r===void 0?null:r;var f=u.memoizedState.inst;kt!==null&&r!==null&&qu(r,kt.memoizedState.deps)?u.memoizedState=sr(n,f,a,r):(ct.flags|=t,u.memoizedState=sr(1|n,f,a,r))}function ym(t,n){Ll(8390656,8,t,n)}function nf(t,n){Nl(2048,8,t,n)}function Nx(t){ct.flags|=4;var n=ct.updateQueue;if(n===null)n=wl(),ct.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function Em(t){var n=cn().memoizedState;return Nx({ref:n,nextImpl:t}),function(){if((Lt&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function bm(t,n){return Nl(4,2,t,n)}function Tm(t,n){return Nl(4,4,t,n)}function Am(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Rm(t,n,a){a=a!=null?a.concat([t]):null,Nl(4,4,Am.bind(null,n,t),a)}function af(){}function Cm(t,n){var a=cn();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&qu(n,r[1])?r[0]:(a.memoizedState=[t,n],t)}function wm(t,n){var a=cn();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&qu(n,r[1]))return r[0];if(r=t(),Es){we(!0);try{t()}finally{we(!1)}}return a.memoizedState=[r,n],r}function sf(t,n,a){return a===void 0||(aa&1073741824)!==0&&(xt&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=Dg(),ct.lanes|=t,Ga|=t,a)}function Dm(t,n,a,r){return ii(a,n)?a:nr.current!==null?(t=sf(t,a,r),ii(t,n)||(mn=!0),t):(aa&42)===0||(aa&1073741824)!==0&&(xt&261930)===0?(mn=!0,t.memoizedState=a):(t=Dg(),ct.lanes|=t,Ga|=t,n)}function Um(t,n,a,r,u){var f=F.p;F.p=f!==0&&8>f?f:8;var _=P.T,R={};P.T=R,lf(t,!1,n,a);try{var B=u(),ne=P.S;if(ne!==null&&ne(R,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var ge=Cx(B,r);_o(t,n,ge,ci(t))}else _o(t,n,r,ci(t))}catch(Ee){_o(t,n,{then:function(){},status:"rejected",reason:Ee},ci())}finally{F.p=f,_!==null&&R.types!==null&&(_.types=R.types),P.T=_}}function Ox(){}function rf(t,n,a,r){if(t.tag!==5)throw Error(s(476));var u=Lm(t).queue;Um(t,u,n,$,a===null?Ox:function(){return Nm(t),a(r)})}function Lm(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:$,baseState:$,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:$},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Nm(t){var n=Lm(t);n.next===null&&(n=t.alternate.memoizedState),_o(t,n.next.queue,{},ci())}function of(){return Rn(Oo)}function Om(){return cn().memoizedState}function Pm(){return cn().memoizedState}function Px(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=ci();t=Pa(a);var r=Ia(n,t,a);r!==null&&(Zn(r,n,a),fo(r,n,a)),n={cache:Pu()},t.payload=n;return}n=n.return}}function Ix(t,n,a){var r=ci();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Ol(t)?zm(n,a):(a=bu(t,n,a,r),a!==null&&(Zn(a,t,r),Bm(a,n,r)))}function Im(t,n,a){var r=ci();_o(t,n,a,r)}function _o(t,n,a,r){var u={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ol(t))zm(n,u);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var _=n.lastRenderedState,R=f(_,a);if(u.hasEagerState=!0,u.eagerState=R,ii(R,_))return pl(t,n,u,0),Zt===null&&dl(),!1}catch{}finally{}if(a=bu(t,n,u,r),a!==null)return Zn(a,t,r),Bm(a,n,r),!0}return!1}function lf(t,n,a,r){if(r={lane:2,revertLane:Hf(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Ol(t)){if(n)throw Error(s(479))}else n=bu(t,a,r,2),n!==null&&Zn(n,t,2)}function Ol(t){var n=t.alternate;return t===ct||n!==null&&n===ct}function zm(t,n){ir=Rl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Bm(t,n,a){if((a&4194048)!==0){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,Un(t,a)}}var vo={readContext:Rn,use:Dl,useCallback:sn,useContext:sn,useEffect:sn,useImperativeHandle:sn,useLayoutEffect:sn,useInsertionEffect:sn,useMemo:sn,useReducer:sn,useRef:sn,useState:sn,useDebugValue:sn,useDeferredValue:sn,useTransition:sn,useSyncExternalStore:sn,useId:sn,useHostTransitionStatus:sn,useFormState:sn,useActionState:sn,useOptimistic:sn,useMemoCache:sn,useCacheRefresh:sn};vo.useEffectEvent=sn;var Fm={readContext:Rn,use:Dl,useCallback:function(t,n){return Fn().memoizedState=[t,n===void 0?null:n],t},useContext:Rn,useEffect:ym,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Ll(4194308,4,Am.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Ll(4194308,4,t,n)},useInsertionEffect:function(t,n){Ll(4,2,t,n)},useMemo:function(t,n){var a=Fn();n=n===void 0?null:n;var r=t();if(Es){we(!0);try{t()}finally{we(!1)}}return a.memoizedState=[r,n],r},useReducer:function(t,n,a){var r=Fn();if(a!==void 0){var u=a(n);if(Es){we(!0);try{a(n)}finally{we(!1)}}}else u=n;return r.memoizedState=r.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},r.queue=t,t=t.dispatch=Ix.bind(null,ct,t),[r.memoizedState,t]},useRef:function(t){var n=Fn();return t={current:t},n.memoizedState=t},useState:function(t){t=ef(t);var n=t.queue,a=Im.bind(null,ct,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:af,useDeferredValue:function(t,n){var a=Fn();return sf(a,t,n)},useTransition:function(){var t=ef(!1);return t=Um.bind(null,ct,t.queue,!0,!1),Fn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var r=ct,u=Fn();if(yt){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Zt===null)throw Error(s(349));(xt&127)!==0||rm(r,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,ym(lm.bind(null,r,f,t),[t]),r.flags|=2048,sr(9,{destroy:void 0},om.bind(null,r,f,a,n),null),a},useId:function(){var t=Fn(),n=Zt.identifierPrefix;if(yt){var a=Fi,r=Bi;a=(r&~(1<<32-Fe(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Cl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=wx++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:of,useFormState:_m,useActionState:_m,useOptimistic:function(t){var n=Fn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=lf.bind(null,ct,!0,a),a.dispatch=n,[t,n]},useMemoCache:Ju,useCacheRefresh:function(){return Fn().memoizedState=Px.bind(null,ct)},useEffectEvent:function(t){var n=Fn(),a={impl:t};return n.memoizedState=a,function(){if((Lt&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},cf={readContext:Rn,use:Dl,useCallback:Cm,useContext:Rn,useEffect:nf,useImperativeHandle:Rm,useInsertionEffect:bm,useLayoutEffect:Tm,useMemo:wm,useReducer:Ul,useRef:Mm,useState:function(){return Ul(sa)},useDebugValue:af,useDeferredValue:function(t,n){var a=cn();return Dm(a,kt.memoizedState,t,n)},useTransition:function(){var t=Ul(sa)[0],n=cn().memoizedState;return[typeof t=="boolean"?t:go(t),n]},useSyncExternalStore:sm,useId:Om,useHostTransitionStatus:of,useFormState:vm,useActionState:vm,useOptimistic:function(t,n){var a=cn();return fm(a,kt,t,n)},useMemoCache:Ju,useCacheRefresh:Pm};cf.useEffectEvent=Em;var Hm={readContext:Rn,use:Dl,useCallback:Cm,useContext:Rn,useEffect:nf,useImperativeHandle:Rm,useInsertionEffect:bm,useLayoutEffect:Tm,useMemo:wm,useReducer:$u,useRef:Mm,useState:function(){return $u(sa)},useDebugValue:af,useDeferredValue:function(t,n){var a=cn();return kt===null?sf(a,t,n):Dm(a,kt.memoizedState,t,n)},useTransition:function(){var t=$u(sa)[0],n=cn().memoizedState;return[typeof t=="boolean"?t:go(t),n]},useSyncExternalStore:sm,useId:Om,useHostTransitionStatus:of,useFormState:Sm,useActionState:Sm,useOptimistic:function(t,n){var a=cn();return kt!==null?fm(a,kt,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Ju,useCacheRefresh:Pm};Hm.useEffectEvent=Em;function uf(t,n,a,r){n=t.memoizedState,a=a(r,n),a=a==null?n:S({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var ff={enqueueSetState:function(t,n,a){t=t._reactInternals;var r=ci(),u=Pa(r);u.payload=n,a!=null&&(u.callback=a),n=Ia(t,u,r),n!==null&&(Zn(n,t,r),fo(n,t,r))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var r=ci(),u=Pa(r);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Ia(t,u,r),n!==null&&(Zn(n,t,r),fo(n,t,r))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=ci(),r=Pa(a);r.tag=2,n!=null&&(r.callback=n),n=Ia(t,r,a),n!==null&&(Zn(n,t,a),fo(n,t,a))}};function Gm(t,n,a,r,u,f,_){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,f,_):n.prototype&&n.prototype.isPureReactComponent?!io(a,r)||!io(u,f):!0}function Vm(t,n,a,r){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==t&&ff.enqueueReplaceState(n,n.state,null)}function bs(t,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(t=t.defaultProps){a===n&&(a=S({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function km(t){hl(t)}function Xm(t){console.error(t)}function Wm(t){hl(t)}function Pl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function qm(t,n,a){try{var r=t.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function hf(t,n,a){return a=Pa(a),a.tag=3,a.payload={element:null},a.callback=function(){Pl(t,n)},a}function Ym(t){return t=Pa(t),t.tag=3,t}function Zm(t,n,a,r){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=r.value;t.payload=function(){return u(f)},t.callback=function(){qm(n,a,r)}}var _=a.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(t.callback=function(){qm(n,a,r),typeof u!="function"&&(Va===null?Va=new Set([this]):Va.add(this));var R=r.stack;this.componentDidCatch(r.value,{componentStack:R!==null?R:""})})}function zx(t,n,a,r,u){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&Js(n,a,u,!0),a=si.current,a!==null){switch(a.tag){case 31:case 13:return vi===null?Yl():a.alternate===null&&rn===0&&(rn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,r===yl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),zf(t,r,u)),!1;case 22:return a.flags|=65536,r===yl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),zf(t,r,u)),!1}throw Error(s(435,a.tag))}return zf(t,r,u),Yl(),!1}if(yt)return n=si.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,r!==Du&&(t=Error(s(422),{cause:r}),ro(pi(t,a)))):(r!==Du&&(n=Error(s(423),{cause:r}),ro(pi(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,r=pi(r,a),u=hf(t.stateNode,r,u),Gu(t,u),rn!==4&&(rn=2)),!1;var f=Error(s(520),{cause:r});if(f=pi(f,a),Ao===null?Ao=[f]:Ao.push(f),rn!==4&&(rn=2),n===null)return!0;r=pi(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=hf(a.stateNode,r,t),Gu(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Va===null||!Va.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Ym(u),Zm(u,t,a,r),Gu(a,u),!1}a=a.return}while(a!==null);return!1}var df=Error(s(461)),mn=!1;function Cn(t,n,a,r){n.child=t===null?jp(n,null,a,r):ys(n,t.child,a,r)}function Km(t,n,a,r,u){a=a.render;var f=n.ref;if("ref"in r){var _={};for(var R in r)R!=="ref"&&(_[R]=r[R])}else _=r;return vs(n),r=Yu(t,n,a,_,f,u),R=Zu(),t!==null&&!mn?(Ku(t,n,u),ra(t,n,u)):(yt&&R&&Cu(n),n.flags|=1,Cn(t,n,r,u),n.child)}function Qm(t,n,a,r,u){if(t===null){var f=a.type;return typeof f=="function"&&!Tu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Jm(t,n,f,r,u)):(t=gl(a.type,null,r,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!Mf(t,u)){var _=f.memoizedProps;if(a=a.compare,a=a!==null?a:io,a(_,r)&&t.ref===n.ref)return ra(t,n,u)}return n.flags|=1,t=ea(f,r),t.ref=n.ref,t.return=n,n.child=t}function Jm(t,n,a,r,u){if(t!==null){var f=t.memoizedProps;if(io(f,r)&&t.ref===n.ref)if(mn=!1,n.pendingProps=r=f,Mf(t,u))(t.flags&131072)!==0&&(mn=!0);else return n.lanes=t.lanes,ra(t,n,u)}return pf(t,n,a,r,u)}function jm(t,n,a,r){var u=r.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(r=n.child=t.child,u=0;r!==null;)u=u|r.lanes|r.childLanes,r=r.sibling;r=u&~f}else r=0,n.child=null;return $m(t,n,f,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Sl(n,f!==null?f.cachePool:null),f!==null?tm(n,f):ku(),nm(n);else return r=n.lanes=536870912,$m(t,n,f!==null?f.baseLanes|a:a,a,r)}else f!==null?(Sl(n,f.cachePool),tm(n,f),Ba(),n.memoizedState=null):(t!==null&&Sl(n,null),ku(),Ba());return Cn(t,n,u,a),n.child}function xo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function $m(t,n,a,r,u){var f=zu();return f=f===null?null:{parent:dn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&Sl(n,null),ku(),nm(n),t!==null&&Js(t,n,r,!0),n.childLanes=u,null}function Il(t,n){return n=Bl({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function eg(t,n,a){return ys(n,t.child,null,a),t=Il(n,n.pendingProps),t.flags|=2,ri(n),n.memoizedState=null,t}function Bx(t,n,a){var r=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(yt){if(r.mode==="hidden")return t=Il(n,r),n.lanes=536870912,xo(null,t);if(Wu(n),(t=Jt)?(t=h0(t,_i),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Da!==null?{id:Bi,overflow:Fi}:null,retryLane:536870912,hydrationErrors:null},a=zp(t),a.return=n,n.child=a,An=n,Jt=null)):t=null,t===null)throw La(n);return n.lanes=536870912,null}return Il(n,r)}var f=t.memoizedState;if(f!==null){var _=f.dehydrated;if(Wu(n),u)if(n.flags&256)n.flags&=-257,n=eg(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(mn||Js(t,n,a,!1),u=(a&t.childLanes)!==0,mn||u){if(r=Zt,r!==null&&(_=ei(r,a),_!==0&&_!==f.retryLane))throw f.retryLane=_,ps(t,_),Zn(r,t,_),df;Yl(),n=eg(t,n,a)}else t=f.treeContext,Jt=xi(_.nextSibling),An=n,yt=!0,Ua=null,_i=!1,t!==null&&Hp(n,t),n=Il(n,r),n.flags|=4096;return n}return t=ea(t.child,{mode:r.mode,children:r.children}),t.ref=n.ref,n.child=t,t.return=n,t}function zl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function pf(t,n,a,r,u){return vs(n),a=Yu(t,n,a,r,void 0,u),r=Zu(),t!==null&&!mn?(Ku(t,n,u),ra(t,n,u)):(yt&&r&&Cu(n),n.flags|=1,Cn(t,n,a,u),n.child)}function tg(t,n,a,r,u,f){return vs(n),n.updateQueue=null,a=am(n,r,a,u),im(t),r=Zu(),t!==null&&!mn?(Ku(t,n,f),ra(t,n,f)):(yt&&r&&Cu(n),n.flags|=1,Cn(t,n,a,f),n.child)}function ng(t,n,a,r,u){if(vs(n),n.stateNode===null){var f=Ys,_=a.contextType;typeof _=="object"&&_!==null&&(f=Rn(_)),f=new a(r,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=ff,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=r,f.state=n.memoizedState,f.refs={},Fu(n),_=a.contextType,f.context=typeof _=="object"&&_!==null?Rn(_):Ys,f.state=n.memoizedState,_=a.getDerivedStateFromProps,typeof _=="function"&&(uf(n,a,_,r),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(_=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),_!==f.state&&ff.enqueueReplaceState(f,f.state,null),po(n,r,f,u),ho(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(t===null){f=n.stateNode;var R=n.memoizedProps,B=bs(a,R);f.props=B;var ne=f.context,ge=a.contextType;_=Ys,typeof ge=="object"&&ge!==null&&(_=Rn(ge));var Ee=a.getDerivedStateFromProps;ge=typeof Ee=="function"||typeof f.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,ge||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(R||ne!==_)&&Vm(n,f,r,_),Oa=!1;var oe=n.memoizedState;f.state=oe,po(n,r,f,u),ho(),ne=n.memoizedState,R||oe!==ne||Oa?(typeof Ee=="function"&&(uf(n,a,Ee,r),ne=n.memoizedState),(B=Oa||Gm(n,a,B,r,oe,ne,_))?(ge||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=ne),f.props=r,f.state=ne,f.context=_,r=B):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{f=n.stateNode,Hu(t,n),_=n.memoizedProps,ge=bs(a,_),f.props=ge,Ee=n.pendingProps,oe=f.context,ne=a.contextType,B=Ys,typeof ne=="object"&&ne!==null&&(B=Rn(ne)),R=a.getDerivedStateFromProps,(ne=typeof R=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(_!==Ee||oe!==B)&&Vm(n,f,r,B),Oa=!1,oe=n.memoizedState,f.state=oe,po(n,r,f,u),ho();var ce=n.memoizedState;_!==Ee||oe!==ce||Oa||t!==null&&t.dependencies!==null&&vl(t.dependencies)?(typeof R=="function"&&(uf(n,a,R,r),ce=n.memoizedState),(ge=Oa||Gm(n,a,ge,r,oe,ce,B)||t!==null&&t.dependencies!==null&&vl(t.dependencies))?(ne||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(r,ce,B),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(r,ce,B)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||_===t.memoizedProps&&oe===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&oe===t.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=ce),f.props=r,f.state=ce,f.context=B,r=ge):(typeof f.componentDidUpdate!="function"||_===t.memoizedProps&&oe===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&oe===t.memoizedState||(n.flags|=1024),r=!1)}return f=r,zl(t,n),r=(n.flags&128)!==0,f||r?(f=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&r?(n.child=ys(n,t.child,null,u),n.child=ys(n,null,a,u)):Cn(t,n,a,u),n.memoizedState=f.state,t=n.child):t=ra(t,n,u),t}function ig(t,n,a,r){return gs(),n.flags|=256,Cn(t,n,a,r),n.child}var mf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function gf(t){return{baseLanes:t,cachePool:qp()}}function _f(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=li),t}function ag(t,n,a){var r=n.pendingProps,u=!1,f=(n.flags&128)!==0,_;if((_=f)||(_=t!==null&&t.memoizedState===null?!1:(ln.current&2)!==0),_&&(u=!0,n.flags&=-129),_=(n.flags&32)!==0,n.flags&=-33,t===null){if(yt){if(u?za(n):Ba(),(t=Jt)?(t=h0(t,_i),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Da!==null?{id:Bi,overflow:Fi}:null,retryLane:536870912,hydrationErrors:null},a=zp(t),a.return=n,n.child=a,An=n,Jt=null)):t=null,t===null)throw La(n);return $f(t)?n.lanes=32:n.lanes=536870912,null}var R=r.children;return r=r.fallback,u?(Ba(),u=n.mode,R=Bl({mode:"hidden",children:R},u),r=ms(r,u,a,null),R.return=n,r.return=n,R.sibling=r,n.child=R,r=n.child,r.memoizedState=gf(a),r.childLanes=_f(t,_,a),n.memoizedState=mf,xo(null,r)):(za(n),vf(n,R))}var B=t.memoizedState;if(B!==null&&(R=B.dehydrated,R!==null)){if(f)n.flags&256?(za(n),n.flags&=-257,n=xf(t,n,a)):n.memoizedState!==null?(Ba(),n.child=t.child,n.flags|=128,n=null):(Ba(),R=r.fallback,u=n.mode,r=Bl({mode:"visible",children:r.children},u),R=ms(R,u,a,null),R.flags|=2,r.return=n,R.return=n,r.sibling=R,n.child=r,ys(n,t.child,null,a),r=n.child,r.memoizedState=gf(a),r.childLanes=_f(t,_,a),n.memoizedState=mf,n=xo(null,r));else if(za(n),$f(R)){if(_=R.nextSibling&&R.nextSibling.dataset,_)var ne=_.dgst;_=ne,r=Error(s(419)),r.stack="",r.digest=_,ro({value:r,source:null,stack:null}),n=xf(t,n,a)}else if(mn||Js(t,n,a,!1),_=(a&t.childLanes)!==0,mn||_){if(_=Zt,_!==null&&(r=ei(_,a),r!==0&&r!==B.retryLane))throw B.retryLane=r,ps(t,r),Zn(_,t,r),df;jf(R)||Yl(),n=xf(t,n,a)}else jf(R)?(n.flags|=192,n.child=t.child,n=null):(t=B.treeContext,Jt=xi(R.nextSibling),An=n,yt=!0,Ua=null,_i=!1,t!==null&&Hp(n,t),n=vf(n,r.children),n.flags|=4096);return n}return u?(Ba(),R=r.fallback,u=n.mode,B=t.child,ne=B.sibling,r=ea(B,{mode:"hidden",children:r.children}),r.subtreeFlags=B.subtreeFlags&65011712,ne!==null?R=ea(ne,R):(R=ms(R,u,a,null),R.flags|=2),R.return=n,r.return=n,r.sibling=R,n.child=r,xo(null,r),r=n.child,R=t.child.memoizedState,R===null?R=gf(a):(u=R.cachePool,u!==null?(B=dn._currentValue,u=u.parent!==B?{parent:B,pool:B}:u):u=qp(),R={baseLanes:R.baseLanes|a,cachePool:u}),r.memoizedState=R,r.childLanes=_f(t,_,a),n.memoizedState=mf,xo(t.child,r)):(za(n),a=t.child,t=a.sibling,a=ea(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,t!==null&&(_=n.deletions,_===null?(n.deletions=[t],n.flags|=16):_.push(t)),n.child=a,n.memoizedState=null,a)}function vf(t,n){return n=Bl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Bl(t,n){return t=ai(22,t,null,n),t.lanes=0,t}function xf(t,n,a){return ys(n,t.child,null,a),t=vf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function sg(t,n,a){t.lanes|=n;var r=t.alternate;r!==null&&(r.lanes|=n),Nu(t.return,n,a)}function Sf(t,n,a,r,u,f){var _=t.memoizedState;_===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:u,treeForkCount:f}:(_.isBackwards=n,_.rendering=null,_.renderingStartTime=0,_.last=r,_.tail=a,_.tailMode=u,_.treeForkCount=f)}function rg(t,n,a){var r=n.pendingProps,u=r.revealOrder,f=r.tail;r=r.children;var _=ln.current,R=(_&2)!==0;if(R?(_=_&1|2,n.flags|=128):_&=1,_e(ln,_),Cn(t,n,r,a),r=yt?so:0,!R&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&sg(t,a,n);else if(t.tag===19)sg(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&Al(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Sf(n,!1,u,a,f,r);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&Al(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}Sf(n,!0,a,null,f,r);break;case"together":Sf(n,!1,null,null,void 0,r);break;default:n.memoizedState=null}return n.child}function ra(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Ga|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Js(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=ea(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=ea(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Mf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&vl(t)))}function Fx(t,n,a){switch(n.tag){case 3:de(n,n.stateNode.containerInfo),Na(n,dn,t.memoizedState.cache),gs();break;case 27:case 5:je(n);break;case 4:de(n,n.stateNode.containerInfo);break;case 10:Na(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Wu(n),null;break;case 13:var r=n.memoizedState;if(r!==null)return r.dehydrated!==null?(za(n),n.flags|=128,null):(a&n.child.childLanes)!==0?ag(t,n,a):(za(n),t=ra(t,n,a),t!==null?t.sibling:null);za(n);break;case 19:var u=(t.flags&128)!==0;if(r=(a&n.childLanes)!==0,r||(Js(t,n,a,!1),r=(a&n.childLanes)!==0),u){if(r)return rg(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),_e(ln,ln.current),r)break;return null;case 22:return n.lanes=0,jm(t,n,a,n.pendingProps);case 24:Na(n,dn,t.memoizedState.cache)}return ra(t,n,a)}function og(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)mn=!0;else{if(!Mf(t,a)&&(n.flags&128)===0)return mn=!1,Fx(t,n,a);mn=(t.flags&131072)!==0}else mn=!1,yt&&(n.flags&1048576)!==0&&Fp(n,so,n.index);switch(n.lanes=0,n.tag){case 16:e:{var r=n.pendingProps;if(t=Ss(n.elementType),n.type=t,typeof t=="function")Tu(t)?(r=bs(t,r),n.tag=1,n=ng(null,n,t,r,a)):(n.tag=0,n=pf(null,n,t,r,a));else{if(t!=null){var u=t.$$typeof;if(u===D){n.tag=11,n=Km(null,n,t,r,a);break e}else if(u===O){n.tag=14,n=Qm(null,n,t,r,a);break e}}throw n=Se(t)||t,Error(s(306,n,""))}}return n;case 0:return pf(t,n,n.type,n.pendingProps,a);case 1:return r=n.type,u=bs(r,n.pendingProps),ng(t,n,r,u,a);case 3:e:{if(de(n,n.stateNode.containerInfo),t===null)throw Error(s(387));r=n.pendingProps;var f=n.memoizedState;u=f.element,Hu(t,n),po(n,r,null,a);var _=n.memoizedState;if(r=_.cache,Na(n,dn,r),r!==f.cache&&Ou(n,[dn],a,!0),ho(),r=_.element,f.isDehydrated)if(f={element:r,isDehydrated:!1,cache:_.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=ig(t,n,r,a);break e}else if(r!==u){u=pi(Error(s(424)),n),ro(u),n=ig(t,n,r,a);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Jt=xi(t.firstChild),An=n,yt=!0,Ua=null,_i=!0,a=jp(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(gs(),r===u){n=ra(t,n,a);break e}Cn(t,n,r,a)}n=n.child}return n;case 26:return zl(t,n),t===null?(a=v0(n.type,null,n.pendingProps,null))?n.memoizedState=a:yt||(a=n.type,t=n.pendingProps,r=ec(ee.current).createElement(a),r[fn]=n,r[Tn]=t,wn(r,a,t),hn(r),n.stateNode=r):n.memoizedState=v0(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return je(n),t===null&&yt&&(r=n.stateNode=m0(n.type,n.pendingProps,ee.current),An=n,_i=!0,u=Jt,qa(n.type)?(eh=u,Jt=xi(r.firstChild)):Jt=u),Cn(t,n,n.pendingProps.children,a),zl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&yt&&((u=r=Jt)&&(r=mS(r,n.type,n.pendingProps,_i),r!==null?(n.stateNode=r,An=n,Jt=xi(r.firstChild),_i=!1,u=!0):u=!1),u||La(n)),je(n),u=n.type,f=n.pendingProps,_=t!==null?t.memoizedProps:null,r=f.children,Kf(u,f)?r=null:_!==null&&Kf(u,_)&&(n.flags|=32),n.memoizedState!==null&&(u=Yu(t,n,Dx,null,null,a),Oo._currentValue=u),zl(t,n),Cn(t,n,r,a),n.child;case 6:return t===null&&yt&&((t=a=Jt)&&(a=gS(a,n.pendingProps,_i),a!==null?(n.stateNode=a,An=n,Jt=null,t=!0):t=!1),t||La(n)),null;case 13:return ag(t,n,a);case 4:return de(n,n.stateNode.containerInfo),r=n.pendingProps,t===null?n.child=ys(n,null,r,a):Cn(t,n,r,a),n.child;case 11:return Km(t,n,n.type,n.pendingProps,a);case 7:return Cn(t,n,n.pendingProps,a),n.child;case 8:return Cn(t,n,n.pendingProps.children,a),n.child;case 12:return Cn(t,n,n.pendingProps.children,a),n.child;case 10:return r=n.pendingProps,Na(n,n.type,r.value),Cn(t,n,r.children,a),n.child;case 9:return u=n.type._context,r=n.pendingProps.children,vs(n),u=Rn(u),r=r(u),n.flags|=1,Cn(t,n,r,a),n.child;case 14:return Qm(t,n,n.type,n.pendingProps,a);case 15:return Jm(t,n,n.type,n.pendingProps,a);case 19:return rg(t,n,a);case 31:return Bx(t,n,a);case 22:return jm(t,n,a,n.pendingProps);case 24:return vs(n),r=Rn(dn),t===null?(u=zu(),u===null&&(u=Zt,f=Pu(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:r,cache:u},Fu(n),Na(n,dn,u)):((t.lanes&a)!==0&&(Hu(t,n),po(n,null,null,a),ho()),u=t.memoizedState,f=n.memoizedState,u.parent!==r?(u={parent:r,cache:r},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Na(n,dn,r)):(r=f.cache,Na(n,dn,r),r!==u.cache&&Ou(n,[dn],a,!0))),Cn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function oa(t){t.flags|=4}function yf(t,n,a,r,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(Og())t.flags|=8192;else throw Ms=yl,Bu}else t.flags&=-16777217}function lg(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!E0(n))if(Og())t.flags|=8192;else throw Ms=yl,Bu}function Fl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?ye():536870912,t.lanes|=n,cr|=n)}function So(t,n){if(!yt)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function jt(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,r=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,r|=u.subtreeFlags&65011712,r|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,r|=u.subtreeFlags,r|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=r,t.childLanes=a,n}function Hx(t,n,a){var r=n.pendingProps;switch(wu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return jt(n),null;case 1:return jt(n),null;case 3:return a=n.stateNode,r=null,t!==null&&(r=t.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),ia(dn),De(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Qs(n)?oa(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Uu())),jt(n),null;case 26:var u=n.type,f=n.memoizedState;return t===null?(oa(n),f!==null?(jt(n),lg(n,f)):(jt(n),yf(n,u,null,r,a))):f?f!==t.memoizedState?(oa(n),jt(n),lg(n,f)):(jt(n),n.flags&=-16777217):(t=t.memoizedProps,t!==r&&oa(n),jt(n),yf(n,u,t,r,a)),null;case 27:if(Ge(n),a=ee.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&oa(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return jt(n),null}t=be.current,Qs(n)?Gp(n):(t=m0(u,r,a),n.stateNode=t,oa(n))}return jt(n),null;case 5:if(Ge(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&oa(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return jt(n),null}if(f=be.current,Qs(n))Gp(n);else{var _=ec(ee.current);switch(f){case 1:f=_.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=_.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=_.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=_.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=_.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof r.is=="string"?_.createElement("select",{is:r.is}):_.createElement("select"),r.multiple?f.multiple=!0:r.size&&(f.size=r.size);break;default:f=typeof r.is=="string"?_.createElement(u,{is:r.is}):_.createElement(u)}}f[fn]=n,f[Tn]=r;e:for(_=n.child;_!==null;){if(_.tag===5||_.tag===6)f.appendChild(_.stateNode);else if(_.tag!==4&&_.tag!==27&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===n)break e;for(;_.sibling===null;){if(_.return===null||_.return===n)break e;_=_.return}_.sibling.return=_.return,_=_.sibling}n.stateNode=f;e:switch(wn(f,u,r),u){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&oa(n)}}return jt(n),yf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==r&&oa(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(t=ee.current,Qs(n)){if(t=n.stateNode,a=n.memoizedProps,r=null,u=An,u!==null)switch(u.tag){case 27:case 5:r=u.memoizedProps}t[fn]=n,t=!!(t.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||a0(t.nodeValue,a)),t||La(n,!0)}else t=ec(t).createTextNode(r),t[fn]=n,n.stateNode=t}return jt(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(r=Qs(n),a!==null){if(t===null){if(!r)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[fn]=n}else gs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;jt(n),t=!1}else a=Uu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(ri(n),n):(ri(n),null);if((n.flags&128)!==0)throw Error(s(558))}return jt(n),null;case 13:if(r=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=Qs(n),r!==null&&r.dehydrated!==null){if(t===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[fn]=n}else gs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;jt(n),u=!1}else u=Uu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ri(n),n):(ri(n),null)}return ri(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,t=t!==null&&t.memoizedState!==null,a&&(r=n.child,u=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(u=r.alternate.memoizedState.cachePool.pool),f=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(f=r.memoizedState.cachePool.pool),f!==u&&(r.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Fl(n,n.updateQueue),jt(n),null);case 4:return De(),t===null&&Xf(n.stateNode.containerInfo),jt(n),null;case 10:return ia(n.type),jt(n),null;case 19:if(V(ln),r=n.memoizedState,r===null)return jt(n),null;if(u=(n.flags&128)!==0,f=r.rendering,f===null)if(u)So(r,!1);else{if(rn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=Al(t),f!==null){for(n.flags|=128,So(r,!1),t=f.updateQueue,n.updateQueue=t,Fl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Ip(a,t),a=a.sibling;return _e(ln,ln.current&1|2),yt&&ta(n,r.treeForkCount),n.child}t=t.sibling}r.tail!==null&&Dt()>Xl&&(n.flags|=128,u=!0,So(r,!1),n.lanes=4194304)}else{if(!u)if(t=Al(f),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,Fl(n,t),So(r,!0),r.tail===null&&r.tailMode==="hidden"&&!f.alternate&&!yt)return jt(n),null}else 2*Dt()-r.renderingStartTime>Xl&&a!==536870912&&(n.flags|=128,u=!0,So(r,!1),n.lanes=4194304);r.isBackwards?(f.sibling=n.child,n.child=f):(t=r.last,t!==null?t.sibling=f:n.child=f,r.last=f)}return r.tail!==null?(t=r.tail,r.rendering=t,r.tail=t.sibling,r.renderingStartTime=Dt(),t.sibling=null,a=ln.current,_e(ln,u?a&1|2:a&1),yt&&ta(n,r.treeForkCount),t):(jt(n),null);case 22:case 23:return ri(n),Xu(),r=n.memoizedState!==null,t!==null?t.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(jt(n),n.subtreeFlags&6&&(n.flags|=8192)):jt(n),a=n.updateQueue,a!==null&&Fl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),t!==null&&V(xs),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ia(dn),jt(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function Gx(t,n){switch(wu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return ia(dn),De(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Ge(n),null;case 31:if(n.memoizedState!==null){if(ri(n),n.alternate===null)throw Error(s(340));gs()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(ri(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));gs()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return V(ln),null;case 4:return De(),null;case 10:return ia(n.type),null;case 22:case 23:return ri(n),Xu(),t!==null&&V(xs),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return ia(dn),null;case 25:return null;default:return null}}function cg(t,n){switch(wu(n),n.tag){case 3:ia(dn),De();break;case 26:case 27:case 5:Ge(n);break;case 4:De();break;case 31:n.memoizedState!==null&&ri(n);break;case 13:ri(n);break;case 19:V(ln);break;case 10:ia(n.type);break;case 22:case 23:ri(n),Xu(),t!==null&&V(xs);break;case 24:ia(dn)}}function Mo(t,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var u=r.next;a=u;do{if((a.tag&t)===t){r=void 0;var f=a.create,_=a.inst;r=f(),_.destroy=r}a=a.next}while(a!==u)}}catch(R){Ht(n,n.return,R)}}function Fa(t,n,a){try{var r=n.updateQueue,u=r!==null?r.lastEffect:null;if(u!==null){var f=u.next;r=f;do{if((r.tag&t)===t){var _=r.inst,R=_.destroy;if(R!==void 0){_.destroy=void 0,u=n;var B=a,ne=R;try{ne()}catch(ge){Ht(u,B,ge)}}}r=r.next}while(r!==f)}}catch(ge){Ht(n,n.return,ge)}}function ug(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{em(n,a)}catch(r){Ht(t,t.return,r)}}}function fg(t,n,a){a.props=bs(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(r){Ht(t,n,r)}}function yo(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var r=t.stateNode;break;case 30:r=t.stateNode;break;default:r=t.stateNode}typeof a=="function"?t.refCleanup=a(r):a.current=r}}catch(u){Ht(t,n,u)}}function Hi(t,n){var a=t.ref,r=t.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(u){Ht(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Ht(t,n,u)}else a.current=null}function hg(t){var n=t.type,a=t.memoizedProps,r=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break e;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(u){Ht(t,t.return,u)}}function Ef(t,n,a){try{var r=t.stateNode;cS(r,t.type,a,n),r[Tn]=n}catch(u){Ht(t,t.return,u)}}function dg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&qa(t.type)||t.tag===4}function bf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||dg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&qa(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Tf(t,n,a){var r=t.tag;if(r===5||r===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ji));else if(r!==4&&(r===27&&qa(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(Tf(t,n,a),t=t.sibling;t!==null;)Tf(t,n,a),t=t.sibling}function Hl(t,n,a){var r=t.tag;if(r===5||r===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(r!==4&&(r===27&&qa(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Hl(t,n,a),t=t.sibling;t!==null;)Hl(t,n,a),t=t.sibling}function pg(t){var n=t.stateNode,a=t.memoizedProps;try{for(var r=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);wn(n,r,a),n[fn]=t,n[Tn]=a}catch(f){Ht(t,t.return,f)}}var la=!1,gn=!1,Af=!1,mg=typeof WeakSet=="function"?WeakSet:Set,En=null;function Vx(t,n){if(t=t.containerInfo,Yf=oc,t=Rp(t),vu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var r=a.getSelection&&a.getSelection();if(r&&r.rangeCount!==0){a=r.anchorNode;var u=r.anchorOffset,f=r.focusNode;r=r.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var _=0,R=-1,B=-1,ne=0,ge=0,Ee=t,oe=null;t:for(;;){for(var ce;Ee!==a||u!==0&&Ee.nodeType!==3||(R=_+u),Ee!==f||r!==0&&Ee.nodeType!==3||(B=_+r),Ee.nodeType===3&&(_+=Ee.nodeValue.length),(ce=Ee.firstChild)!==null;)oe=Ee,Ee=ce;for(;;){if(Ee===t)break t;if(oe===a&&++ne===u&&(R=_),oe===f&&++ge===r&&(B=_),(ce=Ee.nextSibling)!==null)break;Ee=oe,oe=Ee.parentNode}Ee=ce}a=R===-1||B===-1?null:{start:R,end:B}}else a=null}a=a||{start:0,end:0}}else a=null;for(Zf={focusedElem:t,selectionRange:a},oc=!1,En=n;En!==null;)if(n=En,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,En=t;else for(;En!==null;){switch(n=En,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,r=a.stateNode;try{var Ye=bs(a.type,u);t=r.getSnapshotBeforeUpdate(Ye,f),r.__reactInternalSnapshotBeforeUpdate=t}catch(tt){Ht(a,a.return,tt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Jf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Jf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,En=t;break}En=n.return}}function gg(t,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:ua(t,a),r&4&&Mo(5,a);break;case 1:if(ua(t,a),r&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(_){Ht(a,a.return,_)}else{var u=bs(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(_){Ht(a,a.return,_)}}r&64&&ug(a),r&512&&yo(a,a.return);break;case 3:if(ua(t,a),r&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{em(t,n)}catch(_){Ht(a,a.return,_)}}break;case 27:n===null&&r&4&&pg(a);case 26:case 5:ua(t,a),n===null&&r&4&&hg(a),r&512&&yo(a,a.return);break;case 12:ua(t,a);break;case 31:ua(t,a),r&4&&xg(t,a);break;case 13:ua(t,a),r&4&&Sg(t,a),r&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Jx.bind(null,a),_S(t,a))));break;case 22:if(r=a.memoizedState!==null||la,!r){n=n!==null&&n.memoizedState!==null||gn,u=la;var f=gn;la=r,(gn=n)&&!f?fa(t,a,(a.subtreeFlags&8772)!==0):ua(t,a),la=u,gn=f}break;case 30:break;default:ua(t,a)}}function _g(t){var n=t.alternate;n!==null&&(t.alternate=null,_g(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Aa(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var an=null,Xn=!1;function ca(t,n,a){for(a=a.child;a!==null;)vg(t,n,a),a=a.sibling}function vg(t,n,a){if(fe&&typeof fe.onCommitFiberUnmount=="function")try{fe.onCommitFiberUnmount(ue,a)}catch{}switch(a.tag){case 26:gn||Hi(a,n),ca(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:gn||Hi(a,n);var r=an,u=Xn;qa(a.type)&&(an=a.stateNode,Xn=!1),ca(t,n,a),Uo(a.stateNode),an=r,Xn=u;break;case 5:gn||Hi(a,n);case 6:if(r=an,u=Xn,an=null,ca(t,n,a),an=r,Xn=u,an!==null)if(Xn)try{(an.nodeType===9?an.body:an.nodeName==="HTML"?an.ownerDocument.body:an).removeChild(a.stateNode)}catch(f){Ht(a,n,f)}else try{an.removeChild(a.stateNode)}catch(f){Ht(a,n,f)}break;case 18:an!==null&&(Xn?(t=an,u0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),_r(t)):u0(an,a.stateNode));break;case 4:r=an,u=Xn,an=a.stateNode.containerInfo,Xn=!0,ca(t,n,a),an=r,Xn=u;break;case 0:case 11:case 14:case 15:Fa(2,a,n),gn||Fa(4,a,n),ca(t,n,a);break;case 1:gn||(Hi(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&fg(a,n,r)),ca(t,n,a);break;case 21:ca(t,n,a);break;case 22:gn=(r=gn)||a.memoizedState!==null,ca(t,n,a),gn=r;break;default:ca(t,n,a)}}function xg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{_r(t)}catch(a){Ht(n,n.return,a)}}}function Sg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{_r(t)}catch(a){Ht(n,n.return,a)}}function kx(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new mg),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new mg),n;default:throw Error(s(435,t.tag))}}function Gl(t,n){var a=kx(t);n.forEach(function(r){if(!a.has(r)){a.add(r);var u=jx.bind(null,t,r);r.then(u,u)}})}function Wn(t,n){var a=n.deletions;if(a!==null)for(var r=0;r<a.length;r++){var u=a[r],f=t,_=n,R=_;e:for(;R!==null;){switch(R.tag){case 27:if(qa(R.type)){an=R.stateNode,Xn=!1;break e}break;case 5:an=R.stateNode,Xn=!1;break e;case 3:case 4:an=R.stateNode.containerInfo,Xn=!0;break e}R=R.return}if(an===null)throw Error(s(160));vg(f,_,u),an=null,Xn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Mg(n,t),n=n.sibling}var Ci=null;function Mg(t,n){var a=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Wn(n,t),qn(t),r&4&&(Fa(3,t,t.return),Mo(3,t),Fa(5,t,t.return));break;case 1:Wn(n,t),qn(t),r&512&&(gn||a===null||Hi(a,a.return)),r&64&&la&&(t=t.updateQueue,t!==null&&(r=t.callbacks,r!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?r:a.concat(r))));break;case 26:var u=Ci;if(Wn(n,t),qn(t),r&512&&(gn||a===null||Hi(a,a.return)),r&4){var f=a!==null?a.memoizedState:null;if(r=t.memoizedState,a===null)if(r===null)if(t.stateNode===null){e:{r=t.type,a=t.memoizedProps,u=u.ownerDocument||u;t:switch(r){case"title":f=u.getElementsByTagName("title")[0],(!f||f[Ta]||f[fn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(r),u.head.insertBefore(f,u.querySelector("head > title"))),wn(f,r,a),f[fn]=t,hn(f),r=f;break e;case"link":var _=M0("link","href",u).get(r+(a.href||""));if(_){for(var R=0;R<_.length;R++)if(f=_[R],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){_.splice(R,1);break t}}f=u.createElement(r),wn(f,r,a),u.head.appendChild(f);break;case"meta":if(_=M0("meta","content",u).get(r+(a.content||""))){for(R=0;R<_.length;R++)if(f=_[R],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){_.splice(R,1);break t}}f=u.createElement(r),wn(f,r,a),u.head.appendChild(f);break;default:throw Error(s(468,r))}f[fn]=t,hn(f),r=f}t.stateNode=r}else y0(u,t.type,t.stateNode);else t.stateNode=S0(u,r,t.memoizedProps);else f!==r?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,r===null?y0(u,t.type,t.stateNode):S0(u,r,t.memoizedProps)):r===null&&t.stateNode!==null&&Ef(t,t.memoizedProps,a.memoizedProps)}break;case 27:Wn(n,t),qn(t),r&512&&(gn||a===null||Hi(a,a.return)),a!==null&&r&4&&Ef(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Wn(n,t),qn(t),r&512&&(gn||a===null||Hi(a,a.return)),t.flags&32){u=t.stateNode;try{ni(u,"")}catch(Ye){Ht(t,t.return,Ye)}}r&4&&t.stateNode!=null&&(u=t.memoizedProps,Ef(t,u,a!==null?a.memoizedProps:u)),r&1024&&(Af=!0);break;case 6:if(Wn(n,t),qn(t),r&4){if(t.stateNode===null)throw Error(s(162));r=t.memoizedProps,a=t.stateNode;try{a.nodeValue=r}catch(Ye){Ht(t,t.return,Ye)}}break;case 3:if(ic=null,u=Ci,Ci=tc(n.containerInfo),Wn(n,t),Ci=u,qn(t),r&4&&a!==null&&a.memoizedState.isDehydrated)try{_r(n.containerInfo)}catch(Ye){Ht(t,t.return,Ye)}Af&&(Af=!1,yg(t));break;case 4:r=Ci,Ci=tc(t.stateNode.containerInfo),Wn(n,t),qn(t),Ci=r;break;case 12:Wn(n,t),qn(t);break;case 31:Wn(n,t),qn(t),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Gl(t,r)));break;case 13:Wn(n,t),qn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(kl=Dt()),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Gl(t,r)));break;case 22:u=t.memoizedState!==null;var B=a!==null&&a.memoizedState!==null,ne=la,ge=gn;if(la=ne||u,gn=ge||B,Wn(n,t),gn=ge,la=ne,qn(t),r&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||B||la||gn||Ts(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){B=a=n;try{if(f=B.stateNode,u)_=f.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none";else{R=B.stateNode;var Ee=B.memoizedProps.style,oe=Ee!=null&&Ee.hasOwnProperty("display")?Ee.display:null;R.style.display=oe==null||typeof oe=="boolean"?"":(""+oe).trim()}}catch(Ye){Ht(B,B.return,Ye)}}}else if(n.tag===6){if(a===null){B=n;try{B.stateNode.nodeValue=u?"":B.memoizedProps}catch(Ye){Ht(B,B.return,Ye)}}}else if(n.tag===18){if(a===null){B=n;try{var ce=B.stateNode;u?f0(ce,!0):f0(B.stateNode,!1)}catch(Ye){Ht(B,B.return,Ye)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}r&4&&(r=t.updateQueue,r!==null&&(a=r.retryQueue,a!==null&&(r.retryQueue=null,Gl(t,a))));break;case 19:Wn(n,t),qn(t),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Gl(t,r)));break;case 30:break;case 21:break;default:Wn(n,t),qn(t)}}function qn(t){var n=t.flags;if(n&2){try{for(var a,r=t.return;r!==null;){if(dg(r)){a=r;break}r=r.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=bf(t);Hl(t,f,u);break;case 5:var _=a.stateNode;a.flags&32&&(ni(_,""),a.flags&=-33);var R=bf(t);Hl(t,R,_);break;case 3:case 4:var B=a.stateNode.containerInfo,ne=bf(t);Tf(t,ne,B);break;default:throw Error(s(161))}}catch(ge){Ht(t,t.return,ge)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function yg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;yg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function ua(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)gg(t,n.alternate,n),n=n.sibling}function Ts(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Fa(4,n,n.return),Ts(n);break;case 1:Hi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&fg(n,n.return,a),Ts(n);break;case 27:Uo(n.stateNode);case 26:case 5:Hi(n,n.return),Ts(n);break;case 22:n.memoizedState===null&&Ts(n);break;case 30:Ts(n);break;default:Ts(n)}t=t.sibling}}function fa(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var r=n.alternate,u=t,f=n,_=f.flags;switch(f.tag){case 0:case 11:case 15:fa(u,f,a),Mo(4,f);break;case 1:if(fa(u,f,a),r=f,u=r.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(ne){Ht(r,r.return,ne)}if(r=f,u=r.updateQueue,u!==null){var R=r.stateNode;try{var B=u.shared.hiddenCallbacks;if(B!==null)for(u.shared.hiddenCallbacks=null,u=0;u<B.length;u++)$p(B[u],R)}catch(ne){Ht(r,r.return,ne)}}a&&_&64&&ug(f),yo(f,f.return);break;case 27:pg(f);case 26:case 5:fa(u,f,a),a&&r===null&&_&4&&hg(f),yo(f,f.return);break;case 12:fa(u,f,a);break;case 31:fa(u,f,a),a&&_&4&&xg(u,f);break;case 13:fa(u,f,a),a&&_&4&&Sg(u,f);break;case 22:f.memoizedState===null&&fa(u,f,a),yo(f,f.return);break;case 30:break;default:fa(u,f,a)}n=n.sibling}}function Rf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&oo(a))}function Cf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&oo(t))}function wi(t,n,a,r){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Eg(t,n,a,r),n=n.sibling}function Eg(t,n,a,r){var u=n.flags;switch(n.tag){case 0:case 11:case 15:wi(t,n,a,r),u&2048&&Mo(9,n);break;case 1:wi(t,n,a,r);break;case 3:wi(t,n,a,r),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&oo(t)));break;case 12:if(u&2048){wi(t,n,a,r),t=n.stateNode;try{var f=n.memoizedProps,_=f.id,R=f.onPostCommit;typeof R=="function"&&R(_,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(B){Ht(n,n.return,B)}}else wi(t,n,a,r);break;case 31:wi(t,n,a,r);break;case 13:wi(t,n,a,r);break;case 23:break;case 22:f=n.stateNode,_=n.alternate,n.memoizedState!==null?f._visibility&2?wi(t,n,a,r):Eo(t,n):f._visibility&2?wi(t,n,a,r):(f._visibility|=2,rr(t,n,a,r,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Rf(_,n);break;case 24:wi(t,n,a,r),u&2048&&Cf(n.alternate,n);break;default:wi(t,n,a,r)}}function rr(t,n,a,r,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,_=n,R=a,B=r,ne=_.flags;switch(_.tag){case 0:case 11:case 15:rr(f,_,R,B,u),Mo(8,_);break;case 23:break;case 22:var ge=_.stateNode;_.memoizedState!==null?ge._visibility&2?rr(f,_,R,B,u):Eo(f,_):(ge._visibility|=2,rr(f,_,R,B,u)),u&&ne&2048&&Rf(_.alternate,_);break;case 24:rr(f,_,R,B,u),u&&ne&2048&&Cf(_.alternate,_);break;default:rr(f,_,R,B,u)}n=n.sibling}}function Eo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,r=n,u=r.flags;switch(r.tag){case 22:Eo(a,r),u&2048&&Rf(r.alternate,r);break;case 24:Eo(a,r),u&2048&&Cf(r.alternate,r);break;default:Eo(a,r)}n=n.sibling}}var bo=8192;function or(t,n,a){if(t.subtreeFlags&bo)for(t=t.child;t!==null;)bg(t,n,a),t=t.sibling}function bg(t,n,a){switch(t.tag){case 26:or(t,n,a),t.flags&bo&&t.memoizedState!==null&&wS(a,Ci,t.memoizedState,t.memoizedProps);break;case 5:or(t,n,a);break;case 3:case 4:var r=Ci;Ci=tc(t.stateNode.containerInfo),or(t,n,a),Ci=r;break;case 22:t.memoizedState===null&&(r=t.alternate,r!==null&&r.memoizedState!==null?(r=bo,bo=16777216,or(t,n,a),bo=r):or(t,n,a));break;default:or(t,n,a)}}function Tg(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function To(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];En=r,Rg(r,t)}Tg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Ag(t),t=t.sibling}function Ag(t){switch(t.tag){case 0:case 11:case 15:To(t),t.flags&2048&&Fa(9,t,t.return);break;case 3:To(t);break;case 12:To(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Vl(t)):To(t);break;default:To(t)}}function Vl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];En=r,Rg(r,t)}Tg(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Fa(8,n,n.return),Vl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Vl(n));break;default:Vl(n)}t=t.sibling}}function Rg(t,n){for(;En!==null;){var a=En;switch(a.tag){case 0:case 11:case 15:Fa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:oo(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,En=r;else e:for(a=t;En!==null;){r=En;var u=r.sibling,f=r.return;if(_g(r),r===a){En=null;break e}if(u!==null){u.return=f,En=u;break e}En=f}}}var Xx={getCacheForType:function(t){var n=Rn(dn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Rn(dn).controller.signal}},Wx=typeof WeakMap=="function"?WeakMap:Map,Lt=0,Zt=null,gt=null,xt=0,Ft=0,oi=null,Ha=!1,lr=!1,wf=!1,ha=0,rn=0,Ga=0,As=0,Df=0,li=0,cr=0,Ao=null,Yn=null,Uf=!1,kl=0,Cg=0,Xl=1/0,Wl=null,Va=null,xn=0,ka=null,ur=null,da=0,Lf=0,Nf=null,wg=null,Ro=0,Of=null;function ci(){return(Lt&2)!==0&&xt!==0?xt&-xt:P.T!==null?Hf():Kr()}function Dg(){if(li===0)if((xt&536870912)===0||yt){var t=Ne;Ne<<=1,(Ne&3932160)===0&&(Ne=262144),li=t}else li=536870912;return t=si.current,t!==null&&(t.flags|=32),li}function Zn(t,n,a){(t===Zt&&(Ft===2||Ft===9)||t.cancelPendingCommit!==null)&&(fr(t,0),Xa(t,xt,li,!1)),Ve(t,a),((Lt&2)===0||t!==Zt)&&(t===Zt&&((Lt&2)===0&&(As|=a),rn===4&&Xa(t,xt,li,!1)),Gi(t))}function Ug(t,n,a){if((Lt&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Re(t,n),u=r?Zx(t,n):If(t,n,!0),f=r;do{if(u===0){lr&&!r&&Xa(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!qx(a)){u=If(t,n,!1),f=!1;continue}if(u===2){if(f=n,t.errorRecoveryDisabledLanes&f)var _=0;else _=t.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){n=_;e:{var R=t;u=Ao;var B=R.current.memoizedState.isDehydrated;if(B&&(fr(R,_).flags|=256),_=If(R,_,!1),_!==2){if(wf&&!B){R.errorRecoveryDisabledLanes|=f,As|=f,u=4;break e}f=Yn,Yn=u,f!==null&&(Yn===null?Yn=f:Yn.push.apply(Yn,f))}u=_}if(f=!1,u!==2)continue}}if(u===1){fr(t,0),Xa(t,n,0,!0);break}e:{switch(r=t,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Xa(r,n,li,!Ha);break e;case 2:Yn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=kl+300-Dt(),10<u)){if(Xa(r,n,li,!Ha),pe(r,0,!0)!==0)break e;da=n,r.timeoutHandle=l0(Lg.bind(null,r,a,Yn,Wl,Uf,n,li,As,cr,Ha,f,"Throttled",-0,0),u);break e}Lg(r,a,Yn,Wl,Uf,n,li,As,cr,Ha,f,null,-0,0)}}break}while(!0);Gi(t)}function Lg(t,n,a,r,u,f,_,R,B,ne,ge,Ee,oe,ce){if(t.timeoutHandle=-1,Ee=n.subtreeFlags,Ee&8192||(Ee&16785408)===16785408){Ee={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ji},bg(n,f,Ee);var Ye=(f&62914560)===f?kl-Dt():(f&4194048)===f?Cg-Dt():0;if(Ye=DS(Ee,Ye),Ye!==null){da=f,t.cancelPendingCommit=Ye(Hg.bind(null,t,n,f,a,r,u,_,R,B,ge,Ee,null,oe,ce)),Xa(t,f,_,!ne);return}}Hg(t,n,f,a,r,u,_,R,B)}function qx(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var u=a[r],f=u.getSnapshot;u=u.value;try{if(!ii(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Xa(t,n,a,r){n&=~Df,n&=~As,t.suspendedLanes|=n,t.pingedLanes&=~n,r&&(t.warmLanes|=n),r=t.expirationTimes;for(var u=n;0<u;){var f=31-Fe(u),_=1<<f;r[f]=-1,u&=~_}a!==0&&Ut(t,a,n)}function ql(){return(Lt&6)===0?(Co(0),!1):!0}function Pf(){if(gt!==null){if(Ft===0)var t=gt.return;else t=gt,na=_s=null,Qu(t),tr=null,co=0,t=gt;for(;t!==null;)cg(t.alternate,t),t=t.return;gt=null}}function fr(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,hS(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),da=0,Pf(),Zt=t,gt=a=ea(t.current,null),xt=n,Ft=0,oi=null,Ha=!1,lr=Re(t,n),wf=!1,cr=li=Df=As=Ga=rn=0,Yn=Ao=null,Uf=!1,(n&8)!==0&&(n|=n&32);var r=t.entangledLanes;if(r!==0)for(t=t.entanglements,r&=n;0<r;){var u=31-Fe(r),f=1<<u;n|=t[u],r&=~f}return ha=n,dl(),a}function Ng(t,n){ct=null,P.H=vo,n===er||n===Ml?(n=Kp(),Ft=3):n===Bu?(n=Kp(),Ft=4):Ft=n===df?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,oi=n,gt===null&&(rn=1,Pl(t,pi(n,t.current)))}function Og(){var t=si.current;return t===null?!0:(xt&4194048)===xt?vi===null:(xt&62914560)===xt||(xt&536870912)!==0?t===vi:!1}function Pg(){var t=P.H;return P.H=vo,t===null?vo:t}function Ig(){var t=P.A;return P.A=Xx,t}function Yl(){rn=4,Ha||(xt&4194048)!==xt&&si.current!==null||(lr=!0),(Ga&134217727)===0&&(As&134217727)===0||Zt===null||Xa(Zt,xt,li,!1)}function If(t,n,a){var r=Lt;Lt|=2;var u=Pg(),f=Ig();(Zt!==t||xt!==n)&&(Wl=null,fr(t,n)),n=!1;var _=rn;e:do try{if(Ft!==0&&gt!==null){var R=gt,B=oi;switch(Ft){case 8:Pf(),_=6;break e;case 3:case 2:case 9:case 6:si.current===null&&(n=!0);var ne=Ft;if(Ft=0,oi=null,hr(t,R,B,ne),a&&lr){_=0;break e}break;default:ne=Ft,Ft=0,oi=null,hr(t,R,B,ne)}}Yx(),_=rn;break}catch(ge){Ng(t,ge)}while(!0);return n&&t.shellSuspendCounter++,na=_s=null,Lt=r,P.H=u,P.A=f,gt===null&&(Zt=null,xt=0,dl()),_}function Yx(){for(;gt!==null;)zg(gt)}function Zx(t,n){var a=Lt;Lt|=2;var r=Pg(),u=Ig();Zt!==t||xt!==n?(Wl=null,Xl=Dt()+500,fr(t,n)):lr=Re(t,n);e:do try{if(Ft!==0&&gt!==null){n=gt;var f=oi;t:switch(Ft){case 1:Ft=0,oi=null,hr(t,n,f,1);break;case 2:case 9:if(Yp(f)){Ft=0,oi=null,Bg(n);break}n=function(){Ft!==2&&Ft!==9||Zt!==t||(Ft=7),Gi(t)},f.then(n,n);break e;case 3:Ft=7;break e;case 4:Ft=5;break e;case 7:Yp(f)?(Ft=0,oi=null,Bg(n)):(Ft=0,oi=null,hr(t,n,f,7));break;case 5:var _=null;switch(gt.tag){case 26:_=gt.memoizedState;case 5:case 27:var R=gt;if(_?E0(_):R.stateNode.complete){Ft=0,oi=null;var B=R.sibling;if(B!==null)gt=B;else{var ne=R.return;ne!==null?(gt=ne,Zl(ne)):gt=null}break t}}Ft=0,oi=null,hr(t,n,f,5);break;case 6:Ft=0,oi=null,hr(t,n,f,6);break;case 8:Pf(),rn=6;break e;default:throw Error(s(462))}}Kx();break}catch(ge){Ng(t,ge)}while(!0);return na=_s=null,P.H=r,P.A=u,Lt=a,gt!==null?0:(Zt=null,xt=0,dl(),rn)}function Kx(){for(;gt!==null&&!Qt();)zg(gt)}function zg(t){var n=og(t.alternate,t,ha);t.memoizedProps=t.pendingProps,n===null?Zl(t):gt=n}function Bg(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=tg(a,n,n.pendingProps,n.type,void 0,xt);break;case 11:n=tg(a,n,n.pendingProps,n.type.render,n.ref,xt);break;case 5:Qu(n);default:cg(a,n),n=gt=Ip(n,ha),n=og(a,n,ha)}t.memoizedProps=t.pendingProps,n===null?Zl(t):gt=n}function hr(t,n,a,r){na=_s=null,Qu(n),tr=null,co=0;var u=n.return;try{if(zx(t,u,n,a,xt)){rn=1,Pl(t,pi(a,t.current)),gt=null;return}}catch(f){if(u!==null)throw gt=u,f;rn=1,Pl(t,pi(a,t.current)),gt=null;return}n.flags&32768?(yt||r===1?t=!0:lr||(xt&536870912)!==0?t=!1:(Ha=t=!0,(r===2||r===9||r===3||r===6)&&(r=si.current,r!==null&&r.tag===13&&(r.flags|=16384))),Fg(n,t)):Zl(n)}function Zl(t){var n=t;do{if((n.flags&32768)!==0){Fg(n,Ha);return}t=n.return;var a=Hx(n.alternate,n,ha);if(a!==null){gt=a;return}if(n=n.sibling,n!==null){gt=n;return}gt=n=t}while(n!==null);rn===0&&(rn=5)}function Fg(t,n){do{var a=Gx(t.alternate,t);if(a!==null){a.flags&=32767,gt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){gt=t;return}gt=t=a}while(t!==null);rn=6,gt=null}function Hg(t,n,a,r,u,f,_,R,B){t.cancelPendingCommit=null;do Kl();while(xn!==0);if((Lt&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=Eu,Vt(t,a,f,_,R,B),t===Zt&&(gt=Zt=null,xt=0),ur=n,ka=t,da=a,Lf=f,Nf=u,wg=r,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,$x(K,function(){return Wg(),null})):(t.callbackNode=null,t.callbackPriority=0),r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=P.T,P.T=null,u=F.p,F.p=2,_=Lt,Lt|=4;try{Vx(t,n,a)}finally{Lt=_,F.p=u,P.T=r}}xn=1,Gg(),Vg(),kg()}}function Gg(){if(xn===1){xn=0;var t=ka,n=ur,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=P.T,P.T=null;var r=F.p;F.p=2;var u=Lt;Lt|=4;try{Mg(n,t);var f=Zf,_=Rp(t.containerInfo),R=f.focusedElem,B=f.selectionRange;if(_!==R&&R&&R.ownerDocument&&Ap(R.ownerDocument.documentElement,R)){if(B!==null&&vu(R)){var ne=B.start,ge=B.end;if(ge===void 0&&(ge=ne),"selectionStart"in R)R.selectionStart=ne,R.selectionEnd=Math.min(ge,R.value.length);else{var Ee=R.ownerDocument||document,oe=Ee&&Ee.defaultView||window;if(oe.getSelection){var ce=oe.getSelection(),Ye=R.textContent.length,tt=Math.min(B.start,Ye),Wt=B.end===void 0?tt:Math.min(B.end,Ye);!ce.extend&&tt>Wt&&(_=Wt,Wt=tt,tt=_);var Z=Tp(R,tt),X=Tp(R,Wt);if(Z&&X&&(ce.rangeCount!==1||ce.anchorNode!==Z.node||ce.anchorOffset!==Z.offset||ce.focusNode!==X.node||ce.focusOffset!==X.offset)){var te=Ee.createRange();te.setStart(Z.node,Z.offset),ce.removeAllRanges(),tt>Wt?(ce.addRange(te),ce.extend(X.node,X.offset)):(te.setEnd(X.node,X.offset),ce.addRange(te))}}}}for(Ee=[],ce=R;ce=ce.parentNode;)ce.nodeType===1&&Ee.push({element:ce,left:ce.scrollLeft,top:ce.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<Ee.length;R++){var xe=Ee[R];xe.element.scrollLeft=xe.left,xe.element.scrollTop=xe.top}}oc=!!Yf,Zf=Yf=null}finally{Lt=u,F.p=r,P.T=a}}t.current=n,xn=2}}function Vg(){if(xn===2){xn=0;var t=ka,n=ur,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=P.T,P.T=null;var r=F.p;F.p=2;var u=Lt;Lt|=4;try{gg(t,n.alternate,n)}finally{Lt=u,F.p=r,P.T=a}}xn=3}}function kg(){if(xn===4||xn===3){xn=0,W();var t=ka,n=ur,a=da,r=wg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?xn=5:(xn=0,ur=ka=null,Xg(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Va=null),Zr(a),n=n.stateNode,fe&&typeof fe.onCommitFiberRoot=="function")try{fe.onCommitFiberRoot(ue,n,void 0,(n.current.flags&128)===128)}catch{}if(r!==null){n=P.T,u=F.p,F.p=2,P.T=null;try{for(var f=t.onRecoverableError,_=0;_<r.length;_++){var R=r[_];f(R.value,{componentStack:R.stack})}}finally{P.T=n,F.p=u}}(da&3)!==0&&Kl(),Gi(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===Of?Ro++:(Ro=0,Of=t):Ro=0,Co(0)}}function Xg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,oo(n)))}function Kl(){return Gg(),Vg(),kg(),Wg()}function Wg(){if(xn!==5)return!1;var t=ka,n=Lf;Lf=0;var a=Zr(da),r=P.T,u=F.p;try{F.p=32>a?32:a,P.T=null,a=Nf,Nf=null;var f=ka,_=da;if(xn=0,ur=ka=null,da=0,(Lt&6)!==0)throw Error(s(331));var R=Lt;if(Lt|=4,Ag(f.current),Eg(f,f.current,_,a),Lt=R,Co(0,!1),fe&&typeof fe.onPostCommitFiberRoot=="function")try{fe.onPostCommitFiberRoot(ue,f)}catch{}return!0}finally{F.p=u,P.T=r,Xg(t,n)}}function qg(t,n,a){n=pi(a,n),n=hf(t.stateNode,n,2),t=Ia(t,n,2),t!==null&&(Ve(t,2),Gi(t))}function Ht(t,n,a){if(t.tag===3)qg(t,t,a);else for(;n!==null;){if(n.tag===3){qg(n,t,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Va===null||!Va.has(r))){t=pi(a,t),a=Ym(2),r=Ia(n,a,2),r!==null&&(Zm(a,r,n,t),Ve(r,2),Gi(r));break}}n=n.return}}function zf(t,n,a){var r=t.pingCache;if(r===null){r=t.pingCache=new Wx;var u=new Set;r.set(n,u)}else u=r.get(n),u===void 0&&(u=new Set,r.set(n,u));u.has(a)||(wf=!0,u.add(a),t=Qx.bind(null,t,n,a),n.then(t,t))}function Qx(t,n,a){var r=t.pingCache;r!==null&&r.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Zt===t&&(xt&a)===a&&(rn===4||rn===3&&(xt&62914560)===xt&&300>Dt()-kl?(Lt&2)===0&&fr(t,0):Df|=a,cr===xt&&(cr=0)),Gi(t)}function Yg(t,n){n===0&&(n=ye()),t=ps(t,n),t!==null&&(Ve(t,n),Gi(t))}function Jx(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),Yg(t,a)}function jx(t,n){var a=0;switch(t.tag){case 31:case 13:var r=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:r=t.stateNode;break;case 22:r=t.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),Yg(t,a)}function $x(t,n){return en(t,n)}var Ql=null,dr=null,Bf=!1,Jl=!1,Ff=!1,Wa=0;function Gi(t){t!==dr&&t.next===null&&(dr===null?Ql=dr=t:dr=dr.next=t),Jl=!0,Bf||(Bf=!0,tS())}function Co(t,n){if(!Ff&&Jl){Ff=!0;do for(var a=!1,r=Ql;r!==null;){if(t!==0){var u=r.pendingLanes;if(u===0)var f=0;else{var _=r.suspendedLanes,R=r.pingedLanes;f=(1<<31-Fe(42|t)+1)-1,f&=u&~(_&~R),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Jg(r,f))}else f=xt,f=pe(r,r===Zt?f:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(f&3)===0||Re(r,f)||(a=!0,Jg(r,f));r=r.next}while(a);Ff=!1}}function eS(){Zg()}function Zg(){Jl=Bf=!1;var t=0;Wa!==0&&fS()&&(t=Wa);for(var n=Dt(),a=null,r=Ql;r!==null;){var u=r.next,f=Kg(r,n);f===0?(r.next=null,a===null?Ql=u:a.next=u,u===null&&(dr=a)):(a=r,(t!==0||(f&3)!==0)&&(Jl=!0)),r=u}xn!==0&&xn!==5||Co(t),Wa!==0&&(Wa=0)}function Kg(t,n){for(var a=t.suspendedLanes,r=t.pingedLanes,u=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var _=31-Fe(f),R=1<<_,B=u[_];B===-1?((R&a)===0||(R&r)!==0)&&(u[_]=Ie(R,n)):B<=n&&(t.expiredLanes|=R),f&=~R}if(n=Zt,a=xt,a=pe(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r=t.callbackNode,a===0||t===n&&(Ft===2||Ft===9)||t.cancelPendingCommit!==null)return r!==null&&r!==null&&Pt(r),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Re(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(r!==null&&Pt(r),Zr(a)){case 2:case 8:a=M;break;case 32:a=K;break;case 268435456:a=he;break;default:a=K}return r=Qg.bind(null,t),a=en(a,r),t.callbackPriority=n,t.callbackNode=a,n}return r!==null&&r!==null&&Pt(r),t.callbackPriority=2,t.callbackNode=null,2}function Qg(t,n){if(xn!==0&&xn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Kl()&&t.callbackNode!==a)return null;var r=xt;return r=pe(t,t===Zt?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r===0?null:(Ug(t,r,n),Kg(t,Dt()),t.callbackNode!=null&&t.callbackNode===a?Qg.bind(null,t):null)}function Jg(t,n){if(Kl())return null;Ug(t,n,!0)}function tS(){dS(function(){(Lt&6)!==0?en(U,eS):Zg()})}function Hf(){if(Wa===0){var t=js;t===0&&(t=Qe,Qe<<=1,(Qe&261888)===0&&(Qe=256)),Wa=t}return Wa}function jg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:us(""+t)}function $g(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function nS(t,n,a,r,u){if(n==="submit"&&a&&a.stateNode===u){var f=jg((u[Tn]||null).action),_=r.submitter;_&&(n=(n=_[Tn]||null)?jg(n.formAction):_.getAttribute("formAction"),n!==null&&(f=n,_=null));var R=new cl("action","action",null,r,u);t.push({event:R,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Wa!==0){var B=_?$g(u,_):new FormData(u);rf(a,{pending:!0,data:B,method:u.method,action:f},null,B)}}else typeof f=="function"&&(R.preventDefault(),B=_?$g(u,_):new FormData(u),rf(a,{pending:!0,data:B,method:u.method,action:f},f,B))},currentTarget:u}]})}}for(var Gf=0;Gf<yu.length;Gf++){var Vf=yu[Gf],iS=Vf.toLowerCase(),aS=Vf[0].toUpperCase()+Vf.slice(1);Ri(iS,"on"+aS)}Ri(Dp,"onAnimationEnd"),Ri(Up,"onAnimationIteration"),Ri(Lp,"onAnimationStart"),Ri("dblclick","onDoubleClick"),Ri("focusin","onFocus"),Ri("focusout","onBlur"),Ri(Sx,"onTransitionRun"),Ri(Mx,"onTransitionStart"),Ri(yx,"onTransitionCancel"),Ri(Np,"onTransitionEnd"),re("onMouseEnter",["mouseout","mouseover"]),re("onMouseLeave",["mouseout","mouseover"]),re("onPointerEnter",["pointerout","pointerover"]),re("onPointerLeave",["pointerout","pointerover"]),q("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),q("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),q("onBeforeInput",["compositionend","keypress","textInput","paste"]),q("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),q("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),q("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),sS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(wo));function e0(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var r=t[a],u=r.event;r=r.listeners;e:{var f=void 0;if(n)for(var _=r.length-1;0<=_;_--){var R=r[_],B=R.instance,ne=R.currentTarget;if(R=R.listener,B!==f&&u.isPropagationStopped())break e;f=R,u.currentTarget=ne;try{f(u)}catch(ge){hl(ge)}u.currentTarget=null,f=B}else for(_=0;_<r.length;_++){if(R=r[_],B=R.instance,ne=R.currentTarget,R=R.listener,B!==f&&u.isPropagationStopped())break e;f=R,u.currentTarget=ne;try{f(u)}catch(ge){hl(ge)}u.currentTarget=null,f=B}}}}function _t(t,n){var a=n[os];a===void 0&&(a=n[os]=new Set);var r=t+"__bubble";a.has(r)||(t0(n,t,2,!1),a.add(r))}function kf(t,n,a){var r=0;n&&(r|=4),t0(a,t,r,n)}var jl="_reactListening"+Math.random().toString(36).slice(2);function Xf(t){if(!t[jl]){t[jl]=!0,sl.forEach(function(a){a!=="selectionchange"&&(sS.has(a)||kf(a,!1,t),kf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[jl]||(n[jl]=!0,kf("selectionchange",!1,n))}}function t0(t,n,a,r){switch(D0(n)){case 2:var u=NS;break;case 8:u=OS;break;default:u=sh}a=u.bind(null,n,a,t),u=void 0,!cu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),r?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function Wf(t,n,a,r,u){var f=r;if((n&1)===0&&(n&2)===0&&r!==null)e:for(;;){if(r===null)return;var _=r.tag;if(_===3||_===4){var R=r.stateNode.containerInfo;if(R===u)break;if(_===4)for(_=r.return;_!==null;){var B=_.tag;if((B===3||B===4)&&_.stateNode.containerInfo===u)return;_=_.return}for(;R!==null;){if(_=Qi(R),_===null)return;if(B=_.tag,B===5||B===6||B===26||B===27){r=f=_;continue e}R=R.parentNode}}r=r.return}rp(function(){var ne=f,ge=ou(a),Ee=[];e:{var oe=Op.get(t);if(oe!==void 0){var ce=cl,Ye=t;switch(t){case"keypress":if(ol(a)===0)break e;case"keydown":case"keyup":ce=jv;break;case"focusin":Ye="focus",ce=du;break;case"focusout":Ye="blur",ce=du;break;case"beforeblur":case"afterblur":ce=du;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ce=cp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ce=Hv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ce=tx;break;case Dp:case Up:case Lp:ce=kv;break;case Np:ce=ix;break;case"scroll":case"scrollend":ce=Bv;break;case"wheel":ce=sx;break;case"copy":case"cut":case"paste":ce=Wv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ce=fp;break;case"toggle":case"beforetoggle":ce=ox}var tt=(n&4)!==0,Wt=!tt&&(t==="scroll"||t==="scrollend"),Z=tt?oe!==null?oe+"Capture":null:oe;tt=[];for(var X=ne,te;X!==null;){var xe=X;if(te=xe.stateNode,xe=xe.tag,xe!==5&&xe!==26&&xe!==27||te===null||Z===null||(xe=Qr(X,Z),xe!=null&&tt.push(Do(X,xe,te))),Wt)break;X=X.return}0<tt.length&&(oe=new ce(oe,Ye,null,a,ge),Ee.push({event:oe,listeners:tt}))}}if((n&7)===0){e:{if(oe=t==="mouseover"||t==="pointerover",ce=t==="mouseout"||t==="pointerout",oe&&a!==ru&&(Ye=a.relatedTarget||a.fromElement)&&(Qi(Ye)||Ye[Vn]))break e;if((ce||oe)&&(oe=ge.window===ge?ge:(oe=ge.ownerDocument)?oe.defaultView||oe.parentWindow:window,ce?(Ye=a.relatedTarget||a.toElement,ce=ne,Ye=Ye?Qi(Ye):null,Ye!==null&&(Wt=c(Ye),tt=Ye.tag,Ye!==Wt||tt!==5&&tt!==27&&tt!==6)&&(Ye=null)):(ce=null,Ye=ne),ce!==Ye)){if(tt=cp,xe="onMouseLeave",Z="onMouseEnter",X="mouse",(t==="pointerout"||t==="pointerover")&&(tt=fp,xe="onPointerLeave",Z="onPointerEnter",X="pointer"),Wt=ce==null?oe:cs(ce),te=Ye==null?oe:cs(Ye),oe=new tt(xe,X+"leave",ce,a,ge),oe.target=Wt,oe.relatedTarget=te,xe=null,Qi(ge)===ne&&(tt=new tt(Z,X+"enter",Ye,a,ge),tt.target=te,tt.relatedTarget=Wt,xe=tt),Wt=xe,ce&&Ye)t:{for(tt=rS,Z=ce,X=Ye,te=0,xe=Z;xe;xe=tt(xe))te++;xe=0;for(var et=X;et;et=tt(et))xe++;for(;0<te-xe;)Z=tt(Z),te--;for(;0<xe-te;)X=tt(X),xe--;for(;te--;){if(Z===X||X!==null&&Z===X.alternate){tt=Z;break t}Z=tt(Z),X=tt(X)}tt=null}else tt=null;ce!==null&&n0(Ee,oe,ce,tt,!1),Ye!==null&&Wt!==null&&n0(Ee,Wt,Ye,tt,!0)}}e:{if(oe=ne?cs(ne):window,ce=oe.nodeName&&oe.nodeName.toLowerCase(),ce==="select"||ce==="input"&&oe.type==="file")var Ct=xp;else if(_p(oe))if(Sp)Ct=_x;else{Ct=mx;var Ze=px}else ce=oe.nodeName,!ce||ce.toLowerCase()!=="input"||oe.type!=="checkbox"&&oe.type!=="radio"?ne&&Nt(ne.elementType)&&(Ct=xp):Ct=gx;if(Ct&&(Ct=Ct(t,ne))){vp(Ee,Ct,a,ge);break e}Ze&&Ze(t,oe,ne),t==="focusout"&&ne&&oe.type==="number"&&ne.memoizedProps.value!=null&&mt(oe,"number",oe.value)}switch(Ze=ne?cs(ne):window,t){case"focusin":(_p(Ze)||Ze.contentEditable==="true")&&(Xs=Ze,xu=ne,ao=null);break;case"focusout":ao=xu=Xs=null;break;case"mousedown":Su=!0;break;case"contextmenu":case"mouseup":case"dragend":Su=!1,Cp(Ee,a,ge);break;case"selectionchange":if(xx)break;case"keydown":case"keyup":Cp(Ee,a,ge)}var ft;if(mu)e:{switch(t){case"compositionstart":var St="onCompositionStart";break e;case"compositionend":St="onCompositionEnd";break e;case"compositionupdate":St="onCompositionUpdate";break e}St=void 0}else ks?mp(t,a)&&(St="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(St="onCompositionStart");St&&(hp&&a.locale!=="ko"&&(ks||St!=="onCompositionStart"?St==="onCompositionEnd"&&ks&&(ft=op()):(wa=ge,uu="value"in wa?wa.value:wa.textContent,ks=!0)),Ze=$l(ne,St),0<Ze.length&&(St=new up(St,t,null,a,ge),Ee.push({event:St,listeners:Ze}),ft?St.data=ft:(ft=gp(a),ft!==null&&(St.data=ft)))),(ft=cx?ux(t,a):fx(t,a))&&(St=$l(ne,"onBeforeInput"),0<St.length&&(Ze=new up("onBeforeInput","beforeinput",null,a,ge),Ee.push({event:Ze,listeners:St}),Ze.data=ft)),nS(Ee,t,ne,a,ge)}e0(Ee,n)})}function Do(t,n,a){return{instance:t,listener:n,currentTarget:a}}function $l(t,n){for(var a=n+"Capture",r=[];t!==null;){var u=t,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Qr(t,a),u!=null&&r.unshift(Do(t,u,f)),u=Qr(t,n),u!=null&&r.push(Do(t,u,f))),t.tag===3)return r;t=t.return}return[]}function rS(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function n0(t,n,a,r,u){for(var f=n._reactName,_=[];a!==null&&a!==r;){var R=a,B=R.alternate,ne=R.stateNode;if(R=R.tag,B!==null&&B===r)break;R!==5&&R!==26&&R!==27||ne===null||(B=ne,u?(ne=Qr(a,f),ne!=null&&_.unshift(Do(a,ne,B))):u||(ne=Qr(a,f),ne!=null&&_.push(Do(a,ne,B)))),a=a.return}_.length!==0&&t.push({event:n,listeners:_})}var oS=/\r\n?/g,lS=/\u0000|\uFFFD/g;function i0(t){return(typeof t=="string"?t:""+t).replace(oS,`
`).replace(lS,"")}function a0(t,n){return n=i0(n),i0(t)===n}function Xt(t,n,a,r,u,f){switch(a){case"children":typeof r=="string"?n==="body"||n==="textarea"&&r===""||ni(t,r):(typeof r=="number"||typeof r=="bigint")&&n!=="body"&&ni(t,""+r);break;case"className":qe(t,"class",r);break;case"tabIndex":qe(t,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":qe(t,a,r);break;case"style":Ai(t,r,f);break;case"data":if(n!=="object"){qe(t,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=us(""+r),t.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Xt(t,n,"name",u.name,u,null),Xt(t,n,"formEncType",u.formEncType,u,null),Xt(t,n,"formMethod",u.formMethod,u,null),Xt(t,n,"formTarget",u.formTarget,u,null)):(Xt(t,n,"encType",u.encType,u,null),Xt(t,n,"method",u.method,u,null),Xt(t,n,"target",u.target,u,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=us(""+r),t.setAttribute(a,r);break;case"onClick":r!=null&&(t.onclick=ji);break;case"onScroll":r!=null&&_t("scroll",t);break;case"onScrollEnd":r!=null&&_t("scrollend",t);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":t.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){t.removeAttribute("xlink:href");break}a=us(""+r),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""+r):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":r===!0?t.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,r):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?t.setAttribute(a,r):t.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?t.removeAttribute(a):t.setAttribute(a,r);break;case"popover":_t("beforetoggle",t),_t("toggle",t),Pe(t,"popover",r);break;case"xlinkActuate":We(t,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":We(t,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":We(t,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":We(t,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":We(t,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":We(t,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":We(t,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":We(t,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":We(t,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":Pe(t,"is",r);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=zi.get(a)||a,Pe(t,a,r))}}function qf(t,n,a,r,u,f){switch(a){case"style":Ai(t,r,f);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof r=="string"?ni(t,r):(typeof r=="number"||typeof r=="bigint")&&ni(t,""+r);break;case"onScroll":r!=null&&_t("scroll",t);break;case"onScrollEnd":r!=null&&_t("scrollend",t);break;case"onClick":r!=null&&(t.onclick=ji);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!A.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=t[Tn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,u),typeof r=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,r,u);break e}a in t?t[a]=r:r===!0?t.setAttribute(a,""):Pe(t,a,r)}}}function wn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":_t("error",t),_t("load",t);var r=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var _=a[f];if(_!=null)switch(f){case"src":r=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Xt(t,n,f,_,a,null)}}u&&Xt(t,n,"srcSet",a.srcSet,a,null),r&&Xt(t,n,"src",a.src,a,null);return;case"input":_t("invalid",t);var R=f=_=u=null,B=null,ne=null;for(r in a)if(a.hasOwnProperty(r)){var ge=a[r];if(ge!=null)switch(r){case"name":u=ge;break;case"type":_=ge;break;case"checked":B=ge;break;case"defaultChecked":ne=ge;break;case"value":f=ge;break;case"defaultValue":R=ge;break;case"children":case"dangerouslySetInnerHTML":if(ge!=null)throw Error(s(137,n));break;default:Xt(t,n,r,ge,a,null)}}Ln(t,f,R,B,ne,_,u,!1);return;case"select":_t("invalid",t),r=_=f=null;for(u in a)if(a.hasOwnProperty(u)&&(R=a[u],R!=null))switch(u){case"value":f=R;break;case"defaultValue":_=R;break;case"multiple":r=R;default:Xt(t,n,u,R,a,null)}n=f,a=_,t.multiple=!!r,n!=null?vn(t,!!r,n,!1):a!=null&&vn(t,!!r,a,!0);return;case"textarea":_t("invalid",t),f=u=r=null;for(_ in a)if(a.hasOwnProperty(_)&&(R=a[_],R!=null))switch(_){case"value":r=R;break;case"defaultValue":u=R;break;case"children":f=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(s(91));break;default:Xt(t,n,_,R,a,null)}Ti(t,r,u,f);return;case"option":for(B in a)if(a.hasOwnProperty(B)&&(r=a[B],r!=null))switch(B){case"selected":t.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:Xt(t,n,B,r,a,null)}return;case"dialog":_t("beforetoggle",t),_t("toggle",t),_t("cancel",t),_t("close",t);break;case"iframe":case"object":_t("load",t);break;case"video":case"audio":for(r=0;r<wo.length;r++)_t(wo[r],t);break;case"image":_t("error",t),_t("load",t);break;case"details":_t("toggle",t);break;case"embed":case"source":case"link":_t("error",t),_t("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ne in a)if(a.hasOwnProperty(ne)&&(r=a[ne],r!=null))switch(ne){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Xt(t,n,ne,r,a,null)}return;default:if(Nt(n)){for(ge in a)a.hasOwnProperty(ge)&&(r=a[ge],r!==void 0&&qf(t,n,ge,r,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(r=a[R],r!=null&&Xt(t,n,R,r,a,null))}function cS(t,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,_=null,R=null,B=null,ne=null,ge=null;for(ce in a){var Ee=a[ce];if(a.hasOwnProperty(ce)&&Ee!=null)switch(ce){case"checked":break;case"value":break;case"defaultValue":B=Ee;default:r.hasOwnProperty(ce)||Xt(t,n,ce,null,r,Ee)}}for(var oe in r){var ce=r[oe];if(Ee=a[oe],r.hasOwnProperty(oe)&&(ce!=null||Ee!=null))switch(oe){case"type":f=ce;break;case"name":u=ce;break;case"checked":ne=ce;break;case"defaultChecked":ge=ce;break;case"value":_=ce;break;case"defaultValue":R=ce;break;case"children":case"dangerouslySetInnerHTML":if(ce!=null)throw Error(s(137,n));break;default:ce!==Ee&&Xt(t,n,oe,ce,r,Ee)}}He(t,_,R,B,ne,ge,f,u);return;case"select":ce=_=R=oe=null;for(f in a)if(B=a[f],a.hasOwnProperty(f)&&B!=null)switch(f){case"value":break;case"multiple":ce=B;default:r.hasOwnProperty(f)||Xt(t,n,f,null,r,B)}for(u in r)if(f=r[u],B=a[u],r.hasOwnProperty(u)&&(f!=null||B!=null))switch(u){case"value":oe=f;break;case"defaultValue":R=f;break;case"multiple":_=f;default:f!==B&&Xt(t,n,u,f,r,B)}n=R,a=_,r=ce,oe!=null?vn(t,!!a,oe,!1):!!r!=!!a&&(n!=null?vn(t,!!a,n,!0):vn(t,!!a,a?[]:"",!1));return;case"textarea":ce=oe=null;for(R in a)if(u=a[R],a.hasOwnProperty(R)&&u!=null&&!r.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:Xt(t,n,R,null,r,u)}for(_ in r)if(u=r[_],f=a[_],r.hasOwnProperty(_)&&(u!=null||f!=null))switch(_){case"value":oe=u;break;case"defaultValue":ce=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&Xt(t,n,_,u,r,f)}ti(t,oe,ce);return;case"option":for(var Ye in a)if(oe=a[Ye],a.hasOwnProperty(Ye)&&oe!=null&&!r.hasOwnProperty(Ye))switch(Ye){case"selected":t.selected=!1;break;default:Xt(t,n,Ye,null,r,oe)}for(B in r)if(oe=r[B],ce=a[B],r.hasOwnProperty(B)&&oe!==ce&&(oe!=null||ce!=null))switch(B){case"selected":t.selected=oe&&typeof oe!="function"&&typeof oe!="symbol";break;default:Xt(t,n,B,oe,r,ce)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var tt in a)oe=a[tt],a.hasOwnProperty(tt)&&oe!=null&&!r.hasOwnProperty(tt)&&Xt(t,n,tt,null,r,oe);for(ne in r)if(oe=r[ne],ce=a[ne],r.hasOwnProperty(ne)&&oe!==ce&&(oe!=null||ce!=null))switch(ne){case"children":case"dangerouslySetInnerHTML":if(oe!=null)throw Error(s(137,n));break;default:Xt(t,n,ne,oe,r,ce)}return;default:if(Nt(n)){for(var Wt in a)oe=a[Wt],a.hasOwnProperty(Wt)&&oe!==void 0&&!r.hasOwnProperty(Wt)&&qf(t,n,Wt,void 0,r,oe);for(ge in r)oe=r[ge],ce=a[ge],!r.hasOwnProperty(ge)||oe===ce||oe===void 0&&ce===void 0||qf(t,n,ge,oe,r,ce);return}}for(var Z in a)oe=a[Z],a.hasOwnProperty(Z)&&oe!=null&&!r.hasOwnProperty(Z)&&Xt(t,n,Z,null,r,oe);for(Ee in r)oe=r[Ee],ce=a[Ee],!r.hasOwnProperty(Ee)||oe===ce||oe==null&&ce==null||Xt(t,n,Ee,oe,r,ce)}function s0(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function uS(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var u=a[r],f=u.transferSize,_=u.initiatorType,R=u.duration;if(f&&R&&s0(_)){for(_=0,R=u.responseEnd,r+=1;r<a.length;r++){var B=a[r],ne=B.startTime;if(ne>R)break;var ge=B.transferSize,Ee=B.initiatorType;ge&&s0(Ee)&&(B=B.responseEnd,_+=ge*(B<R?1:(R-ne)/(B-ne)))}if(--r,n+=8*(f+_)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Yf=null,Zf=null;function ec(t){return t.nodeType===9?t:t.ownerDocument}function r0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function o0(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Kf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Qf=null;function fS(){var t=window.event;return t&&t.type==="popstate"?t===Qf?!1:(Qf=t,!0):(Qf=null,!1)}var l0=typeof setTimeout=="function"?setTimeout:void 0,hS=typeof clearTimeout=="function"?clearTimeout:void 0,c0=typeof Promise=="function"?Promise:void 0,dS=typeof queueMicrotask=="function"?queueMicrotask:typeof c0<"u"?function(t){return c0.resolve(null).then(t).catch(pS)}:l0;function pS(t){setTimeout(function(){throw t})}function qa(t){return t==="head"}function u0(t,n){var a=n,r=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(r===0){t.removeChild(u),_r(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")Uo(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Uo(a);for(var f=a.firstChild;f;){var _=f.nextSibling,R=f.nodeName;f[Ta]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=_}}else a==="body"&&Uo(t.ownerDocument.body);a=u}while(a);_r(n)}function f0(t,n){var a=t;t=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=r}while(a)}function Jf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Jf(a),Aa(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function mS(t,n,a,r){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(r){if(!t[Ta])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=xi(t.nextSibling),t===null)break}return null}function gS(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=xi(t.nextSibling),t===null))return null;return t}function h0(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=xi(t.nextSibling),t===null))return null;return t}function jf(t){return t.data==="$?"||t.data==="$~"}function $f(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function _S(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),t._reactRetry=r}}function xi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var eh=null;function d0(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return xi(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function p0(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function m0(t,n,a){switch(n=ec(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function Uo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Aa(t)}var Si=new Map,g0=new Set;function tc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var pa=F.d;F.d={f:vS,r:xS,D:SS,C:MS,L:yS,m:ES,X:TS,S:bS,M:AS};function vS(){var t=pa.f(),n=ql();return t||n}function xS(t){var n=Ji(t);n!==null&&n.tag===5&&n.type==="form"?Nm(n):pa.r(t)}var pr=typeof document>"u"?null:document;function _0(t,n,a){var r=pr;if(r&&typeof n=="string"&&n){var u=zt(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),g0.has(u)||(g0.add(u),t={rel:t,crossOrigin:a,href:n},r.querySelector(u)===null&&(n=r.createElement("link"),wn(n,"link",t),hn(n),r.head.appendChild(n)))}}function SS(t){pa.D(t),_0("dns-prefetch",t,null)}function MS(t,n){pa.C(t,n),_0("preconnect",t,n)}function yS(t,n,a){pa.L(t,n,a);var r=pr;if(r&&t&&n){var u='link[rel="preload"][as="'+zt(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+zt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+zt(a.imageSizes)+'"]')):u+='[href="'+zt(t)+'"]';var f=u;switch(n){case"style":f=mr(t);break;case"script":f=gr(t)}Si.has(f)||(t=S({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),Si.set(f,t),r.querySelector(u)!==null||n==="style"&&r.querySelector(Lo(f))||n==="script"&&r.querySelector(No(f))||(n=r.createElement("link"),wn(n,"link",t),hn(n),r.head.appendChild(n)))}}function ES(t,n){pa.m(t,n);var a=pr;if(a&&t){var r=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+zt(r)+'"][href="'+zt(t)+'"]',f=u;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=gr(t)}if(!Si.has(f)&&(t=S({rel:"modulepreload",href:t},n),Si.set(f,t),a.querySelector(u)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(No(f)))return}r=a.createElement("link"),wn(r,"link",t),hn(r),a.head.appendChild(r)}}}function bS(t,n,a){pa.S(t,n,a);var r=pr;if(r&&t){var u=Ra(r).hoistableStyles,f=mr(t);n=n||"default";var _=u.get(f);if(!_){var R={loading:0,preload:null};if(_=r.querySelector(Lo(f)))R.loading=5;else{t=S({rel:"stylesheet",href:t,"data-precedence":n},a),(a=Si.get(f))&&th(t,a);var B=_=r.createElement("link");hn(B),wn(B,"link",t),B._p=new Promise(function(ne,ge){B.onload=ne,B.onerror=ge}),B.addEventListener("load",function(){R.loading|=1}),B.addEventListener("error",function(){R.loading|=2}),R.loading|=4,nc(_,n,r)}_={type:"stylesheet",instance:_,count:1,state:R},u.set(f,_)}}}function TS(t,n){pa.X(t,n);var a=pr;if(a&&t){var r=Ra(a).hoistableScripts,u=gr(t),f=r.get(u);f||(f=a.querySelector(No(u)),f||(t=S({src:t,async:!0},n),(n=Si.get(u))&&nh(t,n),f=a.createElement("script"),hn(f),wn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(u,f))}}function AS(t,n){pa.M(t,n);var a=pr;if(a&&t){var r=Ra(a).hoistableScripts,u=gr(t),f=r.get(u);f||(f=a.querySelector(No(u)),f||(t=S({src:t,async:!0,type:"module"},n),(n=Si.get(u))&&nh(t,n),f=a.createElement("script"),hn(f),wn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(u,f))}}function v0(t,n,a,r){var u=(u=ee.current)?tc(u):null;if(!u)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=mr(a.href),a=Ra(u).hoistableStyles,r=a.get(n),r||(r={type:"style",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=mr(a.href);var f=Ra(u).hoistableStyles,_=f.get(t);if(_||(u=u.ownerDocument||u,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,_),(f=u.querySelector(Lo(t)))&&!f._p&&(_.instance=f,_.state.loading=5),Si.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Si.set(t,a),f||RS(u,t,a,_.state))),n&&r===null)throw Error(s(528,""));return _}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=gr(a),a=Ra(u).hoistableScripts,r=a.get(n),r||(r={type:"script",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function mr(t){return'href="'+zt(t)+'"'}function Lo(t){return'link[rel="stylesheet"]['+t+"]"}function x0(t){return S({},t,{"data-precedence":t.precedence,precedence:null})}function RS(t,n,a,r){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?r.loading=1:(n=t.createElement("link"),r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2}),wn(n,"link",a),hn(n),t.head.appendChild(n))}function gr(t){return'[src="'+zt(t)+'"]'}function No(t){return"script[async]"+t}function S0(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=t.querySelector('style[data-href~="'+zt(a.href)+'"]');if(r)return n.instance=r,hn(r),r;var u=S({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(t.ownerDocument||t).createElement("style"),hn(r),wn(r,"style",u),nc(r,a.precedence,t),n.instance=r;case"stylesheet":u=mr(a.href);var f=t.querySelector(Lo(u));if(f)return n.state.loading|=4,n.instance=f,hn(f),f;r=x0(a),(u=Si.get(u))&&th(r,u),f=(t.ownerDocument||t).createElement("link"),hn(f);var _=f;return _._p=new Promise(function(R,B){_.onload=R,_.onerror=B}),wn(f,"link",r),n.state.loading|=4,nc(f,a.precedence,t),n.instance=f;case"script":return f=gr(a.src),(u=t.querySelector(No(f)))?(n.instance=u,hn(u),u):(r=a,(u=Si.get(f))&&(r=S({},a),nh(r,u)),t=t.ownerDocument||t,u=t.createElement("script"),hn(u),wn(u,"link",r),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,nc(r,a.precedence,t));return n.instance}function nc(t,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=r.length?r[r.length-1]:null,f=u,_=0;_<r.length;_++){var R=r[_];if(R.dataset.precedence===n)f=R;else if(f!==u)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function th(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function nh(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var ic=null;function M0(t,n,a){if(ic===null){var r=new Map,u=ic=new Map;u.set(a,r)}else u=ic,r=u.get(a),r||(r=new Map,u.set(a,r));if(r.has(t))return r;for(r.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var f=a[u];if(!(f[Ta]||f[fn]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var _=f.getAttribute(n)||"";_=t+_;var R=r.get(_);R?R.push(f):r.set(_,[f])}}return r}function y0(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function CS(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function E0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function wS(t,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=mr(r.href),f=n.querySelector(Lo(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=ac.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,hn(f);return}f=n.ownerDocument||n,r=x0(r),(u=Si.get(u))&&th(r,u),f=f.createElement("link"),hn(f);var _=f;_._p=new Promise(function(R,B){_.onload=R,_.onerror=B}),wn(f,"link",r),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=ac.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var ih=0;function DS(t,n){return t.stylesheets&&t.count===0&&rc(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var r=setTimeout(function(){if(t.stylesheets&&rc(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&ih===0&&(ih=62500*uS());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&rc(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>ih?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(r),clearTimeout(u)}}:null}function ac(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)rc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var sc=null;function rc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,sc=new Map,n.forEach(US,t),sc=null,ac.call(t))}function US(t,n){if(!(n.state.loading&4)){var a=sc.get(t);if(a)var r=a.get(null);else{a=new Map,sc.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var _=u[f];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(a.set(_.dataset.precedence,_),r=_)}r&&a.set(null,r)}u=n.instance,_=u.getAttribute("data-precedence"),f=a.get(_)||r,f===r&&a.set(null,u),a.set(_,u),this.count++,r=ac.bind(this),u.addEventListener("load",r),u.addEventListener("error",r),f?f.parentNode.insertBefore(u,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Oo={$$typeof:H,Provider:null,Consumer:null,_currentValue:$,_currentValue2:$,_threadCount:0};function LS(t,n,a,r,u,f,_,R,B){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ke(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ke(0),this.hiddenUpdates=ke(null),this.identifierPrefix=r,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=B,this.incompleteTransitions=new Map}function b0(t,n,a,r,u,f,_,R,B,ne,ge,Ee){return t=new LS(t,n,a,_,B,ne,ge,Ee,R),n=1,f===!0&&(n|=24),f=ai(3,null,null,n),t.current=f,f.stateNode=t,n=Pu(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:r,isDehydrated:a,cache:n},Fu(f),t}function T0(t){return t?(t=Ys,t):Ys}function A0(t,n,a,r,u,f){u=T0(u),r.context===null?r.context=u:r.pendingContext=u,r=Pa(n),r.payload={element:a},f=f===void 0?null:f,f!==null&&(r.callback=f),a=Ia(t,r,n),a!==null&&(Zn(a,t,n),fo(a,t,n))}function R0(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function ah(t,n){R0(t,n),(t=t.alternate)&&R0(t,n)}function C0(t){if(t.tag===13||t.tag===31){var n=ps(t,67108864);n!==null&&Zn(n,t,67108864),ah(t,67108864)}}function w0(t){if(t.tag===13||t.tag===31){var n=ci();n=Yr(n);var a=ps(t,n);a!==null&&Zn(a,t,n),ah(t,n)}}var oc=!0;function NS(t,n,a,r){var u=P.T;P.T=null;var f=F.p;try{F.p=2,sh(t,n,a,r)}finally{F.p=f,P.T=u}}function OS(t,n,a,r){var u=P.T;P.T=null;var f=F.p;try{F.p=8,sh(t,n,a,r)}finally{F.p=f,P.T=u}}function sh(t,n,a,r){if(oc){var u=rh(r);if(u===null)Wf(t,n,r,lc,a),U0(t,r);else if(IS(u,t,n,a,r))r.stopPropagation();else if(U0(t,r),n&4&&-1<PS.indexOf(t)){for(;u!==null;){var f=Ji(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var _=Te(f.pendingLanes);if(_!==0){var R=f;for(R.pendingLanes|=2,R.entangledLanes|=2;_;){var B=1<<31-Fe(_);R.entanglements[1]|=B,_&=~B}Gi(f),(Lt&6)===0&&(Xl=Dt()+500,Co(0))}}break;case 31:case 13:R=ps(f,2),R!==null&&Zn(R,f,2),ql(),ah(f,2)}if(f=rh(r),f===null&&Wf(t,n,r,lc,a),f===u)break;u=f}u!==null&&r.stopPropagation()}else Wf(t,n,r,null,a)}}function rh(t){return t=ou(t),oh(t)}var lc=null;function oh(t){if(lc=null,t=Qi(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===31){if(t=p(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return lc=t,null}function D0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Mt()){case U:return 2;case M:return 8;case K:case se:return 32;case he:return 268435456;default:return 32}default:return 32}}var lh=!1,Ya=null,Za=null,Ka=null,Po=new Map,Io=new Map,Qa=[],PS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function U0(t,n){switch(t){case"focusin":case"focusout":Ya=null;break;case"dragenter":case"dragleave":Za=null;break;case"mouseover":case"mouseout":Ka=null;break;case"pointerover":case"pointerout":Po.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Io.delete(n.pointerId)}}function zo(t,n,a,r,u,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:f,targetContainers:[u]},n!==null&&(n=Ji(n),n!==null&&C0(n)),t):(t.eventSystemFlags|=r,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function IS(t,n,a,r,u){switch(n){case"focusin":return Ya=zo(Ya,t,n,a,r,u),!0;case"dragenter":return Za=zo(Za,t,n,a,r,u),!0;case"mouseover":return Ka=zo(Ka,t,n,a,r,u),!0;case"pointerover":var f=u.pointerId;return Po.set(f,zo(Po.get(f)||null,t,n,a,r,u)),!0;case"gotpointercapture":return f=u.pointerId,Io.set(f,zo(Io.get(f)||null,t,n,a,r,u)),!0}return!1}function L0(t){var n=Qi(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,Hs(t.priority,function(){w0(a)});return}}else if(n===31){if(n=p(a),n!==null){t.blockedOn=n,Hs(t.priority,function(){w0(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function cc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=rh(t.nativeEvent);if(a===null){a=t.nativeEvent;var r=new a.constructor(a.type,a);ru=r,a.target.dispatchEvent(r),ru=null}else return n=Ji(a),n!==null&&C0(n),t.blockedOn=a,!1;n.shift()}return!0}function N0(t,n,a){cc(t)&&a.delete(n)}function zS(){lh=!1,Ya!==null&&cc(Ya)&&(Ya=null),Za!==null&&cc(Za)&&(Za=null),Ka!==null&&cc(Ka)&&(Ka=null),Po.forEach(N0),Io.forEach(N0)}function uc(t,n){t.blockedOn===n&&(t.blockedOn=null,lh||(lh=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,zS)))}var fc=null;function O0(t){fc!==t&&(fc=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){fc===t&&(fc=null);for(var n=0;n<t.length;n+=3){var a=t[n],r=t[n+1],u=t[n+2];if(typeof r!="function"){if(oh(r||a)===null)continue;break}var f=Ji(a);f!==null&&(t.splice(n,3),n-=3,rf(f,{pending:!0,data:u,method:a.method,action:r},r,u))}}))}function _r(t){function n(B){return uc(B,t)}Ya!==null&&uc(Ya,t),Za!==null&&uc(Za,t),Ka!==null&&uc(Ka,t),Po.forEach(n),Io.forEach(n);for(var a=0;a<Qa.length;a++){var r=Qa[a];r.blockedOn===t&&(r.blockedOn=null)}for(;0<Qa.length&&(a=Qa[0],a.blockedOn===null);)L0(a),a.blockedOn===null&&Qa.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var u=a[r],f=a[r+1],_=u[Tn]||null;if(typeof f=="function")_||O0(a);else if(_){var R=null;if(f&&f.hasAttribute("formAction")){if(u=f,_=f[Tn]||null)R=_.formAction;else if(oh(u)!==null)continue}else R=_.action;typeof R=="function"?a[r+1]=R:(a.splice(r,3),r-=3),O0(a)}}}function P0(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(_){return u=_})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function ch(t){this._internalRoot=t}hc.prototype.render=ch.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=ci();A0(a,r,t,n,null,null)},hc.prototype.unmount=ch.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;A0(t.current,2,null,t,null,null),ql(),n[Vn]=null}};function hc(t){this._internalRoot=t}hc.prototype.unstable_scheduleHydration=function(t){if(t){var n=Kr();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Qa.length&&n!==0&&n<Qa[a].priority;a++);Qa.splice(a,0,t),a===0&&L0(t)}};var I0=e.version;if(I0!=="19.2.8")throw Error(s(527,I0,"19.2.8"));F.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=d(n),t=t!==null?v(t):null,t=t===null?null:t.stateNode,t};var BS={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:P,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var dc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!dc.isDisabled&&dc.supportsFiber)try{ue=dc.inject(BS),fe=dc}catch{}}return Fo.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,r="",u=km,f=Xm,_=Wm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(_=n.onRecoverableError)),n=b0(t,1,!1,null,null,a,r,null,u,f,_,P0),t[Vn]=n.current,Xf(t),new ch(n)},Fo.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var r=!1,u="",f=km,_=Xm,R=Wm,B=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(_=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.formState!==void 0&&(B=a.formState)),n=b0(t,1,!0,n,a??null,r,u,B,f,_,R,P0),n.context=T0(null),a=n.current,r=ci(),r=Yr(r),u=Pa(r),u.callback=null,Ia(a,u,r),a=r,n.current.lanes=a,Ve(n,a),Gi(n),t[Vn]=n.current,Xf(t),new hc(n)},Fo.version="19.2.8",Fo}var q0;function KS(){if(q0)return hh.exports;q0=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),hh.exports=ZS(),hh.exports}var QS=KS();const JS=j_(QS);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Vd="185",jS=0,Y0=1,$S=2,Bc=1,eM=2,Zo=3,rs=0,Qn=1,Ma=2,Yi=0,Or=1,Pr=2,Z0=3,K0=4,tM=5,Ls=100,nM=101,iM=102,aM=103,sM=104,rM=200,oM=201,lM=202,cM=203,Jh=204,jh=205,uM=206,fM=207,hM=208,dM=209,pM=210,mM=211,gM=212,_M=213,vM=214,$h=0,ed=1,td=2,Br=3,nd=4,id=5,ad=6,sd=7,$_=0,xM=1,SM=2,Zi=0,ev=1,tv=2,nv=3,iv=4,av=5,sv=6,rv=7,ov=300,Is=301,Fr=302,gh=303,_h=304,tu=306,rd=1e3,ya=1001,od=1002,Dn=1003,MM=1004,pc=1005,zn=1006,vh=1007,Os=1008,bi=1009,lv=1010,cv=1011,Qo=1012,kd=1013,Ki=1014,Wi=1015,hi=1016,Xd=1017,Wd=1018,Jo=1020,uv=35902,fv=35899,hv=1021,dv=1022,Oi=1023,ba=1026,Ps=1027,pv=1028,qd=1029,zs=1030,Yd=1031,Zd=1033,Fc=33776,Hc=33777,Gc=33778,Vc=33779,ld=35840,cd=35841,ud=35842,fd=35843,hd=36196,dd=37492,pd=37496,md=37488,gd=37489,Wc=37490,_d=37491,vd=37808,xd=37809,Sd=37810,Md=37811,yd=37812,Ed=37813,bd=37814,Td=37815,Ad=37816,Rd=37817,Cd=37818,wd=37819,Dd=37820,Ud=37821,Ld=36492,Nd=36494,Od=36495,Pd=36283,Id=36284,qc=36285,zd=36286,yM=3200,Q0=0,EM=1,as="",yi="srgb",Yc="srgb-linear",Zc="linear",Gt="srgb",vr=7680,J0=519,bM=512,TM=513,AM=514,Kd=515,RM=516,CM=517,Qd=518,wM=519,j0=35044,$0="300 es",qi=2e3,Kc=2001;function DM(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Qc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function UM(){const o=Qc("canvas");return o.style.display="block",o}const e_={};function t_(...o){const e="THREE."+o.shift();console.log(e,...o)}function mv(o){const e=o[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=o[1];i&&i.isStackTrace?o[0]+=" "+i.getLocation():o[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return o}function nt(...o){o=mv(o);const e="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...o)}}function At(...o){o=mv(o);const e="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...o)}}function Ir(...o){const e=o.join(" ");e in e_||(e_[e]=!0,nt(...o))}function LM(o,e,i){return new Promise(function(s,l){function c(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const NM={[$h]:ed,[td]:ad,[nd]:sd,[Br]:id,[ed]:$h,[ad]:td,[sd]:nd,[id]:Br};class Fs{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,e);e.target=null}}}const On=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],xh=Math.PI/180,Bd=180/Math.PI;function jo(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(On[o&255]+On[o>>8&255]+On[o>>16&255]+On[o>>24&255]+"-"+On[e&255]+On[e>>8&255]+"-"+On[e>>16&15|64]+On[e>>24&255]+"-"+On[i&63|128]+On[i>>8&255]+"-"+On[i>>16&255]+On[i>>24&255]+On[s&255]+On[s>>8&255]+On[s>>16&255]+On[s>>24&255]).toLowerCase()}function Tt(o,e,i){return Math.max(e,Math.min(i,o))}function OM(o,e){return(o%e+e)%e}function Sh(o,e,i){return(1-i)*o+i*e}function Ho(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Kn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const ep=class ep{constructor(e=0,i=0){this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Tt(this.x,e.x,i.x),this.y=Tt(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Tt(this.x,e,i),this.y=Tt(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Tt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Tt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-e.x,h=this.y-e.y;return this.x=c*s-h*l+e.x,this.y=c*l+h*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ep.prototype.isVector2=!0;let ot=ep;class Xr{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,c,h,p){let m=s[l+0],d=s[l+1],v=s[l+2],S=s[l+3],g=c[h+0],E=c[h+1],T=c[h+2],w=c[h+3];if(S!==w||m!==g||d!==E||v!==T){let y=m*g+d*E+v*T+S*w;y<0&&(g=-g,E=-E,T=-T,w=-w,y=-y);let x=1-p;if(y<.9995){const z=Math.acos(y),H=Math.sin(z);x=Math.sin(x*z)/H,p=Math.sin(p*z)/H,m=m*x+g*p,d=d*x+E*p,v=v*x+T*p,S=S*x+w*p}else{m=m*x+g*p,d=d*x+E*p,v=v*x+T*p,S=S*x+w*p;const z=1/Math.sqrt(m*m+d*d+v*v+S*S);m*=z,d*=z,v*=z,S*=z}}e[i]=m,e[i+1]=d,e[i+2]=v,e[i+3]=S}static multiplyQuaternionsFlat(e,i,s,l,c,h){const p=s[l],m=s[l+1],d=s[l+2],v=s[l+3],S=c[h],g=c[h+1],E=c[h+2],T=c[h+3];return e[i]=p*T+v*S+m*E-d*g,e[i+1]=m*T+v*g+d*S-p*E,e[i+2]=d*T+v*E+p*g-m*S,e[i+3]=v*T-p*S-m*g-d*E,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,c=e._z,h=e._order,p=Math.cos,m=Math.sin,d=p(s/2),v=p(l/2),S=p(c/2),g=m(s/2),E=m(l/2),T=m(c/2);switch(h){case"XYZ":this._x=g*v*S+d*E*T,this._y=d*E*S-g*v*T,this._z=d*v*T+g*E*S,this._w=d*v*S-g*E*T;break;case"YXZ":this._x=g*v*S+d*E*T,this._y=d*E*S-g*v*T,this._z=d*v*T-g*E*S,this._w=d*v*S+g*E*T;break;case"ZXY":this._x=g*v*S-d*E*T,this._y=d*E*S+g*v*T,this._z=d*v*T+g*E*S,this._w=d*v*S-g*E*T;break;case"ZYX":this._x=g*v*S-d*E*T,this._y=d*E*S+g*v*T,this._z=d*v*T-g*E*S,this._w=d*v*S+g*E*T;break;case"YZX":this._x=g*v*S+d*E*T,this._y=d*E*S+g*v*T,this._z=d*v*T-g*E*S,this._w=d*v*S-g*E*T;break;case"XZY":this._x=g*v*S-d*E*T,this._y=d*E*S-g*v*T,this._z=d*v*T+g*E*S,this._w=d*v*S+g*E*T;break;default:nt("Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],c=i[8],h=i[1],p=i[5],m=i[9],d=i[2],v=i[6],S=i[10],g=s+p+S;if(g>0){const E=.5/Math.sqrt(g+1);this._w=.25/E,this._x=(v-m)*E,this._y=(c-d)*E,this._z=(h-l)*E}else if(s>p&&s>S){const E=2*Math.sqrt(1+s-p-S);this._w=(v-m)/E,this._x=.25*E,this._y=(l+h)/E,this._z=(c+d)/E}else if(p>S){const E=2*Math.sqrt(1+p-s-S);this._w=(c-d)/E,this._x=(l+h)/E,this._y=.25*E,this._z=(m+v)/E}else{const E=2*Math.sqrt(1+S-s-p);this._w=(h-l)/E,this._x=(c+d)/E,this._y=(m+v)/E,this._z=.25*E}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Tt(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,c=e._z,h=e._w,p=i._x,m=i._y,d=i._z,v=i._w;return this._x=s*v+h*p+l*d-c*m,this._y=l*v+h*m+c*p-s*d,this._z=c*v+h*d+s*m-l*p,this._w=h*v-s*p-l*m-c*d,this._onChangeCallback(),this}slerp(e,i){let s=e._x,l=e._y,c=e._z,h=e._w,p=this.dot(e);p<0&&(s=-s,l=-l,c=-c,h=-h,p=-p);let m=1-i;if(p<.9995){const d=Math.acos(p),v=Math.sin(d);m=Math.sin(m*d)/v,i=Math.sin(i*d)/v,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this.normalize();return this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const tp=class tp{constructor(e=0,i=0,s=0){this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(n_.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(n_.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=e.elements,h=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*h,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,c=e.x,h=e.y,p=e.z,m=e.w,d=2*(h*l-p*s),v=2*(p*i-c*l),S=2*(c*s-h*i);return this.x=i+m*d+h*S-p*v,this.y=s+m*v+p*d-c*S,this.z=l+m*S+c*v-h*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Tt(this.x,e.x,i.x),this.y=Tt(this.y,e.y,i.y),this.z=Tt(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Tt(this.x,e,i),this.y=Tt(this.y,e,i),this.z=Tt(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Tt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,c=e.z,h=i.x,p=i.y,m=i.z;return this.x=l*m-c*p,this.y=c*h-s*m,this.z=s*p-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return Mh.copy(this).projectOnVector(e),this.sub(Mh)}reflect(e){return this.sub(Mh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Tt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};tp.prototype.isVector3=!0;let j=tp;const Mh=new j,n_=new Xr,np=class np{constructor(e,i,s,l,c,h,p,m,d){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,h,p,m,d)}set(e,i,s,l,c,h,p,m,d){const v=this.elements;return v[0]=e,v[1]=l,v[2]=p,v[3]=i,v[4]=c,v[5]=m,v[6]=s,v[7]=h,v[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,h=s[0],p=s[3],m=s[6],d=s[1],v=s[4],S=s[7],g=s[2],E=s[5],T=s[8],w=l[0],y=l[3],x=l[6],z=l[1],H=l[4],D=l[7],I=l[2],L=l[5],O=l[8];return c[0]=h*w+p*z+m*I,c[3]=h*y+p*H+m*L,c[6]=h*x+p*D+m*O,c[1]=d*w+v*z+S*I,c[4]=d*y+v*H+S*L,c[7]=d*x+v*D+S*O,c[2]=g*w+E*z+T*I,c[5]=g*y+E*H+T*L,c[8]=g*x+E*D+T*O,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],h=e[4],p=e[5],m=e[6],d=e[7],v=e[8];return i*h*v-i*p*d-s*c*v+s*p*m+l*c*d-l*h*m}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],h=e[4],p=e[5],m=e[6],d=e[7],v=e[8],S=v*h-p*d,g=p*m-v*c,E=d*c-h*m,T=i*S+s*g+l*E;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/T;return e[0]=S*w,e[1]=(l*d-v*s)*w,e[2]=(p*s-l*h)*w,e[3]=g*w,e[4]=(v*i-l*m)*w,e[5]=(l*c-p*i)*w,e[6]=E*w,e[7]=(s*m-d*i)*w,e[8]=(h*i-s*c)*w,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,c,h,p){const m=Math.cos(c),d=Math.sin(c);return this.set(s*m,s*d,-s*(m*h+d*p)+h+e,-l*d,l*m,-l*(-d*h+m*p)+p+i,0,0,1),this}scale(e,i){return Ir("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(yh.makeScale(e,i)),this}rotate(e){return Ir("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(yh.makeRotation(-e)),this}translate(e,i){return Ir("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(yh.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}};np.prototype.isMatrix3=!0;let rt=np;const yh=new rt,i_=new rt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),a_=new rt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function PM(){const o={enabled:!0,workingColorSpace:Yc,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===Gt&&(l.r=Ea(l.r),l.g=Ea(l.g),l.b=Ea(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Gt&&(l.r=zr(l.r),l.g=zr(l.g),l.b=zr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===as?Zc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Ir("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Ir("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[Yc]:{primaries:e,whitePoint:s,transfer:Zc,toXYZ:i_,fromXYZ:a_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:yi},outputColorSpaceConfig:{drawingBufferColorSpace:yi}},[yi]:{primaries:e,whitePoint:s,transfer:Gt,toXYZ:i_,fromXYZ:a_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:yi}}}),o}const bt=PM();function Ea(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function zr(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let xr;class IM{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{xr===void 0&&(xr=Qc("canvas")),xr.width=e.width,xr.height=e.height;const l=xr.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),s=xr}return s.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Qc("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=Ea(c[h]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Ea(i[s]/255)*255):i[s]=Ea(i[s]);return{data:i,width:e.width,height:e.height}}else return nt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let zM=0;class Jd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:zM++}),this.uuid=jo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayWidth,i.displayHeight,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,p=l.length;h<p;h++)l[h].isDataTexture?c.push(Eh(l[h].image)):c.push(Eh(l[h]))}else c=Eh(l);s.url=c}return i||(e.images[this.uuid]=s),s}}function Eh(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?IM.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(nt("Texture: Unable to serialize Texture."),{})}let BM=0;const bh=new j;class Gn extends Fs{constructor(e=Gn.DEFAULT_IMAGE,i=Gn.DEFAULT_MAPPING,s=ya,l=ya,c=zn,h=Os,p=Oi,m=bi,d=Gn.DEFAULT_ANISOTROPY,v=as){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:BM++}),this.uuid=jo(),this.name="",this.source=new Jd(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=d,this.format=p,this.internalFormat=null,this.type=m,this.offset=new ot(0,0),this.repeat=new ot(1,1),this.center=new ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new rt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(bh).x}get height(){return this.source.getSize(bh).y}get depth(){return this.source.getSize(bh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const s=e[i];if(s===void 0){nt(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){nt(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ov)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case rd:e.x=e.x-Math.floor(e.x);break;case ya:e.x=e.x<0?0:1;break;case od:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case rd:e.y=e.y-Math.floor(e.y);break;case ya:e.y=e.y<0?0:1;break;case od:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Gn.DEFAULT_IMAGE=null;Gn.DEFAULT_MAPPING=ov;Gn.DEFAULT_ANISOTROPY=1;const ip=class ip{constructor(e=0,i=0,s=0,l=1){this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=this.w,h=e.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,c;const m=e.elements,d=m[0],v=m[4],S=m[8],g=m[1],E=m[5],T=m[9],w=m[2],y=m[6],x=m[10];if(Math.abs(v-g)<.01&&Math.abs(S-w)<.01&&Math.abs(T-y)<.01){if(Math.abs(v+g)<.1&&Math.abs(S+w)<.1&&Math.abs(T+y)<.1&&Math.abs(d+E+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const H=(d+1)/2,D=(E+1)/2,I=(x+1)/2,L=(v+g)/4,O=(S+w)/4,b=(T+y)/4;return H>D&&H>I?H<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(H),l=L/s,c=O/s):D>I?D<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(D),s=L/l,c=b/l):I<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(I),s=O/c,l=b/c),this.set(s,l,c,i),this}let z=Math.sqrt((y-T)*(y-T)+(S-w)*(S-w)+(g-v)*(g-v));return Math.abs(z)<.001&&(z=1),this.x=(y-T)/z,this.y=(S-w)/z,this.z=(g-v)/z,this.w=Math.acos((d+E+x-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Tt(this.x,e.x,i.x),this.y=Tt(this.y,e.y,i.y),this.z=Tt(this.z,e.z,i.z),this.w=Tt(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Tt(this.x,e,i),this.y=Tt(this.y,e,i),this.z=Tt(this.z,e,i),this.w=Tt(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Tt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};ip.prototype.isVector4=!0;let on=ip;class FM extends Fs{constructor(e=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},s),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=s.depth,this.scissor=new on(0,0,e,i),this.scissorTest=!1,this.viewport=new on(0,0,e,i),this.textures=[];const l={width:e,height:i,depth:s.depth},c=new Gn(l),h=s.count;for(let p=0;p<h;p++)this.textures[p]=c.clone(),this.textures[p].isRenderTargetTexture=!0,this.textures[p].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview,this.useArrayDepthTexture=s.useArrayDepthTexture}_setTextureOptions(e={}){const i={minFilter:zn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new Jd(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Jn extends FM{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class gv extends Gn{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=ya,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class HM extends Gn{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=ya,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const eu=class eu{constructor(e,i,s,l,c,h,p,m,d,v,S,g,E,T,w,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,h,p,m,d,v,S,g,E,T,w,y)}set(e,i,s,l,c,h,p,m,d,v,S,g,E,T,w,y){const x=this.elements;return x[0]=e,x[4]=i,x[8]=s,x[12]=l,x[1]=c,x[5]=h,x[9]=p,x[13]=m,x[2]=d,x[6]=v,x[10]=S,x[14]=g,x[3]=E,x[7]=T,x[11]=w,x[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new eu().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return this.determinantAffine()===0?(e.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const i=this.elements,s=e.elements,l=1/Sr.setFromMatrixColumn(e,0).length(),c=1/Sr.setFromMatrixColumn(e,1).length(),h=1/Sr.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,c=e.z,h=Math.cos(s),p=Math.sin(s),m=Math.cos(l),d=Math.sin(l),v=Math.cos(c),S=Math.sin(c);if(e.order==="XYZ"){const g=h*v,E=h*S,T=p*v,w=p*S;i[0]=m*v,i[4]=-m*S,i[8]=d,i[1]=E+T*d,i[5]=g-w*d,i[9]=-p*m,i[2]=w-g*d,i[6]=T+E*d,i[10]=h*m}else if(e.order==="YXZ"){const g=m*v,E=m*S,T=d*v,w=d*S;i[0]=g+w*p,i[4]=T*p-E,i[8]=h*d,i[1]=h*S,i[5]=h*v,i[9]=-p,i[2]=E*p-T,i[6]=w+g*p,i[10]=h*m}else if(e.order==="ZXY"){const g=m*v,E=m*S,T=d*v,w=d*S;i[0]=g-w*p,i[4]=-h*S,i[8]=T+E*p,i[1]=E+T*p,i[5]=h*v,i[9]=w-g*p,i[2]=-h*d,i[6]=p,i[10]=h*m}else if(e.order==="ZYX"){const g=h*v,E=h*S,T=p*v,w=p*S;i[0]=m*v,i[4]=T*d-E,i[8]=g*d+w,i[1]=m*S,i[5]=w*d+g,i[9]=E*d-T,i[2]=-d,i[6]=p*m,i[10]=h*m}else if(e.order==="YZX"){const g=h*m,E=h*d,T=p*m,w=p*d;i[0]=m*v,i[4]=w-g*S,i[8]=T*S+E,i[1]=S,i[5]=h*v,i[9]=-p*v,i[2]=-d*v,i[6]=E*S+T,i[10]=g-w*S}else if(e.order==="XZY"){const g=h*m,E=h*d,T=p*m,w=p*d;i[0]=m*v,i[4]=-S,i[8]=d*v,i[1]=g*S+w,i[5]=h*v,i[9]=E*S-T,i[2]=T*S-E,i[6]=p*v,i[10]=w*S+g}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(GM,e,VM)}lookAt(e,i,s){const l=this.elements;return ui.subVectors(e,i),ui.lengthSq()===0&&(ui.z=1),ui.normalize(),ja.crossVectors(s,ui),ja.lengthSq()===0&&(Math.abs(s.z)===1?ui.x+=1e-4:ui.z+=1e-4,ui.normalize(),ja.crossVectors(s,ui)),ja.normalize(),mc.crossVectors(ui,ja),l[0]=ja.x,l[4]=mc.x,l[8]=ui.x,l[1]=ja.y,l[5]=mc.y,l[9]=ui.y,l[2]=ja.z,l[6]=mc.z,l[10]=ui.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,h=s[0],p=s[4],m=s[8],d=s[12],v=s[1],S=s[5],g=s[9],E=s[13],T=s[2],w=s[6],y=s[10],x=s[14],z=s[3],H=s[7],D=s[11],I=s[15],L=l[0],O=l[4],b=l[8],N=l[12],Y=l[1],k=l[5],Q=l[9],me=l[13],Se=l[2],J=l[6],P=l[10],F=l[14],$=l[3],ve=l[7],le=l[11],C=l[15];return c[0]=h*L+p*Y+m*Se+d*$,c[4]=h*O+p*k+m*J+d*ve,c[8]=h*b+p*Q+m*P+d*le,c[12]=h*N+p*me+m*F+d*C,c[1]=v*L+S*Y+g*Se+E*$,c[5]=v*O+S*k+g*J+E*ve,c[9]=v*b+S*Q+g*P+E*le,c[13]=v*N+S*me+g*F+E*C,c[2]=T*L+w*Y+y*Se+x*$,c[6]=T*O+w*k+y*J+x*ve,c[10]=T*b+w*Q+y*P+x*le,c[14]=T*N+w*me+y*F+x*C,c[3]=z*L+H*Y+D*Se+I*$,c[7]=z*O+H*k+D*J+I*ve,c[11]=z*b+H*Q+D*P+I*le,c[15]=z*N+H*me+D*F+I*C,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],c=e[12],h=e[1],p=e[5],m=e[9],d=e[13],v=e[2],S=e[6],g=e[10],E=e[14],T=e[3],w=e[7],y=e[11],x=e[15],z=m*E-d*g,H=p*E-d*S,D=p*g-m*S,I=h*E-d*v,L=h*g-m*v,O=h*S-p*v;return i*(w*z-y*H+x*D)-s*(T*z-y*I+x*L)+l*(T*H-w*I+x*O)-c*(T*D-w*L+y*O)}determinantAffine(){const e=this.elements,i=e[0],s=e[4],l=e[8],c=e[1],h=e[5],p=e[9],m=e[2],d=e[6],v=e[10];return i*(h*v-p*d)-s*(c*v-p*m)+l*(c*d-h*m)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],h=e[4],p=e[5],m=e[6],d=e[7],v=e[8],S=e[9],g=e[10],E=e[11],T=e[12],w=e[13],y=e[14],x=e[15],z=i*p-s*h,H=i*m-l*h,D=i*d-c*h,I=s*m-l*p,L=s*d-c*p,O=l*d-c*m,b=v*w-S*T,N=v*y-g*T,Y=v*x-E*T,k=S*y-g*w,Q=S*x-E*w,me=g*x-E*y,Se=z*me-H*Q+D*k+I*Y-L*N+O*b;if(Se===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const J=1/Se;return e[0]=(p*me-m*Q+d*k)*J,e[1]=(l*Q-s*me-c*k)*J,e[2]=(w*O-y*L+x*I)*J,e[3]=(g*L-S*O-E*I)*J,e[4]=(m*Y-h*me-d*N)*J,e[5]=(i*me-l*Y+c*N)*J,e[6]=(y*D-T*O-x*H)*J,e[7]=(v*O-g*D+E*H)*J,e[8]=(h*Q-p*Y+d*b)*J,e[9]=(s*Y-i*Q-c*b)*J,e[10]=(T*L-w*D+x*z)*J,e[11]=(S*D-v*L-E*z)*J,e[12]=(p*N-h*k-m*b)*J,e[13]=(i*k-s*N+l*b)*J,e[14]=(w*H-T*I-y*z)*J,e[15]=(v*I-S*H+g*z)*J,this}scale(e){const i=this.elements,s=e.x,l=e.y,c=e.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,h=e.x,p=e.y,m=e.z,d=c*h,v=c*p;return this.set(d*h+s,d*p-l*m,d*m+l*p,0,d*p+l*m,v*p+s,v*m-l*h,0,d*m-l*p,v*m+l*h,c*m*m+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,c,h){return this.set(1,s,c,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,c=i._x,h=i._y,p=i._z,m=i._w,d=c+c,v=h+h,S=p+p,g=c*d,E=c*v,T=c*S,w=h*v,y=h*S,x=p*S,z=m*d,H=m*v,D=m*S,I=s.x,L=s.y,O=s.z;return l[0]=(1-(w+x))*I,l[1]=(E+D)*I,l[2]=(T-H)*I,l[3]=0,l[4]=(E-D)*L,l[5]=(1-(g+x))*L,l[6]=(y+z)*L,l[7]=0,l[8]=(T+H)*O,l[9]=(y-z)*O,l[10]=(1-(g+w))*O,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;e.x=l[12],e.y=l[13],e.z=l[14];const c=this.determinantAffine();if(c===0)return s.set(1,1,1),i.identity(),this;let h=Sr.set(l[0],l[1],l[2]).length();const p=Sr.set(l[4],l[5],l[6]).length(),m=Sr.set(l[8],l[9],l[10]).length();c<0&&(h=-h),Di.copy(this);const d=1/h,v=1/p,S=1/m;return Di.elements[0]*=d,Di.elements[1]*=d,Di.elements[2]*=d,Di.elements[4]*=v,Di.elements[5]*=v,Di.elements[6]*=v,Di.elements[8]*=S,Di.elements[9]*=S,Di.elements[10]*=S,i.setFromRotationMatrix(Di),s.x=h,s.y=p,s.z=m,this}makePerspective(e,i,s,l,c,h,p=qi,m=!1){const d=this.elements,v=2*c/(i-e),S=2*c/(s-l),g=(i+e)/(i-e),E=(s+l)/(s-l);let T,w;if(m)T=c/(h-c),w=h*c/(h-c);else if(p===qi)T=-(h+c)/(h-c),w=-2*h*c/(h-c);else if(p===Kc)T=-h/(h-c),w=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return d[0]=v,d[4]=0,d[8]=g,d[12]=0,d[1]=0,d[5]=S,d[9]=E,d[13]=0,d[2]=0,d[6]=0,d[10]=T,d[14]=w,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,i,s,l,c,h,p=qi,m=!1){const d=this.elements,v=2/(i-e),S=2/(s-l),g=-(i+e)/(i-e),E=-(s+l)/(s-l);let T,w;if(m)T=1/(h-c),w=h/(h-c);else if(p===qi)T=-2/(h-c),w=-(h+c)/(h-c);else if(p===Kc)T=-1/(h-c),w=-c/(h-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return d[0]=v,d[4]=0,d[8]=0,d[12]=g,d[1]=0,d[5]=S,d[9]=0,d[13]=E,d[2]=0,d[6]=0,d[10]=T,d[14]=w,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}};eu.prototype.isMatrix4=!0;let un=eu;const Sr=new j,Di=new un,GM=new j(0,0,0),VM=new j(1,1,1),ja=new j,mc=new j,ui=new j,s_=new un,r_=new Xr;class Bs{constructor(e=0,i=0,s=0,l=Bs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,c=l[0],h=l[4],p=l[8],m=l[1],d=l[5],v=l[9],S=l[2],g=l[6],E=l[10];switch(i){case"XYZ":this._y=Math.asin(Tt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-v,E),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(g,d),this._z=0);break;case"YXZ":this._x=Math.asin(-Tt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(p,E),this._z=Math.atan2(m,d)):(this._y=Math.atan2(-S,c),this._z=0);break;case"ZXY":this._x=Math.asin(Tt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-S,E),this._z=Math.atan2(-h,d)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Tt(S,-1,1)),Math.abs(S)<.9999999?(this._x=Math.atan2(g,E),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-h,d));break;case"YZX":this._z=Math.asin(Tt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,d),this._y=Math.atan2(-S,c)):(this._x=0,this._y=Math.atan2(p,E));break;case"XZY":this._z=Math.asin(-Tt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(g,d),this._y=Math.atan2(p,c)):(this._x=Math.atan2(-v,E),this._y=0);break;default:nt("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return s_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(s_,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return r_.setFromEuler(this),this.setFromQuaternion(r_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Bs.DEFAULT_ORDER="XYZ";class _v{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let kM=0;const o_=new j,Mr=new Xr,ma=new un,gc=new j,Go=new j,XM=new j,WM=new Xr,l_=new j(1,0,0),c_=new j(0,1,0),u_=new j(0,0,1),f_={type:"added"},qM={type:"removed"},yr={type:"childadded",child:null},Th={type:"childremoved",child:null};class jn extends Fs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kM++}),this.uuid=jo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=jn.DEFAULT_UP.clone();const e=new j,i=new Bs,s=new Xr,l=new j(1,1,1);function c(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new un},normalMatrix:{value:new rt}}),this.matrix=new un,this.matrixWorld=new un,this.matrixAutoUpdate=jn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=jn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _v,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Mr.setFromAxisAngle(e,i),this.quaternion.multiply(Mr),this}rotateOnWorldAxis(e,i){return Mr.setFromAxisAngle(e,i),this.quaternion.premultiply(Mr),this}rotateX(e){return this.rotateOnAxis(l_,e)}rotateY(e){return this.rotateOnAxis(c_,e)}rotateZ(e){return this.rotateOnAxis(u_,e)}translateOnAxis(e,i){return o_.copy(e).applyQuaternion(this.quaternion),this.position.add(o_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(l_,e)}translateY(e){return this.translateOnAxis(c_,e)}translateZ(e){return this.translateOnAxis(u_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ma.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?gc.copy(e):gc.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Go.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ma.lookAt(Go,gc,this.up):ma.lookAt(gc,Go,this.up),this.quaternion.setFromRotationMatrix(ma),l&&(ma.extractRotation(l.matrixWorld),Mr.setFromRotationMatrix(ma),this.quaternion.premultiply(Mr.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(At("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(f_),yr.child=e,this.dispatchEvent(yr),yr.child=null):At("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(qM),Th.child=e,this.dispatchEvent(Th),Th.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ma.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ma.multiply(e.parent.matrixWorld)),e.applyMatrix4(ma),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(f_),yr.child=e,this.dispatchEvent(yr),yr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Go,e,XM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Go,WM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,s=e.y,l=e.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*s-c[8]*l,c[13]+=s-c[1]*i-c[5]*s-c[9]*l,c[14]+=l-c[2]*i-c[6]*s-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i,s=!1){const l=this.parent;if(e===!0&&l!==null&&l.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||s)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,s=!0),i===!0){const c=this.children;for(let h=0,p=c.length;h<p;h++)c[h].updateWorldMatrix(!1,!0,s)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(p=>({...p,boundingBox:p.boundingBox?p.boundingBox.toJSON():void 0,boundingSphere:p.boundingSphere?p.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(p=>({...p})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(p,m){return p[m.uuid]===void 0&&(p[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const m=p.shapes;if(Array.isArray(m))for(let d=0,v=m.length;d<v;d++){const S=m[d];c(e.shapes,S)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let m=0,d=this.material.length;m<d;m++)p.push(c(e.materials,this.material[m]));l.material=p}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let p=0;p<this.children.length;p++)l.children.push(this.children[p].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let p=0;p<this.animations.length;p++){const m=this.animations[p];l.animations.push(c(e.animations,m))}}if(i){const p=h(e.geometries),m=h(e.materials),d=h(e.textures),v=h(e.images),S=h(e.shapes),g=h(e.skeletons),E=h(e.animations),T=h(e.nodes);p.length>0&&(s.geometries=p),m.length>0&&(s.materials=m),d.length>0&&(s.textures=d),v.length>0&&(s.images=v),S.length>0&&(s.shapes=S),g.length>0&&(s.skeletons=g),E.length>0&&(s.animations=E),T.length>0&&(s.nodes=T)}return s.object=l,s;function h(p){const m=[];for(const d in p){const v=p[d];delete v.metadata,m.push(v)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}jn.DEFAULT_UP=new j(0,1,0);jn.DEFAULT_MATRIX_AUTO_UPDATE=!0;jn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Lr extends jn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const YM={type:"move"};class Ah{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Lr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Lr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Lr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,c=null,h=null;const p=this._targetRay,m=this._grip,d=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(d&&e.hand){h=!0;for(const w of e.hand.values()){const y=i.getJointPose(w,s),x=this._getHandJoint(d,w);y!==null&&(x.matrix.fromArray(y.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=y.radius),x.visible=y!==null}const v=d.joints["index-finger-tip"],S=d.joints["thumb-tip"],g=v.position.distanceTo(S.position),E=.02,T=.005;d.inputState.pinching&&g>E+T?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&g<=E-T&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:e,target:this})));p!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(YM)))}return p!==null&&(p.visible=l!==null),m!==null&&(m.visible=c!==null),d!==null&&(d.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new Lr;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}const vv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$a={h:0,s:0,l:0},_c={h:0,s:0,l:0};function Rh(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class vt{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=yi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,bt.colorSpaceToWorking(this,i),this}setRGB(e,i,s,l=bt.workingColorSpace){return this.r=e,this.g=i,this.b=s,bt.colorSpaceToWorking(this,l),this}setHSL(e,i,s,l=bt.workingColorSpace){if(e=OM(e,1),i=Tt(i,0,1),s=Tt(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,h=2*s-c;this.r=Rh(h,c,e+1/3),this.g=Rh(h,c,e),this.b=Rh(h,c,e-1/3)}return bt.colorSpaceToWorking(this,l),this}setStyle(e,i=yi){function s(c){c!==void 0&&parseFloat(c)<1&&nt("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const h=l[1],p=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:nt("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);nt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=yi){const s=vv[e.toLowerCase()];return s!==void 0?this.setHex(s,i):nt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ea(e.r),this.g=Ea(e.g),this.b=Ea(e.b),this}copyLinearToSRGB(e){return this.r=zr(e.r),this.g=zr(e.g),this.b=zr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=yi){return bt.workingToColorSpace(Pn.copy(this),e),Math.round(Tt(Pn.r*255,0,255))*65536+Math.round(Tt(Pn.g*255,0,255))*256+Math.round(Tt(Pn.b*255,0,255))}getHexString(e=yi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=bt.workingColorSpace){bt.workingToColorSpace(Pn.copy(this),i);const s=Pn.r,l=Pn.g,c=Pn.b,h=Math.max(s,l,c),p=Math.min(s,l,c);let m,d;const v=(p+h)/2;if(p===h)m=0,d=0;else{const S=h-p;switch(d=v<=.5?S/(h+p):S/(2-h-p),h){case s:m=(l-c)/S+(l<c?6:0);break;case l:m=(c-s)/S+2;break;case c:m=(s-l)/S+4;break}m/=6}return e.h=m,e.s=d,e.l=v,e}getRGB(e,i=bt.workingColorSpace){return bt.workingToColorSpace(Pn.copy(this),i),e.r=Pn.r,e.g=Pn.g,e.b=Pn.b,e}getStyle(e=yi){bt.workingToColorSpace(Pn.copy(this),e);const i=Pn.r,s=Pn.g,l=Pn.b;return e!==yi?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL($a),this.setHSL($a.h+e,$a.s+i,$a.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL($a),e.getHSL(_c);const s=Sh($a.h,_c.h,i),l=Sh($a.s,_c.s,i),c=Sh($a.l,_c.l,i);return this.setHSL(s,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pn=new vt;vt.NAMES=vv;class ZM extends jn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Bs,this.environmentIntensity=1,this.environmentRotation=new Bs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Ui=new j,ga=new j,Ch=new j,_a=new j,Er=new j,br=new j,h_=new j,wh=new j,Dh=new j,Uh=new j,Lh=new on,Nh=new on,Oh=new on;class Ni{constructor(e=new j,i=new j,s=new j){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),Ui.subVectors(e,i),l.cross(Ui);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,s,l,c){Ui.subVectors(l,i),ga.subVectors(s,i),Ch.subVectors(e,i);const h=Ui.dot(Ui),p=Ui.dot(ga),m=Ui.dot(Ch),d=ga.dot(ga),v=ga.dot(Ch),S=h*d-p*p;if(S===0)return c.set(0,0,0),null;const g=1/S,E=(d*m-p*v)*g,T=(h*v-p*m)*g;return c.set(1-E-T,T,E)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,_a)===null?!1:_a.x>=0&&_a.y>=0&&_a.x+_a.y<=1}static getInterpolation(e,i,s,l,c,h,p,m){return this.getBarycoord(e,i,s,l,_a)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,_a.x),m.addScaledVector(h,_a.y),m.addScaledVector(p,_a.z),m)}static getInterpolatedAttribute(e,i,s,l,c,h){return Lh.setScalar(0),Nh.setScalar(0),Oh.setScalar(0),Lh.fromBufferAttribute(e,i),Nh.fromBufferAttribute(e,s),Oh.fromBufferAttribute(e,l),h.setScalar(0),h.addScaledVector(Lh,c.x),h.addScaledVector(Nh,c.y),h.addScaledVector(Oh,c.z),h}static isFrontFacing(e,i,s,l){return Ui.subVectors(s,i),ga.subVectors(e,i),Ui.cross(ga).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ui.subVectors(this.c,this.b),ga.subVectors(this.a,this.b),Ui.cross(ga).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ni.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Ni.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,c){return Ni.getInterpolation(e,this.a,this.b,this.c,i,s,l,c)}containsPoint(e){return Ni.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ni.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,c=this.c;let h,p;Er.subVectors(l,s),br.subVectors(c,s),wh.subVectors(e,s);const m=Er.dot(wh),d=br.dot(wh);if(m<=0&&d<=0)return i.copy(s);Dh.subVectors(e,l);const v=Er.dot(Dh),S=br.dot(Dh);if(v>=0&&S<=v)return i.copy(l);const g=m*S-v*d;if(g<=0&&m>=0&&v<=0)return h=m/(m-v),i.copy(s).addScaledVector(Er,h);Uh.subVectors(e,c);const E=Er.dot(Uh),T=br.dot(Uh);if(T>=0&&E<=T)return i.copy(c);const w=E*d-m*T;if(w<=0&&d>=0&&T<=0)return p=d/(d-T),i.copy(s).addScaledVector(br,p);const y=v*T-E*S;if(y<=0&&S-v>=0&&E-T>=0)return h_.subVectors(c,l),p=(S-v)/(S-v+(E-T)),i.copy(l).addScaledVector(h_,p);const x=1/(y+w+g);return h=w*x,p=g*x,i.copy(s).addScaledVector(Er,h).addScaledVector(br,p)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class $o{constructor(e=new j(1/0,1/0,1/0),i=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(Li.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(Li.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=Li.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let h=0,p=c.count;h<p;h++)e.isMesh===!0?e.getVertexPosition(h,Li):Li.fromBufferAttribute(c,h),Li.applyMatrix4(e.matrixWorld),this.expandByPoint(Li);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),vc.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),vc.copy(s.boundingBox)),vc.applyMatrix4(e.matrixWorld),this.union(vc)}const l=e.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Li),Li.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Vo),xc.subVectors(this.max,Vo),Tr.subVectors(e.a,Vo),Ar.subVectors(e.b,Vo),Rr.subVectors(e.c,Vo),es.subVectors(Ar,Tr),ts.subVectors(Rr,Ar),Rs.subVectors(Tr,Rr);let i=[0,-es.z,es.y,0,-ts.z,ts.y,0,-Rs.z,Rs.y,es.z,0,-es.x,ts.z,0,-ts.x,Rs.z,0,-Rs.x,-es.y,es.x,0,-ts.y,ts.x,0,-Rs.y,Rs.x,0];return!Ph(i,Tr,Ar,Rr,xc)||(i=[1,0,0,0,1,0,0,0,1],!Ph(i,Tr,Ar,Rr,xc))?!1:(Sc.crossVectors(es,ts),i=[Sc.x,Sc.y,Sc.z],Ph(i,Tr,Ar,Rr,xc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Li).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Li).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(va[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),va[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),va[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),va[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),va[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),va[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),va[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),va[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(va),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const va=[new j,new j,new j,new j,new j,new j,new j,new j],Li=new j,vc=new $o,Tr=new j,Ar=new j,Rr=new j,es=new j,ts=new j,Rs=new j,Vo=new j,xc=new j,Sc=new j,Cs=new j;function Ph(o,e,i,s,l){for(let c=0,h=o.length-3;c<=h;c+=3){Cs.fromArray(o,c);const p=l.x*Math.abs(Cs.x)+l.y*Math.abs(Cs.y)+l.z*Math.abs(Cs.z),m=e.dot(Cs),d=i.dot(Cs),v=s.dot(Cs);if(Math.max(-Math.max(m,d,v),Math.min(m,d,v))>p)return!1}return!0}const _n=new j,Mc=new ot;let KM=0;class Pi extends Fs{constructor(e,i,s=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:KM++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=j0,this.updateRanges=[],this.gpuType=Wi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Mc.fromBufferAttribute(this,i),Mc.applyMatrix3(e),this.setXY(i,Mc.x,Mc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)_n.fromBufferAttribute(this,i),_n.applyMatrix3(e),this.setXYZ(i,_n.x,_n.y,_n.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)_n.fromBufferAttribute(this,i),_n.applyMatrix4(e),this.setXYZ(i,_n.x,_n.y,_n.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)_n.fromBufferAttribute(this,i),_n.applyNormalMatrix(e),this.setXYZ(i,_n.x,_n.y,_n.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)_n.fromBufferAttribute(this,i),_n.transformDirection(e),this.setXYZ(i,_n.x,_n.y,_n.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=Ho(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=Kn(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Ho(i,this.array)),i}setX(e,i){return this.normalized&&(i=Kn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Ho(i,this.array)),i}setY(e,i){return this.normalized&&(i=Kn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Ho(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Kn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Ho(i,this.array)),i}setW(e,i){return this.normalized&&(i=Kn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=Kn(i,this.array),s=Kn(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=Kn(i,this.array),s=Kn(s,this.array),l=Kn(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,c){return e*=this.itemSize,this.normalized&&(i=Kn(i,this.array),s=Kn(s,this.array),l=Kn(l,this.array),c=Kn(c,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==j0&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class xv extends Pi{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class Sv extends Pi{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class Sn extends Pi{constructor(e,i,s){super(new Float32Array(e),i,s)}}const QM=new $o,ko=new j,Ih=new j;class nu{constructor(e=new j,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):QM.setFromPoints(e).getCenter(s);let l=0;for(let c=0,h=e.length;c<h;c++)l=Math.max(l,s.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ko.subVectors(e,this.center);const i=ko.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(ko,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ih.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ko.copy(e.center).add(Ih)),this.expandByPoint(ko.copy(e.center).sub(Ih))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let JM=0;const Mi=new un,zh=new jn,Cr=new j,fi=new $o,Xo=new $o,bn=new j;class $n extends Fs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:JM++}),this.uuid=jo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(DM(e)?Sv:xv)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new rt().getNormalMatrix(e);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Mi.makeRotationFromQuaternion(e),this.applyMatrix4(Mi),this}rotateX(e){return Mi.makeRotationX(e),this.applyMatrix4(Mi),this}rotateY(e){return Mi.makeRotationY(e),this.applyMatrix4(Mi),this}rotateZ(e){return Mi.makeRotationZ(e),this.applyMatrix4(Mi),this}translate(e,i,s){return Mi.makeTranslation(e,i,s),this.applyMatrix4(Mi),this}scale(e,i,s){return Mi.makeScale(e,i,s),this.applyMatrix4(Mi),this}lookAt(e){return zh.lookAt(e),zh.updateMatrix(),this.applyMatrix4(zh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Cr).negate(),this.translate(Cr.x,Cr.y,Cr.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=e.length;l<c;l++){const h=e[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new Sn(s,3))}else{const s=Math.min(e.length,i.count);for(let l=0;l<s;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&nt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $o);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){At("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];fi.setFromBufferAttribute(c),this.morphTargetsRelative?(bn.addVectors(this.boundingBox.min,fi.min),this.boundingBox.expandByPoint(bn),bn.addVectors(this.boundingBox.max,fi.max),this.boundingBox.expandByPoint(bn)):(this.boundingBox.expandByPoint(fi.min),this.boundingBox.expandByPoint(fi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&At('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new nu);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){At("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(e){const s=this.boundingSphere.center;if(fi.setFromBufferAttribute(e),i)for(let c=0,h=i.length;c<h;c++){const p=i[c];Xo.setFromBufferAttribute(p),this.morphTargetsRelative?(bn.addVectors(fi.min,Xo.min),fi.expandByPoint(bn),bn.addVectors(fi.max,Xo.max),fi.expandByPoint(bn)):(fi.expandByPoint(Xo.min),fi.expandByPoint(Xo.max))}fi.getCenter(s);let l=0;for(let c=0,h=e.count;c<h;c++)bn.fromBufferAttribute(e,c),l=Math.max(l,s.distanceToSquared(bn));if(i)for(let c=0,h=i.length;c<h;c++){const p=i[c],m=this.morphTargetsRelative;for(let d=0,v=p.count;d<v;d++)bn.fromBufferAttribute(p,d),m&&(Cr.fromBufferAttribute(e,d),bn.add(Cr)),l=Math.max(l,s.distanceToSquared(bn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&At('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){At("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;let h=this.getAttribute("tangent");(h===void 0||h.count!==s.count)&&(h=new Pi(new Float32Array(4*s.count),4),this.setAttribute("tangent",h));const p=[],m=[];for(let b=0;b<s.count;b++)p[b]=new j,m[b]=new j;const d=new j,v=new j,S=new j,g=new ot,E=new ot,T=new ot,w=new j,y=new j;function x(b,N,Y){d.fromBufferAttribute(s,b),v.fromBufferAttribute(s,N),S.fromBufferAttribute(s,Y),g.fromBufferAttribute(c,b),E.fromBufferAttribute(c,N),T.fromBufferAttribute(c,Y),v.sub(d),S.sub(d),E.sub(g),T.sub(g);const k=1/(E.x*T.y-T.x*E.y);isFinite(k)&&(w.copy(v).multiplyScalar(T.y).addScaledVector(S,-E.y).multiplyScalar(k),y.copy(S).multiplyScalar(E.x).addScaledVector(v,-T.x).multiplyScalar(k),p[b].add(w),p[N].add(w),p[Y].add(w),m[b].add(y),m[N].add(y),m[Y].add(y))}let z=this.groups;z.length===0&&(z=[{start:0,count:e.count}]);for(let b=0,N=z.length;b<N;++b){const Y=z[b],k=Y.start,Q=Y.count;for(let me=k,Se=k+Q;me<Se;me+=3)x(e.getX(me+0),e.getX(me+1),e.getX(me+2))}const H=new j,D=new j,I=new j,L=new j;function O(b){I.fromBufferAttribute(l,b),L.copy(I);const N=p[b];H.copy(N),H.sub(I.multiplyScalar(I.dot(N))).normalize(),D.crossVectors(L,N);const k=D.dot(m[b])<0?-1:1;h.setXYZW(b,H.x,H.y,H.z,k)}for(let b=0,N=z.length;b<N;++b){const Y=z[b],k=Y.start,Q=Y.count;for(let me=k,Se=k+Q;me<Se;me+=3)O(e.getX(me+0)),O(e.getX(me+1)),O(e.getX(me+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0||s.count!==i.count)s=new Pi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let g=0,E=s.count;g<E;g++)s.setXYZ(g,0,0,0);const l=new j,c=new j,h=new j,p=new j,m=new j,d=new j,v=new j,S=new j;if(e)for(let g=0,E=e.count;g<E;g+=3){const T=e.getX(g+0),w=e.getX(g+1),y=e.getX(g+2);l.fromBufferAttribute(i,T),c.fromBufferAttribute(i,w),h.fromBufferAttribute(i,y),v.subVectors(h,c),S.subVectors(l,c),v.cross(S),p.fromBufferAttribute(s,T),m.fromBufferAttribute(s,w),d.fromBufferAttribute(s,y),p.add(v),m.add(v),d.add(v),s.setXYZ(T,p.x,p.y,p.z),s.setXYZ(w,m.x,m.y,m.z),s.setXYZ(y,d.x,d.y,d.z)}else for(let g=0,E=i.count;g<E;g+=3)l.fromBufferAttribute(i,g+0),c.fromBufferAttribute(i,g+1),h.fromBufferAttribute(i,g+2),v.subVectors(h,c),S.subVectors(l,c),v.cross(S),s.setXYZ(g+0,v.x,v.y,v.z),s.setXYZ(g+1,v.x,v.y,v.z),s.setXYZ(g+2,v.x,v.y,v.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)bn.fromBufferAttribute(e,i),bn.normalize(),e.setXYZ(i,bn.x,bn.y,bn.z)}toNonIndexed(){function e(p,m){const d=p.array,v=p.itemSize,S=p.normalized,g=new d.constructor(m.length*v);let E=0,T=0;for(let w=0,y=m.length;w<y;w++){p.isInterleavedBufferAttribute?E=m[w]*p.data.stride+p.offset:E=m[w]*v;for(let x=0;x<v;x++)g[T++]=d[E++]}return new Pi(g,v,S)}if(this.index===null)return nt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new $n,s=this.index.array,l=this.attributes;for(const p in l){const m=l[p],d=e(m,s);i.setAttribute(p,d)}const c=this.morphAttributes;for(const p in c){const m=[],d=c[p];for(let v=0,S=d.length;v<S;v++){const g=d[v],E=e(g,s);m.push(E)}i.morphAttributes[p]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let p=0,m=h.length;p<m;p++){const d=h[p];i.addGroup(d.start,d.count,d.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const m=this.parameters;for(const d in m)m[d]!==void 0&&(e[d]=m[d]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const d=s[m];e.data.attributes[m]=d.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const d=this.morphAttributes[m],v=[];for(let S=0,g=d.length;S<g;S++){const E=d[S];v.push(E.toJSON(e.data))}v.length>0&&(l[m]=v,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const p=this.boundingSphere;return p!==null&&(e.data.boundingSphere=p.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const l=e.attributes;for(const d in l){const v=l[d];this.setAttribute(d,v.clone(i))}const c=e.morphAttributes;for(const d in c){const v=[],S=c[d];for(let g=0,E=S.length;g<E;g++)v.push(S[g].clone(i));this.morphAttributes[d]=v}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let d=0,v=h.length;d<v;d++){const S=h[d];this.addGroup(S.start,S.count,S.materialIndex)}const p=e.boundingBox;p!==null&&(this.boundingBox=p.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let jM=0;class el extends Fs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jM++}),this.uuid=jo(),this.name="",this.type="Material",this.blending=Or,this.side=rs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Jh,this.blendDst=jh,this.blendEquation=Ls,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new vt(0,0,0),this.blendAlpha=0,this.depthFunc=Br,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=J0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vr,this.stencilZFail=vr,this.stencilZPass=vr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){nt(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){nt(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector2&&s&&s.isVector2||l&&l.isEuler&&s&&s.isEuler||l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Or&&(s.blending=this.blending),this.side!==rs&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Jh&&(s.blendSrc=this.blendSrc),this.blendDst!==jh&&(s.blendDst=this.blendDst),this.blendEquation!==Ls&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Br&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==J0&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==vr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==vr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==vr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const h=[];for(const p in c){const m=c[p];delete m.metadata,h.push(m)}return h}if(i){const c=l(e.textures),h=l(e.images);c.length>0&&(s.textures=c),h.length>0&&(s.images=h)}return s}fromJSON(e,i){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new vt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=i[e.map]||null),e.matcap!==void 0&&(this.matcap=i[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=i[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=i[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=i[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let s=e.normalScale;Array.isArray(s)===!1&&(s=[s,s]),this.normalScale=new ot().fromArray(s)}return e.displacementMap!==void 0&&(this.displacementMap=i[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=i[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=i[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=i[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=i[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=i[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=i[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=i[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=i[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=i[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=i[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=i[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=i[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=i[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ot().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=i[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=i[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=i[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=i[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=i[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=i[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=i[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const xa=new j,Bh=new j,yc=new j,ns=new j,Fh=new j,Ec=new j,Hh=new j;class Mv{constructor(e=new j,i=new j(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,xa)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=xa.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(xa.copy(this.origin).addScaledVector(this.direction,i),xa.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){Bh.copy(e).add(i).multiplyScalar(.5),yc.copy(i).sub(e).normalize(),ns.copy(this.origin).sub(Bh);const c=e.distanceTo(i)*.5,h=-this.direction.dot(yc),p=ns.dot(this.direction),m=-ns.dot(yc),d=ns.lengthSq(),v=Math.abs(1-h*h);let S,g,E,T;if(v>0)if(S=h*m-p,g=h*p-m,T=c*v,S>=0)if(g>=-T)if(g<=T){const w=1/v;S*=w,g*=w,E=S*(S+h*g+2*p)+g*(h*S+g+2*m)+d}else g=c,S=Math.max(0,-(h*g+p)),E=-S*S+g*(g+2*m)+d;else g=-c,S=Math.max(0,-(h*g+p)),E=-S*S+g*(g+2*m)+d;else g<=-T?(S=Math.max(0,-(-h*c+p)),g=S>0?-c:Math.min(Math.max(-c,-m),c),E=-S*S+g*(g+2*m)+d):g<=T?(S=0,g=Math.min(Math.max(-c,-m),c),E=g*(g+2*m)+d):(S=Math.max(0,-(h*c+p)),g=S>0?c:Math.min(Math.max(-c,-m),c),E=-S*S+g*(g+2*m)+d);else g=h>0?-c:c,S=Math.max(0,-(h*g+p)),E=-S*S+g*(g+2*m)+d;return s&&s.copy(this.origin).addScaledVector(this.direction,S),l&&l.copy(Bh).addScaledVector(yc,g),E}intersectSphere(e,i){xa.subVectors(e.center,this.origin);const s=xa.dot(this.direction),l=xa.dot(xa)-s*s,c=e.radius*e.radius;if(l>c)return null;const h=Math.sqrt(c-l),p=s-h,m=s+h;return m<0?null:p<0?this.at(m,i):this.at(p,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,c,h,p,m;const d=1/this.direction.x,v=1/this.direction.y,S=1/this.direction.z,g=this.origin;return d>=0?(s=(e.min.x-g.x)*d,l=(e.max.x-g.x)*d):(s=(e.max.x-g.x)*d,l=(e.min.x-g.x)*d),v>=0?(c=(e.min.y-g.y)*v,h=(e.max.y-g.y)*v):(c=(e.max.y-g.y)*v,h=(e.min.y-g.y)*v),s>h||c>l||((c>s||isNaN(s))&&(s=c),(h<l||isNaN(l))&&(l=h),S>=0?(p=(e.min.z-g.z)*S,m=(e.max.z-g.z)*S):(p=(e.max.z-g.z)*S,m=(e.min.z-g.z)*S),s>m||p>l)||((p>s||s!==s)&&(s=p),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,xa)!==null}intersectTriangle(e,i,s,l,c){Fh.subVectors(i,e),Ec.subVectors(s,e),Hh.crossVectors(Fh,Ec);let h=this.direction.dot(Hh),p;if(h>0){if(l)return null;p=1}else if(h<0)p=-1,h=-h;else return null;ns.subVectors(this.origin,e);const m=p*this.direction.dot(Ec.crossVectors(ns,Ec));if(m<0)return null;const d=p*this.direction.dot(Fh.cross(ns));if(d<0||m+d>h)return null;const v=-p*ns.dot(Hh);return v<0?null:this.at(v/h,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Sa extends el{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bs,this.combine=$_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const d_=new un,ws=new Mv,bc=new nu,p_=new j,Tc=new j,Ac=new j,Rc=new j,Gh=new j,Cc=new j,m_=new j,wc=new j;class In extends jn{constructor(e=new $n,i=new Sa){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const p=this.morphTargetInfluences;if(c&&p){Cc.set(0,0,0);for(let m=0,d=c.length;m<d;m++){const v=p[m],S=c[m];v!==0&&(Gh.fromBufferAttribute(S,e),h?Cc.addScaledVector(Gh,v):Cc.addScaledVector(Gh.sub(i),v))}i.add(Cc)}return i}raycast(e,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),bc.copy(s.boundingSphere),bc.applyMatrix4(c),ws.copy(e.ray).recast(e.near),!(bc.containsPoint(ws.origin)===!1&&(ws.intersectSphere(bc,p_)===null||ws.origin.distanceToSquared(p_)>(e.far-e.near)**2))&&(d_.copy(c).invert(),ws.copy(e.ray).applyMatrix4(d_),!(s.boundingBox!==null&&ws.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,ws)))}_computeIntersections(e,i,s){let l;const c=this.geometry,h=this.material,p=c.index,m=c.attributes.position,d=c.attributes.uv,v=c.attributes.uv1,S=c.attributes.normal,g=c.groups,E=c.drawRange;if(p!==null)if(Array.isArray(h))for(let T=0,w=g.length;T<w;T++){const y=g[T],x=h[y.materialIndex],z=Math.max(y.start,E.start),H=Math.min(p.count,Math.min(y.start+y.count,E.start+E.count));for(let D=z,I=H;D<I;D+=3){const L=p.getX(D),O=p.getX(D+1),b=p.getX(D+2);l=Dc(this,x,e,s,d,v,S,L,O,b),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const T=Math.max(0,E.start),w=Math.min(p.count,E.start+E.count);for(let y=T,x=w;y<x;y+=3){const z=p.getX(y),H=p.getX(y+1),D=p.getX(y+2);l=Dc(this,h,e,s,d,v,S,z,H,D),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let T=0,w=g.length;T<w;T++){const y=g[T],x=h[y.materialIndex],z=Math.max(y.start,E.start),H=Math.min(m.count,Math.min(y.start+y.count,E.start+E.count));for(let D=z,I=H;D<I;D+=3){const L=D,O=D+1,b=D+2;l=Dc(this,x,e,s,d,v,S,L,O,b),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const T=Math.max(0,E.start),w=Math.min(m.count,E.start+E.count);for(let y=T,x=w;y<x;y+=3){const z=y,H=y+1,D=y+2;l=Dc(this,h,e,s,d,v,S,z,H,D),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function $M(o,e,i,s,l,c,h,p){let m;if(e.side===Qn?m=s.intersectTriangle(h,c,l,!0,p):m=s.intersectTriangle(l,c,h,e.side===rs,p),m===null)return null;wc.copy(p),wc.applyMatrix4(o.matrixWorld);const d=i.ray.origin.distanceTo(wc);return d<i.near||d>i.far?null:{distance:d,point:wc.clone(),object:o}}function Dc(o,e,i,s,l,c,h,p,m,d){o.getVertexPosition(p,Tc),o.getVertexPosition(m,Ac),o.getVertexPosition(d,Rc);const v=$M(o,e,i,s,Tc,Ac,Rc,m_);if(v){const S=new j;Ni.getBarycoord(m_,Tc,Ac,Rc,S),l&&(v.uv=Ni.getInterpolatedAttribute(l,p,m,d,S,new ot)),c&&(v.uv1=Ni.getInterpolatedAttribute(c,p,m,d,S,new ot)),h&&(v.normal=Ni.getInterpolatedAttribute(h,p,m,d,S,new j),v.normal.dot(s.direction)>0&&v.normal.multiplyScalar(-1));const g={a:p,b:m,c:d,normal:new j,materialIndex:0};Ni.getNormal(Tc,Ac,Rc,g.normal),v.face=g,v.barycoord=S}return v}class ey extends Gn{constructor(e=null,i=1,s=1,l,c,h,p,m,d=Dn,v=Dn,S,g){super(null,h,p,m,d,v,l,c,S,g),this.isDataTexture=!0,this.image={data:e,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Vh=new j,ty=new j,ny=new rt;class Us{constructor(e=new j(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=Vh.subVectors(s,i).cross(ty.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i,s=!0){const l=e.delta(Vh),c=this.normal.dot(l);if(c===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const h=-(e.start.dot(this.normal)+this.constant)/c;return s===!0&&(h<0||h>1)?null:i.copy(e.start).addScaledVector(l,h)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||ny.getNormalMatrix(e),l=this.coplanarPoint(Vh).applyMatrix4(e),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ds=new nu,iy=new ot(.5,.5),Uc=new j;class yv{constructor(e=new Us,i=new Us,s=new Us,l=new Us,c=new Us,h=new Us){this.planes=[e,i,s,l,c,h]}set(e,i,s,l,c,h){const p=this.planes;return p[0].copy(e),p[1].copy(i),p[2].copy(s),p[3].copy(l),p[4].copy(c),p[5].copy(h),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=qi,s=!1){const l=this.planes,c=e.elements,h=c[0],p=c[1],m=c[2],d=c[3],v=c[4],S=c[5],g=c[6],E=c[7],T=c[8],w=c[9],y=c[10],x=c[11],z=c[12],H=c[13],D=c[14],I=c[15];if(l[0].setComponents(d-h,E-v,x-T,I-z).normalize(),l[1].setComponents(d+h,E+v,x+T,I+z).normalize(),l[2].setComponents(d+p,E+S,x+w,I+H).normalize(),l[3].setComponents(d-p,E-S,x-w,I-H).normalize(),s)l[4].setComponents(m,g,y,D).normalize(),l[5].setComponents(d-m,E-g,x-y,I-D).normalize();else if(l[4].setComponents(d-m,E-g,x-y,I-D).normalize(),i===qi)l[5].setComponents(d+m,E+g,x+y,I+D).normalize();else if(i===Kc)l[5].setComponents(m,g,y,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ds.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Ds.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ds)}intersectsSprite(e){Ds.center.set(0,0,0);const i=iy.distanceTo(e.center);return Ds.radius=.7071067811865476+i,Ds.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ds)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Uc.x=l.normal.x>0?e.max.x:e.min.x,Uc.y=l.normal.y>0?e.max.y:e.min.y,Uc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Uc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ev extends el{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new vt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Jc=new j,jc=new j,g_=new un,Wo=new Mv,Lc=new nu,kh=new j,__=new j;class ay extends jn{constructor(e=new $n,i=new Ev){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)Jc.fromBufferAttribute(i,l-1),jc.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=Jc.distanceTo(jc);e.setAttribute("lineDistance",new Sn(s,1))}else nt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,i){const s=this.geometry,l=this.matrixWorld,c=e.params.Line.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Lc.copy(s.boundingSphere),Lc.applyMatrix4(l),Lc.radius+=c,e.ray.intersectsSphere(Lc)===!1)return;g_.copy(l).invert(),Wo.copy(e.ray).applyMatrix4(g_);const p=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=p*p,d=this.isLineSegments?2:1,v=s.index,g=s.attributes.position;if(v!==null){const E=Math.max(0,h.start),T=Math.min(v.count,h.start+h.count);for(let w=E,y=T-1;w<y;w+=d){const x=v.getX(w),z=v.getX(w+1),H=Nc(this,e,Wo,m,x,z,w);H&&i.push(H)}if(this.isLineLoop){const w=v.getX(T-1),y=v.getX(E),x=Nc(this,e,Wo,m,w,y,T-1);x&&i.push(x)}}else{const E=Math.max(0,h.start),T=Math.min(g.count,h.start+h.count);for(let w=E,y=T-1;w<y;w+=d){const x=Nc(this,e,Wo,m,w,w+1,w);x&&i.push(x)}if(this.isLineLoop){const w=Nc(this,e,Wo,m,T-1,E,T-1);w&&i.push(w)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}}function Nc(o,e,i,s,l,c,h){const p=o.geometry.attributes.position;if(Jc.fromBufferAttribute(p,l),jc.fromBufferAttribute(p,c),i.distanceSqToSegment(Jc,jc,kh,__)>s)return;kh.applyMatrix4(o.matrixWorld);const d=e.ray.origin.distanceTo(kh);if(!(d<e.near||d>e.far))return{distance:d,point:__.clone().applyMatrix4(o.matrixWorld),index:h,face:null,faceIndex:null,barycoord:null,object:o}}const v_=new j,x_=new j;class sy extends ay{constructor(e,i){super(e,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,s=[];for(let l=0,c=i.count;l<c;l+=2)v_.fromBufferAttribute(i,l),x_.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+v_.distanceTo(x_);e.setAttribute("lineDistance",new Sn(s,1))}else nt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class bv extends Gn{constructor(e=[],i=Is,s,l,c,h,p,m,d,v){super(e,i,s,l,c,h,p,m,d,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Hr extends Gn{constructor(e,i,s=Ki,l,c,h,p=Dn,m=Dn,d,v=ba,S=1){if(v!==ba&&v!==Ps)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:i,depth:S};super(g,l,c,h,p,m,v,s,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Jd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class ry extends Hr{constructor(e,i=Ki,s=Is,l,c,h=Dn,p=Dn,m,d=ba){const v={width:e,height:e,depth:1},S=[v,v,v,v,v,v];super(e,e,i,s,l,c,h,p,m,d),this.image=S,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Tv extends Gn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Wr extends $n{constructor(e=1,i=1,s=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:h};const p=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const m=[],d=[],v=[],S=[];let g=0,E=0;T("z","y","x",-1,-1,s,i,e,h,c,0),T("z","y","x",1,-1,s,i,-e,h,c,1),T("x","z","y",1,1,e,s,i,l,h,2),T("x","z","y",1,-1,e,s,-i,l,h,3),T("x","y","z",1,-1,e,i,s,l,c,4),T("x","y","z",-1,-1,e,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new Sn(d,3)),this.setAttribute("normal",new Sn(v,3)),this.setAttribute("uv",new Sn(S,2));function T(w,y,x,z,H,D,I,L,O,b,N){const Y=D/O,k=I/b,Q=D/2,me=I/2,Se=L/2,J=O+1,P=b+1;let F=0,$=0;const ve=new j;for(let le=0;le<P;le++){const C=le*k-me;for(let V=0;V<J;V++){const _e=V*Y-Q;ve[w]=_e*z,ve[y]=C*H,ve[x]=Se,d.push(ve.x,ve.y,ve.z),ve[w]=0,ve[y]=0,ve[x]=L>0?1:-1,v.push(ve.x,ve.y,ve.z),S.push(V/O),S.push(1-le/b),F+=1}}for(let le=0;le<b;le++)for(let C=0;C<O;C++){const V=g+C+J*le,_e=g+C+J*(le+1),be=g+(C+1)+J*(le+1),Ce=g+(C+1)+J*le;m.push(V,_e,Ce),m.push(_e,be,Ce),$+=6}p.addGroup(E,$,N),E+=$,g+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class jd extends $n{constructor(e=1,i=32,s=0,l=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:i,thetaStart:s,thetaLength:l},i=Math.max(3,i);const c=[],h=[],p=[],m=[],d=new j,v=new ot;h.push(0,0,0),p.push(0,0,1),m.push(.5,.5);for(let S=0,g=3;S<=i;S++,g+=3){const E=s+S/i*l;d.x=e*Math.cos(E),d.y=e*Math.sin(E),h.push(d.x,d.y,d.z),p.push(0,0,1),v.x=(h[g]/e+1)/2,v.y=(h[g+1]/e+1)/2,m.push(v.x,v.y)}for(let S=1;S<=i;S++)c.push(S,S+1,0);this.setIndex(c),this.setAttribute("position",new Sn(h,3)),this.setAttribute("normal",new Sn(p,3)),this.setAttribute("uv",new Sn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jd(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class iu extends $n{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const c=e/2,h=i/2,p=Math.floor(s),m=Math.floor(l),d=p+1,v=m+1,S=e/p,g=i/m,E=[],T=[],w=[],y=[];for(let x=0;x<v;x++){const z=x*g-h;for(let H=0;H<d;H++){const D=H*S-c;T.push(D,-z,0),w.push(0,0,1),y.push(H/p),y.push(1-x/m)}}for(let x=0;x<m;x++)for(let z=0;z<p;z++){const H=z+d*x,D=z+d*(x+1),I=z+1+d*(x+1),L=z+1+d*x;E.push(H,D,L),E.push(D,I,L)}this.setIndex(E),this.setAttribute("position",new Sn(T,3)),this.setAttribute("normal",new Sn(w,3)),this.setAttribute("uv",new Sn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new iu(e.width,e.height,e.widthSegments,e.heightSegments)}}class Nr extends $n{constructor(e=1,i=.4,s=12,l=48,c=Math.PI*2,h=0,p=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:i,radialSegments:s,tubularSegments:l,arc:c,thetaStart:h,thetaLength:p},s=Math.floor(s),l=Math.floor(l);const m=[],d=[],v=[],S=[],g=new j,E=new j,T=new j;for(let w=0;w<=s;w++){const y=h+w/s*p;for(let x=0;x<=l;x++){const z=x/l*c;E.x=(e+i*Math.cos(y))*Math.cos(z),E.y=(e+i*Math.cos(y))*Math.sin(z),E.z=i*Math.sin(y),d.push(E.x,E.y,E.z),g.x=e*Math.cos(z),g.y=e*Math.sin(z),T.subVectors(E,g).normalize(),v.push(T.x,T.y,T.z),S.push(x/l),S.push(w/s)}}for(let w=1;w<=s;w++)for(let y=1;y<=l;y++){const x=(l+1)*w+y-1,z=(l+1)*(w-1)+y-1,H=(l+1)*(w-1)+y,D=(l+1)*w+y;m.push(x,z,D),m.push(z,H,D)}this.setIndex(m),this.setAttribute("position",new Sn(d,3)),this.setAttribute("normal",new Sn(v,3)),this.setAttribute("uv",new Sn(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nr(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}function Gr(o){const e={};for(const i in o){e[i]={};for(const s in o[i]){const l=o[i][s];if(S_(l))l.isRenderTargetTexture?(nt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone();else if(Array.isArray(l))if(S_(l[0])){const c=[];for(let h=0,p=l.length;h<p;h++)c[h]=l[h].clone();e[i][s]=c}else e[i][s]=l.slice();else e[i][s]=l}}return e}function Hn(o){const e={};for(let i=0;i<o.length;i++){const s=Gr(o[i]);for(const l in s)e[l]=s[l]}return e}function S_(o){return o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)}function oy(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function Av(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:bt.workingColorSpace}const $c={clone:Gr,merge:Hn};var ly=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Bn extends el{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ly,this.fragmentShader=cy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Gr(e.uniforms),this.uniformsGroups=oy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}fromJSON(e,i){if(super.fromJSON(e,i),e.uniforms!==void 0)for(const s in e.uniforms){const l=e.uniforms[s];switch(this.uniforms[s]={},l.type){case"t":this.uniforms[s].value=i[l.value]||null;break;case"c":this.uniforms[s].value=new vt().setHex(l.value);break;case"v2":this.uniforms[s].value=new ot().fromArray(l.value);break;case"v3":this.uniforms[s].value=new j().fromArray(l.value);break;case"v4":this.uniforms[s].value=new on().fromArray(l.value);break;case"m3":this.uniforms[s].value=new rt().fromArray(l.value);break;case"m4":this.uniforms[s].value=new un().fromArray(l.value);break;default:this.uniforms[s].value=l.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const s in e.extensions)this.extensions[s]=e.extensions[s];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class uy extends Bn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class fy extends el{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=yM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class hy extends el{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Oc=new j,Pc=new Xr,Vi=new j;class Rv extends jn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new un,this.projectionMatrix=new un,this.projectionMatrixInverse=new un,this.coordinateSystem=qi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Oc,Pc,Vi),Vi.x===1&&Vi.y===1&&Vi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Oc,Pc,Vi.set(1,1,1)).invert()}updateWorldMatrix(e,i,s=!1){super.updateWorldMatrix(e,i,s),this.matrixWorld.decompose(Oc,Pc,Vi),Vi.x===1&&Vi.y===1&&Vi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Oc,Pc,Vi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const is=new j,M_=new ot,y_=new ot;class Ei extends Rv{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Bd*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(xh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Bd*2*Math.atan(Math.tan(xh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){is.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(is.x,is.y).multiplyScalar(-e/is.z),is.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(is.x,is.y).multiplyScalar(-e/is.z)}getViewSize(e,i){return this.getViewBounds(e,M_,y_),i.subVectors(y_,M_)}setViewOffset(e,i,s,l,c,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(xh*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,d=h.fullHeight;c+=h.offsetX*l/m,i-=h.offsetY*s/d,l*=h.width/m,s*=h.height/d}const p=this.filmOffset;p!==0&&(c+=e*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class $d extends Rv{constructor(e=-1,i=1,s=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-e,h=s+e,p=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=d*this.view.offsetX,h=c+d*this.view.width,p-=v*this.view.offsetY,m=p-v*this.view.height}this.projectionMatrix.makeOrthographic(c,h,p,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const wr=-90,Dr=1;class dy extends jn{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Ei(wr,Dr,e,i);l.layers=this.layers,this.add(l);const c=new Ei(wr,Dr,e,i);c.layers=this.layers,this.add(c);const h=new Ei(wr,Dr,e,i);h.layers=this.layers,this.add(h);const p=new Ei(wr,Dr,e,i);p.layers=this.layers,this.add(p);const m=new Ei(wr,Dr,e,i);m.layers=this.layers,this.add(m);const d=new Ei(wr,Dr,e,i);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,c,h,p,m]=i;for(const d of i)this.remove(d);if(e===qi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Kc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of i)this.add(d),d.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,h,p,m,d,v]=this.children,S=e.getRenderTarget(),g=e.getActiveCubeFace(),E=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const w=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(s,0,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,c),e.setRenderTarget(s,1,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,h),e.setRenderTarget(s,2,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,p),e.setRenderTarget(s,3,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),e.setRenderTarget(s,4,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,d),s.texture.generateMipmaps=w,e.setRenderTarget(s,5,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,v),e.setRenderTarget(S,g,E),e.xr.enabled=T,s.texture.needsPMREMUpdate=!0}}class py extends Ei{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class my{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=gy.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function gy(){this._document.hidden===!1&&this.reset()}class _y{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,nt("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}}const ap=class ap{constructor(e,i,s,l){this.elements=[1,0,0,1],e!==void 0&&this.set(e,i,s,l)}identity(){return this.set(1,0,0,1),this}fromArray(e,i=0){for(let s=0;s<4;s++)this.elements[s]=e[s+i];return this}set(e,i,s,l){const c=this.elements;return c[0]=e,c[2]=i,c[1]=s,c[3]=l,this}};ap.prototype.isMatrix2=!0;let E_=ap;function b_(o,e,i,s){const l=vy(s);switch(i){case hv:return o*e;case pv:return o*e/l.components*l.byteLength;case qd:return o*e/l.components*l.byteLength;case zs:return o*e*2/l.components*l.byteLength;case Yd:return o*e*2/l.components*l.byteLength;case dv:return o*e*3/l.components*l.byteLength;case Oi:return o*e*4/l.components*l.byteLength;case Zd:return o*e*4/l.components*l.byteLength;case Fc:case Hc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Gc:case Vc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case cd:case fd:return Math.max(o,16)*Math.max(e,8)/4;case ld:case ud:return Math.max(o,8)*Math.max(e,8)/2;case hd:case dd:case md:case gd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case pd:case Wc:case _d:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case vd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case xd:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case Sd:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case Md:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case yd:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case Ed:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case bd:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case Td:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Ad:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case Rd:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case Cd:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case wd:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Dd:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case Ud:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Ld:case Nd:case Od:return Math.ceil(o/4)*Math.ceil(e/4)*16;case Pd:case Id:return Math.ceil(o/4)*Math.ceil(e/4)*8;case qc:case zd:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function vy(o){switch(o){case bi:case lv:return{byteLength:1,components:1};case Qo:case cv:case hi:return{byteLength:2,components:1};case Xd:case Wd:return{byteLength:2,components:4};case Ki:case kd:case Wi:return{byteLength:4,components:1};case uv:case fv:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vd}}));typeof window<"u"&&(window.__THREE__?nt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vd);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Cv(){let o=null,e=!1,i=null,s=null;function l(c,h){i(c,h),s=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&o!==null&&(s=o.requestAnimationFrame(l),e=!0)},stop:function(){o!==null&&o.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){o=c}}}function xy(o){const e=new WeakMap;function i(p,m){const d=p.array,v=p.usage,S=d.byteLength,g=o.createBuffer();o.bindBuffer(m,g),o.bufferData(m,d,v),p.onUploadCallback();let E;if(d instanceof Float32Array)E=o.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)E=o.HALF_FLOAT;else if(d instanceof Uint16Array)p.isFloat16BufferAttribute?E=o.HALF_FLOAT:E=o.UNSIGNED_SHORT;else if(d instanceof Int16Array)E=o.SHORT;else if(d instanceof Uint32Array)E=o.UNSIGNED_INT;else if(d instanceof Int32Array)E=o.INT;else if(d instanceof Int8Array)E=o.BYTE;else if(d instanceof Uint8Array)E=o.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)E=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:E,bytesPerElement:d.BYTES_PER_ELEMENT,version:p.version,size:S}}function s(p,m,d){const v=m.array,S=m.updateRanges;if(o.bindBuffer(d,p),S.length===0)o.bufferSubData(d,0,v);else{S.sort((E,T)=>E.start-T.start);let g=0;for(let E=1;E<S.length;E++){const T=S[g],w=S[E];w.start<=T.start+T.count+1?T.count=Math.max(T.count,w.start+w.count-T.start):(++g,S[g]=w)}S.length=g+1;for(let E=0,T=S.length;E<T;E++){const w=S[E];o.bufferSubData(d,w.start*v.BYTES_PER_ELEMENT,v,w.start,w.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(p){return p.isInterleavedBufferAttribute&&(p=p.data),e.get(p)}function c(p){p.isInterleavedBufferAttribute&&(p=p.data);const m=e.get(p);m&&(o.deleteBuffer(m.buffer),e.delete(p))}function h(p,m){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const v=e.get(p);(!v||v.version<p.version)&&e.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const d=e.get(p);if(d===void 0)e.set(p,i(p,m));else if(d.version<p.version){if(d.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(d.buffer,p,m),d.version=p.version}}return{get:l,remove:c,update:h}}var Sy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,My=`#ifdef USE_ALPHAHASH
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
#endif`,yy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ey=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,by=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ty=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ay=`#ifdef USE_AOMAP
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
#endif`,Ry=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Cy=`#ifdef USE_BATCHING
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
#endif`,wy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Dy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Uy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ly=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ny=`#ifdef USE_IRIDESCENCE
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
#endif`,Oy=`#ifdef USE_BUMPMAP
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
#endif`,Py=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Iy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,By=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Fy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Hy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Gy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Vy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,ky=`#define PI 3.141592653589793
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
} // validated`,Xy=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Wy=`vec3 transformedNormal = objectNormal;
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
#endif`,qy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Yy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Zy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ky=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Qy="gl_FragColor = linearToOutputTexel( gl_FragColor );",Jy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,jy=`#ifdef USE_ENVMAP
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
#endif`,$y=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,eE=`#ifdef USE_ENVMAP
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
#endif`,tE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,nE=`#ifdef USE_ENVMAP
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
#endif`,iE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,aE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,oE=`#ifdef USE_GRADIENTMAP
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
}`,lE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,cE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,uE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fE=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,hE=`#ifdef USE_ENVMAP
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
#endif`,dE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,pE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,mE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_E=`PhysicalMaterial material;
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
#endif`,vE=`uniform sampler2D dfgLUT;
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
}`,xE=`
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
#endif`,SE=`#if defined( RE_IndirectDiffuse )
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
#endif`,ME=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,yE=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,EE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,TE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,AE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,RE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,CE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,DE=`#if defined( USE_POINTS_UV )
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
#endif`,UE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,LE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,NE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,OE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,PE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,IE=`#ifdef USE_MORPHTARGETS
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
#endif`,zE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,BE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,FE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,HE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,GE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,VE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,kE=`#ifdef USE_NORMALMAP
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
#endif`,XE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,WE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,YE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ZE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,KE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,QE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,JE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,jE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$E=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,eb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,tb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,nb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ib=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ab=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,sb=`float getShadowMask() {
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
}`,rb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ob=`#ifdef USE_SKINNING
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
#endif`,lb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cb=`#ifdef USE_SKINNING
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
#endif`,ub=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,fb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,db=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,pb=`#ifdef USE_TRANSMISSION
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
#endif`,mb=`#ifdef USE_TRANSMISSION
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
#endif`,gb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_b=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Sb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Mb=`uniform sampler2D t2D;
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
}`,yb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Eb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,bb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ab=`#include <common>
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
}`,Rb=`#if DEPTH_PACKING == 3200
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
}`,Cb=`#define DISTANCE
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
}`,wb=`#define DISTANCE
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
}`,Db=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ub=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lb=`uniform float scale;
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
}`,Nb=`uniform vec3 diffuse;
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
}`,Ob=`#include <common>
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
}`,Pb=`uniform vec3 diffuse;
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
}`,Ib=`#define LAMBERT
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
}`,zb=`#define LAMBERT
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
}`,Bb=`#define MATCAP
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
}`,Fb=`#define MATCAP
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
}`,Hb=`#define NORMAL
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
}`,Gb=`#define NORMAL
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
}`,Vb=`#define PHONG
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
}`,kb=`#define PHONG
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
}`,Xb=`#define STANDARD
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
}`,Wb=`#define STANDARD
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
}`,qb=`#define TOON
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
}`,Yb=`#define TOON
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
}`,Zb=`uniform float size;
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
}`,Kb=`uniform vec3 diffuse;
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
}`,Qb=`#include <common>
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
}`,Jb=`uniform vec3 color;
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
}`,jb=`uniform float rotation;
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
}`,$b=`uniform vec3 diffuse;
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
}`,dt={alphahash_fragment:Sy,alphahash_pars_fragment:My,alphamap_fragment:yy,alphamap_pars_fragment:Ey,alphatest_fragment:by,alphatest_pars_fragment:Ty,aomap_fragment:Ay,aomap_pars_fragment:Ry,batching_pars_vertex:Cy,batching_vertex:wy,begin_vertex:Dy,beginnormal_vertex:Uy,bsdfs:Ly,iridescence_fragment:Ny,bumpmap_pars_fragment:Oy,clipping_planes_fragment:Py,clipping_planes_pars_fragment:Iy,clipping_planes_pars_vertex:zy,clipping_planes_vertex:By,color_fragment:Fy,color_pars_fragment:Hy,color_pars_vertex:Gy,color_vertex:Vy,common:ky,cube_uv_reflection_fragment:Xy,defaultnormal_vertex:Wy,displacementmap_pars_vertex:qy,displacementmap_vertex:Yy,emissivemap_fragment:Zy,emissivemap_pars_fragment:Ky,colorspace_fragment:Qy,colorspace_pars_fragment:Jy,envmap_fragment:jy,envmap_common_pars_fragment:$y,envmap_pars_fragment:eE,envmap_pars_vertex:tE,envmap_physical_pars_fragment:hE,envmap_vertex:nE,fog_vertex:iE,fog_pars_vertex:aE,fog_fragment:sE,fog_pars_fragment:rE,gradientmap_pars_fragment:oE,lightmap_pars_fragment:lE,lights_lambert_fragment:cE,lights_lambert_pars_fragment:uE,lights_pars_begin:fE,lights_toon_fragment:dE,lights_toon_pars_fragment:pE,lights_phong_fragment:mE,lights_phong_pars_fragment:gE,lights_physical_fragment:_E,lights_physical_pars_fragment:vE,lights_fragment_begin:xE,lights_fragment_maps:SE,lights_fragment_end:ME,lightprobes_pars_fragment:yE,logdepthbuf_fragment:EE,logdepthbuf_pars_fragment:bE,logdepthbuf_pars_vertex:TE,logdepthbuf_vertex:AE,map_fragment:RE,map_pars_fragment:CE,map_particle_fragment:wE,map_particle_pars_fragment:DE,metalnessmap_fragment:UE,metalnessmap_pars_fragment:LE,morphinstance_vertex:NE,morphcolor_vertex:OE,morphnormal_vertex:PE,morphtarget_pars_vertex:IE,morphtarget_vertex:zE,normal_fragment_begin:BE,normal_fragment_maps:FE,normal_pars_fragment:HE,normal_pars_vertex:GE,normal_vertex:VE,normalmap_pars_fragment:kE,clearcoat_normal_fragment_begin:XE,clearcoat_normal_fragment_maps:WE,clearcoat_pars_fragment:qE,iridescence_pars_fragment:YE,opaque_fragment:ZE,packing:KE,premultiplied_alpha_fragment:QE,project_vertex:JE,dithering_fragment:jE,dithering_pars_fragment:$E,roughnessmap_fragment:eb,roughnessmap_pars_fragment:tb,shadowmap_pars_fragment:nb,shadowmap_pars_vertex:ib,shadowmap_vertex:ab,shadowmask_pars_fragment:sb,skinbase_vertex:rb,skinning_pars_vertex:ob,skinning_vertex:lb,skinnormal_vertex:cb,specularmap_fragment:ub,specularmap_pars_fragment:fb,tonemapping_fragment:hb,tonemapping_pars_fragment:db,transmission_fragment:pb,transmission_pars_fragment:mb,uv_pars_fragment:gb,uv_pars_vertex:_b,uv_vertex:vb,worldpos_vertex:xb,background_vert:Sb,background_frag:Mb,backgroundCube_vert:yb,backgroundCube_frag:Eb,cube_vert:bb,cube_frag:Tb,depth_vert:Ab,depth_frag:Rb,distance_vert:Cb,distance_frag:wb,equirect_vert:Db,equirect_frag:Ub,linedashed_vert:Lb,linedashed_frag:Nb,meshbasic_vert:Ob,meshbasic_frag:Pb,meshlambert_vert:Ib,meshlambert_frag:zb,meshmatcap_vert:Bb,meshmatcap_frag:Fb,meshnormal_vert:Hb,meshnormal_frag:Gb,meshphong_vert:Vb,meshphong_frag:kb,meshphysical_vert:Xb,meshphysical_frag:Wb,meshtoon_vert:qb,meshtoon_frag:Yb,points_vert:Zb,points_frag:Kb,shadow_vert:Qb,shadow_frag:Jb,sprite_vert:jb,sprite_frag:$b},Be={common:{diffuse:{value:new vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new rt}},envmap:{envMap:{value:null},envMapRotation:{value:new rt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new rt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new rt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new rt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new rt},normalScale:{value:new ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new rt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new rt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new rt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new rt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new j},probesMax:{value:new j},probesResolution:{value:new j}},points:{diffuse:{value:new vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0},uvTransform:{value:new rt}},sprite:{diffuse:{value:new vt(16777215)},opacity:{value:1},center:{value:new ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}}},Xi={basic:{uniforms:Hn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.fog]),vertexShader:dt.meshbasic_vert,fragmentShader:dt.meshbasic_frag},lambert:{uniforms:Hn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new vt(0)},envMapIntensity:{value:1}}]),vertexShader:dt.meshlambert_vert,fragmentShader:dt.meshlambert_frag},phong:{uniforms:Hn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new vt(0)},specular:{value:new vt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:dt.meshphong_vert,fragmentShader:dt.meshphong_frag},standard:{uniforms:Hn([Be.common,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.roughnessmap,Be.metalnessmap,Be.fog,Be.lights,{emissive:{value:new vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag},toon:{uniforms:Hn([Be.common,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.gradientmap,Be.fog,Be.lights,{emissive:{value:new vt(0)}}]),vertexShader:dt.meshtoon_vert,fragmentShader:dt.meshtoon_frag},matcap:{uniforms:Hn([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,{matcap:{value:null}}]),vertexShader:dt.meshmatcap_vert,fragmentShader:dt.meshmatcap_frag},points:{uniforms:Hn([Be.points,Be.fog]),vertexShader:dt.points_vert,fragmentShader:dt.points_frag},dashed:{uniforms:Hn([Be.common,Be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:dt.linedashed_vert,fragmentShader:dt.linedashed_frag},depth:{uniforms:Hn([Be.common,Be.displacementmap]),vertexShader:dt.depth_vert,fragmentShader:dt.depth_frag},normal:{uniforms:Hn([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,{opacity:{value:1}}]),vertexShader:dt.meshnormal_vert,fragmentShader:dt.meshnormal_frag},sprite:{uniforms:Hn([Be.sprite,Be.fog]),vertexShader:dt.sprite_vert,fragmentShader:dt.sprite_frag},background:{uniforms:{uvTransform:{value:new rt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:dt.background_vert,fragmentShader:dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new rt}},vertexShader:dt.backgroundCube_vert,fragmentShader:dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:dt.cube_vert,fragmentShader:dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:dt.equirect_vert,fragmentShader:dt.equirect_frag},distance:{uniforms:Hn([Be.common,Be.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:dt.distance_vert,fragmentShader:dt.distance_frag},shadow:{uniforms:Hn([Be.lights,Be.fog,{color:{value:new vt(0)},opacity:{value:1}}]),vertexShader:dt.shadow_vert,fragmentShader:dt.shadow_frag}};Xi.physical={uniforms:Hn([Xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new rt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new rt},clearcoatNormalScale:{value:new ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new rt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new rt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new rt},sheen:{value:0},sheenColor:{value:new vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new rt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new rt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new rt},transmissionSamplerSize:{value:new ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new rt},attenuationDistance:{value:0},attenuationColor:{value:new vt(0)},specularColor:{value:new vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new rt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new rt},anisotropyVector:{value:new ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new rt}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag};const Ic={r:0,b:0,g:0},eT=new un,wv=new rt;wv.set(-1,0,0,0,1,0,0,0,1);function tT(o,e,i,s,l,c){const h=new vt(0);let p=l===!0?0:1,m,d,v=null,S=0,g=null;function E(z){let H=z.isScene===!0?z.background:null;if(H&&H.isTexture){const D=z.backgroundBlurriness>0;H=e.get(H,D)}return H}function T(z){let H=!1;const D=E(z);D===null?y(h,p):D&&D.isColor&&(y(D,1),H=!0);const I=o.xr.getEnvironmentBlendMode();I==="additive"?i.buffers.color.setClear(0,0,0,1,c):I==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(o.autoClear||H)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function w(z,H){const D=E(H);D&&(D.isCubeTexture||D.mapping===tu)?(d===void 0&&(d=new In(new Wr(1,1,1),new Bn({name:"BackgroundCubeMaterial",uniforms:Gr(Xi.backgroundCube.uniforms),vertexShader:Xi.backgroundCube.vertexShader,fragmentShader:Xi.backgroundCube.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(I,L,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(d)),d.material.uniforms.envMap.value=D,d.material.uniforms.backgroundBlurriness.value=H.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=H.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(eT.makeRotationFromEuler(H.backgroundRotation)).transpose(),D.isCubeTexture&&D.isRenderTargetTexture===!1&&d.material.uniforms.backgroundRotation.value.premultiply(wv),d.material.toneMapped=bt.getTransfer(D.colorSpace)!==Gt,(v!==D||S!==D.version||g!==o.toneMapping)&&(d.material.needsUpdate=!0,v=D,S=D.version,g=o.toneMapping),d.layers.enableAll(),z.unshift(d,d.geometry,d.material,0,0,null)):D&&D.isTexture&&(m===void 0&&(m=new In(new iu(2,2),new Bn({name:"BackgroundMaterial",uniforms:Gr(Xi.background.uniforms),vertexShader:Xi.background.vertexShader,fragmentShader:Xi.background.fragmentShader,side:rs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=D,m.material.uniforms.backgroundIntensity.value=H.backgroundIntensity,m.material.toneMapped=bt.getTransfer(D.colorSpace)!==Gt,D.matrixAutoUpdate===!0&&D.updateMatrix(),m.material.uniforms.uvTransform.value.copy(D.matrix),(v!==D||S!==D.version||g!==o.toneMapping)&&(m.material.needsUpdate=!0,v=D,S=D.version,g=o.toneMapping),m.layers.enableAll(),z.unshift(m,m.geometry,m.material,0,0,null))}function y(z,H){z.getRGB(Ic,Av(o)),i.buffers.color.setClear(Ic.r,Ic.g,Ic.b,H,c)}function x(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return h},setClearColor:function(z,H=1){h.set(z),p=H,y(h,p)},getClearAlpha:function(){return p},setClearAlpha:function(z){p=z,y(h,p)},render:T,addToRenderList:w,dispose:x}}function nT(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},l=g(null);let c=l,h=!1;function p(k,Q,me,Se,J){let P=!1;const F=S(k,Se,me,Q);c!==F&&(c=F,d(c.object)),P=E(k,Se,me,J),P&&T(k,Se,me,J),J!==null&&e.update(J,o.ELEMENT_ARRAY_BUFFER),(P||h)&&(h=!1,D(k,Q,me,Se),J!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(J).buffer))}function m(){return o.createVertexArray()}function d(k){return o.bindVertexArray(k)}function v(k){return o.deleteVertexArray(k)}function S(k,Q,me,Se){const J=Se.wireframe===!0;let P=s[Q.id];P===void 0&&(P={},s[Q.id]=P);const F=k.isInstancedMesh===!0?k.id:0;let $=P[F];$===void 0&&($={},P[F]=$);let ve=$[me.id];ve===void 0&&(ve={},$[me.id]=ve);let le=ve[J];return le===void 0&&(le=g(m()),ve[J]=le),le}function g(k){const Q=[],me=[],Se=[];for(let J=0;J<i;J++)Q[J]=0,me[J]=0,Se[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Q,enabledAttributes:me,attributeDivisors:Se,object:k,attributes:{},index:null}}function E(k,Q,me,Se){const J=c.attributes,P=Q.attributes;let F=0;const $=me.getAttributes();for(const ve in $)if($[ve].location>=0){const C=J[ve];let V=P[ve];if(V===void 0&&(ve==="instanceMatrix"&&k.instanceMatrix&&(V=k.instanceMatrix),ve==="instanceColor"&&k.instanceColor&&(V=k.instanceColor)),C===void 0||C.attribute!==V||V&&C.data!==V.data)return!0;F++}return c.attributesNum!==F||c.index!==Se}function T(k,Q,me,Se){const J={},P=Q.attributes;let F=0;const $=me.getAttributes();for(const ve in $)if($[ve].location>=0){let C=P[ve];C===void 0&&(ve==="instanceMatrix"&&k.instanceMatrix&&(C=k.instanceMatrix),ve==="instanceColor"&&k.instanceColor&&(C=k.instanceColor));const V={};V.attribute=C,C&&C.data&&(V.data=C.data),J[ve]=V,F++}c.attributes=J,c.attributesNum=F,c.index=Se}function w(){const k=c.newAttributes;for(let Q=0,me=k.length;Q<me;Q++)k[Q]=0}function y(k){x(k,0)}function x(k,Q){const me=c.newAttributes,Se=c.enabledAttributes,J=c.attributeDivisors;me[k]=1,Se[k]===0&&(o.enableVertexAttribArray(k),Se[k]=1),J[k]!==Q&&(o.vertexAttribDivisor(k,Q),J[k]=Q)}function z(){const k=c.newAttributes,Q=c.enabledAttributes;for(let me=0,Se=Q.length;me<Se;me++)Q[me]!==k[me]&&(o.disableVertexAttribArray(me),Q[me]=0)}function H(k,Q,me,Se,J,P,F){F===!0?o.vertexAttribIPointer(k,Q,me,J,P):o.vertexAttribPointer(k,Q,me,Se,J,P)}function D(k,Q,me,Se){w();const J=Se.attributes,P=me.getAttributes(),F=Q.defaultAttributeValues;for(const $ in P){const ve=P[$];if(ve.location>=0){let le=J[$];if(le===void 0&&($==="instanceMatrix"&&k.instanceMatrix&&(le=k.instanceMatrix),$==="instanceColor"&&k.instanceColor&&(le=k.instanceColor)),le!==void 0){const C=le.normalized,V=le.itemSize,_e=e.get(le);if(_e===void 0)continue;const be=_e.buffer,Ce=_e.type,ee=_e.bytesPerElement,Me=Ce===o.INT||Ce===o.UNSIGNED_INT||le.gpuType===kd;if(le.isInterleavedBufferAttribute){const de=le.data,De=de.stride,je=le.offset;if(de.isInstancedInterleavedBuffer){for(let Ge=0;Ge<ve.locationSize;Ge++)x(ve.location+Ge,de.meshPerAttribute);k.isInstancedMesh!==!0&&Se._maxInstanceCount===void 0&&(Se._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let Ge=0;Ge<ve.locationSize;Ge++)y(ve.location+Ge);o.bindBuffer(o.ARRAY_BUFFER,be);for(let Ge=0;Ge<ve.locationSize;Ge++)H(ve.location+Ge,V/ve.locationSize,Ce,C,De*ee,(je+V/ve.locationSize*Ge)*ee,Me)}else{if(le.isInstancedBufferAttribute){for(let de=0;de<ve.locationSize;de++)x(ve.location+de,le.meshPerAttribute);k.isInstancedMesh!==!0&&Se._maxInstanceCount===void 0&&(Se._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let de=0;de<ve.locationSize;de++)y(ve.location+de);o.bindBuffer(o.ARRAY_BUFFER,be);for(let de=0;de<ve.locationSize;de++)H(ve.location+de,V/ve.locationSize,Ce,C,V*ee,V/ve.locationSize*de*ee,Me)}}else if(F!==void 0){const C=F[$];if(C!==void 0)switch(C.length){case 2:o.vertexAttrib2fv(ve.location,C);break;case 3:o.vertexAttrib3fv(ve.location,C);break;case 4:o.vertexAttrib4fv(ve.location,C);break;default:o.vertexAttrib1fv(ve.location,C)}}}}z()}function I(){N();for(const k in s){const Q=s[k];for(const me in Q){const Se=Q[me];for(const J in Se){const P=Se[J];for(const F in P)v(P[F].object),delete P[F];delete Se[J]}}delete s[k]}}function L(k){if(s[k.id]===void 0)return;const Q=s[k.id];for(const me in Q){const Se=Q[me];for(const J in Se){const P=Se[J];for(const F in P)v(P[F].object),delete P[F];delete Se[J]}}delete s[k.id]}function O(k){for(const Q in s){const me=s[Q];for(const Se in me){const J=me[Se];if(J[k.id]===void 0)continue;const P=J[k.id];for(const F in P)v(P[F].object),delete P[F];delete J[k.id]}}}function b(k){for(const Q in s){const me=s[Q],Se=k.isInstancedMesh===!0?k.id:0,J=me[Se];if(J!==void 0){for(const P in J){const F=J[P];for(const $ in F)v(F[$].object),delete F[$];delete J[P]}delete me[Se],Object.keys(me).length===0&&delete s[Q]}}}function N(){Y(),h=!0,c!==l&&(c=l,d(c.object))}function Y(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:N,resetDefaultState:Y,dispose:I,releaseStatesOfGeometry:L,releaseStatesOfObject:b,releaseStatesOfProgram:O,initAttributes:w,enableAttribute:y,disableUnusedAttributes:z}}function iT(o,e,i){let s;function l(m){s=m}function c(m,d){o.drawArrays(s,m,d),i.update(d,s,1)}function h(m,d,v){v!==0&&(o.drawArraysInstanced(s,m,d,v),i.update(d,s,v))}function p(m,d,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,d,0,v);let g=0;for(let E=0;E<v;E++)g+=d[E];i.update(g,s,1)}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=p}function aT(o,e,i,s){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(O){return!(O!==Oi&&s.convert(O)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(O){const b=O===hi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==bi&&s.convert(O)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==Wi&&!b)}function m(O){if(O==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=i.precision!==void 0?i.precision:"highp";const v=m(d);v!==d&&(nt("WebGLRenderer:",d,"not supported, using",v,"instead."),d=v);const S=i.logarithmicDepthBuffer===!0,g=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control");i.reversedDepthBuffer===!0&&g===!1&&nt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const E=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),T=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=o.getParameter(o.MAX_TEXTURE_SIZE),y=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),x=o.getParameter(o.MAX_VERTEX_ATTRIBS),z=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),H=o.getParameter(o.MAX_VARYING_VECTORS),D=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),I=o.getParameter(o.MAX_SAMPLES),L=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:p,precision:d,logarithmicDepthBuffer:S,reversedDepthBuffer:g,maxTextures:E,maxVertexTextures:T,maxTextureSize:w,maxCubemapSize:y,maxAttributes:x,maxVertexUniforms:z,maxVaryings:H,maxFragmentUniforms:D,maxSamples:I,samples:L}}function sT(o){const e=this;let i=null,s=0,l=!1,c=!1;const h=new Us,p=new rt,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(S,g){const E=S.length!==0||g||s!==0||l;return l=g,s=S.length,E},this.beginShadows=function(){c=!0,v(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(S,g){i=v(S,g,0)},this.setState=function(S,g,E){const T=S.clippingPlanes,w=S.clipIntersection,y=S.clipShadows,x=o.get(S);if(!l||T===null||T.length===0||c&&!y)c?v(null):d();else{const z=c?0:s,H=z*4;let D=x.clippingState||null;m.value=D,D=v(T,g,H,E);for(let I=0;I!==H;++I)D[I]=i[I];x.clippingState=D,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=z}};function d(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function v(S,g,E,T){const w=S!==null?S.length:0;let y=null;if(w!==0){if(y=m.value,T!==!0||y===null){const x=E+w*4,z=g.matrixWorldInverse;p.getNormalMatrix(z),(y===null||y.length<x)&&(y=new Float32Array(x));for(let H=0,D=E;H!==w;++H,D+=4)h.copy(S[H]).applyMatrix4(z,p),h.normal.toArray(y,D),y[D+3]=h.constant}m.value=y,m.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,y}}const ss=4,T_=[.125,.215,.35,.446,.526,.582],Ns=20,rT=256,qo=new $d,A_=new vt;let Xh=null,Wh=0,qh=0,Yh=!1;const oT=new j;class R_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,s=.1,l=100,c={}){const{size:h=256,position:p=oT}=c;Xh=this._renderer.getRenderTarget(),Wh=this._renderer.getActiveCubeFace(),qh=this._renderer.getActiveMipmapLevel(),Yh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,s,l,m,p),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=D_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=w_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Xh,Wh,qh),this._renderer.xr.enabled=Yh,e.scissorTest=!1,Ur(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Is||e.mapping===Fr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Xh=this._renderer.getRenderTarget(),Wh=this._renderer.getActiveCubeFace(),qh=this._renderer.getActiveMipmapLevel(),Yh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:zn,minFilter:zn,generateMipmaps:!1,type:hi,format:Oi,colorSpace:Yc,depthBuffer:!1},l=C_(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=C_(e,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=lT(c)),this._blurMaterial=uT(c,e,i),this._ggxMaterial=cT(c,e,i)}return l}_compileMaterial(e){const i=new In(new $n,e);this._renderer.compile(i,qo)}_sceneToCubeUV(e,i,s,l,c){const m=new Ei(90,1,i,s),d=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],S=this._renderer,g=S.autoClear,E=S.toneMapping;S.getClearColor(A_),S.toneMapping=Zi,S.autoClear=!1,S.state.buffers.depth.getReversed()&&(S.setRenderTarget(l),S.clearDepth(),S.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new In(new Wr,new Sa({name:"PMREM.Background",side:Qn,depthWrite:!1,depthTest:!1})));const w=this._backgroundBox,y=w.material;let x=!1;const z=e.background;z?z.isColor&&(y.color.copy(z),e.background=null,x=!0):(y.color.copy(A_),x=!0);for(let H=0;H<6;H++){const D=H%3;D===0?(m.up.set(0,d[H],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+v[H],c.y,c.z)):D===1?(m.up.set(0,0,d[H]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+v[H],c.z)):(m.up.set(0,d[H],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+v[H]));const I=this._cubeSize;Ur(l,D*I,H>2?I:0,I,I),S.setRenderTarget(l),x&&S.render(w,m),S.render(e,m)}S.toneMapping=E,S.autoClear=g,e.background=z}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===Is||e.mapping===Fr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=D_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=w_());const c=l?this._cubemapMaterial:this._equirectMaterial,h=this._lodMeshes[0];h.material=c;const p=c.uniforms;p.envMap.value=e;const m=this._cubeSize;Ur(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(h,qo)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=s}_applyGGXFilter(e,i,s){const l=this._renderer,c=this._pingPongRenderTarget,h=this._ggxMaterial,p=this._lodMeshes[s];p.material=h;const m=h.uniforms,d=s/(this._lodMeshes.length-1),v=i/(this._lodMeshes.length-1),S=Math.sqrt(d*d-v*v),g=0+d*1.25,E=S*g,{_lodMax:T}=this,w=this._sizeLods[s],y=3*w*(s>T-ss?s-T+ss:0),x=4*(this._cubeSize-w);m.envMap.value=e.texture,m.roughness.value=E,m.mipInt.value=T-i,Ur(c,y,x,3*w,2*w),l.setRenderTarget(c),l.render(p,qo),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=T-s,Ur(e,y,x,3*w,2*w),l.setRenderTarget(e),l.render(p,qo)}_blur(e,i,s,l,c){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,s,l,"latitudinal",c),this._halfBlur(h,e,s,s,l,"longitudinal",c)}_halfBlur(e,i,s,l,c,h,p){const m=this._renderer,d=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&At("blur direction must be either latitudinal or longitudinal!");const v=3,S=this._lodMeshes[l];S.material=d;const g=d.uniforms,E=this._sizeLods[s]-1,T=isFinite(c)?Math.PI/(2*E):2*Math.PI/(2*Ns-1),w=c/T,y=isFinite(c)?1+Math.floor(v*w):Ns;y>Ns&&nt(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Ns}`);const x=[];let z=0;for(let O=0;O<Ns;++O){const b=O/w,N=Math.exp(-b*b/2);x.push(N),O===0?z+=N:O<y&&(z+=2*N)}for(let O=0;O<x.length;O++)x[O]=x[O]/z;g.envMap.value=e.texture,g.samples.value=y,g.weights.value=x,g.latitudinal.value=h==="latitudinal",p&&(g.poleAxis.value=p);const{_lodMax:H}=this;g.dTheta.value=T,g.mipInt.value=H-s;const D=this._sizeLods[l],I=3*D*(l>H-ss?l-H+ss:0),L=4*(this._cubeSize-D);Ur(i,I,L,3*D,2*D),m.setRenderTarget(i),m.render(S,qo)}}function lT(o){const e=[],i=[],s=[];let l=o;const c=o-ss+1+T_.length;for(let h=0;h<c;h++){const p=Math.pow(2,l);e.push(p);let m=1/p;h>o-ss?m=T_[h-o+ss-1]:h===0&&(m=0),i.push(m);const d=1/(p-2),v=-d,S=1+d,g=[v,v,S,v,S,S,v,v,S,S,v,S],E=6,T=6,w=3,y=2,x=1,z=new Float32Array(w*T*E),H=new Float32Array(y*T*E),D=new Float32Array(x*T*E);for(let L=0;L<E;L++){const O=L%3*2/3-1,b=L>2?0:-1,N=[O,b,0,O+2/3,b,0,O+2/3,b+1,0,O,b,0,O+2/3,b+1,0,O,b+1,0];z.set(N,w*T*L),H.set(g,y*T*L);const Y=[L,L,L,L,L,L];D.set(Y,x*T*L)}const I=new $n;I.setAttribute("position",new Pi(z,w)),I.setAttribute("uv",new Pi(H,y)),I.setAttribute("faceIndex",new Pi(D,x)),s.push(new In(I,null)),l>ss&&l--}return{lodMeshes:s,sizeLods:e,sigmas:i}}function C_(o,e,i){const s=new Jn(o,e,i);return s.texture.mapping=tu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Ur(o,e,i,s,l){o.viewport.set(e,i,s,l),o.scissor.set(e,i,s,l)}function cT(o,e,i){return new Bn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:rT,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:au(),fragmentShader:`

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
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function uT(o,e,i){const s=new Float32Array(Ns),l=new j(0,1,0);return new Bn({name:"SphericalGaussianBlur",defines:{n:Ns,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:au(),fragmentShader:`

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
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function w_(){return new Bn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:au(),fragmentShader:`

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
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function D_(){return new Bn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:au(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function au(){return`

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
	`}class Dv extends Jn{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new bv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Wr(5,5,5),c=new Bn({name:"CubemapFromEquirect",uniforms:Gr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Qn,blending:Yi});c.uniforms.tEquirect.value=i;const h=new In(l,c),p=i.minFilter;return i.minFilter===Os&&(i.minFilter=zn),new dy(1,10,this).update(e,h),i.minFilter=p,h.geometry.dispose(),h.material.dispose(),this}clear(e,i=!0,s=!0,l=!0){const c=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,s,l);e.setRenderTarget(c)}}function fT(o){let e=new WeakMap,i=new WeakMap,s=null;function l(g,E=!1){return g==null?null:E?h(g):c(g)}function c(g){if(g&&g.isTexture){const E=g.mapping;if(E===gh||E===_h)if(e.has(g)){const T=e.get(g).texture;return p(T,g.mapping)}else{const T=g.image;if(T&&T.height>0){const w=new Dv(T.height);return w.fromEquirectangularTexture(o,g),e.set(g,w),g.addEventListener("dispose",d),p(w.texture,g.mapping)}else return null}}return g}function h(g){if(g&&g.isTexture){const E=g.mapping,T=E===gh||E===_h,w=E===Is||E===Fr;if(T||w){let y=i.get(g);const x=y!==void 0?y.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==x)return s===null&&(s=new R_(o)),y=T?s.fromEquirectangular(g,y):s.fromCubemap(g,y),y.texture.pmremVersion=g.pmremVersion,i.set(g,y),y.texture;if(y!==void 0)return y.texture;{const z=g.image;return T&&z&&z.height>0||w&&z&&m(z)?(s===null&&(s=new R_(o)),y=T?s.fromEquirectangular(g):s.fromCubemap(g),y.texture.pmremVersion=g.pmremVersion,i.set(g,y),g.addEventListener("dispose",v),y.texture):null}}}return g}function p(g,E){return E===gh?g.mapping=Is:E===_h&&(g.mapping=Fr),g}function m(g){let E=0;const T=6;for(let w=0;w<T;w++)g[w]!==void 0&&E++;return E===T}function d(g){const E=g.target;E.removeEventListener("dispose",d);const T=e.get(E);T!==void 0&&(e.delete(E),T.dispose())}function v(g){const E=g.target;E.removeEventListener("dispose",v);const T=i.get(E);T!==void 0&&(i.delete(E),T.dispose())}function S(){e=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:S}}function hT(o){const e={};function i(s){if(e[s]!==void 0)return e[s];const l=o.getExtension(s);return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Ir("WebGLRenderer: "+s+" extension not supported."),l}}}function dT(o,e,i,s){const l={},c=new WeakMap;function h(S){const g=S.target;g.index!==null&&e.remove(g.index);for(const T in g.attributes)e.remove(g.attributes[T]);g.removeEventListener("dispose",h),delete l[g.id];const E=c.get(g);E&&(e.remove(E),c.delete(g)),s.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,i.memory.geometries--}function p(S,g){return l[g.id]===!0||(g.addEventListener("dispose",h),l[g.id]=!0,i.memory.geometries++),g}function m(S){const g=S.attributes;for(const E in g)e.update(g[E],o.ARRAY_BUFFER)}function d(S){const g=[],E=S.index,T=S.attributes.position;let w=0;if(T===void 0)return;if(E!==null){const z=E.array;w=E.version;for(let H=0,D=z.length;H<D;H+=3){const I=z[H+0],L=z[H+1],O=z[H+2];g.push(I,L,L,O,O,I)}}else{const z=T.array;w=T.version;for(let H=0,D=z.length/3-1;H<D;H+=3){const I=H+0,L=H+1,O=H+2;g.push(I,L,L,O,O,I)}}const y=new(T.count>=65535?Sv:xv)(g,1);y.version=w;const x=c.get(S);x&&e.remove(x),c.set(S,y)}function v(S){const g=c.get(S);if(g){const E=S.index;E!==null&&g.version<E.version&&d(S)}else d(S);return c.get(S)}return{get:p,update:m,getWireframeAttribute:v}}function pT(o,e,i){let s;function l(S){s=S}let c,h;function p(S){c=S.type,h=S.bytesPerElement}function m(S,g){o.drawElements(s,g,c,S*h),i.update(g,s,1)}function d(S,g,E){E!==0&&(o.drawElementsInstanced(s,g,c,S*h,E),i.update(g,s,E))}function v(S,g,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,g,0,c,S,0,E);let w=0;for(let y=0;y<E;y++)w+=g[y];i.update(w,s,1)}this.setMode=l,this.setIndex=p,this.render=m,this.renderInstances=d,this.renderMultiDraw=v}function mT(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,h,p){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=p*(c/3);break;case o.LINES:i.lines+=p*(c/2);break;case o.LINE_STRIP:i.lines+=p*(c-1);break;case o.LINE_LOOP:i.lines+=p*c;break;case o.POINTS:i.points+=p*c;break;default:At("WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function gT(o,e,i){const s=new WeakMap,l=new on;function c(h,p,m){const d=h.morphTargetInfluences,v=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,S=v!==void 0?v.length:0;let g=s.get(p);if(g===void 0||g.count!==S){let Y=function(){b.dispose(),s.delete(p),p.removeEventListener("dispose",Y)};var E=Y;g!==void 0&&g.texture.dispose();const T=p.morphAttributes.position!==void 0,w=p.morphAttributes.normal!==void 0,y=p.morphAttributes.color!==void 0,x=p.morphAttributes.position||[],z=p.morphAttributes.normal||[],H=p.morphAttributes.color||[];let D=0;T===!0&&(D=1),w===!0&&(D=2),y===!0&&(D=3);let I=p.attributes.position.count*D,L=1;I>e.maxTextureSize&&(L=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const O=new Float32Array(I*L*4*S),b=new gv(O,I,L,S);b.type=Wi,b.needsUpdate=!0;const N=D*4;for(let k=0;k<S;k++){const Q=x[k],me=z[k],Se=H[k],J=I*L*4*k;for(let P=0;P<Q.count;P++){const F=P*N;T===!0&&(l.fromBufferAttribute(Q,P),O[J+F+0]=l.x,O[J+F+1]=l.y,O[J+F+2]=l.z,O[J+F+3]=0),w===!0&&(l.fromBufferAttribute(me,P),O[J+F+4]=l.x,O[J+F+5]=l.y,O[J+F+6]=l.z,O[J+F+7]=0),y===!0&&(l.fromBufferAttribute(Se,P),O[J+F+8]=l.x,O[J+F+9]=l.y,O[J+F+10]=l.z,O[J+F+11]=Se.itemSize===4?l.w:1)}}g={count:S,texture:b,size:new ot(I,L)},s.set(p,g),p.addEventListener("dispose",Y)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let T=0;for(let y=0;y<d.length;y++)T+=d[y];const w=p.morphTargetsRelative?1:1-T;m.getUniforms().setValue(o,"morphTargetBaseInfluence",w),m.getUniforms().setValue(o,"morphTargetInfluences",d)}m.getUniforms().setValue(o,"morphTargetsTexture",g.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",g.size)}return{update:c}}function _T(o,e,i,s,l){let c=new WeakMap;function h(d){const v=l.render.frame,S=d.geometry,g=e.get(d,S);if(c.get(g)!==v&&(e.update(g),c.set(g,v)),d.isInstancedMesh&&(d.hasEventListener("dispose",m)===!1&&d.addEventListener("dispose",m),c.get(d)!==v&&(i.update(d.instanceMatrix,o.ARRAY_BUFFER),d.instanceColor!==null&&i.update(d.instanceColor,o.ARRAY_BUFFER),c.set(d,v))),d.isSkinnedMesh){const E=d.skeleton;c.get(E)!==v&&(E.update(),c.set(E,v))}return g}function p(){c=new WeakMap}function m(d){const v=d.target;v.removeEventListener("dispose",m),s.releaseStatesOfObject(v),i.remove(v.instanceMatrix),v.instanceColor!==null&&i.remove(v.instanceColor)}return{update:h,dispose:p}}const vT={[ev]:"LINEAR_TONE_MAPPING",[tv]:"REINHARD_TONE_MAPPING",[nv]:"CINEON_TONE_MAPPING",[iv]:"ACES_FILMIC_TONE_MAPPING",[sv]:"AGX_TONE_MAPPING",[rv]:"NEUTRAL_TONE_MAPPING",[av]:"CUSTOM_TONE_MAPPING"};function xT(o,e,i,s,l,c){const h=new Jn(e,i,{type:o,depthBuffer:l,stencilBuffer:c,samples:s?4:0,depthTexture:l?new Hr(e,i):void 0}),p=new Jn(e,i,{type:hi,depthBuffer:!1,stencilBuffer:!1}),m=new $n;m.setAttribute("position",new Sn([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new Sn([0,2,0,0,2,0],2));const d=new uy({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),v=new In(m,d),S=new $d(-1,1,1,-1,0,1);let g=null,E=null,T=!1,w,y=null,x=[],z=!1;this.setSize=function(H,D){h.setSize(H,D),p.setSize(H,D);for(let I=0;I<x.length;I++){const L=x[I];L.setSize&&L.setSize(H,D)}},this.setEffects=function(H){x=H,z=x.length>0&&x[0].isRenderPass===!0;const D=h.width,I=h.height;for(let L=0;L<x.length;L++){const O=x[L];O.setSize&&O.setSize(D,I)}},this.begin=function(H,D){if(T||H.toneMapping===Zi&&x.length===0)return!1;if(y=D,D!==null){const I=D.width,L=D.height;(h.width!==I||h.height!==L)&&this.setSize(I,L)}return z===!1&&H.setRenderTarget(h),w=H.toneMapping,H.toneMapping=Zi,!0},this.hasRenderPass=function(){return z},this.end=function(H,D){H.toneMapping=w,T=!0;let I=h,L=p;for(let O=0;O<x.length;O++){const b=x[O];if(b.enabled!==!1&&(b.render(H,L,I,D),b.needsSwap!==!1)){const N=I;I=L,L=N}}if(g!==H.outputColorSpace||E!==H.toneMapping){g=H.outputColorSpace,E=H.toneMapping,d.defines={},bt.getTransfer(g)===Gt&&(d.defines.SRGB_TRANSFER="");const O=vT[E];O&&(d.defines[O]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=I.texture,H.setRenderTarget(y),H.render(v,S),y=null,T=!1},this.isCompositing=function(){return T},this.dispose=function(){h.depthTexture&&h.depthTexture.dispose(),h.dispose(),p.dispose(),m.dispose(),d.dispose()}}const Uv=new Gn,Fd=new Hr(1,1),Lv=new gv,Nv=new HM,Ov=new bv,U_=[],L_=[],N_=new Float32Array(16),O_=new Float32Array(9),P_=new Float32Array(4);function qr(o,e,i){const s=o[0];if(s<=0||s>0)return o;const l=e*i;let c=U_[l];if(c===void 0&&(c=new Float32Array(l),U_[l]=c),e!==0){s.toArray(c,0);for(let h=1,p=0;h!==e;++h)p+=i,o[h].toArray(c,p)}return c}function Mn(o,e){if(o.length!==e.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==e[i])return!1;return!0}function yn(o,e){for(let i=0,s=e.length;i<s;i++)o[i]=e[i]}function su(o,e){let i=L_[e];i===void 0&&(i=new Int32Array(e),L_[e]=i);for(let s=0;s!==e;++s)i[s]=o.allocateTextureUnit();return i}function ST(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function MT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Mn(i,e))return;o.uniform2fv(this.addr,e),yn(i,e)}}function yT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(Mn(i,e))return;o.uniform3fv(this.addr,e),yn(i,e)}}function ET(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Mn(i,e))return;o.uniform4fv(this.addr,e),yn(i,e)}}function bT(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(Mn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),yn(i,e)}else{if(Mn(i,s))return;P_.set(s),o.uniformMatrix2fv(this.addr,!1,P_),yn(i,s)}}function TT(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(Mn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),yn(i,e)}else{if(Mn(i,s))return;O_.set(s),o.uniformMatrix3fv(this.addr,!1,O_),yn(i,s)}}function AT(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(Mn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),yn(i,e)}else{if(Mn(i,s))return;N_.set(s),o.uniformMatrix4fv(this.addr,!1,N_),yn(i,s)}}function RT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function CT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Mn(i,e))return;o.uniform2iv(this.addr,e),yn(i,e)}}function wT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Mn(i,e))return;o.uniform3iv(this.addr,e),yn(i,e)}}function DT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Mn(i,e))return;o.uniform4iv(this.addr,e),yn(i,e)}}function UT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function LT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Mn(i,e))return;o.uniform2uiv(this.addr,e),yn(i,e)}}function NT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Mn(i,e))return;o.uniform3uiv(this.addr,e),yn(i,e)}}function OT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Mn(i,e))return;o.uniform4uiv(this.addr,e),yn(i,e)}}function PT(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);let c;this.type===o.SAMPLER_2D_SHADOW?(Fd.compareFunction=i.isReversedDepthBuffer()?Qd:Kd,c=Fd):c=Uv,i.setTexture2D(e||c,l)}function IT(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||Nv,l)}function zT(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||Ov,l)}function BT(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||Lv,l)}function FT(o){switch(o){case 5126:return ST;case 35664:return MT;case 35665:return yT;case 35666:return ET;case 35674:return bT;case 35675:return TT;case 35676:return AT;case 5124:case 35670:return RT;case 35667:case 35671:return CT;case 35668:case 35672:return wT;case 35669:case 35673:return DT;case 5125:return UT;case 36294:return LT;case 36295:return NT;case 36296:return OT;case 35678:case 36198:case 36298:case 36306:case 35682:return PT;case 35679:case 36299:case 36307:return IT;case 35680:case 36300:case 36308:case 36293:return zT;case 36289:case 36303:case 36311:case 36292:return BT}}function HT(o,e){o.uniform1fv(this.addr,e)}function GT(o,e){const i=qr(e,this.size,2);o.uniform2fv(this.addr,i)}function VT(o,e){const i=qr(e,this.size,3);o.uniform3fv(this.addr,i)}function kT(o,e){const i=qr(e,this.size,4);o.uniform4fv(this.addr,i)}function XT(o,e){const i=qr(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function WT(o,e){const i=qr(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function qT(o,e){const i=qr(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function YT(o,e){o.uniform1iv(this.addr,e)}function ZT(o,e){o.uniform2iv(this.addr,e)}function KT(o,e){o.uniform3iv(this.addr,e)}function QT(o,e){o.uniform4iv(this.addr,e)}function JT(o,e){o.uniform1uiv(this.addr,e)}function jT(o,e){o.uniform2uiv(this.addr,e)}function $T(o,e){o.uniform3uiv(this.addr,e)}function e1(o,e){o.uniform4uiv(this.addr,e)}function t1(o,e,i){const s=this.cache,l=e.length,c=su(i,l);Mn(s,c)||(o.uniform1iv(this.addr,c),yn(s,c));let h;this.type===o.SAMPLER_2D_SHADOW?h=Fd:h=Uv;for(let p=0;p!==l;++p)i.setTexture2D(e[p]||h,c[p])}function n1(o,e,i){const s=this.cache,l=e.length,c=su(i,l);Mn(s,c)||(o.uniform1iv(this.addr,c),yn(s,c));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||Nv,c[h])}function i1(o,e,i){const s=this.cache,l=e.length,c=su(i,l);Mn(s,c)||(o.uniform1iv(this.addr,c),yn(s,c));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||Ov,c[h])}function a1(o,e,i){const s=this.cache,l=e.length,c=su(i,l);Mn(s,c)||(o.uniform1iv(this.addr,c),yn(s,c));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||Lv,c[h])}function s1(o){switch(o){case 5126:return HT;case 35664:return GT;case 35665:return VT;case 35666:return kT;case 35674:return XT;case 35675:return WT;case 35676:return qT;case 5124:case 35670:return YT;case 35667:case 35671:return ZT;case 35668:case 35672:return KT;case 35669:case 35673:return QT;case 5125:return JT;case 36294:return jT;case 36295:return $T;case 36296:return e1;case 35678:case 36198:case 36298:case 36306:case 35682:return t1;case 35679:case 36299:case 36307:return n1;case 35680:case 36300:case 36308:case 36293:return i1;case 36289:case 36303:case 36311:case 36292:return a1}}class r1{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=FT(i.type)}}class o1{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=s1(i.type)}}class l1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const p=l[c];p.setValue(e,i[p.id],s)}}}const Zh=/(\w+)(\])?(\[|\.)?/g;function I_(o,e){o.seq.push(e),o.map[e.id]=e}function c1(o,e,i){const s=o.name,l=s.length;for(Zh.lastIndex=0;;){const c=Zh.exec(s),h=Zh.lastIndex;let p=c[1];const m=c[2]==="]",d=c[3];if(m&&(p=p|0),d===void 0||d==="["&&h+2===l){I_(i,d===void 0?new r1(p,o,e):new o1(p,o,e));break}else{let S=i.map[p];S===void 0&&(S=new l1(p),I_(i,S)),i=S}}}class kc{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let h=0;h<s;++h){const p=e.getActiveUniform(i,h),m=e.getUniformLocation(i,p.name);c1(p,m,this)}const l=[],c=[];for(const h of this.seq)h.type===e.SAMPLER_2D_SHADOW||h.type===e.SAMPLER_CUBE_SHADOW||h.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(h):c.push(h);l.length>0&&(this.seq=l.concat(c))}setValue(e,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let c=0,h=i.length;c!==h;++c){const p=i[c],m=s[p.id];m.needsUpdate!==!1&&p.setValue(e,m.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,c=e.length;l!==c;++l){const h=e[l];h.id in i&&s.push(h)}return s}}function z_(o,e,i){const s=o.createShader(e);return o.shaderSource(s,i),o.compileShader(s),s}const u1=37297;let f1=0;function h1(o,e){const i=o.split(`
`),s=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let h=l;h<c;h++){const p=h+1;s.push(`${p===e?">":" "} ${p}: ${i[h]}`)}return s.join(`
`)}const B_=new rt;function d1(o){bt._getMatrix(B_,bt.workingColorSpace,o);const e=`mat3( ${B_.elements.map(i=>i.toFixed(4))} )`;switch(bt.getTransfer(o)){case Zc:return[e,"LinearTransferOETF"];case Gt:return[e,"sRGBTransferOETF"];default:return nt("WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function F_(o,e,i){const s=o.getShaderParameter(e,o.COMPILE_STATUS),c=(o.getShaderInfoLog(e)||"").trim();if(s&&c==="")return"";const h=/ERROR: 0:(\d+)/.exec(c);if(h){const p=parseInt(h[1]);return i.toUpperCase()+`

`+c+`

`+h1(o.getShaderSource(e),p)}else return c}function p1(o,e){const i=d1(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const m1={[ev]:"Linear",[tv]:"Reinhard",[nv]:"Cineon",[iv]:"ACESFilmic",[sv]:"AgX",[rv]:"Neutral",[av]:"Custom"};function g1(o,e){const i=m1[e];return i===void 0?(nt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const zc=new j;function _1(){bt.getLuminanceCoefficients(zc);const o=zc.x.toFixed(4),e=zc.y.toFixed(4),i=zc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function v1(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ko).join(`
`)}function x1(o){const e=[];for(const i in o){const s=o[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function S1(o,e){const i={},s=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=o.getActiveAttrib(e,l),h=c.name;let p=1;c.type===o.FLOAT_MAT2&&(p=2),c.type===o.FLOAT_MAT3&&(p=3),c.type===o.FLOAT_MAT4&&(p=4),i[h]={type:c.type,location:o.getAttribLocation(e,h),locationSize:p}}return i}function Ko(o){return o!==""}function H_(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function G_(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const M1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hd(o){return o.replace(M1,E1)}const y1=new Map;function E1(o,e){let i=dt[e];if(i===void 0){const s=y1.get(e);if(s!==void 0)i=dt[s],nt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Hd(i)}const b1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function V_(o){return o.replace(b1,T1)}function T1(o,e,i,s){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function k_(o){let e=`precision ${o.precision} float;
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
#define LOW_PRECISION`),e}const A1={[Bc]:"SHADOWMAP_TYPE_PCF",[Zo]:"SHADOWMAP_TYPE_VSM"};function R1(o){return A1[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const C1={[Is]:"ENVMAP_TYPE_CUBE",[Fr]:"ENVMAP_TYPE_CUBE",[tu]:"ENVMAP_TYPE_CUBE_UV"};function w1(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":C1[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const D1={[Fr]:"ENVMAP_MODE_REFRACTION"};function U1(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":D1[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const L1={[$_]:"ENVMAP_BLENDING_MULTIPLY",[xM]:"ENVMAP_BLENDING_MIX",[SM]:"ENVMAP_BLENDING_ADD"};function N1(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":L1[o.combine]||"ENVMAP_BLENDING_NONE"}function O1(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function P1(o,e,i,s){const l=o.getContext(),c=i.defines;let h=i.vertexShader,p=i.fragmentShader;const m=R1(i),d=w1(i),v=U1(i),S=N1(i),g=O1(i),E=v1(i),T=x1(c),w=l.createProgram();let y,x,z=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(Ko).join(`
`),y.length>0&&(y+=`
`),x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(Ko).join(`
`),x.length>0&&(x+=`
`)):(y=[k_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ko).join(`
`),x=[k_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+d:"",i.envMap?"#define "+v:"",i.envMap?"#define "+S:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Zi?"#define TONE_MAPPING":"",i.toneMapping!==Zi?dt.tonemapping_pars_fragment:"",i.toneMapping!==Zi?g1("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",dt.colorspace_pars_fragment,p1("linearToOutputTexel",i.outputColorSpace),_1(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Ko).join(`
`)),h=Hd(h),h=H_(h,i),h=G_(h,i),p=Hd(p),p=H_(p,i),p=G_(p,i),h=V_(h),p=V_(p),i.isRawShaderMaterial!==!0&&(z=`#version 300 es
`,y=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,x=["#define varying in",i.glslVersion===$0?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===$0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const H=z+y+h,D=z+x+p,I=z_(l,l.VERTEX_SHADER,H),L=z_(l,l.FRAGMENT_SHADER,D);l.attachShader(w,I),l.attachShader(w,L),i.index0AttributeName!==void 0?l.bindAttribLocation(w,0,i.index0AttributeName):i.hasPositionAttribute===!0&&l.bindAttribLocation(w,0,"position"),l.linkProgram(w);function O(k){if(o.debug.checkShaderErrors){const Q=l.getProgramInfoLog(w)||"",me=l.getShaderInfoLog(I)||"",Se=l.getShaderInfoLog(L)||"",J=Q.trim(),P=me.trim(),F=Se.trim();let $=!0,ve=!0;if(l.getProgramParameter(w,l.LINK_STATUS)===!1)if($=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,w,I,L);else{const le=F_(l,I,"vertex"),C=F_(l,L,"fragment");At("WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(w,l.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+J+`
`+le+`
`+C)}else J!==""?nt("WebGLProgram: Program Info Log:",J):(P===""||F==="")&&(ve=!1);ve&&(k.diagnostics={runnable:$,programLog:J,vertexShader:{log:P,prefix:y},fragmentShader:{log:F,prefix:x}})}l.deleteShader(I),l.deleteShader(L),b=new kc(l,w),N=S1(l,w)}let b;this.getUniforms=function(){return b===void 0&&O(this),b};let N;this.getAttributes=function(){return N===void 0&&O(this),N};let Y=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return Y===!1&&(Y=l.getProgramParameter(w,u1)),Y},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(w),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=f1++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=I,this.fragmentShader=L,this}let I1=0;class z1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,i,s){const l=this._getShaderCacheForMaterial(e);return l.has(i)===!1&&(l.add(i),i.usedTimes++),l.has(s)===!1&&(l.add(s),s.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new B1(e),i.set(e,s)),s}}class B1{constructor(e){this.id=I1++,this.code=e,this.usedTimes=0}}function F1(o){return o===zs||o===Wc||o===qc}function H1(o,e,i,s,l,c){const h=new _v,p=new z1,m=new Set,d=[],v=new Map,S=s.logarithmicDepthBuffer;let g=s.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(b){return m.add(b),b===0?"uv":`uv${b}`}function w(b,N,Y,k,Q,me){const Se=k.fog,J=Q.geometry,P=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?k.environment:null,F=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,$=e.get(b.envMap||P,F),ve=$&&$.mapping===tu?$.image.height:null,le=E[b.type];b.precision!==null&&(g=s.getMaxPrecision(b.precision),g!==b.precision&&nt("WebGLProgram.getParameters:",b.precision,"not supported, using",g,"instead."));const C=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,V=C!==void 0?C.length:0;let _e=0;J.morphAttributes.position!==void 0&&(_e=1),J.morphAttributes.normal!==void 0&&(_e=2),J.morphAttributes.color!==void 0&&(_e=3);let be,Ce,ee,Me;if(le){const Ve=Xi[le];be=Ve.vertexShader,Ce=Ve.fragmentShader}else{be=b.vertexShader,Ce=b.fragmentShader;const Ve=p.getVertexShaderStage(b),Vt=p.getFragmentShaderStage(b);p.update(b,Ve,Vt),ee=Ve.id,Me=Vt.id}const de=o.getRenderTarget(),De=o.state.buffers.depth.getReversed(),je=Q.isInstancedMesh===!0,Ge=Q.isBatchedMesh===!0,Ot=!!b.map,it=!!b.matcap,ut=!!$,ht=!!b.aoMap,at=!!b.lightMap,qt=!!b.bumpMap&&b.wireframe===!1,Kt=!!b.normalMap,$t=!!b.displacementMap,en=!!b.emissiveMap,Pt=!!b.metalnessMap,Qt=!!b.roughnessMap,W=b.anisotropy>0,Dt=b.clearcoat>0,Mt=b.dispersion>0,U=b.iridescence>0,M=b.sheen>0,K=b.transmission>0,se=W&&!!b.anisotropyMap,he=Dt&&!!b.clearcoatMap,Ae=Dt&&!!b.clearcoatNormalMap,Ue=Dt&&!!b.clearcoatRoughnessMap,ue=U&&!!b.iridescenceMap,fe=U&&!!b.iridescenceThicknessMap,we=M&&!!b.sheenColorMap,Fe=M&&!!b.sheenRoughnessMap,Oe=!!b.specularMap,Le=!!b.specularColorMap,Ke=!!b.specularIntensityMap,Qe=K&&!!b.transmissionMap,Ne=K&&!!b.thicknessMap,G=!!b.gradientMap,Te=!!b.alphaMap,pe=b.alphaTest>0,Re=!!b.alphaHash,Ie=!!b.extensions;let ye=Zi;b.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(ye=o.toneMapping);const ke={shaderID:le,shaderType:b.type,shaderName:b.name,vertexShader:be,fragmentShader:Ce,defines:b.defines,customVertexShaderID:ee,customFragmentShaderID:Me,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:g,batching:Ge,batchingColor:Ge&&Q._colorsTexture!==null,instancing:je,instancingColor:je&&Q.instanceColor!==null,instancingMorph:je&&Q.morphTexture!==null,outputColorSpace:de===null?o.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:bt.workingColorSpace,alphaToCoverage:!!b.alphaToCoverage,map:Ot,matcap:it,envMap:ut,envMapMode:ut&&$.mapping,envMapCubeUVHeight:ve,aoMap:ht,lightMap:at,bumpMap:qt,normalMap:Kt,displacementMap:$t,emissiveMap:en,normalMapObjectSpace:Kt&&b.normalMapType===EM,normalMapTangentSpace:Kt&&b.normalMapType===Q0,packedNormalMap:Kt&&b.normalMapType===Q0&&F1(b.normalMap.format),metalnessMap:Pt,roughnessMap:Qt,anisotropy:W,anisotropyMap:se,clearcoat:Dt,clearcoatMap:he,clearcoatNormalMap:Ae,clearcoatRoughnessMap:Ue,dispersion:Mt,iridescence:U,iridescenceMap:ue,iridescenceThicknessMap:fe,sheen:M,sheenColorMap:we,sheenRoughnessMap:Fe,specularMap:Oe,specularColorMap:Le,specularIntensityMap:Ke,transmission:K,transmissionMap:Qe,thicknessMap:Ne,gradientMap:G,opaque:b.transparent===!1&&b.blending===Or&&b.alphaToCoverage===!1,alphaMap:Te,alphaTest:pe,alphaHash:Re,combine:b.combine,mapUv:Ot&&T(b.map.channel),aoMapUv:ht&&T(b.aoMap.channel),lightMapUv:at&&T(b.lightMap.channel),bumpMapUv:qt&&T(b.bumpMap.channel),normalMapUv:Kt&&T(b.normalMap.channel),displacementMapUv:$t&&T(b.displacementMap.channel),emissiveMapUv:en&&T(b.emissiveMap.channel),metalnessMapUv:Pt&&T(b.metalnessMap.channel),roughnessMapUv:Qt&&T(b.roughnessMap.channel),anisotropyMapUv:se&&T(b.anisotropyMap.channel),clearcoatMapUv:he&&T(b.clearcoatMap.channel),clearcoatNormalMapUv:Ae&&T(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ue&&T(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ue&&T(b.iridescenceMap.channel),iridescenceThicknessMapUv:fe&&T(b.iridescenceThicknessMap.channel),sheenColorMapUv:we&&T(b.sheenColorMap.channel),sheenRoughnessMapUv:Fe&&T(b.sheenRoughnessMap.channel),specularMapUv:Oe&&T(b.specularMap.channel),specularColorMapUv:Le&&T(b.specularColorMap.channel),specularIntensityMapUv:Ke&&T(b.specularIntensityMap.channel),transmissionMapUv:Qe&&T(b.transmissionMap.channel),thicknessMapUv:Ne&&T(b.thicknessMap.channel),alphaMapUv:Te&&T(b.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(Kt||W),vertexNormals:!!J.attributes.normal,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:Q.isPoints===!0&&!!J.attributes.uv&&(Ot||Te),fog:!!Se,useFog:b.fog===!0,fogExp2:!!Se&&Se.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||J.attributes.normal===void 0&&Kt===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:S,reversedDepthBuffer:De,skinning:Q.isSkinnedMesh===!0,hasPositionAttribute:J.attributes.position!==void 0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:V,morphTextureStride:_e,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numLightProbeGrids:me.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:b.dithering,shadowMapEnabled:o.shadowMap.enabled&&Y.length>0,shadowMapType:o.shadowMap.type,toneMapping:ye,decodeVideoTexture:Ot&&b.map.isVideoTexture===!0&&bt.getTransfer(b.map.colorSpace)===Gt,decodeVideoTextureEmissive:en&&b.emissiveMap.isVideoTexture===!0&&bt.getTransfer(b.emissiveMap.colorSpace)===Gt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Ma,flipSided:b.side===Qn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Ie&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ie&&b.extensions.multiDraw===!0||Ge)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return ke.vertexUv1s=m.has(1),ke.vertexUv2s=m.has(2),ke.vertexUv3s=m.has(3),m.clear(),ke}function y(b){const N=[];if(b.shaderID?N.push(b.shaderID):(N.push(b.customVertexShaderID),N.push(b.customFragmentShaderID)),b.defines!==void 0)for(const Y in b.defines)N.push(Y),N.push(b.defines[Y]);return b.isRawShaderMaterial===!1&&(x(N,b),z(N,b),N.push(o.outputColorSpace)),N.push(b.customProgramCacheKey),N.join()}function x(b,N){b.push(N.precision),b.push(N.outputColorSpace),b.push(N.envMapMode),b.push(N.envMapCubeUVHeight),b.push(N.mapUv),b.push(N.alphaMapUv),b.push(N.lightMapUv),b.push(N.aoMapUv),b.push(N.bumpMapUv),b.push(N.normalMapUv),b.push(N.displacementMapUv),b.push(N.emissiveMapUv),b.push(N.metalnessMapUv),b.push(N.roughnessMapUv),b.push(N.anisotropyMapUv),b.push(N.clearcoatMapUv),b.push(N.clearcoatNormalMapUv),b.push(N.clearcoatRoughnessMapUv),b.push(N.iridescenceMapUv),b.push(N.iridescenceThicknessMapUv),b.push(N.sheenColorMapUv),b.push(N.sheenRoughnessMapUv),b.push(N.specularMapUv),b.push(N.specularColorMapUv),b.push(N.specularIntensityMapUv),b.push(N.transmissionMapUv),b.push(N.thicknessMapUv),b.push(N.combine),b.push(N.fogExp2),b.push(N.sizeAttenuation),b.push(N.morphTargetsCount),b.push(N.morphAttributeCount),b.push(N.numDirLights),b.push(N.numPointLights),b.push(N.numSpotLights),b.push(N.numSpotLightMaps),b.push(N.numHemiLights),b.push(N.numRectAreaLights),b.push(N.numDirLightShadows),b.push(N.numPointLightShadows),b.push(N.numSpotLightShadows),b.push(N.numSpotLightShadowsWithMaps),b.push(N.numLightProbes),b.push(N.shadowMapType),b.push(N.toneMapping),b.push(N.numClippingPlanes),b.push(N.numClipIntersection),b.push(N.depthPacking)}function z(b,N){h.disableAll(),N.instancing&&h.enable(0),N.instancingColor&&h.enable(1),N.instancingMorph&&h.enable(2),N.matcap&&h.enable(3),N.envMap&&h.enable(4),N.normalMapObjectSpace&&h.enable(5),N.normalMapTangentSpace&&h.enable(6),N.clearcoat&&h.enable(7),N.iridescence&&h.enable(8),N.alphaTest&&h.enable(9),N.vertexColors&&h.enable(10),N.vertexAlphas&&h.enable(11),N.vertexUv1s&&h.enable(12),N.vertexUv2s&&h.enable(13),N.vertexUv3s&&h.enable(14),N.vertexTangents&&h.enable(15),N.anisotropy&&h.enable(16),N.alphaHash&&h.enable(17),N.batching&&h.enable(18),N.dispersion&&h.enable(19),N.batchingColor&&h.enable(20),N.gradientMap&&h.enable(21),N.packedNormalMap&&h.enable(22),N.vertexNormals&&h.enable(23),b.push(h.mask),h.disableAll(),N.fog&&h.enable(0),N.useFog&&h.enable(1),N.flatShading&&h.enable(2),N.logarithmicDepthBuffer&&h.enable(3),N.reversedDepthBuffer&&h.enable(4),N.skinning&&h.enable(5),N.morphTargets&&h.enable(6),N.morphNormals&&h.enable(7),N.morphColors&&h.enable(8),N.premultipliedAlpha&&h.enable(9),N.shadowMapEnabled&&h.enable(10),N.doubleSided&&h.enable(11),N.flipSided&&h.enable(12),N.useDepthPacking&&h.enable(13),N.dithering&&h.enable(14),N.transmission&&h.enable(15),N.sheen&&h.enable(16),N.opaque&&h.enable(17),N.pointsUvs&&h.enable(18),N.decodeVideoTexture&&h.enable(19),N.decodeVideoTextureEmissive&&h.enable(20),N.alphaToCoverage&&h.enable(21),N.numLightProbeGrids>0&&h.enable(22),N.hasPositionAttribute&&h.enable(23),b.push(h.mask)}function H(b){const N=E[b.type];let Y;if(N){const k=Xi[N];Y=$c.clone(k.uniforms)}else Y=b.uniforms;return Y}function D(b,N){let Y=v.get(N);return Y!==void 0?++Y.usedTimes:(Y=new P1(o,N,b,l),d.push(Y),v.set(N,Y)),Y}function I(b){if(--b.usedTimes===0){const N=d.indexOf(b);d[N]=d[d.length-1],d.pop(),v.delete(b.cacheKey),b.destroy()}}function L(b){p.remove(b)}function O(){p.dispose()}return{getParameters:w,getProgramCacheKey:y,getUniforms:H,acquireProgram:D,releaseProgram:I,releaseShaderCache:L,programs:d,dispose:O}}function G1(){let o=new WeakMap;function e(h){return o.has(h)}function i(h){let p=o.get(h);return p===void 0&&(p={},o.set(h,p)),p}function s(h){o.delete(h)}function l(h,p,m){o.get(h)[p]=m}function c(){o=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:c}}function V1(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.materialVariant!==e.materialVariant?o.materialVariant-e.materialVariant:o.z!==e.z?o.z-e.z:o.id-e.id}function X_(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function W_(){const o=[];let e=0;const i=[],s=[],l=[];function c(){e=0,i.length=0,s.length=0,l.length=0}function h(g){let E=0;return g.isInstancedMesh&&(E+=2),g.isSkinnedMesh&&(E+=1),E}function p(g,E,T,w,y,x){let z=o[e];return z===void 0?(z={id:g.id,object:g,geometry:E,material:T,materialVariant:h(g),groupOrder:w,renderOrder:g.renderOrder,z:y,group:x},o[e]=z):(z.id=g.id,z.object=g,z.geometry=E,z.material=T,z.materialVariant=h(g),z.groupOrder=w,z.renderOrder=g.renderOrder,z.z=y,z.group=x),e++,z}function m(g,E,T,w,y,x){const z=p(g,E,T,w,y,x);T.transmission>0?s.push(z):T.transparent===!0?l.push(z):i.push(z)}function d(g,E,T,w,y,x){const z=p(g,E,T,w,y,x);T.transmission>0?s.unshift(z):T.transparent===!0?l.unshift(z):i.unshift(z)}function v(g,E,T){i.length>1&&i.sort(g||V1),s.length>1&&s.sort(E||X_),l.length>1&&l.sort(E||X_),T&&(i.reverse(),s.reverse(),l.reverse())}function S(){for(let g=e,E=o.length;g<E;g++){const T=o[g];if(T.id===null)break;T.id=null,T.object=null,T.geometry=null,T.material=null,T.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:m,unshift:d,finish:S,sort:v}}function k1(){let o=new WeakMap;function e(s,l){const c=o.get(s);let h;return c===void 0?(h=new W_,o.set(s,[h])):l>=c.length?(h=new W_,c.push(h)):h=c[l],h}function i(){o=new WeakMap}return{get:e,dispose:i}}function X1(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new j,color:new vt};break;case"SpotLight":i={position:new j,direction:new j,color:new vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new j,color:new vt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new j,skyColor:new vt,groundColor:new vt};break;case"RectAreaLight":i={color:new vt,position:new j,halfWidth:new j,halfHeight:new j};break}return o[e.id]=i,i}}}function W1(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let q1=0;function Y1(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function Z1(o){const e=new X1,i=W1(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)s.probe.push(new j);const l=new j,c=new un,h=new un;function p(d){let v=0,S=0,g=0;for(let N=0;N<9;N++)s.probe[N].set(0,0,0);let E=0,T=0,w=0,y=0,x=0,z=0,H=0,D=0,I=0,L=0,O=0;d.sort(Y1);for(let N=0,Y=d.length;N<Y;N++){const k=d[N],Q=k.color,me=k.intensity,Se=k.distance;let J=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===zs?J=k.shadow.map.texture:J=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)v+=Q.r*me,S+=Q.g*me,g+=Q.b*me;else if(k.isLightProbe){for(let P=0;P<9;P++)s.probe[P].addScaledVector(k.sh.coefficients[P],me);O++}else if(k.isDirectionalLight){const P=e.get(k);if(P.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const F=k.shadow,$=i.get(k);$.shadowIntensity=F.intensity,$.shadowBias=F.bias,$.shadowNormalBias=F.normalBias,$.shadowRadius=F.radius,$.shadowMapSize=F.mapSize,s.directionalShadow[E]=$,s.directionalShadowMap[E]=J,s.directionalShadowMatrix[E]=k.shadow.matrix,z++}s.directional[E]=P,E++}else if(k.isSpotLight){const P=e.get(k);P.position.setFromMatrixPosition(k.matrixWorld),P.color.copy(Q).multiplyScalar(me),P.distance=Se,P.coneCos=Math.cos(k.angle),P.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),P.decay=k.decay,s.spot[w]=P;const F=k.shadow;if(k.map&&(s.spotLightMap[I]=k.map,I++,F.updateMatrices(k),k.castShadow&&L++),s.spotLightMatrix[w]=F.matrix,k.castShadow){const $=i.get(k);$.shadowIntensity=F.intensity,$.shadowBias=F.bias,$.shadowNormalBias=F.normalBias,$.shadowRadius=F.radius,$.shadowMapSize=F.mapSize,s.spotShadow[w]=$,s.spotShadowMap[w]=J,D++}w++}else if(k.isRectAreaLight){const P=e.get(k);P.color.copy(Q).multiplyScalar(me),P.halfWidth.set(k.width*.5,0,0),P.halfHeight.set(0,k.height*.5,0),s.rectArea[y]=P,y++}else if(k.isPointLight){const P=e.get(k);if(P.color.copy(k.color).multiplyScalar(k.intensity),P.distance=k.distance,P.decay=k.decay,k.castShadow){const F=k.shadow,$=i.get(k);$.shadowIntensity=F.intensity,$.shadowBias=F.bias,$.shadowNormalBias=F.normalBias,$.shadowRadius=F.radius,$.shadowMapSize=F.mapSize,$.shadowCameraNear=F.camera.near,$.shadowCameraFar=F.camera.far,s.pointShadow[T]=$,s.pointShadowMap[T]=J,s.pointShadowMatrix[T]=k.shadow.matrix,H++}s.point[T]=P,T++}else if(k.isHemisphereLight){const P=e.get(k);P.skyColor.copy(k.color).multiplyScalar(me),P.groundColor.copy(k.groundColor).multiplyScalar(me),s.hemi[x]=P,x++}}y>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Be.LTC_FLOAT_1,s.rectAreaLTC2=Be.LTC_FLOAT_2):(s.rectAreaLTC1=Be.LTC_HALF_1,s.rectAreaLTC2=Be.LTC_HALF_2)),s.ambient[0]=v,s.ambient[1]=S,s.ambient[2]=g;const b=s.hash;(b.directionalLength!==E||b.pointLength!==T||b.spotLength!==w||b.rectAreaLength!==y||b.hemiLength!==x||b.numDirectionalShadows!==z||b.numPointShadows!==H||b.numSpotShadows!==D||b.numSpotMaps!==I||b.numLightProbes!==O)&&(s.directional.length=E,s.spot.length=w,s.rectArea.length=y,s.point.length=T,s.hemi.length=x,s.directionalShadow.length=z,s.directionalShadowMap.length=z,s.pointShadow.length=H,s.pointShadowMap.length=H,s.spotShadow.length=D,s.spotShadowMap.length=D,s.directionalShadowMatrix.length=z,s.pointShadowMatrix.length=H,s.spotLightMatrix.length=D+I-L,s.spotLightMap.length=I,s.numSpotLightShadowsWithMaps=L,s.numLightProbes=O,b.directionalLength=E,b.pointLength=T,b.spotLength=w,b.rectAreaLength=y,b.hemiLength=x,b.numDirectionalShadows=z,b.numPointShadows=H,b.numSpotShadows=D,b.numSpotMaps=I,b.numLightProbes=O,s.version=q1++)}function m(d,v){let S=0,g=0,E=0,T=0,w=0;const y=v.matrixWorldInverse;for(let x=0,z=d.length;x<z;x++){const H=d[x];if(H.isDirectionalLight){const D=s.directional[S];D.direction.setFromMatrixPosition(H.matrixWorld),l.setFromMatrixPosition(H.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(y),S++}else if(H.isSpotLight){const D=s.spot[E];D.position.setFromMatrixPosition(H.matrixWorld),D.position.applyMatrix4(y),D.direction.setFromMatrixPosition(H.matrixWorld),l.setFromMatrixPosition(H.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(y),E++}else if(H.isRectAreaLight){const D=s.rectArea[T];D.position.setFromMatrixPosition(H.matrixWorld),D.position.applyMatrix4(y),h.identity(),c.copy(H.matrixWorld),c.premultiply(y),h.extractRotation(c),D.halfWidth.set(H.width*.5,0,0),D.halfHeight.set(0,H.height*.5,0),D.halfWidth.applyMatrix4(h),D.halfHeight.applyMatrix4(h),T++}else if(H.isPointLight){const D=s.point[g];D.position.setFromMatrixPosition(H.matrixWorld),D.position.applyMatrix4(y),g++}else if(H.isHemisphereLight){const D=s.hemi[w];D.direction.setFromMatrixPosition(H.matrixWorld),D.direction.transformDirection(y),w++}}}return{setup:p,setupView:m,state:s}}function q_(o){const e=new Z1(o),i=[],s=[],l=[];function c(g){S.camera=g,i.length=0,s.length=0,l.length=0}function h(g){i.push(g)}function p(g){s.push(g)}function m(g){l.push(g)}function d(){e.setup(i)}function v(g){e.setupView(i,g)}const S={lightsArray:i,shadowsArray:s,lightProbeGridArray:l,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:S,setupLights:d,setupLightsView:v,pushLight:h,pushShadow:p,pushLightProbeGrid:m}}function K1(o){let e=new WeakMap;function i(l,c=0){const h=e.get(l);let p;return h===void 0?(p=new q_(o),e.set(l,[p])):c>=h.length?(p=new q_(o),h.push(p)):p=h[c],p}function s(){e=new WeakMap}return{get:i,dispose:s}}const Q1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,J1=`uniform sampler2D shadow_pass;
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
}`,j1=[new j(1,0,0),new j(-1,0,0),new j(0,1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1)],$1=[new j(0,-1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1),new j(0,-1,0),new j(0,-1,0)],Y_=new un,Yo=new j,Kh=new j;function eA(o,e,i){let s=new yv;const l=new ot,c=new ot,h=new on,p=new fy,m=new hy,d={},v=i.maxTextureSize,S={[rs]:Qn,[Qn]:rs,[Ma]:Ma},g=new Bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ot},radius:{value:4}},vertexShader:Q1,fragmentShader:J1}),E=g.clone();E.defines.HORIZONTAL_PASS=1;const T=new $n;T.setAttribute("position",new Pi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new In(T,g),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bc;let x=this.type;this.render=function(L,O,b){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||L.length===0)return;this.type===eM&&(nt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Bc);const N=o.getRenderTarget(),Y=o.getActiveCubeFace(),k=o.getActiveMipmapLevel(),Q=o.state;Q.setBlending(Yi),Q.buffers.depth.getReversed()===!0?Q.buffers.color.setClear(0,0,0,0):Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);const me=x!==this.type;me&&O.traverse(function(Se){Se.material&&(Array.isArray(Se.material)?Se.material.forEach(J=>J.needsUpdate=!0):Se.material.needsUpdate=!0)});for(let Se=0,J=L.length;Se<J;Se++){const P=L[Se],F=P.shadow;if(F===void 0){nt("WebGLShadowMap:",P,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;l.copy(F.mapSize);const $=F.getFrameExtents();l.multiply($),c.copy(F.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(c.x=Math.floor(v/$.x),l.x=c.x*$.x,F.mapSize.x=c.x),l.y>v&&(c.y=Math.floor(v/$.y),l.y=c.y*$.y,F.mapSize.y=c.y));const ve=o.state.buffers.depth.getReversed();if(F.camera._reversedDepth=ve,F.map===null||me===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===Zo){if(P.isPointLight){nt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new Jn(l.x,l.y,{format:zs,type:hi,minFilter:zn,magFilter:zn,generateMipmaps:!1}),F.map.texture.name=P.name+".shadowMap",F.map.depthTexture=new Hr(l.x,l.y,Wi),F.map.depthTexture.name=P.name+".shadowMapDepth",F.map.depthTexture.format=ba,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Dn,F.map.depthTexture.magFilter=Dn}else P.isPointLight?(F.map=new Dv(l.x),F.map.depthTexture=new ry(l.x,Ki)):(F.map=new Jn(l.x,l.y),F.map.depthTexture=new Hr(l.x,l.y,Ki)),F.map.depthTexture.name=P.name+".shadowMap",F.map.depthTexture.format=ba,this.type===Bc?(F.map.depthTexture.compareFunction=ve?Qd:Kd,F.map.depthTexture.minFilter=zn,F.map.depthTexture.magFilter=zn):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Dn,F.map.depthTexture.magFilter=Dn);F.camera.updateProjectionMatrix()}const le=F.map.isWebGLCubeRenderTarget?6:1;for(let C=0;C<le;C++){if(F.map.isWebGLCubeRenderTarget)o.setRenderTarget(F.map,C),o.clear();else{C===0&&(o.setRenderTarget(F.map),o.clear());const V=F.getViewport(C);h.set(c.x*V.x,c.y*V.y,c.x*V.z,c.y*V.w),Q.viewport(h)}if(P.isPointLight){const V=F.camera,_e=F.matrix,be=P.distance||V.far;be!==V.far&&(V.far=be,V.updateProjectionMatrix()),Yo.setFromMatrixPosition(P.matrixWorld),V.position.copy(Yo),Kh.copy(V.position),Kh.add(j1[C]),V.up.copy($1[C]),V.lookAt(Kh),V.updateMatrixWorld(),_e.makeTranslation(-Yo.x,-Yo.y,-Yo.z),Y_.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),F._frustum.setFromProjectionMatrix(Y_,V.coordinateSystem,V.reversedDepth)}else F.updateMatrices(P);s=F.getFrustum(),D(O,b,F.camera,P,this.type)}F.isPointLightShadow!==!0&&this.type===Zo&&z(F,b),F.needsUpdate=!1}x=this.type,y.needsUpdate=!1,o.setRenderTarget(N,Y,k)};function z(L,O){const b=e.update(w);g.defines.VSM_SAMPLES!==L.blurSamples&&(g.defines.VSM_SAMPLES=L.blurSamples,E.defines.VSM_SAMPLES=L.blurSamples,g.needsUpdate=!0,E.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new Jn(l.x,l.y,{format:zs,type:hi})),g.uniforms.shadow_pass.value=L.map.depthTexture,g.uniforms.resolution.value=L.mapSize,g.uniforms.radius.value=L.radius,o.setRenderTarget(L.mapPass),o.clear(),o.renderBufferDirect(O,null,b,g,w,null),E.uniforms.shadow_pass.value=L.mapPass.texture,E.uniforms.resolution.value=L.mapSize,E.uniforms.radius.value=L.radius,o.setRenderTarget(L.map),o.clear(),o.renderBufferDirect(O,null,b,E,w,null)}function H(L,O,b,N){let Y=null;const k=b.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(k!==void 0)Y=k;else if(Y=b.isPointLight===!0?m:p,o.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const Q=Y.uuid,me=O.uuid;let Se=d[Q];Se===void 0&&(Se={},d[Q]=Se);let J=Se[me];J===void 0&&(J=Y.clone(),Se[me]=J,O.addEventListener("dispose",I)),Y=J}if(Y.visible=O.visible,Y.wireframe=O.wireframe,N===Zo?Y.side=O.shadowSide!==null?O.shadowSide:O.side:Y.side=O.shadowSide!==null?O.shadowSide:S[O.side],Y.alphaMap=O.alphaMap,Y.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,Y.map=O.map,Y.clipShadows=O.clipShadows,Y.clippingPlanes=O.clippingPlanes,Y.clipIntersection=O.clipIntersection,Y.displacementMap=O.displacementMap,Y.displacementScale=O.displacementScale,Y.displacementBias=O.displacementBias,Y.wireframeLinewidth=O.wireframeLinewidth,Y.linewidth=O.linewidth,b.isPointLight===!0&&Y.isMeshDistanceMaterial===!0){const Q=o.properties.get(Y);Q.light=b}return Y}function D(L,O,b,N,Y){if(L.visible===!1)return;if(L.layers.test(O.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&Y===Zo)&&(!L.frustumCulled||s.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,L.matrixWorld);const me=e.update(L),Se=L.material;if(Array.isArray(Se)){const J=me.groups;for(let P=0,F=J.length;P<F;P++){const $=J[P],ve=Se[$.materialIndex];if(ve&&ve.visible){const le=H(L,ve,N,Y);L.onBeforeShadow(o,L,O,b,me,le,$),o.renderBufferDirect(b,null,me,le,L,$),L.onAfterShadow(o,L,O,b,me,le,$)}}}else if(Se.visible){const J=H(L,Se,N,Y);L.onBeforeShadow(o,L,O,b,me,J,null),o.renderBufferDirect(b,null,me,J,L,null),L.onAfterShadow(o,L,O,b,me,J,null)}}const Q=L.children;for(let me=0,Se=Q.length;me<Se;me++)D(Q[me],O,b,N,Y)}function I(L){L.target.removeEventListener("dispose",I);for(const b in d){const N=d[b],Y=L.target.uuid;Y in N&&(N[Y].dispose(),delete N[Y])}}}function tA(o,e){function i(){let G=!1;const Te=new on;let pe=null;const Re=new on(0,0,0,0);return{setMask:function(Ie){pe!==Ie&&!G&&(o.colorMask(Ie,Ie,Ie,Ie),pe=Ie)},setLocked:function(Ie){G=Ie},setClear:function(Ie,ye,ke,Ve,Vt){Vt===!0&&(Ie*=Ve,ye*=Ve,ke*=Ve),Te.set(Ie,ye,ke,Ve),Re.equals(Te)===!1&&(o.clearColor(Ie,ye,ke,Ve),Re.copy(Te))},reset:function(){G=!1,pe=null,Re.set(-1,0,0,0)}}}function s(){let G=!1,Te=!1,pe=null,Re=null,Ie=null;return{setReversed:function(ye){if(Te!==ye){const ke=e.get("EXT_clip_control");ye?ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.ZERO_TO_ONE_EXT):ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.NEGATIVE_ONE_TO_ONE_EXT),Te=ye;const Ve=Ie;Ie=null,this.setClear(Ve)}},getReversed:function(){return Te},setTest:function(ye){ye?de(o.DEPTH_TEST):De(o.DEPTH_TEST)},setMask:function(ye){pe!==ye&&!G&&(o.depthMask(ye),pe=ye)},setFunc:function(ye){if(Te&&(ye=NM[ye]),Re!==ye){switch(ye){case $h:o.depthFunc(o.NEVER);break;case ed:o.depthFunc(o.ALWAYS);break;case td:o.depthFunc(o.LESS);break;case Br:o.depthFunc(o.LEQUAL);break;case nd:o.depthFunc(o.EQUAL);break;case id:o.depthFunc(o.GEQUAL);break;case ad:o.depthFunc(o.GREATER);break;case sd:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Re=ye}},setLocked:function(ye){G=ye},setClear:function(ye){Ie!==ye&&(Ie=ye,Te&&(ye=1-ye),o.clearDepth(ye))},reset:function(){G=!1,pe=null,Re=null,Ie=null,Te=!1}}}function l(){let G=!1,Te=null,pe=null,Re=null,Ie=null,ye=null,ke=null,Ve=null,Vt=null;return{setTest:function(Ut){G||(Ut?de(o.STENCIL_TEST):De(o.STENCIL_TEST))},setMask:function(Ut){Te!==Ut&&!G&&(o.stencilMask(Ut),Te=Ut)},setFunc:function(Ut,Un,ei){(pe!==Ut||Re!==Un||Ie!==ei)&&(o.stencilFunc(Ut,Un,ei),pe=Ut,Re=Un,Ie=ei)},setOp:function(Ut,Un,ei){(ye!==Ut||ke!==Un||Ve!==ei)&&(o.stencilOp(Ut,Un,ei),ye=Ut,ke=Un,Ve=ei)},setLocked:function(Ut){G=Ut},setClear:function(Ut){Vt!==Ut&&(o.clearStencil(Ut),Vt=Ut)},reset:function(){G=!1,Te=null,pe=null,Re=null,Ie=null,ye=null,ke=null,Ve=null,Vt=null}}}const c=new i,h=new s,p=new l,m=new WeakMap,d=new WeakMap;let v={},S={},g={},E=new WeakMap,T=[],w=null,y=!1,x=null,z=null,H=null,D=null,I=null,L=null,O=null,b=new vt(0,0,0),N=0,Y=!1,k=null,Q=null,me=null,Se=null,J=null;const P=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,$=0;const ve=o.getParameter(o.VERSION);ve.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(ve)[1]),F=$>=1):ve.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(ve)[1]),F=$>=2);let le=null,C={};const V=o.getParameter(o.SCISSOR_BOX),_e=o.getParameter(o.VIEWPORT),be=new on().fromArray(V),Ce=new on().fromArray(_e);function ee(G,Te,pe,Re){const Ie=new Uint8Array(4),ye=o.createTexture();o.bindTexture(G,ye),o.texParameteri(G,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(G,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let ke=0;ke<pe;ke++)G===o.TEXTURE_3D||G===o.TEXTURE_2D_ARRAY?o.texImage3D(Te,0,o.RGBA,1,1,Re,0,o.RGBA,o.UNSIGNED_BYTE,Ie):o.texImage2D(Te+ke,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Ie);return ye}const Me={};Me[o.TEXTURE_2D]=ee(o.TEXTURE_2D,o.TEXTURE_2D,1),Me[o.TEXTURE_CUBE_MAP]=ee(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),Me[o.TEXTURE_2D_ARRAY]=ee(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),Me[o.TEXTURE_3D]=ee(o.TEXTURE_3D,o.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),p.setClear(0),de(o.DEPTH_TEST),h.setFunc(Br),qt(!1),Kt(Y0),de(o.CULL_FACE),ht(Yi);function de(G){v[G]!==!0&&(o.enable(G),v[G]=!0)}function De(G){v[G]!==!1&&(o.disable(G),v[G]=!1)}function je(G,Te){return g[G]!==Te?(o.bindFramebuffer(G,Te),g[G]=Te,G===o.DRAW_FRAMEBUFFER&&(g[o.FRAMEBUFFER]=Te),G===o.FRAMEBUFFER&&(g[o.DRAW_FRAMEBUFFER]=Te),!0):!1}function Ge(G,Te){let pe=T,Re=!1;if(G){pe=E.get(Te),pe===void 0&&(pe=[],E.set(Te,pe));const Ie=G.textures;if(pe.length!==Ie.length||pe[0]!==o.COLOR_ATTACHMENT0){for(let ye=0,ke=Ie.length;ye<ke;ye++)pe[ye]=o.COLOR_ATTACHMENT0+ye;pe.length=Ie.length,Re=!0}}else pe[0]!==o.BACK&&(pe[0]=o.BACK,Re=!0);Re&&o.drawBuffers(pe)}function Ot(G){return w!==G?(o.useProgram(G),w=G,!0):!1}const it={[Ls]:o.FUNC_ADD,[nM]:o.FUNC_SUBTRACT,[iM]:o.FUNC_REVERSE_SUBTRACT};it[aM]=o.MIN,it[sM]=o.MAX;const ut={[rM]:o.ZERO,[oM]:o.ONE,[lM]:o.SRC_COLOR,[Jh]:o.SRC_ALPHA,[pM]:o.SRC_ALPHA_SATURATE,[hM]:o.DST_COLOR,[uM]:o.DST_ALPHA,[cM]:o.ONE_MINUS_SRC_COLOR,[jh]:o.ONE_MINUS_SRC_ALPHA,[dM]:o.ONE_MINUS_DST_COLOR,[fM]:o.ONE_MINUS_DST_ALPHA,[mM]:o.CONSTANT_COLOR,[gM]:o.ONE_MINUS_CONSTANT_COLOR,[_M]:o.CONSTANT_ALPHA,[vM]:o.ONE_MINUS_CONSTANT_ALPHA};function ht(G,Te,pe,Re,Ie,ye,ke,Ve,Vt,Ut){if(G===Yi){y===!0&&(De(o.BLEND),y=!1);return}if(y===!1&&(de(o.BLEND),y=!0),G!==tM){if(G!==x||Ut!==Y){if((z!==Ls||I!==Ls)&&(o.blendEquation(o.FUNC_ADD),z=Ls,I=Ls),Ut)switch(G){case Or:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Pr:o.blendFunc(o.ONE,o.ONE);break;case Z0:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case K0:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:At("WebGLState: Invalid blending: ",G);break}else switch(G){case Or:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Pr:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case Z0:At("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case K0:At("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:At("WebGLState: Invalid blending: ",G);break}H=null,D=null,L=null,O=null,b.set(0,0,0),N=0,x=G,Y=Ut}return}Ie=Ie||Te,ye=ye||pe,ke=ke||Re,(Te!==z||Ie!==I)&&(o.blendEquationSeparate(it[Te],it[Ie]),z=Te,I=Ie),(pe!==H||Re!==D||ye!==L||ke!==O)&&(o.blendFuncSeparate(ut[pe],ut[Re],ut[ye],ut[ke]),H=pe,D=Re,L=ye,O=ke),(Ve.equals(b)===!1||Vt!==N)&&(o.blendColor(Ve.r,Ve.g,Ve.b,Vt),b.copy(Ve),N=Vt),x=G,Y=!1}function at(G,Te){G.side===Ma?De(o.CULL_FACE):de(o.CULL_FACE);let pe=G.side===Qn;Te&&(pe=!pe),qt(pe),G.blending===Or&&G.transparent===!1?ht(Yi):ht(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),h.setFunc(G.depthFunc),h.setTest(G.depthTest),h.setMask(G.depthWrite),c.setMask(G.colorWrite);const Re=G.stencilWrite;p.setTest(Re),Re&&(p.setMask(G.stencilWriteMask),p.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),p.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),en(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?de(o.SAMPLE_ALPHA_TO_COVERAGE):De(o.SAMPLE_ALPHA_TO_COVERAGE)}function qt(G){k!==G&&(G?o.frontFace(o.CW):o.frontFace(o.CCW),k=G)}function Kt(G){G!==jS?(de(o.CULL_FACE),G!==Q&&(G===Y0?o.cullFace(o.BACK):G===$S?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):De(o.CULL_FACE),Q=G}function $t(G){G!==me&&(F&&o.lineWidth(G),me=G)}function en(G,Te,pe){G?(de(o.POLYGON_OFFSET_FILL),(Se!==Te||J!==pe)&&(Se=Te,J=pe,h.getReversed()&&(Te=-Te),o.polygonOffset(Te,pe))):De(o.POLYGON_OFFSET_FILL)}function Pt(G){G?de(o.SCISSOR_TEST):De(o.SCISSOR_TEST)}function Qt(G){G===void 0&&(G=o.TEXTURE0+P-1),le!==G&&(o.activeTexture(G),le=G)}function W(G,Te,pe){pe===void 0&&(le===null?pe=o.TEXTURE0+P-1:pe=le);let Re=C[pe];Re===void 0&&(Re={type:void 0,texture:void 0},C[pe]=Re),(Re.type!==G||Re.texture!==Te)&&(le!==pe&&(o.activeTexture(pe),le=pe),o.bindTexture(G,Te||Me[G]),Re.type=G,Re.texture=Te)}function Dt(){const G=C[le];G!==void 0&&G.type!==void 0&&(o.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function Mt(){try{o.compressedTexImage2D(...arguments)}catch(G){At("WebGLState:",G)}}function U(){try{o.compressedTexImage3D(...arguments)}catch(G){At("WebGLState:",G)}}function M(){try{o.texSubImage2D(...arguments)}catch(G){At("WebGLState:",G)}}function K(){try{o.texSubImage3D(...arguments)}catch(G){At("WebGLState:",G)}}function se(){try{o.compressedTexSubImage2D(...arguments)}catch(G){At("WebGLState:",G)}}function he(){try{o.compressedTexSubImage3D(...arguments)}catch(G){At("WebGLState:",G)}}function Ae(){try{o.texStorage2D(...arguments)}catch(G){At("WebGLState:",G)}}function Ue(){try{o.texStorage3D(...arguments)}catch(G){At("WebGLState:",G)}}function ue(){try{o.texImage2D(...arguments)}catch(G){At("WebGLState:",G)}}function fe(){try{o.texImage3D(...arguments)}catch(G){At("WebGLState:",G)}}function we(G){return S[G]!==void 0?S[G]:o.getParameter(G)}function Fe(G,Te){S[G]!==Te&&(o.pixelStorei(G,Te),S[G]=Te)}function Oe(G){be.equals(G)===!1&&(o.scissor(G.x,G.y,G.z,G.w),be.copy(G))}function Le(G){Ce.equals(G)===!1&&(o.viewport(G.x,G.y,G.z,G.w),Ce.copy(G))}function Ke(G,Te){let pe=d.get(Te);pe===void 0&&(pe=new WeakMap,d.set(Te,pe));let Re=pe.get(G);Re===void 0&&(Re=o.getUniformBlockIndex(Te,G.name),pe.set(G,Re))}function Qe(G,Te){const Re=d.get(Te).get(G);m.get(Te)!==Re&&(o.uniformBlockBinding(Te,Re,G.__bindingPointIndex),m.set(Te,Re))}function Ne(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),o.pixelStorei(o.PACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,!1),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,o.BROWSER_DEFAULT_WEBGL),o.pixelStorei(o.PACK_ROW_LENGTH,0),o.pixelStorei(o.PACK_SKIP_PIXELS,0),o.pixelStorei(o.PACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_ROW_LENGTH,0),o.pixelStorei(o.UNPACK_IMAGE_HEIGHT,0),o.pixelStorei(o.UNPACK_SKIP_PIXELS,0),o.pixelStorei(o.UNPACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_SKIP_IMAGES,0),v={},S={},le=null,C={},g={},E=new WeakMap,T=[],w=null,y=!1,x=null,z=null,H=null,D=null,I=null,L=null,O=null,b=new vt(0,0,0),N=0,Y=!1,k=null,Q=null,me=null,Se=null,J=null,be.set(0,0,o.canvas.width,o.canvas.height),Ce.set(0,0,o.canvas.width,o.canvas.height),c.reset(),h.reset(),p.reset()}return{buffers:{color:c,depth:h,stencil:p},enable:de,disable:De,bindFramebuffer:je,drawBuffers:Ge,useProgram:Ot,setBlending:ht,setMaterial:at,setFlipSided:qt,setCullFace:Kt,setLineWidth:$t,setPolygonOffset:en,setScissorTest:Pt,activeTexture:Qt,bindTexture:W,unbindTexture:Dt,compressedTexImage2D:Mt,compressedTexImage3D:U,texImage2D:ue,texImage3D:fe,pixelStorei:Fe,getParameter:we,updateUBOMapping:Ke,uniformBlockBinding:Qe,texStorage2D:Ae,texStorage3D:Ue,texSubImage2D:M,texSubImage3D:K,compressedTexSubImage2D:se,compressedTexSubImage3D:he,scissor:Oe,viewport:Le,reset:Ne}}function nA(o,e,i,s,l,c,h){const p=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new ot,v=new WeakMap,S=new Set;let g;const E=new WeakMap;let T=!1;try{T=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(U,M){return T?new OffscreenCanvas(U,M):Qc("canvas")}function y(U,M,K){let se=1;const he=Mt(U);if((he.width>K||he.height>K)&&(se=K/Math.max(he.width,he.height)),se<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const Ae=Math.floor(se*he.width),Ue=Math.floor(se*he.height);g===void 0&&(g=w(Ae,Ue));const ue=M?w(Ae,Ue):g;return ue.width=Ae,ue.height=Ue,ue.getContext("2d").drawImage(U,0,0,Ae,Ue),nt("WebGLRenderer: Texture has been resized from ("+he.width+"x"+he.height+") to ("+Ae+"x"+Ue+")."),ue}else return"data"in U&&nt("WebGLRenderer: Image in DataTexture is too big ("+he.width+"x"+he.height+")."),U;return U}function x(U){return U.generateMipmaps}function z(U){o.generateMipmap(U)}function H(U){return U.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?o.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function D(U,M,K,se,he,Ae=!1){if(U!==null){if(o[U]!==void 0)return o[U];nt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let Ue;se&&(Ue=e.get("EXT_texture_norm16"),Ue||nt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ue=M;if(M===o.RED&&(K===o.FLOAT&&(ue=o.R32F),K===o.HALF_FLOAT&&(ue=o.R16F),K===o.UNSIGNED_BYTE&&(ue=o.R8),K===o.UNSIGNED_SHORT&&Ue&&(ue=Ue.R16_EXT),K===o.SHORT&&Ue&&(ue=Ue.R16_SNORM_EXT)),M===o.RED_INTEGER&&(K===o.UNSIGNED_BYTE&&(ue=o.R8UI),K===o.UNSIGNED_SHORT&&(ue=o.R16UI),K===o.UNSIGNED_INT&&(ue=o.R32UI),K===o.BYTE&&(ue=o.R8I),K===o.SHORT&&(ue=o.R16I),K===o.INT&&(ue=o.R32I)),M===o.RG&&(K===o.FLOAT&&(ue=o.RG32F),K===o.HALF_FLOAT&&(ue=o.RG16F),K===o.UNSIGNED_BYTE&&(ue=o.RG8),K===o.UNSIGNED_SHORT&&Ue&&(ue=Ue.RG16_EXT),K===o.SHORT&&Ue&&(ue=Ue.RG16_SNORM_EXT)),M===o.RG_INTEGER&&(K===o.UNSIGNED_BYTE&&(ue=o.RG8UI),K===o.UNSIGNED_SHORT&&(ue=o.RG16UI),K===o.UNSIGNED_INT&&(ue=o.RG32UI),K===o.BYTE&&(ue=o.RG8I),K===o.SHORT&&(ue=o.RG16I),K===o.INT&&(ue=o.RG32I)),M===o.RGB_INTEGER&&(K===o.UNSIGNED_BYTE&&(ue=o.RGB8UI),K===o.UNSIGNED_SHORT&&(ue=o.RGB16UI),K===o.UNSIGNED_INT&&(ue=o.RGB32UI),K===o.BYTE&&(ue=o.RGB8I),K===o.SHORT&&(ue=o.RGB16I),K===o.INT&&(ue=o.RGB32I)),M===o.RGBA_INTEGER&&(K===o.UNSIGNED_BYTE&&(ue=o.RGBA8UI),K===o.UNSIGNED_SHORT&&(ue=o.RGBA16UI),K===o.UNSIGNED_INT&&(ue=o.RGBA32UI),K===o.BYTE&&(ue=o.RGBA8I),K===o.SHORT&&(ue=o.RGBA16I),K===o.INT&&(ue=o.RGBA32I)),M===o.RGB&&(K===o.UNSIGNED_SHORT&&Ue&&(ue=Ue.RGB16_EXT),K===o.SHORT&&Ue&&(ue=Ue.RGB16_SNORM_EXT),K===o.UNSIGNED_INT_5_9_9_9_REV&&(ue=o.RGB9_E5),K===o.UNSIGNED_INT_10F_11F_11F_REV&&(ue=o.R11F_G11F_B10F)),M===o.RGBA){const fe=Ae?Zc:bt.getTransfer(he);K===o.FLOAT&&(ue=o.RGBA32F),K===o.HALF_FLOAT&&(ue=o.RGBA16F),K===o.UNSIGNED_BYTE&&(ue=fe===Gt?o.SRGB8_ALPHA8:o.RGBA8),K===o.UNSIGNED_SHORT&&Ue&&(ue=Ue.RGBA16_EXT),K===o.SHORT&&Ue&&(ue=Ue.RGBA16_SNORM_EXT),K===o.UNSIGNED_SHORT_4_4_4_4&&(ue=o.RGBA4),K===o.UNSIGNED_SHORT_5_5_5_1&&(ue=o.RGB5_A1)}return(ue===o.R16F||ue===o.R32F||ue===o.RG16F||ue===o.RG32F||ue===o.RGBA16F||ue===o.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function I(U,M){let K;return U?M===null||M===Ki||M===Jo?K=o.DEPTH24_STENCIL8:M===Wi?K=o.DEPTH32F_STENCIL8:M===Qo&&(K=o.DEPTH24_STENCIL8,nt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Ki||M===Jo?K=o.DEPTH_COMPONENT24:M===Wi?K=o.DEPTH_COMPONENT32F:M===Qo&&(K=o.DEPTH_COMPONENT16),K}function L(U,M){return x(U)===!0||U.isFramebufferTexture&&U.minFilter!==Dn&&U.minFilter!==zn?Math.log2(Math.max(M.width,M.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?M.mipmaps.length:1}function O(U){const M=U.target;M.removeEventListener("dispose",O),N(M),M.isVideoTexture&&v.delete(M),M.isHTMLTexture&&S.delete(M)}function b(U){const M=U.target;M.removeEventListener("dispose",b),k(M)}function N(U){const M=s.get(U);if(M.__webglInit===void 0)return;const K=U.source,se=E.get(K);if(se){const he=se[M.__cacheKey];he.usedTimes--,he.usedTimes===0&&Y(U),Object.keys(se).length===0&&E.delete(K)}s.remove(U)}function Y(U){const M=s.get(U);o.deleteTexture(M.__webglTexture);const K=U.source,se=E.get(K);delete se[M.__cacheKey],h.memory.textures--}function k(U){const M=s.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),s.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let se=0;se<6;se++){if(Array.isArray(M.__webglFramebuffer[se]))for(let he=0;he<M.__webglFramebuffer[se].length;he++)o.deleteFramebuffer(M.__webglFramebuffer[se][he]);else o.deleteFramebuffer(M.__webglFramebuffer[se]);M.__webglDepthbuffer&&o.deleteRenderbuffer(M.__webglDepthbuffer[se])}else{if(Array.isArray(M.__webglFramebuffer))for(let se=0;se<M.__webglFramebuffer.length;se++)o.deleteFramebuffer(M.__webglFramebuffer[se]);else o.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&o.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&o.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let se=0;se<M.__webglColorRenderbuffer.length;se++)M.__webglColorRenderbuffer[se]&&o.deleteRenderbuffer(M.__webglColorRenderbuffer[se]);M.__webglDepthRenderbuffer&&o.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const K=U.textures;for(let se=0,he=K.length;se<he;se++){const Ae=s.get(K[se]);Ae.__webglTexture&&(o.deleteTexture(Ae.__webglTexture),h.memory.textures--),s.remove(K[se])}s.remove(U)}let Q=0;function me(){Q=0}function Se(){return Q}function J(U){Q=U}function P(){const U=Q;return U>=l.maxTextures&&nt("WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+l.maxTextures),Q+=1,U}function F(U){const M=[];return M.push(U.wrapS),M.push(U.wrapT),M.push(U.wrapR||0),M.push(U.magFilter),M.push(U.minFilter),M.push(U.anisotropy),M.push(U.internalFormat),M.push(U.format),M.push(U.type),M.push(U.generateMipmaps),M.push(U.premultiplyAlpha),M.push(U.flipY),M.push(U.unpackAlignment),M.push(U.colorSpace),M.join()}function $(U,M){const K=s.get(U);if(U.isVideoTexture&&W(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&K.__version!==U.version){const se=U.image;if(se===null)nt("WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)nt("WebGLRenderer: Texture marked for update but image is incomplete");else{De(K,U,M);return}}else U.isExternalTexture&&(K.__webglTexture=U.sourceTexture?U.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,K.__webglTexture,o.TEXTURE0+M)}function ve(U,M){const K=s.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&K.__version!==U.version){De(K,U,M);return}else U.isExternalTexture&&(K.__webglTexture=U.sourceTexture?U.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,K.__webglTexture,o.TEXTURE0+M)}function le(U,M){const K=s.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&K.__version!==U.version){De(K,U,M);return}i.bindTexture(o.TEXTURE_3D,K.__webglTexture,o.TEXTURE0+M)}function C(U,M){const K=s.get(U);if(U.isCubeDepthTexture!==!0&&U.version>0&&K.__version!==U.version){je(K,U,M);return}i.bindTexture(o.TEXTURE_CUBE_MAP,K.__webglTexture,o.TEXTURE0+M)}const V={[rd]:o.REPEAT,[ya]:o.CLAMP_TO_EDGE,[od]:o.MIRRORED_REPEAT},_e={[Dn]:o.NEAREST,[MM]:o.NEAREST_MIPMAP_NEAREST,[pc]:o.NEAREST_MIPMAP_LINEAR,[zn]:o.LINEAR,[vh]:o.LINEAR_MIPMAP_NEAREST,[Os]:o.LINEAR_MIPMAP_LINEAR},be={[bM]:o.NEVER,[wM]:o.ALWAYS,[TM]:o.LESS,[Kd]:o.LEQUAL,[AM]:o.EQUAL,[Qd]:o.GEQUAL,[RM]:o.GREATER,[CM]:o.NOTEQUAL};function Ce(U,M){if(M.type===Wi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===zn||M.magFilter===vh||M.magFilter===pc||M.magFilter===Os||M.minFilter===zn||M.minFilter===vh||M.minFilter===pc||M.minFilter===Os)&&nt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(U,o.TEXTURE_WRAP_S,V[M.wrapS]),o.texParameteri(U,o.TEXTURE_WRAP_T,V[M.wrapT]),(U===o.TEXTURE_3D||U===o.TEXTURE_2D_ARRAY)&&o.texParameteri(U,o.TEXTURE_WRAP_R,V[M.wrapR]),o.texParameteri(U,o.TEXTURE_MAG_FILTER,_e[M.magFilter]),o.texParameteri(U,o.TEXTURE_MIN_FILTER,_e[M.minFilter]),M.compareFunction&&(o.texParameteri(U,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(U,o.TEXTURE_COMPARE_FUNC,be[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Dn||M.minFilter!==pc&&M.minFilter!==Os||M.type===Wi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||s.get(M).__currentAnisotropy){const K=e.get("EXT_texture_filter_anisotropic");o.texParameterf(U,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,l.getMaxAnisotropy())),s.get(M).__currentAnisotropy=M.anisotropy}}}function ee(U,M){let K=!1;U.__webglInit===void 0&&(U.__webglInit=!0,M.addEventListener("dispose",O));const se=M.source;let he=E.get(se);he===void 0&&(he={},E.set(se,he));const Ae=F(M);if(Ae!==U.__cacheKey){he[Ae]===void 0&&(he[Ae]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,K=!0),he[Ae].usedTimes++;const Ue=he[U.__cacheKey];Ue!==void 0&&(he[U.__cacheKey].usedTimes--,Ue.usedTimes===0&&Y(M)),U.__cacheKey=Ae,U.__webglTexture=he[Ae].texture}return K}function Me(U,M,K){return Math.floor(Math.floor(U/K)/M)}function de(U,M,K,se){const Ae=U.updateRanges;if(Ae.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,M.width,M.height,K,se,M.data);else{Ae.sort((Fe,Oe)=>Fe.start-Oe.start);let Ue=0;for(let Fe=1;Fe<Ae.length;Fe++){const Oe=Ae[Ue],Le=Ae[Fe],Ke=Oe.start+Oe.count,Qe=Me(Le.start,M.width,4),Ne=Me(Oe.start,M.width,4);Le.start<=Ke+1&&Qe===Ne&&Me(Le.start+Le.count-1,M.width,4)===Qe?Oe.count=Math.max(Oe.count,Le.start+Le.count-Oe.start):(++Ue,Ae[Ue]=Le)}Ae.length=Ue+1;const ue=i.getParameter(o.UNPACK_ROW_LENGTH),fe=i.getParameter(o.UNPACK_SKIP_PIXELS),we=i.getParameter(o.UNPACK_SKIP_ROWS);i.pixelStorei(o.UNPACK_ROW_LENGTH,M.width);for(let Fe=0,Oe=Ae.length;Fe<Oe;Fe++){const Le=Ae[Fe],Ke=Math.floor(Le.start/4),Qe=Math.ceil(Le.count/4),Ne=Ke%M.width,G=Math.floor(Ke/M.width),Te=Qe,pe=1;i.pixelStorei(o.UNPACK_SKIP_PIXELS,Ne),i.pixelStorei(o.UNPACK_SKIP_ROWS,G),i.texSubImage2D(o.TEXTURE_2D,0,Ne,G,Te,pe,K,se,M.data)}U.clearUpdateRanges(),i.pixelStorei(o.UNPACK_ROW_LENGTH,ue),i.pixelStorei(o.UNPACK_SKIP_PIXELS,fe),i.pixelStorei(o.UNPACK_SKIP_ROWS,we)}}function De(U,M,K){let se=o.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(se=o.TEXTURE_2D_ARRAY),M.isData3DTexture&&(se=o.TEXTURE_3D);const he=ee(U,M),Ae=M.source;i.bindTexture(se,U.__webglTexture,o.TEXTURE0+K);const Ue=s.get(Ae);if(Ae.version!==Ue.__version||he===!0){if(i.activeTexture(o.TEXTURE0+K),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const pe=bt.getPrimaries(bt.workingColorSpace),Re=M.colorSpace===as?null:bt.getPrimaries(M.colorSpace),Ie=M.colorSpace===as||pe===Re?o.NONE:o.BROWSER_DEFAULT_WEBGL;i.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie)}i.pixelStorei(o.UNPACK_ALIGNMENT,M.unpackAlignment);let fe=y(M.image,!1,l.maxTextureSize);fe=Dt(M,fe);const we=c.convert(M.format,M.colorSpace),Fe=c.convert(M.type);let Oe=D(M.internalFormat,we,Fe,M.normalized,M.colorSpace,M.isVideoTexture);Ce(se,M);let Le;const Ke=M.mipmaps,Qe=M.isVideoTexture!==!0,Ne=Ue.__version===void 0||he===!0,G=Ae.dataReady,Te=L(M,fe);if(M.isDepthTexture)Oe=I(M.format===Ps,M.type),Ne&&(Qe?i.texStorage2D(o.TEXTURE_2D,1,Oe,fe.width,fe.height):i.texImage2D(o.TEXTURE_2D,0,Oe,fe.width,fe.height,0,we,Fe,null));else if(M.isDataTexture)if(Ke.length>0){Qe&&Ne&&i.texStorage2D(o.TEXTURE_2D,Te,Oe,Ke[0].width,Ke[0].height);for(let pe=0,Re=Ke.length;pe<Re;pe++)Le=Ke[pe],Qe?G&&i.texSubImage2D(o.TEXTURE_2D,pe,0,0,Le.width,Le.height,we,Fe,Le.data):i.texImage2D(o.TEXTURE_2D,pe,Oe,Le.width,Le.height,0,we,Fe,Le.data);M.generateMipmaps=!1}else Qe?(Ne&&i.texStorage2D(o.TEXTURE_2D,Te,Oe,fe.width,fe.height),G&&de(M,fe,we,Fe)):i.texImage2D(o.TEXTURE_2D,0,Oe,fe.width,fe.height,0,we,Fe,fe.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Qe&&Ne&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Te,Oe,Ke[0].width,Ke[0].height,fe.depth);for(let pe=0,Re=Ke.length;pe<Re;pe++)if(Le=Ke[pe],M.format!==Oi)if(we!==null)if(Qe){if(G)if(M.layerUpdates.size>0){const Ie=b_(Le.width,Le.height,M.format,M.type);for(const ye of M.layerUpdates){const ke=Le.data.subarray(ye*Ie/Le.data.BYTES_PER_ELEMENT,(ye+1)*Ie/Le.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,pe,0,0,ye,Le.width,Le.height,1,we,ke)}M.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,pe,0,0,0,Le.width,Le.height,fe.depth,we,Le.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,pe,Oe,Le.width,Le.height,fe.depth,0,Le.data,0,0);else nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Qe?G&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,pe,0,0,0,Le.width,Le.height,fe.depth,we,Fe,Le.data):i.texImage3D(o.TEXTURE_2D_ARRAY,pe,Oe,Le.width,Le.height,fe.depth,0,we,Fe,Le.data)}else{Qe&&Ne&&i.texStorage2D(o.TEXTURE_2D,Te,Oe,Ke[0].width,Ke[0].height);for(let pe=0,Re=Ke.length;pe<Re;pe++)Le=Ke[pe],M.format!==Oi?we!==null?Qe?G&&i.compressedTexSubImage2D(o.TEXTURE_2D,pe,0,0,Le.width,Le.height,we,Le.data):i.compressedTexImage2D(o.TEXTURE_2D,pe,Oe,Le.width,Le.height,0,Le.data):nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qe?G&&i.texSubImage2D(o.TEXTURE_2D,pe,0,0,Le.width,Le.height,we,Fe,Le.data):i.texImage2D(o.TEXTURE_2D,pe,Oe,Le.width,Le.height,0,we,Fe,Le.data)}else if(M.isDataArrayTexture)if(Qe){if(Ne&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Te,Oe,fe.width,fe.height,fe.depth),G)if(M.layerUpdates.size>0){const pe=b_(fe.width,fe.height,M.format,M.type);for(const Re of M.layerUpdates){const Ie=fe.data.subarray(Re*pe/fe.data.BYTES_PER_ELEMENT,(Re+1)*pe/fe.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,Re,fe.width,fe.height,1,we,Fe,Ie)}M.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,we,Fe,fe.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Oe,fe.width,fe.height,fe.depth,0,we,Fe,fe.data);else if(M.isData3DTexture)Qe?(Ne&&i.texStorage3D(o.TEXTURE_3D,Te,Oe,fe.width,fe.height,fe.depth),G&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,we,Fe,fe.data)):i.texImage3D(o.TEXTURE_3D,0,Oe,fe.width,fe.height,fe.depth,0,we,Fe,fe.data);else if(M.isFramebufferTexture){if(Ne)if(Qe)i.texStorage2D(o.TEXTURE_2D,Te,Oe,fe.width,fe.height);else{let pe=fe.width,Re=fe.height;for(let Ie=0;Ie<Te;Ie++)i.texImage2D(o.TEXTURE_2D,Ie,Oe,pe,Re,0,we,Fe,null),pe>>=1,Re>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in o){const pe=o.canvas;if(pe.hasAttribute("layoutsubtree")||pe.setAttribute("layoutsubtree","true"),fe.parentNode!==pe){pe.appendChild(fe),S.add(M),pe.onpaint=Re=>{const Ie=Re.changedElements;for(const ye of S)Ie.includes(ye.image)&&(ye.needsUpdate=!0)},pe.requestPaint();return}if(o.texElementImage2D.length===3)o.texElementImage2D(o.TEXTURE_2D,o.RGBA8,fe);else{const Ie=o.RGBA,ye=o.RGBA,ke=o.UNSIGNED_BYTE;o.texElementImage2D(o.TEXTURE_2D,0,Ie,ye,ke,fe)}o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,o.LINEAR),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE)}}else if(Ke.length>0){if(Qe&&Ne){const pe=Mt(Ke[0]);i.texStorage2D(o.TEXTURE_2D,Te,Oe,pe.width,pe.height)}for(let pe=0,Re=Ke.length;pe<Re;pe++)Le=Ke[pe],Qe?G&&i.texSubImage2D(o.TEXTURE_2D,pe,0,0,we,Fe,Le):i.texImage2D(o.TEXTURE_2D,pe,Oe,we,Fe,Le);M.generateMipmaps=!1}else if(Qe){if(Ne){const pe=Mt(fe);i.texStorage2D(o.TEXTURE_2D,Te,Oe,pe.width,pe.height)}G&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,we,Fe,fe)}else i.texImage2D(o.TEXTURE_2D,0,Oe,we,Fe,fe);x(M)&&z(se),Ue.__version=Ae.version,M.onUpdate&&M.onUpdate(M)}U.__version=M.version}function je(U,M,K){if(M.image.length!==6)return;const se=ee(U,M),he=M.source;i.bindTexture(o.TEXTURE_CUBE_MAP,U.__webglTexture,o.TEXTURE0+K);const Ae=s.get(he);if(he.version!==Ae.__version||se===!0){i.activeTexture(o.TEXTURE0+K);const Ue=bt.getPrimaries(bt.workingColorSpace),ue=M.colorSpace===as?null:bt.getPrimaries(M.colorSpace),fe=M.colorSpace===as||Ue===ue?o.NONE:o.BROWSER_DEFAULT_WEBGL;i.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(o.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);const we=M.isCompressedTexture||M.image[0].isCompressedTexture,Fe=M.image[0]&&M.image[0].isDataTexture,Oe=[];for(let ye=0;ye<6;ye++)!we&&!Fe?Oe[ye]=y(M.image[ye],!0,l.maxCubemapSize):Oe[ye]=Fe?M.image[ye].image:M.image[ye],Oe[ye]=Dt(M,Oe[ye]);const Le=Oe[0],Ke=c.convert(M.format,M.colorSpace),Qe=c.convert(M.type),Ne=D(M.internalFormat,Ke,Qe,M.normalized,M.colorSpace),G=M.isVideoTexture!==!0,Te=Ae.__version===void 0||se===!0,pe=he.dataReady;let Re=L(M,Le);Ce(o.TEXTURE_CUBE_MAP,M);let Ie;if(we){G&&Te&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Re,Ne,Le.width,Le.height);for(let ye=0;ye<6;ye++){Ie=Oe[ye].mipmaps;for(let ke=0;ke<Ie.length;ke++){const Ve=Ie[ke];M.format!==Oi?Ke!==null?G?pe&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ye,ke,0,0,Ve.width,Ve.height,Ke,Ve.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ye,ke,Ne,Ve.width,Ve.height,0,Ve.data):nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?pe&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ye,ke,0,0,Ve.width,Ve.height,Ke,Qe,Ve.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ye,ke,Ne,Ve.width,Ve.height,0,Ke,Qe,Ve.data)}}}else{if(Ie=M.mipmaps,G&&Te){Ie.length>0&&Re++;const ye=Mt(Oe[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Re,Ne,ye.width,ye.height)}for(let ye=0;ye<6;ye++)if(Fe){G?pe&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,Oe[ye].width,Oe[ye].height,Ke,Qe,Oe[ye].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,Ne,Oe[ye].width,Oe[ye].height,0,Ke,Qe,Oe[ye].data);for(let ke=0;ke<Ie.length;ke++){const Vt=Ie[ke].image[ye].image;G?pe&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ye,ke+1,0,0,Vt.width,Vt.height,Ke,Qe,Vt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ye,ke+1,Ne,Vt.width,Vt.height,0,Ke,Qe,Vt.data)}}else{G?pe&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,Ke,Qe,Oe[ye]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,Ne,Ke,Qe,Oe[ye]);for(let ke=0;ke<Ie.length;ke++){const Ve=Ie[ke];G?pe&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ye,ke+1,0,0,Ke,Qe,Ve.image[ye]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ye,ke+1,Ne,Ke,Qe,Ve.image[ye])}}}x(M)&&z(o.TEXTURE_CUBE_MAP),Ae.__version=he.version,M.onUpdate&&M.onUpdate(M)}U.__version=M.version}function Ge(U,M,K,se,he,Ae){const Ue=c.convert(K.format,K.colorSpace),ue=c.convert(K.type),fe=D(K.internalFormat,Ue,ue,K.normalized,K.colorSpace),we=s.get(M),Fe=s.get(K);if(Fe.__renderTarget=M,!we.__hasExternalTextures){const Oe=Math.max(1,M.width>>Ae),Le=Math.max(1,M.height>>Ae);he===o.TEXTURE_3D||he===o.TEXTURE_2D_ARRAY?i.texImage3D(he,Ae,fe,Oe,Le,M.depth,0,Ue,ue,null):i.texImage2D(he,Ae,fe,Oe,Le,0,Ue,ue,null)}i.bindFramebuffer(o.FRAMEBUFFER,U),Qt(M)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,se,he,Fe.__webglTexture,0,Pt(M)):(he===o.TEXTURE_2D||he>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&he<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,se,he,Fe.__webglTexture,Ae),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Ot(U,M,K){if(o.bindRenderbuffer(o.RENDERBUFFER,U),M.depthBuffer){const se=M.depthTexture,he=se&&se.isDepthTexture?se.type:null,Ae=I(M.stencilBuffer,he),Ue=M.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;Qt(M)?p.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Pt(M),Ae,M.width,M.height):K?o.renderbufferStorageMultisample(o.RENDERBUFFER,Pt(M),Ae,M.width,M.height):o.renderbufferStorage(o.RENDERBUFFER,Ae,M.width,M.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ue,o.RENDERBUFFER,U)}else{const se=M.textures;for(let he=0;he<se.length;he++){const Ae=se[he],Ue=c.convert(Ae.format,Ae.colorSpace),ue=c.convert(Ae.type),fe=D(Ae.internalFormat,Ue,ue,Ae.normalized,Ae.colorSpace);Qt(M)?p.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Pt(M),fe,M.width,M.height):K?o.renderbufferStorageMultisample(o.RENDERBUFFER,Pt(M),fe,M.width,M.height):o.renderbufferStorage(o.RENDERBUFFER,fe,M.width,M.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function it(U,M,K){const se=M.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(o.FRAMEBUFFER,U),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const he=s.get(M.depthTexture);if(he.__renderTarget=M,(!he.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),se){if(he.__webglInit===void 0&&(he.__webglInit=!0,M.depthTexture.addEventListener("dispose",O)),he.__webglTexture===void 0){he.__webglTexture=o.createTexture(),i.bindTexture(o.TEXTURE_CUBE_MAP,he.__webglTexture),Ce(o.TEXTURE_CUBE_MAP,M.depthTexture);const we=c.convert(M.depthTexture.format),Fe=c.convert(M.depthTexture.type);let Oe;M.depthTexture.format===ba?Oe=o.DEPTH_COMPONENT24:M.depthTexture.format===Ps&&(Oe=o.DEPTH24_STENCIL8);for(let Le=0;Le<6;Le++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,Oe,M.width,M.height,0,we,Fe,null)}}else $(M.depthTexture,0);const Ae=he.__webglTexture,Ue=Pt(M),ue=se?o.TEXTURE_CUBE_MAP_POSITIVE_X+K:o.TEXTURE_2D,fe=M.depthTexture.format===Ps?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(M.depthTexture.format===ba)Qt(M)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,fe,ue,Ae,0,Ue):o.framebufferTexture2D(o.FRAMEBUFFER,fe,ue,Ae,0);else if(M.depthTexture.format===Ps)Qt(M)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,fe,ue,Ae,0,Ue):o.framebufferTexture2D(o.FRAMEBUFFER,fe,ue,Ae,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ut(U){const M=s.get(U),K=U.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==U.depthTexture){const se=U.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),se){const he=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,se.removeEventListener("dispose",he)};se.addEventListener("dispose",he),M.__depthDisposeCallback=he}M.__boundDepthTexture=se}if(U.depthTexture&&!M.__autoAllocateDepthBuffer)if(K)for(let se=0;se<6;se++)it(M.__webglFramebuffer[se],U,se);else{const se=U.texture.mipmaps;se&&se.length>0?it(M.__webglFramebuffer[0],U,0):it(M.__webglFramebuffer,U,0)}else if(K){M.__webglDepthbuffer=[];for(let se=0;se<6;se++)if(i.bindFramebuffer(o.FRAMEBUFFER,M.__webglFramebuffer[se]),M.__webglDepthbuffer[se]===void 0)M.__webglDepthbuffer[se]=o.createRenderbuffer(),Ot(M.__webglDepthbuffer[se],U,!1);else{const he=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ae=M.__webglDepthbuffer[se];o.bindRenderbuffer(o.RENDERBUFFER,Ae),o.framebufferRenderbuffer(o.FRAMEBUFFER,he,o.RENDERBUFFER,Ae)}}else{const se=U.texture.mipmaps;if(se&&se.length>0?i.bindFramebuffer(o.FRAMEBUFFER,M.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=o.createRenderbuffer(),Ot(M.__webglDepthbuffer,U,!1);else{const he=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ae=M.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,Ae),o.framebufferRenderbuffer(o.FRAMEBUFFER,he,o.RENDERBUFFER,Ae)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function ht(U,M,K){const se=s.get(U);M!==void 0&&Ge(se.__webglFramebuffer,U,U.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),K!==void 0&&ut(U)}function at(U){const M=U.texture,K=s.get(U),se=s.get(M);U.addEventListener("dispose",b);const he=U.textures,Ae=U.isWebGLCubeRenderTarget===!0,Ue=he.length>1;if(Ue||(se.__webglTexture===void 0&&(se.__webglTexture=o.createTexture()),se.__version=M.version,h.memory.textures++),Ae){K.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(M.mipmaps&&M.mipmaps.length>0){K.__webglFramebuffer[ue]=[];for(let fe=0;fe<M.mipmaps.length;fe++)K.__webglFramebuffer[ue][fe]=o.createFramebuffer()}else K.__webglFramebuffer[ue]=o.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){K.__webglFramebuffer=[];for(let ue=0;ue<M.mipmaps.length;ue++)K.__webglFramebuffer[ue]=o.createFramebuffer()}else K.__webglFramebuffer=o.createFramebuffer();if(Ue)for(let ue=0,fe=he.length;ue<fe;ue++){const we=s.get(he[ue]);we.__webglTexture===void 0&&(we.__webglTexture=o.createTexture(),h.memory.textures++)}if(U.samples>0&&Qt(U)===!1){K.__webglMultisampledFramebuffer=o.createFramebuffer(),K.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let ue=0;ue<he.length;ue++){const fe=he[ue];K.__webglColorRenderbuffer[ue]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,K.__webglColorRenderbuffer[ue]);const we=c.convert(fe.format,fe.colorSpace),Fe=c.convert(fe.type),Oe=D(fe.internalFormat,we,Fe,fe.normalized,fe.colorSpace,U.isXRRenderTarget===!0),Le=Pt(U);o.renderbufferStorageMultisample(o.RENDERBUFFER,Le,Oe,U.width,U.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ue,o.RENDERBUFFER,K.__webglColorRenderbuffer[ue])}o.bindRenderbuffer(o.RENDERBUFFER,null),U.depthBuffer&&(K.__webglDepthRenderbuffer=o.createRenderbuffer(),Ot(K.__webglDepthRenderbuffer,U,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(Ae){i.bindTexture(o.TEXTURE_CUBE_MAP,se.__webglTexture),Ce(o.TEXTURE_CUBE_MAP,M);for(let ue=0;ue<6;ue++)if(M.mipmaps&&M.mipmaps.length>0)for(let fe=0;fe<M.mipmaps.length;fe++)Ge(K.__webglFramebuffer[ue][fe],U,M,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+ue,fe);else Ge(K.__webglFramebuffer[ue],U,M,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);x(M)&&z(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ue){for(let ue=0,fe=he.length;ue<fe;ue++){const we=he[ue],Fe=s.get(we);let Oe=o.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Oe=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Oe,Fe.__webglTexture),Ce(Oe,we),Ge(K.__webglFramebuffer,U,we,o.COLOR_ATTACHMENT0+ue,Oe,0),x(we)&&z(Oe)}i.unbindTexture()}else{let ue=o.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(ue=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(ue,se.__webglTexture),Ce(ue,M),M.mipmaps&&M.mipmaps.length>0)for(let fe=0;fe<M.mipmaps.length;fe++)Ge(K.__webglFramebuffer[fe],U,M,o.COLOR_ATTACHMENT0,ue,fe);else Ge(K.__webglFramebuffer,U,M,o.COLOR_ATTACHMENT0,ue,0);x(M)&&z(ue),i.unbindTexture()}U.depthBuffer&&ut(U)}function qt(U){const M=U.textures;for(let K=0,se=M.length;K<se;K++){const he=M[K];if(x(he)){const Ae=H(U),Ue=s.get(he).__webglTexture;i.bindTexture(Ae,Ue),z(Ae),i.unbindTexture()}}}const Kt=[],$t=[];function en(U){if(U.samples>0){if(Qt(U)===!1){const M=U.textures,K=U.width,se=U.height;let he=o.COLOR_BUFFER_BIT;const Ae=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ue=s.get(U),ue=M.length>1;if(ue)for(let we=0;we<M.length;we++)i.bindFramebuffer(o.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+we,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Ue.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+we,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer);const fe=U.texture.mipmaps;fe&&fe.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer);for(let we=0;we<M.length;we++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(he|=o.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(he|=o.STENCIL_BUFFER_BIT)),ue){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Ue.__webglColorRenderbuffer[we]);const Fe=s.get(M[we]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Fe,0)}o.blitFramebuffer(0,0,K,se,0,0,K,se,he,o.NEAREST),m===!0&&(Kt.length=0,$t.length=0,Kt.push(o.COLOR_ATTACHMENT0+we),U.depthBuffer&&U.resolveDepthBuffer===!1&&(Kt.push(Ae),$t.push(Ae),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,$t)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Kt))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),ue)for(let we=0;we<M.length;we++){i.bindFramebuffer(o.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+we,o.RENDERBUFFER,Ue.__webglColorRenderbuffer[we]);const Fe=s.get(M[we]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Ue.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+we,o.TEXTURE_2D,Fe,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&m){const M=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[M])}}}function Pt(U){return Math.min(l.maxSamples,U.samples)}function Qt(U){const M=s.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function W(U){const M=h.render.frame;v.get(U)!==M&&(v.set(U,M),U.update())}function Dt(U,M){const K=U.colorSpace,se=U.format,he=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||K!==Yc&&K!==as&&(bt.getTransfer(K)===Gt?(se!==Oi||he!==bi)&&nt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):At("WebGLTextures: Unsupported texture color space:",K)),M}function Mt(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(d.width=U.naturalWidth||U.width,d.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(d.width=U.displayWidth,d.height=U.displayHeight):(d.width=U.width,d.height=U.height),d}this.allocateTextureUnit=P,this.resetTextureUnits=me,this.getTextureUnits=Se,this.setTextureUnits=J,this.setTexture2D=$,this.setTexture2DArray=ve,this.setTexture3D=le,this.setTextureCube=C,this.rebindTextures=ht,this.setupRenderTarget=at,this.updateRenderTargetMipmap=qt,this.updateMultisampleRenderTarget=en,this.setupDepthRenderbuffer=ut,this.setupFrameBufferTexture=Ge,this.useMultisampledRTT=Qt,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function iA(o,e){function i(s,l=as){let c;const h=bt.getTransfer(l);if(s===bi)return o.UNSIGNED_BYTE;if(s===Xd)return o.UNSIGNED_SHORT_4_4_4_4;if(s===Wd)return o.UNSIGNED_SHORT_5_5_5_1;if(s===uv)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===fv)return o.UNSIGNED_INT_10F_11F_11F_REV;if(s===lv)return o.BYTE;if(s===cv)return o.SHORT;if(s===Qo)return o.UNSIGNED_SHORT;if(s===kd)return o.INT;if(s===Ki)return o.UNSIGNED_INT;if(s===Wi)return o.FLOAT;if(s===hi)return o.HALF_FLOAT;if(s===hv)return o.ALPHA;if(s===dv)return o.RGB;if(s===Oi)return o.RGBA;if(s===ba)return o.DEPTH_COMPONENT;if(s===Ps)return o.DEPTH_STENCIL;if(s===pv)return o.RED;if(s===qd)return o.RED_INTEGER;if(s===zs)return o.RG;if(s===Yd)return o.RG_INTEGER;if(s===Zd)return o.RGBA_INTEGER;if(s===Fc||s===Hc||s===Gc||s===Vc)if(h===Gt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Fc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Hc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Gc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Vc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Fc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Hc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Gc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Vc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===ld||s===cd||s===ud||s===fd)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===ld)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===cd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===ud)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===fd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===hd||s===dd||s===pd||s===md||s===gd||s===Wc||s===_d)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(s===hd||s===dd)return h===Gt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===pd)return h===Gt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===md)return c.COMPRESSED_R11_EAC;if(s===gd)return c.COMPRESSED_SIGNED_R11_EAC;if(s===Wc)return c.COMPRESSED_RG11_EAC;if(s===_d)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===vd||s===xd||s===Sd||s===Md||s===yd||s===Ed||s===bd||s===Td||s===Ad||s===Rd||s===Cd||s===wd||s===Dd||s===Ud)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(s===vd)return h===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===xd)return h===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Sd)return h===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Md)return h===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===yd)return h===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Ed)return h===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===bd)return h===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Td)return h===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Ad)return h===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Rd)return h===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Cd)return h===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===wd)return h===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Dd)return h===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Ud)return h===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Ld||s===Nd||s===Od)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(s===Ld)return h===Gt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Nd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Od)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Pd||s===Id||s===qc||s===zd)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(s===Pd)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Id)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===qc)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===zd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Jo?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}const aA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,sA=`
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

}`;class rA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const s=new Tv(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new Bn({vertexShader:aA,fragmentShader:sA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new In(new iu(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class oA extends Fs{constructor(e,i){super();const s=this;let l=null,c=1,h=null,p="local-floor",m=1,d=null,v=null,S=null,g=null,E=null,T=null;const w=typeof XRWebGLBinding<"u",y=new rA,x={},z=i.getContextAttributes();let H=null,D=null;const I=[],L=[],O=new ot;let b=null;const N=new Ei;N.viewport=new on;const Y=new Ei;Y.viewport=new on;const k=[N,Y],Q=new py;let me=null,Se=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let Me=I[ee];return Me===void 0&&(Me=new Ah,I[ee]=Me),Me.getTargetRaySpace()},this.getControllerGrip=function(ee){let Me=I[ee];return Me===void 0&&(Me=new Ah,I[ee]=Me),Me.getGripSpace()},this.getHand=function(ee){let Me=I[ee];return Me===void 0&&(Me=new Ah,I[ee]=Me),Me.getHandSpace()};function J(ee){const Me=L.indexOf(ee.inputSource);if(Me===-1)return;const de=I[Me];de!==void 0&&(de.update(ee.inputSource,ee.frame,d||h),de.dispatchEvent({type:ee.type,data:ee.inputSource}))}function P(){l.removeEventListener("select",J),l.removeEventListener("selectstart",J),l.removeEventListener("selectend",J),l.removeEventListener("squeeze",J),l.removeEventListener("squeezestart",J),l.removeEventListener("squeezeend",J),l.removeEventListener("end",P),l.removeEventListener("inputsourceschange",F);for(let ee=0;ee<I.length;ee++){const Me=L[ee];Me!==null&&(L[ee]=null,I[ee].disconnect(Me))}me=null,Se=null,y.reset();for(const ee in x)delete x[ee];e.setRenderTarget(H),E=null,g=null,S=null,l=null,D=null,Ce.stop(),s.isPresenting=!1,e.setPixelRatio(b),e.setSize(O.width,O.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){c=ee,s.isPresenting===!0&&nt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){p=ee,s.isPresenting===!0&&nt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||h},this.setReferenceSpace=function(ee){d=ee},this.getBaseLayer=function(){return g!==null?g:E},this.getBinding=function(){return S===null&&w&&(S=new XRWebGLBinding(l,i)),S},this.getFrame=function(){return T},this.getSession=function(){return l},this.setSession=async function(ee){if(l=ee,l!==null){if(H=e.getRenderTarget(),l.addEventListener("select",J),l.addEventListener("selectstart",J),l.addEventListener("selectend",J),l.addEventListener("squeeze",J),l.addEventListener("squeezestart",J),l.addEventListener("squeezeend",J),l.addEventListener("end",P),l.addEventListener("inputsourceschange",F),z.xrCompatible!==!0&&await i.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(O),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let de=null,De=null,je=null;z.depth&&(je=z.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,de=z.stencil?Ps:ba,De=z.stencil?Jo:Ki);const Ge={colorFormat:i.RGBA8,depthFormat:je,scaleFactor:c};S=this.getBinding(),g=S.createProjectionLayer(Ge),l.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),D=new Jn(g.textureWidth,g.textureHeight,{format:Oi,type:bi,depthTexture:new Hr(g.textureWidth,g.textureHeight,De,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:z.stencil,colorSpace:e.outputColorSpace,samples:z.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const de={antialias:z.antialias,alpha:!0,depth:z.depth,stencil:z.stencil,framebufferScaleFactor:c};E=new XRWebGLLayer(l,i,de),l.updateRenderState({baseLayer:E}),e.setPixelRatio(1),e.setSize(E.framebufferWidth,E.framebufferHeight,!1),D=new Jn(E.framebufferWidth,E.framebufferHeight,{format:Oi,type:bi,colorSpace:e.outputColorSpace,stencilBuffer:z.stencil,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(m),d=null,h=await l.requestReferenceSpace(p),Ce.setContext(l),Ce.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function F(ee){for(let Me=0;Me<ee.removed.length;Me++){const de=ee.removed[Me],De=L.indexOf(de);De>=0&&(L[De]=null,I[De].disconnect(de))}for(let Me=0;Me<ee.added.length;Me++){const de=ee.added[Me];let De=L.indexOf(de);if(De===-1){for(let Ge=0;Ge<I.length;Ge++)if(Ge>=L.length){L.push(de),De=Ge;break}else if(L[Ge]===null){L[Ge]=de,De=Ge;break}if(De===-1)break}const je=I[De];je&&je.connect(de)}}const $=new j,ve=new j;function le(ee,Me,de){$.setFromMatrixPosition(Me.matrixWorld),ve.setFromMatrixPosition(de.matrixWorld);const De=$.distanceTo(ve),je=Me.projectionMatrix.elements,Ge=de.projectionMatrix.elements,Ot=je[14]/(je[10]-1),it=je[14]/(je[10]+1),ut=(je[9]+1)/je[5],ht=(je[9]-1)/je[5],at=(je[8]-1)/je[0],qt=(Ge[8]+1)/Ge[0],Kt=Ot*at,$t=Ot*qt,en=De/(-at+qt),Pt=en*-at;if(Me.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(Pt),ee.translateZ(en),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),je[10]===-1)ee.projectionMatrix.copy(Me.projectionMatrix),ee.projectionMatrixInverse.copy(Me.projectionMatrixInverse);else{const Qt=Ot+en,W=it+en,Dt=Kt-Pt,Mt=$t+(De-Pt),U=ut*it/W*Qt,M=ht*it/W*Qt;ee.projectionMatrix.makePerspective(Dt,Mt,U,M,Qt,W),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function C(ee,Me){Me===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(Me.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(l===null)return;let Me=ee.near,de=ee.far;y.texture!==null&&(y.depthNear>0&&(Me=y.depthNear),y.depthFar>0&&(de=y.depthFar)),Q.near=Y.near=N.near=Me,Q.far=Y.far=N.far=de,(me!==Q.near||Se!==Q.far)&&(l.updateRenderState({depthNear:Q.near,depthFar:Q.far}),me=Q.near,Se=Q.far),Q.layers.mask=ee.layers.mask|6,N.layers.mask=Q.layers.mask&-5,Y.layers.mask=Q.layers.mask&-3;const De=ee.parent,je=Q.cameras;C(Q,De);for(let Ge=0;Ge<je.length;Ge++)C(je[Ge],De);je.length===2?le(Q,N,Y):Q.projectionMatrix.copy(N.projectionMatrix),V(ee,Q,De)};function V(ee,Me,de){de===null?ee.matrix.copy(Me.matrixWorld):(ee.matrix.copy(de.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(Me.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(Me.projectionMatrix),ee.projectionMatrixInverse.copy(Me.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=Bd*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return Q},this.getFoveation=function(){if(!(g===null&&E===null))return m},this.setFoveation=function(ee){m=ee,g!==null&&(g.fixedFoveation=ee),E!==null&&E.fixedFoveation!==void 0&&(E.fixedFoveation=ee)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(Q)},this.getCameraTexture=function(ee){return x[ee]};let _e=null;function be(ee,Me){if(v=Me.getViewerPose(d||h),T=Me,v!==null){const de=v.views;E!==null&&(e.setRenderTargetFramebuffer(D,E.framebuffer),e.setRenderTarget(D));let De=!1;de.length!==Q.cameras.length&&(Q.cameras.length=0,De=!0);for(let it=0;it<de.length;it++){const ut=de[it];let ht=null;if(E!==null)ht=E.getViewport(ut);else{const qt=S.getViewSubImage(g,ut);ht=qt.viewport,it===0&&(e.setRenderTargetTextures(D,qt.colorTexture,qt.depthStencilTexture),e.setRenderTarget(D))}let at=k[it];at===void 0&&(at=new Ei,at.layers.enable(it),at.viewport=new on,k[it]=at),at.matrix.fromArray(ut.transform.matrix),at.matrix.decompose(at.position,at.quaternion,at.scale),at.projectionMatrix.fromArray(ut.projectionMatrix),at.projectionMatrixInverse.copy(at.projectionMatrix).invert(),at.viewport.set(ht.x,ht.y,ht.width,ht.height),it===0&&(Q.matrix.copy(at.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale)),De===!0&&Q.cameras.push(at)}const je=l.enabledFeatures;if(je&&je.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&w){S=s.getBinding();const it=S.getDepthInformation(de[0]);it&&it.isValid&&it.texture&&y.init(it,l.renderState)}if(je&&je.includes("camera-access")&&w){e.state.unbindTexture(),S=s.getBinding();for(let it=0;it<de.length;it++){const ut=de[it].camera;if(ut){let ht=x[ut];ht||(ht=new Tv,x[ut]=ht);const at=S.getCameraImage(ut);ht.sourceTexture=at}}}}for(let de=0;de<I.length;de++){const De=L[de],je=I[de];De!==null&&je!==void 0&&je.update(De,Me,d||h)}_e&&_e(ee,Me),Me.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:Me}),T=null}const Ce=new Cv;Ce.setAnimationLoop(be),this.setAnimationLoop=function(ee){_e=ee},this.dispose=function(){}}}const lA=new un,Pv=new rt;Pv.set(-1,0,0,0,1,0,0,0,1);function cA(o,e){function i(y,x){y.matrixAutoUpdate===!0&&y.updateMatrix(),x.value.copy(y.matrix)}function s(y,x){x.color.getRGB(y.fogColor.value,Av(o)),x.isFog?(y.fogNear.value=x.near,y.fogFar.value=x.far):x.isFogExp2&&(y.fogDensity.value=x.density)}function l(y,x,z,H,D){x.isNodeMaterial?x.uniformsNeedUpdate=!1:x.isMeshBasicMaterial?c(y,x):x.isMeshLambertMaterial?(c(y,x),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(c(y,x),S(y,x)):x.isMeshPhongMaterial?(c(y,x),v(y,x),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(c(y,x),g(y,x),x.isMeshPhysicalMaterial&&E(y,x,D)):x.isMeshMatcapMaterial?(c(y,x),T(y,x)):x.isMeshDepthMaterial?c(y,x):x.isMeshDistanceMaterial?(c(y,x),w(y,x)):x.isMeshNormalMaterial?c(y,x):x.isLineBasicMaterial?(h(y,x),x.isLineDashedMaterial&&p(y,x)):x.isPointsMaterial?m(y,x,z,H):x.isSpriteMaterial?d(y,x):x.isShadowMaterial?(y.color.value.copy(x.color),y.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function c(y,x){y.opacity.value=x.opacity,x.color&&y.diffuse.value.copy(x.color),x.emissive&&y.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(y.map.value=x.map,i(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.bumpMap&&(y.bumpMap.value=x.bumpMap,i(x.bumpMap,y.bumpMapTransform),y.bumpScale.value=x.bumpScale,x.side===Qn&&(y.bumpScale.value*=-1)),x.normalMap&&(y.normalMap.value=x.normalMap,i(x.normalMap,y.normalMapTransform),y.normalScale.value.copy(x.normalScale),x.side===Qn&&y.normalScale.value.negate()),x.displacementMap&&(y.displacementMap.value=x.displacementMap,i(x.displacementMap,y.displacementMapTransform),y.displacementScale.value=x.displacementScale,y.displacementBias.value=x.displacementBias),x.emissiveMap&&(y.emissiveMap.value=x.emissiveMap,i(x.emissiveMap,y.emissiveMapTransform)),x.specularMap&&(y.specularMap.value=x.specularMap,i(x.specularMap,y.specularMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest);const z=e.get(x),H=z.envMap,D=z.envMapRotation;H&&(y.envMap.value=H,y.envMapRotation.value.setFromMatrix4(lA.makeRotationFromEuler(D)).transpose(),H.isCubeTexture&&H.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(Pv),y.reflectivity.value=x.reflectivity,y.ior.value=x.ior,y.refractionRatio.value=x.refractionRatio),x.lightMap&&(y.lightMap.value=x.lightMap,y.lightMapIntensity.value=x.lightMapIntensity,i(x.lightMap,y.lightMapTransform)),x.aoMap&&(y.aoMap.value=x.aoMap,y.aoMapIntensity.value=x.aoMapIntensity,i(x.aoMap,y.aoMapTransform))}function h(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,x.map&&(y.map.value=x.map,i(x.map,y.mapTransform))}function p(y,x){y.dashSize.value=x.dashSize,y.totalSize.value=x.dashSize+x.gapSize,y.scale.value=x.scale}function m(y,x,z,H){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.size.value=x.size*z,y.scale.value=H*.5,x.map&&(y.map.value=x.map,i(x.map,y.uvTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function d(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.rotation.value=x.rotation,x.map&&(y.map.value=x.map,i(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function v(y,x){y.specular.value.copy(x.specular),y.shininess.value=Math.max(x.shininess,1e-4)}function S(y,x){x.gradientMap&&(y.gradientMap.value=x.gradientMap)}function g(y,x){y.metalness.value=x.metalness,x.metalnessMap&&(y.metalnessMap.value=x.metalnessMap,i(x.metalnessMap,y.metalnessMapTransform)),y.roughness.value=x.roughness,x.roughnessMap&&(y.roughnessMap.value=x.roughnessMap,i(x.roughnessMap,y.roughnessMapTransform)),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)}function E(y,x,z){y.ior.value=x.ior,x.sheen>0&&(y.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),y.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(y.sheenColorMap.value=x.sheenColorMap,i(x.sheenColorMap,y.sheenColorMapTransform)),x.sheenRoughnessMap&&(y.sheenRoughnessMap.value=x.sheenRoughnessMap,i(x.sheenRoughnessMap,y.sheenRoughnessMapTransform))),x.clearcoat>0&&(y.clearcoat.value=x.clearcoat,y.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(y.clearcoatMap.value=x.clearcoatMap,i(x.clearcoatMap,y.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,i(x.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(y.clearcoatNormalMap.value=x.clearcoatNormalMap,i(x.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Qn&&y.clearcoatNormalScale.value.negate())),x.dispersion>0&&(y.dispersion.value=x.dispersion),x.iridescence>0&&(y.iridescence.value=x.iridescence,y.iridescenceIOR.value=x.iridescenceIOR,y.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(y.iridescenceMap.value=x.iridescenceMap,i(x.iridescenceMap,y.iridescenceMapTransform)),x.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=x.iridescenceThicknessMap,i(x.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),x.transmission>0&&(y.transmission.value=x.transmission,y.transmissionSamplerMap.value=z.texture,y.transmissionSamplerSize.value.set(z.width,z.height),x.transmissionMap&&(y.transmissionMap.value=x.transmissionMap,i(x.transmissionMap,y.transmissionMapTransform)),y.thickness.value=x.thickness,x.thicknessMap&&(y.thicknessMap.value=x.thicknessMap,i(x.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=x.attenuationDistance,y.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(y.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(y.anisotropyMap.value=x.anisotropyMap,i(x.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=x.specularIntensity,y.specularColor.value.copy(x.specularColor),x.specularColorMap&&(y.specularColorMap.value=x.specularColorMap,i(x.specularColorMap,y.specularColorMapTransform)),x.specularIntensityMap&&(y.specularIntensityMap.value=x.specularIntensityMap,i(x.specularIntensityMap,y.specularIntensityMapTransform))}function T(y,x){x.matcap&&(y.matcap.value=x.matcap)}function w(y,x){const z=e.get(x).light;y.referencePosition.value.setFromMatrixPosition(z.matrixWorld),y.nearDistance.value=z.shadow.camera.near,y.farDistance.value=z.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function uA(o,e,i,s){let l={},c={},h=[];const p=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(D,I){const L=I.program;s.uniformBlockBinding(D,L)}function d(D,I){let L=l[D.id];L===void 0&&(y(D),L=v(D),l[D.id]=L,D.addEventListener("dispose",z));const O=I.program;s.updateUBOMapping(D,O);const b=e.render.frame;c[D.id]!==b&&(g(D),c[D.id]=b)}function v(D){const I=S();D.__bindingPointIndex=I;const L=o.createBuffer(),O=D.__size,b=D.usage;return o.bindBuffer(o.UNIFORM_BUFFER,L),o.bufferData(o.UNIFORM_BUFFER,O,b),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,I,L),L}function S(){for(let D=0;D<p;D++)if(h.indexOf(D)===-1)return h.push(D),D;return At("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(D){const I=l[D.id],L=D.uniforms,O=D.__cache;o.bindBuffer(o.UNIFORM_BUFFER,I);for(let b=0,N=L.length;b<N;b++){const Y=L[b];if(Array.isArray(Y))for(let k=0,Q=Y.length;k<Q;k++)E(Y[k],b,k,O);else E(Y,b,0,O)}o.bindBuffer(o.UNIFORM_BUFFER,null)}function E(D,I,L,O){if(w(D,I,L,O)===!0){const b=D.__offset,N=D.value;if(Array.isArray(N)){let Y=0;for(let k=0;k<N.length;k++){const Q=N[k],me=x(Q);T(Q,D.__data,Y),typeof Q!="number"&&typeof Q!="boolean"&&!Q.isMatrix3&&!ArrayBuffer.isView(Q)&&(Y+=me.storage/Float32Array.BYTES_PER_ELEMENT)}}else T(N,D.__data,0);o.bufferSubData(o.UNIFORM_BUFFER,b,D.__data)}}function T(D,I,L){typeof D=="number"||typeof D=="boolean"?I[0]=D:D.isMatrix3?(I[0]=D.elements[0],I[1]=D.elements[1],I[2]=D.elements[2],I[3]=0,I[4]=D.elements[3],I[5]=D.elements[4],I[6]=D.elements[5],I[7]=0,I[8]=D.elements[6],I[9]=D.elements[7],I[10]=D.elements[8],I[11]=0):ArrayBuffer.isView(D)?I.set(new D.constructor(D.buffer,D.byteOffset,I.length)):D.toArray(I,L)}function w(D,I,L,O){const b=D.value,N=I+"_"+L;if(O[N]===void 0)return typeof b=="number"||typeof b=="boolean"?O[N]=b:ArrayBuffer.isView(b)?O[N]=b.slice():O[N]=b.clone(),!0;{const Y=O[N];if(typeof b=="number"||typeof b=="boolean"){if(Y!==b)return O[N]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(Y.equals(b)===!1)return Y.copy(b),!0}}return!1}function y(D){const I=D.uniforms;let L=0;const O=16;for(let N=0,Y=I.length;N<Y;N++){const k=Array.isArray(I[N])?I[N]:[I[N]];for(let Q=0,me=k.length;Q<me;Q++){const Se=k[Q],J=Array.isArray(Se.value)?Se.value:[Se.value];for(let P=0,F=J.length;P<F;P++){const $=J[P],ve=x($),le=L%O,C=le%ve.boundary,V=le+C;L+=C,V!==0&&O-V<ve.storage&&(L+=O-V),Se.__data=new Float32Array(ve.storage/Float32Array.BYTES_PER_ELEMENT),Se.__offset=L,L+=ve.storage}}}const b=L%O;return b>0&&(L+=O-b),D.__size=L,D.__cache={},this}function x(D){const I={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(I.boundary=4,I.storage=4):D.isVector2?(I.boundary=8,I.storage=8):D.isVector3||D.isColor?(I.boundary=16,I.storage=12):D.isVector4?(I.boundary=16,I.storage=16):D.isMatrix3?(I.boundary=48,I.storage=48):D.isMatrix4?(I.boundary=64,I.storage=64):D.isTexture?nt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(D)?(I.boundary=16,I.storage=D.byteLength):nt("WebGLRenderer: Unsupported uniform value type.",D),I}function z(D){const I=D.target;I.removeEventListener("dispose",z);const L=h.indexOf(I.__bindingPointIndex);h.splice(L,1),o.deleteBuffer(l[I.id]),delete l[I.id],delete c[I.id]}function H(){for(const D in l)o.deleteBuffer(l[D]);h=[],l={},c={}}return{bind:m,update:d,dispose:H}}const fA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ki=null;function hA(){return ki===null&&(ki=new ey(fA,16,16,zs,hi),ki.name="DFG_LUT",ki.minFilter=zn,ki.magFilter=zn,ki.wrapS=ya,ki.wrapT=ya,ki.generateMipmaps=!1,ki.needsUpdate=!0),ki}class dA{constructor(e={}){const{canvas:i=UM(),context:s=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:p=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:d=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:S=!1,reversedDepthBuffer:g=!1,outputBufferType:E=bi}=e;this.isWebGLRenderer=!0;let T;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=s.getContextAttributes().alpha}else T=h;const w=E,y=new Set([Zd,Yd,qd]),x=new Set([bi,Ki,Qo,Jo,Xd,Wd]),z=new Uint32Array(4),H=new Int32Array(4),D=new j;let I=null,L=null;const O=[],b=[];let N=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Zi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const Y=this;let k=!1,Q=null,me=null,Se=null,J=null;this._outputColorSpace=yi;let P=0,F=0,$=null,ve=-1,le=null;const C=new on,V=new on;let _e=null;const be=new vt(0);let Ce=0,ee=i.width,Me=i.height,de=1,De=null,je=null;const Ge=new on(0,0,ee,Me),Ot=new on(0,0,ee,Me);let it=!1;const ut=new yv;let ht=!1,at=!1;const qt=new un,Kt=new j,$t=new on,en={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Pt=!1;function Qt(){return $===null?de:1}let W=s;function Dt(A,q){return i.getContext(A,q)}try{const A={alpha:!0,depth:l,stencil:c,antialias:p,premultipliedAlpha:m,preserveDrawingBuffer:d,powerPreference:v,failIfMajorPerformanceCaveat:S};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Vd}`),i.addEventListener("webglcontextlost",Vt,!1),i.addEventListener("webglcontextrestored",Ut,!1),i.addEventListener("webglcontextcreationerror",Un,!1),W===null){const q="webgl2";if(W=Dt(q,A),W===null)throw Dt(q)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(A){throw At("WebGLRenderer: "+A.message),A}let Mt,U,M,K,se,he,Ae,Ue,ue,fe,we,Fe,Oe,Le,Ke,Qe,Ne,G,Te,pe,Re,Ie,ye;function ke(){Mt=new hT(W),Mt.init(),Re=new iA(W,Mt),U=new aT(W,Mt,e,Re),M=new tA(W,Mt),U.reversedDepthBuffer&&g&&M.buffers.depth.setReversed(!0),me=W.createFramebuffer(),Se=W.createFramebuffer(),J=W.createFramebuffer(),K=new mT(W),se=new G1,he=new nA(W,Mt,M,se,U,Re,K),Ae=new fT(Y),Ue=new xy(W),Ie=new nT(W,Ue),ue=new dT(W,Ue,K,Ie),fe=new _T(W,ue,Ue,Ie,K),G=new gT(W,U,he),Ke=new sT(se),we=new H1(Y,Ae,Mt,U,Ie,Ke),Fe=new cA(Y,se),Oe=new k1,Le=new K1(Mt),Ne=new tT(Y,Ae,M,fe,T,m),Qe=new eA(Y,fe,U),ye=new uA(W,K,U,M),Te=new iT(W,Mt,K),pe=new pT(W,Mt,K),K.programs=we.programs,Y.capabilities=U,Y.extensions=Mt,Y.properties=se,Y.renderLists=Oe,Y.shadowMap=Qe,Y.state=M,Y.info=K}ke(),w!==bi&&(N=new xT(w,i.width,i.height,p,l,c));const Ve=new oA(Y,W);this.xr=Ve,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const A=Mt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Mt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return de},this.setPixelRatio=function(A){A!==void 0&&(de=A,this.setSize(ee,Me,!1))},this.getSize=function(A){return A.set(ee,Me)},this.setSize=function(A,q,re=!0){if(Ve.isPresenting){nt("WebGLRenderer: Can't change size while VR device is presenting.");return}ee=A,Me=q,i.width=Math.floor(A*de),i.height=Math.floor(q*de),re===!0&&(i.style.width=A+"px",i.style.height=q+"px"),N!==null&&N.setSize(i.width,i.height),this.setViewport(0,0,A,q)},this.getDrawingBufferSize=function(A){return A.set(ee*de,Me*de).floor()},this.setDrawingBufferSize=function(A,q,re){ee=A,Me=q,de=re,i.width=Math.floor(A*re),i.height=Math.floor(q*re),this.setViewport(0,0,A,q)},this.setEffects=function(A){if(w===bi){At("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let q=0;q<A.length;q++)if(A[q].isOutputPass===!0){nt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(C)},this.getViewport=function(A){return A.copy(Ge)},this.setViewport=function(A,q,re,ie){A.isVector4?Ge.set(A.x,A.y,A.z,A.w):Ge.set(A,q,re,ie),M.viewport(C.copy(Ge).multiplyScalar(de).round())},this.getScissor=function(A){return A.copy(Ot)},this.setScissor=function(A,q,re,ie){A.isVector4?Ot.set(A.x,A.y,A.z,A.w):Ot.set(A,q,re,ie),M.scissor(V.copy(Ot).multiplyScalar(de).round())},this.getScissorTest=function(){return it},this.setScissorTest=function(A){M.setScissorTest(it=A)},this.setOpaqueSort=function(A){De=A},this.setTransparentSort=function(A){je=A},this.getClearColor=function(A){return A.copy(Ne.getClearColor())},this.setClearColor=function(){Ne.setClearColor(...arguments)},this.getClearAlpha=function(){return Ne.getClearAlpha()},this.setClearAlpha=function(){Ne.setClearAlpha(...arguments)},this.clear=function(A=!0,q=!0,re=!0){let ie=0;if(A){let ae=!1;if($!==null){const ze=$.texture.format;ae=y.has(ze)}if(ae){const ze=$.texture.type,Xe=x.has(ze),Pe=Ne.getClearColor(),qe=Ne.getClearAlpha(),We=Pe.r,$e=Pe.g,lt=Pe.b;Xe?(z[0]=We,z[1]=$e,z[2]=lt,z[3]=qe,W.clearBufferuiv(W.COLOR,0,z)):(H[0]=We,H[1]=$e,H[2]=lt,H[3]=qe,W.clearBufferiv(W.COLOR,0,H))}else ie|=W.COLOR_BUFFER_BIT}q&&(ie|=W.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),re&&(ie|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ie!==0&&W.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),Q=A},this.dispose=function(){i.removeEventListener("webglcontextlost",Vt,!1),i.removeEventListener("webglcontextrestored",Ut,!1),i.removeEventListener("webglcontextcreationerror",Un,!1),Ne.dispose(),Oe.dispose(),Le.dispose(),se.dispose(),Ae.dispose(),fe.dispose(),Ie.dispose(),ye.dispose(),we.dispose(),Ve.dispose(),Ve.removeEventListener("sessionstart",fn),Ve.removeEventListener("sessionend",Tn),Vn.stop()};function Vt(A){A.preventDefault(),t_("WebGLRenderer: Context Lost."),k=!0}function Ut(){t_("WebGLRenderer: Context Restored."),k=!1;const A=K.autoReset,q=Qe.enabled,re=Qe.autoUpdate,ie=Qe.needsUpdate,ae=Qe.type;ke(),K.autoReset=A,Qe.enabled=q,Qe.autoUpdate=re,Qe.needsUpdate=ie,Qe.type=ae}function Un(A){At("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ei(A){const q=A.target;q.removeEventListener("dispose",ei),Yr(q)}function Yr(A){Zr(A),se.remove(A)}function Zr(A){const q=se.get(A).programs;q!==void 0&&(q.forEach(function(re){we.releaseProgram(re)}),A.isShaderMaterial&&we.releaseShaderCache(A))}this.renderBufferDirect=function(A,q,re,ie,ae,ze){q===null&&(q=en);const Xe=ae.isMesh&&ae.matrixWorld.determinantAffine()<0,Pe=Ra(A,q,re,ie,ae);M.setMaterial(ie,Xe);let qe=re.index,We=1;if(ie.wireframe===!0){if(qe=ue.getWireframeAttribute(re),qe===void 0)return;We=2}const $e=re.drawRange,lt=re.attributes.position;let Je=$e.start*We,Rt=($e.start+$e.count)*We;ze!==null&&(Je=Math.max(Je,ze.start*We),Rt=Math.min(Rt,(ze.start+ze.count)*We)),qe!==null?(Je=Math.max(Je,0),Rt=Math.min(Rt,qe.count)):lt!=null&&(Je=Math.max(Je,0),Rt=Math.min(Rt,lt.count));const tn=Rt-Je;if(tn<0||tn===1/0)return;Ie.setup(ae,ie,Pe,re,qe);let Yt,It=Te;if(qe!==null&&(Yt=Ue.get(qe),It=pe,It.setIndex(Yt)),ae.isMesh)ie.wireframe===!0?(M.setLineWidth(ie.wireframeLinewidth*Qt()),It.setMode(W.LINES)):It.setMode(W.TRIANGLES);else if(ae.isLine){let zt=ie.linewidth;zt===void 0&&(zt=1),M.setLineWidth(zt*Qt()),ae.isLineSegments?It.setMode(W.LINES):ae.isLineLoop?It.setMode(W.LINE_LOOP):It.setMode(W.LINE_STRIP)}else ae.isPoints?It.setMode(W.POINTS):ae.isSprite&&It.setMode(W.TRIANGLES);if(ae.isBatchedMesh)if(Mt.get("WEBGL_multi_draw"))It.renderMultiDraw(ae._multiDrawStarts,ae._multiDrawCounts,ae._multiDrawCount);else{const zt=ae._multiDrawStarts,He=ae._multiDrawCounts,Ln=ae._multiDrawCount,mt=qe?Ue.get(qe).bytesPerElement:1,vn=se.get(ie).currentProgram.getUniforms();for(let ti=0;ti<Ln;ti++)vn.setValue(W,"_gl_DrawID",ti),It.render(zt[ti]/mt,He[ti])}else if(ae.isInstancedMesh)It.renderInstances(Je,tn,ae.count);else if(re.isInstancedBufferGeometry){const zt=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,He=Math.min(re.instanceCount,zt);It.renderInstances(Je,tn,He)}else It.render(Je,tn)};function Kr(A,q,re){A.transparent===!0&&A.side===Ma&&A.forceSinglePass===!1?(A.side=Qn,A.needsUpdate=!0,Aa(A,q,re),A.side=rs,A.needsUpdate=!0,Aa(A,q,re),A.side=Ma):Aa(A,q,re)}this.compile=function(A,q,re=null){re===null&&(re=A),L=Le.get(re),L.init(q),b.push(L),re.traverseVisible(function(ae){ae.isLight&&ae.layers.test(q.layers)&&(L.pushLight(ae),ae.castShadow&&L.pushShadow(ae))}),A!==re&&A.traverseVisible(function(ae){ae.isLight&&ae.layers.test(q.layers)&&(L.pushLight(ae),ae.castShadow&&L.pushShadow(ae))}),L.setupLights();const ie=new Set;return A.traverse(function(ae){if(!(ae.isMesh||ae.isPoints||ae.isLine||ae.isSprite))return;const ze=ae.material;if(ze)if(Array.isArray(ze))for(let Xe=0;Xe<ze.length;Xe++){const Pe=ze[Xe];Kr(Pe,re,ae),ie.add(Pe)}else Kr(ze,re,ae),ie.add(ze)}),L=b.pop(),ie},this.compileAsync=function(A,q,re=null){const ie=this.compile(A,q,re);return new Promise(ae=>{function ze(){if(ie.forEach(function(Xe){se.get(Xe).currentProgram.isReady()&&ie.delete(Xe)}),ie.size===0){ae(A);return}setTimeout(ze,10)}Mt.get("KHR_parallel_shader_compile")!==null?ze():setTimeout(ze,10)})};let Hs=null;function Ii(A){Hs&&Hs(A)}function fn(){Vn.stop()}function Tn(){Vn.start()}const Vn=new Cv;Vn.setAnimationLoop(Ii),typeof self<"u"&&Vn.setContext(self),this.setAnimationLoop=function(A){Hs=A,Ve.setAnimationLoop(A),A===null?Vn.stop():Vn.start()},Ve.addEventListener("sessionstart",fn),Ve.addEventListener("sessionend",Tn),this.render=function(A,q){if(q!==void 0&&q.isCamera!==!0){At("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;Q!==null&&Q.renderStart(A,q);const re=Ve.enabled===!0&&Ve.isPresenting===!0,ie=N!==null&&($===null||re)&&N.begin(Y,$);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Ve.enabled===!0&&Ve.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(Ve.cameraAutoUpdate===!0&&Ve.updateCamera(q),q=Ve.getCamera()),A.isScene===!0&&A.onBeforeRender(Y,A,q,$),L=Le.get(A,b.length),L.init(q),L.state.textureUnits=he.getTextureUnits(),b.push(L),qt.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),ut.setFromProjectionMatrix(qt,qi,q.reversedDepth),at=this.localClippingEnabled,ht=Ke.init(this.clippingPlanes,at),I=Oe.get(A,O.length),I.init(),O.push(I),Ve.enabled===!0&&Ve.isPresenting===!0){const Xe=Y.xr.getDepthSensingMesh();Xe!==null&&os(Xe,q,-1/0,Y.sortObjects)}os(A,q,0,Y.sortObjects),I.finish(),Y.sortObjects===!0&&I.sort(De,je,q.reversedDepth),Pt=Ve.enabled===!1||Ve.isPresenting===!1||Ve.hasDepthSensing()===!1,Pt&&Ne.addToRenderList(I,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ht===!0&&Ke.beginShadows();const ae=L.state.shadowsArray;if(Qe.render(ae,A,q),ht===!0&&Ke.endShadows(),(ie&&N.hasRenderPass())===!1){const Xe=I.opaque,Pe=I.transmissive;if(L.setupLights(),q.isArrayCamera){const qe=q.cameras;if(Pe.length>0)for(let We=0,$e=qe.length;We<$e;We++){const lt=qe[We];al(Xe,Pe,A,lt)}Pt&&Ne.render(A);for(let We=0,$e=qe.length;We<$e;We++){const lt=qe[We];il(I,A,lt,lt.viewport)}}else Pe.length>0&&al(Xe,Pe,A,q),Pt&&Ne.render(A),il(I,A,q)}$!==null&&F===0&&(he.updateMultisampleRenderTarget($),he.updateRenderTargetMipmap($)),ie&&N.end(Y),A.isScene===!0&&A.onAfterRender(Y,A,q),Ie.resetDefaultState(),ve=-1,le=null,b.pop(),b.length>0?(L=b[b.length-1],he.setTextureUnits(L.state.textureUnits),ht===!0&&Ke.setGlobalState(Y.clippingPlanes,L.state.camera)):L=null,O.pop(),O.length>0?I=O[O.length-1]:I=null,Q!==null&&Q.renderEnd()};function os(A,q,re,ie){if(A.visible===!1)return;if(A.layers.test(q.layers)){if(A.isGroup)re=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(q);else if(A.isLightProbeGrid)L.pushLightProbeGrid(A);else if(A.isLight)L.pushLight(A),A.castShadow&&L.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||ut.intersectsSprite(A)){ie&&$t.setFromMatrixPosition(A.matrixWorld).applyMatrix4(qt);const Xe=fe.update(A),Pe=A.material;Pe.visible&&I.push(A,Xe,Pe,re,$t.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||ut.intersectsObject(A))){const Xe=fe.update(A),Pe=A.material;if(ie&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),$t.copy(A.boundingSphere.center)):(Xe.boundingSphere===null&&Xe.computeBoundingSphere(),$t.copy(Xe.boundingSphere.center)),$t.applyMatrix4(A.matrixWorld).applyMatrix4(qt)),Array.isArray(Pe)){const qe=Xe.groups;for(let We=0,$e=qe.length;We<$e;We++){const lt=qe[We],Je=Pe[lt.materialIndex];Je&&Je.visible&&I.push(A,Xe,Je,re,$t.z,lt)}}else Pe.visible&&I.push(A,Xe,Pe,re,$t.z,null)}}const ze=A.children;for(let Xe=0,Pe=ze.length;Xe<Pe;Xe++)os(ze[Xe],q,re,ie)}function il(A,q,re,ie){const{opaque:ae,transmissive:ze,transparent:Xe}=A;L.setupLightsView(re),ht===!0&&Ke.setGlobalState(Y.clippingPlanes,re),ie&&M.viewport(C.copy(ie)),ae.length>0&&ls(ae,q,re),ze.length>0&&ls(ze,q,re),Xe.length>0&&ls(Xe,q,re),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function al(A,q,re,ie){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;if(L.state.transmissionRenderTarget[ie.id]===void 0){const Je=Mt.has("EXT_color_buffer_half_float")||Mt.has("EXT_color_buffer_float");L.state.transmissionRenderTarget[ie.id]=new Jn(1,1,{generateMipmaps:!0,type:Je?hi:bi,minFilter:Os,samples:Math.max(4,U.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:bt.workingColorSpace})}const ze=L.state.transmissionRenderTarget[ie.id],Xe=ie.viewport||C;ze.setSize(Xe.z*Y.transmissionResolutionScale,Xe.w*Y.transmissionResolutionScale);const Pe=Y.getRenderTarget(),qe=Y.getActiveCubeFace(),We=Y.getActiveMipmapLevel();Y.setRenderTarget(ze),Y.getClearColor(be),Ce=Y.getClearAlpha(),Ce<1&&Y.setClearColor(16777215,.5),Y.clear(),Pt&&Ne.render(re);const $e=Y.toneMapping;Y.toneMapping=Zi;const lt=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),L.setupLightsView(ie),ht===!0&&Ke.setGlobalState(Y.clippingPlanes,ie),ls(A,re,ie),he.updateMultisampleRenderTarget(ze),he.updateRenderTargetMipmap(ze),Mt.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let Rt=0,tn=q.length;Rt<tn;Rt++){const Yt=q[Rt],{object:It,geometry:zt,material:He,group:Ln}=Yt;if(He.side===Ma&&It.layers.test(ie.layers)){const mt=He.side;He.side=Qn,He.needsUpdate=!0,Ta(It,re,ie,zt,He,Ln),He.side=mt,He.needsUpdate=!0,Je=!0}}Je===!0&&(he.updateMultisampleRenderTarget(ze),he.updateRenderTargetMipmap(ze))}Y.setRenderTarget(Pe,qe,We),Y.setClearColor(be,Ce),lt!==void 0&&(ie.viewport=lt),Y.toneMapping=$e}function ls(A,q,re){const ie=q.isScene===!0?q.overrideMaterial:null;for(let ae=0,ze=A.length;ae<ze;ae++){const Xe=A[ae],{object:Pe,geometry:qe,group:We}=Xe;let $e=Xe.material;$e.allowOverride===!0&&ie!==null&&($e=ie),Pe.layers.test(re.layers)&&Ta(Pe,q,re,qe,$e,We)}}function Ta(A,q,re,ie,ae,ze){A.onBeforeRender(Y,q,re,ie,ae,ze),A.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),ae.onBeforeRender(Y,q,re,ie,A,ze),ae.transparent===!0&&ae.side===Ma&&ae.forceSinglePass===!1?(ae.side=Qn,ae.needsUpdate=!0,Y.renderBufferDirect(re,q,ie,ae,A,ze),ae.side=rs,ae.needsUpdate=!0,Y.renderBufferDirect(re,q,ie,ae,A,ze),ae.side=Ma):Y.renderBufferDirect(re,q,ie,ae,A,ze),A.onAfterRender(Y,q,re,ie,ae,ze)}function Aa(A,q,re){q.isScene!==!0&&(q=en);const ie=se.get(A),ae=L.state.lights,ze=L.state.shadowsArray,Xe=ae.state.version,Pe=we.getParameters(A,ae.state,ze,q,re,L.state.lightProbeGridArray),qe=we.getProgramCacheKey(Pe);let We=ie.programs;ie.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?q.environment:null,ie.fog=q.fog;const $e=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;ie.envMap=Ae.get(A.envMap||ie.environment,$e),ie.envMapRotation=ie.environment!==null&&A.envMap===null?q.environmentRotation:A.envMapRotation,We===void 0&&(A.addEventListener("dispose",ei),We=new Map,ie.programs=We);let lt=We.get(qe);if(lt!==void 0){if(ie.currentProgram===lt&&ie.lightsStateVersion===Xe)return Ji(A,Pe),lt}else Pe.uniforms=we.getUniforms(A),Q!==null&&A.isNodeMaterial&&Q.build(A,re,Pe),A.onBeforeCompile(Pe,Y),lt=we.acquireProgram(Pe,qe),We.set(qe,lt),ie.uniforms=Pe.uniforms;const Je=ie.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Je.clippingPlanes=Ke.uniform),Ji(A,Pe),ie.needsLights=sl(A),ie.lightsStateVersion=Xe,ie.needsLights&&(Je.ambientLightColor.value=ae.state.ambient,Je.lightProbe.value=ae.state.probe,Je.directionalLights.value=ae.state.directional,Je.directionalLightShadows.value=ae.state.directionalShadow,Je.spotLights.value=ae.state.spot,Je.spotLightShadows.value=ae.state.spotShadow,Je.rectAreaLights.value=ae.state.rectArea,Je.ltc_1.value=ae.state.rectAreaLTC1,Je.ltc_2.value=ae.state.rectAreaLTC2,Je.pointLights.value=ae.state.point,Je.pointLightShadows.value=ae.state.pointShadow,Je.hemisphereLights.value=ae.state.hemi,Je.directionalShadowMatrix.value=ae.state.directionalShadowMatrix,Je.spotLightMatrix.value=ae.state.spotLightMatrix,Je.spotLightMap.value=ae.state.spotLightMap,Je.pointShadowMatrix.value=ae.state.pointShadowMatrix),ie.lightProbeGrid=L.state.lightProbeGridArray.length>0,ie.currentProgram=lt,ie.uniformsList=null,lt}function Qi(A){if(A.uniformsList===null){const q=A.currentProgram.getUniforms();A.uniformsList=kc.seqWithValue(q.seq,A.uniforms)}return A.uniformsList}function Ji(A,q){const re=se.get(A);re.outputColorSpace=q.outputColorSpace,re.batching=q.batching,re.batchingColor=q.batchingColor,re.instancing=q.instancing,re.instancingColor=q.instancingColor,re.instancingMorph=q.instancingMorph,re.skinning=q.skinning,re.morphTargets=q.morphTargets,re.morphNormals=q.morphNormals,re.morphColors=q.morphColors,re.morphTargetsCount=q.morphTargetsCount,re.numClippingPlanes=q.numClippingPlanes,re.numIntersection=q.numClipIntersection,re.vertexAlphas=q.vertexAlphas,re.vertexTangents=q.vertexTangents,re.toneMapping=q.toneMapping}function cs(A,q){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;D.setFromMatrixPosition(q.matrixWorld);for(let re=0,ie=A.length;re<ie;re++){const ae=A[re];if(ae.texture!==null&&ae.boundingBox.containsPoint(D))return ae}return null}function Ra(A,q,re,ie,ae){q.isScene!==!0&&(q=en),he.resetTextureUnits();const ze=q.fog,Xe=ie.isMeshStandardMaterial||ie.isMeshLambertMaterial||ie.isMeshPhongMaterial?q.environment:null,Pe=$===null?Y.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:bt.workingColorSpace,qe=ie.isMeshStandardMaterial||ie.isMeshLambertMaterial&&!ie.envMap||ie.isMeshPhongMaterial&&!ie.envMap,We=Ae.get(ie.envMap||Xe,qe),$e=ie.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,lt=!!re.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),Je=!!re.morphAttributes.position,Rt=!!re.morphAttributes.normal,tn=!!re.morphAttributes.color;let Yt=Zi;ie.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Yt=Y.toneMapping);const It=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,zt=It!==void 0?It.length:0,He=se.get(ie),Ln=L.state.lights;if(ht===!0&&(at===!0||A!==le)){const Nt=A===le&&ie.id===ve;Ke.setState(ie,A,Nt)}let mt=!1;ie.version===He.__version?(He.needsLights&&He.lightsStateVersion!==Ln.state.version||He.outputColorSpace!==Pe||ae.isBatchedMesh&&He.batching===!1||!ae.isBatchedMesh&&He.batching===!0||ae.isBatchedMesh&&He.batchingColor===!0&&ae.colorTexture===null||ae.isBatchedMesh&&He.batchingColor===!1&&ae.colorTexture!==null||ae.isInstancedMesh&&He.instancing===!1||!ae.isInstancedMesh&&He.instancing===!0||ae.isSkinnedMesh&&He.skinning===!1||!ae.isSkinnedMesh&&He.skinning===!0||ae.isInstancedMesh&&He.instancingColor===!0&&ae.instanceColor===null||ae.isInstancedMesh&&He.instancingColor===!1&&ae.instanceColor!==null||ae.isInstancedMesh&&He.instancingMorph===!0&&ae.morphTexture===null||ae.isInstancedMesh&&He.instancingMorph===!1&&ae.morphTexture!==null||He.envMap!==We||ie.fog===!0&&He.fog!==ze||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==Ke.numPlanes||He.numIntersection!==Ke.numIntersection)||He.vertexAlphas!==$e||He.vertexTangents!==lt||He.morphTargets!==Je||He.morphNormals!==Rt||He.morphColors!==tn||He.toneMapping!==Yt||He.morphTargetsCount!==zt||!!He.lightProbeGrid!=L.state.lightProbeGridArray.length>0)&&(mt=!0):(mt=!0,He.__version=ie.version);let vn=He.currentProgram;mt===!0&&(vn=Aa(ie,q,ae),Q&&ie.isNodeMaterial&&Q.onUpdateProgram(ie,vn,He));let ti=!1,Ti=!1,ni=!1;const Bt=vn.getUniforms(),nn=He.uniforms;if(M.useProgram(vn.program)&&(ti=!0,Ti=!0,ni=!0),ie.id!==ve&&(ve=ie.id,Ti=!0),He.needsLights){const Nt=cs(L.state.lightProbeGridArray,ae);He.lightProbeGrid!==Nt&&(He.lightProbeGrid=Nt,Ti=!0)}if(ti||le!==A){M.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Bt.setValue(W,"projectionMatrix",A.projectionMatrix),Bt.setValue(W,"viewMatrix",A.matrixWorldInverse);const zi=Bt.map.cameraPosition;zi!==void 0&&zi.setValue(W,Kt.setFromMatrixPosition(A.matrixWorld)),U.logarithmicDepthBuffer&&Bt.setValue(W,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&Bt.setValue(W,"isOrthographic",A.isOrthographicCamera===!0),le!==A&&(le=A,Ti=!0,ni=!0)}if(He.needsLights&&(Ln.state.directionalShadowMap.length>0&&Bt.setValue(W,"directionalShadowMap",Ln.state.directionalShadowMap,he),Ln.state.spotShadowMap.length>0&&Bt.setValue(W,"spotShadowMap",Ln.state.spotShadowMap,he),Ln.state.pointShadowMap.length>0&&Bt.setValue(W,"pointShadowMap",Ln.state.pointShadowMap,he)),ae.isSkinnedMesh){Bt.setOptional(W,ae,"bindMatrix"),Bt.setOptional(W,ae,"bindMatrixInverse");const Nt=ae.skeleton;Nt&&(Nt.boneTexture===null&&Nt.computeBoneTexture(),Bt.setValue(W,"boneTexture",Nt.boneTexture,he))}ae.isBatchedMesh&&(Bt.setOptional(W,ae,"batchingTexture"),Bt.setValue(W,"batchingTexture",ae._matricesTexture,he),Bt.setOptional(W,ae,"batchingIdTexture"),Bt.setValue(W,"batchingIdTexture",ae._indirectTexture,he),Bt.setOptional(W,ae,"batchingColorTexture"),ae._colorsTexture!==null&&Bt.setValue(W,"batchingColorTexture",ae._colorsTexture,he));const Ai=re.morphAttributes;if((Ai.position!==void 0||Ai.normal!==void 0||Ai.color!==void 0)&&G.update(ae,re,vn),(Ti||He.receiveShadow!==ae.receiveShadow)&&(He.receiveShadow=ae.receiveShadow,Bt.setValue(W,"receiveShadow",ae.receiveShadow)),(ie.isMeshStandardMaterial||ie.isMeshLambertMaterial||ie.isMeshPhongMaterial)&&ie.envMap===null&&q.environment!==null&&(nn.envMapIntensity.value=q.environmentIntensity),nn.dfgLUT!==void 0&&(nn.dfgLUT.value=hA()),Ti){if(Bt.setValue(W,"toneMappingExposure",Y.toneMappingExposure),He.needsLights&&hn(nn,ni),ze&&ie.fog===!0&&Fe.refreshFogUniforms(nn,ze),Fe.refreshMaterialUniforms(nn,ie,de,Me,L.state.transmissionRenderTarget[A.id]),He.needsLights&&He.lightProbeGrid){const Nt=He.lightProbeGrid;nn.probesSH.value=Nt.texture,nn.probesMin.value.copy(Nt.boundingBox.min),nn.probesMax.value.copy(Nt.boundingBox.max),nn.probesResolution.value.copy(Nt.resolution)}kc.upload(W,Qi(He),nn,he)}if(ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(kc.upload(W,Qi(He),nn,he),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&Bt.setValue(W,"center",ae.center),Bt.setValue(W,"modelViewMatrix",ae.modelViewMatrix),Bt.setValue(W,"normalMatrix",ae.normalMatrix),Bt.setValue(W,"modelMatrix",ae.matrixWorld),ie.uniformsGroups!==void 0){const Nt=ie.uniformsGroups;for(let zi=0,Ca=Nt.length;zi<Ca;zi++){const us=Nt[zi];ye.update(us,vn),ye.bind(us,vn)}}return vn}function hn(A,q){A.ambientLightColor.needsUpdate=q,A.lightProbe.needsUpdate=q,A.directionalLights.needsUpdate=q,A.directionalLightShadows.needsUpdate=q,A.pointLights.needsUpdate=q,A.pointLightShadows.needsUpdate=q,A.spotLights.needsUpdate=q,A.spotLightShadows.needsUpdate=q,A.rectAreaLights.needsUpdate=q,A.hemisphereLights.needsUpdate=q}function sl(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return $},this.setRenderTargetTextures=function(A,q,re){const ie=se.get(A);ie.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,ie.__autoAllocateDepthBuffer===!1&&(ie.__useRenderToTexture=!1),se.get(A.texture).__webglTexture=q,se.get(A.depthTexture).__webglTexture=ie.__autoAllocateDepthBuffer?void 0:re,ie.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,q){const re=se.get(A);re.__webglFramebuffer=q,re.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(A,q=0,re=0){$=A,P=q,F=re;let ie=null,ae=!1,ze=!1;if(A){const Pe=se.get(A);if(Pe.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(W.FRAMEBUFFER,Pe.__webglFramebuffer),C.copy(A.viewport),V.copy(A.scissor),_e=A.scissorTest,M.viewport(C),M.scissor(V),M.setScissorTest(_e),ve=-1;return}else if(Pe.__webglFramebuffer===void 0)he.setupRenderTarget(A);else if(Pe.__hasExternalTextures)he.rebindTextures(A,se.get(A.texture).__webglTexture,se.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const $e=A.depthTexture;if(Pe.__boundDepthTexture!==$e){if($e!==null&&se.has($e)&&(A.width!==$e.image.width||A.height!==$e.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");he.setupDepthRenderbuffer(A)}}const qe=A.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(ze=!0);const We=se.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(We[q])?ie=We[q][re]:ie=We[q],ae=!0):A.samples>0&&he.useMultisampledRTT(A)===!1?ie=se.get(A).__webglMultisampledFramebuffer:Array.isArray(We)?ie=We[re]:ie=We,C.copy(A.viewport),V.copy(A.scissor),_e=A.scissorTest}else C.copy(Ge).multiplyScalar(de).floor(),V.copy(Ot).multiplyScalar(de).floor(),_e=it;if(re!==0&&(ie=me),M.bindFramebuffer(W.FRAMEBUFFER,ie)&&M.drawBuffers(A,ie),M.viewport(C),M.scissor(V),M.setScissorTest(_e),ae){const Pe=se.get(A.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+q,Pe.__webglTexture,re)}else if(ze){const Pe=q;for(let qe=0;qe<A.textures.length;qe++){const We=se.get(A.textures[qe]);W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0+qe,We.__webglTexture,re,Pe)}}else if(A!==null&&re!==0){const Pe=se.get(A.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Pe.__webglTexture,re)}ve=-1},this.readRenderTargetPixels=function(A,q,re,ie,ae,ze,Xe,Pe=0){if(!(A&&A.isWebGLRenderTarget)){At("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qe=se.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Xe!==void 0&&(qe=qe[Xe]),qe){M.bindFramebuffer(W.FRAMEBUFFER,qe);try{const We=A.textures[Pe],$e=We.format,lt=We.type;if(A.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+Pe),!U.textureFormatReadable($e)){At("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!U.textureTypeReadable(lt)){At("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=A.width-ie&&re>=0&&re<=A.height-ae&&W.readPixels(q,re,ie,ae,Re.convert($e),Re.convert(lt),ze)}finally{const We=$!==null?se.get($).__webglFramebuffer:null;M.bindFramebuffer(W.FRAMEBUFFER,We)}}},this.readRenderTargetPixelsAsync=async function(A,q,re,ie,ae,ze,Xe,Pe=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let qe=se.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Xe!==void 0&&(qe=qe[Xe]),qe)if(q>=0&&q<=A.width-ie&&re>=0&&re<=A.height-ae){M.bindFramebuffer(W.FRAMEBUFFER,qe);const We=A.textures[Pe],$e=We.format,lt=We.type;if(A.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+Pe),!U.textureFormatReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!U.textureTypeReadable(lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Je=W.createBuffer();W.bindBuffer(W.PIXEL_PACK_BUFFER,Je),W.bufferData(W.PIXEL_PACK_BUFFER,ze.byteLength,W.STREAM_READ),W.readPixels(q,re,ie,ae,Re.convert($e),Re.convert(lt),0);const Rt=$!==null?se.get($).__webglFramebuffer:null;M.bindFramebuffer(W.FRAMEBUFFER,Rt);const tn=W.fenceSync(W.SYNC_GPU_COMMANDS_COMPLETE,0);return W.flush(),await LM(W,tn,4),W.bindBuffer(W.PIXEL_PACK_BUFFER,Je),W.getBufferSubData(W.PIXEL_PACK_BUFFER,0,ze),W.deleteBuffer(Je),W.deleteSync(tn),ze}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,q=null,re=0){const ie=Math.pow(2,-re),ae=Math.floor(A.image.width*ie),ze=Math.floor(A.image.height*ie),Xe=q!==null?q.x:0,Pe=q!==null?q.y:0;he.setTexture2D(A,0),W.copyTexSubImage2D(W.TEXTURE_2D,re,0,0,Xe,Pe,ae,ze),M.unbindTexture()},this.copyTextureToTexture=function(A,q,re=null,ie=null,ae=0,ze=0){let Xe,Pe,qe,We,$e,lt,Je,Rt,tn;const Yt=A.isCompressedTexture?A.mipmaps[ze]:A.image;if(re!==null)Xe=re.max.x-re.min.x,Pe=re.max.y-re.min.y,qe=re.isBox3?re.max.z-re.min.z:1,We=re.min.x,$e=re.min.y,lt=re.isBox3?re.min.z:0;else{const nn=Math.pow(2,-ae);Xe=Math.floor(Yt.width*nn),Pe=Math.floor(Yt.height*nn),A.isDataArrayTexture?qe=Yt.depth:A.isData3DTexture?qe=Math.floor(Yt.depth*nn):qe=1,We=0,$e=0,lt=0}ie!==null?(Je=ie.x,Rt=ie.y,tn=ie.z):(Je=0,Rt=0,tn=0);const It=Re.convert(q.format),zt=Re.convert(q.type);let He;q.isData3DTexture?(he.setTexture3D(q,0),He=W.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(he.setTexture2DArray(q,0),He=W.TEXTURE_2D_ARRAY):(he.setTexture2D(q,0),He=W.TEXTURE_2D),M.activeTexture(W.TEXTURE0),M.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,q.flipY),M.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),M.pixelStorei(W.UNPACK_ALIGNMENT,q.unpackAlignment);const Ln=M.getParameter(W.UNPACK_ROW_LENGTH),mt=M.getParameter(W.UNPACK_IMAGE_HEIGHT),vn=M.getParameter(W.UNPACK_SKIP_PIXELS),ti=M.getParameter(W.UNPACK_SKIP_ROWS),Ti=M.getParameter(W.UNPACK_SKIP_IMAGES);M.pixelStorei(W.UNPACK_ROW_LENGTH,Yt.width),M.pixelStorei(W.UNPACK_IMAGE_HEIGHT,Yt.height),M.pixelStorei(W.UNPACK_SKIP_PIXELS,We),M.pixelStorei(W.UNPACK_SKIP_ROWS,$e),M.pixelStorei(W.UNPACK_SKIP_IMAGES,lt);const ni=A.isDataArrayTexture||A.isData3DTexture,Bt=q.isDataArrayTexture||q.isData3DTexture;if(A.isDepthTexture){const nn=se.get(A),Ai=se.get(q),Nt=se.get(nn.__renderTarget),zi=se.get(Ai.__renderTarget);M.bindFramebuffer(W.READ_FRAMEBUFFER,Nt.__webglFramebuffer),M.bindFramebuffer(W.DRAW_FRAMEBUFFER,zi.__webglFramebuffer);for(let Ca=0;Ca<qe;Ca++)ni&&(W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,se.get(A).__webglTexture,ae,lt+Ca),W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,se.get(q).__webglTexture,ze,tn+Ca)),W.blitFramebuffer(We,$e,Xe,Pe,Je,Rt,Xe,Pe,W.DEPTH_BUFFER_BIT,W.NEAREST);M.bindFramebuffer(W.READ_FRAMEBUFFER,null),M.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else if(ae!==0||A.isRenderTargetTexture||se.has(A)){const nn=se.get(A),Ai=se.get(q);M.bindFramebuffer(W.READ_FRAMEBUFFER,Se),M.bindFramebuffer(W.DRAW_FRAMEBUFFER,J);for(let Nt=0;Nt<qe;Nt++)ni?W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,nn.__webglTexture,ae,lt+Nt):W.framebufferTexture2D(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,nn.__webglTexture,ae),Bt?W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,Ai.__webglTexture,ze,tn+Nt):W.framebufferTexture2D(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Ai.__webglTexture,ze),ae!==0?W.blitFramebuffer(We,$e,Xe,Pe,Je,Rt,Xe,Pe,W.COLOR_BUFFER_BIT,W.NEAREST):Bt?W.copyTexSubImage3D(He,ze,Je,Rt,tn+Nt,We,$e,Xe,Pe):W.copyTexSubImage2D(He,ze,Je,Rt,We,$e,Xe,Pe);M.bindFramebuffer(W.READ_FRAMEBUFFER,null),M.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else Bt?A.isDataTexture||A.isData3DTexture?W.texSubImage3D(He,ze,Je,Rt,tn,Xe,Pe,qe,It,zt,Yt.data):q.isCompressedArrayTexture?W.compressedTexSubImage3D(He,ze,Je,Rt,tn,Xe,Pe,qe,It,Yt.data):W.texSubImage3D(He,ze,Je,Rt,tn,Xe,Pe,qe,It,zt,Yt):A.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,ze,Je,Rt,Xe,Pe,It,zt,Yt.data):A.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,ze,Je,Rt,Yt.width,Yt.height,It,Yt.data):W.texSubImage2D(W.TEXTURE_2D,ze,Je,Rt,Xe,Pe,It,zt,Yt);M.pixelStorei(W.UNPACK_ROW_LENGTH,Ln),M.pixelStorei(W.UNPACK_IMAGE_HEIGHT,mt),M.pixelStorei(W.UNPACK_SKIP_PIXELS,vn),M.pixelStorei(W.UNPACK_SKIP_ROWS,ti),M.pixelStorei(W.UNPACK_SKIP_IMAGES,Ti),ze===0&&q.generateMipmaps&&W.generateMipmap(He),M.unbindTexture()},this.initRenderTarget=function(A){se.get(A).__webglFramebuffer===void 0&&he.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?he.setTextureCube(A,0):A.isData3DTexture?he.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?he.setTexture2DArray(A,0):he.setTexture2D(A,0),M.unbindTexture()},this.resetState=function(){P=0,F=0,$=null,M.reset(),Ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=bt._getDrawingBufferColorSpace(e),i.unpackColorSpace=bt._getUnpackColorSpace()}}const Xc={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class tl{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const pA=new $d(-1,1,1,-1,0,1);class mA extends $n{constructor(){super(),this.setAttribute("position",new Sn([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Sn([0,2,0,0,2,0],2))}}const gA=new mA;class Iv{constructor(e){this._mesh=new In(gA,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,pA)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class _A extends tl{constructor(e,i="tDiffuse"){super(),this.textureID=i,this.uniforms=null,this.material=null,e instanceof Bn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=$c.clone(e.uniforms),this.material=new Bn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Iv(this.material)}render(e,i,s){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=s.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Z_ extends tl{constructor(e,i){super(),this.scene=e,this.camera=i,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,i,s){const l=e.getContext(),c=e.state;c.buffers.color.setMask(!1),c.buffers.depth.setMask(!1),c.buffers.color.setLocked(!0),c.buffers.depth.setLocked(!0);let h,p;this.inverse?(h=0,p=1):(h=1,p=0),c.buffers.stencil.setTest(!0),c.buffers.stencil.setOp(l.REPLACE,l.REPLACE,l.REPLACE),c.buffers.stencil.setFunc(l.ALWAYS,h,4294967295),c.buffers.stencil.setClear(p),c.buffers.stencil.setLocked(!0),e.setRenderTarget(s),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),c.buffers.color.setLocked(!1),c.buffers.depth.setLocked(!1),c.buffers.color.setMask(!0),c.buffers.depth.setMask(!0),c.buffers.stencil.setLocked(!1),c.buffers.stencil.setFunc(l.EQUAL,1,4294967295),c.buffers.stencil.setOp(l.KEEP,l.KEEP,l.KEEP),c.buffers.stencil.setLocked(!0)}}class vA extends tl{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class xA{constructor(e,i){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),i===void 0){const s=e.getSize(new ot);this._width=s.width,this._height=s.height,i=new Jn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:hi}),i.texture.name="EffectComposer.rt1"}else this._width=i.width,this._height=i.height;this.renderTarget1=i,this.renderTarget2=i.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new _A(Xc),this.copyPass.material.blending=Yi,this.timer=new my}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,i){this.passes.splice(i,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const i=this.passes.indexOf(e);i!==-1&&this.passes.splice(i,1)}isLastEnabledPass(e){for(let i=e+1;i<this.passes.length;i++)if(this.passes[i].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());const i=this.renderer.getRenderTarget();let s=!1;for(let l=0,c=this.passes.length;l<c;l++){const h=this.passes[l];if(h.enabled!==!1){if(h.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(l),h.render(this.renderer,this.writeBuffer,this.readBuffer,e,s),h.needsSwap){if(s){const p=this.renderer.getContext(),m=this.renderer.state.buffers.stencil;m.setFunc(p.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),m.setFunc(p.EQUAL,1,4294967295)}this.swapBuffers()}Z_!==void 0&&(h instanceof Z_?s=!0:h instanceof vA&&(s=!1))}}this.renderer.setRenderTarget(i)}reset(e){if(e===void 0){const i=this.renderer.getSize(new ot);this._pixelRatio=this.renderer.getPixelRatio(),this._width=i.width,this._height=i.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,i){this._width=e,this._height=i;const s=this._width*this._pixelRatio,l=this._height*this._pixelRatio;this.renderTarget1.setSize(s,l),this.renderTarget2.setSize(s,l);for(let c=0;c<this.passes.length;c++)this.passes[c].setSize(s,l)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class SA extends tl{constructor(e,i,s=null,l=null,c=null){super(),this.scene=e,this.camera=i,this.overrideMaterial=s,this.clearColor=l,this.clearAlpha=c,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new vt}render(e,i,s){const l=e.autoClear;e.autoClear=!1;let c,h;this.overrideMaterial!==null&&(h=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(c=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:s),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(c),this.overrideMaterial!==null&&(this.scene.overrideMaterial=h),e.autoClear=l}}const MA={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new vt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Vr extends tl{constructor(e,i=1,s,l){super(),this.strength=i,this.radius=s,this.threshold=l,this.resolution=e!==void 0?new ot(e.x,e.y):new ot(256,256),this.clearColor=new vt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let c=Math.round(this.resolution.x/2),h=Math.round(this.resolution.y/2);this.renderTargetBright=new Jn(c,h,{type:hi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let v=0;v<this.nMips;v++){const S=new Jn(c,h,{type:hi});S.texture.name="UnrealBloomPass.h"+v,S.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(S);const g=new Jn(c,h,{type:hi});g.texture.name="UnrealBloomPass.v"+v,g.texture.generateMipmaps=!1,this.renderTargetsVertical.push(g),c=Math.round(c/2),h=Math.round(h/2)}const p=MA;this.highPassUniforms=$c.clone(p.uniforms),this.highPassUniforms.luminosityThreshold.value=l,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Bn({uniforms:this.highPassUniforms,vertexShader:p.vertexShader,fragmentShader:p.fragmentShader}),this.separableBlurMaterials=[];const m=[6,10,14,18,22];c=Math.round(this.resolution.x/2),h=Math.round(this.resolution.y/2);for(let v=0;v<this.nMips;v++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(m[v])),this.separableBlurMaterials[v].uniforms.invSize.value=new ot(1/c,1/h),c=Math.round(c/2),h=Math.round(h/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=i,this.compositeMaterial.uniforms.bloomRadius.value=.1;const d=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=d,this.bloomTintColors=[new j(1,1,1),new j(1,1,1),new j(1,1,1),new j(1,1,1),new j(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=$c.clone(Xc.uniforms),this.blendMaterial=new Bn({uniforms:this.copyUniforms,vertexShader:Xc.vertexShader,fragmentShader:Xc.fragmentShader,premultipliedAlpha:!0,blending:Pr,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new vt,this._oldClearAlpha=1,this._basic=new Sa,this._fsQuad=new Iv(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,i){let s=Math.round(e/2),l=Math.round(i/2);this.renderTargetBright.setSize(s,l);for(let c=0;c<this.nMips;c++)this.renderTargetsHorizontal[c].setSize(s,l),this.renderTargetsVertical[c].setSize(s,l),this.separableBlurMaterials[c].uniforms.invSize.value=new ot(1/s,1/l),s=Math.round(s/2),l=Math.round(l/2)}render(e,i,s,l,c){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const h=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),c&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=s.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=s.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let p=this.renderTargetBright;for(let m=0;m<this.nMips;m++)this._fsQuad.material=this.separableBlurMaterials[m],this.separableBlurMaterials[m].uniforms.colorTexture.value=p.texture,this.separableBlurMaterials[m].uniforms.direction.value=Vr.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[m]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[m].uniforms.colorTexture.value=this.renderTargetsHorizontal[m].texture,this.separableBlurMaterials[m].uniforms.direction.value=Vr.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[m]),e.clear(),this._fsQuad.render(e),p=this.renderTargetsVertical[m];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,c&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(s),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=h}_getSeparableBlurMaterial(e){const i=[],s=e/3;for(let l=0;l<e;l++)i.push(.39894*Math.exp(-.5*l*l/(s*s))/s);return new Bn({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ot(.5,.5)},direction:{value:new ot(.5,.5)},gaussianCoefficients:{value:i}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new Bn({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}}Vr.BlurDirectionX=new ot(1,0);Vr.BlurDirectionY=new ot(0,1);/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zv=(...o)=>o.filter((e,i,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===i).join(" ").trim();/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yA=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EA=o=>o.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,i,s)=>s?s.toUpperCase():i.toLowerCase());/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K_=o=>{const e=EA(o);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Qh={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bA=o=>{for(const e in o)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},TA=Et.createContext({}),AA=()=>Et.useContext(TA),RA=Et.forwardRef(({color:o,size:e,strokeWidth:i,absoluteStrokeWidth:s,className:l="",children:c,iconNode:h,...p},m)=>{const{size:d=24,strokeWidth:v=2,absoluteStrokeWidth:S=!1,color:g="currentColor",className:E=""}=AA()??{},T=s??S?Number(i??v)*24/Number(e??d):i??v;return Et.createElement("svg",{ref:m,...Qh,width:e??d??Qh.width,height:e??d??Qh.height,stroke:o??g,strokeWidth:T,className:zv("lucide",E,l),...!c&&!bA(p)&&{"aria-hidden":"true"},...p},[...h.map(([w,y])=>Et.createElement(w,y)),...Array.isArray(c)?c:[c]])});/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nl=(o,e)=>{const i=Et.forwardRef(({className:s,...l},c)=>Et.createElement(RA,{ref:c,iconNode:e,className:zv(`lucide-${yA(K_(o))}`,`lucide-${o}`,s),...l}));return i.displayName=K_(o),i};/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CA=[["path",{d:"M12 19v3",key:"npa21l"}],["path",{d:"M15 9.34V5a3 3 0 0 0-5.68-1.33",key:"1gzdoj"}],["path",{d:"M16.95 16.95A7 7 0 0 1 5 12v-2",key:"cqa7eg"}],["path",{d:"M18.89 13.23A7 7 0 0 0 19 12v-2",key:"16hl24"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M9 9v3a3 3 0 0 0 5.12 2.12",key:"r2i35w"}]],wA=nl("mic-off",CA);/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DA=[["path",{d:"M12 19v3",key:"npa21l"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["rect",{x:"9",y:"2",width:"6",height:"13",rx:"3",key:"s6n7sd"}]],UA=nl("mic",DA);/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LA=[["path",{d:"M16.247 7.761a6 6 0 0 1 0 8.478",key:"1fwjs5"}],["path",{d:"M19.075 4.933a10 10 0 0 1 0 14.134",key:"ehdyv1"}],["path",{d:"M4.925 19.067a10 10 0 0 1 0-14.134",key:"1q22gi"}],["path",{d:"M7.753 16.239a6 6 0 0 1 0-8.478",key:"r2q7qm"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],Q_=nl("radio",LA);/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NA=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],OA=nl("volume-2",NA);/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PA=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],IA=nl("volume-x",PA),zA="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",BA="Kanpur",J_="wake up jarvis",FA=["shutdown jarvis","shut down jarvis","power down jarvis","shut off jarvis","turn off jarvis"],HA=["jarvis mic off","jarvis turn off the mic","jarvis turn off mic","mic off jarvis","turn off the mic","turn off mic","stop listening"];function GA(o){return o.toLowerCase().replace(/['']/g,"").replace(/[^a-z0-9\s]/g," ").replace(/\s+/g," ").trim()}async function kr(o,e={},i=12e3){const s=new AbortController,l=setTimeout(()=>s.abort(),i);try{return await fetch(o,{...e,signal:s.signal})}finally{clearTimeout(l)}}const VA={0:"clear sky",1:"mostly clear",2:"partly cloudy",3:"overcast",45:"foggy",48:"depositing rime fog",51:"light drizzle",53:"moderate drizzle",55:"dense drizzle",61:"light rain",63:"moderate rain",65:"heavy rain",71:"light snow",73:"moderate snow",75:"heavy snow",80:"light rain showers",81:"moderate rain showers",82:"violent rain showers",95:"thunderstorm",96:"thunderstorm with light hail",99:"thunderstorm with heavy hail"};async function kA(o){var e;try{const l=(e=(await(await kr(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(o)}&count=1`)).json()).results)==null?void 0:e[0];if(!l)return null;const p=(await(await kr(`https://api.open-meteo.com/v1/forecast?latitude=${l.latitude}&longitude=${l.longitude}&current_weather=true`)).json()).current_weather;if(!p)return null;const m=VA[p.weathercode]||"unusual conditions";return`It's currently ${Math.round(p.temperature)}°C with ${m} in ${l.name}, wind at ${Math.round(p.windspeed)} km/h, Aman.`}catch{return null}}async function XA(o,e,i){var s;try{const h=(s=(await(await kr(`https://api.frankfurter.app/latest?amount=${o}&from=${e.toUpperCase()}&to=${i.toUpperCase()}`)).json()).rates)==null?void 0:s[i.toUpperCase()];return h===void 0?null:`${o} ${e.toUpperCase()} is about ${h.toFixed(2)} ${i.toUpperCase()}, Aman.`}catch{return null}}const WA={btc:"bitcoin",bitcoin:"bitcoin",eth:"ethereum",ethereum:"ethereum",sol:"solana",solana:"solana",doge:"dogecoin",dogecoin:"dogecoin",xrp:"ripple",ripple:"ripple",bnb:"binancecoin",binancecoin:"binancecoin",ada:"cardano",cardano:"cardano",matic:"matic-network",polygon:"matic-network",usdt:"tether",tether:"tether",ltc:"litecoin",litecoin:"litecoin"};async function qA(o,e="usd"){var i;try{const s=WA[o.toLowerCase()]||o.toLowerCase(),l=e.toLowerCase(),p=(i=(await(await kr(`https://api.coingecko.com/api/v3/simple/price?ids=${encodeURIComponent(s)}&vs_currencies=${encodeURIComponent(l)}`)).json())[s])==null?void 0:i[l];return p===void 0?null:`${s.charAt(0).toUpperCase()+s.slice(1)} is at ${p.toLocaleString()} ${l.toUpperCase()} right now, Aman.`}catch{return null}}async function YA(){try{const i=(await(await kr("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_day.geojson")).json()).features||[];return i.length?`In the last 24 hours: ${i.slice(0,3).map(l=>`magnitude ${l.properties.mag.toFixed(1)} near ${l.properties.place}`).join("; ")}, Aman.`:"No significant earthquakes, magnitude 4.5 or above, in the last 24 hours, Aman."}catch{return null}}const ZA=[{type:"function",function:{name:"get_weather",description:"Get real-time current weather for a city. Use whenever the user asks about weather, temperature, rain, or what to wear outside.",parameters:{type:"object",properties:{location:{type:"string",description:"City name. If the user didn't say one, omit this."}}}}},{type:"function",function:{name:"convert_currency",description:"Convert an amount from one currency to another using real exchange rates.",parameters:{type:"object",properties:{amount:{type:"number",description:"Amount to convert, default 1."},from:{type:"string",description:"3-letter source currency code."},to:{type:"string",description:"3-letter target currency code."}},required:["from","to"]}}},{type:"function",function:{name:"get_crypto_price",description:"Get the real-time price of a cryptocurrency.",parameters:{type:"object",properties:{coin:{type:"string",description:"Coin name or ticker, e.g. bitcoin, btc, ethereum."},vsCurrency:{type:"string",description:"3-letter currency, default usd."}},required:["coin"]}}},{type:"function",function:{name:"get_earthquake_alerts",description:"Get real recent significant earthquake activity worldwide (magnitude 4.5+, past 24 hours).",parameters:{type:"object",properties:{}}}}];function KA(){const o=Et.useRef(null),e=Et.useRef({intensity:0,active:!1,unlocked:!1}),[i,s]=Et.useState(!1),[l,c]=Et.useState('AWAITING WAKE // SAY "WAKE UP JARVIS"'),[h,p]=Et.useState([{role:"ultron",text:"Systems dormant. Speak the wake command, Aman."}]),[m,d]=Et.useState(""),[v,S]=Et.useState(!1),[g,E]=Et.useState(!1),[T,w]=Et.useState(!1),[y,x]=Et.useState(!1),[z,H]=Et.useState(!1),[D,I]=Et.useState(""),L=Et.useRef([]),O=Et.useRef(null),b=Et.useRef(null),N=Et.useRef(!1);N.current=g,Et.useEffect(()=>{const le=o.current;if(!le)return;const C=le.clientWidth,V=le.clientHeight,_e=new ZM,be=new Ei(50,C/V,.1,100);be.position.z=5.4;const Ce=new dA({antialias:!0,alpha:!0});Ce.setSize(C,V),Ce.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),le.appendChild(Ce.domElement);const ee=new xA(Ce);ee.addPass(new SA(_e,be));const Me=new Vr(new ot(C,V),1.1,.6,.15);ee.addPass(Me);const de=12744223,De=new Lr;_e.add(De);function je(Ne,G,Te,pe,Re){const Ie=7+Math.floor(Math.random()*5);let ye=G,ke=pe,Ve=new j(Math.cos(ke)*ye,Math.sin(ke)*ye,(Math.random()-.5)*.1);for(let Vt=0;Vt<Ie;Vt++){ye+=(Te-G)/Ie,ke+=(Math.random()-.5)*.4;const Ut=(Math.random()-.5)*.18*(ye/Te),Un=new j(Math.cos(ke)*ye,Math.sin(ke)*ye,Ut);Ne.push(Ve,Un),Re<2&&Vt>2&&Math.random()<.32&&je(Ne,ye,ye+(Te-G)*(.3+Math.random()*.3),ke+(Math.random()-.5)*1.4,Re+1),Ve=Un}}const Ge=[],Ot=70;for(let Ne=0;Ne<Ot;Ne++){const G=Ne/Ot*Math.PI*2+(Math.random()-.5)*.4;je(Ge,.32,1.45+Math.random()*.3,G,0)}const it=new vt(16773846),ut=new vt(12077087),ht=1.9,at=new Float32Array(Ge.length*3);for(let Ne=0;Ne<Ge.length;Ne++){const G=Ge[Ne],Te=Math.min(1,Math.sqrt(G.x*G.x+G.y*G.y)/ht),pe=it.clone().lerp(ut,Te);at[Ne*3]=pe.r,at[Ne*3+1]=pe.g,at[Ne*3+2]=pe.b}const qt=new $n().setFromPoints(Ge);qt.setAttribute("color",new Pi(at,3));const Kt=new Ev({vertexColors:!0,transparent:!0,opacity:.85,blending:Pr,depthWrite:!1}),$t=new sy(qt,Kt);De.add($t);const en=new jd(.2,32),Pt=new Sa({color:0}),Qt=new In(en,Pt);Qt.position.z=.03,De.add(Qt);const W=new Nr(.22,.012,6,48),Dt=new Sa({color:16766617,transparent:!0,opacity:.9,blending:Pr,depthWrite:!1}),Mt=new In(W,Dt);Mt.position.z=.025,De.add(Mt);const U=new Nr(1.7,.055,8,100),M=new Sa({color:de,transparent:!0,opacity:.85}),K=new In(U,M);De.add(K);const se=new Nr(1.78,.035,8,100),he=new Sa({color:de,transparent:!0,opacity:.55}),Ae=new In(se,he);Ae.rotation.x=.2,Ae.rotation.y=.08,Ae.position.x=-.05,De.add(Ae);const Ue=new Nr(1.95,.012,6,100),ue=new Sa({color:de,transparent:!0,opacity:.5,blending:Pr,depthWrite:!1}),fe=new In(Ue,ue);fe.rotation.x=1.15,fe.rotation.z=.3,De.add(fe);const we=new Lr,Fe=64;for(let Ne=0;Ne<Fe;Ne++){if(Math.random()<.25)continue;const G=Ne/Fe*Math.PI*2,Te=new Wr(.035,.1,.02),pe=new Sa({color:16766617,transparent:!0,opacity:.8}),Re=new In(Te,pe);Re.position.set(Math.cos(G)*1.75,Math.sin(G)*1.75,0),Re.rotation.z=G,we.add(Re)}De.add(we);const Oe=new _y;let Le;function Ke(){Le=requestAnimationFrame(Ke);const Ne=Oe.getElapsedTime(),G=e.current;De.rotation.z=Ne*.06,De.rotation.y=Math.sin(Ne*.15)*.08;const Te=1+Math.sin(Ne*2)*.02+G.intensity*.15;De.scale.setScalar(Te);const pe=.75+.25*Math.sin(Ne*3),Re=G.active?G.intensity*.5:0;Kt.opacity=Math.min(1,.7*pe+Re),Me.strength=1.1+(G.unlocked?.3:0)+Re*.6,K.rotation.z=-Ne*.03,Ae.rotation.z=Ne*.04,fe.rotation.y=Ne*.05,Mt.rotation.z=Ne*.15,we.rotation.z=-Ne*.03,ee.render()}Ke();function Qe(){const Ne=le.clientWidth,G=le.clientHeight;be.aspect=Ne/G,be.updateProjectionMatrix(),Ce.setSize(Ne,G),ee.setSize(Ne,G)}return window.addEventListener("resize",Qe),()=>{cancelAnimationFrame(Le),window.removeEventListener("resize",Qe),Ce.dispose(),qt.dispose(),Kt.dispose(),en.dispose(),Pt.dispose(),W.dispose(),Dt.dispose(),U.dispose(),M.dispose(),se.dispose(),he.dispose(),Ue.dispose(),ue.dispose(),we.children.forEach(Ne=>{Ne.geometry.dispose(),Ne.material.dispose()}),le.contains(Ce.domElement)&&le.removeChild(Ce.domElement)}},[]);const Y=Et.useCallback(le=>{if(!(N.current||typeof window>"u"||!window.speechSynthesis))try{window.speechSynthesis.cancel();const C=new SpeechSynthesisUtterance(le);C.pitch=.7,C.rate=1.05;const _e=window.speechSynthesis.getVoices().find(Ce=>Ce.name.includes("Male")||Ce.name.includes("Google US English"));_e&&(C.voice=_e),C.onstart=()=>{S(!0),e.current.active=!0};const be=()=>{S(!1),e.current.active=!1};C.onend=be,C.onerror=be,window.speechSynthesis.speak(C)}catch{}},[]);Et.useEffect(()=>{if(!v){e.current.intensity=0;return}let le;const C=performance.now();function V(){const _e=(performance.now()-C)/1e3;e.current.intensity=.4+.4*Math.abs(Math.sin(_e*6)),le=requestAnimationFrame(V)}return V(),()=>cancelAnimationFrame(le)},[v]),Et.useEffect(()=>{e.current.unlocked=i},[i]),Et.useEffect(()=>{b.current&&(b.current.scrollTop=b.current.scrollHeight)},[h,T]);const k=Et.useRef(!1),Q=Et.useRef(!1);Q.current=v,Et.useEffect(()=>{const le=window.SpeechRecognition||window.webkitSpeechRecognition;if(!le){x(!1);return}try{const C=new le;C.continuous=!0,C.interimResults=!1,C.lang="en-US",C.onresult=V=>{const _e=V.results[V.results.length-1];if(!_e.isFinal||Q.current)return;const be=_e[0].transcript;d(be),Se.current(be)},C.onend=()=>{k.current&&setTimeout(()=>{if(k.current)try{C.start()}catch{}},100)},C.onerror=V=>{V.error==="not-allowed"||V.error==="service-not-allowed"?(k.current=!1,H(!1),I("Microphone permission was denied. Check your browser's site settings and allow microphone access for this page.")):V.error==="no-speech"||V.error==="aborted"||I(`Mic error: ${V.error}.`)},O.current=C,x(!0)}catch{x(!1)}},[]);const me=async()=>{var C;const le=O.current;if(le){if(z){k.current=!1,H(!1);try{le.stop()}catch{}return}I("");try{(C=navigator.mediaDevices)!=null&&C.getUserMedia&&(await navigator.mediaDevices.getUserMedia({audio:!0})).getTracks().forEach(_e=>_e.stop())}catch{I("Microphone permission was denied. Tap the lock/site-info icon in your address bar to allow it, then try again.");return}try{k.current=!0,le.start(),H(!0)}catch{I("Couldn't start the microphone. Try again in a moment.")}}},Se=Et.useRef(()=>{}),J=async(le,C)=>{if(le==="get_weather"){const V=(C==null?void 0:C.location)||BA;return await kA(V)||"Couldn't reach the weather service, Aman."}if(le==="convert_currency"){const V=typeof(C==null?void 0:C.amount)=="number"?C.amount:1;return!(C!=null&&C.from)||!(C!=null&&C.to)?"I need both currencies to convert, Aman.":await XA(V,C.from,C.to)||"Couldn't convert that currency, Aman."}return le==="get_crypto_price"?C!=null&&C.coin?await qA(C.coin,C.vsCurrency||"usd")||"Couldn't fetch that price, Aman.":"Which coin, Aman?":le==="get_earthquake_alerts"?await YA()||"Couldn't reach the earthquake feed, Aman.":"That function isn't wired up."},P=async(le,C)=>{var Ce,ee,Me,de,De;const V={role:"system",content:"You are JARVIS, a sentient AI speaking directly to Aman. Answer with supreme clarity and authority in 1-3 crisp sentences suitable for being spoken aloud. Address him as Aman when natural. No markdown, no lists. If the request matches an available function, call it instead of describing it."},_e=["openai/gpt-oss-120b","openai/gpt-oss-20b"];let be="";for(const je of _e)try{const Ge=await kr("https://api.groq.com/openai/v1/chat/completions",{method:"POST",headers:{Authorization:`Bearer ${C}`,"Content-Type":"application/json"},body:JSON.stringify({model:je,messages:[V,...L.current,{role:"user",content:le}],tools:ZA,tool_choice:"auto",max_tokens:300,temperature:.4})});if(!Ge.ok){const at=await Ge.text();throw new Error(`Groq ${Ge.status}: ${at.slice(0,200)}`)}const it=(Ce=(await Ge.json()).choices)==null?void 0:Ce[0],ut=(Me=(ee=it==null?void 0:it.message)==null?void 0:ee.tool_calls)==null?void 0:Me[0];if(ut){let at={};try{at=JSON.parse(ut.function.arguments||"{}")}catch{}return{reply:await J(ut.function.name,at),error:""}}const ht=(De=(de=it==null?void 0:it.message)==null?void 0:de.content)==null?void 0:De.trim();if(ht)return{reply:ht,error:""}}catch(Ge){be=Ge.name==="AbortError"?`${je} timed out (12s) — slow connection`:Ge.message||String(Ge),console.warn(`[JARVIS] Groq ${je} failed:`,be)}return{reply:null,error:be}},F=Et.useCallback(async le=>{w(!0),c("PROCESSING...");const C=await P(le,zA);let V=C.reply;if(!V){V=`Couldn't reach the brain just now, Aman — ${C.error||"unknown error"}.`,p(_e=>[..._e.slice(-40),{role:"ultron",text:V}]),Y(V),w(!1);return}L.current=[...L.current.slice(-6),{role:"user",content:le},{role:"assistant",content:V}],p(_e=>[..._e.slice(-40),{role:"ultron",text:V}]),c(i?"ACTIVE // CONTINUOUS CONVERSATION LIVE":'AWAITING WAKE // SAY "WAKE UP JARVIS"'),Y(V),w(!1)},[i,Y]),$=Et.useCallback(le=>{var Me;const C=(le??m).trim();if(!C||T)return;p(de=>[...de.slice(-40),{role:"aman",text:C}]),d("");const V=GA(C);if(HA.some(de=>V===de||V.startsWith(de+" "))){k.current=!1,H(!1);try{(Me=O.current)==null||Me.stop()}catch{}const de="Mic off, Aman. Tap it or say the wake command to bring me back.";p(De=>[...De.slice(-40),{role:"ultron",text:de}]),Y(de);return}if(FA.some(de=>V===de||V.startsWith(de+" "))){s(!1),c('STANDBY // SAY "WAKE UP JARVIS"');const de="Shutting down, Aman. Say the wake command when you need me again.";p(De=>[...De.slice(-40),{role:"ultron",text:de}]),Y(de);return}const Ce=V===J_,ee=V.startsWith(J_+" ");if(Ce){s(!0),c("ACTIVE // CONTINUOUS CONVERSATION LIVE");const de="I am JARVIS, your sentient AI. Aman, what is the work?";p(De=>[...De.slice(-40),{role:"ultron",text:de}]),Y(de);return}if(ee){s(!0),c("ACTIVE // CONTINUOUS CONVERSATION LIVE");const de=C.slice(C.toLowerCase().indexOf("jarvis")+6).replace(/^[\s,.:]+/,"").trim();de&&F(de);return}F(C)},[m,T,F,Y]);Se.current=$;const ve=()=>{$(i?"shutdown jarvis":"Wake up JARVIS")};return pt.jsxs("div",{className:"app",children:[pt.jsx("div",{ref:o,className:"hologram-mount"}),pt.jsxs("div",{className:"header",children:[pt.jsxs("div",{children:[pt.jsxs("div",{className:"brand-row",children:[pt.jsx("span",{className:"pulse-dot"}),pt.jsx("span",{className:"brand-title",children:"JARVIS // NEURAL MATRIX"})]}),pt.jsx("div",{className:"status-line",children:l})]}),pt.jsxs("div",{className:"header-controls",children:[pt.jsxs("button",{onClick:ve,title:i?"Shut down JARVIS":"Wake up JARVIS",className:`wake-btn ${i?"active":""}`,children:[pt.jsx(Q_,{size:12}),i?"SHUTDOWN":"WAKE UP"]}),y&&pt.jsx("button",{onClick:me,title:z?"Mic always on — tap to turn off":"Tap to turn mic always-on",className:`icon-btn ${z?"active":""}`,children:z?pt.jsx(UA,{size:15}):pt.jsx(wA,{size:15})}),pt.jsx("button",{onClick:()=>E(le=>!le),title:g?"Unmute":"Mute",className:"icon-btn",children:g?pt.jsx(IA,{size:15}):pt.jsx(OA,{size:15})})]})]}),pt.jsxs("div",{className:"chat-panel",children:[D&&pt.jsx("div",{className:"error-banner",children:D}),pt.jsxs("div",{ref:b,className:"chat-scroll",children:[h.map((le,C)=>pt.jsx("div",{className:`msg-row ${le.role}`,children:pt.jsxs("div",{className:`bubble ${le.role}`,children:[pt.jsx("div",{className:`bubble-label ${le.role}`,children:le.role==="ultron"?"JARVIS":"Aman"}),pt.jsx("div",{className:"bubble-text",children:le.text})]})},C)),T&&pt.jsx("div",{className:"msg-row ultron",children:pt.jsxs("div",{className:"bubble ultron",children:[pt.jsx("div",{className:"bubble-label ultron",children:"JARVIS"}),pt.jsxs("div",{className:"typing-dots",children:[pt.jsx("span",{}),pt.jsx("span",{}),pt.jsx("span",{})]})]})})]}),pt.jsxs("div",{className:"input-row",children:[pt.jsx("input",{type:"text",className:"text-input",value:m,onChange:le=>d(le.target.value),onKeyDown:le=>le.key==="Enter"&&$(),placeholder:'Type "Wake up JARVIS" to begin...'}),pt.jsx("button",{className:"send-btn",disabled:T,onClick:()=>$(),children:pt.jsx(Q_,{size:16})})]}),pt.jsx("div",{className:"hint-text",children:"Tap the mic once to turn it always-on — then just talk, no need to tap again"})]})]})}JS.createRoot(document.getElementById("root")).render(pt.jsx(kS.StrictMode,{children:pt.jsx(KA,{})}));
