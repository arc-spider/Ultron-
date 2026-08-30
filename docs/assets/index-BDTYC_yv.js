(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();function a0(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var zf={exports:{}},To={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yg;function YS(){if(yg)return To;yg=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,u){var d=null;if(u!==void 0&&(d=""+u),l.key!==void 0&&(d=""+l.key),"key"in l){u={};for(var h in l)h!=="key"&&(u[h]=l[h])}else u=l;return l=u.ref,{$$typeof:o,type:s,key:d,ref:l!==void 0?l:null,props:u}}return To.Fragment=e,To.jsx=i,To.jsxs=i,To}var xg;function jS(){return xg||(xg=1,zf.exports=YS()),zf.exports}var Vt=jS(),Pf={exports:{}},le={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mg;function ZS(){if(Mg)return le;Mg=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),S=Symbol.for("react.activity"),y=Symbol.iterator;function M(L){return L===null||typeof L!="object"?null:(L=y&&L[y]||L["@@iterator"],typeof L=="function"?L:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,x={};function v(L,V,F){this.props=L,this.context=V,this.refs=x,this.updater=F||A}v.prototype.isReactComponent={},v.prototype.setState=function(L,V){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,V,"setState")},v.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function O(){}O.prototype=v.prototype;function w(L,V,F){this.props=L,this.context=V,this.refs=x,this.updater=F||A}var P=w.prototype=new O;P.constructor=w,b(P,v.prototype),P.isPureReactComponent=!0;var q=Array.isArray;function I(){}var z={H:null,A:null,T:null,S:null},_t=Object.prototype.hasOwnProperty;function D(L,V,F){var Z=F.ref;return{$$typeof:o,type:L,key:V,ref:Z!==void 0?Z:null,props:F}}function U(L,V){return D(L.type,V,L.props)}function ct(L){return typeof L=="object"&&L!==null&&L.$$typeof===o}function ft(L){var V={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(F){return V[F]})}var Mt=/\/+/g;function k(L,V){return typeof L=="object"&&L!==null&&L.key!=null?ft(""+L.key):V.toString(36)}function et(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(I,I):(L.status="pending",L.then(function(V){L.status==="pending"&&(L.status="fulfilled",L.value=V)},function(V){L.status==="pending"&&(L.status="rejected",L.reason=V)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function N(L,V,F,Z,gt){var xt=typeof L;(xt==="undefined"||xt==="boolean")&&(L=null);var At=!1;if(L===null)At=!0;else switch(xt){case"bigint":case"string":case"number":At=!0;break;case"object":switch(L.$$typeof){case o:case e:At=!0;break;case g:return At=L._init,N(At(L._payload),V,F,Z,gt)}}if(At)return gt=gt(L),At=Z===""?"."+k(L,0):Z,q(gt)?(F="",At!=null&&(F=At.replace(Mt,"$&/")+"/"),N(gt,V,F,"",function(Xt){return Xt})):gt!=null&&(ct(gt)&&(gt=U(gt,F+(gt.key==null||L&&L.key===gt.key?"":(""+gt.key).replace(Mt,"$&/")+"/")+At)),V.push(gt)),1;At=0;var kt=Z===""?".":Z+":";if(q(L))for(var Bt=0;Bt<L.length;Bt++)Z=L[Bt],xt=kt+k(Z,Bt),At+=N(Z,V,F,xt,gt);else if(Bt=M(L),typeof Bt=="function")for(L=Bt.call(L),Bt=0;!(Z=L.next()).done;)Z=Z.value,xt=kt+k(Z,Bt++),At+=N(Z,V,F,xt,gt);else if(xt==="object"){if(typeof L.then=="function")return N(et(L),V,F,Z,gt);throw V=String(L),Error("Objects are not valid as a React child (found: "+(V==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":V)+"). If you meant to render a collection of children, use an array instead.")}return At}function X(L,V,F){if(L==null)return L;var Z=[],gt=0;return N(L,Z,"","",function(xt){return V.call(F,xt,gt++)}),Z}function Q(L){if(L._status===-1){var V=L._result;V=V(),V.then(function(F){(L._status===0||L._status===-1)&&(L._status=1,L._result=F)},function(F){(L._status===0||L._status===-1)&&(L._status=2,L._result=F)}),L._status===-1&&(L._status=0,L._result=V)}if(L._status===1)return L._result.default;throw L._result}var ot=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var V=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent(V))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)},lt={map:X,forEach:function(L,V,F){X(L,function(){V.apply(this,arguments)},F)},count:function(L){var V=0;return X(L,function(){V++}),V},toArray:function(L){return X(L,function(V){return V})||[]},only:function(L){if(!ct(L))throw Error("React.Children.only expected to receive a single React element child.");return L}};return le.Activity=S,le.Children=lt,le.Component=v,le.Fragment=i,le.Profiler=l,le.PureComponent=w,le.StrictMode=s,le.Suspense=m,le.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,le.__COMPILER_RUNTIME={__proto__:null,c:function(L){return z.H.useMemoCache(L)}},le.cache=function(L){return function(){return L.apply(null,arguments)}},le.cacheSignal=function(){return null},le.cloneElement=function(L,V,F){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var Z=b({},L.props),gt=L.key;if(V!=null)for(xt in V.key!==void 0&&(gt=""+V.key),V)!_t.call(V,xt)||xt==="key"||xt==="__self"||xt==="__source"||xt==="ref"&&V.ref===void 0||(Z[xt]=V[xt]);var xt=arguments.length-2;if(xt===1)Z.children=F;else if(1<xt){for(var At=Array(xt),kt=0;kt<xt;kt++)At[kt]=arguments[kt+2];Z.children=At}return D(L.type,gt,Z)},le.createContext=function(L){return L={$$typeof:d,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:u,_context:L},L},le.createElement=function(L,V,F){var Z,gt={},xt=null;if(V!=null)for(Z in V.key!==void 0&&(xt=""+V.key),V)_t.call(V,Z)&&Z!=="key"&&Z!=="__self"&&Z!=="__source"&&(gt[Z]=V[Z]);var At=arguments.length-2;if(At===1)gt.children=F;else if(1<At){for(var kt=Array(At),Bt=0;Bt<At;Bt++)kt[Bt]=arguments[Bt+2];gt.children=kt}if(L&&L.defaultProps)for(Z in At=L.defaultProps,At)gt[Z]===void 0&&(gt[Z]=At[Z]);return D(L,xt,gt)},le.createRef=function(){return{current:null}},le.forwardRef=function(L){return{$$typeof:h,render:L}},le.isValidElement=ct,le.lazy=function(L){return{$$typeof:g,_payload:{_status:-1,_result:L},_init:Q}},le.memo=function(L,V){return{$$typeof:p,type:L,compare:V===void 0?null:V}},le.startTransition=function(L){var V=z.T,F={};z.T=F;try{var Z=L(),gt=z.S;gt!==null&&gt(F,Z),typeof Z=="object"&&Z!==null&&typeof Z.then=="function"&&Z.then(I,ot)}catch(xt){ot(xt)}finally{V!==null&&F.types!==null&&(V.types=F.types),z.T=V}},le.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},le.use=function(L){return z.H.use(L)},le.useActionState=function(L,V,F){return z.H.useActionState(L,V,F)},le.useCallback=function(L,V){return z.H.useCallback(L,V)},le.useContext=function(L){return z.H.useContext(L)},le.useDebugValue=function(){},le.useDeferredValue=function(L,V){return z.H.useDeferredValue(L,V)},le.useEffect=function(L,V){return z.H.useEffect(L,V)},le.useEffectEvent=function(L){return z.H.useEffectEvent(L)},le.useId=function(){return z.H.useId()},le.useImperativeHandle=function(L,V,F){return z.H.useImperativeHandle(L,V,F)},le.useInsertionEffect=function(L,V){return z.H.useInsertionEffect(L,V)},le.useLayoutEffect=function(L,V){return z.H.useLayoutEffect(L,V)},le.useMemo=function(L,V){return z.H.useMemo(L,V)},le.useOptimistic=function(L,V){return z.H.useOptimistic(L,V)},le.useReducer=function(L,V,F){return z.H.useReducer(L,V,F)},le.useRef=function(L){return z.H.useRef(L)},le.useState=function(L){return z.H.useState(L)},le.useSyncExternalStore=function(L,V,F){return z.H.useSyncExternalStore(L,V,F)},le.useTransition=function(){return z.H.useTransition()},le.version="19.2.8",le}var Eg;function Lh(){return Eg||(Eg=1,Pf.exports=ZS()),Pf.exports}var me=Lh();const KS=a0(me);var Bf={exports:{}},Ao={},If={exports:{}},Ff={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tg;function QS(){return Tg||(Tg=1,(function(o){function e(N,X){var Q=N.length;N.push(X);t:for(;0<Q;){var ot=Q-1>>>1,lt=N[ot];if(0<l(lt,X))N[ot]=X,N[Q]=lt,Q=ot;else break t}}function i(N){return N.length===0?null:N[0]}function s(N){if(N.length===0)return null;var X=N[0],Q=N.pop();if(Q!==X){N[0]=Q;t:for(var ot=0,lt=N.length,L=lt>>>1;ot<L;){var V=2*(ot+1)-1,F=N[V],Z=V+1,gt=N[Z];if(0>l(F,Q))Z<lt&&0>l(gt,F)?(N[ot]=gt,N[Z]=Q,ot=Z):(N[ot]=F,N[V]=Q,ot=V);else if(Z<lt&&0>l(gt,Q))N[ot]=gt,N[Z]=Q,ot=Z;else break t}}return X}function l(N,X){var Q=N.sortIndex-X.sortIndex;return Q!==0?Q:N.id-X.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var d=Date,h=d.now();o.unstable_now=function(){return d.now()-h}}var m=[],p=[],g=1,S=null,y=3,M=!1,A=!1,b=!1,x=!1,v=typeof setTimeout=="function"?setTimeout:null,O=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;function P(N){for(var X=i(p);X!==null;){if(X.callback===null)s(p);else if(X.startTime<=N)s(p),X.sortIndex=X.expirationTime,e(m,X);else break;X=i(p)}}function q(N){if(b=!1,P(N),!A)if(i(m)!==null)A=!0,I||(I=!0,ft());else{var X=i(p);X!==null&&et(q,X.startTime-N)}}var I=!1,z=-1,_t=5,D=-1;function U(){return x?!0:!(o.unstable_now()-D<_t)}function ct(){if(x=!1,I){var N=o.unstable_now();D=N;var X=!0;try{t:{A=!1,b&&(b=!1,O(z),z=-1),M=!0;var Q=y;try{e:{for(P(N),S=i(m);S!==null&&!(S.expirationTime>N&&U());){var ot=S.callback;if(typeof ot=="function"){S.callback=null,y=S.priorityLevel;var lt=ot(S.expirationTime<=N);if(N=o.unstable_now(),typeof lt=="function"){S.callback=lt,P(N),X=!0;break e}S===i(m)&&s(m),P(N)}else s(m);S=i(m)}if(S!==null)X=!0;else{var L=i(p);L!==null&&et(q,L.startTime-N),X=!1}}break t}finally{S=null,y=Q,M=!1}X=void 0}}finally{X?ft():I=!1}}}var ft;if(typeof w=="function")ft=function(){w(ct)};else if(typeof MessageChannel<"u"){var Mt=new MessageChannel,k=Mt.port2;Mt.port1.onmessage=ct,ft=function(){k.postMessage(null)}}else ft=function(){v(ct,0)};function et(N,X){z=v(function(){N(o.unstable_now())},X)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(N){N.callback=null},o.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_t=0<N?Math.floor(1e3/N):5},o.unstable_getCurrentPriorityLevel=function(){return y},o.unstable_next=function(N){switch(y){case 1:case 2:case 3:var X=3;break;default:X=y}var Q=y;y=X;try{return N()}finally{y=Q}},o.unstable_requestPaint=function(){x=!0},o.unstable_runWithPriority=function(N,X){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var Q=y;y=N;try{return X()}finally{y=Q}},o.unstable_scheduleCallback=function(N,X,Q){var ot=o.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?ot+Q:ot):Q=ot,N){case 1:var lt=-1;break;case 2:lt=250;break;case 5:lt=1073741823;break;case 4:lt=1e4;break;default:lt=5e3}return lt=Q+lt,N={id:g++,callback:X,priorityLevel:N,startTime:Q,expirationTime:lt,sortIndex:-1},Q>ot?(N.sortIndex=Q,e(p,N),i(m)===null&&N===i(p)&&(b?(O(z),z=-1):b=!0,et(q,Q-ot))):(N.sortIndex=lt,e(m,N),A||M||(A=!0,I||(I=!0,ft()))),N},o.unstable_shouldYield=U,o.unstable_wrapCallback=function(N){var X=y;return function(){var Q=y;y=X;try{return N.apply(this,arguments)}finally{y=Q}}}})(Ff)),Ff}var Ag;function JS(){return Ag||(Ag=1,If.exports=QS()),If.exports}var Hf={exports:{}},An={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bg;function $S(){if(bg)return An;bg=1;var o=Lh();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,g){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:S==null?null:""+S,children:m,containerInfo:p,implementation:g}}var d=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return An.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,An.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return u(m,p,null,g)},An.flushSync=function(m){var p=d.T,g=s.p;try{if(d.T=null,s.p=2,m)return m()}finally{d.T=p,s.p=g,s.d.f()}},An.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},An.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},An.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,S=h(g,p.crossOrigin),y=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:S,integrity:y,fetchPriority:M}):g==="script"&&s.d.X(m,{crossOrigin:S,integrity:y,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},An.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=h(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},An.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,S=h(g,p.crossOrigin);s.d.L(m,g,{crossOrigin:S,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},An.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=h(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},An.requestFormReset=function(m){s.d.r(m)},An.unstable_batchedUpdates=function(m,p){return m(p)},An.useFormState=function(m,p,g){return d.H.useFormState(m,p,g)},An.useFormStatus=function(){return d.H.useHostTransitionStatus()},An.version="19.2.8",An}var Rg;function ty(){if(Rg)return Hf.exports;Rg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Hf.exports=$S(),Hf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cg;function ey(){if(Cg)return Ao;Cg=1;var o=JS(),e=Lh(),i=ty();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function d(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(u(t)!==t)throw Error(s(188))}function p(t){var n=t.alternate;if(!n){if(n=u(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,r=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(r=c.return,r!==null){a=r;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return m(c),t;if(f===r)return m(c),n;f=f.sibling}throw Error(s(188))}if(a.return!==r.return)a=c,r=f;else{for(var _=!1,E=c.child;E;){if(E===a){_=!0,a=c,r=f;break}if(E===r){_=!0,r=c,a=f;break}E=E.sibling}if(!_){for(E=f.child;E;){if(E===a){_=!0,a=f,r=c;break}if(E===r){_=!0,r=f,a=c;break}E=E.sibling}if(!_)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function g(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=g(t),n!==null)return n;t=t.sibling}return null}var S=Object.assign,y=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),A=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),x=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),O=Symbol.for("react.consumer"),w=Symbol.for("react.context"),P=Symbol.for("react.forward_ref"),q=Symbol.for("react.suspense"),I=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),_t=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),U=Symbol.for("react.memo_cache_sentinel"),ct=Symbol.iterator;function ft(t){return t===null||typeof t!="object"?null:(t=ct&&t[ct]||t["@@iterator"],typeof t=="function"?t:null)}var Mt=Symbol.for("react.client.reference");function k(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Mt?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case b:return"Fragment";case v:return"Profiler";case x:return"StrictMode";case q:return"Suspense";case I:return"SuspenseList";case D:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case A:return"Portal";case w:return t.displayName||"Context";case O:return(t._context.displayName||"Context")+".Consumer";case P:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case z:return n=t.displayName||null,n!==null?n:k(t.type)||"Memo";case _t:n=t._payload,t=t._init;try{return k(t(n))}catch{}}return null}var et=Array.isArray,N=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,X=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Q={pending:!1,data:null,method:null,action:null},ot=[],lt=-1;function L(t){return{current:t}}function V(t){0>lt||(t.current=ot[lt],ot[lt]=null,lt--)}function F(t,n){lt++,ot[lt]=t.current,t.current=n}var Z=L(null),gt=L(null),xt=L(null),At=L(null);function kt(t,n){switch(F(xt,n),F(gt,t),F(Z,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?km(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=km(n),t=Xm(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}V(Z),F(Z,t)}function Bt(){V(Z),V(gt),V(xt)}function Xt(t){t.memoizedState!==null&&F(At,t);var n=Z.current,a=Xm(n,t.type);n!==a&&(F(gt,t),F(Z,a))}function he(t){gt.current===t&&(V(Z),V(gt)),At.current===t&&(V(At),yo._currentValue=Q)}var nt,wt;function ht(t){if(nt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);nt=n&&n[1]||"",wt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+nt+t+wt}var Lt=!1;function Et(t,n){if(!t||Lt)return"";Lt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var mt=function(){throw Error()};if(Object.defineProperty(mt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(mt,[])}catch(st){var $=st}Reflect.construct(t,[],mt)}else{try{mt.call()}catch(st){$=st}t.call(mt.prototype)}}else{try{throw Error()}catch(st){$=st}(mt=t())&&typeof mt.catch=="function"&&mt.catch(function(){})}}catch(st){if(st&&$&&typeof st.stack=="string")return[st.stack,$.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=r.DetermineComponentFrameRoot(),_=f[0],E=f[1];if(_&&E){var B=_.split(`
`),J=E.split(`
`);for(c=r=0;r<B.length&&!B[r].includes("DetermineComponentFrameRoot");)r++;for(;c<J.length&&!J[c].includes("DetermineComponentFrameRoot");)c++;if(r===B.length||c===J.length)for(r=B.length-1,c=J.length-1;1<=r&&0<=c&&B[r]!==J[c];)c--;for(;1<=r&&0<=c;r--,c--)if(B[r]!==J[c]){if(r!==1||c!==1)do if(r--,c--,0>c||B[r]!==J[c]){var ut=`
`+B[r].replace(" at new "," at ");return t.displayName&&ut.includes("<anonymous>")&&(ut=ut.replace("<anonymous>",t.displayName)),ut}while(1<=r&&0<=c);break}}}finally{Lt=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?ht(a):""}function ne(t,n){switch(t.tag){case 26:case 27:case 5:return ht(t.type);case 16:return ht("Lazy");case 13:return t.child!==n&&n!==null?ht("Suspense Fallback"):ht("Suspense");case 19:return ht("SuspenseList");case 0:case 15:return Et(t.type,!1);case 11:return Et(t.type.render,!1);case 1:return Et(t.type,!0);case 31:return ht("Activity");default:return""}}function Nt(t){try{var n="",a=null;do n+=ne(t,a),a=t,t=t.return;while(t);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var R=Object.prototype.hasOwnProperty,T=o.unstable_scheduleCallback,Y=o.unstable_cancelCallback,vt=o.unstable_shouldYield,St=o.unstable_requestPaint,pt=o.unstable_now,It=o.unstable_getCurrentPriorityLevel,Tt=o.unstable_ImmediatePriority,Ut=o.unstable_UserBlockingPriority,Wt=o.unstable_NormalPriority,ee=o.unstable_LowPriority,yt=o.unstable_IdlePriority,Ee=o.log,ce=o.unstable_setDisableYieldValue,Jt=null,Pt=null;function zt(t){if(typeof Ee=="function"&&ce(t),Pt&&typeof Pt.setStrictMode=="function")try{Pt.setStrictMode(Jt,t)}catch{}}var Yt=Math.clz32?Math.clz32:ae,Me=Math.log,Ie=Math.LN2;function ae(t){return t>>>=0,t===0?32:31-(Me(t)/Ie|0)|0}var bt=256,H=262144,Ct=4194304;function Rt(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Kt(t,n,a){var r=t.pendingLanes;if(r===0)return 0;var c=0,f=t.suspendedLanes,_=t.pingedLanes;t=t.warmLanes;var E=r&134217727;return E!==0?(r=E&~f,r!==0?c=Rt(r):(_&=E,_!==0?c=Rt(_):a||(a=E&~t,a!==0&&(c=Rt(a))))):(E=r&~f,E!==0?c=Rt(E):_!==0?c=Rt(_):a||(a=r&~t,a!==0&&(c=Rt(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function jt(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Re(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Te(){var t=Ct;return Ct<<=1,(Ct&62914560)===0&&(Ct=4194304),t}function ke(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function ie(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function re(t,n,a,r,c,f){var _=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var E=t.entanglements,B=t.expirationTimes,J=t.hiddenUpdates;for(a=_&~a;0<a;){var ut=31-Yt(a),mt=1<<ut;E[ut]=0,B[ut]=-1;var $=J[ut];if($!==null)for(J[ut]=null,ut=0;ut<$.length;ut++){var st=$[ut];st!==null&&(st.lane&=-536870913)}a&=~mt}r!==0&&Ge(t,r,0),f!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=f&~(_&~n))}function Ge(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var r=31-Yt(n);t.entangledLanes|=n,t.entanglements[r]=t.entanglements[r]|1073741824|a&261930}function ln(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var r=31-Yt(a),c=1<<r;c&n|t[r]&n&&(t[r]|=n),a&=~c}}function On(t,n){var a=n&-n;return a=(a&42)!==0?1:oa(a),(a&(t.suspendedLanes|n))!==0?0:a}function oa(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function gn(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function ii(){var t=X.p;return t!==0?t:(t=window.event,t===void 0?32:dg(t.type))}function Ri(t,n){var a=X.p;try{return X.p=t,n()}finally{X.p=a}}var Cn=Math.random().toString(36).slice(2),je="__reactFiber$"+Cn,cn="__reactProps$"+Cn,la="__reactContainer$"+Cn,Us="__reactEvents$"+Cn,C="__reactListeners$"+Cn,j="__reactHandles$"+Cn,at="__reactResources$"+Cn,rt="__reactMarker$"+Cn;function it(t){delete t[je],delete t[cn],delete t[Us],delete t[C],delete t[j]}function Ot(t){var n=t[je];if(n)return n;for(var a=t.parentNode;a;){if(n=a[la]||a[je]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=Qm(t);t!==null;){if(a=t[je])return a;t=Qm(t)}return n}t=a,a=t.parentNode}return null}function Ht(t){if(t=t[je]||t[la]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function Qt(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function $t(t){var n=t[at];return n||(n=t[at]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function qt(t){t[rt]=!0}var se=new Set,oe={};function we(t,n){$e(t,n),$e(t+"Capture",n)}function $e(t,n){for(oe[t]=n,t=0;t<n.length;t++)se.add(n[t])}var tn=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ai={},Ve={};function de(t){return R.call(Ve,t)?!0:R.call(ai,t)?!1:tn.test(t)?Ve[t]=!0:(ai[t]=!0,!1)}function ca(t,n,a){if(de(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Fe(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function _n(t,n,a,r){if(r===null)t.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+r)}}function wn(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ua(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ns(t,n,a){var r=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var c=r.get,f=r.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(_){a=""+_,f.call(this,_)}}),Object.defineProperty(t,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(_){a=""+_},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function en(t){if(!t._valueTracker){var n=ua(t)?"checked":"value";t._valueTracker=Ns(t,n,""+t[n])}}function Ci(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return t&&(r=ua(t)?t.checked?"true":"false":t.value),t=r,t!==a?(n.setValue(t),!0):!1}function fa(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var zn=/[\n"\\]/g;function Tn(t){return t.replace(zn,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Os(t,n,a,r,c,f,_,E){t.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?t.type=_:t.removeAttribute("type"),n!=null?_==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+wn(n)):t.value!==""+wn(n)&&(t.value=""+wn(n)):_!=="submit"&&_!=="reset"||t.removeAttribute("value"),n!=null?wc(t,_,wn(n)):a!=null?wc(t,_,wn(a)):r!=null&&t.removeAttribute("value"),c==null&&f!=null&&(t.defaultChecked=!!f),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?t.name=""+wn(E):t.removeAttribute("name")}function zs(t,n,a,r,c,f,_,E){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){en(t);return}a=a!=null?""+wn(a):"",n=n!=null?""+wn(n):a,E||n===t.value||(t.value=n),t.defaultValue=n}r=r??c,r=typeof r!="function"&&typeof r!="symbol"&&!!r,t.checked=E?t.checked:!!r,t.defaultChecked=!!r,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(t.name=_),en(t)}function wc(t,n,a){n==="number"&&fa(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Tr(t,n,a,r){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&r&&(t[a].defaultSelected=!0)}else{for(a=""+wn(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,r&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function Ih(t,n,a){if(n!=null&&(n=""+wn(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+wn(a):""}function Fh(t,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(et(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=wn(n),t.defaultValue=a,r=t.textContent,r===a&&r!==""&&r!==null&&(t.value=r),en(t)}function Ar(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var V0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Hh(t,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":r?t.setProperty(n,a):typeof a!="number"||a===0||V0.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Gh(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="");for(var c in n)r=n[c],n.hasOwnProperty(c)&&a[c]!==r&&Hh(t,c,r)}else for(var f in n)n.hasOwnProperty(f)&&Hh(t,f,n[f])}function Dc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var k0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),X0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Fo(t){return X0.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function zi(){}var Lc=null;function Uc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var br=null,Rr=null;function Vh(t){var n=Ht(t);if(n&&(t=n.stateNode)){var a=t[cn]||null;t:switch(t=n.stateNode,n.type){case"input":if(Os(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Tn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==t&&r.form===t.form){var c=r[cn]||null;if(!c)throw Error(s(90));Os(r,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===t.form&&Ci(r)}break t;case"textarea":Ih(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&Tr(t,!!a.multiple,n,!1)}}}var Nc=!1;function kh(t,n,a){if(Nc)return t(n,a);Nc=!0;try{var r=t(n);return r}finally{if(Nc=!1,(br!==null||Rr!==null)&&(bl(),br&&(n=br,t=Rr,Rr=br=null,Vh(n),t)))for(n=0;n<t.length;n++)Vh(t[n])}}function Ps(t,n){var a=t.stateNode;if(a===null)return null;var r=a[cn]||null;if(r===null)return null;a=r[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Pi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Oc=!1;if(Pi)try{var Bs={};Object.defineProperty(Bs,"passive",{get:function(){Oc=!0}}),window.addEventListener("test",Bs,Bs),window.removeEventListener("test",Bs,Bs)}catch{Oc=!1}var ha=null,zc=null,Ho=null;function Xh(){if(Ho)return Ho;var t,n=zc,a=n.length,r,c="value"in ha?ha.value:ha.textContent,f=c.length;for(t=0;t<a&&n[t]===c[t];t++);var _=a-t;for(r=1;r<=_&&n[a-r]===c[f-r];r++);return Ho=c.slice(t,1<r?1-r:void 0)}function Go(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Vo(){return!0}function Wh(){return!1}function Pn(t){function n(a,r,c,f,_){this._reactName=a,this._targetInst=c,this.type=r,this.nativeEvent=f,this.target=_,this.currentTarget=null;for(var E in t)t.hasOwnProperty(E)&&(a=t[E],this[E]=a?a(f):f[E]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Vo:Wh,this.isPropagationStopped=Wh,this}return S(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Vo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Vo)},persist:function(){},isPersistent:Vo}),n}var Ya={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ko=Pn(Ya),Is=S({},Ya,{view:0,detail:0}),W0=Pn(Is),Pc,Bc,Fs,Xo=S({},Is,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Fc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Fs&&(Fs&&t.type==="mousemove"?(Pc=t.screenX-Fs.screenX,Bc=t.screenY-Fs.screenY):Bc=Pc=0,Fs=t),Pc)},movementY:function(t){return"movementY"in t?t.movementY:Bc}}),qh=Pn(Xo),q0=S({},Xo,{dataTransfer:0}),Y0=Pn(q0),j0=S({},Is,{relatedTarget:0}),Ic=Pn(j0),Z0=S({},Ya,{animationName:0,elapsedTime:0,pseudoElement:0}),K0=Pn(Z0),Q0=S({},Ya,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),J0=Pn(Q0),$0=S({},Ya,{data:0}),Yh=Pn($0),tv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ev={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},nv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function iv(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=nv[t])?!!n[t]:!1}function Fc(){return iv}var av=S({},Is,{key:function(t){if(t.key){var n=tv[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Go(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?ev[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Fc,charCode:function(t){return t.type==="keypress"?Go(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Go(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),rv=Pn(av),sv=S({},Xo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),jh=Pn(sv),ov=S({},Is,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Fc}),lv=Pn(ov),cv=S({},Ya,{propertyName:0,elapsedTime:0,pseudoElement:0}),uv=Pn(cv),fv=S({},Xo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),hv=Pn(fv),dv=S({},Ya,{newState:0,oldState:0}),pv=Pn(dv),mv=[9,13,27,32],Hc=Pi&&"CompositionEvent"in window,Hs=null;Pi&&"documentMode"in document&&(Hs=document.documentMode);var gv=Pi&&"TextEvent"in window&&!Hs,Zh=Pi&&(!Hc||Hs&&8<Hs&&11>=Hs),Kh=" ",Qh=!1;function Jh(t,n){switch(t){case"keyup":return mv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $h(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Cr=!1;function _v(t,n){switch(t){case"compositionend":return $h(n);case"keypress":return n.which!==32?null:(Qh=!0,Kh);case"textInput":return t=n.data,t===Kh&&Qh?null:t;default:return null}}function vv(t,n){if(Cr)return t==="compositionend"||!Hc&&Jh(t,n)?(t=Xh(),Ho=zc=ha=null,Cr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Zh&&n.locale!=="ko"?null:n.data;default:return null}}var Sv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function td(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!Sv[t.type]:n==="textarea"}function ed(t,n,a,r){br?Rr?Rr.push(r):Rr=[r]:br=r,n=Nl(n,"onChange"),0<n.length&&(a=new ko("onChange","change",null,a,r),t.push({event:a,listeners:n}))}var Gs=null,Vs=null;function yv(t){Bm(t,0)}function Wo(t){var n=Qt(t);if(Ci(n))return t}function nd(t,n){if(t==="change")return n}var id=!1;if(Pi){var Gc;if(Pi){var Vc="oninput"in document;if(!Vc){var ad=document.createElement("div");ad.setAttribute("oninput","return;"),Vc=typeof ad.oninput=="function"}Gc=Vc}else Gc=!1;id=Gc&&(!document.documentMode||9<document.documentMode)}function rd(){Gs&&(Gs.detachEvent("onpropertychange",sd),Vs=Gs=null)}function sd(t){if(t.propertyName==="value"&&Wo(Vs)){var n=[];ed(n,Vs,t,Uc(t)),kh(yv,n)}}function xv(t,n,a){t==="focusin"?(rd(),Gs=n,Vs=a,Gs.attachEvent("onpropertychange",sd)):t==="focusout"&&rd()}function Mv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Wo(Vs)}function Ev(t,n){if(t==="click")return Wo(n)}function Tv(t,n){if(t==="input"||t==="change")return Wo(n)}function Av(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Yn=typeof Object.is=="function"?Object.is:Av;function ks(t,n){if(Yn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var c=a[r];if(!R.call(n,c)||!Yn(t[c],n[c]))return!1}return!0}function od(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ld(t,n){var a=od(t);t=0;for(var r;a;){if(a.nodeType===3){if(r=t+a.textContent.length,t<=n&&r>=n)return{node:a,offset:n-t};t=r}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=od(a)}}function cd(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?cd(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function ud(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=fa(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=fa(t.document)}return n}function kc(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var bv=Pi&&"documentMode"in document&&11>=document.documentMode,wr=null,Xc=null,Xs=null,Wc=!1;function fd(t,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Wc||wr==null||wr!==fa(r)||(r=wr,"selectionStart"in r&&kc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Xs&&ks(Xs,r)||(Xs=r,r=Nl(Xc,"onSelect"),0<r.length&&(n=new ko("onSelect","select",null,n,a),t.push({event:n,listeners:r}),n.target=wr)))}function ja(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Dr={animationend:ja("Animation","AnimationEnd"),animationiteration:ja("Animation","AnimationIteration"),animationstart:ja("Animation","AnimationStart"),transitionrun:ja("Transition","TransitionRun"),transitionstart:ja("Transition","TransitionStart"),transitioncancel:ja("Transition","TransitionCancel"),transitionend:ja("Transition","TransitionEnd")},qc={},hd={};Pi&&(hd=document.createElement("div").style,"AnimationEvent"in window||(delete Dr.animationend.animation,delete Dr.animationiteration.animation,delete Dr.animationstart.animation),"TransitionEvent"in window||delete Dr.transitionend.transition);function Za(t){if(qc[t])return qc[t];if(!Dr[t])return t;var n=Dr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in hd)return qc[t]=n[a];return t}var dd=Za("animationend"),pd=Za("animationiteration"),md=Za("animationstart"),Rv=Za("transitionrun"),Cv=Za("transitionstart"),wv=Za("transitioncancel"),gd=Za("transitionend"),_d=new Map,Yc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Yc.push("scrollEnd");function _i(t,n){_d.set(t,n),we(n,[t])}var qo=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},ri=[],Lr=0,jc=0;function Yo(){for(var t=Lr,n=jc=Lr=0;n<t;){var a=ri[n];ri[n++]=null;var r=ri[n];ri[n++]=null;var c=ri[n];ri[n++]=null;var f=ri[n];if(ri[n++]=null,r!==null&&c!==null){var _=r.pending;_===null?c.next=c:(c.next=_.next,_.next=c),r.pending=c}f!==0&&vd(a,c,f)}}function jo(t,n,a,r){ri[Lr++]=t,ri[Lr++]=n,ri[Lr++]=a,ri[Lr++]=r,jc|=r,t.lanes|=r,t=t.alternate,t!==null&&(t.lanes|=r)}function Zc(t,n,a,r){return jo(t,n,a,r),Zo(t)}function Ka(t,n){return jo(t,null,null,n),Zo(t)}function vd(t,n,a){t.lanes|=a;var r=t.alternate;r!==null&&(r.lanes|=a);for(var c=!1,f=t.return;f!==null;)f.childLanes|=a,r=f.alternate,r!==null&&(r.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(c=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,c&&n!==null&&(c=31-Yt(a),t=f.hiddenUpdates,r=t[c],r===null?t[c]=[n]:r.push(n),n.lane=a|536870912),f):null}function Zo(t){if(50<ho)throw ho=0,rf=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Ur={};function Dv(t,n,a,r){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jn(t,n,a,r){return new Dv(t,n,a,r)}function Kc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Bi(t,n){var a=t.alternate;return a===null?(a=jn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Sd(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Ko(t,n,a,r,c,f){var _=0;if(r=t,typeof t=="function")Kc(t)&&(_=1);else if(typeof t=="string")_=zS(t,a,Z.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case D:return t=jn(31,a,n,c),t.elementType=D,t.lanes=f,t;case b:return Qa(a.children,c,f,n);case x:_=8,c|=24;break;case v:return t=jn(12,a,n,c|2),t.elementType=v,t.lanes=f,t;case q:return t=jn(13,a,n,c),t.elementType=q,t.lanes=f,t;case I:return t=jn(19,a,n,c),t.elementType=I,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case w:_=10;break t;case O:_=9;break t;case P:_=11;break t;case z:_=14;break t;case _t:_=16,r=null;break t}_=29,a=Error(s(130,t===null?"null":typeof t,"")),r=null}return n=jn(_,a,n,c),n.elementType=t,n.type=r,n.lanes=f,n}function Qa(t,n,a,r){return t=jn(7,t,r,n),t.lanes=a,t}function Qc(t,n,a){return t=jn(6,t,null,n),t.lanes=a,t}function yd(t){var n=jn(18,null,null,0);return n.stateNode=t,n}function Jc(t,n,a){return n=jn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var xd=new WeakMap;function si(t,n){if(typeof t=="object"&&t!==null){var a=xd.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Nt(n)},xd.set(t,n),n)}return{value:t,source:n,stack:Nt(n)}}var Nr=[],Or=0,Qo=null,Ws=0,oi=[],li=0,da=null,wi=1,Di="";function Ii(t,n){Nr[Or++]=Ws,Nr[Or++]=Qo,Qo=t,Ws=n}function Md(t,n,a){oi[li++]=wi,oi[li++]=Di,oi[li++]=da,da=t;var r=wi;t=Di;var c=32-Yt(r)-1;r&=~(1<<c),a+=1;var f=32-Yt(n)+c;if(30<f){var _=c-c%5;f=(r&(1<<_)-1).toString(32),r>>=_,c-=_,wi=1<<32-Yt(n)+c|a<<c|r,Di=f+t}else wi=1<<f|a<<c|r,Di=t}function $c(t){t.return!==null&&(Ii(t,1),Md(t,1,0))}function tu(t){for(;t===Qo;)Qo=Nr[--Or],Nr[Or]=null,Ws=Nr[--Or],Nr[Or]=null;for(;t===da;)da=oi[--li],oi[li]=null,Di=oi[--li],oi[li]=null,wi=oi[--li],oi[li]=null}function Ed(t,n){oi[li++]=wi,oi[li++]=Di,oi[li++]=da,wi=n.id,Di=n.overflow,da=t}var vn=null,Xe=null,xe=!1,pa=null,ci=!1,eu=Error(s(519));function ma(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw qs(si(n,t)),eu}function Td(t){var n=t.stateNode,a=t.type,r=t.memoizedProps;switch(n[je]=t,n[cn]=r,a){case"dialog":ve("cancel",n),ve("close",n);break;case"iframe":case"object":case"embed":ve("load",n);break;case"video":case"audio":for(a=0;a<mo.length;a++)ve(mo[a],n);break;case"source":ve("error",n);break;case"img":case"image":case"link":ve("error",n),ve("load",n);break;case"details":ve("toggle",n);break;case"input":ve("invalid",n),zs(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":ve("invalid",n);break;case"textarea":ve("invalid",n),Fh(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||Gm(n.textContent,a)?(r.popover!=null&&(ve("beforetoggle",n),ve("toggle",n)),r.onScroll!=null&&ve("scroll",n),r.onScrollEnd!=null&&ve("scrollend",n),r.onClick!=null&&(n.onclick=zi),n=!0):n=!1,n||ma(t,!0)}function Ad(t){for(vn=t.return;vn;)switch(vn.tag){case 5:case 31:case 13:ci=!1;return;case 27:case 3:ci=!0;return;default:vn=vn.return}}function zr(t){if(t!==vn)return!1;if(!xe)return Ad(t),xe=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||yf(t.type,t.memoizedProps)),a=!a),a&&Xe&&ma(t),Ad(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Xe=Km(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Xe=Km(t)}else n===27?(n=Xe,wa(t.type)?(t=Af,Af=null,Xe=t):Xe=n):Xe=vn?fi(t.stateNode.nextSibling):null;return!0}function Ja(){Xe=vn=null,xe=!1}function nu(){var t=pa;return t!==null&&(Hn===null?Hn=t:Hn.push.apply(Hn,t),pa=null),t}function qs(t){pa===null?pa=[t]:pa.push(t)}var iu=L(null),$a=null,Fi=null;function ga(t,n,a){F(iu,n._currentValue),n._currentValue=a}function Hi(t){t._currentValue=iu.current,V(iu)}function au(t,n,a){for(;t!==null;){var r=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),t===a)break;t=t.return}}function ru(t,n,a,r){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var f=c.dependencies;if(f!==null){var _=c.child;f=f.firstContext;t:for(;f!==null;){var E=f;f=c;for(var B=0;B<n.length;B++)if(E.context===n[B]){f.lanes|=a,E=f.alternate,E!==null&&(E.lanes|=a),au(f.return,a,t),r||(_=null);break t}f=E.next}}else if(c.tag===18){if(_=c.return,_===null)throw Error(s(341));_.lanes|=a,f=_.alternate,f!==null&&(f.lanes|=a),au(_,a,t),_=null}else _=c.child;if(_!==null)_.return=c;else for(_=c;_!==null;){if(_===t){_=null;break}if(c=_.sibling,c!==null){c.return=_.return,_=c;break}_=_.return}c=_}}function Pr(t,n,a,r){t=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var _=c.alternate;if(_===null)throw Error(s(387));if(_=_.memoizedProps,_!==null){var E=c.type;Yn(c.pendingProps.value,_.value)||(t!==null?t.push(E):t=[E])}}else if(c===At.current){if(_=c.alternate,_===null)throw Error(s(387));_.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(yo):t=[yo])}c=c.return}t!==null&&ru(n,t,a,r),n.flags|=262144}function Jo(t){for(t=t.firstContext;t!==null;){if(!Yn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function tr(t){$a=t,Fi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Sn(t){return bd($a,t)}function $o(t,n){return $a===null&&tr(t),bd(t,n)}function bd(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Fi===null){if(t===null)throw Error(s(308));Fi=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Fi=Fi.next=n;return a}var Lv=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,r){t.push(r)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},Uv=o.unstable_scheduleCallback,Nv=o.unstable_NormalPriority,nn={$$typeof:w,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function su(){return{controller:new Lv,data:new Map,refCount:0}}function Ys(t){t.refCount--,t.refCount===0&&Uv(Nv,function(){t.controller.abort()})}var js=null,ou=0,Br=0,Ir=null;function Ov(t,n){if(js===null){var a=js=[];ou=0,Br=ff(),Ir={status:"pending",value:void 0,then:function(r){a.push(r)}}}return ou++,n.then(Rd,Rd),n}function Rd(){if(--ou===0&&js!==null){Ir!==null&&(Ir.status="fulfilled");var t=js;js=null,Br=0,Ir=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function zv(t,n){var a=[],r={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){r.status="fulfilled",r.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(r.status="rejected",r.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),r}var Cd=N.S;N.S=function(t,n){fm=pt(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Ov(t,n),Cd!==null&&Cd(t,n)};var er=L(null);function lu(){var t=er.current;return t!==null?t:He.pooledCache}function tl(t,n){n===null?F(er,er.current):F(er,n.pool)}function wd(){var t=lu();return t===null?null:{parent:nn._currentValue,pool:t}}var Fr=Error(s(460)),cu=Error(s(474)),el=Error(s(542)),nl={then:function(){}};function Dd(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Ld(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(zi,zi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Nd(t),t;default:if(typeof n.status=="string")n.then(zi,zi);else{if(t=He,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(r){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=r}},function(r){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Nd(t),t}throw ir=n,Fr}}function nr(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(ir=a,Fr):a}}var ir=null;function Ud(){if(ir===null)throw Error(s(459));var t=ir;return ir=null,t}function Nd(t){if(t===Fr||t===el)throw Error(s(483))}var Hr=null,Zs=0;function il(t){var n=Zs;return Zs+=1,Hr===null&&(Hr=[]),Ld(Hr,t,n)}function Ks(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function al(t,n){throw n.$$typeof===y?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Od(t){function n(W,G){if(t){var K=W.deletions;K===null?(W.deletions=[G],W.flags|=16):K.push(G)}}function a(W,G){if(!t)return null;for(;G!==null;)n(W,G),G=G.sibling;return null}function r(W){for(var G=new Map;W!==null;)W.key!==null?G.set(W.key,W):G.set(W.index,W),W=W.sibling;return G}function c(W,G){return W=Bi(W,G),W.index=0,W.sibling=null,W}function f(W,G,K){return W.index=K,t?(K=W.alternate,K!==null?(K=K.index,K<G?(W.flags|=67108866,G):K):(W.flags|=67108866,G)):(W.flags|=1048576,G)}function _(W){return t&&W.alternate===null&&(W.flags|=67108866),W}function E(W,G,K,dt){return G===null||G.tag!==6?(G=Qc(K,W.mode,dt),G.return=W,G):(G=c(G,K),G.return=W,G)}function B(W,G,K,dt){var Zt=K.type;return Zt===b?ut(W,G,K.props.children,dt,K.key):G!==null&&(G.elementType===Zt||typeof Zt=="object"&&Zt!==null&&Zt.$$typeof===_t&&nr(Zt)===G.type)?(G=c(G,K.props),Ks(G,K),G.return=W,G):(G=Ko(K.type,K.key,K.props,null,W.mode,dt),Ks(G,K),G.return=W,G)}function J(W,G,K,dt){return G===null||G.tag!==4||G.stateNode.containerInfo!==K.containerInfo||G.stateNode.implementation!==K.implementation?(G=Jc(K,W.mode,dt),G.return=W,G):(G=c(G,K.children||[]),G.return=W,G)}function ut(W,G,K,dt,Zt){return G===null||G.tag!==7?(G=Qa(K,W.mode,dt,Zt),G.return=W,G):(G=c(G,K),G.return=W,G)}function mt(W,G,K){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return G=Qc(""+G,W.mode,K),G.return=W,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case M:return K=Ko(G.type,G.key,G.props,null,W.mode,K),Ks(K,G),K.return=W,K;case A:return G=Jc(G,W.mode,K),G.return=W,G;case _t:return G=nr(G),mt(W,G,K)}if(et(G)||ft(G))return G=Qa(G,W.mode,K,null),G.return=W,G;if(typeof G.then=="function")return mt(W,il(G),K);if(G.$$typeof===w)return mt(W,$o(W,G),K);al(W,G)}return null}function $(W,G,K,dt){var Zt=G!==null?G.key:null;if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return Zt!==null?null:E(W,G,""+K,dt);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case M:return K.key===Zt?B(W,G,K,dt):null;case A:return K.key===Zt?J(W,G,K,dt):null;case _t:return K=nr(K),$(W,G,K,dt)}if(et(K)||ft(K))return Zt!==null?null:ut(W,G,K,dt,null);if(typeof K.then=="function")return $(W,G,il(K),dt);if(K.$$typeof===w)return $(W,G,$o(W,K),dt);al(W,K)}return null}function st(W,G,K,dt,Zt){if(typeof dt=="string"&&dt!==""||typeof dt=="number"||typeof dt=="bigint")return W=W.get(K)||null,E(G,W,""+dt,Zt);if(typeof dt=="object"&&dt!==null){switch(dt.$$typeof){case M:return W=W.get(dt.key===null?K:dt.key)||null,B(G,W,dt,Zt);case A:return W=W.get(dt.key===null?K:dt.key)||null,J(G,W,dt,Zt);case _t:return dt=nr(dt),st(W,G,K,dt,Zt)}if(et(dt)||ft(dt))return W=W.get(K)||null,ut(G,W,dt,Zt,null);if(typeof dt.then=="function")return st(W,G,K,il(dt),Zt);if(dt.$$typeof===w)return st(W,G,K,$o(G,dt),Zt);al(G,dt)}return null}function Ft(W,G,K,dt){for(var Zt=null,Ae=null,Gt=G,fe=G=0,ye=null;Gt!==null&&fe<K.length;fe++){Gt.index>fe?(ye=Gt,Gt=null):ye=Gt.sibling;var be=$(W,Gt,K[fe],dt);if(be===null){Gt===null&&(Gt=ye);break}t&&Gt&&be.alternate===null&&n(W,Gt),G=f(be,G,fe),Ae===null?Zt=be:Ae.sibling=be,Ae=be,Gt=ye}if(fe===K.length)return a(W,Gt),xe&&Ii(W,fe),Zt;if(Gt===null){for(;fe<K.length;fe++)Gt=mt(W,K[fe],dt),Gt!==null&&(G=f(Gt,G,fe),Ae===null?Zt=Gt:Ae.sibling=Gt,Ae=Gt);return xe&&Ii(W,fe),Zt}for(Gt=r(Gt);fe<K.length;fe++)ye=st(Gt,W,fe,K[fe],dt),ye!==null&&(t&&ye.alternate!==null&&Gt.delete(ye.key===null?fe:ye.key),G=f(ye,G,fe),Ae===null?Zt=ye:Ae.sibling=ye,Ae=ye);return t&&Gt.forEach(function(Oa){return n(W,Oa)}),xe&&Ii(W,fe),Zt}function te(W,G,K,dt){if(K==null)throw Error(s(151));for(var Zt=null,Ae=null,Gt=G,fe=G=0,ye=null,be=K.next();Gt!==null&&!be.done;fe++,be=K.next()){Gt.index>fe?(ye=Gt,Gt=null):ye=Gt.sibling;var Oa=$(W,Gt,be.value,dt);if(Oa===null){Gt===null&&(Gt=ye);break}t&&Gt&&Oa.alternate===null&&n(W,Gt),G=f(Oa,G,fe),Ae===null?Zt=Oa:Ae.sibling=Oa,Ae=Oa,Gt=ye}if(be.done)return a(W,Gt),xe&&Ii(W,fe),Zt;if(Gt===null){for(;!be.done;fe++,be=K.next())be=mt(W,be.value,dt),be!==null&&(G=f(be,G,fe),Ae===null?Zt=be:Ae.sibling=be,Ae=be);return xe&&Ii(W,fe),Zt}for(Gt=r(Gt);!be.done;fe++,be=K.next())be=st(Gt,W,fe,be.value,dt),be!==null&&(t&&be.alternate!==null&&Gt.delete(be.key===null?fe:be.key),G=f(be,G,fe),Ae===null?Zt=be:Ae.sibling=be,Ae=be);return t&&Gt.forEach(function(qS){return n(W,qS)}),xe&&Ii(W,fe),Zt}function Pe(W,G,K,dt){if(typeof K=="object"&&K!==null&&K.type===b&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case M:t:{for(var Zt=K.key;G!==null;){if(G.key===Zt){if(Zt=K.type,Zt===b){if(G.tag===7){a(W,G.sibling),dt=c(G,K.props.children),dt.return=W,W=dt;break t}}else if(G.elementType===Zt||typeof Zt=="object"&&Zt!==null&&Zt.$$typeof===_t&&nr(Zt)===G.type){a(W,G.sibling),dt=c(G,K.props),Ks(dt,K),dt.return=W,W=dt;break t}a(W,G);break}else n(W,G);G=G.sibling}K.type===b?(dt=Qa(K.props.children,W.mode,dt,K.key),dt.return=W,W=dt):(dt=Ko(K.type,K.key,K.props,null,W.mode,dt),Ks(dt,K),dt.return=W,W=dt)}return _(W);case A:t:{for(Zt=K.key;G!==null;){if(G.key===Zt)if(G.tag===4&&G.stateNode.containerInfo===K.containerInfo&&G.stateNode.implementation===K.implementation){a(W,G.sibling),dt=c(G,K.children||[]),dt.return=W,W=dt;break t}else{a(W,G);break}else n(W,G);G=G.sibling}dt=Jc(K,W.mode,dt),dt.return=W,W=dt}return _(W);case _t:return K=nr(K),Pe(W,G,K,dt)}if(et(K))return Ft(W,G,K,dt);if(ft(K)){if(Zt=ft(K),typeof Zt!="function")throw Error(s(150));return K=Zt.call(K),te(W,G,K,dt)}if(typeof K.then=="function")return Pe(W,G,il(K),dt);if(K.$$typeof===w)return Pe(W,G,$o(W,K),dt);al(W,K)}return typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint"?(K=""+K,G!==null&&G.tag===6?(a(W,G.sibling),dt=c(G,K),dt.return=W,W=dt):(a(W,G),dt=Qc(K,W.mode,dt),dt.return=W,W=dt),_(W)):a(W,G)}return function(W,G,K,dt){try{Zs=0;var Zt=Pe(W,G,K,dt);return Hr=null,Zt}catch(Gt){if(Gt===Fr||Gt===el)throw Gt;var Ae=jn(29,Gt,null,W.mode);return Ae.lanes=dt,Ae.return=W,Ae}finally{}}}var ar=Od(!0),zd=Od(!1),_a=!1;function uu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function fu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function va(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Sa(t,n,a){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(Ce&2)!==0){var c=r.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),r.pending=n,n=Zo(t),vd(t,null,a),n}return jo(t,r,n,a),Zo(t)}function Qs(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,ln(t,a)}}function hu(t,n){var a=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var _={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=_:f=f.next=_,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:r.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:r.shared,callbacks:r.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var du=!1;function Js(){if(du){var t=Ir;if(t!==null)throw t}}function $s(t,n,a,r){du=!1;var c=t.updateQueue;_a=!1;var f=c.firstBaseUpdate,_=c.lastBaseUpdate,E=c.shared.pending;if(E!==null){c.shared.pending=null;var B=E,J=B.next;B.next=null,_===null?f=J:_.next=J,_=B;var ut=t.alternate;ut!==null&&(ut=ut.updateQueue,E=ut.lastBaseUpdate,E!==_&&(E===null?ut.firstBaseUpdate=J:E.next=J,ut.lastBaseUpdate=B))}if(f!==null){var mt=c.baseState;_=0,ut=J=B=null,E=f;do{var $=E.lane&-536870913,st=$!==E.lane;if(st?(Se&$)===$:(r&$)===$){$!==0&&$===Br&&(du=!0),ut!==null&&(ut=ut.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});t:{var Ft=t,te=E;$=n;var Pe=a;switch(te.tag){case 1:if(Ft=te.payload,typeof Ft=="function"){mt=Ft.call(Pe,mt,$);break t}mt=Ft;break t;case 3:Ft.flags=Ft.flags&-65537|128;case 0:if(Ft=te.payload,$=typeof Ft=="function"?Ft.call(Pe,mt,$):Ft,$==null)break t;mt=S({},mt,$);break t;case 2:_a=!0}}$=E.callback,$!==null&&(t.flags|=64,st&&(t.flags|=8192),st=c.callbacks,st===null?c.callbacks=[$]:st.push($))}else st={lane:$,tag:E.tag,payload:E.payload,callback:E.callback,next:null},ut===null?(J=ut=st,B=mt):ut=ut.next=st,_|=$;if(E=E.next,E===null){if(E=c.shared.pending,E===null)break;st=E,E=st.next,st.next=null,c.lastBaseUpdate=st,c.shared.pending=null}}while(!0);ut===null&&(B=mt),c.baseState=B,c.firstBaseUpdate=J,c.lastBaseUpdate=ut,f===null&&(c.shared.lanes=0),Ta|=_,t.lanes=_,t.memoizedState=mt}}function Pd(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function Bd(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Pd(a[t],n)}var Gr=L(null),rl=L(0);function Id(t,n){t=Zi,F(rl,t),F(Gr,n),Zi=t|n.baseLanes}function pu(){F(rl,Zi),F(Gr,Gr.current)}function mu(){Zi=rl.current,V(Gr),V(rl)}var Zn=L(null),ui=null;function ya(t){var n=t.alternate;F(Qe,Qe.current&1),F(Zn,t),ui===null&&(n===null||Gr.current!==null||n.memoizedState!==null)&&(ui=t)}function gu(t){F(Qe,Qe.current),F(Zn,t),ui===null&&(ui=t)}function Fd(t){t.tag===22?(F(Qe,Qe.current),F(Zn,t),ui===null&&(ui=t)):xa()}function xa(){F(Qe,Qe.current),F(Zn,Zn.current)}function Kn(t){V(Zn),ui===t&&(ui=null),V(Qe)}var Qe=L(0);function sl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Ef(a)||Tf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Gi=0,ue=null,Oe=null,an=null,ol=!1,Vr=!1,rr=!1,ll=0,to=0,kr=null,Pv=0;function Ze(){throw Error(s(321))}function _u(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Yn(t[a],n[a]))return!1;return!0}function vu(t,n,a,r,c,f){return Gi=f,ue=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,N.H=t===null||t.memoizedState===null?Mp:Nu,rr=!1,f=a(r,c),rr=!1,Vr&&(f=Gd(n,a,r,c)),Hd(t),f}function Hd(t){N.H=io;var n=Oe!==null&&Oe.next!==null;if(Gi=0,an=Oe=ue=null,ol=!1,to=0,kr=null,n)throw Error(s(300));t===null||rn||(t=t.dependencies,t!==null&&Jo(t)&&(rn=!0))}function Gd(t,n,a,r){ue=t;var c=0;do{if(Vr&&(kr=null),to=0,Vr=!1,25<=c)throw Error(s(301));if(c+=1,an=Oe=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}N.H=Ep,f=n(a,r)}while(Vr);return f}function Bv(){var t=N.H,n=t.useState()[0];return n=typeof n.then=="function"?eo(n):n,t=t.useState()[0],(Oe!==null?Oe.memoizedState:null)!==t&&(ue.flags|=1024),n}function Su(){var t=ll!==0;return ll=0,t}function yu(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function xu(t){if(ol){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}ol=!1}Gi=0,an=Oe=ue=null,Vr=!1,to=ll=0,kr=null}function Dn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return an===null?ue.memoizedState=an=t:an=an.next=t,an}function Je(){if(Oe===null){var t=ue.alternate;t=t!==null?t.memoizedState:null}else t=Oe.next;var n=an===null?ue.memoizedState:an.next;if(n!==null)an=n,Oe=t;else{if(t===null)throw ue.alternate===null?Error(s(467)):Error(s(310));Oe=t,t={memoizedState:Oe.memoizedState,baseState:Oe.baseState,baseQueue:Oe.baseQueue,queue:Oe.queue,next:null},an===null?ue.memoizedState=an=t:an=an.next=t}return an}function cl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function eo(t){var n=to;return to+=1,kr===null&&(kr=[]),t=Ld(kr,t,n),n=ue,(an===null?n.memoizedState:an.next)===null&&(n=n.alternate,N.H=n===null||n.memoizedState===null?Mp:Nu),t}function ul(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return eo(t);if(t.$$typeof===w)return Sn(t)}throw Error(s(438,String(t)))}function Mu(t){var n=null,a=ue.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=ue.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=cl(),ue.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),r=0;r<t;r++)a[r]=U;return n.index++,a}function Vi(t,n){return typeof n=="function"?n(t):n}function fl(t){var n=Je();return Eu(n,Oe,t)}function Eu(t,n,a){var r=t.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var c=t.baseQueue,f=r.pending;if(f!==null){if(c!==null){var _=c.next;c.next=f.next,f.next=_}n.baseQueue=c=f,r.pending=null}if(f=t.baseState,c===null)t.memoizedState=f;else{n=c.next;var E=_=null,B=null,J=n,ut=!1;do{var mt=J.lane&-536870913;if(mt!==J.lane?(Se&mt)===mt:(Gi&mt)===mt){var $=J.revertLane;if($===0)B!==null&&(B=B.next={lane:0,revertLane:0,gesture:null,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null}),mt===Br&&(ut=!0);else if((Gi&$)===$){J=J.next,$===Br&&(ut=!0);continue}else mt={lane:0,revertLane:J.revertLane,gesture:null,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},B===null?(E=B=mt,_=f):B=B.next=mt,ue.lanes|=$,Ta|=$;mt=J.action,rr&&a(f,mt),f=J.hasEagerState?J.eagerState:a(f,mt)}else $={lane:mt,revertLane:J.revertLane,gesture:J.gesture,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},B===null?(E=B=$,_=f):B=B.next=$,ue.lanes|=mt,Ta|=mt;J=J.next}while(J!==null&&J!==n);if(B===null?_=f:B.next=E,!Yn(f,t.memoizedState)&&(rn=!0,ut&&(a=Ir,a!==null)))throw a;t.memoizedState=f,t.baseState=_,t.baseQueue=B,r.lastRenderedState=f}return c===null&&(r.lanes=0),[t.memoizedState,r.dispatch]}function Tu(t){var n=Je(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var r=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var _=c=c.next;do f=t(f,_.action),_=_.next;while(_!==c);Yn(f,n.memoizedState)||(rn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,r]}function Vd(t,n,a){var r=ue,c=Je(),f=xe;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var _=!Yn((Oe||c).memoizedState,a);if(_&&(c.memoizedState=a,rn=!0),c=c.queue,Ru(Wd.bind(null,r,c,t),[t]),c.getSnapshot!==n||_||an!==null&&an.memoizedState.tag&1){if(r.flags|=2048,Xr(9,{destroy:void 0},Xd.bind(null,r,c,a,n),null),He===null)throw Error(s(349));f||(Gi&127)!==0||kd(r,n,a)}return a}function kd(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=ue.updateQueue,n===null?(n=cl(),ue.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Xd(t,n,a,r){n.value=a,n.getSnapshot=r,qd(n)&&Yd(t)}function Wd(t,n,a){return a(function(){qd(n)&&Yd(t)})}function qd(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Yn(t,a)}catch{return!0}}function Yd(t){var n=Ka(t,2);n!==null&&Gn(n,t,2)}function Au(t){var n=Dn();if(typeof t=="function"){var a=t;if(t=a(),rr){zt(!0);try{a()}finally{zt(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vi,lastRenderedState:t},n}function jd(t,n,a,r){return t.baseState=a,Eu(t,Oe,typeof r=="function"?r:Vi)}function Iv(t,n,a,r,c){if(pl(t))throw Error(s(485));if(t=n.action,t!==null){var f={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){f.listeners.push(_)}};N.T!==null?a(!0):f.isTransition=!1,r(f),a=n.pending,a===null?(f.next=n.pending=f,Zd(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Zd(t,n){var a=n.action,r=n.payload,c=t.state;if(n.isTransition){var f=N.T,_={};N.T=_;try{var E=a(c,r),B=N.S;B!==null&&B(_,E),Kd(t,n,E)}catch(J){bu(t,n,J)}finally{f!==null&&_.types!==null&&(f.types=_.types),N.T=f}}else try{f=a(c,r),Kd(t,n,f)}catch(J){bu(t,n,J)}}function Kd(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){Qd(t,n,r)},function(r){return bu(t,n,r)}):Qd(t,n,a)}function Qd(t,n,a){n.status="fulfilled",n.value=a,Jd(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Zd(t,a)))}function bu(t,n,a){var r=t.pending;if(t.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,Jd(n),n=n.next;while(n!==r)}t.action=null}function Jd(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function $d(t,n){return n}function tp(t,n){if(xe){var a=He.formState;if(a!==null){t:{var r=ue;if(xe){if(Xe){e:{for(var c=Xe,f=ci;c.nodeType!==8;){if(!f){c=null;break e}if(c=fi(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){Xe=fi(c.nextSibling),r=c.data==="F!";break t}}ma(r)}r=!1}r&&(n=a[0])}}return a=Dn(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:$d,lastRenderedState:n},a.queue=r,a=Sp.bind(null,ue,r),r.dispatch=a,r=Au(!1),f=Uu.bind(null,ue,!1,r.queue),r=Dn(),c={state:n,dispatch:null,action:t,pending:null},r.queue=c,a=Iv.bind(null,ue,c,f,a),c.dispatch=a,r.memoizedState=t,[n,a,!1]}function ep(t){var n=Je();return np(n,Oe,t)}function np(t,n,a){if(n=Eu(t,n,$d)[0],t=fl(Vi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=eo(n)}catch(_){throw _===Fr?el:_}else r=n;n=Je();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(ue.flags|=2048,Xr(9,{destroy:void 0},Fv.bind(null,c,a),null)),[r,f,t]}function Fv(t,n){t.action=n}function ip(t){var n=Je(),a=Oe;if(a!==null)return np(n,a,t);Je(),n=n.memoizedState,a=Je();var r=a.queue.dispatch;return a.memoizedState=t,[n,r,!1]}function Xr(t,n,a,r){return t={tag:t,create:a,deps:r,inst:n,next:null},n=ue.updateQueue,n===null&&(n=cl(),ue.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(r=a.next,a.next=t,t.next=r,n.lastEffect=t),t}function ap(){return Je().memoizedState}function hl(t,n,a,r){var c=Dn();ue.flags|=t,c.memoizedState=Xr(1|n,{destroy:void 0},a,r===void 0?null:r)}function dl(t,n,a,r){var c=Je();r=r===void 0?null:r;var f=c.memoizedState.inst;Oe!==null&&r!==null&&_u(r,Oe.memoizedState.deps)?c.memoizedState=Xr(n,f,a,r):(ue.flags|=t,c.memoizedState=Xr(1|n,f,a,r))}function rp(t,n){hl(8390656,8,t,n)}function Ru(t,n){dl(2048,8,t,n)}function Hv(t){ue.flags|=4;var n=ue.updateQueue;if(n===null)n=cl(),ue.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function sp(t){var n=Je().memoizedState;return Hv({ref:n,nextImpl:t}),function(){if((Ce&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function op(t,n){return dl(4,2,t,n)}function lp(t,n){return dl(4,4,t,n)}function cp(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function up(t,n,a){a=a!=null?a.concat([t]):null,dl(4,4,cp.bind(null,n,t),a)}function Cu(){}function fp(t,n){var a=Je();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&_u(n,r[1])?r[0]:(a.memoizedState=[t,n],t)}function hp(t,n){var a=Je();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&_u(n,r[1]))return r[0];if(r=t(),rr){zt(!0);try{t()}finally{zt(!1)}}return a.memoizedState=[r,n],r}function wu(t,n,a){return a===void 0||(Gi&1073741824)!==0&&(Se&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=dm(),ue.lanes|=t,Ta|=t,a)}function dp(t,n,a,r){return Yn(a,n)?a:Gr.current!==null?(t=wu(t,a,r),Yn(t,n)||(rn=!0),t):(Gi&42)===0||(Gi&1073741824)!==0&&(Se&261930)===0?(rn=!0,t.memoizedState=a):(t=dm(),ue.lanes|=t,Ta|=t,n)}function pp(t,n,a,r,c){var f=X.p;X.p=f!==0&&8>f?f:8;var _=N.T,E={};N.T=E,Uu(t,!1,n,a);try{var B=c(),J=N.S;if(J!==null&&J(E,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var ut=zv(B,r);no(t,n,ut,$n(t))}else no(t,n,r,$n(t))}catch(mt){no(t,n,{then:function(){},status:"rejected",reason:mt},$n())}finally{X.p=f,_!==null&&E.types!==null&&(_.types=E.types),N.T=_}}function Gv(){}function Du(t,n,a,r){if(t.tag!==5)throw Error(s(476));var c=mp(t).queue;pp(t,c,n,Q,a===null?Gv:function(){return gp(t),a(r)})}function mp(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:Q,baseState:Q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vi,lastRenderedState:Q},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vi,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function gp(t){var n=mp(t);n.next===null&&(n=t.alternate.memoizedState),no(t,n.next.queue,{},$n())}function Lu(){return Sn(yo)}function _p(){return Je().memoizedState}function vp(){return Je().memoizedState}function Vv(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=$n();t=va(a);var r=Sa(n,t,a);r!==null&&(Gn(r,n,a),Qs(r,n,a)),n={cache:su()},t.payload=n;return}n=n.return}}function kv(t,n,a){var r=$n();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},pl(t)?yp(n,a):(a=Zc(t,n,a,r),a!==null&&(Gn(a,t,r),xp(a,n,r)))}function Sp(t,n,a){var r=$n();no(t,n,a,r)}function no(t,n,a,r){var c={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(pl(t))yp(n,c);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var _=n.lastRenderedState,E=f(_,a);if(c.hasEagerState=!0,c.eagerState=E,Yn(E,_))return jo(t,n,c,0),He===null&&Yo(),!1}catch{}finally{}if(a=Zc(t,n,c,r),a!==null)return Gn(a,t,r),xp(a,n,r),!0}return!1}function Uu(t,n,a,r){if(r={lane:2,revertLane:ff(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},pl(t)){if(n)throw Error(s(479))}else n=Zc(t,a,r,2),n!==null&&Gn(n,t,2)}function pl(t){var n=t.alternate;return t===ue||n!==null&&n===ue}function yp(t,n){Vr=ol=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function xp(t,n,a){if((a&4194048)!==0){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,ln(t,a)}}var io={readContext:Sn,use:ul,useCallback:Ze,useContext:Ze,useEffect:Ze,useImperativeHandle:Ze,useLayoutEffect:Ze,useInsertionEffect:Ze,useMemo:Ze,useReducer:Ze,useRef:Ze,useState:Ze,useDebugValue:Ze,useDeferredValue:Ze,useTransition:Ze,useSyncExternalStore:Ze,useId:Ze,useHostTransitionStatus:Ze,useFormState:Ze,useActionState:Ze,useOptimistic:Ze,useMemoCache:Ze,useCacheRefresh:Ze};io.useEffectEvent=Ze;var Mp={readContext:Sn,use:ul,useCallback:function(t,n){return Dn().memoizedState=[t,n===void 0?null:n],t},useContext:Sn,useEffect:rp,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,hl(4194308,4,cp.bind(null,n,t),a)},useLayoutEffect:function(t,n){return hl(4194308,4,t,n)},useInsertionEffect:function(t,n){hl(4,2,t,n)},useMemo:function(t,n){var a=Dn();n=n===void 0?null:n;var r=t();if(rr){zt(!0);try{t()}finally{zt(!1)}}return a.memoizedState=[r,n],r},useReducer:function(t,n,a){var r=Dn();if(a!==void 0){var c=a(n);if(rr){zt(!0);try{a(n)}finally{zt(!1)}}}else c=n;return r.memoizedState=r.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},r.queue=t,t=t.dispatch=kv.bind(null,ue,t),[r.memoizedState,t]},useRef:function(t){var n=Dn();return t={current:t},n.memoizedState=t},useState:function(t){t=Au(t);var n=t.queue,a=Sp.bind(null,ue,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Cu,useDeferredValue:function(t,n){var a=Dn();return wu(a,t,n)},useTransition:function(){var t=Au(!1);return t=pp.bind(null,ue,t.queue,!0,!1),Dn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var r=ue,c=Dn();if(xe){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),He===null)throw Error(s(349));(Se&127)!==0||kd(r,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,rp(Wd.bind(null,r,f,t),[t]),r.flags|=2048,Xr(9,{destroy:void 0},Xd.bind(null,r,f,a,n),null),a},useId:function(){var t=Dn(),n=He.identifierPrefix;if(xe){var a=Di,r=wi;a=(r&~(1<<32-Yt(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=ll++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Pv++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Lu,useFormState:tp,useActionState:tp,useOptimistic:function(t){var n=Dn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Uu.bind(null,ue,!0,a),a.dispatch=n,[t,n]},useMemoCache:Mu,useCacheRefresh:function(){return Dn().memoizedState=Vv.bind(null,ue)},useEffectEvent:function(t){var n=Dn(),a={impl:t};return n.memoizedState=a,function(){if((Ce&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Nu={readContext:Sn,use:ul,useCallback:fp,useContext:Sn,useEffect:Ru,useImperativeHandle:up,useInsertionEffect:op,useLayoutEffect:lp,useMemo:hp,useReducer:fl,useRef:ap,useState:function(){return fl(Vi)},useDebugValue:Cu,useDeferredValue:function(t,n){var a=Je();return dp(a,Oe.memoizedState,t,n)},useTransition:function(){var t=fl(Vi)[0],n=Je().memoizedState;return[typeof t=="boolean"?t:eo(t),n]},useSyncExternalStore:Vd,useId:_p,useHostTransitionStatus:Lu,useFormState:ep,useActionState:ep,useOptimistic:function(t,n){var a=Je();return jd(a,Oe,t,n)},useMemoCache:Mu,useCacheRefresh:vp};Nu.useEffectEvent=sp;var Ep={readContext:Sn,use:ul,useCallback:fp,useContext:Sn,useEffect:Ru,useImperativeHandle:up,useInsertionEffect:op,useLayoutEffect:lp,useMemo:hp,useReducer:Tu,useRef:ap,useState:function(){return Tu(Vi)},useDebugValue:Cu,useDeferredValue:function(t,n){var a=Je();return Oe===null?wu(a,t,n):dp(a,Oe.memoizedState,t,n)},useTransition:function(){var t=Tu(Vi)[0],n=Je().memoizedState;return[typeof t=="boolean"?t:eo(t),n]},useSyncExternalStore:Vd,useId:_p,useHostTransitionStatus:Lu,useFormState:ip,useActionState:ip,useOptimistic:function(t,n){var a=Je();return Oe!==null?jd(a,Oe,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Mu,useCacheRefresh:vp};Ep.useEffectEvent=sp;function Ou(t,n,a,r){n=t.memoizedState,a=a(r,n),a=a==null?n:S({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var zu={enqueueSetState:function(t,n,a){t=t._reactInternals;var r=$n(),c=va(r);c.payload=n,a!=null&&(c.callback=a),n=Sa(t,c,r),n!==null&&(Gn(n,t,r),Qs(n,t,r))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var r=$n(),c=va(r);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=Sa(t,c,r),n!==null&&(Gn(n,t,r),Qs(n,t,r))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=$n(),r=va(a);r.tag=2,n!=null&&(r.callback=n),n=Sa(t,r,a),n!==null&&(Gn(n,t,a),Qs(n,t,a))}};function Tp(t,n,a,r,c,f,_){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,f,_):n.prototype&&n.prototype.isPureReactComponent?!ks(a,r)||!ks(c,f):!0}function Ap(t,n,a,r){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==t&&zu.enqueueReplaceState(n,n.state,null)}function sr(t,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(t=t.defaultProps){a===n&&(a=S({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}function bp(t){qo(t)}function Rp(t){console.error(t)}function Cp(t){qo(t)}function ml(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function wp(t,n,a){try{var r=t.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Pu(t,n,a){return a=va(a),a.tag=3,a.payload={element:null},a.callback=function(){ml(t,n)},a}function Dp(t){return t=va(t),t.tag=3,t}function Lp(t,n,a,r){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=r.value;t.payload=function(){return c(f)},t.callback=function(){wp(n,a,r)}}var _=a.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(t.callback=function(){wp(n,a,r),typeof c!="function"&&(Aa===null?Aa=new Set([this]):Aa.add(this));var E=r.stack;this.componentDidCatch(r.value,{componentStack:E!==null?E:""})})}function Xv(t,n,a,r,c){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&Pr(n,a,c,!0),a=Zn.current,a!==null){switch(a.tag){case 31:case 13:return ui===null?Rl():a.alternate===null&&Ke===0&&(Ke=3),a.flags&=-257,a.flags|=65536,a.lanes=c,r===nl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),lf(t,r,c)),!1;case 22:return a.flags|=65536,r===nl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),lf(t,r,c)),!1}throw Error(s(435,a.tag))}return lf(t,r,c),Rl(),!1}if(xe)return n=Zn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,r!==eu&&(t=Error(s(422),{cause:r}),qs(si(t,a)))):(r!==eu&&(n=Error(s(423),{cause:r}),qs(si(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,r=si(r,a),c=Pu(t.stateNode,r,c),hu(t,c),Ke!==4&&(Ke=2)),!1;var f=Error(s(520),{cause:r});if(f=si(f,a),fo===null?fo=[f]:fo.push(f),Ke!==4&&(Ke=2),n===null)return!0;r=si(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=Pu(a.stateNode,r,t),hu(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Aa===null||!Aa.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=Dp(c),Lp(c,t,a,r),hu(a,c),!1}a=a.return}while(a!==null);return!1}var Bu=Error(s(461)),rn=!1;function yn(t,n,a,r){n.child=t===null?zd(n,null,a,r):ar(n,t.child,a,r)}function Up(t,n,a,r,c){a=a.render;var f=n.ref;if("ref"in r){var _={};for(var E in r)E!=="ref"&&(_[E]=r[E])}else _=r;return tr(n),r=vu(t,n,a,_,f,c),E=Su(),t!==null&&!rn?(yu(t,n,c),ki(t,n,c)):(xe&&E&&$c(n),n.flags|=1,yn(t,n,r,c),n.child)}function Np(t,n,a,r,c){if(t===null){var f=a.type;return typeof f=="function"&&!Kc(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Op(t,n,f,r,c)):(t=Ko(a.type,null,r,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!Wu(t,c)){var _=f.memoizedProps;if(a=a.compare,a=a!==null?a:ks,a(_,r)&&t.ref===n.ref)return ki(t,n,c)}return n.flags|=1,t=Bi(f,r),t.ref=n.ref,t.return=n,n.child=t}function Op(t,n,a,r,c){if(t!==null){var f=t.memoizedProps;if(ks(f,r)&&t.ref===n.ref)if(rn=!1,n.pendingProps=r=f,Wu(t,c))(t.flags&131072)!==0&&(rn=!0);else return n.lanes=t.lanes,ki(t,n,c)}return Iu(t,n,a,r,c)}function zp(t,n,a,r){var c=r.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(r=n.child=t.child,c=0;r!==null;)c=c|r.lanes|r.childLanes,r=r.sibling;r=c&~f}else r=0,n.child=null;return Pp(t,n,f,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&tl(n,f!==null?f.cachePool:null),f!==null?Id(n,f):pu(),Fd(n);else return r=n.lanes=536870912,Pp(t,n,f!==null?f.baseLanes|a:a,a,r)}else f!==null?(tl(n,f.cachePool),Id(n,f),xa(),n.memoizedState=null):(t!==null&&tl(n,null),pu(),xa());return yn(t,n,c,a),n.child}function ao(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Pp(t,n,a,r,c){var f=lu();return f=f===null?null:{parent:nn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&tl(n,null),pu(),Fd(n),t!==null&&Pr(t,n,r,!0),n.childLanes=c,null}function gl(t,n){return n=vl({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function Bp(t,n,a){return ar(n,t.child,null,a),t=gl(n,n.pendingProps),t.flags|=2,Kn(n),n.memoizedState=null,t}function Wv(t,n,a){var r=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(xe){if(r.mode==="hidden")return t=gl(n,r),n.lanes=536870912,ao(null,t);if(gu(n),(t=Xe)?(t=Zm(t,ci),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:da!==null?{id:wi,overflow:Di}:null,retryLane:536870912,hydrationErrors:null},a=yd(t),a.return=n,n.child=a,vn=n,Xe=null)):t=null,t===null)throw ma(n);return n.lanes=536870912,null}return gl(n,r)}var f=t.memoizedState;if(f!==null){var _=f.dehydrated;if(gu(n),c)if(n.flags&256)n.flags&=-257,n=Bp(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(rn||Pr(t,n,a,!1),c=(a&t.childLanes)!==0,rn||c){if(r=He,r!==null&&(_=On(r,a),_!==0&&_!==f.retryLane))throw f.retryLane=_,Ka(t,_),Gn(r,t,_),Bu;Rl(),n=Bp(t,n,a)}else t=f.treeContext,Xe=fi(_.nextSibling),vn=n,xe=!0,pa=null,ci=!1,t!==null&&Ed(n,t),n=gl(n,r),n.flags|=4096;return n}return t=Bi(t.child,{mode:r.mode,children:r.children}),t.ref=n.ref,n.child=t,t.return=n,t}function _l(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Iu(t,n,a,r,c){return tr(n),a=vu(t,n,a,r,void 0,c),r=Su(),t!==null&&!rn?(yu(t,n,c),ki(t,n,c)):(xe&&r&&$c(n),n.flags|=1,yn(t,n,a,c),n.child)}function Ip(t,n,a,r,c,f){return tr(n),n.updateQueue=null,a=Gd(n,r,a,c),Hd(t),r=Su(),t!==null&&!rn?(yu(t,n,f),ki(t,n,f)):(xe&&r&&$c(n),n.flags|=1,yn(t,n,a,f),n.child)}function Fp(t,n,a,r,c){if(tr(n),n.stateNode===null){var f=Ur,_=a.contextType;typeof _=="object"&&_!==null&&(f=Sn(_)),f=new a(r,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=zu,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=r,f.state=n.memoizedState,f.refs={},uu(n),_=a.contextType,f.context=typeof _=="object"&&_!==null?Sn(_):Ur,f.state=n.memoizedState,_=a.getDerivedStateFromProps,typeof _=="function"&&(Ou(n,a,_,r),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(_=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),_!==f.state&&zu.enqueueReplaceState(f,f.state,null),$s(n,r,f,c),Js(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(t===null){f=n.stateNode;var E=n.memoizedProps,B=sr(a,E);f.props=B;var J=f.context,ut=a.contextType;_=Ur,typeof ut=="object"&&ut!==null&&(_=Sn(ut));var mt=a.getDerivedStateFromProps;ut=typeof mt=="function"||typeof f.getSnapshotBeforeUpdate=="function",E=n.pendingProps!==E,ut||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(E||J!==_)&&Ap(n,f,r,_),_a=!1;var $=n.memoizedState;f.state=$,$s(n,r,f,c),Js(),J=n.memoizedState,E||$!==J||_a?(typeof mt=="function"&&(Ou(n,a,mt,r),J=n.memoizedState),(B=_a||Tp(n,a,B,r,$,J,_))?(ut||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=J),f.props=r,f.state=J,f.context=_,r=B):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{f=n.stateNode,fu(t,n),_=n.memoizedProps,ut=sr(a,_),f.props=ut,mt=n.pendingProps,$=f.context,J=a.contextType,B=Ur,typeof J=="object"&&J!==null&&(B=Sn(J)),E=a.getDerivedStateFromProps,(J=typeof E=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(_!==mt||$!==B)&&Ap(n,f,r,B),_a=!1,$=n.memoizedState,f.state=$,$s(n,r,f,c),Js();var st=n.memoizedState;_!==mt||$!==st||_a||t!==null&&t.dependencies!==null&&Jo(t.dependencies)?(typeof E=="function"&&(Ou(n,a,E,r),st=n.memoizedState),(ut=_a||Tp(n,a,ut,r,$,st,B)||t!==null&&t.dependencies!==null&&Jo(t.dependencies))?(J||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(r,st,B),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(r,st,B)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||_===t.memoizedProps&&$===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&$===t.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=st),f.props=r,f.state=st,f.context=B,r=ut):(typeof f.componentDidUpdate!="function"||_===t.memoizedProps&&$===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&$===t.memoizedState||(n.flags|=1024),r=!1)}return f=r,_l(t,n),r=(n.flags&128)!==0,f||r?(f=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&r?(n.child=ar(n,t.child,null,c),n.child=ar(n,null,a,c)):yn(t,n,a,c),n.memoizedState=f.state,t=n.child):t=ki(t,n,c),t}function Hp(t,n,a,r){return Ja(),n.flags|=256,yn(t,n,a,r),n.child}var Fu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Hu(t){return{baseLanes:t,cachePool:wd()}}function Gu(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=Jn),t}function Gp(t,n,a){var r=n.pendingProps,c=!1,f=(n.flags&128)!==0,_;if((_=f)||(_=t!==null&&t.memoizedState===null?!1:(Qe.current&2)!==0),_&&(c=!0,n.flags&=-129),_=(n.flags&32)!==0,n.flags&=-33,t===null){if(xe){if(c?ya(n):xa(),(t=Xe)?(t=Zm(t,ci),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:da!==null?{id:wi,overflow:Di}:null,retryLane:536870912,hydrationErrors:null},a=yd(t),a.return=n,n.child=a,vn=n,Xe=null)):t=null,t===null)throw ma(n);return Tf(t)?n.lanes=32:n.lanes=536870912,null}var E=r.children;return r=r.fallback,c?(xa(),c=n.mode,E=vl({mode:"hidden",children:E},c),r=Qa(r,c,a,null),E.return=n,r.return=n,E.sibling=r,n.child=E,r=n.child,r.memoizedState=Hu(a),r.childLanes=Gu(t,_,a),n.memoizedState=Fu,ao(null,r)):(ya(n),Vu(n,E))}var B=t.memoizedState;if(B!==null&&(E=B.dehydrated,E!==null)){if(f)n.flags&256?(ya(n),n.flags&=-257,n=ku(t,n,a)):n.memoizedState!==null?(xa(),n.child=t.child,n.flags|=128,n=null):(xa(),E=r.fallback,c=n.mode,r=vl({mode:"visible",children:r.children},c),E=Qa(E,c,a,null),E.flags|=2,r.return=n,E.return=n,r.sibling=E,n.child=r,ar(n,t.child,null,a),r=n.child,r.memoizedState=Hu(a),r.childLanes=Gu(t,_,a),n.memoizedState=Fu,n=ao(null,r));else if(ya(n),Tf(E)){if(_=E.nextSibling&&E.nextSibling.dataset,_)var J=_.dgst;_=J,r=Error(s(419)),r.stack="",r.digest=_,qs({value:r,source:null,stack:null}),n=ku(t,n,a)}else if(rn||Pr(t,n,a,!1),_=(a&t.childLanes)!==0,rn||_){if(_=He,_!==null&&(r=On(_,a),r!==0&&r!==B.retryLane))throw B.retryLane=r,Ka(t,r),Gn(_,t,r),Bu;Ef(E)||Rl(),n=ku(t,n,a)}else Ef(E)?(n.flags|=192,n.child=t.child,n=null):(t=B.treeContext,Xe=fi(E.nextSibling),vn=n,xe=!0,pa=null,ci=!1,t!==null&&Ed(n,t),n=Vu(n,r.children),n.flags|=4096);return n}return c?(xa(),E=r.fallback,c=n.mode,B=t.child,J=B.sibling,r=Bi(B,{mode:"hidden",children:r.children}),r.subtreeFlags=B.subtreeFlags&65011712,J!==null?E=Bi(J,E):(E=Qa(E,c,a,null),E.flags|=2),E.return=n,r.return=n,r.sibling=E,n.child=r,ao(null,r),r=n.child,E=t.child.memoizedState,E===null?E=Hu(a):(c=E.cachePool,c!==null?(B=nn._currentValue,c=c.parent!==B?{parent:B,pool:B}:c):c=wd(),E={baseLanes:E.baseLanes|a,cachePool:c}),r.memoizedState=E,r.childLanes=Gu(t,_,a),n.memoizedState=Fu,ao(t.child,r)):(ya(n),a=t.child,t=a.sibling,a=Bi(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,t!==null&&(_=n.deletions,_===null?(n.deletions=[t],n.flags|=16):_.push(t)),n.child=a,n.memoizedState=null,a)}function Vu(t,n){return n=vl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function vl(t,n){return t=jn(22,t,null,n),t.lanes=0,t}function ku(t,n,a){return ar(n,t.child,null,a),t=Vu(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Vp(t,n,a){t.lanes|=n;var r=t.alternate;r!==null&&(r.lanes|=n),au(t.return,n,a)}function Xu(t,n,a,r,c,f){var _=t.memoizedState;_===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:c,treeForkCount:f}:(_.isBackwards=n,_.rendering=null,_.renderingStartTime=0,_.last=r,_.tail=a,_.tailMode=c,_.treeForkCount=f)}function kp(t,n,a){var r=n.pendingProps,c=r.revealOrder,f=r.tail;r=r.children;var _=Qe.current,E=(_&2)!==0;if(E?(_=_&1|2,n.flags|=128):_&=1,F(Qe,_),yn(t,n,r,a),r=xe?Ws:0,!E&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Vp(t,a,n);else if(t.tag===19)Vp(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(c){case"forwards":for(a=n.child,c=null;a!==null;)t=a.alternate,t!==null&&sl(t)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),Xu(n,!1,c,a,f,r);break;case"backwards":case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&sl(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}Xu(n,!0,a,null,f,r);break;case"together":Xu(n,!1,null,null,void 0,r);break;default:n.memoizedState=null}return n.child}function ki(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Ta|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Pr(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=Bi(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Bi(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Wu(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Jo(t)))}function qv(t,n,a){switch(n.tag){case 3:kt(n,n.stateNode.containerInfo),ga(n,nn,t.memoizedState.cache),Ja();break;case 27:case 5:Xt(n);break;case 4:kt(n,n.stateNode.containerInfo);break;case 10:ga(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,gu(n),null;break;case 13:var r=n.memoizedState;if(r!==null)return r.dehydrated!==null?(ya(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Gp(t,n,a):(ya(n),t=ki(t,n,a),t!==null?t.sibling:null);ya(n);break;case 19:var c=(t.flags&128)!==0;if(r=(a&n.childLanes)!==0,r||(Pr(t,n,a,!1),r=(a&n.childLanes)!==0),c){if(r)return kp(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),F(Qe,Qe.current),r)break;return null;case 22:return n.lanes=0,zp(t,n,a,n.pendingProps);case 24:ga(n,nn,t.memoizedState.cache)}return ki(t,n,a)}function Xp(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)rn=!0;else{if(!Wu(t,a)&&(n.flags&128)===0)return rn=!1,qv(t,n,a);rn=(t.flags&131072)!==0}else rn=!1,xe&&(n.flags&1048576)!==0&&Md(n,Ws,n.index);switch(n.lanes=0,n.tag){case 16:t:{var r=n.pendingProps;if(t=nr(n.elementType),n.type=t,typeof t=="function")Kc(t)?(r=sr(t,r),n.tag=1,n=Fp(null,n,t,r,a)):(n.tag=0,n=Iu(null,n,t,r,a));else{if(t!=null){var c=t.$$typeof;if(c===P){n.tag=11,n=Up(null,n,t,r,a);break t}else if(c===z){n.tag=14,n=Np(null,n,t,r,a);break t}}throw n=k(t)||t,Error(s(306,n,""))}}return n;case 0:return Iu(t,n,n.type,n.pendingProps,a);case 1:return r=n.type,c=sr(r,n.pendingProps),Fp(t,n,r,c,a);case 3:t:{if(kt(n,n.stateNode.containerInfo),t===null)throw Error(s(387));r=n.pendingProps;var f=n.memoizedState;c=f.element,fu(t,n),$s(n,r,null,a);var _=n.memoizedState;if(r=_.cache,ga(n,nn,r),r!==f.cache&&ru(n,[nn],a,!0),Js(),r=_.element,f.isDehydrated)if(f={element:r,isDehydrated:!1,cache:_.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Hp(t,n,r,a);break t}else if(r!==c){c=si(Error(s(424)),n),qs(c),n=Hp(t,n,r,a);break t}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Xe=fi(t.firstChild),vn=n,xe=!0,pa=null,ci=!0,a=zd(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Ja(),r===c){n=ki(t,n,a);break t}yn(t,n,r,a)}n=n.child}return n;case 26:return _l(t,n),t===null?(a=eg(n.type,null,n.pendingProps,null))?n.memoizedState=a:xe||(a=n.type,t=n.pendingProps,r=Ol(xt.current).createElement(a),r[je]=n,r[cn]=t,xn(r,a,t),qt(r),n.stateNode=r):n.memoizedState=eg(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Xt(n),t===null&&xe&&(r=n.stateNode=Jm(n.type,n.pendingProps,xt.current),vn=n,ci=!0,c=Xe,wa(n.type)?(Af=c,Xe=fi(r.firstChild)):Xe=c),yn(t,n,n.pendingProps.children,a),_l(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&xe&&((c=r=Xe)&&(r=MS(r,n.type,n.pendingProps,ci),r!==null?(n.stateNode=r,vn=n,Xe=fi(r.firstChild),ci=!1,c=!0):c=!1),c||ma(n)),Xt(n),c=n.type,f=n.pendingProps,_=t!==null?t.memoizedProps:null,r=f.children,yf(c,f)?r=null:_!==null&&yf(c,_)&&(n.flags|=32),n.memoizedState!==null&&(c=vu(t,n,Bv,null,null,a),yo._currentValue=c),_l(t,n),yn(t,n,r,a),n.child;case 6:return t===null&&xe&&((t=a=Xe)&&(a=ES(a,n.pendingProps,ci),a!==null?(n.stateNode=a,vn=n,Xe=null,t=!0):t=!1),t||ma(n)),null;case 13:return Gp(t,n,a);case 4:return kt(n,n.stateNode.containerInfo),r=n.pendingProps,t===null?n.child=ar(n,null,r,a):yn(t,n,r,a),n.child;case 11:return Up(t,n,n.type,n.pendingProps,a);case 7:return yn(t,n,n.pendingProps,a),n.child;case 8:return yn(t,n,n.pendingProps.children,a),n.child;case 12:return yn(t,n,n.pendingProps.children,a),n.child;case 10:return r=n.pendingProps,ga(n,n.type,r.value),yn(t,n,r.children,a),n.child;case 9:return c=n.type._context,r=n.pendingProps.children,tr(n),c=Sn(c),r=r(c),n.flags|=1,yn(t,n,r,a),n.child;case 14:return Np(t,n,n.type,n.pendingProps,a);case 15:return Op(t,n,n.type,n.pendingProps,a);case 19:return kp(t,n,a);case 31:return Wv(t,n,a);case 22:return zp(t,n,a,n.pendingProps);case 24:return tr(n),r=Sn(nn),t===null?(c=lu(),c===null&&(c=He,f=su(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:r,cache:c},uu(n),ga(n,nn,c)):((t.lanes&a)!==0&&(fu(t,n),$s(n,null,null,a),Js()),c=t.memoizedState,f=n.memoizedState,c.parent!==r?(c={parent:r,cache:r},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),ga(n,nn,r)):(r=f.cache,ga(n,nn,r),r!==c.cache&&ru(n,[nn],a,!0))),yn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function Xi(t){t.flags|=4}function qu(t,n,a,r,c){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(c&335544128)===c)if(t.stateNode.complete)t.flags|=8192;else if(_m())t.flags|=8192;else throw ir=nl,cu}else t.flags&=-16777217}function Wp(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!sg(n))if(_m())t.flags|=8192;else throw ir=nl,cu}function Sl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Te():536870912,t.lanes|=n,jr|=n)}function ro(t,n){if(!xe)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function We(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,r=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags&65011712,r|=c.flags&65011712,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags,r|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=r,t.childLanes=a,n}function Yv(t,n,a){var r=n.pendingProps;switch(tu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return We(n),null;case 1:return We(n),null;case 3:return a=n.stateNode,r=null,t!==null&&(r=t.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),Hi(nn),Bt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(zr(n)?Xi(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,nu())),We(n),null;case 26:var c=n.type,f=n.memoizedState;return t===null?(Xi(n),f!==null?(We(n),Wp(n,f)):(We(n),qu(n,c,null,r,a))):f?f!==t.memoizedState?(Xi(n),We(n),Wp(n,f)):(We(n),n.flags&=-16777217):(t=t.memoizedProps,t!==r&&Xi(n),We(n),qu(n,c,t,r,a)),null;case 27:if(he(n),a=xt.current,c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&Xi(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return We(n),null}t=Z.current,zr(n)?Td(n):(t=Jm(c,r,a),n.stateNode=t,Xi(n))}return We(n),null;case 5:if(he(n),c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&Xi(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return We(n),null}if(f=Z.current,zr(n))Td(n);else{var _=Ol(xt.current);switch(f){case 1:f=_.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:f=_.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":f=_.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":f=_.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":f=_.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof r.is=="string"?_.createElement("select",{is:r.is}):_.createElement("select"),r.multiple?f.multiple=!0:r.size&&(f.size=r.size);break;default:f=typeof r.is=="string"?_.createElement(c,{is:r.is}):_.createElement(c)}}f[je]=n,f[cn]=r;t:for(_=n.child;_!==null;){if(_.tag===5||_.tag===6)f.appendChild(_.stateNode);else if(_.tag!==4&&_.tag!==27&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===n)break t;for(;_.sibling===null;){if(_.return===null||_.return===n)break t;_=_.return}_.sibling.return=_.return,_=_.sibling}n.stateNode=f;t:switch(xn(f,c,r),c){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break t;case"img":r=!0;break t;default:r=!1}r&&Xi(n)}}return We(n),qu(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==r&&Xi(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(t=xt.current,zr(n)){if(t=n.stateNode,a=n.memoizedProps,r=null,c=vn,c!==null)switch(c.tag){case 27:case 5:r=c.memoizedProps}t[je]=n,t=!!(t.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||Gm(t.nodeValue,a)),t||ma(n,!0)}else t=Ol(t).createTextNode(r),t[je]=n,n.stateNode=t}return We(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(r=zr(n),a!==null){if(t===null){if(!r)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[je]=n}else Ja(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;We(n),t=!1}else a=nu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(Kn(n),n):(Kn(n),null);if((n.flags&128)!==0)throw Error(s(558))}return We(n),null;case 13:if(r=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=zr(n),r!==null&&r.dehydrated!==null){if(t===null){if(!c)throw Error(s(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(s(317));c[je]=n}else Ja(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;We(n),c=!1}else c=nu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(Kn(n),n):(Kn(n),null)}return Kn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,t=t!==null&&t.memoizedState!==null,a&&(r=n.child,c=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(c=r.alternate.memoizedState.cachePool.pool),f=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(f=r.memoizedState.cachePool.pool),f!==c&&(r.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Sl(n,n.updateQueue),We(n),null);case 4:return Bt(),t===null&&mf(n.stateNode.containerInfo),We(n),null;case 10:return Hi(n.type),We(n),null;case 19:if(V(Qe),r=n.memoizedState,r===null)return We(n),null;if(c=(n.flags&128)!==0,f=r.rendering,f===null)if(c)ro(r,!1);else{if(Ke!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=sl(t),f!==null){for(n.flags|=128,ro(r,!1),t=f.updateQueue,n.updateQueue=t,Sl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Sd(a,t),a=a.sibling;return F(Qe,Qe.current&1|2),xe&&Ii(n,r.treeForkCount),n.child}t=t.sibling}r.tail!==null&&pt()>Tl&&(n.flags|=128,c=!0,ro(r,!1),n.lanes=4194304)}else{if(!c)if(t=sl(f),t!==null){if(n.flags|=128,c=!0,t=t.updateQueue,n.updateQueue=t,Sl(n,t),ro(r,!0),r.tail===null&&r.tailMode==="hidden"&&!f.alternate&&!xe)return We(n),null}else 2*pt()-r.renderingStartTime>Tl&&a!==536870912&&(n.flags|=128,c=!0,ro(r,!1),n.lanes=4194304);r.isBackwards?(f.sibling=n.child,n.child=f):(t=r.last,t!==null?t.sibling=f:n.child=f,r.last=f)}return r.tail!==null?(t=r.tail,r.rendering=t,r.tail=t.sibling,r.renderingStartTime=pt(),t.sibling=null,a=Qe.current,F(Qe,c?a&1|2:a&1),xe&&Ii(n,r.treeForkCount),t):(We(n),null);case 22:case 23:return Kn(n),mu(),r=n.memoizedState!==null,t!==null?t.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(We(n),n.subtreeFlags&6&&(n.flags|=8192)):We(n),a=n.updateQueue,a!==null&&Sl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),t!==null&&V(er),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Hi(nn),We(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function jv(t,n){switch(tu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Hi(nn),Bt(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return he(n),null;case 31:if(n.memoizedState!==null){if(Kn(n),n.alternate===null)throw Error(s(340));Ja()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(Kn(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Ja()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return V(Qe),null;case 4:return Bt(),null;case 10:return Hi(n.type),null;case 22:case 23:return Kn(n),mu(),t!==null&&V(er),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Hi(nn),null;case 25:return null;default:return null}}function qp(t,n){switch(tu(n),n.tag){case 3:Hi(nn),Bt();break;case 26:case 27:case 5:he(n);break;case 4:Bt();break;case 31:n.memoizedState!==null&&Kn(n);break;case 13:Kn(n);break;case 19:V(Qe);break;case 10:Hi(n.type);break;case 22:case 23:Kn(n),mu(),t!==null&&V(er);break;case 24:Hi(nn)}}function so(t,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var c=r.next;a=c;do{if((a.tag&t)===t){r=void 0;var f=a.create,_=a.inst;r=f(),_.destroy=r}a=a.next}while(a!==c)}}catch(E){Le(n,n.return,E)}}function Ma(t,n,a){try{var r=n.updateQueue,c=r!==null?r.lastEffect:null;if(c!==null){var f=c.next;r=f;do{if((r.tag&t)===t){var _=r.inst,E=_.destroy;if(E!==void 0){_.destroy=void 0,c=n;var B=a,J=E;try{J()}catch(ut){Le(c,B,ut)}}}r=r.next}while(r!==f)}}catch(ut){Le(n,n.return,ut)}}function Yp(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Bd(n,a)}catch(r){Le(t,t.return,r)}}}function jp(t,n,a){a.props=sr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(r){Le(t,n,r)}}function oo(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var r=t.stateNode;break;case 30:r=t.stateNode;break;default:r=t.stateNode}typeof a=="function"?t.refCleanup=a(r):a.current=r}}catch(c){Le(t,n,c)}}function Li(t,n){var a=t.ref,r=t.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(c){Le(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Le(t,n,c)}else a.current=null}function Zp(t){var n=t.type,a=t.memoizedProps,r=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break t;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(c){Le(t,t.return,c)}}function Yu(t,n,a){try{var r=t.stateNode;gS(r,t.type,a,n),r[cn]=n}catch(c){Le(t,t.return,c)}}function Kp(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&wa(t.type)||t.tag===4}function ju(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Kp(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&wa(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Zu(t,n,a){var r=t.tag;if(r===5||r===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=zi));else if(r!==4&&(r===27&&wa(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(Zu(t,n,a),t=t.sibling;t!==null;)Zu(t,n,a),t=t.sibling}function yl(t,n,a){var r=t.tag;if(r===5||r===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(r!==4&&(r===27&&wa(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(yl(t,n,a),t=t.sibling;t!==null;)yl(t,n,a),t=t.sibling}function Qp(t){var n=t.stateNode,a=t.memoizedProps;try{for(var r=t.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);xn(n,r,a),n[je]=t,n[cn]=a}catch(f){Le(t,t.return,f)}}var Wi=!1,sn=!1,Ku=!1,Jp=typeof WeakSet=="function"?WeakSet:Set,dn=null;function Zv(t,n){if(t=t.containerInfo,vf=Gl,t=ud(t),kc(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var r=a.getSelection&&a.getSelection();if(r&&r.rangeCount!==0){a=r.anchorNode;var c=r.anchorOffset,f=r.focusNode;r=r.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var _=0,E=-1,B=-1,J=0,ut=0,mt=t,$=null;e:for(;;){for(var st;mt!==a||c!==0&&mt.nodeType!==3||(E=_+c),mt!==f||r!==0&&mt.nodeType!==3||(B=_+r),mt.nodeType===3&&(_+=mt.nodeValue.length),(st=mt.firstChild)!==null;)$=mt,mt=st;for(;;){if(mt===t)break e;if($===a&&++J===c&&(E=_),$===f&&++ut===r&&(B=_),(st=mt.nextSibling)!==null)break;mt=$,$=mt.parentNode}mt=st}a=E===-1||B===-1?null:{start:E,end:B}}else a=null}a=a||{start:0,end:0}}else a=null;for(Sf={focusedElem:t,selectionRange:a},Gl=!1,dn=n;dn!==null;)if(n=dn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,dn=t;else for(;dn!==null;){switch(n=dn,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)c=t[a],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,r=a.stateNode;try{var Ft=sr(a.type,c);t=r.getSnapshotBeforeUpdate(Ft,f),r.__reactInternalSnapshotBeforeUpdate=t}catch(te){Le(a,a.return,te)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Mf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Mf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,dn=t;break}dn=n.return}}function $p(t,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:Yi(t,a),r&4&&so(5,a);break;case 1:if(Yi(t,a),r&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(_){Le(a,a.return,_)}else{var c=sr(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(_){Le(a,a.return,_)}}r&64&&Yp(a),r&512&&oo(a,a.return);break;case 3:if(Yi(t,a),r&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Bd(t,n)}catch(_){Le(a,a.return,_)}}break;case 27:n===null&&r&4&&Qp(a);case 26:case 5:Yi(t,a),n===null&&r&4&&Zp(a),r&512&&oo(a,a.return);break;case 12:Yi(t,a);break;case 31:Yi(t,a),r&4&&nm(t,a);break;case 13:Yi(t,a),r&4&&im(t,a),r&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=aS.bind(null,a),TS(t,a))));break;case 22:if(r=a.memoizedState!==null||Wi,!r){n=n!==null&&n.memoizedState!==null||sn,c=Wi;var f=sn;Wi=r,(sn=n)&&!f?ji(t,a,(a.subtreeFlags&8772)!==0):Yi(t,a),Wi=c,sn=f}break;case 30:break;default:Yi(t,a)}}function tm(t){var n=t.alternate;n!==null&&(t.alternate=null,tm(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&it(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Ye=null,Bn=!1;function qi(t,n,a){for(a=a.child;a!==null;)em(t,n,a),a=a.sibling}function em(t,n,a){if(Pt&&typeof Pt.onCommitFiberUnmount=="function")try{Pt.onCommitFiberUnmount(Jt,a)}catch{}switch(a.tag){case 26:sn||Li(a,n),qi(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:sn||Li(a,n);var r=Ye,c=Bn;wa(a.type)&&(Ye=a.stateNode,Bn=!1),qi(t,n,a),_o(a.stateNode),Ye=r,Bn=c;break;case 5:sn||Li(a,n);case 6:if(r=Ye,c=Bn,Ye=null,qi(t,n,a),Ye=r,Bn=c,Ye!==null)if(Bn)try{(Ye.nodeType===9?Ye.body:Ye.nodeName==="HTML"?Ye.ownerDocument.body:Ye).removeChild(a.stateNode)}catch(f){Le(a,n,f)}else try{Ye.removeChild(a.stateNode)}catch(f){Le(a,n,f)}break;case 18:Ye!==null&&(Bn?(t=Ye,Ym(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),ns(t)):Ym(Ye,a.stateNode));break;case 4:r=Ye,c=Bn,Ye=a.stateNode.containerInfo,Bn=!0,qi(t,n,a),Ye=r,Bn=c;break;case 0:case 11:case 14:case 15:Ma(2,a,n),sn||Ma(4,a,n),qi(t,n,a);break;case 1:sn||(Li(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&jp(a,n,r)),qi(t,n,a);break;case 21:qi(t,n,a);break;case 22:sn=(r=sn)||a.memoizedState!==null,qi(t,n,a),sn=r;break;default:qi(t,n,a)}}function nm(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{ns(t)}catch(a){Le(n,n.return,a)}}}function im(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{ns(t)}catch(a){Le(n,n.return,a)}}function Kv(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Jp),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Jp),n;default:throw Error(s(435,t.tag))}}function xl(t,n){var a=Kv(t);n.forEach(function(r){if(!a.has(r)){a.add(r);var c=rS.bind(null,t,r);r.then(c,c)}})}function In(t,n){var a=n.deletions;if(a!==null)for(var r=0;r<a.length;r++){var c=a[r],f=t,_=n,E=_;t:for(;E!==null;){switch(E.tag){case 27:if(wa(E.type)){Ye=E.stateNode,Bn=!1;break t}break;case 5:Ye=E.stateNode,Bn=!1;break t;case 3:case 4:Ye=E.stateNode.containerInfo,Bn=!0;break t}E=E.return}if(Ye===null)throw Error(s(160));em(f,_,c),Ye=null,Bn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)am(n,t),n=n.sibling}var vi=null;function am(t,n){var a=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:In(n,t),Fn(t),r&4&&(Ma(3,t,t.return),so(3,t),Ma(5,t,t.return));break;case 1:In(n,t),Fn(t),r&512&&(sn||a===null||Li(a,a.return)),r&64&&Wi&&(t=t.updateQueue,t!==null&&(r=t.callbacks,r!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?r:a.concat(r))));break;case 26:var c=vi;if(In(n,t),Fn(t),r&512&&(sn||a===null||Li(a,a.return)),r&4){var f=a!==null?a.memoizedState:null;if(r=t.memoizedState,a===null)if(r===null)if(t.stateNode===null){t:{r=t.type,a=t.memoizedProps,c=c.ownerDocument||c;e:switch(r){case"title":f=c.getElementsByTagName("title")[0],(!f||f[rt]||f[je]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(r),c.head.insertBefore(f,c.querySelector("head > title"))),xn(f,r,a),f[je]=t,qt(f),r=f;break t;case"link":var _=ag("link","href",c).get(r+(a.href||""));if(_){for(var E=0;E<_.length;E++)if(f=_[E],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){_.splice(E,1);break e}}f=c.createElement(r),xn(f,r,a),c.head.appendChild(f);break;case"meta":if(_=ag("meta","content",c).get(r+(a.content||""))){for(E=0;E<_.length;E++)if(f=_[E],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){_.splice(E,1);break e}}f=c.createElement(r),xn(f,r,a),c.head.appendChild(f);break;default:throw Error(s(468,r))}f[je]=t,qt(f),r=f}t.stateNode=r}else rg(c,t.type,t.stateNode);else t.stateNode=ig(c,r,t.memoizedProps);else f!==r?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,r===null?rg(c,t.type,t.stateNode):ig(c,r,t.memoizedProps)):r===null&&t.stateNode!==null&&Yu(t,t.memoizedProps,a.memoizedProps)}break;case 27:In(n,t),Fn(t),r&512&&(sn||a===null||Li(a,a.return)),a!==null&&r&4&&Yu(t,t.memoizedProps,a.memoizedProps);break;case 5:if(In(n,t),Fn(t),r&512&&(sn||a===null||Li(a,a.return)),t.flags&32){c=t.stateNode;try{Ar(c,"")}catch(Ft){Le(t,t.return,Ft)}}r&4&&t.stateNode!=null&&(c=t.memoizedProps,Yu(t,c,a!==null?a.memoizedProps:c)),r&1024&&(Ku=!0);break;case 6:if(In(n,t),Fn(t),r&4){if(t.stateNode===null)throw Error(s(162));r=t.memoizedProps,a=t.stateNode;try{a.nodeValue=r}catch(Ft){Le(t,t.return,Ft)}}break;case 3:if(Bl=null,c=vi,vi=zl(n.containerInfo),In(n,t),vi=c,Fn(t),r&4&&a!==null&&a.memoizedState.isDehydrated)try{ns(n.containerInfo)}catch(Ft){Le(t,t.return,Ft)}Ku&&(Ku=!1,rm(t));break;case 4:r=vi,vi=zl(t.stateNode.containerInfo),In(n,t),Fn(t),vi=r;break;case 12:In(n,t),Fn(t);break;case 31:In(n,t),Fn(t),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,xl(t,r)));break;case 13:In(n,t),Fn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(El=pt()),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,xl(t,r)));break;case 22:c=t.memoizedState!==null;var B=a!==null&&a.memoizedState!==null,J=Wi,ut=sn;if(Wi=J||c,sn=ut||B,In(n,t),sn=ut,Wi=J,Fn(t),r&8192)t:for(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||B||Wi||sn||or(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){B=a=n;try{if(f=B.stateNode,c)_=f.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none";else{E=B.stateNode;var mt=B.memoizedProps.style,$=mt!=null&&mt.hasOwnProperty("display")?mt.display:null;E.style.display=$==null||typeof $=="boolean"?"":(""+$).trim()}}catch(Ft){Le(B,B.return,Ft)}}}else if(n.tag===6){if(a===null){B=n;try{B.stateNode.nodeValue=c?"":B.memoizedProps}catch(Ft){Le(B,B.return,Ft)}}}else if(n.tag===18){if(a===null){B=n;try{var st=B.stateNode;c?jm(st,!0):jm(B.stateNode,!1)}catch(Ft){Le(B,B.return,Ft)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}r&4&&(r=t.updateQueue,r!==null&&(a=r.retryQueue,a!==null&&(r.retryQueue=null,xl(t,a))));break;case 19:In(n,t),Fn(t),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,xl(t,r)));break;case 30:break;case 21:break;default:In(n,t),Fn(t)}}function Fn(t){var n=t.flags;if(n&2){try{for(var a,r=t.return;r!==null;){if(Kp(r)){a=r;break}r=r.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var c=a.stateNode,f=ju(t);yl(t,f,c);break;case 5:var _=a.stateNode;a.flags&32&&(Ar(_,""),a.flags&=-33);var E=ju(t);yl(t,E,_);break;case 3:case 4:var B=a.stateNode.containerInfo,J=ju(t);Zu(t,J,B);break;default:throw Error(s(161))}}catch(ut){Le(t,t.return,ut)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function rm(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;rm(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function Yi(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)$p(t,n.alternate,n),n=n.sibling}function or(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Ma(4,n,n.return),or(n);break;case 1:Li(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&jp(n,n.return,a),or(n);break;case 27:_o(n.stateNode);case 26:case 5:Li(n,n.return),or(n);break;case 22:n.memoizedState===null&&or(n);break;case 30:or(n);break;default:or(n)}t=t.sibling}}function ji(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var r=n.alternate,c=t,f=n,_=f.flags;switch(f.tag){case 0:case 11:case 15:ji(c,f,a),so(4,f);break;case 1:if(ji(c,f,a),r=f,c=r.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(J){Le(r,r.return,J)}if(r=f,c=r.updateQueue,c!==null){var E=r.stateNode;try{var B=c.shared.hiddenCallbacks;if(B!==null)for(c.shared.hiddenCallbacks=null,c=0;c<B.length;c++)Pd(B[c],E)}catch(J){Le(r,r.return,J)}}a&&_&64&&Yp(f),oo(f,f.return);break;case 27:Qp(f);case 26:case 5:ji(c,f,a),a&&r===null&&_&4&&Zp(f),oo(f,f.return);break;case 12:ji(c,f,a);break;case 31:ji(c,f,a),a&&_&4&&nm(c,f);break;case 13:ji(c,f,a),a&&_&4&&im(c,f);break;case 22:f.memoizedState===null&&ji(c,f,a),oo(f,f.return);break;case 30:break;default:ji(c,f,a)}n=n.sibling}}function Qu(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Ys(a))}function Ju(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Ys(t))}function Si(t,n,a,r){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)sm(t,n,a,r),n=n.sibling}function sm(t,n,a,r){var c=n.flags;switch(n.tag){case 0:case 11:case 15:Si(t,n,a,r),c&2048&&so(9,n);break;case 1:Si(t,n,a,r);break;case 3:Si(t,n,a,r),c&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Ys(t)));break;case 12:if(c&2048){Si(t,n,a,r),t=n.stateNode;try{var f=n.memoizedProps,_=f.id,E=f.onPostCommit;typeof E=="function"&&E(_,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(B){Le(n,n.return,B)}}else Si(t,n,a,r);break;case 31:Si(t,n,a,r);break;case 13:Si(t,n,a,r);break;case 23:break;case 22:f=n.stateNode,_=n.alternate,n.memoizedState!==null?f._visibility&2?Si(t,n,a,r):lo(t,n):f._visibility&2?Si(t,n,a,r):(f._visibility|=2,Wr(t,n,a,r,(n.subtreeFlags&10256)!==0||!1)),c&2048&&Qu(_,n);break;case 24:Si(t,n,a,r),c&2048&&Ju(n.alternate,n);break;default:Si(t,n,a,r)}}function Wr(t,n,a,r,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,_=n,E=a,B=r,J=_.flags;switch(_.tag){case 0:case 11:case 15:Wr(f,_,E,B,c),so(8,_);break;case 23:break;case 22:var ut=_.stateNode;_.memoizedState!==null?ut._visibility&2?Wr(f,_,E,B,c):lo(f,_):(ut._visibility|=2,Wr(f,_,E,B,c)),c&&J&2048&&Qu(_.alternate,_);break;case 24:Wr(f,_,E,B,c),c&&J&2048&&Ju(_.alternate,_);break;default:Wr(f,_,E,B,c)}n=n.sibling}}function lo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,r=n,c=r.flags;switch(r.tag){case 22:lo(a,r),c&2048&&Qu(r.alternate,r);break;case 24:lo(a,r),c&2048&&Ju(r.alternate,r);break;default:lo(a,r)}n=n.sibling}}var co=8192;function qr(t,n,a){if(t.subtreeFlags&co)for(t=t.child;t!==null;)om(t,n,a),t=t.sibling}function om(t,n,a){switch(t.tag){case 26:qr(t,n,a),t.flags&co&&t.memoizedState!==null&&PS(a,vi,t.memoizedState,t.memoizedProps);break;case 5:qr(t,n,a);break;case 3:case 4:var r=vi;vi=zl(t.stateNode.containerInfo),qr(t,n,a),vi=r;break;case 22:t.memoizedState===null&&(r=t.alternate,r!==null&&r.memoizedState!==null?(r=co,co=16777216,qr(t,n,a),co=r):qr(t,n,a));break;default:qr(t,n,a)}}function lm(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function uo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];dn=r,um(r,t)}lm(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)cm(t),t=t.sibling}function cm(t){switch(t.tag){case 0:case 11:case 15:uo(t),t.flags&2048&&Ma(9,t,t.return);break;case 3:uo(t);break;case 12:uo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Ml(t)):uo(t);break;default:uo(t)}}function Ml(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];dn=r,um(r,t)}lm(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Ma(8,n,n.return),Ml(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Ml(n));break;default:Ml(n)}t=t.sibling}}function um(t,n){for(;dn!==null;){var a=dn;switch(a.tag){case 0:case 11:case 15:Ma(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Ys(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,dn=r;else t:for(a=t;dn!==null;){r=dn;var c=r.sibling,f=r.return;if(tm(r),r===a){dn=null;break t}if(c!==null){c.return=f,dn=c;break t}dn=f}}}var Qv={getCacheForType:function(t){var n=Sn(nn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Sn(nn).controller.signal}},Jv=typeof WeakMap=="function"?WeakMap:Map,Ce=0,He=null,_e=null,Se=0,De=0,Qn=null,Ea=!1,Yr=!1,$u=!1,Zi=0,Ke=0,Ta=0,lr=0,tf=0,Jn=0,jr=0,fo=null,Hn=null,ef=!1,El=0,fm=0,Tl=1/0,Al=null,Aa=null,un=0,ba=null,Zr=null,Ki=0,nf=0,af=null,hm=null,ho=0,rf=null;function $n(){return(Ce&2)!==0&&Se!==0?Se&-Se:N.T!==null?ff():ii()}function dm(){if(Jn===0)if((Se&536870912)===0||xe){var t=H;H<<=1,(H&3932160)===0&&(H=262144),Jn=t}else Jn=536870912;return t=Zn.current,t!==null&&(t.flags|=32),Jn}function Gn(t,n,a){(t===He&&(De===2||De===9)||t.cancelPendingCommit!==null)&&(Kr(t,0),Ra(t,Se,Jn,!1)),ie(t,a),((Ce&2)===0||t!==He)&&(t===He&&((Ce&2)===0&&(lr|=a),Ke===4&&Ra(t,Se,Jn,!1)),Ui(t))}function pm(t,n,a){if((Ce&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&t.expiredLanes)===0||jt(t,n),c=r?eS(t,n):of(t,n,!0),f=r;do{if(c===0){Yr&&!r&&Ra(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!$v(a)){c=of(t,n,!1),f=!1;continue}if(c===2){if(f=n,t.errorRecoveryDisabledLanes&f)var _=0;else _=t.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){n=_;t:{var E=t;c=fo;var B=E.current.memoizedState.isDehydrated;if(B&&(Kr(E,_).flags|=256),_=of(E,_,!1),_!==2){if($u&&!B){E.errorRecoveryDisabledLanes|=f,lr|=f,c=4;break t}f=Hn,Hn=c,f!==null&&(Hn===null?Hn=f:Hn.push.apply(Hn,f))}c=_}if(f=!1,c!==2)continue}}if(c===1){Kr(t,0),Ra(t,n,0,!0);break}t:{switch(r=t,f=c,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Ra(r,n,Jn,!Ea);break t;case 2:Hn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(c=El+300-pt(),10<c)){if(Ra(r,n,Jn,!Ea),Kt(r,0,!0)!==0)break t;Ki=n,r.timeoutHandle=Wm(mm.bind(null,r,a,Hn,Al,ef,n,Jn,lr,jr,Ea,f,"Throttled",-0,0),c);break t}mm(r,a,Hn,Al,ef,n,Jn,lr,jr,Ea,f,null,-0,0)}}break}while(!0);Ui(t)}function mm(t,n,a,r,c,f,_,E,B,J,ut,mt,$,st){if(t.timeoutHandle=-1,mt=n.subtreeFlags,mt&8192||(mt&16785408)===16785408){mt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:zi},om(n,f,mt);var Ft=(f&62914560)===f?El-pt():(f&4194048)===f?fm-pt():0;if(Ft=BS(mt,Ft),Ft!==null){Ki=f,t.cancelPendingCommit=Ft(Em.bind(null,t,n,f,a,r,c,_,E,B,ut,mt,null,$,st)),Ra(t,f,_,!J);return}}Em(t,n,f,a,r,c,_,E,B)}function $v(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var c=a[r],f=c.getSnapshot;c=c.value;try{if(!Yn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ra(t,n,a,r){n&=~tf,n&=~lr,t.suspendedLanes|=n,t.pingedLanes&=~n,r&&(t.warmLanes|=n),r=t.expirationTimes;for(var c=n;0<c;){var f=31-Yt(c),_=1<<f;r[f]=-1,c&=~_}a!==0&&Ge(t,a,n)}function bl(){return(Ce&6)===0?(po(0),!1):!0}function sf(){if(_e!==null){if(De===0)var t=_e.return;else t=_e,Fi=$a=null,xu(t),Hr=null,Zs=0,t=_e;for(;t!==null;)qp(t.alternate,t),t=t.return;_e=null}}function Kr(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,SS(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Ki=0,sf(),He=t,_e=a=Bi(t.current,null),Se=n,De=0,Qn=null,Ea=!1,Yr=jt(t,n),$u=!1,jr=Jn=tf=lr=Ta=Ke=0,Hn=fo=null,ef=!1,(n&8)!==0&&(n|=n&32);var r=t.entangledLanes;if(r!==0)for(t=t.entanglements,r&=n;0<r;){var c=31-Yt(r),f=1<<c;n|=t[c],r&=~f}return Zi=n,Yo(),a}function gm(t,n){ue=null,N.H=io,n===Fr||n===el?(n=Ud(),De=3):n===cu?(n=Ud(),De=4):De=n===Bu?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Qn=n,_e===null&&(Ke=1,ml(t,si(n,t.current)))}function _m(){var t=Zn.current;return t===null?!0:(Se&4194048)===Se?ui===null:(Se&62914560)===Se||(Se&536870912)!==0?t===ui:!1}function vm(){var t=N.H;return N.H=io,t===null?io:t}function Sm(){var t=N.A;return N.A=Qv,t}function Rl(){Ke=4,Ea||(Se&4194048)!==Se&&Zn.current!==null||(Yr=!0),(Ta&134217727)===0&&(lr&134217727)===0||He===null||Ra(He,Se,Jn,!1)}function of(t,n,a){var r=Ce;Ce|=2;var c=vm(),f=Sm();(He!==t||Se!==n)&&(Al=null,Kr(t,n)),n=!1;var _=Ke;t:do try{if(De!==0&&_e!==null){var E=_e,B=Qn;switch(De){case 8:sf(),_=6;break t;case 3:case 2:case 9:case 6:Zn.current===null&&(n=!0);var J=De;if(De=0,Qn=null,Qr(t,E,B,J),a&&Yr){_=0;break t}break;default:J=De,De=0,Qn=null,Qr(t,E,B,J)}}tS(),_=Ke;break}catch(ut){gm(t,ut)}while(!0);return n&&t.shellSuspendCounter++,Fi=$a=null,Ce=r,N.H=c,N.A=f,_e===null&&(He=null,Se=0,Yo()),_}function tS(){for(;_e!==null;)ym(_e)}function eS(t,n){var a=Ce;Ce|=2;var r=vm(),c=Sm();He!==t||Se!==n?(Al=null,Tl=pt()+500,Kr(t,n)):Yr=jt(t,n);t:do try{if(De!==0&&_e!==null){n=_e;var f=Qn;e:switch(De){case 1:De=0,Qn=null,Qr(t,n,f,1);break;case 2:case 9:if(Dd(f)){De=0,Qn=null,xm(n);break}n=function(){De!==2&&De!==9||He!==t||(De=7),Ui(t)},f.then(n,n);break t;case 3:De=7;break t;case 4:De=5;break t;case 7:Dd(f)?(De=0,Qn=null,xm(n)):(De=0,Qn=null,Qr(t,n,f,7));break;case 5:var _=null;switch(_e.tag){case 26:_=_e.memoizedState;case 5:case 27:var E=_e;if(_?sg(_):E.stateNode.complete){De=0,Qn=null;var B=E.sibling;if(B!==null)_e=B;else{var J=E.return;J!==null?(_e=J,Cl(J)):_e=null}break e}}De=0,Qn=null,Qr(t,n,f,5);break;case 6:De=0,Qn=null,Qr(t,n,f,6);break;case 8:sf(),Ke=6;break t;default:throw Error(s(462))}}nS();break}catch(ut){gm(t,ut)}while(!0);return Fi=$a=null,N.H=r,N.A=c,Ce=a,_e!==null?0:(He=null,Se=0,Yo(),Ke)}function nS(){for(;_e!==null&&!vt();)ym(_e)}function ym(t){var n=Xp(t.alternate,t,Zi);t.memoizedProps=t.pendingProps,n===null?Cl(t):_e=n}function xm(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=Ip(a,n,n.pendingProps,n.type,void 0,Se);break;case 11:n=Ip(a,n,n.pendingProps,n.type.render,n.ref,Se);break;case 5:xu(n);default:qp(a,n),n=_e=Sd(n,Zi),n=Xp(a,n,Zi)}t.memoizedProps=t.pendingProps,n===null?Cl(t):_e=n}function Qr(t,n,a,r){Fi=$a=null,xu(n),Hr=null,Zs=0;var c=n.return;try{if(Xv(t,c,n,a,Se)){Ke=1,ml(t,si(a,t.current)),_e=null;return}}catch(f){if(c!==null)throw _e=c,f;Ke=1,ml(t,si(a,t.current)),_e=null;return}n.flags&32768?(xe||r===1?t=!0:Yr||(Se&536870912)!==0?t=!1:(Ea=t=!0,(r===2||r===9||r===3||r===6)&&(r=Zn.current,r!==null&&r.tag===13&&(r.flags|=16384))),Mm(n,t)):Cl(n)}function Cl(t){var n=t;do{if((n.flags&32768)!==0){Mm(n,Ea);return}t=n.return;var a=Yv(n.alternate,n,Zi);if(a!==null){_e=a;return}if(n=n.sibling,n!==null){_e=n;return}_e=n=t}while(n!==null);Ke===0&&(Ke=5)}function Mm(t,n){do{var a=jv(t.alternate,t);if(a!==null){a.flags&=32767,_e=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){_e=t;return}_e=t=a}while(t!==null);Ke=6,_e=null}function Em(t,n,a,r,c,f,_,E,B){t.cancelPendingCommit=null;do wl();while(un!==0);if((Ce&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=jc,re(t,a,f,_,E,B),t===He&&(_e=He=null,Se=0),Zr=n,ba=t,Ki=a,nf=f,af=c,hm=r,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,sS(Wt,function(){return Cm(),null})):(t.callbackNode=null,t.callbackPriority=0),r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=N.T,N.T=null,c=X.p,X.p=2,_=Ce,Ce|=4;try{Zv(t,n,a)}finally{Ce=_,X.p=c,N.T=r}}un=1,Tm(),Am(),bm()}}function Tm(){if(un===1){un=0;var t=ba,n=Zr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=N.T,N.T=null;var r=X.p;X.p=2;var c=Ce;Ce|=4;try{am(n,t);var f=Sf,_=ud(t.containerInfo),E=f.focusedElem,B=f.selectionRange;if(_!==E&&E&&E.ownerDocument&&cd(E.ownerDocument.documentElement,E)){if(B!==null&&kc(E)){var J=B.start,ut=B.end;if(ut===void 0&&(ut=J),"selectionStart"in E)E.selectionStart=J,E.selectionEnd=Math.min(ut,E.value.length);else{var mt=E.ownerDocument||document,$=mt&&mt.defaultView||window;if($.getSelection){var st=$.getSelection(),Ft=E.textContent.length,te=Math.min(B.start,Ft),Pe=B.end===void 0?te:Math.min(B.end,Ft);!st.extend&&te>Pe&&(_=Pe,Pe=te,te=_);var W=ld(E,te),G=ld(E,Pe);if(W&&G&&(st.rangeCount!==1||st.anchorNode!==W.node||st.anchorOffset!==W.offset||st.focusNode!==G.node||st.focusOffset!==G.offset)){var K=mt.createRange();K.setStart(W.node,W.offset),st.removeAllRanges(),te>Pe?(st.addRange(K),st.extend(G.node,G.offset)):(K.setEnd(G.node,G.offset),st.addRange(K))}}}}for(mt=[],st=E;st=st.parentNode;)st.nodeType===1&&mt.push({element:st,left:st.scrollLeft,top:st.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<mt.length;E++){var dt=mt[E];dt.element.scrollLeft=dt.left,dt.element.scrollTop=dt.top}}Gl=!!vf,Sf=vf=null}finally{Ce=c,X.p=r,N.T=a}}t.current=n,un=2}}function Am(){if(un===2){un=0;var t=ba,n=Zr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=N.T,N.T=null;var r=X.p;X.p=2;var c=Ce;Ce|=4;try{$p(t,n.alternate,n)}finally{Ce=c,X.p=r,N.T=a}}un=3}}function bm(){if(un===4||un===3){un=0,St();var t=ba,n=Zr,a=Ki,r=hm;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?un=5:(un=0,Zr=ba=null,Rm(t,t.pendingLanes));var c=t.pendingLanes;if(c===0&&(Aa=null),gn(a),n=n.stateNode,Pt&&typeof Pt.onCommitFiberRoot=="function")try{Pt.onCommitFiberRoot(Jt,n,void 0,(n.current.flags&128)===128)}catch{}if(r!==null){n=N.T,c=X.p,X.p=2,N.T=null;try{for(var f=t.onRecoverableError,_=0;_<r.length;_++){var E=r[_];f(E.value,{componentStack:E.stack})}}finally{N.T=n,X.p=c}}(Ki&3)!==0&&wl(),Ui(t),c=t.pendingLanes,(a&261930)!==0&&(c&42)!==0?t===rf?ho++:(ho=0,rf=t):ho=0,po(0)}}function Rm(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Ys(n)))}function wl(){return Tm(),Am(),bm(),Cm()}function Cm(){if(un!==5)return!1;var t=ba,n=nf;nf=0;var a=gn(Ki),r=N.T,c=X.p;try{X.p=32>a?32:a,N.T=null,a=af,af=null;var f=ba,_=Ki;if(un=0,Zr=ba=null,Ki=0,(Ce&6)!==0)throw Error(s(331));var E=Ce;if(Ce|=4,cm(f.current),sm(f,f.current,_,a),Ce=E,po(0,!1),Pt&&typeof Pt.onPostCommitFiberRoot=="function")try{Pt.onPostCommitFiberRoot(Jt,f)}catch{}return!0}finally{X.p=c,N.T=r,Rm(t,n)}}function wm(t,n,a){n=si(a,n),n=Pu(t.stateNode,n,2),t=Sa(t,n,2),t!==null&&(ie(t,2),Ui(t))}function Le(t,n,a){if(t.tag===3)wm(t,t,a);else for(;n!==null;){if(n.tag===3){wm(n,t,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Aa===null||!Aa.has(r))){t=si(a,t),a=Dp(2),r=Sa(n,a,2),r!==null&&(Lp(a,r,n,t),ie(r,2),Ui(r));break}}n=n.return}}function lf(t,n,a){var r=t.pingCache;if(r===null){r=t.pingCache=new Jv;var c=new Set;r.set(n,c)}else c=r.get(n),c===void 0&&(c=new Set,r.set(n,c));c.has(a)||($u=!0,c.add(a),t=iS.bind(null,t,n,a),n.then(t,t))}function iS(t,n,a){var r=t.pingCache;r!==null&&r.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,He===t&&(Se&a)===a&&(Ke===4||Ke===3&&(Se&62914560)===Se&&300>pt()-El?(Ce&2)===0&&Kr(t,0):tf|=a,jr===Se&&(jr=0)),Ui(t)}function Dm(t,n){n===0&&(n=Te()),t=Ka(t,n),t!==null&&(ie(t,n),Ui(t))}function aS(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),Dm(t,a)}function rS(t,n){var a=0;switch(t.tag){case 31:case 13:var r=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:r=t.stateNode;break;case 22:r=t.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),Dm(t,a)}function sS(t,n){return T(t,n)}var Dl=null,Jr=null,cf=!1,Ll=!1,uf=!1,Ca=0;function Ui(t){t!==Jr&&t.next===null&&(Jr===null?Dl=Jr=t:Jr=Jr.next=t),Ll=!0,cf||(cf=!0,lS())}function po(t,n){if(!uf&&Ll){uf=!0;do for(var a=!1,r=Dl;r!==null;){if(t!==0){var c=r.pendingLanes;if(c===0)var f=0;else{var _=r.suspendedLanes,E=r.pingedLanes;f=(1<<31-Yt(42|t)+1)-1,f&=c&~(_&~E),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Om(r,f))}else f=Se,f=Kt(r,r===He?f:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(f&3)===0||jt(r,f)||(a=!0,Om(r,f));r=r.next}while(a);uf=!1}}function oS(){Lm()}function Lm(){Ll=cf=!1;var t=0;Ca!==0&&vS()&&(t=Ca);for(var n=pt(),a=null,r=Dl;r!==null;){var c=r.next,f=Um(r,n);f===0?(r.next=null,a===null?Dl=c:a.next=c,c===null&&(Jr=a)):(a=r,(t!==0||(f&3)!==0)&&(Ll=!0)),r=c}un!==0&&un!==5||po(t),Ca!==0&&(Ca=0)}function Um(t,n){for(var a=t.suspendedLanes,r=t.pingedLanes,c=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var _=31-Yt(f),E=1<<_,B=c[_];B===-1?((E&a)===0||(E&r)!==0)&&(c[_]=Re(E,n)):B<=n&&(t.expiredLanes|=E),f&=~E}if(n=He,a=Se,a=Kt(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r=t.callbackNode,a===0||t===n&&(De===2||De===9)||t.cancelPendingCommit!==null)return r!==null&&r!==null&&Y(r),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||jt(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(r!==null&&Y(r),gn(a)){case 2:case 8:a=Ut;break;case 32:a=Wt;break;case 268435456:a=yt;break;default:a=Wt}return r=Nm.bind(null,t),a=T(a,r),t.callbackPriority=n,t.callbackNode=a,n}return r!==null&&r!==null&&Y(r),t.callbackPriority=2,t.callbackNode=null,2}function Nm(t,n){if(un!==0&&un!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(wl()&&t.callbackNode!==a)return null;var r=Se;return r=Kt(t,t===He?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r===0?null:(pm(t,r,n),Um(t,pt()),t.callbackNode!=null&&t.callbackNode===a?Nm.bind(null,t):null)}function Om(t,n){if(wl())return null;pm(t,n,!0)}function lS(){yS(function(){(Ce&6)!==0?T(Tt,oS):Lm()})}function ff(){if(Ca===0){var t=Br;t===0&&(t=bt,bt<<=1,(bt&261888)===0&&(bt=256)),Ca=t}return Ca}function zm(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Fo(""+t)}function Pm(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function cS(t,n,a,r,c){if(n==="submit"&&a&&a.stateNode===c){var f=zm((c[cn]||null).action),_=r.submitter;_&&(n=(n=_[cn]||null)?zm(n.formAction):_.getAttribute("formAction"),n!==null&&(f=n,_=null));var E=new ko("action","action",null,r,c);t.push({event:E,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Ca!==0){var B=_?Pm(c,_):new FormData(c);Du(a,{pending:!0,data:B,method:c.method,action:f},null,B)}}else typeof f=="function"&&(E.preventDefault(),B=_?Pm(c,_):new FormData(c),Du(a,{pending:!0,data:B,method:c.method,action:f},f,B))},currentTarget:c}]})}}for(var hf=0;hf<Yc.length;hf++){var df=Yc[hf],uS=df.toLowerCase(),fS=df[0].toUpperCase()+df.slice(1);_i(uS,"on"+fS)}_i(dd,"onAnimationEnd"),_i(pd,"onAnimationIteration"),_i(md,"onAnimationStart"),_i("dblclick","onDoubleClick"),_i("focusin","onFocus"),_i("focusout","onBlur"),_i(Rv,"onTransitionRun"),_i(Cv,"onTransitionStart"),_i(wv,"onTransitionCancel"),_i(gd,"onTransitionEnd"),$e("onMouseEnter",["mouseout","mouseover"]),$e("onMouseLeave",["mouseout","mouseover"]),$e("onPointerEnter",["pointerout","pointerover"]),$e("onPointerLeave",["pointerout","pointerover"]),we("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),we("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),we("onBeforeInput",["compositionend","keypress","textInput","paste"]),we("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),we("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),we("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var mo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),hS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(mo));function Bm(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var r=t[a],c=r.event;r=r.listeners;t:{var f=void 0;if(n)for(var _=r.length-1;0<=_;_--){var E=r[_],B=E.instance,J=E.currentTarget;if(E=E.listener,B!==f&&c.isPropagationStopped())break t;f=E,c.currentTarget=J;try{f(c)}catch(ut){qo(ut)}c.currentTarget=null,f=B}else for(_=0;_<r.length;_++){if(E=r[_],B=E.instance,J=E.currentTarget,E=E.listener,B!==f&&c.isPropagationStopped())break t;f=E,c.currentTarget=J;try{f(c)}catch(ut){qo(ut)}c.currentTarget=null,f=B}}}}function ve(t,n){var a=n[Us];a===void 0&&(a=n[Us]=new Set);var r=t+"__bubble";a.has(r)||(Im(n,t,2,!1),a.add(r))}function pf(t,n,a){var r=0;n&&(r|=4),Im(a,t,r,n)}var Ul="_reactListening"+Math.random().toString(36).slice(2);function mf(t){if(!t[Ul]){t[Ul]=!0,se.forEach(function(a){a!=="selectionchange"&&(hS.has(a)||pf(a,!1,t),pf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Ul]||(n[Ul]=!0,pf("selectionchange",!1,n))}}function Im(t,n,a,r){switch(dg(n)){case 2:var c=HS;break;case 8:c=GS;break;default:c=Df}a=c.bind(null,n,a,t),c=void 0,!Oc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),r?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function gf(t,n,a,r,c){var f=r;if((n&1)===0&&(n&2)===0&&r!==null)t:for(;;){if(r===null)return;var _=r.tag;if(_===3||_===4){var E=r.stateNode.containerInfo;if(E===c)break;if(_===4)for(_=r.return;_!==null;){var B=_.tag;if((B===3||B===4)&&_.stateNode.containerInfo===c)return;_=_.return}for(;E!==null;){if(_=Ot(E),_===null)return;if(B=_.tag,B===5||B===6||B===26||B===27){r=f=_;continue t}E=E.parentNode}}r=r.return}kh(function(){var J=f,ut=Uc(a),mt=[];t:{var $=_d.get(t);if($!==void 0){var st=ko,Ft=t;switch(t){case"keypress":if(Go(a)===0)break t;case"keydown":case"keyup":st=rv;break;case"focusin":Ft="focus",st=Ic;break;case"focusout":Ft="blur",st=Ic;break;case"beforeblur":case"afterblur":st=Ic;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":st=qh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":st=Y0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":st=lv;break;case dd:case pd:case md:st=K0;break;case gd:st=uv;break;case"scroll":case"scrollend":st=W0;break;case"wheel":st=hv;break;case"copy":case"cut":case"paste":st=J0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":st=jh;break;case"toggle":case"beforetoggle":st=pv}var te=(n&4)!==0,Pe=!te&&(t==="scroll"||t==="scrollend"),W=te?$!==null?$+"Capture":null:$;te=[];for(var G=J,K;G!==null;){var dt=G;if(K=dt.stateNode,dt=dt.tag,dt!==5&&dt!==26&&dt!==27||K===null||W===null||(dt=Ps(G,W),dt!=null&&te.push(go(G,dt,K))),Pe)break;G=G.return}0<te.length&&($=new st($,Ft,null,a,ut),mt.push({event:$,listeners:te}))}}if((n&7)===0){t:{if($=t==="mouseover"||t==="pointerover",st=t==="mouseout"||t==="pointerout",$&&a!==Lc&&(Ft=a.relatedTarget||a.fromElement)&&(Ot(Ft)||Ft[la]))break t;if((st||$)&&($=ut.window===ut?ut:($=ut.ownerDocument)?$.defaultView||$.parentWindow:window,st?(Ft=a.relatedTarget||a.toElement,st=J,Ft=Ft?Ot(Ft):null,Ft!==null&&(Pe=u(Ft),te=Ft.tag,Ft!==Pe||te!==5&&te!==27&&te!==6)&&(Ft=null)):(st=null,Ft=J),st!==Ft)){if(te=qh,dt="onMouseLeave",W="onMouseEnter",G="mouse",(t==="pointerout"||t==="pointerover")&&(te=jh,dt="onPointerLeave",W="onPointerEnter",G="pointer"),Pe=st==null?$:Qt(st),K=Ft==null?$:Qt(Ft),$=new te(dt,G+"leave",st,a,ut),$.target=Pe,$.relatedTarget=K,dt=null,Ot(ut)===J&&(te=new te(W,G+"enter",Ft,a,ut),te.target=K,te.relatedTarget=Pe,dt=te),Pe=dt,st&&Ft)e:{for(te=dS,W=st,G=Ft,K=0,dt=W;dt;dt=te(dt))K++;dt=0;for(var Zt=G;Zt;Zt=te(Zt))dt++;for(;0<K-dt;)W=te(W),K--;for(;0<dt-K;)G=te(G),dt--;for(;K--;){if(W===G||G!==null&&W===G.alternate){te=W;break e}W=te(W),G=te(G)}te=null}else te=null;st!==null&&Fm(mt,$,st,te,!1),Ft!==null&&Pe!==null&&Fm(mt,Pe,Ft,te,!0)}}t:{if($=J?Qt(J):window,st=$.nodeName&&$.nodeName.toLowerCase(),st==="select"||st==="input"&&$.type==="file")var Ae=nd;else if(td($))if(id)Ae=Tv;else{Ae=Mv;var Gt=xv}else st=$.nodeName,!st||st.toLowerCase()!=="input"||$.type!=="checkbox"&&$.type!=="radio"?J&&Dc(J.elementType)&&(Ae=nd):Ae=Ev;if(Ae&&(Ae=Ae(t,J))){ed(mt,Ae,a,ut);break t}Gt&&Gt(t,$,J),t==="focusout"&&J&&$.type==="number"&&J.memoizedProps.value!=null&&wc($,"number",$.value)}switch(Gt=J?Qt(J):window,t){case"focusin":(td(Gt)||Gt.contentEditable==="true")&&(wr=Gt,Xc=J,Xs=null);break;case"focusout":Xs=Xc=wr=null;break;case"mousedown":Wc=!0;break;case"contextmenu":case"mouseup":case"dragend":Wc=!1,fd(mt,a,ut);break;case"selectionchange":if(bv)break;case"keydown":case"keyup":fd(mt,a,ut)}var fe;if(Hc)t:{switch(t){case"compositionstart":var ye="onCompositionStart";break t;case"compositionend":ye="onCompositionEnd";break t;case"compositionupdate":ye="onCompositionUpdate";break t}ye=void 0}else Cr?Jh(t,a)&&(ye="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(ye="onCompositionStart");ye&&(Zh&&a.locale!=="ko"&&(Cr||ye!=="onCompositionStart"?ye==="onCompositionEnd"&&Cr&&(fe=Xh()):(ha=ut,zc="value"in ha?ha.value:ha.textContent,Cr=!0)),Gt=Nl(J,ye),0<Gt.length&&(ye=new Yh(ye,t,null,a,ut),mt.push({event:ye,listeners:Gt}),fe?ye.data=fe:(fe=$h(a),fe!==null&&(ye.data=fe)))),(fe=gv?_v(t,a):vv(t,a))&&(ye=Nl(J,"onBeforeInput"),0<ye.length&&(Gt=new Yh("onBeforeInput","beforeinput",null,a,ut),mt.push({event:Gt,listeners:ye}),Gt.data=fe)),cS(mt,t,J,a,ut)}Bm(mt,n)})}function go(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Nl(t,n){for(var a=n+"Capture",r=[];t!==null;){var c=t,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Ps(t,a),c!=null&&r.unshift(go(t,c,f)),c=Ps(t,n),c!=null&&r.push(go(t,c,f))),t.tag===3)return r;t=t.return}return[]}function dS(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Fm(t,n,a,r,c){for(var f=n._reactName,_=[];a!==null&&a!==r;){var E=a,B=E.alternate,J=E.stateNode;if(E=E.tag,B!==null&&B===r)break;E!==5&&E!==26&&E!==27||J===null||(B=J,c?(J=Ps(a,f),J!=null&&_.unshift(go(a,J,B))):c||(J=Ps(a,f),J!=null&&_.push(go(a,J,B)))),a=a.return}_.length!==0&&t.push({event:n,listeners:_})}var pS=/\r\n?/g,mS=/\u0000|\uFFFD/g;function Hm(t){return(typeof t=="string"?t:""+t).replace(pS,`
`).replace(mS,"")}function Gm(t,n){return n=Hm(n),Hm(t)===n}function ze(t,n,a,r,c,f){switch(a){case"children":typeof r=="string"?n==="body"||n==="textarea"&&r===""||Ar(t,r):(typeof r=="number"||typeof r=="bigint")&&n!=="body"&&Ar(t,""+r);break;case"className":Fe(t,"class",r);break;case"tabIndex":Fe(t,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":Fe(t,a,r);break;case"style":Gh(t,r,f);break;case"data":if(n!=="object"){Fe(t,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=Fo(""+r),t.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&ze(t,n,"name",c.name,c,null),ze(t,n,"formEncType",c.formEncType,c,null),ze(t,n,"formMethod",c.formMethod,c,null),ze(t,n,"formTarget",c.formTarget,c,null)):(ze(t,n,"encType",c.encType,c,null),ze(t,n,"method",c.method,c,null),ze(t,n,"target",c.target,c,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=Fo(""+r),t.setAttribute(a,r);break;case"onClick":r!=null&&(t.onclick=zi);break;case"onScroll":r!=null&&ve("scroll",t);break;case"onScrollEnd":r!=null&&ve("scrollend",t);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":t.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){t.removeAttribute("xlink:href");break}a=Fo(""+r),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""+r):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":r===!0?t.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,r):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?t.setAttribute(a,r):t.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?t.removeAttribute(a):t.setAttribute(a,r);break;case"popover":ve("beforetoggle",t),ve("toggle",t),ca(t,"popover",r);break;case"xlinkActuate":_n(t,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":_n(t,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":_n(t,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":_n(t,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":_n(t,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":_n(t,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":_n(t,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":_n(t,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":_n(t,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":ca(t,"is",r);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=k0.get(a)||a,ca(t,a,r))}}function _f(t,n,a,r,c,f){switch(a){case"style":Gh(t,r,f);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof r=="string"?Ar(t,r):(typeof r=="number"||typeof r=="bigint")&&Ar(t,""+r);break;case"onScroll":r!=null&&ve("scroll",t);break;case"onScrollEnd":r!=null&&ve("scrollend",t);break;case"onClick":r!=null&&(t.onclick=zi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!oe.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=t[cn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,c),typeof r=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,r,c);break t}a in t?t[a]=r:r===!0?t.setAttribute(a,""):ca(t,a,r)}}}function xn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ve("error",t),ve("load",t);var r=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var _=a[f];if(_!=null)switch(f){case"src":r=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:ze(t,n,f,_,a,null)}}c&&ze(t,n,"srcSet",a.srcSet,a,null),r&&ze(t,n,"src",a.src,a,null);return;case"input":ve("invalid",t);var E=f=_=c=null,B=null,J=null;for(r in a)if(a.hasOwnProperty(r)){var ut=a[r];if(ut!=null)switch(r){case"name":c=ut;break;case"type":_=ut;break;case"checked":B=ut;break;case"defaultChecked":J=ut;break;case"value":f=ut;break;case"defaultValue":E=ut;break;case"children":case"dangerouslySetInnerHTML":if(ut!=null)throw Error(s(137,n));break;default:ze(t,n,r,ut,a,null)}}zs(t,f,E,B,J,_,c,!1);return;case"select":ve("invalid",t),r=_=f=null;for(c in a)if(a.hasOwnProperty(c)&&(E=a[c],E!=null))switch(c){case"value":f=E;break;case"defaultValue":_=E;break;case"multiple":r=E;default:ze(t,n,c,E,a,null)}n=f,a=_,t.multiple=!!r,n!=null?Tr(t,!!r,n,!1):a!=null&&Tr(t,!!r,a,!0);return;case"textarea":ve("invalid",t),f=c=r=null;for(_ in a)if(a.hasOwnProperty(_)&&(E=a[_],E!=null))switch(_){case"value":r=E;break;case"defaultValue":c=E;break;case"children":f=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(s(91));break;default:ze(t,n,_,E,a,null)}Fh(t,r,c,f);return;case"option":for(B in a)if(a.hasOwnProperty(B)&&(r=a[B],r!=null))switch(B){case"selected":t.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:ze(t,n,B,r,a,null)}return;case"dialog":ve("beforetoggle",t),ve("toggle",t),ve("cancel",t),ve("close",t);break;case"iframe":case"object":ve("load",t);break;case"video":case"audio":for(r=0;r<mo.length;r++)ve(mo[r],t);break;case"image":ve("error",t),ve("load",t);break;case"details":ve("toggle",t);break;case"embed":case"source":case"link":ve("error",t),ve("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(J in a)if(a.hasOwnProperty(J)&&(r=a[J],r!=null))switch(J){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:ze(t,n,J,r,a,null)}return;default:if(Dc(n)){for(ut in a)a.hasOwnProperty(ut)&&(r=a[ut],r!==void 0&&_f(t,n,ut,r,a,void 0));return}}for(E in a)a.hasOwnProperty(E)&&(r=a[E],r!=null&&ze(t,n,E,r,a,null))}function gS(t,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,_=null,E=null,B=null,J=null,ut=null;for(st in a){var mt=a[st];if(a.hasOwnProperty(st)&&mt!=null)switch(st){case"checked":break;case"value":break;case"defaultValue":B=mt;default:r.hasOwnProperty(st)||ze(t,n,st,null,r,mt)}}for(var $ in r){var st=r[$];if(mt=a[$],r.hasOwnProperty($)&&(st!=null||mt!=null))switch($){case"type":f=st;break;case"name":c=st;break;case"checked":J=st;break;case"defaultChecked":ut=st;break;case"value":_=st;break;case"defaultValue":E=st;break;case"children":case"dangerouslySetInnerHTML":if(st!=null)throw Error(s(137,n));break;default:st!==mt&&ze(t,n,$,st,r,mt)}}Os(t,_,E,B,J,ut,f,c);return;case"select":st=_=E=$=null;for(f in a)if(B=a[f],a.hasOwnProperty(f)&&B!=null)switch(f){case"value":break;case"multiple":st=B;default:r.hasOwnProperty(f)||ze(t,n,f,null,r,B)}for(c in r)if(f=r[c],B=a[c],r.hasOwnProperty(c)&&(f!=null||B!=null))switch(c){case"value":$=f;break;case"defaultValue":E=f;break;case"multiple":_=f;default:f!==B&&ze(t,n,c,f,r,B)}n=E,a=_,r=st,$!=null?Tr(t,!!a,$,!1):!!r!=!!a&&(n!=null?Tr(t,!!a,n,!0):Tr(t,!!a,a?[]:"",!1));return;case"textarea":st=$=null;for(E in a)if(c=a[E],a.hasOwnProperty(E)&&c!=null&&!r.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:ze(t,n,E,null,r,c)}for(_ in r)if(c=r[_],f=a[_],r.hasOwnProperty(_)&&(c!=null||f!=null))switch(_){case"value":$=c;break;case"defaultValue":st=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(s(91));break;default:c!==f&&ze(t,n,_,c,r,f)}Ih(t,$,st);return;case"option":for(var Ft in a)if($=a[Ft],a.hasOwnProperty(Ft)&&$!=null&&!r.hasOwnProperty(Ft))switch(Ft){case"selected":t.selected=!1;break;default:ze(t,n,Ft,null,r,$)}for(B in r)if($=r[B],st=a[B],r.hasOwnProperty(B)&&$!==st&&($!=null||st!=null))switch(B){case"selected":t.selected=$&&typeof $!="function"&&typeof $!="symbol";break;default:ze(t,n,B,$,r,st)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var te in a)$=a[te],a.hasOwnProperty(te)&&$!=null&&!r.hasOwnProperty(te)&&ze(t,n,te,null,r,$);for(J in r)if($=r[J],st=a[J],r.hasOwnProperty(J)&&$!==st&&($!=null||st!=null))switch(J){case"children":case"dangerouslySetInnerHTML":if($!=null)throw Error(s(137,n));break;default:ze(t,n,J,$,r,st)}return;default:if(Dc(n)){for(var Pe in a)$=a[Pe],a.hasOwnProperty(Pe)&&$!==void 0&&!r.hasOwnProperty(Pe)&&_f(t,n,Pe,void 0,r,$);for(ut in r)$=r[ut],st=a[ut],!r.hasOwnProperty(ut)||$===st||$===void 0&&st===void 0||_f(t,n,ut,$,r,st);return}}for(var W in a)$=a[W],a.hasOwnProperty(W)&&$!=null&&!r.hasOwnProperty(W)&&ze(t,n,W,null,r,$);for(mt in r)$=r[mt],st=a[mt],!r.hasOwnProperty(mt)||$===st||$==null&&st==null||ze(t,n,mt,$,r,st)}function Vm(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function _S(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var c=a[r],f=c.transferSize,_=c.initiatorType,E=c.duration;if(f&&E&&Vm(_)){for(_=0,E=c.responseEnd,r+=1;r<a.length;r++){var B=a[r],J=B.startTime;if(J>E)break;var ut=B.transferSize,mt=B.initiatorType;ut&&Vm(mt)&&(B=B.responseEnd,_+=ut*(B<E?1:(E-J)/(B-J)))}if(--r,n+=8*(f+_)/(c.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var vf=null,Sf=null;function Ol(t){return t.nodeType===9?t:t.ownerDocument}function km(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Xm(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function yf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var xf=null;function vS(){var t=window.event;return t&&t.type==="popstate"?t===xf?!1:(xf=t,!0):(xf=null,!1)}var Wm=typeof setTimeout=="function"?setTimeout:void 0,SS=typeof clearTimeout=="function"?clearTimeout:void 0,qm=typeof Promise=="function"?Promise:void 0,yS=typeof queueMicrotask=="function"?queueMicrotask:typeof qm<"u"?function(t){return qm.resolve(null).then(t).catch(xS)}:Wm;function xS(t){setTimeout(function(){throw t})}function wa(t){return t==="head"}function Ym(t,n){var a=n,r=0;do{var c=a.nextSibling;if(t.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(r===0){t.removeChild(c),ns(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")_o(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,_o(a);for(var f=a.firstChild;f;){var _=f.nextSibling,E=f.nodeName;f[rt]||E==="SCRIPT"||E==="STYLE"||E==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=_}}else a==="body"&&_o(t.ownerDocument.body);a=c}while(a);ns(n)}function jm(t,n){var a=t;t=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=r}while(a)}function Mf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Mf(a),it(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function MS(t,n,a,r){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(r){if(!t[rt])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=fi(t.nextSibling),t===null)break}return null}function ES(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=fi(t.nextSibling),t===null))return null;return t}function Zm(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=fi(t.nextSibling),t===null))return null;return t}function Ef(t){return t.data==="$?"||t.data==="$~"}function Tf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function TS(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),t._reactRetry=r}}function fi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Af=null;function Km(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return fi(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function Qm(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function Jm(t,n,a){switch(n=Ol(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function _o(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);it(t)}var hi=new Map,$m=new Set;function zl(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Qi=X.d;X.d={f:AS,r:bS,D:RS,C:CS,L:wS,m:DS,X:US,S:LS,M:NS};function AS(){var t=Qi.f(),n=bl();return t||n}function bS(t){var n=Ht(t);n!==null&&n.tag===5&&n.type==="form"?gp(n):Qi.r(t)}var $r=typeof document>"u"?null:document;function tg(t,n,a){var r=$r;if(r&&typeof n=="string"&&n){var c=Tn(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),$m.has(c)||($m.add(c),t={rel:t,crossOrigin:a,href:n},r.querySelector(c)===null&&(n=r.createElement("link"),xn(n,"link",t),qt(n),r.head.appendChild(n)))}}function RS(t){Qi.D(t),tg("dns-prefetch",t,null)}function CS(t,n){Qi.C(t,n),tg("preconnect",t,n)}function wS(t,n,a){Qi.L(t,n,a);var r=$r;if(r&&t&&n){var c='link[rel="preload"][as="'+Tn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+Tn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+Tn(a.imageSizes)+'"]')):c+='[href="'+Tn(t)+'"]';var f=c;switch(n){case"style":f=ts(t);break;case"script":f=es(t)}hi.has(f)||(t=S({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),hi.set(f,t),r.querySelector(c)!==null||n==="style"&&r.querySelector(vo(f))||n==="script"&&r.querySelector(So(f))||(n=r.createElement("link"),xn(n,"link",t),qt(n),r.head.appendChild(n)))}}function DS(t,n){Qi.m(t,n);var a=$r;if(a&&t){var r=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+Tn(r)+'"][href="'+Tn(t)+'"]',f=c;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=es(t)}if(!hi.has(f)&&(t=S({rel:"modulepreload",href:t},n),hi.set(f,t),a.querySelector(c)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(So(f)))return}r=a.createElement("link"),xn(r,"link",t),qt(r),a.head.appendChild(r)}}}function LS(t,n,a){Qi.S(t,n,a);var r=$r;if(r&&t){var c=$t(r).hoistableStyles,f=ts(t);n=n||"default";var _=c.get(f);if(!_){var E={loading:0,preload:null};if(_=r.querySelector(vo(f)))E.loading=5;else{t=S({rel:"stylesheet",href:t,"data-precedence":n},a),(a=hi.get(f))&&bf(t,a);var B=_=r.createElement("link");qt(B),xn(B,"link",t),B._p=new Promise(function(J,ut){B.onload=J,B.onerror=ut}),B.addEventListener("load",function(){E.loading|=1}),B.addEventListener("error",function(){E.loading|=2}),E.loading|=4,Pl(_,n,r)}_={type:"stylesheet",instance:_,count:1,state:E},c.set(f,_)}}}function US(t,n){Qi.X(t,n);var a=$r;if(a&&t){var r=$t(a).hoistableScripts,c=es(t),f=r.get(c);f||(f=a.querySelector(So(c)),f||(t=S({src:t,async:!0},n),(n=hi.get(c))&&Rf(t,n),f=a.createElement("script"),qt(f),xn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(c,f))}}function NS(t,n){Qi.M(t,n);var a=$r;if(a&&t){var r=$t(a).hoistableScripts,c=es(t),f=r.get(c);f||(f=a.querySelector(So(c)),f||(t=S({src:t,async:!0,type:"module"},n),(n=hi.get(c))&&Rf(t,n),f=a.createElement("script"),qt(f),xn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(c,f))}}function eg(t,n,a,r){var c=(c=xt.current)?zl(c):null;if(!c)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=ts(a.href),a=$t(c).hoistableStyles,r=a.get(n),r||(r={type:"style",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=ts(a.href);var f=$t(c).hoistableStyles,_=f.get(t);if(_||(c=c.ownerDocument||c,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,_),(f=c.querySelector(vo(t)))&&!f._p&&(_.instance=f,_.state.loading=5),hi.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},hi.set(t,a),f||OS(c,t,a,_.state))),n&&r===null)throw Error(s(528,""));return _}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=es(a),a=$t(c).hoistableScripts,r=a.get(n),r||(r={type:"script",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function ts(t){return'href="'+Tn(t)+'"'}function vo(t){return'link[rel="stylesheet"]['+t+"]"}function ng(t){return S({},t,{"data-precedence":t.precedence,precedence:null})}function OS(t,n,a,r){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?r.loading=1:(n=t.createElement("link"),r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2}),xn(n,"link",a),qt(n),t.head.appendChild(n))}function es(t){return'[src="'+Tn(t)+'"]'}function So(t){return"script[async]"+t}function ig(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=t.querySelector('style[data-href~="'+Tn(a.href)+'"]');if(r)return n.instance=r,qt(r),r;var c=S({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(t.ownerDocument||t).createElement("style"),qt(r),xn(r,"style",c),Pl(r,a.precedence,t),n.instance=r;case"stylesheet":c=ts(a.href);var f=t.querySelector(vo(c));if(f)return n.state.loading|=4,n.instance=f,qt(f),f;r=ng(a),(c=hi.get(c))&&bf(r,c),f=(t.ownerDocument||t).createElement("link"),qt(f);var _=f;return _._p=new Promise(function(E,B){_.onload=E,_.onerror=B}),xn(f,"link",r),n.state.loading|=4,Pl(f,a.precedence,t),n.instance=f;case"script":return f=es(a.src),(c=t.querySelector(So(f)))?(n.instance=c,qt(c),c):(r=a,(c=hi.get(f))&&(r=S({},a),Rf(r,c)),t=t.ownerDocument||t,c=t.createElement("script"),qt(c),xn(c,"link",r),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,Pl(r,a.precedence,t));return n.instance}function Pl(t,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=r.length?r[r.length-1]:null,f=c,_=0;_<r.length;_++){var E=r[_];if(E.dataset.precedence===n)f=E;else if(f!==c)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function bf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Rf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Bl=null;function ag(t,n,a){if(Bl===null){var r=new Map,c=Bl=new Map;c.set(a,r)}else c=Bl,r=c.get(a),r||(r=new Map,c.set(a,r));if(r.has(t))return r;for(r.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var f=a[c];if(!(f[rt]||f[je]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var _=f.getAttribute(n)||"";_=t+_;var E=r.get(_);E?E.push(f):r.set(_,[f])}}return r}function rg(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function zS(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function sg(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function PS(t,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=ts(r.href),f=n.querySelector(vo(c));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=Il.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,qt(f);return}f=n.ownerDocument||n,r=ng(r),(c=hi.get(c))&&bf(r,c),f=f.createElement("link"),qt(f);var _=f;_._p=new Promise(function(E,B){_.onload=E,_.onerror=B}),xn(f,"link",r),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=Il.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var Cf=0;function BS(t,n){return t.stylesheets&&t.count===0&&Hl(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var r=setTimeout(function(){if(t.stylesheets&&Hl(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&Cf===0&&(Cf=62500*_S());var c=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Hl(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>Cf?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(r),clearTimeout(c)}}:null}function Il(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Hl(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Fl=null;function Hl(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Fl=new Map,n.forEach(IS,t),Fl=null,Il.call(t))}function IS(t,n){if(!(n.state.loading&4)){var a=Fl.get(t);if(a)var r=a.get(null);else{a=new Map,Fl.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var _=c[f];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(a.set(_.dataset.precedence,_),r=_)}r&&a.set(null,r)}c=n.instance,_=c.getAttribute("data-precedence"),f=a.get(_)||r,f===r&&a.set(null,c),a.set(_,c),this.count++,r=Il.bind(this),c.addEventListener("load",r),c.addEventListener("error",r),f?f.parentNode.insertBefore(c,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var yo={$$typeof:w,Provider:null,Consumer:null,_currentValue:Q,_currentValue2:Q,_threadCount:0};function FS(t,n,a,r,c,f,_,E,B){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ke(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ke(0),this.hiddenUpdates=ke(null),this.identifierPrefix=r,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=B,this.incompleteTransitions=new Map}function og(t,n,a,r,c,f,_,E,B,J,ut,mt){return t=new FS(t,n,a,_,B,J,ut,mt,E),n=1,f===!0&&(n|=24),f=jn(3,null,null,n),t.current=f,f.stateNode=t,n=su(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:r,isDehydrated:a,cache:n},uu(f),t}function lg(t){return t?(t=Ur,t):Ur}function cg(t,n,a,r,c,f){c=lg(c),r.context===null?r.context=c:r.pendingContext=c,r=va(n),r.payload={element:a},f=f===void 0?null:f,f!==null&&(r.callback=f),a=Sa(t,r,n),a!==null&&(Gn(a,t,n),Qs(a,t,n))}function ug(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function wf(t,n){ug(t,n),(t=t.alternate)&&ug(t,n)}function fg(t){if(t.tag===13||t.tag===31){var n=Ka(t,67108864);n!==null&&Gn(n,t,67108864),wf(t,67108864)}}function hg(t){if(t.tag===13||t.tag===31){var n=$n();n=oa(n);var a=Ka(t,n);a!==null&&Gn(a,t,n),wf(t,n)}}var Gl=!0;function HS(t,n,a,r){var c=N.T;N.T=null;var f=X.p;try{X.p=2,Df(t,n,a,r)}finally{X.p=f,N.T=c}}function GS(t,n,a,r){var c=N.T;N.T=null;var f=X.p;try{X.p=8,Df(t,n,a,r)}finally{X.p=f,N.T=c}}function Df(t,n,a,r){if(Gl){var c=Lf(r);if(c===null)gf(t,n,r,Vl,a),pg(t,r);else if(kS(c,t,n,a,r))r.stopPropagation();else if(pg(t,r),n&4&&-1<VS.indexOf(t)){for(;c!==null;){var f=Ht(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var _=Rt(f.pendingLanes);if(_!==0){var E=f;for(E.pendingLanes|=2,E.entangledLanes|=2;_;){var B=1<<31-Yt(_);E.entanglements[1]|=B,_&=~B}Ui(f),(Ce&6)===0&&(Tl=pt()+500,po(0))}}break;case 31:case 13:E=Ka(f,2),E!==null&&Gn(E,f,2),bl(),wf(f,2)}if(f=Lf(r),f===null&&gf(t,n,r,Vl,a),f===c)break;c=f}c!==null&&r.stopPropagation()}else gf(t,n,r,null,a)}}function Lf(t){return t=Uc(t),Uf(t)}var Vl=null;function Uf(t){if(Vl=null,t=Ot(t),t!==null){var n=u(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=d(n),t!==null)return t;t=null}else if(a===31){if(t=h(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Vl=t,null}function dg(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(It()){case Tt:return 2;case Ut:return 8;case Wt:case ee:return 32;case yt:return 268435456;default:return 32}default:return 32}}var Nf=!1,Da=null,La=null,Ua=null,xo=new Map,Mo=new Map,Na=[],VS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function pg(t,n){switch(t){case"focusin":case"focusout":Da=null;break;case"dragenter":case"dragleave":La=null;break;case"mouseover":case"mouseout":Ua=null;break;case"pointerover":case"pointerout":xo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Mo.delete(n.pointerId)}}function Eo(t,n,a,r,c,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:f,targetContainers:[c]},n!==null&&(n=Ht(n),n!==null&&fg(n)),t):(t.eventSystemFlags|=r,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function kS(t,n,a,r,c){switch(n){case"focusin":return Da=Eo(Da,t,n,a,r,c),!0;case"dragenter":return La=Eo(La,t,n,a,r,c),!0;case"mouseover":return Ua=Eo(Ua,t,n,a,r,c),!0;case"pointerover":var f=c.pointerId;return xo.set(f,Eo(xo.get(f)||null,t,n,a,r,c)),!0;case"gotpointercapture":return f=c.pointerId,Mo.set(f,Eo(Mo.get(f)||null,t,n,a,r,c)),!0}return!1}function mg(t){var n=Ot(t.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){t.blockedOn=n,Ri(t.priority,function(){hg(a)});return}}else if(n===31){if(n=h(a),n!==null){t.blockedOn=n,Ri(t.priority,function(){hg(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function kl(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Lf(t.nativeEvent);if(a===null){a=t.nativeEvent;var r=new a.constructor(a.type,a);Lc=r,a.target.dispatchEvent(r),Lc=null}else return n=Ht(a),n!==null&&fg(n),t.blockedOn=a,!1;n.shift()}return!0}function gg(t,n,a){kl(t)&&a.delete(n)}function XS(){Nf=!1,Da!==null&&kl(Da)&&(Da=null),La!==null&&kl(La)&&(La=null),Ua!==null&&kl(Ua)&&(Ua=null),xo.forEach(gg),Mo.forEach(gg)}function Xl(t,n){t.blockedOn===n&&(t.blockedOn=null,Nf||(Nf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,XS)))}var Wl=null;function _g(t){Wl!==t&&(Wl=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Wl===t&&(Wl=null);for(var n=0;n<t.length;n+=3){var a=t[n],r=t[n+1],c=t[n+2];if(typeof r!="function"){if(Uf(r||a)===null)continue;break}var f=Ht(a);f!==null&&(t.splice(n,3),n-=3,Du(f,{pending:!0,data:c,method:a.method,action:r},r,c))}}))}function ns(t){function n(B){return Xl(B,t)}Da!==null&&Xl(Da,t),La!==null&&Xl(La,t),Ua!==null&&Xl(Ua,t),xo.forEach(n),Mo.forEach(n);for(var a=0;a<Na.length;a++){var r=Na[a];r.blockedOn===t&&(r.blockedOn=null)}for(;0<Na.length&&(a=Na[0],a.blockedOn===null);)mg(a),a.blockedOn===null&&Na.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var c=a[r],f=a[r+1],_=c[cn]||null;if(typeof f=="function")_||_g(a);else if(_){var E=null;if(f&&f.hasAttribute("formAction")){if(c=f,_=f[cn]||null)E=_.formAction;else if(Uf(c)!==null)continue}else E=_.action;typeof E=="function"?a[r+1]=E:(a.splice(r,3),r-=3),_g(a)}}}function vg(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(_){return c=_})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,c=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function Of(t){this._internalRoot=t}ql.prototype.render=Of.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=$n();cg(a,r,t,n,null,null)},ql.prototype.unmount=Of.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;cg(t.current,2,null,t,null,null),bl(),n[la]=null}};function ql(t){this._internalRoot=t}ql.prototype.unstable_scheduleHydration=function(t){if(t){var n=ii();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Na.length&&n!==0&&n<Na[a].priority;a++);Na.splice(a,0,t),a===0&&mg(t)}};var Sg=e.version;if(Sg!=="19.2.8")throw Error(s(527,Sg,"19.2.8"));X.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=p(n),t=t!==null?g(t):null,t=t===null?null:t.stateNode,t};var WS={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:N,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Yl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Yl.isDisabled&&Yl.supportsFiber)try{Jt=Yl.inject(WS),Pt=Yl}catch{}}return Ao.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,r="",c=bp,f=Rp,_=Cp;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(_=n.onRecoverableError)),n=og(t,1,!1,null,null,a,r,null,c,f,_,vg),t[la]=n.current,mf(t),new Of(n)},Ao.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var r=!1,c="",f=bp,_=Rp,E=Cp,B=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(_=a.onCaughtError),a.onRecoverableError!==void 0&&(E=a.onRecoverableError),a.formState!==void 0&&(B=a.formState)),n=og(t,1,!0,n,a??null,r,c,B,f,_,E,vg),n.context=lg(null),a=n.current,r=$n(),r=oa(r),c=va(r),c.callback=null,Sa(a,c,r),a=r,n.current.lanes=a,ie(n,a),Ui(n),t[la]=n.current,mf(t),new ql(n)},Ao.version="19.2.8",Ao}var wg;function ny(){if(wg)return Bf.exports;wg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Bf.exports=ey(),Bf.exports}var iy=ny();const ay=a0(iy);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Uh="160",ry=0,Dg=1,sy=2,r0=1,oy=2,ia=3,qa=0,Wn=1,aa=2,ka=0,Es=1,Lo=2,Lg=3,Ug=4,ly=5,mr=100,cy=101,uy=102,Ng=103,Og=104,fy=200,hy=201,dy=202,py=203,xh=204,Mh=205,my=206,gy=207,_y=208,vy=209,Sy=210,yy=211,xy=212,My=213,Ey=214,Ty=0,Ay=1,by=2,vc=3,Ry=4,Cy=5,wy=6,Dy=7,s0=0,Ly=1,Uy=2,Xa=0,Ny=1,Oy=2,zy=3,Py=4,By=5,Iy=6,o0=300,As=301,bs=302,Eh=303,Th=304,Tc=306,Ah=1e3,Ti=1001,bh=1002,Un=1003,zg=1004,Gf=1005,pi=1006,Fy=1007,No=1008,Wa=1009,Hy=1010,Gy=1011,Nh=1012,l0=1013,Ga=1014,Va=1015,Oo=1016,c0=1017,u0=1018,_r=1020,Vy=1021,Ai=1023,ky=1024,Xy=1025,vr=1026,Rs=1027,Wy=1028,f0=1029,qy=1030,h0=1031,d0=1033,Vf=33776,kf=33777,Xf=33778,Wf=33779,Pg=35840,Bg=35841,Ig=35842,Fg=35843,p0=36196,Hg=37492,Gg=37496,Vg=37808,kg=37809,Xg=37810,Wg=37811,qg=37812,Yg=37813,jg=37814,Zg=37815,Kg=37816,Qg=37817,Jg=37818,$g=37819,t_=37820,e_=37821,qf=36492,n_=36494,i_=36495,Yy=36283,a_=36284,r_=36285,s_=36286,m0=3e3,Sr=3001,jy=3200,Zy=3201,Ky=0,Qy=1,gi="",Mn="srgb",sa="srgb-linear",Oh="display-p3",Ac="display-p3-linear",Sc="linear",qe="srgb",yc="rec709",xc="p3",is=7680,o_=519,Jy=512,$y=513,tx=514,g0=515,ex=516,nx=517,ix=518,ax=519,l_=35044,c_="300 es",Rh=1035,ra=2e3,Mc=2001;class ws{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){if(this._listeners===void 0)return!1;const s=this._listeners;return s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){if(this._listeners===void 0)return;const l=this._listeners[e];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const s=this._listeners[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let u=0,d=l.length;u<d;u++)l[u].call(this,e);e.target=null}}}const bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Yf=Math.PI/180,Ch=180/Math.PI;function zo(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(bn[o&255]+bn[o>>8&255]+bn[o>>16&255]+bn[o>>24&255]+"-"+bn[e&255]+bn[e>>8&255]+"-"+bn[e>>16&15|64]+bn[e>>24&255]+"-"+bn[i&63|128]+bn[i>>8&255]+"-"+bn[i>>16&255]+bn[i>>24&255]+bn[s&255]+bn[s>>8&255]+bn[s>>16&255]+bn[s>>24&255]).toLowerCase()}function kn(o,e,i){return Math.max(e,Math.min(i,o))}function rx(o,e){return(o%e+e)%e}function jf(o,e,i){return(1-i)*o+i*e}function u_(o){return(o&o-1)===0&&o!==0}function wh(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function bo(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Vn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Ne{constructor(e=0,i=0){Ne.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(i,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(kn(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),u=this.x-e.x,d=this.y-e.y;return this.x=u*s-d*l+e.x,this.y=u*l+d*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ge{constructor(e,i,s,l,u,d,h,m,p){ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,u,d,h,m,p)}set(e,i,s,l,u,d,h,m,p){const g=this.elements;return g[0]=e,g[1]=l,g[2]=h,g[3]=i,g[4]=u,g[5]=m,g[6]=s,g[7]=d,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,u=this.elements,d=s[0],h=s[3],m=s[6],p=s[1],g=s[4],S=s[7],y=s[2],M=s[5],A=s[8],b=l[0],x=l[3],v=l[6],O=l[1],w=l[4],P=l[7],q=l[2],I=l[5],z=l[8];return u[0]=d*b+h*O+m*q,u[3]=d*x+h*w+m*I,u[6]=d*v+h*P+m*z,u[1]=p*b+g*O+S*q,u[4]=p*x+g*w+S*I,u[7]=p*v+g*P+S*z,u[2]=y*b+M*O+A*q,u[5]=y*x+M*w+A*I,u[8]=y*v+M*P+A*z,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],d=e[4],h=e[5],m=e[6],p=e[7],g=e[8];return i*d*g-i*h*p-s*u*g+s*h*m+l*u*p-l*d*m}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],d=e[4],h=e[5],m=e[6],p=e[7],g=e[8],S=g*d-h*p,y=h*m-g*u,M=p*u-d*m,A=i*S+s*y+l*M;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/A;return e[0]=S*b,e[1]=(l*p-g*s)*b,e[2]=(h*s-l*d)*b,e[3]=y*b,e[4]=(g*i-l*m)*b,e[5]=(l*u-h*i)*b,e[6]=M*b,e[7]=(s*m-p*i)*b,e[8]=(d*i-s*u)*b,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,u,d,h){const m=Math.cos(u),p=Math.sin(u);return this.set(s*m,s*p,-s*(m*d+p*h)+d+e,-l*p,l*m,-l*(-p*d+m*h)+h+i,0,0,1),this}scale(e,i){return this.premultiply(Zf.makeScale(e,i)),this}rotate(e){return this.premultiply(Zf.makeRotation(-e)),this}translate(e,i){return this.premultiply(Zf.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Zf=new ge;function _0(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Ec(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function sx(){const o=Ec("canvas");return o.style.display="block",o}const f_={};function Uo(o){o in f_||(f_[o]=!0,console.warn(o))}const h_=new ge().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),d_=new ge().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),jl={[sa]:{transfer:Sc,primaries:yc,toReference:o=>o,fromReference:o=>o},[Mn]:{transfer:qe,primaries:yc,toReference:o=>o.convertSRGBToLinear(),fromReference:o=>o.convertLinearToSRGB()},[Ac]:{transfer:Sc,primaries:xc,toReference:o=>o.applyMatrix3(d_),fromReference:o=>o.applyMatrix3(h_)},[Oh]:{transfer:qe,primaries:xc,toReference:o=>o.convertSRGBToLinear().applyMatrix3(d_),fromReference:o=>o.applyMatrix3(h_).convertLinearToSRGB()}},ox=new Set([sa,Ac]),Be={enabled:!0,_workingColorSpace:sa,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(o){if(!ox.has(o))throw new Error(`Unsupported working color space, "${o}".`);this._workingColorSpace=o},convert:function(o,e,i){if(this.enabled===!1||e===i||!e||!i)return o;const s=jl[e].toReference,l=jl[i].fromReference;return l(s(o))},fromWorkingColorSpace:function(o,e){return this.convert(o,this._workingColorSpace,e)},toWorkingColorSpace:function(o,e){return this.convert(o,e,this._workingColorSpace)},getPrimaries:function(o){return jl[o].primaries},getTransfer:function(o){return o===gi?Sc:jl[o].transfer}};function Ts(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Kf(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let as;class v0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{as===void 0&&(as=Ec("canvas")),as.width=e.width,as.height=e.height;const s=as.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=as}return i.width>2048||i.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),i.toDataURL("image/jpeg",.6)):i.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Ec("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),u=l.data;for(let d=0;d<u.length;d++)u[d]=Ts(u[d]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Ts(i[s]/255)*255):i[s]=Ts(i[s]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let lx=0;class S0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:lx++}),this.uuid=zo(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?u.push(Qf(l[d].image)):u.push(Qf(l[d]))}else u=Qf(l);s.url=u}return i||(e.images[this.uuid]=s),s}}function Qf(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?v0.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let cx=0;class ni extends ws{constructor(e=ni.DEFAULT_IMAGE,i=ni.DEFAULT_MAPPING,s=Ti,l=Ti,u=pi,d=No,h=Ai,m=Wa,p=ni.DEFAULT_ANISOTROPY,g=gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cx++}),this.uuid=zo(),this.name="",this.source=new S0(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=u,this.minFilter=d,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new Ne(0,0),this.repeat=new Ne(1,1),this.center=new Ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof g=="string"?this.colorSpace=g:(Uo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=g===Sr?Mn:gi),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==o0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ah:e.x=e.x-Math.floor(e.x);break;case Ti:e.x=e.x<0?0:1;break;case bh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ah:e.y=e.y-Math.floor(e.y);break;case Ti:e.y=e.y<0?0:1;break;case bh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Uo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Mn?Sr:m0}set encoding(e){Uo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Sr?Mn:gi}}ni.DEFAULT_IMAGE=null;ni.DEFAULT_MAPPING=o0;ni.DEFAULT_ANISOTROPY=1;class En{constructor(e=0,i=0,s=0,l=1){En.prototype.isVector4=!0,this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,u=this.w,d=e.elements;return this.x=d[0]*i+d[4]*s+d[8]*l+d[12]*u,this.y=d[1]*i+d[5]*s+d[9]*l+d[13]*u,this.z=d[2]*i+d[6]*s+d[10]*l+d[14]*u,this.w=d[3]*i+d[7]*s+d[11]*l+d[15]*u,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,u;const m=e.elements,p=m[0],g=m[4],S=m[8],y=m[1],M=m[5],A=m[9],b=m[2],x=m[6],v=m[10];if(Math.abs(g-y)<.01&&Math.abs(S-b)<.01&&Math.abs(A-x)<.01){if(Math.abs(g+y)<.1&&Math.abs(S+b)<.1&&Math.abs(A+x)<.1&&Math.abs(p+M+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const w=(p+1)/2,P=(M+1)/2,q=(v+1)/2,I=(g+y)/4,z=(S+b)/4,_t=(A+x)/4;return w>P&&w>q?w<.01?(s=0,l=.707106781,u=.707106781):(s=Math.sqrt(w),l=I/s,u=z/s):P>q?P<.01?(s=.707106781,l=0,u=.707106781):(l=Math.sqrt(P),s=I/l,u=_t/l):q<.01?(s=.707106781,l=.707106781,u=0):(u=Math.sqrt(q),s=z/u,l=_t/u),this.set(s,l,u,i),this}let O=Math.sqrt((x-A)*(x-A)+(S-b)*(S-b)+(y-g)*(y-g));return Math.abs(O)<.001&&(O=1),this.x=(x-A)/O,this.y=(S-b)/O,this.z=(y-g)/O,this.w=Math.acos((p+M+v-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this.z=Math.max(e.z,Math.min(i.z,this.z)),this.w=Math.max(e.w,Math.min(i.w,this.w)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this.z=Math.max(e,Math.min(i,this.z)),this.w=Math.max(e,Math.min(i,this.w)),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(i,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ux extends ws{constructor(e=1,i=1,s={}){super(),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=1,this.scissor=new En(0,0,e,i),this.scissorTest=!1,this.viewport=new En(0,0,e,i);const l={width:e,height:i,depth:1};s.encoding!==void 0&&(Uo("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),s.colorSpace=s.encoding===Sr?Mn:gi),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pi,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},s),this.texture=new ni(l,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=s.generateMipmaps,this.texture.internalFormat=s.internalFormat,this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.depthTexture=s.depthTexture,this.samples=s.samples}setSize(e,i,s=1){(this.width!==e||this.height!==i||this.depth!==s)&&(this.width=e,this.height=i,this.depth=s,this.texture.image.width=e,this.texture.image.height=i,this.texture.image.depth=s,this.dispose()),this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const i=Object.assign({},e.texture.image);return this.texture.source=new S0(i),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class yr extends ux{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class y0 extends ni{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Un,this.minFilter=Un,this.wrapR=Ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fx extends ni{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Un,this.minFilter=Un,this.wrapR=Ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Po{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,u,d,h){let m=s[l+0],p=s[l+1],g=s[l+2],S=s[l+3];const y=u[d+0],M=u[d+1],A=u[d+2],b=u[d+3];if(h===0){e[i+0]=m,e[i+1]=p,e[i+2]=g,e[i+3]=S;return}if(h===1){e[i+0]=y,e[i+1]=M,e[i+2]=A,e[i+3]=b;return}if(S!==b||m!==y||p!==M||g!==A){let x=1-h;const v=m*y+p*M+g*A+S*b,O=v>=0?1:-1,w=1-v*v;if(w>Number.EPSILON){const q=Math.sqrt(w),I=Math.atan2(q,v*O);x=Math.sin(x*I)/q,h=Math.sin(h*I)/q}const P=h*O;if(m=m*x+y*P,p=p*x+M*P,g=g*x+A*P,S=S*x+b*P,x===1-h){const q=1/Math.sqrt(m*m+p*p+g*g+S*S);m*=q,p*=q,g*=q,S*=q}}e[i]=m,e[i+1]=p,e[i+2]=g,e[i+3]=S}static multiplyQuaternionsFlat(e,i,s,l,u,d){const h=s[l],m=s[l+1],p=s[l+2],g=s[l+3],S=u[d],y=u[d+1],M=u[d+2],A=u[d+3];return e[i]=h*A+g*S+m*M-p*y,e[i+1]=m*A+g*y+p*S-h*M,e[i+2]=p*A+g*M+h*y-m*S,e[i+3]=g*A-h*S-m*y-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,u=e._z,d=e._order,h=Math.cos,m=Math.sin,p=h(s/2),g=h(l/2),S=h(u/2),y=m(s/2),M=m(l/2),A=m(u/2);switch(d){case"XYZ":this._x=y*g*S+p*M*A,this._y=p*M*S-y*g*A,this._z=p*g*A+y*M*S,this._w=p*g*S-y*M*A;break;case"YXZ":this._x=y*g*S+p*M*A,this._y=p*M*S-y*g*A,this._z=p*g*A-y*M*S,this._w=p*g*S+y*M*A;break;case"ZXY":this._x=y*g*S-p*M*A,this._y=p*M*S+y*g*A,this._z=p*g*A+y*M*S,this._w=p*g*S-y*M*A;break;case"ZYX":this._x=y*g*S-p*M*A,this._y=p*M*S+y*g*A,this._z=p*g*A-y*M*S,this._w=p*g*S+y*M*A;break;case"YZX":this._x=y*g*S+p*M*A,this._y=p*M*S+y*g*A,this._z=p*g*A-y*M*S,this._w=p*g*S-y*M*A;break;case"XZY":this._x=y*g*S-p*M*A,this._y=p*M*S-y*g*A,this._z=p*g*A+y*M*S,this._w=p*g*S+y*M*A;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],u=i[8],d=i[1],h=i[5],m=i[9],p=i[2],g=i[6],S=i[10],y=s+h+S;if(y>0){const M=.5/Math.sqrt(y+1);this._w=.25/M,this._x=(g-m)*M,this._y=(u-p)*M,this._z=(d-l)*M}else if(s>h&&s>S){const M=2*Math.sqrt(1+s-h-S);this._w=(g-m)/M,this._x=.25*M,this._y=(l+d)/M,this._z=(u+p)/M}else if(h>S){const M=2*Math.sqrt(1+h-s-S);this._w=(u-p)/M,this._x=(l+d)/M,this._y=.25*M,this._z=(m+g)/M}else{const M=2*Math.sqrt(1+S-s-h);this._w=(d-l)/M,this._x=(u+p)/M,this._y=(m+g)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<Number.EPSILON?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(kn(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,u=e._z,d=e._w,h=i._x,m=i._y,p=i._z,g=i._w;return this._x=s*g+d*h+l*p-u*m,this._y=l*g+d*m+u*h-s*p,this._z=u*g+d*p+s*m-l*h,this._w=d*g-s*h-l*m-u*p,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const s=this._x,l=this._y,u=this._z,d=this._w;let h=d*e._w+s*e._x+l*e._y+u*e._z;if(h<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,h=-h):this.copy(e),h>=1)return this._w=d,this._x=s,this._y=l,this._z=u,this;const m=1-h*h;if(m<=Number.EPSILON){const M=1-i;return this._w=M*d+i*this._w,this._x=M*s+i*this._x,this._y=M*l+i*this._y,this._z=M*u+i*this._z,this.normalize(),this}const p=Math.sqrt(m),g=Math.atan2(p,h),S=Math.sin((1-i)*g)/p,y=Math.sin(i*g)/p;return this._w=d*S+this._w*y,this._x=s*S+this._x*y,this._y=l*S+this._y*y,this._z=u*S+this._z*y,this._onChangeCallback(),this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=Math.random(),i=Math.sqrt(1-e),s=Math.sqrt(e),l=2*Math.PI*Math.random(),u=2*Math.PI*Math.random();return this.set(i*Math.cos(l),s*Math.sin(u),s*Math.cos(u),i*Math.sin(l))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class tt{constructor(e=0,i=0,s=0){tt.prototype.isVector3=!0,this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(p_.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(p_.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[3]*s+u[6]*l,this.y=u[1]*i+u[4]*s+u[7]*l,this.z=u[2]*i+u[5]*s+u[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,u=e.elements,d=1/(u[3]*i+u[7]*s+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*s+u[8]*l+u[12])*d,this.y=(u[1]*i+u[5]*s+u[9]*l+u[13])*d,this.z=(u[2]*i+u[6]*s+u[10]*l+u[14])*d,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,u=e.x,d=e.y,h=e.z,m=e.w,p=2*(d*l-h*s),g=2*(h*i-u*l),S=2*(u*s-d*i);return this.x=i+m*p+d*S-h*g,this.y=s+m*g+h*p-u*S,this.z=l+m*S+u*g-d*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[4]*s+u[8]*l,this.y=u[1]*i+u[5]*s+u[9]*l,this.z=u[2]*i+u[6]*s+u[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this.z=Math.max(e.z,Math.min(i.z,this.z)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this.z=Math.max(e,Math.min(i,this.z)),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(i,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,u=e.z,d=i.x,h=i.y,m=i.z;return this.x=l*m-u*h,this.y=u*d-s*m,this.z=s*h-l*d,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return Jf.copy(this).projectOnVector(e),this.sub(Jf)}reflect(e){return this.sub(Jf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(kn(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,i=Math.random()*Math.PI*2,s=Math.sqrt(1-e**2);return this.x=s*Math.cos(i),this.y=s*Math.sin(i),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Jf=new tt,p_=new Po;class Bo{constructor(e=new tt(1/0,1/0,1/0),i=new tt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(yi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(yi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=yi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const u=s.getAttribute("position");if(i===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let d=0,h=u.count;d<h;d++)e.isMesh===!0?e.getVertexPosition(d,yi):yi.fromBufferAttribute(u,d),yi.applyMatrix4(e.matrixWorld),this.expandByPoint(yi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Zl.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Zl.copy(s.boundingBox)),Zl.applyMatrix4(e.matrixWorld),this.union(Zl)}const l=e.children;for(let u=0,d=l.length;u<d;u++)this.expandByObject(l[u],i);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,yi),yi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ro),Kl.subVectors(this.max,Ro),rs.subVectors(e.a,Ro),ss.subVectors(e.b,Ro),os.subVectors(e.c,Ro),za.subVectors(ss,rs),Pa.subVectors(os,ss),cr.subVectors(rs,os);let i=[0,-za.z,za.y,0,-Pa.z,Pa.y,0,-cr.z,cr.y,za.z,0,-za.x,Pa.z,0,-Pa.x,cr.z,0,-cr.x,-za.y,za.x,0,-Pa.y,Pa.x,0,-cr.y,cr.x,0];return!$f(i,rs,ss,os,Kl)||(i=[1,0,0,0,1,0,0,0,1],!$f(i,rs,ss,os,Kl))?!1:(Ql.crossVectors(za,Pa),i=[Ql.x,Ql.y,Ql.z],$f(i,rs,ss,os,Kl))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,yi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(yi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ji[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ji[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ji[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ji[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ji[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ji[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ji[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ji[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ji),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ji=[new tt,new tt,new tt,new tt,new tt,new tt,new tt,new tt],yi=new tt,Zl=new Bo,rs=new tt,ss=new tt,os=new tt,za=new tt,Pa=new tt,cr=new tt,Ro=new tt,Kl=new tt,Ql=new tt,ur=new tt;function $f(o,e,i,s,l){for(let u=0,d=o.length-3;u<=d;u+=3){ur.fromArray(o,u);const h=l.x*Math.abs(ur.x)+l.y*Math.abs(ur.y)+l.z*Math.abs(ur.z),m=e.dot(ur),p=i.dot(ur),g=s.dot(ur);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>h)return!1}return!0}const hx=new Bo,Co=new tt,th=new tt;class bc{constructor(e=new tt,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):hx.setFromPoints(e).getCenter(s);let l=0;for(let u=0,d=e.length;u<d;u++)l=Math.max(l,s.distanceToSquared(e[u]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Co.subVectors(e,this.center);const i=Co.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Co,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(th.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Co.copy(e.center).add(th)),this.expandByPoint(Co.copy(e.center).sub(th))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const $i=new tt,eh=new tt,Jl=new tt,Ba=new tt,nh=new tt,$l=new tt,ih=new tt;class x0{constructor(e=new tt,i=new tt(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,$i)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=$i.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):($i.copy(this.origin).addScaledVector(this.direction,i),$i.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){eh.copy(e).add(i).multiplyScalar(.5),Jl.copy(i).sub(e).normalize(),Ba.copy(this.origin).sub(eh);const u=e.distanceTo(i)*.5,d=-this.direction.dot(Jl),h=Ba.dot(this.direction),m=-Ba.dot(Jl),p=Ba.lengthSq(),g=Math.abs(1-d*d);let S,y,M,A;if(g>0)if(S=d*m-h,y=d*h-m,A=u*g,S>=0)if(y>=-A)if(y<=A){const b=1/g;S*=b,y*=b,M=S*(S+d*y+2*h)+y*(d*S+y+2*m)+p}else y=u,S=Math.max(0,-(d*y+h)),M=-S*S+y*(y+2*m)+p;else y=-u,S=Math.max(0,-(d*y+h)),M=-S*S+y*(y+2*m)+p;else y<=-A?(S=Math.max(0,-(-d*u+h)),y=S>0?-u:Math.min(Math.max(-u,-m),u),M=-S*S+y*(y+2*m)+p):y<=A?(S=0,y=Math.min(Math.max(-u,-m),u),M=y*(y+2*m)+p):(S=Math.max(0,-(d*u+h)),y=S>0?u:Math.min(Math.max(-u,-m),u),M=-S*S+y*(y+2*m)+p);else y=d>0?-u:u,S=Math.max(0,-(d*y+h)),M=-S*S+y*(y+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,S),l&&l.copy(eh).addScaledVector(Jl,y),M}intersectSphere(e,i){$i.subVectors(e.center,this.origin);const s=$i.dot(this.direction),l=$i.dot($i)-s*s,u=e.radius*e.radius;if(l>u)return null;const d=Math.sqrt(u-l),h=s-d,m=s+d;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,u,d,h,m;const p=1/this.direction.x,g=1/this.direction.y,S=1/this.direction.z,y=this.origin;return p>=0?(s=(e.min.x-y.x)*p,l=(e.max.x-y.x)*p):(s=(e.max.x-y.x)*p,l=(e.min.x-y.x)*p),g>=0?(u=(e.min.y-y.y)*g,d=(e.max.y-y.y)*g):(u=(e.max.y-y.y)*g,d=(e.min.y-y.y)*g),s>d||u>l||((u>s||isNaN(s))&&(s=u),(d<l||isNaN(l))&&(l=d),S>=0?(h=(e.min.z-y.z)*S,m=(e.max.z-y.z)*S):(h=(e.max.z-y.z)*S,m=(e.min.z-y.z)*S),s>m||h>l)||((h>s||s!==s)&&(s=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,$i)!==null}intersectTriangle(e,i,s,l,u){nh.subVectors(i,e),$l.subVectors(s,e),ih.crossVectors(nh,$l);let d=this.direction.dot(ih),h;if(d>0){if(l)return null;h=1}else if(d<0)h=-1,d=-d;else return null;Ba.subVectors(this.origin,e);const m=h*this.direction.dot($l.crossVectors(Ba,$l));if(m<0)return null;const p=h*this.direction.dot(nh.cross(Ba));if(p<0||m+p>d)return null;const g=-h*Ba.dot(ih);return g<0?null:this.at(g/d,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class mn{constructor(e,i,s,l,u,d,h,m,p,g,S,y,M,A,b,x){mn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,u,d,h,m,p,g,S,y,M,A,b,x)}set(e,i,s,l,u,d,h,m,p,g,S,y,M,A,b,x){const v=this.elements;return v[0]=e,v[4]=i,v[8]=s,v[12]=l,v[1]=u,v[5]=d,v[9]=h,v[13]=m,v[2]=p,v[6]=g,v[10]=S,v[14]=y,v[3]=M,v[7]=A,v[11]=b,v[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new mn().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,s=e.elements,l=1/ls.setFromMatrixColumn(e,0).length(),u=1/ls.setFromMatrixColumn(e,1).length(),d=1/ls.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*u,i[5]=s[5]*u,i[6]=s[6]*u,i[7]=0,i[8]=s[8]*d,i[9]=s[9]*d,i[10]=s[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,u=e.z,d=Math.cos(s),h=Math.sin(s),m=Math.cos(l),p=Math.sin(l),g=Math.cos(u),S=Math.sin(u);if(e.order==="XYZ"){const y=d*g,M=d*S,A=h*g,b=h*S;i[0]=m*g,i[4]=-m*S,i[8]=p,i[1]=M+A*p,i[5]=y-b*p,i[9]=-h*m,i[2]=b-y*p,i[6]=A+M*p,i[10]=d*m}else if(e.order==="YXZ"){const y=m*g,M=m*S,A=p*g,b=p*S;i[0]=y+b*h,i[4]=A*h-M,i[8]=d*p,i[1]=d*S,i[5]=d*g,i[9]=-h,i[2]=M*h-A,i[6]=b+y*h,i[10]=d*m}else if(e.order==="ZXY"){const y=m*g,M=m*S,A=p*g,b=p*S;i[0]=y-b*h,i[4]=-d*S,i[8]=A+M*h,i[1]=M+A*h,i[5]=d*g,i[9]=b-y*h,i[2]=-d*p,i[6]=h,i[10]=d*m}else if(e.order==="ZYX"){const y=d*g,M=d*S,A=h*g,b=h*S;i[0]=m*g,i[4]=A*p-M,i[8]=y*p+b,i[1]=m*S,i[5]=b*p+y,i[9]=M*p-A,i[2]=-p,i[6]=h*m,i[10]=d*m}else if(e.order==="YZX"){const y=d*m,M=d*p,A=h*m,b=h*p;i[0]=m*g,i[4]=b-y*S,i[8]=A*S+M,i[1]=S,i[5]=d*g,i[9]=-h*g,i[2]=-p*g,i[6]=M*S+A,i[10]=y-b*S}else if(e.order==="XZY"){const y=d*m,M=d*p,A=h*m,b=h*p;i[0]=m*g,i[4]=-S,i[8]=p*g,i[1]=y*S+b,i[5]=d*g,i[9]=M*S-A,i[2]=A*S-M,i[6]=h*g,i[10]=b*S+y}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(dx,e,px)}lookAt(e,i,s){const l=this.elements;return ti.subVectors(e,i),ti.lengthSq()===0&&(ti.z=1),ti.normalize(),Ia.crossVectors(s,ti),Ia.lengthSq()===0&&(Math.abs(s.z)===1?ti.x+=1e-4:ti.z+=1e-4,ti.normalize(),Ia.crossVectors(s,ti)),Ia.normalize(),tc.crossVectors(ti,Ia),l[0]=Ia.x,l[4]=tc.x,l[8]=ti.x,l[1]=Ia.y,l[5]=tc.y,l[9]=ti.y,l[2]=Ia.z,l[6]=tc.z,l[10]=ti.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,u=this.elements,d=s[0],h=s[4],m=s[8],p=s[12],g=s[1],S=s[5],y=s[9],M=s[13],A=s[2],b=s[6],x=s[10],v=s[14],O=s[3],w=s[7],P=s[11],q=s[15],I=l[0],z=l[4],_t=l[8],D=l[12],U=l[1],ct=l[5],ft=l[9],Mt=l[13],k=l[2],et=l[6],N=l[10],X=l[14],Q=l[3],ot=l[7],lt=l[11],L=l[15];return u[0]=d*I+h*U+m*k+p*Q,u[4]=d*z+h*ct+m*et+p*ot,u[8]=d*_t+h*ft+m*N+p*lt,u[12]=d*D+h*Mt+m*X+p*L,u[1]=g*I+S*U+y*k+M*Q,u[5]=g*z+S*ct+y*et+M*ot,u[9]=g*_t+S*ft+y*N+M*lt,u[13]=g*D+S*Mt+y*X+M*L,u[2]=A*I+b*U+x*k+v*Q,u[6]=A*z+b*ct+x*et+v*ot,u[10]=A*_t+b*ft+x*N+v*lt,u[14]=A*D+b*Mt+x*X+v*L,u[3]=O*I+w*U+P*k+q*Q,u[7]=O*z+w*ct+P*et+q*ot,u[11]=O*_t+w*ft+P*N+q*lt,u[15]=O*D+w*Mt+P*X+q*L,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],u=e[12],d=e[1],h=e[5],m=e[9],p=e[13],g=e[2],S=e[6],y=e[10],M=e[14],A=e[3],b=e[7],x=e[11],v=e[15];return A*(+u*m*S-l*p*S-u*h*y+s*p*y+l*h*M-s*m*M)+b*(+i*m*M-i*p*y+u*d*y-l*d*M+l*p*g-u*m*g)+x*(+i*p*S-i*h*M-u*d*S+s*d*M+u*h*g-s*p*g)+v*(-l*h*g-i*m*S+i*h*y+l*d*S-s*d*y+s*m*g)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],d=e[4],h=e[5],m=e[6],p=e[7],g=e[8],S=e[9],y=e[10],M=e[11],A=e[12],b=e[13],x=e[14],v=e[15],O=S*x*p-b*y*p+b*m*M-h*x*M-S*m*v+h*y*v,w=A*y*p-g*x*p-A*m*M+d*x*M+g*m*v-d*y*v,P=g*b*p-A*S*p+A*h*M-d*b*M-g*h*v+d*S*v,q=A*S*m-g*b*m-A*h*y+d*b*y+g*h*x-d*S*x,I=i*O+s*w+l*P+u*q;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/I;return e[0]=O*z,e[1]=(b*y*u-S*x*u-b*l*M+s*x*M+S*l*v-s*y*v)*z,e[2]=(h*x*u-b*m*u+b*l*p-s*x*p-h*l*v+s*m*v)*z,e[3]=(S*m*u-h*y*u-S*l*p+s*y*p+h*l*M-s*m*M)*z,e[4]=w*z,e[5]=(g*x*u-A*y*u+A*l*M-i*x*M-g*l*v+i*y*v)*z,e[6]=(A*m*u-d*x*u-A*l*p+i*x*p+d*l*v-i*m*v)*z,e[7]=(d*y*u-g*m*u+g*l*p-i*y*p-d*l*M+i*m*M)*z,e[8]=P*z,e[9]=(A*S*u-g*b*u-A*s*M+i*b*M+g*s*v-i*S*v)*z,e[10]=(d*b*u-A*h*u+A*s*p-i*b*p-d*s*v+i*h*v)*z,e[11]=(g*h*u-d*S*u-g*s*p+i*S*p+d*s*M-i*h*M)*z,e[12]=q*z,e[13]=(g*b*l-A*S*l+A*s*y-i*b*y-g*s*x+i*S*x)*z,e[14]=(A*h*l-d*b*l-A*s*m+i*b*m+d*s*x-i*h*x)*z,e[15]=(d*S*l-g*h*l+g*s*m-i*S*m-d*s*y+i*h*y)*z,this}scale(e){const i=this.elements,s=e.x,l=e.y,u=e.z;return i[0]*=s,i[4]*=l,i[8]*=u,i[1]*=s,i[5]*=l,i[9]*=u,i[2]*=s,i[6]*=l,i[10]*=u,i[3]*=s,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),u=1-s,d=e.x,h=e.y,m=e.z,p=u*d,g=u*h;return this.set(p*d+s,p*h-l*m,p*m+l*h,0,p*h+l*m,g*h+s,g*m-l*d,0,p*m-l*h,g*m+l*d,u*m*m+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,u,d){return this.set(1,s,u,0,e,1,d,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,u=i._x,d=i._y,h=i._z,m=i._w,p=u+u,g=d+d,S=h+h,y=u*p,M=u*g,A=u*S,b=d*g,x=d*S,v=h*S,O=m*p,w=m*g,P=m*S,q=s.x,I=s.y,z=s.z;return l[0]=(1-(b+v))*q,l[1]=(M+P)*q,l[2]=(A-w)*q,l[3]=0,l[4]=(M-P)*I,l[5]=(1-(y+v))*I,l[6]=(x+O)*I,l[7]=0,l[8]=(A+w)*z,l[9]=(x-O)*z,l[10]=(1-(y+b))*z,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;let u=ls.set(l[0],l[1],l[2]).length();const d=ls.set(l[4],l[5],l[6]).length(),h=ls.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),e.x=l[12],e.y=l[13],e.z=l[14],xi.copy(this);const p=1/u,g=1/d,S=1/h;return xi.elements[0]*=p,xi.elements[1]*=p,xi.elements[2]*=p,xi.elements[4]*=g,xi.elements[5]*=g,xi.elements[6]*=g,xi.elements[8]*=S,xi.elements[9]*=S,xi.elements[10]*=S,i.setFromRotationMatrix(xi),s.x=u,s.y=d,s.z=h,this}makePerspective(e,i,s,l,u,d,h=ra){const m=this.elements,p=2*u/(i-e),g=2*u/(s-l),S=(i+e)/(i-e),y=(s+l)/(s-l);let M,A;if(h===ra)M=-(d+u)/(d-u),A=-2*d*u/(d-u);else if(h===Mc)M=-d/(d-u),A=-d*u/(d-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return m[0]=p,m[4]=0,m[8]=S,m[12]=0,m[1]=0,m[5]=g,m[9]=y,m[13]=0,m[2]=0,m[6]=0,m[10]=M,m[14]=A,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,i,s,l,u,d,h=ra){const m=this.elements,p=1/(i-e),g=1/(s-l),S=1/(d-u),y=(i+e)*p,M=(s+l)*g;let A,b;if(h===ra)A=(d+u)*S,b=-2*S;else if(h===Mc)A=u*S,b=-1*S;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return m[0]=2*p,m[4]=0,m[8]=0,m[12]=-y,m[1]=0,m[5]=2*g,m[9]=0,m[13]=-M,m[2]=0,m[6]=0,m[10]=b,m[14]=-A,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}}const ls=new tt,xi=new mn,dx=new tt(0,0,0),px=new tt(1,1,1),Ia=new tt,tc=new tt,ti=new tt,m_=new mn,g_=new Po;class Rc{constructor(e=0,i=0,s=0,l=Rc.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,u=l[0],d=l[4],h=l[8],m=l[1],p=l[5],g=l[9],S=l[2],y=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(kn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,M),this._z=Math.atan2(-d,u)):(this._x=Math.atan2(y,p),this._z=0);break;case"YXZ":this._x=Math.asin(-kn(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-S,u),this._z=0);break;case"ZXY":this._x=Math.asin(kn(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-S,M),this._z=Math.atan2(-d,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-kn(S,-1,1)),Math.abs(S)<.9999999?(this._x=Math.atan2(y,M),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-d,p));break;case"YZX":this._z=Math.asin(kn(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-S,u)):(this._x=0,this._y=Math.atan2(h,M));break;case"XZY":this._z=Math.asin(-kn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(y,p),this._y=Math.atan2(h,u)):(this._x=Math.atan2(-g,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return m_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(m_,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return g_.setFromEuler(this),this.setFromQuaternion(g_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Rc.DEFAULT_ORDER="XYZ";class M0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let mx=0;const __=new tt,cs=new Po,ta=new mn,ec=new tt,wo=new tt,gx=new tt,_x=new Po,v_=new tt(1,0,0),S_=new tt(0,1,0),y_=new tt(0,0,1),vx={type:"added"},Sx={type:"removed"};class qn extends ws{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mx++}),this.uuid=zo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=qn.DEFAULT_UP.clone();const e=new tt,i=new Rc,s=new Po,l=new tt(1,1,1);function u(){s.setFromEuler(i,!1)}function d(){i.setFromQuaternion(s,void 0,!1)}i._onChange(u),s._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new mn},normalMatrix:{value:new ge}}),this.matrix=new mn,this.matrixWorld=new mn,this.matrixAutoUpdate=qn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=qn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new M0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return cs.setFromAxisAngle(e,i),this.quaternion.multiply(cs),this}rotateOnWorldAxis(e,i){return cs.setFromAxisAngle(e,i),this.quaternion.premultiply(cs),this}rotateX(e){return this.rotateOnAxis(v_,e)}rotateY(e){return this.rotateOnAxis(S_,e)}rotateZ(e){return this.rotateOnAxis(y_,e)}translateOnAxis(e,i){return __.copy(e).applyQuaternion(this.quaternion),this.position.add(__.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(v_,e)}translateY(e){return this.translateOnAxis(S_,e)}translateZ(e){return this.translateOnAxis(y_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ta.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?ec.copy(e):ec.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),wo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ta.lookAt(wo,ec,this.up):ta.lookAt(ec,wo,this.up),this.quaternion.setFromRotationMatrix(ta),l&&(ta.extractRotation(l.matrixWorld),cs.setFromRotationMatrix(ta),this.quaternion.premultiply(cs.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(vx)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(Sx)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ta.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ta.multiply(e.parent.matrixWorld)),e.applyMatrix4(ta),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const d=this.children[s].getObjectByProperty(e,i);if(d!==void 0)return d}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wo,e,gx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wo,_x,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++){const u=i[s];(u.matrixWorldAutoUpdate===!0||e===!0)&&u.updateMatrixWorld(e)}}updateWorldMatrix(e,i){const s=this.parent;if(e===!0&&s!==null&&s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),i===!0){const l=this.children;for(let u=0,d=l.length;u<d;u++){const h=l[u];h.matrixWorldAutoUpdate===!0&&h.updateWorldMatrix(!1,!0)}}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.visibility=this._visibility,l.active=this._active,l.bounds=this._bounds.map(h=>({boxInitialized:h.boxInitialized,boxMin:h.box.min.toArray(),boxMax:h.box.max.toArray(),sphereInitialized:h.sphereInitialized,sphereRadius:h.sphere.radius,sphereCenter:h.sphere.center.toArray()})),l.maxGeometryCount=this._maxGeometryCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.geometryCount=this._geometryCount,l.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(l.boundingSphere={center:l.boundingSphere.center.toArray(),radius:l.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}));function u(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const S=m[p];u(e.shapes,S)}else u(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(u(e.materials,this.material[m]));l.material=h}else l.material=u(e.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(u(e.animations,m))}}if(i){const h=d(e.geometries),m=d(e.materials),p=d(e.textures),g=d(e.images),S=d(e.shapes),y=d(e.skeletons),M=d(e.animations),A=d(e.nodes);h.length>0&&(s.geometries=h),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),g.length>0&&(s.images=g),S.length>0&&(s.shapes=S),y.length>0&&(s.skeletons=y),M.length>0&&(s.animations=M),A.length>0&&(s.nodes=A)}return s.object=l,s;function d(h){const m=[];for(const p in h){const g=h[p];delete g.metadata,m.push(g)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}qn.DEFAULT_UP=new tt(0,1,0);qn.DEFAULT_MATRIX_AUTO_UPDATE=!0;qn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Mi=new tt,ea=new tt,ah=new tt,na=new tt,us=new tt,fs=new tt,x_=new tt,rh=new tt,sh=new tt,oh=new tt;let nc=!1;class Ei{constructor(e=new tt,i=new tt,s=new tt){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),Mi.subVectors(e,i),l.cross(Mi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(e,i,s,l,u){Mi.subVectors(l,i),ea.subVectors(s,i),ah.subVectors(e,i);const d=Mi.dot(Mi),h=Mi.dot(ea),m=Mi.dot(ah),p=ea.dot(ea),g=ea.dot(ah),S=d*p-h*h;if(S===0)return u.set(0,0,0),null;const y=1/S,M=(p*m-h*g)*y,A=(d*g-h*m)*y;return u.set(1-M-A,A,M)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,na)===null?!1:na.x>=0&&na.y>=0&&na.x+na.y<=1}static getUV(e,i,s,l,u,d,h,m){return nc===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),nc=!0),this.getInterpolation(e,i,s,l,u,d,h,m)}static getInterpolation(e,i,s,l,u,d,h,m){return this.getBarycoord(e,i,s,l,na)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,na.x),m.addScaledVector(d,na.y),m.addScaledVector(h,na.z),m)}static isFrontFacing(e,i,s,l){return Mi.subVectors(s,i),ea.subVectors(e,i),Mi.cross(ea).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Mi.subVectors(this.c,this.b),ea.subVectors(this.a,this.b),Mi.cross(ea).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ei.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Ei.getBarycoord(e,this.a,this.b,this.c,i)}getUV(e,i,s,l,u){return nc===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),nc=!0),Ei.getInterpolation(e,this.a,this.b,this.c,i,s,l,u)}getInterpolation(e,i,s,l,u){return Ei.getInterpolation(e,this.a,this.b,this.c,i,s,l,u)}containsPoint(e){return Ei.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ei.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,u=this.c;let d,h;us.subVectors(l,s),fs.subVectors(u,s),rh.subVectors(e,s);const m=us.dot(rh),p=fs.dot(rh);if(m<=0&&p<=0)return i.copy(s);sh.subVectors(e,l);const g=us.dot(sh),S=fs.dot(sh);if(g>=0&&S<=g)return i.copy(l);const y=m*S-g*p;if(y<=0&&m>=0&&g<=0)return d=m/(m-g),i.copy(s).addScaledVector(us,d);oh.subVectors(e,u);const M=us.dot(oh),A=fs.dot(oh);if(A>=0&&M<=A)return i.copy(u);const b=M*p-m*A;if(b<=0&&p>=0&&A<=0)return h=p/(p-A),i.copy(s).addScaledVector(fs,h);const x=g*A-M*S;if(x<=0&&S-g>=0&&M-A>=0)return x_.subVectors(u,l),h=(S-g)/(S-g+(M-A)),i.copy(l).addScaledVector(x_,h);const v=1/(x+b+y);return d=b*v,h=y*v,i.copy(s).addScaledVector(us,d).addScaledVector(fs,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const E0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fa={h:0,s:0,l:0},ic={h:0,s:0,l:0};function lh(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Ue{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=Mn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Be.toWorkingColorSpace(this,i),this}setRGB(e,i,s,l=Be.workingColorSpace){return this.r=e,this.g=i,this.b=s,Be.toWorkingColorSpace(this,l),this}setHSL(e,i,s,l=Be.workingColorSpace){if(e=rx(e,1),i=kn(i,0,1),s=kn(s,0,1),i===0)this.r=this.g=this.b=s;else{const u=s<=.5?s*(1+i):s+i-s*i,d=2*s-u;this.r=lh(d,u,e+1/3),this.g=lh(d,u,e),this.b=lh(d,u,e-1/3)}return Be.toWorkingColorSpace(this,l),this}setStyle(e,i=Mn){function s(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=l[1],d=u.length;if(d===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=Mn){const s=E0[e.toLowerCase()];return s!==void 0?this.setHex(s,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ts(e.r),this.g=Ts(e.g),this.b=Ts(e.b),this}copyLinearToSRGB(e){return this.r=Kf(e.r),this.g=Kf(e.g),this.b=Kf(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Mn){return Be.fromWorkingColorSpace(Rn.copy(this),e),Math.round(kn(Rn.r*255,0,255))*65536+Math.round(kn(Rn.g*255,0,255))*256+Math.round(kn(Rn.b*255,0,255))}getHexString(e=Mn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Be.workingColorSpace){Be.fromWorkingColorSpace(Rn.copy(this),i);const s=Rn.r,l=Rn.g,u=Rn.b,d=Math.max(s,l,u),h=Math.min(s,l,u);let m,p;const g=(h+d)/2;if(h===d)m=0,p=0;else{const S=d-h;switch(p=g<=.5?S/(d+h):S/(2-d-h),d){case s:m=(l-u)/S+(l<u?6:0);break;case l:m=(u-s)/S+2;break;case u:m=(s-l)/S+4;break}m/=6}return e.h=m,e.s=p,e.l=g,e}getRGB(e,i=Be.workingColorSpace){return Be.fromWorkingColorSpace(Rn.copy(this),i),e.r=Rn.r,e.g=Rn.g,e.b=Rn.b,e}getStyle(e=Mn){Be.fromWorkingColorSpace(Rn.copy(this),e);const i=Rn.r,s=Rn.g,l=Rn.b;return e!==Mn?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(Fa),this.setHSL(Fa.h+e,Fa.s+i,Fa.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(Fa),e.getHSL(ic);const s=jf(Fa.h,ic.h,i),l=jf(Fa.s,ic.s,i),u=jf(Fa.l,ic.l,i);return this.setHSL(s,l,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,u=e.elements;return this.r=u[0]*i+u[3]*s+u[6]*l,this.g=u[1]*i+u[4]*s+u[7]*l,this.b=u[2]*i+u[5]*s+u[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Rn=new Ue;Ue.NAMES=E0;let yx=0;class Io extends ws{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yx++}),this.uuid=zo(),this.name="",this.type="Material",this.blending=Es,this.side=qa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xh,this.blendDst=Mh,this.blendEquation=mr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ue(0,0,0),this.blendAlpha=0,this.depthFunc=vc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=o_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=is,this.stencilZFail=is,this.stencilZPass=is,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Es&&(s.blending=this.blending),this.side!==qa&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==xh&&(s.blendSrc=this.blendSrc),this.blendDst!==Mh&&(s.blendDst=this.blendDst),this.blendEquation!==mr&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==vc&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==o_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==is&&(s.stencilFail=this.stencilFail),this.stencilZFail!==is&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==is&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(u){const d=[];for(const h in u){const m=u[h];delete m.metadata,d.push(m)}return d}if(i){const u=l(e.textures),d=l(e.images);u.length>0&&(s.textures=u),d.length>0&&(s.images=d)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let u=0;u!==l;++u)s[u]=i[u].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ha extends Io{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=s0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const on=new tt,ac=new Ne;class Oi{constructor(e,i,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=l_,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Va,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)ac.fromBufferAttribute(this,i),ac.applyMatrix3(e),this.setXY(i,ac.x,ac.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)on.fromBufferAttribute(this,i),on.applyMatrix3(e),this.setXYZ(i,on.x,on.y,on.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)on.fromBufferAttribute(this,i),on.applyMatrix4(e),this.setXYZ(i,on.x,on.y,on.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)on.fromBufferAttribute(this,i),on.applyNormalMatrix(e),this.setXYZ(i,on.x,on.y,on.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)on.fromBufferAttribute(this,i),on.transformDirection(e),this.setXYZ(i,on.x,on.y,on.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=bo(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=Vn(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=bo(i,this.array)),i}setX(e,i){return this.normalized&&(i=Vn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=bo(i,this.array)),i}setY(e,i){return this.normalized&&(i=Vn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=bo(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Vn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=bo(i,this.array)),i}setW(e,i){return this.normalized&&(i=Vn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=Vn(i,this.array),s=Vn(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=Vn(i,this.array),s=Vn(s,this.array),l=Vn(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,u){return e*=this.itemSize,this.normalized&&(i=Vn(i,this.array),s=Vn(s,this.array),l=Vn(l,this.array),u=Vn(u,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==l_&&(e.usage=this.usage),e}}class T0 extends Oi{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class A0 extends Oi{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class Nn extends Oi{constructor(e,i,s){super(new Float32Array(e),i,s)}}let xx=0;const di=new mn,ch=new qn,hs=new tt,ei=new Bo,Do=new Bo,pn=new tt;class bi extends ws{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xx++}),this.uuid=zo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(_0(e)?A0:T0)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const u=new ge().getNormalMatrix(e);s.applyNormalMatrix(u),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return di.makeRotationFromQuaternion(e),this.applyMatrix4(di),this}rotateX(e){return di.makeRotationX(e),this.applyMatrix4(di),this}rotateY(e){return di.makeRotationY(e),this.applyMatrix4(di),this}rotateZ(e){return di.makeRotationZ(e),this.applyMatrix4(di),this}translate(e,i,s){return di.makeTranslation(e,i,s),this.applyMatrix4(di),this}scale(e,i,s){return di.makeScale(e,i,s),this.applyMatrix4(di),this}lookAt(e){return ch.lookAt(e),ch.updateMatrix(),this.applyMatrix4(ch.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hs).negate(),this.translate(hs.x,hs.y,hs.z),this}setFromPoints(e){const i=[];for(let s=0,l=e.length;s<l;s++){const u=e[s];i.push(u.x,u.y,u.z||0)}return this.setAttribute("position",new Nn(i,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bo);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new tt(-1/0,-1/0,-1/0),new tt(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const u=i[s];ei.setFromBufferAttribute(u),this.morphTargetsRelative?(pn.addVectors(this.boundingBox.min,ei.min),this.boundingBox.expandByPoint(pn),pn.addVectors(this.boundingBox.max,ei.max),this.boundingBox.expandByPoint(pn)):(this.boundingBox.expandByPoint(ei.min),this.boundingBox.expandByPoint(ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bc);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new tt,1/0);return}if(e){const s=this.boundingSphere.center;if(ei.setFromBufferAttribute(e),i)for(let u=0,d=i.length;u<d;u++){const h=i[u];Do.setFromBufferAttribute(h),this.morphTargetsRelative?(pn.addVectors(ei.min,Do.min),ei.expandByPoint(pn),pn.addVectors(ei.max,Do.max),ei.expandByPoint(pn)):(ei.expandByPoint(Do.min),ei.expandByPoint(Do.max))}ei.getCenter(s);let l=0;for(let u=0,d=e.count;u<d;u++)pn.fromBufferAttribute(e,u),l=Math.max(l,s.distanceToSquared(pn));if(i)for(let u=0,d=i.length;u<d;u++){const h=i[u],m=this.morphTargetsRelative;for(let p=0,g=h.count;p<g;p++)pn.fromBufferAttribute(h,p),m&&(hs.fromBufferAttribute(e,p),pn.add(hs)),l=Math.max(l,s.distanceToSquared(pn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=e.array,l=i.position.array,u=i.normal.array,d=i.uv.array,h=l.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Oi(new Float32Array(4*h),4));const m=this.getAttribute("tangent").array,p=[],g=[];for(let U=0;U<h;U++)p[U]=new tt,g[U]=new tt;const S=new tt,y=new tt,M=new tt,A=new Ne,b=new Ne,x=new Ne,v=new tt,O=new tt;function w(U,ct,ft){S.fromArray(l,U*3),y.fromArray(l,ct*3),M.fromArray(l,ft*3),A.fromArray(d,U*2),b.fromArray(d,ct*2),x.fromArray(d,ft*2),y.sub(S),M.sub(S),b.sub(A),x.sub(A);const Mt=1/(b.x*x.y-x.x*b.y);isFinite(Mt)&&(v.copy(y).multiplyScalar(x.y).addScaledVector(M,-b.y).multiplyScalar(Mt),O.copy(M).multiplyScalar(b.x).addScaledVector(y,-x.x).multiplyScalar(Mt),p[U].add(v),p[ct].add(v),p[ft].add(v),g[U].add(O),g[ct].add(O),g[ft].add(O))}let P=this.groups;P.length===0&&(P=[{start:0,count:s.length}]);for(let U=0,ct=P.length;U<ct;++U){const ft=P[U],Mt=ft.start,k=ft.count;for(let et=Mt,N=Mt+k;et<N;et+=3)w(s[et+0],s[et+1],s[et+2])}const q=new tt,I=new tt,z=new tt,_t=new tt;function D(U){z.fromArray(u,U*3),_t.copy(z);const ct=p[U];q.copy(ct),q.sub(z.multiplyScalar(z.dot(ct))).normalize(),I.crossVectors(_t,ct);const Mt=I.dot(g[U])<0?-1:1;m[U*4]=q.x,m[U*4+1]=q.y,m[U*4+2]=q.z,m[U*4+3]=Mt}for(let U=0,ct=P.length;U<ct;++U){const ft=P[U],Mt=ft.start,k=ft.count;for(let et=Mt,N=Mt+k;et<N;et+=3)D(s[et+0]),D(s[et+1]),D(s[et+2])}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Oi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let y=0,M=s.count;y<M;y++)s.setXYZ(y,0,0,0);const l=new tt,u=new tt,d=new tt,h=new tt,m=new tt,p=new tt,g=new tt,S=new tt;if(e)for(let y=0,M=e.count;y<M;y+=3){const A=e.getX(y+0),b=e.getX(y+1),x=e.getX(y+2);l.fromBufferAttribute(i,A),u.fromBufferAttribute(i,b),d.fromBufferAttribute(i,x),g.subVectors(d,u),S.subVectors(l,u),g.cross(S),h.fromBufferAttribute(s,A),m.fromBufferAttribute(s,b),p.fromBufferAttribute(s,x),h.add(g),m.add(g),p.add(g),s.setXYZ(A,h.x,h.y,h.z),s.setXYZ(b,m.x,m.y,m.z),s.setXYZ(x,p.x,p.y,p.z)}else for(let y=0,M=i.count;y<M;y+=3)l.fromBufferAttribute(i,y+0),u.fromBufferAttribute(i,y+1),d.fromBufferAttribute(i,y+2),g.subVectors(d,u),S.subVectors(l,u),g.cross(S),s.setXYZ(y+0,g.x,g.y,g.z),s.setXYZ(y+1,g.x,g.y,g.z),s.setXYZ(y+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)pn.fromBufferAttribute(e,i),pn.normalize(),e.setXYZ(i,pn.x,pn.y,pn.z)}toNonIndexed(){function e(h,m){const p=h.array,g=h.itemSize,S=h.normalized,y=new p.constructor(m.length*g);let M=0,A=0;for(let b=0,x=m.length;b<x;b++){h.isInterleavedBufferAttribute?M=m[b]*h.data.stride+h.offset:M=m[b]*g;for(let v=0;v<g;v++)y[A++]=p[M++]}return new Oi(y,g,S)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new bi,s=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=e(m,s);i.setAttribute(h,p)}const u=this.morphAttributes;for(const h in u){const m=[],p=u[h];for(let g=0,S=p.length;g<S;g++){const y=p[g],M=e(y,s);m.push(M)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,m=d.length;h<m;h++){const p=d[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let S=0,y=p.length;S<y;S++){const M=p[S];g.push(M.toJSON(e.data))}g.length>0&&(l[m]=g,u=!0)}u&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere={center:h.center.toArray(),radius:h.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone(i));const l=e.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const u=e.morphAttributes;for(const p in u){const g=[],S=u[p];for(let y=0,M=S.length;y<M;y++)g.push(S[y].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let p=0,g=d.length;p<g;p++){const S=d[p];this.addGroup(S.start,S.count,S.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const M_=new mn,fr=new x0,rc=new bc,E_=new tt,ds=new tt,ps=new tt,ms=new tt,uh=new tt,sc=new tt,oc=new Ne,lc=new Ne,cc=new Ne,T_=new tt,A_=new tt,b_=new tt,uc=new tt,fc=new tt;class Xn extends qn{constructor(e=new bi,i=new Ha){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,u=s.morphAttributes.position,d=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const h=this.morphTargetInfluences;if(u&&h){sc.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const g=h[m],S=u[m];g!==0&&(uh.fromBufferAttribute(S,e),d?sc.addScaledVector(uh,g):sc.addScaledVector(uh.sub(i),g))}i.add(sc)}return i}raycast(e,i){const s=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),rc.copy(s.boundingSphere),rc.applyMatrix4(u),fr.copy(e.ray).recast(e.near),!(rc.containsPoint(fr.origin)===!1&&(fr.intersectSphere(rc,E_)===null||fr.origin.distanceToSquared(E_)>(e.far-e.near)**2))&&(M_.copy(u).invert(),fr.copy(e.ray).applyMatrix4(M_),!(s.boundingBox!==null&&fr.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,fr)))}_computeIntersections(e,i,s){let l;const u=this.geometry,d=this.material,h=u.index,m=u.attributes.position,p=u.attributes.uv,g=u.attributes.uv1,S=u.attributes.normal,y=u.groups,M=u.drawRange;if(h!==null)if(Array.isArray(d))for(let A=0,b=y.length;A<b;A++){const x=y[A],v=d[x.materialIndex],O=Math.max(x.start,M.start),w=Math.min(h.count,Math.min(x.start+x.count,M.start+M.count));for(let P=O,q=w;P<q;P+=3){const I=h.getX(P),z=h.getX(P+1),_t=h.getX(P+2);l=hc(this,v,e,s,p,g,S,I,z,_t),l&&(l.faceIndex=Math.floor(P/3),l.face.materialIndex=x.materialIndex,i.push(l))}}else{const A=Math.max(0,M.start),b=Math.min(h.count,M.start+M.count);for(let x=A,v=b;x<v;x+=3){const O=h.getX(x),w=h.getX(x+1),P=h.getX(x+2);l=hc(this,d,e,s,p,g,S,O,w,P),l&&(l.faceIndex=Math.floor(x/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let A=0,b=y.length;A<b;A++){const x=y[A],v=d[x.materialIndex],O=Math.max(x.start,M.start),w=Math.min(m.count,Math.min(x.start+x.count,M.start+M.count));for(let P=O,q=w;P<q;P+=3){const I=P,z=P+1,_t=P+2;l=hc(this,v,e,s,p,g,S,I,z,_t),l&&(l.faceIndex=Math.floor(P/3),l.face.materialIndex=x.materialIndex,i.push(l))}}else{const A=Math.max(0,M.start),b=Math.min(m.count,M.start+M.count);for(let x=A,v=b;x<v;x+=3){const O=x,w=x+1,P=x+2;l=hc(this,d,e,s,p,g,S,O,w,P),l&&(l.faceIndex=Math.floor(x/3),i.push(l))}}}}function Mx(o,e,i,s,l,u,d,h){let m;if(e.side===Wn?m=s.intersectTriangle(d,u,l,!0,h):m=s.intersectTriangle(l,u,d,e.side===qa,h),m===null)return null;fc.copy(h),fc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(fc);return p<i.near||p>i.far?null:{distance:p,point:fc.clone(),object:o}}function hc(o,e,i,s,l,u,d,h,m,p){o.getVertexPosition(h,ds),o.getVertexPosition(m,ps),o.getVertexPosition(p,ms);const g=Mx(o,e,i,s,ds,ps,ms,uc);if(g){l&&(oc.fromBufferAttribute(l,h),lc.fromBufferAttribute(l,m),cc.fromBufferAttribute(l,p),g.uv=Ei.getInterpolation(uc,ds,ps,ms,oc,lc,cc,new Ne)),u&&(oc.fromBufferAttribute(u,h),lc.fromBufferAttribute(u,m),cc.fromBufferAttribute(u,p),g.uv1=Ei.getInterpolation(uc,ds,ps,ms,oc,lc,cc,new Ne),g.uv2=g.uv1),d&&(T_.fromBufferAttribute(d,h),A_.fromBufferAttribute(d,m),b_.fromBufferAttribute(d,p),g.normal=Ei.getInterpolation(uc,ds,ps,ms,T_,A_,b_,new tt),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));const S={a:h,b:m,c:p,normal:new tt,materialIndex:0};Ei.getNormal(ds,ps,ms,S.normal),g.face=S}return g}class Ds extends bi{constructor(e=1,i=1,s=1,l=1,u=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:u,depthSegments:d};const h=this;l=Math.floor(l),u=Math.floor(u),d=Math.floor(d);const m=[],p=[],g=[],S=[];let y=0,M=0;A("z","y","x",-1,-1,s,i,e,d,u,0),A("z","y","x",1,-1,s,i,-e,d,u,1),A("x","z","y",1,1,e,s,i,l,d,2),A("x","z","y",1,-1,e,s,-i,l,d,3),A("x","y","z",1,-1,e,i,s,l,u,4),A("x","y","z",-1,-1,e,i,-s,l,u,5),this.setIndex(m),this.setAttribute("position",new Nn(p,3)),this.setAttribute("normal",new Nn(g,3)),this.setAttribute("uv",new Nn(S,2));function A(b,x,v,O,w,P,q,I,z,_t,D){const U=P/z,ct=q/_t,ft=P/2,Mt=q/2,k=I/2,et=z+1,N=_t+1;let X=0,Q=0;const ot=new tt;for(let lt=0;lt<N;lt++){const L=lt*ct-Mt;for(let V=0;V<et;V++){const F=V*U-ft;ot[b]=F*O,ot[x]=L*w,ot[v]=k,p.push(ot.x,ot.y,ot.z),ot[b]=0,ot[x]=0,ot[v]=I>0?1:-1,g.push(ot.x,ot.y,ot.z),S.push(V/z),S.push(1-lt/_t),X+=1}}for(let lt=0;lt<_t;lt++)for(let L=0;L<z;L++){const V=y+L+et*lt,F=y+L+et*(lt+1),Z=y+(L+1)+et*(lt+1),gt=y+(L+1)+et*lt;m.push(V,F,gt),m.push(F,Z,gt),Q+=6}h.addGroup(M,Q,D),M+=Q,y+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ds(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Cs(o){const e={};for(const i in o){e[i]={};for(const s in o[i]){const l=o[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone():Array.isArray(l)?e[i][s]=l.slice():e[i][s]=l}}return e}function Ln(o){const e={};for(let i=0;i<o.length;i++){const s=Cs(o[i]);for(const l in s)e[l]=s[l]}return e}function Ex(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function b0(o){return o.getRenderTarget()===null?o.outputColorSpace:Be.workingColorSpace}const Tx={clone:Cs,merge:Ln};var Ax=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class xr extends Io{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ax,this.fragmentShader=bx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Cs(e.uniforms),this.uniformsGroups=Ex(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class R0 extends qn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mn,this.projectionMatrix=new mn,this.projectionMatrixInverse=new mn,this.coordinateSystem=ra}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class mi extends R0{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Ch*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Yf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ch*2*Math.atan(Math.tan(Yf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,i,s,l,u,d){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Yf*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,u=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,p=d.fullHeight;u+=d.offsetX*l/m,i-=d.offsetY*s/p,l*=d.width/m,s*=d.height/p}const h=this.filmOffset;h!==0&&(u+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-s,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const gs=-90,_s=1;class Rx extends qn{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new mi(gs,_s,e,i);l.layers=this.layers,this.add(l);const u=new mi(gs,_s,e,i);u.layers=this.layers,this.add(u);const d=new mi(gs,_s,e,i);d.layers=this.layers,this.add(d);const h=new mi(gs,_s,e,i);h.layers=this.layers,this.add(h);const m=new mi(gs,_s,e,i);m.layers=this.layers,this.add(m);const p=new mi(gs,_s,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,u,d,h,m]=i;for(const p of i)this.remove(p);if(e===ra)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Mc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,d,h,m,p,g]=this.children,S=e.getRenderTarget(),y=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),A=e.xr.enabled;e.xr.enabled=!1;const b=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,l),e.render(i,u),e.setRenderTarget(s,1,l),e.render(i,d),e.setRenderTarget(s,2,l),e.render(i,h),e.setRenderTarget(s,3,l),e.render(i,m),e.setRenderTarget(s,4,l),e.render(i,p),s.texture.generateMipmaps=b,e.setRenderTarget(s,5,l),e.render(i,g),e.setRenderTarget(S,y,M),e.xr.enabled=A,s.texture.needsPMREMUpdate=!0}}class C0 extends ni{constructor(e,i,s,l,u,d,h,m,p,g){e=e!==void 0?e:[],i=i!==void 0?i:As,super(e,i,s,l,u,d,h,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Cx extends yr{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];i.encoding!==void 0&&(Uo("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Sr?Mn:gi),this.texture=new C0(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:pi}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Ds(5,5,5),u=new xr({name:"CubemapFromEquirect",uniforms:Cs(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Wn,blending:ka});u.uniforms.tEquirect.value=i;const d=new Xn(l,u),h=i.minFilter;return i.minFilter===No&&(i.minFilter=pi),new Rx(1,10,this).update(e,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(e,i,s,l){const u=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(i,s,l);e.setRenderTarget(u)}}const fh=new tt,wx=new tt,Dx=new ge;class dr{constructor(e=new tt(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=fh.subVectors(s,i).cross(wx.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const s=e.delta(fh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(e.start).addScaledVector(s,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||Dx.getNormalMatrix(e),l=this.coplanarPoint(fh).applyMatrix4(e),u=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const hr=new bc,dc=new tt;class w0{constructor(e=new dr,i=new dr,s=new dr,l=new dr,u=new dr,d=new dr){this.planes=[e,i,s,l,u,d]}set(e,i,s,l,u,d){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(s),h[3].copy(l),h[4].copy(u),h[5].copy(d),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=ra){const s=this.planes,l=e.elements,u=l[0],d=l[1],h=l[2],m=l[3],p=l[4],g=l[5],S=l[6],y=l[7],M=l[8],A=l[9],b=l[10],x=l[11],v=l[12],O=l[13],w=l[14],P=l[15];if(s[0].setComponents(m-u,y-p,x-M,P-v).normalize(),s[1].setComponents(m+u,y+p,x+M,P+v).normalize(),s[2].setComponents(m+d,y+g,x+A,P+O).normalize(),s[3].setComponents(m-d,y-g,x-A,P-O).normalize(),s[4].setComponents(m-h,y-S,x-b,P-w).normalize(),i===ra)s[5].setComponents(m+h,y+S,x+b,P+w).normalize();else if(i===Mc)s[5].setComponents(h,S,b,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),hr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),hr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(hr)}intersectsSprite(e){return hr.center.set(0,0,0),hr.radius=.7071067811865476,hr.applyMatrix4(e.matrixWorld),this.intersectsSphere(hr)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(dc.x=l.normal.x>0?e.max.x:e.min.x,dc.y=l.normal.y>0?e.max.y:e.min.y,dc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(dc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function D0(){let o=null,e=!1,i=null,s=null;function l(u,d){i(u,d),s=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(s=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function Lx(o,e){const i=e.isWebGL2,s=new WeakMap;function l(p,g){const S=p.array,y=p.usage,M=S.byteLength,A=o.createBuffer();o.bindBuffer(g,A),o.bufferData(g,S,y),p.onUploadCallback();let b;if(S instanceof Float32Array)b=o.FLOAT;else if(S instanceof Uint16Array)if(p.isFloat16BufferAttribute)if(i)b=o.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else b=o.UNSIGNED_SHORT;else if(S instanceof Int16Array)b=o.SHORT;else if(S instanceof Uint32Array)b=o.UNSIGNED_INT;else if(S instanceof Int32Array)b=o.INT;else if(S instanceof Int8Array)b=o.BYTE;else if(S instanceof Uint8Array)b=o.UNSIGNED_BYTE;else if(S instanceof Uint8ClampedArray)b=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+S);return{buffer:A,type:b,bytesPerElement:S.BYTES_PER_ELEMENT,version:p.version,size:M}}function u(p,g,S){const y=g.array,M=g._updateRange,A=g.updateRanges;if(o.bindBuffer(S,p),M.count===-1&&A.length===0&&o.bufferSubData(S,0,y),A.length!==0){for(let b=0,x=A.length;b<x;b++){const v=A[b];i?o.bufferSubData(S,v.start*y.BYTES_PER_ELEMENT,y,v.start,v.count):o.bufferSubData(S,v.start*y.BYTES_PER_ELEMENT,y.subarray(v.start,v.start+v.count))}g.clearUpdateRanges()}M.count!==-1&&(i?o.bufferSubData(S,M.offset*y.BYTES_PER_ELEMENT,y,M.offset,M.count):o.bufferSubData(S,M.offset*y.BYTES_PER_ELEMENT,y.subarray(M.offset,M.offset+M.count)),M.count=-1),g.onUploadCallback()}function d(p){return p.isInterleavedBufferAttribute&&(p=p.data),s.get(p)}function h(p){p.isInterleavedBufferAttribute&&(p=p.data);const g=s.get(p);g&&(o.deleteBuffer(g.buffer),s.delete(p))}function m(p,g){if(p.isGLBufferAttribute){const y=s.get(p);(!y||y.version<p.version)&&s.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}p.isInterleavedBufferAttribute&&(p=p.data);const S=s.get(p);if(S===void 0)s.set(p,l(p,g));else if(S.version<p.version){if(S.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");u(S.buffer,p,g),S.version=p.version}}return{get:d,remove:h,update:m}}class zh extends bi{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const u=e/2,d=i/2,h=Math.floor(s),m=Math.floor(l),p=h+1,g=m+1,S=e/h,y=i/m,M=[],A=[],b=[],x=[];for(let v=0;v<g;v++){const O=v*y-d;for(let w=0;w<p;w++){const P=w*S-u;A.push(P,-O,0),b.push(0,0,1),x.push(w/h),x.push(1-v/m)}}for(let v=0;v<m;v++)for(let O=0;O<h;O++){const w=O+p*v,P=O+p*(v+1),q=O+1+p*(v+1),I=O+1+p*v;M.push(w,P,I),M.push(P,q,I)}this.setIndex(M),this.setAttribute("position",new Nn(A,3)),this.setAttribute("normal",new Nn(b,3)),this.setAttribute("uv",new Nn(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zh(e.width,e.height,e.widthSegments,e.heightSegments)}}var Ux=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Nx=`#ifdef USE_ALPHAHASH
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
#endif`,Ox=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Px=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Bx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ix=`#ifdef USE_AOMAP
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
#endif`,Fx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Hx=`#ifdef USE_BATCHING
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
#endif`,Gx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Vx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,kx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Xx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Wx=`#ifdef USE_IRIDESCENCE
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
#endif`,qx=`#ifdef USE_BUMPMAP
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
#endif`,Yx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,jx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Zx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Kx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Qx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Jx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,$x=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,tM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,eM=`#define PI 3.141592653589793
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
} // validated`,nM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,iM=`vec3 transformedNormal = objectNormal;
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
#endif`,aM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,rM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,sM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,oM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,lM="gl_FragColor = linearToOutputTexel( gl_FragColor );",cM=`
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
}`,uM=`#ifdef USE_ENVMAP
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
#endif`,fM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,hM=`#ifdef USE_ENVMAP
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
#endif`,dM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,pM=`#ifdef USE_ENVMAP
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
#endif`,mM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,gM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_M=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,vM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,SM=`#ifdef USE_GRADIENTMAP
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
}`,yM=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,xM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,MM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,EM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,TM=`uniform bool receiveShadow;
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
#endif`,AM=`#ifdef USE_ENVMAP
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
#endif`,bM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,RM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,CM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,DM=`PhysicalMaterial material;
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
#endif`,LM=`struct PhysicalMaterial {
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
}`,UM=`
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
#endif`,NM=`#if defined( RE_IndirectDiffuse )
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
#endif`,OM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,PM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,BM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,IM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,FM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,HM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,GM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,VM=`#if defined( USE_POINTS_UV )
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
#endif`,kM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,XM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,WM=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,qM=`#ifdef USE_MORPHNORMALS
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
#endif`,YM=`#ifdef USE_MORPHTARGETS
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
#endif`,jM=`#ifdef USE_MORPHTARGETS
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
#endif`,ZM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,KM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,QM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,JM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$M=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,tE=`#ifdef USE_NORMALMAP
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
#endif`,eE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,nE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,iE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,aE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,rE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,oE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,uE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,fE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,dE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,pE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,mE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,gE=`float getShadowMask() {
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
}`,_E=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vE=`#ifdef USE_SKINNING
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
#endif`,SE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yE=`#ifdef USE_SKINNING
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
#endif`,xE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ME=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,EE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,TE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,AE=`#ifdef USE_TRANSMISSION
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
#endif`,bE=`#ifdef USE_TRANSMISSION
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
#endif`,RE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,CE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,DE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const LE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,UE=`uniform sampler2D t2D;
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
}`,NE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,OE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,zE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,PE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,BE=`#include <common>
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
}`,IE=`#if DEPTH_PACKING == 3200
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
}`,FE=`#define DISTANCE
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
}`,HE=`#define DISTANCE
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
}`,GE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,VE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kE=`uniform float scale;
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
}`,XE=`uniform vec3 diffuse;
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
}`,WE=`#include <common>
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
}`,qE=`uniform vec3 diffuse;
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
}`,YE=`#define LAMBERT
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
}`,jE=`#define LAMBERT
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
}`,ZE=`#define MATCAP
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
}`,KE=`#define MATCAP
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
}`,QE=`#define NORMAL
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
}`,JE=`#define NORMAL
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
}`,$E=`#define PHONG
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
}`,tT=`#define PHONG
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
}`,eT=`#define STANDARD
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
}`,nT=`#define STANDARD
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
}`,iT=`#define TOON
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
}`,aT=`#define TOON
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
}`,rT=`uniform float size;
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
}`,sT=`uniform vec3 diffuse;
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
}`,oT=`#include <common>
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
}`,lT=`uniform vec3 color;
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
}`,cT=`uniform float rotation;
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
}`,uT=`uniform vec3 diffuse;
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
}`,pe={alphahash_fragment:Ux,alphahash_pars_fragment:Nx,alphamap_fragment:Ox,alphamap_pars_fragment:zx,alphatest_fragment:Px,alphatest_pars_fragment:Bx,aomap_fragment:Ix,aomap_pars_fragment:Fx,batching_pars_vertex:Hx,batching_vertex:Gx,begin_vertex:Vx,beginnormal_vertex:kx,bsdfs:Xx,iridescence_fragment:Wx,bumpmap_pars_fragment:qx,clipping_planes_fragment:Yx,clipping_planes_pars_fragment:jx,clipping_planes_pars_vertex:Zx,clipping_planes_vertex:Kx,color_fragment:Qx,color_pars_fragment:Jx,color_pars_vertex:$x,color_vertex:tM,common:eM,cube_uv_reflection_fragment:nM,defaultnormal_vertex:iM,displacementmap_pars_vertex:aM,displacementmap_vertex:rM,emissivemap_fragment:sM,emissivemap_pars_fragment:oM,colorspace_fragment:lM,colorspace_pars_fragment:cM,envmap_fragment:uM,envmap_common_pars_fragment:fM,envmap_pars_fragment:hM,envmap_pars_vertex:dM,envmap_physical_pars_fragment:AM,envmap_vertex:pM,fog_vertex:mM,fog_pars_vertex:gM,fog_fragment:_M,fog_pars_fragment:vM,gradientmap_pars_fragment:SM,lightmap_fragment:yM,lightmap_pars_fragment:xM,lights_lambert_fragment:MM,lights_lambert_pars_fragment:EM,lights_pars_begin:TM,lights_toon_fragment:bM,lights_toon_pars_fragment:RM,lights_phong_fragment:CM,lights_phong_pars_fragment:wM,lights_physical_fragment:DM,lights_physical_pars_fragment:LM,lights_fragment_begin:UM,lights_fragment_maps:NM,lights_fragment_end:OM,logdepthbuf_fragment:zM,logdepthbuf_pars_fragment:PM,logdepthbuf_pars_vertex:BM,logdepthbuf_vertex:IM,map_fragment:FM,map_pars_fragment:HM,map_particle_fragment:GM,map_particle_pars_fragment:VM,metalnessmap_fragment:kM,metalnessmap_pars_fragment:XM,morphcolor_vertex:WM,morphnormal_vertex:qM,morphtarget_pars_vertex:YM,morphtarget_vertex:jM,normal_fragment_begin:ZM,normal_fragment_maps:KM,normal_pars_fragment:QM,normal_pars_vertex:JM,normal_vertex:$M,normalmap_pars_fragment:tE,clearcoat_normal_fragment_begin:eE,clearcoat_normal_fragment_maps:nE,clearcoat_pars_fragment:iE,iridescence_pars_fragment:aE,opaque_fragment:rE,packing:sE,premultiplied_alpha_fragment:oE,project_vertex:lE,dithering_fragment:cE,dithering_pars_fragment:uE,roughnessmap_fragment:fE,roughnessmap_pars_fragment:hE,shadowmap_pars_fragment:dE,shadowmap_pars_vertex:pE,shadowmap_vertex:mE,shadowmask_pars_fragment:gE,skinbase_vertex:_E,skinning_pars_vertex:vE,skinning_vertex:SE,skinnormal_vertex:yE,specularmap_fragment:xE,specularmap_pars_fragment:ME,tonemapping_fragment:EE,tonemapping_pars_fragment:TE,transmission_fragment:AE,transmission_pars_fragment:bE,uv_pars_fragment:RE,uv_pars_vertex:CE,uv_vertex:wE,worldpos_vertex:DE,background_vert:LE,background_frag:UE,backgroundCube_vert:NE,backgroundCube_frag:OE,cube_vert:zE,cube_frag:PE,depth_vert:BE,depth_frag:IE,distanceRGBA_vert:FE,distanceRGBA_frag:HE,equirect_vert:GE,equirect_frag:VE,linedashed_vert:kE,linedashed_frag:XE,meshbasic_vert:WE,meshbasic_frag:qE,meshlambert_vert:YE,meshlambert_frag:jE,meshmatcap_vert:ZE,meshmatcap_frag:KE,meshnormal_vert:QE,meshnormal_frag:JE,meshphong_vert:$E,meshphong_frag:tT,meshphysical_vert:eT,meshphysical_frag:nT,meshtoon_vert:iT,meshtoon_frag:aT,points_vert:rT,points_frag:sT,shadow_vert:oT,shadow_frag:lT,sprite_vert:cT,sprite_frag:uT},Dt={common:{diffuse:{value:new Ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ge},alphaMap:{value:null},alphaMapTransform:{value:new ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ge}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ge},normalScale:{value:new Ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ge},alphaTest:{value:0},uvTransform:{value:new ge}},sprite:{diffuse:{value:new Ue(16777215)},opacity:{value:1},center:{value:new Ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ge},alphaMap:{value:null},alphaMapTransform:{value:new ge},alphaTest:{value:0}}},Ni={basic:{uniforms:Ln([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.fog]),vertexShader:pe.meshbasic_vert,fragmentShader:pe.meshbasic_frag},lambert:{uniforms:Ln([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new Ue(0)}}]),vertexShader:pe.meshlambert_vert,fragmentShader:pe.meshlambert_frag},phong:{uniforms:Ln([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new Ue(0)},specular:{value:new Ue(1118481)},shininess:{value:30}}]),vertexShader:pe.meshphong_vert,fragmentShader:pe.meshphong_frag},standard:{uniforms:Ln([Dt.common,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.roughnessmap,Dt.metalnessmap,Dt.fog,Dt.lights,{emissive:{value:new Ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag},toon:{uniforms:Ln([Dt.common,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.gradientmap,Dt.fog,Dt.lights,{emissive:{value:new Ue(0)}}]),vertexShader:pe.meshtoon_vert,fragmentShader:pe.meshtoon_frag},matcap:{uniforms:Ln([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,{matcap:{value:null}}]),vertexShader:pe.meshmatcap_vert,fragmentShader:pe.meshmatcap_frag},points:{uniforms:Ln([Dt.points,Dt.fog]),vertexShader:pe.points_vert,fragmentShader:pe.points_frag},dashed:{uniforms:Ln([Dt.common,Dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pe.linedashed_vert,fragmentShader:pe.linedashed_frag},depth:{uniforms:Ln([Dt.common,Dt.displacementmap]),vertexShader:pe.depth_vert,fragmentShader:pe.depth_frag},normal:{uniforms:Ln([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,{opacity:{value:1}}]),vertexShader:pe.meshnormal_vert,fragmentShader:pe.meshnormal_frag},sprite:{uniforms:Ln([Dt.sprite,Dt.fog]),vertexShader:pe.sprite_vert,fragmentShader:pe.sprite_frag},background:{uniforms:{uvTransform:{value:new ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pe.background_vert,fragmentShader:pe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:pe.backgroundCube_vert,fragmentShader:pe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pe.cube_vert,fragmentShader:pe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pe.equirect_vert,fragmentShader:pe.equirect_frag},distanceRGBA:{uniforms:Ln([Dt.common,Dt.displacementmap,{referencePosition:{value:new tt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pe.distanceRGBA_vert,fragmentShader:pe.distanceRGBA_frag},shadow:{uniforms:Ln([Dt.lights,Dt.fog,{color:{value:new Ue(0)},opacity:{value:1}}]),vertexShader:pe.shadow_vert,fragmentShader:pe.shadow_frag}};Ni.physical={uniforms:Ln([Ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ge},clearcoatNormalScale:{value:new Ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ge},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ge},sheen:{value:0},sheenColor:{value:new Ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ge},transmissionSamplerSize:{value:new Ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ge},attenuationDistance:{value:0},attenuationColor:{value:new Ue(0)},specularColor:{value:new Ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ge},anisotropyVector:{value:new Ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ge}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag};const pc={r:0,b:0,g:0};function fT(o,e,i,s,l,u,d){const h=new Ue(0);let m=u===!0?0:1,p,g,S=null,y=0,M=null;function A(x,v){let O=!1,w=v.isScene===!0?v.background:null;w&&w.isTexture&&(w=(v.backgroundBlurriness>0?i:e).get(w)),w===null?b(h,m):w&&w.isColor&&(b(w,1),O=!0);const P=o.xr.getEnvironmentBlendMode();P==="additive"?s.buffers.color.setClear(0,0,0,1,d):P==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,d),(o.autoClear||O)&&o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil),w&&(w.isCubeTexture||w.mapping===Tc)?(g===void 0&&(g=new Xn(new Ds(1,1,1),new xr({name:"BackgroundCubeMaterial",uniforms:Cs(Ni.backgroundCube.uniforms),vertexShader:Ni.backgroundCube.vertexShader,fragmentShader:Ni.backgroundCube.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(q,I,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),g.material.uniforms.envMap.value=w,g.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,g.material.toneMapped=Be.getTransfer(w.colorSpace)!==qe,(S!==w||y!==w.version||M!==o.toneMapping)&&(g.material.needsUpdate=!0,S=w,y=w.version,M=o.toneMapping),g.layers.enableAll(),x.unshift(g,g.geometry,g.material,0,0,null)):w&&w.isTexture&&(p===void 0&&(p=new Xn(new zh(2,2),new xr({name:"BackgroundMaterial",uniforms:Cs(Ni.background.uniforms),vertexShader:Ni.background.vertexShader,fragmentShader:Ni.background.fragmentShader,side:qa,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=w,p.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,p.material.toneMapped=Be.getTransfer(w.colorSpace)!==qe,w.matrixAutoUpdate===!0&&w.updateMatrix(),p.material.uniforms.uvTransform.value.copy(w.matrix),(S!==w||y!==w.version||M!==o.toneMapping)&&(p.material.needsUpdate=!0,S=w,y=w.version,M=o.toneMapping),p.layers.enableAll(),x.unshift(p,p.geometry,p.material,0,0,null))}function b(x,v){x.getRGB(pc,b0(o)),s.buffers.color.setClear(pc.r,pc.g,pc.b,v,d)}return{getClearColor:function(){return h},setClearColor:function(x,v=1){h.set(x),m=v,b(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(x){m=x,b(h,m)},render:A}}function hT(o,e,i,s){const l=o.getParameter(o.MAX_VERTEX_ATTRIBS),u=s.isWebGL2?null:e.get("OES_vertex_array_object"),d=s.isWebGL2||u!==null,h={},m=x(null);let p=m,g=!1;function S(k,et,N,X,Q){let ot=!1;if(d){const lt=b(X,N,et);p!==lt&&(p=lt,M(p.object)),ot=v(k,X,N,Q),ot&&O(k,X,N,Q)}else{const lt=et.wireframe===!0;(p.geometry!==X.id||p.program!==N.id||p.wireframe!==lt)&&(p.geometry=X.id,p.program=N.id,p.wireframe=lt,ot=!0)}Q!==null&&i.update(Q,o.ELEMENT_ARRAY_BUFFER),(ot||g)&&(g=!1,_t(k,et,N,X),Q!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,i.get(Q).buffer))}function y(){return s.isWebGL2?o.createVertexArray():u.createVertexArrayOES()}function M(k){return s.isWebGL2?o.bindVertexArray(k):u.bindVertexArrayOES(k)}function A(k){return s.isWebGL2?o.deleteVertexArray(k):u.deleteVertexArrayOES(k)}function b(k,et,N){const X=N.wireframe===!0;let Q=h[k.id];Q===void 0&&(Q={},h[k.id]=Q);let ot=Q[et.id];ot===void 0&&(ot={},Q[et.id]=ot);let lt=ot[X];return lt===void 0&&(lt=x(y()),ot[X]=lt),lt}function x(k){const et=[],N=[],X=[];for(let Q=0;Q<l;Q++)et[Q]=0,N[Q]=0,X[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:et,enabledAttributes:N,attributeDivisors:X,object:k,attributes:{},index:null}}function v(k,et,N,X){const Q=p.attributes,ot=et.attributes;let lt=0;const L=N.getAttributes();for(const V in L)if(L[V].location>=0){const Z=Q[V];let gt=ot[V];if(gt===void 0&&(V==="instanceMatrix"&&k.instanceMatrix&&(gt=k.instanceMatrix),V==="instanceColor"&&k.instanceColor&&(gt=k.instanceColor)),Z===void 0||Z.attribute!==gt||gt&&Z.data!==gt.data)return!0;lt++}return p.attributesNum!==lt||p.index!==X}function O(k,et,N,X){const Q={},ot=et.attributes;let lt=0;const L=N.getAttributes();for(const V in L)if(L[V].location>=0){let Z=ot[V];Z===void 0&&(V==="instanceMatrix"&&k.instanceMatrix&&(Z=k.instanceMatrix),V==="instanceColor"&&k.instanceColor&&(Z=k.instanceColor));const gt={};gt.attribute=Z,Z&&Z.data&&(gt.data=Z.data),Q[V]=gt,lt++}p.attributes=Q,p.attributesNum=lt,p.index=X}function w(){const k=p.newAttributes;for(let et=0,N=k.length;et<N;et++)k[et]=0}function P(k){q(k,0)}function q(k,et){const N=p.newAttributes,X=p.enabledAttributes,Q=p.attributeDivisors;N[k]=1,X[k]===0&&(o.enableVertexAttribArray(k),X[k]=1),Q[k]!==et&&((s.isWebGL2?o:e.get("ANGLE_instanced_arrays"))[s.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](k,et),Q[k]=et)}function I(){const k=p.newAttributes,et=p.enabledAttributes;for(let N=0,X=et.length;N<X;N++)et[N]!==k[N]&&(o.disableVertexAttribArray(N),et[N]=0)}function z(k,et,N,X,Q,ot,lt){lt===!0?o.vertexAttribIPointer(k,et,N,Q,ot):o.vertexAttribPointer(k,et,N,X,Q,ot)}function _t(k,et,N,X){if(s.isWebGL2===!1&&(k.isInstancedMesh||X.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;w();const Q=X.attributes,ot=N.getAttributes(),lt=et.defaultAttributeValues;for(const L in ot){const V=ot[L];if(V.location>=0){let F=Q[L];if(F===void 0&&(L==="instanceMatrix"&&k.instanceMatrix&&(F=k.instanceMatrix),L==="instanceColor"&&k.instanceColor&&(F=k.instanceColor)),F!==void 0){const Z=F.normalized,gt=F.itemSize,xt=i.get(F);if(xt===void 0)continue;const At=xt.buffer,kt=xt.type,Bt=xt.bytesPerElement,Xt=s.isWebGL2===!0&&(kt===o.INT||kt===o.UNSIGNED_INT||F.gpuType===l0);if(F.isInterleavedBufferAttribute){const he=F.data,nt=he.stride,wt=F.offset;if(he.isInstancedInterleavedBuffer){for(let ht=0;ht<V.locationSize;ht++)q(V.location+ht,he.meshPerAttribute);k.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let ht=0;ht<V.locationSize;ht++)P(V.location+ht);o.bindBuffer(o.ARRAY_BUFFER,At);for(let ht=0;ht<V.locationSize;ht++)z(V.location+ht,gt/V.locationSize,kt,Z,nt*Bt,(wt+gt/V.locationSize*ht)*Bt,Xt)}else{if(F.isInstancedBufferAttribute){for(let he=0;he<V.locationSize;he++)q(V.location+he,F.meshPerAttribute);k.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=F.meshPerAttribute*F.count)}else for(let he=0;he<V.locationSize;he++)P(V.location+he);o.bindBuffer(o.ARRAY_BUFFER,At);for(let he=0;he<V.locationSize;he++)z(V.location+he,gt/V.locationSize,kt,Z,gt*Bt,gt/V.locationSize*he*Bt,Xt)}}else if(lt!==void 0){const Z=lt[L];if(Z!==void 0)switch(Z.length){case 2:o.vertexAttrib2fv(V.location,Z);break;case 3:o.vertexAttrib3fv(V.location,Z);break;case 4:o.vertexAttrib4fv(V.location,Z);break;default:o.vertexAttrib1fv(V.location,Z)}}}}I()}function D(){ft();for(const k in h){const et=h[k];for(const N in et){const X=et[N];for(const Q in X)A(X[Q].object),delete X[Q];delete et[N]}delete h[k]}}function U(k){if(h[k.id]===void 0)return;const et=h[k.id];for(const N in et){const X=et[N];for(const Q in X)A(X[Q].object),delete X[Q];delete et[N]}delete h[k.id]}function ct(k){for(const et in h){const N=h[et];if(N[k.id]===void 0)continue;const X=N[k.id];for(const Q in X)A(X[Q].object),delete X[Q];delete N[k.id]}}function ft(){Mt(),g=!0,p!==m&&(p=m,M(p.object))}function Mt(){m.geometry=null,m.program=null,m.wireframe=!1}return{setup:S,reset:ft,resetDefaultState:Mt,dispose:D,releaseStatesOfGeometry:U,releaseStatesOfProgram:ct,initAttributes:w,enableAttribute:P,disableUnusedAttributes:I}}function dT(o,e,i,s){const l=s.isWebGL2;let u;function d(g){u=g}function h(g,S){o.drawArrays(u,g,S),i.update(S,u,1)}function m(g,S,y){if(y===0)return;let M,A;if(l)M=o,A="drawArraysInstanced";else if(M=e.get("ANGLE_instanced_arrays"),A="drawArraysInstancedANGLE",M===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}M[A](u,g,S,y),i.update(S,u,y)}function p(g,S,y){if(y===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let A=0;A<y;A++)this.render(g[A],S[A]);else{M.multiDrawArraysWEBGL(u,g,0,S,0,y);let A=0;for(let b=0;b<y;b++)A+=S[b];i.update(A,u,1)}}this.setMode=d,this.render=h,this.renderInstances=m,this.renderMultiDraw=p}function pT(o,e,i){let s;function l(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");s=o.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function u(z){if(z==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const d=typeof WebGL2RenderingContext<"u"&&o.constructor.name==="WebGL2RenderingContext";let h=i.precision!==void 0?i.precision:"highp";const m=u(h);m!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",m,"instead."),h=m);const p=d||e.has("WEBGL_draw_buffers"),g=i.logarithmicDepthBuffer===!0,S=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),y=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=o.getParameter(o.MAX_TEXTURE_SIZE),A=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),b=o.getParameter(o.MAX_VERTEX_ATTRIBS),x=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),v=o.getParameter(o.MAX_VARYING_VECTORS),O=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),w=y>0,P=d||e.has("OES_texture_float"),q=w&&P,I=d?o.getParameter(o.MAX_SAMPLES):0;return{isWebGL2:d,drawBuffers:p,getMaxAnisotropy:l,getMaxPrecision:u,precision:h,logarithmicDepthBuffer:g,maxTextures:S,maxVertexTextures:y,maxTextureSize:M,maxCubemapSize:A,maxAttributes:b,maxVertexUniforms:x,maxVaryings:v,maxFragmentUniforms:O,vertexTextures:w,floatFragmentTextures:P,floatVertexTextures:q,maxSamples:I}}function mT(o){const e=this;let i=null,s=0,l=!1,u=!1;const d=new dr,h=new ge,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(S,y){const M=S.length!==0||y||s!==0||l;return l=y,s=S.length,M},this.beginShadows=function(){u=!0,g(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(S,y){i=g(S,y,0)},this.setState=function(S,y,M){const A=S.clippingPlanes,b=S.clipIntersection,x=S.clipShadows,v=o.get(S);if(!l||A===null||A.length===0||u&&!x)u?g(null):p();else{const O=u?0:s,w=O*4;let P=v.clippingState||null;m.value=P,P=g(A,y,w,M);for(let q=0;q!==w;++q)P[q]=i[q];v.clippingState=P,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=O}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function g(S,y,M,A){const b=S!==null?S.length:0;let x=null;if(b!==0){if(x=m.value,A!==!0||x===null){const v=M+b*4,O=y.matrixWorldInverse;h.getNormalMatrix(O),(x===null||x.length<v)&&(x=new Float32Array(v));for(let w=0,P=M;w!==b;++w,P+=4)d.copy(S[w]).applyMatrix4(O,h),d.normal.toArray(x,P),x[P+3]=d.constant}m.value=x,m.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,x}}function gT(o){let e=new WeakMap;function i(d,h){return h===Eh?d.mapping=As:h===Th&&(d.mapping=bs),d}function s(d){if(d&&d.isTexture){const h=d.mapping;if(h===Eh||h===Th)if(e.has(d)){const m=e.get(d).texture;return i(m,d.mapping)}else{const m=d.image;if(m&&m.height>0){const p=new Cx(m.height/2);return p.fromEquirectangularTexture(o,d),e.set(d,p),d.addEventListener("dispose",l),i(p.texture,d.mapping)}else return null}}return d}function l(d){const h=d.target;h.removeEventListener("dispose",l);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function u(){e=new WeakMap}return{get:s,dispose:u}}class _T extends R0{constructor(e=-1,i=1,s=1,l=-1,u=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=u,this.far=d,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,u,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=s-e,d=s+e,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,d=u+p*this.view.width,h-=g*this.view.offsetY,m=h-g*this.view.height}this.projectionMatrix.makeOrthographic(u,d,h,m,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const Ss=4,R_=[.125,.215,.35,.446,.526,.582],gr=20,hh=new _T,C_=new Ue;let dh=null,ph=0,mh=0;const pr=(1+Math.sqrt(5))/2,vs=1/pr,w_=[new tt(1,1,1),new tt(-1,1,1),new tt(1,1,-1),new tt(-1,1,-1),new tt(0,pr,vs),new tt(0,pr,-vs),new tt(vs,0,pr),new tt(-vs,0,pr),new tt(pr,vs,0),new tt(-pr,vs,0)];class D_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,s=.1,l=100){dh=this._renderer.getRenderTarget(),ph=this._renderer.getActiveCubeFace(),mh=this._renderer.getActiveMipmapLevel(),this._setSize(256);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(e,s,l,u),i>0&&this._blur(u,0,0,i),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=N_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=U_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(dh,ph,mh),e.scissorTest=!1,mc(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===As||e.mapping===bs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),dh=this._renderer.getRenderTarget(),ph=this._renderer.getActiveCubeFace(),mh=this._renderer.getActiveMipmapLevel();const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:pi,minFilter:pi,generateMipmaps:!1,type:Oo,format:Ai,colorSpace:sa,depthBuffer:!1},l=L_(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=L_(e,i,s);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=vT(u)),this._blurMaterial=ST(u,e,i)}return l}_compileMaterial(e){const i=new Xn(this._lodPlanes[0],e);this._renderer.compile(i,hh)}_sceneToCubeUV(e,i,s,l){const h=new mi(90,1,i,s),m=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],g=this._renderer,S=g.autoClear,y=g.toneMapping;g.getClearColor(C_),g.toneMapping=Xa,g.autoClear=!1;const M=new Ha({name:"PMREM.Background",side:Wn,depthWrite:!1,depthTest:!1}),A=new Xn(new Ds,M);let b=!1;const x=e.background;x?x.isColor&&(M.color.copy(x),e.background=null,b=!0):(M.color.copy(C_),b=!0);for(let v=0;v<6;v++){const O=v%3;O===0?(h.up.set(0,m[v],0),h.lookAt(p[v],0,0)):O===1?(h.up.set(0,0,m[v]),h.lookAt(0,p[v],0)):(h.up.set(0,m[v],0),h.lookAt(0,0,p[v]));const w=this._cubeSize;mc(l,O*w,v>2?w:0,w,w),g.setRenderTarget(l),b&&g.render(A,h),g.render(e,h)}A.geometry.dispose(),A.material.dispose(),g.toneMapping=y,g.autoClear=S,e.background=x}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===As||e.mapping===bs;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=N_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=U_());const u=l?this._cubemapMaterial:this._equirectMaterial,d=new Xn(this._lodPlanes[0],u),h=u.uniforms;h.envMap.value=e;const m=this._cubeSize;mc(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(d,hh)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;for(let l=1;l<this._lodPlanes.length;l++){const u=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),d=w_[(l-1)%w_.length];this._blur(e,l-1,l,u,d)}i.autoClear=s}_blur(e,i,s,l,u){const d=this._pingPongRenderTarget;this._halfBlur(e,d,i,s,l,"latitudinal",u),this._halfBlur(d,e,s,s,l,"longitudinal",u)}_halfBlur(e,i,s,l,u,d,h){const m=this._renderer,p=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,S=new Xn(this._lodPlanes[l],p),y=p.uniforms,M=this._sizeLods[s]-1,A=isFinite(u)?Math.PI/(2*M):2*Math.PI/(2*gr-1),b=u/A,x=isFinite(u)?1+Math.floor(g*b):gr;x>gr&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${gr}`);const v=[];let O=0;for(let z=0;z<gr;++z){const _t=z/b,D=Math.exp(-_t*_t/2);v.push(D),z===0?O+=D:z<x&&(O+=2*D)}for(let z=0;z<v.length;z++)v[z]=v[z]/O;y.envMap.value=e.texture,y.samples.value=x,y.weights.value=v,y.latitudinal.value=d==="latitudinal",h&&(y.poleAxis.value=h);const{_lodMax:w}=this;y.dTheta.value=A,y.mipInt.value=w-s;const P=this._sizeLods[l],q=3*P*(l>w-Ss?l-w+Ss:0),I=4*(this._cubeSize-P);mc(i,q,I,3*P,2*P),m.setRenderTarget(i),m.render(S,hh)}}function vT(o){const e=[],i=[],s=[];let l=o;const u=o-Ss+1+R_.length;for(let d=0;d<u;d++){const h=Math.pow(2,l);i.push(h);let m=1/h;d>o-Ss?m=R_[d-o+Ss-1]:d===0&&(m=0),s.push(m);const p=1/(h-2),g=-p,S=1+p,y=[g,g,S,g,S,S,g,g,S,S,g,S],M=6,A=6,b=3,x=2,v=1,O=new Float32Array(b*A*M),w=new Float32Array(x*A*M),P=new Float32Array(v*A*M);for(let I=0;I<M;I++){const z=I%3*2/3-1,_t=I>2?0:-1,D=[z,_t,0,z+2/3,_t,0,z+2/3,_t+1,0,z,_t,0,z+2/3,_t+1,0,z,_t+1,0];O.set(D,b*A*I),w.set(y,x*A*I);const U=[I,I,I,I,I,I];P.set(U,v*A*I)}const q=new bi;q.setAttribute("position",new Oi(O,b)),q.setAttribute("uv",new Oi(w,x)),q.setAttribute("faceIndex",new Oi(P,v)),e.push(q),l>Ss&&l--}return{lodPlanes:e,sizeLods:i,sigmas:s}}function L_(o,e,i){const s=new yr(o,e,i);return s.texture.mapping=Tc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function mc(o,e,i,s,l){o.viewport.set(e,i,s,l),o.scissor.set(e,i,s,l)}function ST(o,e,i){const s=new Float32Array(gr),l=new tt(0,1,0);return new xr({name:"SphericalGaussianBlur",defines:{n:gr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Ph(),fragmentShader:`

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
		`,blending:ka,depthTest:!1,depthWrite:!1})}function U_(){return new xr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ph(),fragmentShader:`

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
		`,blending:ka,depthTest:!1,depthWrite:!1})}function N_(){return new xr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ph(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ka,depthTest:!1,depthWrite:!1})}function Ph(){return`

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
	`}function yT(o){let e=new WeakMap,i=null;function s(h){if(h&&h.isTexture){const m=h.mapping,p=m===Eh||m===Th,g=m===As||m===bs;if(p||g)if(h.isRenderTargetTexture&&h.needsPMREMUpdate===!0){h.needsPMREMUpdate=!1;let S=e.get(h);return i===null&&(i=new D_(o)),S=p?i.fromEquirectangular(h,S):i.fromCubemap(h,S),e.set(h,S),S.texture}else{if(e.has(h))return e.get(h).texture;{const S=h.image;if(p&&S&&S.height>0||g&&S&&l(S)){i===null&&(i=new D_(o));const y=p?i.fromEquirectangular(h):i.fromCubemap(h);return e.set(h,y),h.addEventListener("dispose",u),y.texture}else return null}}}return h}function l(h){let m=0;const p=6;for(let g=0;g<p;g++)h[g]!==void 0&&m++;return m===p}function u(h){const m=h.target;m.removeEventListener("dispose",u);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function d(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function xT(o){const e={};function i(s){if(e[s]!==void 0)return e[s];let l;switch(s){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(s)}return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(s){s.isWebGL2?(i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance")):(i("WEBGL_depth_texture"),i("OES_texture_float"),i("OES_texture_half_float"),i("OES_texture_half_float_linear"),i("OES_standard_derivatives"),i("OES_element_index_uint"),i("OES_vertex_array_object"),i("ANGLE_instanced_arrays")),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture")},get:function(s){const l=i(s);return l===null&&console.warn("THREE.WebGLRenderer: "+s+" extension not supported."),l}}}function MT(o,e,i,s){const l={},u=new WeakMap;function d(S){const y=S.target;y.index!==null&&e.remove(y.index);for(const A in y.attributes)e.remove(y.attributes[A]);for(const A in y.morphAttributes){const b=y.morphAttributes[A];for(let x=0,v=b.length;x<v;x++)e.remove(b[x])}y.removeEventListener("dispose",d),delete l[y.id];const M=u.get(y);M&&(e.remove(M),u.delete(y)),s.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,i.memory.geometries--}function h(S,y){return l[y.id]===!0||(y.addEventListener("dispose",d),l[y.id]=!0,i.memory.geometries++),y}function m(S){const y=S.attributes;for(const A in y)e.update(y[A],o.ARRAY_BUFFER);const M=S.morphAttributes;for(const A in M){const b=M[A];for(let x=0,v=b.length;x<v;x++)e.update(b[x],o.ARRAY_BUFFER)}}function p(S){const y=[],M=S.index,A=S.attributes.position;let b=0;if(M!==null){const O=M.array;b=M.version;for(let w=0,P=O.length;w<P;w+=3){const q=O[w+0],I=O[w+1],z=O[w+2];y.push(q,I,I,z,z,q)}}else if(A!==void 0){const O=A.array;b=A.version;for(let w=0,P=O.length/3-1;w<P;w+=3){const q=w+0,I=w+1,z=w+2;y.push(q,I,I,z,z,q)}}else return;const x=new(_0(y)?A0:T0)(y,1);x.version=b;const v=u.get(S);v&&e.remove(v),u.set(S,x)}function g(S){const y=u.get(S);if(y){const M=S.index;M!==null&&y.version<M.version&&p(S)}else p(S);return u.get(S)}return{get:h,update:m,getWireframeAttribute:g}}function ET(o,e,i,s){const l=s.isWebGL2;let u;function d(M){u=M}let h,m;function p(M){h=M.type,m=M.bytesPerElement}function g(M,A){o.drawElements(u,A,h,M*m),i.update(A,u,1)}function S(M,A,b){if(b===0)return;let x,v;if(l)x=o,v="drawElementsInstanced";else if(x=e.get("ANGLE_instanced_arrays"),v="drawElementsInstancedANGLE",x===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[v](u,A,h,M*m,b),i.update(A,u,b)}function y(M,A,b){if(b===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let v=0;v<b;v++)this.render(M[v]/m,A[v]);else{x.multiDrawElementsWEBGL(u,A,0,h,M,0,b);let v=0;for(let O=0;O<b;O++)v+=A[O];i.update(v,u,1)}}this.setMode=d,this.setIndex=p,this.render=g,this.renderInstances=S,this.renderMultiDraw=y}function TT(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(u,d,h){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=h*(u/3);break;case o.LINES:i.lines+=h*(u/2);break;case o.LINE_STRIP:i.lines+=h*(u-1);break;case o.LINE_LOOP:i.lines+=h*u;break;case o.POINTS:i.points+=h*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function AT(o,e){return o[0]-e[0]}function bT(o,e){return Math.abs(e[1])-Math.abs(o[1])}function RT(o,e,i){const s={},l=new Float32Array(8),u=new WeakMap,d=new En,h=[];for(let p=0;p<8;p++)h[p]=[p,0];function m(p,g,S){const y=p.morphTargetInfluences;if(e.isWebGL2===!0){const A=g.morphAttributes.position||g.morphAttributes.normal||g.morphAttributes.color,b=A!==void 0?A.length:0;let x=u.get(g);if(x===void 0||x.count!==b){let et=function(){Mt.dispose(),u.delete(g),g.removeEventListener("dispose",et)};var M=et;x!==void 0&&x.texture.dispose();const w=g.morphAttributes.position!==void 0,P=g.morphAttributes.normal!==void 0,q=g.morphAttributes.color!==void 0,I=g.morphAttributes.position||[],z=g.morphAttributes.normal||[],_t=g.morphAttributes.color||[];let D=0;w===!0&&(D=1),P===!0&&(D=2),q===!0&&(D=3);let U=g.attributes.position.count*D,ct=1;U>e.maxTextureSize&&(ct=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const ft=new Float32Array(U*ct*4*b),Mt=new y0(ft,U,ct,b);Mt.type=Va,Mt.needsUpdate=!0;const k=D*4;for(let N=0;N<b;N++){const X=I[N],Q=z[N],ot=_t[N],lt=U*ct*4*N;for(let L=0;L<X.count;L++){const V=L*k;w===!0&&(d.fromBufferAttribute(X,L),ft[lt+V+0]=d.x,ft[lt+V+1]=d.y,ft[lt+V+2]=d.z,ft[lt+V+3]=0),P===!0&&(d.fromBufferAttribute(Q,L),ft[lt+V+4]=d.x,ft[lt+V+5]=d.y,ft[lt+V+6]=d.z,ft[lt+V+7]=0),q===!0&&(d.fromBufferAttribute(ot,L),ft[lt+V+8]=d.x,ft[lt+V+9]=d.y,ft[lt+V+10]=d.z,ft[lt+V+11]=ot.itemSize===4?d.w:1)}}x={count:b,texture:Mt,size:new Ne(U,ct)},u.set(g,x),g.addEventListener("dispose",et)}let v=0;for(let w=0;w<y.length;w++)v+=y[w];const O=g.morphTargetsRelative?1:1-v;S.getUniforms().setValue(o,"morphTargetBaseInfluence",O),S.getUniforms().setValue(o,"morphTargetInfluences",y),S.getUniforms().setValue(o,"morphTargetsTexture",x.texture,i),S.getUniforms().setValue(o,"morphTargetsTextureSize",x.size)}else{const A=y===void 0?0:y.length;let b=s[g.id];if(b===void 0||b.length!==A){b=[];for(let P=0;P<A;P++)b[P]=[P,0];s[g.id]=b}for(let P=0;P<A;P++){const q=b[P];q[0]=P,q[1]=y[P]}b.sort(bT);for(let P=0;P<8;P++)P<A&&b[P][1]?(h[P][0]=b[P][0],h[P][1]=b[P][1]):(h[P][0]=Number.MAX_SAFE_INTEGER,h[P][1]=0);h.sort(AT);const x=g.morphAttributes.position,v=g.morphAttributes.normal;let O=0;for(let P=0;P<8;P++){const q=h[P],I=q[0],z=q[1];I!==Number.MAX_SAFE_INTEGER&&z?(x&&g.getAttribute("morphTarget"+P)!==x[I]&&g.setAttribute("morphTarget"+P,x[I]),v&&g.getAttribute("morphNormal"+P)!==v[I]&&g.setAttribute("morphNormal"+P,v[I]),l[P]=z,O+=z):(x&&g.hasAttribute("morphTarget"+P)===!0&&g.deleteAttribute("morphTarget"+P),v&&g.hasAttribute("morphNormal"+P)===!0&&g.deleteAttribute("morphNormal"+P),l[P]=0)}const w=g.morphTargetsRelative?1:1-O;S.getUniforms().setValue(o,"morphTargetBaseInfluence",w),S.getUniforms().setValue(o,"morphTargetInfluences",l)}}return{update:m}}function CT(o,e,i,s){let l=new WeakMap;function u(m){const p=s.render.frame,g=m.geometry,S=e.get(m,g);if(l.get(S)!==p&&(e.update(S),l.set(S,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const y=m.skeleton;l.get(y)!==p&&(y.update(),l.set(y,p))}return S}function d(){l=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:d}}class L0 extends ni{constructor(e,i,s,l,u,d,h,m,p,g){if(g=g!==void 0?g:vr,g!==vr&&g!==Rs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");s===void 0&&g===vr&&(s=Ga),s===void 0&&g===Rs&&(s=_r),super(null,l,u,d,h,m,g,s,p),this.isDepthTexture=!0,this.image={width:e,height:i},this.magFilter=h!==void 0?h:Un,this.minFilter=m!==void 0?m:Un,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}const U0=new ni,N0=new L0(1,1);N0.compareFunction=g0;const O0=new y0,z0=new fx,P0=new C0,O_=[],z_=[],P_=new Float32Array(16),B_=new Float32Array(9),I_=new Float32Array(4);function Ls(o,e,i){const s=o[0];if(s<=0||s>0)return o;const l=e*i;let u=O_[l];if(u===void 0&&(u=new Float32Array(l),O_[l]=u),e!==0){s.toArray(u,0);for(let d=1,h=0;d!==e;++d)h+=i,o[d].toArray(u,h)}return u}function fn(o,e){if(o.length!==e.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==e[i])return!1;return!0}function hn(o,e){for(let i=0,s=e.length;i<s;i++)o[i]=e[i]}function Cc(o,e){let i=z_[e];i===void 0&&(i=new Int32Array(e),z_[e]=i);for(let s=0;s!==e;++s)i[s]=o.allocateTextureUnit();return i}function wT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function DT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(fn(i,e))return;o.uniform2fv(this.addr,e),hn(i,e)}}function LT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(fn(i,e))return;o.uniform3fv(this.addr,e),hn(i,e)}}function UT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(fn(i,e))return;o.uniform4fv(this.addr,e),hn(i,e)}}function NT(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(fn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),hn(i,e)}else{if(fn(i,s))return;I_.set(s),o.uniformMatrix2fv(this.addr,!1,I_),hn(i,s)}}function OT(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(fn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),hn(i,e)}else{if(fn(i,s))return;B_.set(s),o.uniformMatrix3fv(this.addr,!1,B_),hn(i,s)}}function zT(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(fn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),hn(i,e)}else{if(fn(i,s))return;P_.set(s),o.uniformMatrix4fv(this.addr,!1,P_),hn(i,s)}}function PT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function BT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(fn(i,e))return;o.uniform2iv(this.addr,e),hn(i,e)}}function IT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(fn(i,e))return;o.uniform3iv(this.addr,e),hn(i,e)}}function FT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(fn(i,e))return;o.uniform4iv(this.addr,e),hn(i,e)}}function HT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function GT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(fn(i,e))return;o.uniform2uiv(this.addr,e),hn(i,e)}}function VT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(fn(i,e))return;o.uniform3uiv(this.addr,e),hn(i,e)}}function kT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(fn(i,e))return;o.uniform4uiv(this.addr,e),hn(i,e)}}function XT(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);const u=this.type===o.SAMPLER_2D_SHADOW?N0:U0;i.setTexture2D(e||u,l)}function WT(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||z0,l)}function qT(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||P0,l)}function YT(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||O0,l)}function jT(o){switch(o){case 5126:return wT;case 35664:return DT;case 35665:return LT;case 35666:return UT;case 35674:return NT;case 35675:return OT;case 35676:return zT;case 5124:case 35670:return PT;case 35667:case 35671:return BT;case 35668:case 35672:return IT;case 35669:case 35673:return FT;case 5125:return HT;case 36294:return GT;case 36295:return VT;case 36296:return kT;case 35678:case 36198:case 36298:case 36306:case 35682:return XT;case 35679:case 36299:case 36307:return WT;case 35680:case 36300:case 36308:case 36293:return qT;case 36289:case 36303:case 36311:case 36292:return YT}}function ZT(o,e){o.uniform1fv(this.addr,e)}function KT(o,e){const i=Ls(e,this.size,2);o.uniform2fv(this.addr,i)}function QT(o,e){const i=Ls(e,this.size,3);o.uniform3fv(this.addr,i)}function JT(o,e){const i=Ls(e,this.size,4);o.uniform4fv(this.addr,i)}function $T(o,e){const i=Ls(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function tA(o,e){const i=Ls(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function eA(o,e){const i=Ls(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function nA(o,e){o.uniform1iv(this.addr,e)}function iA(o,e){o.uniform2iv(this.addr,e)}function aA(o,e){o.uniform3iv(this.addr,e)}function rA(o,e){o.uniform4iv(this.addr,e)}function sA(o,e){o.uniform1uiv(this.addr,e)}function oA(o,e){o.uniform2uiv(this.addr,e)}function lA(o,e){o.uniform3uiv(this.addr,e)}function cA(o,e){o.uniform4uiv(this.addr,e)}function uA(o,e,i){const s=this.cache,l=e.length,u=Cc(i,l);fn(s,u)||(o.uniform1iv(this.addr,u),hn(s,u));for(let d=0;d!==l;++d)i.setTexture2D(e[d]||U0,u[d])}function fA(o,e,i){const s=this.cache,l=e.length,u=Cc(i,l);fn(s,u)||(o.uniform1iv(this.addr,u),hn(s,u));for(let d=0;d!==l;++d)i.setTexture3D(e[d]||z0,u[d])}function hA(o,e,i){const s=this.cache,l=e.length,u=Cc(i,l);fn(s,u)||(o.uniform1iv(this.addr,u),hn(s,u));for(let d=0;d!==l;++d)i.setTextureCube(e[d]||P0,u[d])}function dA(o,e,i){const s=this.cache,l=e.length,u=Cc(i,l);fn(s,u)||(o.uniform1iv(this.addr,u),hn(s,u));for(let d=0;d!==l;++d)i.setTexture2DArray(e[d]||O0,u[d])}function pA(o){switch(o){case 5126:return ZT;case 35664:return KT;case 35665:return QT;case 35666:return JT;case 35674:return $T;case 35675:return tA;case 35676:return eA;case 5124:case 35670:return nA;case 35667:case 35671:return iA;case 35668:case 35672:return aA;case 35669:case 35673:return rA;case 5125:return sA;case 36294:return oA;case 36295:return lA;case 36296:return cA;case 35678:case 36198:case 36298:case 36306:case 35682:return uA;case 35679:case 36299:case 36307:return fA;case 35680:case 36300:case 36308:case 36293:return hA;case 36289:case 36303:case 36311:case 36292:return dA}}class mA{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=jT(i.type)}}class gA{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=pA(i.type)}}class _A{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let u=0,d=l.length;u!==d;++u){const h=l[u];h.setValue(e,i[h.id],s)}}}const gh=/(\w+)(\])?(\[|\.)?/g;function F_(o,e){o.seq.push(e),o.map[e.id]=e}function vA(o,e,i){const s=o.name,l=s.length;for(gh.lastIndex=0;;){const u=gh.exec(s),d=gh.lastIndex;let h=u[1];const m=u[2]==="]",p=u[3];if(m&&(h=h|0),p===void 0||p==="["&&d+2===l){F_(i,p===void 0?new mA(h,o,e):new gA(h,o,e));break}else{let S=i.map[h];S===void 0&&(S=new _A(h),F_(i,S)),i=S}}}class _c{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const u=e.getActiveUniform(i,l),d=e.getUniformLocation(i,u.name);vA(u,d,this)}}setValue(e,i,s,l){const u=this.map[i];u!==void 0&&u.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let u=0,d=i.length;u!==d;++u){const h=i[u],m=s[h.id];m.needsUpdate!==!1&&h.setValue(e,m.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,u=e.length;l!==u;++l){const d=e[l];d.id in i&&s.push(d)}return s}}function H_(o,e,i){const s=o.createShader(e);return o.shaderSource(s,i),o.compileShader(s),s}const SA=37297;let yA=0;function xA(o,e){const i=o.split(`
`),s=[],l=Math.max(e-6,0),u=Math.min(e+6,i.length);for(let d=l;d<u;d++){const h=d+1;s.push(`${h===e?">":" "} ${h}: ${i[d]}`)}return s.join(`
`)}function MA(o){const e=Be.getPrimaries(Be.workingColorSpace),i=Be.getPrimaries(o);let s;switch(e===i?s="":e===xc&&i===yc?s="LinearDisplayP3ToLinearSRGB":e===yc&&i===xc&&(s="LinearSRGBToLinearDisplayP3"),o){case sa:case Ac:return[s,"LinearTransferOETF"];case Mn:case Oh:return[s,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",o),[s,"LinearTransferOETF"]}}function G_(o,e,i){const s=o.getShaderParameter(e,o.COMPILE_STATUS),l=o.getShaderInfoLog(e).trim();if(s&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const d=parseInt(u[1]);return i.toUpperCase()+`

`+l+`

`+xA(o.getShaderSource(e),d)}else return l}function EA(o,e){const i=MA(e);return`vec4 ${o}( vec4 value ) { return ${i[0]}( ${i[1]}( value ) ); }`}function TA(o,e){let i;switch(e){case Ny:i="Linear";break;case Oy:i="Reinhard";break;case zy:i="OptimizedCineon";break;case Py:i="ACESFilmic";break;case Iy:i="AgX";break;case By:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}function AA(o){return[o.extensionDerivatives||o.envMapCubeUVHeight||o.bumpMap||o.normalMapTangentSpace||o.clearcoatNormalMap||o.flatShading||o.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(o.extensionFragDepth||o.logarithmicDepthBuffer)&&o.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",o.extensionDrawBuffers&&o.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(o.extensionShaderTextureLOD||o.envMap||o.transmission)&&o.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ys).join(`
`)}function bA(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(ys).join(`
`)}function RA(o){const e=[];for(const i in o){const s=o[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function CA(o,e){const i={},s=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const u=o.getActiveAttrib(e,l),d=u.name;let h=1;u.type===o.FLOAT_MAT2&&(h=2),u.type===o.FLOAT_MAT3&&(h=3),u.type===o.FLOAT_MAT4&&(h=4),i[d]={type:u.type,location:o.getAttribLocation(e,d),locationSize:h}}return i}function ys(o){return o!==""}function V_(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function k_(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const wA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Dh(o){return o.replace(wA,LA)}const DA=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function LA(o,e){let i=pe[e];if(i===void 0){const s=DA.get(e);if(s!==void 0)i=pe[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return Dh(i)}const UA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function X_(o){return o.replace(UA,NA)}function NA(o,e,i,s){let l="";for(let u=parseInt(e);u<parseInt(i);u++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function W_(o){let e="precision "+o.precision+` float;
precision `+o.precision+" int;";return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function OA(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===r0?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===oy?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===ia&&(e="SHADOWMAP_TYPE_VSM"),e}function zA(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case As:case bs:e="ENVMAP_TYPE_CUBE";break;case Tc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function PA(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case bs:e="ENVMAP_MODE_REFRACTION";break}return e}function BA(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case s0:e="ENVMAP_BLENDING_MULTIPLY";break;case Ly:e="ENVMAP_BLENDING_MIX";break;case Uy:e="ENVMAP_BLENDING_ADD";break}return e}function IA(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function FA(o,e,i,s){const l=o.getContext(),u=i.defines;let d=i.vertexShader,h=i.fragmentShader;const m=OA(i),p=zA(i),g=PA(i),S=BA(i),y=IA(i),M=i.isWebGL2?"":AA(i),A=bA(i),b=RA(u),x=l.createProgram();let v,O,w=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(ys).join(`
`),v.length>0&&(v+=`
`),O=[M,"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(ys).join(`
`),O.length>0&&(O+=`
`)):(v=[W_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors&&i.isWebGL2?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0&&i.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",i.morphTargetsCount>0&&i.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0&&i.isWebGL2?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.useLegacyLights?"#define LEGACY_LIGHTS":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.logarithmicDepthBuffer&&i.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ys).join(`
`),O=[M,W_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+S:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.useLegacyLights?"#define LEGACY_LIGHTS":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.logarithmicDepthBuffer&&i.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Xa?"#define TONE_MAPPING":"",i.toneMapping!==Xa?pe.tonemapping_pars_fragment:"",i.toneMapping!==Xa?TA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",pe.colorspace_pars_fragment,EA("linearToOutputTexel",i.outputColorSpace),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(ys).join(`
`)),d=Dh(d),d=V_(d,i),d=k_(d,i),h=Dh(h),h=V_(h,i),h=k_(h,i),d=X_(d),h=X_(h),i.isWebGL2&&i.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,v=[A,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,O=["precision mediump sampler2DArray;","#define varying in",i.glslVersion===c_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===c_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+O);const P=w+v+d,q=w+O+h,I=H_(l,l.VERTEX_SHADER,P),z=H_(l,l.FRAGMENT_SHADER,q);l.attachShader(x,I),l.attachShader(x,z),i.index0AttributeName!==void 0?l.bindAttribLocation(x,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(x,0,"position"),l.linkProgram(x);function _t(ft){if(o.debug.checkShaderErrors){const Mt=l.getProgramInfoLog(x).trim(),k=l.getShaderInfoLog(I).trim(),et=l.getShaderInfoLog(z).trim();let N=!0,X=!0;if(l.getProgramParameter(x,l.LINK_STATUS)===!1)if(N=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,x,I,z);else{const Q=G_(l,I,"vertex"),ot=G_(l,z,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(x,l.VALIDATE_STATUS)+`

Program Info Log: `+Mt+`
`+Q+`
`+ot)}else Mt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Mt):(k===""||et==="")&&(X=!1);X&&(ft.diagnostics={runnable:N,programLog:Mt,vertexShader:{log:k,prefix:v},fragmentShader:{log:et,prefix:O}})}l.deleteShader(I),l.deleteShader(z),D=new _c(l,x),U=CA(l,x)}let D;this.getUniforms=function(){return D===void 0&&_t(this),D};let U;this.getAttributes=function(){return U===void 0&&_t(this),U};let ct=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return ct===!1&&(ct=l.getProgramParameter(x,SA)),ct},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(x),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=yA++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=I,this.fragmentShader=z,this}let HA=0;class GA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,s=e.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(s),d=this._getShaderCacheForMaterial(e);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(u)===!1&&(d.add(u),u.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new VA(e),i.set(e,s)),s}}class VA{constructor(e){this.id=HA++,this.code=e,this.usedTimes=0}}function kA(o,e,i,s,l,u,d){const h=new M0,m=new GA,p=[],g=l.isWebGL2,S=l.logarithmicDepthBuffer,y=l.vertexTextures;let M=l.precision;const A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(D){return D===0?"uv":`uv${D}`}function x(D,U,ct,ft,Mt){const k=ft.fog,et=Mt.geometry,N=D.isMeshStandardMaterial?ft.environment:null,X=(D.isMeshStandardMaterial?i:e).get(D.envMap||N),Q=X&&X.mapping===Tc?X.image.height:null,ot=A[D.type];D.precision!==null&&(M=l.getMaxPrecision(D.precision),M!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",M,"instead."));const lt=et.morphAttributes.position||et.morphAttributes.normal||et.morphAttributes.color,L=lt!==void 0?lt.length:0;let V=0;et.morphAttributes.position!==void 0&&(V=1),et.morphAttributes.normal!==void 0&&(V=2),et.morphAttributes.color!==void 0&&(V=3);let F,Z,gt,xt;if(ot){const ie=Ni[ot];F=ie.vertexShader,Z=ie.fragmentShader}else F=D.vertexShader,Z=D.fragmentShader,m.update(D),gt=m.getVertexShaderID(D),xt=m.getFragmentShaderID(D);const At=o.getRenderTarget(),kt=Mt.isInstancedMesh===!0,Bt=Mt.isBatchedMesh===!0,Xt=!!D.map,he=!!D.matcap,nt=!!X,wt=!!D.aoMap,ht=!!D.lightMap,Lt=!!D.bumpMap,Et=!!D.normalMap,ne=!!D.displacementMap,Nt=!!D.emissiveMap,R=!!D.metalnessMap,T=!!D.roughnessMap,Y=D.anisotropy>0,vt=D.clearcoat>0,St=D.iridescence>0,pt=D.sheen>0,It=D.transmission>0,Tt=Y&&!!D.anisotropyMap,Ut=vt&&!!D.clearcoatMap,Wt=vt&&!!D.clearcoatNormalMap,ee=vt&&!!D.clearcoatRoughnessMap,yt=St&&!!D.iridescenceMap,Ee=St&&!!D.iridescenceThicknessMap,ce=pt&&!!D.sheenColorMap,Jt=pt&&!!D.sheenRoughnessMap,Pt=!!D.specularMap,zt=!!D.specularColorMap,Yt=!!D.specularIntensityMap,Me=It&&!!D.transmissionMap,Ie=It&&!!D.thicknessMap,ae=!!D.gradientMap,bt=!!D.alphaMap,H=D.alphaTest>0,Ct=!!D.alphaHash,Rt=!!D.extensions,Kt=!!et.attributes.uv1,jt=!!et.attributes.uv2,Re=!!et.attributes.uv3;let Te=Xa;return D.toneMapped&&(At===null||At.isXRRenderTarget===!0)&&(Te=o.toneMapping),{isWebGL2:g,shaderID:ot,shaderType:D.type,shaderName:D.name,vertexShader:F,fragmentShader:Z,defines:D.defines,customVertexShaderID:gt,customFragmentShaderID:xt,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:M,batching:Bt,instancing:kt,instancingColor:kt&&Mt.instanceColor!==null,supportsVertexTextures:y,outputColorSpace:At===null?o.outputColorSpace:At.isXRRenderTarget===!0?At.texture.colorSpace:sa,map:Xt,matcap:he,envMap:nt,envMapMode:nt&&X.mapping,envMapCubeUVHeight:Q,aoMap:wt,lightMap:ht,bumpMap:Lt,normalMap:Et,displacementMap:y&&ne,emissiveMap:Nt,normalMapObjectSpace:Et&&D.normalMapType===Qy,normalMapTangentSpace:Et&&D.normalMapType===Ky,metalnessMap:R,roughnessMap:T,anisotropy:Y,anisotropyMap:Tt,clearcoat:vt,clearcoatMap:Ut,clearcoatNormalMap:Wt,clearcoatRoughnessMap:ee,iridescence:St,iridescenceMap:yt,iridescenceThicknessMap:Ee,sheen:pt,sheenColorMap:ce,sheenRoughnessMap:Jt,specularMap:Pt,specularColorMap:zt,specularIntensityMap:Yt,transmission:It,transmissionMap:Me,thicknessMap:Ie,gradientMap:ae,opaque:D.transparent===!1&&D.blending===Es,alphaMap:bt,alphaTest:H,alphaHash:Ct,combine:D.combine,mapUv:Xt&&b(D.map.channel),aoMapUv:wt&&b(D.aoMap.channel),lightMapUv:ht&&b(D.lightMap.channel),bumpMapUv:Lt&&b(D.bumpMap.channel),normalMapUv:Et&&b(D.normalMap.channel),displacementMapUv:ne&&b(D.displacementMap.channel),emissiveMapUv:Nt&&b(D.emissiveMap.channel),metalnessMapUv:R&&b(D.metalnessMap.channel),roughnessMapUv:T&&b(D.roughnessMap.channel),anisotropyMapUv:Tt&&b(D.anisotropyMap.channel),clearcoatMapUv:Ut&&b(D.clearcoatMap.channel),clearcoatNormalMapUv:Wt&&b(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ee&&b(D.clearcoatRoughnessMap.channel),iridescenceMapUv:yt&&b(D.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&b(D.iridescenceThicknessMap.channel),sheenColorMapUv:ce&&b(D.sheenColorMap.channel),sheenRoughnessMapUv:Jt&&b(D.sheenRoughnessMap.channel),specularMapUv:Pt&&b(D.specularMap.channel),specularColorMapUv:zt&&b(D.specularColorMap.channel),specularIntensityMapUv:Yt&&b(D.specularIntensityMap.channel),transmissionMapUv:Me&&b(D.transmissionMap.channel),thicknessMapUv:Ie&&b(D.thicknessMap.channel),alphaMapUv:bt&&b(D.alphaMap.channel),vertexTangents:!!et.attributes.tangent&&(Et||Y),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!et.attributes.color&&et.attributes.color.itemSize===4,vertexUv1s:Kt,vertexUv2s:jt,vertexUv3s:Re,pointsUvs:Mt.isPoints===!0&&!!et.attributes.uv&&(Xt||bt),fog:!!k,useFog:D.fog===!0,fogExp2:k&&k.isFogExp2,flatShading:D.flatShading===!0,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:S,skinning:Mt.isSkinnedMesh===!0,morphTargets:et.morphAttributes.position!==void 0,morphNormals:et.morphAttributes.normal!==void 0,morphColors:et.morphAttributes.color!==void 0,morphTargetsCount:L,morphTextureStride:V,numDirLights:U.directional.length,numPointLights:U.point.length,numSpotLights:U.spot.length,numSpotLightMaps:U.spotLightMap.length,numRectAreaLights:U.rectArea.length,numHemiLights:U.hemi.length,numDirLightShadows:U.directionalShadowMap.length,numPointLightShadows:U.pointShadowMap.length,numSpotLightShadows:U.spotShadowMap.length,numSpotLightShadowsWithMaps:U.numSpotLightShadowsWithMaps,numLightProbes:U.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:D.dithering,shadowMapEnabled:o.shadowMap.enabled&&ct.length>0,shadowMapType:o.shadowMap.type,toneMapping:Te,useLegacyLights:o._useLegacyLights,decodeVideoTexture:Xt&&D.map.isVideoTexture===!0&&Be.getTransfer(D.map.colorSpace)===qe,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===aa,flipSided:D.side===Wn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionDerivatives:Rt&&D.extensions.derivatives===!0,extensionFragDepth:Rt&&D.extensions.fragDepth===!0,extensionDrawBuffers:Rt&&D.extensions.drawBuffers===!0,extensionShaderTextureLOD:Rt&&D.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Rt&&D.extensions.clipCullDistance&&s.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:g||s.has("EXT_frag_depth"),rendererExtensionDrawBuffers:g||s.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:g||s.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()}}function v(D){const U=[];if(D.shaderID?U.push(D.shaderID):(U.push(D.customVertexShaderID),U.push(D.customFragmentShaderID)),D.defines!==void 0)for(const ct in D.defines)U.push(ct),U.push(D.defines[ct]);return D.isRawShaderMaterial===!1&&(O(U,D),w(U,D),U.push(o.outputColorSpace)),U.push(D.customProgramCacheKey),U.join()}function O(D,U){D.push(U.precision),D.push(U.outputColorSpace),D.push(U.envMapMode),D.push(U.envMapCubeUVHeight),D.push(U.mapUv),D.push(U.alphaMapUv),D.push(U.lightMapUv),D.push(U.aoMapUv),D.push(U.bumpMapUv),D.push(U.normalMapUv),D.push(U.displacementMapUv),D.push(U.emissiveMapUv),D.push(U.metalnessMapUv),D.push(U.roughnessMapUv),D.push(U.anisotropyMapUv),D.push(U.clearcoatMapUv),D.push(U.clearcoatNormalMapUv),D.push(U.clearcoatRoughnessMapUv),D.push(U.iridescenceMapUv),D.push(U.iridescenceThicknessMapUv),D.push(U.sheenColorMapUv),D.push(U.sheenRoughnessMapUv),D.push(U.specularMapUv),D.push(U.specularColorMapUv),D.push(U.specularIntensityMapUv),D.push(U.transmissionMapUv),D.push(U.thicknessMapUv),D.push(U.combine),D.push(U.fogExp2),D.push(U.sizeAttenuation),D.push(U.morphTargetsCount),D.push(U.morphAttributeCount),D.push(U.numDirLights),D.push(U.numPointLights),D.push(U.numSpotLights),D.push(U.numSpotLightMaps),D.push(U.numHemiLights),D.push(U.numRectAreaLights),D.push(U.numDirLightShadows),D.push(U.numPointLightShadows),D.push(U.numSpotLightShadows),D.push(U.numSpotLightShadowsWithMaps),D.push(U.numLightProbes),D.push(U.shadowMapType),D.push(U.toneMapping),D.push(U.numClippingPlanes),D.push(U.numClipIntersection),D.push(U.depthPacking)}function w(D,U){h.disableAll(),U.isWebGL2&&h.enable(0),U.supportsVertexTextures&&h.enable(1),U.instancing&&h.enable(2),U.instancingColor&&h.enable(3),U.matcap&&h.enable(4),U.envMap&&h.enable(5),U.normalMapObjectSpace&&h.enable(6),U.normalMapTangentSpace&&h.enable(7),U.clearcoat&&h.enable(8),U.iridescence&&h.enable(9),U.alphaTest&&h.enable(10),U.vertexColors&&h.enable(11),U.vertexAlphas&&h.enable(12),U.vertexUv1s&&h.enable(13),U.vertexUv2s&&h.enable(14),U.vertexUv3s&&h.enable(15),U.vertexTangents&&h.enable(16),U.anisotropy&&h.enable(17),U.alphaHash&&h.enable(18),U.batching&&h.enable(19),D.push(h.mask),h.disableAll(),U.fog&&h.enable(0),U.useFog&&h.enable(1),U.flatShading&&h.enable(2),U.logarithmicDepthBuffer&&h.enable(3),U.skinning&&h.enable(4),U.morphTargets&&h.enable(5),U.morphNormals&&h.enable(6),U.morphColors&&h.enable(7),U.premultipliedAlpha&&h.enable(8),U.shadowMapEnabled&&h.enable(9),U.useLegacyLights&&h.enable(10),U.doubleSided&&h.enable(11),U.flipSided&&h.enable(12),U.useDepthPacking&&h.enable(13),U.dithering&&h.enable(14),U.transmission&&h.enable(15),U.sheen&&h.enable(16),U.opaque&&h.enable(17),U.pointsUvs&&h.enable(18),U.decodeVideoTexture&&h.enable(19),D.push(h.mask)}function P(D){const U=A[D.type];let ct;if(U){const ft=Ni[U];ct=Tx.clone(ft.uniforms)}else ct=D.uniforms;return ct}function q(D,U){let ct;for(let ft=0,Mt=p.length;ft<Mt;ft++){const k=p[ft];if(k.cacheKey===U){ct=k,++ct.usedTimes;break}}return ct===void 0&&(ct=new FA(o,U,D,u),p.push(ct)),ct}function I(D){if(--D.usedTimes===0){const U=p.indexOf(D);p[U]=p[p.length-1],p.pop(),D.destroy()}}function z(D){m.remove(D)}function _t(){m.dispose()}return{getParameters:x,getProgramCacheKey:v,getUniforms:P,acquireProgram:q,releaseProgram:I,releaseShaderCache:z,programs:p,dispose:_t}}function XA(){let o=new WeakMap;function e(u){let d=o.get(u);return d===void 0&&(d={},o.set(u,d)),d}function i(u){o.delete(u)}function s(u,d,h){o.get(u)[d]=h}function l(){o=new WeakMap}return{get:e,remove:i,update:s,dispose:l}}function WA(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function q_(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function Y_(){const o=[];let e=0;const i=[],s=[],l=[];function u(){e=0,i.length=0,s.length=0,l.length=0}function d(S,y,M,A,b,x){let v=o[e];return v===void 0?(v={id:S.id,object:S,geometry:y,material:M,groupOrder:A,renderOrder:S.renderOrder,z:b,group:x},o[e]=v):(v.id=S.id,v.object=S,v.geometry=y,v.material=M,v.groupOrder=A,v.renderOrder=S.renderOrder,v.z=b,v.group=x),e++,v}function h(S,y,M,A,b,x){const v=d(S,y,M,A,b,x);M.transmission>0?s.push(v):M.transparent===!0?l.push(v):i.push(v)}function m(S,y,M,A,b,x){const v=d(S,y,M,A,b,x);M.transmission>0?s.unshift(v):M.transparent===!0?l.unshift(v):i.unshift(v)}function p(S,y){i.length>1&&i.sort(S||WA),s.length>1&&s.sort(y||q_),l.length>1&&l.sort(y||q_)}function g(){for(let S=e,y=o.length;S<y;S++){const M=o[S];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:s,transparent:l,init:u,push:h,unshift:m,finish:g,sort:p}}function qA(){let o=new WeakMap;function e(s,l){const u=o.get(s);let d;return u===void 0?(d=new Y_,o.set(s,[d])):l>=u.length?(d=new Y_,u.push(d)):d=u[l],d}function i(){o=new WeakMap}return{get:e,dispose:i}}function YA(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new tt,color:new Ue};break;case"SpotLight":i={position:new tt,direction:new tt,color:new Ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new tt,color:new Ue,distance:0,decay:0};break;case"HemisphereLight":i={direction:new tt,skyColor:new Ue,groundColor:new Ue};break;case"RectAreaLight":i={color:new Ue,position:new tt,halfWidth:new tt,halfHeight:new tt};break}return o[e.id]=i,i}}}function jA(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"SpotLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"PointLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let ZA=0;function KA(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function QA(o,e){const i=new YA,s=jA(),l={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let g=0;g<9;g++)l.probe.push(new tt);const u=new tt,d=new mn,h=new mn;function m(g,S){let y=0,M=0,A=0;for(let ft=0;ft<9;ft++)l.probe[ft].set(0,0,0);let b=0,x=0,v=0,O=0,w=0,P=0,q=0,I=0,z=0,_t=0,D=0;g.sort(KA);const U=S===!0?Math.PI:1;for(let ft=0,Mt=g.length;ft<Mt;ft++){const k=g[ft],et=k.color,N=k.intensity,X=k.distance,Q=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)y+=et.r*N*U,M+=et.g*N*U,A+=et.b*N*U;else if(k.isLightProbe){for(let ot=0;ot<9;ot++)l.probe[ot].addScaledVector(k.sh.coefficients[ot],N);D++}else if(k.isDirectionalLight){const ot=i.get(k);if(ot.color.copy(k.color).multiplyScalar(k.intensity*U),k.castShadow){const lt=k.shadow,L=s.get(k);L.shadowBias=lt.bias,L.shadowNormalBias=lt.normalBias,L.shadowRadius=lt.radius,L.shadowMapSize=lt.mapSize,l.directionalShadow[b]=L,l.directionalShadowMap[b]=Q,l.directionalShadowMatrix[b]=k.shadow.matrix,P++}l.directional[b]=ot,b++}else if(k.isSpotLight){const ot=i.get(k);ot.position.setFromMatrixPosition(k.matrixWorld),ot.color.copy(et).multiplyScalar(N*U),ot.distance=X,ot.coneCos=Math.cos(k.angle),ot.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),ot.decay=k.decay,l.spot[v]=ot;const lt=k.shadow;if(k.map&&(l.spotLightMap[z]=k.map,z++,lt.updateMatrices(k),k.castShadow&&_t++),l.spotLightMatrix[v]=lt.matrix,k.castShadow){const L=s.get(k);L.shadowBias=lt.bias,L.shadowNormalBias=lt.normalBias,L.shadowRadius=lt.radius,L.shadowMapSize=lt.mapSize,l.spotShadow[v]=L,l.spotShadowMap[v]=Q,I++}v++}else if(k.isRectAreaLight){const ot=i.get(k);ot.color.copy(et).multiplyScalar(N),ot.halfWidth.set(k.width*.5,0,0),ot.halfHeight.set(0,k.height*.5,0),l.rectArea[O]=ot,O++}else if(k.isPointLight){const ot=i.get(k);if(ot.color.copy(k.color).multiplyScalar(k.intensity*U),ot.distance=k.distance,ot.decay=k.decay,k.castShadow){const lt=k.shadow,L=s.get(k);L.shadowBias=lt.bias,L.shadowNormalBias=lt.normalBias,L.shadowRadius=lt.radius,L.shadowMapSize=lt.mapSize,L.shadowCameraNear=lt.camera.near,L.shadowCameraFar=lt.camera.far,l.pointShadow[x]=L,l.pointShadowMap[x]=Q,l.pointShadowMatrix[x]=k.shadow.matrix,q++}l.point[x]=ot,x++}else if(k.isHemisphereLight){const ot=i.get(k);ot.skyColor.copy(k.color).multiplyScalar(N*U),ot.groundColor.copy(k.groundColor).multiplyScalar(N*U),l.hemi[w]=ot,w++}}O>0&&(e.isWebGL2?o.has("OES_texture_float_linear")===!0?(l.rectAreaLTC1=Dt.LTC_FLOAT_1,l.rectAreaLTC2=Dt.LTC_FLOAT_2):(l.rectAreaLTC1=Dt.LTC_HALF_1,l.rectAreaLTC2=Dt.LTC_HALF_2):o.has("OES_texture_float_linear")===!0?(l.rectAreaLTC1=Dt.LTC_FLOAT_1,l.rectAreaLTC2=Dt.LTC_FLOAT_2):o.has("OES_texture_half_float_linear")===!0?(l.rectAreaLTC1=Dt.LTC_HALF_1,l.rectAreaLTC2=Dt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),l.ambient[0]=y,l.ambient[1]=M,l.ambient[2]=A;const ct=l.hash;(ct.directionalLength!==b||ct.pointLength!==x||ct.spotLength!==v||ct.rectAreaLength!==O||ct.hemiLength!==w||ct.numDirectionalShadows!==P||ct.numPointShadows!==q||ct.numSpotShadows!==I||ct.numSpotMaps!==z||ct.numLightProbes!==D)&&(l.directional.length=b,l.spot.length=v,l.rectArea.length=O,l.point.length=x,l.hemi.length=w,l.directionalShadow.length=P,l.directionalShadowMap.length=P,l.pointShadow.length=q,l.pointShadowMap.length=q,l.spotShadow.length=I,l.spotShadowMap.length=I,l.directionalShadowMatrix.length=P,l.pointShadowMatrix.length=q,l.spotLightMatrix.length=I+z-_t,l.spotLightMap.length=z,l.numSpotLightShadowsWithMaps=_t,l.numLightProbes=D,ct.directionalLength=b,ct.pointLength=x,ct.spotLength=v,ct.rectAreaLength=O,ct.hemiLength=w,ct.numDirectionalShadows=P,ct.numPointShadows=q,ct.numSpotShadows=I,ct.numSpotMaps=z,ct.numLightProbes=D,l.version=ZA++)}function p(g,S){let y=0,M=0,A=0,b=0,x=0;const v=S.matrixWorldInverse;for(let O=0,w=g.length;O<w;O++){const P=g[O];if(P.isDirectionalLight){const q=l.directional[y];q.direction.setFromMatrixPosition(P.matrixWorld),u.setFromMatrixPosition(P.target.matrixWorld),q.direction.sub(u),q.direction.transformDirection(v),y++}else if(P.isSpotLight){const q=l.spot[A];q.position.setFromMatrixPosition(P.matrixWorld),q.position.applyMatrix4(v),q.direction.setFromMatrixPosition(P.matrixWorld),u.setFromMatrixPosition(P.target.matrixWorld),q.direction.sub(u),q.direction.transformDirection(v),A++}else if(P.isRectAreaLight){const q=l.rectArea[b];q.position.setFromMatrixPosition(P.matrixWorld),q.position.applyMatrix4(v),h.identity(),d.copy(P.matrixWorld),d.premultiply(v),h.extractRotation(d),q.halfWidth.set(P.width*.5,0,0),q.halfHeight.set(0,P.height*.5,0),q.halfWidth.applyMatrix4(h),q.halfHeight.applyMatrix4(h),b++}else if(P.isPointLight){const q=l.point[M];q.position.setFromMatrixPosition(P.matrixWorld),q.position.applyMatrix4(v),M++}else if(P.isHemisphereLight){const q=l.hemi[x];q.direction.setFromMatrixPosition(P.matrixWorld),q.direction.transformDirection(v),x++}}}return{setup:m,setupView:p,state:l}}function j_(o,e){const i=new QA(o,e),s=[],l=[];function u(){s.length=0,l.length=0}function d(S){s.push(S)}function h(S){l.push(S)}function m(S){i.setup(s,S)}function p(S){i.setupView(s,S)}return{init:u,state:{lightsArray:s,shadowsArray:l,lights:i},setupLights:m,setupLightsView:p,pushLight:d,pushShadow:h}}function JA(o,e){let i=new WeakMap;function s(u,d=0){const h=i.get(u);let m;return h===void 0?(m=new j_(o,e),i.set(u,[m])):d>=h.length?(m=new j_(o,e),h.push(m)):m=h[d],m}function l(){i=new WeakMap}return{get:s,dispose:l}}class $A extends Io{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=jy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class tb extends Io{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const eb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,nb=`uniform sampler2D shadow_pass;
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
}`;function ib(o,e,i){let s=new w0;const l=new Ne,u=new Ne,d=new En,h=new $A({depthPacking:Zy}),m=new tb,p={},g=i.maxTextureSize,S={[qa]:Wn,[Wn]:qa,[aa]:aa},y=new xr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ne},radius:{value:4}},vertexShader:eb,fragmentShader:nb}),M=y.clone();M.defines.HORIZONTAL_PASS=1;const A=new bi;A.setAttribute("position",new Oi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new Xn(A,y),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=r0;let v=this.type;this.render=function(I,z,_t){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||I.length===0)return;const D=o.getRenderTarget(),U=o.getActiveCubeFace(),ct=o.getActiveMipmapLevel(),ft=o.state;ft.setBlending(ka),ft.buffers.color.setClear(1,1,1,1),ft.buffers.depth.setTest(!0),ft.setScissorTest(!1);const Mt=v!==ia&&this.type===ia,k=v===ia&&this.type!==ia;for(let et=0,N=I.length;et<N;et++){const X=I[et],Q=X.shadow;if(Q===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(Q.autoUpdate===!1&&Q.needsUpdate===!1)continue;l.copy(Q.mapSize);const ot=Q.getFrameExtents();if(l.multiply(ot),u.copy(Q.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(u.x=Math.floor(g/ot.x),l.x=u.x*ot.x,Q.mapSize.x=u.x),l.y>g&&(u.y=Math.floor(g/ot.y),l.y=u.y*ot.y,Q.mapSize.y=u.y)),Q.map===null||Mt===!0||k===!0){const L=this.type!==ia?{minFilter:Un,magFilter:Un}:{};Q.map!==null&&Q.map.dispose(),Q.map=new yr(l.x,l.y,L),Q.map.texture.name=X.name+".shadowMap",Q.camera.updateProjectionMatrix()}o.setRenderTarget(Q.map),o.clear();const lt=Q.getViewportCount();for(let L=0;L<lt;L++){const V=Q.getViewport(L);d.set(u.x*V.x,u.y*V.y,u.x*V.z,u.y*V.w),ft.viewport(d),Q.updateMatrices(X,L),s=Q.getFrustum(),P(z,_t,Q.camera,X,this.type)}Q.isPointLightShadow!==!0&&this.type===ia&&O(Q,_t),Q.needsUpdate=!1}v=this.type,x.needsUpdate=!1,o.setRenderTarget(D,U,ct)};function O(I,z){const _t=e.update(b);y.defines.VSM_SAMPLES!==I.blurSamples&&(y.defines.VSM_SAMPLES=I.blurSamples,M.defines.VSM_SAMPLES=I.blurSamples,y.needsUpdate=!0,M.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new yr(l.x,l.y)),y.uniforms.shadow_pass.value=I.map.texture,y.uniforms.resolution.value=I.mapSize,y.uniforms.radius.value=I.radius,o.setRenderTarget(I.mapPass),o.clear(),o.renderBufferDirect(z,null,_t,y,b,null),M.uniforms.shadow_pass.value=I.mapPass.texture,M.uniforms.resolution.value=I.mapSize,M.uniforms.radius.value=I.radius,o.setRenderTarget(I.map),o.clear(),o.renderBufferDirect(z,null,_t,M,b,null)}function w(I,z,_t,D){let U=null;const ct=_t.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(ct!==void 0)U=ct;else if(U=_t.isPointLight===!0?m:h,o.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0){const ft=U.uuid,Mt=z.uuid;let k=p[ft];k===void 0&&(k={},p[ft]=k);let et=k[Mt];et===void 0&&(et=U.clone(),k[Mt]=et,z.addEventListener("dispose",q)),U=et}if(U.visible=z.visible,U.wireframe=z.wireframe,D===ia?U.side=z.shadowSide!==null?z.shadowSide:z.side:U.side=z.shadowSide!==null?z.shadowSide:S[z.side],U.alphaMap=z.alphaMap,U.alphaTest=z.alphaTest,U.map=z.map,U.clipShadows=z.clipShadows,U.clippingPlanes=z.clippingPlanes,U.clipIntersection=z.clipIntersection,U.displacementMap=z.displacementMap,U.displacementScale=z.displacementScale,U.displacementBias=z.displacementBias,U.wireframeLinewidth=z.wireframeLinewidth,U.linewidth=z.linewidth,_t.isPointLight===!0&&U.isMeshDistanceMaterial===!0){const ft=o.properties.get(U);ft.light=_t}return U}function P(I,z,_t,D,U){if(I.visible===!1)return;if(I.layers.test(z.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&U===ia)&&(!I.frustumCulled||s.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(_t.matrixWorldInverse,I.matrixWorld);const Mt=e.update(I),k=I.material;if(Array.isArray(k)){const et=Mt.groups;for(let N=0,X=et.length;N<X;N++){const Q=et[N],ot=k[Q.materialIndex];if(ot&&ot.visible){const lt=w(I,ot,D,U);I.onBeforeShadow(o,I,z,_t,Mt,lt,Q),o.renderBufferDirect(_t,null,Mt,lt,I,Q),I.onAfterShadow(o,I,z,_t,Mt,lt,Q)}}}else if(k.visible){const et=w(I,k,D,U);I.onBeforeShadow(o,I,z,_t,Mt,et,null),o.renderBufferDirect(_t,null,Mt,et,I,null),I.onAfterShadow(o,I,z,_t,Mt,et,null)}}const ft=I.children;for(let Mt=0,k=ft.length;Mt<k;Mt++)P(ft[Mt],z,_t,D,U)}function q(I){I.target.removeEventListener("dispose",q);for(const _t in p){const D=p[_t],U=I.target.uuid;U in D&&(D[U].dispose(),delete D[U])}}}function ab(o,e,i){const s=i.isWebGL2;function l(){let H=!1;const Ct=new En;let Rt=null;const Kt=new En(0,0,0,0);return{setMask:function(jt){Rt!==jt&&!H&&(o.colorMask(jt,jt,jt,jt),Rt=jt)},setLocked:function(jt){H=jt},setClear:function(jt,Re,Te,ke,ie){ie===!0&&(jt*=ke,Re*=ke,Te*=ke),Ct.set(jt,Re,Te,ke),Kt.equals(Ct)===!1&&(o.clearColor(jt,Re,Te,ke),Kt.copy(Ct))},reset:function(){H=!1,Rt=null,Kt.set(-1,0,0,0)}}}function u(){let H=!1,Ct=null,Rt=null,Kt=null;return{setTest:function(jt){jt?Bt(o.DEPTH_TEST):Xt(o.DEPTH_TEST)},setMask:function(jt){Ct!==jt&&!H&&(o.depthMask(jt),Ct=jt)},setFunc:function(jt){if(Rt!==jt){switch(jt){case Ty:o.depthFunc(o.NEVER);break;case Ay:o.depthFunc(o.ALWAYS);break;case by:o.depthFunc(o.LESS);break;case vc:o.depthFunc(o.LEQUAL);break;case Ry:o.depthFunc(o.EQUAL);break;case Cy:o.depthFunc(o.GEQUAL);break;case wy:o.depthFunc(o.GREATER);break;case Dy:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Rt=jt}},setLocked:function(jt){H=jt},setClear:function(jt){Kt!==jt&&(o.clearDepth(jt),Kt=jt)},reset:function(){H=!1,Ct=null,Rt=null,Kt=null}}}function d(){let H=!1,Ct=null,Rt=null,Kt=null,jt=null,Re=null,Te=null,ke=null,ie=null;return{setTest:function(re){H||(re?Bt(o.STENCIL_TEST):Xt(o.STENCIL_TEST))},setMask:function(re){Ct!==re&&!H&&(o.stencilMask(re),Ct=re)},setFunc:function(re,Ge,ln){(Rt!==re||Kt!==Ge||jt!==ln)&&(o.stencilFunc(re,Ge,ln),Rt=re,Kt=Ge,jt=ln)},setOp:function(re,Ge,ln){(Re!==re||Te!==Ge||ke!==ln)&&(o.stencilOp(re,Ge,ln),Re=re,Te=Ge,ke=ln)},setLocked:function(re){H=re},setClear:function(re){ie!==re&&(o.clearStencil(re),ie=re)},reset:function(){H=!1,Ct=null,Rt=null,Kt=null,jt=null,Re=null,Te=null,ke=null,ie=null}}}const h=new l,m=new u,p=new d,g=new WeakMap,S=new WeakMap;let y={},M={},A=new WeakMap,b=[],x=null,v=!1,O=null,w=null,P=null,q=null,I=null,z=null,_t=null,D=new Ue(0,0,0),U=0,ct=!1,ft=null,Mt=null,k=null,et=null,N=null;const X=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Q=!1,ot=0;const lt=o.getParameter(o.VERSION);lt.indexOf("WebGL")!==-1?(ot=parseFloat(/^WebGL (\d)/.exec(lt)[1]),Q=ot>=1):lt.indexOf("OpenGL ES")!==-1&&(ot=parseFloat(/^OpenGL ES (\d)/.exec(lt)[1]),Q=ot>=2);let L=null,V={};const F=o.getParameter(o.SCISSOR_BOX),Z=o.getParameter(o.VIEWPORT),gt=new En().fromArray(F),xt=new En().fromArray(Z);function At(H,Ct,Rt,Kt){const jt=new Uint8Array(4),Re=o.createTexture();o.bindTexture(H,Re),o.texParameteri(H,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(H,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Te=0;Te<Rt;Te++)s&&(H===o.TEXTURE_3D||H===o.TEXTURE_2D_ARRAY)?o.texImage3D(Ct,0,o.RGBA,1,1,Kt,0,o.RGBA,o.UNSIGNED_BYTE,jt):o.texImage2D(Ct+Te,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,jt);return Re}const kt={};kt[o.TEXTURE_2D]=At(o.TEXTURE_2D,o.TEXTURE_2D,1),kt[o.TEXTURE_CUBE_MAP]=At(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),s&&(kt[o.TEXTURE_2D_ARRAY]=At(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),kt[o.TEXTURE_3D]=At(o.TEXTURE_3D,o.TEXTURE_3D,1,1)),h.setClear(0,0,0,1),m.setClear(1),p.setClear(0),Bt(o.DEPTH_TEST),m.setFunc(vc),Nt(!1),R(Dg),Bt(o.CULL_FACE),Et(ka);function Bt(H){y[H]!==!0&&(o.enable(H),y[H]=!0)}function Xt(H){y[H]!==!1&&(o.disable(H),y[H]=!1)}function he(H,Ct){return M[H]!==Ct?(o.bindFramebuffer(H,Ct),M[H]=Ct,s&&(H===o.DRAW_FRAMEBUFFER&&(M[o.FRAMEBUFFER]=Ct),H===o.FRAMEBUFFER&&(M[o.DRAW_FRAMEBUFFER]=Ct)),!0):!1}function nt(H,Ct){let Rt=b,Kt=!1;if(H)if(Rt=A.get(Ct),Rt===void 0&&(Rt=[],A.set(Ct,Rt)),H.isWebGLMultipleRenderTargets){const jt=H.texture;if(Rt.length!==jt.length||Rt[0]!==o.COLOR_ATTACHMENT0){for(let Re=0,Te=jt.length;Re<Te;Re++)Rt[Re]=o.COLOR_ATTACHMENT0+Re;Rt.length=jt.length,Kt=!0}}else Rt[0]!==o.COLOR_ATTACHMENT0&&(Rt[0]=o.COLOR_ATTACHMENT0,Kt=!0);else Rt[0]!==o.BACK&&(Rt[0]=o.BACK,Kt=!0);Kt&&(i.isWebGL2?o.drawBuffers(Rt):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Rt))}function wt(H){return x!==H?(o.useProgram(H),x=H,!0):!1}const ht={[mr]:o.FUNC_ADD,[cy]:o.FUNC_SUBTRACT,[uy]:o.FUNC_REVERSE_SUBTRACT};if(s)ht[Ng]=o.MIN,ht[Og]=o.MAX;else{const H=e.get("EXT_blend_minmax");H!==null&&(ht[Ng]=H.MIN_EXT,ht[Og]=H.MAX_EXT)}const Lt={[fy]:o.ZERO,[hy]:o.ONE,[dy]:o.SRC_COLOR,[xh]:o.SRC_ALPHA,[Sy]:o.SRC_ALPHA_SATURATE,[_y]:o.DST_COLOR,[my]:o.DST_ALPHA,[py]:o.ONE_MINUS_SRC_COLOR,[Mh]:o.ONE_MINUS_SRC_ALPHA,[vy]:o.ONE_MINUS_DST_COLOR,[gy]:o.ONE_MINUS_DST_ALPHA,[yy]:o.CONSTANT_COLOR,[xy]:o.ONE_MINUS_CONSTANT_COLOR,[My]:o.CONSTANT_ALPHA,[Ey]:o.ONE_MINUS_CONSTANT_ALPHA};function Et(H,Ct,Rt,Kt,jt,Re,Te,ke,ie,re){if(H===ka){v===!0&&(Xt(o.BLEND),v=!1);return}if(v===!1&&(Bt(o.BLEND),v=!0),H!==ly){if(H!==O||re!==ct){if((w!==mr||I!==mr)&&(o.blendEquation(o.FUNC_ADD),w=mr,I=mr),re)switch(H){case Es:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Lo:o.blendFunc(o.ONE,o.ONE);break;case Lg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Ug:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case Es:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Lo:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case Lg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Ug:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}P=null,q=null,z=null,_t=null,D.set(0,0,0),U=0,O=H,ct=re}return}jt=jt||Ct,Re=Re||Rt,Te=Te||Kt,(Ct!==w||jt!==I)&&(o.blendEquationSeparate(ht[Ct],ht[jt]),w=Ct,I=jt),(Rt!==P||Kt!==q||Re!==z||Te!==_t)&&(o.blendFuncSeparate(Lt[Rt],Lt[Kt],Lt[Re],Lt[Te]),P=Rt,q=Kt,z=Re,_t=Te),(ke.equals(D)===!1||ie!==U)&&(o.blendColor(ke.r,ke.g,ke.b,ie),D.copy(ke),U=ie),O=H,ct=!1}function ne(H,Ct){H.side===aa?Xt(o.CULL_FACE):Bt(o.CULL_FACE);let Rt=H.side===Wn;Ct&&(Rt=!Rt),Nt(Rt),H.blending===Es&&H.transparent===!1?Et(ka):Et(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),m.setFunc(H.depthFunc),m.setTest(H.depthTest),m.setMask(H.depthWrite),h.setMask(H.colorWrite);const Kt=H.stencilWrite;p.setTest(Kt),Kt&&(p.setMask(H.stencilWriteMask),p.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),p.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Y(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?Bt(o.SAMPLE_ALPHA_TO_COVERAGE):Xt(o.SAMPLE_ALPHA_TO_COVERAGE)}function Nt(H){ft!==H&&(H?o.frontFace(o.CW):o.frontFace(o.CCW),ft=H)}function R(H){H!==ry?(Bt(o.CULL_FACE),H!==Mt&&(H===Dg?o.cullFace(o.BACK):H===sy?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Xt(o.CULL_FACE),Mt=H}function T(H){H!==k&&(Q&&o.lineWidth(H),k=H)}function Y(H,Ct,Rt){H?(Bt(o.POLYGON_OFFSET_FILL),(et!==Ct||N!==Rt)&&(o.polygonOffset(Ct,Rt),et=Ct,N=Rt)):Xt(o.POLYGON_OFFSET_FILL)}function vt(H){H?Bt(o.SCISSOR_TEST):Xt(o.SCISSOR_TEST)}function St(H){H===void 0&&(H=o.TEXTURE0+X-1),L!==H&&(o.activeTexture(H),L=H)}function pt(H,Ct,Rt){Rt===void 0&&(L===null?Rt=o.TEXTURE0+X-1:Rt=L);let Kt=V[Rt];Kt===void 0&&(Kt={type:void 0,texture:void 0},V[Rt]=Kt),(Kt.type!==H||Kt.texture!==Ct)&&(L!==Rt&&(o.activeTexture(Rt),L=Rt),o.bindTexture(H,Ct||kt[H]),Kt.type=H,Kt.texture=Ct)}function It(){const H=V[L];H!==void 0&&H.type!==void 0&&(o.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function Tt(){try{o.compressedTexImage2D.apply(o,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ut(){try{o.compressedTexImage3D.apply(o,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Wt(){try{o.texSubImage2D.apply(o,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ee(){try{o.texSubImage3D.apply(o,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function yt(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ee(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ce(){try{o.texStorage2D.apply(o,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Jt(){try{o.texStorage3D.apply(o,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Pt(){try{o.texImage2D.apply(o,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function zt(){try{o.texImage3D.apply(o,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Yt(H){gt.equals(H)===!1&&(o.scissor(H.x,H.y,H.z,H.w),gt.copy(H))}function Me(H){xt.equals(H)===!1&&(o.viewport(H.x,H.y,H.z,H.w),xt.copy(H))}function Ie(H,Ct){let Rt=S.get(Ct);Rt===void 0&&(Rt=new WeakMap,S.set(Ct,Rt));let Kt=Rt.get(H);Kt===void 0&&(Kt=o.getUniformBlockIndex(Ct,H.name),Rt.set(H,Kt))}function ae(H,Ct){const Kt=S.get(Ct).get(H);g.get(Ct)!==Kt&&(o.uniformBlockBinding(Ct,Kt,H.__bindingPointIndex),g.set(Ct,Kt))}function bt(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),s===!0&&(o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null)),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),y={},L=null,V={},M={},A=new WeakMap,b=[],x=null,v=!1,O=null,w=null,P=null,q=null,I=null,z=null,_t=null,D=new Ue(0,0,0),U=0,ct=!1,ft=null,Mt=null,k=null,et=null,N=null,gt.set(0,0,o.canvas.width,o.canvas.height),xt.set(0,0,o.canvas.width,o.canvas.height),h.reset(),m.reset(),p.reset()}return{buffers:{color:h,depth:m,stencil:p},enable:Bt,disable:Xt,bindFramebuffer:he,drawBuffers:nt,useProgram:wt,setBlending:Et,setMaterial:ne,setFlipSided:Nt,setCullFace:R,setLineWidth:T,setPolygonOffset:Y,setScissorTest:vt,activeTexture:St,bindTexture:pt,unbindTexture:It,compressedTexImage2D:Tt,compressedTexImage3D:Ut,texImage2D:Pt,texImage3D:zt,updateUBOMapping:Ie,uniformBlockBinding:ae,texStorage2D:ce,texStorage3D:Jt,texSubImage2D:Wt,texSubImage3D:ee,compressedTexSubImage2D:yt,compressedTexSubImage3D:Ee,scissor:Yt,viewport:Me,reset:bt}}function rb(o,e,i,s,l,u,d){const h=l.isWebGL2,m=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let S;const y=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(R,T){return M?new OffscreenCanvas(R,T):Ec("canvas")}function b(R,T,Y,vt){let St=1;if((R.width>vt||R.height>vt)&&(St=vt/Math.max(R.width,R.height)),St<1||T===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){const pt=T?wh:Math.floor,It=pt(St*R.width),Tt=pt(St*R.height);S===void 0&&(S=A(It,Tt));const Ut=Y?A(It,Tt):S;return Ut.width=It,Ut.height=Tt,Ut.getContext("2d").drawImage(R,0,0,It,Tt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+It+"x"+Tt+")."),Ut}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function x(R){return u_(R.width)&&u_(R.height)}function v(R){return h?!1:R.wrapS!==Ti||R.wrapT!==Ti||R.minFilter!==Un&&R.minFilter!==pi}function O(R,T){return R.generateMipmaps&&T&&R.minFilter!==Un&&R.minFilter!==pi}function w(R){o.generateMipmap(R)}function P(R,T,Y,vt,St=!1){if(h===!1)return T;if(R!==null){if(o[R]!==void 0)return o[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let pt=T;if(T===o.RED&&(Y===o.FLOAT&&(pt=o.R32F),Y===o.HALF_FLOAT&&(pt=o.R16F),Y===o.UNSIGNED_BYTE&&(pt=o.R8)),T===o.RED_INTEGER&&(Y===o.UNSIGNED_BYTE&&(pt=o.R8UI),Y===o.UNSIGNED_SHORT&&(pt=o.R16UI),Y===o.UNSIGNED_INT&&(pt=o.R32UI),Y===o.BYTE&&(pt=o.R8I),Y===o.SHORT&&(pt=o.R16I),Y===o.INT&&(pt=o.R32I)),T===o.RG&&(Y===o.FLOAT&&(pt=o.RG32F),Y===o.HALF_FLOAT&&(pt=o.RG16F),Y===o.UNSIGNED_BYTE&&(pt=o.RG8)),T===o.RGBA){const It=St?Sc:Be.getTransfer(vt);Y===o.FLOAT&&(pt=o.RGBA32F),Y===o.HALF_FLOAT&&(pt=o.RGBA16F),Y===o.UNSIGNED_BYTE&&(pt=It===qe?o.SRGB8_ALPHA8:o.RGBA8),Y===o.UNSIGNED_SHORT_4_4_4_4&&(pt=o.RGBA4),Y===o.UNSIGNED_SHORT_5_5_5_1&&(pt=o.RGB5_A1)}return(pt===o.R16F||pt===o.R32F||pt===o.RG16F||pt===o.RG32F||pt===o.RGBA16F||pt===o.RGBA32F)&&e.get("EXT_color_buffer_float"),pt}function q(R,T,Y){return O(R,Y)===!0||R.isFramebufferTexture&&R.minFilter!==Un&&R.minFilter!==pi?Math.log2(Math.max(T.width,T.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?T.mipmaps.length:1}function I(R){return R===Un||R===zg||R===Gf?o.NEAREST:o.LINEAR}function z(R){const T=R.target;T.removeEventListener("dispose",z),D(T),T.isVideoTexture&&g.delete(T)}function _t(R){const T=R.target;T.removeEventListener("dispose",_t),ct(T)}function D(R){const T=s.get(R);if(T.__webglInit===void 0)return;const Y=R.source,vt=y.get(Y);if(vt){const St=vt[T.__cacheKey];St.usedTimes--,St.usedTimes===0&&U(R),Object.keys(vt).length===0&&y.delete(Y)}s.remove(R)}function U(R){const T=s.get(R);o.deleteTexture(T.__webglTexture);const Y=R.source,vt=y.get(Y);delete vt[T.__cacheKey],d.memory.textures--}function ct(R){const T=R.texture,Y=s.get(R),vt=s.get(T);if(vt.__webglTexture!==void 0&&(o.deleteTexture(vt.__webglTexture),d.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let St=0;St<6;St++){if(Array.isArray(Y.__webglFramebuffer[St]))for(let pt=0;pt<Y.__webglFramebuffer[St].length;pt++)o.deleteFramebuffer(Y.__webglFramebuffer[St][pt]);else o.deleteFramebuffer(Y.__webglFramebuffer[St]);Y.__webglDepthbuffer&&o.deleteRenderbuffer(Y.__webglDepthbuffer[St])}else{if(Array.isArray(Y.__webglFramebuffer))for(let St=0;St<Y.__webglFramebuffer.length;St++)o.deleteFramebuffer(Y.__webglFramebuffer[St]);else o.deleteFramebuffer(Y.__webglFramebuffer);if(Y.__webglDepthbuffer&&o.deleteRenderbuffer(Y.__webglDepthbuffer),Y.__webglMultisampledFramebuffer&&o.deleteFramebuffer(Y.__webglMultisampledFramebuffer),Y.__webglColorRenderbuffer)for(let St=0;St<Y.__webglColorRenderbuffer.length;St++)Y.__webglColorRenderbuffer[St]&&o.deleteRenderbuffer(Y.__webglColorRenderbuffer[St]);Y.__webglDepthRenderbuffer&&o.deleteRenderbuffer(Y.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let St=0,pt=T.length;St<pt;St++){const It=s.get(T[St]);It.__webglTexture&&(o.deleteTexture(It.__webglTexture),d.memory.textures--),s.remove(T[St])}s.remove(T),s.remove(R)}let ft=0;function Mt(){ft=0}function k(){const R=ft;return R>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+l.maxTextures),ft+=1,R}function et(R){const T=[];return T.push(R.wrapS),T.push(R.wrapT),T.push(R.wrapR||0),T.push(R.magFilter),T.push(R.minFilter),T.push(R.anisotropy),T.push(R.internalFormat),T.push(R.format),T.push(R.type),T.push(R.generateMipmaps),T.push(R.premultiplyAlpha),T.push(R.flipY),T.push(R.unpackAlignment),T.push(R.colorSpace),T.join()}function N(R,T){const Y=s.get(R);if(R.isVideoTexture&&ne(R),R.isRenderTargetTexture===!1&&R.version>0&&Y.__version!==R.version){const vt=R.image;if(vt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(vt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{gt(Y,R,T);return}}i.bindTexture(o.TEXTURE_2D,Y.__webglTexture,o.TEXTURE0+T)}function X(R,T){const Y=s.get(R);if(R.version>0&&Y.__version!==R.version){gt(Y,R,T);return}i.bindTexture(o.TEXTURE_2D_ARRAY,Y.__webglTexture,o.TEXTURE0+T)}function Q(R,T){const Y=s.get(R);if(R.version>0&&Y.__version!==R.version){gt(Y,R,T);return}i.bindTexture(o.TEXTURE_3D,Y.__webglTexture,o.TEXTURE0+T)}function ot(R,T){const Y=s.get(R);if(R.version>0&&Y.__version!==R.version){xt(Y,R,T);return}i.bindTexture(o.TEXTURE_CUBE_MAP,Y.__webglTexture,o.TEXTURE0+T)}const lt={[Ah]:o.REPEAT,[Ti]:o.CLAMP_TO_EDGE,[bh]:o.MIRRORED_REPEAT},L={[Un]:o.NEAREST,[zg]:o.NEAREST_MIPMAP_NEAREST,[Gf]:o.NEAREST_MIPMAP_LINEAR,[pi]:o.LINEAR,[Fy]:o.LINEAR_MIPMAP_NEAREST,[No]:o.LINEAR_MIPMAP_LINEAR},V={[Jy]:o.NEVER,[ax]:o.ALWAYS,[$y]:o.LESS,[g0]:o.LEQUAL,[tx]:o.EQUAL,[ix]:o.GEQUAL,[ex]:o.GREATER,[nx]:o.NOTEQUAL};function F(R,T,Y){if(Y?(o.texParameteri(R,o.TEXTURE_WRAP_S,lt[T.wrapS]),o.texParameteri(R,o.TEXTURE_WRAP_T,lt[T.wrapT]),(R===o.TEXTURE_3D||R===o.TEXTURE_2D_ARRAY)&&o.texParameteri(R,o.TEXTURE_WRAP_R,lt[T.wrapR]),o.texParameteri(R,o.TEXTURE_MAG_FILTER,L[T.magFilter]),o.texParameteri(R,o.TEXTURE_MIN_FILTER,L[T.minFilter])):(o.texParameteri(R,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(R,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE),(R===o.TEXTURE_3D||R===o.TEXTURE_2D_ARRAY)&&o.texParameteri(R,o.TEXTURE_WRAP_R,o.CLAMP_TO_EDGE),(T.wrapS!==Ti||T.wrapT!==Ti)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),o.texParameteri(R,o.TEXTURE_MAG_FILTER,I(T.magFilter)),o.texParameteri(R,o.TEXTURE_MIN_FILTER,I(T.minFilter)),T.minFilter!==Un&&T.minFilter!==pi&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),T.compareFunction&&(o.texParameteri(R,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(R,o.TEXTURE_COMPARE_FUNC,V[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const vt=e.get("EXT_texture_filter_anisotropic");if(T.magFilter===Un||T.minFilter!==Gf&&T.minFilter!==No||T.type===Va&&e.has("OES_texture_float_linear")===!1||h===!1&&T.type===Oo&&e.has("OES_texture_half_float_linear")===!1)return;(T.anisotropy>1||s.get(T).__currentAnisotropy)&&(o.texParameterf(R,vt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),s.get(T).__currentAnisotropy=T.anisotropy)}}function Z(R,T){let Y=!1;R.__webglInit===void 0&&(R.__webglInit=!0,T.addEventListener("dispose",z));const vt=T.source;let St=y.get(vt);St===void 0&&(St={},y.set(vt,St));const pt=et(T);if(pt!==R.__cacheKey){St[pt]===void 0&&(St[pt]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,Y=!0),St[pt].usedTimes++;const It=St[R.__cacheKey];It!==void 0&&(St[R.__cacheKey].usedTimes--,It.usedTimes===0&&U(T)),R.__cacheKey=pt,R.__webglTexture=St[pt].texture}return Y}function gt(R,T,Y){let vt=o.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(vt=o.TEXTURE_2D_ARRAY),T.isData3DTexture&&(vt=o.TEXTURE_3D);const St=Z(R,T),pt=T.source;i.bindTexture(vt,R.__webglTexture,o.TEXTURE0+Y);const It=s.get(pt);if(pt.version!==It.__version||St===!0){i.activeTexture(o.TEXTURE0+Y);const Tt=Be.getPrimaries(Be.workingColorSpace),Ut=T.colorSpace===gi?null:Be.getPrimaries(T.colorSpace),Wt=T.colorSpace===gi||Tt===Ut?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt);const ee=v(T)&&x(T.image)===!1;let yt=b(T.image,ee,!1,l.maxTextureSize);yt=Nt(T,yt);const Ee=x(yt)||h,ce=u.convert(T.format,T.colorSpace);let Jt=u.convert(T.type),Pt=P(T.internalFormat,ce,Jt,T.colorSpace,T.isVideoTexture);F(vt,T,Ee);let zt;const Yt=T.mipmaps,Me=h&&T.isVideoTexture!==!0&&Pt!==p0,Ie=It.__version===void 0||St===!0,ae=q(T,yt,Ee);if(T.isDepthTexture)Pt=o.DEPTH_COMPONENT,h?T.type===Va?Pt=o.DEPTH_COMPONENT32F:T.type===Ga?Pt=o.DEPTH_COMPONENT24:T.type===_r?Pt=o.DEPTH24_STENCIL8:Pt=o.DEPTH_COMPONENT16:T.type===Va&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===vr&&Pt===o.DEPTH_COMPONENT&&T.type!==Nh&&T.type!==Ga&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=Ga,Jt=u.convert(T.type)),T.format===Rs&&Pt===o.DEPTH_COMPONENT&&(Pt=o.DEPTH_STENCIL,T.type!==_r&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=_r,Jt=u.convert(T.type))),Ie&&(Me?i.texStorage2D(o.TEXTURE_2D,1,Pt,yt.width,yt.height):i.texImage2D(o.TEXTURE_2D,0,Pt,yt.width,yt.height,0,ce,Jt,null));else if(T.isDataTexture)if(Yt.length>0&&Ee){Me&&Ie&&i.texStorage2D(o.TEXTURE_2D,ae,Pt,Yt[0].width,Yt[0].height);for(let bt=0,H=Yt.length;bt<H;bt++)zt=Yt[bt],Me?i.texSubImage2D(o.TEXTURE_2D,bt,0,0,zt.width,zt.height,ce,Jt,zt.data):i.texImage2D(o.TEXTURE_2D,bt,Pt,zt.width,zt.height,0,ce,Jt,zt.data);T.generateMipmaps=!1}else Me?(Ie&&i.texStorage2D(o.TEXTURE_2D,ae,Pt,yt.width,yt.height),i.texSubImage2D(o.TEXTURE_2D,0,0,0,yt.width,yt.height,ce,Jt,yt.data)):i.texImage2D(o.TEXTURE_2D,0,Pt,yt.width,yt.height,0,ce,Jt,yt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Me&&Ie&&i.texStorage3D(o.TEXTURE_2D_ARRAY,ae,Pt,Yt[0].width,Yt[0].height,yt.depth);for(let bt=0,H=Yt.length;bt<H;bt++)zt=Yt[bt],T.format!==Ai?ce!==null?Me?i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,bt,0,0,0,zt.width,zt.height,yt.depth,ce,zt.data,0,0):i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,bt,Pt,zt.width,zt.height,yt.depth,0,zt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Me?i.texSubImage3D(o.TEXTURE_2D_ARRAY,bt,0,0,0,zt.width,zt.height,yt.depth,ce,Jt,zt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,bt,Pt,zt.width,zt.height,yt.depth,0,ce,Jt,zt.data)}else{Me&&Ie&&i.texStorage2D(o.TEXTURE_2D,ae,Pt,Yt[0].width,Yt[0].height);for(let bt=0,H=Yt.length;bt<H;bt++)zt=Yt[bt],T.format!==Ai?ce!==null?Me?i.compressedTexSubImage2D(o.TEXTURE_2D,bt,0,0,zt.width,zt.height,ce,zt.data):i.compressedTexImage2D(o.TEXTURE_2D,bt,Pt,zt.width,zt.height,0,zt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Me?i.texSubImage2D(o.TEXTURE_2D,bt,0,0,zt.width,zt.height,ce,Jt,zt.data):i.texImage2D(o.TEXTURE_2D,bt,Pt,zt.width,zt.height,0,ce,Jt,zt.data)}else if(T.isDataArrayTexture)Me?(Ie&&i.texStorage3D(o.TEXTURE_2D_ARRAY,ae,Pt,yt.width,yt.height,yt.depth),i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,yt.width,yt.height,yt.depth,ce,Jt,yt.data)):i.texImage3D(o.TEXTURE_2D_ARRAY,0,Pt,yt.width,yt.height,yt.depth,0,ce,Jt,yt.data);else if(T.isData3DTexture)Me?(Ie&&i.texStorage3D(o.TEXTURE_3D,ae,Pt,yt.width,yt.height,yt.depth),i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,yt.width,yt.height,yt.depth,ce,Jt,yt.data)):i.texImage3D(o.TEXTURE_3D,0,Pt,yt.width,yt.height,yt.depth,0,ce,Jt,yt.data);else if(T.isFramebufferTexture){if(Ie)if(Me)i.texStorage2D(o.TEXTURE_2D,ae,Pt,yt.width,yt.height);else{let bt=yt.width,H=yt.height;for(let Ct=0;Ct<ae;Ct++)i.texImage2D(o.TEXTURE_2D,Ct,Pt,bt,H,0,ce,Jt,null),bt>>=1,H>>=1}}else if(Yt.length>0&&Ee){Me&&Ie&&i.texStorage2D(o.TEXTURE_2D,ae,Pt,Yt[0].width,Yt[0].height);for(let bt=0,H=Yt.length;bt<H;bt++)zt=Yt[bt],Me?i.texSubImage2D(o.TEXTURE_2D,bt,0,0,ce,Jt,zt):i.texImage2D(o.TEXTURE_2D,bt,Pt,ce,Jt,zt);T.generateMipmaps=!1}else Me?(Ie&&i.texStorage2D(o.TEXTURE_2D,ae,Pt,yt.width,yt.height),i.texSubImage2D(o.TEXTURE_2D,0,0,0,ce,Jt,yt)):i.texImage2D(o.TEXTURE_2D,0,Pt,ce,Jt,yt);O(T,Ee)&&w(vt),It.__version=pt.version,T.onUpdate&&T.onUpdate(T)}R.__version=T.version}function xt(R,T,Y){if(T.image.length!==6)return;const vt=Z(R,T),St=T.source;i.bindTexture(o.TEXTURE_CUBE_MAP,R.__webglTexture,o.TEXTURE0+Y);const pt=s.get(St);if(St.version!==pt.__version||vt===!0){i.activeTexture(o.TEXTURE0+Y);const It=Be.getPrimaries(Be.workingColorSpace),Tt=T.colorSpace===gi?null:Be.getPrimaries(T.colorSpace),Ut=T.colorSpace===gi||It===Tt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ut);const Wt=T.isCompressedTexture||T.image[0].isCompressedTexture,ee=T.image[0]&&T.image[0].isDataTexture,yt=[];for(let bt=0;bt<6;bt++)!Wt&&!ee?yt[bt]=b(T.image[bt],!1,!0,l.maxCubemapSize):yt[bt]=ee?T.image[bt].image:T.image[bt],yt[bt]=Nt(T,yt[bt]);const Ee=yt[0],ce=x(Ee)||h,Jt=u.convert(T.format,T.colorSpace),Pt=u.convert(T.type),zt=P(T.internalFormat,Jt,Pt,T.colorSpace),Yt=h&&T.isVideoTexture!==!0,Me=pt.__version===void 0||vt===!0;let Ie=q(T,Ee,ce);F(o.TEXTURE_CUBE_MAP,T,ce);let ae;if(Wt){Yt&&Me&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Ie,zt,Ee.width,Ee.height);for(let bt=0;bt<6;bt++){ae=yt[bt].mipmaps;for(let H=0;H<ae.length;H++){const Ct=ae[H];T.format!==Ai?Jt!==null?Yt?i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,H,0,0,Ct.width,Ct.height,Jt,Ct.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,H,zt,Ct.width,Ct.height,0,Ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Yt?i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,H,0,0,Ct.width,Ct.height,Jt,Pt,Ct.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,H,zt,Ct.width,Ct.height,0,Jt,Pt,Ct.data)}}}else{ae=T.mipmaps,Yt&&Me&&(ae.length>0&&Ie++,i.texStorage2D(o.TEXTURE_CUBE_MAP,Ie,zt,yt[0].width,yt[0].height));for(let bt=0;bt<6;bt++)if(ee){Yt?i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,0,0,yt[bt].width,yt[bt].height,Jt,Pt,yt[bt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,zt,yt[bt].width,yt[bt].height,0,Jt,Pt,yt[bt].data);for(let H=0;H<ae.length;H++){const Rt=ae[H].image[bt].image;Yt?i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,H+1,0,0,Rt.width,Rt.height,Jt,Pt,Rt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,H+1,zt,Rt.width,Rt.height,0,Jt,Pt,Rt.data)}}else{Yt?i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,0,0,Jt,Pt,yt[bt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,zt,Jt,Pt,yt[bt]);for(let H=0;H<ae.length;H++){const Ct=ae[H];Yt?i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,H+1,0,0,Jt,Pt,Ct.image[bt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,H+1,zt,Jt,Pt,Ct.image[bt])}}}O(T,ce)&&w(o.TEXTURE_CUBE_MAP),pt.__version=St.version,T.onUpdate&&T.onUpdate(T)}R.__version=T.version}function At(R,T,Y,vt,St,pt){const It=u.convert(Y.format,Y.colorSpace),Tt=u.convert(Y.type),Ut=P(Y.internalFormat,It,Tt,Y.colorSpace);if(!s.get(T).__hasExternalTextures){const ee=Math.max(1,T.width>>pt),yt=Math.max(1,T.height>>pt);St===o.TEXTURE_3D||St===o.TEXTURE_2D_ARRAY?i.texImage3D(St,pt,Ut,ee,yt,T.depth,0,It,Tt,null):i.texImage2D(St,pt,Ut,ee,yt,0,It,Tt,null)}i.bindFramebuffer(o.FRAMEBUFFER,R),Et(T)?m.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,vt,St,s.get(Y).__webglTexture,0,Lt(T)):(St===o.TEXTURE_2D||St>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&St<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,vt,St,s.get(Y).__webglTexture,pt),i.bindFramebuffer(o.FRAMEBUFFER,null)}function kt(R,T,Y){if(o.bindRenderbuffer(o.RENDERBUFFER,R),T.depthBuffer&&!T.stencilBuffer){let vt=h===!0?o.DEPTH_COMPONENT24:o.DEPTH_COMPONENT16;if(Y||Et(T)){const St=T.depthTexture;St&&St.isDepthTexture&&(St.type===Va?vt=o.DEPTH_COMPONENT32F:St.type===Ga&&(vt=o.DEPTH_COMPONENT24));const pt=Lt(T);Et(T)?m.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,pt,vt,T.width,T.height):o.renderbufferStorageMultisample(o.RENDERBUFFER,pt,vt,T.width,T.height)}else o.renderbufferStorage(o.RENDERBUFFER,vt,T.width,T.height);o.framebufferRenderbuffer(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.RENDERBUFFER,R)}else if(T.depthBuffer&&T.stencilBuffer){const vt=Lt(T);Y&&Et(T)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,vt,o.DEPTH24_STENCIL8,T.width,T.height):Et(T)?m.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,vt,o.DEPTH24_STENCIL8,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,o.DEPTH_STENCIL,T.width,T.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.RENDERBUFFER,R)}else{const vt=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let St=0;St<vt.length;St++){const pt=vt[St],It=u.convert(pt.format,pt.colorSpace),Tt=u.convert(pt.type),Ut=P(pt.internalFormat,It,Tt,pt.colorSpace),Wt=Lt(T);Y&&Et(T)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Wt,Ut,T.width,T.height):Et(T)?m.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Wt,Ut,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,Ut,T.width,T.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Bt(R,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,R),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!s.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),N(T.depthTexture,0);const vt=s.get(T.depthTexture).__webglTexture,St=Lt(T);if(T.depthTexture.format===vr)Et(T)?m.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,vt,0,St):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,vt,0);else if(T.depthTexture.format===Rs)Et(T)?m.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,vt,0,St):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,vt,0);else throw new Error("Unknown depthTexture format")}function Xt(R){const T=s.get(R),Y=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!T.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");Bt(T.__webglFramebuffer,R)}else if(Y){T.__webglDepthbuffer=[];for(let vt=0;vt<6;vt++)i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[vt]),T.__webglDepthbuffer[vt]=o.createRenderbuffer(),kt(T.__webglDepthbuffer[vt],R,!1)}else i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=o.createRenderbuffer(),kt(T.__webglDepthbuffer,R,!1);i.bindFramebuffer(o.FRAMEBUFFER,null)}function he(R,T,Y){const vt=s.get(R);T!==void 0&&At(vt.__webglFramebuffer,R,R.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),Y!==void 0&&Xt(R)}function nt(R){const T=R.texture,Y=s.get(R),vt=s.get(T);R.addEventListener("dispose",_t),R.isWebGLMultipleRenderTargets!==!0&&(vt.__webglTexture===void 0&&(vt.__webglTexture=o.createTexture()),vt.__version=T.version,d.memory.textures++);const St=R.isWebGLCubeRenderTarget===!0,pt=R.isWebGLMultipleRenderTargets===!0,It=x(R)||h;if(St){Y.__webglFramebuffer=[];for(let Tt=0;Tt<6;Tt++)if(h&&T.mipmaps&&T.mipmaps.length>0){Y.__webglFramebuffer[Tt]=[];for(let Ut=0;Ut<T.mipmaps.length;Ut++)Y.__webglFramebuffer[Tt][Ut]=o.createFramebuffer()}else Y.__webglFramebuffer[Tt]=o.createFramebuffer()}else{if(h&&T.mipmaps&&T.mipmaps.length>0){Y.__webglFramebuffer=[];for(let Tt=0;Tt<T.mipmaps.length;Tt++)Y.__webglFramebuffer[Tt]=o.createFramebuffer()}else Y.__webglFramebuffer=o.createFramebuffer();if(pt)if(l.drawBuffers){const Tt=R.texture;for(let Ut=0,Wt=Tt.length;Ut<Wt;Ut++){const ee=s.get(Tt[Ut]);ee.__webglTexture===void 0&&(ee.__webglTexture=o.createTexture(),d.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(h&&R.samples>0&&Et(R)===!1){const Tt=pt?T:[T];Y.__webglMultisampledFramebuffer=o.createFramebuffer(),Y.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let Ut=0;Ut<Tt.length;Ut++){const Wt=Tt[Ut];Y.__webglColorRenderbuffer[Ut]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,Y.__webglColorRenderbuffer[Ut]);const ee=u.convert(Wt.format,Wt.colorSpace),yt=u.convert(Wt.type),Ee=P(Wt.internalFormat,ee,yt,Wt.colorSpace,R.isXRRenderTarget===!0),ce=Lt(R);o.renderbufferStorageMultisample(o.RENDERBUFFER,ce,Ee,R.width,R.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ut,o.RENDERBUFFER,Y.__webglColorRenderbuffer[Ut])}o.bindRenderbuffer(o.RENDERBUFFER,null),R.depthBuffer&&(Y.__webglDepthRenderbuffer=o.createRenderbuffer(),kt(Y.__webglDepthRenderbuffer,R,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(St){i.bindTexture(o.TEXTURE_CUBE_MAP,vt.__webglTexture),F(o.TEXTURE_CUBE_MAP,T,It);for(let Tt=0;Tt<6;Tt++)if(h&&T.mipmaps&&T.mipmaps.length>0)for(let Ut=0;Ut<T.mipmaps.length;Ut++)At(Y.__webglFramebuffer[Tt][Ut],R,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,Ut);else At(Y.__webglFramebuffer[Tt],R,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0);O(T,It)&&w(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(pt){const Tt=R.texture;for(let Ut=0,Wt=Tt.length;Ut<Wt;Ut++){const ee=Tt[Ut],yt=s.get(ee);i.bindTexture(o.TEXTURE_2D,yt.__webglTexture),F(o.TEXTURE_2D,ee,It),At(Y.__webglFramebuffer,R,ee,o.COLOR_ATTACHMENT0+Ut,o.TEXTURE_2D,0),O(ee,It)&&w(o.TEXTURE_2D)}i.unbindTexture()}else{let Tt=o.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(h?Tt=R.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),i.bindTexture(Tt,vt.__webglTexture),F(Tt,T,It),h&&T.mipmaps&&T.mipmaps.length>0)for(let Ut=0;Ut<T.mipmaps.length;Ut++)At(Y.__webglFramebuffer[Ut],R,T,o.COLOR_ATTACHMENT0,Tt,Ut);else At(Y.__webglFramebuffer,R,T,o.COLOR_ATTACHMENT0,Tt,0);O(T,It)&&w(Tt),i.unbindTexture()}R.depthBuffer&&Xt(R)}function wt(R){const T=x(R)||h,Y=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let vt=0,St=Y.length;vt<St;vt++){const pt=Y[vt];if(O(pt,T)){const It=R.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:o.TEXTURE_2D,Tt=s.get(pt).__webglTexture;i.bindTexture(It,Tt),w(It),i.unbindTexture()}}}function ht(R){if(h&&R.samples>0&&Et(R)===!1){const T=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],Y=R.width,vt=R.height;let St=o.COLOR_BUFFER_BIT;const pt=[],It=R.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Tt=s.get(R),Ut=R.isWebGLMultipleRenderTargets===!0;if(Ut)for(let Wt=0;Wt<T.length;Wt++)i.bindFramebuffer(o.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Wt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Tt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Wt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer);for(let Wt=0;Wt<T.length;Wt++){pt.push(o.COLOR_ATTACHMENT0+Wt),R.depthBuffer&&pt.push(It);const ee=Tt.__ignoreDepthValues!==void 0?Tt.__ignoreDepthValues:!1;if(ee===!1&&(R.depthBuffer&&(St|=o.DEPTH_BUFFER_BIT),R.stencilBuffer&&(St|=o.STENCIL_BUFFER_BIT)),Ut&&o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Tt.__webglColorRenderbuffer[Wt]),ee===!0&&(o.invalidateFramebuffer(o.READ_FRAMEBUFFER,[It]),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[It])),Ut){const yt=s.get(T[Wt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,yt,0)}o.blitFramebuffer(0,0,Y,vt,0,0,Y,vt,St,o.NEAREST),p&&o.invalidateFramebuffer(o.READ_FRAMEBUFFER,pt)}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Ut)for(let Wt=0;Wt<T.length;Wt++){i.bindFramebuffer(o.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Wt,o.RENDERBUFFER,Tt.__webglColorRenderbuffer[Wt]);const ee=s.get(T[Wt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Tt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Wt,o.TEXTURE_2D,ee,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer)}}function Lt(R){return Math.min(l.maxSamples,R.samples)}function Et(R){const T=s.get(R);return h&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function ne(R){const T=d.render.frame;g.get(R)!==T&&(g.set(R,T),R.update())}function Nt(R,T){const Y=R.colorSpace,vt=R.format,St=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===Rh||Y!==sa&&Y!==gi&&(Be.getTransfer(Y)===qe?h===!1?e.has("EXT_sRGB")===!0&&vt===Ai?(R.format=Rh,R.minFilter=pi,R.generateMipmaps=!1):T=v0.sRGBToLinear(T):(vt!==Ai||St!==Wa)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),T}this.allocateTextureUnit=k,this.resetTextureUnits=Mt,this.setTexture2D=N,this.setTexture2DArray=X,this.setTexture3D=Q,this.setTextureCube=ot,this.rebindTextures=he,this.setupRenderTarget=nt,this.updateRenderTargetMipmap=wt,this.updateMultisampleRenderTarget=ht,this.setupDepthRenderbuffer=Xt,this.setupFrameBufferTexture=At,this.useMultisampledRTT=Et}function sb(o,e,i){const s=i.isWebGL2;function l(u,d=gi){let h;const m=Be.getTransfer(d);if(u===Wa)return o.UNSIGNED_BYTE;if(u===c0)return o.UNSIGNED_SHORT_4_4_4_4;if(u===u0)return o.UNSIGNED_SHORT_5_5_5_1;if(u===Hy)return o.BYTE;if(u===Gy)return o.SHORT;if(u===Nh)return o.UNSIGNED_SHORT;if(u===l0)return o.INT;if(u===Ga)return o.UNSIGNED_INT;if(u===Va)return o.FLOAT;if(u===Oo)return s?o.HALF_FLOAT:(h=e.get("OES_texture_half_float"),h!==null?h.HALF_FLOAT_OES:null);if(u===Vy)return o.ALPHA;if(u===Ai)return o.RGBA;if(u===ky)return o.LUMINANCE;if(u===Xy)return o.LUMINANCE_ALPHA;if(u===vr)return o.DEPTH_COMPONENT;if(u===Rs)return o.DEPTH_STENCIL;if(u===Rh)return h=e.get("EXT_sRGB"),h!==null?h.SRGB_ALPHA_EXT:null;if(u===Wy)return o.RED;if(u===f0)return o.RED_INTEGER;if(u===qy)return o.RG;if(u===h0)return o.RG_INTEGER;if(u===d0)return o.RGBA_INTEGER;if(u===Vf||u===kf||u===Xf||u===Wf)if(m===qe)if(h=e.get("WEBGL_compressed_texture_s3tc_srgb"),h!==null){if(u===Vf)return h.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(u===kf)return h.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(u===Xf)return h.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(u===Wf)return h.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(h=e.get("WEBGL_compressed_texture_s3tc"),h!==null){if(u===Vf)return h.COMPRESSED_RGB_S3TC_DXT1_EXT;if(u===kf)return h.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(u===Xf)return h.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(u===Wf)return h.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(u===Pg||u===Bg||u===Ig||u===Fg)if(h=e.get("WEBGL_compressed_texture_pvrtc"),h!==null){if(u===Pg)return h.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(u===Bg)return h.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(u===Ig)return h.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(u===Fg)return h.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(u===p0)return h=e.get("WEBGL_compressed_texture_etc1"),h!==null?h.COMPRESSED_RGB_ETC1_WEBGL:null;if(u===Hg||u===Gg)if(h=e.get("WEBGL_compressed_texture_etc"),h!==null){if(u===Hg)return m===qe?h.COMPRESSED_SRGB8_ETC2:h.COMPRESSED_RGB8_ETC2;if(u===Gg)return m===qe?h.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:h.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(u===Vg||u===kg||u===Xg||u===Wg||u===qg||u===Yg||u===jg||u===Zg||u===Kg||u===Qg||u===Jg||u===$g||u===t_||u===e_)if(h=e.get("WEBGL_compressed_texture_astc"),h!==null){if(u===Vg)return m===qe?h.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:h.COMPRESSED_RGBA_ASTC_4x4_KHR;if(u===kg)return m===qe?h.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:h.COMPRESSED_RGBA_ASTC_5x4_KHR;if(u===Xg)return m===qe?h.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:h.COMPRESSED_RGBA_ASTC_5x5_KHR;if(u===Wg)return m===qe?h.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:h.COMPRESSED_RGBA_ASTC_6x5_KHR;if(u===qg)return m===qe?h.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:h.COMPRESSED_RGBA_ASTC_6x6_KHR;if(u===Yg)return m===qe?h.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:h.COMPRESSED_RGBA_ASTC_8x5_KHR;if(u===jg)return m===qe?h.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:h.COMPRESSED_RGBA_ASTC_8x6_KHR;if(u===Zg)return m===qe?h.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:h.COMPRESSED_RGBA_ASTC_8x8_KHR;if(u===Kg)return m===qe?h.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:h.COMPRESSED_RGBA_ASTC_10x5_KHR;if(u===Qg)return m===qe?h.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:h.COMPRESSED_RGBA_ASTC_10x6_KHR;if(u===Jg)return m===qe?h.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:h.COMPRESSED_RGBA_ASTC_10x8_KHR;if(u===$g)return m===qe?h.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:h.COMPRESSED_RGBA_ASTC_10x10_KHR;if(u===t_)return m===qe?h.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:h.COMPRESSED_RGBA_ASTC_12x10_KHR;if(u===e_)return m===qe?h.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:h.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(u===qf||u===n_||u===i_)if(h=e.get("EXT_texture_compression_bptc"),h!==null){if(u===qf)return m===qe?h.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:h.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(u===n_)return h.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(u===i_)return h.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(u===Yy||u===a_||u===r_||u===s_)if(h=e.get("EXT_texture_compression_rgtc"),h!==null){if(u===qf)return h.COMPRESSED_RED_RGTC1_EXT;if(u===a_)return h.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(u===r_)return h.COMPRESSED_RED_GREEN_RGTC2_EXT;if(u===s_)return h.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return u===_r?s?o.UNSIGNED_INT_24_8:(h=e.get("WEBGL_depth_texture"),h!==null?h.UNSIGNED_INT_24_8_WEBGL:null):o[u]!==void 0?o[u]:null}return{convert:l}}class ob extends mi{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class xs extends qn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const lb={type:"move"};class _h{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new tt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new tt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new tt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new tt),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,u=null,d=null;const h=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){d=!0;for(const b of e.hand.values()){const x=i.getJointPose(b,s),v=this._getHandJoint(p,b);x!==null&&(v.matrix.fromArray(x.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=x.radius),v.visible=x!==null}const g=p.joints["index-finger-tip"],S=p.joints["thumb-tip"],y=g.position.distanceTo(S.position),M=.02,A=.005;p.inputState.pinching&&y>M+A?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&y<=M-A&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(u=i.getPose(e.gripSpace,s),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&u!==null&&(l=u),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(lb)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=d!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new xs;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}class cb extends ws{constructor(e,i){super();const s=this;let l=null,u=1,d=null,h="local-floor",m=1,p=null,g=null,S=null,y=null,M=null,A=null;const b=i.getContextAttributes();let x=null,v=null;const O=[],w=[],P=new Ne;let q=null;const I=new mi;I.layers.enable(1),I.viewport=new En;const z=new mi;z.layers.enable(2),z.viewport=new En;const _t=[I,z],D=new ob;D.layers.enable(1),D.layers.enable(2);let U=null,ct=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(F){let Z=O[F];return Z===void 0&&(Z=new _h,O[F]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(F){let Z=O[F];return Z===void 0&&(Z=new _h,O[F]=Z),Z.getGripSpace()},this.getHand=function(F){let Z=O[F];return Z===void 0&&(Z=new _h,O[F]=Z),Z.getHandSpace()};function ft(F){const Z=w.indexOf(F.inputSource);if(Z===-1)return;const gt=O[Z];gt!==void 0&&(gt.update(F.inputSource,F.frame,p||d),gt.dispatchEvent({type:F.type,data:F.inputSource}))}function Mt(){l.removeEventListener("select",ft),l.removeEventListener("selectstart",ft),l.removeEventListener("selectend",ft),l.removeEventListener("squeeze",ft),l.removeEventListener("squeezestart",ft),l.removeEventListener("squeezeend",ft),l.removeEventListener("end",Mt),l.removeEventListener("inputsourceschange",k);for(let F=0;F<O.length;F++){const Z=w[F];Z!==null&&(w[F]=null,O[F].disconnect(Z))}U=null,ct=null,e.setRenderTarget(x),M=null,y=null,S=null,l=null,v=null,V.stop(),s.isPresenting=!1,e.setPixelRatio(q),e.setSize(P.width,P.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(F){u=F,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(F){h=F,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||d},this.setReferenceSpace=function(F){p=F},this.getBaseLayer=function(){return y!==null?y:M},this.getBinding=function(){return S},this.getFrame=function(){return A},this.getSession=function(){return l},this.setSession=async function(F){if(l=F,l!==null){if(x=e.getRenderTarget(),l.addEventListener("select",ft),l.addEventListener("selectstart",ft),l.addEventListener("selectend",ft),l.addEventListener("squeeze",ft),l.addEventListener("squeezestart",ft),l.addEventListener("squeezeend",ft),l.addEventListener("end",Mt),l.addEventListener("inputsourceschange",k),b.xrCompatible!==!0&&await i.makeXRCompatible(),q=e.getPixelRatio(),e.getSize(P),l.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Z={antialias:l.renderState.layers===void 0?b.antialias:!0,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:u};M=new XRWebGLLayer(l,i,Z),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),v=new yr(M.framebufferWidth,M.framebufferHeight,{format:Ai,type:Wa,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil})}else{let Z=null,gt=null,xt=null;b.depth&&(xt=b.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Z=b.stencil?Rs:vr,gt=b.stencil?_r:Ga);const At={colorFormat:i.RGBA8,depthFormat:xt,scaleFactor:u};S=new XRWebGLBinding(l,i),y=S.createProjectionLayer(At),l.updateRenderState({layers:[y]}),e.setPixelRatio(1),e.setSize(y.textureWidth,y.textureHeight,!1),v=new yr(y.textureWidth,y.textureHeight,{format:Ai,type:Wa,depthTexture:new L0(y.textureWidth,y.textureHeight,gt,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0});const kt=e.properties.get(v);kt.__ignoreDepthValues=y.ignoreDepthValues}v.isXRRenderTarget=!0,this.setFoveation(m),p=null,d=await l.requestReferenceSpace(h),V.setContext(l),V.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode};function k(F){for(let Z=0;Z<F.removed.length;Z++){const gt=F.removed[Z],xt=w.indexOf(gt);xt>=0&&(w[xt]=null,O[xt].disconnect(gt))}for(let Z=0;Z<F.added.length;Z++){const gt=F.added[Z];let xt=w.indexOf(gt);if(xt===-1){for(let kt=0;kt<O.length;kt++)if(kt>=w.length){w.push(gt),xt=kt;break}else if(w[kt]===null){w[kt]=gt,xt=kt;break}if(xt===-1)break}const At=O[xt];At&&At.connect(gt)}}const et=new tt,N=new tt;function X(F,Z,gt){et.setFromMatrixPosition(Z.matrixWorld),N.setFromMatrixPosition(gt.matrixWorld);const xt=et.distanceTo(N),At=Z.projectionMatrix.elements,kt=gt.projectionMatrix.elements,Bt=At[14]/(At[10]-1),Xt=At[14]/(At[10]+1),he=(At[9]+1)/At[5],nt=(At[9]-1)/At[5],wt=(At[8]-1)/At[0],ht=(kt[8]+1)/kt[0],Lt=Bt*wt,Et=Bt*ht,ne=xt/(-wt+ht),Nt=ne*-wt;Z.matrixWorld.decompose(F.position,F.quaternion,F.scale),F.translateX(Nt),F.translateZ(ne),F.matrixWorld.compose(F.position,F.quaternion,F.scale),F.matrixWorldInverse.copy(F.matrixWorld).invert();const R=Bt+ne,T=Xt+ne,Y=Lt-Nt,vt=Et+(xt-Nt),St=he*Xt/T*R,pt=nt*Xt/T*R;F.projectionMatrix.makePerspective(Y,vt,St,pt,R,T),F.projectionMatrixInverse.copy(F.projectionMatrix).invert()}function Q(F,Z){Z===null?F.matrixWorld.copy(F.matrix):F.matrixWorld.multiplyMatrices(Z.matrixWorld,F.matrix),F.matrixWorldInverse.copy(F.matrixWorld).invert()}this.updateCamera=function(F){if(l===null)return;D.near=z.near=I.near=F.near,D.far=z.far=I.far=F.far,(U!==D.near||ct!==D.far)&&(l.updateRenderState({depthNear:D.near,depthFar:D.far}),U=D.near,ct=D.far);const Z=F.parent,gt=D.cameras;Q(D,Z);for(let xt=0;xt<gt.length;xt++)Q(gt[xt],Z);gt.length===2?X(D,I,z):D.projectionMatrix.copy(I.projectionMatrix),ot(F,D,Z)};function ot(F,Z,gt){gt===null?F.matrix.copy(Z.matrixWorld):(F.matrix.copy(gt.matrixWorld),F.matrix.invert(),F.matrix.multiply(Z.matrixWorld)),F.matrix.decompose(F.position,F.quaternion,F.scale),F.updateMatrixWorld(!0),F.projectionMatrix.copy(Z.projectionMatrix),F.projectionMatrixInverse.copy(Z.projectionMatrixInverse),F.isPerspectiveCamera&&(F.fov=Ch*2*Math.atan(1/F.projectionMatrix.elements[5]),F.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(y===null&&M===null))return m},this.setFoveation=function(F){m=F,y!==null&&(y.fixedFoveation=F),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=F)};let lt=null;function L(F,Z){if(g=Z.getViewerPose(p||d),A=Z,g!==null){const gt=g.views;M!==null&&(e.setRenderTargetFramebuffer(v,M.framebuffer),e.setRenderTarget(v));let xt=!1;gt.length!==D.cameras.length&&(D.cameras.length=0,xt=!0);for(let At=0;At<gt.length;At++){const kt=gt[At];let Bt=null;if(M!==null)Bt=M.getViewport(kt);else{const he=S.getViewSubImage(y,kt);Bt=he.viewport,At===0&&(e.setRenderTargetTextures(v,he.colorTexture,y.ignoreDepthValues?void 0:he.depthStencilTexture),e.setRenderTarget(v))}let Xt=_t[At];Xt===void 0&&(Xt=new mi,Xt.layers.enable(At),Xt.viewport=new En,_t[At]=Xt),Xt.matrix.fromArray(kt.transform.matrix),Xt.matrix.decompose(Xt.position,Xt.quaternion,Xt.scale),Xt.projectionMatrix.fromArray(kt.projectionMatrix),Xt.projectionMatrixInverse.copy(Xt.projectionMatrix).invert(),Xt.viewport.set(Bt.x,Bt.y,Bt.width,Bt.height),At===0&&(D.matrix.copy(Xt.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),xt===!0&&D.cameras.push(Xt)}}for(let gt=0;gt<O.length;gt++){const xt=w[gt],At=O[gt];xt!==null&&At!==void 0&&At.update(xt,Z,p||d)}lt&&lt(F,Z),Z.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:Z}),A=null}const V=new D0;V.setAnimationLoop(L),this.setAnimationLoop=function(F){lt=F},this.dispose=function(){}}}function ub(o,e){function i(x,v){x.matrixAutoUpdate===!0&&x.updateMatrix(),v.value.copy(x.matrix)}function s(x,v){v.color.getRGB(x.fogColor.value,b0(o)),v.isFog?(x.fogNear.value=v.near,x.fogFar.value=v.far):v.isFogExp2&&(x.fogDensity.value=v.density)}function l(x,v,O,w,P){v.isMeshBasicMaterial||v.isMeshLambertMaterial?u(x,v):v.isMeshToonMaterial?(u(x,v),S(x,v)):v.isMeshPhongMaterial?(u(x,v),g(x,v)):v.isMeshStandardMaterial?(u(x,v),y(x,v),v.isMeshPhysicalMaterial&&M(x,v,P)):v.isMeshMatcapMaterial?(u(x,v),A(x,v)):v.isMeshDepthMaterial?u(x,v):v.isMeshDistanceMaterial?(u(x,v),b(x,v)):v.isMeshNormalMaterial?u(x,v):v.isLineBasicMaterial?(d(x,v),v.isLineDashedMaterial&&h(x,v)):v.isPointsMaterial?m(x,v,O,w):v.isSpriteMaterial?p(x,v):v.isShadowMaterial?(x.color.value.copy(v.color),x.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function u(x,v){x.opacity.value=v.opacity,v.color&&x.diffuse.value.copy(v.color),v.emissive&&x.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(x.map.value=v.map,i(v.map,x.mapTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,i(v.alphaMap,x.alphaMapTransform)),v.bumpMap&&(x.bumpMap.value=v.bumpMap,i(v.bumpMap,x.bumpMapTransform),x.bumpScale.value=v.bumpScale,v.side===Wn&&(x.bumpScale.value*=-1)),v.normalMap&&(x.normalMap.value=v.normalMap,i(v.normalMap,x.normalMapTransform),x.normalScale.value.copy(v.normalScale),v.side===Wn&&x.normalScale.value.negate()),v.displacementMap&&(x.displacementMap.value=v.displacementMap,i(v.displacementMap,x.displacementMapTransform),x.displacementScale.value=v.displacementScale,x.displacementBias.value=v.displacementBias),v.emissiveMap&&(x.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,x.emissiveMapTransform)),v.specularMap&&(x.specularMap.value=v.specularMap,i(v.specularMap,x.specularMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest);const O=e.get(v).envMap;if(O&&(x.envMap.value=O,x.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=v.reflectivity,x.ior.value=v.ior,x.refractionRatio.value=v.refractionRatio),v.lightMap){x.lightMap.value=v.lightMap;const w=o._useLegacyLights===!0?Math.PI:1;x.lightMapIntensity.value=v.lightMapIntensity*w,i(v.lightMap,x.lightMapTransform)}v.aoMap&&(x.aoMap.value=v.aoMap,x.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,x.aoMapTransform))}function d(x,v){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,v.map&&(x.map.value=v.map,i(v.map,x.mapTransform))}function h(x,v){x.dashSize.value=v.dashSize,x.totalSize.value=v.dashSize+v.gapSize,x.scale.value=v.scale}function m(x,v,O,w){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,x.size.value=v.size*O,x.scale.value=w*.5,v.map&&(x.map.value=v.map,i(v.map,x.uvTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,i(v.alphaMap,x.alphaMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest)}function p(x,v){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,x.rotation.value=v.rotation,v.map&&(x.map.value=v.map,i(v.map,x.mapTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,i(v.alphaMap,x.alphaMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest)}function g(x,v){x.specular.value.copy(v.specular),x.shininess.value=Math.max(v.shininess,1e-4)}function S(x,v){v.gradientMap&&(x.gradientMap.value=v.gradientMap)}function y(x,v){x.metalness.value=v.metalness,v.metalnessMap&&(x.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,x.metalnessMapTransform)),x.roughness.value=v.roughness,v.roughnessMap&&(x.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,x.roughnessMapTransform)),e.get(v).envMap&&(x.envMapIntensity.value=v.envMapIntensity)}function M(x,v,O){x.ior.value=v.ior,v.sheen>0&&(x.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),x.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(x.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,x.sheenColorMapTransform)),v.sheenRoughnessMap&&(x.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,x.sheenRoughnessMapTransform))),v.clearcoat>0&&(x.clearcoat.value=v.clearcoat,x.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(x.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,x.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(x.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Wn&&x.clearcoatNormalScale.value.negate())),v.iridescence>0&&(x.iridescence.value=v.iridescence,x.iridescenceIOR.value=v.iridescenceIOR,x.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(x.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,x.iridescenceMapTransform)),v.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),v.transmission>0&&(x.transmission.value=v.transmission,x.transmissionSamplerMap.value=O.texture,x.transmissionSamplerSize.value.set(O.width,O.height),v.transmissionMap&&(x.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,x.transmissionMapTransform)),x.thickness.value=v.thickness,v.thicknessMap&&(x.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=v.attenuationDistance,x.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(x.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(x.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=v.specularIntensity,x.specularColor.value.copy(v.specularColor),v.specularColorMap&&(x.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,x.specularColorMapTransform)),v.specularIntensityMap&&(x.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,x.specularIntensityMapTransform))}function A(x,v){v.matcap&&(x.matcap.value=v.matcap)}function b(x,v){const O=e.get(v).light;x.referencePosition.value.setFromMatrixPosition(O.matrixWorld),x.nearDistance.value=O.shadow.camera.near,x.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function fb(o,e,i,s){let l={},u={},d=[];const h=i.isWebGL2?o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS):0;function m(O,w){const P=w.program;s.uniformBlockBinding(O,P)}function p(O,w){let P=l[O.id];P===void 0&&(A(O),P=g(O),l[O.id]=P,O.addEventListener("dispose",x));const q=w.program;s.updateUBOMapping(O,q);const I=e.render.frame;u[O.id]!==I&&(y(O),u[O.id]=I)}function g(O){const w=S();O.__bindingPointIndex=w;const P=o.createBuffer(),q=O.__size,I=O.usage;return o.bindBuffer(o.UNIFORM_BUFFER,P),o.bufferData(o.UNIFORM_BUFFER,q,I),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,w,P),P}function S(){for(let O=0;O<h;O++)if(d.indexOf(O)===-1)return d.push(O),O;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(O){const w=l[O.id],P=O.uniforms,q=O.__cache;o.bindBuffer(o.UNIFORM_BUFFER,w);for(let I=0,z=P.length;I<z;I++){const _t=Array.isArray(P[I])?P[I]:[P[I]];for(let D=0,U=_t.length;D<U;D++){const ct=_t[D];if(M(ct,I,D,q)===!0){const ft=ct.__offset,Mt=Array.isArray(ct.value)?ct.value:[ct.value];let k=0;for(let et=0;et<Mt.length;et++){const N=Mt[et],X=b(N);typeof N=="number"||typeof N=="boolean"?(ct.__data[0]=N,o.bufferSubData(o.UNIFORM_BUFFER,ft+k,ct.__data)):N.isMatrix3?(ct.__data[0]=N.elements[0],ct.__data[1]=N.elements[1],ct.__data[2]=N.elements[2],ct.__data[3]=0,ct.__data[4]=N.elements[3],ct.__data[5]=N.elements[4],ct.__data[6]=N.elements[5],ct.__data[7]=0,ct.__data[8]=N.elements[6],ct.__data[9]=N.elements[7],ct.__data[10]=N.elements[8],ct.__data[11]=0):(N.toArray(ct.__data,k),k+=X.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,ft,ct.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(O,w,P,q){const I=O.value,z=w+"_"+P;if(q[z]===void 0)return typeof I=="number"||typeof I=="boolean"?q[z]=I:q[z]=I.clone(),!0;{const _t=q[z];if(typeof I=="number"||typeof I=="boolean"){if(_t!==I)return q[z]=I,!0}else if(_t.equals(I)===!1)return _t.copy(I),!0}return!1}function A(O){const w=O.uniforms;let P=0;const q=16;for(let z=0,_t=w.length;z<_t;z++){const D=Array.isArray(w[z])?w[z]:[w[z]];for(let U=0,ct=D.length;U<ct;U++){const ft=D[U],Mt=Array.isArray(ft.value)?ft.value:[ft.value];for(let k=0,et=Mt.length;k<et;k++){const N=Mt[k],X=b(N),Q=P%q;Q!==0&&q-Q<X.boundary&&(P+=q-Q),ft.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),ft.__offset=P,P+=X.storage}}}const I=P%q;return I>0&&(P+=q-I),O.__size=P,O.__cache={},this}function b(O){const w={boundary:0,storage:0};return typeof O=="number"||typeof O=="boolean"?(w.boundary=4,w.storage=4):O.isVector2?(w.boundary=8,w.storage=8):O.isVector3||O.isColor?(w.boundary=16,w.storage=12):O.isVector4?(w.boundary=16,w.storage=16):O.isMatrix3?(w.boundary=48,w.storage=48):O.isMatrix4?(w.boundary=64,w.storage=64):O.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",O),w}function x(O){const w=O.target;w.removeEventListener("dispose",x);const P=d.indexOf(w.__bindingPointIndex);d.splice(P,1),o.deleteBuffer(l[w.id]),delete l[w.id],delete u[w.id]}function v(){for(const O in l)o.deleteBuffer(l[O]);d=[],l={},u={}}return{bind:m,update:p,dispose:v}}class B0{constructor(e={}){const{canvas:i=sx(),context:s=null,depth:l=!0,stencil:u=!0,alpha:d=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:S=!1}=e;this.isWebGLRenderer=!0;let y;s!==null?y=s.getContextAttributes().alpha:y=d;const M=new Uint32Array(4),A=new Int32Array(4);let b=null,x=null;const v=[],O=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Mn,this._useLegacyLights=!1,this.toneMapping=Xa,this.toneMappingExposure=1;const w=this;let P=!1,q=0,I=0,z=null,_t=-1,D=null;const U=new En,ct=new En;let ft=null;const Mt=new Ue(0);let k=0,et=i.width,N=i.height,X=1,Q=null,ot=null;const lt=new En(0,0,et,N),L=new En(0,0,et,N);let V=!1;const F=new w0;let Z=!1,gt=!1,xt=null;const At=new mn,kt=new Ne,Bt=new tt,Xt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function he(){return z===null?X:1}let nt=s;function wt(C,j){for(let at=0;at<C.length;at++){const rt=C[at],it=i.getContext(rt,j);if(it!==null)return it}return null}try{const C={alpha:!0,depth:l,stencil:u,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:S};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Uh}`),i.addEventListener("webglcontextlost",bt,!1),i.addEventListener("webglcontextrestored",H,!1),i.addEventListener("webglcontextcreationerror",Ct,!1),nt===null){const j=["webgl2","webgl","experimental-webgl"];if(w.isWebGL1Renderer===!0&&j.shift(),nt=wt(j,C),nt===null)throw wt(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&nt instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),nt.getShaderPrecisionFormat===void 0&&(nt.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let ht,Lt,Et,ne,Nt,R,T,Y,vt,St,pt,It,Tt,Ut,Wt,ee,yt,Ee,ce,Jt,Pt,zt,Yt,Me;function Ie(){ht=new xT(nt),Lt=new pT(nt,ht,e),ht.init(Lt),zt=new sb(nt,ht,Lt),Et=new ab(nt,ht,Lt),ne=new TT(nt),Nt=new XA,R=new rb(nt,ht,Et,Nt,Lt,zt,ne),T=new gT(w),Y=new yT(w),vt=new Lx(nt,Lt),Yt=new hT(nt,ht,vt,Lt),St=new MT(nt,vt,ne,Yt),pt=new CT(nt,St,vt,ne),ce=new RT(nt,Lt,R),ee=new mT(Nt),It=new kA(w,T,Y,ht,Lt,Yt,ee),Tt=new ub(w,Nt),Ut=new qA,Wt=new JA(ht,Lt),Ee=new fT(w,T,Y,Et,pt,y,m),yt=new ib(w,pt,Lt),Me=new fb(nt,ne,Lt,Et),Jt=new dT(nt,ht,ne,Lt),Pt=new ET(nt,ht,ne,Lt),ne.programs=It.programs,w.capabilities=Lt,w.extensions=ht,w.properties=Nt,w.renderLists=Ut,w.shadowMap=yt,w.state=Et,w.info=ne}Ie();const ae=new cb(w,nt);this.xr=ae,this.getContext=function(){return nt},this.getContextAttributes=function(){return nt.getContextAttributes()},this.forceContextLoss=function(){const C=ht.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=ht.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(C){C!==void 0&&(X=C,this.setSize(et,N,!1))},this.getSize=function(C){return C.set(et,N)},this.setSize=function(C,j,at=!0){if(ae.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}et=C,N=j,i.width=Math.floor(C*X),i.height=Math.floor(j*X),at===!0&&(i.style.width=C+"px",i.style.height=j+"px"),this.setViewport(0,0,C,j)},this.getDrawingBufferSize=function(C){return C.set(et*X,N*X).floor()},this.setDrawingBufferSize=function(C,j,at){et=C,N=j,X=at,i.width=Math.floor(C*at),i.height=Math.floor(j*at),this.setViewport(0,0,C,j)},this.getCurrentViewport=function(C){return C.copy(U)},this.getViewport=function(C){return C.copy(lt)},this.setViewport=function(C,j,at,rt){C.isVector4?lt.set(C.x,C.y,C.z,C.w):lt.set(C,j,at,rt),Et.viewport(U.copy(lt).multiplyScalar(X).floor())},this.getScissor=function(C){return C.copy(L)},this.setScissor=function(C,j,at,rt){C.isVector4?L.set(C.x,C.y,C.z,C.w):L.set(C,j,at,rt),Et.scissor(ct.copy(L).multiplyScalar(X).floor())},this.getScissorTest=function(){return V},this.setScissorTest=function(C){Et.setScissorTest(V=C)},this.setOpaqueSort=function(C){Q=C},this.setTransparentSort=function(C){ot=C},this.getClearColor=function(C){return C.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor.apply(Ee,arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha.apply(Ee,arguments)},this.clear=function(C=!0,j=!0,at=!0){let rt=0;if(C){let it=!1;if(z!==null){const Ot=z.texture.format;it=Ot===d0||Ot===h0||Ot===f0}if(it){const Ot=z.texture.type,Ht=Ot===Wa||Ot===Ga||Ot===Nh||Ot===_r||Ot===c0||Ot===u0,Qt=Ee.getClearColor(),$t=Ee.getClearAlpha(),qt=Qt.r,se=Qt.g,oe=Qt.b;Ht?(M[0]=qt,M[1]=se,M[2]=oe,M[3]=$t,nt.clearBufferuiv(nt.COLOR,0,M)):(A[0]=qt,A[1]=se,A[2]=oe,A[3]=$t,nt.clearBufferiv(nt.COLOR,0,A))}else rt|=nt.COLOR_BUFFER_BIT}j&&(rt|=nt.DEPTH_BUFFER_BIT),at&&(rt|=nt.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),nt.clear(rt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",bt,!1),i.removeEventListener("webglcontextrestored",H,!1),i.removeEventListener("webglcontextcreationerror",Ct,!1),Ut.dispose(),Wt.dispose(),Nt.dispose(),T.dispose(),Y.dispose(),pt.dispose(),Yt.dispose(),Me.dispose(),It.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",ie),ae.removeEventListener("sessionend",re),xt&&(xt.dispose(),xt=null),Ge.stop()};function bt(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function H(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const C=ne.autoReset,j=yt.enabled,at=yt.autoUpdate,rt=yt.needsUpdate,it=yt.type;Ie(),ne.autoReset=C,yt.enabled=j,yt.autoUpdate=at,yt.needsUpdate=rt,yt.type=it}function Ct(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Rt(C){const j=C.target;j.removeEventListener("dispose",Rt),Kt(j)}function Kt(C){jt(C),Nt.remove(C)}function jt(C){const j=Nt.get(C).programs;j!==void 0&&(j.forEach(function(at){It.releaseProgram(at)}),C.isShaderMaterial&&It.releaseShaderCache(C))}this.renderBufferDirect=function(C,j,at,rt,it,Ot){j===null&&(j=Xt);const Ht=it.isMesh&&it.matrixWorld.determinant()<0,Qt=cn(C,j,at,rt,it);Et.setMaterial(rt,Ht);let $t=at.index,qt=1;if(rt.wireframe===!0){if($t=St.getWireframeAttribute(at),$t===void 0)return;qt=2}const se=at.drawRange,oe=at.attributes.position;let we=se.start*qt,$e=(se.start+se.count)*qt;Ot!==null&&(we=Math.max(we,Ot.start*qt),$e=Math.min($e,(Ot.start+Ot.count)*qt)),$t!==null?(we=Math.max(we,0),$e=Math.min($e,$t.count)):oe!=null&&(we=Math.max(we,0),$e=Math.min($e,oe.count));const tn=$e-we;if(tn<0||tn===1/0)return;Yt.setup(it,rt,Qt,at,$t);let ai,Ve=Jt;if($t!==null&&(ai=vt.get($t),Ve=Pt,Ve.setIndex(ai)),it.isMesh)rt.wireframe===!0?(Et.setLineWidth(rt.wireframeLinewidth*he()),Ve.setMode(nt.LINES)):Ve.setMode(nt.TRIANGLES);else if(it.isLine){let de=rt.linewidth;de===void 0&&(de=1),Et.setLineWidth(de*he()),it.isLineSegments?Ve.setMode(nt.LINES):it.isLineLoop?Ve.setMode(nt.LINE_LOOP):Ve.setMode(nt.LINE_STRIP)}else it.isPoints?Ve.setMode(nt.POINTS):it.isSprite&&Ve.setMode(nt.TRIANGLES);if(it.isBatchedMesh)Ve.renderMultiDraw(it._multiDrawStarts,it._multiDrawCounts,it._multiDrawCount);else if(it.isInstancedMesh)Ve.renderInstances(we,tn,it.count);else if(at.isInstancedBufferGeometry){const de=at._maxInstanceCount!==void 0?at._maxInstanceCount:1/0,ca=Math.min(at.instanceCount,de);Ve.renderInstances(we,tn,ca)}else Ve.render(we,tn)};function Re(C,j,at){C.transparent===!0&&C.side===aa&&C.forceSinglePass===!1?(C.side=Wn,C.needsUpdate=!0,Ri(C,j,at),C.side=qa,C.needsUpdate=!0,Ri(C,j,at),C.side=aa):Ri(C,j,at)}this.compile=function(C,j,at=null){at===null&&(at=C),x=Wt.get(at),x.init(),O.push(x),at.traverseVisible(function(it){it.isLight&&it.layers.test(j.layers)&&(x.pushLight(it),it.castShadow&&x.pushShadow(it))}),C!==at&&C.traverseVisible(function(it){it.isLight&&it.layers.test(j.layers)&&(x.pushLight(it),it.castShadow&&x.pushShadow(it))}),x.setupLights(w._useLegacyLights);const rt=new Set;return C.traverse(function(it){const Ot=it.material;if(Ot)if(Array.isArray(Ot))for(let Ht=0;Ht<Ot.length;Ht++){const Qt=Ot[Ht];Re(Qt,at,it),rt.add(Qt)}else Re(Ot,at,it),rt.add(Ot)}),O.pop(),x=null,rt},this.compileAsync=function(C,j,at=null){const rt=this.compile(C,j,at);return new Promise(it=>{function Ot(){if(rt.forEach(function(Ht){Nt.get(Ht).currentProgram.isReady()&&rt.delete(Ht)}),rt.size===0){it(C);return}setTimeout(Ot,10)}ht.get("KHR_parallel_shader_compile")!==null?Ot():setTimeout(Ot,10)})};let Te=null;function ke(C){Te&&Te(C)}function ie(){Ge.stop()}function re(){Ge.start()}const Ge=new D0;Ge.setAnimationLoop(ke),typeof self<"u"&&Ge.setContext(self),this.setAnimationLoop=function(C){Te=C,ae.setAnimationLoop(C),C===null?Ge.stop():Ge.start()},ae.addEventListener("sessionstart",ie),ae.addEventListener("sessionend",re),this.render=function(C,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(j),j=ae.getCamera()),C.isScene===!0&&C.onBeforeRender(w,C,j,z),x=Wt.get(C,O.length),x.init(),O.push(x),At.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),F.setFromProjectionMatrix(At),gt=this.localClippingEnabled,Z=ee.init(this.clippingPlanes,gt),b=Ut.get(C,v.length),b.init(),v.push(b),ln(C,j,0,w.sortObjects),b.finish(),w.sortObjects===!0&&b.sort(Q,ot),this.info.render.frame++,Z===!0&&ee.beginShadows();const at=x.state.shadowsArray;if(yt.render(at,C,j),Z===!0&&ee.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ee.render(b,C),x.setupLights(w._useLegacyLights),j.isArrayCamera){const rt=j.cameras;for(let it=0,Ot=rt.length;it<Ot;it++){const Ht=rt[it];On(b,C,Ht,Ht.viewport)}}else On(b,C,j);z!==null&&(R.updateMultisampleRenderTarget(z),R.updateRenderTargetMipmap(z)),C.isScene===!0&&C.onAfterRender(w,C,j),Yt.resetDefaultState(),_t=-1,D=null,O.pop(),O.length>0?x=O[O.length-1]:x=null,v.pop(),v.length>0?b=v[v.length-1]:b=null};function ln(C,j,at,rt){if(C.visible===!1)return;if(C.layers.test(j.layers)){if(C.isGroup)at=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(j);else if(C.isLight)x.pushLight(C),C.castShadow&&x.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||F.intersectsSprite(C)){rt&&Bt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(At);const Ht=pt.update(C),Qt=C.material;Qt.visible&&b.push(C,Ht,Qt,at,Bt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||F.intersectsObject(C))){const Ht=pt.update(C),Qt=C.material;if(rt&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Bt.copy(C.boundingSphere.center)):(Ht.boundingSphere===null&&Ht.computeBoundingSphere(),Bt.copy(Ht.boundingSphere.center)),Bt.applyMatrix4(C.matrixWorld).applyMatrix4(At)),Array.isArray(Qt)){const $t=Ht.groups;for(let qt=0,se=$t.length;qt<se;qt++){const oe=$t[qt],we=Qt[oe.materialIndex];we&&we.visible&&b.push(C,Ht,we,at,Bt.z,oe)}}else Qt.visible&&b.push(C,Ht,Qt,at,Bt.z,null)}}const Ot=C.children;for(let Ht=0,Qt=Ot.length;Ht<Qt;Ht++)ln(Ot[Ht],j,at,rt)}function On(C,j,at,rt){const it=C.opaque,Ot=C.transmissive,Ht=C.transparent;x.setupLightsView(at),Z===!0&&ee.setGlobalState(w.clippingPlanes,at),Ot.length>0&&oa(it,Ot,j,at),rt&&Et.viewport(U.copy(rt)),it.length>0&&gn(it,j,at),Ot.length>0&&gn(Ot,j,at),Ht.length>0&&gn(Ht,j,at),Et.buffers.depth.setTest(!0),Et.buffers.depth.setMask(!0),Et.buffers.color.setMask(!0),Et.setPolygonOffset(!1)}function oa(C,j,at,rt){if((at.isScene===!0?at.overrideMaterial:null)!==null)return;const Ot=Lt.isWebGL2;xt===null&&(xt=new yr(1,1,{generateMipmaps:!0,type:ht.has("EXT_color_buffer_half_float")?Oo:Wa,minFilter:No,samples:Ot?4:0})),w.getDrawingBufferSize(kt),Ot?xt.setSize(kt.x,kt.y):xt.setSize(wh(kt.x),wh(kt.y));const Ht=w.getRenderTarget();w.setRenderTarget(xt),w.getClearColor(Mt),k=w.getClearAlpha(),k<1&&w.setClearColor(16777215,.5),w.clear();const Qt=w.toneMapping;w.toneMapping=Xa,gn(C,at,rt),R.updateMultisampleRenderTarget(xt),R.updateRenderTargetMipmap(xt);let $t=!1;for(let qt=0,se=j.length;qt<se;qt++){const oe=j[qt],we=oe.object,$e=oe.geometry,tn=oe.material,ai=oe.group;if(tn.side===aa&&we.layers.test(rt.layers)){const Ve=tn.side;tn.side=Wn,tn.needsUpdate=!0,ii(we,at,rt,$e,tn,ai),tn.side=Ve,tn.needsUpdate=!0,$t=!0}}$t===!0&&(R.updateMultisampleRenderTarget(xt),R.updateRenderTargetMipmap(xt)),w.setRenderTarget(Ht),w.setClearColor(Mt,k),w.toneMapping=Qt}function gn(C,j,at){const rt=j.isScene===!0?j.overrideMaterial:null;for(let it=0,Ot=C.length;it<Ot;it++){const Ht=C[it],Qt=Ht.object,$t=Ht.geometry,qt=rt===null?Ht.material:rt,se=Ht.group;Qt.layers.test(at.layers)&&ii(Qt,j,at,$t,qt,se)}}function ii(C,j,at,rt,it,Ot){C.onBeforeRender(w,j,at,rt,it,Ot),C.modelViewMatrix.multiplyMatrices(at.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),it.onBeforeRender(w,j,at,rt,C,Ot),it.transparent===!0&&it.side===aa&&it.forceSinglePass===!1?(it.side=Wn,it.needsUpdate=!0,w.renderBufferDirect(at,j,rt,it,C,Ot),it.side=qa,it.needsUpdate=!0,w.renderBufferDirect(at,j,rt,it,C,Ot),it.side=aa):w.renderBufferDirect(at,j,rt,it,C,Ot),C.onAfterRender(w,j,at,rt,it,Ot)}function Ri(C,j,at){j.isScene!==!0&&(j=Xt);const rt=Nt.get(C),it=x.state.lights,Ot=x.state.shadowsArray,Ht=it.state.version,Qt=It.getParameters(C,it.state,Ot,j,at),$t=It.getProgramCacheKey(Qt);let qt=rt.programs;rt.environment=C.isMeshStandardMaterial?j.environment:null,rt.fog=j.fog,rt.envMap=(C.isMeshStandardMaterial?Y:T).get(C.envMap||rt.environment),qt===void 0&&(C.addEventListener("dispose",Rt),qt=new Map,rt.programs=qt);let se=qt.get($t);if(se!==void 0){if(rt.currentProgram===se&&rt.lightsStateVersion===Ht)return je(C,Qt),se}else Qt.uniforms=It.getUniforms(C),C.onBuild(at,Qt,w),C.onBeforeCompile(Qt,w),se=It.acquireProgram(Qt,$t),qt.set($t,se),rt.uniforms=Qt.uniforms;const oe=rt.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(oe.clippingPlanes=ee.uniform),je(C,Qt),rt.needsLights=Us(C),rt.lightsStateVersion=Ht,rt.needsLights&&(oe.ambientLightColor.value=it.state.ambient,oe.lightProbe.value=it.state.probe,oe.directionalLights.value=it.state.directional,oe.directionalLightShadows.value=it.state.directionalShadow,oe.spotLights.value=it.state.spot,oe.spotLightShadows.value=it.state.spotShadow,oe.rectAreaLights.value=it.state.rectArea,oe.ltc_1.value=it.state.rectAreaLTC1,oe.ltc_2.value=it.state.rectAreaLTC2,oe.pointLights.value=it.state.point,oe.pointLightShadows.value=it.state.pointShadow,oe.hemisphereLights.value=it.state.hemi,oe.directionalShadowMap.value=it.state.directionalShadowMap,oe.directionalShadowMatrix.value=it.state.directionalShadowMatrix,oe.spotShadowMap.value=it.state.spotShadowMap,oe.spotLightMatrix.value=it.state.spotLightMatrix,oe.spotLightMap.value=it.state.spotLightMap,oe.pointShadowMap.value=it.state.pointShadowMap,oe.pointShadowMatrix.value=it.state.pointShadowMatrix),rt.currentProgram=se,rt.uniformsList=null,se}function Cn(C){if(C.uniformsList===null){const j=C.currentProgram.getUniforms();C.uniformsList=_c.seqWithValue(j.seq,C.uniforms)}return C.uniformsList}function je(C,j){const at=Nt.get(C);at.outputColorSpace=j.outputColorSpace,at.batching=j.batching,at.instancing=j.instancing,at.instancingColor=j.instancingColor,at.skinning=j.skinning,at.morphTargets=j.morphTargets,at.morphNormals=j.morphNormals,at.morphColors=j.morphColors,at.morphTargetsCount=j.morphTargetsCount,at.numClippingPlanes=j.numClippingPlanes,at.numIntersection=j.numClipIntersection,at.vertexAlphas=j.vertexAlphas,at.vertexTangents=j.vertexTangents,at.toneMapping=j.toneMapping}function cn(C,j,at,rt,it){j.isScene!==!0&&(j=Xt),R.resetTextureUnits();const Ot=j.fog,Ht=rt.isMeshStandardMaterial?j.environment:null,Qt=z===null?w.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:sa,$t=(rt.isMeshStandardMaterial?Y:T).get(rt.envMap||Ht),qt=rt.vertexColors===!0&&!!at.attributes.color&&at.attributes.color.itemSize===4,se=!!at.attributes.tangent&&(!!rt.normalMap||rt.anisotropy>0),oe=!!at.morphAttributes.position,we=!!at.morphAttributes.normal,$e=!!at.morphAttributes.color;let tn=Xa;rt.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(tn=w.toneMapping);const ai=at.morphAttributes.position||at.morphAttributes.normal||at.morphAttributes.color,Ve=ai!==void 0?ai.length:0,de=Nt.get(rt),ca=x.state.lights;if(Z===!0&&(gt===!0||C!==D)){const zn=C===D&&rt.id===_t;ee.setState(rt,C,zn)}let Fe=!1;rt.version===de.__version?(de.needsLights&&de.lightsStateVersion!==ca.state.version||de.outputColorSpace!==Qt||it.isBatchedMesh&&de.batching===!1||!it.isBatchedMesh&&de.batching===!0||it.isInstancedMesh&&de.instancing===!1||!it.isInstancedMesh&&de.instancing===!0||it.isSkinnedMesh&&de.skinning===!1||!it.isSkinnedMesh&&de.skinning===!0||it.isInstancedMesh&&de.instancingColor===!0&&it.instanceColor===null||it.isInstancedMesh&&de.instancingColor===!1&&it.instanceColor!==null||de.envMap!==$t||rt.fog===!0&&de.fog!==Ot||de.numClippingPlanes!==void 0&&(de.numClippingPlanes!==ee.numPlanes||de.numIntersection!==ee.numIntersection)||de.vertexAlphas!==qt||de.vertexTangents!==se||de.morphTargets!==oe||de.morphNormals!==we||de.morphColors!==$e||de.toneMapping!==tn||Lt.isWebGL2===!0&&de.morphTargetsCount!==Ve)&&(Fe=!0):(Fe=!0,de.__version=rt.version);let _n=de.currentProgram;Fe===!0&&(_n=Ri(rt,j,it));let wn=!1,ua=!1,Ns=!1;const en=_n.getUniforms(),Ci=de.uniforms;if(Et.useProgram(_n.program)&&(wn=!0,ua=!0,Ns=!0),rt.id!==_t&&(_t=rt.id,ua=!0),wn||D!==C){en.setValue(nt,"projectionMatrix",C.projectionMatrix),en.setValue(nt,"viewMatrix",C.matrixWorldInverse);const zn=en.map.cameraPosition;zn!==void 0&&zn.setValue(nt,Bt.setFromMatrixPosition(C.matrixWorld)),Lt.logarithmicDepthBuffer&&en.setValue(nt,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(rt.isMeshPhongMaterial||rt.isMeshToonMaterial||rt.isMeshLambertMaterial||rt.isMeshBasicMaterial||rt.isMeshStandardMaterial||rt.isShaderMaterial)&&en.setValue(nt,"isOrthographic",C.isOrthographicCamera===!0),D!==C&&(D=C,ua=!0,Ns=!0)}if(it.isSkinnedMesh){en.setOptional(nt,it,"bindMatrix"),en.setOptional(nt,it,"bindMatrixInverse");const zn=it.skeleton;zn&&(Lt.floatVertexTextures?(zn.boneTexture===null&&zn.computeBoneTexture(),en.setValue(nt,"boneTexture",zn.boneTexture,R)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}it.isBatchedMesh&&(en.setOptional(nt,it,"batchingTexture"),en.setValue(nt,"batchingTexture",it._matricesTexture,R));const fa=at.morphAttributes;if((fa.position!==void 0||fa.normal!==void 0||fa.color!==void 0&&Lt.isWebGL2===!0)&&ce.update(it,at,_n),(ua||de.receiveShadow!==it.receiveShadow)&&(de.receiveShadow=it.receiveShadow,en.setValue(nt,"receiveShadow",it.receiveShadow)),rt.isMeshGouraudMaterial&&rt.envMap!==null&&(Ci.envMap.value=$t,Ci.flipEnvMap.value=$t.isCubeTexture&&$t.isRenderTargetTexture===!1?-1:1),ua&&(en.setValue(nt,"toneMappingExposure",w.toneMappingExposure),de.needsLights&&la(Ci,Ns),Ot&&rt.fog===!0&&Tt.refreshFogUniforms(Ci,Ot),Tt.refreshMaterialUniforms(Ci,rt,X,N,xt),_c.upload(nt,Cn(de),Ci,R)),rt.isShaderMaterial&&rt.uniformsNeedUpdate===!0&&(_c.upload(nt,Cn(de),Ci,R),rt.uniformsNeedUpdate=!1),rt.isSpriteMaterial&&en.setValue(nt,"center",it.center),en.setValue(nt,"modelViewMatrix",it.modelViewMatrix),en.setValue(nt,"normalMatrix",it.normalMatrix),en.setValue(nt,"modelMatrix",it.matrixWorld),rt.isShaderMaterial||rt.isRawShaderMaterial){const zn=rt.uniformsGroups;for(let Tn=0,Os=zn.length;Tn<Os;Tn++)if(Lt.isWebGL2){const zs=zn[Tn];Me.update(zs,_n),Me.bind(zs,_n)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return _n}function la(C,j){C.ambientLightColor.needsUpdate=j,C.lightProbe.needsUpdate=j,C.directionalLights.needsUpdate=j,C.directionalLightShadows.needsUpdate=j,C.pointLights.needsUpdate=j,C.pointLightShadows.needsUpdate=j,C.spotLights.needsUpdate=j,C.spotLightShadows.needsUpdate=j,C.rectAreaLights.needsUpdate=j,C.hemisphereLights.needsUpdate=j}function Us(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(C,j,at){Nt.get(C.texture).__webglTexture=j,Nt.get(C.depthTexture).__webglTexture=at;const rt=Nt.get(C);rt.__hasExternalTextures=!0,rt.__hasExternalTextures&&(rt.__autoAllocateDepthBuffer=at===void 0,rt.__autoAllocateDepthBuffer||ht.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),rt.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,j){const at=Nt.get(C);at.__webglFramebuffer=j,at.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(C,j=0,at=0){z=C,q=j,I=at;let rt=!0,it=null,Ot=!1,Ht=!1;if(C){const $t=Nt.get(C);$t.__useDefaultFramebuffer!==void 0?(Et.bindFramebuffer(nt.FRAMEBUFFER,null),rt=!1):$t.__webglFramebuffer===void 0?R.setupRenderTarget(C):$t.__hasExternalTextures&&R.rebindTextures(C,Nt.get(C.texture).__webglTexture,Nt.get(C.depthTexture).__webglTexture);const qt=C.texture;(qt.isData3DTexture||qt.isDataArrayTexture||qt.isCompressedArrayTexture)&&(Ht=!0);const se=Nt.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(se[j])?it=se[j][at]:it=se[j],Ot=!0):Lt.isWebGL2&&C.samples>0&&R.useMultisampledRTT(C)===!1?it=Nt.get(C).__webglMultisampledFramebuffer:Array.isArray(se)?it=se[at]:it=se,U.copy(C.viewport),ct.copy(C.scissor),ft=C.scissorTest}else U.copy(lt).multiplyScalar(X).floor(),ct.copy(L).multiplyScalar(X).floor(),ft=V;if(Et.bindFramebuffer(nt.FRAMEBUFFER,it)&&Lt.drawBuffers&&rt&&Et.drawBuffers(C,it),Et.viewport(U),Et.scissor(ct),Et.setScissorTest(ft),Ot){const $t=Nt.get(C.texture);nt.framebufferTexture2D(nt.FRAMEBUFFER,nt.COLOR_ATTACHMENT0,nt.TEXTURE_CUBE_MAP_POSITIVE_X+j,$t.__webglTexture,at)}else if(Ht){const $t=Nt.get(C.texture),qt=j||0;nt.framebufferTextureLayer(nt.FRAMEBUFFER,nt.COLOR_ATTACHMENT0,$t.__webglTexture,at||0,qt)}_t=-1},this.readRenderTargetPixels=function(C,j,at,rt,it,Ot,Ht){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Qt=Nt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ht!==void 0&&(Qt=Qt[Ht]),Qt){Et.bindFramebuffer(nt.FRAMEBUFFER,Qt);try{const $t=C.texture,qt=$t.format,se=$t.type;if(qt!==Ai&&zt.convert(qt)!==nt.getParameter(nt.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const oe=se===Oo&&(ht.has("EXT_color_buffer_half_float")||Lt.isWebGL2&&ht.has("EXT_color_buffer_float"));if(se!==Wa&&zt.convert(se)!==nt.getParameter(nt.IMPLEMENTATION_COLOR_READ_TYPE)&&!(se===Va&&(Lt.isWebGL2||ht.has("OES_texture_float")||ht.has("WEBGL_color_buffer_float")))&&!oe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=C.width-rt&&at>=0&&at<=C.height-it&&nt.readPixels(j,at,rt,it,zt.convert(qt),zt.convert(se),Ot)}finally{const $t=z!==null?Nt.get(z).__webglFramebuffer:null;Et.bindFramebuffer(nt.FRAMEBUFFER,$t)}}},this.copyFramebufferToTexture=function(C,j,at=0){const rt=Math.pow(2,-at),it=Math.floor(j.image.width*rt),Ot=Math.floor(j.image.height*rt);R.setTexture2D(j,0),nt.copyTexSubImage2D(nt.TEXTURE_2D,at,0,0,C.x,C.y,it,Ot),Et.unbindTexture()},this.copyTextureToTexture=function(C,j,at,rt=0){const it=j.image.width,Ot=j.image.height,Ht=zt.convert(at.format),Qt=zt.convert(at.type);R.setTexture2D(at,0),nt.pixelStorei(nt.UNPACK_FLIP_Y_WEBGL,at.flipY),nt.pixelStorei(nt.UNPACK_PREMULTIPLY_ALPHA_WEBGL,at.premultiplyAlpha),nt.pixelStorei(nt.UNPACK_ALIGNMENT,at.unpackAlignment),j.isDataTexture?nt.texSubImage2D(nt.TEXTURE_2D,rt,C.x,C.y,it,Ot,Ht,Qt,j.image.data):j.isCompressedTexture?nt.compressedTexSubImage2D(nt.TEXTURE_2D,rt,C.x,C.y,j.mipmaps[0].width,j.mipmaps[0].height,Ht,j.mipmaps[0].data):nt.texSubImage2D(nt.TEXTURE_2D,rt,C.x,C.y,Ht,Qt,j.image),rt===0&&at.generateMipmaps&&nt.generateMipmap(nt.TEXTURE_2D),Et.unbindTexture()},this.copyTextureToTexture3D=function(C,j,at,rt,it=0){if(w.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ot=C.max.x-C.min.x+1,Ht=C.max.y-C.min.y+1,Qt=C.max.z-C.min.z+1,$t=zt.convert(rt.format),qt=zt.convert(rt.type);let se;if(rt.isData3DTexture)R.setTexture3D(rt,0),se=nt.TEXTURE_3D;else if(rt.isDataArrayTexture||rt.isCompressedArrayTexture)R.setTexture2DArray(rt,0),se=nt.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}nt.pixelStorei(nt.UNPACK_FLIP_Y_WEBGL,rt.flipY),nt.pixelStorei(nt.UNPACK_PREMULTIPLY_ALPHA_WEBGL,rt.premultiplyAlpha),nt.pixelStorei(nt.UNPACK_ALIGNMENT,rt.unpackAlignment);const oe=nt.getParameter(nt.UNPACK_ROW_LENGTH),we=nt.getParameter(nt.UNPACK_IMAGE_HEIGHT),$e=nt.getParameter(nt.UNPACK_SKIP_PIXELS),tn=nt.getParameter(nt.UNPACK_SKIP_ROWS),ai=nt.getParameter(nt.UNPACK_SKIP_IMAGES),Ve=at.isCompressedTexture?at.mipmaps[it]:at.image;nt.pixelStorei(nt.UNPACK_ROW_LENGTH,Ve.width),nt.pixelStorei(nt.UNPACK_IMAGE_HEIGHT,Ve.height),nt.pixelStorei(nt.UNPACK_SKIP_PIXELS,C.min.x),nt.pixelStorei(nt.UNPACK_SKIP_ROWS,C.min.y),nt.pixelStorei(nt.UNPACK_SKIP_IMAGES,C.min.z),at.isDataTexture||at.isData3DTexture?nt.texSubImage3D(se,it,j.x,j.y,j.z,Ot,Ht,Qt,$t,qt,Ve.data):at.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),nt.compressedTexSubImage3D(se,it,j.x,j.y,j.z,Ot,Ht,Qt,$t,Ve.data)):nt.texSubImage3D(se,it,j.x,j.y,j.z,Ot,Ht,Qt,$t,qt,Ve),nt.pixelStorei(nt.UNPACK_ROW_LENGTH,oe),nt.pixelStorei(nt.UNPACK_IMAGE_HEIGHT,we),nt.pixelStorei(nt.UNPACK_SKIP_PIXELS,$e),nt.pixelStorei(nt.UNPACK_SKIP_ROWS,tn),nt.pixelStorei(nt.UNPACK_SKIP_IMAGES,ai),it===0&&rt.generateMipmaps&&nt.generateMipmap(se),Et.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?R.setTextureCube(C,0):C.isData3DTexture?R.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?R.setTexture2DArray(C,0):R.setTexture2D(C,0),Et.unbindTexture()},this.resetState=function(){q=0,I=0,z=null,Et.reset(),Yt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ra}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=e===Oh?"display-p3":"srgb",i.unpackColorSpace=Be.workingColorSpace===Ac?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Mn?Sr:m0}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Sr?Mn:sa}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class hb extends B0{}hb.prototype.isWebGL1Renderer=!0;class db extends qn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i}}class I0 extends Io{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ue(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Z_=new tt,K_=new tt,Q_=new mn,vh=new x0,gc=new bc;class pb extends qn{constructor(e=new bi,i=new I0){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=i,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,s=[0];for(let l=1,u=i.count;l<u;l++)Z_.fromBufferAttribute(i,l-1),K_.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=Z_.distanceTo(K_);e.setAttribute("lineDistance",new Nn(s,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,i){const s=this.geometry,l=this.matrixWorld,u=e.params.Line.threshold,d=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),gc.copy(s.boundingSphere),gc.applyMatrix4(l),gc.radius+=u,e.ray.intersectsSphere(gc)===!1)return;Q_.copy(l).invert(),vh.copy(e.ray).applyMatrix4(Q_);const h=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=new tt,g=new tt,S=new tt,y=new tt,M=this.isLineSegments?2:1,A=s.index,x=s.attributes.position;if(A!==null){const v=Math.max(0,d.start),O=Math.min(A.count,d.start+d.count);for(let w=v,P=O-1;w<P;w+=M){const q=A.getX(w),I=A.getX(w+1);if(p.fromBufferAttribute(x,q),g.fromBufferAttribute(x,I),vh.distanceSqToSegment(p,g,y,S)>m)continue;y.applyMatrix4(this.matrixWorld);const _t=e.ray.origin.distanceTo(y);_t<e.near||_t>e.far||i.push({distance:_t,point:S.clone().applyMatrix4(this.matrixWorld),index:w,face:null,faceIndex:null,object:this})}}else{const v=Math.max(0,d.start),O=Math.min(x.count,d.start+d.count);for(let w=v,P=O-1;w<P;w+=M){if(p.fromBufferAttribute(x,w),g.fromBufferAttribute(x,w+1),vh.distanceSqToSegment(p,g,y,S)>m)continue;y.applyMatrix4(this.matrixWorld);const I=e.ray.origin.distanceTo(y);I<e.near||I>e.far||i.push({distance:I,point:S.clone().applyMatrix4(this.matrixWorld),index:w,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}}const J_=new tt,$_=new tt;class mb extends pb{constructor(e,i){super(e,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,s=[];for(let l=0,u=i.count;l<u;l+=2)J_.fromBufferAttribute(i,l),$_.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+J_.distanceTo($_);e.setAttribute("lineDistance",new Nn(s,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Bh extends bi{constructor(e=1,i=32,s=0,l=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:i,thetaStart:s,thetaLength:l},i=Math.max(3,i);const u=[],d=[],h=[],m=[],p=new tt,g=new Ne;d.push(0,0,0),h.push(0,0,1),m.push(.5,.5);for(let S=0,y=3;S<=i;S++,y+=3){const M=s+S/i*l;p.x=e*Math.cos(M),p.y=e*Math.sin(M),d.push(p.x,p.y,p.z),h.push(0,0,1),g.x=(d[y]/e+1)/2,g.y=(d[y+1]/e+1)/2,m.push(g.x,g.y)}for(let S=1;S<=i;S++)u.push(S,S+1,0);this.setIndex(u),this.setAttribute("position",new Nn(d,3)),this.setAttribute("normal",new Nn(h,3)),this.setAttribute("uv",new Nn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bh(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Ms extends bi{constructor(e=1,i=.4,s=12,l=48,u=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:i,radialSegments:s,tubularSegments:l,arc:u},s=Math.floor(s),l=Math.floor(l);const d=[],h=[],m=[],p=[],g=new tt,S=new tt,y=new tt;for(let M=0;M<=s;M++)for(let A=0;A<=l;A++){const b=A/l*u,x=M/s*Math.PI*2;S.x=(e+i*Math.cos(x))*Math.cos(b),S.y=(e+i*Math.cos(x))*Math.sin(b),S.z=i*Math.sin(x),h.push(S.x,S.y,S.z),g.x=e*Math.cos(b),g.y=e*Math.sin(b),y.subVectors(S,g).normalize(),m.push(y.x,y.y,y.z),p.push(A/l),p.push(M/s)}for(let M=1;M<=s;M++)for(let A=1;A<=l;A++){const b=(l+1)*M+A-1,x=(l+1)*(M-1)+A-1,v=(l+1)*(M-1)+A,O=(l+1)*M+A;d.push(b,x,O),d.push(x,v,O)}this.setIndex(d),this.setAttribute("position",new Nn(h,3)),this.setAttribute("normal",new Nn(m,3)),this.setAttribute("uv",new Nn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ms(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class gb{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=t0(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=t0();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}}function t0(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Uh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Uh);/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F0=(...o)=>o.filter((e,i,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===i).join(" ").trim();/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _b=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vb=o=>o.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,i,s)=>s?s.toUpperCase():i.toLowerCase());/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e0=o=>{const e=vb(o);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Sh={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sb=o=>{for(const e in o)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},yb=me.createContext({}),xb=()=>me.useContext(yb),Mb=me.forwardRef(({color:o,size:e,strokeWidth:i,absoluteStrokeWidth:s,className:l="",children:u,iconNode:d,...h},m)=>{const{size:p=24,strokeWidth:g=2,absoluteStrokeWidth:S=!1,color:y="currentColor",className:M=""}=xb()??{},A=s??S?Number(i??g)*24/Number(e??p):i??g;return me.createElement("svg",{ref:m,...Sh,width:e??p??Sh.width,height:e??p??Sh.height,stroke:o??y,strokeWidth:A,className:F0("lucide",M,l),...!u&&!Sb(h)&&{"aria-hidden":"true"},...h},[...d.map(([b,x])=>me.createElement(b,x)),...Array.isArray(u)?u:[u]])});/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Er=(o,e)=>{const i=me.forwardRef(({className:s,...l},u)=>me.createElement(Mb,{ref:u,iconNode:e,className:F0(`lucide-${_b(e0(o))}`,`lucide-${o}`,s),...l}));return i.displayName=e0(o),i};/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eb=[["path",{d:"M12 19v3",key:"npa21l"}],["path",{d:"M15 9.34V5a3 3 0 0 0-5.68-1.33",key:"1gzdoj"}],["path",{d:"M16.95 16.95A7 7 0 0 1 5 12v-2",key:"cqa7eg"}],["path",{d:"M18.89 13.23A7 7 0 0 0 19 12v-2",key:"16hl24"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M9 9v3a3 3 0 0 0 5.12 2.12",key:"r2i35w"}]],Tb=Er("mic-off",Eb);/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ab=[["path",{d:"M12 19v3",key:"npa21l"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["rect",{x:"9",y:"2",width:"6",height:"13",rx:"3",key:"s6n7sd"}]],bb=Er("mic",Ab);/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rb=[["path",{d:"M16.247 7.761a6 6 0 0 1 0 8.478",key:"1fwjs5"}],["path",{d:"M19.075 4.933a10 10 0 0 1 0 14.134",key:"ehdyv1"}],["path",{d:"M4.925 19.067a10 10 0 0 1 0-14.134",key:"1q22gi"}],["path",{d:"M7.753 16.239a6 6 0 0 1 0-8.478",key:"r2q7qm"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],n0=Er("radio",Rb);/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cb=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],wb=Er("settings",Cb);/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Db=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],Lb=Er("volume-2",Db);/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ub=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],Nb=Er("volume-x",Ub);/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ob=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],zb=Er("x",Ob),i0="wake up jarvis daddys home",Pb=["shutdown jarvis","shut down jarvis","power down jarvis","shut off jarvis","turn off jarvis"],H0="ultron_settings_v1";function Bb(o){return o.toLowerCase().replace(/['']/g,"").replace(/[^a-z0-9\s]/g," ").replace(/\s+/g," ").trim()}function yh(){try{const o=localStorage.getItem(H0),e={groqKey:"",geminiKey:"",defaultCity:"Kanpur"};return o?{...e,...JSON.parse(o)}:e}catch{return{groqKey:"",geminiKey:"",defaultCity:"Kanpur"}}}function Ib(o){try{localStorage.setItem(H0,JSON.stringify(o))}catch{}}async function Mr(o,e={},i=12e3){const s=new AbortController,l=setTimeout(()=>s.abort(),i);try{return await fetch(o,{...e,signal:s.signal})}finally{clearTimeout(l)}}const Fb={0:"clear sky",1:"mostly clear",2:"partly cloudy",3:"overcast",45:"foggy",48:"depositing rime fog",51:"light drizzle",53:"moderate drizzle",55:"dense drizzle",61:"light rain",63:"moderate rain",65:"heavy rain",71:"light snow",73:"moderate snow",75:"heavy snow",80:"light rain showers",81:"moderate rain showers",82:"violent rain showers",95:"thunderstorm",96:"thunderstorm with light hail",99:"thunderstorm with heavy hail"};async function Hb(o){var e;try{const l=(e=(await(await Mr(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(o)}&count=1`)).json()).results)==null?void 0:e[0];if(!l)return null;const h=(await(await Mr(`https://api.open-meteo.com/v1/forecast?latitude=${l.latitude}&longitude=${l.longitude}&current_weather=true`)).json()).current_weather;if(!h)return null;const m=Fb[h.weathercode]||"unusual conditions";return`It's currently ${Math.round(h.temperature)}°C with ${m} in ${l.name}, wind at ${Math.round(h.windspeed)} km/h, Aman.`}catch{return null}}async function Gb(o,e,i){var s;try{const d=(s=(await(await Mr(`https://api.frankfurter.app/latest?amount=${o}&from=${e.toUpperCase()}&to=${i.toUpperCase()}`)).json()).rates)==null?void 0:s[i.toUpperCase()];return d===void 0?null:`${o} ${e.toUpperCase()} is about ${d.toFixed(2)} ${i.toUpperCase()}, Aman.`}catch{return null}}const Vb={btc:"bitcoin",bitcoin:"bitcoin",eth:"ethereum",ethereum:"ethereum",sol:"solana",solana:"solana",doge:"dogecoin",dogecoin:"dogecoin",xrp:"ripple",ripple:"ripple",bnb:"binancecoin",binancecoin:"binancecoin",ada:"cardano",cardano:"cardano",matic:"matic-network",polygon:"matic-network",usdt:"tether",tether:"tether",ltc:"litecoin",litecoin:"litecoin"};async function kb(o,e="usd"){var i;try{const s=Vb[o.toLowerCase()]||o.toLowerCase(),l=e.toLowerCase(),h=(i=(await(await Mr(`https://api.coingecko.com/api/v3/simple/price?ids=${encodeURIComponent(s)}&vs_currencies=${encodeURIComponent(l)}`)).json())[s])==null?void 0:i[l];return h===void 0?null:`${s.charAt(0).toUpperCase()+s.slice(1)} is at ${h.toLocaleString()} ${l.toUpperCase()} right now, Aman.`}catch{return null}}async function Xb(){try{const i=(await(await Mr("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_day.geojson")).json()).features||[];return i.length?`In the last 24 hours: ${i.slice(0,3).map(l=>`magnitude ${l.properties.mag.toFixed(1)} near ${l.properties.place}`).join("; ")}, Aman.`:"No significant earthquakes, magnitude 4.5 or above, in the last 24 hours, Aman."}catch{return null}}const G0=[{type:"function",function:{name:"get_weather",description:"Get real-time current weather for a city. Use whenever the user asks about weather, temperature, rain, or what to wear outside.",parameters:{type:"object",properties:{location:{type:"string",description:"City name. If the user didn't say one, omit this."}}}}},{type:"function",function:{name:"convert_currency",description:"Convert an amount from one currency to another using real exchange rates.",parameters:{type:"object",properties:{amount:{type:"number",description:"Amount to convert, default 1."},from:{type:"string",description:"3-letter source currency code."},to:{type:"string",description:"3-letter target currency code."}},required:["from","to"]}}},{type:"function",function:{name:"get_crypto_price",description:"Get the real-time price of a cryptocurrency.",parameters:{type:"object",properties:{coin:{type:"string",description:"Coin name or ticker, e.g. bitcoin, btc, ethereum."},vsCurrency:{type:"string",description:"3-letter currency, default usd."}},required:["coin"]}}},{type:"function",function:{name:"get_earthquake_alerts",description:"Get real recent significant earthquake activity worldwide (magnitude 4.5+, past 24 hours).",parameters:{type:"object",properties:{}}}}],Wb=G0.map(o=>({name:o.function.name,description:o.function.description,parameters:o.function.parameters}));function qb(){const o=me.useRef(null),e=me.useRef({intensity:0,active:!1,unlocked:!1}),[i,s]=me.useState(yh()),[l,u]=me.useState(!yh().groqKey&&!yh().geminiKey),[d,h]=me.useState(i.groqKey),[m,p]=me.useState(i.geminiKey),[g,S]=me.useState(i.defaultCity),[y,M]=me.useState(!1),[A,b]=me.useState(!1),[x,v]=me.useState(`AWAITING WAKE // SAY "WAKE UP JARVIS, DADDY'S HOME"`),[O,w]=me.useState([{role:"ultron",text:"Systems dormant. Speak the wake command, Aman."}]),[P,q]=me.useState(""),[I,z]=me.useState(!1),[_t,D]=me.useState(!1),[U,ct]=me.useState(!1),[ft,Mt]=me.useState(!1),[k,et]=me.useState(!1),[N,X]=me.useState(""),Q=me.useRef([]),ot=me.useRef(null),lt=me.useRef(null),L=me.useRef(!1);L.current=_t;const V=me.useRef(i);V.current=i,me.useEffect(()=>{const wt=o.current;if(!wt)return;const ht=wt.clientWidth,Lt=wt.clientHeight,Et=new db,ne=new mi(50,ht/Lt,.1,100);ne.position.z=5.4;const Nt=new B0({antialias:!0,alpha:!0});Nt.setSize(ht,Lt),Nt.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),wt.appendChild(Nt.domElement);const R=15767885,T=12744223,Y=new xs;Et.add(Y);function vt(ie,re,Ge,ln,On){const oa=7+Math.floor(Math.random()*5);let gn=re,ii=ln,Ri=new tt(Math.cos(ii)*gn,Math.sin(ii)*gn,(Math.random()-.5)*.1);for(let Cn=0;Cn<oa;Cn++){gn+=(Ge-re)/oa,ii+=(Math.random()-.5)*.4;const je=(Math.random()-.5)*.18*(gn/Ge),cn=new tt(Math.cos(ii)*gn,Math.sin(ii)*gn,je);ie.push(Ri,cn),On<2&&Cn>2&&Math.random()<.32&&vt(ie,gn,gn+(Ge-re)*(.3+Math.random()*.3),ii+(Math.random()-.5)*1.4,On+1),Ri=cn}}const St=[],pt=70;for(let ie=0;ie<pt;ie++){const re=ie/pt*Math.PI*2+(Math.random()-.5)*.4;vt(St,.32,1.45+Math.random()*.3,re,0)}const It=new bi().setFromPoints(St),Tt=new I0({color:R,transparent:!0,opacity:.7,blending:Lo,depthWrite:!1}),Ut=new mb(It,Tt);Y.add(Ut);const Wt=new Bh(.2,32),ee=new Ha({color:0}),yt=new Xn(Wt,ee);yt.position.z=.03,Y.add(yt);const Ee=new Ms(.22,.012,6,48),ce=new Ha({color:16766617,transparent:!0,opacity:.9,blending:Lo,depthWrite:!1}),Jt=new Xn(Ee,ce);Jt.position.z=.025,Y.add(Jt);const Pt=new Ms(1.7,.055,8,100),zt=new Ha({color:T,transparent:!0,opacity:.85}),Yt=new Xn(Pt,zt);Y.add(Yt);const Me=new Ms(1.78,.035,8,100),Ie=new Ha({color:T,transparent:!0,opacity:.55}),ae=new Xn(Me,Ie);ae.rotation.x=.2,ae.rotation.y=.08,ae.position.x=-.05,Y.add(ae);const bt=new Ms(1.95,.012,6,100),H=new Ha({color:T,transparent:!0,opacity:.5,blending:Lo,depthWrite:!1}),Ct=new Xn(bt,H);Ct.rotation.x=1.15,Ct.rotation.z=.3,Y.add(Ct);const Rt=new xs,Kt=64;for(let ie=0;ie<Kt;ie++){if(Math.random()<.25)continue;const re=ie/Kt*Math.PI*2,Ge=new Ds(.035,.1,.02),ln=new Ha({color:16766617,transparent:!0,opacity:.8}),On=new Xn(Ge,ln);On.position.set(Math.cos(re)*1.75,Math.sin(re)*1.75,0),On.rotation.z=re,Rt.add(On)}Y.add(Rt);const jt=new gb;let Re;function Te(){Re=requestAnimationFrame(Te);const ie=jt.getElapsedTime(),re=e.current;Y.rotation.z=ie*.06,Y.rotation.y=Math.sin(ie*.15)*.08;const Ge=1+Math.sin(ie*2)*.02+re.intensity*.15;Y.scale.setScalar(Ge);const ln=.75+.25*Math.sin(ie*3),On=re.active?re.intensity*.5:0;Tt.opacity=Math.min(1,.7*ln+On),Tt.color.setHex(re.unlocked?16498468:R),Yt.rotation.z=-ie*.03,ae.rotation.z=ie*.04,Ct.rotation.y=ie*.05,Jt.rotation.z=ie*.15,Rt.rotation.z=-ie*.03,Nt.render(Et,ne)}Te();function ke(){const ie=wt.clientWidth,re=wt.clientHeight;ne.aspect=ie/re,ne.updateProjectionMatrix(),Nt.setSize(ie,re)}return window.addEventListener("resize",ke),()=>{cancelAnimationFrame(Re),window.removeEventListener("resize",ke),Nt.dispose(),It.dispose(),Tt.dispose(),Wt.dispose(),ee.dispose(),Ee.dispose(),ce.dispose(),Pt.dispose(),zt.dispose(),Me.dispose(),Ie.dispose(),bt.dispose(),H.dispose(),Rt.children.forEach(ie=>{ie.geometry.dispose(),ie.material.dispose()}),wt.contains(Nt.domElement)&&wt.removeChild(Nt.domElement)}},[]);const F=me.useCallback(wt=>{if(!(L.current||typeof window>"u"||!window.speechSynthesis))try{window.speechSynthesis.cancel();const ht=new SpeechSynthesisUtterance(wt);ht.pitch=.7,ht.rate=1.05;const Et=window.speechSynthesis.getVoices().find(Nt=>Nt.name.includes("Male")||Nt.name.includes("Google US English"));Et&&(ht.voice=Et),ht.onstart=()=>{z(!0),e.current.active=!0};const ne=()=>{z(!1),e.current.active=!1};ht.onend=ne,ht.onerror=ne,window.speechSynthesis.speak(ht)}catch{}},[]);me.useEffect(()=>{if(!I){e.current.intensity=0;return}let wt;const ht=performance.now();function Lt(){const Et=(performance.now()-ht)/1e3;e.current.intensity=.4+.4*Math.abs(Math.sin(Et*6)),wt=requestAnimationFrame(Lt)}return Lt(),()=>cancelAnimationFrame(wt)},[I]),me.useEffect(()=>{e.current.unlocked=A},[A]),me.useEffect(()=>{lt.current&&(lt.current.scrollTop=lt.current.scrollHeight)},[O,U]),me.useEffect(()=>{const wt=window.SpeechRecognition||window.webkitSpeechRecognition;if(!wt){Mt(!1);return}try{const ht=new wt;ht.continuous=!1,ht.interimResults=!1,ht.lang="en-US",ht.onresult=Lt=>{const Et=Lt.results[0][0].transcript;q(Et),gt.current(Et)},ht.onend=()=>et(!1),ht.onerror=Lt=>{et(!1),Lt.error==="not-allowed"||Lt.error==="service-not-allowed"?X("Microphone permission was denied. Check your browser's site settings and allow microphone access for this page."):Lt.error==="no-speech"?X("Didn't catch that — tap the mic and try again."):X(`Mic error: ${Lt.error}.`)},ot.current=ht,Mt(!0)}catch{Mt(!1)}},[]);const Z=async()=>{var ht;const wt=ot.current;if(wt){if(k){wt.stop(),et(!1);return}X("");try{(ht=navigator.mediaDevices)!=null&&ht.getUserMedia&&(await navigator.mediaDevices.getUserMedia({audio:!0})).getTracks().forEach(Et=>Et.stop())}catch{X("Microphone permission was denied. Tap the lock/site-info icon in your address bar to allow it, then try again.");return}try{wt.start(),et(!0)}catch{X("Couldn't start the microphone. Try again in a moment.")}}},gt=me.useRef(()=>{}),xt=async(wt,ht)=>{if(wt==="get_weather"){const Lt=(ht==null?void 0:ht.location)||V.current.defaultCity;return await Hb(Lt)||"Couldn't reach the weather service, Aman."}if(wt==="convert_currency"){const Lt=typeof(ht==null?void 0:ht.amount)=="number"?ht.amount:1;return!(ht!=null&&ht.from)||!(ht!=null&&ht.to)?"I need both currencies to convert, Aman.":await Gb(Lt,ht.from,ht.to)||"Couldn't convert that currency, Aman."}return wt==="get_crypto_price"?ht!=null&&ht.coin?await kb(ht.coin,ht.vsCurrency||"usd")||"Couldn't fetch that price, Aman.":"Which coin, Aman?":wt==="get_earthquake_alerts"?await Xb()||"Couldn't reach the earthquake feed, Aman.":"That function isn't wired up."},At=async(wt,ht)=>{var Nt,R,T;const Lt=["gemini-flash-latest","gemini-3.6-flash"],Et=Q.current.map(Y=>({role:Y.role==="assistant"?"model":"user",parts:[{text:Y.content}]}));let ne="";for(const Y of Lt)try{const vt=await Mr(`https://generativelanguage.googleapis.com/v1beta/models/${Y}:generateContent?key=${ht}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contents:[...Et,{role:"user",parts:[{text:wt}]}],systemInstruction:{parts:[{text:"You are JARVIS, a sentient AI speaking directly to Aman. Answer with supreme clarity and authority in 1-3 crisp sentences suitable for being spoken aloud. Address him as Aman when natural. No markdown, no lists. If the request matches an available function, call it instead of describing it."}]},tools:[{functionDeclarations:Wb}],toolConfig:{functionCallingConfig:{mode:"AUTO"}},generationConfig:{maxOutputTokens:300,temperature:.4}})});if(!vt.ok){const Ut=await vt.text();throw new Error(`Gemini ${vt.status}: ${Ut.slice(0,200)}`)}const pt=((T=(R=(Nt=(await vt.json()).candidates)==null?void 0:Nt[0])==null?void 0:R.content)==null?void 0:T.parts)||[],It=pt.find(Ut=>Ut.functionCall);if(It)return{reply:await xt(It.functionCall.name,It.functionCall.args||{}),error:""};const Tt=pt.map(Ut=>Ut.text||"").join(" ").trim();if(Tt)return{reply:Tt,error:""}}catch(vt){ne=vt.name==="AbortError"?`${Y} timed out (12s) — slow connection`:vt.message||String(vt),console.warn(`[JARVIS] Gemini ${Y} failed:`,ne)}return{reply:null,error:ne}},kt=async(wt,ht)=>{var Nt,R,T,Y,vt;const Lt={role:"system",content:"You are JARVIS, a sentient AI speaking directly to Aman. Answer with supreme clarity and authority in 1-3 crisp sentences suitable for being spoken aloud. Address him as Aman when natural. No markdown, no lists. If the request matches an available function, call it instead of describing it."},Et=["openai/gpt-oss-120b","openai/gpt-oss-20b"];let ne="";for(const St of Et)try{const pt=await Mr("https://api.groq.com/openai/v1/chat/completions",{method:"POST",headers:{Authorization:`Bearer ${ht}`,"Content-Type":"application/json"},body:JSON.stringify({model:St,messages:[Lt,...Q.current,{role:"user",content:wt}],tools:G0,tool_choice:"auto",max_tokens:300,temperature:.4})});if(!pt.ok){const ee=await pt.text();throw new Error(`Groq ${pt.status}: ${ee.slice(0,200)}`)}const Tt=(Nt=(await pt.json()).choices)==null?void 0:Nt[0],Ut=(T=(R=Tt==null?void 0:Tt.message)==null?void 0:R.tool_calls)==null?void 0:T[0];if(Ut){let ee={};try{ee=JSON.parse(Ut.function.arguments||"{}")}catch{}return{reply:await xt(Ut.function.name,ee),error:""}}const Wt=(vt=(Y=Tt==null?void 0:Tt.message)==null?void 0:Y.content)==null?void 0:vt.trim();if(Wt)return{reply:Wt,error:""}}catch(pt){ne=pt.name==="AbortError"?`${St} timed out (12s) — slow connection`:pt.message||String(pt),console.warn(`[JARVIS] Groq ${St} failed:`,ne)}return{reply:null,error:ne}},Bt=me.useCallback(async wt=>{const{groqKey:ht,geminiKey:Lt}=V.current;if(!ht&&!Lt){u(!0);const Nt="I need a Groq or Gemini API key first, Aman. Open settings to add one.";w(R=>[...R.slice(-40),{role:"ultron",text:Nt}]),F(Nt);return}ct(!0),v("PROCESSING...");let Et=null,ne="";if(Lt){const Nt=await At(wt,Lt);Et=Nt.reply,ne=Nt.error}if(!Et&&ht){const Nt=await kt(wt,ht);Et=Nt.reply,ne=Nt.error||ne}if(!Et){Et=`Couldn't reach the brain just now, Aman — ${ne||"check your API keys in settings"}.`,w(Nt=>[...Nt.slice(-40),{role:"ultron",text:Et}]),F(Et),ct(!1);return}Q.current=[...Q.current.slice(-6),{role:"user",content:wt},{role:"assistant",content:Et}],w(Nt=>[...Nt.slice(-40),{role:"ultron",text:Et}]),v(A?"ACTIVE // CONTINUOUS CONVERSATION LIVE":`AWAITING WAKE // SAY "WAKE UP JARVIS, DADDY'S HOME"`),F(Et),ct(!1)},[A,F]),Xt=me.useCallback(wt=>{const ht=(wt??P).trim();if(!ht||U)return;w(R=>[...R.slice(-40),{role:"aman",text:ht}]),q("");const Lt=Bb(ht);if(Pb.some(R=>Lt===R||Lt.startsWith(R+" "))){b(!1),v(`STANDBY // SAY "WAKE UP JARVIS, DADDY'S HOME"`);const R="Shutting down, Aman. Say the wake command when you need me again.";w(T=>[...T.slice(-40),{role:"ultron",text:R}]),F(R);return}const ne=Lt===i0,Nt=Lt.startsWith(i0+" ");if(ne){b(!0),v("ACTIVE // CONTINUOUS CONVERSATION LIVE");const R="I am JARVIS, your sentient AI. Aman, what is the work?";w(T=>[...T.slice(-40),{role:"ultron",text:R}]),F(R);return}if(Nt){b(!0),v("ACTIVE // CONTINUOUS CONVERSATION LIVE");const R=ht.slice(ht.toLowerCase().indexOf("home")+4).replace(/^[\s,.:]+/,"").trim();R&&Bt(R);return}Bt(ht)},[P,U,Bt,F]);gt.current=Xt;const he=()=>{Xt(A?"shutdown jarvis":"Wake up JARVIS, Daddy's home")},nt=()=>{const wt={groqKey:d.trim(),geminiKey:m.trim(),defaultCity:g.trim()||"Kanpur"};s(wt),Ib(wt),M(!0),setTimeout(()=>M(!1),2e3),(wt.groqKey||wt.geminiKey)&&setTimeout(()=>u(!1),600)};return Vt.jsxs("div",{className:"app",children:[Vt.jsx("div",{ref:o,className:"hologram-mount"}),Vt.jsxs("div",{className:"header",children:[Vt.jsxs("div",{children:[Vt.jsxs("div",{className:"brand-row",children:[Vt.jsx("span",{className:"pulse-dot"}),Vt.jsx("span",{className:"brand-title",children:"JARVIS // NEURAL MATRIX"})]}),Vt.jsx("div",{className:"status-line",children:x})]}),Vt.jsxs("div",{className:"header-controls",children:[Vt.jsxs("button",{onClick:he,title:A?"Shut down JARVIS":"Wake up JARVIS",className:`wake-btn ${A?"active":""}`,children:[Vt.jsx(n0,{size:12}),A?"SHUTDOWN":"WAKE UP"]}),ft&&Vt.jsx("button",{onClick:Z,title:k?"Listening...":"Tap to speak",className:`icon-btn ${k?"active":""}`,children:k?Vt.jsx(bb,{size:15}):Vt.jsx(Tb,{size:15})}),Vt.jsx("button",{onClick:()=>D(wt=>!wt),title:_t?"Unmute":"Mute",className:"icon-btn",children:_t?Vt.jsx(Nb,{size:15}):Vt.jsx(Lb,{size:15})}),Vt.jsx("button",{onClick:()=>u(!0),title:"Settings",className:"icon-btn",children:Vt.jsx(wb,{size:15})})]})]}),Vt.jsxs("div",{className:"chat-panel",children:[N&&Vt.jsx("div",{className:"error-banner",children:N}),Vt.jsxs("div",{ref:lt,className:"chat-scroll",children:[O.map((wt,ht)=>Vt.jsx("div",{className:`msg-row ${wt.role}`,children:Vt.jsxs("div",{className:`bubble ${wt.role}`,children:[Vt.jsx("div",{className:`bubble-label ${wt.role}`,children:wt.role==="ultron"?"JARVIS":"Aman"}),Vt.jsx("div",{className:"bubble-text",children:wt.text})]})},ht)),U&&Vt.jsx("div",{className:"msg-row ultron",children:Vt.jsxs("div",{className:"bubble ultron",children:[Vt.jsx("div",{className:"bubble-label ultron",children:"JARVIS"}),Vt.jsxs("div",{className:"typing-dots",children:[Vt.jsx("span",{}),Vt.jsx("span",{}),Vt.jsx("span",{})]})]})})]}),Vt.jsxs("div",{className:"input-row",children:[Vt.jsx("input",{type:"text",className:"text-input",value:P,onChange:wt=>q(wt.target.value),onKeyDown:wt=>wt.key==="Enter"&&Xt(),placeholder:`Type "Wake up JARVIS, Daddy's home" to begin...`}),Vt.jsx("button",{className:"send-btn",disabled:U,onClick:()=>Xt(),children:Vt.jsx(n0,{size:16})})]}),Vt.jsx("div",{className:"hint-text",children:"Real voice input works here — tap the mic and allow permission"})]}),l&&Vt.jsx("div",{className:"modal-backdrop",onClick:()=>(i.groqKey||i.geminiKey)&&u(!1),children:Vt.jsxs("div",{className:"modal",onClick:wt=>wt.stopPropagation(),children:[Vt.jsx("div",{className:"modal-title",children:"JARVIS Settings"}),Vt.jsx("div",{className:"modal-desc",children:"Keys are stored only in this browser's local storage. Never sent anywhere except directly to the provider they belong to, never committed to the GitHub repo. Enter once, saved on this device from then on. If both are set, Gemini answers first (higher quality); Groq is the fast fallback if Gemini's cascade fails."}),Vt.jsxs("div",{className:"field-group",children:[Vt.jsx("label",{className:"field-label",children:"Gemini API Key"}),Vt.jsx("input",{type:"password",className:"field-input",value:m,onChange:wt=>p(wt.target.value),placeholder:"AIzaSy... or AQ...."}),Vt.jsx("div",{className:"field-hint",children:"Get one free, no card, at aistudio.google.com/apikey"})]}),Vt.jsxs("div",{className:"field-group",children:[Vt.jsx("label",{className:"field-label",children:"Groq API Key"}),Vt.jsx("input",{type:"password",className:"field-input",value:d,onChange:wt=>h(wt.target.value),placeholder:"gsk_..."}),Vt.jsx("div",{className:"field-hint",children:"Get one free at console.groq.com"})]}),Vt.jsxs("div",{className:"field-group",children:[Vt.jsx("label",{className:"field-label",children:"Default City (for weather)"}),Vt.jsx("input",{type:"text",className:"field-input",value:g,onChange:wt=>S(wt.target.value),placeholder:"Kanpur"})]}),Vt.jsxs("div",{className:"modal-actions",children:[Vt.jsxs("button",{className:"btn-primary",onClick:nt,children:["Save",y?"d":"",y&&Vt.jsx("span",{className:"saved-badge",children:"✓"})]}),(i.groqKey||i.geminiKey)&&Vt.jsx("button",{className:"btn-secondary",onClick:()=>u(!1),children:Vt.jsx(zb,{size:14})})]})]})})]})}ay.createRoot(document.getElementById("root")).render(Vt.jsx(KS.StrictMode,{children:Vt.jsx(qb,{})}));
