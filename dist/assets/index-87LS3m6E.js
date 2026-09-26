function jp(l,a){for(var u=0;u<a.length;u++){const d=a[u];if(typeof d!="string"&&!Array.isArray(d)){for(const A in d)if(A!=="default"&&!(A in l)){const p=Object.getOwnPropertyDescriptor(d,A);p&&Object.defineProperty(l,A,p.get?p:{enumerable:!0,get:()=>d[A]})}}}return Object.freeze(Object.defineProperty(l,Symbol.toStringTag,{value:"Module"}))}(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const A of document.querySelectorAll('link[rel="modulepreload"]'))d(A);new MutationObserver(A=>{for(const p of A)if(p.type==="childList")for(const x of p.addedNodes)x.tagName==="LINK"&&x.rel==="modulepreload"&&d(x)}).observe(document,{childList:!0,subtree:!0});function u(A){const p={};return A.integrity&&(p.integrity=A.integrity),A.referrerPolicy&&(p.referrerPolicy=A.referrerPolicy),A.crossOrigin==="use-credentials"?p.credentials="include":A.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function d(A){if(A.ep)return;A.ep=!0;const p=u(A);fetch(A.href,p)}})();var Tp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ja(l){return l&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l}var fa={exports:{}},Fr={},da={exports:{}},re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pc;function Np(){if(Pc)return re;Pc=1;var l=Symbol.for("react.element"),a=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),d=Symbol.for("react.strict_mode"),A=Symbol.for("react.profiler"),p=Symbol.for("react.provider"),x=Symbol.for("react.context"),S=Symbol.for("react.forward_ref"),N=Symbol.for("react.suspense"),B=Symbol.for("react.memo"),M=Symbol.for("react.lazy"),_=Symbol.iterator;function F(h){return h===null||typeof h!="object"?null:(h=_&&h[_]||h["@@iterator"],typeof h=="function"?h:null)}var Y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},O=Object.assign,E={};function k(h,j,$){this.props=h,this.context=j,this.refs=E,this.updater=$||Y}k.prototype.isReactComponent={},k.prototype.setState=function(h,j){if(typeof h!="object"&&typeof h!="function"&&h!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,h,j,"setState")},k.prototype.forceUpdate=function(h){this.updater.enqueueForceUpdate(this,h,"forceUpdate")};function H(){}H.prototype=k.prototype;function W(h,j,$){this.props=h,this.context=j,this.refs=E,this.updater=$||Y}var X=W.prototype=new H;X.constructor=W,O(X,k.prototype),X.isPureReactComponent=!0;var ee=Array.isArray,I=Object.prototype.hasOwnProperty,ne={current:null},b={key:!0,ref:!0,__self:!0,__source:!0};function tt(h,j,$){var oe,te={},Ae=null,se=null;if(j!=null)for(oe in j.ref!==void 0&&(se=j.ref),j.key!==void 0&&(Ae=""+j.key),j)I.call(j,oe)&&!b.hasOwnProperty(oe)&&(te[oe]=j[oe]);var he=arguments.length-2;if(he===1)te.children=$;else if(1<he){for(var fe=Array(he),$e=0;$e<he;$e++)fe[$e]=arguments[$e+2];te.children=fe}if(h&&h.defaultProps)for(oe in he=h.defaultProps,he)te[oe]===void 0&&(te[oe]=he[oe]);return{$$typeof:l,type:h,key:Ae,ref:se,props:te,_owner:ne.current}}function Vt(h,j){return{$$typeof:l,type:h.type,key:j,ref:h.ref,props:h.props,_owner:h._owner}}function Lt(h){return typeof h=="object"&&h!==null&&h.$$typeof===l}function cn(h){var j={"=":"=0",":":"=2"};return"$"+h.replace(/[=:]/g,function($){return j[$]})}var St=/\/+/g;function nt(h,j){return typeof h=="object"&&h!==null&&h.key!=null?cn(""+h.key):j.toString(36)}function mt(h,j,$,oe,te){var Ae=typeof h;(Ae==="undefined"||Ae==="boolean")&&(h=null);var se=!1;if(h===null)se=!0;else switch(Ae){case"string":case"number":se=!0;break;case"object":switch(h.$$typeof){case l:case a:se=!0}}if(se)return se=h,te=te(se),h=oe===""?"."+nt(se,0):oe,ee(te)?($="",h!=null&&($=h.replace(St,"$&/")+"/"),mt(te,j,$,"",function($e){return $e})):te!=null&&(Lt(te)&&(te=Vt(te,$+(!te.key||se&&se.key===te.key?"":(""+te.key).replace(St,"$&/")+"/")+h)),j.push(te)),1;if(se=0,oe=oe===""?".":oe+":",ee(h))for(var he=0;he<h.length;he++){Ae=h[he];var fe=oe+nt(Ae,he);se+=mt(Ae,j,$,fe,te)}else if(fe=F(h),typeof fe=="function")for(h=fe.call(h),he=0;!(Ae=h.next()).done;)Ae=Ae.value,fe=oe+nt(Ae,he++),se+=mt(Ae,j,$,fe,te);else if(Ae==="object")throw j=String(h),Error("Objects are not valid as a React child (found: "+(j==="[object Object]"?"object with keys {"+Object.keys(h).join(", ")+"}":j)+"). If you meant to render a collection of children, use an array instead.");return se}function Et(h,j,$){if(h==null)return h;var oe=[],te=0;return mt(h,oe,"","",function(Ae){return j.call($,Ae,te++)}),oe}function He(h){if(h._status===-1){var j=h._result;j=j(),j.then(function($){(h._status===0||h._status===-1)&&(h._status=1,h._result=$)},function($){(h._status===0||h._status===-1)&&(h._status=2,h._result=$)}),h._status===-1&&(h._status=0,h._result=j)}if(h._status===1)return h._result.default;throw h._result}var Se={current:null},z={transition:null},q={ReactCurrentDispatcher:Se,ReactCurrentBatchConfig:z,ReactCurrentOwner:ne};return re.Children={map:Et,forEach:function(h,j,$){Et(h,function(){j.apply(this,arguments)},$)},count:function(h){var j=0;return Et(h,function(){j++}),j},toArray:function(h){return Et(h,function(j){return j})||[]},only:function(h){if(!Lt(h))throw Error("React.Children.only expected to receive a single React element child.");return h}},re.Component=k,re.Fragment=u,re.Profiler=A,re.PureComponent=W,re.StrictMode=d,re.Suspense=N,re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=q,re.cloneElement=function(h,j,$){if(h==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+h+".");var oe=O({},h.props),te=h.key,Ae=h.ref,se=h._owner;if(j!=null){if(j.ref!==void 0&&(Ae=j.ref,se=ne.current),j.key!==void 0&&(te=""+j.key),h.type&&h.type.defaultProps)var he=h.type.defaultProps;for(fe in j)I.call(j,fe)&&!b.hasOwnProperty(fe)&&(oe[fe]=j[fe]===void 0&&he!==void 0?he[fe]:j[fe])}var fe=arguments.length-2;if(fe===1)oe.children=$;else if(1<fe){he=Array(fe);for(var $e=0;$e<fe;$e++)he[$e]=arguments[$e+2];oe.children=he}return{$$typeof:l,type:h.type,key:te,ref:Ae,props:oe,_owner:se}},re.createContext=function(h){return h={$$typeof:x,_currentValue:h,_currentValue2:h,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},h.Provider={$$typeof:p,_context:h},h.Consumer=h},re.createElement=tt,re.createFactory=function(h){var j=tt.bind(null,h);return j.type=h,j},re.createRef=function(){return{current:null}},re.forwardRef=function(h){return{$$typeof:S,render:h}},re.isValidElement=Lt,re.lazy=function(h){return{$$typeof:M,_payload:{_status:-1,_result:h},_init:He}},re.memo=function(h,j){return{$$typeof:B,type:h,compare:j===void 0?null:j}},re.startTransition=function(h){var j=z.transition;z.transition={};try{h()}finally{z.transition=j}},re.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},re.useCallback=function(h,j){return Se.current.useCallback(h,j)},re.useContext=function(h){return Se.current.useContext(h)},re.useDebugValue=function(){},re.useDeferredValue=function(h){return Se.current.useDeferredValue(h)},re.useEffect=function(h,j){return Se.current.useEffect(h,j)},re.useId=function(){return Se.current.useId()},re.useImperativeHandle=function(h,j,$){return Se.current.useImperativeHandle(h,j,$)},re.useInsertionEffect=function(h,j){return Se.current.useInsertionEffect(h,j)},re.useLayoutEffect=function(h,j){return Se.current.useLayoutEffect(h,j)},re.useMemo=function(h,j){return Se.current.useMemo(h,j)},re.useReducer=function(h,j,$){return Se.current.useReducer(h,j,$)},re.useRef=function(h){return Se.current.useRef(h)},re.useState=function(h){return Se.current.useState(h)},re.useSyncExternalStore=function(h,j,$){return Se.current.useSyncExternalStore(h,j,$)},re.useTransition=function(){return Se.current.useTransition()},re.version="18.2.0",re}var _c;function Ta(){return _c||(_c=1,da.exports=Np()),da.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lc;function Rp(){if(Lc)return Fr;Lc=1;var l=Ta(),a=Symbol.for("react.element"),u=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,A=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function x(S,N,B){var M,_={},F=null,Y=null;B!==void 0&&(F=""+B),N.key!==void 0&&(F=""+N.key),N.ref!==void 0&&(Y=N.ref);for(M in N)d.call(N,M)&&!p.hasOwnProperty(M)&&(_[M]=N[M]);if(S&&S.defaultProps)for(M in N=S.defaultProps,N)_[M]===void 0&&(_[M]=N[M]);return{$$typeof:a,type:S,key:F,ref:Y,props:_,_owner:A.current}}return Fr.Fragment=u,Fr.jsx=x,Fr.jsxs=x,Fr}var Bc;function Ip(){return Bc||(Bc=1,fa.exports=Rp()),fa.exports}var f=Ip(),ae=Ta();const Na=ja(ae),Mc=jp({__proto__:null,default:Na},[ae]);var oi={},pa={exports:{}},Je={},ma={exports:{}},ha={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zc;function Pp(){return zc||(zc=1,function(l){function a(z,q){var h=z.length;z.push(q);e:for(;0<h;){var j=h-1>>>1,$=z[j];if(0<A($,q))z[j]=q,z[h]=$,h=j;else break e}}function u(z){return z.length===0?null:z[0]}function d(z){if(z.length===0)return null;var q=z[0],h=z.pop();if(h!==q){z[0]=h;e:for(var j=0,$=z.length,oe=$>>>1;j<oe;){var te=2*(j+1)-1,Ae=z[te],se=te+1,he=z[se];if(0>A(Ae,h))se<$&&0>A(he,Ae)?(z[j]=he,z[se]=h,j=se):(z[j]=Ae,z[te]=h,j=te);else if(se<$&&0>A(he,h))z[j]=he,z[se]=h,j=se;else break e}}return q}function A(z,q){var h=z.sortIndex-q.sortIndex;return h!==0?h:z.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var p=performance;l.unstable_now=function(){return p.now()}}else{var x=Date,S=x.now();l.unstable_now=function(){return x.now()-S}}var N=[],B=[],M=1,_=null,F=3,Y=!1,O=!1,E=!1,k=typeof setTimeout=="function"?setTimeout:null,H=typeof clearTimeout=="function"?clearTimeout:null,W=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function X(z){for(var q=u(B);q!==null;){if(q.callback===null)d(B);else if(q.startTime<=z)d(B),q.sortIndex=q.expirationTime,a(N,q);else break;q=u(B)}}function ee(z){if(E=!1,X(z),!O)if(u(N)!==null)O=!0,He(I);else{var q=u(B);q!==null&&Se(ee,q.startTime-z)}}function I(z,q){O=!1,E&&(E=!1,H(tt),tt=-1),Y=!0;var h=F;try{for(X(q),_=u(N);_!==null&&(!(_.expirationTime>q)||z&&!cn());){var j=_.callback;if(typeof j=="function"){_.callback=null,F=_.priorityLevel;var $=j(_.expirationTime<=q);q=l.unstable_now(),typeof $=="function"?_.callback=$:_===u(N)&&d(N),X(q)}else d(N);_=u(N)}if(_!==null)var oe=!0;else{var te=u(B);te!==null&&Se(ee,te.startTime-q),oe=!1}return oe}finally{_=null,F=h,Y=!1}}var ne=!1,b=null,tt=-1,Vt=5,Lt=-1;function cn(){return!(l.unstable_now()-Lt<Vt)}function St(){if(b!==null){var z=l.unstable_now();Lt=z;var q=!0;try{q=b(!0,z)}finally{q?nt():(ne=!1,b=null)}}else ne=!1}var nt;if(typeof W=="function")nt=function(){W(St)};else if(typeof MessageChannel<"u"){var mt=new MessageChannel,Et=mt.port2;mt.port1.onmessage=St,nt=function(){Et.postMessage(null)}}else nt=function(){k(St,0)};function He(z){b=z,ne||(ne=!0,nt())}function Se(z,q){tt=k(function(){z(l.unstable_now())},q)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(z){z.callback=null},l.unstable_continueExecution=function(){O||Y||(O=!0,He(I))},l.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Vt=0<z?Math.floor(1e3/z):5},l.unstable_getCurrentPriorityLevel=function(){return F},l.unstable_getFirstCallbackNode=function(){return u(N)},l.unstable_next=function(z){switch(F){case 1:case 2:case 3:var q=3;break;default:q=F}var h=F;F=q;try{return z()}finally{F=h}},l.unstable_pauseExecution=function(){},l.unstable_requestPaint=function(){},l.unstable_runWithPriority=function(z,q){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var h=F;F=z;try{return q()}finally{F=h}},l.unstable_scheduleCallback=function(z,q,h){var j=l.unstable_now();switch(typeof h=="object"&&h!==null?(h=h.delay,h=typeof h=="number"&&0<h?j+h:j):h=j,z){case 1:var $=-1;break;case 2:$=250;break;case 5:$=1073741823;break;case 4:$=1e4;break;default:$=5e3}return $=h+$,z={id:M++,callback:q,priorityLevel:z,startTime:h,expirationTime:$,sortIndex:-1},h>j?(z.sortIndex=h,a(B,z),u(N)===null&&z===u(B)&&(E?(H(tt),tt=-1):E=!0,Se(ee,h-j))):(z.sortIndex=$,a(N,z),O||Y||(O=!0,He(I))),z},l.unstable_shouldYield=cn,l.unstable_wrapCallback=function(z){var q=F;return function(){var h=F;F=q;try{return z.apply(this,arguments)}finally{F=h}}}}(ha)),ha}var Oc;function _p(){return Oc||(Oc=1,ma.exports=Pp()),ma.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dc;function Lp(){if(Dc)return Je;Dc=1;var l=Ta(),a=_p();function u(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var d=new Set,A={};function p(e,t){x(e,t),x(e+"Capture",t)}function x(e,t){for(A[e]=t,e=0;e<t.length;e++)d.add(t[e])}var S=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),N=Object.prototype.hasOwnProperty,B=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,M={},_={};function F(e){return N.call(_,e)?!0:N.call(M,e)?!1:B.test(e)?_[e]=!0:(M[e]=!0,!1)}function Y(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function O(e,t,n,r){if(t===null||typeof t>"u"||Y(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function E(e,t,n,r,o,i,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=s}var k={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){k[e]=new E(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];k[t]=new E(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){k[e]=new E(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){k[e]=new E(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){k[e]=new E(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){k[e]=new E(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){k[e]=new E(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){k[e]=new E(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){k[e]=new E(e,5,!1,e.toLowerCase(),null,!1,!1)});var H=/[\-:]([a-z])/g;function W(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(H,W);k[t]=new E(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(H,W);k[t]=new E(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(H,W);k[t]=new E(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){k[e]=new E(e,1,!1,e.toLowerCase(),null,!1,!1)}),k.xlinkHref=new E("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){k[e]=new E(e,1,!1,e.toLowerCase(),null,!0,!0)});function X(e,t,n,r){var o=k.hasOwnProperty(t)?k[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(O(t,n,o,r)&&(n=null),r||o===null?F(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var ee=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,I=Symbol.for("react.element"),ne=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),tt=Symbol.for("react.strict_mode"),Vt=Symbol.for("react.profiler"),Lt=Symbol.for("react.provider"),cn=Symbol.for("react.context"),St=Symbol.for("react.forward_ref"),nt=Symbol.for("react.suspense"),mt=Symbol.for("react.suspense_list"),Et=Symbol.for("react.memo"),He=Symbol.for("react.lazy"),Se=Symbol.for("react.offscreen"),z=Symbol.iterator;function q(e){return e===null||typeof e!="object"?null:(e=z&&e[z]||e["@@iterator"],typeof e=="function"?e:null)}var h=Object.assign,j;function $(e){if(j===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);j=t&&t[1]||""}return`
`+j+e}var oe=!1;function te(e,t){if(!e||oe)return"";oe=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(w){var r=w}Reflect.construct(e,[],t)}else{try{t.call()}catch(w){r=w}e.call(t.prototype)}else{try{throw Error()}catch(w){r=w}e()}}catch(w){if(w&&r&&typeof w.stack=="string"){for(var o=w.stack.split(`
`),i=r.stack.split(`
`),s=o.length-1,c=i.length-1;1<=s&&0<=c&&o[s]!==i[c];)c--;for(;1<=s&&0<=c;s--,c--)if(o[s]!==i[c]){if(s!==1||c!==1)do if(s--,c--,0>c||o[s]!==i[c]){var m=`
`+o[s].replace(" at new "," at ");return e.displayName&&m.includes("<anonymous>")&&(m=m.replace("<anonymous>",e.displayName)),m}while(1<=s&&0<=c);break}}}finally{oe=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?$(e):""}function Ae(e){switch(e.tag){case 5:return $(e.type);case 16:return $("Lazy");case 13:return $("Suspense");case 19:return $("SuspenseList");case 0:case 2:case 15:return e=te(e.type,!1),e;case 11:return e=te(e.type.render,!1),e;case 1:return e=te(e.type,!0),e;default:return""}}function se(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case b:return"Fragment";case ne:return"Portal";case Vt:return"Profiler";case tt:return"StrictMode";case nt:return"Suspense";case mt:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case cn:return(e.displayName||"Context")+".Consumer";case Lt:return(e._context.displayName||"Context")+".Provider";case St:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Et:return t=e.displayName||null,t!==null?t:se(e.type)||"Memo";case He:t=e._payload,e=e._init;try{return se(e(t))}catch{}}return null}function he(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return se(t);case 8:return t===tt?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function fe(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function $e(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Rf(e){var t=$e(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(s){r=""+s,i.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Wr(e){e._valueTracker||(e._valueTracker=Rf(e))}function za(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=$e(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Xr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function vi(e,t){var n=t.checked;return h({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Oa(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=fe(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Da(e,t){t=t.checked,t!=null&&X(e,"checked",t,!1)}function yi(e,t){Da(e,t);var n=fe(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?wi(e,t.type,n):t.hasOwnProperty("defaultValue")&&wi(e,t.type,fe(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Fa(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function wi(e,t,n){(t!=="number"||Xr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var er=Array.isArray;function Cn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+fe(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function xi(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(u(91));return h({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Qa(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(u(92));if(er(n)){if(1<n.length)throw Error(u(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:fe(n)}}function Ua(e,t){var n=fe(t.value),r=fe(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Va(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ya(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ki(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ya(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Kr,Ga=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Kr=Kr||document.createElement("div"),Kr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Kr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function tr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var nr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},If=["Webkit","ms","Moz","O"];Object.keys(nr).forEach(function(e){If.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),nr[t]=nr[e]})});function Ha(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||nr.hasOwnProperty(e)&&nr[e]?(""+t).trim():t+"px"}function $a(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Ha(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Pf=h({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Si(e,t){if(t){if(Pf[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(u(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(u(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(u(61))}if(t.style!=null&&typeof t.style!="object")throw Error(u(62))}}function Ei(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ci=null;function ji(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ti=null,jn=null,Tn=null;function Wa(e){if(e=Er(e)){if(typeof Ti!="function")throw Error(u(280));var t=e.stateNode;t&&(t=yo(t),Ti(e.stateNode,e.type,t))}}function Xa(e){jn?Tn?Tn.push(e):Tn=[e]:jn=e}function Ka(){if(jn){var e=jn,t=Tn;if(Tn=jn=null,Wa(e),t)for(e=0;e<t.length;e++)Wa(t[e])}}function Za(e,t){return e(t)}function qa(){}var Ni=!1;function Ja(e,t,n){if(Ni)return e(t,n);Ni=!0;try{return Za(e,t,n)}finally{Ni=!1,(jn!==null||Tn!==null)&&(qa(),Ka())}}function rr(e,t){var n=e.stateNode;if(n===null)return null;var r=yo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(u(231,t,typeof n));return n}var Ri=!1;if(S)try{var or={};Object.defineProperty(or,"passive",{get:function(){Ri=!0}}),window.addEventListener("test",or,or),window.removeEventListener("test",or,or)}catch{Ri=!1}function _f(e,t,n,r,o,i,s,c,m){var w=Array.prototype.slice.call(arguments,3);try{t.apply(n,w)}catch(T){this.onError(T)}}var ir=!1,Zr=null,qr=!1,Ii=null,Lf={onError:function(e){ir=!0,Zr=e}};function Bf(e,t,n,r,o,i,s,c,m){ir=!1,Zr=null,_f.apply(Lf,arguments)}function Mf(e,t,n,r,o,i,s,c,m){if(Bf.apply(this,arguments),ir){if(ir){var w=Zr;ir=!1,Zr=null}else throw Error(u(198));qr||(qr=!0,Ii=w)}}function fn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function ba(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function es(e){if(fn(e)!==e)throw Error(u(188))}function zf(e){var t=e.alternate;if(!t){if(t=fn(e),t===null)throw Error(u(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return es(o),e;if(i===r)return es(o),t;i=i.sibling}throw Error(u(188))}if(n.return!==r.return)n=o,r=i;else{for(var s=!1,c=o.child;c;){if(c===n){s=!0,n=o,r=i;break}if(c===r){s=!0,r=o,n=i;break}c=c.sibling}if(!s){for(c=i.child;c;){if(c===n){s=!0,n=i,r=o;break}if(c===r){s=!0,r=i,n=o;break}c=c.sibling}if(!s)throw Error(u(189))}}if(n.alternate!==r)throw Error(u(190))}if(n.tag!==3)throw Error(u(188));return n.stateNode.current===n?e:t}function ts(e){return e=zf(e),e!==null?ns(e):null}function ns(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ns(e);if(t!==null)return t;e=e.sibling}return null}var rs=a.unstable_scheduleCallback,os=a.unstable_cancelCallback,Of=a.unstable_shouldYield,Df=a.unstable_requestPaint,Ce=a.unstable_now,Ff=a.unstable_getCurrentPriorityLevel,Pi=a.unstable_ImmediatePriority,is=a.unstable_UserBlockingPriority,Jr=a.unstable_NormalPriority,Qf=a.unstable_LowPriority,ls=a.unstable_IdlePriority,br=null,Ct=null;function Uf(e){if(Ct&&typeof Ct.onCommitFiberRoot=="function")try{Ct.onCommitFiberRoot(br,e,void 0,(e.current.flags&128)===128)}catch{}}var ht=Math.clz32?Math.clz32:Gf,Vf=Math.log,Yf=Math.LN2;function Gf(e){return e>>>=0,e===0?32:31-(Vf(e)/Yf|0)|0}var eo=64,to=4194304;function lr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function no(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,s=n&268435455;if(s!==0){var c=s&~o;c!==0?r=lr(c):(i&=s,i!==0&&(r=lr(i)))}else s=n&~o,s!==0?r=lr(s):i!==0&&(r=lr(i));if(r===0)return 0;if(t!==0&&t!==r&&(t&o)===0&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-ht(t),o=1<<n,r|=e[n],t&=~o;return r}function Hf(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $f(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var s=31-ht(i),c=1<<s,m=o[s];m===-1?((c&n)===0||(c&r)!==0)&&(o[s]=Hf(c,t)):m<=t&&(e.expiredLanes|=c),i&=~c}}function _i(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function as(){var e=eo;return eo<<=1,(eo&4194240)===0&&(eo=64),e}function Li(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ar(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ht(t),e[t]=n}function Wf(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-ht(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function Bi(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ht(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var me=0;function ss(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var us,Mi,cs,fs,ds,zi=!1,ro=[],Yt=null,Gt=null,Ht=null,sr=new Map,ur=new Map,$t=[],Xf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ps(e,t){switch(e){case"focusin":case"focusout":Yt=null;break;case"dragenter":case"dragleave":Gt=null;break;case"mouseover":case"mouseout":Ht=null;break;case"pointerover":case"pointerout":sr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ur.delete(t.pointerId)}}function cr(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=Er(t),t!==null&&Mi(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Kf(e,t,n,r,o){switch(t){case"focusin":return Yt=cr(Yt,e,t,n,r,o),!0;case"dragenter":return Gt=cr(Gt,e,t,n,r,o),!0;case"mouseover":return Ht=cr(Ht,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return sr.set(i,cr(sr.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,ur.set(i,cr(ur.get(i)||null,e,t,n,r,o)),!0}return!1}function ms(e){var t=dn(e.target);if(t!==null){var n=fn(t);if(n!==null){if(t=n.tag,t===13){if(t=ba(n),t!==null){e.blockedOn=t,ds(e.priority,function(){cs(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function oo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Di(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ci=r,n.target.dispatchEvent(r),Ci=null}else return t=Er(n),t!==null&&Mi(t),e.blockedOn=n,!1;t.shift()}return!0}function hs(e,t,n){oo(e)&&n.delete(t)}function Zf(){zi=!1,Yt!==null&&oo(Yt)&&(Yt=null),Gt!==null&&oo(Gt)&&(Gt=null),Ht!==null&&oo(Ht)&&(Ht=null),sr.forEach(hs),ur.forEach(hs)}function fr(e,t){e.blockedOn===t&&(e.blockedOn=null,zi||(zi=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,Zf)))}function dr(e){function t(o){return fr(o,e)}if(0<ro.length){fr(ro[0],e);for(var n=1;n<ro.length;n++){var r=ro[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Yt!==null&&fr(Yt,e),Gt!==null&&fr(Gt,e),Ht!==null&&fr(Ht,e),sr.forEach(t),ur.forEach(t),n=0;n<$t.length;n++)r=$t[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<$t.length&&(n=$t[0],n.blockedOn===null);)ms(n),n.blockedOn===null&&$t.shift()}var Nn=ee.ReactCurrentBatchConfig,io=!0;function qf(e,t,n,r){var o=me,i=Nn.transition;Nn.transition=null;try{me=1,Oi(e,t,n,r)}finally{me=o,Nn.transition=i}}function Jf(e,t,n,r){var o=me,i=Nn.transition;Nn.transition=null;try{me=4,Oi(e,t,n,r)}finally{me=o,Nn.transition=i}}function Oi(e,t,n,r){if(io){var o=Di(e,t,n,r);if(o===null)tl(e,t,r,lo,n),ps(e,r);else if(Kf(o,e,t,n,r))r.stopPropagation();else if(ps(e,r),t&4&&-1<Xf.indexOf(e)){for(;o!==null;){var i=Er(o);if(i!==null&&us(i),i=Di(e,t,n,r),i===null&&tl(e,t,r,lo,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else tl(e,t,r,null,n)}}var lo=null;function Di(e,t,n,r){if(lo=null,e=ji(r),e=dn(e),e!==null)if(t=fn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=ba(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return lo=e,null}function As(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ff()){case Pi:return 1;case is:return 4;case Jr:case Qf:return 16;case ls:return 536870912;default:return 16}default:return 16}}var Wt=null,Fi=null,ao=null;function gs(){if(ao)return ao;var e,t=Fi,n=t.length,r,o="value"in Wt?Wt.value:Wt.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===o[i-r];r++);return ao=o.slice(e,1<r?1-r:void 0)}function so(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function uo(){return!0}function vs(){return!1}function rt(e){function t(n,r,o,i,s){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=s,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(n=e[c],this[c]=n?n(i):i[c]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?uo:vs,this.isPropagationStopped=vs,this}return h(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=uo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=uo)},persist:function(){},isPersistent:uo}),t}var Rn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Qi=rt(Rn),pr=h({},Rn,{view:0,detail:0}),bf=rt(pr),Ui,Vi,mr,co=h({},pr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gi,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==mr&&(mr&&e.type==="mousemove"?(Ui=e.screenX-mr.screenX,Vi=e.screenY-mr.screenY):Vi=Ui=0,mr=e),Ui)},movementY:function(e){return"movementY"in e?e.movementY:Vi}}),ys=rt(co),ed=h({},co,{dataTransfer:0}),td=rt(ed),nd=h({},pr,{relatedTarget:0}),Yi=rt(nd),rd=h({},Rn,{animationName:0,elapsedTime:0,pseudoElement:0}),od=rt(rd),id=h({},Rn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ld=rt(id),ad=h({},Rn,{data:0}),ws=rt(ad),sd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ud={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},cd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function fd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=cd[e])?!!t[e]:!1}function Gi(){return fd}var dd=h({},pr,{key:function(e){if(e.key){var t=sd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=so(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ud[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gi,charCode:function(e){return e.type==="keypress"?so(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?so(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),pd=rt(dd),md=h({},co,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xs=rt(md),hd=h({},pr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gi}),Ad=rt(hd),gd=h({},Rn,{propertyName:0,elapsedTime:0,pseudoElement:0}),vd=rt(gd),yd=h({},co,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),wd=rt(yd),xd=[9,13,27,32],Hi=S&&"CompositionEvent"in window,hr=null;S&&"documentMode"in document&&(hr=document.documentMode);var kd=S&&"TextEvent"in window&&!hr,ks=S&&(!Hi||hr&&8<hr&&11>=hr),Ss=" ",Es=!1;function Cs(e,t){switch(e){case"keyup":return xd.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function js(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var In=!1;function Sd(e,t){switch(e){case"compositionend":return js(t);case"keypress":return t.which!==32?null:(Es=!0,Ss);case"textInput":return e=t.data,e===Ss&&Es?null:e;default:return null}}function Ed(e,t){if(In)return e==="compositionend"||!Hi&&Cs(e,t)?(e=gs(),ao=Fi=Wt=null,In=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ks&&t.locale!=="ko"?null:t.data;default:return null}}var Cd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ts(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Cd[e.type]:t==="textarea"}function Ns(e,t,n,r){Xa(r),t=Ao(t,"onChange"),0<t.length&&(n=new Qi("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Ar=null,gr=null;function jd(e){$s(e,0)}function fo(e){var t=Mn(e);if(za(t))return e}function Td(e,t){if(e==="change")return t}var Rs=!1;if(S){var $i;if(S){var Wi="oninput"in document;if(!Wi){var Is=document.createElement("div");Is.setAttribute("oninput","return;"),Wi=typeof Is.oninput=="function"}$i=Wi}else $i=!1;Rs=$i&&(!document.documentMode||9<document.documentMode)}function Ps(){Ar&&(Ar.detachEvent("onpropertychange",_s),gr=Ar=null)}function _s(e){if(e.propertyName==="value"&&fo(gr)){var t=[];Ns(t,gr,e,ji(e)),Ja(jd,t)}}function Nd(e,t,n){e==="focusin"?(Ps(),Ar=t,gr=n,Ar.attachEvent("onpropertychange",_s)):e==="focusout"&&Ps()}function Rd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return fo(gr)}function Id(e,t){if(e==="click")return fo(t)}function Pd(e,t){if(e==="input"||e==="change")return fo(t)}function _d(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var At=typeof Object.is=="function"?Object.is:_d;function vr(e,t){if(At(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!N.call(t,o)||!At(e[o],t[o]))return!1}return!0}function Ls(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Bs(e,t){var n=Ls(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ls(n)}}function Ms(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ms(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function zs(){for(var e=window,t=Xr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Xr(e.document)}return t}function Xi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Ld(e){var t=zs(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Ms(n.ownerDocument.documentElement,n)){if(r!==null&&Xi(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Bs(n,i);var s=Bs(n,r);o&&s&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Bd=S&&"documentMode"in document&&11>=document.documentMode,Pn=null,Ki=null,yr=null,Zi=!1;function Os(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Zi||Pn==null||Pn!==Xr(r)||(r=Pn,"selectionStart"in r&&Xi(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),yr&&vr(yr,r)||(yr=r,r=Ao(Ki,"onSelect"),0<r.length&&(t=new Qi("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Pn)))}function po(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var _n={animationend:po("Animation","AnimationEnd"),animationiteration:po("Animation","AnimationIteration"),animationstart:po("Animation","AnimationStart"),transitionend:po("Transition","TransitionEnd")},qi={},Ds={};S&&(Ds=document.createElement("div").style,"AnimationEvent"in window||(delete _n.animationend.animation,delete _n.animationiteration.animation,delete _n.animationstart.animation),"TransitionEvent"in window||delete _n.transitionend.transition);function mo(e){if(qi[e])return qi[e];if(!_n[e])return e;var t=_n[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ds)return qi[e]=t[n];return e}var Fs=mo("animationend"),Qs=mo("animationiteration"),Us=mo("animationstart"),Vs=mo("transitionend"),Ys=new Map,Gs="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Xt(e,t){Ys.set(e,t),p(t,[e])}for(var Ji=0;Ji<Gs.length;Ji++){var bi=Gs[Ji],Md=bi.toLowerCase(),zd=bi[0].toUpperCase()+bi.slice(1);Xt(Md,"on"+zd)}Xt(Fs,"onAnimationEnd"),Xt(Qs,"onAnimationIteration"),Xt(Us,"onAnimationStart"),Xt("dblclick","onDoubleClick"),Xt("focusin","onFocus"),Xt("focusout","onBlur"),Xt(Vs,"onTransitionEnd"),x("onMouseEnter",["mouseout","mouseover"]),x("onMouseLeave",["mouseout","mouseover"]),x("onPointerEnter",["pointerout","pointerover"]),x("onPointerLeave",["pointerout","pointerover"]),p("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),p("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),p("onBeforeInput",["compositionend","keypress","textInput","paste"]),p("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),p("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),p("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Od=new Set("cancel close invalid load scroll toggle".split(" ").concat(wr));function Hs(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Mf(r,t,void 0,e),e.currentTarget=null}function $s(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var s=r.length-1;0<=s;s--){var c=r[s],m=c.instance,w=c.currentTarget;if(c=c.listener,m!==i&&o.isPropagationStopped())break e;Hs(o,c,w),i=m}else for(s=0;s<r.length;s++){if(c=r[s],m=c.instance,w=c.currentTarget,c=c.listener,m!==i&&o.isPropagationStopped())break e;Hs(o,c,w),i=m}}}if(qr)throw e=Ii,qr=!1,Ii=null,e}function ve(e,t){var n=t[al];n===void 0&&(n=t[al]=new Set);var r=e+"__bubble";n.has(r)||(Ws(t,e,2,!1),n.add(r))}function el(e,t,n){var r=0;t&&(r|=4),Ws(n,e,r,t)}var ho="_reactListening"+Math.random().toString(36).slice(2);function xr(e){if(!e[ho]){e[ho]=!0,d.forEach(function(n){n!=="selectionchange"&&(Od.has(n)||el(n,!1,e),el(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ho]||(t[ho]=!0,el("selectionchange",!1,t))}}function Ws(e,t,n,r){switch(As(t)){case 1:var o=qf;break;case 4:o=Jf;break;default:o=Oi}n=o.bind(null,t,n,e),o=void 0,!Ri||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function tl(e,t,n,r,o){var i=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===o||c.nodeType===8&&c.parentNode===o)break;if(s===4)for(s=r.return;s!==null;){var m=s.tag;if((m===3||m===4)&&(m=s.stateNode.containerInfo,m===o||m.nodeType===8&&m.parentNode===o))return;s=s.return}for(;c!==null;){if(s=dn(c),s===null)return;if(m=s.tag,m===5||m===6){r=i=s;continue e}c=c.parentNode}}r=r.return}Ja(function(){var w=i,T=ji(n),R=[];e:{var C=Ys.get(e);if(C!==void 0){var D=Qi,U=e;switch(e){case"keypress":if(so(n)===0)break e;case"keydown":case"keyup":D=pd;break;case"focusin":U="focus",D=Yi;break;case"focusout":U="blur",D=Yi;break;case"beforeblur":case"afterblur":D=Yi;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":D=ys;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":D=td;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":D=Ad;break;case Fs:case Qs:case Us:D=od;break;case Vs:D=vd;break;case"scroll":D=bf;break;case"wheel":D=wd;break;case"copy":case"cut":case"paste":D=ld;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":D=xs}var V=(t&4)!==0,je=!V&&e==="scroll",v=V?C!==null?C+"Capture":null:C;V=[];for(var g=w,y;g!==null;){y=g;var P=y.stateNode;if(y.tag===5&&P!==null&&(y=P,v!==null&&(P=rr(g,v),P!=null&&V.push(kr(g,P,y)))),je)break;g=g.return}0<V.length&&(C=new D(C,U,null,n,T),R.push({event:C,listeners:V}))}}if((t&7)===0){e:{if(C=e==="mouseover"||e==="pointerover",D=e==="mouseout"||e==="pointerout",C&&n!==Ci&&(U=n.relatedTarget||n.fromElement)&&(dn(U)||U[Bt]))break e;if((D||C)&&(C=T.window===T?T:(C=T.ownerDocument)?C.defaultView||C.parentWindow:window,D?(U=n.relatedTarget||n.toElement,D=w,U=U?dn(U):null,U!==null&&(je=fn(U),U!==je||U.tag!==5&&U.tag!==6)&&(U=null)):(D=null,U=w),D!==U)){if(V=ys,P="onMouseLeave",v="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(V=xs,P="onPointerLeave",v="onPointerEnter",g="pointer"),je=D==null?C:Mn(D),y=U==null?C:Mn(U),C=new V(P,g+"leave",D,n,T),C.target=je,C.relatedTarget=y,P=null,dn(T)===w&&(V=new V(v,g+"enter",U,n,T),V.target=y,V.relatedTarget=je,P=V),je=P,D&&U)t:{for(V=D,v=U,g=0,y=V;y;y=Ln(y))g++;for(y=0,P=v;P;P=Ln(P))y++;for(;0<g-y;)V=Ln(V),g--;for(;0<y-g;)v=Ln(v),y--;for(;g--;){if(V===v||v!==null&&V===v.alternate)break t;V=Ln(V),v=Ln(v)}V=null}else V=null;D!==null&&Xs(R,C,D,V,!1),U!==null&&je!==null&&Xs(R,je,U,V,!0)}}e:{if(C=w?Mn(w):window,D=C.nodeName&&C.nodeName.toLowerCase(),D==="select"||D==="input"&&C.type==="file")var G=Td;else if(Ts(C))if(Rs)G=Pd;else{G=Rd;var K=Nd}else(D=C.nodeName)&&D.toLowerCase()==="input"&&(C.type==="checkbox"||C.type==="radio")&&(G=Id);if(G&&(G=G(e,w))){Ns(R,G,n,T);break e}K&&K(e,C,w),e==="focusout"&&(K=C._wrapperState)&&K.controlled&&C.type==="number"&&wi(C,"number",C.value)}switch(K=w?Mn(w):window,e){case"focusin":(Ts(K)||K.contentEditable==="true")&&(Pn=K,Ki=w,yr=null);break;case"focusout":yr=Ki=Pn=null;break;case"mousedown":Zi=!0;break;case"contextmenu":case"mouseup":case"dragend":Zi=!1,Os(R,n,T);break;case"selectionchange":if(Bd)break;case"keydown":case"keyup":Os(R,n,T)}var Z;if(Hi)e:{switch(e){case"compositionstart":var J="onCompositionStart";break e;case"compositionend":J="onCompositionEnd";break e;case"compositionupdate":J="onCompositionUpdate";break e}J=void 0}else In?Cs(e,n)&&(J="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(J="onCompositionStart");J&&(ks&&n.locale!=="ko"&&(In||J!=="onCompositionStart"?J==="onCompositionEnd"&&In&&(Z=gs()):(Wt=T,Fi="value"in Wt?Wt.value:Wt.textContent,In=!0)),K=Ao(w,J),0<K.length&&(J=new ws(J,e,null,n,T),R.push({event:J,listeners:K}),Z?J.data=Z:(Z=js(n),Z!==null&&(J.data=Z)))),(Z=kd?Sd(e,n):Ed(e,n))&&(w=Ao(w,"onBeforeInput"),0<w.length&&(T=new ws("onBeforeInput","beforeinput",null,n,T),R.push({event:T,listeners:w}),T.data=Z))}$s(R,t)})}function kr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ao(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=rr(e,n),i!=null&&r.unshift(kr(e,i,o)),i=rr(e,t),i!=null&&r.push(kr(e,i,o))),e=e.return}return r}function Ln(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Xs(e,t,n,r,o){for(var i=t._reactName,s=[];n!==null&&n!==r;){var c=n,m=c.alternate,w=c.stateNode;if(m!==null&&m===r)break;c.tag===5&&w!==null&&(c=w,o?(m=rr(n,i),m!=null&&s.unshift(kr(n,m,c))):o||(m=rr(n,i),m!=null&&s.push(kr(n,m,c)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var Dd=/\r\n?/g,Fd=/\u0000|\uFFFD/g;function Ks(e){return(typeof e=="string"?e:""+e).replace(Dd,`
`).replace(Fd,"")}function go(e,t,n){if(t=Ks(t),Ks(e)!==t&&n)throw Error(u(425))}function vo(){}var nl=null,rl=null;function ol(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var il=typeof setTimeout=="function"?setTimeout:void 0,Qd=typeof clearTimeout=="function"?clearTimeout:void 0,Zs=typeof Promise=="function"?Promise:void 0,Ud=typeof queueMicrotask=="function"?queueMicrotask:typeof Zs<"u"?function(e){return Zs.resolve(null).then(e).catch(Vd)}:il;function Vd(e){setTimeout(function(){throw e})}function ll(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),dr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);dr(t)}function Kt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function qs(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Bn=Math.random().toString(36).slice(2),jt="__reactFiber$"+Bn,Sr="__reactProps$"+Bn,Bt="__reactContainer$"+Bn,al="__reactEvents$"+Bn,Yd="__reactListeners$"+Bn,Gd="__reactHandles$"+Bn;function dn(e){var t=e[jt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Bt]||n[jt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=qs(e);e!==null;){if(n=e[jt])return n;e=qs(e)}return t}e=n,n=e.parentNode}return null}function Er(e){return e=e[jt]||e[Bt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Mn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(u(33))}function yo(e){return e[Sr]||null}var sl=[],zn=-1;function Zt(e){return{current:e}}function ye(e){0>zn||(e.current=sl[zn],sl[zn]=null,zn--)}function ge(e,t){zn++,sl[zn]=e.current,e.current=t}var qt={},De=Zt(qt),We=Zt(!1),pn=qt;function On(e,t){var n=e.type.contextTypes;if(!n)return qt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Xe(e){return e=e.childContextTypes,e!=null}function wo(){ye(We),ye(De)}function Js(e,t,n){if(De.current!==qt)throw Error(u(168));ge(De,t),ge(We,n)}function bs(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(u(108,he(e)||"Unknown",o));return h({},n,r)}function xo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||qt,pn=De.current,ge(De,e),ge(We,We.current),!0}function eu(e,t,n){var r=e.stateNode;if(!r)throw Error(u(169));n?(e=bs(e,t,pn),r.__reactInternalMemoizedMergedChildContext=e,ye(We),ye(De),ge(De,e)):ye(We),ge(We,n)}var Mt=null,ko=!1,ul=!1;function tu(e){Mt===null?Mt=[e]:Mt.push(e)}function Hd(e){ko=!0,tu(e)}function Jt(){if(!ul&&Mt!==null){ul=!0;var e=0,t=me;try{var n=Mt;for(me=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Mt=null,ko=!1}catch(o){throw Mt!==null&&(Mt=Mt.slice(e+1)),rs(Pi,Jt),o}finally{me=t,ul=!1}}return null}var Dn=[],Fn=0,So=null,Eo=0,st=[],ut=0,mn=null,zt=1,Ot="";function hn(e,t){Dn[Fn++]=Eo,Dn[Fn++]=So,So=e,Eo=t}function nu(e,t,n){st[ut++]=zt,st[ut++]=Ot,st[ut++]=mn,mn=e;var r=zt;e=Ot;var o=32-ht(r)-1;r&=~(1<<o),n+=1;var i=32-ht(t)+o;if(30<i){var s=o-o%5;i=(r&(1<<s)-1).toString(32),r>>=s,o-=s,zt=1<<32-ht(t)+o|n<<o|r,Ot=i+e}else zt=1<<i|n<<o|r,Ot=e}function cl(e){e.return!==null&&(hn(e,1),nu(e,1,0))}function fl(e){for(;e===So;)So=Dn[--Fn],Dn[Fn]=null,Eo=Dn[--Fn],Dn[Fn]=null;for(;e===mn;)mn=st[--ut],st[ut]=null,Ot=st[--ut],st[ut]=null,zt=st[--ut],st[ut]=null}var ot=null,it=null,we=!1,gt=null;function ru(e,t){var n=pt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ou(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ot=e,it=Kt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ot=e,it=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=mn!==null?{id:zt,overflow:Ot}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=pt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ot=e,it=null,!0):!1;default:return!1}}function dl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function pl(e){if(we){var t=it;if(t){var n=t;if(!ou(e,t)){if(dl(e))throw Error(u(418));t=Kt(n.nextSibling);var r=ot;t&&ou(e,t)?ru(r,n):(e.flags=e.flags&-4097|2,we=!1,ot=e)}}else{if(dl(e))throw Error(u(418));e.flags=e.flags&-4097|2,we=!1,ot=e}}}function iu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ot=e}function Co(e){if(e!==ot)return!1;if(!we)return iu(e),we=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ol(e.type,e.memoizedProps)),t&&(t=it)){if(dl(e))throw lu(),Error(u(418));for(;t;)ru(e,t),t=Kt(t.nextSibling)}if(iu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){it=Kt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}it=null}}else it=ot?Kt(e.stateNode.nextSibling):null;return!0}function lu(){for(var e=it;e;)e=Kt(e.nextSibling)}function Qn(){it=ot=null,we=!1}function ml(e){gt===null?gt=[e]:gt.push(e)}var $d=ee.ReactCurrentBatchConfig;function vt(e,t){if(e&&e.defaultProps){t=h({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var jo=Zt(null),To=null,Un=null,hl=null;function Al(){hl=Un=To=null}function gl(e){var t=jo.current;ye(jo),e._currentValue=t}function vl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Vn(e,t){To=e,hl=Un=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Ke=!0),e.firstContext=null)}function ct(e){var t=e._currentValue;if(hl!==e)if(e={context:e,memoizedValue:t,next:null},Un===null){if(To===null)throw Error(u(308));Un=e,To.dependencies={lanes:0,firstContext:e}}else Un=Un.next=e;return t}var An=null;function yl(e){An===null?An=[e]:An.push(e)}function au(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,yl(t)):(n.next=o.next,o.next=n),t.interleaved=n,Dt(e,r)}function Dt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var bt=!1;function wl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function su(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ft(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function en(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(ie&2)!==0){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Dt(e,n)}return o=r.interleaved,o===null?(t.next=t,yl(r)):(t.next=o.next,o.next=t),r.interleaved=t,Dt(e,n)}function No(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Bi(e,n)}}function uu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=s:i=i.next=s,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ro(e,t,n,r){var o=e.updateQueue;bt=!1;var i=o.firstBaseUpdate,s=o.lastBaseUpdate,c=o.shared.pending;if(c!==null){o.shared.pending=null;var m=c,w=m.next;m.next=null,s===null?i=w:s.next=w,s=m;var T=e.alternate;T!==null&&(T=T.updateQueue,c=T.lastBaseUpdate,c!==s&&(c===null?T.firstBaseUpdate=w:c.next=w,T.lastBaseUpdate=m))}if(i!==null){var R=o.baseState;s=0,T=w=m=null,c=i;do{var C=c.lane,D=c.eventTime;if((r&C)===C){T!==null&&(T=T.next={eventTime:D,lane:0,tag:c.tag,payload:c.payload,callback:c.callback,next:null});e:{var U=e,V=c;switch(C=t,D=n,V.tag){case 1:if(U=V.payload,typeof U=="function"){R=U.call(D,R,C);break e}R=U;break e;case 3:U.flags=U.flags&-65537|128;case 0:if(U=V.payload,C=typeof U=="function"?U.call(D,R,C):U,C==null)break e;R=h({},R,C);break e;case 2:bt=!0}}c.callback!==null&&c.lane!==0&&(e.flags|=64,C=o.effects,C===null?o.effects=[c]:C.push(c))}else D={eventTime:D,lane:C,tag:c.tag,payload:c.payload,callback:c.callback,next:null},T===null?(w=T=D,m=R):T=T.next=D,s|=C;if(c=c.next,c===null){if(c=o.shared.pending,c===null)break;C=c,c=C.next,C.next=null,o.lastBaseUpdate=C,o.shared.pending=null}}while(!0);if(T===null&&(m=R),o.baseState=m,o.firstBaseUpdate=w,o.lastBaseUpdate=T,t=o.shared.interleaved,t!==null){o=t;do s|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);yn|=s,e.lanes=s,e.memoizedState=R}}function cu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(u(191,o));o.call(r)}}}var fu=new l.Component().refs;function xl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:h({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Io={isMounted:function(e){return(e=e._reactInternals)?fn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ge(),o=on(e),i=Ft(r,o);i.payload=t,n!=null&&(i.callback=n),t=en(e,i,o),t!==null&&(xt(t,e,o,r),No(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ge(),o=on(e),i=Ft(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=en(e,i,o),t!==null&&(xt(t,e,o,r),No(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ge(),r=on(e),o=Ft(n,r);o.tag=2,t!=null&&(o.callback=t),t=en(e,o,r),t!==null&&(xt(t,e,r,n),No(t,e,r))}};function du(e,t,n,r,o,i,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,s):t.prototype&&t.prototype.isPureReactComponent?!vr(n,r)||!vr(o,i):!0}function pu(e,t,n){var r=!1,o=qt,i=t.contextType;return typeof i=="object"&&i!==null?i=ct(i):(o=Xe(t)?pn:De.current,r=t.contextTypes,i=(r=r!=null)?On(e,o):qt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Io,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function mu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Io.enqueueReplaceState(t,t.state,null)}function kl(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=fu,wl(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=ct(i):(i=Xe(t)?pn:De.current,o.context=On(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(xl(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Io.enqueueReplaceState(o,o.state,null),Ro(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Cr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(u(309));var r=n.stateNode}if(!r)throw Error(u(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(s){var c=o.refs;c===fu&&(c=o.refs={}),s===null?delete c[i]:c[i]=s},t._stringRef=i,t)}if(typeof e!="string")throw Error(u(284));if(!n._owner)throw Error(u(290,e))}return e}function Po(e,t){throw e=Object.prototype.toString.call(t),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function hu(e){var t=e._init;return t(e._payload)}function Au(e){function t(v,g){if(e){var y=v.deletions;y===null?(v.deletions=[g],v.flags|=16):y.push(g)}}function n(v,g){if(!e)return null;for(;g!==null;)t(v,g),g=g.sibling;return null}function r(v,g){for(v=new Map;g!==null;)g.key!==null?v.set(g.key,g):v.set(g.index,g),g=g.sibling;return v}function o(v,g){return v=an(v,g),v.index=0,v.sibling=null,v}function i(v,g,y){return v.index=y,e?(y=v.alternate,y!==null?(y=y.index,y<g?(v.flags|=2,g):y):(v.flags|=2,g)):(v.flags|=1048576,g)}function s(v){return e&&v.alternate===null&&(v.flags|=2),v}function c(v,g,y,P){return g===null||g.tag!==6?(g=ia(y,v.mode,P),g.return=v,g):(g=o(g,y),g.return=v,g)}function m(v,g,y,P){var G=y.type;return G===b?T(v,g,y.props.children,P,y.key):g!==null&&(g.elementType===G||typeof G=="object"&&G!==null&&G.$$typeof===He&&hu(G)===g.type)?(P=o(g,y.props),P.ref=Cr(v,g,y),P.return=v,P):(P=Zo(y.type,y.key,y.props,null,v.mode,P),P.ref=Cr(v,g,y),P.return=v,P)}function w(v,g,y,P){return g===null||g.tag!==4||g.stateNode.containerInfo!==y.containerInfo||g.stateNode.implementation!==y.implementation?(g=la(y,v.mode,P),g.return=v,g):(g=o(g,y.children||[]),g.return=v,g)}function T(v,g,y,P,G){return g===null||g.tag!==7?(g=Sn(y,v.mode,P,G),g.return=v,g):(g=o(g,y),g.return=v,g)}function R(v,g,y){if(typeof g=="string"&&g!==""||typeof g=="number")return g=ia(""+g,v.mode,y),g.return=v,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case I:return y=Zo(g.type,g.key,g.props,null,v.mode,y),y.ref=Cr(v,null,g),y.return=v,y;case ne:return g=la(g,v.mode,y),g.return=v,g;case He:var P=g._init;return R(v,P(g._payload),y)}if(er(g)||q(g))return g=Sn(g,v.mode,y,null),g.return=v,g;Po(v,g)}return null}function C(v,g,y,P){var G=g!==null?g.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return G!==null?null:c(v,g,""+y,P);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case I:return y.key===G?m(v,g,y,P):null;case ne:return y.key===G?w(v,g,y,P):null;case He:return G=y._init,C(v,g,G(y._payload),P)}if(er(y)||q(y))return G!==null?null:T(v,g,y,P,null);Po(v,y)}return null}function D(v,g,y,P,G){if(typeof P=="string"&&P!==""||typeof P=="number")return v=v.get(y)||null,c(g,v,""+P,G);if(typeof P=="object"&&P!==null){switch(P.$$typeof){case I:return v=v.get(P.key===null?y:P.key)||null,m(g,v,P,G);case ne:return v=v.get(P.key===null?y:P.key)||null,w(g,v,P,G);case He:var K=P._init;return D(v,g,y,K(P._payload),G)}if(er(P)||q(P))return v=v.get(y)||null,T(g,v,P,G,null);Po(g,P)}return null}function U(v,g,y,P){for(var G=null,K=null,Z=g,J=g=0,Le=null;Z!==null&&J<y.length;J++){Z.index>J?(Le=Z,Z=null):Le=Z.sibling;var le=C(v,Z,y[J],P);if(le===null){Z===null&&(Z=Le);break}e&&Z&&le.alternate===null&&t(v,Z),g=i(le,g,J),K===null?G=le:K.sibling=le,K=le,Z=Le}if(J===y.length)return n(v,Z),we&&hn(v,J),G;if(Z===null){for(;J<y.length;J++)Z=R(v,y[J],P),Z!==null&&(g=i(Z,g,J),K===null?G=Z:K.sibling=Z,K=Z);return we&&hn(v,J),G}for(Z=r(v,Z);J<y.length;J++)Le=D(Z,v,J,y[J],P),Le!==null&&(e&&Le.alternate!==null&&Z.delete(Le.key===null?J:Le.key),g=i(Le,g,J),K===null?G=Le:K.sibling=Le,K=Le);return e&&Z.forEach(function(sn){return t(v,sn)}),we&&hn(v,J),G}function V(v,g,y,P){var G=q(y);if(typeof G!="function")throw Error(u(150));if(y=G.call(y),y==null)throw Error(u(151));for(var K=G=null,Z=g,J=g=0,Le=null,le=y.next();Z!==null&&!le.done;J++,le=y.next()){Z.index>J?(Le=Z,Z=null):Le=Z.sibling;var sn=C(v,Z,le.value,P);if(sn===null){Z===null&&(Z=Le);break}e&&Z&&sn.alternate===null&&t(v,Z),g=i(sn,g,J),K===null?G=sn:K.sibling=sn,K=sn,Z=Le}if(le.done)return n(v,Z),we&&hn(v,J),G;if(Z===null){for(;!le.done;J++,le=y.next())le=R(v,le.value,P),le!==null&&(g=i(le,g,J),K===null?G=le:K.sibling=le,K=le);return we&&hn(v,J),G}for(Z=r(v,Z);!le.done;J++,le=y.next())le=D(Z,v,J,le.value,P),le!==null&&(e&&le.alternate!==null&&Z.delete(le.key===null?J:le.key),g=i(le,g,J),K===null?G=le:K.sibling=le,K=le);return e&&Z.forEach(function(Cp){return t(v,Cp)}),we&&hn(v,J),G}function je(v,g,y,P){if(typeof y=="object"&&y!==null&&y.type===b&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case I:e:{for(var G=y.key,K=g;K!==null;){if(K.key===G){if(G=y.type,G===b){if(K.tag===7){n(v,K.sibling),g=o(K,y.props.children),g.return=v,v=g;break e}}else if(K.elementType===G||typeof G=="object"&&G!==null&&G.$$typeof===He&&hu(G)===K.type){n(v,K.sibling),g=o(K,y.props),g.ref=Cr(v,K,y),g.return=v,v=g;break e}n(v,K);break}else t(v,K);K=K.sibling}y.type===b?(g=Sn(y.props.children,v.mode,P,y.key),g.return=v,v=g):(P=Zo(y.type,y.key,y.props,null,v.mode,P),P.ref=Cr(v,g,y),P.return=v,v=P)}return s(v);case ne:e:{for(K=y.key;g!==null;){if(g.key===K)if(g.tag===4&&g.stateNode.containerInfo===y.containerInfo&&g.stateNode.implementation===y.implementation){n(v,g.sibling),g=o(g,y.children||[]),g.return=v,v=g;break e}else{n(v,g);break}else t(v,g);g=g.sibling}g=la(y,v.mode,P),g.return=v,v=g}return s(v);case He:return K=y._init,je(v,g,K(y._payload),P)}if(er(y))return U(v,g,y,P);if(q(y))return V(v,g,y,P);Po(v,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,g!==null&&g.tag===6?(n(v,g.sibling),g=o(g,y),g.return=v,v=g):(n(v,g),g=ia(y,v.mode,P),g.return=v,v=g),s(v)):n(v,g)}return je}var Yn=Au(!0),gu=Au(!1),jr={},Tt=Zt(jr),Tr=Zt(jr),Nr=Zt(jr);function gn(e){if(e===jr)throw Error(u(174));return e}function Sl(e,t){switch(ge(Nr,t),ge(Tr,e),ge(Tt,jr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ki(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ki(t,e)}ye(Tt),ge(Tt,t)}function Gn(){ye(Tt),ye(Tr),ye(Nr)}function vu(e){gn(Nr.current);var t=gn(Tt.current),n=ki(t,e.type);t!==n&&(ge(Tr,e),ge(Tt,n))}function El(e){Tr.current===e&&(ye(Tt),ye(Tr))}var xe=Zt(0);function _o(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Cl=[];function jl(){for(var e=0;e<Cl.length;e++)Cl[e]._workInProgressVersionPrimary=null;Cl.length=0}var Lo=ee.ReactCurrentDispatcher,Tl=ee.ReactCurrentBatchConfig,vn=0,ke=null,Re=null,Pe=null,Bo=!1,Rr=!1,Ir=0,Wd=0;function Fe(){throw Error(u(321))}function Nl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!At(e[n],t[n]))return!1;return!0}function Rl(e,t,n,r,o,i){if(vn=i,ke=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Lo.current=e===null||e.memoizedState===null?qd:Jd,e=n(r,o),Rr){i=0;do{if(Rr=!1,Ir=0,25<=i)throw Error(u(301));i+=1,Pe=Re=null,t.updateQueue=null,Lo.current=bd,e=n(r,o)}while(Rr)}if(Lo.current=Oo,t=Re!==null&&Re.next!==null,vn=0,Pe=Re=ke=null,Bo=!1,t)throw Error(u(300));return e}function Il(){var e=Ir!==0;return Ir=0,e}function Nt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Pe===null?ke.memoizedState=Pe=e:Pe=Pe.next=e,Pe}function ft(){if(Re===null){var e=ke.alternate;e=e!==null?e.memoizedState:null}else e=Re.next;var t=Pe===null?ke.memoizedState:Pe.next;if(t!==null)Pe=t,Re=e;else{if(e===null)throw Error(u(310));Re=e,e={memoizedState:Re.memoizedState,baseState:Re.baseState,baseQueue:Re.baseQueue,queue:Re.queue,next:null},Pe===null?ke.memoizedState=Pe=e:Pe=Pe.next=e}return Pe}function Pr(e,t){return typeof t=="function"?t(e):t}function Pl(e){var t=ft(),n=t.queue;if(n===null)throw Error(u(311));n.lastRenderedReducer=e;var r=Re,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var s=o.next;o.next=i.next,i.next=s}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var c=s=null,m=null,w=i;do{var T=w.lane;if((vn&T)===T)m!==null&&(m=m.next={lane:0,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null}),r=w.hasEagerState?w.eagerState:e(r,w.action);else{var R={lane:T,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null};m===null?(c=m=R,s=r):m=m.next=R,ke.lanes|=T,yn|=T}w=w.next}while(w!==null&&w!==i);m===null?s=r:m.next=c,At(r,t.memoizedState)||(Ke=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=m,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,ke.lanes|=i,yn|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function _l(e){var t=ft(),n=t.queue;if(n===null)throw Error(u(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var s=o=o.next;do i=e(i,s.action),s=s.next;while(s!==o);At(i,t.memoizedState)||(Ke=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function yu(){}function wu(e,t){var n=ke,r=ft(),o=t(),i=!At(r.memoizedState,o);if(i&&(r.memoizedState=o,Ke=!0),r=r.queue,Ll(Su.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||Pe!==null&&Pe.memoizedState.tag&1){if(n.flags|=2048,_r(9,ku.bind(null,n,r,o,t),void 0,null),_e===null)throw Error(u(349));(vn&30)!==0||xu(n,t,o)}return o}function xu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ke.updateQueue,t===null?(t={lastEffect:null,stores:null},ke.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function ku(e,t,n,r){t.value=n,t.getSnapshot=r,Eu(t)&&Cu(e)}function Su(e,t,n){return n(function(){Eu(t)&&Cu(e)})}function Eu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!At(e,n)}catch{return!0}}function Cu(e){var t=Dt(e,1);t!==null&&xt(t,e,1,-1)}function ju(e){var t=Nt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Pr,lastRenderedState:e},t.queue=e,e=e.dispatch=Zd.bind(null,ke,e),[t.memoizedState,e]}function _r(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ke.updateQueue,t===null?(t={lastEffect:null,stores:null},ke.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Tu(){return ft().memoizedState}function Mo(e,t,n,r){var o=Nt();ke.flags|=e,o.memoizedState=_r(1|t,n,void 0,r===void 0?null:r)}function zo(e,t,n,r){var o=ft();r=r===void 0?null:r;var i=void 0;if(Re!==null){var s=Re.memoizedState;if(i=s.destroy,r!==null&&Nl(r,s.deps)){o.memoizedState=_r(t,n,i,r);return}}ke.flags|=e,o.memoizedState=_r(1|t,n,i,r)}function Nu(e,t){return Mo(8390656,8,e,t)}function Ll(e,t){return zo(2048,8,e,t)}function Ru(e,t){return zo(4,2,e,t)}function Iu(e,t){return zo(4,4,e,t)}function Pu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function _u(e,t,n){return n=n!=null?n.concat([e]):null,zo(4,4,Pu.bind(null,t,e),n)}function Bl(){}function Lu(e,t){var n=ft();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Nl(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Bu(e,t){var n=ft();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Nl(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Mu(e,t,n){return(vn&21)===0?(e.baseState&&(e.baseState=!1,Ke=!0),e.memoizedState=n):(At(n,t)||(n=as(),ke.lanes|=n,yn|=n,e.baseState=!0),t)}function Xd(e,t){var n=me;me=n!==0&&4>n?n:4,e(!0);var r=Tl.transition;Tl.transition={};try{e(!1),t()}finally{me=n,Tl.transition=r}}function zu(){return ft().memoizedState}function Kd(e,t,n){var r=on(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ou(e))Du(t,n);else if(n=au(e,t,n,r),n!==null){var o=Ge();xt(n,e,r,o),Fu(n,t,r)}}function Zd(e,t,n){var r=on(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ou(e))Du(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var s=t.lastRenderedState,c=i(s,n);if(o.hasEagerState=!0,o.eagerState=c,At(c,s)){var m=t.interleaved;m===null?(o.next=o,yl(t)):(o.next=m.next,m.next=o),t.interleaved=o;return}}catch{}finally{}n=au(e,t,o,r),n!==null&&(o=Ge(),xt(n,e,r,o),Fu(n,t,r))}}function Ou(e){var t=e.alternate;return e===ke||t!==null&&t===ke}function Du(e,t){Rr=Bo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Fu(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Bi(e,n)}}var Oo={readContext:ct,useCallback:Fe,useContext:Fe,useEffect:Fe,useImperativeHandle:Fe,useInsertionEffect:Fe,useLayoutEffect:Fe,useMemo:Fe,useReducer:Fe,useRef:Fe,useState:Fe,useDebugValue:Fe,useDeferredValue:Fe,useTransition:Fe,useMutableSource:Fe,useSyncExternalStore:Fe,useId:Fe,unstable_isNewReconciler:!1},qd={readContext:ct,useCallback:function(e,t){return Nt().memoizedState=[e,t===void 0?null:t],e},useContext:ct,useEffect:Nu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Mo(4194308,4,Pu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Mo(4194308,4,e,t)},useInsertionEffect:function(e,t){return Mo(4,2,e,t)},useMemo:function(e,t){var n=Nt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Nt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Kd.bind(null,ke,e),[r.memoizedState,e]},useRef:function(e){var t=Nt();return e={current:e},t.memoizedState=e},useState:ju,useDebugValue:Bl,useDeferredValue:function(e){return Nt().memoizedState=e},useTransition:function(){var e=ju(!1),t=e[0];return e=Xd.bind(null,e[1]),Nt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ke,o=Nt();if(we){if(n===void 0)throw Error(u(407));n=n()}else{if(n=t(),_e===null)throw Error(u(349));(vn&30)!==0||xu(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,Nu(Su.bind(null,r,i,e),[e]),r.flags|=2048,_r(9,ku.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Nt(),t=_e.identifierPrefix;if(we){var n=Ot,r=zt;n=(r&~(1<<32-ht(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ir++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Wd++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Jd={readContext:ct,useCallback:Lu,useContext:ct,useEffect:Ll,useImperativeHandle:_u,useInsertionEffect:Ru,useLayoutEffect:Iu,useMemo:Bu,useReducer:Pl,useRef:Tu,useState:function(){return Pl(Pr)},useDebugValue:Bl,useDeferredValue:function(e){var t=ft();return Mu(t,Re.memoizedState,e)},useTransition:function(){var e=Pl(Pr)[0],t=ft().memoizedState;return[e,t]},useMutableSource:yu,useSyncExternalStore:wu,useId:zu,unstable_isNewReconciler:!1},bd={readContext:ct,useCallback:Lu,useContext:ct,useEffect:Ll,useImperativeHandle:_u,useInsertionEffect:Ru,useLayoutEffect:Iu,useMemo:Bu,useReducer:_l,useRef:Tu,useState:function(){return _l(Pr)},useDebugValue:Bl,useDeferredValue:function(e){var t=ft();return Re===null?t.memoizedState=e:Mu(t,Re.memoizedState,e)},useTransition:function(){var e=_l(Pr)[0],t=ft().memoizedState;return[e,t]},useMutableSource:yu,useSyncExternalStore:wu,useId:zu,unstable_isNewReconciler:!1};function Hn(e,t){try{var n="",r=t;do n+=Ae(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function Ml(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function zl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var ep=typeof WeakMap=="function"?WeakMap:Map;function Qu(e,t,n){n=Ft(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Go||(Go=!0,ql=r),zl(e,t)},n}function Uu(e,t,n){n=Ft(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){zl(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){zl(e,t),typeof r!="function"&&(nn===null?nn=new Set([this]):nn.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function Vu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new ep;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=mp.bind(null,e,t,n),t.then(e,e))}function Yu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Gu(e,t,n,r,o){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ft(-1,1),t.tag=2,en(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var tp=ee.ReactCurrentOwner,Ke=!1;function Ye(e,t,n,r){t.child=e===null?gu(t,null,n,r):Yn(t,e.child,n,r)}function Hu(e,t,n,r,o){n=n.render;var i=t.ref;return Vn(t,o),r=Rl(e,t,n,r,i,o),n=Il(),e!==null&&!Ke?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Qt(e,t,o)):(we&&n&&cl(t),t.flags|=1,Ye(e,t,r,o),t.child)}function $u(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!oa(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Wu(e,t,i,r,o)):(e=Zo(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,(e.lanes&o)===0){var s=i.memoizedProps;if(n=n.compare,n=n!==null?n:vr,n(s,r)&&e.ref===t.ref)return Qt(e,t,o)}return t.flags|=1,e=an(i,r),e.ref=t.ref,e.return=t,t.child=e}function Wu(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(vr(i,r)&&e.ref===t.ref)if(Ke=!1,t.pendingProps=r=i,(e.lanes&o)!==0)(e.flags&131072)!==0&&(Ke=!0);else return t.lanes=e.lanes,Qt(e,t,o)}return Ol(e,t,n,r,o)}function Xu(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ge(Wn,lt),lt|=n;else{if((n&1073741824)===0)return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ge(Wn,lt),lt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,ge(Wn,lt),lt|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,ge(Wn,lt),lt|=r;return Ye(e,t,o,n),t.child}function Ku(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ol(e,t,n,r,o){var i=Xe(n)?pn:De.current;return i=On(t,i),Vn(t,o),n=Rl(e,t,n,r,i,o),r=Il(),e!==null&&!Ke?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Qt(e,t,o)):(we&&r&&cl(t),t.flags|=1,Ye(e,t,n,o),t.child)}function Zu(e,t,n,r,o){if(Xe(n)){var i=!0;xo(t)}else i=!1;if(Vn(t,o),t.stateNode===null)Fo(e,t),pu(t,n,r),kl(t,n,r,o),r=!0;else if(e===null){var s=t.stateNode,c=t.memoizedProps;s.props=c;var m=s.context,w=n.contextType;typeof w=="object"&&w!==null?w=ct(w):(w=Xe(n)?pn:De.current,w=On(t,w));var T=n.getDerivedStateFromProps,R=typeof T=="function"||typeof s.getSnapshotBeforeUpdate=="function";R||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(c!==r||m!==w)&&mu(t,s,r,w),bt=!1;var C=t.memoizedState;s.state=C,Ro(t,r,s,o),m=t.memoizedState,c!==r||C!==m||We.current||bt?(typeof T=="function"&&(xl(t,n,T,r),m=t.memoizedState),(c=bt||du(t,n,c,r,C,m,w))?(R||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=m),s.props=r,s.state=m,s.context=w,r=c):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,su(e,t),c=t.memoizedProps,w=t.type===t.elementType?c:vt(t.type,c),s.props=w,R=t.pendingProps,C=s.context,m=n.contextType,typeof m=="object"&&m!==null?m=ct(m):(m=Xe(n)?pn:De.current,m=On(t,m));var D=n.getDerivedStateFromProps;(T=typeof D=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(c!==R||C!==m)&&mu(t,s,r,m),bt=!1,C=t.memoizedState,s.state=C,Ro(t,r,s,o);var U=t.memoizedState;c!==R||C!==U||We.current||bt?(typeof D=="function"&&(xl(t,n,D,r),U=t.memoizedState),(w=bt||du(t,n,w,r,C,U,m)||!1)?(T||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,U,m),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,U,m)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||c===e.memoizedProps&&C===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&C===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=U),s.props=r,s.state=U,s.context=m,r=w):(typeof s.componentDidUpdate!="function"||c===e.memoizedProps&&C===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&C===e.memoizedState||(t.flags|=1024),r=!1)}return Dl(e,t,n,r,i,o)}function Dl(e,t,n,r,o,i){Ku(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return o&&eu(t,n,!1),Qt(e,t,i);r=t.stateNode,tp.current=t;var c=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=Yn(t,e.child,null,i),t.child=Yn(t,null,c,i)):Ye(e,t,c,i),t.memoizedState=r.state,o&&eu(t,n,!0),t.child}function qu(e){var t=e.stateNode;t.pendingContext?Js(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Js(e,t.context,!1),Sl(e,t.containerInfo)}function Ju(e,t,n,r,o){return Qn(),ml(o),t.flags|=256,Ye(e,t,n,r),t.child}var Fl={dehydrated:null,treeContext:null,retryLane:0};function Ql(e){return{baseLanes:e,cachePool:null,transitions:null}}function bu(e,t,n){var r=t.pendingProps,o=xe.current,i=!1,s=(t.flags&128)!==0,c;if((c=s)||(c=e!==null&&e.memoizedState===null?!1:(o&2)!==0),c?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),ge(xe,o&1),e===null)return pl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(s=r.children,e=r.fallback,i?(r=t.mode,i=t.child,s={mode:"hidden",children:s},(r&1)===0&&i!==null?(i.childLanes=0,i.pendingProps=s):i=qo(s,r,0,null),e=Sn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Ql(n),t.memoizedState=Fl,e):Ul(t,s));if(o=e.memoizedState,o!==null&&(c=o.dehydrated,c!==null))return np(e,t,s,r,c,o,n);if(i){i=r.fallback,s=t.mode,o=e.child,c=o.sibling;var m={mode:"hidden",children:r.children};return(s&1)===0&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=m,t.deletions=null):(r=an(o,m),r.subtreeFlags=o.subtreeFlags&14680064),c!==null?i=an(c,i):(i=Sn(i,s,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,s=e.child.memoizedState,s=s===null?Ql(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},i.memoizedState=s,i.childLanes=e.childLanes&~n,t.memoizedState=Fl,r}return i=e.child,e=i.sibling,r=an(i,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ul(e,t){return t=qo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Do(e,t,n,r){return r!==null&&ml(r),Yn(t,e.child,null,n),e=Ul(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function np(e,t,n,r,o,i,s){if(n)return t.flags&256?(t.flags&=-257,r=Ml(Error(u(422))),Do(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=qo({mode:"visible",children:r.children},o,0,null),i=Sn(i,o,s,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,(t.mode&1)!==0&&Yn(t,e.child,null,s),t.child.memoizedState=Ql(s),t.memoizedState=Fl,i);if((t.mode&1)===0)return Do(e,t,s,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var c=r.dgst;return r=c,i=Error(u(419)),r=Ml(i,r,void 0),Do(e,t,s,r)}if(c=(s&e.childLanes)!==0,Ke||c){if(r=_e,r!==null){switch(s&-s){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=(o&(r.suspendedLanes|s))!==0?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,Dt(e,o),xt(r,e,o,-1))}return ra(),r=Ml(Error(u(421))),Do(e,t,s,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=hp.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,it=Kt(o.nextSibling),ot=t,we=!0,gt=null,e!==null&&(st[ut++]=zt,st[ut++]=Ot,st[ut++]=mn,zt=e.id,Ot=e.overflow,mn=t),t=Ul(t,r.children),t.flags|=4096,t)}function ec(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),vl(e.return,t,n)}function Vl(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function tc(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(Ye(e,t,r.children,n),r=xe.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ec(e,n,t);else if(e.tag===19)ec(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ge(xe,r),(t.mode&1)===0)t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&_o(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Vl(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&_o(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Vl(t,!0,n,null,i);break;case"together":Vl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Fo(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Qt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),yn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(u(153));if(t.child!==null){for(e=t.child,n=an(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=an(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function rp(e,t,n){switch(t.tag){case 3:qu(t),Qn();break;case 5:vu(t);break;case 1:Xe(t.type)&&xo(t);break;case 4:Sl(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;ge(jo,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ge(xe,xe.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?bu(e,t,n):(ge(xe,xe.current&1),e=Qt(e,t,n),e!==null?e.sibling:null);ge(xe,xe.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return tc(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),ge(xe,xe.current),r)break;return null;case 22:case 23:return t.lanes=0,Xu(e,t,n)}return Qt(e,t,n)}var nc,Yl,rc,oc;nc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Yl=function(){},rc=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,gn(Tt.current);var i=null;switch(n){case"input":o=vi(e,o),r=vi(e,r),i=[];break;case"select":o=h({},o,{value:void 0}),r=h({},r,{value:void 0}),i=[];break;case"textarea":o=xi(e,o),r=xi(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=vo)}Si(n,r);var s;n=null;for(w in o)if(!r.hasOwnProperty(w)&&o.hasOwnProperty(w)&&o[w]!=null)if(w==="style"){var c=o[w];for(s in c)c.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else w!=="dangerouslySetInnerHTML"&&w!=="children"&&w!=="suppressContentEditableWarning"&&w!=="suppressHydrationWarning"&&w!=="autoFocus"&&(A.hasOwnProperty(w)?i||(i=[]):(i=i||[]).push(w,null));for(w in r){var m=r[w];if(c=o?.[w],r.hasOwnProperty(w)&&m!==c&&(m!=null||c!=null))if(w==="style")if(c){for(s in c)!c.hasOwnProperty(s)||m&&m.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in m)m.hasOwnProperty(s)&&c[s]!==m[s]&&(n||(n={}),n[s]=m[s])}else n||(i||(i=[]),i.push(w,n)),n=m;else w==="dangerouslySetInnerHTML"?(m=m?m.__html:void 0,c=c?c.__html:void 0,m!=null&&c!==m&&(i=i||[]).push(w,m)):w==="children"?typeof m!="string"&&typeof m!="number"||(i=i||[]).push(w,""+m):w!=="suppressContentEditableWarning"&&w!=="suppressHydrationWarning"&&(A.hasOwnProperty(w)?(m!=null&&w==="onScroll"&&ve("scroll",e),i||c===m||(i=[])):(i=i||[]).push(w,m))}n&&(i=i||[]).push("style",n);var w=i;(t.updateQueue=w)&&(t.flags|=4)}},oc=function(e,t,n,r){n!==r&&(t.flags|=4)};function Lr(e,t){if(!we)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Qe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function op(e,t,n){var r=t.pendingProps;switch(fl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qe(t),null;case 1:return Xe(t.type)&&wo(),Qe(t),null;case 3:return r=t.stateNode,Gn(),ye(We),ye(De),jl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Co(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,gt!==null&&(ea(gt),gt=null))),Yl(e,t),Qe(t),null;case 5:El(t);var o=gn(Nr.current);if(n=t.type,e!==null&&t.stateNode!=null)rc(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(u(166));return Qe(t),null}if(e=gn(Tt.current),Co(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[jt]=t,r[Sr]=i,e=(t.mode&1)!==0,n){case"dialog":ve("cancel",r),ve("close",r);break;case"iframe":case"object":case"embed":ve("load",r);break;case"video":case"audio":for(o=0;o<wr.length;o++)ve(wr[o],r);break;case"source":ve("error",r);break;case"img":case"image":case"link":ve("error",r),ve("load",r);break;case"details":ve("toggle",r);break;case"input":Oa(r,i),ve("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},ve("invalid",r);break;case"textarea":Qa(r,i),ve("invalid",r)}Si(n,i),o=null;for(var s in i)if(i.hasOwnProperty(s)){var c=i[s];s==="children"?typeof c=="string"?r.textContent!==c&&(i.suppressHydrationWarning!==!0&&go(r.textContent,c,e),o=["children",c]):typeof c=="number"&&r.textContent!==""+c&&(i.suppressHydrationWarning!==!0&&go(r.textContent,c,e),o=["children",""+c]):A.hasOwnProperty(s)&&c!=null&&s==="onScroll"&&ve("scroll",r)}switch(n){case"input":Wr(r),Fa(r,i,!0);break;case"textarea":Wr(r),Va(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=vo)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ya(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[jt]=t,e[Sr]=r,nc(e,t,!1,!1),t.stateNode=e;e:{switch(s=Ei(n,r),n){case"dialog":ve("cancel",e),ve("close",e),o=r;break;case"iframe":case"object":case"embed":ve("load",e),o=r;break;case"video":case"audio":for(o=0;o<wr.length;o++)ve(wr[o],e);o=r;break;case"source":ve("error",e),o=r;break;case"img":case"image":case"link":ve("error",e),ve("load",e),o=r;break;case"details":ve("toggle",e),o=r;break;case"input":Oa(e,r),o=vi(e,r),ve("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=h({},r,{value:void 0}),ve("invalid",e);break;case"textarea":Qa(e,r),o=xi(e,r),ve("invalid",e);break;default:o=r}Si(n,o),c=o;for(i in c)if(c.hasOwnProperty(i)){var m=c[i];i==="style"?$a(e,m):i==="dangerouslySetInnerHTML"?(m=m?m.__html:void 0,m!=null&&Ga(e,m)):i==="children"?typeof m=="string"?(n!=="textarea"||m!=="")&&tr(e,m):typeof m=="number"&&tr(e,""+m):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(A.hasOwnProperty(i)?m!=null&&i==="onScroll"&&ve("scroll",e):m!=null&&X(e,i,m,s))}switch(n){case"input":Wr(e),Fa(e,r,!1);break;case"textarea":Wr(e),Va(e);break;case"option":r.value!=null&&e.setAttribute("value",""+fe(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Cn(e,!!r.multiple,i,!1):r.defaultValue!=null&&Cn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=vo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Qe(t),null;case 6:if(e&&t.stateNode!=null)oc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(u(166));if(n=gn(Nr.current),gn(Tt.current),Co(t)){if(r=t.stateNode,n=t.memoizedProps,r[jt]=t,(i=r.nodeValue!==n)&&(e=ot,e!==null))switch(e.tag){case 3:go(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&go(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[jt]=t,t.stateNode=r}return Qe(t),null;case 13:if(ye(xe),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(we&&it!==null&&(t.mode&1)!==0&&(t.flags&128)===0)lu(),Qn(),t.flags|=98560,i=!1;else if(i=Co(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(u(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(u(317));i[jt]=t}else Qn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Qe(t),i=!1}else gt!==null&&(ea(gt),gt=null),i=!0;if(!i)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(xe.current&1)!==0?Ie===0&&(Ie=3):ra())),t.updateQueue!==null&&(t.flags|=4),Qe(t),null);case 4:return Gn(),Yl(e,t),e===null&&xr(t.stateNode.containerInfo),Qe(t),null;case 10:return gl(t.type._context),Qe(t),null;case 17:return Xe(t.type)&&wo(),Qe(t),null;case 19:if(ye(xe),i=t.memoizedState,i===null)return Qe(t),null;if(r=(t.flags&128)!==0,s=i.rendering,s===null)if(r)Lr(i,!1);else{if(Ie!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(s=_o(e),s!==null){for(t.flags|=128,Lr(i,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,s=i.alternate,s===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=s.childLanes,i.lanes=s.lanes,i.child=s.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=s.memoizedProps,i.memoizedState=s.memoizedState,i.updateQueue=s.updateQueue,i.type=s.type,e=s.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ge(xe,xe.current&1|2),t.child}e=e.sibling}i.tail!==null&&Ce()>Xn&&(t.flags|=128,r=!0,Lr(i,!1),t.lanes=4194304)}else{if(!r)if(e=_o(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Lr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!we)return Qe(t),null}else 2*Ce()-i.renderingStartTime>Xn&&n!==1073741824&&(t.flags|=128,r=!0,Lr(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(n=i.last,n!==null?n.sibling=s:t.child=s,i.last=s)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Ce(),t.sibling=null,n=xe.current,ge(xe,r?n&1|2:n&1),t):(Qe(t),null);case 22:case 23:return na(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(lt&1073741824)!==0&&(Qe(t),t.subtreeFlags&6&&(t.flags|=8192)):Qe(t),null;case 24:return null;case 25:return null}throw Error(u(156,t.tag))}function ip(e,t){switch(fl(t),t.tag){case 1:return Xe(t.type)&&wo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Gn(),ye(We),ye(De),jl(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return El(t),null;case 13:if(ye(xe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(u(340));Qn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ye(xe),null;case 4:return Gn(),null;case 10:return gl(t.type._context),null;case 22:case 23:return na(),null;case 24:return null;default:return null}}var Qo=!1,Ue=!1,lp=typeof WeakSet=="function"?WeakSet:Set,Q=null;function $n(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ee(e,t,r)}else n.current=null}function Gl(e,t,n){try{n()}catch(r){Ee(e,t,r)}}var ic=!1;function ap(e,t){if(nl=io,e=zs(),Xi(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var s=0,c=-1,m=-1,w=0,T=0,R=e,C=null;t:for(;;){for(var D;R!==n||o!==0&&R.nodeType!==3||(c=s+o),R!==i||r!==0&&R.nodeType!==3||(m=s+r),R.nodeType===3&&(s+=R.nodeValue.length),(D=R.firstChild)!==null;)C=R,R=D;for(;;){if(R===e)break t;if(C===n&&++w===o&&(c=s),C===i&&++T===r&&(m=s),(D=R.nextSibling)!==null)break;R=C,C=R.parentNode}R=D}n=c===-1||m===-1?null:{start:c,end:m}}else n=null}n=n||{start:0,end:0}}else n=null;for(rl={focusedElem:e,selectionRange:n},io=!1,Q=t;Q!==null;)if(t=Q,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Q=e;else for(;Q!==null;){t=Q;try{var U=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(U!==null){var V=U.memoizedProps,je=U.memoizedState,v=t.stateNode,g=v.getSnapshotBeforeUpdate(t.elementType===t.type?V:vt(t.type,V),je);v.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(u(163))}}catch(P){Ee(t,t.return,P)}if(e=t.sibling,e!==null){e.return=t.return,Q=e;break}Q=t.return}return U=ic,ic=!1,U}function Br(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Gl(t,n,i)}o=o.next}while(o!==r)}}function Uo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Hl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function lc(e){var t=e.alternate;t!==null&&(e.alternate=null,lc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[jt],delete t[Sr],delete t[al],delete t[Yd],delete t[Gd])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ac(e){return e.tag===5||e.tag===3||e.tag===4}function sc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ac(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function $l(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=vo));else if(r!==4&&(e=e.child,e!==null))for($l(e,t,n),e=e.sibling;e!==null;)$l(e,t,n),e=e.sibling}function Wl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Wl(e,t,n),e=e.sibling;e!==null;)Wl(e,t,n),e=e.sibling}var Me=null,yt=!1;function tn(e,t,n){for(n=n.child;n!==null;)uc(e,t,n),n=n.sibling}function uc(e,t,n){if(Ct&&typeof Ct.onCommitFiberUnmount=="function")try{Ct.onCommitFiberUnmount(br,n)}catch{}switch(n.tag){case 5:Ue||$n(n,t);case 6:var r=Me,o=yt;Me=null,tn(e,t,n),Me=r,yt=o,Me!==null&&(yt?(e=Me,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Me.removeChild(n.stateNode));break;case 18:Me!==null&&(yt?(e=Me,n=n.stateNode,e.nodeType===8?ll(e.parentNode,n):e.nodeType===1&&ll(e,n),dr(e)):ll(Me,n.stateNode));break;case 4:r=Me,o=yt,Me=n.stateNode.containerInfo,yt=!0,tn(e,t,n),Me=r,yt=o;break;case 0:case 11:case 14:case 15:if(!Ue&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,s=i.destroy;i=i.tag,s!==void 0&&((i&2)!==0||(i&4)!==0)&&Gl(n,t,s),o=o.next}while(o!==r)}tn(e,t,n);break;case 1:if(!Ue&&($n(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(c){Ee(n,t,c)}tn(e,t,n);break;case 21:tn(e,t,n);break;case 22:n.mode&1?(Ue=(r=Ue)||n.memoizedState!==null,tn(e,t,n),Ue=r):tn(e,t,n);break;default:tn(e,t,n)}}function cc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new lp),t.forEach(function(r){var o=Ap.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function wt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,s=t,c=s;e:for(;c!==null;){switch(c.tag){case 5:Me=c.stateNode,yt=!1;break e;case 3:Me=c.stateNode.containerInfo,yt=!0;break e;case 4:Me=c.stateNode.containerInfo,yt=!0;break e}c=c.return}if(Me===null)throw Error(u(160));uc(i,s,o),Me=null,yt=!1;var m=o.alternate;m!==null&&(m.return=null),o.return=null}catch(w){Ee(o,t,w)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)fc(t,e),t=t.sibling}function fc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(wt(t,e),Rt(e),r&4){try{Br(3,e,e.return),Uo(3,e)}catch(V){Ee(e,e.return,V)}try{Br(5,e,e.return)}catch(V){Ee(e,e.return,V)}}break;case 1:wt(t,e),Rt(e),r&512&&n!==null&&$n(n,n.return);break;case 5:if(wt(t,e),Rt(e),r&512&&n!==null&&$n(n,n.return),e.flags&32){var o=e.stateNode;try{tr(o,"")}catch(V){Ee(e,e.return,V)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,s=n!==null?n.memoizedProps:i,c=e.type,m=e.updateQueue;if(e.updateQueue=null,m!==null)try{c==="input"&&i.type==="radio"&&i.name!=null&&Da(o,i),Ei(c,s);var w=Ei(c,i);for(s=0;s<m.length;s+=2){var T=m[s],R=m[s+1];T==="style"?$a(o,R):T==="dangerouslySetInnerHTML"?Ga(o,R):T==="children"?tr(o,R):X(o,T,R,w)}switch(c){case"input":yi(o,i);break;case"textarea":Ua(o,i);break;case"select":var C=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var D=i.value;D!=null?Cn(o,!!i.multiple,D,!1):C!==!!i.multiple&&(i.defaultValue!=null?Cn(o,!!i.multiple,i.defaultValue,!0):Cn(o,!!i.multiple,i.multiple?[]:"",!1))}o[Sr]=i}catch(V){Ee(e,e.return,V)}}break;case 6:if(wt(t,e),Rt(e),r&4){if(e.stateNode===null)throw Error(u(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(V){Ee(e,e.return,V)}}break;case 3:if(wt(t,e),Rt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{dr(t.containerInfo)}catch(V){Ee(e,e.return,V)}break;case 4:wt(t,e),Rt(e);break;case 13:wt(t,e),Rt(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Zl=Ce())),r&4&&cc(e);break;case 22:if(T=n!==null&&n.memoizedState!==null,e.mode&1?(Ue=(w=Ue)||T,wt(t,e),Ue=w):wt(t,e),Rt(e),r&8192){if(w=e.memoizedState!==null,(e.stateNode.isHidden=w)&&!T&&(e.mode&1)!==0)for(Q=e,T=e.child;T!==null;){for(R=Q=T;Q!==null;){switch(C=Q,D=C.child,C.tag){case 0:case 11:case 14:case 15:Br(4,C,C.return);break;case 1:$n(C,C.return);var U=C.stateNode;if(typeof U.componentWillUnmount=="function"){r=C,n=C.return;try{t=r,U.props=t.memoizedProps,U.state=t.memoizedState,U.componentWillUnmount()}catch(V){Ee(r,n,V)}}break;case 5:$n(C,C.return);break;case 22:if(C.memoizedState!==null){mc(R);continue}}D!==null?(D.return=C,Q=D):mc(R)}T=T.sibling}e:for(T=null,R=e;;){if(R.tag===5){if(T===null){T=R;try{o=R.stateNode,w?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(c=R.stateNode,m=R.memoizedProps.style,s=m!=null&&m.hasOwnProperty("display")?m.display:null,c.style.display=Ha("display",s))}catch(V){Ee(e,e.return,V)}}}else if(R.tag===6){if(T===null)try{R.stateNode.nodeValue=w?"":R.memoizedProps}catch(V){Ee(e,e.return,V)}}else if((R.tag!==22&&R.tag!==23||R.memoizedState===null||R===e)&&R.child!==null){R.child.return=R,R=R.child;continue}if(R===e)break e;for(;R.sibling===null;){if(R.return===null||R.return===e)break e;T===R&&(T=null),R=R.return}T===R&&(T=null),R.sibling.return=R.return,R=R.sibling}}break;case 19:wt(t,e),Rt(e),r&4&&cc(e);break;case 21:break;default:wt(t,e),Rt(e)}}function Rt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(ac(n)){var r=n;break e}n=n.return}throw Error(u(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(tr(o,""),r.flags&=-33);var i=sc(e);Wl(e,i,o);break;case 3:case 4:var s=r.stateNode.containerInfo,c=sc(e);$l(e,c,s);break;default:throw Error(u(161))}}catch(m){Ee(e,e.return,m)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function sp(e,t,n){Q=e,dc(e)}function dc(e,t,n){for(var r=(e.mode&1)!==0;Q!==null;){var o=Q,i=o.child;if(o.tag===22&&r){var s=o.memoizedState!==null||Qo;if(!s){var c=o.alternate,m=c!==null&&c.memoizedState!==null||Ue;c=Qo;var w=Ue;if(Qo=s,(Ue=m)&&!w)for(Q=o;Q!==null;)s=Q,m=s.child,s.tag===22&&s.memoizedState!==null?hc(o):m!==null?(m.return=s,Q=m):hc(o);for(;i!==null;)Q=i,dc(i),i=i.sibling;Q=o,Qo=c,Ue=w}pc(e)}else(o.subtreeFlags&8772)!==0&&i!==null?(i.return=o,Q=i):pc(e)}}function pc(e){for(;Q!==null;){var t=Q;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Ue||Uo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ue)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:vt(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&cu(t,i,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}cu(t,s,n)}break;case 5:var c=t.stateNode;if(n===null&&t.flags&4){n=c;var m=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":m.autoFocus&&n.focus();break;case"img":m.src&&(n.src=m.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var w=t.alternate;if(w!==null){var T=w.memoizedState;if(T!==null){var R=T.dehydrated;R!==null&&dr(R)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(u(163))}Ue||t.flags&512&&Hl(t)}catch(C){Ee(t,t.return,C)}}if(t===e){Q=null;break}if(n=t.sibling,n!==null){n.return=t.return,Q=n;break}Q=t.return}}function mc(e){for(;Q!==null;){var t=Q;if(t===e){Q=null;break}var n=t.sibling;if(n!==null){n.return=t.return,Q=n;break}Q=t.return}}function hc(e){for(;Q!==null;){var t=Q;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Uo(4,t)}catch(m){Ee(t,n,m)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(m){Ee(t,o,m)}}var i=t.return;try{Hl(t)}catch(m){Ee(t,i,m)}break;case 5:var s=t.return;try{Hl(t)}catch(m){Ee(t,s,m)}}}catch(m){Ee(t,t.return,m)}if(t===e){Q=null;break}var c=t.sibling;if(c!==null){c.return=t.return,Q=c;break}Q=t.return}}var up=Math.ceil,Vo=ee.ReactCurrentDispatcher,Xl=ee.ReactCurrentOwner,dt=ee.ReactCurrentBatchConfig,ie=0,_e=null,Te=null,ze=0,lt=0,Wn=Zt(0),Ie=0,Mr=null,yn=0,Yo=0,Kl=0,zr=null,Ze=null,Zl=0,Xn=1/0,Ut=null,Go=!1,ql=null,nn=null,Ho=!1,rn=null,$o=0,Or=0,Jl=null,Wo=-1,Xo=0;function Ge(){return(ie&6)!==0?Ce():Wo!==-1?Wo:Wo=Ce()}function on(e){return(e.mode&1)===0?1:(ie&2)!==0&&ze!==0?ze&-ze:$d.transition!==null?(Xo===0&&(Xo=as()),Xo):(e=me,e!==0||(e=window.event,e=e===void 0?16:As(e.type)),e)}function xt(e,t,n,r){if(50<Or)throw Or=0,Jl=null,Error(u(185));ar(e,n,r),((ie&2)===0||e!==_e)&&(e===_e&&((ie&2)===0&&(Yo|=n),Ie===4&&ln(e,ze)),qe(e,r),n===1&&ie===0&&(t.mode&1)===0&&(Xn=Ce()+500,ko&&Jt()))}function qe(e,t){var n=e.callbackNode;$f(e,t);var r=no(e,e===_e?ze:0);if(r===0)n!==null&&os(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&os(n),t===1)e.tag===0?Hd(gc.bind(null,e)):tu(gc.bind(null,e)),Ud(function(){(ie&6)===0&&Jt()}),n=null;else{switch(ss(r)){case 1:n=Pi;break;case 4:n=is;break;case 16:n=Jr;break;case 536870912:n=ls;break;default:n=Jr}n=Cc(n,Ac.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Ac(e,t){if(Wo=-1,Xo=0,(ie&6)!==0)throw Error(u(327));var n=e.callbackNode;if(Kn()&&e.callbackNode!==n)return null;var r=no(e,e===_e?ze:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=Ko(e,r);else{t=r;var o=ie;ie|=2;var i=yc();(_e!==e||ze!==t)&&(Ut=null,Xn=Ce()+500,xn(e,t));do try{dp();break}catch(c){vc(e,c)}while(!0);Al(),Vo.current=i,ie=o,Te!==null?t=0:(_e=null,ze=0,t=Ie)}if(t!==0){if(t===2&&(o=_i(e),o!==0&&(r=o,t=bl(e,o))),t===1)throw n=Mr,xn(e,0),ln(e,r),qe(e,Ce()),n;if(t===6)ln(e,r);else{if(o=e.current.alternate,(r&30)===0&&!cp(o)&&(t=Ko(e,r),t===2&&(i=_i(e),i!==0&&(r=i,t=bl(e,i))),t===1))throw n=Mr,xn(e,0),ln(e,r),qe(e,Ce()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(u(345));case 2:kn(e,Ze,Ut);break;case 3:if(ln(e,r),(r&130023424)===r&&(t=Zl+500-Ce(),10<t)){if(no(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Ge(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=il(kn.bind(null,e,Ze,Ut),t);break}kn(e,Ze,Ut);break;case 4:if(ln(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var s=31-ht(r);i=1<<s,s=t[s],s>o&&(o=s),r&=~i}if(r=o,r=Ce()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*up(r/1960))-r,10<r){e.timeoutHandle=il(kn.bind(null,e,Ze,Ut),r);break}kn(e,Ze,Ut);break;case 5:kn(e,Ze,Ut);break;default:throw Error(u(329))}}}return qe(e,Ce()),e.callbackNode===n?Ac.bind(null,e):null}function bl(e,t){var n=zr;return e.current.memoizedState.isDehydrated&&(xn(e,t).flags|=256),e=Ko(e,t),e!==2&&(t=Ze,Ze=n,t!==null&&ea(t)),e}function ea(e){Ze===null?Ze=e:Ze.push.apply(Ze,e)}function cp(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!At(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ln(e,t){for(t&=~Kl,t&=~Yo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ht(t),r=1<<n;e[n]=-1,t&=~r}}function gc(e){if((ie&6)!==0)throw Error(u(327));Kn();var t=no(e,0);if((t&1)===0)return qe(e,Ce()),null;var n=Ko(e,t);if(e.tag!==0&&n===2){var r=_i(e);r!==0&&(t=r,n=bl(e,r))}if(n===1)throw n=Mr,xn(e,0),ln(e,t),qe(e,Ce()),n;if(n===6)throw Error(u(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,kn(e,Ze,Ut),qe(e,Ce()),null}function ta(e,t){var n=ie;ie|=1;try{return e(t)}finally{ie=n,ie===0&&(Xn=Ce()+500,ko&&Jt())}}function wn(e){rn!==null&&rn.tag===0&&(ie&6)===0&&Kn();var t=ie;ie|=1;var n=dt.transition,r=me;try{if(dt.transition=null,me=1,e)return e()}finally{me=r,dt.transition=n,ie=t,(ie&6)===0&&Jt()}}function na(){lt=Wn.current,ye(Wn)}function xn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Qd(n)),Te!==null)for(n=Te.return;n!==null;){var r=n;switch(fl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&wo();break;case 3:Gn(),ye(We),ye(De),jl();break;case 5:El(r);break;case 4:Gn();break;case 13:ye(xe);break;case 19:ye(xe);break;case 10:gl(r.type._context);break;case 22:case 23:na()}n=n.return}if(_e=e,Te=e=an(e.current,null),ze=lt=t,Ie=0,Mr=null,Kl=Yo=yn=0,Ze=zr=null,An!==null){for(t=0;t<An.length;t++)if(n=An[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var s=i.next;i.next=o,r.next=s}n.pending=r}An=null}return e}function vc(e,t){do{var n=Te;try{if(Al(),Lo.current=Oo,Bo){for(var r=ke.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Bo=!1}if(vn=0,Pe=Re=ke=null,Rr=!1,Ir=0,Xl.current=null,n===null||n.return===null){Ie=1,Mr=t,Te=null;break}e:{var i=e,s=n.return,c=n,m=t;if(t=ze,c.flags|=32768,m!==null&&typeof m=="object"&&typeof m.then=="function"){var w=m,T=c,R=T.tag;if((T.mode&1)===0&&(R===0||R===11||R===15)){var C=T.alternate;C?(T.updateQueue=C.updateQueue,T.memoizedState=C.memoizedState,T.lanes=C.lanes):(T.updateQueue=null,T.memoizedState=null)}var D=Yu(s);if(D!==null){D.flags&=-257,Gu(D,s,c,i,t),D.mode&1&&Vu(i,w,t),t=D,m=w;var U=t.updateQueue;if(U===null){var V=new Set;V.add(m),t.updateQueue=V}else U.add(m);break e}else{if((t&1)===0){Vu(i,w,t),ra();break e}m=Error(u(426))}}else if(we&&c.mode&1){var je=Yu(s);if(je!==null){(je.flags&65536)===0&&(je.flags|=256),Gu(je,s,c,i,t),ml(Hn(m,c));break e}}i=m=Hn(m,c),Ie!==4&&(Ie=2),zr===null?zr=[i]:zr.push(i),i=s;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var v=Qu(i,m,t);uu(i,v);break e;case 1:c=m;var g=i.type,y=i.stateNode;if((i.flags&128)===0&&(typeof g.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(nn===null||!nn.has(y)))){i.flags|=65536,t&=-t,i.lanes|=t;var P=Uu(i,c,t);uu(i,P);break e}}i=i.return}while(i!==null)}xc(n)}catch(G){t=G,Te===n&&n!==null&&(Te=n=n.return);continue}break}while(!0)}function yc(){var e=Vo.current;return Vo.current=Oo,e===null?Oo:e}function ra(){(Ie===0||Ie===3||Ie===2)&&(Ie=4),_e===null||(yn&268435455)===0&&(Yo&268435455)===0||ln(_e,ze)}function Ko(e,t){var n=ie;ie|=2;var r=yc();(_e!==e||ze!==t)&&(Ut=null,xn(e,t));do try{fp();break}catch(o){vc(e,o)}while(!0);if(Al(),ie=n,Vo.current=r,Te!==null)throw Error(u(261));return _e=null,ze=0,Ie}function fp(){for(;Te!==null;)wc(Te)}function dp(){for(;Te!==null&&!Of();)wc(Te)}function wc(e){var t=Ec(e.alternate,e,lt);e.memoizedProps=e.pendingProps,t===null?xc(e):Te=t,Xl.current=null}function xc(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=op(n,t,lt),n!==null){Te=n;return}}else{if(n=ip(n,t),n!==null){n.flags&=32767,Te=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ie=6,Te=null;return}}if(t=t.sibling,t!==null){Te=t;return}Te=t=e}while(t!==null);Ie===0&&(Ie=5)}function kn(e,t,n){var r=me,o=dt.transition;try{dt.transition=null,me=1,pp(e,t,n,r)}finally{dt.transition=o,me=r}return null}function pp(e,t,n,r){do Kn();while(rn!==null);if((ie&6)!==0)throw Error(u(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(u(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(Wf(e,i),e===_e&&(Te=_e=null,ze=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Ho||(Ho=!0,Cc(Jr,function(){return Kn(),null})),i=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||i){i=dt.transition,dt.transition=null;var s=me;me=1;var c=ie;ie|=4,Xl.current=null,ap(e,n),fc(n,e),Ld(rl),io=!!nl,rl=nl=null,e.current=n,sp(n),Df(),ie=c,me=s,dt.transition=i}else e.current=n;if(Ho&&(Ho=!1,rn=e,$o=o),i=e.pendingLanes,i===0&&(nn=null),Uf(n.stateNode),qe(e,Ce()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Go)throw Go=!1,e=ql,ql=null,e;return($o&1)!==0&&e.tag!==0&&Kn(),i=e.pendingLanes,(i&1)!==0?e===Jl?Or++:(Or=0,Jl=e):Or=0,Jt(),null}function Kn(){if(rn!==null){var e=ss($o),t=dt.transition,n=me;try{if(dt.transition=null,me=16>e?16:e,rn===null)var r=!1;else{if(e=rn,rn=null,$o=0,(ie&6)!==0)throw Error(u(331));var o=ie;for(ie|=4,Q=e.current;Q!==null;){var i=Q,s=i.child;if((Q.flags&16)!==0){var c=i.deletions;if(c!==null){for(var m=0;m<c.length;m++){var w=c[m];for(Q=w;Q!==null;){var T=Q;switch(T.tag){case 0:case 11:case 15:Br(8,T,i)}var R=T.child;if(R!==null)R.return=T,Q=R;else for(;Q!==null;){T=Q;var C=T.sibling,D=T.return;if(lc(T),T===w){Q=null;break}if(C!==null){C.return=D,Q=C;break}Q=D}}}var U=i.alternate;if(U!==null){var V=U.child;if(V!==null){U.child=null;do{var je=V.sibling;V.sibling=null,V=je}while(V!==null)}}Q=i}}if((i.subtreeFlags&2064)!==0&&s!==null)s.return=i,Q=s;else e:for(;Q!==null;){if(i=Q,(i.flags&2048)!==0)switch(i.tag){case 0:case 11:case 15:Br(9,i,i.return)}var v=i.sibling;if(v!==null){v.return=i.return,Q=v;break e}Q=i.return}}var g=e.current;for(Q=g;Q!==null;){s=Q;var y=s.child;if((s.subtreeFlags&2064)!==0&&y!==null)y.return=s,Q=y;else e:for(s=g;Q!==null;){if(c=Q,(c.flags&2048)!==0)try{switch(c.tag){case 0:case 11:case 15:Uo(9,c)}}catch(G){Ee(c,c.return,G)}if(c===s){Q=null;break e}var P=c.sibling;if(P!==null){P.return=c.return,Q=P;break e}Q=c.return}}if(ie=o,Jt(),Ct&&typeof Ct.onPostCommitFiberRoot=="function")try{Ct.onPostCommitFiberRoot(br,e)}catch{}r=!0}return r}finally{me=n,dt.transition=t}}return!1}function kc(e,t,n){t=Hn(n,t),t=Qu(e,t,1),e=en(e,t,1),t=Ge(),e!==null&&(ar(e,1,t),qe(e,t))}function Ee(e,t,n){if(e.tag===3)kc(e,e,n);else for(;t!==null;){if(t.tag===3){kc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(nn===null||!nn.has(r))){e=Hn(n,e),e=Uu(t,e,1),t=en(t,e,1),e=Ge(),t!==null&&(ar(t,1,e),qe(t,e));break}}t=t.return}}function mp(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ge(),e.pingedLanes|=e.suspendedLanes&n,_e===e&&(ze&n)===n&&(Ie===4||Ie===3&&(ze&130023424)===ze&&500>Ce()-Zl?xn(e,0):Kl|=n),qe(e,t)}function Sc(e,t){t===0&&((e.mode&1)===0?t=1:(t=to,to<<=1,(to&130023424)===0&&(to=4194304)));var n=Ge();e=Dt(e,t),e!==null&&(ar(e,t,n),qe(e,n))}function hp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Sc(e,n)}function Ap(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(u(314))}r!==null&&r.delete(t),Sc(e,n)}var Ec;Ec=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||We.current)Ke=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return Ke=!1,rp(e,t,n);Ke=(e.flags&131072)!==0}else Ke=!1,we&&(t.flags&1048576)!==0&&nu(t,Eo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Fo(e,t),e=t.pendingProps;var o=On(t,De.current);Vn(t,n),o=Rl(null,t,r,e,o,n);var i=Il();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Xe(r)?(i=!0,xo(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,wl(t),o.updater=Io,t.stateNode=o,o._reactInternals=t,kl(t,r,e,n),t=Dl(null,t,r,!0,i,n)):(t.tag=0,we&&i&&cl(t),Ye(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Fo(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=vp(r),e=vt(r,e),o){case 0:t=Ol(null,t,r,e,n);break e;case 1:t=Zu(null,t,r,e,n);break e;case 11:t=Hu(null,t,r,e,n);break e;case 14:t=$u(null,t,r,vt(r.type,e),n);break e}throw Error(u(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:vt(r,o),Ol(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:vt(r,o),Zu(e,t,r,o,n);case 3:e:{if(qu(t),e===null)throw Error(u(387));r=t.pendingProps,i=t.memoizedState,o=i.element,su(e,t),Ro(t,r,null,n);var s=t.memoizedState;if(r=s.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=Hn(Error(u(423)),t),t=Ju(e,t,r,n,o);break e}else if(r!==o){o=Hn(Error(u(424)),t),t=Ju(e,t,r,n,o);break e}else for(it=Kt(t.stateNode.containerInfo.firstChild),ot=t,we=!0,gt=null,n=gu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Qn(),r===o){t=Qt(e,t,n);break e}Ye(e,t,r,n)}t=t.child}return t;case 5:return vu(t),e===null&&pl(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,s=o.children,ol(r,o)?s=null:i!==null&&ol(r,i)&&(t.flags|=32),Ku(e,t),Ye(e,t,s,n),t.child;case 6:return e===null&&pl(t),null;case 13:return bu(e,t,n);case 4:return Sl(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Yn(t,null,r,n):Ye(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:vt(r,o),Hu(e,t,r,o,n);case 7:return Ye(e,t,t.pendingProps,n),t.child;case 8:return Ye(e,t,t.pendingProps.children,n),t.child;case 12:return Ye(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,s=o.value,ge(jo,r._currentValue),r._currentValue=s,i!==null)if(At(i.value,s)){if(i.children===o.children&&!We.current){t=Qt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var c=i.dependencies;if(c!==null){s=i.child;for(var m=c.firstContext;m!==null;){if(m.context===r){if(i.tag===1){m=Ft(-1,n&-n),m.tag=2;var w=i.updateQueue;if(w!==null){w=w.shared;var T=w.pending;T===null?m.next=m:(m.next=T.next,T.next=m),w.pending=m}}i.lanes|=n,m=i.alternate,m!==null&&(m.lanes|=n),vl(i.return,n,t),c.lanes|=n;break}m=m.next}}else if(i.tag===10)s=i.type===t.type?null:i.child;else if(i.tag===18){if(s=i.return,s===null)throw Error(u(341));s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),vl(s,n,t),s=i.sibling}else s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===t){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}Ye(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Vn(t,n),o=ct(o),r=r(o),t.flags|=1,Ye(e,t,r,n),t.child;case 14:return r=t.type,o=vt(r,t.pendingProps),o=vt(r.type,o),$u(e,t,r,o,n);case 15:return Wu(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:vt(r,o),Fo(e,t),t.tag=1,Xe(r)?(e=!0,xo(t)):e=!1,Vn(t,n),pu(t,r,o),kl(t,r,o,n),Dl(null,t,r,!0,e,n);case 19:return tc(e,t,n);case 22:return Xu(e,t,n)}throw Error(u(156,t.tag))};function Cc(e,t){return rs(e,t)}function gp(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function pt(e,t,n,r){return new gp(e,t,n,r)}function oa(e){return e=e.prototype,!(!e||!e.isReactComponent)}function vp(e){if(typeof e=="function")return oa(e)?1:0;if(e!=null){if(e=e.$$typeof,e===St)return 11;if(e===Et)return 14}return 2}function an(e,t){var n=e.alternate;return n===null?(n=pt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Zo(e,t,n,r,o,i){var s=2;if(r=e,typeof e=="function")oa(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case b:return Sn(n.children,o,i,t);case tt:s=8,o|=8;break;case Vt:return e=pt(12,n,t,o|2),e.elementType=Vt,e.lanes=i,e;case nt:return e=pt(13,n,t,o),e.elementType=nt,e.lanes=i,e;case mt:return e=pt(19,n,t,o),e.elementType=mt,e.lanes=i,e;case Se:return qo(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Lt:s=10;break e;case cn:s=9;break e;case St:s=11;break e;case Et:s=14;break e;case He:s=16,r=null;break e}throw Error(u(130,e==null?e:typeof e,""))}return t=pt(s,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function Sn(e,t,n,r){return e=pt(7,e,r,t),e.lanes=n,e}function qo(e,t,n,r){return e=pt(22,e,r,t),e.elementType=Se,e.lanes=n,e.stateNode={isHidden:!1},e}function ia(e,t,n){return e=pt(6,e,null,t),e.lanes=n,e}function la(e,t,n){return t=pt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function yp(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Li(0),this.expirationTimes=Li(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Li(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function aa(e,t,n,r,o,i,s,c,m){return e=new yp(e,t,n,c,m),t===1?(t=1,i===!0&&(t|=8)):t=0,i=pt(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},wl(i),e}function wp(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ne,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function jc(e){if(!e)return qt;e=e._reactInternals;e:{if(fn(e)!==e||e.tag!==1)throw Error(u(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Xe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(u(171))}if(e.tag===1){var n=e.type;if(Xe(n))return bs(e,n,t)}return t}function Tc(e,t,n,r,o,i,s,c,m){return e=aa(n,r,!0,e,o,i,s,c,m),e.context=jc(null),n=e.current,r=Ge(),o=on(n),i=Ft(r,o),i.callback=t??null,en(n,i,o),e.current.lanes=o,ar(e,o,r),qe(e,r),e}function Jo(e,t,n,r){var o=t.current,i=Ge(),s=on(o);return n=jc(n),t.context===null?t.context=n:t.pendingContext=n,t=Ft(i,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=en(o,t,s),e!==null&&(xt(e,o,s,i),No(e,o,s)),s}function bo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Nc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function sa(e,t){Nc(e,t),(e=e.alternate)&&Nc(e,t)}function xp(){return null}var Rc=typeof reportError=="function"?reportError:function(e){console.error(e)};function ua(e){this._internalRoot=e}ei.prototype.render=ua.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(u(409));Jo(e,t,null,null)},ei.prototype.unmount=ua.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;wn(function(){Jo(null,e,null,null)}),t[Bt]=null}};function ei(e){this._internalRoot=e}ei.prototype.unstable_scheduleHydration=function(e){if(e){var t=fs();e={blockedOn:null,target:e,priority:t};for(var n=0;n<$t.length&&t!==0&&t<$t[n].priority;n++);$t.splice(n,0,e),n===0&&ms(e)}};function ca(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ti(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ic(){}function kp(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var w=bo(s);i.call(w)}}var s=Tc(t,r,e,0,null,!1,!1,"",Ic);return e._reactRootContainer=s,e[Bt]=s.current,xr(e.nodeType===8?e.parentNode:e),wn(),s}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var c=r;r=function(){var w=bo(m);c.call(w)}}var m=aa(e,0,!1,null,null,!1,!1,"",Ic);return e._reactRootContainer=m,e[Bt]=m.current,xr(e.nodeType===8?e.parentNode:e),wn(function(){Jo(t,m,n,r)}),m}function ni(e,t,n,r,o){var i=n._reactRootContainer;if(i){var s=i;if(typeof o=="function"){var c=o;o=function(){var m=bo(s);c.call(m)}}Jo(t,s,e,o)}else s=kp(n,t,e,o,r);return bo(s)}us=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=lr(t.pendingLanes);n!==0&&(Bi(t,n|1),qe(t,Ce()),(ie&6)===0&&(Xn=Ce()+500,Jt()))}break;case 13:wn(function(){var r=Dt(e,1);if(r!==null){var o=Ge();xt(r,e,1,o)}}),sa(e,1)}},Mi=function(e){if(e.tag===13){var t=Dt(e,134217728);if(t!==null){var n=Ge();xt(t,e,134217728,n)}sa(e,134217728)}},cs=function(e){if(e.tag===13){var t=on(e),n=Dt(e,t);if(n!==null){var r=Ge();xt(n,e,t,r)}sa(e,t)}},fs=function(){return me},ds=function(e,t){var n=me;try{return me=e,t()}finally{me=n}},Ti=function(e,t,n){switch(t){case"input":if(yi(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=yo(r);if(!o)throw Error(u(90));za(r),yi(r,o)}}}break;case"textarea":Ua(e,n);break;case"select":t=n.value,t!=null&&Cn(e,!!n.multiple,t,!1)}},Za=ta,qa=wn;var Sp={usingClientEntryPoint:!1,Events:[Er,Mn,yo,Xa,Ka,ta]},Dr={findFiberByHostInstance:dn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Ep={bundleType:Dr.bundleType,version:Dr.version,rendererPackageName:Dr.rendererPackageName,rendererConfig:Dr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ee.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ts(e),e===null?null:e.stateNode},findFiberByHostInstance:Dr.findFiberByHostInstance||xp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ri=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ri.isDisabled&&ri.supportsFiber)try{br=ri.inject(Ep),Ct=ri}catch{}}return Je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Sp,Je.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ca(t))throw Error(u(200));return wp(e,t,null,n)},Je.createRoot=function(e,t){if(!ca(e))throw Error(u(299));var n=!1,r="",o=Rc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=aa(e,1,!1,null,null,n,!1,r,o),e[Bt]=t.current,xr(e.nodeType===8?e.parentNode:e),new ua(t)},Je.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=ts(t),e=e===null?null:e.stateNode,e},Je.flushSync=function(e){return wn(e)},Je.hydrate=function(e,t,n){if(!ti(t))throw Error(u(200));return ni(null,e,t,!0,n)},Je.hydrateRoot=function(e,t,n){if(!ca(e))throw Error(u(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",s=Rc;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=Tc(t,null,e,1,n??null,o,!1,i,s),e[Bt]=t.current,xr(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new ei(t)},Je.render=function(e,t,n){if(!ti(t))throw Error(u(200));return ni(null,e,t,!1,n)},Je.unmountComponentAtNode=function(e){if(!ti(e))throw Error(u(40));return e._reactRootContainer?(wn(function(){ni(null,null,e,!1,function(){e._reactRootContainer=null,e[Bt]=null})}),!0):!1},Je.unstable_batchedUpdates=ta,Je.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ti(n))throw Error(u(200));if(e==null||e._reactInternals===void 0)throw Error(u(38));return ni(e,t,n,!1,r)},Je.version="18.2.0-next-9e3b772b8-20220608",Je}var Fc;function Bp(){if(Fc)return pa.exports;Fc=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(a){console.error(a)}}return l(),pa.exports=Lp(),pa.exports}var Qc;function Mp(){if(Qc)return oi;Qc=1;var l=Bp();return oi.createRoot=l.createRoot,oi.hydrateRoot=l.hydrateRoot,oi}var zp=Mp();const Op=ja(zp);var Qr={exports:{}},En={exports:{}},Dp=En.exports,Uc;function Fp(){return Uc||(Uc=1,(function(){var l,a,u,d,A,p;typeof performance<"u"&&performance!==null&&performance.now?En.exports=function(){return performance.now()}:typeof process<"u"&&process!==null&&process.hrtime?(En.exports=function(){return(l()-A)/1e6},a=process.hrtime,l=function(){var x;return x=a(),x[0]*1e9+x[1]},d=l(),p=process.uptime()*1e9,A=d-p):Date.now?(En.exports=function(){return Date.now()-u},u=Date.now()):(En.exports=function(){return new Date().getTime()-u},u=new Date().getTime())}).call(Dp)),En.exports}var Vc;function Qp(){if(Vc)return Qr.exports;Vc=1;for(var l=Fp(),a=typeof window>"u"?Tp:window,u=["moz","webkit"],d="AnimationFrame",A=a["request"+d],p=a["cancel"+d]||a["cancelRequest"+d],x=0;!A&&x<u.length;x++)A=a[u[x]+"Request"+d],p=a[u[x]+"Cancel"+d]||a[u[x]+"CancelRequest"+d];if(!A||!p){var S=0,N=0,B=[],M=1e3/60;A=function(_){if(B.length===0){var F=l(),Y=Math.max(0,M-(F-S));S=Y+F,setTimeout(function(){var O=B.slice(0);B.length=0;for(var E=0;E<O.length;E++)if(!O[E].cancelled)try{O[E].callback(S)}catch(k){setTimeout(function(){throw k},0)}},Math.round(Y))}return B.push({handle:++N,callback:_,cancelled:!1}),N},p=function(_){for(var F=0;F<B.length;F++)B[F].handle===_&&(B[F].cancelled=!0)}}return Qr.exports=function(_){return A.call(a,_)},Qr.exports.cancel=function(){p.apply(a,arguments)},Qr.exports.polyfill=function(_){_||(_=a),_.requestAnimationFrame=A,_.cancelAnimationFrame=p},Qr.exports}var Up=Qp();const of=ja(Up);var di;(function(l){l[l.MODE_TIMEOUT=0]="MODE_TIMEOUT",l[l.MODE_INTERVAL=1]="MODE_INTERVAL"})(di||(di={}));const un=new Map,si=new Set;let pi=!1,Yc=0;function lf(){return new Date().getTime()}function Vp(l){const{fn:a,args:u}=l;a(...u)}function Yp(){si.size!==0&&(si.forEach(Vp),si.clear())}const Gp=l=>(a,u)=>{const{nextTick:d,ms:A,mode:p}=a;l-d>=0&&(si.add(a),p===di.MODE_TIMEOUT?un.delete(u):un.set(u,{...a,nextTick:d+A}))};function af(){if(un.size===0){pi=!1;return}const l=lf();if(un.forEach(Gp(l)),Yp(),un.size===0){pi=!1;return}of(af)}function Hp({fn:l,ms:a,args:u,mode:d}){if(!l)return null;const A=Yc;return un.set(A,{fn:l,ms:a,nextTick:lf()+a,args:u,mode:d}),pi||(pi=!0,of(af)),Yc+=1,A}function $p(l){l!=null&&un.has(l)&&un.delete(l)}const Wp=(l,a=0,...u)=>Hp({fn:l,ms:a,args:u,mode:di.MODE_TIMEOUT}),Xp=$p,Kp=(l,a,u,d,A)=>{const p=a/A;return-d*p*(p-2)+u},Zp=(()=>{let l,a;return(u,d,A)=>{let p;if(d!=="")try{const S=document.getElementById(d);S!==null&&(p=S)}catch{console.error(`Failed to get element by id ${d}, falling back to default`)}function x(){return p?p.scrollTop:document.documentElement.scrollTop||document.body.scrollTop}return new Promise((S,N)=>{const B=u?document.getElementById(u):document.body;if(!B)return void N(new Error(`Cannot find element: #${u}`));const{offset:M,duration:_,easing:F}=A,Y=Date.now(),O=x(),E=function(k){const H=p?p.getBoundingClientRect().top:0;return k.getBoundingClientRect().top-H+x()}(B)+M;l&&(Xp(l),a()),a=S,function k(){const H=Date.now(),W=1-(Math.max(0,Y+_-H)/_||0),X=F(W,_*W,0,1,_);var ee;ee=(E-O)*X+O,p?p.scrollTop=ee:(document.documentElement.scrollTop=ee,document.body.scrollTop=ee),W<1?l=Wp(k,20):(l=void 0,S(u))}()})}})();function qp(l){const a=`#${l}`;typeof window.history.pushState=="function"?window.history.pushState({},"",a):window.location.hash=a}function Gc(l){return typeof l=="string"?l.replace(/^#/,""):""}/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */const Zn=l=>{var{to:a,target:u,animate:d={},beforeAnimate:A,afterAnimate:p,disableHistory:x=!1,children:S}=l,N=function(Y,O){var E={};for(var k in Y)Object.prototype.hasOwnProperty.call(Y,k)&&O.indexOf(k)<0&&(E[k]=Y[k]);if(Y!=null&&typeof Object.getOwnPropertySymbols=="function"){var H=0;for(k=Object.getOwnPropertySymbols(Y);H<k.length;H++)O.indexOf(k[H])<0&&Object.prototype.propertyIsEnumerable.call(Y,k[H])&&(E[k[H]]=Y[k[H]])}return E}(l,["to","target","animate","beforeAnimate","afterAnimate","disableHistory","children"]);const B=ae.useMemo(()=>Gc(a),[a]),M=ae.useMemo(()=>Gc(u),[u]),_=ae.useMemo(()=>{const{offset:Y=0,duration:O=400,easing:E=Kp}=d;return{offset:Y,duration:O,easing:E}},[d]),F=ae.useCallback(Y=>{A&&A(Y),Y.preventDefault(),Zp(B,M,_).then(O=>{O&&(x||qp(O),p&&p(Y))})},[p,_,A,x,M,B]);return S?Na.createElement("a",Object.assign({href:`#${B}`,onClick:F},N),S):null},Jp=()=>f.jsx("div",{className:"section sticky-nav",children:f.jsx("div",{className:"container",children:f.jsx("div",{className:"navbar-wrapper",children:f.jsxs("div",{className:"links-wrapper",children:[f.jsx(Zn,{to:"#work",children:"WORK"}),f.jsx(Zn,{to:"#about",children:"ABOUT"}),f.jsx(Zn,{to:"#home",className:"home",children:f.jsx("span",{className:"screen-reader-text",children:"Home"})}),f.jsx(Zn,{to:"#promotion",children:"PLAY"}),f.jsx(Zn,{to:"#contact",children:"CONTACT"})]})})})});function bp(l){if(l.sheet)return l.sheet;for(var a=0;a<document.styleSheets.length;a++)if(document.styleSheets[a].ownerNode===l)return document.styleSheets[a]}function e0(l){var a=document.createElement("style");return a.setAttribute("data-emotion",l.key),l.nonce!==void 0&&a.setAttribute("nonce",l.nonce),a.appendChild(document.createTextNode("")),a.setAttribute("data-s",""),a}var t0=function(){function l(u){var d=this;this._insertTag=function(A){var p;d.tags.length===0?d.insertionPoint?p=d.insertionPoint.nextSibling:d.prepend?p=d.container.firstChild:p=d.before:p=d.tags[d.tags.length-1].nextSibling,d.container.insertBefore(A,p),d.tags.push(A)},this.isSpeedy=u.speedy===void 0?!0:u.speedy,this.tags=[],this.ctr=0,this.nonce=u.nonce,this.key=u.key,this.container=u.container,this.prepend=u.prepend,this.insertionPoint=u.insertionPoint,this.before=null}var a=l.prototype;return a.hydrate=function(d){d.forEach(this._insertTag)},a.insert=function(d){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(e0(this));var A=this.tags[this.tags.length-1];if(this.isSpeedy){var p=bp(A);try{p.insertRule(d,p.cssRules.length)}catch{}}else A.appendChild(document.createTextNode(d));this.ctr++},a.flush=function(){this.tags.forEach(function(d){return d.parentNode&&d.parentNode.removeChild(d)}),this.tags=[],this.ctr=0},l}(),Ve="-ms-",mi="-moz-",ue="-webkit-",sf="comm",Ra="rule",Ia="decl",n0="@import",uf="@keyframes",r0="@layer",o0=Math.abs,hi=String.fromCharCode,i0=Object.assign;function l0(l,a){return Oe(l,0)^45?(((a<<2^Oe(l,0))<<2^Oe(l,1))<<2^Oe(l,2))<<2^Oe(l,3):0}function cf(l){return l.trim()}function a0(l,a){return(l=a.exec(l))?l[0]:l}function ce(l,a,u){return l.replace(a,u)}function xa(l,a){return l.indexOf(a)}function Oe(l,a){return l.charCodeAt(a)|0}function Vr(l,a,u){return l.slice(a,u)}function It(l){return l.length}function Pa(l){return l.length}function ii(l,a){return a.push(l),l}function s0(l,a){return l.map(a).join("")}var Ai=1,Jn=1,ff=0,et=0,Ne=0,bn="";function gi(l,a,u,d,A,p,x){return{value:l,root:a,parent:u,type:d,props:A,children:p,line:Ai,column:Jn,length:x,return:""}}function Ur(l,a){return i0(gi("",null,null,"",null,null,0),l,{length:-l.length},a)}function u0(){return Ne}function c0(){return Ne=et>0?Oe(bn,--et):0,Jn--,Ne===10&&(Jn=1,Ai--),Ne}function at(){return Ne=et<ff?Oe(bn,et++):0,Jn++,Ne===10&&(Jn=1,Ai++),Ne}function _t(){return Oe(bn,et)}function ui(){return et}function $r(l,a){return Vr(bn,l,a)}function Yr(l){switch(l){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function df(l){return Ai=Jn=1,ff=It(bn=l),et=0,[]}function pf(l){return bn="",l}function ci(l){return cf($r(et-1,ka(l===91?l+2:l===40?l+1:l)))}function f0(l){for(;(Ne=_t())&&Ne<33;)at();return Yr(l)>2||Yr(Ne)>3?"":" "}function d0(l,a){for(;--a&&at()&&!(Ne<48||Ne>102||Ne>57&&Ne<65||Ne>70&&Ne<97););return $r(l,ui()+(a<6&&_t()==32&&at()==32))}function ka(l){for(;at();)switch(Ne){case l:return et;case 34:case 39:l!==34&&l!==39&&ka(Ne);break;case 40:l===41&&ka(l);break;case 92:at();break}return et}function p0(l,a){for(;at()&&l+Ne!==57;)if(l+Ne===84&&_t()===47)break;return"/*"+$r(a,et-1)+"*"+hi(l===47?l:at())}function m0(l){for(;!Yr(_t());)at();return $r(l,et)}function h0(l){return pf(fi("",null,null,null,[""],l=df(l),0,[0],l))}function fi(l,a,u,d,A,p,x,S,N){for(var B=0,M=0,_=x,F=0,Y=0,O=0,E=1,k=1,H=1,W=0,X="",ee=A,I=p,ne=d,b=X;k;)switch(O=W,W=at()){case 40:if(O!=108&&Oe(b,_-1)==58){xa(b+=ce(ci(W),"&","&\f"),"&\f")!=-1&&(H=-1);break}case 34:case 39:case 91:b+=ci(W);break;case 9:case 10:case 13:case 32:b+=f0(O);break;case 92:b+=d0(ui()-1,7);continue;case 47:switch(_t()){case 42:case 47:ii(A0(p0(at(),ui()),a,u),N);break;default:b+="/"}break;case 123*E:S[B++]=It(b)*H;case 125*E:case 59:case 0:switch(W){case 0:case 125:k=0;case 59+M:H==-1&&(b=ce(b,/\f/g,"")),Y>0&&It(b)-_&&ii(Y>32?$c(b+";",d,u,_-1):$c(ce(b," ","")+";",d,u,_-2),N);break;case 59:b+=";";default:if(ii(ne=Hc(b,a,u,B,M,A,S,X,ee=[],I=[],_),p),W===123)if(M===0)fi(b,a,ne,ne,ee,p,_,S,I);else switch(F===99&&Oe(b,3)===110?100:F){case 100:case 108:case 109:case 115:fi(l,ne,ne,d&&ii(Hc(l,ne,ne,0,0,A,S,X,A,ee=[],_),I),A,I,_,S,d?ee:I);break;default:fi(b,ne,ne,ne,[""],I,0,S,I)}}B=M=Y=0,E=H=1,X=b="",_=x;break;case 58:_=1+It(b),Y=O;default:if(E<1){if(W==123)--E;else if(W==125&&E++==0&&c0()==125)continue}switch(b+=hi(W),W*E){case 38:H=M>0?1:(b+="\f",-1);break;case 44:S[B++]=(It(b)-1)*H,H=1;break;case 64:_t()===45&&(b+=ci(at())),F=_t(),M=_=It(X=b+=m0(ui())),W++;break;case 45:O===45&&It(b)==2&&(E=0)}}return p}function Hc(l,a,u,d,A,p,x,S,N,B,M){for(var _=A-1,F=A===0?p:[""],Y=Pa(F),O=0,E=0,k=0;O<d;++O)for(var H=0,W=Vr(l,_+1,_=o0(E=x[O])),X=l;H<Y;++H)(X=cf(E>0?F[H]+" "+W:ce(W,/&\f/g,F[H])))&&(N[k++]=X);return gi(l,a,u,A===0?Ra:S,N,B,M)}function A0(l,a,u){return gi(l,a,u,sf,hi(u0()),Vr(l,2,-2),0)}function $c(l,a,u,d){return gi(l,a,u,Ia,Vr(l,0,d),Vr(l,d+1,-1),d)}function qn(l,a){for(var u="",d=Pa(l),A=0;A<d;A++)u+=a(l[A],A,l,a)||"";return u}function g0(l,a,u,d){switch(l.type){case r0:if(l.children.length)break;case n0:case Ia:return l.return=l.return||l.value;case sf:return"";case uf:return l.return=l.value+"{"+qn(l.children,d)+"}";case Ra:l.value=l.props.join(",")}return It(u=qn(l.children,d))?l.return=l.value+"{"+u+"}":""}function v0(l){var a=Pa(l);return function(u,d,A,p){for(var x="",S=0;S<a;S++)x+=l[S](u,d,A,p)||"";return x}}function y0(l){return function(a){a.root||(a=a.return)&&l(a)}}function w0(l){var a=Object.create(null);return function(u){return a[u]===void 0&&(a[u]=l(u)),a[u]}}var x0=function(a,u,d){for(var A=0,p=0;A=p,p=_t(),A===38&&p===12&&(u[d]=1),!Yr(p);)at();return $r(a,et)},k0=function(a,u){var d=-1,A=44;do switch(Yr(A)){case 0:A===38&&_t()===12&&(u[d]=1),a[d]+=x0(et-1,u,d);break;case 2:a[d]+=ci(A);break;case 4:if(A===44){a[++d]=_t()===58?"&\f":"",u[d]=a[d].length;break}default:a[d]+=hi(A)}while(A=at());return a},S0=function(a,u){return pf(k0(df(a),u))},Wc=new WeakMap,E0=function(a){if(!(a.type!=="rule"||!a.parent||a.length<1)){for(var u=a.value,d=a.parent,A=a.column===d.column&&a.line===d.line;d.type!=="rule";)if(d=d.parent,!d)return;if(!(a.props.length===1&&u.charCodeAt(0)!==58&&!Wc.get(d))&&!A){Wc.set(a,!0);for(var p=[],x=S0(u,p),S=d.props,N=0,B=0;N<x.length;N++)for(var M=0;M<S.length;M++,B++)a.props[B]=p[N]?x[N].replace(/&\f/g,S[M]):S[M]+" "+x[N]}}},C0=function(a){if(a.type==="decl"){var u=a.value;u.charCodeAt(0)===108&&u.charCodeAt(2)===98&&(a.return="",a.value="")}};function mf(l,a){switch(l0(l,a)){case 5103:return ue+"print-"+l+l;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ue+l+l;case 5349:case 4246:case 4810:case 6968:case 2756:return ue+l+mi+l+Ve+l+l;case 6828:case 4268:return ue+l+Ve+l+l;case 6165:return ue+l+Ve+"flex-"+l+l;case 5187:return ue+l+ce(l,/(\w+).+(:[^]+)/,ue+"box-$1$2"+Ve+"flex-$1$2")+l;case 5443:return ue+l+Ve+"flex-item-"+ce(l,/flex-|-self/,"")+l;case 4675:return ue+l+Ve+"flex-line-pack"+ce(l,/align-content|flex-|-self/,"")+l;case 5548:return ue+l+Ve+ce(l,"shrink","negative")+l;case 5292:return ue+l+Ve+ce(l,"basis","preferred-size")+l;case 6060:return ue+"box-"+ce(l,"-grow","")+ue+l+Ve+ce(l,"grow","positive")+l;case 4554:return ue+ce(l,/([^-])(transform)/g,"$1"+ue+"$2")+l;case 6187:return ce(ce(ce(l,/(zoom-|grab)/,ue+"$1"),/(image-set)/,ue+"$1"),l,"")+l;case 5495:case 3959:return ce(l,/(image-set\([^]*)/,ue+"$1$`$1");case 4968:return ce(ce(l,/(.+:)(flex-)?(.*)/,ue+"box-pack:$3"+Ve+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ue+l+l;case 4095:case 3583:case 4068:case 2532:return ce(l,/(.+)-inline(.+)/,ue+"$1$2")+l;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(It(l)-1-a>6)switch(Oe(l,a+1)){case 109:if(Oe(l,a+4)!==45)break;case 102:return ce(l,/(.+:)(.+)-([^]+)/,"$1"+ue+"$2-$3$1"+mi+(Oe(l,a+3)==108?"$3":"$2-$3"))+l;case 115:return~xa(l,"stretch")?mf(ce(l,"stretch","fill-available"),a)+l:l}break;case 4949:if(Oe(l,a+1)!==115)break;case 6444:switch(Oe(l,It(l)-3-(~xa(l,"!important")&&10))){case 107:return ce(l,":",":"+ue)+l;case 101:return ce(l,/(.+:)([^;!]+)(;|!.+)?/,"$1"+ue+(Oe(l,14)===45?"inline-":"")+"box$3$1"+ue+"$2$3$1"+Ve+"$2box$3")+l}break;case 5936:switch(Oe(l,a+11)){case 114:return ue+l+Ve+ce(l,/[svh]\w+-[tblr]{2}/,"tb")+l;case 108:return ue+l+Ve+ce(l,/[svh]\w+-[tblr]{2}/,"tb-rl")+l;case 45:return ue+l+Ve+ce(l,/[svh]\w+-[tblr]{2}/,"lr")+l}return ue+l+Ve+l+l}return l}var j0=function(a,u,d,A){if(a.length>-1&&!a.return)switch(a.type){case Ia:a.return=mf(a.value,a.length);break;case uf:return qn([Ur(a,{value:ce(a.value,"@","@"+ue)})],A);case Ra:if(a.length)return s0(a.props,function(p){switch(a0(p,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return qn([Ur(a,{props:[ce(p,/:(read-\w+)/,":"+mi+"$1")]})],A);case"::placeholder":return qn([Ur(a,{props:[ce(p,/:(plac\w+)/,":"+ue+"input-$1")]}),Ur(a,{props:[ce(p,/:(plac\w+)/,":"+mi+"$1")]}),Ur(a,{props:[ce(p,/:(plac\w+)/,Ve+"input-$1")]})],A)}return""})}},T0=[j0],N0=function(a){var u=a.key;if(u==="css"){var d=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(d,function(E){var k=E.getAttribute("data-emotion");k.indexOf(" ")!==-1&&(document.head.appendChild(E),E.setAttribute("data-s",""))})}var A=a.stylisPlugins||T0,p={},x,S=[];x=a.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+u+' "]'),function(E){for(var k=E.getAttribute("data-emotion").split(" "),H=1;H<k.length;H++)p[k[H]]=!0;S.push(E)});var N,B=[E0,C0];{var M,_=[g0,y0(function(E){M.insert(E)})],F=v0(B.concat(A,_)),Y=function(k){return qn(h0(k),F)};N=function(k,H,W,X){M=W,Y(k?k+"{"+H.styles+"}":H.styles),X&&(O.inserted[H.name]=!0)}}var O={key:u,sheet:new t0({key:u,container:x,nonce:a.nonce,speedy:a.speedy,prepend:a.prepend,insertionPoint:a.insertionPoint}),nonce:a.nonce,inserted:p,registered:{},insert:N};return O.sheet.hydrate(S),O},Aa={exports:{}},de={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xc;function R0(){if(Xc)return de;Xc=1;var l=typeof Symbol=="function"&&Symbol.for,a=l?Symbol.for("react.element"):60103,u=l?Symbol.for("react.portal"):60106,d=l?Symbol.for("react.fragment"):60107,A=l?Symbol.for("react.strict_mode"):60108,p=l?Symbol.for("react.profiler"):60114,x=l?Symbol.for("react.provider"):60109,S=l?Symbol.for("react.context"):60110,N=l?Symbol.for("react.async_mode"):60111,B=l?Symbol.for("react.concurrent_mode"):60111,M=l?Symbol.for("react.forward_ref"):60112,_=l?Symbol.for("react.suspense"):60113,F=l?Symbol.for("react.suspense_list"):60120,Y=l?Symbol.for("react.memo"):60115,O=l?Symbol.for("react.lazy"):60116,E=l?Symbol.for("react.block"):60121,k=l?Symbol.for("react.fundamental"):60117,H=l?Symbol.for("react.responder"):60118,W=l?Symbol.for("react.scope"):60119;function X(I){if(typeof I=="object"&&I!==null){var ne=I.$$typeof;switch(ne){case a:switch(I=I.type,I){case N:case B:case d:case p:case A:case _:return I;default:switch(I=I&&I.$$typeof,I){case S:case M:case O:case Y:case x:return I;default:return ne}}case u:return ne}}}function ee(I){return X(I)===B}return de.AsyncMode=N,de.ConcurrentMode=B,de.ContextConsumer=S,de.ContextProvider=x,de.Element=a,de.ForwardRef=M,de.Fragment=d,de.Lazy=O,de.Memo=Y,de.Portal=u,de.Profiler=p,de.StrictMode=A,de.Suspense=_,de.isAsyncMode=function(I){return ee(I)||X(I)===N},de.isConcurrentMode=ee,de.isContextConsumer=function(I){return X(I)===S},de.isContextProvider=function(I){return X(I)===x},de.isElement=function(I){return typeof I=="object"&&I!==null&&I.$$typeof===a},de.isForwardRef=function(I){return X(I)===M},de.isFragment=function(I){return X(I)===d},de.isLazy=function(I){return X(I)===O},de.isMemo=function(I){return X(I)===Y},de.isPortal=function(I){return X(I)===u},de.isProfiler=function(I){return X(I)===p},de.isStrictMode=function(I){return X(I)===A},de.isSuspense=function(I){return X(I)===_},de.isValidElementType=function(I){return typeof I=="string"||typeof I=="function"||I===d||I===B||I===p||I===A||I===_||I===F||typeof I=="object"&&I!==null&&(I.$$typeof===O||I.$$typeof===Y||I.$$typeof===x||I.$$typeof===S||I.$$typeof===M||I.$$typeof===k||I.$$typeof===H||I.$$typeof===W||I.$$typeof===E)},de.typeOf=X,de}var Kc;function I0(){return Kc||(Kc=1,Aa.exports=R0()),Aa.exports}var ga,Zc;function P0(){if(Zc)return ga;Zc=1;var l=I0(),a={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},u={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},d={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},A={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},p={};p[l.ForwardRef]=d,p[l.Memo]=A;function x(O){return l.isMemo(O)?A:p[O.$$typeof]||a}var S=Object.defineProperty,N=Object.getOwnPropertyNames,B=Object.getOwnPropertySymbols,M=Object.getOwnPropertyDescriptor,_=Object.getPrototypeOf,F=Object.prototype;function Y(O,E,k){if(typeof E!="string"){if(F){var H=_(E);H&&H!==F&&Y(O,H,k)}var W=N(E);B&&(W=W.concat(B(E)));for(var X=x(O),ee=x(E),I=0;I<W.length;++I){var ne=W[I];if(!u[ne]&&!(k&&k[ne])&&!(ee&&ee[ne])&&!(X&&X[ne])){var b=M(E,ne);try{S(O,ne,b)}catch{}}}}return O}return ga=Y,ga}P0();var _0=!0;function hf(l,a,u){var d="";return u.split(" ").forEach(function(A){l[A]!==void 0?a.push(l[A]+";"):d+=A+" "}),d}var _a=function(a,u,d){var A=a.key+"-"+u.name;(d===!1||_0===!1)&&a.registered[A]===void 0&&(a.registered[A]=u.styles)},Af=function(a,u,d){_a(a,u,d);var A=a.key+"-"+u.name;if(a.inserted[u.name]===void 0){var p=u;do a.insert(u===p?"."+A:"",p,a.sheet,!0),p=p.next;while(p!==void 0)}};function L0(l){for(var a=0,u,d=0,A=l.length;A>=4;++d,A-=4)u=l.charCodeAt(d)&255|(l.charCodeAt(++d)&255)<<8|(l.charCodeAt(++d)&255)<<16|(l.charCodeAt(++d)&255)<<24,u=(u&65535)*1540483477+((u>>>16)*59797<<16),u^=u>>>24,a=(u&65535)*1540483477+((u>>>16)*59797<<16)^(a&65535)*1540483477+((a>>>16)*59797<<16);switch(A){case 3:a^=(l.charCodeAt(d+2)&255)<<16;case 2:a^=(l.charCodeAt(d+1)&255)<<8;case 1:a^=l.charCodeAt(d)&255,a=(a&65535)*1540483477+((a>>>16)*59797<<16)}return a^=a>>>13,a=(a&65535)*1540483477+((a>>>16)*59797<<16),((a^a>>>15)>>>0).toString(36)}var B0={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},M0=/[A-Z]|^ms/g,z0=/_EMO_([^_]+?)_([^]*?)_EMO_/g,gf=function(a){return a.charCodeAt(1)===45},qc=function(a){return a!=null&&typeof a!="boolean"},va=w0(function(l){return gf(l)?l:l.replace(M0,"-$&").toLowerCase()}),Jc=function(a,u){switch(a){case"animation":case"animationName":if(typeof u=="string")return u.replace(z0,function(d,A,p){return Pt={name:A,styles:p,next:Pt},A})}return B0[a]!==1&&!gf(a)&&typeof u=="number"&&u!==0?u+"px":u};function Gr(l,a,u){if(u==null)return"";if(u.__emotion_styles!==void 0)return u;switch(typeof u){case"boolean":return"";case"object":{if(u.anim===1)return Pt={name:u.name,styles:u.styles,next:Pt},u.name;if(u.styles!==void 0){var d=u.next;if(d!==void 0)for(;d!==void 0;)Pt={name:d.name,styles:d.styles,next:Pt},d=d.next;var A=u.styles+";";return A}return O0(l,a,u)}case"function":{if(l!==void 0){var p=Pt,x=u(l);return Pt=p,Gr(l,a,x)}break}}if(a==null)return u;var S=a[u];return S!==void 0?S:u}function O0(l,a,u){var d="";if(Array.isArray(u))for(var A=0;A<u.length;A++)d+=Gr(l,a,u[A])+";";else for(var p in u){var x=u[p];if(typeof x!="object")a!=null&&a[x]!==void 0?d+=p+"{"+a[x]+"}":qc(x)&&(d+=va(p)+":"+Jc(p,x)+";");else if(Array.isArray(x)&&typeof x[0]=="string"&&(a==null||a[x[0]]===void 0))for(var S=0;S<x.length;S++)qc(x[S])&&(d+=va(p)+":"+Jc(p,x[S])+";");else{var N=Gr(l,a,x);switch(p){case"animation":case"animationName":{d+=va(p)+":"+N+";";break}default:d+=p+"{"+N+"}"}}}return d}var bc=/label:\s*([^\s;\n{]+)\s*(;|$)/g,Pt,La=function(a,u,d){if(a.length===1&&typeof a[0]=="object"&&a[0]!==null&&a[0].styles!==void 0)return a[0];var A=!0,p="";Pt=void 0;var x=a[0];x==null||x.raw===void 0?(A=!1,p+=Gr(d,u,x)):p+=x[0];for(var S=1;S<a.length;S++)p+=Gr(d,u,a[S]),A&&(p+=x[S]);bc.lastIndex=0;for(var N="",B;(B=bc.exec(p))!==null;)N+="-"+B[1];var M=L0(p)+N;return{name:M,styles:p,next:Pt}},D0=function(a){return a()},F0=Mc.useInsertionEffect?Mc.useInsertionEffect:!1,vf=F0||D0,Ba={}.hasOwnProperty,yf=ae.createContext(typeof HTMLElement<"u"?N0({key:"css"}):null);yf.Provider;var wf=function(a){return ae.forwardRef(function(u,d){var A=ae.useContext(yf);return a(u,A,d)})},xf=ae.createContext({}),Sa="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",Q0=function(a,u){var d={};for(var A in u)Ba.call(u,A)&&(d[A]=u[A]);return d[Sa]=a,d},U0=function(a){var u=a.cache,d=a.serialized,A=a.isStringTag;return _a(u,d,A),vf(function(){return Af(u,d,A)}),null},V0=wf(function(l,a,u){var d=l.css;typeof d=="string"&&a.registered[d]!==void 0&&(d=a.registered[d]);var A=l[Sa],p=[d],x="";typeof l.className=="string"?x=hf(a.registered,p,l.className):l.className!=null&&(x=l.className+" ");var S=La(p,void 0,ae.useContext(xf));x+=a.key+"-"+S.name;var N={};for(var B in l)Ba.call(l,B)&&B!=="css"&&B!==Sa&&(N[B]=l[B]);return N.ref=u,N.className=x,ae.createElement(ae.Fragment,null,ae.createElement(U0,{cache:a,serialized:S,isStringTag:typeof A=="string"}),ae.createElement(A,N))}),Y0=V0,G0=f.Fragment;function Be(l,a,u){return Ba.call(a,"css")?f.jsx(Y0,Q0(l,a),u):f.jsx(l,a,u)}function kf(){for(var l=arguments.length,a=new Array(l),u=0;u<l;u++)a[u]=arguments[u];return La(a)}var L=function(){var a=kf.apply(void 0,arguments),u="animation-"+a.name;return{name:u,styles:"@keyframes "+u+"{"+a.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},H0=function l(a){for(var u=a.length,d=0,A="";d<u;d++){var p=a[d];if(p!=null){var x=void 0;switch(typeof p){case"boolean":break;case"object":{if(Array.isArray(p))x=l(p);else{x="";for(var S in p)p[S]&&S&&(x&&(x+=" "),x+=S)}break}default:x=p}x&&(A&&(A+=" "),A+=x)}}return A};function $0(l,a,u){var d=[],A=hf(l,d,u);return d.length<2?u:A+a(d)}var W0=function(a){var u=a.cache,d=a.serializedArr;return vf(function(){for(var A=0;A<d.length;A++)Af(u,d[A],!1)}),null},ya=wf(function(l,a){var u=[],d=function(){for(var N=arguments.length,B=new Array(N),M=0;M<N;M++)B[M]=arguments[M];var _=La(B,a.registered);return u.push(_),_a(a,_,!1),a.key+"-"+_.name},A=function(){for(var N=arguments.length,B=new Array(N),M=0;M<N;M++)B[M]=arguments[M];return $0(a.registered,d,H0(B))},p={css:d,cx:A,theme:ae.useContext(xf)},x=l.children(p);return ae.createElement(ae.Fragment,null,ae.createElement(W0,{cache:a,serializedArr:u}),x)}),X0=Object.defineProperty,K0=(l,a,u)=>a in l?X0(l,a,{enumerable:!0,configurable:!0,writable:!0,value:u}):l[a]=u,li=(l,a,u)=>(K0(l,typeof a!="symbol"?a+"":a,u),u),Ea=new Map,ai=new WeakMap,ef=0,Z0=void 0;function q0(l){return l?(ai.has(l)||(ef+=1,ai.set(l,ef.toString())),ai.get(l)):"0"}function J0(l){return Object.keys(l).sort().filter(a=>l[a]!==void 0).map(a=>`${a}_${a==="root"?q0(l.root):l[a]}`).toString()}function b0(l){let a=J0(l),u=Ea.get(a);if(!u){const d=new Map;let A;const p=new IntersectionObserver(x=>{x.forEach(S=>{var N;const B=S.isIntersecting&&A.some(M=>S.intersectionRatio>=M);l.trackVisibility&&typeof S.isVisible>"u"&&(S.isVisible=B),(N=d.get(S.target))==null||N.forEach(M=>{M(B,S)})})},l);A=p.thresholds||(Array.isArray(l.threshold)?l.threshold:[l.threshold||0]),u={id:a,observer:p,elements:d},Ea.set(a,u)}return u}function Sf(l,a,u={},d=Z0){if(typeof window.IntersectionObserver>"u"&&d!==void 0){const N=l.getBoundingClientRect();return a(d,{isIntersecting:d,target:l,intersectionRatio:typeof u.threshold=="number"?u.threshold:0,time:0,boundingClientRect:N,intersectionRect:N,rootBounds:N}),()=>{}}const{id:A,observer:p,elements:x}=b0(u);let S=x.get(l)||[];return x.has(l)||x.set(l,S),S.push(a),p.observe(l),function(){S.splice(S.indexOf(a),1),S.length===0&&(x.delete(l),p.unobserve(l)),x.size===0&&(p.disconnect(),Ea.delete(A))}}function em(l){return typeof l.children!="function"}var tf=class extends ae.Component{constructor(l){super(l),li(this,"node",null),li(this,"_unobserveCb",null),li(this,"handleNode",a=>{this.node&&(this.unobserve(),!a&&!this.props.triggerOnce&&!this.props.skip&&this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=a||null,this.observeNode()}),li(this,"handleChange",(a,u)=>{a&&this.props.triggerOnce&&this.unobserve(),em(this.props)||this.setState({inView:a,entry:u}),this.props.onChange&&this.props.onChange(a,u)}),this.state={inView:!!l.initialInView,entry:void 0}}componentDidUpdate(l){(l.rootMargin!==this.props.rootMargin||l.root!==this.props.root||l.threshold!==this.props.threshold||l.skip!==this.props.skip||l.trackVisibility!==this.props.trackVisibility||l.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve(),this.node=null}observeNode(){if(!this.node||this.props.skip)return;const{threshold:l,root:a,rootMargin:u,trackVisibility:d,delay:A,fallbackInView:p}=this.props;this._unobserveCb=Sf(this.node,this.handleChange,{threshold:l,root:a,rootMargin:u,trackVisibility:d,delay:A},p)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){const{children:l}=this.props;if(typeof l=="function"){const{inView:Y,entry:O}=this.state;return l({inView:Y,entry:O,ref:this.handleNode})}const{as:a,triggerOnce:u,threshold:d,root:A,rootMargin:p,onChange:x,skip:S,trackVisibility:N,delay:B,initialInView:M,fallbackInView:_,...F}=this.props;return ae.createElement(a||"div",{ref:this.handleNode,...F},l)}};function Ef({threshold:l,delay:a,trackVisibility:u,rootMargin:d,root:A,triggerOnce:p,skip:x,initialInView:S,fallbackInView:N,onChange:B}={}){var M;const[_,F]=ae.useState(null),Y=ae.useRef(),[O,E]=ae.useState({inView:!!S,entry:void 0});Y.current=B,ae.useEffect(()=>{if(x||!_)return;let X;return X=Sf(_,(ee,I)=>{E({inView:ee,entry:I}),Y.current&&Y.current(ee,I),I.isIntersecting&&p&&X&&(X(),X=void 0)},{root:A,rootMargin:d,threshold:l,trackVisibility:u,delay:a},N),()=>{X&&X()}},[Array.isArray(l)?l.toString():l,_,A,d,p,x,u,N,a]);const k=(M=O.entry)==null?void 0:M.target,H=ae.useRef();!_&&k&&!p&&!x&&H.current!==k&&(H.current=k,E({inView:!!S,entry:void 0}));const W=[F,O.inView,O.entry];return W.ref=W[0],W.inView=W[1],W.entry=W[2],W}var wa={exports:{}},pe={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nf;function tm(){if(nf)return pe;nf=1;var l=Symbol.for("react.element"),a=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),d=Symbol.for("react.strict_mode"),A=Symbol.for("react.profiler"),p=Symbol.for("react.provider"),x=Symbol.for("react.context"),S=Symbol.for("react.server_context"),N=Symbol.for("react.forward_ref"),B=Symbol.for("react.suspense"),M=Symbol.for("react.suspense_list"),_=Symbol.for("react.memo"),F=Symbol.for("react.lazy"),Y=Symbol.for("react.offscreen"),O;O=Symbol.for("react.module.reference");function E(k){if(typeof k=="object"&&k!==null){var H=k.$$typeof;switch(H){case l:switch(k=k.type,k){case u:case A:case d:case B:case M:return k;default:switch(k=k&&k.$$typeof,k){case S:case x:case N:case F:case _:case p:return k;default:return H}}case a:return H}}}return pe.ContextConsumer=x,pe.ContextProvider=p,pe.Element=l,pe.ForwardRef=N,pe.Fragment=u,pe.Lazy=F,pe.Memo=_,pe.Portal=a,pe.Profiler=A,pe.StrictMode=d,pe.Suspense=B,pe.SuspenseList=M,pe.isAsyncMode=function(){return!1},pe.isConcurrentMode=function(){return!1},pe.isContextConsumer=function(k){return E(k)===x},pe.isContextProvider=function(k){return E(k)===p},pe.isElement=function(k){return typeof k=="object"&&k!==null&&k.$$typeof===l},pe.isForwardRef=function(k){return E(k)===N},pe.isFragment=function(k){return E(k)===u},pe.isLazy=function(k){return E(k)===F},pe.isMemo=function(k){return E(k)===_},pe.isPortal=function(k){return E(k)===a},pe.isProfiler=function(k){return E(k)===A},pe.isStrictMode=function(k){return E(k)===d},pe.isSuspense=function(k){return E(k)===B},pe.isSuspenseList=function(k){return E(k)===M},pe.isValidElementType=function(k){return typeof k=="string"||typeof k=="function"||k===u||k===A||k===d||k===B||k===M||k===Y||typeof k=="object"&&k!==null&&(k.$$typeof===F||k.$$typeof===_||k.$$typeof===p||k.$$typeof===x||k.$$typeof===N||k.$$typeof===O||k.getModuleId!==void 0)},pe.typeOf=E,pe}var rf;function nm(){return rf||(rf=1,wa.exports=tm()),wa.exports}var rm=nm();L`
  from,
  20%,
  53%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  80% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
`;L`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`;L`
  0% {
    transform: translateX(0);
  }

  6.5% {
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    transform: translateX(0);
  }
`;L`
  0% {
    transform: scale(1);
  }

  14% {
    transform: scale(1.3);
  }

  28% {
    transform: scale(1);
  }

  42% {
    transform: scale(1.3);
  }

  70% {
    transform: scale(1);
  }
`;L`
  from,
  11.1%,
  to {
    transform: translate3d(0, 0, 0);
  }

  22.2% {
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
`;L`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;L`
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;L`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;L`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;L`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(0, -10px, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(0, 10px, 0);
  }
`;L`
  20% {
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    transform: rotate3d(0, 0, 1, 0deg);
  }
`;L`
  from {
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;L`
  from {
    transform: translate3d(0, 0, 0);
  }

  15% {
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;const om=L`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,im=L`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,lm=L`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,am=L`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,sm=L`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Ma=L`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,um=L`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,cm=L`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,fm=L`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,dm=L`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,pm=L`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,mm=L`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,hm=L`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function Am({duration:l=1e3,delay:a=0,timingFunction:u="ease",keyframes:d=Ma,iterationCount:A=1}){return kf`
    animation-duration: ${l}ms;
    animation-timing-function: ${u};
    animation-delay: ${a}ms;
    animation-name: ${d};
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: ${A};

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `}function gm(l){return l==null}function vm(l){return typeof l=="string"||typeof l=="number"||typeof l=="boolean"}function Cf(l,a){return u=>u?l():a()}function Hr(l){return Cf(l,()=>null)}function Ca(l){return Hr(()=>({opacity:0}))(l)}const jf=l=>{const{cascade:a=!1,damping:u=.5,delay:d=0,duration:A=1e3,fraction:p=0,keyframes:x=Ma,triggerOnce:S=!1,className:N,style:B,childClassName:M,childStyle:_,children:F,onVisibilityChange:Y}=l,O=ae.useMemo(()=>Am({keyframes:x,duration:A}),[A,x]);return gm(F)?null:vm(F)?Be(wm,{...l,animationStyles:O,children:String(F)}):rm.isFragment(F)?Be(Tf,{...l,animationStyles:O}):Be(G0,{children:ae.Children.map(F,(E,k)=>{if(!ae.isValidElement(E))return null;const H=d+(a?k*A*u:0);switch(E.type){case"ol":case"ul":return Be(ya,{children:({cx:W})=>Be(E.type,{...E.props,className:W(N,E.props.className),style:Object.assign({},B,E.props.style),children:Be(jf,{...l,children:E.props.children})})});case"li":return Be(tf,{threshold:p,triggerOnce:S,onChange:Y,children:({inView:W,ref:X})=>Be(ya,{children:({cx:ee})=>Be(E.type,{...E.props,ref:X,className:ee(M,E.props.className),css:Hr(()=>O)(W),style:Object.assign({},_,E.props.style,Ca(!W),{animationDelay:H+"ms"})})})});default:return Be(tf,{threshold:p,triggerOnce:S,onChange:Y,children:({inView:W,ref:X})=>Be("div",{ref:X,className:N,css:Hr(()=>O)(W),style:Object.assign({},B,Ca(!W),{animationDelay:H+"ms"}),children:Be(ya,{children:({cx:ee})=>Be(E.type,{...E.props,className:ee(M,E.props.className),style:Object.assign({},_,E.props.style)})})})})}})})},ym={display:"inline-block",whiteSpace:"pre"},wm=l=>{const{animationStyles:a,cascade:u=!1,damping:d=.5,delay:A=0,duration:p=1e3,fraction:x=0,triggerOnce:S=!1,className:N,style:B,children:M,onVisibilityChange:_}=l,{ref:F,inView:Y}=Ef({triggerOnce:S,threshold:x,onChange:_});return Cf(()=>Be("div",{ref:F,className:N,style:Object.assign({},B,ym),children:M.split("").map((O,E)=>Be("span",{css:Hr(()=>a)(Y),style:{animationDelay:A+E*p*d+"ms"},children:O},E))}),()=>Be(Tf,{...l,children:M}))(u)},Tf=l=>{const{animationStyles:a,fraction:u=0,triggerOnce:d=!1,className:A,style:p,children:x,onVisibilityChange:S}=l,{ref:N,inView:B}=Ef({triggerOnce:d,threshold:u,onChange:S});return Be("div",{ref:N,className:A,css:Hr(()=>a)(B),style:Object.assign({},p,Ca(!B)),children:x})};L`
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`;L`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0) scaleY(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, -10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, 5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;L`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(-10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;L`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(-5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;L`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0) scaleY(5);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, 10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;L`
  20% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
`;L`
  20% {
    transform: translate3d(0, 10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0) scaleY(3);
  }
`;L`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`;L`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`;L`
  20% {
    transform: translate3d(0, -10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, 20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0) scaleY(3);
  }
`;const xm=L`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,km=L`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,Sm=L`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,Em=L`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,Cm=L`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,jm=L`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,Tm=L`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,Nm=L`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,Rm=L`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,Im=L`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,Pm=L`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,_m=L`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,Lm=L`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;function Bm(l,a,u){switch(u){case"bottom-left":return a?km:im;case"bottom-right":return a?Sm:lm;case"down":return l?a?Cm:sm:a?Em:am;case"left":return l?a?Tm:um:a?jm:Ma;case"right":return l?a?Rm:fm:a?Nm:cm;case"top-left":return a?Im:dm;case"top-right":return a?Pm:pm;case"up":return l?a?Lm:hm:a?_m:mm;default:return a?xm:om}}const kt=l=>{const{big:a=!1,direction:u,reverse:d=!1,...A}=l,p=ae.useMemo(()=>Bm(a,d,u),[a,u,d]);return Be(jf,{keyframes:p,...A})};L`
  from {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    animation-timing-function: ease-out;
  }

  40% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    animation-timing-function: ease-out;
  }

  50% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    animation-timing-function: ease-in;
  }

  80% {
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }

  to {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }
`;L`
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;L`
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;L`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
`;L`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
`;L`
  0% {
    animation-timing-function: ease-in-out;
  }

  20%,
  60% {
    transform: rotate3d(0, 0, 1, 80deg);
    animation-timing-function: ease-in-out;
  }

  40%,
  80% {
    transform: rotate3d(0, 0, 1, 60deg);
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
`;L`
  from {
    opacity: 0;
    transform: scale(0.1) rotate(30deg);
    transform-origin: center bottom;
  }

  50% {
    transform: rotate(-10deg);
  }

  70% {
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`;L`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;L`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`;L`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;L`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;L`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;L`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;L`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;L`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`;L`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`;L`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;L`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;L`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`;L`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;L`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;L`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;L`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;L`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`;L`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`;L`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`;L`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`;L`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`;L`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;L`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;L`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;L`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;L`
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
`;L`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;L`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`;L`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`;L`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;const Mm="/assets/portrait-QTGEDldA.jpg",zm="/assets/work1-3LdaxMN9.jpg",Om="/assets/work2-C6BslE7f.jpg",Dm="/assets/work3-Bjc4m6kq.jpg",Fm="/assets/work4-CtRcW7d7.jpg",Qm="/assets/work5-C8w2NjKl.jpg",Um="/assets/work6-D-jGCRm8.jpg",Vm="/assets/work7-M3vi-3HZ.jpg",Ym="/assets/work8-CWvmS85z.jpg",Gm="/assets/work9-C0QGPIbt.jpg",Hm="/assets/work10-C-_AljJP.jpg",$m="/assets/work11-DqdgrQna.jpg",Wm="/assets/work12-DoxJIA-l.jpg",Xm="/assets/work13-MmBnWxyj.jpg",Km="/assets/work14-DqFdY9Cz.jpg",Zm="/assets/work15-b1bw3aXq.jpg",qm="/assets/work16-aFx2EOqU.jpg",Jm="/assets/work17-BIeDlUAo.jpg",bm="/assets/work18-BiJTfXwV.jpg",eh="/assets/work19-BFcm2mUA.jpg",th="/assets/work20-BhlbmqVc.jpg",nh="/assets/work21-C8bb0AVV.jpg",rh="/assets/work22-81bfuMCG.jpg",oh="/assets/work23-CJMKcpfU.jpg",ih="/assets/work24-Coo61_lP.jpg",lh="/assets/codepen1-Dha8gpXx.png",ah="/assets/codepen2-L1qFVogk.png",sh="/assets/codepen3-B1qz0N0Q.png",uh="/assets/bbc-XgwbsCNd.png",ch="/assets/coachella-CahPu9Nn.png",fh="data:image/svg+xml,%3csvg%20id='logosandtypes_com'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20150%20150'%3e%3cpath%20d='M0%200h150v150H0V0z'%20fill='none'/%3e%3cpath%20d='M70.2%20129.7V68.3l14.3%2010.4-6%2018.1L94%2085.6l15.5%2011.2-5.9-18.1%2015.3-11.4H99.8L93.9%2049l-6%2018.3H70.2v-46c21.7%203.1%2040.6%2012.4%2053.2%2033.2h1.6V17.6H22.4l11.1%208.1v99.9l-11.1%208.1h105.8V93h-2c-17%2026.6-33.6%2034.4-56%2036.7'%20fill-rule='evenodd'%20clip-rule='evenodd'%20fill='%23231f20'/%3e%3c/svg%3e",dh="/assets/gardenmuseum-DEsqFwYD.png",ph="/assets/girlswhocode-Cd7Jnrx0.png",mh="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2023.1.1,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%20567.2%20128.3'%20style='enable-background:new%200%200%20567.2%20128.3;'%20xml:space='preserve'%3e%3cg%3e%3cpolygon%20points='131.1,118.5%20111.6,118.5%20111.7,0%2086.8,0%2086.8,125.8%20112.2,125.8%20112.2,125.8%20131.1,125.8%20'/%3e%3cg%3e%3cpath%20d='M165.4,0L136,125.8l7.5,0l12.7-54.5h25l10.4,54.5h24.8L188.5,0H165.4%20M158,64.1l12.1-51.6l9.8,51.6H158z'/%3e%3c/g%3e%3cpolyline%20points='288.1,0%20268,86.7%20250,0%20229.9,0%20229.9,0%20222.6,0.1%20222.6,125.8%20229.9,125.8%20229.9,17.4%20234.4,35.3%20254.7,125.8%20265.4,125.8%20266.6,125.8%20290.3,24.4%20290.3,125.8%20315.2,125.8%20315.2,0%20288.1,0%20'/%3e%3cpath%20d='M348.4,40.2c0,0-0.2,16.5-0.2,23.1c0,6.6,0.2,22.3,0.2,22.3c0,18.5,4.5,32.9,17,32.9c12.4,0,17-14.4,17-32.9%20c0,0,0.2-15.7,0.2-22.3c0-6.6-0.2-23.1-0.2-23.1c0-18.5-4.5-32.8-17-32.8C352.9,7.3,348.4,21.6,348.4,40.2%20M407.4,62.8%20c0,61-35.3,63-42,63c-6.7,0-42-1.8-42-62.9S358.6,0,365.3,0C372.1,0,407.4,1.7,407.4,62.8'/%3e%3cpath%20d='M459.6,117.2c19.2,0,17.6-34.4,17.6-34.4c0-9.4,0-82.1,0-82.8h7.3c0,0.7,0.7,73.4,0.7,82.8c0,1.1,0,2.2,0,3.3%20c-0.3,10.6-1.7,23-9.2,30.8c-0.5,0.5-1,1-1.6,1.5c-8.3,7.2-21.5,8.2-31.7,6.7c-10.3-1.6-19.9-7.3-23.9-18c-3-8.1-3.2-16.9-3.2-25.5%20c0-0.1,0-81.6,0-81.6h24.8v90.6c0,0.1,0,0.2,0,0.3C440.5,90.9,440.1,117.2,459.6,117.2z'/%3e%3cpath%20d='M548.8,69.5c3.6-1.5,6.9-3,9.5-6c7.8-9.4,7.8-19.5,7.8-28.4c0-17.2-8.2-29-23.2-33.6c-0.2-0.1-0.4-0.1-0.7-0.2%20c-0.1,0-0.1,0-0.2-0.1l0,0c0,0-0.1,0-0.1,0c-0.2-0.1-0.4-0.1-0.6-0.2c0,0,0,0,0,0c-0.2-0.1-0.4-0.1-0.7-0.1c0,0-0.1,0-0.1,0%20c-0.2,0-0.4-0.1-0.7-0.1c0,0,0,0,0,0c-0.2,0-0.4-0.1-0.7-0.1c-0.1,0-0.1,0-0.2,0c-0.2,0-0.5-0.1-0.7-0.1c0,0-0.1,0-0.1,0%20c-0.2,0-0.4,0-0.6-0.1c0,0-0.1,0-0.1,0c-0.2,0-0.4,0-0.6-0.1c0,0-0.1,0-0.1,0c-0.2,0-0.3,0-0.5,0c0,0-0.1,0-0.1,0%20c-0.2,0-0.4,0-0.5,0c0,0-0.1,0-0.1,0c-0.2,0-0.3,0-0.4,0c0,0-0.1,0-0.1,0c-0.2,0-0.3,0-0.5,0c0,0-0.1,0-0.1,0c-0.1,0-0.3,0-0.4,0%20c0,0,0,0-0.1,0c-0.1,0-0.3,0-0.4,0c0,0-0.1,0-0.1,0c-0.1,0-0.2,0-0.3,0c0,0,0,0,0,0c-0.1,0-0.2,0-0.2,0c0,0,0,0,0,0%20c-0.1,0-0.1,0-0.1,0l-14.4,0l0,0h-24.7v125.8h25l0-54.5h6.2l16,54.3l0.1,0.2h26.3L548.8,69.5z%20M524,64c-0.5,0-5.7,0-5.7,0%20c0-7.1,0-56.4,0-56.3c2.1,0,4.8,0.2,6.9,0.6c13.3,2.7,18.2,16.3,18.4,27.8c0.1,6-0.2,12.6-2.5,18.3c-0.6,1.6-1.7,3-2.8,4.4%20c-1.1,1.3-2.3,2.7-3.8,3.5C531.4,64,527.5,64,524,64'/%3e%3cpath%20d='M69.5,15.8c3.2,4.9,6.7,16,6.7,32c-6.1,0-16.5,0.1-21.8,0.1v-1.4c0-5.1-0.1-6.1-0.1-6.1c0-18.7-4.1-32.8-13.4-32.8%20c-11.6,0-15.8,14.1-15.8,32.8l0,36.8c0,5.2,0.1,9.6,0.1,9.6c0,19.1,4.9,32.5,16.8,32.5c11.9,0,15.6-13.4,15.6-32.5l0.1-1%20c0.1-4.4,0.2-8,0.1-14.6c-5.8,0-12.8,0-18.6,0c0-1.7,0-5.6,0-7.3c12.9,0,25.8,0.1,38.7,0.1c0,21.6,0,40.1,0,61.7%20c-4.9,0-10.6,0-15.4,0c-0.2-20.9,0.2-13.9-0.2-20.9c-1.1,7.9-5.1,15.7-11.9,19.9c-7.3,4.6-17.1,4.4-24.9,0.7%20c-7.8-3.7-13.8-10.6-17.5-18.2c-3.8-7.8-5.6-16.5-6.7-25.1c-0.9-7.2-1.3-14.4-1-21.6C0.7,43.1,4.5,22.2,18.3,9.9%20C24.3,3.8,32.5,0,41.4,0c8.3,0,15.9,3.2,21.8,8.5c0,0,0.1,0.1,0.2,0.2C65.6,10.7,67.6,13,69.5,15.8z'/%3e%3c/g%3e%3c/svg%3e",hh="/assets/ijm-Ci6uiIth.png",Ah="data:image/svg+xml,%3c?xml%20version='1.0'%20?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20fill='%23000000'%20width='800px'%20height='800px'%20viewBox='0%200%2032%2032'%20id='Camada_1'%20version='1.1'%20xml:space='preserve'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cg%3e%3cpath%20d='M22.3,8.4c-0.8,0-1.4,0.6-1.4,1.4c0,0.8,0.6,1.4,1.4,1.4c0.8,0,1.4-0.6,1.4-1.4C23.7,9,23.1,8.4,22.3,8.4z'/%3e%3cpath%20d='M16,10.2c-3.3,0-5.9,2.7-5.9,5.9s2.7,5.9,5.9,5.9s5.9-2.7,5.9-5.9S19.3,10.2,16,10.2z%20M16,19.9c-2.1,0-3.8-1.7-3.8-3.8%20c0-2.1,1.7-3.8,3.8-3.8c2.1,0,3.8,1.7,3.8,3.8C19.8,18.2,18.1,19.9,16,19.9z'/%3e%3cpath%20d='M20.8,4h-9.5C7.2,4,4,7.2,4,11.2v9.5c0,4,3.2,7.2,7.2,7.2h9.5c4,0,7.2-3.2,7.2-7.2v-9.5C28,7.2,24.8,4,20.8,4z%20M25.7,20.8%20c0,2.7-2.2,5-5,5h-9.5c-2.7,0-5-2.2-5-5v-9.5c0-2.7,2.2-5,5-5h9.5c2.7,0,5,2.2,5,5V20.8z'/%3e%3c/g%3e%3c/svg%3e",gh="data:image/svg+xml,%3c?xml%20version='1.0'%20?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20fill='%23000000'%20width='800px'%20height='800px'%20viewBox='0%200%2032%2032'%20id='Camada_1'%20version='1.1'%20xml:space='preserve'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cpath%20d='M5,19.5c0-4.6,2.3-9.4,5-9.4c1.5,0,2.7,0.9,4.6,3.6c-1.8,2.8-2.9,4.5-2.9,4.5c-2.4,3.8-3.2,4.6-4.5,4.6%20C5.9,22.9,5,21.7,5,19.5%20M20.7,17.8L19,15c-0.4-0.7-0.9-1.4-1.3-2c1.5-2.3,2.7-3.5,4.2-3.5c3,0,5.4,4.5,5.4,10.1%20c0,2.1-0.7,3.3-2.1,3.3S23.3,22,20.7,17.8%20M16.4,11c-2.2-2.9-4.1-4-6.3-4C5.5,7,2,13.1,2,19.5c0,4,1.9,6.5,5.1,6.5%20c2.3,0,3.9-1.1,6.9-6.3c0,0,1.2-2.2,2.1-3.7c0.3,0.5,0.6,1,0.9,1.6l1.4,2.4c2.7,4.6,4.2,6.1,6.9,6.1c3.1,0,4.8-2.6,4.8-6.7%20C30,12.6,26.4,7,22.1,7C19.8,7,18,8.8,16.4,11'/%3e%3c/svg%3e",vh="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQQAAAEKBAMAAAAGLDZJAAAACXBIWXMAAC4jAAAuIwF4pT92AAAAFVBMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAADtBGx6AAAABnRSTlMAgb1FH+QRVG8gAAAIlElEQVR4Ae1cTXebOhClNc0aJy1r7LSsSdx6TdpTr92Pw9rNC/7/P+EZxyDEXM2MwLzTc568CNJId+bq6hNMHEXhExQICgQFggJBgaBAUCAoMF6Bb5tNMR5NkfFmsymp2WWJH9bH5vO8+uyq4mdf3OZnhz/vSh3w6bX+GbRSYjjP8ePZ1flPfcfVbMt6gBOqLlr72OsiNQxOqV+yH5vBdA6L3GKg4PB2AJjMYcjgePzN6xBXhMLxDw/hS79Qf8eEh4TSoEBQICgQFPj7FEjBct6Z/vHnu+vAIPEM/VWgZmeqIYQ1ph0YJUqAXaCKxlYACG+qDBikEgB+A+r1TAgCvBiT0KS9qdmlbnrxQBJBOixK0MOP5RUNrp1Vg2QQBEXubO+IC8uADkKPa/Zz3/lWJt6y7tYrpZtQLSgQFAgK/O8VaJ7EsJ/STyLRX0H8CRvb0fd+WNirj8eDP4WMQFjDCArCieV49KQg+juQFoiQa1PY+1M4EAhrEMdWRuCiCp7HphEUFkvh856wZg1vBHfLgoWHwqBAUCAoEBToFBBX1KXHEj3Ombiv+HwxsbNu5FHmpWu7SYhb5bEuTW0hlaOolm0PPMgU9MdH8dSGD2GxRRJmkHigMVEkdypuTgXD9o34YSEgkfZROF0AWJTjun1rgnDUphD0SFEnyzf2TuZcWEIgMYq3MZvNZwIKhqBAUCAoEBRwKyDdiV7KS7eHaKoLxUbVbFro24wLq+/9Tc2ddh9+tm6QVfLRJcOTVc2dce/6wnc5xuV7zGFRmSpsyv24RHF2e/VcJ4jDImfj9gr3CH62aY4aFw5ABz2DY+GkoDk4XdpSk/Hwpuo1k0/WpZtCKAkKjFXgclQux+Kn4eLNcm3mwHqpfaFzWtQe+uHWhG8n4PquV2HmZLzM27D9a32sl+XMoV/dx49VP/AgvfoPSDzl9SCqla10L9hOECv+YAWEmZ/FhAAN9JZ98yGHQQfGmnWxFgneDPxdPes+K7Tc1GeGsdyyNpL7mo/1rcSV7tBtyU7pamQ15uzbMohm7omsC8Qk0Hj+NKbNz8hTwUTmiuJ8DIXpr/QbTnE6hsHpHyxK42NiSrEkYo7uWxZPRo/Yv8b6wzOUo/qTJparDjnrO4KwZvVdGmaRsM5VhWOHYkvouVCF4Sp9b32NvU4eDldYKzOuhXLZuDVpIFgpx2Fq7AbeRmU1OxPlcAX9KVvPCZpTD5Mtnh2i+HbJl9JvKjZruco4tEj675tfLfwVMi9sk1HhtWXwFyGKJi+LtnL+IkTXPkNmSGrBtrVbMTX3UwgHiq++OCUgCG+6sgingyQfj5ZeXQTv10aj3dS+p3hPGfRPo2kop6WgYjOWndPPhAKvTfvaS+OFd8k0elg0wz7ZsPBZIdML7StfPG7wZpiRr43JhnI781feoYyW6gGJ/t/buJmUKpzNtgtmGowNd+3hLZ3UUBasXCFn7AftRvGObcfEQt3SkE6MwsJV/xo6yw5laCX20Ie5WftBt0jP2g+nH7WA7baMM/eDZk7MuC69Dgh5ddqakTNPStwnZl2XXttUWB1PM7Pt00bSjEa1LLPt04aC9M1QaqrOlRKm5exTsmlXYuk+zMw+JRsK/LTcNVXm/vDTMp07fOO/Lofi9/LeQ+F5vVquP/nyLnohh0m/oVCvLr4WD7kXi/0wbi/vs1HX92WHjKOHyoMENxhSvZ/h9ww+31twh1h9U34YCVotbvX8ixZDrop/a7iE+UWwJ8OjmkOG4GebejT+wC7UHNyL007ZDGdfflA6cI/HVOeBeZabKz1gFU/WSufgvdNBpB1NpcOFEs/u9191rUgcFHSjcbgg2M7iXMXhYKO6nG5t/NjVhwndyc+l5FbTAOdsaAlN8pJrKCRtKNdVJYPr8FYpKIgiRNFW4eZYwhaoDgsZhFpGlQyJBWkzGuhz2dZmrqlChj3EayaEe3HvudRM7pdefZPcKcgXpjqTqmRPeFZuZaB7e7EI7WRPeFinMjCzIjkzilGFZ2UlUqhLZ1S7IBdd4Vkpw5T9EGm+Vips0uecYp/cAxg0KXoiAUAFrAAwaFI8KMkAUJ7NeBQDV1GUir16ADh5ZcJzGbiKonHObkTiGYwGjXKvovZsRQoFjIaNleQNzS6RAl5NMIMolyiggZVKIMTbQUCxMqAGibzx5uYgIc8vABQpZADkNMnjsaRYqR+EB2UDh/IRrBggTlmRQkkxjKWS/BUELNMmENaQSxQSAhd3KTSLiBdj2M5AwWtOKmZlZuheUuIQRisq8WIMN5IKmal7SYkUDgTCGsSFISNwkcKeQFjDCH8iJGMjkkLR34FARghHfPQN4gwbQSHpB5DTgUKjUVDhL1FB3PYODVHrI87jxKouZ6QFek9ciBQKAuENEoWMwMURXBAIb6gEDhmBixQIQjDkAoWE4gUE/mkh6qazSBSKrmaXECCehyb5zrbsIneJlJfB89AkPgFFtzJbnoLnoSmKbnh/SNUdD/G6l2qkFXZ/1CQBknU9pkwICw1qkjArC2XkrpqwQmddRZMQIKWpqUzlbM8WyAsLQaMHOenZtiyFXkWTZCGo6wwUptjnTXiOs+Mxg1FYIzu4fkMoCykhhDdWTE8kGJq7IVg37Kazbt3+6rKrZSW+uyFYNwtNM8zKgBamxgEDKWgA2cI8Bs5c6Nwlw6h+YG7wXf0QRV9dFBIXad7uHOAvTpxLuRHr0muM1NGmxEkh+oIhDMLtqylxyOAajA0Ey/CnbMpGfbaoTfgHp1r/cIUs2lL/6yIHHIQZ/oFCPvpHNggw0aWRFRPav4y/MSkyy5g3YS7+h9JNZEDedpIZnIZkvy/q+zEttzFPVa9z+ddQOqB5b699la8rGpWIu581er4vtR6+LU8/o7G6U9eX/MYPjcPlRqoXyoMCQYGgQFAgKBAUCAoEBYICrAL/AmWF/YTft33iAAAAAElFTkSuQmCC",yh="/assets/rca-Bzp-epPw.png",wh="/assets/royalcollegeofart-DkZTOUum.png",xh="/assets/snap-Ddy7YJ95.png",kh="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAoAAAAKACAYAAAAMzckjAAAOY0lEQVR4nO3cT2sc9wHH4f0vObaLqZxEF/uQHHJIsLFfgFFwqIt7CgH7HnrpMX98CPSQvIE4YFLoqb6UmipvwVBCC6amONBeA06LXUIoMXHirHe1M2UUrbrRrCXFFOKd7/PAsvLsrKzfb2Y1H+3ObgsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOIBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP9HbZOZpyzL9CkA9uHYsWN/LsuyWxRFpyiK7vQe7XZ7sojzV41l9t+XLl365VtvvfVJbcUd1tbWfnPz5s2fHThw4JvBYDDc2NgYLC0tfbOxsdGvrfwEabd3P8RX46i25fnz53939erVD2sr0Gg9mxeAndbX15e/+OKLY+Px+HhRFJu3VkEx/QNy9utFdfv27RdbrdaeAXjjxo1fjEaj48PhsDWdiyb59NNP/+YBkKeTPgEAPNLxR93QBNWzeTY9qQQgAJG63e7YlieVAAQg0s5zAiGJAAQgkjfEkUwAAlCzqO/0BfZHAAJQs9dHiDRBWZaOgcSy8wMQyUvAJBOAANTMfvBzUyU8y7kf5iGTAAQACCMAAQDCCEAAgDACEAAgjAAEAAgjAAEAwghAAIAwAhAAIIwABAAIIwABAMIIQACAMAIQACCMAAQACCMAAQDCCEAAgDACEAAgjAAEAAgjAAEAwghAAIAwAhAAIIwABAAIIwABAMIIQACAMAIQACCMAAQACCMAAQDCCEAAgDACEAAgjAAEAAgjAAEAwghAAIAwAhAAIIwABAAIIwABAMIIQACAMAIQACCMAAQACCMAAQDCCEAAgDACEAAgjAAEAAgjAAEAwghAAIAwAhAAIIwABAAIIwABAMIIQACAMAIQACCMAAQACCMAAQDCCEAAgDACEAAgjAAEAAgjAAEAwghAAIAwAhAAIIwABAAIIwABAMIIQABq2u32pLYQaAwBCAAQRgACAIQRgAAAYXo2eJ5r164d/Pjjj1/78ssvV7vd7rj13fk+2/Mwe+7PZDLpt9vtYua2781XURSdH/P2fr8/HI1Gy9Xy6ucej8fLKysrd86ePXvt1Vdf3fMcptdff/1X1XVZlp2yLKv/r1uWZXdr2eby3f7/H3v81c84XVaNv/rZq2XTMZ06der622+//Ult4HO88cYbFz7//PNjvV5ve5/Y2Nh4orf/Xrf3er3R119/fWR1dfX2lStXfl8fdd3ly5dP3Lp1a21r7K3dvv+TsP13U42h3++Pq3kYj8eD6v7PP//8rXffffdPu9wNgCZ65513fl4dO9rtdnX0WPhLt9vdvB4MBtvX77333pmtgNv1cuTIkX9M79/pdLbnpClzc+LEiY92G//08sEHH7w4GAw+q+6zvLy8PR/zvuciXabbsdPp/Pv9998/MW/sOy8nT578qCnbf7oNq/FMv672+Xnj3nlZX1/vLy0tfW8/mJ2XJszRm2+++dq8se+8LC0tfTY7h027nDlz5rcO9nm8BAxMHW/wTKzWlgAEE4CBdr6MRHPZ1gDMIwADTc8pEgcAkEkABtvrBHIAoJkEYDABCDxK9Y74R9wENIAADFR9PEj6HKQQ+Tyu6cchAc0kBAAAwgjAQNNnhZr2JpDpeIqi8AaXLT9kHjxb+D/motXqdDp7fpA6sLgEIABAGAEIABBGAAIAhBGAAABhBCAAQBgBCAAQRgACAIQRgAAAYQQgAEAYAQgAEEYAAgCEEYAAAGEEIABAGAEIABBGAAIAhBGAAABhBCAAQBgBCAAQRgACAIQRgAAAYQQgAEAYAQgAEEYAAgCEEYAAAGEEIABAGAEIABBGAAIAhBGAAABhBCAAQBgBCAAQRgACAIQRgAAAYQQgAEAYAQgAEEYAAgCEEYAAAGEEIABAGAEIABBGAAIAhBGAAABhBCAAQBgBCAAQRgACAIQRgAAAYQQgAEAYAQgAEEYAAgCEEYAAAGEEIABAGAEIABBGAAIAhBGAAABhBCAAQBgBCAAQRgACAIQRgAAAYQQgAEAYAQgAEEYAAgCEEYAAAGEEIABAGAEIABBGAAIAhBGAAABhBCAAQBgBCAAQRgACAIQRgAAAYQQgAEAYAQgAEEYAAgCEEYAAAGEEIABAGAEIABBGAAIAhBGAAABhBCAAQBgBCAAQRgACAIQRgAAAYQQgAEAYAQgAEEYAAgCEEYAAAGEEIABAGAEIABBGAAIAhBGAAABhBCAAQBgBCAAQRgACAIQRgAAAYQQgAEAYAQgAEEYAAgCEEYAAAGEEIABAGAEIABBGAAIAhBGAAABhBCAAQBgBCAAQRgACAIQRgAAAYQQgAEAYAQgAEEYAAgCEEYAAAGEEIABAGAEIABBGAAIAhBGAAABhBCAAQBgBCAAQRgACAIQRgAAAYQQgAEAYAQgAEEYAAgCEEYAAAGEEIABAGAEIABBGAAIAhBGAAABhBCAAQBgBCAAQRgACAIQRgAAAYQQgAEAYAQgAEEYAAgCEEYAAAGEEIABAGAEIABBGAAIAhBGAAABhBCAAQBgBCAAQRgACAIQRgAAAYQQgAEAYAQgAEEYAAgCEEYAAAGEEIABAGAEIABBGAAIAhBGAAABhBCAAQBgBCAAQRgACAIQRgAAAYQQgAEAYAQgAEEYAAgCEEYAAAGEEIABAGAEIABBGAAIAhBGAAABhBCAAQBgBCAAQRgACAIQRgAAAYQQgAEAYAQgAEEYAAgCEEYAAAGEEIABAGAEIABBGAAIAhBGAAABhBCAAQBgBCAAQRgACAIQRgAAAYQQgAEAYAQgAEEYAAgCEEYAAAGEEIABAGAEIABBGAAIAhBGAAABhBCAAQBgBCAAQRgACAIQRgAAAYQQgAEAYAQgAEEYAAgCEEYAAAGEEIABAGAEIABBGAAIAhBGAAABhBCAAQBgBCAAQRgACAIQRgAAAYQQgAEAYAQgAEEYAAgCEEYAAAGEEIABAGAEIABBGAAIAhBGAAABhBCAAQBgBCAAQRgACAIQRgAAAYQQgAEAYAQgAEEYAAgCEEYAAAGEEIABAGAEIABBGAAIAhBGAAABhBCAAQBgBCAAQRgACAIQRgAAAYQQgAEAYAQgAEEYAAgCEEYAAAGEEIABAGAEIABBGAAIAhBGANEZZlptD6XQ621/vpd1ub69R3We/91sU4/G4bw//4Wb3i2Q7HxNNe3wURdGtLQzUtO3K/ghAaDAhw+PqdDqTpk9eu91u/Bj3w++JTAIQGswBjseV8KyQ8CGZAIQGc4DjcZVl2fiXR9vtdlFbGKb6HeEPxUwCEIAaUdB8W/GXPg2xBCAANZ1OJ/7ZMWgyAQhATVmWjT8+JIxxL1vv9PZu6EDxOz8AdZPJpIqCf9ZuaBAff0Kynq2fp9/vjweDQWs0Gi38+R/VL/DJZLL52X/VeFrfja/V7Xb3df7SgwcPDne73c15KIpi+4AwvX7S52fnAWz2nJ7qer8HuOrzApeWlqrr1nA4rH2vRVXt5w8fPtzcJ3q93mg/w3j66afvVPPWhHOjqn262r+rx8h0Xzh69Oid2opzXLhwYXjx4sUDrR2Pg0Wal3n7/+zP/9RTT92vrTDHysrK3bt37x6f/b3QhH3kh+4TNIsADLS6unp7bW3t8lY8DRZ5BgaDwXAymXSq616vN/72228PHz58+D/PPvvs7drKc6ytra1XLwNVc7HzQ2G3ovCJfmmkKIrNZ/Fn3804e1A6ffr09dqd5njuuef+fu7cuV/fv39/pZrLBw8e/KQKpo2NjYXeP7rd7mg0Gi0fOnTo3jPPPPOv2gpznDp16vpwODx48ODBe+PxeLm+xuJYXl7+pnpcVI+RabRUgbvfAbz88st/3Bk5s28OWfSXDl966aW/1BbO8corr/zh3r17m4+lag6rx8bDhw8PVvtJfe3F0e/3h1999dVPX3jhhb8u8jgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgHgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8eVqt1n8BUIcHfrvRRlkAAAAASUVORK5CYII=",Sh="/assets/tiktok-DRW116j_.png",Eh="/assets/universal-Oq_-qLfp.png",be={headername:"BALRAJ CREATIVE x TECHNOLOGIST",workHeading:"Projects",workPara:f.jsxs(f.Fragment,{children:[f.jsx("p",{children:"A selection of spatial and real-time projects bringing together art and technology for unique, boundary pushing designs and builds."}),f.jsx("p",{children:"Click each video to see more."})]}),projects:[{id:23,videoThumb:ih,videoTitle:"Elton John",paragraph:f.jsx(f.Fragment,{children:f.jsx("p",{children:"Bringing his legacy into the world of AR on TikTok for fans to try and create videos with. From a sequin baseball hat to muticolour star glasses as custom 3D models, UI and VFX. Made with Effect House, Blender 3D with custom made textures, materials and interaction logic."})}),videoSrcURL:"https://player.vimeo.com/video/909145520?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"},{id:21,videoThumb:rh,videoTitle:"Harmony the Hare, Coachella",paragraph:f.jsx(f.Fragment,{children:f.jsx("p",{children:"Created with Coachella and Meta from creative to final delivery. Harmony is the audio, spatial and time reactive sidekick who explores the festival with you. The official Discord community created an AI generated image as the inspiration for Harmony. I designed with concept sketches and UX flows to form the colourful character and get the user to move intuitively in their world to become highly immersed. The spatial understanding and interactions were built myself, with JavaScript and audio reactive fur and refractive layered glass with GLSL."})}),videoSrcURL:"https://player.vimeo.com/video/1079365814?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"},{id:9,videoThumb:Hm,videoTitle:"Latto x Girls Who Code",paragraph:f.jsx(f.Fragment,{children:f.jsx("p",{children:"Made in collaboration with Meta, Girls Who Code and RCA Records. Mentoring and training young women of colour interested in STEM and music to concept, design, code with JavaScript in an AR engine and develop team skills. Effect features makeup using face tracking that adapts to lighting, for the front camera and a world effect, for the back camera."})}),videoSrcURL:"https://player.vimeo.com/video/786771636?h=7e55e38721&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;loop=1",projectLink:"https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2Freel%2FCoabmejtY6V%2F%3Futm_source%3Dig_web_copy_link%26fbclid%3DIwAR0L4ssQKf261iZkcvRo4ZsW1jMqbYay4g2AEpA1SsixtemFyrKf7k62sZ4&h=AT10H9bWPgLKMuF1CN1Dh-HwdqrLeEkpkGo_z1loJC0ZW2_MSq9gcxzDCr7wyjcTsZhMhL2i67Zga-tzNXceq_jXK8v58hlMHNr9Qlz1hNjhiH_JpJqPgRJc-rQepWlkV7TqdT0&__tn__=-UK-R&c[0]=AT2Um7VVVhwX4BgPCDbhk5_IMX4ISrnLFpsHQmeh2P3cg5PgYPKRcqm88kWEL6-nww22ku-ft80omRgfoZLQiP0z794FluSnF8ANCTEf7CGBpGbx3GlJTUWyXAXhDXKgL5w9FzgUrVy9WbmI7vP9dFPs9iSi5MikWINdd283_UN1T5_cn2EYUNuGZTOrvuImdEV5OPwp7tvPMPyrq3Uv5TJRK-hIUQ"},{id:0,videoThumb:zm,videoTitle:"Glamour x Willow TikTok Cover",paragraph:f.jsx(f.Fragment,{children:f.jsx("p",{children:"Glamour UK digital makeup and gems cover look for TikTok. Inclusive makeup and procedurally animated 3D gems."})}),videoSrcURL:"https://player.vimeo.com/video/775340965?h=825942e541?amp;loop=1",projectLink:"https://www.glamourmagazine.co.uk/article/balraj-bains-interview"},{id:1,videoThumb:Om,videoTitle:"Garden Museum Installation",paragraph:f.jsx(f.Fragment,{children:f.jsx("p",{children:"Magical virtual tree for British Flowers Week. The design subverts reality with the tree growing from a leafy ceiling. Built as Augmented Reality, the magical glow intensifies as sunset hits and returns to its base state during the day. Featuring scripted animations and custom render pipeline poisson blurs and a 3D custom designed and modelled tree."})}),videoSrcURL:"https://player.vimeo.com/video/775356208?h=60e613c2f4?amp;loop=1"},{id:2,videoThumb:Dm,videoTitle:"Metal Nails",paragraph:f.jsx(f.Fragment,{children:f.jsx("p",{children:"Viral 3D digital art nails. Custom hand gesture developed with JavaScript. Nails designed and modelled as custom 3D models with hand painted textures. For Snapchat made with Lens Studio."})}),videoSrcURL:"https://player.vimeo.com/video/775359980?h=e74225c983?amp;loop=1"},{id:3,videoThumb:Fm,videoTitle:"Dream Pod",paragraph:f.jsxs(f.Fragment,{children:[f.jsx("p",{children:"Relaxing audio-reactive raymarching shader with PBR world particles. Shader's shape animates to the user's Instagram track of choice. Made with Meta Spark and GLSL."}),f.jsx("p",{children:"Video by Manuel Borrero"})]}),videoSrcURL:"https://player.vimeo.com/video/775361868?h=f82d60529b&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;loop=1"},{id:4,videoThumb:Qm,videoTitle:"Maybelline Lash Generator",paragraph:f.jsxs(f.Fragment,{children:[f.jsx("p",{children:"Multiple rounds scripted 3D game to provide randomised mascara products and matching label, audio, makeup and immersive shaders. Tap to restart the game. Made with Meta Spark and Blender."}),f.jsx("p",{children:"Video by Panta X Rhei"})]}),videoSrcURL:"https://player.vimeo.com/video/777518332?h=04dc71f533&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;loop=1"},{id:5,videoThumb:Um,videoTitle:"Creators Week Wearable",paragraph:f.jsx(f.Fragment,{children:f.jsx("p",{children:"Meta @Creators digital swag for the in person events week using the exclusive Instagram brand gradient for a future fashion piece. Optical flow and head movement controls mist emission. Visual shaders to map the gradient to the glasses."})}),videoSrcURL:"https://player.vimeo.com/video/775346908?h=af5a829f42&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;loop=1"},{id:12,videoThumb:Xm,videoTitle:"Midnight Tarot",paragraph:f.jsx(f.Fragment,{children:f.jsx("p",{children:"Winner of Lenslist's 'These Long Nights' challenge. Custom render pipeline and shader setup to create a living tarot card where the user and surrounding elements are similar to a portals experience. Card spins to reveal itself from a blurred blank background with audio to immerse the user into the storyline. Crown made of particles and occluded with segmentation to maintain correct scale. Team project with Katya Pavlenko."})}),videoSrcURL:"https://player.vimeo.com/video/780921727?h=23696ca1c6&badge=0&autopause=0&player_id=0&app_id=58479/embed;loop=1"},{id:19,videoThumb:th,videoTitle:"Too Much Mod",paragraph:f.jsx(f.Fragment,{children:f.jsx("p",{children:"Cyber character with metallic skin shader and voice distortion. Turns the user into a cyborg. Detecting a change in face detection triggers electric flame mode inspired by Cyberpunk 2077 character Lizzie Wizzie. 3D models combined with occluders, segmentation, mapped SDF shaders and particles for spatial believability."})}),videoSrcURL:"https://player.vimeo.com/video/788520699?h=a8a8d6df0c&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479;loop=1"}],projects2:[{id:22,videoThumb:oh,videoTitle:"Crystal Collection Game",paragraph:f.jsx(f.Fragment,{children:f.jsx("p",{children:"A Unity3D web game created to step into a magical world and encourage 'non-traditional' gamers or those interested in immersive experiences to experience a fun mini game with a magical atmosphere. VFX, procedural lighting, programming with C# and node graphs along with character skeleton adjustments to control the range of motion. Terrain and audio bring together the world design with classic WASD and arrow controls."})}),videoSrcURL:"https://player.vimeo.com/video/909123948?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",projectLink:"/crystalcollectiongame"},{id:20,videoThumb:nh,videoTitle:"Fur Slides",paragraph:f.jsx(f.Fragment,{children:f.jsx("p",{children:"Snapchat Lens made with FootTracking ML to erase the feet and shoes, to replace them with digital fashion of a custom fur slides shoe design."})}),videoSrcURL:"https://player.vimeo.com/video/797185742?h=6fcf8f2130&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;loop=1"},{id:7,videoThumb:Ym,videoTitle:"Identity 2.0 Exhibition",paragraph:f.jsx(f.Fragment,{children:f.jsx("p",{children:"This Machine is Black explores race and technology and surreal cyber future identity. The effect usess SDFs, 3D models cusotmised to the face tracker, procedural noise and glow, delay frames, texture distortion, with dynamic text to display the date."})}),videoSrcURL:"https://player.vimeo.com/video/775356092?h=a168a33143&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;loop=1",projectLink:"https://identity20.org/thismachineisblack/"},{id:8,videoThumb:Gm,videoTitle:"Heads Up! Videocall Game",paragraph:f.jsx(f.Fragment,{children:f.jsx("p",{children:"Played on the Ellen Show and on Meta Messenger's blog, made with Nexus, this timed game uses Multipeer to create a multi-pack liveplay in app responsive game. Each user receives a unique 3D costume and results are shown at the end."})}),videoSrcURL:"https://www.youtube.com/embed/XpSJE1CNXMo",projectLink:"https://messengernews.fb.com/2021/12/14/play-heads-up-with-your-friends-on-instagram-and-messenger/",isHorizontal:!0},{id:6,videoThumb:Vm,videoTitle:"Zodiac Soulmate Quiz",paragraph:f.jsxs(f.Fragment,{children:[f.jsx("p",{children:"Pastel magic themed, Effect House challenge winning randomiser quiz on Tiktok. Procedurally animated rotations and colour transition on answer reveal."}),f.jsx("p",{children:"Video by lala_sadii"})]}),videoSrcURL:"https://player.vimeo.com/video/775364856?h=4b9d587bd5&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;loop=1"},{id:10,videoThumb:$m,videoTitle:"Immersive Future World",paragraph:f.jsx(f.Fragment,{children:f.jsx("p",{children:"Our Future collaboration world and self facing project. Featuring an underwater world with 3D animated models, sunbeam SDFs, wave distortion shader, noise detail and a face oxygen mask. Team project with Katya Pavlenko."})}),videoSrcURL:"https://player.vimeo.com/video/780922300?h=6935fed973&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;loop=1"},{id:11,videoThumb:Wm,videoTitle:"Break Free to Fly",paragraph:f.jsx(f.Fragment,{children:f.jsx("p",{children:"A team Meta x IJM immersive narrative project, following the story of trafficked children to raise awareness of their stories. The journey follows a butterfly from a dark room and breaks through to a safe restoration space."})}),videoSrcURL:"https://player.vimeo.com/video/775357990?h=e176c29a7a&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;loop=1",projectLink:"https://www.ijm.org/news/meta-partners-ijm-immersive-awareness-campaign"},{id:13,videoThumb:Km,videoTitle:"Cyberpunk Makeup",paragraph:f.jsx(f.Fragment,{children:f.jsx("p",{children:"An audio reactive and makeup effect. SDFs used to generate shapes and hair segmentation texture, 3D models animated with head, screen and dissolve shader animations. 3D necklace modelled and textured with Blender and rigged with a neck occluder. Post processing blur and gradient applied for atmosphere."})}),videoSrcURL:"https://player.vimeo.com/video/780922175?h=58b53c9a5d&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;loop=1"},{id:14,videoThumb:Zm,videoTitle:"Evangelion Rei",paragraph:f.jsx(f.Fragment,{children:f.jsx("p",{children:"Anime character made with custom render pipeline, hair removal, rigged 3D wig, clips, eyes, moon and blend shapes for face meshes and makeup, custom textures for eyebrows and particles."})}),videoSrcURL:"https://player.vimeo.com/video/780922090?h=d1cf47010e&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;loop=1"},{id:15,videoThumb:qm,videoTitle:"Jellied",paragraph:f.jsx(f.Fragment,{children:f.jsx("p",{children:"Lens studio custom shader to render the user semi-invisible with fluid texture distortion and segmentation."})}),videoSrcURL:"https://player.vimeo.com/video/775363611?h=382eaea382&badge=0&autopause=0&player_id=0&app_id=58479/embed;loop=1"},{id:16,videoThumb:Jm,videoTitle:"Swiftie",paragraph:f.jsx(f.Fragment,{children:f.jsx("p",{children:"Body avatar drive comedy effect made with Effect House and Blender, used by BBC Radio 1."})}),videoSrcURL:"https://player.vimeo.com/video/775364444?h=be8611f310&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;loop=1"},{id:17,videoThumb:bm,videoTitle:"Metal Punk",paragraph:f.jsx(f.Fragment,{children:f.jsx("p",{children:"Glass refraction spikes with custom render pipeline to render layered meshes within the glass. Eyebrows lowered interaction to emit nose particles and customised HDRI texture. Post-processing applied for TV effect and neck tattoo rigged to head rotation."})}),videoSrcURL:"https://player.vimeo.com/video/780922129?h=42544eafef&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479;loop=1"},{id:18,videoThumb:eh,videoTitle:"Life in Colour II",paragraph:f.jsx(f.Fragment,{children:f.jsx("p",{children:"Delay frame with shader code for a gamma corrected rainbow tile effect driven by the user's movement."})}),videoSrcURL:"https://player.vimeo.com/video/780922248?h=c9c03f5f1a&badge=0&autopause=0&player_id=0&app_id=58479/embed;loop=1"}],promotionHeading:"Playground",promotionPara:f.jsx(f.Fragment,{children:f.jsx("p",{children:"Enter the playground, shaders are cool, so are metallic 3D ponies that roam the web."})}),codepens:[{heading:"Reflective Horse",paragraph:"Three.js and GLSL GLFT import, rotation matrix, PBR Material, Lighting and Environment Mapping.",imgUrl:lh,projectLink:"https://codepen.io/bb1100/pen/MWrEbZY"},{heading:"Fireball",paragraph:"Three.js and GLSL noise and vertex displacement. User input interactivity and light chunks.",imgUrl:ah,projectLink:"https://codepen.io/bb1100/pen/QWaMxpo"},{heading:"Pastel Party",paragraph:"Explosion of circles bouncing in the window. Made with P5.js.",imgUrl:sh,projectLink:"https://codepen.io/bb1100/pen/dyOgyXq"}],aboutParagraph:f.jsxs(f.Fragment,{children:[f.jsxs("p",{children:[f.jsx("b",{children:"Immersive Director, Multi-Disciplinary Artist and Creative Technologist"})," with experience in XR, wearables, product, design, research and writing for immersive experiences and social innovation spaces. Former Technical Artist at ",f.jsx("b",{children:"Meta Reality Labs"})," working Extended Realities. Clients include ",f.jsx("b",{children:"Universal, Nexus Studios and more"}),"."]}),f.jsxs("p",{children:["Specialities include creative, protoyping and delivery of industry leading projects with an interest in beautiful design, intuitive UX and immersive narrative. Collaborations with creatives, production and engineers of vast specialities supports exploring spatial design processes. Platforms and tools include",f.jsx("b",{children:" Unreal Engine 5, Unity 3D, RealityKit, Reality Composer Pro, Web, 3D Web, WebXR, A-Frame, 8th Wall, P5, TouchDesigner, 3D direction, Blender, Maya, ZBrush, Substance Suite, GLSL, C#, JavaScript, TypeScript, React."})]}),f.jsxs("p",{children:["Press includes ",f.jsx("b",{children:" BBC, Glamour UK, Tiktok Newsroom, Meta, Techcrunch, AWE, VidCon, Creative Lives in Progress, Lenslist. "}),"Talks, judging and workshops include",f.jsx("b",{children:" Somerset House, Royal Collage of Art, Meta, Snap, Lenslist, Hacktiv8, Reskill."})]})]}),aboutImage:Mm,clients:[{img:Eh,title:"",para:"",url:""},{img:Ah,title:"",para:"",url:""},{img:gh,title:"",para:"",url:""},{img:uh,title:"",para:"",url:""},{img:xh,title:"",para:"",url:""},{img:yh,title:"",para:"",url:""},{img:vh,title:"",para:"",url:""},{img:wh,title:"",para:"",url:""},{img:Sh,title:"",para:"",url:""},{img:hh,title:"",para:"",url:""},{img:fh,title:"",para:"",url:""},{img:kh,title:"",para:"",url:""},{img:mh,title:"",para:"",url:""},{img:dh,title:"",para:"",url:""},{img:ph,title:"",para:"",url:""},{img:ch,title:"",para:"",url:""}],social:[{title:"Codepen",url:"https://codepen.io/bb1100"},{title:"Shop",url:"https://shop.blraj.com"}]},Ch=()=>f.jsx("iframe",{className:"sketch",title:"animated sketch",src:"https://bethwickerson.github.io/",scrolling:"no"}),jh=()=>f.jsx(f.Fragment,{children:f.jsxs("header",{className:"section header",id:"home",children:[f.jsx(Ch,{}),f.jsx("div",{className:"container",children:f.jsxs("div",{className:"header-wrapper",children:[f.jsx(kt,{children:f.jsx("h1",{children:be.headername})}),f.jsx(kt,{delay:500,children:f.jsx("button",{className:"primary-btn",children:f.jsx(Zn,{to:"#contact",children:"Work with me (◔◡◔)"})})})]})})]})}),Th=({videoSrcURL:l,videoTitle:a,paragraph:u,projectLink:d,isHorizontal:A})=>f.jsxs(f.Fragment,{children:[f.jsx("div",{className:`iframe-container ${A?"horizontal":""}`,children:f.jsx("iframe",{className:"responsive-iframe",src:l,title:a,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",frameBorder:"0",webkitallowfullscreen:"true",mozallowfullscreen:"true",allowFullScreen:!0})}),f.jsxs("div",{className:`video-content ${A?"horizontal":""}`,children:[f.jsx("h2",{className:"header",children:a}),u,d?f.jsx("a",{href:d,target:"_blank",rel:"noopener noreferrer",className:"btn",children:"Explore"}):null]})]}),Nf=({hide:l,videoSrcURL:a,videoTitle:u,paragraph:d,projectLink:A,modalClass:p,ariaAttr:x,isHorizontal:S})=>f.jsxs(f.Fragment,{children:[f.jsx("div",{className:`modal-overlay ${p}`,"aria-hidden":"true"}),f.jsx("div",{className:`modal ${p}`,"aria-modal":!0,"aria-hidden":x,tabIndex:-1,role:"dialog",children:f.jsxs("div",{className:"modal-wrapper",children:[f.jsx("div",{className:"modal-header",children:f.jsx("button",{type:"button",className:"modal-close-button","aria-label":"Close",onClick:l,children:f.jsx("span",{"aria-hidden":"true",children:"✕"})})}),f.jsx("div",{className:`modal-content ${S?"one-column":""}`,children:f.jsx(Th,{videoTitle:u,paragraph:d,videoSrcURL:a,projectLink:A,isHorizontal:S})})]})})]}),Nh=()=>{const[l,a]=ae.useState(!1),u=p=>{if(l===p)return a(null);a(p)},d=()=>{let p=document.getElementById("slider");p.scrollLeft=p.scrollLeft-500},A=()=>{let p=document.getElementById("slider");p.scrollLeft=p.scrollLeft+500};return f.jsxs("div",{className:"section",id:"work",tabIndex:-1,children:[f.jsx("div",{className:"container",children:f.jsxs("div",{className:"work-wrapper",children:[f.jsxs(kt,{children:[f.jsx("h1",{children:be.workHeading}),f.jsx("p",{className:"work-headline",children:be.workPara})]}),f.jsxs("div",{className:"grid-container",children:[f.jsx("div",{className:"arrows left",role:"button","aria-label":"arrow left",tabIndex:0,onClick:d,onKeyDown:d}),f.jsx("div",{className:"grid work",id:"slider",children:be.projects.map((p,x)=>f.jsx(f.Fragment,{children:f.jsx("button",{className:`modal-thumbnails ${l===x?"active":""}`,onClick:()=>u(x),children:f.jsx(kt,{children:f.jsx("img",{loading:"lazy",src:p.videoThumb,alt:`Thumbnail for "${p.videoTitle}"`,title:p.videoTitle})})},p.index)}))}),f.jsx("div",{className:"arrows right",role:"button","aria-label":"arrow right",tabindex:0,onClick:A,onKeyDown:A})]})]})}),be.projects.map((p,x)=>f.jsx(f.Fragment,{children:l===x&&f.jsx(Nf,{hide:()=>u(!1),modalClass:`${l===x?"open":"closed"}`,ariaAttr:`${l===x?"false":"true"}`,videoTitle:p.videoTitle,paragraph:p.paragraph,videoSrcURL:p.videoSrcURL,projectLink:p.projectLink},p.index)}))]})},Rh=()=>{const[l,a]=ae.useState(!1),u=p=>{if(l===p)return a(null);a(p)},d=()=>{let p=document.getElementById("slider2");p.scrollLeft=p.scrollLeft-500},A=()=>{let p=document.getElementById("slider2");p.scrollLeft=p.scrollLeft+500};return f.jsxs("div",{className:"section",id:"work",tabIndex:-1,children:[f.jsx("div",{className:"container",children:f.jsx("div",{className:"work-wrapper",children:f.jsxs("div",{className:"grid-container",children:[f.jsx("div",{className:"arrows left",role:"button","aria-label":"arrow left",tabindex:0,onClick:d,onKeyDown:d}),f.jsx("div",{className:"grid work",id:"slider2",children:be.projects2.map((p,x)=>f.jsx(f.Fragment,{children:f.jsx("button",{className:`modal-thumbnails ${l===x?"active":""}`,onClick:()=>u(x),children:f.jsx(kt,{children:f.jsx("img",{loading:"lazy",src:p.videoThumb,alt:`Thumbnail for "${p.videoTitle}"`,title:p.videoTitle})})},p.index)}))}),f.jsx("div",{className:"arrows right",role:"button","aria-label":"arrow right",tabindex:0,onClick:A,onKeyDown:A})]})})}),be.projects2.map((p,x)=>f.jsx(f.Fragment,{children:l===x&&f.jsx(Nf,{hide:()=>u(!1),modalClass:`${l===x?"open":"closed"}`,ariaAttr:`${l===x?"false":"true"}`,videoTitle:p.videoTitle,paragraph:p.paragraph,videoSrcURL:p.videoSrcURL,projectLink:p.projectLink,isHorizontal:p.isHorizontal},p.index)}))]})},Ih=()=>f.jsx("div",{className:"secion",id:"about",tabIndex:-1,children:f.jsx("div",{className:"container",children:f.jsxs("div",{className:"about-section",children:[f.jsxs("div",{className:"content",children:[f.jsx(kt,{children:f.jsx("h1",{children:"Hi hi hi ʘ‿ʘ"})}),be.aboutParagraph]}),f.jsx("div",{className:"image-wrapper",children:f.jsx("div",{className:"about-img",children:f.jsx(kt,{children:f.jsx("img",{loading:"lazy",src:be.aboutImage,alt:"about"})})})})]})})}),Ph=()=>f.jsx("div",{className:"section",children:f.jsx("div",{className:"container",children:f.jsxs("div",{className:"clients-container",children:[f.jsx(kt,{children:f.jsx("h1",{})}),f.jsx("div",{className:"clients-grid",children:be.clients.map((l,a)=>f.jsx("div",{className:"client",children:f.jsxs(kt,{children:[f.jsx("img",{loading:"lazy",src:l.img,alt:"css"}),f.jsx("h3",{children:l.title}),f.jsxs("p",{children:[l.para," ",l.url?f.jsx("a",{className:"link",href:l.url,children:"view ›"}):null]})]})},a))})]})})}),_h=({heading:l,paragraph:a,imgUrl:u,projectLink:d})=>f.jsx("div",{loading:"lazy",className:"card",style:{backgroundImage:"linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(0, 0, 0, 0.2)),url("+u+")"},children:f.jsxs("div",{className:"content",children:[f.jsx("h1",{className:"header",children:l}),f.jsx("p",{className:"text",children:a}),d?f.jsx("a",{href:d,target:"_blank",rel:"noopener noreferrer",className:"btn",children:"Explore"}):null]})}),Lh=()=>f.jsx("div",{className:"section",id:"promotion",children:f.jsx("div",{className:"container",children:f.jsxs("div",{className:"promotion-wrapper",children:[f.jsx(kt,{children:f.jsx("h1",{children:be.promotionHeading})}),f.jsx("p",{children:be.promotionPara}),f.jsx("div",{className:"grid promo",children:be.codepens.map((l,a)=>f.jsx(_h,{heading:l.heading,paragraph:l.paragraph,imgUrl:l.imgUrl,projectLink:l.projectLink},a))})]})})}),Bh=()=>f.jsx("section",{className:"section",id:"contact",children:f.jsx("div",{className:"container",children:f.jsxs("div",{className:"contact-container",children:[f.jsx(kt,{children:f.jsx("h1",{children:"Contact"})}),f.jsxs("h2",{className:"email-link",children:[" 📟 ",f.jsx("a",{className:"email-link",href:"mailto: hello@blraj.com",children:"hello@blraj.com"})]}),f.jsx("div",{className:"social-icons",children:be.social.map((l,a)=>f.jsx("a",{href:l.url,target:"_blank",rel:"noopener noreferrer",children:l.title},a))})]})})});function Mh(){return f.jsx("div",{style:{position:"fixed",inset:0,width:"100%",height:"100%",background:"#000"},children:f.jsx("iframe",{src:"https://crystalcollectiongame.netlify.app/",title:"Crystal Collection Game",style:{width:"100%",height:"100%",border:"none",display:"block"},allow:"fullscreen; autoplay"})})}function zh(){return window.location.pathname==="/crystalcollectiongame"?f.jsx(Mh,{}):f.jsxs(f.Fragment,{children:[f.jsx(jh,{}),f.jsx(Jp,{}),f.jsx(Nh,{}),f.jsx(Rh,{}),f.jsx(Ih,{}),f.jsx(Ph,{}),f.jsx(Lh,{}),f.jsx(Bh,{}),f.jsx("div",{className:"App"})]})}Op.createRoot(document.getElementById("root")).render(f.jsx(Na.StrictMode,{children:f.jsx(zh,{})}));
