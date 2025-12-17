(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var Xf={exports:{}},wo={};var gg;function lS(){if(gg)return wo;gg=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,l,u){var d=null;if(u!==void 0&&(d=""+u),l.key!==void 0&&(d=""+l.key),"key"in l){u={};for(var h in l)h!=="key"&&(u[h]=l[h])}else u=l;return l=u.ref,{$$typeof:o,type:r,key:d,ref:l!==void 0?l:null,props:u}}return wo.Fragment=t,wo.jsx=i,wo.jsxs=i,wo}var vg;function cS(){return vg||(vg=1,Xf.exports=lS()),Xf.exports}var P=cS(),Wf={exports:{}},at={};var _g;function uS(){if(_g)return at;_g=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),S=Symbol.iterator;function b(U){return U===null||typeof U!="object"?null:(U=S&&U[S]||U["@@iterator"],typeof U=="function"?U:null)}var R={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,y={};function _(U,ie,ve){this.props=U,this.context=ie,this.refs=y,this.updater=ve||R}_.prototype.isReactComponent={},_.prototype.setState=function(U,ie){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,ie,"setState")},_.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function L(){}L.prototype=_.prototype;function O(U,ie,ve){this.props=U,this.context=ie,this.refs=y,this.updater=ve||R}var N=O.prototype=new L;N.constructor=O,w(N,_.prototype),N.isPureReactComponent=!0;var F=Array.isArray;function H(){}var z={H:null,A:null,T:null,S:null},K=Object.prototype.hasOwnProperty;function C(U,ie,ve){var Ae=ve.ref;return{$$typeof:o,type:U,key:ie,ref:Ae!==void 0?Ae:null,props:ve}}function E(U,ie){return C(U.type,ie,U.props)}function I(U){return typeof U=="object"&&U!==null&&U.$$typeof===o}function J(U){var ie={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(ve){return ie[ve]})}var se=/\/+/g;function pe(U,ie){return typeof U=="object"&&U!==null&&U.key!=null?J(""+U.key):ie.toString(36)}function fe(U){switch(U.status){case"fulfilled":return U.value;case"rejected":throw U.reason;default:switch(typeof U.status=="string"?U.then(H,H):(U.status="pending",U.then(function(ie){U.status==="pending"&&(U.status="fulfilled",U.value=ie)},function(ie){U.status==="pending"&&(U.status="rejected",U.reason=ie)})),U.status){case"fulfilled":return U.value;case"rejected":throw U.reason}}throw U}function B(U,ie,ve,Ae,Ie){var ne=typeof U;(ne==="undefined"||ne==="boolean")&&(U=null);var ue=!1;if(U===null)ue=!0;else switch(ne){case"bigint":case"string":case"number":ue=!0;break;case"object":switch(U.$$typeof){case o:case t:ue=!0;break;case x:return ue=U._init,B(ue(U._payload),ie,ve,Ae,Ie)}}if(ue)return Ie=Ie(U),ue=Ae===""?"."+pe(U,0):Ae,F(Ie)?(ve="",ue!=null&&(ve=ue.replace(se,"$&/")+"/"),B(Ie,ie,ve,"",function(He){return He})):Ie!=null&&(I(Ie)&&(Ie=E(Ie,ve+(Ie.key==null||U&&U.key===Ie.key?"":(""+Ie.key).replace(se,"$&/")+"/")+ue)),ie.push(Ie)),1;ue=0;var De=Ae===""?".":Ae+":";if(F(U))for(var ke=0;ke<U.length;ke++)Ae=U[ke],ne=De+pe(Ae,ke),ue+=B(Ae,ie,ve,ne,Ie);else if(ke=b(U),typeof ke=="function")for(U=ke.call(U),ke=0;!(Ae=U.next()).done;)Ae=Ae.value,ne=De+pe(Ae,ke++),ue+=B(Ae,ie,ve,ne,Ie);else if(ne==="object"){if(typeof U.then=="function")return B(fe(U),ie,ve,Ae,Ie);throw ie=String(U),Error("Objects are not valid as a React child (found: "+(ie==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":ie)+"). If you meant to render a collection of children, use an array instead.")}return ue}function V(U,ie,ve){if(U==null)return U;var Ae=[],Ie=0;return B(U,Ae,"","",function(ne){return ie.call(ve,ne,Ie++)}),Ae}function re(U){if(U._status===-1){var ie=U._result;ie=ie(),ie.then(function(ve){(U._status===0||U._status===-1)&&(U._status=1,U._result=ve)},function(ve){(U._status===0||U._status===-1)&&(U._status=2,U._result=ve)}),U._status===-1&&(U._status=0,U._result=ie)}if(U._status===1)return U._result.default;throw U._result}var Me=typeof reportError=="function"?reportError:function(U){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ie=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof U=="object"&&U!==null&&typeof U.message=="string"?String(U.message):String(U),error:U});if(!window.dispatchEvent(ie))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",U);return}console.error(U)},Se={map:V,forEach:function(U,ie,ve){V(U,function(){ie.apply(this,arguments)},ve)},count:function(U){var ie=0;return V(U,function(){ie++}),ie},toArray:function(U){return V(U,function(ie){return ie})||[]},only:function(U){if(!I(U))throw Error("React.Children.only expected to receive a single React element child.");return U}};return at.Activity=v,at.Children=Se,at.Component=_,at.Fragment=i,at.Profiler=l,at.PureComponent=O,at.StrictMode=r,at.Suspense=m,at.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,at.__COMPILER_RUNTIME={__proto__:null,c:function(U){return z.H.useMemoCache(U)}},at.cache=function(U){return function(){return U.apply(null,arguments)}},at.cacheSignal=function(){return null},at.cloneElement=function(U,ie,ve){if(U==null)throw Error("The argument must be a React element, but you passed "+U+".");var Ae=w({},U.props),Ie=U.key;if(ie!=null)for(ne in ie.key!==void 0&&(Ie=""+ie.key),ie)!K.call(ie,ne)||ne==="key"||ne==="__self"||ne==="__source"||ne==="ref"&&ie.ref===void 0||(Ae[ne]=ie[ne]);var ne=arguments.length-2;if(ne===1)Ae.children=ve;else if(1<ne){for(var ue=Array(ne),De=0;De<ne;De++)ue[De]=arguments[De+2];Ae.children=ue}return C(U.type,Ie,Ae)},at.createContext=function(U){return U={$$typeof:d,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null},U.Provider=U,U.Consumer={$$typeof:u,_context:U},U},at.createElement=function(U,ie,ve){var Ae,Ie={},ne=null;if(ie!=null)for(Ae in ie.key!==void 0&&(ne=""+ie.key),ie)K.call(ie,Ae)&&Ae!=="key"&&Ae!=="__self"&&Ae!=="__source"&&(Ie[Ae]=ie[Ae]);var ue=arguments.length-2;if(ue===1)Ie.children=ve;else if(1<ue){for(var De=Array(ue),ke=0;ke<ue;ke++)De[ke]=arguments[ke+2];Ie.children=De}if(U&&U.defaultProps)for(Ae in ue=U.defaultProps,ue)Ie[Ae]===void 0&&(Ie[Ae]=ue[Ae]);return C(U,ne,Ie)},at.createRef=function(){return{current:null}},at.forwardRef=function(U){return{$$typeof:h,render:U}},at.isValidElement=I,at.lazy=function(U){return{$$typeof:x,_payload:{_status:-1,_result:U},_init:re}},at.memo=function(U,ie){return{$$typeof:p,type:U,compare:ie===void 0?null:ie}},at.startTransition=function(U){var ie=z.T,ve={};z.T=ve;try{var Ae=U(),Ie=z.S;Ie!==null&&Ie(ve,Ae),typeof Ae=="object"&&Ae!==null&&typeof Ae.then=="function"&&Ae.then(H,Me)}catch(ne){Me(ne)}finally{ie!==null&&ve.types!==null&&(ie.types=ve.types),z.T=ie}},at.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},at.use=function(U){return z.H.use(U)},at.useActionState=function(U,ie,ve){return z.H.useActionState(U,ie,ve)},at.useCallback=function(U,ie){return z.H.useCallback(U,ie)},at.useContext=function(U){return z.H.useContext(U)},at.useDebugValue=function(){},at.useDeferredValue=function(U,ie){return z.H.useDeferredValue(U,ie)},at.useEffect=function(U,ie){return z.H.useEffect(U,ie)},at.useEffectEvent=function(U){return z.H.useEffectEvent(U)},at.useId=function(){return z.H.useId()},at.useImperativeHandle=function(U,ie,ve){return z.H.useImperativeHandle(U,ie,ve)},at.useInsertionEffect=function(U,ie){return z.H.useInsertionEffect(U,ie)},at.useLayoutEffect=function(U,ie){return z.H.useLayoutEffect(U,ie)},at.useMemo=function(U,ie){return z.H.useMemo(U,ie)},at.useOptimistic=function(U,ie){return z.H.useOptimistic(U,ie)},at.useReducer=function(U,ie,ve){return z.H.useReducer(U,ie,ve)},at.useRef=function(U){return z.H.useRef(U)},at.useState=function(U){return z.H.useState(U)},at.useSyncExternalStore=function(U,ie,ve){return z.H.useSyncExternalStore(U,ie,ve)},at.useTransition=function(){return z.H.useTransition()},at.version="19.2.3",at}var xg;function Mh(){return xg||(xg=1,Wf.exports=uS()),Wf.exports}var mi=Mh(),qf={exports:{}},Do={},jf={exports:{}},Yf={};var Sg;function fS(){return Sg||(Sg=1,(function(o){function t(B,V){var re=B.length;B.push(V);e:for(;0<re;){var Me=re-1>>>1,Se=B[Me];if(0<l(Se,V))B[Me]=V,B[re]=Se,re=Me;else break e}}function i(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var V=B[0],re=B.pop();if(re!==V){B[0]=re;e:for(var Me=0,Se=B.length,U=Se>>>1;Me<U;){var ie=2*(Me+1)-1,ve=B[ie],Ae=ie+1,Ie=B[Ae];if(0>l(ve,re))Ae<Se&&0>l(Ie,ve)?(B[Me]=Ie,B[Ae]=re,Me=Ae):(B[Me]=ve,B[ie]=re,Me=ie);else if(Ae<Se&&0>l(Ie,re))B[Me]=Ie,B[Ae]=re,Me=Ae;else break e}}return V}function l(B,V){var re=B.sortIndex-V.sortIndex;return re!==0?re:B.id-V.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var d=Date,h=d.now();o.unstable_now=function(){return d.now()-h}}var m=[],p=[],x=1,v=null,S=3,b=!1,R=!1,w=!1,y=!1,_=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;function N(B){for(var V=i(p);V!==null;){if(V.callback===null)r(p);else if(V.startTime<=B)r(p),V.sortIndex=V.expirationTime,t(m,V);else break;V=i(p)}}function F(B){if(w=!1,N(B),!R)if(i(m)!==null)R=!0,H||(H=!0,J());else{var V=i(p);V!==null&&fe(F,V.startTime-B)}}var H=!1,z=-1,K=5,C=-1;function E(){return y?!0:!(o.unstable_now()-C<K)}function I(){if(y=!1,H){var B=o.unstable_now();C=B;var V=!0;try{e:{R=!1,w&&(w=!1,L(z),z=-1),b=!0;var re=S;try{t:{for(N(B),v=i(m);v!==null&&!(v.expirationTime>B&&E());){var Me=v.callback;if(typeof Me=="function"){v.callback=null,S=v.priorityLevel;var Se=Me(v.expirationTime<=B);if(B=o.unstable_now(),typeof Se=="function"){v.callback=Se,N(B),V=!0;break t}v===i(m)&&r(m),N(B)}else r(m);v=i(m)}if(v!==null)V=!0;else{var U=i(p);U!==null&&fe(F,U.startTime-B),V=!1}}break e}finally{v=null,S=re,b=!1}V=void 0}}finally{V?J():H=!1}}}var J;if(typeof O=="function")J=function(){O(I)};else if(typeof MessageChannel<"u"){var se=new MessageChannel,pe=se.port2;se.port1.onmessage=I,J=function(){pe.postMessage(null)}}else J=function(){_(I,0)};function fe(B,V){z=_(function(){B(o.unstable_now())},V)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(B){B.callback=null},o.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<B?Math.floor(1e3/B):5},o.unstable_getCurrentPriorityLevel=function(){return S},o.unstable_next=function(B){switch(S){case 1:case 2:case 3:var V=3;break;default:V=S}var re=S;S=V;try{return B()}finally{S=re}},o.unstable_requestPaint=function(){y=!0},o.unstable_runWithPriority=function(B,V){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var re=S;S=B;try{return V()}finally{S=re}},o.unstable_scheduleCallback=function(B,V,re){var Me=o.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?Me+re:Me):re=Me,B){case 1:var Se=-1;break;case 2:Se=250;break;case 5:Se=1073741823;break;case 4:Se=1e4;break;default:Se=5e3}return Se=re+Se,B={id:x++,callback:V,priorityLevel:B,startTime:re,expirationTime:Se,sortIndex:-1},re>Me?(B.sortIndex=re,t(p,B),i(m)===null&&B===i(p)&&(w?(L(z),z=-1):w=!0,fe(F,re-Me))):(B.sortIndex=Se,t(m,B),R||b||(R=!0,H||(H=!0,J()))),B},o.unstable_shouldYield=E,o.unstable_wrapCallback=function(B){var V=S;return function(){var re=S;S=V;try{return B.apply(this,arguments)}finally{S=re}}}})(Yf)),Yf}var yg;function dS(){return yg||(yg=1,jf.exports=fS()),jf.exports}var Zf={exports:{}},wn={};var Mg;function hS(){if(Mg)return wn;Mg=1;var o=Mh();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)p+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,x){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:p,implementation:x}}var d=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return wn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,wn.createPortal=function(m,p){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return u(m,p,null,x)},wn.flushSync=function(m){var p=d.T,x=r.p;try{if(d.T=null,r.p=2,m)return m()}finally{d.T=p,r.p=x,r.d.f()}},wn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},wn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},wn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var x=p.as,v=h(x,p.crossOrigin),S=typeof p.integrity=="string"?p.integrity:void 0,b=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;x==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:S,fetchPriority:b}):x==="script"&&r.d.X(m,{crossOrigin:v,integrity:S,fetchPriority:b,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},wn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var x=h(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},wn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var x=p.as,v=h(x,p.crossOrigin);r.d.L(m,x,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},wn.preloadModule=function(m,p){if(typeof m=="string")if(p){var x=h(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},wn.requestFormReset=function(m){r.d.r(m)},wn.unstable_batchedUpdates=function(m,p){return m(p)},wn.useFormState=function(m,p,x){return d.H.useFormState(m,p,x)},wn.useFormStatus=function(){return d.H.useHostTransitionStatus()},wn.version="19.2.3",wn}var bg;function pS(){if(bg)return Zf.exports;bg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Zf.exports=hS(),Zf.exports}var Eg;function mS(){if(Eg)return Do;Eg=1;var o=dS(),t=Mh(),i=pS();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function d(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function h(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(u(e)!==e)throw Error(r(188))}function p(e){var n=e.alternate;if(!n){if(n=u(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,s=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(s=c.return,s!==null){a=s;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return m(c),e;if(f===s)return m(c),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=c,s=f;else{for(var g=!1,T=c.child;T;){if(T===a){g=!0,a=c,s=f;break}if(T===s){g=!0,s=c,a=f;break}T=T.sibling}if(!g){for(T=f.child;T;){if(T===a){g=!0,a=f,s=c;break}if(T===s){g=!0,s=f,a=c;break}T=T.sibling}if(!g)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function x(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=x(e),n!==null)return n;e=e.sibling}return null}var v=Object.assign,S=Symbol.for("react.element"),b=Symbol.for("react.transitional.element"),R=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),L=Symbol.for("react.consumer"),O=Symbol.for("react.context"),N=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),K=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),E=Symbol.for("react.memo_cache_sentinel"),I=Symbol.iterator;function J(e){return e===null||typeof e!="object"?null:(e=I&&e[I]||e["@@iterator"],typeof e=="function"?e:null)}var se=Symbol.for("react.client.reference");function pe(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===se?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case w:return"Fragment";case _:return"Profiler";case y:return"StrictMode";case F:return"Suspense";case H:return"SuspenseList";case C:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case R:return"Portal";case O:return e.displayName||"Context";case L:return(e._context.displayName||"Context")+".Consumer";case N:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case z:return n=e.displayName||null,n!==null?n:pe(e.type)||"Memo";case K:n=e._payload,e=e._init;try{return pe(e(n))}catch{}}return null}var fe=Array.isArray,B=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,V=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,re={pending:!1,data:null,method:null,action:null},Me=[],Se=-1;function U(e){return{current:e}}function ie(e){0>Se||(e.current=Me[Se],Me[Se]=null,Se--)}function ve(e,n){Se++,Me[Se]=e.current,e.current=n}var Ae=U(null),Ie=U(null),ne=U(null),ue=U(null);function De(e,n){switch(ve(ne,n),ve(Ie,e),ve(Ae,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?I0(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=I0(n),e=H0(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}ie(Ae),ve(Ae,e)}function ke(){ie(Ae),ie(Ie),ie(ne)}function He(e){e.memoizedState!==null&&ve(ue,e);var n=Ae.current,a=H0(n,e.type);n!==a&&(ve(Ie,e),ve(Ae,a))}function dt(e){Ie.current===e&&(ie(Ae),ie(Ie)),ue.current===e&&(ie(ue),To._currentValue=re)}var Kt,gt;function ht(e){if(Kt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Kt=n&&n[1]||"",gt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Kt+e+gt}var Ct=!1;function st(e,n){if(!e||Ct)return"";Ct=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var ge=function(){throw Error()};if(Object.defineProperty(ge.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ge,[])}catch(le){var te=le}Reflect.construct(e,[],ge)}else{try{ge.call()}catch(le){te=le}e.call(ge.prototype)}}else{try{throw Error()}catch(le){te=le}(ge=e())&&typeof ge.catch=="function"&&ge.catch(function(){})}}catch(le){if(le&&te&&typeof le.stack=="string")return[le.stack,te.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),g=f[0],T=f[1];if(g&&T){var G=g.split(`
`),$=T.split(`
`);for(c=s=0;s<G.length&&!G[s].includes("DetermineComponentFrameRoot");)s++;for(;c<$.length&&!$[c].includes("DetermineComponentFrameRoot");)c++;if(s===G.length||c===$.length)for(s=G.length-1,c=$.length-1;1<=s&&0<=c&&G[s]!==$[c];)c--;for(;1<=s&&0<=c;s--,c--)if(G[s]!==$[c]){if(s!==1||c!==1)do if(s--,c--,0>c||G[s]!==$[c]){var de=`
`+G[s].replace(" at new "," at ");return e.displayName&&de.includes("<anonymous>")&&(de=de.replace("<anonymous>",e.displayName)),de}while(1<=s&&0<=c);break}}}finally{Ct=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?ht(a):""}function Qt(e,n){switch(e.tag){case 26:case 27:case 5:return ht(e.type);case 16:return ht("Lazy");case 13:return e.child!==n&&n!==null?ht("Suspense Fallback"):ht("Suspense");case 19:return ht("SuspenseList");case 0:case 15:return st(e.type,!1);case 11:return st(e.type.render,!1);case 1:return st(e.type,!0);case 31:return ht("Activity");default:return""}}function k(e){try{var n="",a=null;do n+=Qt(e,a),a=e,e=e.return;while(e);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var jt=Object.prototype.hasOwnProperty,yt=o.unstable_scheduleCallback,Lt=o.unstable_cancelCallback,je=o.unstable_shouldYield,D=o.unstable_requestPaint,M=o.unstable_now,q=o.unstable_getCurrentPriorityLevel,he=o.unstable_ImmediatePriority,xe=o.unstable_UserBlockingPriority,ce=o.unstable_NormalPriority,Ze=o.unstable_LowPriority,Ce=o.unstable_IdlePriority,Xe=o.log,tt=o.unstable_setDisableYieldValue,be=null,Ee=null;function ze(e){if(typeof Xe=="function"&&tt(e),Ee&&typeof Ee.setStrictMode=="function")try{Ee.setStrictMode(be,e)}catch{}}var Pe=Math.clz32?Math.clz32:W,we=Math.log,lt=Math.LN2;function W(e){return e>>>=0,e===0?32:31-(we(e)/lt|0)|0}var Ne=256,Te=262144,Be=4194304;function ye(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function _e(e,n,a){var s=e.pendingLanes;if(s===0)return 0;var c=0,f=e.suspendedLanes,g=e.pingedLanes;e=e.warmLanes;var T=s&134217727;return T!==0?(s=T&~f,s!==0?c=ye(s):(g&=T,g!==0?c=ye(g):a||(a=T&~e,a!==0&&(c=ye(a))))):(T=s&~f,T!==0?c=ye(T):g!==0?c=ye(g):a||(a=s&~e,a!==0&&(c=ye(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function Re(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function nt(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Pt(){var e=Be;return Be<<=1,(Be&62914560)===0&&(Be=4194304),e}function Mt(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Cn(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function vi(e,n,a,s,c,f){var g=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var T=e.entanglements,G=e.expirationTimes,$=e.hiddenUpdates;for(a=g&~a;0<a;){var de=31-Pe(a),ge=1<<de;T[de]=0,G[de]=-1;var te=$[de];if(te!==null)for($[de]=null,de=0;de<te.length;de++){var le=te[de];le!==null&&(le.lane&=-536870913)}a&=~ge}s!==0&&Zo(e,s,0),f!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=f&~(g&~n))}function Zo(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var s=31-Pe(n);e.entangledLanes|=n,e.entanglements[s]=e.entanglements[s]|1073741824|a&261930}function Bs(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var s=31-Pe(a),c=1<<s;c&n|e[s]&n&&(e[s]|=n),a&=~c}}function Ur(e,n){var a=n&-n;return a=(a&42)!==0?1:zs(a),(a&(e.suspendedLanes|n))!==0?0:a}function zs(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Nr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Fs(){var e=V.p;return e!==0?e:(e=window.event,e===void 0?32:cg(e.type))}function wi(e,n){var a=V.p;try{return V.p=e,n()}finally{V.p=a}}var ai=Math.random().toString(36).slice(2),rn="__reactFiber$"+ai,vn="__reactProps$"+ai,_i="__reactContainer$"+ai,Lr="__reactEvents$"+ai,Or="__reactListeners$"+ai,Ko="__reactHandles$"+ai,Is="__reactResources$"+ai,er="__reactMarker$"+ai;function Hs(e){delete e[rn],delete e[vn],delete e[Lr],delete e[Or],delete e[Ko]}function xa(e){var n=e[rn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[_i]||a[rn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=j0(e);e!==null;){if(a=e[rn])return a;e=j0(e)}return n}e=a,a=e.parentNode}return null}function Sa(e){if(e=e[rn]||e[_i]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function tr(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function ya(e){var n=e[Is];return n||(n=e[Is]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function A(e){e[er]=!0}var j=new Set,oe={};function ee(e,n){Z(e,n),Z(e+"Capture",n)}function Z(e,n){for(oe[e]=n,e=0;e<n.length;e++)j.add(n[e])}var Ue=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Fe={},Le={};function Ge(e){return jt.call(Le,e)?!0:jt.call(Fe,e)?!1:Ue.test(e)?Le[e]=!0:(Fe[e]=!0,!1)}function We(e,n,a){if(Ge(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Je(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function qe(e,n,a,s){if(s===null)e.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+s)}}function $e(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function wt(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Yt(e,n,a){var s=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var c=s.get,f=s.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return c.call(this)},set:function(g){a=""+g,f.call(this,g)}}),Object.defineProperty(e,n,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(g){a=""+g},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Xt(e){if(!e._valueTracker){var n=wt(e)?"checked":"value";e._valueTracker=Yt(e,n,""+e[n])}}function Ot(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return e&&(s=wt(e)?e.checked?"true":"false":e.value),e=s,e!==a?(n.setValue(e),!0):!1}function Ke(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Dt=/[\n"\\]/g;function it(e){return e.replace(Dt,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function _n(e,n,a,s,c,f,g,T){e.name="",g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?e.type=g:e.removeAttribute("type"),n!=null?g==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+$e(n)):e.value!==""+$e(n)&&(e.value=""+$e(n)):g!=="submit"&&g!=="reset"||e.removeAttribute("value"),n!=null?xn(e,g,$e(n)):a!=null?xn(e,g,$e(a)):s!=null&&e.removeAttribute("value"),c==null&&f!=null&&(e.defaultChecked=!!f),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?e.name=""+$e(T):e.removeAttribute("name")}function Xi(e,n,a,s,c,f,g,T){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Xt(e);return}a=a!=null?""+$e(a):"",n=n!=null?""+$e(n):a,T||n===e.value||(e.value=n),e.defaultValue=n}s=s??c,s=typeof s!="function"&&typeof s!="symbol"&&!!s,e.checked=T?e.checked:!!s,e.defaultChecked=!!s,g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(e.name=g),Xt(e)}function xn(e,n,a){n==="number"&&Ke(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function ri(e,n,a,s){if(e=e.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<e.length;a++)c=n.hasOwnProperty("$"+e[a].value),e[a].selected!==c&&(e[a].selected=c),c&&s&&(e[a].defaultSelected=!0)}else{for(a=""+$e(a),n=null,c=0;c<e.length;c++){if(e[c].value===a){e[c].selected=!0,s&&(e[c].defaultSelected=!0);return}n!==null||e[c].disabled||(n=e[c])}n!==null&&(n.selected=!0)}}function Bt(e,n,a){if(n!=null&&(n=""+$e(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+$e(a):""}function Sn(e,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(fe(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=$e(n),e.defaultValue=a,s=e.textContent,s===a&&s!==""&&s!==null&&(e.value=s),Xt(e)}function fn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var yn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Mn(e,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":s?e.setProperty(n,a):typeof a!="number"||a===0||yn.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Pr(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?e.setProperty(s,""):s==="float"?e.cssFloat="":e[s]="");for(var c in n)s=n[c],n.hasOwnProperty(c)&&a[c]!==s&&Mn(e,c,s)}else for(var f in n)n.hasOwnProperty(f)&&Mn(e,f,n[f])}function xi(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var a_=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),r_=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Qo(e){return r_.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Wi(){}var Hc=null;function Gc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Br=null,zr=null;function Fh(e){var n=Sa(e);if(n&&(e=n.stateNode)){var a=e[vn]||null;e:switch(e=n.stateNode,n.type){case"input":if(_n(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+it(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==e&&s.form===e.form){var c=s[vn]||null;if(!c)throw Error(r(90));_n(s,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===e.form&&Ot(s)}break e;case"textarea":Bt(e,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&ri(e,!!a.multiple,n,!1)}}}var Vc=!1;function Ih(e,n,a){if(Vc)return e(n,a);Vc=!0;try{var s=e(n);return s}finally{if(Vc=!1,(Br!==null||zr!==null)&&(Fl(),Br&&(n=Br,e=zr,zr=Br=null,Fh(n),e)))for(n=0;n<e.length;n++)Fh(e[n])}}function Gs(e,n){var a=e.stateNode;if(a===null)return null;var s=a[vn]||null;if(s===null)return null;a=s[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var qi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),kc=!1;if(qi)try{var Vs={};Object.defineProperty(Vs,"passive",{get:function(){kc=!0}}),window.addEventListener("test",Vs,Vs),window.removeEventListener("test",Vs,Vs)}catch{kc=!1}var Ma=null,Xc=null,Jo=null;function Hh(){if(Jo)return Jo;var e,n=Xc,a=n.length,s,c="value"in Ma?Ma.value:Ma.textContent,f=c.length;for(e=0;e<a&&n[e]===c[e];e++);var g=a-e;for(s=1;s<=g&&n[a-s]===c[f-s];s++);return Jo=c.slice(e,1<s?1-s:void 0)}function $o(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function el(){return!0}function Gh(){return!1}function zn(e){function n(a,s,c,f,g){this._reactName=a,this._targetInst=c,this.type=s,this.nativeEvent=f,this.target=g,this.currentTarget=null;for(var T in e)e.hasOwnProperty(T)&&(a=e[T],this[T]=a?a(f):f[T]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?el:Gh,this.isPropagationStopped=Gh,this}return v(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=el)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=el)},persist:function(){},isPersistent:el}),n}var nr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},tl=zn(nr),ks=v({},nr,{view:0,detail:0}),s_=zn(ks),Wc,qc,Xs,nl=v({},ks,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Yc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Xs&&(Xs&&e.type==="mousemove"?(Wc=e.screenX-Xs.screenX,qc=e.screenY-Xs.screenY):qc=Wc=0,Xs=e),Wc)},movementY:function(e){return"movementY"in e?e.movementY:qc}}),Vh=zn(nl),o_=v({},nl,{dataTransfer:0}),l_=zn(o_),c_=v({},ks,{relatedTarget:0}),jc=zn(c_),u_=v({},nr,{animationName:0,elapsedTime:0,pseudoElement:0}),f_=zn(u_),d_=v({},nr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),h_=zn(d_),p_=v({},nr,{data:0}),kh=zn(p_),m_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},g_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},v_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function __(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=v_[e])?!!n[e]:!1}function Yc(){return __}var x_=v({},ks,{key:function(e){if(e.key){var n=m_[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=$o(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?g_[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Yc,charCode:function(e){return e.type==="keypress"?$o(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?$o(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),S_=zn(x_),y_=v({},nl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xh=zn(y_),M_=v({},ks,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Yc}),b_=zn(M_),E_=v({},nr,{propertyName:0,elapsedTime:0,pseudoElement:0}),T_=zn(E_),A_=v({},nl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),R_=zn(A_),C_=v({},nr,{newState:0,oldState:0}),w_=zn(C_),D_=[9,13,27,32],Zc=qi&&"CompositionEvent"in window,Ws=null;qi&&"documentMode"in document&&(Ws=document.documentMode);var U_=qi&&"TextEvent"in window&&!Ws,Wh=qi&&(!Zc||Ws&&8<Ws&&11>=Ws),qh=" ",jh=!1;function Yh(e,n){switch(e){case"keyup":return D_.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Zh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Fr=!1;function N_(e,n){switch(e){case"compositionend":return Zh(n);case"keypress":return n.which!==32?null:(jh=!0,qh);case"textInput":return e=n.data,e===qh&&jh?null:e;default:return null}}function L_(e,n){if(Fr)return e==="compositionend"||!Zc&&Yh(e,n)?(e=Hh(),Jo=Xc=Ma=null,Fr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Wh&&n.locale!=="ko"?null:n.data;default:return null}}var O_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Kh(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!O_[e.type]:n==="textarea"}function Qh(e,n,a,s){Br?zr?zr.push(s):zr=[s]:Br=s,n=Wl(n,"onChange"),0<n.length&&(a=new tl("onChange","change",null,a,s),e.push({event:a,listeners:n}))}var qs=null,js=null;function P_(e){L0(e,0)}function il(e){var n=tr(e);if(Ot(n))return e}function Jh(e,n){if(e==="change")return n}var $h=!1;if(qi){var Kc;if(qi){var Qc="oninput"in document;if(!Qc){var ep=document.createElement("div");ep.setAttribute("oninput","return;"),Qc=typeof ep.oninput=="function"}Kc=Qc}else Kc=!1;$h=Kc&&(!document.documentMode||9<document.documentMode)}function tp(){qs&&(qs.detachEvent("onpropertychange",np),js=qs=null)}function np(e){if(e.propertyName==="value"&&il(js)){var n=[];Qh(n,js,e,Gc(e)),Ih(P_,n)}}function B_(e,n,a){e==="focusin"?(tp(),qs=n,js=a,qs.attachEvent("onpropertychange",np)):e==="focusout"&&tp()}function z_(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return il(js)}function F_(e,n){if(e==="click")return il(n)}function I_(e,n){if(e==="input"||e==="change")return il(n)}function H_(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var qn=typeof Object.is=="function"?Object.is:H_;function Ys(e,n){if(qn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var c=a[s];if(!jt.call(n,c)||!qn(e[c],n[c]))return!1}return!0}function ip(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ap(e,n){var a=ip(e);e=0;for(var s;a;){if(a.nodeType===3){if(s=e+a.textContent.length,e<=n&&s>=n)return{node:a,offset:n-e};e=s}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=ip(a)}}function rp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?rp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function sp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Ke(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Ke(e.document)}return n}function Jc(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var G_=qi&&"documentMode"in document&&11>=document.documentMode,Ir=null,$c=null,Zs=null,eu=!1;function op(e,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;eu||Ir==null||Ir!==Ke(s)||(s=Ir,"selectionStart"in s&&Jc(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Zs&&Ys(Zs,s)||(Zs=s,s=Wl($c,"onSelect"),0<s.length&&(n=new tl("onSelect","select",null,n,a),e.push({event:n,listeners:s}),n.target=Ir)))}function ir(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Hr={animationend:ir("Animation","AnimationEnd"),animationiteration:ir("Animation","AnimationIteration"),animationstart:ir("Animation","AnimationStart"),transitionrun:ir("Transition","TransitionRun"),transitionstart:ir("Transition","TransitionStart"),transitioncancel:ir("Transition","TransitionCancel"),transitionend:ir("Transition","TransitionEnd")},tu={},lp={};qi&&(lp=document.createElement("div").style,"AnimationEvent"in window||(delete Hr.animationend.animation,delete Hr.animationiteration.animation,delete Hr.animationstart.animation),"TransitionEvent"in window||delete Hr.transitionend.transition);function ar(e){if(tu[e])return tu[e];if(!Hr[e])return e;var n=Hr[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in lp)return tu[e]=n[a];return e}var cp=ar("animationend"),up=ar("animationiteration"),fp=ar("animationstart"),V_=ar("transitionrun"),k_=ar("transitionstart"),X_=ar("transitioncancel"),dp=ar("transitionend"),hp=new Map,nu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");nu.push("scrollEnd");function Si(e,n){hp.set(e,n),ee(n,[e])}var al=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},si=[],Gr=0,iu=0;function rl(){for(var e=Gr,n=iu=Gr=0;n<e;){var a=si[n];si[n++]=null;var s=si[n];si[n++]=null;var c=si[n];si[n++]=null;var f=si[n];if(si[n++]=null,s!==null&&c!==null){var g=s.pending;g===null?c.next=c:(c.next=g.next,g.next=c),s.pending=c}f!==0&&pp(a,c,f)}}function sl(e,n,a,s){si[Gr++]=e,si[Gr++]=n,si[Gr++]=a,si[Gr++]=s,iu|=s,e.lanes|=s,e=e.alternate,e!==null&&(e.lanes|=s)}function au(e,n,a,s){return sl(e,n,a,s),ol(e)}function rr(e,n){return sl(e,null,null,n),ol(e)}function pp(e,n,a){e.lanes|=a;var s=e.alternate;s!==null&&(s.lanes|=a);for(var c=!1,f=e.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(c=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,c&&n!==null&&(c=31-Pe(a),e=f.hiddenUpdates,s=e[c],s===null?e[c]=[n]:s.push(n),n.lane=a|536870912),f):null}function ol(e){if(50<_o)throw _o=0,pf=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Vr={};function W_(e,n,a,s){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jn(e,n,a,s){return new W_(e,n,a,s)}function ru(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ji(e,n){var a=e.alternate;return a===null?(a=jn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function mp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function ll(e,n,a,s,c,f){var g=0;if(s=e,typeof e=="function")ru(e)&&(g=1);else if(typeof e=="string")g=Kx(e,a,Ae.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case C:return e=jn(31,a,n,c),e.elementType=C,e.lanes=f,e;case w:return sr(a.children,c,f,n);case y:g=8,c|=24;break;case _:return e=jn(12,a,n,c|2),e.elementType=_,e.lanes=f,e;case F:return e=jn(13,a,n,c),e.elementType=F,e.lanes=f,e;case H:return e=jn(19,a,n,c),e.elementType=H,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case O:g=10;break e;case L:g=9;break e;case N:g=11;break e;case z:g=14;break e;case K:g=16,s=null;break e}g=29,a=Error(r(130,e===null?"null":typeof e,"")),s=null}return n=jn(g,a,n,c),n.elementType=e,n.type=s,n.lanes=f,n}function sr(e,n,a,s){return e=jn(7,e,s,n),e.lanes=a,e}function su(e,n,a){return e=jn(6,e,null,n),e.lanes=a,e}function gp(e){var n=jn(18,null,null,0);return n.stateNode=e,n}function ou(e,n,a){return n=jn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var vp=new WeakMap;function oi(e,n){if(typeof e=="object"&&e!==null){var a=vp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:k(n)},vp.set(e,n),n)}return{value:e,source:n,stack:k(n)}}var kr=[],Xr=0,cl=null,Ks=0,li=[],ci=0,ba=null,Di=1,Ui="";function Yi(e,n){kr[Xr++]=Ks,kr[Xr++]=cl,cl=e,Ks=n}function _p(e,n,a){li[ci++]=Di,li[ci++]=Ui,li[ci++]=ba,ba=e;var s=Di;e=Ui;var c=32-Pe(s)-1;s&=~(1<<c),a+=1;var f=32-Pe(n)+c;if(30<f){var g=c-c%5;f=(s&(1<<g)-1).toString(32),s>>=g,c-=g,Di=1<<32-Pe(n)+c|a<<c|s,Ui=f+e}else Di=1<<f|a<<c|s,Ui=e}function lu(e){e.return!==null&&(Yi(e,1),_p(e,1,0))}function cu(e){for(;e===cl;)cl=kr[--Xr],kr[Xr]=null,Ks=kr[--Xr],kr[Xr]=null;for(;e===ba;)ba=li[--ci],li[ci]=null,Ui=li[--ci],li[ci]=null,Di=li[--ci],li[ci]=null}function xp(e,n){li[ci++]=Di,li[ci++]=Ui,li[ci++]=ba,Di=n.id,Ui=n.overflow,ba=e}var bn=null,Wt=null,xt=!1,Ea=null,ui=!1,uu=Error(r(519));function Ta(e){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Qs(oi(n,e)),uu}function Sp(e){var n=e.stateNode,a=e.type,s=e.memoizedProps;switch(n[rn]=e,n[vn]=s,a){case"dialog":mt("cancel",n),mt("close",n);break;case"iframe":case"object":case"embed":mt("load",n);break;case"video":case"audio":for(a=0;a<So.length;a++)mt(So[a],n);break;case"source":mt("error",n);break;case"img":case"image":case"link":mt("error",n),mt("load",n);break;case"details":mt("toggle",n);break;case"input":mt("invalid",n),Xi(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":mt("invalid",n);break;case"textarea":mt("invalid",n),Sn(n,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||z0(n.textContent,a)?(s.popover!=null&&(mt("beforetoggle",n),mt("toggle",n)),s.onScroll!=null&&mt("scroll",n),s.onScrollEnd!=null&&mt("scrollend",n),s.onClick!=null&&(n.onclick=Wi),n=!0):n=!1,n||Ta(e,!0)}function yp(e){for(bn=e.return;bn;)switch(bn.tag){case 5:case 31:case 13:ui=!1;return;case 27:case 3:ui=!0;return;default:bn=bn.return}}function Wr(e){if(e!==bn)return!1;if(!xt)return yp(e),xt=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||wf(e.type,e.memoizedProps)),a=!a),a&&Wt&&Ta(e),yp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));Wt=q0(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));Wt=q0(e)}else n===27?(n=Wt,Ia(e.type)?(e=Of,Of=null,Wt=e):Wt=n):Wt=bn?di(e.stateNode.nextSibling):null;return!0}function or(){Wt=bn=null,xt=!1}function fu(){var e=Ea;return e!==null&&(Gn===null?Gn=e:Gn.push.apply(Gn,e),Ea=null),e}function Qs(e){Ea===null?Ea=[e]:Ea.push(e)}var du=U(null),lr=null,Zi=null;function Aa(e,n,a){ve(du,n._currentValue),n._currentValue=a}function Ki(e){e._currentValue=du.current,ie(du)}function hu(e,n,a){for(;e!==null;){var s=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),e===a)break;e=e.return}}function pu(e,n,a,s){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var f=c.dependencies;if(f!==null){var g=c.child;f=f.firstContext;e:for(;f!==null;){var T=f;f=c;for(var G=0;G<n.length;G++)if(T.context===n[G]){f.lanes|=a,T=f.alternate,T!==null&&(T.lanes|=a),hu(f.return,a,e),s||(g=null);break e}f=T.next}}else if(c.tag===18){if(g=c.return,g===null)throw Error(r(341));g.lanes|=a,f=g.alternate,f!==null&&(f.lanes|=a),hu(g,a,e),g=null}else g=c.child;if(g!==null)g.return=c;else for(g=c;g!==null;){if(g===e){g=null;break}if(c=g.sibling,c!==null){c.return=g.return,g=c;break}g=g.return}c=g}}function qr(e,n,a,s){e=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var g=c.alternate;if(g===null)throw Error(r(387));if(g=g.memoizedProps,g!==null){var T=c.type;qn(c.pendingProps.value,g.value)||(e!==null?e.push(T):e=[T])}}else if(c===ue.current){if(g=c.alternate,g===null)throw Error(r(387));g.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(To):e=[To])}c=c.return}e!==null&&pu(n,e,a,s),n.flags|=262144}function ul(e){for(e=e.firstContext;e!==null;){if(!qn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function cr(e){lr=e,Zi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function En(e){return Mp(lr,e)}function fl(e,n){return lr===null&&cr(e),Mp(e,n)}function Mp(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Zi===null){if(e===null)throw Error(r(308));Zi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Zi=Zi.next=n;return a}var q_=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,s){e.push(s)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},j_=o.unstable_scheduleCallback,Y_=o.unstable_NormalPriority,sn={$$typeof:O,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function mu(){return{controller:new q_,data:new Map,refCount:0}}function Js(e){e.refCount--,e.refCount===0&&j_(Y_,function(){e.controller.abort()})}var $s=null,gu=0,jr=0,Yr=null;function Z_(e,n){if($s===null){var a=$s=[];gu=0,jr=Sf(),Yr={status:"pending",value:void 0,then:function(s){a.push(s)}}}return gu++,n.then(bp,bp),n}function bp(){if(--gu===0&&$s!==null){Yr!==null&&(Yr.status="fulfilled");var e=$s;$s=null,jr=0,Yr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function K_(e,n){var a=[],s={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return e.then(function(){s.status="fulfilled",s.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(s.status="rejected",s.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),s}var Ep=B.S;B.S=function(e,n){o0=M(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Z_(e,n),Ep!==null&&Ep(e,n)};var ur=U(null);function vu(){var e=ur.current;return e!==null?e:kt.pooledCache}function dl(e,n){n===null?ve(ur,ur.current):ve(ur,n.pool)}function Tp(){var e=vu();return e===null?null:{parent:sn._currentValue,pool:e}}var Zr=Error(r(460)),_u=Error(r(474)),hl=Error(r(542)),pl={then:function(){}};function Ap(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Rp(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Wi,Wi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,wp(e),e;default:if(typeof n.status=="string")n.then(Wi,Wi);else{if(e=kt,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(s){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=s}},function(s){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,wp(e),e}throw dr=n,Zr}}function fr(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(dr=a,Zr):a}}var dr=null;function Cp(){if(dr===null)throw Error(r(459));var e=dr;return dr=null,e}function wp(e){if(e===Zr||e===hl)throw Error(r(483))}var Kr=null,eo=0;function ml(e){var n=eo;return eo+=1,Kr===null&&(Kr=[]),Rp(Kr,e,n)}function to(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function gl(e,n){throw n.$$typeof===S?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Dp(e){function n(Y,X){if(e){var Q=Y.deletions;Q===null?(Y.deletions=[X],Y.flags|=16):Q.push(X)}}function a(Y,X){if(!e)return null;for(;X!==null;)n(Y,X),X=X.sibling;return null}function s(Y){for(var X=new Map;Y!==null;)Y.key!==null?X.set(Y.key,Y):X.set(Y.index,Y),Y=Y.sibling;return X}function c(Y,X){return Y=ji(Y,X),Y.index=0,Y.sibling=null,Y}function f(Y,X,Q){return Y.index=Q,e?(Q=Y.alternate,Q!==null?(Q=Q.index,Q<X?(Y.flags|=67108866,X):Q):(Y.flags|=67108866,X)):(Y.flags|=1048576,X)}function g(Y){return e&&Y.alternate===null&&(Y.flags|=67108866),Y}function T(Y,X,Q,me){return X===null||X.tag!==6?(X=su(Q,Y.mode,me),X.return=Y,X):(X=c(X,Q),X.return=Y,X)}function G(Y,X,Q,me){var Qe=Q.type;return Qe===w?de(Y,X,Q.props.children,me,Q.key):X!==null&&(X.elementType===Qe||typeof Qe=="object"&&Qe!==null&&Qe.$$typeof===K&&fr(Qe)===X.type)?(X=c(X,Q.props),to(X,Q),X.return=Y,X):(X=ll(Q.type,Q.key,Q.props,null,Y.mode,me),to(X,Q),X.return=Y,X)}function $(Y,X,Q,me){return X===null||X.tag!==4||X.stateNode.containerInfo!==Q.containerInfo||X.stateNode.implementation!==Q.implementation?(X=ou(Q,Y.mode,me),X.return=Y,X):(X=c(X,Q.children||[]),X.return=Y,X)}function de(Y,X,Q,me,Qe){return X===null||X.tag!==7?(X=sr(Q,Y.mode,me,Qe),X.return=Y,X):(X=c(X,Q),X.return=Y,X)}function ge(Y,X,Q){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=su(""+X,Y.mode,Q),X.return=Y,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case b:return Q=ll(X.type,X.key,X.props,null,Y.mode,Q),to(Q,X),Q.return=Y,Q;case R:return X=ou(X,Y.mode,Q),X.return=Y,X;case K:return X=fr(X),ge(Y,X,Q)}if(fe(X)||J(X))return X=sr(X,Y.mode,Q,null),X.return=Y,X;if(typeof X.then=="function")return ge(Y,ml(X),Q);if(X.$$typeof===O)return ge(Y,fl(Y,X),Q);gl(Y,X)}return null}function te(Y,X,Q,me){var Qe=X!==null?X.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return Qe!==null?null:T(Y,X,""+Q,me);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case b:return Q.key===Qe?G(Y,X,Q,me):null;case R:return Q.key===Qe?$(Y,X,Q,me):null;case K:return Q=fr(Q),te(Y,X,Q,me)}if(fe(Q)||J(Q))return Qe!==null?null:de(Y,X,Q,me,null);if(typeof Q.then=="function")return te(Y,X,ml(Q),me);if(Q.$$typeof===O)return te(Y,X,fl(Y,Q),me);gl(Y,Q)}return null}function le(Y,X,Q,me,Qe){if(typeof me=="string"&&me!==""||typeof me=="number"||typeof me=="bigint")return Y=Y.get(Q)||null,T(X,Y,""+me,Qe);if(typeof me=="object"&&me!==null){switch(me.$$typeof){case b:return Y=Y.get(me.key===null?Q:me.key)||null,G(X,Y,me,Qe);case R:return Y=Y.get(me.key===null?Q:me.key)||null,$(X,Y,me,Qe);case K:return me=fr(me),le(Y,X,Q,me,Qe)}if(fe(me)||J(me))return Y=Y.get(Q)||null,de(X,Y,me,Qe,null);if(typeof me.then=="function")return le(Y,X,Q,ml(me),Qe);if(me.$$typeof===O)return le(Y,X,Q,fl(X,me),Qe);gl(X,me)}return null}function Ve(Y,X,Q,me){for(var Qe=null,Et=null,Ye=X,ct=X=0,_t=null;Ye!==null&&ct<Q.length;ct++){Ye.index>ct?(_t=Ye,Ye=null):_t=Ye.sibling;var Tt=te(Y,Ye,Q[ct],me);if(Tt===null){Ye===null&&(Ye=_t);break}e&&Ye&&Tt.alternate===null&&n(Y,Ye),X=f(Tt,X,ct),Et===null?Qe=Tt:Et.sibling=Tt,Et=Tt,Ye=_t}if(ct===Q.length)return a(Y,Ye),xt&&Yi(Y,ct),Qe;if(Ye===null){for(;ct<Q.length;ct++)Ye=ge(Y,Q[ct],me),Ye!==null&&(X=f(Ye,X,ct),Et===null?Qe=Ye:Et.sibling=Ye,Et=Ye);return xt&&Yi(Y,ct),Qe}for(Ye=s(Ye);ct<Q.length;ct++)_t=le(Ye,Y,ct,Q[ct],me),_t!==null&&(e&&_t.alternate!==null&&Ye.delete(_t.key===null?ct:_t.key),X=f(_t,X,ct),Et===null?Qe=_t:Et.sibling=_t,Et=_t);return e&&Ye.forEach(function(Xa){return n(Y,Xa)}),xt&&Yi(Y,ct),Qe}function et(Y,X,Q,me){if(Q==null)throw Error(r(151));for(var Qe=null,Et=null,Ye=X,ct=X=0,_t=null,Tt=Q.next();Ye!==null&&!Tt.done;ct++,Tt=Q.next()){Ye.index>ct?(_t=Ye,Ye=null):_t=Ye.sibling;var Xa=te(Y,Ye,Tt.value,me);if(Xa===null){Ye===null&&(Ye=_t);break}e&&Ye&&Xa.alternate===null&&n(Y,Ye),X=f(Xa,X,ct),Et===null?Qe=Xa:Et.sibling=Xa,Et=Xa,Ye=_t}if(Tt.done)return a(Y,Ye),xt&&Yi(Y,ct),Qe;if(Ye===null){for(;!Tt.done;ct++,Tt=Q.next())Tt=ge(Y,Tt.value,me),Tt!==null&&(X=f(Tt,X,ct),Et===null?Qe=Tt:Et.sibling=Tt,Et=Tt);return xt&&Yi(Y,ct),Qe}for(Ye=s(Ye);!Tt.done;ct++,Tt=Q.next())Tt=le(Ye,Y,ct,Tt.value,me),Tt!==null&&(e&&Tt.alternate!==null&&Ye.delete(Tt.key===null?ct:Tt.key),X=f(Tt,X,ct),Et===null?Qe=Tt:Et.sibling=Tt,Et=Tt);return e&&Ye.forEach(function(oS){return n(Y,oS)}),xt&&Yi(Y,ct),Qe}function Vt(Y,X,Q,me){if(typeof Q=="object"&&Q!==null&&Q.type===w&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case b:e:{for(var Qe=Q.key;X!==null;){if(X.key===Qe){if(Qe=Q.type,Qe===w){if(X.tag===7){a(Y,X.sibling),me=c(X,Q.props.children),me.return=Y,Y=me;break e}}else if(X.elementType===Qe||typeof Qe=="object"&&Qe!==null&&Qe.$$typeof===K&&fr(Qe)===X.type){a(Y,X.sibling),me=c(X,Q.props),to(me,Q),me.return=Y,Y=me;break e}a(Y,X);break}else n(Y,X);X=X.sibling}Q.type===w?(me=sr(Q.props.children,Y.mode,me,Q.key),me.return=Y,Y=me):(me=ll(Q.type,Q.key,Q.props,null,Y.mode,me),to(me,Q),me.return=Y,Y=me)}return g(Y);case R:e:{for(Qe=Q.key;X!==null;){if(X.key===Qe)if(X.tag===4&&X.stateNode.containerInfo===Q.containerInfo&&X.stateNode.implementation===Q.implementation){a(Y,X.sibling),me=c(X,Q.children||[]),me.return=Y,Y=me;break e}else{a(Y,X);break}else n(Y,X);X=X.sibling}me=ou(Q,Y.mode,me),me.return=Y,Y=me}return g(Y);case K:return Q=fr(Q),Vt(Y,X,Q,me)}if(fe(Q))return Ve(Y,X,Q,me);if(J(Q)){if(Qe=J(Q),typeof Qe!="function")throw Error(r(150));return Q=Qe.call(Q),et(Y,X,Q,me)}if(typeof Q.then=="function")return Vt(Y,X,ml(Q),me);if(Q.$$typeof===O)return Vt(Y,X,fl(Y,Q),me);gl(Y,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint"?(Q=""+Q,X!==null&&X.tag===6?(a(Y,X.sibling),me=c(X,Q),me.return=Y,Y=me):(a(Y,X),me=su(Q,Y.mode,me),me.return=Y,Y=me),g(Y)):a(Y,X)}return function(Y,X,Q,me){try{eo=0;var Qe=Vt(Y,X,Q,me);return Kr=null,Qe}catch(Ye){if(Ye===Zr||Ye===hl)throw Ye;var Et=jn(29,Ye,null,Y.mode);return Et.lanes=me,Et.return=Y,Et}}}var hr=Dp(!0),Up=Dp(!1),Ra=!1;function xu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Su(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ca(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function wa(e,n,a){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,(Ut&2)!==0){var c=s.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),s.pending=n,n=ol(e),pp(e,null,a),n}return sl(e,s,n,a),ol(e)}function no(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=e.pendingLanes,a|=s,n.lanes=a,Bs(e,a)}}function yu(e,n){var a=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var g={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=g:f=f.next=g,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:s.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Mu=!1;function io(){if(Mu){var e=Yr;if(e!==null)throw e}}function ao(e,n,a,s){Mu=!1;var c=e.updateQueue;Ra=!1;var f=c.firstBaseUpdate,g=c.lastBaseUpdate,T=c.shared.pending;if(T!==null){c.shared.pending=null;var G=T,$=G.next;G.next=null,g===null?f=$:g.next=$,g=G;var de=e.alternate;de!==null&&(de=de.updateQueue,T=de.lastBaseUpdate,T!==g&&(T===null?de.firstBaseUpdate=$:T.next=$,de.lastBaseUpdate=G))}if(f!==null){var ge=c.baseState;g=0,de=$=G=null,T=f;do{var te=T.lane&-536870913,le=te!==T.lane;if(le?(vt&te)===te:(s&te)===te){te!==0&&te===jr&&(Mu=!0),de!==null&&(de=de.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});e:{var Ve=e,et=T;te=n;var Vt=a;switch(et.tag){case 1:if(Ve=et.payload,typeof Ve=="function"){ge=Ve.call(Vt,ge,te);break e}ge=Ve;break e;case 3:Ve.flags=Ve.flags&-65537|128;case 0:if(Ve=et.payload,te=typeof Ve=="function"?Ve.call(Vt,ge,te):Ve,te==null)break e;ge=v({},ge,te);break e;case 2:Ra=!0}}te=T.callback,te!==null&&(e.flags|=64,le&&(e.flags|=8192),le=c.callbacks,le===null?c.callbacks=[te]:le.push(te))}else le={lane:te,tag:T.tag,payload:T.payload,callback:T.callback,next:null},de===null?($=de=le,G=ge):de=de.next=le,g|=te;if(T=T.next,T===null){if(T=c.shared.pending,T===null)break;le=T,T=le.next,le.next=null,c.lastBaseUpdate=le,c.shared.pending=null}}while(!0);de===null&&(G=ge),c.baseState=G,c.firstBaseUpdate=$,c.lastBaseUpdate=de,f===null&&(c.shared.lanes=0),Oa|=g,e.lanes=g,e.memoizedState=ge}}function Np(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function Lp(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Np(a[e],n)}var Qr=U(null),vl=U(0);function Op(e,n){e=ra,ve(vl,e),ve(Qr,n),ra=e|n.baseLanes}function bu(){ve(vl,ra),ve(Qr,Qr.current)}function Eu(){ra=vl.current,ie(Qr),ie(vl)}var Yn=U(null),fi=null;function Da(e){var n=e.alternate;ve(nn,nn.current&1),ve(Yn,e),fi===null&&(n===null||Qr.current!==null||n.memoizedState!==null)&&(fi=e)}function Tu(e){ve(nn,nn.current),ve(Yn,e),fi===null&&(fi=e)}function Pp(e){e.tag===22?(ve(nn,nn.current),ve(Yn,e),fi===null&&(fi=e)):Ua()}function Ua(){ve(nn,nn.current),ve(Yn,Yn.current)}function Zn(e){ie(Yn),fi===e&&(fi=null),ie(nn)}var nn=U(0);function _l(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Nf(a)||Lf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Qi=0,ot=null,Ht=null,on=null,xl=!1,Jr=!1,pr=!1,Sl=0,ro=0,$r=null,Q_=0;function Jt(){throw Error(r(321))}function Au(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!qn(e[a],n[a]))return!1;return!0}function Ru(e,n,a,s,c,f){return Qi=f,ot=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,B.H=e===null||e.memoizedState===null?_m:Vu,pr=!1,f=a(s,c),pr=!1,Jr&&(f=zp(n,a,s,c)),Bp(e),f}function Bp(e){B.H=lo;var n=Ht!==null&&Ht.next!==null;if(Qi=0,on=Ht=ot=null,xl=!1,ro=0,$r=null,n)throw Error(r(300));e===null||ln||(e=e.dependencies,e!==null&&ul(e)&&(ln=!0))}function zp(e,n,a,s){ot=e;var c=0;do{if(Jr&&($r=null),ro=0,Jr=!1,25<=c)throw Error(r(301));if(c+=1,on=Ht=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}B.H=xm,f=n(a,s)}while(Jr);return f}function J_(){var e=B.H,n=e.useState()[0];return n=typeof n.then=="function"?so(n):n,e=e.useState()[0],(Ht!==null?Ht.memoizedState:null)!==e&&(ot.flags|=1024),n}function Cu(){var e=Sl!==0;return Sl=0,e}function wu(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Du(e){if(xl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}xl=!1}Qi=0,on=Ht=ot=null,Jr=!1,ro=Sl=0,$r=null}function Ln(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return on===null?ot.memoizedState=on=e:on=on.next=e,on}function an(){if(Ht===null){var e=ot.alternate;e=e!==null?e.memoizedState:null}else e=Ht.next;var n=on===null?ot.memoizedState:on.next;if(n!==null)on=n,Ht=e;else{if(e===null)throw ot.alternate===null?Error(r(467)):Error(r(310));Ht=e,e={memoizedState:Ht.memoizedState,baseState:Ht.baseState,baseQueue:Ht.baseQueue,queue:Ht.queue,next:null},on===null?ot.memoizedState=on=e:on=on.next=e}return on}function yl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function so(e){var n=ro;return ro+=1,$r===null&&($r=[]),e=Rp($r,e,n),n=ot,(on===null?n.memoizedState:on.next)===null&&(n=n.alternate,B.H=n===null||n.memoizedState===null?_m:Vu),e}function Ml(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return so(e);if(e.$$typeof===O)return En(e)}throw Error(r(438,String(e)))}function Uu(e){var n=null,a=ot.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=ot.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=yl(),ot.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),s=0;s<e;s++)a[s]=E;return n.index++,a}function Ji(e,n){return typeof n=="function"?n(e):n}function bl(e){var n=an();return Nu(n,Ht,e)}function Nu(e,n,a){var s=e.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var c=e.baseQueue,f=s.pending;if(f!==null){if(c!==null){var g=c.next;c.next=f.next,f.next=g}n.baseQueue=c=f,s.pending=null}if(f=e.baseState,c===null)e.memoizedState=f;else{n=c.next;var T=g=null,G=null,$=n,de=!1;do{var ge=$.lane&-536870913;if(ge!==$.lane?(vt&ge)===ge:(Qi&ge)===ge){var te=$.revertLane;if(te===0)G!==null&&(G=G.next={lane:0,revertLane:0,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),ge===jr&&(de=!0);else if((Qi&te)===te){$=$.next,te===jr&&(de=!0);continue}else ge={lane:0,revertLane:$.revertLane,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},G===null?(T=G=ge,g=f):G=G.next=ge,ot.lanes|=te,Oa|=te;ge=$.action,pr&&a(f,ge),f=$.hasEagerState?$.eagerState:a(f,ge)}else te={lane:ge,revertLane:$.revertLane,gesture:$.gesture,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},G===null?(T=G=te,g=f):G=G.next=te,ot.lanes|=ge,Oa|=ge;$=$.next}while($!==null&&$!==n);if(G===null?g=f:G.next=T,!qn(f,e.memoizedState)&&(ln=!0,de&&(a=Yr,a!==null)))throw a;e.memoizedState=f,e.baseState=g,e.baseQueue=G,s.lastRenderedState=f}return c===null&&(s.lanes=0),[e.memoizedState,s.dispatch]}function Lu(e){var n=an(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var s=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var g=c=c.next;do f=e(f,g.action),g=g.next;while(g!==c);qn(f,n.memoizedState)||(ln=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function Fp(e,n,a){var s=ot,c=an(),f=xt;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var g=!qn((Ht||c).memoizedState,a);if(g&&(c.memoizedState=a,ln=!0),c=c.queue,Bu(Gp.bind(null,s,c,e),[e]),c.getSnapshot!==n||g||on!==null&&on.memoizedState.tag&1){if(s.flags|=2048,es(9,{destroy:void 0},Hp.bind(null,s,c,a,n),null),kt===null)throw Error(r(349));f||(Qi&127)!==0||Ip(s,n,a)}return a}function Ip(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=ot.updateQueue,n===null?(n=yl(),ot.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Hp(e,n,a,s){n.value=a,n.getSnapshot=s,Vp(n)&&kp(e)}function Gp(e,n,a){return a(function(){Vp(n)&&kp(e)})}function Vp(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!qn(e,a)}catch{return!0}}function kp(e){var n=rr(e,2);n!==null&&Vn(n,e,2)}function Ou(e){var n=Ln();if(typeof e=="function"){var a=e;if(e=a(),pr){ze(!0);try{a()}finally{ze(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ji,lastRenderedState:e},n}function Xp(e,n,a,s){return e.baseState=a,Nu(e,Ht,typeof s=="function"?s:Ji)}function $_(e,n,a,s,c){if(Al(e))throw Error(r(485));if(e=n.action,e!==null){var f={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(g){f.listeners.push(g)}};B.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,Wp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Wp(e,n){var a=n.action,s=n.payload,c=e.state;if(n.isTransition){var f=B.T,g={};B.T=g;try{var T=a(c,s),G=B.S;G!==null&&G(g,T),qp(e,n,T)}catch($){Pu(e,n,$)}finally{f!==null&&g.types!==null&&(f.types=g.types),B.T=f}}else try{f=a(c,s),qp(e,n,f)}catch($){Pu(e,n,$)}}function qp(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){jp(e,n,s)},function(s){return Pu(e,n,s)}):jp(e,n,a)}function jp(e,n,a){n.status="fulfilled",n.value=a,Yp(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Wp(e,a)))}function Pu(e,n,a){var s=e.pending;if(e.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,Yp(n),n=n.next;while(n!==s)}e.action=null}function Yp(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Zp(e,n){return n}function Kp(e,n){if(xt){var a=kt.formState;if(a!==null){e:{var s=ot;if(xt){if(Wt){t:{for(var c=Wt,f=ui;c.nodeType!==8;){if(!f){c=null;break t}if(c=di(c.nextSibling),c===null){c=null;break t}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){Wt=di(c.nextSibling),s=c.data==="F!";break e}}Ta(s)}s=!1}s&&(n=a[0])}}return a=Ln(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zp,lastRenderedState:n},a.queue=s,a=mm.bind(null,ot,s),s.dispatch=a,s=Ou(!1),f=Gu.bind(null,ot,!1,s.queue),s=Ln(),c={state:n,dispatch:null,action:e,pending:null},s.queue=c,a=$_.bind(null,ot,c,f,a),c.dispatch=a,s.memoizedState=e,[n,a,!1]}function Qp(e){var n=an();return Jp(n,Ht,e)}function Jp(e,n,a){if(n=Nu(e,n,Zp)[0],e=bl(Ji)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=so(n)}catch(g){throw g===Zr?hl:g}else s=n;n=an();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(ot.flags|=2048,es(9,{destroy:void 0},ex.bind(null,c,a),null)),[s,f,e]}function ex(e,n){e.action=n}function $p(e){var n=an(),a=Ht;if(a!==null)return Jp(n,a,e);an(),n=n.memoizedState,a=an();var s=a.queue.dispatch;return a.memoizedState=e,[n,s,!1]}function es(e,n,a,s){return e={tag:e,create:a,deps:s,inst:n,next:null},n=ot.updateQueue,n===null&&(n=yl(),ot.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(s=a.next,a.next=e,e.next=s,n.lastEffect=e),e}function em(){return an().memoizedState}function El(e,n,a,s){var c=Ln();ot.flags|=e,c.memoizedState=es(1|n,{destroy:void 0},a,s===void 0?null:s)}function Tl(e,n,a,s){var c=an();s=s===void 0?null:s;var f=c.memoizedState.inst;Ht!==null&&s!==null&&Au(s,Ht.memoizedState.deps)?c.memoizedState=es(n,f,a,s):(ot.flags|=e,c.memoizedState=es(1|n,f,a,s))}function tm(e,n){El(8390656,8,e,n)}function Bu(e,n){Tl(2048,8,e,n)}function tx(e){ot.flags|=4;var n=ot.updateQueue;if(n===null)n=yl(),ot.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function nm(e){var n=an().memoizedState;return tx({ref:n,nextImpl:e}),function(){if((Ut&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function im(e,n){return Tl(4,2,e,n)}function am(e,n){return Tl(4,4,e,n)}function rm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function sm(e,n,a){a=a!=null?a.concat([e]):null,Tl(4,4,rm.bind(null,n,e),a)}function zu(){}function om(e,n){var a=an();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&Au(n,s[1])?s[0]:(a.memoizedState=[e,n],e)}function lm(e,n){var a=an();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&Au(n,s[1]))return s[0];if(s=e(),pr){ze(!0);try{e()}finally{ze(!1)}}return a.memoizedState=[s,n],s}function Fu(e,n,a){return a===void 0||(Qi&1073741824)!==0&&(vt&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=c0(),ot.lanes|=e,Oa|=e,a)}function cm(e,n,a,s){return qn(a,n)?a:Qr.current!==null?(e=Fu(e,a,s),qn(e,n)||(ln=!0),e):(Qi&42)===0||(Qi&1073741824)!==0&&(vt&261930)===0?(ln=!0,e.memoizedState=a):(e=c0(),ot.lanes|=e,Oa|=e,n)}function um(e,n,a,s,c){var f=V.p;V.p=f!==0&&8>f?f:8;var g=B.T,T={};B.T=T,Gu(e,!1,n,a);try{var G=c(),$=B.S;if($!==null&&$(T,G),G!==null&&typeof G=="object"&&typeof G.then=="function"){var de=K_(G,s);oo(e,n,de,Jn(e))}else oo(e,n,s,Jn(e))}catch(ge){oo(e,n,{then:function(){},status:"rejected",reason:ge},Jn())}finally{V.p=f,g!==null&&T.types!==null&&(g.types=T.types),B.T=g}}function nx(){}function Iu(e,n,a,s){if(e.tag!==5)throw Error(r(476));var c=fm(e).queue;um(e,c,n,re,a===null?nx:function(){return dm(e),a(s)})}function fm(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:re,baseState:re,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ji,lastRenderedState:re},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ji,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function dm(e){var n=fm(e);n.next===null&&(n=e.alternate.memoizedState),oo(e,n.next.queue,{},Jn())}function Hu(){return En(To)}function hm(){return an().memoizedState}function pm(){return an().memoizedState}function ix(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=Jn();e=Ca(a);var s=wa(n,e,a);s!==null&&(Vn(s,n,a),no(s,n,a)),n={cache:mu()},e.payload=n;return}n=n.return}}function ax(e,n,a){var s=Jn();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Al(e)?gm(n,a):(a=au(e,n,a,s),a!==null&&(Vn(a,e,s),vm(a,n,s)))}function mm(e,n,a){var s=Jn();oo(e,n,a,s)}function oo(e,n,a,s){var c={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Al(e))gm(n,c);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var g=n.lastRenderedState,T=f(g,a);if(c.hasEagerState=!0,c.eagerState=T,qn(T,g))return sl(e,n,c,0),kt===null&&rl(),!1}catch{}if(a=au(e,n,c,s),a!==null)return Vn(a,e,s),vm(a,n,s),!0}return!1}function Gu(e,n,a,s){if(s={lane:2,revertLane:Sf(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},Al(e)){if(n)throw Error(r(479))}else n=au(e,a,s,2),n!==null&&Vn(n,e,2)}function Al(e){var n=e.alternate;return e===ot||n!==null&&n===ot}function gm(e,n){Jr=xl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function vm(e,n,a){if((a&4194048)!==0){var s=n.lanes;s&=e.pendingLanes,a|=s,n.lanes=a,Bs(e,a)}}var lo={readContext:En,use:Ml,useCallback:Jt,useContext:Jt,useEffect:Jt,useImperativeHandle:Jt,useLayoutEffect:Jt,useInsertionEffect:Jt,useMemo:Jt,useReducer:Jt,useRef:Jt,useState:Jt,useDebugValue:Jt,useDeferredValue:Jt,useTransition:Jt,useSyncExternalStore:Jt,useId:Jt,useHostTransitionStatus:Jt,useFormState:Jt,useActionState:Jt,useOptimistic:Jt,useMemoCache:Jt,useCacheRefresh:Jt};lo.useEffectEvent=Jt;var _m={readContext:En,use:Ml,useCallback:function(e,n){return Ln().memoizedState=[e,n===void 0?null:n],e},useContext:En,useEffect:tm,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,El(4194308,4,rm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return El(4194308,4,e,n)},useInsertionEffect:function(e,n){El(4,2,e,n)},useMemo:function(e,n){var a=Ln();n=n===void 0?null:n;var s=e();if(pr){ze(!0);try{e()}finally{ze(!1)}}return a.memoizedState=[s,n],s},useReducer:function(e,n,a){var s=Ln();if(a!==void 0){var c=a(n);if(pr){ze(!0);try{a(n)}finally{ze(!1)}}}else c=n;return s.memoizedState=s.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},s.queue=e,e=e.dispatch=ax.bind(null,ot,e),[s.memoizedState,e]},useRef:function(e){var n=Ln();return e={current:e},n.memoizedState=e},useState:function(e){e=Ou(e);var n=e.queue,a=mm.bind(null,ot,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:zu,useDeferredValue:function(e,n){var a=Ln();return Fu(a,e,n)},useTransition:function(){var e=Ou(!1);return e=um.bind(null,ot,e.queue,!0,!1),Ln().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var s=ot,c=Ln();if(xt){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),kt===null)throw Error(r(349));(vt&127)!==0||Ip(s,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,tm(Gp.bind(null,s,f,e),[e]),s.flags|=2048,es(9,{destroy:void 0},Hp.bind(null,s,f,a,n),null),a},useId:function(){var e=Ln(),n=kt.identifierPrefix;if(xt){var a=Ui,s=Di;a=(s&~(1<<32-Pe(s)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Sl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Q_++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Hu,useFormState:Kp,useActionState:Kp,useOptimistic:function(e){var n=Ln();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Gu.bind(null,ot,!0,a),a.dispatch=n,[e,n]},useMemoCache:Uu,useCacheRefresh:function(){return Ln().memoizedState=ix.bind(null,ot)},useEffectEvent:function(e){var n=Ln(),a={impl:e};return n.memoizedState=a,function(){if((Ut&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},Vu={readContext:En,use:Ml,useCallback:om,useContext:En,useEffect:Bu,useImperativeHandle:sm,useInsertionEffect:im,useLayoutEffect:am,useMemo:lm,useReducer:bl,useRef:em,useState:function(){return bl(Ji)},useDebugValue:zu,useDeferredValue:function(e,n){var a=an();return cm(a,Ht.memoizedState,e,n)},useTransition:function(){var e=bl(Ji)[0],n=an().memoizedState;return[typeof e=="boolean"?e:so(e),n]},useSyncExternalStore:Fp,useId:hm,useHostTransitionStatus:Hu,useFormState:Qp,useActionState:Qp,useOptimistic:function(e,n){var a=an();return Xp(a,Ht,e,n)},useMemoCache:Uu,useCacheRefresh:pm};Vu.useEffectEvent=nm;var xm={readContext:En,use:Ml,useCallback:om,useContext:En,useEffect:Bu,useImperativeHandle:sm,useInsertionEffect:im,useLayoutEffect:am,useMemo:lm,useReducer:Lu,useRef:em,useState:function(){return Lu(Ji)},useDebugValue:zu,useDeferredValue:function(e,n){var a=an();return Ht===null?Fu(a,e,n):cm(a,Ht.memoizedState,e,n)},useTransition:function(){var e=Lu(Ji)[0],n=an().memoizedState;return[typeof e=="boolean"?e:so(e),n]},useSyncExternalStore:Fp,useId:hm,useHostTransitionStatus:Hu,useFormState:$p,useActionState:$p,useOptimistic:function(e,n){var a=an();return Ht!==null?Xp(a,Ht,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Uu,useCacheRefresh:pm};xm.useEffectEvent=nm;function ku(e,n,a,s){n=e.memoizedState,a=a(s,n),a=a==null?n:v({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Xu={enqueueSetState:function(e,n,a){e=e._reactInternals;var s=Jn(),c=Ca(s);c.payload=n,a!=null&&(c.callback=a),n=wa(e,c,s),n!==null&&(Vn(n,e,s),no(n,e,s))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var s=Jn(),c=Ca(s);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=wa(e,c,s),n!==null&&(Vn(n,e,s),no(n,e,s))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=Jn(),s=Ca(a);s.tag=2,n!=null&&(s.callback=n),n=wa(e,s,a),n!==null&&(Vn(n,e,a),no(n,e,a))}};function Sm(e,n,a,s,c,f,g){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,f,g):n.prototype&&n.prototype.isPureReactComponent?!Ys(a,s)||!Ys(c,f):!0}function ym(e,n,a,s){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==e&&Xu.enqueueReplaceState(n,n.state,null)}function mr(e,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(e=e.defaultProps){a===n&&(a=v({},a));for(var c in e)a[c]===void 0&&(a[c]=e[c])}return a}function Mm(e){al(e)}function bm(e){console.error(e)}function Em(e){al(e)}function Rl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function Tm(e,n,a){try{var s=e.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Wu(e,n,a){return a=Ca(a),a.tag=3,a.payload={element:null},a.callback=function(){Rl(e,n)},a}function Am(e){return e=Ca(e),e.tag=3,e}function Rm(e,n,a,s){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=s.value;e.payload=function(){return c(f)},e.callback=function(){Tm(n,a,s)}}var g=a.stateNode;g!==null&&typeof g.componentDidCatch=="function"&&(e.callback=function(){Tm(n,a,s),typeof c!="function"&&(Pa===null?Pa=new Set([this]):Pa.add(this));var T=s.stack;this.componentDidCatch(s.value,{componentStack:T!==null?T:""})})}function rx(e,n,a,s,c){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&qr(n,a,c,!0),a=Yn.current,a!==null){switch(a.tag){case 31:case 13:return fi===null?Il():a.alternate===null&&$t===0&&($t=3),a.flags&=-257,a.flags|=65536,a.lanes=c,s===pl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),vf(e,s,c)),!1;case 22:return a.flags|=65536,s===pl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),vf(e,s,c)),!1}throw Error(r(435,a.tag))}return vf(e,s,c),Il(),!1}if(xt)return n=Yn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,s!==uu&&(e=Error(r(422),{cause:s}),Qs(oi(e,a)))):(s!==uu&&(n=Error(r(423),{cause:s}),Qs(oi(n,a))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,s=oi(s,a),c=Wu(e.stateNode,s,c),yu(e,c),$t!==4&&($t=2)),!1;var f=Error(r(520),{cause:s});if(f=oi(f,a),vo===null?vo=[f]:vo.push(f),$t!==4&&($t=2),n===null)return!0;s=oi(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=c&-c,a.lanes|=e,e=Wu(a.stateNode,s,e),yu(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Pa===null||!Pa.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=Am(c),Rm(c,e,a,s),yu(a,c),!1}a=a.return}while(a!==null);return!1}var qu=Error(r(461)),ln=!1;function Tn(e,n,a,s){n.child=e===null?Up(n,null,a,s):hr(n,e.child,a,s)}function Cm(e,n,a,s,c){a=a.render;var f=n.ref;if("ref"in s){var g={};for(var T in s)T!=="ref"&&(g[T]=s[T])}else g=s;return cr(n),s=Ru(e,n,a,g,f,c),T=Cu(),e!==null&&!ln?(wu(e,n,c),$i(e,n,c)):(xt&&T&&lu(n),n.flags|=1,Tn(e,n,s,c),n.child)}function wm(e,n,a,s,c){if(e===null){var f=a.type;return typeof f=="function"&&!ru(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Dm(e,n,f,s,c)):(e=ll(a.type,null,s,n,n.mode,c),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!ef(e,c)){var g=f.memoizedProps;if(a=a.compare,a=a!==null?a:Ys,a(g,s)&&e.ref===n.ref)return $i(e,n,c)}return n.flags|=1,e=ji(f,s),e.ref=n.ref,e.return=n,n.child=e}function Dm(e,n,a,s,c){if(e!==null){var f=e.memoizedProps;if(Ys(f,s)&&e.ref===n.ref)if(ln=!1,n.pendingProps=s=f,ef(e,c))(e.flags&131072)!==0&&(ln=!0);else return n.lanes=e.lanes,$i(e,n,c)}return ju(e,n,a,s,c)}function Um(e,n,a,s){var c=s.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(s=n.child=e.child,c=0;s!==null;)c=c|s.lanes|s.childLanes,s=s.sibling;s=c&~f}else s=0,n.child=null;return Nm(e,n,f,a,s)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&dl(n,f!==null?f.cachePool:null),f!==null?Op(n,f):bu(),Pp(n);else return s=n.lanes=536870912,Nm(e,n,f!==null?f.baseLanes|a:a,a,s)}else f!==null?(dl(n,f.cachePool),Op(n,f),Ua(),n.memoizedState=null):(e!==null&&dl(n,null),bu(),Ua());return Tn(e,n,c,a),n.child}function co(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Nm(e,n,a,s,c){var f=vu();return f=f===null?null:{parent:sn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&dl(n,null),bu(),Pp(n),e!==null&&qr(e,n,s,!0),n.childLanes=c,null}function Cl(e,n){return n=Dl({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function Lm(e,n,a){return hr(n,e.child,null,a),e=Cl(n,n.pendingProps),e.flags|=2,Zn(n),n.memoizedState=null,e}function sx(e,n,a){var s=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(xt){if(s.mode==="hidden")return e=Cl(n,s),n.lanes=536870912,co(null,e);if(Tu(n),(e=Wt)?(e=W0(e,ui),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:ba!==null?{id:Di,overflow:Ui}:null,retryLane:536870912,hydrationErrors:null},a=gp(e),a.return=n,n.child=a,bn=n,Wt=null)):e=null,e===null)throw Ta(n);return n.lanes=536870912,null}return Cl(n,s)}var f=e.memoizedState;if(f!==null){var g=f.dehydrated;if(Tu(n),c)if(n.flags&256)n.flags&=-257,n=Lm(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(r(558));else if(ln||qr(e,n,a,!1),c=(a&e.childLanes)!==0,ln||c){if(s=kt,s!==null&&(g=Ur(s,a),g!==0&&g!==f.retryLane))throw f.retryLane=g,rr(e,g),Vn(s,e,g),qu;Il(),n=Lm(e,n,a)}else e=f.treeContext,Wt=di(g.nextSibling),bn=n,xt=!0,Ea=null,ui=!1,e!==null&&xp(n,e),n=Cl(n,s),n.flags|=4096;return n}return e=ji(e.child,{mode:s.mode,children:s.children}),e.ref=n.ref,n.child=e,e.return=n,e}function wl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function ju(e,n,a,s,c){return cr(n),a=Ru(e,n,a,s,void 0,c),s=Cu(),e!==null&&!ln?(wu(e,n,c),$i(e,n,c)):(xt&&s&&lu(n),n.flags|=1,Tn(e,n,a,c),n.child)}function Om(e,n,a,s,c,f){return cr(n),n.updateQueue=null,a=zp(n,s,a,c),Bp(e),s=Cu(),e!==null&&!ln?(wu(e,n,f),$i(e,n,f)):(xt&&s&&lu(n),n.flags|=1,Tn(e,n,a,f),n.child)}function Pm(e,n,a,s,c){if(cr(n),n.stateNode===null){var f=Vr,g=a.contextType;typeof g=="object"&&g!==null&&(f=En(g)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Xu,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},xu(n),g=a.contextType,f.context=typeof g=="object"&&g!==null?En(g):Vr,f.state=n.memoizedState,g=a.getDerivedStateFromProps,typeof g=="function"&&(ku(n,a,g,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(g=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),g!==f.state&&Xu.enqueueReplaceState(f,f.state,null),ao(n,s,f,c),io(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(e===null){f=n.stateNode;var T=n.memoizedProps,G=mr(a,T);f.props=G;var $=f.context,de=a.contextType;g=Vr,typeof de=="object"&&de!==null&&(g=En(de));var ge=a.getDerivedStateFromProps;de=typeof ge=="function"||typeof f.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,de||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(T||$!==g)&&ym(n,f,s,g),Ra=!1;var te=n.memoizedState;f.state=te,ao(n,s,f,c),io(),$=n.memoizedState,T||te!==$||Ra?(typeof ge=="function"&&(ku(n,a,ge,s),$=n.memoizedState),(G=Ra||Sm(n,a,G,s,te,$,g))?(de||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=$),f.props=s,f.state=$,f.context=g,s=G):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,Su(e,n),g=n.memoizedProps,de=mr(a,g),f.props=de,ge=n.pendingProps,te=f.context,$=a.contextType,G=Vr,typeof $=="object"&&$!==null&&(G=En($)),T=a.getDerivedStateFromProps,($=typeof T=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(g!==ge||te!==G)&&ym(n,f,s,G),Ra=!1,te=n.memoizedState,f.state=te,ao(n,s,f,c),io();var le=n.memoizedState;g!==ge||te!==le||Ra||e!==null&&e.dependencies!==null&&ul(e.dependencies)?(typeof T=="function"&&(ku(n,a,T,s),le=n.memoizedState),(de=Ra||Sm(n,a,de,s,te,le,G)||e!==null&&e.dependencies!==null&&ul(e.dependencies))?($||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,le,G),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,le,G)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||g===e.memoizedProps&&te===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===e.memoizedProps&&te===e.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=le),f.props=s,f.state=le,f.context=G,s=de):(typeof f.componentDidUpdate!="function"||g===e.memoizedProps&&te===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===e.memoizedProps&&te===e.memoizedState||(n.flags|=1024),s=!1)}return f=s,wl(e,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&s?(n.child=hr(n,e.child,null,c),n.child=hr(n,null,a,c)):Tn(e,n,a,c),n.memoizedState=f.state,e=n.child):e=$i(e,n,c),e}function Bm(e,n,a,s){return or(),n.flags|=256,Tn(e,n,a,s),n.child}var Yu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Zu(e){return{baseLanes:e,cachePool:Tp()}}function Ku(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=Qn),e}function zm(e,n,a){var s=n.pendingProps,c=!1,f=(n.flags&128)!==0,g;if((g=f)||(g=e!==null&&e.memoizedState===null?!1:(nn.current&2)!==0),g&&(c=!0,n.flags&=-129),g=(n.flags&32)!==0,n.flags&=-33,e===null){if(xt){if(c?Da(n):Ua(),(e=Wt)?(e=W0(e,ui),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:ba!==null?{id:Di,overflow:Ui}:null,retryLane:536870912,hydrationErrors:null},a=gp(e),a.return=n,n.child=a,bn=n,Wt=null)):e=null,e===null)throw Ta(n);return Lf(e)?n.lanes=32:n.lanes=536870912,null}var T=s.children;return s=s.fallback,c?(Ua(),c=n.mode,T=Dl({mode:"hidden",children:T},c),s=sr(s,c,a,null),T.return=n,s.return=n,T.sibling=s,n.child=T,s=n.child,s.memoizedState=Zu(a),s.childLanes=Ku(e,g,a),n.memoizedState=Yu,co(null,s)):(Da(n),Qu(n,T))}var G=e.memoizedState;if(G!==null&&(T=G.dehydrated,T!==null)){if(f)n.flags&256?(Da(n),n.flags&=-257,n=Ju(e,n,a)):n.memoizedState!==null?(Ua(),n.child=e.child,n.flags|=128,n=null):(Ua(),T=s.fallback,c=n.mode,s=Dl({mode:"visible",children:s.children},c),T=sr(T,c,a,null),T.flags|=2,s.return=n,T.return=n,s.sibling=T,n.child=s,hr(n,e.child,null,a),s=n.child,s.memoizedState=Zu(a),s.childLanes=Ku(e,g,a),n.memoizedState=Yu,n=co(null,s));else if(Da(n),Lf(T)){if(g=T.nextSibling&&T.nextSibling.dataset,g)var $=g.dgst;g=$,s=Error(r(419)),s.stack="",s.digest=g,Qs({value:s,source:null,stack:null}),n=Ju(e,n,a)}else if(ln||qr(e,n,a,!1),g=(a&e.childLanes)!==0,ln||g){if(g=kt,g!==null&&(s=Ur(g,a),s!==0&&s!==G.retryLane))throw G.retryLane=s,rr(e,s),Vn(g,e,s),qu;Nf(T)||Il(),n=Ju(e,n,a)}else Nf(T)?(n.flags|=192,n.child=e.child,n=null):(e=G.treeContext,Wt=di(T.nextSibling),bn=n,xt=!0,Ea=null,ui=!1,e!==null&&xp(n,e),n=Qu(n,s.children),n.flags|=4096);return n}return c?(Ua(),T=s.fallback,c=n.mode,G=e.child,$=G.sibling,s=ji(G,{mode:"hidden",children:s.children}),s.subtreeFlags=G.subtreeFlags&65011712,$!==null?T=ji($,T):(T=sr(T,c,a,null),T.flags|=2),T.return=n,s.return=n,s.sibling=T,n.child=s,co(null,s),s=n.child,T=e.child.memoizedState,T===null?T=Zu(a):(c=T.cachePool,c!==null?(G=sn._currentValue,c=c.parent!==G?{parent:G,pool:G}:c):c=Tp(),T={baseLanes:T.baseLanes|a,cachePool:c}),s.memoizedState=T,s.childLanes=Ku(e,g,a),n.memoizedState=Yu,co(e.child,s)):(Da(n),a=e.child,e=a.sibling,a=ji(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,e!==null&&(g=n.deletions,g===null?(n.deletions=[e],n.flags|=16):g.push(e)),n.child=a,n.memoizedState=null,a)}function Qu(e,n){return n=Dl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Dl(e,n){return e=jn(22,e,null,n),e.lanes=0,e}function Ju(e,n,a){return hr(n,e.child,null,a),e=Qu(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Fm(e,n,a){e.lanes|=n;var s=e.alternate;s!==null&&(s.lanes|=n),hu(e.return,n,a)}function $u(e,n,a,s,c,f){var g=e.memoizedState;g===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:c,treeForkCount:f}:(g.isBackwards=n,g.rendering=null,g.renderingStartTime=0,g.last=s,g.tail=a,g.tailMode=c,g.treeForkCount=f)}function Im(e,n,a){var s=n.pendingProps,c=s.revealOrder,f=s.tail;s=s.children;var g=nn.current,T=(g&2)!==0;if(T?(g=g&1|2,n.flags|=128):g&=1,ve(nn,g),Tn(e,n,s,a),s=xt?Ks:0,!T&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Fm(e,a,n);else if(e.tag===19)Fm(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(c){case"forwards":for(a=n.child,c=null;a!==null;)e=a.alternate,e!==null&&_l(e)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),$u(n,!1,c,a,f,s);break;case"backwards":case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(e=c.alternate,e!==null&&_l(e)===null){n.child=c;break}e=c.sibling,c.sibling=a,a=c,c=e}$u(n,!0,a,null,f,s);break;case"together":$u(n,!1,null,null,void 0,s);break;default:n.memoizedState=null}return n.child}function $i(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Oa|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(qr(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=ji(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=ji(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function ef(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&ul(e)))}function ox(e,n,a){switch(n.tag){case 3:De(n,n.stateNode.containerInfo),Aa(n,sn,e.memoizedState.cache),or();break;case 27:case 5:He(n);break;case 4:De(n,n.stateNode.containerInfo);break;case 10:Aa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Tu(n),null;break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(Da(n),n.flags|=128,null):(a&n.child.childLanes)!==0?zm(e,n,a):(Da(n),e=$i(e,n,a),e!==null?e.sibling:null);Da(n);break;case 19:var c=(e.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(qr(e,n,a,!1),s=(a&n.childLanes)!==0),c){if(s)return Im(e,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),ve(nn,nn.current),s)break;return null;case 22:return n.lanes=0,Um(e,n,a,n.pendingProps);case 24:Aa(n,sn,e.memoizedState.cache)}return $i(e,n,a)}function Hm(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)ln=!0;else{if(!ef(e,a)&&(n.flags&128)===0)return ln=!1,ox(e,n,a);ln=(e.flags&131072)!==0}else ln=!1,xt&&(n.flags&1048576)!==0&&_p(n,Ks,n.index);switch(n.lanes=0,n.tag){case 16:e:{var s=n.pendingProps;if(e=fr(n.elementType),n.type=e,typeof e=="function")ru(e)?(s=mr(e,s),n.tag=1,n=Pm(null,n,e,s,a)):(n.tag=0,n=ju(null,n,e,s,a));else{if(e!=null){var c=e.$$typeof;if(c===N){n.tag=11,n=Cm(null,n,e,s,a);break e}else if(c===z){n.tag=14,n=wm(null,n,e,s,a);break e}}throw n=pe(e)||e,Error(r(306,n,""))}}return n;case 0:return ju(e,n,n.type,n.pendingProps,a);case 1:return s=n.type,c=mr(s,n.pendingProps),Pm(e,n,s,c,a);case 3:e:{if(De(n,n.stateNode.containerInfo),e===null)throw Error(r(387));s=n.pendingProps;var f=n.memoizedState;c=f.element,Su(e,n),ao(n,s,null,a);var g=n.memoizedState;if(s=g.cache,Aa(n,sn,s),s!==f.cache&&pu(n,[sn],a,!0),io(),s=g.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:g.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Bm(e,n,s,a);break e}else if(s!==c){c=oi(Error(r(424)),n),Qs(c),n=Bm(e,n,s,a);break e}else for(e=n.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Wt=di(e.firstChild),bn=n,xt=!0,Ea=null,ui=!0,a=Up(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(or(),s===c){n=$i(e,n,a);break e}Tn(e,n,s,a)}n=n.child}return n;case 26:return wl(e,n),e===null?(a=Q0(n.type,null,n.pendingProps,null))?n.memoizedState=a:xt||(a=n.type,e=n.pendingProps,s=ql(ne.current).createElement(a),s[rn]=n,s[vn]=e,An(s,a,e),A(s),n.stateNode=s):n.memoizedState=Q0(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return He(n),e===null&&xt&&(s=n.stateNode=Y0(n.type,n.pendingProps,ne.current),bn=n,ui=!0,c=Wt,Ia(n.type)?(Of=c,Wt=di(s.firstChild)):Wt=c),Tn(e,n,n.pendingProps.children,a),wl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&xt&&((c=s=Wt)&&(s=zx(s,n.type,n.pendingProps,ui),s!==null?(n.stateNode=s,bn=n,Wt=di(s.firstChild),ui=!1,c=!0):c=!1),c||Ta(n)),He(n),c=n.type,f=n.pendingProps,g=e!==null?e.memoizedProps:null,s=f.children,wf(c,f)?s=null:g!==null&&wf(c,g)&&(n.flags|=32),n.memoizedState!==null&&(c=Ru(e,n,J_,null,null,a),To._currentValue=c),wl(e,n),Tn(e,n,s,a),n.child;case 6:return e===null&&xt&&((e=a=Wt)&&(a=Fx(a,n.pendingProps,ui),a!==null?(n.stateNode=a,bn=n,Wt=null,e=!0):e=!1),e||Ta(n)),null;case 13:return zm(e,n,a);case 4:return De(n,n.stateNode.containerInfo),s=n.pendingProps,e===null?n.child=hr(n,null,s,a):Tn(e,n,s,a),n.child;case 11:return Cm(e,n,n.type,n.pendingProps,a);case 7:return Tn(e,n,n.pendingProps,a),n.child;case 8:return Tn(e,n,n.pendingProps.children,a),n.child;case 12:return Tn(e,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,Aa(n,n.type,s.value),Tn(e,n,s.children,a),n.child;case 9:return c=n.type._context,s=n.pendingProps.children,cr(n),c=En(c),s=s(c),n.flags|=1,Tn(e,n,s,a),n.child;case 14:return wm(e,n,n.type,n.pendingProps,a);case 15:return Dm(e,n,n.type,n.pendingProps,a);case 19:return Im(e,n,a);case 31:return sx(e,n,a);case 22:return Um(e,n,a,n.pendingProps);case 24:return cr(n),s=En(sn),e===null?(c=vu(),c===null&&(c=kt,f=mu(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:s,cache:c},xu(n),Aa(n,sn,c)):((e.lanes&a)!==0&&(Su(e,n),ao(n,null,null,a),io()),c=e.memoizedState,f=n.memoizedState,c.parent!==s?(c={parent:s,cache:s},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),Aa(n,sn,s)):(s=f.cache,Aa(n,sn,s),s!==c.cache&&pu(n,[sn],a,!0))),Tn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function ea(e){e.flags|=4}function tf(e,n,a,s,c){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(c&335544128)===c)if(e.stateNode.complete)e.flags|=8192;else if(h0())e.flags|=8192;else throw dr=pl,_u}else e.flags&=-16777217}function Gm(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!ng(n))if(h0())e.flags|=8192;else throw dr=pl,_u}function Ul(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Pt():536870912,e.lanes|=n,as|=n)}function uo(e,n){if(!xt)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function qt(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,s=0;if(n)for(var c=e.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags&65011712,s|=c.flags&65011712,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags,s|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=s,e.childLanes=a,n}function lx(e,n,a){var s=n.pendingProps;switch(cu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qt(n),null;case 1:return qt(n),null;case 3:return a=n.stateNode,s=null,e!==null&&(s=e.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Ki(sn),ke(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Wr(n)?ea(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,fu())),qt(n),null;case 26:var c=n.type,f=n.memoizedState;return e===null?(ea(n),f!==null?(qt(n),Gm(n,f)):(qt(n),tf(n,c,null,s,a))):f?f!==e.memoizedState?(ea(n),qt(n),Gm(n,f)):(qt(n),n.flags&=-16777217):(e=e.memoizedProps,e!==s&&ea(n),qt(n),tf(n,c,e,s,a)),null;case 27:if(dt(n),a=ne.current,c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==s&&ea(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return qt(n),null}e=Ae.current,Wr(n)?Sp(n):(e=Y0(c,s,a),n.stateNode=e,ea(n))}return qt(n),null;case 5:if(dt(n),c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==s&&ea(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return qt(n),null}if(f=Ae.current,Wr(n))Sp(n);else{var g=ql(ne.current);switch(f){case 1:f=g.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:f=g.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":f=g.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":f=g.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":f=g.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof s.is=="string"?g.createElement("select",{is:s.is}):g.createElement("select"),s.multiple?f.multiple=!0:s.size&&(f.size=s.size);break;default:f=typeof s.is=="string"?g.createElement(c,{is:s.is}):g.createElement(c)}}f[rn]=n,f[vn]=s;e:for(g=n.child;g!==null;){if(g.tag===5||g.tag===6)f.appendChild(g.stateNode);else if(g.tag!==4&&g.tag!==27&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===n)break e;for(;g.sibling===null;){if(g.return===null||g.return===n)break e;g=g.return}g.sibling.return=g.return,g=g.sibling}n.stateNode=f;e:switch(An(f,c,s),c){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}s&&ea(n)}}return qt(n),tf(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==s&&ea(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(e=ne.current,Wr(n)){if(e=n.stateNode,a=n.memoizedProps,s=null,c=bn,c!==null)switch(c.tag){case 27:case 5:s=c.memoizedProps}e[rn]=n,e=!!(e.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||z0(e.nodeValue,a)),e||Ta(n,!0)}else e=ql(e).createTextNode(s),e[rn]=n,n.stateNode=e}return qt(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(s=Wr(n),a!==null){if(e===null){if(!s)throw Error(r(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(557));e[rn]=n}else or(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;qt(n),e=!1}else a=fu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(Zn(n),n):(Zn(n),null);if((n.flags&128)!==0)throw Error(r(558))}return qt(n),null;case 13:if(s=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=Wr(n),s!==null&&s.dehydrated!==null){if(e===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[rn]=n}else or(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;qt(n),c=!1}else c=fu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(Zn(n),n):(Zn(n),null)}return Zn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=s!==null,e=e!==null&&e.memoizedState!==null,a&&(s=n.child,c=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(c=s.alternate.memoizedState.cachePool.pool),f=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==c&&(s.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Ul(n,n.updateQueue),qt(n),null);case 4:return ke(),e===null&&Ef(n.stateNode.containerInfo),qt(n),null;case 10:return Ki(n.type),qt(n),null;case 19:if(ie(nn),s=n.memoizedState,s===null)return qt(n),null;if(c=(n.flags&128)!==0,f=s.rendering,f===null)if(c)uo(s,!1);else{if($t!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=_l(e),f!==null){for(n.flags|=128,uo(s,!1),e=f.updateQueue,n.updateQueue=e,Ul(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)mp(a,e),a=a.sibling;return ve(nn,nn.current&1|2),xt&&Yi(n,s.treeForkCount),n.child}e=e.sibling}s.tail!==null&&M()>Bl&&(n.flags|=128,c=!0,uo(s,!1),n.lanes=4194304)}else{if(!c)if(e=_l(f),e!==null){if(n.flags|=128,c=!0,e=e.updateQueue,n.updateQueue=e,Ul(n,e),uo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!f.alternate&&!xt)return qt(n),null}else 2*M()-s.renderingStartTime>Bl&&a!==536870912&&(n.flags|=128,c=!0,uo(s,!1),n.lanes=4194304);s.isBackwards?(f.sibling=n.child,n.child=f):(e=s.last,e!==null?e.sibling=f:n.child=f,s.last=f)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=M(),e.sibling=null,a=nn.current,ve(nn,c?a&1|2:a&1),xt&&Yi(n,s.treeForkCount),e):(qt(n),null);case 22:case 23:return Zn(n),Eu(),s=n.memoizedState!==null,e!==null?e.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(qt(n),n.subtreeFlags&6&&(n.flags|=8192)):qt(n),a=n.updateQueue,a!==null&&Ul(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),e!==null&&ie(ur),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Ki(sn),qt(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function cx(e,n){switch(cu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Ki(sn),ke(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return dt(n),null;case 31:if(n.memoizedState!==null){if(Zn(n),n.alternate===null)throw Error(r(340));or()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(Zn(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));or()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return ie(nn),null;case 4:return ke(),null;case 10:return Ki(n.type),null;case 22:case 23:return Zn(n),Eu(),e!==null&&ie(ur),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Ki(sn),null;case 25:return null;default:return null}}function Vm(e,n){switch(cu(n),n.tag){case 3:Ki(sn),ke();break;case 26:case 27:case 5:dt(n);break;case 4:ke();break;case 31:n.memoizedState!==null&&Zn(n);break;case 13:Zn(n);break;case 19:ie(nn);break;case 10:Ki(n.type);break;case 22:case 23:Zn(n),Eu(),e!==null&&ie(ur);break;case 24:Ki(sn)}}function fo(e,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var c=s.next;a=c;do{if((a.tag&e)===e){s=void 0;var f=a.create,g=a.inst;s=f(),g.destroy=s}a=a.next}while(a!==c)}}catch(T){Ft(n,n.return,T)}}function Na(e,n,a){try{var s=n.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var f=c.next;s=f;do{if((s.tag&e)===e){var g=s.inst,T=g.destroy;if(T!==void 0){g.destroy=void 0,c=n;var G=a,$=T;try{$()}catch(de){Ft(c,G,de)}}}s=s.next}while(s!==f)}}catch(de){Ft(n,n.return,de)}}function km(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Lp(n,a)}catch(s){Ft(e,e.return,s)}}}function Xm(e,n,a){a.props=mr(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(s){Ft(e,n,s)}}function ho(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var s=e.stateNode;break;case 30:s=e.stateNode;break;default:s=e.stateNode}typeof a=="function"?e.refCleanup=a(s):a.current=s}}catch(c){Ft(e,n,c)}}function Ni(e,n){var a=e.ref,s=e.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(c){Ft(e,n,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Ft(e,n,c)}else a.current=null}function Wm(e){var n=e.type,a=e.memoizedProps,s=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break e;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(c){Ft(e,e.return,c)}}function nf(e,n,a){try{var s=e.stateNode;Ux(s,e.type,a,n),s[vn]=n}catch(c){Ft(e,e.return,c)}}function qm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ia(e.type)||e.tag===4}function af(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||qm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ia(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function rf(e,n,a){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Wi));else if(s!==4&&(s===27&&Ia(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(rf(e,n,a),e=e.sibling;e!==null;)rf(e,n,a),e=e.sibling}function Nl(e,n,a){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(s!==4&&(s===27&&Ia(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Nl(e,n,a),e=e.sibling;e!==null;)Nl(e,n,a),e=e.sibling}function jm(e){var n=e.stateNode,a=e.memoizedProps;try{for(var s=e.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);An(n,s,a),n[rn]=e,n[vn]=a}catch(f){Ft(e,e.return,f)}}var ta=!1,cn=!1,sf=!1,Ym=typeof WeakSet=="function"?WeakSet:Set,mn=null;function ux(e,n){if(e=e.containerInfo,Rf=$l,e=sp(e),Jc(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var c=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var g=0,T=-1,G=-1,$=0,de=0,ge=e,te=null;t:for(;;){for(var le;ge!==a||c!==0&&ge.nodeType!==3||(T=g+c),ge!==f||s!==0&&ge.nodeType!==3||(G=g+s),ge.nodeType===3&&(g+=ge.nodeValue.length),(le=ge.firstChild)!==null;)te=ge,ge=le;for(;;){if(ge===e)break t;if(te===a&&++$===c&&(T=g),te===f&&++de===s&&(G=g),(le=ge.nextSibling)!==null)break;ge=te,te=ge.parentNode}ge=le}a=T===-1||G===-1?null:{start:T,end:G}}else a=null}a=a||{start:0,end:0}}else a=null;for(Cf={focusedElem:e,selectionRange:a},$l=!1,mn=n;mn!==null;)if(n=mn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,mn=e;else for(;mn!==null;){switch(n=mn,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)c=e[a],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var Ve=mr(a.type,c);e=s.getSnapshotBeforeUpdate(Ve,f),s.__reactInternalSnapshotBeforeUpdate=e}catch(et){Ft(a,a.return,et)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Uf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Uf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,mn=e;break}mn=n.return}}function Zm(e,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:ia(e,a),s&4&&fo(5,a);break;case 1:if(ia(e,a),s&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(g){Ft(a,a.return,g)}else{var c=mr(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(c,n,e.__reactInternalSnapshotBeforeUpdate)}catch(g){Ft(a,a.return,g)}}s&64&&km(a),s&512&&ho(a,a.return);break;case 3:if(ia(e,a),s&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Lp(e,n)}catch(g){Ft(a,a.return,g)}}break;case 27:n===null&&s&4&&jm(a);case 26:case 5:ia(e,a),n===null&&s&4&&Wm(a),s&512&&ho(a,a.return);break;case 12:ia(e,a);break;case 31:ia(e,a),s&4&&Jm(e,a);break;case 13:ia(e,a),s&4&&$m(e,a),s&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=xx.bind(null,a),Ix(e,a))));break;case 22:if(s=a.memoizedState!==null||ta,!s){n=n!==null&&n.memoizedState!==null||cn,c=ta;var f=cn;ta=s,(cn=n)&&!f?aa(e,a,(a.subtreeFlags&8772)!==0):ia(e,a),ta=c,cn=f}break;case 30:break;default:ia(e,a)}}function Km(e){var n=e.alternate;n!==null&&(e.alternate=null,Km(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Hs(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Zt=null,Fn=!1;function na(e,n,a){for(a=a.child;a!==null;)Qm(e,n,a),a=a.sibling}function Qm(e,n,a){if(Ee&&typeof Ee.onCommitFiberUnmount=="function")try{Ee.onCommitFiberUnmount(be,a)}catch{}switch(a.tag){case 26:cn||Ni(a,n),na(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:cn||Ni(a,n);var s=Zt,c=Fn;Ia(a.type)&&(Zt=a.stateNode,Fn=!1),na(e,n,a),Mo(a.stateNode),Zt=s,Fn=c;break;case 5:cn||Ni(a,n);case 6:if(s=Zt,c=Fn,Zt=null,na(e,n,a),Zt=s,Fn=c,Zt!==null)if(Fn)try{(Zt.nodeType===9?Zt.body:Zt.nodeName==="HTML"?Zt.ownerDocument.body:Zt).removeChild(a.stateNode)}catch(f){Ft(a,n,f)}else try{Zt.removeChild(a.stateNode)}catch(f){Ft(a,n,f)}break;case 18:Zt!==null&&(Fn?(e=Zt,k0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),ds(e)):k0(Zt,a.stateNode));break;case 4:s=Zt,c=Fn,Zt=a.stateNode.containerInfo,Fn=!0,na(e,n,a),Zt=s,Fn=c;break;case 0:case 11:case 14:case 15:Na(2,a,n),cn||Na(4,a,n),na(e,n,a);break;case 1:cn||(Ni(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&Xm(a,n,s)),na(e,n,a);break;case 21:na(e,n,a);break;case 22:cn=(s=cn)||a.memoizedState!==null,na(e,n,a),cn=s;break;default:na(e,n,a)}}function Jm(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{ds(e)}catch(a){Ft(n,n.return,a)}}}function $m(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ds(e)}catch(a){Ft(n,n.return,a)}}function fx(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Ym),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Ym),n;default:throw Error(r(435,e.tag))}}function Ll(e,n){var a=fx(e);n.forEach(function(s){if(!a.has(s)){a.add(s);var c=Sx.bind(null,e,s);s.then(c,c)}})}function In(e,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var c=a[s],f=e,g=n,T=g;e:for(;T!==null;){switch(T.tag){case 27:if(Ia(T.type)){Zt=T.stateNode,Fn=!1;break e}break;case 5:Zt=T.stateNode,Fn=!1;break e;case 3:case 4:Zt=T.stateNode.containerInfo,Fn=!0;break e}T=T.return}if(Zt===null)throw Error(r(160));Qm(f,g,c),Zt=null,Fn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)e0(n,e),n=n.sibling}var yi=null;function e0(e,n){var a=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:In(n,e),Hn(e),s&4&&(Na(3,e,e.return),fo(3,e),Na(5,e,e.return));break;case 1:In(n,e),Hn(e),s&512&&(cn||a===null||Ni(a,a.return)),s&64&&ta&&(e=e.updateQueue,e!==null&&(s=e.callbacks,s!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var c=yi;if(In(n,e),Hn(e),s&512&&(cn||a===null||Ni(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=e.memoizedState,a===null)if(s===null)if(e.stateNode===null){e:{s=e.type,a=e.memoizedProps,c=c.ownerDocument||c;t:switch(s){case"title":f=c.getElementsByTagName("title")[0],(!f||f[er]||f[rn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(s),c.head.insertBefore(f,c.querySelector("head > title"))),An(f,s,a),f[rn]=e,A(f),s=f;break e;case"link":var g=eg("link","href",c).get(s+(a.href||""));if(g){for(var T=0;T<g.length;T++)if(f=g[T],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){g.splice(T,1);break t}}f=c.createElement(s),An(f,s,a),c.head.appendChild(f);break;case"meta":if(g=eg("meta","content",c).get(s+(a.content||""))){for(T=0;T<g.length;T++)if(f=g[T],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){g.splice(T,1);break t}}f=c.createElement(s),An(f,s,a),c.head.appendChild(f);break;default:throw Error(r(468,s))}f[rn]=e,A(f),s=f}e.stateNode=s}else tg(c,e.type,e.stateNode);else e.stateNode=$0(c,s,e.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?tg(c,e.type,e.stateNode):$0(c,s,e.memoizedProps)):s===null&&e.stateNode!==null&&nf(e,e.memoizedProps,a.memoizedProps)}break;case 27:In(n,e),Hn(e),s&512&&(cn||a===null||Ni(a,a.return)),a!==null&&s&4&&nf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(In(n,e),Hn(e),s&512&&(cn||a===null||Ni(a,a.return)),e.flags&32){c=e.stateNode;try{fn(c,"")}catch(Ve){Ft(e,e.return,Ve)}}s&4&&e.stateNode!=null&&(c=e.memoizedProps,nf(e,c,a!==null?a.memoizedProps:c)),s&1024&&(sf=!0);break;case 6:if(In(n,e),Hn(e),s&4){if(e.stateNode===null)throw Error(r(162));s=e.memoizedProps,a=e.stateNode;try{a.nodeValue=s}catch(Ve){Ft(e,e.return,Ve)}}break;case 3:if(Zl=null,c=yi,yi=jl(n.containerInfo),In(n,e),yi=c,Hn(e),s&4&&a!==null&&a.memoizedState.isDehydrated)try{ds(n.containerInfo)}catch(Ve){Ft(e,e.return,Ve)}sf&&(sf=!1,t0(e));break;case 4:s=yi,yi=jl(e.stateNode.containerInfo),In(n,e),Hn(e),yi=s;break;case 12:In(n,e),Hn(e);break;case 31:In(n,e),Hn(e),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,Ll(e,s)));break;case 13:In(n,e),Hn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Pl=M()),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,Ll(e,s)));break;case 22:c=e.memoizedState!==null;var G=a!==null&&a.memoizedState!==null,$=ta,de=cn;if(ta=$||c,cn=de||G,In(n,e),cn=de,ta=$,Hn(e),s&8192)e:for(n=e.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||G||ta||cn||gr(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){G=a=n;try{if(f=G.stateNode,c)g=f.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none";else{T=G.stateNode;var ge=G.memoizedProps.style,te=ge!=null&&ge.hasOwnProperty("display")?ge.display:null;T.style.display=te==null||typeof te=="boolean"?"":(""+te).trim()}}catch(Ve){Ft(G,G.return,Ve)}}}else if(n.tag===6){if(a===null){G=n;try{G.stateNode.nodeValue=c?"":G.memoizedProps}catch(Ve){Ft(G,G.return,Ve)}}}else if(n.tag===18){if(a===null){G=n;try{var le=G.stateNode;c?X0(le,!0):X0(G.stateNode,!1)}catch(Ve){Ft(G,G.return,Ve)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=e.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,Ll(e,a))));break;case 19:In(n,e),Hn(e),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,Ll(e,s)));break;case 30:break;case 21:break;default:In(n,e),Hn(e)}}function Hn(e){var n=e.flags;if(n&2){try{for(var a,s=e.return;s!==null;){if(qm(s)){a=s;break}s=s.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var c=a.stateNode,f=af(e);Nl(e,f,c);break;case 5:var g=a.stateNode;a.flags&32&&(fn(g,""),a.flags&=-33);var T=af(e);Nl(e,T,g);break;case 3:case 4:var G=a.stateNode.containerInfo,$=af(e);rf(e,$,G);break;default:throw Error(r(161))}}catch(de){Ft(e,e.return,de)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function t0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;t0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function ia(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Zm(e,n.alternate,n),n=n.sibling}function gr(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Na(4,n,n.return),gr(n);break;case 1:Ni(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Xm(n,n.return,a),gr(n);break;case 27:Mo(n.stateNode);case 26:case 5:Ni(n,n.return),gr(n);break;case 22:n.memoizedState===null&&gr(n);break;case 30:gr(n);break;default:gr(n)}e=e.sibling}}function aa(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,c=e,f=n,g=f.flags;switch(f.tag){case 0:case 11:case 15:aa(c,f,a),fo(4,f);break;case 1:if(aa(c,f,a),s=f,c=s.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch($){Ft(s,s.return,$)}if(s=f,c=s.updateQueue,c!==null){var T=s.stateNode;try{var G=c.shared.hiddenCallbacks;if(G!==null)for(c.shared.hiddenCallbacks=null,c=0;c<G.length;c++)Np(G[c],T)}catch($){Ft(s,s.return,$)}}a&&g&64&&km(f),ho(f,f.return);break;case 27:jm(f);case 26:case 5:aa(c,f,a),a&&s===null&&g&4&&Wm(f),ho(f,f.return);break;case 12:aa(c,f,a);break;case 31:aa(c,f,a),a&&g&4&&Jm(c,f);break;case 13:aa(c,f,a),a&&g&4&&$m(c,f);break;case 22:f.memoizedState===null&&aa(c,f,a),ho(f,f.return);break;case 30:break;default:aa(c,f,a)}n=n.sibling}}function of(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Js(a))}function lf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Js(e))}function Mi(e,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)n0(e,n,a,s),n=n.sibling}function n0(e,n,a,s){var c=n.flags;switch(n.tag){case 0:case 11:case 15:Mi(e,n,a,s),c&2048&&fo(9,n);break;case 1:Mi(e,n,a,s);break;case 3:Mi(e,n,a,s),c&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Js(e)));break;case 12:if(c&2048){Mi(e,n,a,s),e=n.stateNode;try{var f=n.memoizedProps,g=f.id,T=f.onPostCommit;typeof T=="function"&&T(g,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(G){Ft(n,n.return,G)}}else Mi(e,n,a,s);break;case 31:Mi(e,n,a,s);break;case 13:Mi(e,n,a,s);break;case 23:break;case 22:f=n.stateNode,g=n.alternate,n.memoizedState!==null?f._visibility&2?Mi(e,n,a,s):po(e,n):f._visibility&2?Mi(e,n,a,s):(f._visibility|=2,ts(e,n,a,s,(n.subtreeFlags&10256)!==0||!1)),c&2048&&of(g,n);break;case 24:Mi(e,n,a,s),c&2048&&lf(n.alternate,n);break;default:Mi(e,n,a,s)}}function ts(e,n,a,s,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,g=n,T=a,G=s,$=g.flags;switch(g.tag){case 0:case 11:case 15:ts(f,g,T,G,c),fo(8,g);break;case 23:break;case 22:var de=g.stateNode;g.memoizedState!==null?de._visibility&2?ts(f,g,T,G,c):po(f,g):(de._visibility|=2,ts(f,g,T,G,c)),c&&$&2048&&of(g.alternate,g);break;case 24:ts(f,g,T,G,c),c&&$&2048&&lf(g.alternate,g);break;default:ts(f,g,T,G,c)}n=n.sibling}}function po(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,s=n,c=s.flags;switch(s.tag){case 22:po(a,s),c&2048&&of(s.alternate,s);break;case 24:po(a,s),c&2048&&lf(s.alternate,s);break;default:po(a,s)}n=n.sibling}}var mo=8192;function ns(e,n,a){if(e.subtreeFlags&mo)for(e=e.child;e!==null;)i0(e,n,a),e=e.sibling}function i0(e,n,a){switch(e.tag){case 26:ns(e,n,a),e.flags&mo&&e.memoizedState!==null&&Qx(a,yi,e.memoizedState,e.memoizedProps);break;case 5:ns(e,n,a);break;case 3:case 4:var s=yi;yi=jl(e.stateNode.containerInfo),ns(e,n,a),yi=s;break;case 22:e.memoizedState===null&&(s=e.alternate,s!==null&&s.memoizedState!==null?(s=mo,mo=16777216,ns(e,n,a),mo=s):ns(e,n,a));break;default:ns(e,n,a)}}function a0(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function go(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];mn=s,s0(s,e)}a0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)r0(e),e=e.sibling}function r0(e){switch(e.tag){case 0:case 11:case 15:go(e),e.flags&2048&&Na(9,e,e.return);break;case 3:go(e);break;case 12:go(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Ol(e)):go(e);break;default:go(e)}}function Ol(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];mn=s,s0(s,e)}a0(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Na(8,n,n.return),Ol(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Ol(n));break;default:Ol(n)}e=e.sibling}}function s0(e,n){for(;mn!==null;){var a=mn;switch(a.tag){case 0:case 11:case 15:Na(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Js(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,mn=s;else e:for(a=e;mn!==null;){s=mn;var c=s.sibling,f=s.return;if(Km(s),s===a){mn=null;break e}if(c!==null){c.return=f,mn=c;break e}mn=f}}}var dx={getCacheForType:function(e){var n=En(sn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return En(sn).controller.signal}},hx=typeof WeakMap=="function"?WeakMap:Map,Ut=0,kt=null,pt=null,vt=0,zt=0,Kn=null,La=!1,is=!1,cf=!1,ra=0,$t=0,Oa=0,vr=0,uf=0,Qn=0,as=0,vo=null,Gn=null,ff=!1,Pl=0,o0=0,Bl=1/0,zl=null,Pa=null,dn=0,Ba=null,rs=null,sa=0,df=0,hf=null,l0=null,_o=0,pf=null;function Jn(){return(Ut&2)!==0&&vt!==0?vt&-vt:B.T!==null?Sf():Fs()}function c0(){if(Qn===0)if((vt&536870912)===0||xt){var e=Te;Te<<=1,(Te&3932160)===0&&(Te=262144),Qn=e}else Qn=536870912;return e=Yn.current,e!==null&&(e.flags|=32),Qn}function Vn(e,n,a){(e===kt&&(zt===2||zt===9)||e.cancelPendingCommit!==null)&&(ss(e,0),za(e,vt,Qn,!1)),Cn(e,a),((Ut&2)===0||e!==kt)&&(e===kt&&((Ut&2)===0&&(vr|=a),$t===4&&za(e,vt,Qn,!1)),Li(e))}function u0(e,n,a){if((Ut&6)!==0)throw Error(r(327));var s=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Re(e,n),c=s?gx(e,n):gf(e,n,!0),f=s;do{if(c===0){is&&!s&&za(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!px(a)){c=gf(e,n,!1),f=!1;continue}if(c===2){if(f=n,e.errorRecoveryDisabledLanes&f)var g=0;else g=e.pendingLanes&-536870913,g=g!==0?g:g&536870912?536870912:0;if(g!==0){n=g;e:{var T=e;c=vo;var G=T.current.memoizedState.isDehydrated;if(G&&(ss(T,g).flags|=256),g=gf(T,g,!1),g!==2){if(cf&&!G){T.errorRecoveryDisabledLanes|=f,vr|=f,c=4;break e}f=Gn,Gn=c,f!==null&&(Gn===null?Gn=f:Gn.push.apply(Gn,f))}c=g}if(f=!1,c!==2)continue}}if(c===1){ss(e,0),za(e,n,0,!0);break}e:{switch(s=e,f=c,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:za(s,n,Qn,!La);break e;case 2:Gn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=Pl+300-M(),10<c)){if(za(s,n,Qn,!La),_e(s,0,!0)!==0)break e;sa=n,s.timeoutHandle=G0(f0.bind(null,s,a,Gn,zl,ff,n,Qn,vr,as,La,f,"Throttled",-0,0),c);break e}f0(s,a,Gn,zl,ff,n,Qn,vr,as,La,f,null,-0,0)}}break}while(!0);Li(e)}function f0(e,n,a,s,c,f,g,T,G,$,de,ge,te,le){if(e.timeoutHandle=-1,ge=n.subtreeFlags,ge&8192||(ge&16785408)===16785408){ge={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Wi},i0(n,f,ge);var Ve=(f&62914560)===f?Pl-M():(f&4194048)===f?o0-M():0;if(Ve=Jx(ge,Ve),Ve!==null){sa=f,e.cancelPendingCommit=Ve(x0.bind(null,e,n,f,a,s,c,g,T,G,de,ge,null,te,le)),za(e,f,g,!$);return}}x0(e,n,f,a,s,c,g,T,G)}function px(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var c=a[s],f=c.getSnapshot;c=c.value;try{if(!qn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function za(e,n,a,s){n&=~uf,n&=~vr,e.suspendedLanes|=n,e.pingedLanes&=~n,s&&(e.warmLanes|=n),s=e.expirationTimes;for(var c=n;0<c;){var f=31-Pe(c),g=1<<f;s[f]=-1,c&=~g}a!==0&&Zo(e,a,n)}function Fl(){return(Ut&6)===0?(xo(0),!1):!0}function mf(){if(pt!==null){if(zt===0)var e=pt.return;else e=pt,Zi=lr=null,Du(e),Kr=null,eo=0,e=pt;for(;e!==null;)Vm(e.alternate,e),e=e.return;pt=null}}function ss(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Ox(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),sa=0,mf(),kt=e,pt=a=ji(e.current,null),vt=n,zt=0,Kn=null,La=!1,is=Re(e,n),cf=!1,as=Qn=uf=vr=Oa=$t=0,Gn=vo=null,ff=!1,(n&8)!==0&&(n|=n&32);var s=e.entangledLanes;if(s!==0)for(e=e.entanglements,s&=n;0<s;){var c=31-Pe(s),f=1<<c;n|=e[c],s&=~f}return ra=n,rl(),a}function d0(e,n){ot=null,B.H=lo,n===Zr||n===hl?(n=Cp(),zt=3):n===_u?(n=Cp(),zt=4):zt=n===qu?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Kn=n,pt===null&&($t=1,Rl(e,oi(n,e.current)))}function h0(){var e=Yn.current;return e===null?!0:(vt&4194048)===vt?fi===null:(vt&62914560)===vt||(vt&536870912)!==0?e===fi:!1}function p0(){var e=B.H;return B.H=lo,e===null?lo:e}function m0(){var e=B.A;return B.A=dx,e}function Il(){$t=4,La||(vt&4194048)!==vt&&Yn.current!==null||(is=!0),(Oa&134217727)===0&&(vr&134217727)===0||kt===null||za(kt,vt,Qn,!1)}function gf(e,n,a){var s=Ut;Ut|=2;var c=p0(),f=m0();(kt!==e||vt!==n)&&(zl=null,ss(e,n)),n=!1;var g=$t;e:do try{if(zt!==0&&pt!==null){var T=pt,G=Kn;switch(zt){case 8:mf(),g=6;break e;case 3:case 2:case 9:case 6:Yn.current===null&&(n=!0);var $=zt;if(zt=0,Kn=null,os(e,T,G,$),a&&is){g=0;break e}break;default:$=zt,zt=0,Kn=null,os(e,T,G,$)}}mx(),g=$t;break}catch(de){d0(e,de)}while(!0);return n&&e.shellSuspendCounter++,Zi=lr=null,Ut=s,B.H=c,B.A=f,pt===null&&(kt=null,vt=0,rl()),g}function mx(){for(;pt!==null;)g0(pt)}function gx(e,n){var a=Ut;Ut|=2;var s=p0(),c=m0();kt!==e||vt!==n?(zl=null,Bl=M()+500,ss(e,n)):is=Re(e,n);e:do try{if(zt!==0&&pt!==null){n=pt;var f=Kn;t:switch(zt){case 1:zt=0,Kn=null,os(e,n,f,1);break;case 2:case 9:if(Ap(f)){zt=0,Kn=null,v0(n);break}n=function(){zt!==2&&zt!==9||kt!==e||(zt=7),Li(e)},f.then(n,n);break e;case 3:zt=7;break e;case 4:zt=5;break e;case 7:Ap(f)?(zt=0,Kn=null,v0(n)):(zt=0,Kn=null,os(e,n,f,7));break;case 5:var g=null;switch(pt.tag){case 26:g=pt.memoizedState;case 5:case 27:var T=pt;if(g?ng(g):T.stateNode.complete){zt=0,Kn=null;var G=T.sibling;if(G!==null)pt=G;else{var $=T.return;$!==null?(pt=$,Hl($)):pt=null}break t}}zt=0,Kn=null,os(e,n,f,5);break;case 6:zt=0,Kn=null,os(e,n,f,6);break;case 8:mf(),$t=6;break e;default:throw Error(r(462))}}vx();break}catch(de){d0(e,de)}while(!0);return Zi=lr=null,B.H=s,B.A=c,Ut=a,pt!==null?0:(kt=null,vt=0,rl(),$t)}function vx(){for(;pt!==null&&!je();)g0(pt)}function g0(e){var n=Hm(e.alternate,e,ra);e.memoizedProps=e.pendingProps,n===null?Hl(e):pt=n}function v0(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Om(a,n,n.pendingProps,n.type,void 0,vt);break;case 11:n=Om(a,n,n.pendingProps,n.type.render,n.ref,vt);break;case 5:Du(n);default:Vm(a,n),n=pt=mp(n,ra),n=Hm(a,n,ra)}e.memoizedProps=e.pendingProps,n===null?Hl(e):pt=n}function os(e,n,a,s){Zi=lr=null,Du(n),Kr=null,eo=0;var c=n.return;try{if(rx(e,c,n,a,vt)){$t=1,Rl(e,oi(a,e.current)),pt=null;return}}catch(f){if(c!==null)throw pt=c,f;$t=1,Rl(e,oi(a,e.current)),pt=null;return}n.flags&32768?(xt||s===1?e=!0:is||(vt&536870912)!==0?e=!1:(La=e=!0,(s===2||s===9||s===3||s===6)&&(s=Yn.current,s!==null&&s.tag===13&&(s.flags|=16384))),_0(n,e)):Hl(n)}function Hl(e){var n=e;do{if((n.flags&32768)!==0){_0(n,La);return}e=n.return;var a=lx(n.alternate,n,ra);if(a!==null){pt=a;return}if(n=n.sibling,n!==null){pt=n;return}pt=n=e}while(n!==null);$t===0&&($t=5)}function _0(e,n){do{var a=cx(e.alternate,e);if(a!==null){a.flags&=32767,pt=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){pt=e;return}pt=e=a}while(e!==null);$t=6,pt=null}function x0(e,n,a,s,c,f,g,T,G){e.cancelPendingCommit=null;do Gl();while(dn!==0);if((Ut&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=iu,vi(e,a,f,g,T,G),e===kt&&(pt=kt=null,vt=0),rs=n,Ba=e,sa=a,df=f,hf=c,l0=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,yx(ce,function(){return E0(),null})):(e.callbackNode=null,e.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=B.T,B.T=null,c=V.p,V.p=2,g=Ut,Ut|=4;try{ux(e,n,a)}finally{Ut=g,V.p=c,B.T=s}}dn=1,S0(),y0(),M0()}}function S0(){if(dn===1){dn=0;var e=Ba,n=rs,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=B.T,B.T=null;var s=V.p;V.p=2;var c=Ut;Ut|=4;try{e0(n,e);var f=Cf,g=sp(e.containerInfo),T=f.focusedElem,G=f.selectionRange;if(g!==T&&T&&T.ownerDocument&&rp(T.ownerDocument.documentElement,T)){if(G!==null&&Jc(T)){var $=G.start,de=G.end;if(de===void 0&&(de=$),"selectionStart"in T)T.selectionStart=$,T.selectionEnd=Math.min(de,T.value.length);else{var ge=T.ownerDocument||document,te=ge&&ge.defaultView||window;if(te.getSelection){var le=te.getSelection(),Ve=T.textContent.length,et=Math.min(G.start,Ve),Vt=G.end===void 0?et:Math.min(G.end,Ve);!le.extend&&et>Vt&&(g=Vt,Vt=et,et=g);var Y=ap(T,et),X=ap(T,Vt);if(Y&&X&&(le.rangeCount!==1||le.anchorNode!==Y.node||le.anchorOffset!==Y.offset||le.focusNode!==X.node||le.focusOffset!==X.offset)){var Q=ge.createRange();Q.setStart(Y.node,Y.offset),le.removeAllRanges(),et>Vt?(le.addRange(Q),le.extend(X.node,X.offset)):(Q.setEnd(X.node,X.offset),le.addRange(Q))}}}}for(ge=[],le=T;le=le.parentNode;)le.nodeType===1&&ge.push({element:le,left:le.scrollLeft,top:le.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<ge.length;T++){var me=ge[T];me.element.scrollLeft=me.left,me.element.scrollTop=me.top}}$l=!!Rf,Cf=Rf=null}finally{Ut=c,V.p=s,B.T=a}}e.current=n,dn=2}}function y0(){if(dn===2){dn=0;var e=Ba,n=rs,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=B.T,B.T=null;var s=V.p;V.p=2;var c=Ut;Ut|=4;try{Zm(e,n.alternate,n)}finally{Ut=c,V.p=s,B.T=a}}dn=3}}function M0(){if(dn===4||dn===3){dn=0,D();var e=Ba,n=rs,a=sa,s=l0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?dn=5:(dn=0,rs=Ba=null,b0(e,e.pendingLanes));var c=e.pendingLanes;if(c===0&&(Pa=null),Nr(a),n=n.stateNode,Ee&&typeof Ee.onCommitFiberRoot=="function")try{Ee.onCommitFiberRoot(be,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=B.T,c=V.p,V.p=2,B.T=null;try{for(var f=e.onRecoverableError,g=0;g<s.length;g++){var T=s[g];f(T.value,{componentStack:T.stack})}}finally{B.T=n,V.p=c}}(sa&3)!==0&&Gl(),Li(e),c=e.pendingLanes,(a&261930)!==0&&(c&42)!==0?e===pf?_o++:(_o=0,pf=e):_o=0,xo(0)}}function b0(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Js(n)))}function Gl(){return S0(),y0(),M0(),E0()}function E0(){if(dn!==5)return!1;var e=Ba,n=df;df=0;var a=Nr(sa),s=B.T,c=V.p;try{V.p=32>a?32:a,B.T=null,a=hf,hf=null;var f=Ba,g=sa;if(dn=0,rs=Ba=null,sa=0,(Ut&6)!==0)throw Error(r(331));var T=Ut;if(Ut|=4,r0(f.current),n0(f,f.current,g,a),Ut=T,xo(0,!1),Ee&&typeof Ee.onPostCommitFiberRoot=="function")try{Ee.onPostCommitFiberRoot(be,f)}catch{}return!0}finally{V.p=c,B.T=s,b0(e,n)}}function T0(e,n,a){n=oi(a,n),n=Wu(e.stateNode,n,2),e=wa(e,n,2),e!==null&&(Cn(e,2),Li(e))}function Ft(e,n,a){if(e.tag===3)T0(e,e,a);else for(;n!==null;){if(n.tag===3){T0(n,e,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Pa===null||!Pa.has(s))){e=oi(a,e),a=Am(2),s=wa(n,a,2),s!==null&&(Rm(a,s,n,e),Cn(s,2),Li(s));break}}n=n.return}}function vf(e,n,a){var s=e.pingCache;if(s===null){s=e.pingCache=new hx;var c=new Set;s.set(n,c)}else c=s.get(n),c===void 0&&(c=new Set,s.set(n,c));c.has(a)||(cf=!0,c.add(a),e=_x.bind(null,e,n,a),n.then(e,e))}function _x(e,n,a){var s=e.pingCache;s!==null&&s.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,kt===e&&(vt&a)===a&&($t===4||$t===3&&(vt&62914560)===vt&&300>M()-Pl?(Ut&2)===0&&ss(e,0):uf|=a,as===vt&&(as=0)),Li(e)}function A0(e,n){n===0&&(n=Pt()),e=rr(e,n),e!==null&&(Cn(e,n),Li(e))}function xx(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),A0(e,a)}function Sx(e,n){var a=0;switch(e.tag){case 31:case 13:var s=e.stateNode,c=e.memoizedState;c!==null&&(a=c.retryLane);break;case 19:s=e.stateNode;break;case 22:s=e.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),A0(e,a)}function yx(e,n){return yt(e,n)}var Vl=null,ls=null,_f=!1,kl=!1,xf=!1,Fa=0;function Li(e){e!==ls&&e.next===null&&(ls===null?Vl=ls=e:ls=ls.next=e),kl=!0,_f||(_f=!0,bx())}function xo(e,n){if(!xf&&kl){xf=!0;do for(var a=!1,s=Vl;s!==null;){if(e!==0){var c=s.pendingLanes;if(c===0)var f=0;else{var g=s.suspendedLanes,T=s.pingedLanes;f=(1<<31-Pe(42|e)+1)-1,f&=c&~(g&~T),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,D0(s,f))}else f=vt,f=_e(s,s===kt?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||Re(s,f)||(a=!0,D0(s,f));s=s.next}while(a);xf=!1}}function Mx(){R0()}function R0(){kl=_f=!1;var e=0;Fa!==0&&Lx()&&(e=Fa);for(var n=M(),a=null,s=Vl;s!==null;){var c=s.next,f=C0(s,n);f===0?(s.next=null,a===null?Vl=c:a.next=c,c===null&&(ls=a)):(a=s,(e!==0||(f&3)!==0)&&(kl=!0)),s=c}dn!==0&&dn!==5||xo(e),Fa!==0&&(Fa=0)}function C0(e,n){for(var a=e.suspendedLanes,s=e.pingedLanes,c=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var g=31-Pe(f),T=1<<g,G=c[g];G===-1?((T&a)===0||(T&s)!==0)&&(c[g]=nt(T,n)):G<=n&&(e.expiredLanes|=T),f&=~T}if(n=kt,a=vt,a=_e(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s=e.callbackNode,a===0||e===n&&(zt===2||zt===9)||e.cancelPendingCommit!==null)return s!==null&&s!==null&&Lt(s),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Re(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(s!==null&&Lt(s),Nr(a)){case 2:case 8:a=xe;break;case 32:a=ce;break;case 268435456:a=Ce;break;default:a=ce}return s=w0.bind(null,e),a=yt(a,s),e.callbackPriority=n,e.callbackNode=a,n}return s!==null&&s!==null&&Lt(s),e.callbackPriority=2,e.callbackNode=null,2}function w0(e,n){if(dn!==0&&dn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Gl()&&e.callbackNode!==a)return null;var s=vt;return s=_e(e,e===kt?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s===0?null:(u0(e,s,n),C0(e,M()),e.callbackNode!=null&&e.callbackNode===a?w0.bind(null,e):null)}function D0(e,n){if(Gl())return null;u0(e,n,!0)}function bx(){Px(function(){(Ut&6)!==0?yt(he,Mx):R0()})}function Sf(){if(Fa===0){var e=jr;e===0&&(e=Ne,Ne<<=1,(Ne&261888)===0&&(Ne=256)),Fa=e}return Fa}function U0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Qo(""+e)}function N0(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function Ex(e,n,a,s,c){if(n==="submit"&&a&&a.stateNode===c){var f=U0((c[vn]||null).action),g=s.submitter;g&&(n=(n=g[vn]||null)?U0(n.formAction):g.getAttribute("formAction"),n!==null&&(f=n,g=null));var T=new tl("action","action",null,s,c);e.push({event:T,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(Fa!==0){var G=g?N0(c,g):new FormData(c);Iu(a,{pending:!0,data:G,method:c.method,action:f},null,G)}}else typeof f=="function"&&(T.preventDefault(),G=g?N0(c,g):new FormData(c),Iu(a,{pending:!0,data:G,method:c.method,action:f},f,G))},currentTarget:c}]})}}for(var yf=0;yf<nu.length;yf++){var Mf=nu[yf],Tx=Mf.toLowerCase(),Ax=Mf[0].toUpperCase()+Mf.slice(1);Si(Tx,"on"+Ax)}Si(cp,"onAnimationEnd"),Si(up,"onAnimationIteration"),Si(fp,"onAnimationStart"),Si("dblclick","onDoubleClick"),Si("focusin","onFocus"),Si("focusout","onBlur"),Si(V_,"onTransitionRun"),Si(k_,"onTransitionStart"),Si(X_,"onTransitionCancel"),Si(dp,"onTransitionEnd"),Z("onMouseEnter",["mouseout","mouseover"]),Z("onMouseLeave",["mouseout","mouseover"]),Z("onPointerEnter",["pointerout","pointerover"]),Z("onPointerLeave",["pointerout","pointerover"]),ee("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ee("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ee("onBeforeInput",["compositionend","keypress","textInput","paste"]),ee("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ee("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ee("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var So="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Rx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(So));function L0(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var s=e[a],c=s.event;s=s.listeners;e:{var f=void 0;if(n)for(var g=s.length-1;0<=g;g--){var T=s[g],G=T.instance,$=T.currentTarget;if(T=T.listener,G!==f&&c.isPropagationStopped())break e;f=T,c.currentTarget=$;try{f(c)}catch(de){al(de)}c.currentTarget=null,f=G}else for(g=0;g<s.length;g++){if(T=s[g],G=T.instance,$=T.currentTarget,T=T.listener,G!==f&&c.isPropagationStopped())break e;f=T,c.currentTarget=$;try{f(c)}catch(de){al(de)}c.currentTarget=null,f=G}}}}function mt(e,n){var a=n[Lr];a===void 0&&(a=n[Lr]=new Set);var s=e+"__bubble";a.has(s)||(O0(n,e,2,!1),a.add(s))}function bf(e,n,a){var s=0;n&&(s|=4),O0(a,e,s,n)}var Xl="_reactListening"+Math.random().toString(36).slice(2);function Ef(e){if(!e[Xl]){e[Xl]=!0,j.forEach(function(a){a!=="selectionchange"&&(Rx.has(a)||bf(a,!1,e),bf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Xl]||(n[Xl]=!0,bf("selectionchange",!1,n))}}function O0(e,n,a,s){switch(cg(n)){case 2:var c=tS;break;case 8:c=nS;break;default:c=If}a=c.bind(null,n,a,e),c=void 0,!kc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),s?c!==void 0?e.addEventListener(n,a,{capture:!0,passive:c}):e.addEventListener(n,a,!0):c!==void 0?e.addEventListener(n,a,{passive:c}):e.addEventListener(n,a,!1)}function Tf(e,n,a,s,c){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)e:for(;;){if(s===null)return;var g=s.tag;if(g===3||g===4){var T=s.stateNode.containerInfo;if(T===c)break;if(g===4)for(g=s.return;g!==null;){var G=g.tag;if((G===3||G===4)&&g.stateNode.containerInfo===c)return;g=g.return}for(;T!==null;){if(g=xa(T),g===null)return;if(G=g.tag,G===5||G===6||G===26||G===27){s=f=g;continue e}T=T.parentNode}}s=s.return}Ih(function(){var $=f,de=Gc(a),ge=[];e:{var te=hp.get(e);if(te!==void 0){var le=tl,Ve=e;switch(e){case"keypress":if($o(a)===0)break e;case"keydown":case"keyup":le=S_;break;case"focusin":Ve="focus",le=jc;break;case"focusout":Ve="blur",le=jc;break;case"beforeblur":case"afterblur":le=jc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":le=Vh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":le=l_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":le=b_;break;case cp:case up:case fp:le=f_;break;case dp:le=T_;break;case"scroll":case"scrollend":le=s_;break;case"wheel":le=R_;break;case"copy":case"cut":case"paste":le=h_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":le=Xh;break;case"toggle":case"beforetoggle":le=w_}var et=(n&4)!==0,Vt=!et&&(e==="scroll"||e==="scrollend"),Y=et?te!==null?te+"Capture":null:te;et=[];for(var X=$,Q;X!==null;){var me=X;if(Q=me.stateNode,me=me.tag,me!==5&&me!==26&&me!==27||Q===null||Y===null||(me=Gs(X,Y),me!=null&&et.push(yo(X,me,Q))),Vt)break;X=X.return}0<et.length&&(te=new le(te,Ve,null,a,de),ge.push({event:te,listeners:et}))}}if((n&7)===0){e:{if(te=e==="mouseover"||e==="pointerover",le=e==="mouseout"||e==="pointerout",te&&a!==Hc&&(Ve=a.relatedTarget||a.fromElement)&&(xa(Ve)||Ve[_i]))break e;if((le||te)&&(te=de.window===de?de:(te=de.ownerDocument)?te.defaultView||te.parentWindow:window,le?(Ve=a.relatedTarget||a.toElement,le=$,Ve=Ve?xa(Ve):null,Ve!==null&&(Vt=u(Ve),et=Ve.tag,Ve!==Vt||et!==5&&et!==27&&et!==6)&&(Ve=null)):(le=null,Ve=$),le!==Ve)){if(et=Vh,me="onMouseLeave",Y="onMouseEnter",X="mouse",(e==="pointerout"||e==="pointerover")&&(et=Xh,me="onPointerLeave",Y="onPointerEnter",X="pointer"),Vt=le==null?te:tr(le),Q=Ve==null?te:tr(Ve),te=new et(me,X+"leave",le,a,de),te.target=Vt,te.relatedTarget=Q,me=null,xa(de)===$&&(et=new et(Y,X+"enter",Ve,a,de),et.target=Q,et.relatedTarget=Vt,me=et),Vt=me,le&&Ve)t:{for(et=Cx,Y=le,X=Ve,Q=0,me=Y;me;me=et(me))Q++;me=0;for(var Qe=X;Qe;Qe=et(Qe))me++;for(;0<Q-me;)Y=et(Y),Q--;for(;0<me-Q;)X=et(X),me--;for(;Q--;){if(Y===X||X!==null&&Y===X.alternate){et=Y;break t}Y=et(Y),X=et(X)}et=null}else et=null;le!==null&&P0(ge,te,le,et,!1),Ve!==null&&Vt!==null&&P0(ge,Vt,Ve,et,!0)}}e:{if(te=$?tr($):window,le=te.nodeName&&te.nodeName.toLowerCase(),le==="select"||le==="input"&&te.type==="file")var Et=Jh;else if(Kh(te))if($h)Et=I_;else{Et=z_;var Ye=B_}else le=te.nodeName,!le||le.toLowerCase()!=="input"||te.type!=="checkbox"&&te.type!=="radio"?$&&xi($.elementType)&&(Et=Jh):Et=F_;if(Et&&(Et=Et(e,$))){Qh(ge,Et,a,de);break e}Ye&&Ye(e,te,$),e==="focusout"&&$&&te.type==="number"&&$.memoizedProps.value!=null&&xn(te,"number",te.value)}switch(Ye=$?tr($):window,e){case"focusin":(Kh(Ye)||Ye.contentEditable==="true")&&(Ir=Ye,$c=$,Zs=null);break;case"focusout":Zs=$c=Ir=null;break;case"mousedown":eu=!0;break;case"contextmenu":case"mouseup":case"dragend":eu=!1,op(ge,a,de);break;case"selectionchange":if(G_)break;case"keydown":case"keyup":op(ge,a,de)}var ct;if(Zc)e:{switch(e){case"compositionstart":var _t="onCompositionStart";break e;case"compositionend":_t="onCompositionEnd";break e;case"compositionupdate":_t="onCompositionUpdate";break e}_t=void 0}else Fr?Yh(e,a)&&(_t="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(_t="onCompositionStart");_t&&(Wh&&a.locale!=="ko"&&(Fr||_t!=="onCompositionStart"?_t==="onCompositionEnd"&&Fr&&(ct=Hh()):(Ma=de,Xc="value"in Ma?Ma.value:Ma.textContent,Fr=!0)),Ye=Wl($,_t),0<Ye.length&&(_t=new kh(_t,e,null,a,de),ge.push({event:_t,listeners:Ye}),ct?_t.data=ct:(ct=Zh(a),ct!==null&&(_t.data=ct)))),(ct=U_?N_(e,a):L_(e,a))&&(_t=Wl($,"onBeforeInput"),0<_t.length&&(Ye=new kh("onBeforeInput","beforeinput",null,a,de),ge.push({event:Ye,listeners:_t}),Ye.data=ct)),Ex(ge,e,$,a,de)}L0(ge,n)})}function yo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Wl(e,n){for(var a=n+"Capture",s=[];e!==null;){var c=e,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Gs(e,a),c!=null&&s.unshift(yo(e,c,f)),c=Gs(e,n),c!=null&&s.push(yo(e,c,f))),e.tag===3)return s;e=e.return}return[]}function Cx(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function P0(e,n,a,s,c){for(var f=n._reactName,g=[];a!==null&&a!==s;){var T=a,G=T.alternate,$=T.stateNode;if(T=T.tag,G!==null&&G===s)break;T!==5&&T!==26&&T!==27||$===null||(G=$,c?($=Gs(a,f),$!=null&&g.unshift(yo(a,$,G))):c||($=Gs(a,f),$!=null&&g.push(yo(a,$,G)))),a=a.return}g.length!==0&&e.push({event:n,listeners:g})}var wx=/\r\n?/g,Dx=/\u0000|\uFFFD/g;function B0(e){return(typeof e=="string"?e:""+e).replace(wx,`
`).replace(Dx,"")}function z0(e,n){return n=B0(n),B0(e)===n}function Gt(e,n,a,s,c,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||fn(e,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&fn(e,""+s);break;case"className":Je(e,"class",s);break;case"tabIndex":Je(e,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Je(e,a,s);break;case"style":Pr(e,s,f);break;case"data":if(n!=="object"){Je(e,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=Qo(""+s),e.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Gt(e,n,"name",c.name,c,null),Gt(e,n,"formEncType",c.formEncType,c,null),Gt(e,n,"formMethod",c.formMethod,c,null),Gt(e,n,"formTarget",c.formTarget,c,null)):(Gt(e,n,"encType",c.encType,c,null),Gt(e,n,"method",c.method,c,null),Gt(e,n,"target",c.target,c,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=Qo(""+s),e.setAttribute(a,s);break;case"onClick":s!=null&&(e.onclick=Wi);break;case"onScroll":s!=null&&mt("scroll",e);break;case"onScrollEnd":s!=null&&mt("scrollend",e);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":e.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){e.removeAttribute("xlink:href");break}a=Qo(""+s),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,""+s):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":s===!0?e.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,s):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?e.setAttribute(a,s):e.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?e.removeAttribute(a):e.setAttribute(a,s);break;case"popover":mt("beforetoggle",e),mt("toggle",e),We(e,"popover",s);break;case"xlinkActuate":qe(e,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":qe(e,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":qe(e,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":qe(e,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":qe(e,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":qe(e,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":qe(e,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":qe(e,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":qe(e,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":We(e,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=a_.get(a)||a,We(e,a,s))}}function Af(e,n,a,s,c,f){switch(a){case"style":Pr(e,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof s=="string"?fn(e,s):(typeof s=="number"||typeof s=="bigint")&&fn(e,""+s);break;case"onScroll":s!=null&&mt("scroll",e);break;case"onScrollEnd":s!=null&&mt("scrollend",e);break;case"onClick":s!=null&&(e.onclick=Wi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!oe.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=e[vn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,c),typeof s=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,s,c);break e}a in e?e[a]=s:s===!0?e.setAttribute(a,""):We(e,a,s)}}}function An(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":mt("error",e),mt("load",e);var s=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var g=a[f];if(g!=null)switch(f){case"src":s=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Gt(e,n,f,g,a,null)}}c&&Gt(e,n,"srcSet",a.srcSet,a,null),s&&Gt(e,n,"src",a.src,a,null);return;case"input":mt("invalid",e);var T=f=g=c=null,G=null,$=null;for(s in a)if(a.hasOwnProperty(s)){var de=a[s];if(de!=null)switch(s){case"name":c=de;break;case"type":g=de;break;case"checked":G=de;break;case"defaultChecked":$=de;break;case"value":f=de;break;case"defaultValue":T=de;break;case"children":case"dangerouslySetInnerHTML":if(de!=null)throw Error(r(137,n));break;default:Gt(e,n,s,de,a,null)}}Xi(e,f,T,G,$,g,c,!1);return;case"select":mt("invalid",e),s=g=f=null;for(c in a)if(a.hasOwnProperty(c)&&(T=a[c],T!=null))switch(c){case"value":f=T;break;case"defaultValue":g=T;break;case"multiple":s=T;default:Gt(e,n,c,T,a,null)}n=f,a=g,e.multiple=!!s,n!=null?ri(e,!!s,n,!1):a!=null&&ri(e,!!s,a,!0);return;case"textarea":mt("invalid",e),f=c=s=null;for(g in a)if(a.hasOwnProperty(g)&&(T=a[g],T!=null))switch(g){case"value":s=T;break;case"defaultValue":c=T;break;case"children":f=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(r(91));break;default:Gt(e,n,g,T,a,null)}Sn(e,s,c,f);return;case"option":for(G in a)a.hasOwnProperty(G)&&(s=a[G],s!=null)&&(G==="selected"?e.selected=s&&typeof s!="function"&&typeof s!="symbol":Gt(e,n,G,s,a,null));return;case"dialog":mt("beforetoggle",e),mt("toggle",e),mt("cancel",e),mt("close",e);break;case"iframe":case"object":mt("load",e);break;case"video":case"audio":for(s=0;s<So.length;s++)mt(So[s],e);break;case"image":mt("error",e),mt("load",e);break;case"details":mt("toggle",e);break;case"embed":case"source":case"link":mt("error",e),mt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for($ in a)if(a.hasOwnProperty($)&&(s=a[$],s!=null))switch($){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Gt(e,n,$,s,a,null)}return;default:if(xi(n)){for(de in a)a.hasOwnProperty(de)&&(s=a[de],s!==void 0&&Af(e,n,de,s,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(s=a[T],s!=null&&Gt(e,n,T,s,a,null))}function Ux(e,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,g=null,T=null,G=null,$=null,de=null;for(le in a){var ge=a[le];if(a.hasOwnProperty(le)&&ge!=null)switch(le){case"checked":break;case"value":break;case"defaultValue":G=ge;default:s.hasOwnProperty(le)||Gt(e,n,le,null,s,ge)}}for(var te in s){var le=s[te];if(ge=a[te],s.hasOwnProperty(te)&&(le!=null||ge!=null))switch(te){case"type":f=le;break;case"name":c=le;break;case"checked":$=le;break;case"defaultChecked":de=le;break;case"value":g=le;break;case"defaultValue":T=le;break;case"children":case"dangerouslySetInnerHTML":if(le!=null)throw Error(r(137,n));break;default:le!==ge&&Gt(e,n,te,le,s,ge)}}_n(e,g,T,G,$,de,f,c);return;case"select":le=g=T=te=null;for(f in a)if(G=a[f],a.hasOwnProperty(f)&&G!=null)switch(f){case"value":break;case"multiple":le=G;default:s.hasOwnProperty(f)||Gt(e,n,f,null,s,G)}for(c in s)if(f=s[c],G=a[c],s.hasOwnProperty(c)&&(f!=null||G!=null))switch(c){case"value":te=f;break;case"defaultValue":T=f;break;case"multiple":g=f;default:f!==G&&Gt(e,n,c,f,s,G)}n=T,a=g,s=le,te!=null?ri(e,!!a,te,!1):!!s!=!!a&&(n!=null?ri(e,!!a,n,!0):ri(e,!!a,a?[]:"",!1));return;case"textarea":le=te=null;for(T in a)if(c=a[T],a.hasOwnProperty(T)&&c!=null&&!s.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Gt(e,n,T,null,s,c)}for(g in s)if(c=s[g],f=a[g],s.hasOwnProperty(g)&&(c!=null||f!=null))switch(g){case"value":te=c;break;case"defaultValue":le=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==f&&Gt(e,n,g,c,s,f)}Bt(e,te,le);return;case"option":for(var Ve in a)te=a[Ve],a.hasOwnProperty(Ve)&&te!=null&&!s.hasOwnProperty(Ve)&&(Ve==="selected"?e.selected=!1:Gt(e,n,Ve,null,s,te));for(G in s)te=s[G],le=a[G],s.hasOwnProperty(G)&&te!==le&&(te!=null||le!=null)&&(G==="selected"?e.selected=te&&typeof te!="function"&&typeof te!="symbol":Gt(e,n,G,te,s,le));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var et in a)te=a[et],a.hasOwnProperty(et)&&te!=null&&!s.hasOwnProperty(et)&&Gt(e,n,et,null,s,te);for($ in s)if(te=s[$],le=a[$],s.hasOwnProperty($)&&te!==le&&(te!=null||le!=null))switch($){case"children":case"dangerouslySetInnerHTML":if(te!=null)throw Error(r(137,n));break;default:Gt(e,n,$,te,s,le)}return;default:if(xi(n)){for(var Vt in a)te=a[Vt],a.hasOwnProperty(Vt)&&te!==void 0&&!s.hasOwnProperty(Vt)&&Af(e,n,Vt,void 0,s,te);for(de in s)te=s[de],le=a[de],!s.hasOwnProperty(de)||te===le||te===void 0&&le===void 0||Af(e,n,de,te,s,le);return}}for(var Y in a)te=a[Y],a.hasOwnProperty(Y)&&te!=null&&!s.hasOwnProperty(Y)&&Gt(e,n,Y,null,s,te);for(ge in s)te=s[ge],le=a[ge],!s.hasOwnProperty(ge)||te===le||te==null&&le==null||Gt(e,n,ge,te,s,le)}function F0(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Nx(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var c=a[s],f=c.transferSize,g=c.initiatorType,T=c.duration;if(f&&T&&F0(g)){for(g=0,T=c.responseEnd,s+=1;s<a.length;s++){var G=a[s],$=G.startTime;if($>T)break;var de=G.transferSize,ge=G.initiatorType;de&&F0(ge)&&(G=G.responseEnd,g+=de*(G<T?1:(T-$)/(G-$)))}if(--s,n+=8*(f+g)/(c.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Rf=null,Cf=null;function ql(e){return e.nodeType===9?e:e.ownerDocument}function I0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function H0(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function wf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Df=null;function Lx(){var e=window.event;return e&&e.type==="popstate"?e===Df?!1:(Df=e,!0):(Df=null,!1)}var G0=typeof setTimeout=="function"?setTimeout:void 0,Ox=typeof clearTimeout=="function"?clearTimeout:void 0,V0=typeof Promise=="function"?Promise:void 0,Px=typeof queueMicrotask=="function"?queueMicrotask:typeof V0<"u"?function(e){return V0.resolve(null).then(e).catch(Bx)}:G0;function Bx(e){setTimeout(function(){throw e})}function Ia(e){return e==="head"}function k0(e,n){var a=n,s=0;do{var c=a.nextSibling;if(e.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(s===0){e.removeChild(c),ds(n);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")Mo(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Mo(a);for(var f=a.firstChild;f;){var g=f.nextSibling,T=f.nodeName;f[er]||T==="SCRIPT"||T==="STYLE"||T==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=g}}else a==="body"&&Mo(e.ownerDocument.body);a=c}while(a);ds(n)}function X0(e,n){var a=e;e=0;do{var s=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=s}while(a)}function Uf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Uf(a),Hs(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function zx(e,n,a,s){for(;e.nodeType===1;){var c=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(s){if(!e[er])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=di(e.nextSibling),e===null)break}return null}function Fx(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=di(e.nextSibling),e===null))return null;return e}function W0(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=di(e.nextSibling),e===null))return null;return e}function Nf(e){return e.data==="$?"||e.data==="$~"}function Lf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Ix(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),e._reactRetry=s}}function di(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Of=null;function q0(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return di(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function j0(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function Y0(e,n,a){switch(n=ql(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function Mo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Hs(e)}var hi=new Map,Z0=new Set;function jl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var oa=V.d;V.d={f:Hx,r:Gx,D:Vx,C:kx,L:Xx,m:Wx,X:jx,S:qx,M:Yx};function Hx(){var e=oa.f(),n=Fl();return e||n}function Gx(e){var n=Sa(e);n!==null&&n.tag===5&&n.type==="form"?dm(n):oa.r(e)}var cs=typeof document>"u"?null:document;function K0(e,n,a){var s=cs;if(s&&typeof n=="string"&&n){var c=it(n);c='link[rel="'+e+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),Z0.has(c)||(Z0.add(c),e={rel:e,crossOrigin:a,href:n},s.querySelector(c)===null&&(n=s.createElement("link"),An(n,"link",e),A(n),s.head.appendChild(n)))}}function Vx(e){oa.D(e),K0("dns-prefetch",e,null)}function kx(e,n){oa.C(e,n),K0("preconnect",e,n)}function Xx(e,n,a){oa.L(e,n,a);var s=cs;if(s&&e&&n){var c='link[rel="preload"][as="'+it(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+it(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+it(a.imageSizes)+'"]')):c+='[href="'+it(e)+'"]';var f=c;switch(n){case"style":f=us(e);break;case"script":f=fs(e)}hi.has(f)||(e=v({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),hi.set(f,e),s.querySelector(c)!==null||n==="style"&&s.querySelector(bo(f))||n==="script"&&s.querySelector(Eo(f))||(n=s.createElement("link"),An(n,"link",e),A(n),s.head.appendChild(n)))}}function Wx(e,n){oa.m(e,n);var a=cs;if(a&&e){var s=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+it(s)+'"][href="'+it(e)+'"]',f=c;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=fs(e)}if(!hi.has(f)&&(e=v({rel:"modulepreload",href:e},n),hi.set(f,e),a.querySelector(c)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Eo(f)))return}s=a.createElement("link"),An(s,"link",e),A(s),a.head.appendChild(s)}}}function qx(e,n,a){oa.S(e,n,a);var s=cs;if(s&&e){var c=ya(s).hoistableStyles,f=us(e);n=n||"default";var g=c.get(f);if(!g){var T={loading:0,preload:null};if(g=s.querySelector(bo(f)))T.loading=5;else{e=v({rel:"stylesheet",href:e,"data-precedence":n},a),(a=hi.get(f))&&Pf(e,a);var G=g=s.createElement("link");A(G),An(G,"link",e),G._p=new Promise(function($,de){G.onload=$,G.onerror=de}),G.addEventListener("load",function(){T.loading|=1}),G.addEventListener("error",function(){T.loading|=2}),T.loading|=4,Yl(g,n,s)}g={type:"stylesheet",instance:g,count:1,state:T},c.set(f,g)}}}function jx(e,n){oa.X(e,n);var a=cs;if(a&&e){var s=ya(a).hoistableScripts,c=fs(e),f=s.get(c);f||(f=a.querySelector(Eo(c)),f||(e=v({src:e,async:!0},n),(n=hi.get(c))&&Bf(e,n),f=a.createElement("script"),A(f),An(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function Yx(e,n){oa.M(e,n);var a=cs;if(a&&e){var s=ya(a).hoistableScripts,c=fs(e),f=s.get(c);f||(f=a.querySelector(Eo(c)),f||(e=v({src:e,async:!0,type:"module"},n),(n=hi.get(c))&&Bf(e,n),f=a.createElement("script"),A(f),An(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function Q0(e,n,a,s){var c=(c=ne.current)?jl(c):null;if(!c)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=us(a.href),a=ya(c).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=us(a.href);var f=ya(c).hoistableStyles,g=f.get(e);if(g||(c=c.ownerDocument||c,g={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,g),(f=c.querySelector(bo(e)))&&!f._p&&(g.instance=f,g.state.loading=5),hi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},hi.set(e,a),f||Zx(c,e,a,g.state))),n&&s===null)throw Error(r(528,""));return g}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=fs(a),a=ya(c).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function us(e){return'href="'+it(e)+'"'}function bo(e){return'link[rel="stylesheet"]['+e+"]"}function J0(e){return v({},e,{"data-precedence":e.precedence,precedence:null})}function Zx(e,n,a,s){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=e.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),An(n,"link",a),A(n),e.head.appendChild(n))}function fs(e){return'[src="'+it(e)+'"]'}function Eo(e){return"script[async]"+e}function $0(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=e.querySelector('style[data-href~="'+it(a.href)+'"]');if(s)return n.instance=s,A(s),s;var c=v({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(e.ownerDocument||e).createElement("style"),A(s),An(s,"style",c),Yl(s,a.precedence,e),n.instance=s;case"stylesheet":c=us(a.href);var f=e.querySelector(bo(c));if(f)return n.state.loading|=4,n.instance=f,A(f),f;s=J0(a),(c=hi.get(c))&&Pf(s,c),f=(e.ownerDocument||e).createElement("link"),A(f);var g=f;return g._p=new Promise(function(T,G){g.onload=T,g.onerror=G}),An(f,"link",s),n.state.loading|=4,Yl(f,a.precedence,e),n.instance=f;case"script":return f=fs(a.src),(c=e.querySelector(Eo(f)))?(n.instance=c,A(c),c):(s=a,(c=hi.get(f))&&(s=v({},a),Bf(s,c)),e=e.ownerDocument||e,c=e.createElement("script"),A(c),An(c,"link",s),e.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,Yl(s,a.precedence,e));return n.instance}function Yl(e,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=s.length?s[s.length-1]:null,f=c,g=0;g<s.length;g++){var T=s[g];if(T.dataset.precedence===n)f=T;else if(f!==c)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Pf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Bf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Zl=null;function eg(e,n,a){if(Zl===null){var s=new Map,c=Zl=new Map;c.set(a,s)}else c=Zl,s=c.get(a),s||(s=new Map,c.set(a,s));if(s.has(e))return s;for(s.set(e,null),a=a.getElementsByTagName(e),c=0;c<a.length;c++){var f=a[c];if(!(f[er]||f[rn]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var g=f.getAttribute(n)||"";g=e+g;var T=s.get(g);T?T.push(f):s.set(g,[f])}}return s}function tg(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function Kx(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(e=n.disabled,typeof n.precedence=="string"&&e==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function ng(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Qx(e,n,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=us(s.href),f=n.querySelector(bo(c));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=Kl.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,A(f);return}f=n.ownerDocument||n,s=J0(s),(c=hi.get(c))&&Pf(s,c),f=f.createElement("link"),A(f);var g=f;g._p=new Promise(function(T,G){g.onload=T,g.onerror=G}),An(f,"link",s),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Kl.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var zf=0;function Jx(e,n){return e.stylesheets&&e.count===0&&Jl(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var s=setTimeout(function(){if(e.stylesheets&&Jl(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&zf===0&&(zf=62500*Nx());var c=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Jl(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>zf?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(s),clearTimeout(c)}}:null}function Kl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Jl(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Ql=null;function Jl(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ql=new Map,n.forEach($x,e),Ql=null,Kl.call(e))}function $x(e,n){if(!(n.state.loading&4)){var a=Ql.get(e);if(a)var s=a.get(null);else{a=new Map,Ql.set(e,a);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var g=c[f];(g.nodeName==="LINK"||g.getAttribute("media")!=="not all")&&(a.set(g.dataset.precedence,g),s=g)}s&&a.set(null,s)}c=n.instance,g=c.getAttribute("data-precedence"),f=a.get(g)||s,f===s&&a.set(null,c),a.set(g,c),this.count++,s=Kl.bind(this),c.addEventListener("load",s),c.addEventListener("error",s),f?f.parentNode.insertBefore(c,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),n.state.loading|=4}}var To={$$typeof:O,Provider:null,Consumer:null,_currentValue:re,_currentValue2:re,_threadCount:0};function eS(e,n,a,s,c,f,g,T,G){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Mt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Mt(0),this.hiddenUpdates=Mt(null),this.identifierPrefix=s,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=g,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=G,this.incompleteTransitions=new Map}function ig(e,n,a,s,c,f,g,T,G,$,de,ge){return e=new eS(e,n,a,g,G,$,de,ge,T),n=1,f===!0&&(n|=24),f=jn(3,null,null,n),e.current=f,f.stateNode=e,n=mu(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},xu(f),e}function ag(e){return e?(e=Vr,e):Vr}function rg(e,n,a,s,c,f){c=ag(c),s.context===null?s.context=c:s.pendingContext=c,s=Ca(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=wa(e,s,n),a!==null&&(Vn(a,e,n),no(a,e,n))}function sg(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Ff(e,n){sg(e,n),(e=e.alternate)&&sg(e,n)}function og(e){if(e.tag===13||e.tag===31){var n=rr(e,67108864);n!==null&&Vn(n,e,67108864),Ff(e,67108864)}}function lg(e){if(e.tag===13||e.tag===31){var n=Jn();n=zs(n);var a=rr(e,n);a!==null&&Vn(a,e,n),Ff(e,n)}}var $l=!0;function tS(e,n,a,s){var c=B.T;B.T=null;var f=V.p;try{V.p=2,If(e,n,a,s)}finally{V.p=f,B.T=c}}function nS(e,n,a,s){var c=B.T;B.T=null;var f=V.p;try{V.p=8,If(e,n,a,s)}finally{V.p=f,B.T=c}}function If(e,n,a,s){if($l){var c=Hf(s);if(c===null)Tf(e,n,s,ec,a),ug(e,s);else if(aS(c,e,n,a,s))s.stopPropagation();else if(ug(e,s),n&4&&-1<iS.indexOf(e)){for(;c!==null;){var f=Sa(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var g=ye(f.pendingLanes);if(g!==0){var T=f;for(T.pendingLanes|=2,T.entangledLanes|=2;g;){var G=1<<31-Pe(g);T.entanglements[1]|=G,g&=~G}Li(f),(Ut&6)===0&&(Bl=M()+500,xo(0))}}break;case 31:case 13:T=rr(f,2),T!==null&&Vn(T,f,2),Fl(),Ff(f,2)}if(f=Hf(s),f===null&&Tf(e,n,s,ec,a),f===c)break;c=f}c!==null&&s.stopPropagation()}else Tf(e,n,s,null,a)}}function Hf(e){return e=Gc(e),Gf(e)}var ec=null;function Gf(e){if(ec=null,e=xa(e),e!==null){var n=u(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=d(n),e!==null)return e;e=null}else if(a===31){if(e=h(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return ec=e,null}function cg(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(q()){case he:return 2;case xe:return 8;case ce:case Ze:return 32;case Ce:return 268435456;default:return 32}default:return 32}}var Vf=!1,Ha=null,Ga=null,Va=null,Ao=new Map,Ro=new Map,ka=[],iS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function ug(e,n){switch(e){case"focusin":case"focusout":Ha=null;break;case"dragenter":case"dragleave":Ga=null;break;case"mouseover":case"mouseout":Va=null;break;case"pointerover":case"pointerout":Ao.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ro.delete(n.pointerId)}}function Co(e,n,a,s,c,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[c]},n!==null&&(n=Sa(n),n!==null&&og(n)),e):(e.eventSystemFlags|=s,n=e.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),e)}function aS(e,n,a,s,c){switch(n){case"focusin":return Ha=Co(Ha,e,n,a,s,c),!0;case"dragenter":return Ga=Co(Ga,e,n,a,s,c),!0;case"mouseover":return Va=Co(Va,e,n,a,s,c),!0;case"pointerover":var f=c.pointerId;return Ao.set(f,Co(Ao.get(f)||null,e,n,a,s,c)),!0;case"gotpointercapture":return f=c.pointerId,Ro.set(f,Co(Ro.get(f)||null,e,n,a,s,c)),!0}return!1}function fg(e){var n=xa(e.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){e.blockedOn=n,wi(e.priority,function(){lg(a)});return}}else if(n===31){if(n=h(a),n!==null){e.blockedOn=n,wi(e.priority,function(){lg(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function tc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Hf(e.nativeEvent);if(a===null){a=e.nativeEvent;var s=new a.constructor(a.type,a);Hc=s,a.target.dispatchEvent(s),Hc=null}else return n=Sa(a),n!==null&&og(n),e.blockedOn=a,!1;n.shift()}return!0}function dg(e,n,a){tc(e)&&a.delete(n)}function rS(){Vf=!1,Ha!==null&&tc(Ha)&&(Ha=null),Ga!==null&&tc(Ga)&&(Ga=null),Va!==null&&tc(Va)&&(Va=null),Ao.forEach(dg),Ro.forEach(dg)}function nc(e,n){e.blockedOn===n&&(e.blockedOn=null,Vf||(Vf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,rS)))}var ic=null;function hg(e){ic!==e&&(ic=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){ic===e&&(ic=null);for(var n=0;n<e.length;n+=3){var a=e[n],s=e[n+1],c=e[n+2];if(typeof s!="function"){if(Gf(s||a)===null)continue;break}var f=Sa(a);f!==null&&(e.splice(n,3),n-=3,Iu(f,{pending:!0,data:c,method:a.method,action:s},s,c))}}))}function ds(e){function n(G){return nc(G,e)}Ha!==null&&nc(Ha,e),Ga!==null&&nc(Ga,e),Va!==null&&nc(Va,e),Ao.forEach(n),Ro.forEach(n);for(var a=0;a<ka.length;a++){var s=ka[a];s.blockedOn===e&&(s.blockedOn=null)}for(;0<ka.length&&(a=ka[0],a.blockedOn===null);)fg(a),a.blockedOn===null&&ka.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var c=a[s],f=a[s+1],g=c[vn]||null;if(typeof f=="function")g||hg(a);else if(g){var T=null;if(f&&f.hasAttribute("formAction")){if(c=f,g=f[vn]||null)T=g.formAction;else if(Gf(c)!==null)continue}else T=g.action;typeof T=="function"?a[s+1]=T:(a.splice(s,3),s-=3),hg(a)}}}function pg(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(g){return c=g})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,c=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function kf(e){this._internalRoot=e}ac.prototype.render=kf.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=Jn();rg(a,s,e,n,null,null)},ac.prototype.unmount=kf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;rg(e.current,2,null,e,null,null),Fl(),n[_i]=null}};function ac(e){this._internalRoot=e}ac.prototype.unstable_scheduleHydration=function(e){if(e){var n=Fs();e={blockedOn:null,target:e,priority:n};for(var a=0;a<ka.length&&n!==0&&n<ka[a].priority;a++);ka.splice(a,0,e),a===0&&fg(e)}};var mg=t.version;if(mg!=="19.2.3")throw Error(r(527,mg,"19.2.3"));V.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=p(n),e=e!==null?x(e):null,e=e===null?null:e.stateNode,e};var sS={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var rc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!rc.isDisabled&&rc.supportsFiber)try{be=rc.inject(sS),Ee=rc}catch{}}return Do.createRoot=function(e,n){if(!l(e))throw Error(r(299));var a=!1,s="",c=Mm,f=bm,g=Em;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(g=n.onRecoverableError)),n=ig(e,1,!1,null,null,a,s,null,c,f,g,pg),e[_i]=n.current,Ef(e),new kf(n)},Do.hydrateRoot=function(e,n,a){if(!l(e))throw Error(r(299));var s=!1,c="",f=Mm,g=bm,T=Em,G=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(g=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.formState!==void 0&&(G=a.formState)),n=ig(e,1,!0,n,a??null,s,c,G,f,g,T,pg),n.context=ag(null),a=n.current,s=Jn(),s=zs(s),c=Ca(s),c.callback=null,wa(a,c,s),a=s,n.current.lanes=a,Cn(n,a),Li(n),e[_i]=n.current,Ef(e),new ac(n)},Do.version="19.2.3",Do}var Tg;function gS(){if(Tg)return qf.exports;Tg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),qf.exports=mS(),qf.exports}var vS=gS();const bh="182",_S=0,Ag=1,xS=2,Ac=1,SS=2,Fo=3,$a=0,Xn=1,ha=2,ma=0,Rs=1,Rg=2,Cg=3,wg=4,yS=5,Tr=100,MS=101,bS=102,ES=103,TS=104,AS=200,RS=201,CS=202,wS=203,Cd=204,wd=205,DS=206,US=207,NS=208,LS=209,OS=210,PS=211,BS=212,zS=213,FS=214,Dd=0,Ud=1,Nd=2,ws=3,Ld=4,Od=5,Pd=6,Bd=7,Eh=0,IS=1,HS=2,Fi=0,Ev=1,Tv=2,Av=3,Rv=4,Cv=5,wv=6,Dv=7,Uv=300,wr=301,Ds=302,zd=303,Fd=304,Bc=306,Id=1e3,pa=1001,Hd=1002,Rn=1003,GS=1004,sc=1005,Nn=1006,Kf=1007,Rr=1008,ni=1009,Nv=1010,Lv=1011,Go=1012,Th=1013,Gi=1014,Bi=1015,va=1016,Ah=1017,Rh=1018,Vo=1020,Ov=35902,Pv=35899,Bv=1021,zv=1022,Ri=1023,_a=1026,Cr=1027,Fv=1028,Ch=1029,Us=1030,wh=1031,Dh=1033,Rc=33776,Cc=33777,wc=33778,Dc=33779,Gd=35840,Vd=35841,kd=35842,Xd=35843,Wd=36196,qd=37492,jd=37496,Yd=37488,Zd=37489,Kd=37490,Qd=37491,Jd=37808,$d=37809,eh=37810,th=37811,nh=37812,ih=37813,ah=37814,rh=37815,sh=37816,oh=37817,lh=37818,ch=37819,uh=37820,fh=37821,dh=36492,hh=36494,ph=36495,mh=36283,gh=36284,vh=36285,_h=36286,VS=3200,Iv=0,kS=1,Qa="",gi="srgb",Ns="srgb-linear",Nc="linear",It="srgb",hs=7680,Dg=519,XS=512,WS=513,qS=514,Uh=515,jS=516,YS=517,Nh=518,ZS=519,Ug=35044,Ng="300 es",zi=2e3,Lc=2001;function Hv(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function Oc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function KS(){const o=Oc("canvas");return o.style.display="block",o}const Lg={};function Og(...o){const t="THREE."+o.shift();console.log(t,...o)}function rt(...o){const t="THREE."+o.shift();console.warn(t,...o)}function At(...o){const t="THREE."+o.shift();console.error(t,...o)}function ko(...o){const t=o.join(" ");t in Lg||(Lg[t]=!0,rt(...o))}function QS(o,t,i){return new Promise(function(r,l){function u(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:r()}}setTimeout(u,i)})}class Os{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){const r=this._listeners;if(r===void 0)return;const l=r[t];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const r=i[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let u=0,d=l.length;u<d;u++)l[u].call(this,t);t.target=null}}}const Dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Qf=Math.PI/180,xh=180/Math.PI;function Wo(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Dn[o&255]+Dn[o>>8&255]+Dn[o>>16&255]+Dn[o>>24&255]+"-"+Dn[t&255]+Dn[t>>8&255]+"-"+Dn[t>>16&15|64]+Dn[t>>24&255]+"-"+Dn[i&63|128]+Dn[i>>8&255]+"-"+Dn[i>>16&255]+Dn[i>>24&255]+Dn[r&255]+Dn[r>>8&255]+Dn[r>>16&255]+Dn[r>>24&255]).toLowerCase()}function St(o,t,i){return Math.max(t,Math.min(i,o))}function JS(o,t){return(o%t+t)%t}function Jf(o,t,i){return(1-i)*o+i*t}function Uo(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function kn(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Nt{constructor(t=0,i=0){Nt.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,l=t.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=St(this.x,t.x,i.x),this.y=St(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=St(this.x,t,i),this.y=St(this.y,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(St(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(St(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-t.x,d=this.y-t.y;return this.x=u*r-d*l+t.x,this.y=u*l+d*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qo{constructor(t=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=l}static slerpFlat(t,i,r,l,u,d,h){let m=r[l+0],p=r[l+1],x=r[l+2],v=r[l+3],S=u[d+0],b=u[d+1],R=u[d+2],w=u[d+3];if(h<=0){t[i+0]=m,t[i+1]=p,t[i+2]=x,t[i+3]=v;return}if(h>=1){t[i+0]=S,t[i+1]=b,t[i+2]=R,t[i+3]=w;return}if(v!==w||m!==S||p!==b||x!==R){let y=m*S+p*b+x*R+v*w;y<0&&(S=-S,b=-b,R=-R,w=-w,y=-y);let _=1-h;if(y<.9995){const L=Math.acos(y),O=Math.sin(L);_=Math.sin(_*L)/O,h=Math.sin(h*L)/O,m=m*_+S*h,p=p*_+b*h,x=x*_+R*h,v=v*_+w*h}else{m=m*_+S*h,p=p*_+b*h,x=x*_+R*h,v=v*_+w*h;const L=1/Math.sqrt(m*m+p*p+x*x+v*v);m*=L,p*=L,x*=L,v*=L}}t[i]=m,t[i+1]=p,t[i+2]=x,t[i+3]=v}static multiplyQuaternionsFlat(t,i,r,l,u,d){const h=r[l],m=r[l+1],p=r[l+2],x=r[l+3],v=u[d],S=u[d+1],b=u[d+2],R=u[d+3];return t[i]=h*R+x*v+m*b-p*S,t[i+1]=m*R+x*S+p*v-h*b,t[i+2]=p*R+x*b+h*S-m*v,t[i+3]=x*R-h*v-m*S-p*b,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,l){return this._x=t,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,l=t._y,u=t._z,d=t._order,h=Math.cos,m=Math.sin,p=h(r/2),x=h(l/2),v=h(u/2),S=m(r/2),b=m(l/2),R=m(u/2);switch(d){case"XYZ":this._x=S*x*v+p*b*R,this._y=p*b*v-S*x*R,this._z=p*x*R+S*b*v,this._w=p*x*v-S*b*R;break;case"YXZ":this._x=S*x*v+p*b*R,this._y=p*b*v-S*x*R,this._z=p*x*R-S*b*v,this._w=p*x*v+S*b*R;break;case"ZXY":this._x=S*x*v-p*b*R,this._y=p*b*v+S*x*R,this._z=p*x*R+S*b*v,this._w=p*x*v-S*b*R;break;case"ZYX":this._x=S*x*v-p*b*R,this._y=p*b*v+S*x*R,this._z=p*x*R-S*b*v,this._w=p*x*v+S*b*R;break;case"YZX":this._x=S*x*v+p*b*R,this._y=p*b*v+S*x*R,this._z=p*x*R-S*b*v,this._w=p*x*v-S*b*R;break;case"XZY":this._x=S*x*v-p*b*R,this._y=p*b*v-S*x*R,this._z=p*x*R+S*b*v,this._w=p*x*v+S*b*R;break;default:rt("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],l=i[4],u=i[8],d=i[1],h=i[5],m=i[9],p=i[2],x=i[6],v=i[10],S=r+h+v;if(S>0){const b=.5/Math.sqrt(S+1);this._w=.25/b,this._x=(x-m)*b,this._y=(u-p)*b,this._z=(d-l)*b}else if(r>h&&r>v){const b=2*Math.sqrt(1+r-h-v);this._w=(x-m)/b,this._x=.25*b,this._y=(l+d)/b,this._z=(u+p)/b}else if(h>v){const b=2*Math.sqrt(1+h-r-v);this._w=(u-p)/b,this._x=(l+d)/b,this._y=.25*b,this._z=(m+x)/b}else{const b=2*Math.sqrt(1+v-r-h);this._w=(d-l)/b,this._x=(u+p)/b,this._y=(m+x)/b,this._z=.25*b}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<1e-8?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(St(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,l=t._y,u=t._z,d=t._w,h=i._x,m=i._y,p=i._z,x=i._w;return this._x=r*x+d*h+l*p-u*m,this._y=l*x+d*m+u*h-r*p,this._z=u*x+d*p+r*m-l*h,this._w=d*x-r*h-l*m-u*p,this._onChangeCallback(),this}slerp(t,i){if(i<=0)return this;if(i>=1)return this.copy(t);let r=t._x,l=t._y,u=t._z,d=t._w,h=this.dot(t);h<0&&(r=-r,l=-l,u=-u,d=-d,h=-h);let m=1-i;if(h<.9995){const p=Math.acos(h),x=Math.sin(p);m=Math.sin(m*p)/x,i=Math.sin(i*p)/x,this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+d*i,this._onChangeCallback()}else this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+d*i,this.normalize();return this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(t),l*Math.cos(t),u*Math.sin(i),u*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ae{constructor(t=0,i=0,r=0){ae.prototype.isVector3=!0,this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(Pg.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(Pg.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,u=t.elements,d=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*d,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*d,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*d,this}applyQuaternion(t){const i=this.x,r=this.y,l=this.z,u=t.x,d=t.y,h=t.z,m=t.w,p=2*(d*l-h*r),x=2*(h*i-u*l),v=2*(u*r-d*i);return this.x=i+m*p+d*v-h*x,this.y=r+m*x+h*p-u*v,this.z=l+m*v+u*x-d*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=St(this.x,t.x,i.x),this.y=St(this.y,t.y,i.y),this.z=St(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=St(this.x,t,i),this.y=St(this.y,t,i),this.z=St(this.z,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(St(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,l=t.y,u=t.z,d=i.x,h=i.y,m=i.z;return this.x=l*m-u*h,this.y=u*d-r*m,this.z=r*h-l*d,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return $f.copy(this).projectOnVector(t),this.sub($f)}reflect(t){return this.sub($f.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(St(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return i*i+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const l=Math.sin(i)*t;return this.x=l*Math.sin(r),this.y=Math.cos(i)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const $f=new ae,Pg=new qo;class ut{constructor(t,i,r,l,u,d,h,m,p){ut.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,l,u,d,h,m,p)}set(t,i,r,l,u,d,h,m,p){const x=this.elements;return x[0]=t,x[1]=l,x[2]=h,x[3]=i,x[4]=u,x[5]=m,x[6]=r,x[7]=d,x[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,u=this.elements,d=r[0],h=r[3],m=r[6],p=r[1],x=r[4],v=r[7],S=r[2],b=r[5],R=r[8],w=l[0],y=l[3],_=l[6],L=l[1],O=l[4],N=l[7],F=l[2],H=l[5],z=l[8];return u[0]=d*w+h*L+m*F,u[3]=d*y+h*O+m*H,u[6]=d*_+h*N+m*z,u[1]=p*w+x*L+v*F,u[4]=p*y+x*O+v*H,u[7]=p*_+x*N+v*z,u[2]=S*w+b*L+R*F,u[5]=S*y+b*O+R*H,u[8]=S*_+b*N+R*z,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],d=t[4],h=t[5],m=t[6],p=t[7],x=t[8];return i*d*x-i*h*p-r*u*x+r*h*m+l*u*p-l*d*m}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],d=t[4],h=t[5],m=t[6],p=t[7],x=t[8],v=x*d-h*p,S=h*m-x*u,b=p*u-d*m,R=i*v+r*S+l*b;if(R===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/R;return t[0]=v*w,t[1]=(l*p-x*r)*w,t[2]=(h*r-l*d)*w,t[3]=S*w,t[4]=(x*i-l*m)*w,t[5]=(l*u-h*i)*w,t[6]=b*w,t[7]=(r*m-p*i)*w,t[8]=(d*i-r*u)*w,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,l,u,d,h){const m=Math.cos(u),p=Math.sin(u);return this.set(r*m,r*p,-r*(m*d+p*h)+d+t,-l*p,l*m,-l*(-p*d+m*h)+h+i,0,0,1),this}scale(t,i){return this.premultiply(ed.makeScale(t,i)),this}rotate(t){return this.premultiply(ed.makeRotation(-t)),this}translate(t,i){return this.premultiply(ed.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ed=new ut,Bg=new ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),zg=new ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function $S(){const o={enabled:!0,workingColorSpace:Ns,spaces:{},convert:function(l,u,d){return this.enabled===!1||u===d||!u||!d||(this.spaces[u].transfer===It&&(l.r=ga(l.r),l.g=ga(l.g),l.b=ga(l.b)),this.spaces[u].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===It&&(l.r=Cs(l.r),l.g=Cs(l.g),l.b=Cs(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Qa?Nc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,d){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return ko("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return ko("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,u)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[Ns]:{primaries:t,whitePoint:r,transfer:Nc,toXYZ:Bg,fromXYZ:zg,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:gi},outputColorSpaceConfig:{drawingBufferColorSpace:gi}},[gi]:{primaries:t,whitePoint:r,transfer:It,toXYZ:Bg,fromXYZ:zg,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:gi}}}),o}const bt=$S();function ga(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Cs(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let ps;class ey{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let r;if(t instanceof HTMLCanvasElement)r=t;else{ps===void 0&&(ps=Oc("canvas")),ps.width=t.width,ps.height=t.height;const l=ps.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),r=ps}return r.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Oc("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),u=l.data;for(let d=0;d<u.length;d++)u[d]=ga(u[d]/255)*255;return r.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(ga(i[r]/255)*255):i[r]=ga(i[r]);return{data:i,width:t.width,height:t.height}}else return rt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let ty=0;class Lh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ty++}),this.uuid=Wo(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?u.push(td(l[d].image)):u.push(td(l[d]))}else u=td(l);r.url=u}return i||(t.images[this.uuid]=r),r}}function td(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?ey.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(rt("Texture: Unable to serialize Texture."),{})}let ny=0;const nd=new ae;class Pn extends Os{constructor(t=Pn.DEFAULT_IMAGE,i=Pn.DEFAULT_MAPPING,r=pa,l=pa,u=Nn,d=Rr,h=Ri,m=ni,p=Pn.DEFAULT_ANISOTROPY,x=Qa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ny++}),this.uuid=Wo(),this.name="",this.source=new Lh(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=d,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new Nt(0,0),this.repeat=new Nt(1,1),this.center=new Nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(nd).x}get height(){return this.source.getSize(nd).y}get depth(){return this.source.getSize(nd).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const r=t[i];if(r===void 0){rt(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){rt(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Uv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Id:t.x=t.x-Math.floor(t.x);break;case pa:t.x=t.x<0?0:1;break;case Hd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Id:t.y=t.y-Math.floor(t.y);break;case pa:t.y=t.y<0?0:1;break;case Hd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Pn.DEFAULT_IMAGE=null;Pn.DEFAULT_MAPPING=Uv;Pn.DEFAULT_ANISOTROPY=1;class en{constructor(t=0,i=0,r=0,l=1){en.prototype.isVector4=!0,this.x=t,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,l){return this.x=t,this.y=i,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,u=this.w,d=t.elements;return this.x=d[0]*i+d[4]*r+d[8]*l+d[12]*u,this.y=d[1]*i+d[5]*r+d[9]*l+d[13]*u,this.z=d[2]*i+d[6]*r+d[10]*l+d[14]*u,this.w=d[3]*i+d[7]*r+d[11]*l+d[15]*u,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,l,u;const m=t.elements,p=m[0],x=m[4],v=m[8],S=m[1],b=m[5],R=m[9],w=m[2],y=m[6],_=m[10];if(Math.abs(x-S)<.01&&Math.abs(v-w)<.01&&Math.abs(R-y)<.01){if(Math.abs(x+S)<.1&&Math.abs(v+w)<.1&&Math.abs(R+y)<.1&&Math.abs(p+b+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const O=(p+1)/2,N=(b+1)/2,F=(_+1)/2,H=(x+S)/4,z=(v+w)/4,K=(R+y)/4;return O>N&&O>F?O<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(O),l=H/r,u=z/r):N>F?N<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(N),r=H/l,u=K/l):F<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(F),r=z/u,l=K/u),this.set(r,l,u,i),this}let L=Math.sqrt((y-R)*(y-R)+(v-w)*(v-w)+(S-x)*(S-x));return Math.abs(L)<.001&&(L=1),this.x=(y-R)/L,this.y=(v-w)/L,this.z=(S-x)/L,this.w=Math.acos((p+b+_-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=St(this.x,t.x,i.x),this.y=St(this.y,t.y,i.y),this.z=St(this.z,t.z,i.z),this.w=St(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=St(this.x,t,i),this.y=St(this.y,t,i),this.z=St(this.z,t,i),this.w=St(this.w,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(St(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class iy extends Os{constructor(t=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Nn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=r.depth,this.scissor=new en(0,0,t,i),this.scissorTest=!1,this.viewport=new en(0,0,t,i);const l={width:t,height:i,depth:r.depth},u=new Pn(l);this.textures=[];const d=r.count;for(let h=0;h<d;h++)this.textures[h]=u.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(t={}){const i={minFilter:Nn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,r=1){if(this.width!==t||this.height!==i||this.depth!==r){this.width=t,this.height=i,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Lh(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ii extends iy{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class Gv extends Pn{constructor(t=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=pa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class ay extends Pn{constructor(t=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=pa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class jo{constructor(t=new ae(1/0,1/0,1/0),i=new ae(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(bi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(bi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=bi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&t.isInstancedMesh!==!0)for(let d=0,h=u.count;d<h;d++)t.isMesh===!0?t.getVertexPosition(d,bi):bi.fromBufferAttribute(u,d),bi.applyMatrix4(t.matrixWorld),this.expandByPoint(bi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),oc.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),oc.copy(r.boundingBox)),oc.applyMatrix4(t.matrixWorld),this.union(oc)}const l=t.children;for(let u=0,d=l.length;u<d;u++)this.expandByObject(l[u],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,bi),bi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(No),lc.subVectors(this.max,No),ms.subVectors(t.a,No),gs.subVectors(t.b,No),vs.subVectors(t.c,No),Wa.subVectors(gs,ms),qa.subVectors(vs,gs),_r.subVectors(ms,vs);let i=[0,-Wa.z,Wa.y,0,-qa.z,qa.y,0,-_r.z,_r.y,Wa.z,0,-Wa.x,qa.z,0,-qa.x,_r.z,0,-_r.x,-Wa.y,Wa.x,0,-qa.y,qa.x,0,-_r.y,_r.x,0];return!id(i,ms,gs,vs,lc)||(i=[1,0,0,0,1,0,0,0,1],!id(i,ms,gs,vs,lc))?!1:(cc.crossVectors(Wa,qa),i=[cc.x,cc.y,cc.z],id(i,ms,gs,vs,lc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,bi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(bi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(la[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),la[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),la[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),la[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),la[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),la[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),la[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),la[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(la),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const la=[new ae,new ae,new ae,new ae,new ae,new ae,new ae,new ae],bi=new ae,oc=new jo,ms=new ae,gs=new ae,vs=new ae,Wa=new ae,qa=new ae,_r=new ae,No=new ae,lc=new ae,cc=new ae,xr=new ae;function id(o,t,i,r,l){for(let u=0,d=o.length-3;u<=d;u+=3){xr.fromArray(o,u);const h=l.x*Math.abs(xr.x)+l.y*Math.abs(xr.y)+l.z*Math.abs(xr.z),m=t.dot(xr),p=i.dot(xr),x=r.dot(xr);if(Math.max(-Math.max(m,p,x),Math.min(m,p,x))>h)return!1}return!0}const ry=new jo,Lo=new ae,ad=new ae;class Oh{constructor(t=new ae,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):ry.setFromPoints(t).getCenter(r);let l=0;for(let u=0,d=t.length;u<d;u++)l=Math.max(l,r.distanceToSquared(t[u]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Lo.subVectors(t,this.center);const i=Lo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Lo,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ad.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Lo.copy(t.center).add(ad)),this.expandByPoint(Lo.copy(t.center).sub(ad))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const ca=new ae,rd=new ae,uc=new ae,ja=new ae,sd=new ae,fc=new ae,od=new ae;class sy{constructor(t=new ae,i=new ae(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ca)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=ca.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(ca.copy(this.origin).addScaledVector(this.direction,i),ca.distanceToSquared(t))}distanceSqToSegment(t,i,r,l){rd.copy(t).add(i).multiplyScalar(.5),uc.copy(i).sub(t).normalize(),ja.copy(this.origin).sub(rd);const u=t.distanceTo(i)*.5,d=-this.direction.dot(uc),h=ja.dot(this.direction),m=-ja.dot(uc),p=ja.lengthSq(),x=Math.abs(1-d*d);let v,S,b,R;if(x>0)if(v=d*m-h,S=d*h-m,R=u*x,v>=0)if(S>=-R)if(S<=R){const w=1/x;v*=w,S*=w,b=v*(v+d*S+2*h)+S*(d*v+S+2*m)+p}else S=u,v=Math.max(0,-(d*S+h)),b=-v*v+S*(S+2*m)+p;else S=-u,v=Math.max(0,-(d*S+h)),b=-v*v+S*(S+2*m)+p;else S<=-R?(v=Math.max(0,-(-d*u+h)),S=v>0?-u:Math.min(Math.max(-u,-m),u),b=-v*v+S*(S+2*m)+p):S<=R?(v=0,S=Math.min(Math.max(-u,-m),u),b=S*(S+2*m)+p):(v=Math.max(0,-(d*u+h)),S=v>0?u:Math.min(Math.max(-u,-m),u),b=-v*v+S*(S+2*m)+p);else S=d>0?-u:u,v=Math.max(0,-(d*S+h)),b=-v*v+S*(S+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(rd).addScaledVector(uc,S),b}intersectSphere(t,i){ca.subVectors(t.center,this.origin);const r=ca.dot(this.direction),l=ca.dot(ca)-r*r,u=t.radius*t.radius;if(l>u)return null;const d=Math.sqrt(u-l),h=r-d,m=r+d;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,l,u,d,h,m;const p=1/this.direction.x,x=1/this.direction.y,v=1/this.direction.z,S=this.origin;return p>=0?(r=(t.min.x-S.x)*p,l=(t.max.x-S.x)*p):(r=(t.max.x-S.x)*p,l=(t.min.x-S.x)*p),x>=0?(u=(t.min.y-S.y)*x,d=(t.max.y-S.y)*x):(u=(t.max.y-S.y)*x,d=(t.min.y-S.y)*x),r>d||u>l||((u>r||isNaN(r))&&(r=u),(d<l||isNaN(l))&&(l=d),v>=0?(h=(t.min.z-S.z)*v,m=(t.max.z-S.z)*v):(h=(t.max.z-S.z)*v,m=(t.min.z-S.z)*v),r>m||h>l)||((h>r||r!==r)&&(r=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(t){return this.intersectBox(t,ca)!==null}intersectTriangle(t,i,r,l,u){sd.subVectors(i,t),fc.subVectors(r,t),od.crossVectors(sd,fc);let d=this.direction.dot(od),h;if(d>0){if(l)return null;h=1}else if(d<0)h=-1,d=-d;else return null;ja.subVectors(this.origin,t);const m=h*this.direction.dot(fc.crossVectors(ja,fc));if(m<0)return null;const p=h*this.direction.dot(sd.cross(ja));if(p<0||m+p>d)return null;const x=-h*ja.dot(od);return x<0?null:this.at(x/d,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class tn{constructor(t,i,r,l,u,d,h,m,p,x,v,S,b,R,w,y){tn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,l,u,d,h,m,p,x,v,S,b,R,w,y)}set(t,i,r,l,u,d,h,m,p,x,v,S,b,R,w,y){const _=this.elements;return _[0]=t,_[4]=i,_[8]=r,_[12]=l,_[1]=u,_[5]=d,_[9]=h,_[13]=m,_[2]=p,_[6]=x,_[10]=v,_[14]=S,_[3]=b,_[7]=R,_[11]=w,_[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tn().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return this.determinant()===0?(t.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const i=this.elements,r=t.elements,l=1/_s.setFromMatrixColumn(t,0).length(),u=1/_s.setFromMatrixColumn(t,1).length(),d=1/_s.setFromMatrixColumn(t,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*d,i[9]=r[9]*d,i[10]=r[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,l=t.y,u=t.z,d=Math.cos(r),h=Math.sin(r),m=Math.cos(l),p=Math.sin(l),x=Math.cos(u),v=Math.sin(u);if(t.order==="XYZ"){const S=d*x,b=d*v,R=h*x,w=h*v;i[0]=m*x,i[4]=-m*v,i[8]=p,i[1]=b+R*p,i[5]=S-w*p,i[9]=-h*m,i[2]=w-S*p,i[6]=R+b*p,i[10]=d*m}else if(t.order==="YXZ"){const S=m*x,b=m*v,R=p*x,w=p*v;i[0]=S+w*h,i[4]=R*h-b,i[8]=d*p,i[1]=d*v,i[5]=d*x,i[9]=-h,i[2]=b*h-R,i[6]=w+S*h,i[10]=d*m}else if(t.order==="ZXY"){const S=m*x,b=m*v,R=p*x,w=p*v;i[0]=S-w*h,i[4]=-d*v,i[8]=R+b*h,i[1]=b+R*h,i[5]=d*x,i[9]=w-S*h,i[2]=-d*p,i[6]=h,i[10]=d*m}else if(t.order==="ZYX"){const S=d*x,b=d*v,R=h*x,w=h*v;i[0]=m*x,i[4]=R*p-b,i[8]=S*p+w,i[1]=m*v,i[5]=w*p+S,i[9]=b*p-R,i[2]=-p,i[6]=h*m,i[10]=d*m}else if(t.order==="YZX"){const S=d*m,b=d*p,R=h*m,w=h*p;i[0]=m*x,i[4]=w-S*v,i[8]=R*v+b,i[1]=v,i[5]=d*x,i[9]=-h*x,i[2]=-p*x,i[6]=b*v+R,i[10]=S-w*v}else if(t.order==="XZY"){const S=d*m,b=d*p,R=h*m,w=h*p;i[0]=m*x,i[4]=-v,i[8]=p*x,i[1]=S*v+w,i[5]=d*x,i[9]=b*v-R,i[2]=R*v-b,i[6]=h*x,i[10]=w*v+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(oy,t,ly)}lookAt(t,i,r){const l=this.elements;return $n.subVectors(t,i),$n.lengthSq()===0&&($n.z=1),$n.normalize(),Ya.crossVectors(r,$n),Ya.lengthSq()===0&&(Math.abs(r.z)===1?$n.x+=1e-4:$n.z+=1e-4,$n.normalize(),Ya.crossVectors(r,$n)),Ya.normalize(),dc.crossVectors($n,Ya),l[0]=Ya.x,l[4]=dc.x,l[8]=$n.x,l[1]=Ya.y,l[5]=dc.y,l[9]=$n.y,l[2]=Ya.z,l[6]=dc.z,l[10]=$n.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,u=this.elements,d=r[0],h=r[4],m=r[8],p=r[12],x=r[1],v=r[5],S=r[9],b=r[13],R=r[2],w=r[6],y=r[10],_=r[14],L=r[3],O=r[7],N=r[11],F=r[15],H=l[0],z=l[4],K=l[8],C=l[12],E=l[1],I=l[5],J=l[9],se=l[13],pe=l[2],fe=l[6],B=l[10],V=l[14],re=l[3],Me=l[7],Se=l[11],U=l[15];return u[0]=d*H+h*E+m*pe+p*re,u[4]=d*z+h*I+m*fe+p*Me,u[8]=d*K+h*J+m*B+p*Se,u[12]=d*C+h*se+m*V+p*U,u[1]=x*H+v*E+S*pe+b*re,u[5]=x*z+v*I+S*fe+b*Me,u[9]=x*K+v*J+S*B+b*Se,u[13]=x*C+v*se+S*V+b*U,u[2]=R*H+w*E+y*pe+_*re,u[6]=R*z+w*I+y*fe+_*Me,u[10]=R*K+w*J+y*B+_*Se,u[14]=R*C+w*se+y*V+_*U,u[3]=L*H+O*E+N*pe+F*re,u[7]=L*z+O*I+N*fe+F*Me,u[11]=L*K+O*J+N*B+F*Se,u[15]=L*C+O*se+N*V+F*U,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],l=t[8],u=t[12],d=t[1],h=t[5],m=t[9],p=t[13],x=t[2],v=t[6],S=t[10],b=t[14],R=t[3],w=t[7],y=t[11],_=t[15],L=m*b-p*S,O=h*b-p*v,N=h*S-m*v,F=d*b-p*x,H=d*S-m*x,z=d*v-h*x;return i*(w*L-y*O+_*N)-r*(R*L-y*F+_*H)+l*(R*O-w*F+_*z)-u*(R*N-w*H+y*z)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],d=t[4],h=t[5],m=t[6],p=t[7],x=t[8],v=t[9],S=t[10],b=t[11],R=t[12],w=t[13],y=t[14],_=t[15],L=v*y*p-w*S*p+w*m*b-h*y*b-v*m*_+h*S*_,O=R*S*p-x*y*p-R*m*b+d*y*b+x*m*_-d*S*_,N=x*w*p-R*v*p+R*h*b-d*w*b-x*h*_+d*v*_,F=R*v*m-x*w*m-R*h*S+d*w*S+x*h*y-d*v*y,H=i*L+r*O+l*N+u*F;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/H;return t[0]=L*z,t[1]=(w*S*u-v*y*u-w*l*b+r*y*b+v*l*_-r*S*_)*z,t[2]=(h*y*u-w*m*u+w*l*p-r*y*p-h*l*_+r*m*_)*z,t[3]=(v*m*u-h*S*u-v*l*p+r*S*p+h*l*b-r*m*b)*z,t[4]=O*z,t[5]=(x*y*u-R*S*u+R*l*b-i*y*b-x*l*_+i*S*_)*z,t[6]=(R*m*u-d*y*u-R*l*p+i*y*p+d*l*_-i*m*_)*z,t[7]=(d*S*u-x*m*u+x*l*p-i*S*p-d*l*b+i*m*b)*z,t[8]=N*z,t[9]=(R*v*u-x*w*u-R*r*b+i*w*b+x*r*_-i*v*_)*z,t[10]=(d*w*u-R*h*u+R*r*p-i*w*p-d*r*_+i*h*_)*z,t[11]=(x*h*u-d*v*u-x*r*p+i*v*p+d*r*b-i*h*b)*z,t[12]=F*z,t[13]=(x*w*l-R*v*l+R*r*S-i*w*S-x*r*y+i*v*y)*z,t[14]=(R*h*l-d*w*l-R*r*m+i*w*m+d*r*y-i*h*y)*z,t[15]=(d*v*l-x*h*l+x*r*m-i*v*m-d*r*S+i*h*S)*z,this}scale(t){const i=this.elements,r=t.x,l=t.y,u=t.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,d=t.x,h=t.y,m=t.z,p=u*d,x=u*h;return this.set(p*d+r,p*h-l*m,p*m+l*h,0,p*h+l*m,x*h+r,x*m-l*d,0,p*m-l*h,x*m+l*d,u*m*m+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,l,u,d){return this.set(1,r,u,0,t,1,d,0,i,l,1,0,0,0,0,1),this}compose(t,i,r){const l=this.elements,u=i._x,d=i._y,h=i._z,m=i._w,p=u+u,x=d+d,v=h+h,S=u*p,b=u*x,R=u*v,w=d*x,y=d*v,_=h*v,L=m*p,O=m*x,N=m*v,F=r.x,H=r.y,z=r.z;return l[0]=(1-(w+_))*F,l[1]=(b+N)*F,l[2]=(R-O)*F,l[3]=0,l[4]=(b-N)*H,l[5]=(1-(S+_))*H,l[6]=(y+L)*H,l[7]=0,l[8]=(R+O)*z,l[9]=(y-L)*z,l[10]=(1-(S+w))*z,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,r){const l=this.elements;if(t.x=l[12],t.y=l[13],t.z=l[14],this.determinant()===0)return r.set(1,1,1),i.identity(),this;let u=_s.set(l[0],l[1],l[2]).length();const d=_s.set(l[4],l[5],l[6]).length(),h=_s.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),Ei.copy(this);const p=1/u,x=1/d,v=1/h;return Ei.elements[0]*=p,Ei.elements[1]*=p,Ei.elements[2]*=p,Ei.elements[4]*=x,Ei.elements[5]*=x,Ei.elements[6]*=x,Ei.elements[8]*=v,Ei.elements[9]*=v,Ei.elements[10]*=v,i.setFromRotationMatrix(Ei),r.x=u,r.y=d,r.z=h,this}makePerspective(t,i,r,l,u,d,h=zi,m=!1){const p=this.elements,x=2*u/(i-t),v=2*u/(r-l),S=(i+t)/(i-t),b=(r+l)/(r-l);let R,w;if(m)R=u/(d-u),w=d*u/(d-u);else if(h===zi)R=-(d+u)/(d-u),w=-2*d*u/(d-u);else if(h===Lc)R=-d/(d-u),w=-d*u/(d-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=x,p[4]=0,p[8]=S,p[12]=0,p[1]=0,p[5]=v,p[9]=b,p[13]=0,p[2]=0,p[6]=0,p[10]=R,p[14]=w,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,r,l,u,d,h=zi,m=!1){const p=this.elements,x=2/(i-t),v=2/(r-l),S=-(i+t)/(i-t),b=-(r+l)/(r-l);let R,w;if(m)R=1/(d-u),w=d/(d-u);else if(h===zi)R=-2/(d-u),w=-(d+u)/(d-u);else if(h===Lc)R=-1/(d-u),w=-u/(d-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=x,p[4]=0,p[8]=0,p[12]=S,p[1]=0,p[5]=v,p[9]=0,p[13]=b,p[2]=0,p[6]=0,p[10]=R,p[14]=w,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}}const _s=new ae,Ei=new tn,oy=new ae(0,0,0),ly=new ae(1,1,1),Ya=new ae,dc=new ae,$n=new ae,Fg=new tn,Ig=new qo;class Vi{constructor(t=0,i=0,r=0,l=Vi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,l=this._order){return this._x=t,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const l=t.elements,u=l[0],d=l[4],h=l[8],m=l[1],p=l[5],x=l[9],v=l[2],S=l[6],b=l[10];switch(i){case"XYZ":this._y=Math.asin(St(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-x,b),this._z=Math.atan2(-d,u)):(this._x=Math.atan2(S,p),this._z=0);break;case"YXZ":this._x=Math.asin(-St(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(h,b),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,u),this._z=0);break;case"ZXY":this._x=Math.asin(St(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-v,b),this._z=Math.atan2(-d,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-St(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(S,b),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-d,p));break;case"YZX":this._z=Math.asin(St(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-x,p),this._y=Math.atan2(-v,u)):(this._x=0,this._y=Math.atan2(h,b));break;case"XZY":this._z=Math.asin(-St(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(S,p),this._y=Math.atan2(h,u)):(this._x=Math.atan2(-x,b),this._y=0);break;default:rt("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return Fg.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Fg,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Ig.setFromEuler(this),this.setFromQuaternion(Ig,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Vi.DEFAULT_ORDER="XYZ";class Vv{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let cy=0;const Hg=new ae,xs=new qo,ua=new tn,hc=new ae,Oo=new ae,uy=new ae,fy=new qo,Gg=new ae(1,0,0),Vg=new ae(0,1,0),kg=new ae(0,0,1),Xg={type:"added"},dy={type:"removed"},Ss={type:"childadded",child:null},ld={type:"childremoved",child:null};class Wn extends Os{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cy++}),this.uuid=Wo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Wn.DEFAULT_UP.clone();const t=new ae,i=new Vi,r=new qo,l=new ae(1,1,1);function u(){r.setFromEuler(i,!1)}function d(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new tn},normalMatrix:{value:new ut}}),this.matrix=new tn,this.matrixWorld=new tn,this.matrixAutoUpdate=Wn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return xs.setFromAxisAngle(t,i),this.quaternion.multiply(xs),this}rotateOnWorldAxis(t,i){return xs.setFromAxisAngle(t,i),this.quaternion.premultiply(xs),this}rotateX(t){return this.rotateOnAxis(Gg,t)}rotateY(t){return this.rotateOnAxis(Vg,t)}rotateZ(t){return this.rotateOnAxis(kg,t)}translateOnAxis(t,i){return Hg.copy(t).applyQuaternion(this.quaternion),this.position.add(Hg.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(Gg,t)}translateY(t){return this.translateOnAxis(Vg,t)}translateZ(t){return this.translateOnAxis(kg,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ua.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?hc.copy(t):hc.set(t,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Oo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ua.lookAt(Oo,hc,this.up):ua.lookAt(hc,Oo,this.up),this.quaternion.setFromRotationMatrix(ua),l&&(ua.extractRotation(l.matrixWorld),xs.setFromRotationMatrix(ua),this.quaternion.premultiply(xs.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(At("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Xg),Ss.child=t,this.dispatchEvent(Ss),Ss.child=null):At("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(dy),ld.child=t,this.dispatchEvent(ld),ld.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ua.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ua.multiply(t.parent.matrixWorld)),t.applyMatrix4(ua),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Xg),Ss.child=t,this.dispatchEvent(Ss),Ss.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const d=this.children[r].getObjectByProperty(t,i);if(d!==void 0)return d}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oo,t,uy),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oo,fy,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,x=m.length;p<x;p++){const v=m[p];u(t.shapes,v)}else u(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(u(t.materials,this.material[m]));l.material=h}else l.material=u(t.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(u(t.animations,m))}}if(i){const h=d(t.geometries),m=d(t.materials),p=d(t.textures),x=d(t.images),v=d(t.shapes),S=d(t.skeletons),b=d(t.animations),R=d(t.nodes);h.length>0&&(r.geometries=h),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),x.length>0&&(r.images=x),v.length>0&&(r.shapes=v),S.length>0&&(r.skeletons=S),b.length>0&&(r.animations=b),R.length>0&&(r.nodes=R)}return r.object=l,r;function d(h){const m=[];for(const p in h){const x=h[p];delete x.metadata,m.push(x)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}}Wn.DEFAULT_UP=new ae(0,1,0);Wn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ti=new ae,fa=new ae,cd=new ae,da=new ae,ys=new ae,Ms=new ae,Wg=new ae,ud=new ae,fd=new ae,dd=new ae,hd=new en,pd=new en,md=new en;class Ai{constructor(t=new ae,i=new ae,r=new ae){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,l){l.subVectors(r,i),Ti.subVectors(t,i),l.cross(Ti);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(t,i,r,l,u){Ti.subVectors(l,i),fa.subVectors(r,i),cd.subVectors(t,i);const d=Ti.dot(Ti),h=Ti.dot(fa),m=Ti.dot(cd),p=fa.dot(fa),x=fa.dot(cd),v=d*p-h*h;if(v===0)return u.set(0,0,0),null;const S=1/v,b=(p*m-h*x)*S,R=(d*x-h*m)*S;return u.set(1-b-R,R,b)}static containsPoint(t,i,r,l){return this.getBarycoord(t,i,r,l,da)===null?!1:da.x>=0&&da.y>=0&&da.x+da.y<=1}static getInterpolation(t,i,r,l,u,d,h,m){return this.getBarycoord(t,i,r,l,da)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,da.x),m.addScaledVector(d,da.y),m.addScaledVector(h,da.z),m)}static getInterpolatedAttribute(t,i,r,l,u,d){return hd.setScalar(0),pd.setScalar(0),md.setScalar(0),hd.fromBufferAttribute(t,i),pd.fromBufferAttribute(t,r),md.fromBufferAttribute(t,l),d.setScalar(0),d.addScaledVector(hd,u.x),d.addScaledVector(pd,u.y),d.addScaledVector(md,u.z),d}static isFrontFacing(t,i,r,l){return Ti.subVectors(r,i),fa.subVectors(t,i),Ti.cross(fa).dot(l)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,l){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,r,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ti.subVectors(this.c,this.b),fa.subVectors(this.a,this.b),Ti.cross(fa).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ai.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Ai.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,l,u){return Ai.getInterpolation(t,this.a,this.b,this.c,i,r,l,u)}containsPoint(t){return Ai.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ai.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,l=this.b,u=this.c;let d,h;ys.subVectors(l,r),Ms.subVectors(u,r),ud.subVectors(t,r);const m=ys.dot(ud),p=Ms.dot(ud);if(m<=0&&p<=0)return i.copy(r);fd.subVectors(t,l);const x=ys.dot(fd),v=Ms.dot(fd);if(x>=0&&v<=x)return i.copy(l);const S=m*v-x*p;if(S<=0&&m>=0&&x<=0)return d=m/(m-x),i.copy(r).addScaledVector(ys,d);dd.subVectors(t,u);const b=ys.dot(dd),R=Ms.dot(dd);if(R>=0&&b<=R)return i.copy(u);const w=b*p-m*R;if(w<=0&&p>=0&&R<=0)return h=p/(p-R),i.copy(r).addScaledVector(Ms,h);const y=x*R-b*v;if(y<=0&&v-x>=0&&b-R>=0)return Wg.subVectors(u,l),h=(v-x)/(v-x+(b-R)),i.copy(l).addScaledVector(Wg,h);const _=1/(y+w+S);return d=w*_,h=S*_,i.copy(r).addScaledVector(ys,d).addScaledVector(Ms,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const kv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Za={h:0,s:0,l:0},pc={h:0,s:0,l:0};function gd(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class Rt{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=gi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,bt.colorSpaceToWorking(this,i),this}setRGB(t,i,r,l=bt.workingColorSpace){return this.r=t,this.g=i,this.b=r,bt.colorSpaceToWorking(this,l),this}setHSL(t,i,r,l=bt.workingColorSpace){if(t=JS(t,1),i=St(i,0,1),r=St(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,d=2*r-u;this.r=gd(d,u,t+1/3),this.g=gd(d,u,t),this.b=gd(d,u,t-1/3)}return bt.colorSpaceToWorking(this,l),this}setStyle(t,i=gi){function r(u){u!==void 0&&parseFloat(u)<1&&rt("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let u;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:rt("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=l[1],d=u.length;if(d===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(u,16),i);rt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=gi){const r=kv[t.toLowerCase()];return r!==void 0?this.setHex(r,i):rt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ga(t.r),this.g=ga(t.g),this.b=ga(t.b),this}copyLinearToSRGB(t){return this.r=Cs(t.r),this.g=Cs(t.g),this.b=Cs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=gi){return bt.workingToColorSpace(Un.copy(this),t),Math.round(St(Un.r*255,0,255))*65536+Math.round(St(Un.g*255,0,255))*256+Math.round(St(Un.b*255,0,255))}getHexString(t=gi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=bt.workingColorSpace){bt.workingToColorSpace(Un.copy(this),i);const r=Un.r,l=Un.g,u=Un.b,d=Math.max(r,l,u),h=Math.min(r,l,u);let m,p;const x=(h+d)/2;if(h===d)m=0,p=0;else{const v=d-h;switch(p=x<=.5?v/(d+h):v/(2-d-h),d){case r:m=(l-u)/v+(l<u?6:0);break;case l:m=(u-r)/v+2;break;case u:m=(r-l)/v+4;break}m/=6}return t.h=m,t.s=p,t.l=x,t}getRGB(t,i=bt.workingColorSpace){return bt.workingToColorSpace(Un.copy(this),i),t.r=Un.r,t.g=Un.g,t.b=Un.b,t}getStyle(t=gi){bt.workingToColorSpace(Un.copy(this),t);const i=Un.r,r=Un.g,l=Un.b;return t!==gi?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,i,r){return this.getHSL(Za),this.setHSL(Za.h+t,Za.s+i,Za.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL(Za),t.getHSL(pc);const r=Jf(Za.h,pc.h,i),l=Jf(Za.s,pc.s,i),u=Jf(Za.l,pc.l,i);return this.setHSL(r,l,u),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,l=this.b,u=t.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Un=new Rt;Rt.NAMES=kv;let hy=0;class Yo extends Os{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hy++}),this.uuid=Wo(),this.name="",this.type="Material",this.blending=Rs,this.side=$a,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Cd,this.blendDst=wd,this.blendEquation=Tr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Rt(0,0,0),this.blendAlpha=0,this.depthFunc=ws,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Dg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hs,this.stencilZFail=hs,this.stencilZPass=hs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){rt(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){rt(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Rs&&(r.blending=this.blending),this.side!==$a&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Cd&&(r.blendSrc=this.blendSrc),this.blendDst!==wd&&(r.blendDst=this.blendDst),this.blendEquation!==Tr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==ws&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Dg&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==hs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==hs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==hs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const d=[];for(const h in u){const m=u[h];delete m.metadata,d.push(m)}return d}if(i){const u=l(t.textures),d=l(t.images);u.length>0&&(r.textures=u),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Pc extends Yo{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vi,this.combine=Eh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const un=new ae,mc=new Nt;let py=0;class Hi{constructor(t,i,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:py++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=Ug,this.updateRanges=[],this.gpuType=Bi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[t+l]=i.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)mc.fromBufferAttribute(this,i),mc.applyMatrix3(t),this.setXY(i,mc.x,mc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)un.fromBufferAttribute(this,i),un.applyMatrix3(t),this.setXYZ(i,un.x,un.y,un.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)un.fromBufferAttribute(this,i),un.applyMatrix4(t),this.setXYZ(i,un.x,un.y,un.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)un.fromBufferAttribute(this,i),un.applyNormalMatrix(t),this.setXYZ(i,un.x,un.y,un.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)un.fromBufferAttribute(this,i),un.transformDirection(t),this.setXYZ(i,un.x,un.y,un.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=Uo(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=kn(r,this.array)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Uo(i,this.array)),i}setX(t,i){return this.normalized&&(i=kn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Uo(i,this.array)),i}setY(t,i){return this.normalized&&(i=kn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Uo(i,this.array)),i}setZ(t,i){return this.normalized&&(i=kn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Uo(i,this.array)),i}setW(t,i){return this.normalized&&(i=kn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=kn(i,this.array),r=kn(r,this.array)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,l){return t*=this.itemSize,this.normalized&&(i=kn(i,this.array),r=kn(r,this.array),l=kn(l,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,i,r,l,u){return t*=this.itemSize,this.normalized&&(i=kn(i,this.array),r=kn(r,this.array),l=kn(l,this.array),u=kn(u,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ug&&(t.usage=this.usage),t}}class Xv extends Hi{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class Wv extends Hi{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class Bn extends Hi{constructor(t,i,r){super(new Float32Array(t),i,r)}}let my=0;const pi=new tn,vd=new Wn,bs=new ae,ei=new jo,Po=new jo,gn=new ae;class Ci extends Os{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:my++}),this.uuid=Wo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Hv(t)?Wv:Xv)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new ut().getNormalMatrix(t);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return pi.makeRotationFromQuaternion(t),this.applyMatrix4(pi),this}rotateX(t){return pi.makeRotationX(t),this.applyMatrix4(pi),this}rotateY(t){return pi.makeRotationY(t),this.applyMatrix4(pi),this}rotateZ(t){return pi.makeRotationZ(t),this.applyMatrix4(pi),this}translate(t,i,r){return pi.makeTranslation(t,i,r),this.applyMatrix4(pi),this}scale(t,i,r){return pi.makeScale(t,i,r),this.applyMatrix4(pi),this}lookAt(t){return vd.lookAt(t),vd.updateMatrix(),this.applyMatrix4(vd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(bs).negate(),this.translate(bs.x,bs.y,bs.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,u=t.length;l<u;l++){const d=t[l];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new Bn(r,3))}else{const r=Math.min(t.length,i.count);for(let l=0;l<r;l++){const u=t[l];i.setXYZ(l,u.x,u.y,u.z||0)}t.length>i.count&&rt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new jo);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){At("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ae(-1/0,-1/0,-1/0),new ae(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];ei.setFromBufferAttribute(u),this.morphTargetsRelative?(gn.addVectors(this.boundingBox.min,ei.min),this.boundingBox.expandByPoint(gn),gn.addVectors(this.boundingBox.max,ei.max),this.boundingBox.expandByPoint(gn)):(this.boundingBox.expandByPoint(ei.min),this.boundingBox.expandByPoint(ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&At('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Oh);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){At("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ae,1/0);return}if(t){const r=this.boundingSphere.center;if(ei.setFromBufferAttribute(t),i)for(let u=0,d=i.length;u<d;u++){const h=i[u];Po.setFromBufferAttribute(h),this.morphTargetsRelative?(gn.addVectors(ei.min,Po.min),ei.expandByPoint(gn),gn.addVectors(ei.max,Po.max),ei.expandByPoint(gn)):(ei.expandByPoint(Po.min),ei.expandByPoint(Po.max))}ei.getCenter(r);let l=0;for(let u=0,d=t.count;u<d;u++)gn.fromBufferAttribute(t,u),l=Math.max(l,r.distanceToSquared(gn));if(i)for(let u=0,d=i.length;u<d;u++){const h=i[u],m=this.morphTargetsRelative;for(let p=0,x=h.count;p<x;p++)gn.fromBufferAttribute(h,p),m&&(bs.fromBufferAttribute(t,p),gn.add(bs)),l=Math.max(l,r.distanceToSquared(gn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&At('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){At("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Hi(new Float32Array(4*r.count),4));const d=this.getAttribute("tangent"),h=[],m=[];for(let K=0;K<r.count;K++)h[K]=new ae,m[K]=new ae;const p=new ae,x=new ae,v=new ae,S=new Nt,b=new Nt,R=new Nt,w=new ae,y=new ae;function _(K,C,E){p.fromBufferAttribute(r,K),x.fromBufferAttribute(r,C),v.fromBufferAttribute(r,E),S.fromBufferAttribute(u,K),b.fromBufferAttribute(u,C),R.fromBufferAttribute(u,E),x.sub(p),v.sub(p),b.sub(S),R.sub(S);const I=1/(b.x*R.y-R.x*b.y);isFinite(I)&&(w.copy(x).multiplyScalar(R.y).addScaledVector(v,-b.y).multiplyScalar(I),y.copy(v).multiplyScalar(b.x).addScaledVector(x,-R.x).multiplyScalar(I),h[K].add(w),h[C].add(w),h[E].add(w),m[K].add(y),m[C].add(y),m[E].add(y))}let L=this.groups;L.length===0&&(L=[{start:0,count:t.count}]);for(let K=0,C=L.length;K<C;++K){const E=L[K],I=E.start,J=E.count;for(let se=I,pe=I+J;se<pe;se+=3)_(t.getX(se+0),t.getX(se+1),t.getX(se+2))}const O=new ae,N=new ae,F=new ae,H=new ae;function z(K){F.fromBufferAttribute(l,K),H.copy(F);const C=h[K];O.copy(C),O.sub(F.multiplyScalar(F.dot(C))).normalize(),N.crossVectors(H,C);const I=N.dot(m[K])<0?-1:1;d.setXYZW(K,O.x,O.y,O.z,I)}for(let K=0,C=L.length;K<C;++K){const E=L[K],I=E.start,J=E.count;for(let se=I,pe=I+J;se<pe;se+=3)z(t.getX(se+0)),z(t.getX(se+1)),z(t.getX(se+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Hi(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let S=0,b=r.count;S<b;S++)r.setXYZ(S,0,0,0);const l=new ae,u=new ae,d=new ae,h=new ae,m=new ae,p=new ae,x=new ae,v=new ae;if(t)for(let S=0,b=t.count;S<b;S+=3){const R=t.getX(S+0),w=t.getX(S+1),y=t.getX(S+2);l.fromBufferAttribute(i,R),u.fromBufferAttribute(i,w),d.fromBufferAttribute(i,y),x.subVectors(d,u),v.subVectors(l,u),x.cross(v),h.fromBufferAttribute(r,R),m.fromBufferAttribute(r,w),p.fromBufferAttribute(r,y),h.add(x),m.add(x),p.add(x),r.setXYZ(R,h.x,h.y,h.z),r.setXYZ(w,m.x,m.y,m.z),r.setXYZ(y,p.x,p.y,p.z)}else for(let S=0,b=i.count;S<b;S+=3)l.fromBufferAttribute(i,S+0),u.fromBufferAttribute(i,S+1),d.fromBufferAttribute(i,S+2),x.subVectors(d,u),v.subVectors(l,u),x.cross(v),r.setXYZ(S+0,x.x,x.y,x.z),r.setXYZ(S+1,x.x,x.y,x.z),r.setXYZ(S+2,x.x,x.y,x.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)gn.fromBufferAttribute(t,i),gn.normalize(),t.setXYZ(i,gn.x,gn.y,gn.z)}toNonIndexed(){function t(h,m){const p=h.array,x=h.itemSize,v=h.normalized,S=new p.constructor(m.length*x);let b=0,R=0;for(let w=0,y=m.length;w<y;w++){h.isInterleavedBufferAttribute?b=m[w]*h.data.stride+h.offset:b=m[w]*x;for(let _=0;_<x;_++)S[R++]=p[b++]}return new Hi(S,x,v)}if(this.index===null)return rt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Ci,r=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=t(m,r);i.setAttribute(h,p)}const u=this.morphAttributes;for(const h in u){const m=[],p=u[h];for(let x=0,v=p.length;x<v;x++){const S=p[x],b=t(S,r);m.push(b)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,m=d.length;h<m;h++){const p=d[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],x=[];for(let v=0,S=p.length;v<S;v++){const b=p[v];x.push(b.toJSON(t.data))}x.length>0&&(l[m]=x,u=!0)}u&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(t.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone());const l=t.attributes;for(const p in l){const x=l[p];this.setAttribute(p,x.clone(i))}const u=t.morphAttributes;for(const p in u){const x=[],v=u[p];for(let S=0,b=v.length;S<b;S++)x.push(v[S].clone(i));this.morphAttributes[p]=x}this.morphTargetsRelative=t.morphTargetsRelative;const d=t.groups;for(let p=0,x=d.length;p<x;p++){const v=d[p];this.addGroup(v.start,v.count,v.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const qg=new tn,Sr=new sy,gc=new Oh,jg=new ae,vc=new ae,_c=new ae,xc=new ae,_d=new ae,Sc=new ae,Yg=new ae,yc=new ae;class ii extends Wn{constructor(t=new Ci,i=new Pc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}getVertexPosition(t,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,d=r.morphTargetsRelative;i.fromBufferAttribute(l,t);const h=this.morphTargetInfluences;if(u&&h){Sc.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const x=h[m],v=u[m];x!==0&&(_d.fromBufferAttribute(v,t),d?Sc.addScaledVector(_d,x):Sc.addScaledVector(_d.sub(i),x))}i.add(Sc)}return i}raycast(t,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),gc.copy(r.boundingSphere),gc.applyMatrix4(u),Sr.copy(t.ray).recast(t.near),!(gc.containsPoint(Sr.origin)===!1&&(Sr.intersectSphere(gc,jg)===null||Sr.origin.distanceToSquared(jg)>(t.far-t.near)**2))&&(qg.copy(u).invert(),Sr.copy(t.ray).applyMatrix4(qg),!(r.boundingBox!==null&&Sr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,Sr)))}_computeIntersections(t,i,r){let l;const u=this.geometry,d=this.material,h=u.index,m=u.attributes.position,p=u.attributes.uv,x=u.attributes.uv1,v=u.attributes.normal,S=u.groups,b=u.drawRange;if(h!==null)if(Array.isArray(d))for(let R=0,w=S.length;R<w;R++){const y=S[R],_=d[y.materialIndex],L=Math.max(y.start,b.start),O=Math.min(h.count,Math.min(y.start+y.count,b.start+b.count));for(let N=L,F=O;N<F;N+=3){const H=h.getX(N),z=h.getX(N+1),K=h.getX(N+2);l=Mc(this,_,t,r,p,x,v,H,z,K),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const R=Math.max(0,b.start),w=Math.min(h.count,b.start+b.count);for(let y=R,_=w;y<_;y+=3){const L=h.getX(y),O=h.getX(y+1),N=h.getX(y+2);l=Mc(this,d,t,r,p,x,v,L,O,N),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let R=0,w=S.length;R<w;R++){const y=S[R],_=d[y.materialIndex],L=Math.max(y.start,b.start),O=Math.min(m.count,Math.min(y.start+y.count,b.start+b.count));for(let N=L,F=O;N<F;N+=3){const H=N,z=N+1,K=N+2;l=Mc(this,_,t,r,p,x,v,H,z,K),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const R=Math.max(0,b.start),w=Math.min(m.count,b.start+b.count);for(let y=R,_=w;y<_;y+=3){const L=y,O=y+1,N=y+2;l=Mc(this,d,t,r,p,x,v,L,O,N),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function gy(o,t,i,r,l,u,d,h){let m;if(t.side===Xn?m=r.intersectTriangle(d,u,l,!0,h):m=r.intersectTriangle(l,u,d,t.side===$a,h),m===null)return null;yc.copy(h),yc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(yc);return p<i.near||p>i.far?null:{distance:p,point:yc.clone(),object:o}}function Mc(o,t,i,r,l,u,d,h,m,p){o.getVertexPosition(h,vc),o.getVertexPosition(m,_c),o.getVertexPosition(p,xc);const x=gy(o,t,i,r,vc,_c,xc,Yg);if(x){const v=new ae;Ai.getBarycoord(Yg,vc,_c,xc,v),l&&(x.uv=Ai.getInterpolatedAttribute(l,h,m,p,v,new Nt)),u&&(x.uv1=Ai.getInterpolatedAttribute(u,h,m,p,v,new Nt)),d&&(x.normal=Ai.getInterpolatedAttribute(d,h,m,p,v,new ae),x.normal.dot(r.direction)>0&&x.normal.multiplyScalar(-1));const S={a:h,b:m,c:p,normal:new ae,materialIndex:0};Ai.getNormal(vc,_c,xc,S.normal),x.face=S,x.barycoord=v}return x}class Dr extends Ci{constructor(t=1,i=1,r=1,l=1,u=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:d};const h=this;l=Math.floor(l),u=Math.floor(u),d=Math.floor(d);const m=[],p=[],x=[],v=[];let S=0,b=0;R("z","y","x",-1,-1,r,i,t,d,u,0),R("z","y","x",1,-1,r,i,-t,d,u,1),R("x","z","y",1,1,t,r,i,l,d,2),R("x","z","y",1,-1,t,r,-i,l,d,3),R("x","y","z",1,-1,t,i,r,l,u,4),R("x","y","z",-1,-1,t,i,-r,l,u,5),this.setIndex(m),this.setAttribute("position",new Bn(p,3)),this.setAttribute("normal",new Bn(x,3)),this.setAttribute("uv",new Bn(v,2));function R(w,y,_,L,O,N,F,H,z,K,C){const E=N/z,I=F/K,J=N/2,se=F/2,pe=H/2,fe=z+1,B=K+1;let V=0,re=0;const Me=new ae;for(let Se=0;Se<B;Se++){const U=Se*I-se;for(let ie=0;ie<fe;ie++){const ve=ie*E-J;Me[w]=ve*L,Me[y]=U*O,Me[_]=pe,p.push(Me.x,Me.y,Me.z),Me[w]=0,Me[y]=0,Me[_]=H>0?1:-1,x.push(Me.x,Me.y,Me.z),v.push(ie/z),v.push(1-Se/K),V+=1}}for(let Se=0;Se<K;Se++)for(let U=0;U<z;U++){const ie=S+U+fe*Se,ve=S+U+fe*(Se+1),Ae=S+(U+1)+fe*(Se+1),Ie=S+(U+1)+fe*Se;m.push(ie,ve,Ie),m.push(ve,Ae,Ie),re+=6}h.addGroup(b,re,C),b+=re,S+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Dr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ls(o){const t={};for(const i in o){t[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(rt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=l.clone():Array.isArray(l)?t[i][r]=l.slice():t[i][r]=l}}return t}function On(o){const t={};for(let i=0;i<o.length;i++){const r=Ls(o[i]);for(const l in r)t[l]=r[l]}return t}function vy(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function qv(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:bt.workingColorSpace}const _y={clone:Ls,merge:On};var xy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Sy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ki extends Yo{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xy,this.fragmentShader=Sy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ls(t.uniforms),this.uniformsGroups=vy(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(t).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class jv extends Wn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tn,this.projectionMatrix=new tn,this.projectionMatrixInverse=new tn,this.coordinateSystem=zi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ka=new ae,Zg=new Nt,Kg=new Nt;class ti extends jv{constructor(t=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=xh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Qf*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return xh*2*Math.atan(Math.tan(Qf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,r){Ka.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ka.x,Ka.y).multiplyScalar(-t/Ka.z),Ka.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Ka.x,Ka.y).multiplyScalar(-t/Ka.z)}getViewSize(t,i){return this.getViewBounds(t,Zg,Kg),i.subVectors(Kg,Zg)}setViewOffset(t,i,r,l,u,d){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Qf*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,p=d.fullHeight;u+=d.offsetX*l/m,i-=d.offsetY*r/p,l*=d.width/m,r*=d.height/p}const h=this.filmOffset;h!==0&&(u+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Es=-90,Ts=1;class yy extends Wn{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new ti(Es,Ts,t,i);l.layers=this.layers,this.add(l);const u=new ti(Es,Ts,t,i);u.layers=this.layers,this.add(u);const d=new ti(Es,Ts,t,i);d.layers=this.layers,this.add(d);const h=new ti(Es,Ts,t,i);h.layers=this.layers,this.add(h);const m=new ti(Es,Ts,t,i);m.layers=this.layers,this.add(m);const p=new ti(Es,Ts,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,l,u,d,h,m]=i;for(const p of i)this.remove(p);if(t===zi)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Lc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[u,d,h,m,p,x]=this.children,v=t.getRenderTarget(),S=t.getActiveCubeFace(),b=t.getActiveMipmapLevel(),R=t.xr.enabled;t.xr.enabled=!1;const w=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,l),t.render(i,u),t.setRenderTarget(r,1,l),t.render(i,d),t.setRenderTarget(r,2,l),t.render(i,h),t.setRenderTarget(r,3,l),t.render(i,m),t.setRenderTarget(r,4,l),t.render(i,p),r.texture.generateMipmaps=w,t.setRenderTarget(r,5,l),t.render(i,x),t.setRenderTarget(v,S,b),t.xr.enabled=R,r.texture.needsPMREMUpdate=!0}}class Yv extends Pn{constructor(t=[],i=wr,r,l,u,d,h,m,p,x){super(t,i,r,l,u,d,h,m,p,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Zv extends Ii{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];this.texture=new Yv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Dr(5,5,5),u=new ki({name:"CubemapFromEquirect",uniforms:Ls(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Xn,blending:ma});u.uniforms.tEquirect.value=i;const d=new ii(l,u),h=i.minFilter;return i.minFilter===Rr&&(i.minFilter=Nn),new yy(1,10,this).update(t,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(t,i=!0,r=!0,l=!0){const u=t.getRenderTarget();for(let d=0;d<6;d++)t.setRenderTarget(this,d),t.clear(i,r,l);t.setRenderTarget(u)}}class Io extends Wn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const My={type:"move"};class xd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Io,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Io,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ae,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ae),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Io,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ae,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ae),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let l=null,u=null,d=null;const h=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){d=!0;for(const w of t.hand.values()){const y=i.getJointPose(w,r),_=this._getHandJoint(p,w);y!==null&&(_.matrix.fromArray(y.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=y.radius),_.visible=y!==null}const x=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],S=x.position.distanceTo(v.position),b=.02,R=.005;p.inputState.pinching&&S>b+R?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&S<=b-R&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(u=i.getPose(t.gripSpace,r),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=i.getPose(t.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(My)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=d!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new Io;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}class by extends Wn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vi,this.environmentIntensity=1,this.environmentRotation=new Vi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class Ey extends Pn{constructor(t=null,i=1,r=1,l,u,d,h,m,p=Rn,x=Rn,v,S){super(null,d,h,m,p,x,l,u,v,S),this.isDataTexture=!0,this.image={data:t,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Sd=new ae,Ty=new ae,Ay=new ut;class Er{constructor(t=new ae(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,l){return this.normal.set(t,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const l=Sd.subVectors(r,i).cross(Ty.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const r=t.delta(Sd),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const u=-(t.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(t.start).addScaledVector(r,u)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||Ay.getNormalMatrix(t),l=this.coplanarPoint(Sd).applyMatrix4(t),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const yr=new Oh,Ry=new Nt(.5,.5),bc=new ae;class Ph{constructor(t=new Er,i=new Er,r=new Er,l=new Er,u=new Er,d=new Er){this.planes=[t,i,r,l,u,d]}set(t,i,r,l,u,d){const h=this.planes;return h[0].copy(t),h[1].copy(i),h[2].copy(r),h[3].copy(l),h[4].copy(u),h[5].copy(d),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=zi,r=!1){const l=this.planes,u=t.elements,d=u[0],h=u[1],m=u[2],p=u[3],x=u[4],v=u[5],S=u[6],b=u[7],R=u[8],w=u[9],y=u[10],_=u[11],L=u[12],O=u[13],N=u[14],F=u[15];if(l[0].setComponents(p-d,b-x,_-R,F-L).normalize(),l[1].setComponents(p+d,b+x,_+R,F+L).normalize(),l[2].setComponents(p+h,b+v,_+w,F+O).normalize(),l[3].setComponents(p-h,b-v,_-w,F-O).normalize(),r)l[4].setComponents(m,S,y,N).normalize(),l[5].setComponents(p-m,b-S,_-y,F-N).normalize();else if(l[4].setComponents(p-m,b-S,_-y,F-N).normalize(),i===zi)l[5].setComponents(p+m,b+S,_+y,F+N).normalize();else if(i===Lc)l[5].setComponents(m,S,y,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),yr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),yr.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(yr)}intersectsSprite(t){yr.center.set(0,0,0);const i=Ry.distanceTo(t.center);return yr.radius=.7071067811865476+i,yr.applyMatrix4(t.matrixWorld),this.intersectsSphere(yr)}intersectsSphere(t){const i=this.planes,r=t.center,l=-t.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(bc.x=l.normal.x>0?t.max.x:t.min.x,bc.y=l.normal.y>0?t.max.y:t.min.y,bc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(bc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Xo extends Pn{constructor(t,i,r=Gi,l,u,d,h=Rn,m=Rn,p,x=_a,v=1){if(x!==_a&&x!==Cr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const S={width:t,height:i,depth:v};super(S,l,u,d,h,m,x,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Lh(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Cy extends Xo{constructor(t,i=Gi,r=wr,l,u,d=Rn,h=Rn,m,p=_a){const x={width:t,height:t,depth:1},v=[x,x,x,x,x,x];super(t,t,i,r,l,u,d,h,m,p),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Kv extends Pn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class zc extends Ci{constructor(t=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:l};const u=t/2,d=i/2,h=Math.floor(r),m=Math.floor(l),p=h+1,x=m+1,v=t/h,S=i/m,b=[],R=[],w=[],y=[];for(let _=0;_<x;_++){const L=_*S-d;for(let O=0;O<p;O++){const N=O*v-u;R.push(N,-L,0),w.push(0,0,1),y.push(O/h),y.push(1-_/m)}}for(let _=0;_<m;_++)for(let L=0;L<h;L++){const O=L+p*_,N=L+p*(_+1),F=L+1+p*(_+1),H=L+1+p*_;b.push(O,N,H),b.push(N,F,H)}this.setIndex(b),this.setAttribute("position",new Bn(R,3)),this.setAttribute("normal",new Bn(w,3)),this.setAttribute("uv",new Bn(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zc(t.width,t.height,t.widthSegments,t.heightSegments)}}class Bh extends Ci{constructor(t=1,i=32,r=16,l=0,u=Math.PI*2,d=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:r,phiStart:l,phiLength:u,thetaStart:d,thetaLength:h},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));const m=Math.min(d+h,Math.PI);let p=0;const x=[],v=new ae,S=new ae,b=[],R=[],w=[],y=[];for(let _=0;_<=r;_++){const L=[],O=_/r;let N=0;_===0&&d===0?N=.5/i:_===r&&m===Math.PI&&(N=-.5/i);for(let F=0;F<=i;F++){const H=F/i;v.x=-t*Math.cos(l+H*u)*Math.sin(d+O*h),v.y=t*Math.cos(d+O*h),v.z=t*Math.sin(l+H*u)*Math.sin(d+O*h),R.push(v.x,v.y,v.z),S.copy(v).normalize(),w.push(S.x,S.y,S.z),y.push(H+N,1-O),L.push(p++)}x.push(L)}for(let _=0;_<r;_++)for(let L=0;L<i;L++){const O=x[_][L+1],N=x[_][L],F=x[_+1][L],H=x[_+1][L+1];(_!==0||d>0)&&b.push(O,N,H),(_!==r-1||m<Math.PI)&&b.push(N,F,H)}this.setIndex(b),this.setAttribute("position",new Bn(R,3)),this.setAttribute("normal",new Bn(w,3)),this.setAttribute("uv",new Bn(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Bh(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class zh extends Ci{constructor(t=1,i=.4,r=12,l=48,u=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:i,radialSegments:r,tubularSegments:l,arc:u},r=Math.floor(r),l=Math.floor(l);const d=[],h=[],m=[],p=[],x=new ae,v=new ae,S=new ae;for(let b=0;b<=r;b++)for(let R=0;R<=l;R++){const w=R/l*u,y=b/r*Math.PI*2;v.x=(t+i*Math.cos(y))*Math.cos(w),v.y=(t+i*Math.cos(y))*Math.sin(w),v.z=i*Math.sin(y),h.push(v.x,v.y,v.z),x.x=t*Math.cos(w),x.y=t*Math.sin(w),S.subVectors(v,x).normalize(),m.push(S.x,S.y,S.z),p.push(R/l),p.push(b/r)}for(let b=1;b<=r;b++)for(let R=1;R<=l;R++){const w=(l+1)*b+R-1,y=(l+1)*(b-1)+R-1,_=(l+1)*(b-1)+R,L=(l+1)*b+R;d.push(w,y,L),d.push(y,_,L)}this.setIndex(d),this.setAttribute("position",new Bn(h,3)),this.setAttribute("normal",new Bn(m,3)),this.setAttribute("uv",new Bn(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zh(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class wy extends ki{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Qg extends Yo{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Rt(16777215),this.specular=new Rt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Iv,this.normalScale=new Nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vi,this.combine=Eh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Dy extends Yo{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=VS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Uy extends Yo{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Qv extends Wn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Rt(t),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const yd=new tn,Jg=new ae,$g=new ae;class Ny{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Nt(512,512),this.mapType=ni,this.map=null,this.mapPass=null,this.matrix=new tn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ph,this._frameExtents=new Nt(1,1),this._viewportCount=1,this._viewports=[new en(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,r=this.matrix;Jg.setFromMatrixPosition(t.matrixWorld),i.position.copy(Jg),$g.setFromMatrixPosition(t.target.matrixWorld),i.lookAt($g),i.updateMatrixWorld(),yd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yd,i.coordinateSystem,i.reversedDepth),i.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(yd)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Ly extends Ny{constructor(){super(new ti(90,1,.5,500)),this.isPointLightShadow=!0}}class Oy extends Qv{constructor(t,i,r=0,l=2){super(t,i),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=l,this.shadow=new Ly}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.distance=this.distance,i.object.decay=this.decay,i.object.shadow=this.shadow.toJSON(),i}}class Jv extends jv{constructor(t=-1,i=1,r=1,l=-1,u=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=d,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,l,u,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-t,d=r+t,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,d=u+p*this.view.width,h-=x*this.view.offsetY,m=h-x*this.view.height}this.projectionMatrix.makeOrthographic(u,d,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class Py extends Qv{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class By extends ti{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}function ev(o,t,i,r){const l=zy(r);switch(i){case Bv:return o*t;case Fv:return o*t/l.components*l.byteLength;case Ch:return o*t/l.components*l.byteLength;case Us:return o*t*2/l.components*l.byteLength;case wh:return o*t*2/l.components*l.byteLength;case zv:return o*t*3/l.components*l.byteLength;case Ri:return o*t*4/l.components*l.byteLength;case Dh:return o*t*4/l.components*l.byteLength;case Rc:case Cc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case wc:case Dc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Vd:case Xd:return Math.max(o,16)*Math.max(t,8)/4;case Gd:case kd:return Math.max(o,8)*Math.max(t,8)/2;case Wd:case qd:case Yd:case Zd:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case jd:case Kd:case Qd:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Jd:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case $d:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case eh:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case th:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case nh:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case ih:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case ah:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case rh:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case sh:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case oh:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case lh:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case ch:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case uh:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case fh:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case dh:case hh:case ph:return Math.ceil(o/4)*Math.ceil(t/4)*16;case mh:case gh:return Math.ceil(o/4)*Math.ceil(t/4)*8;case vh:case _h:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function zy(o){switch(o){case ni:case Nv:return{byteLength:1,components:1};case Go:case Lv:case va:return{byteLength:2,components:1};case Ah:case Rh:return{byteLength:2,components:4};case Gi:case Th:case Bi:return{byteLength:4,components:1};case Ov:case Pv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:bh}}));typeof window<"u"&&(window.__THREE__?rt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=bh);function $v(){let o=null,t=!1,i=null,r=null;function l(u,d){i(u,d),r=o.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(r=o.requestAnimationFrame(l),t=!0)},stop:function(){o.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function Fy(o){const t=new WeakMap;function i(h,m){const p=h.array,x=h.usage,v=p.byteLength,S=o.createBuffer();o.bindBuffer(m,S),o.bufferData(m,p,x),h.onUploadCallback();let b;if(p instanceof Float32Array)b=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)b=o.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?b=o.HALF_FLOAT:b=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)b=o.SHORT;else if(p instanceof Uint32Array)b=o.UNSIGNED_INT;else if(p instanceof Int32Array)b=o.INT;else if(p instanceof Int8Array)b=o.BYTE;else if(p instanceof Uint8Array)b=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)b=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:S,type:b,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:v}}function r(h,m,p){const x=m.array,v=m.updateRanges;if(o.bindBuffer(p,h),v.length===0)o.bufferSubData(p,0,x);else{v.sort((b,R)=>b.start-R.start);let S=0;for(let b=1;b<v.length;b++){const R=v[S],w=v[b];w.start<=R.start+R.count+1?R.count=Math.max(R.count,w.start+w.count-R.start):(++S,v[S]=w)}v.length=S+1;for(let b=0,R=v.length;b<R;b++){const w=v[b];o.bufferSubData(p,w.start*x.BYTES_PER_ELEMENT,x,w.start,w.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function u(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=t.get(h);m&&(o.deleteBuffer(m.buffer),t.delete(h))}function d(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const x=t.get(h);(!x||x.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=t.get(h);if(p===void 0)t.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,h,m),p.version=h.version}}return{get:l,remove:u,update:d}}var Iy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Hy=`#ifdef USE_ALPHAHASH
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
#endif`,Gy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ky=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Xy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Wy=`#ifdef USE_AOMAP
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
#endif`,qy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jy=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Yy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Zy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ky=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Qy=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Jy=`#ifdef USE_IRIDESCENCE
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
#endif`,$y=`#ifdef USE_BUMPMAP
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
#endif`,eM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,tM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,nM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,iM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,aM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,rM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,sM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,oM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,lM=`#define PI 3.141592653589793
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
} // validated`,cM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,uM=`vec3 transformedNormal = objectNormal;
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
#endif`,fM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,dM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,pM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mM="gl_FragColor = linearToOutputTexel( gl_FragColor );",gM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,vM=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,_M=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,xM=`#ifdef USE_ENVMAP
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
#endif`,SM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,yM=`#ifdef USE_ENVMAP
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
#endif`,MM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,EM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,TM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,AM=`#ifdef USE_GRADIENTMAP
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
}`,RM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,CM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,DM=`uniform bool receiveShadow;
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
#endif`,UM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
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
#endif`,NM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,LM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,OM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,PM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,BM=`PhysicalMaterial material;
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
#endif`,zM=`uniform sampler2D dfgLUT;
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
		float v = 0.5 / ( gv + gl );
		return v;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
}`,FM=`
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,IM=`#if defined( RE_IndirectDiffuse )
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
#endif`,HM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,GM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,VM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,XM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,WM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,YM=`#if defined( USE_POINTS_UV )
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
#endif`,ZM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,KM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,QM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,JM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$M=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,eb=`#ifdef USE_MORPHTARGETS
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
#endif`,tb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ib=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ab=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ob=`#ifdef USE_NORMALMAP
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
#endif`,lb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,cb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ub=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,fb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,db=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,pb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,mb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_b=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Sb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
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
			shadowCoord.z += shadowBias;
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
			shadowCoord.z += shadowBias;
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
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,yb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Mb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,bb=`float getShadowMask() {
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
}`,Eb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Tb=`#ifdef USE_SKINNING
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
#endif`,Ab=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Rb=`#ifdef USE_SKINNING
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
#endif`,Cb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Db=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ub=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Nb=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Lb=`#ifdef USE_TRANSMISSION
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
#endif`,Ob=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Pb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Fb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ib=`uniform sampler2D t2D;
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
}`,Hb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xb=`#include <common>
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
}`,Wb=`#if DEPTH_PACKING == 3200
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
}`,qb=`#define DISTANCE
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
}`,jb=`#define DISTANCE
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
void main () {
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
}`,Yb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Zb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kb=`uniform float scale;
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
}`,Qb=`uniform vec3 diffuse;
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
}`,Jb=`#include <common>
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
}`,$b=`uniform vec3 diffuse;
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
}`,eE=`#define LAMBERT
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
}`,tE=`#define LAMBERT
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
}`,nE=`#define MATCAP
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
}`,iE=`#define MATCAP
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
}`,aE=`#define NORMAL
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
}`,rE=`#define NORMAL
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
}`,sE=`#define PHONG
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
}`,oE=`#define PHONG
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
}`,lE=`#define STANDARD
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
}`,cE=`#define STANDARD
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
}`,uE=`#define TOON
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
}`,fE=`#define TOON
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
}`,dE=`uniform float size;
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
}`,hE=`uniform vec3 diffuse;
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
}`,pE=`#include <common>
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
}`,mE=`uniform vec3 color;
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
}`,gE=`uniform float rotation;
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
}`,vE=`uniform vec3 diffuse;
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
}`,ft={alphahash_fragment:Iy,alphahash_pars_fragment:Hy,alphamap_fragment:Gy,alphamap_pars_fragment:Vy,alphatest_fragment:ky,alphatest_pars_fragment:Xy,aomap_fragment:Wy,aomap_pars_fragment:qy,batching_pars_vertex:jy,batching_vertex:Yy,begin_vertex:Zy,beginnormal_vertex:Ky,bsdfs:Qy,iridescence_fragment:Jy,bumpmap_pars_fragment:$y,clipping_planes_fragment:eM,clipping_planes_pars_fragment:tM,clipping_planes_pars_vertex:nM,clipping_planes_vertex:iM,color_fragment:aM,color_pars_fragment:rM,color_pars_vertex:sM,color_vertex:oM,common:lM,cube_uv_reflection_fragment:cM,defaultnormal_vertex:uM,displacementmap_pars_vertex:fM,displacementmap_vertex:dM,emissivemap_fragment:hM,emissivemap_pars_fragment:pM,colorspace_fragment:mM,colorspace_pars_fragment:gM,envmap_fragment:vM,envmap_common_pars_fragment:_M,envmap_pars_fragment:xM,envmap_pars_vertex:SM,envmap_physical_pars_fragment:UM,envmap_vertex:yM,fog_vertex:MM,fog_pars_vertex:bM,fog_fragment:EM,fog_pars_fragment:TM,gradientmap_pars_fragment:AM,lightmap_pars_fragment:RM,lights_lambert_fragment:CM,lights_lambert_pars_fragment:wM,lights_pars_begin:DM,lights_toon_fragment:NM,lights_toon_pars_fragment:LM,lights_phong_fragment:OM,lights_phong_pars_fragment:PM,lights_physical_fragment:BM,lights_physical_pars_fragment:zM,lights_fragment_begin:FM,lights_fragment_maps:IM,lights_fragment_end:HM,logdepthbuf_fragment:GM,logdepthbuf_pars_fragment:VM,logdepthbuf_pars_vertex:kM,logdepthbuf_vertex:XM,map_fragment:WM,map_pars_fragment:qM,map_particle_fragment:jM,map_particle_pars_fragment:YM,metalnessmap_fragment:ZM,metalnessmap_pars_fragment:KM,morphinstance_vertex:QM,morphcolor_vertex:JM,morphnormal_vertex:$M,morphtarget_pars_vertex:eb,morphtarget_vertex:tb,normal_fragment_begin:nb,normal_fragment_maps:ib,normal_pars_fragment:ab,normal_pars_vertex:rb,normal_vertex:sb,normalmap_pars_fragment:ob,clearcoat_normal_fragment_begin:lb,clearcoat_normal_fragment_maps:cb,clearcoat_pars_fragment:ub,iridescence_pars_fragment:fb,opaque_fragment:db,packing:hb,premultiplied_alpha_fragment:pb,project_vertex:mb,dithering_fragment:gb,dithering_pars_fragment:vb,roughnessmap_fragment:_b,roughnessmap_pars_fragment:xb,shadowmap_pars_fragment:Sb,shadowmap_pars_vertex:yb,shadowmap_vertex:Mb,shadowmask_pars_fragment:bb,skinbase_vertex:Eb,skinning_pars_vertex:Tb,skinning_vertex:Ab,skinnormal_vertex:Rb,specularmap_fragment:Cb,specularmap_pars_fragment:wb,tonemapping_fragment:Db,tonemapping_pars_fragment:Ub,transmission_fragment:Nb,transmission_pars_fragment:Lb,uv_pars_fragment:Ob,uv_pars_vertex:Pb,uv_vertex:Bb,worldpos_vertex:zb,background_vert:Fb,background_frag:Ib,backgroundCube_vert:Hb,backgroundCube_frag:Gb,cube_vert:Vb,cube_frag:kb,depth_vert:Xb,depth_frag:Wb,distance_vert:qb,distance_frag:jb,equirect_vert:Yb,equirect_frag:Zb,linedashed_vert:Kb,linedashed_frag:Qb,meshbasic_vert:Jb,meshbasic_frag:$b,meshlambert_vert:eE,meshlambert_frag:tE,meshmatcap_vert:nE,meshmatcap_frag:iE,meshnormal_vert:aE,meshnormal_frag:rE,meshphong_vert:sE,meshphong_frag:oE,meshphysical_vert:lE,meshphysical_frag:cE,meshtoon_vert:uE,meshtoon_frag:fE,points_vert:dE,points_frag:hE,shadow_vert:pE,shadow_frag:mE,sprite_vert:gE,sprite_frag:vE},Oe={common:{diffuse:{value:new Rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ut}},envmap:{envMap:{value:null},envMapRotation:{value:new ut},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ut},normalScale:{value:new Nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0},uvTransform:{value:new ut}},sprite:{diffuse:{value:new Rt(16777215)},opacity:{value:1},center:{value:new Nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}}},Pi={basic:{uniforms:On([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.fog]),vertexShader:ft.meshbasic_vert,fragmentShader:ft.meshbasic_frag},lambert:{uniforms:On([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new Rt(0)}}]),vertexShader:ft.meshlambert_vert,fragmentShader:ft.meshlambert_frag},phong:{uniforms:On([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new Rt(0)},specular:{value:new Rt(1118481)},shininess:{value:30}}]),vertexShader:ft.meshphong_vert,fragmentShader:ft.meshphong_frag},standard:{uniforms:On([Oe.common,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.roughnessmap,Oe.metalnessmap,Oe.fog,Oe.lights,{emissive:{value:new Rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag},toon:{uniforms:On([Oe.common,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.gradientmap,Oe.fog,Oe.lights,{emissive:{value:new Rt(0)}}]),vertexShader:ft.meshtoon_vert,fragmentShader:ft.meshtoon_frag},matcap:{uniforms:On([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,{matcap:{value:null}}]),vertexShader:ft.meshmatcap_vert,fragmentShader:ft.meshmatcap_frag},points:{uniforms:On([Oe.points,Oe.fog]),vertexShader:ft.points_vert,fragmentShader:ft.points_frag},dashed:{uniforms:On([Oe.common,Oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ft.linedashed_vert,fragmentShader:ft.linedashed_frag},depth:{uniforms:On([Oe.common,Oe.displacementmap]),vertexShader:ft.depth_vert,fragmentShader:ft.depth_frag},normal:{uniforms:On([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,{opacity:{value:1}}]),vertexShader:ft.meshnormal_vert,fragmentShader:ft.meshnormal_frag},sprite:{uniforms:On([Oe.sprite,Oe.fog]),vertexShader:ft.sprite_vert,fragmentShader:ft.sprite_frag},background:{uniforms:{uvTransform:{value:new ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ft.background_vert,fragmentShader:ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ut}},vertexShader:ft.backgroundCube_vert,fragmentShader:ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ft.cube_vert,fragmentShader:ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ft.equirect_vert,fragmentShader:ft.equirect_frag},distance:{uniforms:On([Oe.common,Oe.displacementmap,{referencePosition:{value:new ae},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ft.distance_vert,fragmentShader:ft.distance_frag},shadow:{uniforms:On([Oe.lights,Oe.fog,{color:{value:new Rt(0)},opacity:{value:1}}]),vertexShader:ft.shadow_vert,fragmentShader:ft.shadow_frag}};Pi.physical={uniforms:On([Pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ut},clearcoatNormalScale:{value:new Nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ut},sheen:{value:0},sheenColor:{value:new Rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ut},transmissionSamplerSize:{value:new Nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ut},attenuationDistance:{value:0},attenuationColor:{value:new Rt(0)},specularColor:{value:new Rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ut},anisotropyVector:{value:new Nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ut}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag};const Ec={r:0,b:0,g:0},Mr=new Vi,_E=new tn;function xE(o,t,i,r,l,u,d){const h=new Rt(0);let m=u===!0?0:1,p,x,v=null,S=0,b=null;function R(O){let N=O.isScene===!0?O.background:null;return N&&N.isTexture&&(N=(O.backgroundBlurriness>0?i:t).get(N)),N}function w(O){let N=!1;const F=R(O);F===null?_(h,m):F&&F.isColor&&(_(F,1),N=!0);const H=o.xr.getEnvironmentBlendMode();H==="additive"?r.buffers.color.setClear(0,0,0,1,d):H==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,d),(o.autoClear||N)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function y(O,N){const F=R(N);F&&(F.isCubeTexture||F.mapping===Bc)?(x===void 0&&(x=new ii(new Dr(1,1,1),new ki({name:"BackgroundCubeMaterial",uniforms:Ls(Pi.backgroundCube.uniforms),vertexShader:Pi.backgroundCube.vertexShader,fragmentShader:Pi.backgroundCube.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),x.geometry.deleteAttribute("normal"),x.geometry.deleteAttribute("uv"),x.onBeforeRender=function(H,z,K){this.matrixWorld.copyPosition(K.matrixWorld)},Object.defineProperty(x.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(x)),Mr.copy(N.backgroundRotation),Mr.x*=-1,Mr.y*=-1,Mr.z*=-1,F.isCubeTexture&&F.isRenderTargetTexture===!1&&(Mr.y*=-1,Mr.z*=-1),x.material.uniforms.envMap.value=F,x.material.uniforms.flipEnvMap.value=F.isCubeTexture&&F.isRenderTargetTexture===!1?-1:1,x.material.uniforms.backgroundBlurriness.value=N.backgroundBlurriness,x.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,x.material.uniforms.backgroundRotation.value.setFromMatrix4(_E.makeRotationFromEuler(Mr)),x.material.toneMapped=bt.getTransfer(F.colorSpace)!==It,(v!==F||S!==F.version||b!==o.toneMapping)&&(x.material.needsUpdate=!0,v=F,S=F.version,b=o.toneMapping),x.layers.enableAll(),O.unshift(x,x.geometry,x.material,0,0,null)):F&&F.isTexture&&(p===void 0&&(p=new ii(new zc(2,2),new ki({name:"BackgroundMaterial",uniforms:Ls(Pi.background.uniforms),vertexShader:Pi.background.vertexShader,fragmentShader:Pi.background.fragmentShader,side:$a,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=F,p.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,p.material.toneMapped=bt.getTransfer(F.colorSpace)!==It,F.matrixAutoUpdate===!0&&F.updateMatrix(),p.material.uniforms.uvTransform.value.copy(F.matrix),(v!==F||S!==F.version||b!==o.toneMapping)&&(p.material.needsUpdate=!0,v=F,S=F.version,b=o.toneMapping),p.layers.enableAll(),O.unshift(p,p.geometry,p.material,0,0,null))}function _(O,N){O.getRGB(Ec,qv(o)),r.buffers.color.setClear(Ec.r,Ec.g,Ec.b,N,d)}function L(){x!==void 0&&(x.geometry.dispose(),x.material.dispose(),x=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(O,N=1){h.set(O),m=N,_(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(O){m=O,_(h,m)},render:w,addToRenderList:y,dispose:L}}function SE(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=S(null);let u=l,d=!1;function h(E,I,J,se,pe){let fe=!1;const B=v(se,J,I);u!==B&&(u=B,p(u.object)),fe=b(E,se,J,pe),fe&&R(E,se,J,pe),pe!==null&&t.update(pe,o.ELEMENT_ARRAY_BUFFER),(fe||d)&&(d=!1,N(E,I,J,se),pe!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(pe).buffer))}function m(){return o.createVertexArray()}function p(E){return o.bindVertexArray(E)}function x(E){return o.deleteVertexArray(E)}function v(E,I,J){const se=J.wireframe===!0;let pe=r[E.id];pe===void 0&&(pe={},r[E.id]=pe);let fe=pe[I.id];fe===void 0&&(fe={},pe[I.id]=fe);let B=fe[se];return B===void 0&&(B=S(m()),fe[se]=B),B}function S(E){const I=[],J=[],se=[];for(let pe=0;pe<i;pe++)I[pe]=0,J[pe]=0,se[pe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:J,attributeDivisors:se,object:E,attributes:{},index:null}}function b(E,I,J,se){const pe=u.attributes,fe=I.attributes;let B=0;const V=J.getAttributes();for(const re in V)if(V[re].location>=0){const Se=pe[re];let U=fe[re];if(U===void 0&&(re==="instanceMatrix"&&E.instanceMatrix&&(U=E.instanceMatrix),re==="instanceColor"&&E.instanceColor&&(U=E.instanceColor)),Se===void 0||Se.attribute!==U||U&&Se.data!==U.data)return!0;B++}return u.attributesNum!==B||u.index!==se}function R(E,I,J,se){const pe={},fe=I.attributes;let B=0;const V=J.getAttributes();for(const re in V)if(V[re].location>=0){let Se=fe[re];Se===void 0&&(re==="instanceMatrix"&&E.instanceMatrix&&(Se=E.instanceMatrix),re==="instanceColor"&&E.instanceColor&&(Se=E.instanceColor));const U={};U.attribute=Se,Se&&Se.data&&(U.data=Se.data),pe[re]=U,B++}u.attributes=pe,u.attributesNum=B,u.index=se}function w(){const E=u.newAttributes;for(let I=0,J=E.length;I<J;I++)E[I]=0}function y(E){_(E,0)}function _(E,I){const J=u.newAttributes,se=u.enabledAttributes,pe=u.attributeDivisors;J[E]=1,se[E]===0&&(o.enableVertexAttribArray(E),se[E]=1),pe[E]!==I&&(o.vertexAttribDivisor(E,I),pe[E]=I)}function L(){const E=u.newAttributes,I=u.enabledAttributes;for(let J=0,se=I.length;J<se;J++)I[J]!==E[J]&&(o.disableVertexAttribArray(J),I[J]=0)}function O(E,I,J,se,pe,fe,B){B===!0?o.vertexAttribIPointer(E,I,J,pe,fe):o.vertexAttribPointer(E,I,J,se,pe,fe)}function N(E,I,J,se){w();const pe=se.attributes,fe=J.getAttributes(),B=I.defaultAttributeValues;for(const V in fe){const re=fe[V];if(re.location>=0){let Me=pe[V];if(Me===void 0&&(V==="instanceMatrix"&&E.instanceMatrix&&(Me=E.instanceMatrix),V==="instanceColor"&&E.instanceColor&&(Me=E.instanceColor)),Me!==void 0){const Se=Me.normalized,U=Me.itemSize,ie=t.get(Me);if(ie===void 0)continue;const ve=ie.buffer,Ae=ie.type,Ie=ie.bytesPerElement,ne=Ae===o.INT||Ae===o.UNSIGNED_INT||Me.gpuType===Th;if(Me.isInterleavedBufferAttribute){const ue=Me.data,De=ue.stride,ke=Me.offset;if(ue.isInstancedInterleavedBuffer){for(let He=0;He<re.locationSize;He++)_(re.location+He,ue.meshPerAttribute);E.isInstancedMesh!==!0&&se._maxInstanceCount===void 0&&(se._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let He=0;He<re.locationSize;He++)y(re.location+He);o.bindBuffer(o.ARRAY_BUFFER,ve);for(let He=0;He<re.locationSize;He++)O(re.location+He,U/re.locationSize,Ae,Se,De*Ie,(ke+U/re.locationSize*He)*Ie,ne)}else{if(Me.isInstancedBufferAttribute){for(let ue=0;ue<re.locationSize;ue++)_(re.location+ue,Me.meshPerAttribute);E.isInstancedMesh!==!0&&se._maxInstanceCount===void 0&&(se._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let ue=0;ue<re.locationSize;ue++)y(re.location+ue);o.bindBuffer(o.ARRAY_BUFFER,ve);for(let ue=0;ue<re.locationSize;ue++)O(re.location+ue,U/re.locationSize,Ae,Se,U*Ie,U/re.locationSize*ue*Ie,ne)}}else if(B!==void 0){const Se=B[V];if(Se!==void 0)switch(Se.length){case 2:o.vertexAttrib2fv(re.location,Se);break;case 3:o.vertexAttrib3fv(re.location,Se);break;case 4:o.vertexAttrib4fv(re.location,Se);break;default:o.vertexAttrib1fv(re.location,Se)}}}}L()}function F(){K();for(const E in r){const I=r[E];for(const J in I){const se=I[J];for(const pe in se)x(se[pe].object),delete se[pe];delete I[J]}delete r[E]}}function H(E){if(r[E.id]===void 0)return;const I=r[E.id];for(const J in I){const se=I[J];for(const pe in se)x(se[pe].object),delete se[pe];delete I[J]}delete r[E.id]}function z(E){for(const I in r){const J=r[I];if(J[E.id]===void 0)continue;const se=J[E.id];for(const pe in se)x(se[pe].object),delete se[pe];delete J[E.id]}}function K(){C(),d=!0,u!==l&&(u=l,p(u.object))}function C(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:K,resetDefaultState:C,dispose:F,releaseStatesOfGeometry:H,releaseStatesOfProgram:z,initAttributes:w,enableAttribute:y,disableUnusedAttributes:L}}function yE(o,t,i){let r;function l(p){r=p}function u(p,x){o.drawArrays(r,p,x),i.update(x,r,1)}function d(p,x,v){v!==0&&(o.drawArraysInstanced(r,p,x,v),i.update(x,r,v))}function h(p,x,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,x,0,v);let b=0;for(let R=0;R<v;R++)b+=x[R];i.update(b,r,1)}function m(p,x,v,S){if(v===0)return;const b=t.get("WEBGL_multi_draw");if(b===null)for(let R=0;R<p.length;R++)d(p[R],x[R],S[R]);else{b.multiDrawArraysInstancedWEBGL(r,p,0,x,0,S,0,v);let R=0;for(let w=0;w<v;w++)R+=x[w]*S[w];i.update(R,r,1)}}this.setMode=l,this.render=u,this.renderInstances=d,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function ME(o,t,i,r){let l;function u(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const z=t.get("EXT_texture_filter_anisotropic");l=o.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(z){return!(z!==Ri&&r.convert(z)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(z){const K=z===va&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(z!==ni&&r.convert(z)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==Bi&&!K)}function m(z){if(z==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const x=m(p);x!==p&&(rt("WebGLRenderer:",p,"not supported, using",x,"instead."),p=x);const v=i.logarithmicDepthBuffer===!0,S=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),b=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),R=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=o.getParameter(o.MAX_TEXTURE_SIZE),y=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),_=o.getParameter(o.MAX_VERTEX_ATTRIBS),L=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),O=o.getParameter(o.MAX_VARYING_VECTORS),N=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),F=o.getParameter(o.MAX_SAMPLES),H=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:v,reversedDepthBuffer:S,maxTextures:b,maxVertexTextures:R,maxTextureSize:w,maxCubemapSize:y,maxAttributes:_,maxVertexUniforms:L,maxVaryings:O,maxFragmentUniforms:N,maxSamples:F,samples:H}}function bE(o){const t=this;let i=null,r=0,l=!1,u=!1;const d=new Er,h=new ut,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,S){const b=v.length!==0||S||r!==0||l;return l=S,r=v.length,b},this.beginShadows=function(){u=!0,x(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(v,S){i=x(v,S,0)},this.setState=function(v,S,b){const R=v.clippingPlanes,w=v.clipIntersection,y=v.clipShadows,_=o.get(v);if(!l||R===null||R.length===0||u&&!y)u?x(null):p();else{const L=u?0:r,O=L*4;let N=_.clippingState||null;m.value=N,N=x(R,S,O,b);for(let F=0;F!==O;++F)N[F]=i[F];_.clippingState=N,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=L}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function x(v,S,b,R){const w=v!==null?v.length:0;let y=null;if(w!==0){if(y=m.value,R!==!0||y===null){const _=b+w*4,L=S.matrixWorldInverse;h.getNormalMatrix(L),(y===null||y.length<_)&&(y=new Float32Array(_));for(let O=0,N=b;O!==w;++O,N+=4)d.copy(v[O]).applyMatrix4(L,h),d.normal.toArray(y,N),y[N+3]=d.constant}m.value=y,m.needsUpdate=!0}return t.numPlanes=w,t.numIntersection=0,y}}function EE(o){let t=new WeakMap;function i(d,h){return h===zd?d.mapping=wr:h===Fd&&(d.mapping=Ds),d}function r(d){if(d&&d.isTexture){const h=d.mapping;if(h===zd||h===Fd)if(t.has(d)){const m=t.get(d).texture;return i(m,d.mapping)}else{const m=d.image;if(m&&m.height>0){const p=new Zv(m.height);return p.fromEquirectangularTexture(o,d),t.set(d,p),d.addEventListener("dispose",l),i(p.texture,d.mapping)}else return null}}return d}function l(d){const h=d.target;h.removeEventListener("dispose",l);const m=t.get(h);m!==void 0&&(t.delete(h),m.dispose())}function u(){t=new WeakMap}return{get:r,dispose:u}}const Ja=4,tv=[.125,.215,.35,.446,.526,.582],Ar=20,TE=256,Bo=new Jv,nv=new Rt;let Md=null,bd=0,Ed=0,Td=!1;const AE=new ae;class iv{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,r=.1,l=100,u={}){const{size:d=256,position:h=AE}=u;Md=this._renderer.getRenderTarget(),bd=this._renderer.getActiveCubeFace(),Ed=this._renderer.getActiveMipmapLevel(),Td=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,r,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Md,bd,Ed),this._renderer.xr.enabled=Td,t.scissorTest=!1,As(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===wr||t.mapping===Ds?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Md=this._renderer.getRenderTarget(),bd=this._renderer.getActiveCubeFace(),Ed=this._renderer.getActiveMipmapLevel(),Td=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Nn,minFilter:Nn,generateMipmaps:!1,type:va,format:Ri,colorSpace:Ns,depthBuffer:!1},l=av(t,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=av(t,i,r);const{_lodMax:u}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=RE(u)),this._blurMaterial=wE(u,t,i),this._ggxMaterial=CE(u,t,i)}return l}_compileMaterial(t){const i=new ii(new Ci,t);this._renderer.compile(i,Bo)}_sceneToCubeUV(t,i,r,l,u){const m=new ti(90,1,i,r),p=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],v=this._renderer,S=v.autoClear,b=v.toneMapping;v.getClearColor(nv),v.toneMapping=Fi,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(l),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ii(new Dr,new Pc({name:"PMREM.Background",side:Xn,depthWrite:!1,depthTest:!1})));const w=this._backgroundBox,y=w.material;let _=!1;const L=t.background;L?L.isColor&&(y.color.copy(L),t.background=null,_=!0):(y.color.copy(nv),_=!0);for(let O=0;O<6;O++){const N=O%3;N===0?(m.up.set(0,p[O],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+x[O],u.y,u.z)):N===1?(m.up.set(0,0,p[O]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+x[O],u.z)):(m.up.set(0,p[O],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+x[O]));const F=this._cubeSize;As(l,N*F,O>2?F:0,F,F),v.setRenderTarget(l),_&&v.render(w,m),v.render(t,m)}v.toneMapping=b,v.autoClear=S,t.background=L}_textureToCubeUV(t,i){const r=this._renderer,l=t.mapping===wr||t.mapping===Ds;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=sv()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rv());const u=l?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=u;const h=u.uniforms;h.envMap.value=t;const m=this._cubeSize;As(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(d,Bo)}_applyPMREM(t){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let u=1;u<l;u++)this._applyGGXFilter(t,u-1,u);i.autoClear=r}_applyGGXFilter(t,i,r){const l=this._renderer,u=this._pingPongRenderTarget,d=this._ggxMaterial,h=this._lodMeshes[r];h.material=d;const m=d.uniforms,p=r/(this._lodMeshes.length-1),x=i/(this._lodMeshes.length-1),v=Math.sqrt(p*p-x*x),S=0+p*1.25,b=v*S,{_lodMax:R}=this,w=this._sizeLods[r],y=3*w*(r>R-Ja?r-R+Ja:0),_=4*(this._cubeSize-w);m.envMap.value=t.texture,m.roughness.value=b,m.mipInt.value=R-i,As(u,y,_,3*w,2*w),l.setRenderTarget(u),l.render(h,Bo),m.envMap.value=u.texture,m.roughness.value=0,m.mipInt.value=R-r,As(t,y,_,3*w,2*w),l.setRenderTarget(t),l.render(h,Bo)}_blur(t,i,r,l,u){const d=this._pingPongRenderTarget;this._halfBlur(t,d,i,r,l,"latitudinal",u),this._halfBlur(d,t,r,r,l,"longitudinal",u)}_halfBlur(t,i,r,l,u,d,h){const m=this._renderer,p=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&At("blur direction must be either latitudinal or longitudinal!");const x=3,v=this._lodMeshes[l];v.material=p;const S=p.uniforms,b=this._sizeLods[r]-1,R=isFinite(u)?Math.PI/(2*b):2*Math.PI/(2*Ar-1),w=u/R,y=isFinite(u)?1+Math.floor(x*w):Ar;y>Ar&&rt(`sigmaRadians, ${u}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Ar}`);const _=[];let L=0;for(let z=0;z<Ar;++z){const K=z/w,C=Math.exp(-K*K/2);_.push(C),z===0?L+=C:z<y&&(L+=2*C)}for(let z=0;z<_.length;z++)_[z]=_[z]/L;S.envMap.value=t.texture,S.samples.value=y,S.weights.value=_,S.latitudinal.value=d==="latitudinal",h&&(S.poleAxis.value=h);const{_lodMax:O}=this;S.dTheta.value=R,S.mipInt.value=O-r;const N=this._sizeLods[l],F=3*N*(l>O-Ja?l-O+Ja:0),H=4*(this._cubeSize-N);As(i,F,H,3*N,2*N),m.setRenderTarget(i),m.render(v,Bo)}}function RE(o){const t=[],i=[],r=[];let l=o;const u=o-Ja+1+tv.length;for(let d=0;d<u;d++){const h=Math.pow(2,l);t.push(h);let m=1/h;d>o-Ja?m=tv[d-o+Ja-1]:d===0&&(m=0),i.push(m);const p=1/(h-2),x=-p,v=1+p,S=[x,x,v,x,v,v,x,x,v,v,x,v],b=6,R=6,w=3,y=2,_=1,L=new Float32Array(w*R*b),O=new Float32Array(y*R*b),N=new Float32Array(_*R*b);for(let H=0;H<b;H++){const z=H%3*2/3-1,K=H>2?0:-1,C=[z,K,0,z+2/3,K,0,z+2/3,K+1,0,z,K,0,z+2/3,K+1,0,z,K+1,0];L.set(C,w*R*H),O.set(S,y*R*H);const E=[H,H,H,H,H,H];N.set(E,_*R*H)}const F=new Ci;F.setAttribute("position",new Hi(L,w)),F.setAttribute("uv",new Hi(O,y)),F.setAttribute("faceIndex",new Hi(N,_)),r.push(new ii(F,null)),l>Ja&&l--}return{lodMeshes:r,sizeLods:t,sigmas:i}}function av(o,t,i){const r=new Ii(o,t,i);return r.texture.mapping=Bc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function As(o,t,i,r,l){o.viewport.set(t,i,r,l),o.scissor.set(t,i,r,l)}function CE(o,t,i){return new ki({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:TE,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Fc(),fragmentShader:`

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

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

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
		`,blending:ma,depthTest:!1,depthWrite:!1})}function wE(o,t,i){const r=new Float32Array(Ar),l=new ae(0,1,0);return new ki({name:"SphericalGaussianBlur",defines:{n:Ar,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Fc(),fragmentShader:`

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
		`,blending:ma,depthTest:!1,depthWrite:!1})}function rv(){return new ki({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fc(),fragmentShader:`

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
		`,blending:ma,depthTest:!1,depthWrite:!1})}function sv(){return new ki({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ma,depthTest:!1,depthWrite:!1})}function Fc(){return`

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
	`}function DE(o){let t=new WeakMap,i=null;function r(h){if(h&&h.isTexture){const m=h.mapping,p=m===zd||m===Fd,x=m===wr||m===Ds;if(p||x){let v=t.get(h);const S=v!==void 0?v.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==S)return i===null&&(i=new iv(o)),v=p?i.fromEquirectangular(h,v):i.fromCubemap(h,v),v.texture.pmremVersion=h.pmremVersion,t.set(h,v),v.texture;if(v!==void 0)return v.texture;{const b=h.image;return p&&b&&b.height>0||x&&b&&l(b)?(i===null&&(i=new iv(o)),v=p?i.fromEquirectangular(h):i.fromCubemap(h),v.texture.pmremVersion=h.pmremVersion,t.set(h,v),h.addEventListener("dispose",u),v.texture):null}}}return h}function l(h){let m=0;const p=6;for(let x=0;x<p;x++)h[x]!==void 0&&m++;return m===p}function u(h){const m=h.target;m.removeEventListener("dispose",u);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function d(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function UE(o){const t={};function i(r){if(t[r]!==void 0)return t[r];const l=o.getExtension(r);return t[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&ko("WebGLRenderer: "+r+" extension not supported."),l}}}function NE(o,t,i,r){const l={},u=new WeakMap;function d(v){const S=v.target;S.index!==null&&t.remove(S.index);for(const R in S.attributes)t.remove(S.attributes[R]);S.removeEventListener("dispose",d),delete l[S.id];const b=u.get(S);b&&(t.remove(b),u.delete(S)),r.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function h(v,S){return l[S.id]===!0||(S.addEventListener("dispose",d),l[S.id]=!0,i.memory.geometries++),S}function m(v){const S=v.attributes;for(const b in S)t.update(S[b],o.ARRAY_BUFFER)}function p(v){const S=[],b=v.index,R=v.attributes.position;let w=0;if(b!==null){const L=b.array;w=b.version;for(let O=0,N=L.length;O<N;O+=3){const F=L[O+0],H=L[O+1],z=L[O+2];S.push(F,H,H,z,z,F)}}else if(R!==void 0){const L=R.array;w=R.version;for(let O=0,N=L.length/3-1;O<N;O+=3){const F=O+0,H=O+1,z=O+2;S.push(F,H,H,z,z,F)}}else return;const y=new(Hv(S)?Wv:Xv)(S,1);y.version=w;const _=u.get(v);_&&t.remove(_),u.set(v,y)}function x(v){const S=u.get(v);if(S){const b=v.index;b!==null&&S.version<b.version&&p(v)}else p(v);return u.get(v)}return{get:h,update:m,getWireframeAttribute:x}}function LE(o,t,i){let r;function l(S){r=S}let u,d;function h(S){u=S.type,d=S.bytesPerElement}function m(S,b){o.drawElements(r,b,u,S*d),i.update(b,r,1)}function p(S,b,R){R!==0&&(o.drawElementsInstanced(r,b,u,S*d,R),i.update(b,r,R))}function x(S,b,R){if(R===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,b,0,u,S,0,R);let y=0;for(let _=0;_<R;_++)y+=b[_];i.update(y,r,1)}function v(S,b,R,w){if(R===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let _=0;_<S.length;_++)p(S[_]/d,b[_],w[_]);else{y.multiDrawElementsInstancedWEBGL(r,b,0,u,S,0,w,0,R);let _=0;for(let L=0;L<R;L++)_+=b[L]*w[L];i.update(_,r,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=x,this.renderMultiDrawInstances=v}function OE(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,d,h){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=h*(u/3);break;case o.LINES:i.lines+=h*(u/2);break;case o.LINE_STRIP:i.lines+=h*(u-1);break;case o.LINE_LOOP:i.lines+=h*u;break;case o.POINTS:i.points+=h*u;break;default:At("WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:r}}function PE(o,t,i){const r=new WeakMap,l=new en;function u(d,h,m){const p=d.morphTargetInfluences,x=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=x!==void 0?x.length:0;let S=r.get(h);if(S===void 0||S.count!==v){let E=function(){K.dispose(),r.delete(h),h.removeEventListener("dispose",E)};var b=E;S!==void 0&&S.texture.dispose();const R=h.morphAttributes.position!==void 0,w=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,_=h.morphAttributes.position||[],L=h.morphAttributes.normal||[],O=h.morphAttributes.color||[];let N=0;R===!0&&(N=1),w===!0&&(N=2),y===!0&&(N=3);let F=h.attributes.position.count*N,H=1;F>t.maxTextureSize&&(H=Math.ceil(F/t.maxTextureSize),F=t.maxTextureSize);const z=new Float32Array(F*H*4*v),K=new Gv(z,F,H,v);K.type=Bi,K.needsUpdate=!0;const C=N*4;for(let I=0;I<v;I++){const J=_[I],se=L[I],pe=O[I],fe=F*H*4*I;for(let B=0;B<J.count;B++){const V=B*C;R===!0&&(l.fromBufferAttribute(J,B),z[fe+V+0]=l.x,z[fe+V+1]=l.y,z[fe+V+2]=l.z,z[fe+V+3]=0),w===!0&&(l.fromBufferAttribute(se,B),z[fe+V+4]=l.x,z[fe+V+5]=l.y,z[fe+V+6]=l.z,z[fe+V+7]=0),y===!0&&(l.fromBufferAttribute(pe,B),z[fe+V+8]=l.x,z[fe+V+9]=l.y,z[fe+V+10]=l.z,z[fe+V+11]=pe.itemSize===4?l.w:1)}}S={count:v,texture:K,size:new Nt(F,H)},r.set(h,S),h.addEventListener("dispose",E)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",d.morphTexture,i);else{let R=0;for(let y=0;y<p.length;y++)R+=p[y];const w=h.morphTargetsRelative?1:1-R;m.getUniforms().setValue(o,"morphTargetBaseInfluence",w),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",S.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",S.size)}return{update:u}}function BE(o,t,i,r){let l=new WeakMap;function u(m){const p=r.render.frame,x=m.geometry,v=t.get(m,x);if(l.get(v)!==p&&(t.update(v),l.set(v,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const S=m.skeleton;l.get(S)!==p&&(S.update(),l.set(S,p))}return v}function d(){l=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:d}}const zE={[Ev]:"LINEAR_TONE_MAPPING",[Tv]:"REINHARD_TONE_MAPPING",[Av]:"CINEON_TONE_MAPPING",[Rv]:"ACES_FILMIC_TONE_MAPPING",[wv]:"AGX_TONE_MAPPING",[Dv]:"NEUTRAL_TONE_MAPPING",[Cv]:"CUSTOM_TONE_MAPPING"};function FE(o,t,i,r,l){const u=new Ii(t,i,{type:o,depthBuffer:r,stencilBuffer:l}),d=new Ii(t,i,{type:va,depthBuffer:!1,stencilBuffer:!1}),h=new Ci;h.setAttribute("position",new Bn([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Bn([0,2,0,0,2,0],2));const m=new wy({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new ii(h,m),x=new Jv(-1,1,1,-1,0,1);let v=null,S=null,b=!1,R,w=null,y=[],_=!1;this.setSize=function(L,O){u.setSize(L,O),d.setSize(L,O);for(let N=0;N<y.length;N++){const F=y[N];F.setSize&&F.setSize(L,O)}},this.setEffects=function(L){y=L,_=y.length>0&&y[0].isRenderPass===!0;const O=u.width,N=u.height;for(let F=0;F<y.length;F++){const H=y[F];H.setSize&&H.setSize(O,N)}},this.begin=function(L,O){if(b||L.toneMapping===Fi&&y.length===0)return!1;if(w=O,O!==null){const N=O.width,F=O.height;(u.width!==N||u.height!==F)&&this.setSize(N,F)}return _===!1&&L.setRenderTarget(u),R=L.toneMapping,L.toneMapping=Fi,!0},this.hasRenderPass=function(){return _},this.end=function(L,O){L.toneMapping=R,b=!0;let N=u,F=d;for(let H=0;H<y.length;H++){const z=y[H];if(z.enabled!==!1&&(z.render(L,F,N,O),z.needsSwap!==!1)){const K=N;N=F,F=K}}if(v!==L.outputColorSpace||S!==L.toneMapping){v=L.outputColorSpace,S=L.toneMapping,m.defines={},bt.getTransfer(v)===It&&(m.defines.SRGB_TRANSFER="");const H=zE[S];H&&(m.defines[H]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=N.texture,L.setRenderTarget(w),L.render(p,x),w=null,b=!1},this.isCompositing=function(){return b},this.dispose=function(){u.dispose(),d.dispose(),h.dispose(),m.dispose()}}const e_=new Pn,Sh=new Xo(1,1),t_=new Gv,n_=new ay,i_=new Yv,ov=[],lv=[],cv=new Float32Array(16),uv=new Float32Array(9),fv=new Float32Array(4);function Ps(o,t,i){const r=o[0];if(r<=0||r>0)return o;const l=t*i;let u=ov[l];if(u===void 0&&(u=new Float32Array(l),ov[l]=u),t!==0){r.toArray(u,0);for(let d=1,h=0;d!==t;++d)h+=i,o[d].toArray(u,h)}return u}function hn(o,t){if(o.length!==t.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==t[i])return!1;return!0}function pn(o,t){for(let i=0,r=t.length;i<r;i++)o[i]=t[i]}function Ic(o,t){let i=lv[t];i===void 0&&(i=new Int32Array(t),lv[t]=i);for(let r=0;r!==t;++r)i[r]=o.allocateTextureUnit();return i}function IE(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function HE(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(hn(i,t))return;o.uniform2fv(this.addr,t),pn(i,t)}}function GE(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(hn(i,t))return;o.uniform3fv(this.addr,t),pn(i,t)}}function VE(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(hn(i,t))return;o.uniform4fv(this.addr,t),pn(i,t)}}function kE(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(hn(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),pn(i,t)}else{if(hn(i,r))return;fv.set(r),o.uniformMatrix2fv(this.addr,!1,fv),pn(i,r)}}function XE(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(hn(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),pn(i,t)}else{if(hn(i,r))return;uv.set(r),o.uniformMatrix3fv(this.addr,!1,uv),pn(i,r)}}function WE(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(hn(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),pn(i,t)}else{if(hn(i,r))return;cv.set(r),o.uniformMatrix4fv(this.addr,!1,cv),pn(i,r)}}function qE(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function jE(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(hn(i,t))return;o.uniform2iv(this.addr,t),pn(i,t)}}function YE(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(hn(i,t))return;o.uniform3iv(this.addr,t),pn(i,t)}}function ZE(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(hn(i,t))return;o.uniform4iv(this.addr,t),pn(i,t)}}function KE(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function QE(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(hn(i,t))return;o.uniform2uiv(this.addr,t),pn(i,t)}}function JE(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(hn(i,t))return;o.uniform3uiv(this.addr,t),pn(i,t)}}function $E(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(hn(i,t))return;o.uniform4uiv(this.addr,t),pn(i,t)}}function eT(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(Sh.compareFunction=i.isReversedDepthBuffer()?Nh:Uh,u=Sh):u=e_,i.setTexture2D(t||u,l)}function tT(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(t||n_,l)}function nT(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(t||i_,l)}function iT(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(t||t_,l)}function aT(o){switch(o){case 5126:return IE;case 35664:return HE;case 35665:return GE;case 35666:return VE;case 35674:return kE;case 35675:return XE;case 35676:return WE;case 5124:case 35670:return qE;case 35667:case 35671:return jE;case 35668:case 35672:return YE;case 35669:case 35673:return ZE;case 5125:return KE;case 36294:return QE;case 36295:return JE;case 36296:return $E;case 35678:case 36198:case 36298:case 36306:case 35682:return eT;case 35679:case 36299:case 36307:return tT;case 35680:case 36300:case 36308:case 36293:return nT;case 36289:case 36303:case 36311:case 36292:return iT}}function rT(o,t){o.uniform1fv(this.addr,t)}function sT(o,t){const i=Ps(t,this.size,2);o.uniform2fv(this.addr,i)}function oT(o,t){const i=Ps(t,this.size,3);o.uniform3fv(this.addr,i)}function lT(o,t){const i=Ps(t,this.size,4);o.uniform4fv(this.addr,i)}function cT(o,t){const i=Ps(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function uT(o,t){const i=Ps(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function fT(o,t){const i=Ps(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function dT(o,t){o.uniform1iv(this.addr,t)}function hT(o,t){o.uniform2iv(this.addr,t)}function pT(o,t){o.uniform3iv(this.addr,t)}function mT(o,t){o.uniform4iv(this.addr,t)}function gT(o,t){o.uniform1uiv(this.addr,t)}function vT(o,t){o.uniform2uiv(this.addr,t)}function _T(o,t){o.uniform3uiv(this.addr,t)}function xT(o,t){o.uniform4uiv(this.addr,t)}function ST(o,t,i){const r=this.cache,l=t.length,u=Ic(i,l);hn(r,u)||(o.uniform1iv(this.addr,u),pn(r,u));let d;this.type===o.SAMPLER_2D_SHADOW?d=Sh:d=e_;for(let h=0;h!==l;++h)i.setTexture2D(t[h]||d,u[h])}function yT(o,t,i){const r=this.cache,l=t.length,u=Ic(i,l);hn(r,u)||(o.uniform1iv(this.addr,u),pn(r,u));for(let d=0;d!==l;++d)i.setTexture3D(t[d]||n_,u[d])}function MT(o,t,i){const r=this.cache,l=t.length,u=Ic(i,l);hn(r,u)||(o.uniform1iv(this.addr,u),pn(r,u));for(let d=0;d!==l;++d)i.setTextureCube(t[d]||i_,u[d])}function bT(o,t,i){const r=this.cache,l=t.length,u=Ic(i,l);hn(r,u)||(o.uniform1iv(this.addr,u),pn(r,u));for(let d=0;d!==l;++d)i.setTexture2DArray(t[d]||t_,u[d])}function ET(o){switch(o){case 5126:return rT;case 35664:return sT;case 35665:return oT;case 35666:return lT;case 35674:return cT;case 35675:return uT;case 35676:return fT;case 5124:case 35670:return dT;case 35667:case 35671:return hT;case 35668:case 35672:return pT;case 35669:case 35673:return mT;case 5125:return gT;case 36294:return vT;case 36295:return _T;case 36296:return xT;case 35678:case 36198:case 36298:case 36306:case 35682:return ST;case 35679:case 36299:case 36307:return yT;case 35680:case 36300:case 36308:case 36293:return MT;case 36289:case 36303:case 36311:case 36292:return bT}}class TT{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=aT(i.type)}}class AT{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=ET(i.type)}}class RT{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const l=this.seq;for(let u=0,d=l.length;u!==d;++u){const h=l[u];h.setValue(t,i[h.id],r)}}}const Ad=/(\w+)(\])?(\[|\.)?/g;function dv(o,t){o.seq.push(t),o.map[t.id]=t}function CT(o,t,i){const r=o.name,l=r.length;for(Ad.lastIndex=0;;){const u=Ad.exec(r),d=Ad.lastIndex;let h=u[1];const m=u[2]==="]",p=u[3];if(m&&(h=h|0),p===void 0||p==="["&&d+2===l){dv(i,p===void 0?new TT(h,o,t):new AT(h,o,t));break}else{let v=i.map[h];v===void 0&&(v=new RT(h),dv(i,v)),i=v}}}class Uc{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let d=0;d<r;++d){const h=t.getActiveUniform(i,d),m=t.getUniformLocation(i,h.name);CT(h,m,this)}const l=[],u=[];for(const d of this.seq)d.type===t.SAMPLER_2D_SHADOW||d.type===t.SAMPLER_CUBE_SHADOW||d.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(d):u.push(d);l.length>0&&(this.seq=l.concat(u))}setValue(t,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(t,r,l)}setOptional(t,i,r){const l=i[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,i,r,l){for(let u=0,d=i.length;u!==d;++u){const h=i[u],m=r[h.id];m.needsUpdate!==!1&&h.setValue(t,m.value,l)}}static seqWithValue(t,i){const r=[];for(let l=0,u=t.length;l!==u;++l){const d=t[l];d.id in i&&r.push(d)}return r}}function hv(o,t,i){const r=o.createShader(t);return o.shaderSource(r,i),o.compileShader(r),r}const wT=37297;let DT=0;function UT(o,t){const i=o.split(`
`),r=[],l=Math.max(t-6,0),u=Math.min(t+6,i.length);for(let d=l;d<u;d++){const h=d+1;r.push(`${h===t?">":" "} ${h}: ${i[d]}`)}return r.join(`
`)}const pv=new ut;function NT(o){bt._getMatrix(pv,bt.workingColorSpace,o);const t=`mat3( ${pv.elements.map(i=>i.toFixed(4))} )`;switch(bt.getTransfer(o)){case Nc:return[t,"LinearTransferOETF"];case It:return[t,"sRGBTransferOETF"];default:return rt("WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function mv(o,t,i){const r=o.getShaderParameter(t,o.COMPILE_STATUS),u=(o.getShaderInfoLog(t)||"").trim();if(r&&u==="")return"";const d=/ERROR: 0:(\d+)/.exec(u);if(d){const h=parseInt(d[1]);return i.toUpperCase()+`

`+u+`

`+UT(o.getShaderSource(t),h)}else return u}function LT(o,t){const i=NT(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const OT={[Ev]:"Linear",[Tv]:"Reinhard",[Av]:"Cineon",[Rv]:"ACESFilmic",[wv]:"AgX",[Dv]:"Neutral",[Cv]:"Custom"};function PT(o,t){const i=OT[t];return i===void 0?(rt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Tc=new ae;function BT(){bt.getLuminanceCoefficients(Tc);const o=Tc.x.toFixed(4),t=Tc.y.toFixed(4),i=Tc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function zT(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ho).join(`
`)}function FT(o){const t=[];for(const i in o){const r=o[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function IT(o,t){const i={},r=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=o.getActiveAttrib(t,l),d=u.name;let h=1;u.type===o.FLOAT_MAT2&&(h=2),u.type===o.FLOAT_MAT3&&(h=3),u.type===o.FLOAT_MAT4&&(h=4),i[d]={type:u.type,location:o.getAttribLocation(t,d),locationSize:h}}return i}function Ho(o){return o!==""}function gv(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function vv(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const HT=/^[ \t]*#include +<([\w\d./]+)>/gm;function yh(o){return o.replace(HT,VT)}const GT=new Map;function VT(o,t){let i=ft[t];if(i===void 0){const r=GT.get(t);if(r!==void 0)i=ft[r],rt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return yh(i)}const kT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _v(o){return o.replace(kT,XT)}function XT(o,t,i,r){let l="";for(let u=parseInt(t);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function xv(o){let t=`precision ${o.precision} float;
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
	`;return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const WT={[Ac]:"SHADOWMAP_TYPE_PCF",[Fo]:"SHADOWMAP_TYPE_VSM"};function qT(o){return WT[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const jT={[wr]:"ENVMAP_TYPE_CUBE",[Ds]:"ENVMAP_TYPE_CUBE",[Bc]:"ENVMAP_TYPE_CUBE_UV"};function YT(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":jT[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const ZT={[Ds]:"ENVMAP_MODE_REFRACTION"};function KT(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":ZT[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const QT={[Eh]:"ENVMAP_BLENDING_MULTIPLY",[IS]:"ENVMAP_BLENDING_MIX",[HS]:"ENVMAP_BLENDING_ADD"};function JT(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":QT[o.combine]||"ENVMAP_BLENDING_NONE"}function $T(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function e1(o,t,i,r){const l=o.getContext(),u=i.defines;let d=i.vertexShader,h=i.fragmentShader;const m=qT(i),p=YT(i),x=KT(i),v=JT(i),S=$T(i),b=zT(i),R=FT(u),w=l.createProgram();let y,_,L=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R].filter(Ho).join(`
`),y.length>0&&(y+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R].filter(Ho).join(`
`),_.length>0&&(_+=`
`)):(y=[xv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+x:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ho).join(`
`),_=[xv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+x:"",i.envMap?"#define "+v:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Fi?"#define TONE_MAPPING":"",i.toneMapping!==Fi?ft.tonemapping_pars_fragment:"",i.toneMapping!==Fi?PT("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ft.colorspace_pars_fragment,LT("linearToOutputTexel",i.outputColorSpace),BT(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Ho).join(`
`)),d=yh(d),d=gv(d,i),d=vv(d,i),h=yh(h),h=gv(h,i),h=vv(h,i),d=_v(d),h=_v(h),i.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,y=[b,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,_=["#define varying in",i.glslVersion===Ng?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Ng?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const O=L+y+d,N=L+_+h,F=hv(l,l.VERTEX_SHADER,O),H=hv(l,l.FRAGMENT_SHADER,N);l.attachShader(w,F),l.attachShader(w,H),i.index0AttributeName!==void 0?l.bindAttribLocation(w,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(w,0,"position"),l.linkProgram(w);function z(I){if(o.debug.checkShaderErrors){const J=l.getProgramInfoLog(w)||"",se=l.getShaderInfoLog(F)||"",pe=l.getShaderInfoLog(H)||"",fe=J.trim(),B=se.trim(),V=pe.trim();let re=!0,Me=!0;if(l.getProgramParameter(w,l.LINK_STATUS)===!1)if(re=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,w,F,H);else{const Se=mv(l,F,"vertex"),U=mv(l,H,"fragment");At("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(w,l.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+fe+`
`+Se+`
`+U)}else fe!==""?rt("WebGLProgram: Program Info Log:",fe):(B===""||V==="")&&(Me=!1);Me&&(I.diagnostics={runnable:re,programLog:fe,vertexShader:{log:B,prefix:y},fragmentShader:{log:V,prefix:_}})}l.deleteShader(F),l.deleteShader(H),K=new Uc(l,w),C=IT(l,w)}let K;this.getUniforms=function(){return K===void 0&&z(this),K};let C;this.getAttributes=function(){return C===void 0&&z(this),C};let E=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=l.getProgramParameter(w,wT)),E},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(w),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=DT++,this.cacheKey=t,this.usedTimes=1,this.program=w,this.vertexShader=F,this.fragmentShader=H,this}let t1=0;class n1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,r=t.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),d=this._getShaderCacheForMaterial(t);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(u)===!1&&(d.add(u),u.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new i1(t),i.set(t,r)),r}}class i1{constructor(t){this.id=t1++,this.code=t,this.usedTimes=0}}function a1(o,t,i,r,l,u,d){const h=new Vv,m=new n1,p=new Set,x=[],v=new Map,S=l.logarithmicDepthBuffer;let b=l.precision;const R={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(C){return p.add(C),C===0?"uv":`uv${C}`}function y(C,E,I,J,se){const pe=J.fog,fe=se.geometry,B=C.isMeshStandardMaterial?J.environment:null,V=(C.isMeshStandardMaterial?i:t).get(C.envMap||B),re=V&&V.mapping===Bc?V.image.height:null,Me=R[C.type];C.precision!==null&&(b=l.getMaxPrecision(C.precision),b!==C.precision&&rt("WebGLProgram.getParameters:",C.precision,"not supported, using",b,"instead."));const Se=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,U=Se!==void 0?Se.length:0;let ie=0;fe.morphAttributes.position!==void 0&&(ie=1),fe.morphAttributes.normal!==void 0&&(ie=2),fe.morphAttributes.color!==void 0&&(ie=3);let ve,Ae,Ie,ne;if(Me){const Mt=Pi[Me];ve=Mt.vertexShader,Ae=Mt.fragmentShader}else ve=C.vertexShader,Ae=C.fragmentShader,m.update(C),Ie=m.getVertexShaderID(C),ne=m.getFragmentShaderID(C);const ue=o.getRenderTarget(),De=o.state.buffers.depth.getReversed(),ke=se.isInstancedMesh===!0,He=se.isBatchedMesh===!0,dt=!!C.map,Kt=!!C.matcap,gt=!!V,ht=!!C.aoMap,Ct=!!C.lightMap,st=!!C.bumpMap,Qt=!!C.normalMap,k=!!C.displacementMap,jt=!!C.emissiveMap,yt=!!C.metalnessMap,Lt=!!C.roughnessMap,je=C.anisotropy>0,D=C.clearcoat>0,M=C.dispersion>0,q=C.iridescence>0,he=C.sheen>0,xe=C.transmission>0,ce=je&&!!C.anisotropyMap,Ze=D&&!!C.clearcoatMap,Ce=D&&!!C.clearcoatNormalMap,Xe=D&&!!C.clearcoatRoughnessMap,tt=q&&!!C.iridescenceMap,be=q&&!!C.iridescenceThicknessMap,Ee=he&&!!C.sheenColorMap,ze=he&&!!C.sheenRoughnessMap,Pe=!!C.specularMap,we=!!C.specularColorMap,lt=!!C.specularIntensityMap,W=xe&&!!C.transmissionMap,Ne=xe&&!!C.thicknessMap,Te=!!C.gradientMap,Be=!!C.alphaMap,ye=C.alphaTest>0,_e=!!C.alphaHash,Re=!!C.extensions;let nt=Fi;C.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(nt=o.toneMapping);const Pt={shaderID:Me,shaderType:C.type,shaderName:C.name,vertexShader:ve,fragmentShader:Ae,defines:C.defines,customVertexShaderID:Ie,customFragmentShaderID:ne,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:b,batching:He,batchingColor:He&&se._colorsTexture!==null,instancing:ke,instancingColor:ke&&se.instanceColor!==null,instancingMorph:ke&&se.morphTexture!==null,outputColorSpace:ue===null?o.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:Ns,alphaToCoverage:!!C.alphaToCoverage,map:dt,matcap:Kt,envMap:gt,envMapMode:gt&&V.mapping,envMapCubeUVHeight:re,aoMap:ht,lightMap:Ct,bumpMap:st,normalMap:Qt,displacementMap:k,emissiveMap:jt,normalMapObjectSpace:Qt&&C.normalMapType===kS,normalMapTangentSpace:Qt&&C.normalMapType===Iv,metalnessMap:yt,roughnessMap:Lt,anisotropy:je,anisotropyMap:ce,clearcoat:D,clearcoatMap:Ze,clearcoatNormalMap:Ce,clearcoatRoughnessMap:Xe,dispersion:M,iridescence:q,iridescenceMap:tt,iridescenceThicknessMap:be,sheen:he,sheenColorMap:Ee,sheenRoughnessMap:ze,specularMap:Pe,specularColorMap:we,specularIntensityMap:lt,transmission:xe,transmissionMap:W,thicknessMap:Ne,gradientMap:Te,opaque:C.transparent===!1&&C.blending===Rs&&C.alphaToCoverage===!1,alphaMap:Be,alphaTest:ye,alphaHash:_e,combine:C.combine,mapUv:dt&&w(C.map.channel),aoMapUv:ht&&w(C.aoMap.channel),lightMapUv:Ct&&w(C.lightMap.channel),bumpMapUv:st&&w(C.bumpMap.channel),normalMapUv:Qt&&w(C.normalMap.channel),displacementMapUv:k&&w(C.displacementMap.channel),emissiveMapUv:jt&&w(C.emissiveMap.channel),metalnessMapUv:yt&&w(C.metalnessMap.channel),roughnessMapUv:Lt&&w(C.roughnessMap.channel),anisotropyMapUv:ce&&w(C.anisotropyMap.channel),clearcoatMapUv:Ze&&w(C.clearcoatMap.channel),clearcoatNormalMapUv:Ce&&w(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Xe&&w(C.clearcoatRoughnessMap.channel),iridescenceMapUv:tt&&w(C.iridescenceMap.channel),iridescenceThicknessMapUv:be&&w(C.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&w(C.sheenColorMap.channel),sheenRoughnessMapUv:ze&&w(C.sheenRoughnessMap.channel),specularMapUv:Pe&&w(C.specularMap.channel),specularColorMapUv:we&&w(C.specularColorMap.channel),specularIntensityMapUv:lt&&w(C.specularIntensityMap.channel),transmissionMapUv:W&&w(C.transmissionMap.channel),thicknessMapUv:Ne&&w(C.thicknessMap.channel),alphaMapUv:Be&&w(C.alphaMap.channel),vertexTangents:!!fe.attributes.tangent&&(Qt||je),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,pointsUvs:se.isPoints===!0&&!!fe.attributes.uv&&(dt||Be),fog:!!pe,useFog:C.fog===!0,fogExp2:!!pe&&pe.isFogExp2,flatShading:C.flatShading===!0&&C.wireframe===!1,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:S,reversedDepthBuffer:De,skinning:se.isSkinnedMesh===!0,morphTargets:fe.morphAttributes.position!==void 0,morphNormals:fe.morphAttributes.normal!==void 0,morphColors:fe.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:ie,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:C.dithering,shadowMapEnabled:o.shadowMap.enabled&&I.length>0,shadowMapType:o.shadowMap.type,toneMapping:nt,decodeVideoTexture:dt&&C.map.isVideoTexture===!0&&bt.getTransfer(C.map.colorSpace)===It,decodeVideoTextureEmissive:jt&&C.emissiveMap.isVideoTexture===!0&&bt.getTransfer(C.emissiveMap.colorSpace)===It,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===ha,flipSided:C.side===Xn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:Re&&C.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Re&&C.extensions.multiDraw===!0||He)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return Pt.vertexUv1s=p.has(1),Pt.vertexUv2s=p.has(2),Pt.vertexUv3s=p.has(3),p.clear(),Pt}function _(C){const E=[];if(C.shaderID?E.push(C.shaderID):(E.push(C.customVertexShaderID),E.push(C.customFragmentShaderID)),C.defines!==void 0)for(const I in C.defines)E.push(I),E.push(C.defines[I]);return C.isRawShaderMaterial===!1&&(L(E,C),O(E,C),E.push(o.outputColorSpace)),E.push(C.customProgramCacheKey),E.join()}function L(C,E){C.push(E.precision),C.push(E.outputColorSpace),C.push(E.envMapMode),C.push(E.envMapCubeUVHeight),C.push(E.mapUv),C.push(E.alphaMapUv),C.push(E.lightMapUv),C.push(E.aoMapUv),C.push(E.bumpMapUv),C.push(E.normalMapUv),C.push(E.displacementMapUv),C.push(E.emissiveMapUv),C.push(E.metalnessMapUv),C.push(E.roughnessMapUv),C.push(E.anisotropyMapUv),C.push(E.clearcoatMapUv),C.push(E.clearcoatNormalMapUv),C.push(E.clearcoatRoughnessMapUv),C.push(E.iridescenceMapUv),C.push(E.iridescenceThicknessMapUv),C.push(E.sheenColorMapUv),C.push(E.sheenRoughnessMapUv),C.push(E.specularMapUv),C.push(E.specularColorMapUv),C.push(E.specularIntensityMapUv),C.push(E.transmissionMapUv),C.push(E.thicknessMapUv),C.push(E.combine),C.push(E.fogExp2),C.push(E.sizeAttenuation),C.push(E.morphTargetsCount),C.push(E.morphAttributeCount),C.push(E.numDirLights),C.push(E.numPointLights),C.push(E.numSpotLights),C.push(E.numSpotLightMaps),C.push(E.numHemiLights),C.push(E.numRectAreaLights),C.push(E.numDirLightShadows),C.push(E.numPointLightShadows),C.push(E.numSpotLightShadows),C.push(E.numSpotLightShadowsWithMaps),C.push(E.numLightProbes),C.push(E.shadowMapType),C.push(E.toneMapping),C.push(E.numClippingPlanes),C.push(E.numClipIntersection),C.push(E.depthPacking)}function O(C,E){h.disableAll(),E.instancing&&h.enable(0),E.instancingColor&&h.enable(1),E.instancingMorph&&h.enable(2),E.matcap&&h.enable(3),E.envMap&&h.enable(4),E.normalMapObjectSpace&&h.enable(5),E.normalMapTangentSpace&&h.enable(6),E.clearcoat&&h.enable(7),E.iridescence&&h.enable(8),E.alphaTest&&h.enable(9),E.vertexColors&&h.enable(10),E.vertexAlphas&&h.enable(11),E.vertexUv1s&&h.enable(12),E.vertexUv2s&&h.enable(13),E.vertexUv3s&&h.enable(14),E.vertexTangents&&h.enable(15),E.anisotropy&&h.enable(16),E.alphaHash&&h.enable(17),E.batching&&h.enable(18),E.dispersion&&h.enable(19),E.batchingColor&&h.enable(20),E.gradientMap&&h.enable(21),C.push(h.mask),h.disableAll(),E.fog&&h.enable(0),E.useFog&&h.enable(1),E.flatShading&&h.enable(2),E.logarithmicDepthBuffer&&h.enable(3),E.reversedDepthBuffer&&h.enable(4),E.skinning&&h.enable(5),E.morphTargets&&h.enable(6),E.morphNormals&&h.enable(7),E.morphColors&&h.enable(8),E.premultipliedAlpha&&h.enable(9),E.shadowMapEnabled&&h.enable(10),E.doubleSided&&h.enable(11),E.flipSided&&h.enable(12),E.useDepthPacking&&h.enable(13),E.dithering&&h.enable(14),E.transmission&&h.enable(15),E.sheen&&h.enable(16),E.opaque&&h.enable(17),E.pointsUvs&&h.enable(18),E.decodeVideoTexture&&h.enable(19),E.decodeVideoTextureEmissive&&h.enable(20),E.alphaToCoverage&&h.enable(21),C.push(h.mask)}function N(C){const E=R[C.type];let I;if(E){const J=Pi[E];I=_y.clone(J.uniforms)}else I=C.uniforms;return I}function F(C,E){let I=v.get(E);return I!==void 0?++I.usedTimes:(I=new e1(o,E,C,u),x.push(I),v.set(E,I)),I}function H(C){if(--C.usedTimes===0){const E=x.indexOf(C);x[E]=x[x.length-1],x.pop(),v.delete(C.cacheKey),C.destroy()}}function z(C){m.remove(C)}function K(){m.dispose()}return{getParameters:y,getProgramCacheKey:_,getUniforms:N,acquireProgram:F,releaseProgram:H,releaseShaderCache:z,programs:x,dispose:K}}function r1(){let o=new WeakMap;function t(d){return o.has(d)}function i(d){let h=o.get(d);return h===void 0&&(h={},o.set(d,h)),h}function r(d){o.delete(d)}function l(d,h,m){o.get(d)[h]=m}function u(){o=new WeakMap}return{has:t,get:i,remove:r,update:l,dispose:u}}function s1(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function Sv(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function yv(){const o=[];let t=0;const i=[],r=[],l=[];function u(){t=0,i.length=0,r.length=0,l.length=0}function d(v,S,b,R,w,y){let _=o[t];return _===void 0?(_={id:v.id,object:v,geometry:S,material:b,groupOrder:R,renderOrder:v.renderOrder,z:w,group:y},o[t]=_):(_.id=v.id,_.object=v,_.geometry=S,_.material=b,_.groupOrder=R,_.renderOrder=v.renderOrder,_.z=w,_.group=y),t++,_}function h(v,S,b,R,w,y){const _=d(v,S,b,R,w,y);b.transmission>0?r.push(_):b.transparent===!0?l.push(_):i.push(_)}function m(v,S,b,R,w,y){const _=d(v,S,b,R,w,y);b.transmission>0?r.unshift(_):b.transparent===!0?l.unshift(_):i.unshift(_)}function p(v,S){i.length>1&&i.sort(v||s1),r.length>1&&r.sort(S||Sv),l.length>1&&l.sort(S||Sv)}function x(){for(let v=t,S=o.length;v<S;v++){const b=o[v];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:h,unshift:m,finish:x,sort:p}}function o1(){let o=new WeakMap;function t(r,l){const u=o.get(r);let d;return u===void 0?(d=new yv,o.set(r,[d])):l>=u.length?(d=new yv,u.push(d)):d=u[l],d}function i(){o=new WeakMap}return{get:t,dispose:i}}function l1(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new ae,color:new Rt};break;case"SpotLight":i={position:new ae,direction:new ae,color:new Rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new ae,color:new Rt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new ae,skyColor:new Rt,groundColor:new Rt};break;case"RectAreaLight":i={color:new Rt,position:new ae,halfWidth:new ae,halfHeight:new ae};break}return o[t.id]=i,i}}}function c1(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let u1=0;function f1(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function d1(o){const t=new l1,i=c1(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new ae);const l=new ae,u=new tn,d=new tn;function h(p){let x=0,v=0,S=0;for(let C=0;C<9;C++)r.probe[C].set(0,0,0);let b=0,R=0,w=0,y=0,_=0,L=0,O=0,N=0,F=0,H=0,z=0;p.sort(f1);for(let C=0,E=p.length;C<E;C++){const I=p[C],J=I.color,se=I.intensity,pe=I.distance;let fe=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Us?fe=I.shadow.map.texture:fe=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)x+=J.r*se,v+=J.g*se,S+=J.b*se;else if(I.isLightProbe){for(let B=0;B<9;B++)r.probe[B].addScaledVector(I.sh.coefficients[B],se);z++}else if(I.isDirectionalLight){const B=t.get(I);if(B.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const V=I.shadow,re=i.get(I);re.shadowIntensity=V.intensity,re.shadowBias=V.bias,re.shadowNormalBias=V.normalBias,re.shadowRadius=V.radius,re.shadowMapSize=V.mapSize,r.directionalShadow[b]=re,r.directionalShadowMap[b]=fe,r.directionalShadowMatrix[b]=I.shadow.matrix,L++}r.directional[b]=B,b++}else if(I.isSpotLight){const B=t.get(I);B.position.setFromMatrixPosition(I.matrixWorld),B.color.copy(J).multiplyScalar(se),B.distance=pe,B.coneCos=Math.cos(I.angle),B.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),B.decay=I.decay,r.spot[w]=B;const V=I.shadow;if(I.map&&(r.spotLightMap[F]=I.map,F++,V.updateMatrices(I),I.castShadow&&H++),r.spotLightMatrix[w]=V.matrix,I.castShadow){const re=i.get(I);re.shadowIntensity=V.intensity,re.shadowBias=V.bias,re.shadowNormalBias=V.normalBias,re.shadowRadius=V.radius,re.shadowMapSize=V.mapSize,r.spotShadow[w]=re,r.spotShadowMap[w]=fe,N++}w++}else if(I.isRectAreaLight){const B=t.get(I);B.color.copy(J).multiplyScalar(se),B.halfWidth.set(I.width*.5,0,0),B.halfHeight.set(0,I.height*.5,0),r.rectArea[y]=B,y++}else if(I.isPointLight){const B=t.get(I);if(B.color.copy(I.color).multiplyScalar(I.intensity),B.distance=I.distance,B.decay=I.decay,I.castShadow){const V=I.shadow,re=i.get(I);re.shadowIntensity=V.intensity,re.shadowBias=V.bias,re.shadowNormalBias=V.normalBias,re.shadowRadius=V.radius,re.shadowMapSize=V.mapSize,re.shadowCameraNear=V.camera.near,re.shadowCameraFar=V.camera.far,r.pointShadow[R]=re,r.pointShadowMap[R]=fe,r.pointShadowMatrix[R]=I.shadow.matrix,O++}r.point[R]=B,R++}else if(I.isHemisphereLight){const B=t.get(I);B.skyColor.copy(I.color).multiplyScalar(se),B.groundColor.copy(I.groundColor).multiplyScalar(se),r.hemi[_]=B,_++}}y>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Oe.LTC_FLOAT_1,r.rectAreaLTC2=Oe.LTC_FLOAT_2):(r.rectAreaLTC1=Oe.LTC_HALF_1,r.rectAreaLTC2=Oe.LTC_HALF_2)),r.ambient[0]=x,r.ambient[1]=v,r.ambient[2]=S;const K=r.hash;(K.directionalLength!==b||K.pointLength!==R||K.spotLength!==w||K.rectAreaLength!==y||K.hemiLength!==_||K.numDirectionalShadows!==L||K.numPointShadows!==O||K.numSpotShadows!==N||K.numSpotMaps!==F||K.numLightProbes!==z)&&(r.directional.length=b,r.spot.length=w,r.rectArea.length=y,r.point.length=R,r.hemi.length=_,r.directionalShadow.length=L,r.directionalShadowMap.length=L,r.pointShadow.length=O,r.pointShadowMap.length=O,r.spotShadow.length=N,r.spotShadowMap.length=N,r.directionalShadowMatrix.length=L,r.pointShadowMatrix.length=O,r.spotLightMatrix.length=N+F-H,r.spotLightMap.length=F,r.numSpotLightShadowsWithMaps=H,r.numLightProbes=z,K.directionalLength=b,K.pointLength=R,K.spotLength=w,K.rectAreaLength=y,K.hemiLength=_,K.numDirectionalShadows=L,K.numPointShadows=O,K.numSpotShadows=N,K.numSpotMaps=F,K.numLightProbes=z,r.version=u1++)}function m(p,x){let v=0,S=0,b=0,R=0,w=0;const y=x.matrixWorldInverse;for(let _=0,L=p.length;_<L;_++){const O=p[_];if(O.isDirectionalLight){const N=r.directional[v];N.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(y),v++}else if(O.isSpotLight){const N=r.spot[b];N.position.setFromMatrixPosition(O.matrixWorld),N.position.applyMatrix4(y),N.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(y),b++}else if(O.isRectAreaLight){const N=r.rectArea[R];N.position.setFromMatrixPosition(O.matrixWorld),N.position.applyMatrix4(y),d.identity(),u.copy(O.matrixWorld),u.premultiply(y),d.extractRotation(u),N.halfWidth.set(O.width*.5,0,0),N.halfHeight.set(0,O.height*.5,0),N.halfWidth.applyMatrix4(d),N.halfHeight.applyMatrix4(d),R++}else if(O.isPointLight){const N=r.point[S];N.position.setFromMatrixPosition(O.matrixWorld),N.position.applyMatrix4(y),S++}else if(O.isHemisphereLight){const N=r.hemi[w];N.direction.setFromMatrixPosition(O.matrixWorld),N.direction.transformDirection(y),w++}}}return{setup:h,setupView:m,state:r}}function Mv(o){const t=new d1(o),i=[],r=[];function l(x){p.camera=x,i.length=0,r.length=0}function u(x){i.push(x)}function d(x){r.push(x)}function h(){t.setup(i)}function m(x){t.setupView(i,x)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:m,pushLight:u,pushShadow:d}}function h1(o){let t=new WeakMap;function i(l,u=0){const d=t.get(l);let h;return d===void 0?(h=new Mv(o),t.set(l,[h])):u>=d.length?(h=new Mv(o),d.push(h)):h=d[u],h}function r(){t=new WeakMap}return{get:i,dispose:r}}const p1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,m1=`uniform sampler2D shadow_pass;
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
}`,g1=[new ae(1,0,0),new ae(-1,0,0),new ae(0,1,0),new ae(0,-1,0),new ae(0,0,1),new ae(0,0,-1)],v1=[new ae(0,-1,0),new ae(0,-1,0),new ae(0,0,1),new ae(0,0,-1),new ae(0,-1,0),new ae(0,-1,0)],bv=new tn,zo=new ae,Rd=new ae;function _1(o,t,i){let r=new Ph;const l=new Nt,u=new Nt,d=new en,h=new Dy,m=new Uy,p={},x=i.maxTextureSize,v={[$a]:Xn,[Xn]:$a,[ha]:ha},S=new ki({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Nt},radius:{value:4}},vertexShader:p1,fragmentShader:m1}),b=S.clone();b.defines.HORIZONTAL_PASS=1;const R=new Ci;R.setAttribute("position",new Hi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new ii(R,S),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ac;let _=this.type;this.render=function(H,z,K){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||H.length===0)return;H.type===SS&&(rt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),H.type=Ac);const C=o.getRenderTarget(),E=o.getActiveCubeFace(),I=o.getActiveMipmapLevel(),J=o.state;J.setBlending(ma),J.buffers.depth.getReversed()===!0?J.buffers.color.setClear(0,0,0,0):J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);const se=_!==this.type;se&&z.traverse(function(pe){pe.material&&(Array.isArray(pe.material)?pe.material.forEach(fe=>fe.needsUpdate=!0):pe.material.needsUpdate=!0)});for(let pe=0,fe=H.length;pe<fe;pe++){const B=H[pe],V=B.shadow;if(V===void 0){rt("WebGLShadowMap:",B,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;l.copy(V.mapSize);const re=V.getFrameExtents();if(l.multiply(re),u.copy(V.mapSize),(l.x>x||l.y>x)&&(l.x>x&&(u.x=Math.floor(x/re.x),l.x=u.x*re.x,V.mapSize.x=u.x),l.y>x&&(u.y=Math.floor(x/re.y),l.y=u.y*re.y,V.mapSize.y=u.y)),V.map===null||se===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===Fo){if(B.isPointLight){rt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new Ii(l.x,l.y,{format:Us,type:va,minFilter:Nn,magFilter:Nn,generateMipmaps:!1}),V.map.texture.name=B.name+".shadowMap",V.map.depthTexture=new Xo(l.x,l.y,Bi),V.map.depthTexture.name=B.name+".shadowMapDepth",V.map.depthTexture.format=_a,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Rn,V.map.depthTexture.magFilter=Rn}else{B.isPointLight?(V.map=new Zv(l.x),V.map.depthTexture=new Cy(l.x,Gi)):(V.map=new Ii(l.x,l.y),V.map.depthTexture=new Xo(l.x,l.y,Gi)),V.map.depthTexture.name=B.name+".shadowMap",V.map.depthTexture.format=_a;const Se=o.state.buffers.depth.getReversed();this.type===Ac?(V.map.depthTexture.compareFunction=Se?Nh:Uh,V.map.depthTexture.minFilter=Nn,V.map.depthTexture.magFilter=Nn):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Rn,V.map.depthTexture.magFilter=Rn)}V.camera.updateProjectionMatrix()}const Me=V.map.isWebGLCubeRenderTarget?6:1;for(let Se=0;Se<Me;Se++){if(V.map.isWebGLCubeRenderTarget)o.setRenderTarget(V.map,Se),o.clear();else{Se===0&&(o.setRenderTarget(V.map),o.clear());const U=V.getViewport(Se);d.set(u.x*U.x,u.y*U.y,u.x*U.z,u.y*U.w),J.viewport(d)}if(B.isPointLight){const U=V.camera,ie=V.matrix,ve=B.distance||U.far;ve!==U.far&&(U.far=ve,U.updateProjectionMatrix()),zo.setFromMatrixPosition(B.matrixWorld),U.position.copy(zo),Rd.copy(U.position),Rd.add(g1[Se]),U.up.copy(v1[Se]),U.lookAt(Rd),U.updateMatrixWorld(),ie.makeTranslation(-zo.x,-zo.y,-zo.z),bv.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),V._frustum.setFromProjectionMatrix(bv,U.coordinateSystem,U.reversedDepth)}else V.updateMatrices(B);r=V.getFrustum(),N(z,K,V.camera,B,this.type)}V.isPointLightShadow!==!0&&this.type===Fo&&L(V,K),V.needsUpdate=!1}_=this.type,y.needsUpdate=!1,o.setRenderTarget(C,E,I)};function L(H,z){const K=t.update(w);S.defines.VSM_SAMPLES!==H.blurSamples&&(S.defines.VSM_SAMPLES=H.blurSamples,b.defines.VSM_SAMPLES=H.blurSamples,S.needsUpdate=!0,b.needsUpdate=!0),H.mapPass===null&&(H.mapPass=new Ii(l.x,l.y,{format:Us,type:va})),S.uniforms.shadow_pass.value=H.map.depthTexture,S.uniforms.resolution.value=H.mapSize,S.uniforms.radius.value=H.radius,o.setRenderTarget(H.mapPass),o.clear(),o.renderBufferDirect(z,null,K,S,w,null),b.uniforms.shadow_pass.value=H.mapPass.texture,b.uniforms.resolution.value=H.mapSize,b.uniforms.radius.value=H.radius,o.setRenderTarget(H.map),o.clear(),o.renderBufferDirect(z,null,K,b,w,null)}function O(H,z,K,C){let E=null;const I=K.isPointLight===!0?H.customDistanceMaterial:H.customDepthMaterial;if(I!==void 0)E=I;else if(E=K.isPointLight===!0?m:h,o.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const J=E.uuid,se=z.uuid;let pe=p[J];pe===void 0&&(pe={},p[J]=pe);let fe=pe[se];fe===void 0&&(fe=E.clone(),pe[se]=fe,z.addEventListener("dispose",F)),E=fe}if(E.visible=z.visible,E.wireframe=z.wireframe,C===Fo?E.side=z.shadowSide!==null?z.shadowSide:z.side:E.side=z.shadowSide!==null?z.shadowSide:v[z.side],E.alphaMap=z.alphaMap,E.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,E.map=z.map,E.clipShadows=z.clipShadows,E.clippingPlanes=z.clippingPlanes,E.clipIntersection=z.clipIntersection,E.displacementMap=z.displacementMap,E.displacementScale=z.displacementScale,E.displacementBias=z.displacementBias,E.wireframeLinewidth=z.wireframeLinewidth,E.linewidth=z.linewidth,K.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const J=o.properties.get(E);J.light=K}return E}function N(H,z,K,C,E){if(H.visible===!1)return;if(H.layers.test(z.layers)&&(H.isMesh||H.isLine||H.isPoints)&&(H.castShadow||H.receiveShadow&&E===Fo)&&(!H.frustumCulled||r.intersectsObject(H))){H.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,H.matrixWorld);const se=t.update(H),pe=H.material;if(Array.isArray(pe)){const fe=se.groups;for(let B=0,V=fe.length;B<V;B++){const re=fe[B],Me=pe[re.materialIndex];if(Me&&Me.visible){const Se=O(H,Me,C,E);H.onBeforeShadow(o,H,z,K,se,Se,re),o.renderBufferDirect(K,null,se,Se,H,re),H.onAfterShadow(o,H,z,K,se,Se,re)}}}else if(pe.visible){const fe=O(H,pe,C,E);H.onBeforeShadow(o,H,z,K,se,fe,null),o.renderBufferDirect(K,null,se,fe,H,null),H.onAfterShadow(o,H,z,K,se,fe,null)}}const J=H.children;for(let se=0,pe=J.length;se<pe;se++)N(J[se],z,K,C,E)}function F(H){H.target.removeEventListener("dispose",F);for(const K in p){const C=p[K],E=H.target.uuid;E in C&&(C[E].dispose(),delete C[E])}}}const x1={[Dd]:Ud,[Nd]:Pd,[Ld]:Bd,[ws]:Od,[Ud]:Dd,[Pd]:Nd,[Bd]:Ld,[Od]:ws};function S1(o,t){function i(){let W=!1;const Ne=new en;let Te=null;const Be=new en(0,0,0,0);return{setMask:function(ye){Te!==ye&&!W&&(o.colorMask(ye,ye,ye,ye),Te=ye)},setLocked:function(ye){W=ye},setClear:function(ye,_e,Re,nt,Pt){Pt===!0&&(ye*=nt,_e*=nt,Re*=nt),Ne.set(ye,_e,Re,nt),Be.equals(Ne)===!1&&(o.clearColor(ye,_e,Re,nt),Be.copy(Ne))},reset:function(){W=!1,Te=null,Be.set(-1,0,0,0)}}}function r(){let W=!1,Ne=!1,Te=null,Be=null,ye=null;return{setReversed:function(_e){if(Ne!==_e){const Re=t.get("EXT_clip_control");_e?Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.ZERO_TO_ONE_EXT):Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.NEGATIVE_ONE_TO_ONE_EXT),Ne=_e;const nt=ye;ye=null,this.setClear(nt)}},getReversed:function(){return Ne},setTest:function(_e){_e?ue(o.DEPTH_TEST):De(o.DEPTH_TEST)},setMask:function(_e){Te!==_e&&!W&&(o.depthMask(_e),Te=_e)},setFunc:function(_e){if(Ne&&(_e=x1[_e]),Be!==_e){switch(_e){case Dd:o.depthFunc(o.NEVER);break;case Ud:o.depthFunc(o.ALWAYS);break;case Nd:o.depthFunc(o.LESS);break;case ws:o.depthFunc(o.LEQUAL);break;case Ld:o.depthFunc(o.EQUAL);break;case Od:o.depthFunc(o.GEQUAL);break;case Pd:o.depthFunc(o.GREATER);break;case Bd:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Be=_e}},setLocked:function(_e){W=_e},setClear:function(_e){ye!==_e&&(Ne&&(_e=1-_e),o.clearDepth(_e),ye=_e)},reset:function(){W=!1,Te=null,Be=null,ye=null,Ne=!1}}}function l(){let W=!1,Ne=null,Te=null,Be=null,ye=null,_e=null,Re=null,nt=null,Pt=null;return{setTest:function(Mt){W||(Mt?ue(o.STENCIL_TEST):De(o.STENCIL_TEST))},setMask:function(Mt){Ne!==Mt&&!W&&(o.stencilMask(Mt),Ne=Mt)},setFunc:function(Mt,Cn,vi){(Te!==Mt||Be!==Cn||ye!==vi)&&(o.stencilFunc(Mt,Cn,vi),Te=Mt,Be=Cn,ye=vi)},setOp:function(Mt,Cn,vi){(_e!==Mt||Re!==Cn||nt!==vi)&&(o.stencilOp(Mt,Cn,vi),_e=Mt,Re=Cn,nt=vi)},setLocked:function(Mt){W=Mt},setClear:function(Mt){Pt!==Mt&&(o.clearStencil(Mt),Pt=Mt)},reset:function(){W=!1,Ne=null,Te=null,Be=null,ye=null,_e=null,Re=null,nt=null,Pt=null}}}const u=new i,d=new r,h=new l,m=new WeakMap,p=new WeakMap;let x={},v={},S=new WeakMap,b=[],R=null,w=!1,y=null,_=null,L=null,O=null,N=null,F=null,H=null,z=new Rt(0,0,0),K=0,C=!1,E=null,I=null,J=null,se=null,pe=null;const fe=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,V=0;const re=o.getParameter(o.VERSION);re.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(re)[1]),B=V>=1):re.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(re)[1]),B=V>=2);let Me=null,Se={};const U=o.getParameter(o.SCISSOR_BOX),ie=o.getParameter(o.VIEWPORT),ve=new en().fromArray(U),Ae=new en().fromArray(ie);function Ie(W,Ne,Te,Be){const ye=new Uint8Array(4),_e=o.createTexture();o.bindTexture(W,_e),o.texParameteri(W,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(W,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Re=0;Re<Te;Re++)W===o.TEXTURE_3D||W===o.TEXTURE_2D_ARRAY?o.texImage3D(Ne,0,o.RGBA,1,1,Be,0,o.RGBA,o.UNSIGNED_BYTE,ye):o.texImage2D(Ne+Re,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,ye);return _e}const ne={};ne[o.TEXTURE_2D]=Ie(o.TEXTURE_2D,o.TEXTURE_2D,1),ne[o.TEXTURE_CUBE_MAP]=Ie(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[o.TEXTURE_2D_ARRAY]=Ie(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),ne[o.TEXTURE_3D]=Ie(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),d.setClear(1),h.setClear(0),ue(o.DEPTH_TEST),d.setFunc(ws),st(!1),Qt(Ag),ue(o.CULL_FACE),ht(ma);function ue(W){x[W]!==!0&&(o.enable(W),x[W]=!0)}function De(W){x[W]!==!1&&(o.disable(W),x[W]=!1)}function ke(W,Ne){return v[W]!==Ne?(o.bindFramebuffer(W,Ne),v[W]=Ne,W===o.DRAW_FRAMEBUFFER&&(v[o.FRAMEBUFFER]=Ne),W===o.FRAMEBUFFER&&(v[o.DRAW_FRAMEBUFFER]=Ne),!0):!1}function He(W,Ne){let Te=b,Be=!1;if(W){Te=S.get(Ne),Te===void 0&&(Te=[],S.set(Ne,Te));const ye=W.textures;if(Te.length!==ye.length||Te[0]!==o.COLOR_ATTACHMENT0){for(let _e=0,Re=ye.length;_e<Re;_e++)Te[_e]=o.COLOR_ATTACHMENT0+_e;Te.length=ye.length,Be=!0}}else Te[0]!==o.BACK&&(Te[0]=o.BACK,Be=!0);Be&&o.drawBuffers(Te)}function dt(W){return R!==W?(o.useProgram(W),R=W,!0):!1}const Kt={[Tr]:o.FUNC_ADD,[MS]:o.FUNC_SUBTRACT,[bS]:o.FUNC_REVERSE_SUBTRACT};Kt[ES]=o.MIN,Kt[TS]=o.MAX;const gt={[AS]:o.ZERO,[RS]:o.ONE,[CS]:o.SRC_COLOR,[Cd]:o.SRC_ALPHA,[OS]:o.SRC_ALPHA_SATURATE,[NS]:o.DST_COLOR,[DS]:o.DST_ALPHA,[wS]:o.ONE_MINUS_SRC_COLOR,[wd]:o.ONE_MINUS_SRC_ALPHA,[LS]:o.ONE_MINUS_DST_COLOR,[US]:o.ONE_MINUS_DST_ALPHA,[PS]:o.CONSTANT_COLOR,[BS]:o.ONE_MINUS_CONSTANT_COLOR,[zS]:o.CONSTANT_ALPHA,[FS]:o.ONE_MINUS_CONSTANT_ALPHA};function ht(W,Ne,Te,Be,ye,_e,Re,nt,Pt,Mt){if(W===ma){w===!0&&(De(o.BLEND),w=!1);return}if(w===!1&&(ue(o.BLEND),w=!0),W!==yS){if(W!==y||Mt!==C){if((_!==Tr||N!==Tr)&&(o.blendEquation(o.FUNC_ADD),_=Tr,N=Tr),Mt)switch(W){case Rs:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Rg:o.blendFunc(o.ONE,o.ONE);break;case Cg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case wg:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:At("WebGLState: Invalid blending: ",W);break}else switch(W){case Rs:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Rg:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case Cg:At("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case wg:At("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:At("WebGLState: Invalid blending: ",W);break}L=null,O=null,F=null,H=null,z.set(0,0,0),K=0,y=W,C=Mt}return}ye=ye||Ne,_e=_e||Te,Re=Re||Be,(Ne!==_||ye!==N)&&(o.blendEquationSeparate(Kt[Ne],Kt[ye]),_=Ne,N=ye),(Te!==L||Be!==O||_e!==F||Re!==H)&&(o.blendFuncSeparate(gt[Te],gt[Be],gt[_e],gt[Re]),L=Te,O=Be,F=_e,H=Re),(nt.equals(z)===!1||Pt!==K)&&(o.blendColor(nt.r,nt.g,nt.b,Pt),z.copy(nt),K=Pt),y=W,C=!1}function Ct(W,Ne){W.side===ha?De(o.CULL_FACE):ue(o.CULL_FACE);let Te=W.side===Xn;Ne&&(Te=!Te),st(Te),W.blending===Rs&&W.transparent===!1?ht(ma):ht(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),d.setFunc(W.depthFunc),d.setTest(W.depthTest),d.setMask(W.depthWrite),u.setMask(W.colorWrite);const Be=W.stencilWrite;h.setTest(Be),Be&&(h.setMask(W.stencilWriteMask),h.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),h.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),jt(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?ue(o.SAMPLE_ALPHA_TO_COVERAGE):De(o.SAMPLE_ALPHA_TO_COVERAGE)}function st(W){E!==W&&(W?o.frontFace(o.CW):o.frontFace(o.CCW),E=W)}function Qt(W){W!==_S?(ue(o.CULL_FACE),W!==I&&(W===Ag?o.cullFace(o.BACK):W===xS?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):De(o.CULL_FACE),I=W}function k(W){W!==J&&(B&&o.lineWidth(W),J=W)}function jt(W,Ne,Te){W?(ue(o.POLYGON_OFFSET_FILL),(se!==Ne||pe!==Te)&&(o.polygonOffset(Ne,Te),se=Ne,pe=Te)):De(o.POLYGON_OFFSET_FILL)}function yt(W){W?ue(o.SCISSOR_TEST):De(o.SCISSOR_TEST)}function Lt(W){W===void 0&&(W=o.TEXTURE0+fe-1),Me!==W&&(o.activeTexture(W),Me=W)}function je(W,Ne,Te){Te===void 0&&(Me===null?Te=o.TEXTURE0+fe-1:Te=Me);let Be=Se[Te];Be===void 0&&(Be={type:void 0,texture:void 0},Se[Te]=Be),(Be.type!==W||Be.texture!==Ne)&&(Me!==Te&&(o.activeTexture(Te),Me=Te),o.bindTexture(W,Ne||ne[W]),Be.type=W,Be.texture=Ne)}function D(){const W=Se[Me];W!==void 0&&W.type!==void 0&&(o.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function M(){try{o.compressedTexImage2D(...arguments)}catch(W){At("WebGLState:",W)}}function q(){try{o.compressedTexImage3D(...arguments)}catch(W){At("WebGLState:",W)}}function he(){try{o.texSubImage2D(...arguments)}catch(W){At("WebGLState:",W)}}function xe(){try{o.texSubImage3D(...arguments)}catch(W){At("WebGLState:",W)}}function ce(){try{o.compressedTexSubImage2D(...arguments)}catch(W){At("WebGLState:",W)}}function Ze(){try{o.compressedTexSubImage3D(...arguments)}catch(W){At("WebGLState:",W)}}function Ce(){try{o.texStorage2D(...arguments)}catch(W){At("WebGLState:",W)}}function Xe(){try{o.texStorage3D(...arguments)}catch(W){At("WebGLState:",W)}}function tt(){try{o.texImage2D(...arguments)}catch(W){At("WebGLState:",W)}}function be(){try{o.texImage3D(...arguments)}catch(W){At("WebGLState:",W)}}function Ee(W){ve.equals(W)===!1&&(o.scissor(W.x,W.y,W.z,W.w),ve.copy(W))}function ze(W){Ae.equals(W)===!1&&(o.viewport(W.x,W.y,W.z,W.w),Ae.copy(W))}function Pe(W,Ne){let Te=p.get(Ne);Te===void 0&&(Te=new WeakMap,p.set(Ne,Te));let Be=Te.get(W);Be===void 0&&(Be=o.getUniformBlockIndex(Ne,W.name),Te.set(W,Be))}function we(W,Ne){const Be=p.get(Ne).get(W);m.get(Ne)!==Be&&(o.uniformBlockBinding(Ne,Be,W.__bindingPointIndex),m.set(Ne,Be))}function lt(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),d.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),x={},Me=null,Se={},v={},S=new WeakMap,b=[],R=null,w=!1,y=null,_=null,L=null,O=null,N=null,F=null,H=null,z=new Rt(0,0,0),K=0,C=!1,E=null,I=null,J=null,se=null,pe=null,ve.set(0,0,o.canvas.width,o.canvas.height),Ae.set(0,0,o.canvas.width,o.canvas.height),u.reset(),d.reset(),h.reset()}return{buffers:{color:u,depth:d,stencil:h},enable:ue,disable:De,bindFramebuffer:ke,drawBuffers:He,useProgram:dt,setBlending:ht,setMaterial:Ct,setFlipSided:st,setCullFace:Qt,setLineWidth:k,setPolygonOffset:jt,setScissorTest:yt,activeTexture:Lt,bindTexture:je,unbindTexture:D,compressedTexImage2D:M,compressedTexImage3D:q,texImage2D:tt,texImage3D:be,updateUBOMapping:Pe,uniformBlockBinding:we,texStorage2D:Ce,texStorage3D:Xe,texSubImage2D:he,texSubImage3D:xe,compressedTexSubImage2D:ce,compressedTexSubImage3D:Ze,scissor:Ee,viewport:ze,reset:lt}}function y1(o,t,i,r,l,u,d){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Nt,x=new WeakMap;let v;const S=new WeakMap;let b=!1;try{b=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function R(D,M){return b?new OffscreenCanvas(D,M):Oc("canvas")}function w(D,M,q){let he=1;const xe=je(D);if((xe.width>q||xe.height>q)&&(he=q/Math.max(xe.width,xe.height)),he<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const ce=Math.floor(he*xe.width),Ze=Math.floor(he*xe.height);v===void 0&&(v=R(ce,Ze));const Ce=M?R(ce,Ze):v;return Ce.width=ce,Ce.height=Ze,Ce.getContext("2d").drawImage(D,0,0,ce,Ze),rt("WebGLRenderer: Texture has been resized from ("+xe.width+"x"+xe.height+") to ("+ce+"x"+Ze+")."),Ce}else return"data"in D&&rt("WebGLRenderer: Image in DataTexture is too big ("+xe.width+"x"+xe.height+")."),D;return D}function y(D){return D.generateMipmaps}function _(D){o.generateMipmap(D)}function L(D){return D.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?o.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function O(D,M,q,he,xe=!1){if(D!==null){if(o[D]!==void 0)return o[D];rt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let ce=M;if(M===o.RED&&(q===o.FLOAT&&(ce=o.R32F),q===o.HALF_FLOAT&&(ce=o.R16F),q===o.UNSIGNED_BYTE&&(ce=o.R8)),M===o.RED_INTEGER&&(q===o.UNSIGNED_BYTE&&(ce=o.R8UI),q===o.UNSIGNED_SHORT&&(ce=o.R16UI),q===o.UNSIGNED_INT&&(ce=o.R32UI),q===o.BYTE&&(ce=o.R8I),q===o.SHORT&&(ce=o.R16I),q===o.INT&&(ce=o.R32I)),M===o.RG&&(q===o.FLOAT&&(ce=o.RG32F),q===o.HALF_FLOAT&&(ce=o.RG16F),q===o.UNSIGNED_BYTE&&(ce=o.RG8)),M===o.RG_INTEGER&&(q===o.UNSIGNED_BYTE&&(ce=o.RG8UI),q===o.UNSIGNED_SHORT&&(ce=o.RG16UI),q===o.UNSIGNED_INT&&(ce=o.RG32UI),q===o.BYTE&&(ce=o.RG8I),q===o.SHORT&&(ce=o.RG16I),q===o.INT&&(ce=o.RG32I)),M===o.RGB_INTEGER&&(q===o.UNSIGNED_BYTE&&(ce=o.RGB8UI),q===o.UNSIGNED_SHORT&&(ce=o.RGB16UI),q===o.UNSIGNED_INT&&(ce=o.RGB32UI),q===o.BYTE&&(ce=o.RGB8I),q===o.SHORT&&(ce=o.RGB16I),q===o.INT&&(ce=o.RGB32I)),M===o.RGBA_INTEGER&&(q===o.UNSIGNED_BYTE&&(ce=o.RGBA8UI),q===o.UNSIGNED_SHORT&&(ce=o.RGBA16UI),q===o.UNSIGNED_INT&&(ce=o.RGBA32UI),q===o.BYTE&&(ce=o.RGBA8I),q===o.SHORT&&(ce=o.RGBA16I),q===o.INT&&(ce=o.RGBA32I)),M===o.RGB&&(q===o.UNSIGNED_INT_5_9_9_9_REV&&(ce=o.RGB9_E5),q===o.UNSIGNED_INT_10F_11F_11F_REV&&(ce=o.R11F_G11F_B10F)),M===o.RGBA){const Ze=xe?Nc:bt.getTransfer(he);q===o.FLOAT&&(ce=o.RGBA32F),q===o.HALF_FLOAT&&(ce=o.RGBA16F),q===o.UNSIGNED_BYTE&&(ce=Ze===It?o.SRGB8_ALPHA8:o.RGBA8),q===o.UNSIGNED_SHORT_4_4_4_4&&(ce=o.RGBA4),q===o.UNSIGNED_SHORT_5_5_5_1&&(ce=o.RGB5_A1)}return(ce===o.R16F||ce===o.R32F||ce===o.RG16F||ce===o.RG32F||ce===o.RGBA16F||ce===o.RGBA32F)&&t.get("EXT_color_buffer_float"),ce}function N(D,M){let q;return D?M===null||M===Gi||M===Vo?q=o.DEPTH24_STENCIL8:M===Bi?q=o.DEPTH32F_STENCIL8:M===Go&&(q=o.DEPTH24_STENCIL8,rt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Gi||M===Vo?q=o.DEPTH_COMPONENT24:M===Bi?q=o.DEPTH_COMPONENT32F:M===Go&&(q=o.DEPTH_COMPONENT16),q}function F(D,M){return y(D)===!0||D.isFramebufferTexture&&D.minFilter!==Rn&&D.minFilter!==Nn?Math.log2(Math.max(M.width,M.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?M.mipmaps.length:1}function H(D){const M=D.target;M.removeEventListener("dispose",H),K(M),M.isVideoTexture&&x.delete(M)}function z(D){const M=D.target;M.removeEventListener("dispose",z),E(M)}function K(D){const M=r.get(D);if(M.__webglInit===void 0)return;const q=D.source,he=S.get(q);if(he){const xe=he[M.__cacheKey];xe.usedTimes--,xe.usedTimes===0&&C(D),Object.keys(he).length===0&&S.delete(q)}r.remove(D)}function C(D){const M=r.get(D);o.deleteTexture(M.__webglTexture);const q=D.source,he=S.get(q);delete he[M.__cacheKey],d.memory.textures--}function E(D){const M=r.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),r.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray(M.__webglFramebuffer[he]))for(let xe=0;xe<M.__webglFramebuffer[he].length;xe++)o.deleteFramebuffer(M.__webglFramebuffer[he][xe]);else o.deleteFramebuffer(M.__webglFramebuffer[he]);M.__webglDepthbuffer&&o.deleteRenderbuffer(M.__webglDepthbuffer[he])}else{if(Array.isArray(M.__webglFramebuffer))for(let he=0;he<M.__webglFramebuffer.length;he++)o.deleteFramebuffer(M.__webglFramebuffer[he]);else o.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&o.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&o.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let he=0;he<M.__webglColorRenderbuffer.length;he++)M.__webglColorRenderbuffer[he]&&o.deleteRenderbuffer(M.__webglColorRenderbuffer[he]);M.__webglDepthRenderbuffer&&o.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const q=D.textures;for(let he=0,xe=q.length;he<xe;he++){const ce=r.get(q[he]);ce.__webglTexture&&(o.deleteTexture(ce.__webglTexture),d.memory.textures--),r.remove(q[he])}r.remove(D)}let I=0;function J(){I=0}function se(){const D=I;return D>=l.maxTextures&&rt("WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+l.maxTextures),I+=1,D}function pe(D){const M=[];return M.push(D.wrapS),M.push(D.wrapT),M.push(D.wrapR||0),M.push(D.magFilter),M.push(D.minFilter),M.push(D.anisotropy),M.push(D.internalFormat),M.push(D.format),M.push(D.type),M.push(D.generateMipmaps),M.push(D.premultiplyAlpha),M.push(D.flipY),M.push(D.unpackAlignment),M.push(D.colorSpace),M.join()}function fe(D,M){const q=r.get(D);if(D.isVideoTexture&&yt(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&q.__version!==D.version){const he=D.image;if(he===null)rt("WebGLRenderer: Texture marked for update but no image data found.");else if(he.complete===!1)rt("WebGLRenderer: Texture marked for update but image is incomplete");else{ne(q,D,M);return}}else D.isExternalTexture&&(q.__webglTexture=D.sourceTexture?D.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,q.__webglTexture,o.TEXTURE0+M)}function B(D,M){const q=r.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&q.__version!==D.version){ne(q,D,M);return}else D.isExternalTexture&&(q.__webglTexture=D.sourceTexture?D.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,q.__webglTexture,o.TEXTURE0+M)}function V(D,M){const q=r.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&q.__version!==D.version){ne(q,D,M);return}i.bindTexture(o.TEXTURE_3D,q.__webglTexture,o.TEXTURE0+M)}function re(D,M){const q=r.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&q.__version!==D.version){ue(q,D,M);return}i.bindTexture(o.TEXTURE_CUBE_MAP,q.__webglTexture,o.TEXTURE0+M)}const Me={[Id]:o.REPEAT,[pa]:o.CLAMP_TO_EDGE,[Hd]:o.MIRRORED_REPEAT},Se={[Rn]:o.NEAREST,[GS]:o.NEAREST_MIPMAP_NEAREST,[sc]:o.NEAREST_MIPMAP_LINEAR,[Nn]:o.LINEAR,[Kf]:o.LINEAR_MIPMAP_NEAREST,[Rr]:o.LINEAR_MIPMAP_LINEAR},U={[XS]:o.NEVER,[ZS]:o.ALWAYS,[WS]:o.LESS,[Uh]:o.LEQUAL,[qS]:o.EQUAL,[Nh]:o.GEQUAL,[jS]:o.GREATER,[YS]:o.NOTEQUAL};function ie(D,M){if(M.type===Bi&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===Nn||M.magFilter===Kf||M.magFilter===sc||M.magFilter===Rr||M.minFilter===Nn||M.minFilter===Kf||M.minFilter===sc||M.minFilter===Rr)&&rt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(D,o.TEXTURE_WRAP_S,Me[M.wrapS]),o.texParameteri(D,o.TEXTURE_WRAP_T,Me[M.wrapT]),(D===o.TEXTURE_3D||D===o.TEXTURE_2D_ARRAY)&&o.texParameteri(D,o.TEXTURE_WRAP_R,Me[M.wrapR]),o.texParameteri(D,o.TEXTURE_MAG_FILTER,Se[M.magFilter]),o.texParameteri(D,o.TEXTURE_MIN_FILTER,Se[M.minFilter]),M.compareFunction&&(o.texParameteri(D,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(D,o.TEXTURE_COMPARE_FUNC,U[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Rn||M.minFilter!==sc&&M.minFilter!==Rr||M.type===Bi&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||r.get(M).__currentAnisotropy){const q=t.get("EXT_texture_filter_anisotropic");o.texParameterf(D,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,l.getMaxAnisotropy())),r.get(M).__currentAnisotropy=M.anisotropy}}}function ve(D,M){let q=!1;D.__webglInit===void 0&&(D.__webglInit=!0,M.addEventListener("dispose",H));const he=M.source;let xe=S.get(he);xe===void 0&&(xe={},S.set(he,xe));const ce=pe(M);if(ce!==D.__cacheKey){xe[ce]===void 0&&(xe[ce]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,q=!0),xe[ce].usedTimes++;const Ze=xe[D.__cacheKey];Ze!==void 0&&(xe[D.__cacheKey].usedTimes--,Ze.usedTimes===0&&C(M)),D.__cacheKey=ce,D.__webglTexture=xe[ce].texture}return q}function Ae(D,M,q){return Math.floor(Math.floor(D/q)/M)}function Ie(D,M,q,he){const ce=D.updateRanges;if(ce.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,M.width,M.height,q,he,M.data);else{ce.sort((be,Ee)=>be.start-Ee.start);let Ze=0;for(let be=1;be<ce.length;be++){const Ee=ce[Ze],ze=ce[be],Pe=Ee.start+Ee.count,we=Ae(ze.start,M.width,4),lt=Ae(Ee.start,M.width,4);ze.start<=Pe+1&&we===lt&&Ae(ze.start+ze.count-1,M.width,4)===we?Ee.count=Math.max(Ee.count,ze.start+ze.count-Ee.start):(++Ze,ce[Ze]=ze)}ce.length=Ze+1;const Ce=o.getParameter(o.UNPACK_ROW_LENGTH),Xe=o.getParameter(o.UNPACK_SKIP_PIXELS),tt=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,M.width);for(let be=0,Ee=ce.length;be<Ee;be++){const ze=ce[be],Pe=Math.floor(ze.start/4),we=Math.ceil(ze.count/4),lt=Pe%M.width,W=Math.floor(Pe/M.width),Ne=we,Te=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,lt),o.pixelStorei(o.UNPACK_SKIP_ROWS,W),i.texSubImage2D(o.TEXTURE_2D,0,lt,W,Ne,Te,q,he,M.data)}D.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Ce),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Xe),o.pixelStorei(o.UNPACK_SKIP_ROWS,tt)}}function ne(D,M,q){let he=o.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(he=o.TEXTURE_2D_ARRAY),M.isData3DTexture&&(he=o.TEXTURE_3D);const xe=ve(D,M),ce=M.source;i.bindTexture(he,D.__webglTexture,o.TEXTURE0+q);const Ze=r.get(ce);if(ce.version!==Ze.__version||xe===!0){i.activeTexture(o.TEXTURE0+q);const Ce=bt.getPrimaries(bt.workingColorSpace),Xe=M.colorSpace===Qa?null:bt.getPrimaries(M.colorSpace),tt=M.colorSpace===Qa||Ce===Xe?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,M.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,M.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt);let be=w(M.image,!1,l.maxTextureSize);be=Lt(M,be);const Ee=u.convert(M.format,M.colorSpace),ze=u.convert(M.type);let Pe=O(M.internalFormat,Ee,ze,M.colorSpace,M.isVideoTexture);ie(he,M);let we;const lt=M.mipmaps,W=M.isVideoTexture!==!0,Ne=Ze.__version===void 0||xe===!0,Te=ce.dataReady,Be=F(M,be);if(M.isDepthTexture)Pe=N(M.format===Cr,M.type),Ne&&(W?i.texStorage2D(o.TEXTURE_2D,1,Pe,be.width,be.height):i.texImage2D(o.TEXTURE_2D,0,Pe,be.width,be.height,0,Ee,ze,null));else if(M.isDataTexture)if(lt.length>0){W&&Ne&&i.texStorage2D(o.TEXTURE_2D,Be,Pe,lt[0].width,lt[0].height);for(let ye=0,_e=lt.length;ye<_e;ye++)we=lt[ye],W?Te&&i.texSubImage2D(o.TEXTURE_2D,ye,0,0,we.width,we.height,Ee,ze,we.data):i.texImage2D(o.TEXTURE_2D,ye,Pe,we.width,we.height,0,Ee,ze,we.data);M.generateMipmaps=!1}else W?(Ne&&i.texStorage2D(o.TEXTURE_2D,Be,Pe,be.width,be.height),Te&&Ie(M,be,Ee,ze)):i.texImage2D(o.TEXTURE_2D,0,Pe,be.width,be.height,0,Ee,ze,be.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){W&&Ne&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Be,Pe,lt[0].width,lt[0].height,be.depth);for(let ye=0,_e=lt.length;ye<_e;ye++)if(we=lt[ye],M.format!==Ri)if(Ee!==null)if(W){if(Te)if(M.layerUpdates.size>0){const Re=ev(we.width,we.height,M.format,M.type);for(const nt of M.layerUpdates){const Pt=we.data.subarray(nt*Re/we.data.BYTES_PER_ELEMENT,(nt+1)*Re/we.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ye,0,0,nt,we.width,we.height,1,Ee,Pt)}M.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ye,0,0,0,we.width,we.height,be.depth,Ee,we.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,ye,Pe,we.width,we.height,be.depth,0,we.data,0,0);else rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?Te&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,ye,0,0,0,we.width,we.height,be.depth,Ee,ze,we.data):i.texImage3D(o.TEXTURE_2D_ARRAY,ye,Pe,we.width,we.height,be.depth,0,Ee,ze,we.data)}else{W&&Ne&&i.texStorage2D(o.TEXTURE_2D,Be,Pe,lt[0].width,lt[0].height);for(let ye=0,_e=lt.length;ye<_e;ye++)we=lt[ye],M.format!==Ri?Ee!==null?W?Te&&i.compressedTexSubImage2D(o.TEXTURE_2D,ye,0,0,we.width,we.height,Ee,we.data):i.compressedTexImage2D(o.TEXTURE_2D,ye,Pe,we.width,we.height,0,we.data):rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?Te&&i.texSubImage2D(o.TEXTURE_2D,ye,0,0,we.width,we.height,Ee,ze,we.data):i.texImage2D(o.TEXTURE_2D,ye,Pe,we.width,we.height,0,Ee,ze,we.data)}else if(M.isDataArrayTexture)if(W){if(Ne&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Be,Pe,be.width,be.height,be.depth),Te)if(M.layerUpdates.size>0){const ye=ev(be.width,be.height,M.format,M.type);for(const _e of M.layerUpdates){const Re=be.data.subarray(_e*ye/be.data.BYTES_PER_ELEMENT,(_e+1)*ye/be.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,_e,be.width,be.height,1,Ee,ze,Re)}M.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,be.width,be.height,be.depth,Ee,ze,be.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Pe,be.width,be.height,be.depth,0,Ee,ze,be.data);else if(M.isData3DTexture)W?(Ne&&i.texStorage3D(o.TEXTURE_3D,Be,Pe,be.width,be.height,be.depth),Te&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,be.width,be.height,be.depth,Ee,ze,be.data)):i.texImage3D(o.TEXTURE_3D,0,Pe,be.width,be.height,be.depth,0,Ee,ze,be.data);else if(M.isFramebufferTexture){if(Ne)if(W)i.texStorage2D(o.TEXTURE_2D,Be,Pe,be.width,be.height);else{let ye=be.width,_e=be.height;for(let Re=0;Re<Be;Re++)i.texImage2D(o.TEXTURE_2D,Re,Pe,ye,_e,0,Ee,ze,null),ye>>=1,_e>>=1}}else if(lt.length>0){if(W&&Ne){const ye=je(lt[0]);i.texStorage2D(o.TEXTURE_2D,Be,Pe,ye.width,ye.height)}for(let ye=0,_e=lt.length;ye<_e;ye++)we=lt[ye],W?Te&&i.texSubImage2D(o.TEXTURE_2D,ye,0,0,Ee,ze,we):i.texImage2D(o.TEXTURE_2D,ye,Pe,Ee,ze,we);M.generateMipmaps=!1}else if(W){if(Ne){const ye=je(be);i.texStorage2D(o.TEXTURE_2D,Be,Pe,ye.width,ye.height)}Te&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Ee,ze,be)}else i.texImage2D(o.TEXTURE_2D,0,Pe,Ee,ze,be);y(M)&&_(he),Ze.__version=ce.version,M.onUpdate&&M.onUpdate(M)}D.__version=M.version}function ue(D,M,q){if(M.image.length!==6)return;const he=ve(D,M),xe=M.source;i.bindTexture(o.TEXTURE_CUBE_MAP,D.__webglTexture,o.TEXTURE0+q);const ce=r.get(xe);if(xe.version!==ce.__version||he===!0){i.activeTexture(o.TEXTURE0+q);const Ze=bt.getPrimaries(bt.workingColorSpace),Ce=M.colorSpace===Qa?null:bt.getPrimaries(M.colorSpace),Xe=M.colorSpace===Qa||Ze===Ce?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,M.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,M.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xe);const tt=M.isCompressedTexture||M.image[0].isCompressedTexture,be=M.image[0]&&M.image[0].isDataTexture,Ee=[];for(let _e=0;_e<6;_e++)!tt&&!be?Ee[_e]=w(M.image[_e],!0,l.maxCubemapSize):Ee[_e]=be?M.image[_e].image:M.image[_e],Ee[_e]=Lt(M,Ee[_e]);const ze=Ee[0],Pe=u.convert(M.format,M.colorSpace),we=u.convert(M.type),lt=O(M.internalFormat,Pe,we,M.colorSpace),W=M.isVideoTexture!==!0,Ne=ce.__version===void 0||he===!0,Te=xe.dataReady;let Be=F(M,ze);ie(o.TEXTURE_CUBE_MAP,M);let ye;if(tt){W&&Ne&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Be,lt,ze.width,ze.height);for(let _e=0;_e<6;_e++){ye=Ee[_e].mipmaps;for(let Re=0;Re<ye.length;Re++){const nt=ye[Re];M.format!==Ri?Pe!==null?W?Te&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Re,0,0,nt.width,nt.height,Pe,nt.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Re,lt,nt.width,nt.height,0,nt.data):rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?Te&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Re,0,0,nt.width,nt.height,Pe,we,nt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Re,lt,nt.width,nt.height,0,Pe,we,nt.data)}}}else{if(ye=M.mipmaps,W&&Ne){ye.length>0&&Be++;const _e=je(Ee[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Be,lt,_e.width,_e.height)}for(let _e=0;_e<6;_e++)if(be){W?Te&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,Ee[_e].width,Ee[_e].height,Pe,we,Ee[_e].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,lt,Ee[_e].width,Ee[_e].height,0,Pe,we,Ee[_e].data);for(let Re=0;Re<ye.length;Re++){const Pt=ye[Re].image[_e].image;W?Te&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Re+1,0,0,Pt.width,Pt.height,Pe,we,Pt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Re+1,lt,Pt.width,Pt.height,0,Pe,we,Pt.data)}}else{W?Te&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,Pe,we,Ee[_e]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,lt,Pe,we,Ee[_e]);for(let Re=0;Re<ye.length;Re++){const nt=ye[Re];W?Te&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Re+1,0,0,Pe,we,nt.image[_e]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Re+1,lt,Pe,we,nt.image[_e])}}}y(M)&&_(o.TEXTURE_CUBE_MAP),ce.__version=xe.version,M.onUpdate&&M.onUpdate(M)}D.__version=M.version}function De(D,M,q,he,xe,ce){const Ze=u.convert(q.format,q.colorSpace),Ce=u.convert(q.type),Xe=O(q.internalFormat,Ze,Ce,q.colorSpace),tt=r.get(M),be=r.get(q);if(be.__renderTarget=M,!tt.__hasExternalTextures){const Ee=Math.max(1,M.width>>ce),ze=Math.max(1,M.height>>ce);xe===o.TEXTURE_3D||xe===o.TEXTURE_2D_ARRAY?i.texImage3D(xe,ce,Xe,Ee,ze,M.depth,0,Ze,Ce,null):i.texImage2D(xe,ce,Xe,Ee,ze,0,Ze,Ce,null)}i.bindFramebuffer(o.FRAMEBUFFER,D),jt(M)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,he,xe,be.__webglTexture,0,k(M)):(xe===o.TEXTURE_2D||xe>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&xe<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,he,xe,be.__webglTexture,ce),i.bindFramebuffer(o.FRAMEBUFFER,null)}function ke(D,M,q){if(o.bindRenderbuffer(o.RENDERBUFFER,D),M.depthBuffer){const he=M.depthTexture,xe=he&&he.isDepthTexture?he.type:null,ce=N(M.stencilBuffer,xe),Ze=M.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;jt(M)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,k(M),ce,M.width,M.height):q?o.renderbufferStorageMultisample(o.RENDERBUFFER,k(M),ce,M.width,M.height):o.renderbufferStorage(o.RENDERBUFFER,ce,M.width,M.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ze,o.RENDERBUFFER,D)}else{const he=M.textures;for(let xe=0;xe<he.length;xe++){const ce=he[xe],Ze=u.convert(ce.format,ce.colorSpace),Ce=u.convert(ce.type),Xe=O(ce.internalFormat,Ze,Ce,ce.colorSpace);jt(M)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,k(M),Xe,M.width,M.height):q?o.renderbufferStorageMultisample(o.RENDERBUFFER,k(M),Xe,M.width,M.height):o.renderbufferStorage(o.RENDERBUFFER,Xe,M.width,M.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function He(D,M,q){const he=M.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(o.FRAMEBUFFER,D),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const xe=r.get(M.depthTexture);if(xe.__renderTarget=M,(!xe.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),he){if(xe.__webglInit===void 0&&(xe.__webglInit=!0,M.depthTexture.addEventListener("dispose",H)),xe.__webglTexture===void 0){xe.__webglTexture=o.createTexture(),i.bindTexture(o.TEXTURE_CUBE_MAP,xe.__webglTexture),ie(o.TEXTURE_CUBE_MAP,M.depthTexture);const tt=u.convert(M.depthTexture.format),be=u.convert(M.depthTexture.type);let Ee;M.depthTexture.format===_a?Ee=o.DEPTH_COMPONENT24:M.depthTexture.format===Cr&&(Ee=o.DEPTH24_STENCIL8);for(let ze=0;ze<6;ze++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ze,0,Ee,M.width,M.height,0,tt,be,null)}}else fe(M.depthTexture,0);const ce=xe.__webglTexture,Ze=k(M),Ce=he?o.TEXTURE_CUBE_MAP_POSITIVE_X+q:o.TEXTURE_2D,Xe=M.depthTexture.format===Cr?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(M.depthTexture.format===_a)jt(M)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Xe,Ce,ce,0,Ze):o.framebufferTexture2D(o.FRAMEBUFFER,Xe,Ce,ce,0);else if(M.depthTexture.format===Cr)jt(M)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Xe,Ce,ce,0,Ze):o.framebufferTexture2D(o.FRAMEBUFFER,Xe,Ce,ce,0);else throw new Error("Unknown depthTexture format")}function dt(D){const M=r.get(D),q=D.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==D.depthTexture){const he=D.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),he){const xe=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,he.removeEventListener("dispose",xe)};he.addEventListener("dispose",xe),M.__depthDisposeCallback=xe}M.__boundDepthTexture=he}if(D.depthTexture&&!M.__autoAllocateDepthBuffer)if(q)for(let he=0;he<6;he++)He(M.__webglFramebuffer[he],D,he);else{const he=D.texture.mipmaps;he&&he.length>0?He(M.__webglFramebuffer[0],D,0):He(M.__webglFramebuffer,D,0)}else if(q){M.__webglDepthbuffer=[];for(let he=0;he<6;he++)if(i.bindFramebuffer(o.FRAMEBUFFER,M.__webglFramebuffer[he]),M.__webglDepthbuffer[he]===void 0)M.__webglDepthbuffer[he]=o.createRenderbuffer(),ke(M.__webglDepthbuffer[he],D,!1);else{const xe=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ce=M.__webglDepthbuffer[he];o.bindRenderbuffer(o.RENDERBUFFER,ce),o.framebufferRenderbuffer(o.FRAMEBUFFER,xe,o.RENDERBUFFER,ce)}}else{const he=D.texture.mipmaps;if(he&&he.length>0?i.bindFramebuffer(o.FRAMEBUFFER,M.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=o.createRenderbuffer(),ke(M.__webglDepthbuffer,D,!1);else{const xe=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ce=M.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ce),o.framebufferRenderbuffer(o.FRAMEBUFFER,xe,o.RENDERBUFFER,ce)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Kt(D,M,q){const he=r.get(D);M!==void 0&&De(he.__webglFramebuffer,D,D.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),q!==void 0&&dt(D)}function gt(D){const M=D.texture,q=r.get(D),he=r.get(M);D.addEventListener("dispose",z);const xe=D.textures,ce=D.isWebGLCubeRenderTarget===!0,Ze=xe.length>1;if(Ze||(he.__webglTexture===void 0&&(he.__webglTexture=o.createTexture()),he.__version=M.version,d.memory.textures++),ce){q.__webglFramebuffer=[];for(let Ce=0;Ce<6;Ce++)if(M.mipmaps&&M.mipmaps.length>0){q.__webglFramebuffer[Ce]=[];for(let Xe=0;Xe<M.mipmaps.length;Xe++)q.__webglFramebuffer[Ce][Xe]=o.createFramebuffer()}else q.__webglFramebuffer[Ce]=o.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){q.__webglFramebuffer=[];for(let Ce=0;Ce<M.mipmaps.length;Ce++)q.__webglFramebuffer[Ce]=o.createFramebuffer()}else q.__webglFramebuffer=o.createFramebuffer();if(Ze)for(let Ce=0,Xe=xe.length;Ce<Xe;Ce++){const tt=r.get(xe[Ce]);tt.__webglTexture===void 0&&(tt.__webglTexture=o.createTexture(),d.memory.textures++)}if(D.samples>0&&jt(D)===!1){q.__webglMultisampledFramebuffer=o.createFramebuffer(),q.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let Ce=0;Ce<xe.length;Ce++){const Xe=xe[Ce];q.__webglColorRenderbuffer[Ce]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,q.__webglColorRenderbuffer[Ce]);const tt=u.convert(Xe.format,Xe.colorSpace),be=u.convert(Xe.type),Ee=O(Xe.internalFormat,tt,be,Xe.colorSpace,D.isXRRenderTarget===!0),ze=k(D);o.renderbufferStorageMultisample(o.RENDERBUFFER,ze,Ee,D.width,D.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ce,o.RENDERBUFFER,q.__webglColorRenderbuffer[Ce])}o.bindRenderbuffer(o.RENDERBUFFER,null),D.depthBuffer&&(q.__webglDepthRenderbuffer=o.createRenderbuffer(),ke(q.__webglDepthRenderbuffer,D,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ce){i.bindTexture(o.TEXTURE_CUBE_MAP,he.__webglTexture),ie(o.TEXTURE_CUBE_MAP,M);for(let Ce=0;Ce<6;Ce++)if(M.mipmaps&&M.mipmaps.length>0)for(let Xe=0;Xe<M.mipmaps.length;Xe++)De(q.__webglFramebuffer[Ce][Xe],D,M,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,Xe);else De(q.__webglFramebuffer[Ce],D,M,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0);y(M)&&_(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ze){for(let Ce=0,Xe=xe.length;Ce<Xe;Ce++){const tt=xe[Ce],be=r.get(tt);let Ee=o.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Ee=D.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ee,be.__webglTexture),ie(Ee,tt),De(q.__webglFramebuffer,D,tt,o.COLOR_ATTACHMENT0+Ce,Ee,0),y(tt)&&_(Ee)}i.unbindTexture()}else{let Ce=o.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Ce=D.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ce,he.__webglTexture),ie(Ce,M),M.mipmaps&&M.mipmaps.length>0)for(let Xe=0;Xe<M.mipmaps.length;Xe++)De(q.__webglFramebuffer[Xe],D,M,o.COLOR_ATTACHMENT0,Ce,Xe);else De(q.__webglFramebuffer,D,M,o.COLOR_ATTACHMENT0,Ce,0);y(M)&&_(Ce),i.unbindTexture()}D.depthBuffer&&dt(D)}function ht(D){const M=D.textures;for(let q=0,he=M.length;q<he;q++){const xe=M[q];if(y(xe)){const ce=L(D),Ze=r.get(xe).__webglTexture;i.bindTexture(ce,Ze),_(ce),i.unbindTexture()}}}const Ct=[],st=[];function Qt(D){if(D.samples>0){if(jt(D)===!1){const M=D.textures,q=D.width,he=D.height;let xe=o.COLOR_BUFFER_BIT;const ce=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ze=r.get(D),Ce=M.length>1;if(Ce)for(let tt=0;tt<M.length;tt++)i.bindFramebuffer(o.FRAMEBUFFER,Ze.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+tt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Ze.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+tt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Ze.__webglMultisampledFramebuffer);const Xe=D.texture.mipmaps;Xe&&Xe.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ze.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ze.__webglFramebuffer);for(let tt=0;tt<M.length;tt++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(xe|=o.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(xe|=o.STENCIL_BUFFER_BIT)),Ce){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Ze.__webglColorRenderbuffer[tt]);const be=r.get(M[tt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,be,0)}o.blitFramebuffer(0,0,q,he,0,0,q,he,xe,o.NEAREST),m===!0&&(Ct.length=0,st.length=0,Ct.push(o.COLOR_ATTACHMENT0+tt),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Ct.push(ce),st.push(ce),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,st)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Ct))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Ce)for(let tt=0;tt<M.length;tt++){i.bindFramebuffer(o.FRAMEBUFFER,Ze.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+tt,o.RENDERBUFFER,Ze.__webglColorRenderbuffer[tt]);const be=r.get(M[tt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Ze.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+tt,o.TEXTURE_2D,be,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ze.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&m){const M=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[M])}}}function k(D){return Math.min(l.maxSamples,D.samples)}function jt(D){const M=r.get(D);return D.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function yt(D){const M=d.render.frame;x.get(D)!==M&&(x.set(D,M),D.update())}function Lt(D,M){const q=D.colorSpace,he=D.format,xe=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||q!==Ns&&q!==Qa&&(bt.getTransfer(q)===It?(he!==Ri||xe!==ni)&&rt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):At("WebGLTextures: Unsupported texture color space:",q)),M}function je(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(p.width=D.naturalWidth||D.width,p.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(p.width=D.displayWidth,p.height=D.displayHeight):(p.width=D.width,p.height=D.height),p}this.allocateTextureUnit=se,this.resetTextureUnits=J,this.setTexture2D=fe,this.setTexture2DArray=B,this.setTexture3D=V,this.setTextureCube=re,this.rebindTextures=Kt,this.setupRenderTarget=gt,this.updateRenderTargetMipmap=ht,this.updateMultisampleRenderTarget=Qt,this.setupDepthRenderbuffer=dt,this.setupFrameBufferTexture=De,this.useMultisampledRTT=jt,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function M1(o,t){function i(r,l=Qa){let u;const d=bt.getTransfer(l);if(r===ni)return o.UNSIGNED_BYTE;if(r===Ah)return o.UNSIGNED_SHORT_4_4_4_4;if(r===Rh)return o.UNSIGNED_SHORT_5_5_5_1;if(r===Ov)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===Pv)return o.UNSIGNED_INT_10F_11F_11F_REV;if(r===Nv)return o.BYTE;if(r===Lv)return o.SHORT;if(r===Go)return o.UNSIGNED_SHORT;if(r===Th)return o.INT;if(r===Gi)return o.UNSIGNED_INT;if(r===Bi)return o.FLOAT;if(r===va)return o.HALF_FLOAT;if(r===Bv)return o.ALPHA;if(r===zv)return o.RGB;if(r===Ri)return o.RGBA;if(r===_a)return o.DEPTH_COMPONENT;if(r===Cr)return o.DEPTH_STENCIL;if(r===Fv)return o.RED;if(r===Ch)return o.RED_INTEGER;if(r===Us)return o.RG;if(r===wh)return o.RG_INTEGER;if(r===Dh)return o.RGBA_INTEGER;if(r===Rc||r===Cc||r===wc||r===Dc)if(d===It)if(u=t.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===Rc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Cc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===wc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Dc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=t.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===Rc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Cc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===wc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Dc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Gd||r===Vd||r===kd||r===Xd)if(u=t.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===Gd)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Vd)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===kd)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Xd)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Wd||r===qd||r===jd||r===Yd||r===Zd||r===Kd||r===Qd)if(u=t.get("WEBGL_compressed_texture_etc"),u!==null){if(r===Wd||r===qd)return d===It?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===jd)return d===It?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC;if(r===Yd)return u.COMPRESSED_R11_EAC;if(r===Zd)return u.COMPRESSED_SIGNED_R11_EAC;if(r===Kd)return u.COMPRESSED_RG11_EAC;if(r===Qd)return u.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Jd||r===$d||r===eh||r===th||r===nh||r===ih||r===ah||r===rh||r===sh||r===oh||r===lh||r===ch||r===uh||r===fh)if(u=t.get("WEBGL_compressed_texture_astc"),u!==null){if(r===Jd)return d===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===$d)return d===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===eh)return d===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===th)return d===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===nh)return d===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===ih)return d===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===ah)return d===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===rh)return d===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===sh)return d===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===oh)return d===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===lh)return d===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===ch)return d===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===uh)return d===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===fh)return d===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===dh||r===hh||r===ph)if(u=t.get("EXT_texture_compression_bptc"),u!==null){if(r===dh)return d===It?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===hh)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===ph)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===mh||r===gh||r===vh||r===_h)if(u=t.get("EXT_texture_compression_rgtc"),u!==null){if(r===mh)return u.COMPRESSED_RED_RGTC1_EXT;if(r===gh)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===vh)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===_h)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Vo?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const b1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,E1=`
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

}`;class T1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const r=new Kv(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,r=new ki({vertexShader:b1,fragmentShader:E1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new ii(new zc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class A1 extends Os{constructor(t,i){super();const r=this;let l=null,u=1,d=null,h="local-floor",m=1,p=null,x=null,v=null,S=null,b=null,R=null;const w=typeof XRWebGLBinding<"u",y=new T1,_={},L=i.getContextAttributes();let O=null,N=null;const F=[],H=[],z=new Nt;let K=null;const C=new ti;C.viewport=new en;const E=new ti;E.viewport=new en;const I=[C,E],J=new By;let se=null,pe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let ue=F[ne];return ue===void 0&&(ue=new xd,F[ne]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(ne){let ue=F[ne];return ue===void 0&&(ue=new xd,F[ne]=ue),ue.getGripSpace()},this.getHand=function(ne){let ue=F[ne];return ue===void 0&&(ue=new xd,F[ne]=ue),ue.getHandSpace()};function fe(ne){const ue=H.indexOf(ne.inputSource);if(ue===-1)return;const De=F[ue];De!==void 0&&(De.update(ne.inputSource,ne.frame,p||d),De.dispatchEvent({type:ne.type,data:ne.inputSource}))}function B(){l.removeEventListener("select",fe),l.removeEventListener("selectstart",fe),l.removeEventListener("selectend",fe),l.removeEventListener("squeeze",fe),l.removeEventListener("squeezestart",fe),l.removeEventListener("squeezeend",fe),l.removeEventListener("end",B),l.removeEventListener("inputsourceschange",V);for(let ne=0;ne<F.length;ne++){const ue=H[ne];ue!==null&&(H[ne]=null,F[ne].disconnect(ue))}se=null,pe=null,y.reset();for(const ne in _)delete _[ne];t.setRenderTarget(O),b=null,S=null,v=null,l=null,N=null,Ie.stop(),r.isPresenting=!1,t.setPixelRatio(K),t.setSize(z.width,z.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){u=ne,r.isPresenting===!0&&rt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){h=ne,r.isPresenting===!0&&rt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||d},this.setReferenceSpace=function(ne){p=ne},this.getBaseLayer=function(){return S!==null?S:b},this.getBinding=function(){return v===null&&w&&(v=new XRWebGLBinding(l,i)),v},this.getFrame=function(){return R},this.getSession=function(){return l},this.setSession=async function(ne){if(l=ne,l!==null){if(O=t.getRenderTarget(),l.addEventListener("select",fe),l.addEventListener("selectstart",fe),l.addEventListener("selectend",fe),l.addEventListener("squeeze",fe),l.addEventListener("squeezestart",fe),l.addEventListener("squeezeend",fe),l.addEventListener("end",B),l.addEventListener("inputsourceschange",V),L.xrCompatible!==!0&&await i.makeXRCompatible(),K=t.getPixelRatio(),t.getSize(z),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let De=null,ke=null,He=null;L.depth&&(He=L.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,De=L.stencil?Cr:_a,ke=L.stencil?Vo:Gi);const dt={colorFormat:i.RGBA8,depthFormat:He,scaleFactor:u};v=this.getBinding(),S=v.createProjectionLayer(dt),l.updateRenderState({layers:[S]}),t.setPixelRatio(1),t.setSize(S.textureWidth,S.textureHeight,!1),N=new Ii(S.textureWidth,S.textureHeight,{format:Ri,type:ni,depthTexture:new Xo(S.textureWidth,S.textureHeight,ke,void 0,void 0,void 0,void 0,void 0,void 0,De),stencilBuffer:L.stencil,colorSpace:t.outputColorSpace,samples:L.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}else{const De={antialias:L.antialias,alpha:!0,depth:L.depth,stencil:L.stencil,framebufferScaleFactor:u};b=new XRWebGLLayer(l,i,De),l.updateRenderState({baseLayer:b}),t.setPixelRatio(1),t.setSize(b.framebufferWidth,b.framebufferHeight,!1),N=new Ii(b.framebufferWidth,b.framebufferHeight,{format:Ri,type:ni,colorSpace:t.outputColorSpace,stencilBuffer:L.stencil,resolveDepthBuffer:b.ignoreDepthValues===!1,resolveStencilBuffer:b.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(m),p=null,d=await l.requestReferenceSpace(h),Ie.setContext(l),Ie.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function V(ne){for(let ue=0;ue<ne.removed.length;ue++){const De=ne.removed[ue],ke=H.indexOf(De);ke>=0&&(H[ke]=null,F[ke].disconnect(De))}for(let ue=0;ue<ne.added.length;ue++){const De=ne.added[ue];let ke=H.indexOf(De);if(ke===-1){for(let dt=0;dt<F.length;dt++)if(dt>=H.length){H.push(De),ke=dt;break}else if(H[dt]===null){H[dt]=De,ke=dt;break}if(ke===-1)break}const He=F[ke];He&&He.connect(De)}}const re=new ae,Me=new ae;function Se(ne,ue,De){re.setFromMatrixPosition(ue.matrixWorld),Me.setFromMatrixPosition(De.matrixWorld);const ke=re.distanceTo(Me),He=ue.projectionMatrix.elements,dt=De.projectionMatrix.elements,Kt=He[14]/(He[10]-1),gt=He[14]/(He[10]+1),ht=(He[9]+1)/He[5],Ct=(He[9]-1)/He[5],st=(He[8]-1)/He[0],Qt=(dt[8]+1)/dt[0],k=Kt*st,jt=Kt*Qt,yt=ke/(-st+Qt),Lt=yt*-st;if(ue.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(Lt),ne.translateZ(yt),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),He[10]===-1)ne.projectionMatrix.copy(ue.projectionMatrix),ne.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{const je=Kt+yt,D=gt+yt,M=k-Lt,q=jt+(ke-Lt),he=ht*gt/D*je,xe=Ct*gt/D*je;ne.projectionMatrix.makePerspective(M,q,he,xe,je,D),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function U(ne,ue){ue===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(ue.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(l===null)return;let ue=ne.near,De=ne.far;y.texture!==null&&(y.depthNear>0&&(ue=y.depthNear),y.depthFar>0&&(De=y.depthFar)),J.near=E.near=C.near=ue,J.far=E.far=C.far=De,(se!==J.near||pe!==J.far)&&(l.updateRenderState({depthNear:J.near,depthFar:J.far}),se=J.near,pe=J.far),J.layers.mask=ne.layers.mask|6,C.layers.mask=J.layers.mask&3,E.layers.mask=J.layers.mask&5;const ke=ne.parent,He=J.cameras;U(J,ke);for(let dt=0;dt<He.length;dt++)U(He[dt],ke);He.length===2?Se(J,C,E):J.projectionMatrix.copy(C.projectionMatrix),ie(ne,J,ke)};function ie(ne,ue,De){De===null?ne.matrix.copy(ue.matrixWorld):(ne.matrix.copy(De.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(ue.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(ue.projectionMatrix),ne.projectionMatrixInverse.copy(ue.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=xh*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return J},this.getFoveation=function(){if(!(S===null&&b===null))return m},this.setFoveation=function(ne){m=ne,S!==null&&(S.fixedFoveation=ne),b!==null&&b.fixedFoveation!==void 0&&(b.fixedFoveation=ne)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(J)},this.getCameraTexture=function(ne){return _[ne]};let ve=null;function Ae(ne,ue){if(x=ue.getViewerPose(p||d),R=ue,x!==null){const De=x.views;b!==null&&(t.setRenderTargetFramebuffer(N,b.framebuffer),t.setRenderTarget(N));let ke=!1;De.length!==J.cameras.length&&(J.cameras.length=0,ke=!0);for(let gt=0;gt<De.length;gt++){const ht=De[gt];let Ct=null;if(b!==null)Ct=b.getViewport(ht);else{const Qt=v.getViewSubImage(S,ht);Ct=Qt.viewport,gt===0&&(t.setRenderTargetTextures(N,Qt.colorTexture,Qt.depthStencilTexture),t.setRenderTarget(N))}let st=I[gt];st===void 0&&(st=new ti,st.layers.enable(gt),st.viewport=new en,I[gt]=st),st.matrix.fromArray(ht.transform.matrix),st.matrix.decompose(st.position,st.quaternion,st.scale),st.projectionMatrix.fromArray(ht.projectionMatrix),st.projectionMatrixInverse.copy(st.projectionMatrix).invert(),st.viewport.set(Ct.x,Ct.y,Ct.width,Ct.height),gt===0&&(J.matrix.copy(st.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale)),ke===!0&&J.cameras.push(st)}const He=l.enabledFeatures;if(He&&He.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&w){v=r.getBinding();const gt=v.getDepthInformation(De[0]);gt&&gt.isValid&&gt.texture&&y.init(gt,l.renderState)}if(He&&He.includes("camera-access")&&w){t.state.unbindTexture(),v=r.getBinding();for(let gt=0;gt<De.length;gt++){const ht=De[gt].camera;if(ht){let Ct=_[ht];Ct||(Ct=new Kv,_[ht]=Ct);const st=v.getCameraImage(ht);Ct.sourceTexture=st}}}}for(let De=0;De<F.length;De++){const ke=H[De],He=F[De];ke!==null&&He!==void 0&&He.update(ke,ue,p||d)}ve&&ve(ne,ue),ue.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ue}),R=null}const Ie=new $v;Ie.setAnimationLoop(Ae),this.setAnimationLoop=function(ne){ve=ne},this.dispose=function(){}}}const br=new Vi,R1=new tn;function C1(o,t){function i(y,_){y.matrixAutoUpdate===!0&&y.updateMatrix(),_.value.copy(y.matrix)}function r(y,_){_.color.getRGB(y.fogColor.value,qv(o)),_.isFog?(y.fogNear.value=_.near,y.fogFar.value=_.far):_.isFogExp2&&(y.fogDensity.value=_.density)}function l(y,_,L,O,N){_.isMeshBasicMaterial||_.isMeshLambertMaterial?u(y,_):_.isMeshToonMaterial?(u(y,_),v(y,_)):_.isMeshPhongMaterial?(u(y,_),x(y,_)):_.isMeshStandardMaterial?(u(y,_),S(y,_),_.isMeshPhysicalMaterial&&b(y,_,N)):_.isMeshMatcapMaterial?(u(y,_),R(y,_)):_.isMeshDepthMaterial?u(y,_):_.isMeshDistanceMaterial?(u(y,_),w(y,_)):_.isMeshNormalMaterial?u(y,_):_.isLineBasicMaterial?(d(y,_),_.isLineDashedMaterial&&h(y,_)):_.isPointsMaterial?m(y,_,L,O):_.isSpriteMaterial?p(y,_):_.isShadowMaterial?(y.color.value.copy(_.color),y.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function u(y,_){y.opacity.value=_.opacity,_.color&&y.diffuse.value.copy(_.color),_.emissive&&y.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(y.map.value=_.map,i(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.bumpMap&&(y.bumpMap.value=_.bumpMap,i(_.bumpMap,y.bumpMapTransform),y.bumpScale.value=_.bumpScale,_.side===Xn&&(y.bumpScale.value*=-1)),_.normalMap&&(y.normalMap.value=_.normalMap,i(_.normalMap,y.normalMapTransform),y.normalScale.value.copy(_.normalScale),_.side===Xn&&y.normalScale.value.negate()),_.displacementMap&&(y.displacementMap.value=_.displacementMap,i(_.displacementMap,y.displacementMapTransform),y.displacementScale.value=_.displacementScale,y.displacementBias.value=_.displacementBias),_.emissiveMap&&(y.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,y.emissiveMapTransform)),_.specularMap&&(y.specularMap.value=_.specularMap,i(_.specularMap,y.specularMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest);const L=t.get(_),O=L.envMap,N=L.envMapRotation;O&&(y.envMap.value=O,br.copy(N),br.x*=-1,br.y*=-1,br.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(br.y*=-1,br.z*=-1),y.envMapRotation.value.setFromMatrix4(R1.makeRotationFromEuler(br)),y.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=_.reflectivity,y.ior.value=_.ior,y.refractionRatio.value=_.refractionRatio),_.lightMap&&(y.lightMap.value=_.lightMap,y.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,y.lightMapTransform)),_.aoMap&&(y.aoMap.value=_.aoMap,y.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,y.aoMapTransform))}function d(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,_.map&&(y.map.value=_.map,i(_.map,y.mapTransform))}function h(y,_){y.dashSize.value=_.dashSize,y.totalSize.value=_.dashSize+_.gapSize,y.scale.value=_.scale}function m(y,_,L,O){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.size.value=_.size*L,y.scale.value=O*.5,_.map&&(y.map.value=_.map,i(_.map,y.uvTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function p(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.rotation.value=_.rotation,_.map&&(y.map.value=_.map,i(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function x(y,_){y.specular.value.copy(_.specular),y.shininess.value=Math.max(_.shininess,1e-4)}function v(y,_){_.gradientMap&&(y.gradientMap.value=_.gradientMap)}function S(y,_){y.metalness.value=_.metalness,_.metalnessMap&&(y.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,y.metalnessMapTransform)),y.roughness.value=_.roughness,_.roughnessMap&&(y.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,y.roughnessMapTransform)),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)}function b(y,_,L){y.ior.value=_.ior,_.sheen>0&&(y.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),y.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(y.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,y.sheenColorMapTransform)),_.sheenRoughnessMap&&(y.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,y.sheenRoughnessMapTransform))),_.clearcoat>0&&(y.clearcoat.value=_.clearcoat,y.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(y.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,y.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(y.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Xn&&y.clearcoatNormalScale.value.negate())),_.dispersion>0&&(y.dispersion.value=_.dispersion),_.iridescence>0&&(y.iridescence.value=_.iridescence,y.iridescenceIOR.value=_.iridescenceIOR,y.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(y.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,y.iridescenceMapTransform)),_.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),_.transmission>0&&(y.transmission.value=_.transmission,y.transmissionSamplerMap.value=L.texture,y.transmissionSamplerSize.value.set(L.width,L.height),_.transmissionMap&&(y.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,y.transmissionMapTransform)),y.thickness.value=_.thickness,_.thicknessMap&&(y.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=_.attenuationDistance,y.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(y.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(y.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=_.specularIntensity,y.specularColor.value.copy(_.specularColor),_.specularColorMap&&(y.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,y.specularColorMapTransform)),_.specularIntensityMap&&(y.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,y.specularIntensityMapTransform))}function R(y,_){_.matcap&&(y.matcap.value=_.matcap)}function w(y,_){const L=t.get(_).light;y.referencePosition.value.setFromMatrixPosition(L.matrixWorld),y.nearDistance.value=L.shadow.camera.near,y.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function w1(o,t,i,r){let l={},u={},d=[];const h=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(L,O){const N=O.program;r.uniformBlockBinding(L,N)}function p(L,O){let N=l[L.id];N===void 0&&(R(L),N=x(L),l[L.id]=N,L.addEventListener("dispose",y));const F=O.program;r.updateUBOMapping(L,F);const H=t.render.frame;u[L.id]!==H&&(S(L),u[L.id]=H)}function x(L){const O=v();L.__bindingPointIndex=O;const N=o.createBuffer(),F=L.__size,H=L.usage;return o.bindBuffer(o.UNIFORM_BUFFER,N),o.bufferData(o.UNIFORM_BUFFER,F,H),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,O,N),N}function v(){for(let L=0;L<h;L++)if(d.indexOf(L)===-1)return d.push(L),L;return At("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(L){const O=l[L.id],N=L.uniforms,F=L.__cache;o.bindBuffer(o.UNIFORM_BUFFER,O);for(let H=0,z=N.length;H<z;H++){const K=Array.isArray(N[H])?N[H]:[N[H]];for(let C=0,E=K.length;C<E;C++){const I=K[C];if(b(I,H,C,F)===!0){const J=I.__offset,se=Array.isArray(I.value)?I.value:[I.value];let pe=0;for(let fe=0;fe<se.length;fe++){const B=se[fe],V=w(B);typeof B=="number"||typeof B=="boolean"?(I.__data[0]=B,o.bufferSubData(o.UNIFORM_BUFFER,J+pe,I.__data)):B.isMatrix3?(I.__data[0]=B.elements[0],I.__data[1]=B.elements[1],I.__data[2]=B.elements[2],I.__data[3]=0,I.__data[4]=B.elements[3],I.__data[5]=B.elements[4],I.__data[6]=B.elements[5],I.__data[7]=0,I.__data[8]=B.elements[6],I.__data[9]=B.elements[7],I.__data[10]=B.elements[8],I.__data[11]=0):(B.toArray(I.__data,pe),pe+=V.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,J,I.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function b(L,O,N,F){const H=L.value,z=O+"_"+N;if(F[z]===void 0)return typeof H=="number"||typeof H=="boolean"?F[z]=H:F[z]=H.clone(),!0;{const K=F[z];if(typeof H=="number"||typeof H=="boolean"){if(K!==H)return F[z]=H,!0}else if(K.equals(H)===!1)return K.copy(H),!0}return!1}function R(L){const O=L.uniforms;let N=0;const F=16;for(let z=0,K=O.length;z<K;z++){const C=Array.isArray(O[z])?O[z]:[O[z]];for(let E=0,I=C.length;E<I;E++){const J=C[E],se=Array.isArray(J.value)?J.value:[J.value];for(let pe=0,fe=se.length;pe<fe;pe++){const B=se[pe],V=w(B),re=N%F,Me=re%V.boundary,Se=re+Me;N+=Me,Se!==0&&F-Se<V.storage&&(N+=F-Se),J.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=N,N+=V.storage}}}const H=N%F;return H>0&&(N+=F-H),L.__size=N,L.__cache={},this}function w(L){const O={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(O.boundary=4,O.storage=4):L.isVector2?(O.boundary=8,O.storage=8):L.isVector3||L.isColor?(O.boundary=16,O.storage=12):L.isVector4?(O.boundary=16,O.storage=16):L.isMatrix3?(O.boundary=48,O.storage=48):L.isMatrix4?(O.boundary=64,O.storage=64):L.isTexture?rt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):rt("WebGLRenderer: Unsupported uniform value type.",L),O}function y(L){const O=L.target;O.removeEventListener("dispose",y);const N=d.indexOf(O.__bindingPointIndex);d.splice(N,1),o.deleteBuffer(l[O.id]),delete l[O.id],delete u[O.id]}function _(){for(const L in l)o.deleteBuffer(l[L]);d=[],l={},u={}}return{bind:m,update:p,dispose:_}}const D1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Oi=null;function U1(){return Oi===null&&(Oi=new Ey(D1,16,16,Us,va),Oi.name="DFG_LUT",Oi.minFilter=Nn,Oi.magFilter=Nn,Oi.wrapS=pa,Oi.wrapT=pa,Oi.generateMipmaps=!1,Oi.needsUpdate=!0),Oi}class N1{constructor(t={}){const{canvas:i=KS(),context:r=null,depth:l=!0,stencil:u=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:S=!1,outputBufferType:b=ni}=t;this.isWebGLRenderer=!0;let R;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");R=r.getContextAttributes().alpha}else R=d;const w=b,y=new Set([Dh,wh,Ch]),_=new Set([ni,Gi,Go,Vo,Ah,Rh]),L=new Uint32Array(4),O=new Int32Array(4);let N=null,F=null;const H=[],z=[];let K=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Fi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let E=!1;this._outputColorSpace=gi;let I=0,J=0,se=null,pe=-1,fe=null;const B=new en,V=new en;let re=null;const Me=new Rt(0);let Se=0,U=i.width,ie=i.height,ve=1,Ae=null,Ie=null;const ne=new en(0,0,U,ie),ue=new en(0,0,U,ie);let De=!1;const ke=new Ph;let He=!1,dt=!1;const Kt=new tn,gt=new ae,ht=new en,Ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let st=!1;function Qt(){return se===null?ve:1}let k=r;function jt(A,j){return i.getContext(A,j)}try{const A={alpha:!0,depth:l,stencil:u,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:x,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${bh}`),i.addEventListener("webglcontextlost",nt,!1),i.addEventListener("webglcontextrestored",Pt,!1),i.addEventListener("webglcontextcreationerror",Mt,!1),k===null){const j="webgl2";if(k=jt(j,A),k===null)throw jt(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw At("WebGLRenderer: "+A.message),A}let yt,Lt,je,D,M,q,he,xe,ce,Ze,Ce,Xe,tt,be,Ee,ze,Pe,we,lt,W,Ne,Te,Be,ye;function _e(){yt=new UE(k),yt.init(),Te=new M1(k,yt),Lt=new ME(k,yt,t,Te),je=new S1(k,yt),Lt.reversedDepthBuffer&&S&&je.buffers.depth.setReversed(!0),D=new OE(k),M=new r1,q=new y1(k,yt,je,M,Lt,Te,D),he=new EE(C),xe=new DE(C),ce=new Fy(k),Be=new SE(k,ce),Ze=new NE(k,ce,D,Be),Ce=new BE(k,Ze,ce,D),lt=new PE(k,Lt,q),ze=new bE(M),Xe=new a1(C,he,xe,yt,Lt,Be,ze),tt=new C1(C,M),be=new o1,Ee=new h1(yt),we=new xE(C,he,xe,je,Ce,R,m),Pe=new _1(C,Ce,Lt),ye=new w1(k,D,Lt,je),W=new yE(k,yt,D),Ne=new LE(k,yt,D),D.programs=Xe.programs,C.capabilities=Lt,C.extensions=yt,C.properties=M,C.renderLists=be,C.shadowMap=Pe,C.state=je,C.info=D}_e(),w!==ni&&(K=new FE(w,i.width,i.height,l,u));const Re=new A1(C,k);this.xr=Re,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const A=yt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=yt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return ve},this.setPixelRatio=function(A){A!==void 0&&(ve=A,this.setSize(U,ie,!1))},this.getSize=function(A){return A.set(U,ie)},this.setSize=function(A,j,oe=!0){if(Re.isPresenting){rt("WebGLRenderer: Can't change size while VR device is presenting.");return}U=A,ie=j,i.width=Math.floor(A*ve),i.height=Math.floor(j*ve),oe===!0&&(i.style.width=A+"px",i.style.height=j+"px"),K!==null&&K.setSize(i.width,i.height),this.setViewport(0,0,A,j)},this.getDrawingBufferSize=function(A){return A.set(U*ve,ie*ve).floor()},this.setDrawingBufferSize=function(A,j,oe){U=A,ie=j,ve=oe,i.width=Math.floor(A*oe),i.height=Math.floor(j*oe),this.setViewport(0,0,A,j)},this.setEffects=function(A){if(w===ni){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let j=0;j<A.length;j++)if(A[j].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}K.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(B)},this.getViewport=function(A){return A.copy(ne)},this.setViewport=function(A,j,oe,ee){A.isVector4?ne.set(A.x,A.y,A.z,A.w):ne.set(A,j,oe,ee),je.viewport(B.copy(ne).multiplyScalar(ve).round())},this.getScissor=function(A){return A.copy(ue)},this.setScissor=function(A,j,oe,ee){A.isVector4?ue.set(A.x,A.y,A.z,A.w):ue.set(A,j,oe,ee),je.scissor(V.copy(ue).multiplyScalar(ve).round())},this.getScissorTest=function(){return De},this.setScissorTest=function(A){je.setScissorTest(De=A)},this.setOpaqueSort=function(A){Ae=A},this.setTransparentSort=function(A){Ie=A},this.getClearColor=function(A){return A.copy(we.getClearColor())},this.setClearColor=function(){we.setClearColor(...arguments)},this.getClearAlpha=function(){return we.getClearAlpha()},this.setClearAlpha=function(){we.setClearAlpha(...arguments)},this.clear=function(A=!0,j=!0,oe=!0){let ee=0;if(A){let Z=!1;if(se!==null){const Ue=se.texture.format;Z=y.has(Ue)}if(Z){const Ue=se.texture.type,Fe=_.has(Ue),Le=we.getClearColor(),Ge=we.getClearAlpha(),We=Le.r,Je=Le.g,qe=Le.b;Fe?(L[0]=We,L[1]=Je,L[2]=qe,L[3]=Ge,k.clearBufferuiv(k.COLOR,0,L)):(O[0]=We,O[1]=Je,O[2]=qe,O[3]=Ge,k.clearBufferiv(k.COLOR,0,O))}else ee|=k.COLOR_BUFFER_BIT}j&&(ee|=k.DEPTH_BUFFER_BIT),oe&&(ee|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",nt,!1),i.removeEventListener("webglcontextrestored",Pt,!1),i.removeEventListener("webglcontextcreationerror",Mt,!1),we.dispose(),be.dispose(),Ee.dispose(),M.dispose(),he.dispose(),xe.dispose(),Ce.dispose(),Be.dispose(),ye.dispose(),Xe.dispose(),Re.dispose(),Re.removeEventListener("sessionstart",Nr),Re.removeEventListener("sessionend",Fs),wi.stop()};function nt(A){A.preventDefault(),Og("WebGLRenderer: Context Lost."),E=!0}function Pt(){Og("WebGLRenderer: Context Restored."),E=!1;const A=D.autoReset,j=Pe.enabled,oe=Pe.autoUpdate,ee=Pe.needsUpdate,Z=Pe.type;_e(),D.autoReset=A,Pe.enabled=j,Pe.autoUpdate=oe,Pe.needsUpdate=ee,Pe.type=Z}function Mt(A){At("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Cn(A){const j=A.target;j.removeEventListener("dispose",Cn),vi(j)}function vi(A){Zo(A),M.remove(A)}function Zo(A){const j=M.get(A).programs;j!==void 0&&(j.forEach(function(oe){Xe.releaseProgram(oe)}),A.isShaderMaterial&&Xe.releaseShaderCache(A))}this.renderBufferDirect=function(A,j,oe,ee,Z,Ue){j===null&&(j=Ct);const Fe=Z.isMesh&&Z.matrixWorld.determinant()<0,Le=er(A,j,oe,ee,Z);je.setMaterial(ee,Fe);let Ge=oe.index,We=1;if(ee.wireframe===!0){if(Ge=Ze.getWireframeAttribute(oe),Ge===void 0)return;We=2}const Je=oe.drawRange,qe=oe.attributes.position;let $e=Je.start*We,wt=(Je.start+Je.count)*We;Ue!==null&&($e=Math.max($e,Ue.start*We),wt=Math.min(wt,(Ue.start+Ue.count)*We)),Ge!==null?($e=Math.max($e,0),wt=Math.min(wt,Ge.count)):qe!=null&&($e=Math.max($e,0),wt=Math.min(wt,qe.count));const Yt=wt-$e;if(Yt<0||Yt===1/0)return;Be.setup(Z,ee,Le,oe,Ge);let Xt,Ot=W;if(Ge!==null&&(Xt=ce.get(Ge),Ot=Ne,Ot.setIndex(Xt)),Z.isMesh)ee.wireframe===!0?(je.setLineWidth(ee.wireframeLinewidth*Qt()),Ot.setMode(k.LINES)):Ot.setMode(k.TRIANGLES);else if(Z.isLine){let Ke=ee.linewidth;Ke===void 0&&(Ke=1),je.setLineWidth(Ke*Qt()),Z.isLineSegments?Ot.setMode(k.LINES):Z.isLineLoop?Ot.setMode(k.LINE_LOOP):Ot.setMode(k.LINE_STRIP)}else Z.isPoints?Ot.setMode(k.POINTS):Z.isSprite&&Ot.setMode(k.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)ko("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ot.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(yt.get("WEBGL_multi_draw"))Ot.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const Ke=Z._multiDrawStarts,Dt=Z._multiDrawCounts,it=Z._multiDrawCount,_n=Ge?ce.get(Ge).bytesPerElement:1,Xi=M.get(ee).currentProgram.getUniforms();for(let xn=0;xn<it;xn++)Xi.setValue(k,"_gl_DrawID",xn),Ot.render(Ke[xn]/_n,Dt[xn])}else if(Z.isInstancedMesh)Ot.renderInstances($e,Yt,Z.count);else if(oe.isInstancedBufferGeometry){const Ke=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,Dt=Math.min(oe.instanceCount,Ke);Ot.renderInstances($e,Yt,Dt)}else Ot.render($e,Yt)};function Bs(A,j,oe){A.transparent===!0&&A.side===ha&&A.forceSinglePass===!1?(A.side=Xn,A.needsUpdate=!0,Or(A,j,oe),A.side=$a,A.needsUpdate=!0,Or(A,j,oe),A.side=ha):Or(A,j,oe)}this.compile=function(A,j,oe=null){oe===null&&(oe=A),F=Ee.get(oe),F.init(j),z.push(F),oe.traverseVisible(function(Z){Z.isLight&&Z.layers.test(j.layers)&&(F.pushLight(Z),Z.castShadow&&F.pushShadow(Z))}),A!==oe&&A.traverseVisible(function(Z){Z.isLight&&Z.layers.test(j.layers)&&(F.pushLight(Z),Z.castShadow&&F.pushShadow(Z))}),F.setupLights();const ee=new Set;return A.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const Ue=Z.material;if(Ue)if(Array.isArray(Ue))for(let Fe=0;Fe<Ue.length;Fe++){const Le=Ue[Fe];Bs(Le,oe,Z),ee.add(Le)}else Bs(Ue,oe,Z),ee.add(Ue)}),F=z.pop(),ee},this.compileAsync=function(A,j,oe=null){const ee=this.compile(A,j,oe);return new Promise(Z=>{function Ue(){if(ee.forEach(function(Fe){M.get(Fe).currentProgram.isReady()&&ee.delete(Fe)}),ee.size===0){Z(A);return}setTimeout(Ue,10)}yt.get("KHR_parallel_shader_compile")!==null?Ue():setTimeout(Ue,10)})};let Ur=null;function zs(A){Ur&&Ur(A)}function Nr(){wi.stop()}function Fs(){wi.start()}const wi=new $v;wi.setAnimationLoop(zs),typeof self<"u"&&wi.setContext(self),this.setAnimationLoop=function(A){Ur=A,Re.setAnimationLoop(A),A===null?wi.stop():wi.start()},Re.addEventListener("sessionstart",Nr),Re.addEventListener("sessionend",Fs),this.render=function(A,j){if(j!==void 0&&j.isCamera!==!0){At("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;const oe=Re.enabled===!0&&Re.isPresenting===!0,ee=K!==null&&(se===null||oe)&&K.begin(C,se);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),Re.enabled===!0&&Re.isPresenting===!0&&(K===null||K.isCompositing()===!1)&&(Re.cameraAutoUpdate===!0&&Re.updateCamera(j),j=Re.getCamera()),A.isScene===!0&&A.onBeforeRender(C,A,j,se),F=Ee.get(A,z.length),F.init(j),z.push(F),Kt.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),ke.setFromProjectionMatrix(Kt,zi,j.reversedDepth),dt=this.localClippingEnabled,He=ze.init(this.clippingPlanes,dt),N=be.get(A,H.length),N.init(),H.push(N),Re.enabled===!0&&Re.isPresenting===!0){const Fe=C.xr.getDepthSensingMesh();Fe!==null&&ai(Fe,j,-1/0,C.sortObjects)}ai(A,j,0,C.sortObjects),N.finish(),C.sortObjects===!0&&N.sort(Ae,Ie),st=Re.enabled===!1||Re.isPresenting===!1||Re.hasDepthSensing()===!1,st&&we.addToRenderList(N,A),this.info.render.frame++,He===!0&&ze.beginShadows();const Z=F.state.shadowsArray;if(Pe.render(Z,A,j),He===!0&&ze.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ee&&K.hasRenderPass())===!1){const Fe=N.opaque,Le=N.transmissive;if(F.setupLights(),j.isArrayCamera){const Ge=j.cameras;if(Le.length>0)for(let We=0,Je=Ge.length;We<Je;We++){const qe=Ge[We];vn(Fe,Le,A,qe)}st&&we.render(A);for(let We=0,Je=Ge.length;We<Je;We++){const qe=Ge[We];rn(N,A,qe,qe.viewport)}}else Le.length>0&&vn(Fe,Le,A,j),st&&we.render(A),rn(N,A,j)}se!==null&&J===0&&(q.updateMultisampleRenderTarget(se),q.updateRenderTargetMipmap(se)),ee&&K.end(C),A.isScene===!0&&A.onAfterRender(C,A,j),Be.resetDefaultState(),pe=-1,fe=null,z.pop(),z.length>0?(F=z[z.length-1],He===!0&&ze.setGlobalState(C.clippingPlanes,F.state.camera)):F=null,H.pop(),H.length>0?N=H[H.length-1]:N=null};function ai(A,j,oe,ee){if(A.visible===!1)return;if(A.layers.test(j.layers)){if(A.isGroup)oe=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(j);else if(A.isLight)F.pushLight(A),A.castShadow&&F.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||ke.intersectsSprite(A)){ee&&ht.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Kt);const Fe=Ce.update(A),Le=A.material;Le.visible&&N.push(A,Fe,Le,oe,ht.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||ke.intersectsObject(A))){const Fe=Ce.update(A),Le=A.material;if(ee&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),ht.copy(A.boundingSphere.center)):(Fe.boundingSphere===null&&Fe.computeBoundingSphere(),ht.copy(Fe.boundingSphere.center)),ht.applyMatrix4(A.matrixWorld).applyMatrix4(Kt)),Array.isArray(Le)){const Ge=Fe.groups;for(let We=0,Je=Ge.length;We<Je;We++){const qe=Ge[We],$e=Le[qe.materialIndex];$e&&$e.visible&&N.push(A,Fe,$e,oe,ht.z,qe)}}else Le.visible&&N.push(A,Fe,Le,oe,ht.z,null)}}const Ue=A.children;for(let Fe=0,Le=Ue.length;Fe<Le;Fe++)ai(Ue[Fe],j,oe,ee)}function rn(A,j,oe,ee){const{opaque:Z,transmissive:Ue,transparent:Fe}=A;F.setupLightsView(oe),He===!0&&ze.setGlobalState(C.clippingPlanes,oe),ee&&je.viewport(B.copy(ee)),Z.length>0&&_i(Z,j,oe),Ue.length>0&&_i(Ue,j,oe),Fe.length>0&&_i(Fe,j,oe),je.buffers.depth.setTest(!0),je.buffers.depth.setMask(!0),je.buffers.color.setMask(!0),je.setPolygonOffset(!1)}function vn(A,j,oe,ee){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;if(F.state.transmissionRenderTarget[ee.id]===void 0){const $e=yt.has("EXT_color_buffer_half_float")||yt.has("EXT_color_buffer_float");F.state.transmissionRenderTarget[ee.id]=new Ii(1,1,{generateMipmaps:!0,type:$e?va:ni,minFilter:Rr,samples:Lt.samples,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:bt.workingColorSpace})}const Ue=F.state.transmissionRenderTarget[ee.id],Fe=ee.viewport||B;Ue.setSize(Fe.z*C.transmissionResolutionScale,Fe.w*C.transmissionResolutionScale);const Le=C.getRenderTarget(),Ge=C.getActiveCubeFace(),We=C.getActiveMipmapLevel();C.setRenderTarget(Ue),C.getClearColor(Me),Se=C.getClearAlpha(),Se<1&&C.setClearColor(16777215,.5),C.clear(),st&&we.render(oe);const Je=C.toneMapping;C.toneMapping=Fi;const qe=ee.viewport;if(ee.viewport!==void 0&&(ee.viewport=void 0),F.setupLightsView(ee),He===!0&&ze.setGlobalState(C.clippingPlanes,ee),_i(A,oe,ee),q.updateMultisampleRenderTarget(Ue),q.updateRenderTargetMipmap(Ue),yt.has("WEBGL_multisampled_render_to_texture")===!1){let $e=!1;for(let wt=0,Yt=j.length;wt<Yt;wt++){const Xt=j[wt],{object:Ot,geometry:Ke,material:Dt,group:it}=Xt;if(Dt.side===ha&&Ot.layers.test(ee.layers)){const _n=Dt.side;Dt.side=Xn,Dt.needsUpdate=!0,Lr(Ot,oe,ee,Ke,Dt,it),Dt.side=_n,Dt.needsUpdate=!0,$e=!0}}$e===!0&&(q.updateMultisampleRenderTarget(Ue),q.updateRenderTargetMipmap(Ue))}C.setRenderTarget(Le,Ge,We),C.setClearColor(Me,Se),qe!==void 0&&(ee.viewport=qe),C.toneMapping=Je}function _i(A,j,oe){const ee=j.isScene===!0?j.overrideMaterial:null;for(let Z=0,Ue=A.length;Z<Ue;Z++){const Fe=A[Z],{object:Le,geometry:Ge,group:We}=Fe;let Je=Fe.material;Je.allowOverride===!0&&ee!==null&&(Je=ee),Le.layers.test(oe.layers)&&Lr(Le,j,oe,Ge,Je,We)}}function Lr(A,j,oe,ee,Z,Ue){A.onBeforeRender(C,j,oe,ee,Z,Ue),A.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Z.onBeforeRender(C,j,oe,ee,A,Ue),Z.transparent===!0&&Z.side===ha&&Z.forceSinglePass===!1?(Z.side=Xn,Z.needsUpdate=!0,C.renderBufferDirect(oe,j,ee,Z,A,Ue),Z.side=$a,Z.needsUpdate=!0,C.renderBufferDirect(oe,j,ee,Z,A,Ue),Z.side=ha):C.renderBufferDirect(oe,j,ee,Z,A,Ue),A.onAfterRender(C,j,oe,ee,Z,Ue)}function Or(A,j,oe){j.isScene!==!0&&(j=Ct);const ee=M.get(A),Z=F.state.lights,Ue=F.state.shadowsArray,Fe=Z.state.version,Le=Xe.getParameters(A,Z.state,Ue,j,oe),Ge=Xe.getProgramCacheKey(Le);let We=ee.programs;ee.environment=A.isMeshStandardMaterial?j.environment:null,ee.fog=j.fog,ee.envMap=(A.isMeshStandardMaterial?xe:he).get(A.envMap||ee.environment),ee.envMapRotation=ee.environment!==null&&A.envMap===null?j.environmentRotation:A.envMapRotation,We===void 0&&(A.addEventListener("dispose",Cn),We=new Map,ee.programs=We);let Je=We.get(Ge);if(Je!==void 0){if(ee.currentProgram===Je&&ee.lightsStateVersion===Fe)return Is(A,Le),Je}else Le.uniforms=Xe.getUniforms(A),A.onBeforeCompile(Le,C),Je=Xe.acquireProgram(Le,Ge),We.set(Ge,Je),ee.uniforms=Le.uniforms;const qe=ee.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(qe.clippingPlanes=ze.uniform),Is(A,Le),ee.needsLights=xa(A),ee.lightsStateVersion=Fe,ee.needsLights&&(qe.ambientLightColor.value=Z.state.ambient,qe.lightProbe.value=Z.state.probe,qe.directionalLights.value=Z.state.directional,qe.directionalLightShadows.value=Z.state.directionalShadow,qe.spotLights.value=Z.state.spot,qe.spotLightShadows.value=Z.state.spotShadow,qe.rectAreaLights.value=Z.state.rectArea,qe.ltc_1.value=Z.state.rectAreaLTC1,qe.ltc_2.value=Z.state.rectAreaLTC2,qe.pointLights.value=Z.state.point,qe.pointLightShadows.value=Z.state.pointShadow,qe.hemisphereLights.value=Z.state.hemi,qe.directionalShadowMap.value=Z.state.directionalShadowMap,qe.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,qe.spotShadowMap.value=Z.state.spotShadowMap,qe.spotLightMatrix.value=Z.state.spotLightMatrix,qe.spotLightMap.value=Z.state.spotLightMap,qe.pointShadowMap.value=Z.state.pointShadowMap,qe.pointShadowMatrix.value=Z.state.pointShadowMatrix),ee.currentProgram=Je,ee.uniformsList=null,Je}function Ko(A){if(A.uniformsList===null){const j=A.currentProgram.getUniforms();A.uniformsList=Uc.seqWithValue(j.seq,A.uniforms)}return A.uniformsList}function Is(A,j){const oe=M.get(A);oe.outputColorSpace=j.outputColorSpace,oe.batching=j.batching,oe.batchingColor=j.batchingColor,oe.instancing=j.instancing,oe.instancingColor=j.instancingColor,oe.instancingMorph=j.instancingMorph,oe.skinning=j.skinning,oe.morphTargets=j.morphTargets,oe.morphNormals=j.morphNormals,oe.morphColors=j.morphColors,oe.morphTargetsCount=j.morphTargetsCount,oe.numClippingPlanes=j.numClippingPlanes,oe.numIntersection=j.numClipIntersection,oe.vertexAlphas=j.vertexAlphas,oe.vertexTangents=j.vertexTangents,oe.toneMapping=j.toneMapping}function er(A,j,oe,ee,Z){j.isScene!==!0&&(j=Ct),q.resetTextureUnits();const Ue=j.fog,Fe=ee.isMeshStandardMaterial?j.environment:null,Le=se===null?C.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:Ns,Ge=(ee.isMeshStandardMaterial?xe:he).get(ee.envMap||Fe),We=ee.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,Je=!!oe.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),qe=!!oe.morphAttributes.position,$e=!!oe.morphAttributes.normal,wt=!!oe.morphAttributes.color;let Yt=Fi;ee.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(Yt=C.toneMapping);const Xt=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,Ot=Xt!==void 0?Xt.length:0,Ke=M.get(ee),Dt=F.state.lights;if(He===!0&&(dt===!0||A!==fe)){const yn=A===fe&&ee.id===pe;ze.setState(ee,A,yn)}let it=!1;ee.version===Ke.__version?(Ke.needsLights&&Ke.lightsStateVersion!==Dt.state.version||Ke.outputColorSpace!==Le||Z.isBatchedMesh&&Ke.batching===!1||!Z.isBatchedMesh&&Ke.batching===!0||Z.isBatchedMesh&&Ke.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&Ke.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&Ke.instancing===!1||!Z.isInstancedMesh&&Ke.instancing===!0||Z.isSkinnedMesh&&Ke.skinning===!1||!Z.isSkinnedMesh&&Ke.skinning===!0||Z.isInstancedMesh&&Ke.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Ke.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Ke.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Ke.instancingMorph===!1&&Z.morphTexture!==null||Ke.envMap!==Ge||ee.fog===!0&&Ke.fog!==Ue||Ke.numClippingPlanes!==void 0&&(Ke.numClippingPlanes!==ze.numPlanes||Ke.numIntersection!==ze.numIntersection)||Ke.vertexAlphas!==We||Ke.vertexTangents!==Je||Ke.morphTargets!==qe||Ke.morphNormals!==$e||Ke.morphColors!==wt||Ke.toneMapping!==Yt||Ke.morphTargetsCount!==Ot)&&(it=!0):(it=!0,Ke.__version=ee.version);let _n=Ke.currentProgram;it===!0&&(_n=Or(ee,j,Z));let Xi=!1,xn=!1,ri=!1;const Bt=_n.getUniforms(),Sn=Ke.uniforms;if(je.useProgram(_n.program)&&(Xi=!0,xn=!0,ri=!0),ee.id!==pe&&(pe=ee.id,xn=!0),Xi||fe!==A){je.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Bt.setValue(k,"projectionMatrix",A.projectionMatrix),Bt.setValue(k,"viewMatrix",A.matrixWorldInverse);const Mn=Bt.map.cameraPosition;Mn!==void 0&&Mn.setValue(k,gt.setFromMatrixPosition(A.matrixWorld)),Lt.logarithmicDepthBuffer&&Bt.setValue(k,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&Bt.setValue(k,"isOrthographic",A.isOrthographicCamera===!0),fe!==A&&(fe=A,xn=!0,ri=!0)}if(Ke.needsLights&&(Dt.state.directionalShadowMap.length>0&&Bt.setValue(k,"directionalShadowMap",Dt.state.directionalShadowMap,q),Dt.state.spotShadowMap.length>0&&Bt.setValue(k,"spotShadowMap",Dt.state.spotShadowMap,q),Dt.state.pointShadowMap.length>0&&Bt.setValue(k,"pointShadowMap",Dt.state.pointShadowMap,q)),Z.isSkinnedMesh){Bt.setOptional(k,Z,"bindMatrix"),Bt.setOptional(k,Z,"bindMatrixInverse");const yn=Z.skeleton;yn&&(yn.boneTexture===null&&yn.computeBoneTexture(),Bt.setValue(k,"boneTexture",yn.boneTexture,q))}Z.isBatchedMesh&&(Bt.setOptional(k,Z,"batchingTexture"),Bt.setValue(k,"batchingTexture",Z._matricesTexture,q),Bt.setOptional(k,Z,"batchingIdTexture"),Bt.setValue(k,"batchingIdTexture",Z._indirectTexture,q),Bt.setOptional(k,Z,"batchingColorTexture"),Z._colorsTexture!==null&&Bt.setValue(k,"batchingColorTexture",Z._colorsTexture,q));const fn=oe.morphAttributes;if((fn.position!==void 0||fn.normal!==void 0||fn.color!==void 0)&&lt.update(Z,oe,_n),(xn||Ke.receiveShadow!==Z.receiveShadow)&&(Ke.receiveShadow=Z.receiveShadow,Bt.setValue(k,"receiveShadow",Z.receiveShadow)),ee.isMeshGouraudMaterial&&ee.envMap!==null&&(Sn.envMap.value=Ge,Sn.flipEnvMap.value=Ge.isCubeTexture&&Ge.isRenderTargetTexture===!1?-1:1),ee.isMeshStandardMaterial&&ee.envMap===null&&j.environment!==null&&(Sn.envMapIntensity.value=j.environmentIntensity),Sn.dfgLUT!==void 0&&(Sn.dfgLUT.value=U1()),xn&&(Bt.setValue(k,"toneMappingExposure",C.toneMappingExposure),Ke.needsLights&&Hs(Sn,ri),Ue&&ee.fog===!0&&tt.refreshFogUniforms(Sn,Ue),tt.refreshMaterialUniforms(Sn,ee,ve,ie,F.state.transmissionRenderTarget[A.id]),Uc.upload(k,Ko(Ke),Sn,q)),ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(Uc.upload(k,Ko(Ke),Sn,q),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&Bt.setValue(k,"center",Z.center),Bt.setValue(k,"modelViewMatrix",Z.modelViewMatrix),Bt.setValue(k,"normalMatrix",Z.normalMatrix),Bt.setValue(k,"modelMatrix",Z.matrixWorld),ee.isShaderMaterial||ee.isRawShaderMaterial){const yn=ee.uniformsGroups;for(let Mn=0,Pr=yn.length;Mn<Pr;Mn++){const xi=yn[Mn];ye.update(xi,_n),ye.bind(xi,_n)}}return _n}function Hs(A,j){A.ambientLightColor.needsUpdate=j,A.lightProbe.needsUpdate=j,A.directionalLights.needsUpdate=j,A.directionalLightShadows.needsUpdate=j,A.pointLights.needsUpdate=j,A.pointLightShadows.needsUpdate=j,A.spotLights.needsUpdate=j,A.spotLightShadows.needsUpdate=j,A.rectAreaLights.needsUpdate=j,A.hemisphereLights.needsUpdate=j}function xa(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return J},this.getRenderTarget=function(){return se},this.setRenderTargetTextures=function(A,j,oe){const ee=M.get(A);ee.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,ee.__autoAllocateDepthBuffer===!1&&(ee.__useRenderToTexture=!1),M.get(A.texture).__webglTexture=j,M.get(A.depthTexture).__webglTexture=ee.__autoAllocateDepthBuffer?void 0:oe,ee.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,j){const oe=M.get(A);oe.__webglFramebuffer=j,oe.__useDefaultFramebuffer=j===void 0};const Sa=k.createFramebuffer();this.setRenderTarget=function(A,j=0,oe=0){se=A,I=j,J=oe;let ee=null,Z=!1,Ue=!1;if(A){const Le=M.get(A);if(Le.__useDefaultFramebuffer!==void 0){je.bindFramebuffer(k.FRAMEBUFFER,Le.__webglFramebuffer),B.copy(A.viewport),V.copy(A.scissor),re=A.scissorTest,je.viewport(B),je.scissor(V),je.setScissorTest(re),pe=-1;return}else if(Le.__webglFramebuffer===void 0)q.setupRenderTarget(A);else if(Le.__hasExternalTextures)q.rebindTextures(A,M.get(A.texture).__webglTexture,M.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Je=A.depthTexture;if(Le.__boundDepthTexture!==Je){if(Je!==null&&M.has(Je)&&(A.width!==Je.image.width||A.height!==Je.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");q.setupDepthRenderbuffer(A)}}const Ge=A.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(Ue=!0);const We=M.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(We[j])?ee=We[j][oe]:ee=We[j],Z=!0):A.samples>0&&q.useMultisampledRTT(A)===!1?ee=M.get(A).__webglMultisampledFramebuffer:Array.isArray(We)?ee=We[oe]:ee=We,B.copy(A.viewport),V.copy(A.scissor),re=A.scissorTest}else B.copy(ne).multiplyScalar(ve).floor(),V.copy(ue).multiplyScalar(ve).floor(),re=De;if(oe!==0&&(ee=Sa),je.bindFramebuffer(k.FRAMEBUFFER,ee)&&je.drawBuffers(A,ee),je.viewport(B),je.scissor(V),je.setScissorTest(re),Z){const Le=M.get(A.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+j,Le.__webglTexture,oe)}else if(Ue){const Le=j;for(let Ge=0;Ge<A.textures.length;Ge++){const We=M.get(A.textures[Ge]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+Ge,We.__webglTexture,oe,Le)}}else if(A!==null&&oe!==0){const Le=M.get(A.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Le.__webglTexture,oe)}pe=-1},this.readRenderTargetPixels=function(A,j,oe,ee,Z,Ue,Fe,Le=0){if(!(A&&A.isWebGLRenderTarget)){At("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=M.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Fe!==void 0&&(Ge=Ge[Fe]),Ge){je.bindFramebuffer(k.FRAMEBUFFER,Ge);try{const We=A.textures[Le],Je=We.format,qe=We.type;if(!Lt.textureFormatReadable(Je)){At("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Lt.textureTypeReadable(qe)){At("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=A.width-ee&&oe>=0&&oe<=A.height-Z&&(A.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Le),k.readPixels(j,oe,ee,Z,Te.convert(Je),Te.convert(qe),Ue))}finally{const We=se!==null?M.get(se).__webglFramebuffer:null;je.bindFramebuffer(k.FRAMEBUFFER,We)}}},this.readRenderTargetPixelsAsync=async function(A,j,oe,ee,Z,Ue,Fe,Le=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ge=M.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Fe!==void 0&&(Ge=Ge[Fe]),Ge)if(j>=0&&j<=A.width-ee&&oe>=0&&oe<=A.height-Z){je.bindFramebuffer(k.FRAMEBUFFER,Ge);const We=A.textures[Le],Je=We.format,qe=We.type;if(!Lt.textureFormatReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Lt.textureTypeReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const $e=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,$e),k.bufferData(k.PIXEL_PACK_BUFFER,Ue.byteLength,k.STREAM_READ),A.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Le),k.readPixels(j,oe,ee,Z,Te.convert(Je),Te.convert(qe),0);const wt=se!==null?M.get(se).__webglFramebuffer:null;je.bindFramebuffer(k.FRAMEBUFFER,wt);const Yt=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await QS(k,Yt,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,$e),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Ue),k.deleteBuffer($e),k.deleteSync(Yt),Ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,j=null,oe=0){const ee=Math.pow(2,-oe),Z=Math.floor(A.image.width*ee),Ue=Math.floor(A.image.height*ee),Fe=j!==null?j.x:0,Le=j!==null?j.y:0;q.setTexture2D(A,0),k.copyTexSubImage2D(k.TEXTURE_2D,oe,0,0,Fe,Le,Z,Ue),je.unbindTexture()};const tr=k.createFramebuffer(),ya=k.createFramebuffer();this.copyTextureToTexture=function(A,j,oe=null,ee=null,Z=0,Ue=null){Ue===null&&(Z!==0?(ko("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ue=Z,Z=0):Ue=0);let Fe,Le,Ge,We,Je,qe,$e,wt,Yt;const Xt=A.isCompressedTexture?A.mipmaps[Ue]:A.image;if(oe!==null)Fe=oe.max.x-oe.min.x,Le=oe.max.y-oe.min.y,Ge=oe.isBox3?oe.max.z-oe.min.z:1,We=oe.min.x,Je=oe.min.y,qe=oe.isBox3?oe.min.z:0;else{const fn=Math.pow(2,-Z);Fe=Math.floor(Xt.width*fn),Le=Math.floor(Xt.height*fn),A.isDataArrayTexture?Ge=Xt.depth:A.isData3DTexture?Ge=Math.floor(Xt.depth*fn):Ge=1,We=0,Je=0,qe=0}ee!==null?($e=ee.x,wt=ee.y,Yt=ee.z):($e=0,wt=0,Yt=0);const Ot=Te.convert(j.format),Ke=Te.convert(j.type);let Dt;j.isData3DTexture?(q.setTexture3D(j,0),Dt=k.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(q.setTexture2DArray(j,0),Dt=k.TEXTURE_2D_ARRAY):(q.setTexture2D(j,0),Dt=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,j.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,j.unpackAlignment);const it=k.getParameter(k.UNPACK_ROW_LENGTH),_n=k.getParameter(k.UNPACK_IMAGE_HEIGHT),Xi=k.getParameter(k.UNPACK_SKIP_PIXELS),xn=k.getParameter(k.UNPACK_SKIP_ROWS),ri=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,Xt.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Xt.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,We),k.pixelStorei(k.UNPACK_SKIP_ROWS,Je),k.pixelStorei(k.UNPACK_SKIP_IMAGES,qe);const Bt=A.isDataArrayTexture||A.isData3DTexture,Sn=j.isDataArrayTexture||j.isData3DTexture;if(A.isDepthTexture){const fn=M.get(A),yn=M.get(j),Mn=M.get(fn.__renderTarget),Pr=M.get(yn.__renderTarget);je.bindFramebuffer(k.READ_FRAMEBUFFER,Mn.__webglFramebuffer),je.bindFramebuffer(k.DRAW_FRAMEBUFFER,Pr.__webglFramebuffer);for(let xi=0;xi<Ge;xi++)Bt&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,M.get(A).__webglTexture,Z,qe+xi),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,M.get(j).__webglTexture,Ue,Yt+xi)),k.blitFramebuffer(We,Je,Fe,Le,$e,wt,Fe,Le,k.DEPTH_BUFFER_BIT,k.NEAREST);je.bindFramebuffer(k.READ_FRAMEBUFFER,null),je.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(Z!==0||A.isRenderTargetTexture||M.has(A)){const fn=M.get(A),yn=M.get(j);je.bindFramebuffer(k.READ_FRAMEBUFFER,tr),je.bindFramebuffer(k.DRAW_FRAMEBUFFER,ya);for(let Mn=0;Mn<Ge;Mn++)Bt?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,fn.__webglTexture,Z,qe+Mn):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,fn.__webglTexture,Z),Sn?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,yn.__webglTexture,Ue,Yt+Mn):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,yn.__webglTexture,Ue),Z!==0?k.blitFramebuffer(We,Je,Fe,Le,$e,wt,Fe,Le,k.COLOR_BUFFER_BIT,k.NEAREST):Sn?k.copyTexSubImage3D(Dt,Ue,$e,wt,Yt+Mn,We,Je,Fe,Le):k.copyTexSubImage2D(Dt,Ue,$e,wt,We,Je,Fe,Le);je.bindFramebuffer(k.READ_FRAMEBUFFER,null),je.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else Sn?A.isDataTexture||A.isData3DTexture?k.texSubImage3D(Dt,Ue,$e,wt,Yt,Fe,Le,Ge,Ot,Ke,Xt.data):j.isCompressedArrayTexture?k.compressedTexSubImage3D(Dt,Ue,$e,wt,Yt,Fe,Le,Ge,Ot,Xt.data):k.texSubImage3D(Dt,Ue,$e,wt,Yt,Fe,Le,Ge,Ot,Ke,Xt):A.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,Ue,$e,wt,Fe,Le,Ot,Ke,Xt.data):A.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,Ue,$e,wt,Xt.width,Xt.height,Ot,Xt.data):k.texSubImage2D(k.TEXTURE_2D,Ue,$e,wt,Fe,Le,Ot,Ke,Xt);k.pixelStorei(k.UNPACK_ROW_LENGTH,it),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,_n),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Xi),k.pixelStorei(k.UNPACK_SKIP_ROWS,xn),k.pixelStorei(k.UNPACK_SKIP_IMAGES,ri),Ue===0&&j.generateMipmaps&&k.generateMipmap(Dt),je.unbindTexture()},this.initRenderTarget=function(A){M.get(A).__webglFramebuffer===void 0&&q.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?q.setTextureCube(A,0):A.isData3DTexture?q.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?q.setTexture2DArray(A,0):q.setTexture2D(A,0),je.unbindTexture()},this.resetState=function(){I=0,J=0,se=null,je.reset(),Be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=bt._getDrawingBufferColorSpace(t),i.unpackColorSpace=bt._getUnpackColorSpace()}}const L1="data:image/webp;base64,UklGRhYzAABXRUJQVlA4IAozAAAwEgGdASqBAakBPm0ylUekIy4lJdRbGcANiWdu8YDE9o/G3hoXuo5Ost2I+/Xrvwt7E1JAlkj14+YB0FvMz50vp73mL0AOmlx/zs76Q/mfYD+dbM8JxzS9fPc7+z8ZRE89b4Z/wGvI+wewH+g/We7+X7T/wvYQ/n/+H63X72ezd+8BjitAUml40CzHc1C/XgORPA8LyP1tbAUml5Fn4zLeosRPQpTrenb83+KsDXXEAu4LckUpWGo+4Gg5SlsbL7K+JC84IDwytOJboUzg0qlUD8ziBurU6552jrTxWGT4YVwICRJZO+GPjmHv50ctNxec4yKH9tC9YmUFrcrg5WVkKiYx2ILa4fHVvDa11YoUwR7TxmY5lKGt45TESoIQ0fS8pg2R9MC1wT/CIS16JPCo96hWtcuBiCnB9O/s7ijB2uLoQmh5W463CW4zpz/W2wf3lkTH4lISbLVb9KmlrI0xd+cRnSkJJ95OgVV1cofF+glo7hxJ+W7HI+tfSc7YvZw49b0GE7Odgn9C57U5o3kkJj32xsY0WR1ban+N7OvyswlPsPs7b7aOVzQx2D3QwLCbqHcET1pt5uFF/+F/aXqkAUTAH1JWMkFgz9eLsnrYtHKLh9AWb+P6U1T6VaMlbFME2s2QS8pW5C4BW3Cx7BoY0MEORGdqprLoKr1b8ktlOkUHlEC/5gJJFBLXZUEHcI4t5Q5PP7yGR2dr+5fvPV4VB0iqMGicT6Y5ktAd8wdZhPZl6uBgr/PVv2JKzb3w3o56pw5wYQLp6ICxq35fAfPembtfcrnlgR+qwQkrikpA0zQU/Vi1jJz3W1fKLdfo5S2H6ZPspbnmJpNS5q0bO6lXhyws6ipSBSE6Al30bewqYuqolgMDLNwnFOOb+plpA5yiXoNU4bw5prpO3w+Qtt5ppzcvApON+ir3ENud3XcWcJIHy6Y7O+sk7WcazQEL67qNt11XwaUYaAuiWRab4AXBeUT/FB/GpIaC6ogIgdUFzmVbq/BiwEbZFVJW34RC4mT98/XBl4twzpre7c4gk6c60YfUV43GvUn6RggAY/j3s4/KrgPf+/77qjTN1ZnvbkfDELvZYH88IIOAYn39fKdVgcIucicYDZ+3HVphXgBw9ZIILMTV8a6P1p6R/1SnqGwcs2po25sS8q54pe3gS7nrGdmwKYvXmgzm4giOXG47iWwU4I8JI/zRNfi1qBYJNyfTJETmy9xPNyW2fRXpsMHlYFIVhr5NtNYa4X1pQTSW6DyYZa0Q7TyKCLyy9g0v/rI5Mj3xPevZ8D+zqVpUjhVaxWCnnVq8nYRZ68s1mmnA+DMcO0fkwP/ENzPbsp4EiC6Gkl6nV9eeh5itF9vj0J9Kol5Dg9T7C7jmcKuyRZO9p/pPOMIYikcnq5iNX0Y6Vu636mkvMUl0G9nz4U5MyCeOW60Ebfm6vNWcr5Nx8pxAzRbfTKHOhVyDm3MHzvAUougLMQ1KhpDUe4bpmW+r263U+tlvaiI6Fts/7C9EPaY0JUDAI41aWe9Q5JqFxAH5tF2oYbBgFmQAYjt7UEpYJDyj7bW+qNI/TVogC+zv4tRos6pQ8UVcz+WB9+IWjwjdAy4ESa8yxg50J3HFptQWauj7rMzNXEFMmkKiTZIgJkeZebXPKvzcYt7MYssHjTpFV4njKietLFJ03wq6btQU1ydmSv6OCeWH4y9Gtv1QwUcbnXvGuq1OkvkRj7S/+oTmYfrY+GbtsY4z2Zg0BEzQxMenmloIMPzR4zoQvw9Q2Qo1PSaWRQh7rX798MMoAvQrjjlINvm8KclVsydcn2h8t9/Fd2nBxFAgl4JNQBF8xoEGw6MiSuVvn00DSteySwD3xcyhROJjm2F5nEfQPljpBtnDKehGDqniL+rTC8p561RthmrXZxc0sZpHO4yC0y+PL21a4oltfgnaE7/bwGfDfrQR6PQgugcw6FVzrIStXFS2Owou4Rr0NhdaQOjsYb7u1shqMco2S/xS6nzL4f13OsS8dkjh3fd9IUXEdnPJRmHaey398gKKOmKInDUVZLU2g/Lr9ZRzaCo24UjFH1g8Kcl75FyoX6lHfinzBp01mTRgKmbiOqfeSa7k1ycJHOK2iwjU8sedvEGRXfqMWbqc8R1IM86d4Bomd94TeluW6N+qqvlM3aRBlvGF5JbJaJeyznh59iGsGGC27v1mQT5ZwakQOnxWelz44xd6kI/iN0uvXkm4W5+EJZC4Axc8z4IBBAC6VlCLmsmBp8QnLmWVlBIh95mx00dtwo9Qg/76+HSxUrGOjaE6BxZ2bLqnmTEKhxlsRXg+GKa+wg/lbsg1qOTqv+lYRDOajKenqHlfw9RsEMbz9IxajSkGAVbM7J17b8WkLN2Tcn9u9dM5sNw1Y1BXV9U+IS2UUlDaVRCZm5zeJ7BhUGW0EwbtfCMcNTxTkxXprDzXyl8wzWHkzjWZP7g/ExzTXcc9zhtDeYLhg3WK+n9SLERE0TU4oJwTZHnbByyLAaU78eC9farr0pb/IAYpvjtD6C2CydbuSJ5Fg9Jq9mAcm1pb9QFnRtua4fpxCYm1K6bRlAKoKCnqLfdoIOkAHn12LgLZ08Cf5sgajwupP3kItX7Zpw/8299Ufxu4kSRO7/BFiRFj9n2m/H3Vb03GgAFzHVcWm3GftJGznLt3f3jCgBZpcKvwcwO5Ap68VclFKCvGo0DJnuthobWegLjZs+j1RPu3nWuU8zODlaAeSo/pwiUCGG01Ty5qH9oNoxhpoTK2WnAR8qsbtJBoGfLG0olURAVVKOKkLZCB4iLkuWa9PhUqdUSBrPBDhac1UKKxI0QlGQj+7HdCBJ3VSuvC53rM9q4xyYHmjYR2epg8M2KwRFsX8maZK7CwbLAWfRYlDk7H9+i2oUNwRWkPqDVMgn1ipWNypfStm2LWXkXexq6gcoUpsGUbrAAA/unr/2TZ0c2971j3vJZrEST2lAGaS4ihEFzkzh7MzwwfmIUT4/9NO+urb6iQRON/pD6Qf0ZS4QT7EISrVTsarAKdEymKEv8f4x9OTZjl0YwmWEYAxiz7ecRSpeyREz9SdGmeF92RBi8l9RoXoLY8lbTB0iP0gUZzZvOZO1Z2WAPJAmrGQ8eKt73ctv46ro1b0lRwyna/PkCpeBXay7eRIgh+14TDDaaKaVk/grJHTiubc1BikrTs2aQEpKjaoVRmLb44Z8UxDw56tDVziHAVCZqHCgQCDRSWDFVTISXXUYWNAcTI+U3Ni2edTIqNVHq+ZtlbbeReWK+/GYyVxzi/tX7v+gLanx0s6JVx2D6djBdUYOf212/YB4tiwwte3165EsrS+9wQq/QceeCTzXm/7cLa8RVB2Zer4BSDc618SWcA0PpyHKYPNHde6ujptOdwBQxhBYhDcUiD3MnFZ8dmEazTkv9aS4jR6/QoxdK3dc+BUYfplXyZ13hZPFeA4063Sh00lxrpdtpfXGti5j6U4gdkH7CTXxYVofK7uyj0VvV+t61ee5s9Pq9iQaxDRTx4bOBo1u09ZXP2bdDSuV/G+LEgb/MYoS2NsRKzBKdB14PdDeG34Lc4vCq9BY3O9IXEiM7L6PwuyEP5ULpnY/kZGYgfNIqSSNxP5xn88wXbBD+Lvu5Q9oq9S6z+4egbNf8Kc4Zt215rkYLl0OxIL/eu7Q4EtiSalQFWBvbqAeA+7ungcQAY3Ol4qyg1EY//mRqeBrDjeF6akm/XwQXmcSLakVIME/XqZoG+iPm6gLtUCJBbKMVCe89g8hWw8JfSAhiLkyykwpLp47RDGzd29drfWDcy6knjXDFEQ0CVNqBuh+MlrLVilc5uuvww/e1IDfzfGJcFOGa1r1qAdLA4yz0yWzJ4I9UpWOeT10zxrA3ZBbnUG3Bu840OZ2lGg/S4hziUsu6WsWR7Ilm6gh+GneMYCD1MmQllslL6g/mbHbIQ14l8b95yRTVU9i5EFnN4UKlRnXjDyMQ+xos7Dwny8g92MZ9+vXGaZsC7by1RQ0JhzqIo4XK7BYJgiH0do7yMUALnm5gtjW+Wr1rJFLSbcME3y5vRwuaG9cnFD3jFHZ/Mh3QJW2LHwHsWT4vhXAx5MVQy8Y5rTdYCXkhxMO9TvnlFrdhMtRSfZNaRo5gAm12Kb+F7Mb/LJO79E3bkpMf1G9W6cPIOsd1CiynzcuaGemqVB5qcLqkvJ4OVKLKCBquPywIJ10QmqjT/aLBJRvND2Q3rHTOgha2P0UaTseAa1YNosAbs2U+qP1J1HU6SlSl42SYoGt5R4BNLQ+RJueqSp/YykZDHgpgoWyv9XilWjoH1BvgTR9pQhed8f+9W3fQQVB0ah9rYsVWGVMmNUWqdcLP5Fs7Vm5Z5qvlDmKG+1TzO0NFh6Nc1HNBflZSq3/L2KxQs6JDVufRxi8GWN/nVxy7+e+TBoKGhtYY4G1YB0iEbvhIEGvbnUgLnUTRxzOXxciodFTgJcgzJbOo8Y9FdsQlgWn4Nv3HGtdRuclauq38A0070bZd3dZNG69HPA1znNtBwdhw51IsG0cSFU1JX26bUuq3Ps69MMyZWLTo3JsDD0gx4TnOWoVGfsCiziRrkZVAu0DXrd2Jz0D6h011m7wRt5s4pQgnWuepPJu0gWm4qtmm5SUHh/7WO2vk6WO9F+tFrORtvzrsn7bYxKrLEZMcPUAWbLxt2/o5f8dRBy9BrCybesQtCa1vBf/IoKFoExURR88N7R/3m1JC5Igg37a+mD6nPkSpBkBshrrEtfNhXdfaZ1uvcG9xX8ktVQlNaPPFUEmRfzdSkHmP9fDyfGt9dl9PqN0Abv/jOR8eVxWS96FM67yojwReTjF43j8vptWBliu2VlWzaIkDc3Yyfa/abUXsIHU807mA8UIxk0iigq0d71miQMG/1bTnl67IlFVz1svC1TyuFE8eq6iV3AQelWKpPQYI0N6SvZ3eopGtINvWRZbJTfDXNtfXlMKu1R4vXrOGQK2CWg+37J/Ix9enz9IWhP04y1JBq+ap/BDLJT9COhIxgmSwfHakeSBcAD/VXcKspBIovplrw3q4CxxH/vi0ObUq2ENROfU0UMNdXipKtBniOBj//LswT2oRUvFFuB9UpEt1FHci3A9wOUuqx9e8Gj+4NATKAvFMd/Mle6JpJFsdFhRjvPLzfyrA0FFraqywNlKQfvl/T9KUG6dZssgkva9qLuNpTxFx7OPh830GPKhxnzuhpv7InD+zVYaVv3u95JuNZD+WykVRSSzmlu6rlWHfUh3OJnvuPD6vUv6o3ia3xADZ0MqDAvlVWcJp8YF66TAl3JaZDDVOms8puRtrItgvmC2ibugKAJ7gv/mxSk2WFho+ZT+77Sl1WY1fQECG0BMUjmCShG+rH9H53+Nm2ZQbwH1QOAdVxTylhvDEOMRRQvUWUet0NmMdTwZNCb1/BVTFXKkwYAj4PkurkHlM/lfu48ThB0B19g3hAlTiFOZRM7VoFlRwYk86mDoXi1kHsSi0ix6vwU5Z6IWidZGwz+3oWs46d8K6GDC128NPNjquWCL1id7ujzNhgxrRofqKDtq/GINlBummiRQuiFNQcKEmKFj7AJwHYHT1BPaBeta/2wEmXaZjH9hwkE3IhXdwj5AuySHP8YkGlyERdGsZ6ZJB5HJ9xa8sKNX8Xq0zDAqU9FiGInxmPqRtpfPuRJJqqZtHCGrwjlSIfJCrXIcTcoCgMNcEPxCU66u8rBQ1EFZiWCAJqU/s4pOiEY3DoGmszRMOaTmrYSXyNPlCLDnbPEXvhyuNMla6SarlXeynuyQeNfkFwpri6HDIDEFfmnwbesuRuiaunUzTWT7F7bM50quTUaAFpFJKt5pLBrcQbLAVL54ppkgaTsJBWl+1oM2bNqeRyKxGDn31x65i8RX8kTYWrCTAS/FufnpMIAyof8RGnCL+XIPG34X+7zLNprfhMfATDl+FsHyNTaUhJ8dHicmALMl/BM9R1uHSIropF4Wq76352TDlqA4kuni1Qg8zNWT6ldygm5ENuev07io0DFN2cPtOJ54LvwLJs0oRWABXtzrQFlahM+tWelrOOAm3weccvqeh0JOFdmowBdFkpYUYwlWmBxwbx6tZVKKeQVDPHCrPFXS89OgtRH+waHlJj4EjSioZafVBdFAwVOJ4E5MlWs6weQcKfBh0a7janwAz3l5gQ+IKz0eVdp1/be1lYIegGqyE3mSzERfFvgbIsCOZtj1ymY4Gzrw9Z9i2ZkM6X1eehA6nqoHpmSHLs8z7uw5iP+0MZNv41rvzHnkj8O0ia6rEFEIUcxZUzD+JOQXZGsgE5OYKcMshdt30TFqMSZT/mv+MWLmTZl/dUA+HHy7u/GrNE0QhFAapZI0Yjk65TFiqw5Kdx/Qv6I8rhpgF4rDhXq3bH5GaKFsWXomxmP3JPhQJCCYpnJeQMG9qTd+uoijsK+wv9CizZDyYGByo5NyvmK4NYdtbY7dsWLhFiw1w294JFEintbpAfV1uWqQD8w92Qc2s30pMGZEVOdRsnkpJ7ESL0CbnsmBfc2Tdv9ajv0v5mspt1m1CtmxIEGCstOiJI9dyDfIt6kkv52DE4hfh25lzP7ZldplRTUwuscDmqmfkBKWOZ7O9jCElqNU1ASlc69venoy7ZgcThu7J7k5lxoJEsg2QBE17rFWIJczqUEnTU/BvA6Xy8dC8TijyGofcxf/d4QCUsjyy4L3/PAcLq0xwKuXpQDXkec534XyJmvaxeXVX+n5KD+2qK89Dl/2tILg27+H5XH0jlES59cQthkBr52S169Sz/LHwdakYAle6oMeKLhqnp4k+wS8aSeYbTnrc3hA2JiqM85Ff840VZrmdftXxXGLuRRaw3hP5qCJRLbYC8/eanSRMNDZBZ6Sg7iM1bfSthXQwFIV1iBPVfeTVaUzHcw5+yg+wJcWFOMbdNviILPUlpu4kbWEyPtNyxtF76PuPTFcndNklS7gjNAnKLOykucQJdPOj2VaF4UFcs4wbdFM4u8t410ord3+KotTcePh2Ly5XKmJsDgSqS5djnqXbDJdmPG3LPYOCr/+qaIQhdrZi3UdkkXn/6ie03jXwLxl57xBijExAXOJd8tP4QMAuMuFoHro6eLGTIPUfVr5eiCRViAzHoiQMRKTwhf4BJTc/9TtFVWwnHGCkyioECmsxzdbQ300nqrNXklV5LppY3Q56EkT3OIH5TalWRS2TqI6etIk1M464HqSyiVWPMUJyC6HD//7fAsex4TwlhQ/nPXbaRJoHZqvymVdkhPyA9axchjd7a0C7j/f5T9POK3hcq8XsHxjVuKU4ZxK02OKtC/ZYaKi/pUsnA5PMA31aT0Mh94X4Z413V+/XJfXnp+SisdupArrWUI0NBquX8hCq082mN+udMzYr1rFccsMUl4yIvw+WzNvAOWhWzz1CbBf+tFdWU/FP8Kenp/G1w4Tm9hp4yKXEly0isVLDu8biG/cNCakpdOCrPNLE/3DM7JmWQcEtbVEiGy8PAzMUIqujQ4y1wzzSGFCB4EnG3n3t6mQZafj7lG4afPUR5hWkx54hkIvTKaQDGxKcBETqPsFNW2mnXPrnskocD6z7B2ERObQymlpDrm8K+aklTN0/448adv4tziYiOKftpznpsKrm/1rtJrPHGAEjYBziMI+L2bnVDn/uKD+E5j9eVJCzGuKLcJnRtv4WG6Oyl63PExreUN1IwiHKNiH2yDoHRdQpE5bphHlLc3WWQnOlfKApPz2nHQLmRuMvFiFEAGeSa8zGapXrSuMH2ZmV2wdpIcd0n8uJpM93G+cJky/huaxBJ6Rt7jjx1TLNHJgKozY4SNDxiKoUCyUf3u52Hu3QZRlGJH5iOjD9n3Mr5PZq6JokxI37+k57ORp3ACp2o2jJHY7QUI/jWV1Eoyod+3vRJ+mD5VfF01vSy0TUCwuoO1DrX0EO599BtN4OzfTv81Dt70NtYXEAlaPuBTkPJqs1ih3k+kPIuG7HNtim+CHmp0NOAZ3eiHTE/jWlsi1V25lF98EAoAjgOW4e5b6+WCV92v4dsNUrJuMf4uvAqV5eKPrsIKQVOzCcuXtSLsFphdP3yoXpnX2ZDORnYIBRoNr9HXqjj2dcfv4I5BcYZk3XjkPvc+UTrxgN5JqJ55WnJNSqU1d+CyFbU281of9BTSmovYypN5vRswcOfUS1j7vThwIWX6iXEKH1qV/RA5x5B8GERvCvpkKBZFa3rIPudaozRzmR8to3VhiaasJK8v1y5g4auwyQzU9cIQ8ZuYoKWvcw9sfuOTWWsmCEgF3VZWi62kvQUp4YQAMtDnC48fcEFK1UwGVixP/5SXBELO8SyFlYBS7tP1XGVLDVLGYb7eXA0R3c8GPwAhen2qvLDN22iNf6qrR5P4kSKUw5AlCqB4DxhuZFrnQ6SMc1NzEIwUpkGmNXxvevWcRcH7FwExSvo/W2vw2rRab3bOofaPUmamnxKXoUJ0LizXaEFea7VTPZMEzI+V9C3sdKV/ADYZb5GrOzguE/0Wa/XQd96ENPJOqCuYzcwobEQkgyLpM0xaaGFBByt1dh5RHeapgFRI6WU38gdn4ort3McT/0k8Fj/jhOZnikm9Cwwu7TPB8yVPQqgcDcK9hYX23/YB+mlE4seKchGpxCNh3Yi4FHoe0oNBnohmLL1I0lKkmbckp+aS7g7fuLoXpP+0smb2vuXpAU2CobkBzVClZSZtIKtAw1ikgwm/FqHFg8yiOROXXWW3x7sM8Y5okwLyC4LUfzDDhK6W+VASJicVEOMwCBmSgEFwizI0Rqct/WX429d3/yQv5vfGe3gB5h2NC/OZq31cRwt73TuUAGdOC/MsyELTBzcmAQzpPSraB7NJcaXWx7a3R/oDUgMOE7j2n2wyKTrz39vmVOUOtDxnpd0WgN+mcLmlutcKjiPbRECbUc1j0KceXKjNNd+c6VGKYSD31dsLZnXdMcmsEMOsN5LCfy7QNVH6QM1mlMI/zoO0muLiZrfpduaoLsJRDpAFjiRIQspLi5xAc6HXK9zzrrka6COekEk9teWdHxWbba10Un5hhUandZsY+r/BMFqOOT3x0kA7VW4ec3Wd3t9IjRgVnVQX6NkCZdMAoSrtvZbD6sroWEkfMwxHq238m2t4vmd0SDCeoh5Gm+HO+Tyv4/0TdnHaEOdjRvb4gXqv7lkd8sgHHN1QOAILD68txHUvPvT33PDA+wwcrNoFnCTtDsuetw9/N0ok+/TvHYsMUOxyqEBb69RKvEKvX2ErMyUhXxIb07hnxMEjSyVcLt5mjo1W2FZeZjqyw3daj1E+Ys64UfTUBJOLOFjJKfW5Mlg9rMSvidvrmrhKraQgLi8/Nbh8bq4QhHKu9HeTHv/Anygvs02USndZkCF80WQNdScakCLKOYfn3+lAkznTKkm0Cby0qb8rm/fkB/mWKAuQ9+sW2mmRlLfw3yFqRQHTvYQsd7bcAQAABQ72wDYzTW7bYVTmBYWvekQN9f+ay5shszr2TTm9SSN/Z6+ejCWV8Wf3S48eOnoX11RLaGjXUoM0gkV13+Tj/4mZgmODOTkopONlu/PfpdzJqHx/SxMLGGdrUg+I8pLEW4JwOiVR6KQ7/08dveQ2gJ+k7CK9OmlxPXCZZXleB5Fp2a/QiLoksj2zqD7hv+94T29DZxoJyT6gLP2xEMZNR8O7d3zMi0MLyEZ+lkjmW741J6kbqSTTe+JSVUpsywqGjCoA1Uina0R4slh+/JJ5a6MWp4Ny9OUJSDLN/I+aJmHRanUux9Rccq/RkSsdSe/b7gw1DW0y3qNpgWeq8hpH1chulnqk41KmRrW8iwcCFH2lJMLfdEjGuemIVc2wAQ4vtEg2L0Rqr6W94IDauIbgdL4Jnj9uDndl5Zt+DSEqlQkwYjbJD/tsgFJNvgKU/Ej/QxhLuvHtM6BnO33FOQA90mBQImOpCaRT7+6q7XdOJ81KvpR5oo7ZEkOu42Ffvh9NvDnWsZWNryOjQhEua0Z2r8mWPKqTazvHPPb0QXgoWRf3NbmFWQJ+KRAyVEDNIhJ5oaDrF6rYb9WaROrkDbDvG+PUYWLxzgcHuOqyjgp5VnrGUJb78CQKNK2tPhW+xRuIDD+AhWKLKSr77t+P51ohJ31kaFNsUIO8XigyD19caHGFr6j9v+ABTGp6Hp0vCnfiTu31xSI+ClM7D3vCoGWMjpKrzIZdMjCBheGiUE/y0BVJ4GTIfzQYdpPRxaqxIZeWzpPUfYiFdKPvPArFURffqwKEixuTpadpWseMs4CtIZ6Uq0PFre7rrBvF85neLyORTrC1m7aPXMd6853/ndvJkK+c9e6kssmaMQORB6XqMnBlmqzUFWIKwbYCisOtDnSkYpiKRW5G/gDIDamhSgwJsduwPZQwQyO2SfPRxLazLV2Uf7Z7yb41A4i2EIujX0fM5H69HSFUYDN3dRJEc22rzZext4Cxxwco5pwnfAc73kbAJai/QEUCzBqkxpNd4mu781ZSWiJ51vO2bLYnpiXmOrG7R2eHB0JEZqnUGYFcoj5iaUA2Lf6h9g+MB17Gw+BTyPZg/Y/f1bq9ytKpl4UXS6AVY6dsguXjBNFDmL1RCEinDxIkzT22IMXPKFBMdbBZUq+EKbJuPHcTwRKCfzE6eDX9bCdpdFM28Xn33amtkyONLMDFx+/TeVpaq5sNJ+mPEJv49NNiaPGnCO6iD5mFHtDQUNUC692iWchYizsVe/vhMeXDtkrnOZQBgpek69BL/B3qEcxpdl4h/nRJxcdOl95ZFm/we4bsJcvFi+fTxjzciSLtPmDxjU1KB4COaYnuANR2Lxjg/VbbpW6189WI1LWH6mf8NOKSBUcevJp0ZAt1+EeMWkEMsWmf7+E6TWn3EClNgyqXvztjhAfnbmascVTXvRVQ2c7l+VmbsGMlpODwZOUd/QwH3/xqdHInjxqz8GBKD6nwC2fe/1yM1hBZRet0x0Am97bbm7tWjZ4Ocv3RVDMQ9rfcm/hP8LNt3rbq1B14wcEgcpb5RnB3ovBdc80hgBN8ccB3wy2sVPvEoUntg2Ny5ycXA24iGM4VM8BQr7Nvwx5ZS/v/CQN7bBcS0yXzNHlFxNclBWy7bSA9ybe06M5kIDNKX3ZgyD4v4l1je1gVotNNFKtKXcpCIhdEJpUVuTmZSNyOo6PYQ+x7nR9tUcv8uIWJB/8d/Lx7qbxNmSFndHvvJjzQaOYw+eH91h5kOq6x/2Pj3p0JdLmita1VeF201SLHlU10UgxKr619eJ30sa/irTR6f5X2M+0elSyjyGMFpNg1U8auzDd25MopjrP7qFOXQpTqvD/F44mFoAvkHHie84JQGtUSXcxAQ7Dgz6R2KkuNzslJqdEH3tgm5XoGd8YPRLyAJjCiLKQa3TT7ItQeR4ZAil1eY6Sh1vjhbZAiZnDtxcTB8Y7MmLL4Ds7Xr89Who6ZeYIJ06M5IzWMwKQPZtAZ2pyfv2+4AJnyz+TbUnPt/r0PbgfSY1t/tnL1/mM0DeuHWXy7CeWik+JKJDBUxSWDFDWYaPmqRtRNQiAC39eVEe3kyjIPejz1LMAW0VxszC/T6ChaVXP8rS9zmobiZWwudbSj0FR+5hNZ36IjGxf+dhlFZsdSV3+wHW95Bb+qWWDRgok/omU8ju63bqZ9MCpNloTCBc75DU3FMJNKydXvxzxN0gxlcYhvs+Um17Ktjv5SOuiXQHP0WA9/TupxhPQfMuU4FoGqRBpKkJBKEPpYdrhkRJxxgbXIVthn6aJ5cB+b3biVg9IbUaYVUfKAP/pWTeenGvVNKNxM8tjAeRi6Z6u22qbgHcgKRwBtPGOGjo6dv2n5ugzXOm7S1DrLNq/ODW/Xv0cGgtFgPqX5ealrwKxyyVxg43QnsGr33HZtd3b7PqXsQVi6ApPCwW4ELzXym5AEw90kp+KF/JubTG5ELj6VlDO1kFO1AhkovTUV8zr16wfgiizeLYoSwhN/JvoX5YDqOXDY70eET79A141h4f6VcetFQbmKiTn2frJ4d2RmGpGBRou33Zv9T/61LQw/Q95PloI9fdjeHMy959ThhwcKXGSvzxKbYOaJpoqG6DUuIZKk0ABtLywk7GzrcVITiTAZvVipKWj0w2iqa4f8p9eDeqsZ5FAmtyXyScqfptl1Sg7M7BjQEAaVBZMCTeBPKO5fyYN4QFyCcLIaYAA8gQkTzS4kTD/KD/N2b0chVIoXmvKktKwE3qWr05YkJ0QCWQXQY5IHcj9BGoYfxvvncDWI2R5y70uhSgqzNSfZxzF8me7udAMZoqwmFmRVhMy7i7ZieNZGdRPYn+AlV5TAOj0jB7KpaxURpvGBAev53wenx9Kx1sFZweQ85+0m+9bWEH93m9xKtf+0lvCzTQWsEURbkTCME1QKX0D9WIe7iBOP1V0WQRpIbn+WnqWiV4gyagptHk8WMWURZSLtdHFIQu55q7vcnPh9r02db4Qa7NPlIPSUwxWs1cpRGnBKKBQVwhYXP7Rr8I/4SmxBDJsGctgSHvM1gyqghM8XTpkz2mTKnLvOPVvAfa8obKuyfbcfeErPN9QG/1XDb/GM4iBCKAo4Toa9JY4luZA74y82Cq9ig6hZyehA6i38O+E0m0T+AxXB5XsF8Bu1i/K4vwWxlU4sbdMht826XppXVOYuj+7Bk48iAIPF0/Trd3DDler+LUw3TPKifyl7n4Zr8ne3oYFMNZ/VLC+MF4Evh6tKo/pxYU71cTaKKbSJfhrh4FlPtkooFGeFhx3Ofl61Xq8Fn6inULtEVGQES6ibRV56nZAlY1KN3hf7yT2bdon6TjGFufg5Os06rGWwZkjM9iaHEbksd4KX2fsZFrv+yzHuL12aoXedZrMfv4I6TJmcr8tzO6bPQn/503crrx6QQ98+CFLV3F3Annc0OmlidEMM3K5gBQDTU85Oyw4UZJsaoZ89liNVQIKZQyPCwMx+q/qD0Bs9xUmp9CDw7unIzzXBRqA52GX8gtcg6iqnJgvbjCCc7Lxo8JgtBt917kgNKfQ/XXFPRiJFPuoWW335BbbpaQVdTiV15WYHT+rulDJJRHyqDG+IxeCNnVwdaGWoMsBZShIIgUAkShjU+Gue+/66WxPZtO518lO1aE9lkwpsXdnq5tHgn5BGW3Gj1p+Y/cKiWKaJayHvBwiySljfy1caSqs0OpUQYKaSHaDnz4E893e2E5vU9wtF81rDUjXGR6WQAmf/skSd3wYnrEWiy7xqnRFHQY+yM6wHI806DPjcCpAXk9Qj7e6WC/tOqAe2ZFoUXlEZp/utAI8zkuiBLX8SyFHr0mLsv1js2pQ6RrvXPihbXtPdCOFJsl6Cqc8yxUM9E8ci/nb5M3i1rPKD5mfCBucMQMoAthqwB2P9DGeIfZB2mQ+7DLSIFACOvHJPNcONXEm9ud/NELgdZ3kY1DxRMMcUsG8lPUHaoRuZQkIrKhoduw2TThQmZxHB/ugr1hNp9wP/XmM1jHGWsIMg4Gjbo7WIGCqTEwfUmHUBt2TP5OQTurpGrSGA7Xn94ogmy9hvWo/lo1kC/R/7zyU2SUHUmSA+x4WK23N2bGrfNQJxq9bkJhirtazwTO8mYrgZzPTual/EQyTzK1pdEFI92qRpGHhQXyJ86kxQIZ1Oag9AXDbWU8ydYsBkd0UY25WdvWkxdEh03aGAHOnxRrWjbSTohhKR+knyGnLYycqhYK8RLjlGY52bcaPCQjprVQk4n2l9Yj/4IkNy892T/ASnw/KuZV2kAzfZh7ZNeRnpLw7xxKNfxDLEjJ6+pysyWCtZVuElSYTJavOwVUBjjF389AEzTF6GH5YyWKrbk4ow/6hP2JNgSIhdRZgJU/sXTxOMBYnacig1dK027Tg/gUlEXSvs2ZB8fI0PN5yeq2bey68I0iA93de/I81fQyD9hd9tcEf7EUZ8dFQc1Wp9xng8p/hmXja9XDUMWJ0w8q34DoJAEQMAB7zlxToZAjhbO8lUZ6v8rfhUxhNA5tKO2N7LZh7uNALMHcUp3jvcPw820X+y5ZfHm7Jbwt2zab3mzCQXZZj21otIFiAJ+QxPnoaYkhscYN0s5zlX0W5Jay7uQiO8UP0G/i0Dc0ue5cl8ZDXBqnyTPFSC6kklnNClRA5wKsJUrWzqrTph0M4L7IJcK7hAnAIG3KdzbI7mIPcO8pkv5Thpd9U4VGlqSfH5FLV5Ggy/116LtOzliUrwwu0ghNJ9NuoUUmF/LPcYr86QflzFbY0CR/mN3YOZEwo/XG197Tux8XNWbDms5YjnLgsI46r7w67egFOKjlTY9WrfxzrNUC7myeCVkUssXsBTZ2ahfeOgCoVGsX92OMxo9sv7uqgJOduugYBNB3NiPCfGtpdWJtujmXmvQGIxtxzvrDM37qouWN5oq4zL1+gILi84ZjJDv0tQGSySzyFSFG2BvfzxXAFcsUYHNYll0MH5m8eWr8CjqkqAUHKpQeUMmxOSjTzVxy8qf+IDMj3sSZxPa7I9zw6vAGKFQZD3LSAga10SgPlObRdT9AaytK025UjntNitnZhrDsoCM+kgDOX8Yy/kWWZHKayJAmvOjnGIi2rHujm57VnA3ZcZnWtogXfOg8/KNw2yHf2vm51g+MvqNUoXrcwdG3B2bDzOc10Y2ZefeBxmHJG4z9FfNYv3jcZ17q1l6SRL3rEOw+30TfoxF9OAepgSXwD9j+4+peFxSgm+ri5iTqLyrBO+T4NPDGTTwyKpZxLs/QTofaz6clyy/M7ezIlnBfghh/6rFHeauN+YlK0m3PWOK2DANw+wZhXeDVs67OsZBND4G0uqVzXiiIaw7sdnycZsGCTJK0VkG3GLTTSjUGQuzprLye74qEWr8A1yHcUSj+Lymm7fgqincEcvVzMlPJdSbSMr7i+H1L0i4sSFowbrX/vcWaFvYEjs+v1vgd7vBFLfSvlOCEC9DaaUsKcSpSQCZPEBOtRjyFV0ZMNJnZEtfWmdViUwyRygzO5wnOl7+7oXnquWTy+NhFnWsWuXoblixoOSitxMeRMORmgRHQaSFoHfAXdwV6MC4Eow5ENgxs254QkFTwDLa4DGGOkN7kJkMLE3tm9+iua9XcxQu26gmC4zNVOYDjP2Adw8IqYPSrHzHtTRC8SFL1zjHvtbP/38yE1LYmi9CL0DqV3+PGBBOOLWYyKRN+FHFhHXgalvVo3mPq1UQvkAzj7agmZI4RaEuzBZtPcskCfTOipyUq+PL5OrueQHSkHypbLVKWabPnbupeYrLQ+sutB2IPtM3Z+uPRWjZ95RUfDJROWVjhnfa6zCfStWuWZC3M8MhzKXjXdGwA0rvyMvNCh045taHTYeONphB9jTX2/Xj+GV9BkA2FeonHdThJ6kuFd3vg9kXhP/tSwFBliXbtX6iTTzgIufUaSBCrOJNiDf662wqnWX3GrWVbfW0jnv58pWJ0cDMW2ZqRJhY4OGsKDOmi1VWBXQin+6dCliI3O+J1s8qT9F8NNHNuiYXUDAYocvu2ghe5+RT8E1FLCBD2oglN28pMf1CX0Ri1OhwUD88VBPUQ3W3iCBAgg/ggkD4ijdvweRD8oDvHRpz463p7P+1zc3NXlwUqbBYlTlientCiP9P7FK3rqnSsCLqgN1qT2aVXKtgbgVs1oauNfFbS+4LDe9iHtPfQYiNKv3ySZlV+JbRrKs/IvuG7Ur9LTLgrw1/4+0bk+RPT3LMoH5fB/Mji3MaKopdSJn7pndb8IXkqoELRQJlP/6CrLrcySgG8XJ0rGNmc4sa/SKUR3C+t2PmksK4Geb50xHoVoYISPLN0NE61mwb0s4awIrkaIMrWbCllYOb4tioKiS99ELzk4E+VQox46QA7zX1Hv4l++WXqXwXa4Gv2dTYcxWCuKVI6N5CBXqGy1uL45AzJTvYQrMZl06LApsh1bqQ1Fr76YxkqBQPAc9YxCf4A23OexbXXLkTNenADJqesfW6jPsAZzWmVPbihg3rzPmpaU2E5bfiZVs9bNZlHA3plMynUMpvIgKDPaQ4SuhbpiGRQVPN3OLJYiePVDw2Ze+P8ZxTnNmVpm9ls2fpHuMpPfdzdIwaTelzKiotVomHMkqITxQ7W3S1owdanTeM2ujyFerrldoCaa7LApAvO8THny9jZ8+Slna7kazgsjMQHyckGWUNuZBqjGgFgNtz6m5PC7I34KTN3Y2xAz+jrm1CtrYXVfDI117bvXzoSKUCpYmpSeSwQrIwfogIJG+1wig6fyBmHmNbShZCg0xsuMxYW/OJ7By58qMajJpKPSyab2LgY1XK1QQDYQKXeOQs6mRegrm3Ce/O+225cVyVhm2QVkRZ2m2zJkMHUM2uoBzHDGv8g0eSzwW61hVTdbtduYB5F399/Z4hVKh1LwdqSTsB4pzuUFgzGyG17E2VULDBnA1NWBlTMssJBGSsEoQeNoM7e/dgekS5ciFtO8x3/w6N5rKmZGlNUIVV4vf3mJpEyupeC5C9uTgrDE9D7HoBZSbeIOIqsuDPKgG2WDp7GjjSjgAaTmA5QJgzufrY8eyDST1EjwQU3X+IbUZrLk26H3bjym8wvFZUOWJuFwegg0hPL4Pr44b4PcBbZXMiTgFw67SZ9p4Y4q8QdeLMA6YWg71RiTdp1ONaOfXdyvpprYXkMiibgehTR4PpHafSL1bGS6UMUl5gqsbr1nP+e43pG/NxANZ8rJgOffOP2iC6APNbmd2RBv9r+859/P21ET72BzKWwqTOqdc+bitxLFoVPdrtjWitu8ONeGzcG3O3fEuLrszmFS59AH/u6Xse2MyPHXY07BdPSkh7Zinb1CoxCeRocbs4prJExYcbFRgQiSzr63w3UyjKQ4Ols1DHw6noXGuS57vc3jKwk7UZiKCr0V2X+uJ1M+espDFp2/U8HBFxcsWyB4x9DyKeHr8qu9D9zm43EQprpX05NdatZoMdtxJxp7MtG/rp7Q8dZRqIkV13n97EDl+/F1F4OPePP1zQmhSXBGPS6J2JlN6RZ2RYWVS88iSXH+lGCt/Y+D7COs0VaFg+CETnK8vjc75swSurKj26/86i6ENdHWVaG0cobKkS4XL4eMl0YrTLrDxrxgAh3GeOqc+z4teYLKgC6KCJTH7h4hzUk0NAAggBzOrAlIaaZ1fVBo84SUIdd4kM25epiqIPHuFMBUMJJsrp8sL0FgpPmTVA2Y0U/O0eCKhJ6C+ahLN3b6TtHgjNO7Udf4K0SpislqClJl0fciPoFJ9ir6m59fEkGBdMifXAGYQA51SV5wGLJPzWdRu6SgTccDkSXXnAIlTqV/i5F1l7Bl5Ufgd1xUMn1Sae20xD5JXiD9bFuxNrK+gpJqt4kf2mF6AHht3pTfp91TSxgujpl/vCirGIN/tpzM5CaJzaeFqMX6RAH5zAnBlPIoPPmdxxCv1MEXgJJgkLaQBP+IPiGVah3WY3a5jfLEjn2/oAAA",O1=()=>{const o=mi.useRef(null);return mi.useEffect(()=>{if(!o.current)return;const t=o.current,i=t.clientWidth,r=t.clientHeight,l=new by,u=new ti(50,i/r,.1,1e3);u.position.z=6;const d=new N1({antialias:!0,alpha:!0});d.setSize(i,r),d.setClearColor(0,0),t.appendChild(d.domElement);const h=new Dr(1,1,1),m=new Qg({color:7780608,emissive:7780608,emissiveIntensity:.3,shininess:100}),p=new ii(h,m);l.add(p);const x=new Dr(1.3,1.3,1.3),v=new Pc({color:7780608,wireframe:!0,transparent:!0,opacity:.4}),S=new ii(x,v);l.add(S);const b=new Io;l.add(b);const R=[7780608,54442,16739179,5164484,10181046],w=new Bh(.3,32,32),y=[];R.forEach((K,C)=>{const E=new Qg({color:K,emissive:K,emissiveIntensity:.2,shininess:100}),I=new ii(w,E),J=C/5*Math.PI*2;I.position.x=Math.cos(J)*2.2,I.position.z=Math.sin(J)*2.2,I.userData={angle:J,baseY:0},b.add(I),y.push(I)});const _=new zh(2.2,.02,16,100),L=new Pc({color:7780608,transparent:!0,opacity:.3}),O=new ii(_,L);O.rotation.x=Math.PI/2,l.add(O);const N=new Py(16777215,.4);l.add(N);const F=new Oy(16777215,1,100);F.position.set(5,5,5),l.add(F);let H;const z=()=>{H=requestAnimationFrame(z),p.rotation.x+=.005,p.rotation.y+=.01,S.rotation.x-=.003,S.rotation.y-=.007,b.rotation.y+=.008,y.forEach((K,C)=>{K.position.y=Math.sin(Date.now()*.002+C)*.3}),d.render(l,u)};return z(),()=>{cancelAnimationFrame(H),t.removeChild(d.domElement),d.dispose()}},[]),P.jsx("div",{ref:o,className:"w-48 h-48 mx-auto"})};function P1(){const[o,t]=mi.useState("home"),[i,r]=mi.useState(null),[l,u]=mi.useState(null),[d,h]=mi.useState("leistung"),[m,p]=mi.useState(!1),[x,v]=mi.useState(!1);mi.useEffect(()=>{const E=()=>v(window.scrollY>50);return window.addEventListener("scroll",E),()=>window.removeEventListener("scroll",E)},[]),mi.useEffect(()=>{const E=I=>{m&&!I.target.closest("nav")&&p(!1)};return document.addEventListener("click",E),()=>document.removeEventListener("click",E)},[m]),mi.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[o]);const S=[{id:"tech",name:"Technologisch",icon:"T",color:"#76B900",beispiel:"AI-Boom & GPU-Revolution",details:"Umsatzwachstum von $26 Mrd. (2023) auf $130.5 Mrd. (2025) – 114% Wachstum durch explodierende Nachfrage nach Data Center GPUs für KI-Training.",stat:"+114%",statLabel:"Umsatzwachstum"},{id:"oeko",name:"Ökonomisch",icon:"Ö",color:"#00D4AA",beispiel:"Börsen-Rekorde",details:"Erste Firma weltweit mit über $4 Trillion Marktkapitalisierung. 10:1 Aktiensplit im Juni 2024 machte Aktien zugänglicher.",stat:"$4T+",statLabel:"Marktwert"},{id:"recht",name:"Rechtlich",icon:"R",color:"#FF6B6B",beispiel:"US-China Exportrestriktionen",details:"H100/A100 Chips für China verboten. $5.5 Mrd. Verlust durch H20-Exportbeschränkungen (April 2025). Spezielle China-Chips entwickelt.",stat:"-$5.5B",statLabel:"Umsatzverlust"},{id:"umwelt",name:"Ökologisch",icon:"U",color:"#4ECDC4",beispiel:"Energieverbrauch & Nachhaltigkeit",details:"100% erneuerbare Energie seit 2025 erreicht. Blackwell-Chips sind 25x energieeffizienter als Vorgänger. Liquid Cooling in Rechenzentren.",stat:"100%",statLabel:"Erneuerbare Energie"},{id:"sozial",name:"Sozial",icon:"S",color:"#9B59B6",beispiel:"Fachkräfte & Arbeitskultur",details:"Top-5 Arbeitgeber (Fortune 100 Best Companies 2025). 1/5 der Mitarbeiter sind über 10 Jahre dabei. Flexible Arbeitszeiten und Weiterbildung.",stat:"Top 5",statLabel:"Arbeitgeber-Ranking"}],b=[{id:"kunden",name:"Kunden",icon:"K",beispiel:"Microsoft kaufte 485'000 H100-Chips (2024)",anspruch:"Leistungsfähige, verfügbare GPUs für AI-Training und Inferenz"},{id:"aktionaere",name:"Aktionäre",icon:"A",beispiel:"Vanguard Group (8.9%), BlackRock (7.8%)",anspruch:"Rendite, Dividenden (+150% Erhöhung 2024), Kurssteigerung"},{id:"mitarbeiter",name:"Mitarbeiter",icon:"M",beispiel:"30'000+ Angestellte weltweit",anspruch:"Faire Löhne, Weiterbildung, flexible Arbeitszeiten"},{id:"lieferanten",name:"Lieferanten",icon:"L",beispiel:"TSMC (Taiwan) produziert alle Chips",anspruch:"Langfristige Aufträge, planbare Produktion, faire Preise"},{id:"staat",name:"Staat",icon:"St",beispiel:"US Commerce Department",anspruch:"Einhaltung Exportgesetze, Steuern, nationale Sicherheit"},{id:"konkurrenz",name:"Konkurrenz",icon:"Ko",beispiel:"AMD, Intel, Huawei (China)",anspruch:"Fairer Wettbewerb, Einhaltung von Marktregeln"},{id:"gesellschaft",name:"Gesellschaft",icon:"G",beispiel:"Umweltorganisationen, Öffentlichkeit",anspruch:"Nachhaltigkeit, verantwortungsvolle AI-Entwicklung"}],R=[{name:"Innovation",icon:"01",desc:"Ständige technologische Durchbrüche von GPU-Entwicklung bis AI-Computing"},{name:"Excellence",icon:"02",desc:"Höchste Standards bei Produktqualität, Forschung und Kundenservice"},{name:"Speed/Agility",icon:"03",desc:"Schnelle, entschlossene Reaktion auf Markttrends und Kundenbedürfnisse"},{name:"Transparency",icon:"04",desc:"Offene Kommunikation und konstruktives Feedback für Vertrauen und Zuverlässigkeit"}],w=[{typ:"konflikt",label:"Zielkonflikt",color:"#FF6B6B",icon:"✕",items:[{title:"Aktionäre vs. China-Kunden",desc:"Aktionäre wollen maximalen Umsatz – US-Exportverbote reduzieren Umsatz um $5.5 Mrd."},{title:"Umwelt vs. Wachstum",desc:"Mehr GPUs = mehr Stromverbrauch. AI könnte bis 2030 3.5% des Weltstroms verbrauchen."}]},{typ:"harmonie",label:"Zielharmonie",color:"#76B900",icon:"=",items:[{title:"Kunden + Aktionäre",desc:"Hohe Nachfrage nach AI-Chips führt zu zufriedenen Kunden UND steigenden Aktienkursen."}]},{typ:"neutral",label:"Zielneutralität",color:"#888",icon:"–",items:[{title:"Mitarbeiter + Lieferanten",desc:"Mitarbeiter-Weiterbildung hat keinen direkten Einfluss auf TSMC-Lieferbeziehung."}]}],y={leistung:{title:"Leistungswirtschaftliches Konzept",icon:"L",ziele:["Marktführer AI-GPUs mit 90% Marktanteil","Expansion Data Center & Automotive","8-10 Mio. GPUs pro Jahr produzieren"],mittel:["GPU-Architekturen: Blackwell, Hopper, Ada Lovelace","CUDA Software-Plattform (Ökosystem-Lock-in)","30'000+ hochqualifizierte Mitarbeiter"],verfahren:["Fabless-Modell: Design in-house, Produktion bei TSMC","Vertrieb über Cloud-Provider (AWS, Azure, Google)","Direktverkauf an Unternehmen und Forschung"]},finanzen:{title:"Finanzwirtschaftliches Konzept",icon:"F",ziele:["$130+ Mrd. Jahresumsatz","75% Bruttomarge halten","Eigenkapitalrendite >30%"],mittel:["Hoher Eigenkapitalanteil","$33.7 Mrd. für Aktienrückkäufe (2025)","Starker operativer Cashflow"],verfahren:["Reinvestition in R&D ($8 Mrd./Jahr)","Dividenden + Buybacks für Aktionäre","Strategische Akquisitionen (z.B. Mellanox)"]},soziales:{title:"Sozialwirtschaftliches Konzept",icon:"S",ziele:["Top-5 Arbeitgeber weltweit bleiben","100% erneuerbare Energie","Verantwortungsvolle AI-Entwicklung"],mittel:["Weiterbildungsbudget für alle Mitarbeiter","Nachhaltigkeitsteam & ESG-Reporting","NVIDIA Foundation (>$12 Mrd.)"],verfahren:["Flexible Arbeitszeiten, Remote-Work","Scope 1+2 Net-Zero erreicht","Partnerschaften mit Universitäten"]}},_=({id:E,label:I})=>P.jsxs("button",{onClick:()=>t(E),className:`px-4 py-2 text-sm font-medium transition-all duration-300 relative
        ${o===E?"text-white":"text-gray-400 hover:text-white"}`,children:[I,o===E&&P.jsx("div",{className:"absolute bottom-0 left-0 right-0 h-0.5 bg-green-500",style:{backgroundColor:"#76B900"}})]}),L=()=>P.jsxs("section",{className:"relative min-h-screen flex items-center justify-center overflow-hidden",children:[P.jsxs("div",{className:"absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black",children:[P.jsx("div",{className:"absolute inset-0 opacity-30",children:[...Array(50)].map((E,I)=>P.jsx("div",{className:"absolute rounded-full bg-green-500",style:{width:Math.random()*4+1+"px",height:Math.random()*4+1+"px",left:Math.random()*100+"%",top:Math.random()*100+"%",animation:`pulse ${Math.random()*3+2}s infinite`,animationDelay:Math.random()*2+"s",backgroundColor:"#76B900"}},I))}),P.jsx("div",{className:"absolute inset-0 opacity-10",style:{backgroundImage:"linear-gradient(#76B900 1px, transparent 1px), linear-gradient(90deg, #76B900 1px, transparent 1px)",backgroundSize:"50px 50px"}})]}),P.jsxs("div",{className:"relative z-10 text-center px-6 max-w-6xl mx-auto",children:[P.jsx("div",{className:"mb-6",children:P.jsx("h1",{className:"text-7xl md:text-9xl font-black tracking-tight",style:{color:"#76B900",textShadow:"0 0 40px rgba(118, 185, 0, 0.5), 0 0 80px rgba(118, 185, 0, 0.3)"},children:"NVIDIA"})}),P.jsx("h2",{className:"text-3xl md:text-5xl font-bold mb-6",children:P.jsx("span",{style:{color:"#76B900"},children:"Unternehmensmodell"})}),P.jsx("p",{className:"text-xl md:text-2xl text-gray-300 mb-4 font-light",children:'"Bring superhuman capabilities to every human, in every industry"'}),P.jsx("p",{className:"text-lg text-gray-500 mb-12 italic",children:"– Jensen Huang, CEO & Gründer"}),P.jsx("div",{className:"flex flex-wrap justify-center gap-8 mb-12",children:[{value:"$130.5B",label:"Umsatz 2025"},{value:"90%",label:"AI-GPU Marktanteil"},{value:"$4T+",label:"Marktwert"},{value:"30'000+",label:"Mitarbeiter"}].map((E,I)=>P.jsxs("div",{className:`text-center px-6 py-4 bg-white/5 rounded-xl backdrop-blur-sm
                                    border border-white/10 hover:border-green-500/50 transition-all duration-300`,style:{"--hover-border":"#76B900"},children:[P.jsx("div",{className:"text-3xl font-bold mb-1",style:{color:"#76B900"},children:E.value}),P.jsx("div",{className:"text-sm text-gray-400",children:E.label})]},I))}),P.jsx("button",{onClick:()=>t("unternehmen"),className:`px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300
                     hover:scale-105 hover:shadow-2xl`,style:{backgroundColor:"#76B900",boxShadow:"0 0 30px rgba(118, 185, 0, 0.3)"},children:"Mehr erfahren"})]})]}),O=()=>P.jsx("section",{className:"min-h-screen py-20 px-6 bg-gradient-to-b from-black to-gray-900",children:P.jsxs("div",{className:"max-w-7xl mx-auto",children:[P.jsxs("h2",{className:"text-4xl md:text-5xl font-bold text-center mb-4",children:["Das ",P.jsx("span",{style:{color:"#76B900"},children:"Unternehmen"})]}),P.jsx("p",{className:"text-gray-400 text-center mb-16 text-lg",children:"Von der Garage zum wertvollsten Unternehmen der Welt"}),P.jsxs("div",{className:"grid md:grid-cols-2 gap-8 mb-16",children:[P.jsxs("div",{className:`bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-gray-700/50
                          hover:border-green-500/30 transition-all duration-500`,children:[P.jsx("div",{className:"w-12 h-12 rounded-full flex items-center justify-center mb-4",style:{backgroundColor:"#76B900"},children:P.jsx("span",{className:"text-xl font-bold text-black",children:"M"})}),P.jsx("h3",{className:"text-2xl font-bold mb-4",style:{color:"#76B900"},children:"Mission"}),P.jsx("p",{className:"text-xl text-gray-300 italic",children:'"Bring superhuman capabilities to every human, in every industry"'}),P.jsx("p",{className:"text-gray-500 mt-4",children:"Übermenschliche Fähigkeiten für jeden Menschen, in jeder Branche ermöglichen."})]}),P.jsxs("div",{className:`bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-gray-700/50
                          hover:border-green-500/30 transition-all duration-500`,children:[P.jsx("div",{className:"w-12 h-12 rounded-full flex items-center justify-center mb-4",style:{backgroundColor:"#76B900"},children:P.jsx("span",{className:"text-xl font-bold text-black",children:"V"})}),P.jsx("h3",{className:"text-2xl font-bold mb-4",style:{color:"#76B900"},children:"Vision"}),P.jsx("p",{className:"text-xl text-gray-300 italic",children:'"Enable a world where everyone can experience the power of AI"'}),P.jsx("p",{className:"text-gray-500 mt-4",children:"Eine Welt ermöglichen, in der jeder die Kraft der KI erleben kann."})]})]}),P.jsxs("div",{className:"mb-16",children:[P.jsx("h3",{className:"text-2xl font-bold text-center mb-8",children:"Core Values"}),P.jsx("div",{className:"grid md:grid-cols-4 gap-6",children:R.map((E,I)=>P.jsxs("div",{className:`bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-2xl 
                                      border border-gray-700/50 hover:border-green-500/30 transition-all duration-500
                                      text-center`,children:[P.jsx("div",{className:"w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4",style:{backgroundColor:"#76B900"},children:P.jsx("span",{className:"text-sm font-bold text-black",children:E.icon})}),P.jsx("h4",{className:"text-lg font-bold mb-2",style:{color:"#76B900"},children:E.name}),P.jsx("p",{className:"text-sm text-gray-400",children:E.desc})]},I))})]}),P.jsx("div",{className:`bg-gradient-to-r from-gray-800/80 to-gray-900/80 rounded-3xl p-8 md:p-12 
                        border border-gray-700/50 backdrop-blur-sm`,children:P.jsxs("div",{className:"flex flex-col md:flex-row items-center gap-8",children:[P.jsx("div",{className:"w-48 h-48 rounded-full overflow-hidden border-4",style:{borderColor:"rgba(118, 185, 0, 0.5)"},children:P.jsx("img",{src:L1,alt:"Jensen Huang",className:"w-full h-full object-cover"})}),P.jsxs("div",{className:"flex-1 text-center md:text-left",children:[P.jsx("h3",{className:"text-3xl font-bold mb-2",children:"Jensen Huang"}),P.jsx("p",{className:"text-lg mb-4",style:{color:"#76B900"},children:"CEO, Präsident & Mitgründer"}),P.jsx("p",{className:"text-gray-400 mb-4",children:"Gründete NVIDIA 1993 in einem Denny's Restaurant mit Chris Malachowsky und Curtis Priem. Unter seiner Führung wurde NVIDIA zum wertvollsten Unternehmen der Welt."}),P.jsxs("div",{className:"flex flex-wrap gap-4 justify-center md:justify-start",children:[P.jsxs("div",{className:"px-4 py-2 bg-white/5 rounded-lg",children:[P.jsx("span",{className:"text-sm text-gray-400",children:"Vermögen: "}),P.jsx("span",{className:"font-bold",style:{color:"#76B900"},children:"$162 Mrd."})]}),P.jsxs("div",{className:"px-4 py-2 bg-white/5 rounded-lg",children:[P.jsx("span",{className:"text-sm text-gray-400",children:"Anteil: "}),P.jsx("span",{className:"font-bold",style:{color:"#76B900"},children:"~3.8%"})]}),P.jsxs("div",{className:"px-4 py-2 bg-white/5 rounded-lg",children:[P.jsx("span",{className:"text-sm text-gray-400",children:"CEO seit: "}),P.jsx("span",{className:"font-bold",style:{color:"#76B900"},children:"1993"})]})]})]})]})}),P.jsxs("div",{className:"mt-16",children:[P.jsx("h3",{className:"text-2xl font-bold text-center mb-8",children:"Meilensteine"}),P.jsxs("div",{className:"relative",children:[P.jsx("div",{className:"absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-700"}),[{year:"1993",event:"Gründung in San Jose, Kalifornien"},{year:"1999",event:"Börsengang (IPO) an der NASDAQ"},{year:"2006",event:"CUDA-Plattform revolutioniert GPU-Computing"},{year:"2020",event:"AI-Boom beginnt, Data Center explodiert"},{year:"2024",event:"Erstes Unternehmen mit $3T+ Marktwert"},{year:"2025",event:"Erreicht $4 Trillion Marktwert"}].map((E,I)=>P.jsxs("div",{className:`flex items-center mb-8 ${I%2===0?"flex-row":"flex-row-reverse"}`,children:[P.jsxs("div",{className:`w-5/12 ${I%2===0?"text-right pr-8":"text-left pl-8"}`,children:[P.jsx("div",{className:"text-2xl font-bold",style:{color:"#76B900"},children:E.year}),P.jsx("div",{className:"text-gray-400",children:E.event})]}),P.jsx("div",{className:"w-2/12 flex justify-center",children:P.jsx("div",{className:"w-4 h-4 rounded-full border-2 bg-gray-900",style:{borderColor:"#76B900"}})}),P.jsx("div",{className:"w-5/12"})]},I))]})]})]})}),N=()=>P.jsx("section",{className:"min-h-screen py-20 px-6 bg-gradient-to-b from-gray-900 to-black",children:P.jsxs("div",{className:"max-w-7xl mx-auto",children:[P.jsx("h2",{className:"text-4xl md:text-5xl font-bold text-center mb-4",children:P.jsx("span",{style:{color:"#76B900"},children:"Umweltsphären"})}),P.jsx("p",{className:"text-gray-400 text-center mb-16 text-lg",children:"Externe Einflüsse auf NVIDIA und deren konkrete Auswirkungen"}),P.jsxs("div",{className:"relative mb-16",children:[P.jsx("div",{className:"flex justify-center mb-8",children:P.jsx(O1,{})}),P.jsx("div",{className:"flex flex-wrap justify-center gap-4",children:S.map(E=>P.jsxs("button",{onClick:()=>r(i===E.id?null:E.id),className:`px-6 py-4 rounded-xl transition-all duration-300 border-2
                           ${i===E.id?"scale-105 shadow-lg":"bg-gray-800/50 border-gray-700 hover:border-opacity-50"}`,style:{borderColor:i===E.id?E.color:void 0,backgroundColor:i===E.id?`${E.color}20`:void 0,boxShadow:i===E.id?`0 0 20px ${E.color}40`:void 0},children:[P.jsx("span",{className:"text-2xl mr-2",children:E.icon}),P.jsx("span",{className:"font-semibold",children:E.name})]},E.id))})]}),i&&P.jsx("div",{className:`bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-3xl p-8 
                          border border-gray-700/50 backdrop-blur-sm animate-fadeIn`,children:(()=>{const E=S.find(I=>I.id===i);return P.jsxs("div",{className:"flex flex-col md:flex-row gap-8",children:[P.jsxs("div",{className:"flex-1",children:[P.jsxs("div",{className:"flex items-center gap-4 mb-4",children:[P.jsx("span",{className:"text-5xl",children:E.icon}),P.jsxs("div",{children:[P.jsx("h3",{className:"text-3xl font-bold",style:{color:E.color},children:E.name}),P.jsx("p",{className:"text-gray-400",children:E.beispiel})]})]}),P.jsx("p",{className:"text-lg text-gray-300 leading-relaxed",children:E.details})]}),P.jsxs("div",{className:`md:w-48 flex flex-col items-center justify-center p-6 
                                  bg-black/30 rounded-2xl`,children:[P.jsx("div",{className:"text-5xl font-black mb-2",style:{color:E.color},children:E.stat}),P.jsx("div",{className:"text-sm text-gray-400 text-center",children:E.statLabel})]})]})})()}),!i&&P.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-6",children:S.map((E,I)=>P.jsxs("div",{onClick:()=>r(E.id),className:`bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-2xl 
                           border border-gray-700/50 cursor-pointer
                           hover:border-opacity-50 transition-all duration-300 hover:scale-102`,style:{animationDelay:`${I*100}ms`,"--hover-border":E.color},children:[P.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[P.jsx("span",{className:"text-3xl",children:E.icon}),P.jsx("h3",{className:"text-xl font-bold",style:{color:E.color},children:E.name})]}),P.jsx("p",{className:"text-gray-400 mb-4",children:E.beispiel}),P.jsxs("div",{className:"flex items-center justify-between",children:[P.jsx("span",{className:"text-2xl font-bold",style:{color:E.color},children:E.stat}),P.jsx("span",{className:"text-xs text-gray-500",children:E.statLabel})]})]},E.id))})]})}),F=()=>P.jsx("section",{className:"min-h-screen py-20 px-6 bg-gradient-to-b from-black to-gray-900",children:P.jsxs("div",{className:"max-w-7xl mx-auto",children:[P.jsx("h2",{className:"text-4xl md:text-5xl font-bold text-center mb-4",children:P.jsx("span",{style:{color:"#76B900"},children:"Anspruchsgruppen"})}),P.jsx("p",{className:"text-gray-400 text-center mb-16 text-lg",children:"Wer beeinflusst NVIDIA und welche Ansprüche haben sie?"}),P.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16",children:b.map((E,I)=>P.jsxs("div",{onClick:()=>u(l===E.id?null:E.id),className:`p-6 rounded-2xl cursor-pointer transition-all duration-300
                         border-2 ${l===E.id?"border-green-500 bg-green-500/10 scale-105":"border-gray-700/50 bg-gray-800/30 hover:border-gray-600"}`,style:{borderColor:l===E.id?"#76B900":void 0},children:[P.jsx("div",{className:"text-4xl mb-4",children:E.icon}),P.jsx("h3",{className:"text-xl font-bold mb-2",children:E.name}),P.jsx("p",{className:"text-sm text-gray-400 mb-3",children:E.beispiel}),l===E.id&&P.jsxs("div",{className:"mt-4 pt-4 border-t border-gray-700",children:[P.jsx("p",{className:"text-sm font-semibold mb-1",style:{color:"#76B900"},children:"Anspruch:"}),P.jsx("p",{className:"text-gray-300",children:E.anspruch})]})]},E.id))}),P.jsx("h3",{className:"text-3xl font-bold text-center mb-8",children:"Zielbeziehungen"}),P.jsx("div",{className:"grid md:grid-cols-3 gap-6",children:w.map(E=>P.jsxs("div",{className:"bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50",children:[P.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[P.jsx("span",{className:"text-3xl",children:E.icon}),P.jsx("h4",{className:"text-xl font-bold",style:{color:E.color},children:E.label})]}),E.items.map((I,J)=>P.jsxs("div",{className:"mb-4 last:mb-0 p-4 bg-black/30 rounded-xl",children:[P.jsx("p",{className:"font-semibold mb-1",children:I.title}),P.jsx("p",{className:"text-sm text-gray-400",children:I.desc})]},J))]},E.typ))})]})}),H=()=>P.jsx("section",{className:"min-h-screen py-20 px-6 bg-gradient-to-b from-gray-900 to-black",children:P.jsxs("div",{className:"max-w-7xl mx-auto",children:[P.jsx("h2",{className:"text-4xl md:text-5xl font-bold text-center mb-4",children:P.jsx("span",{style:{color:"#76B900"},children:"Strategie & Konzept"})}),P.jsx("p",{className:"text-gray-400 text-center mb-8 text-lg",children:"Vom Leitbild zur konkreten Umsetzung"}),P.jsx("div",{className:"flex flex-wrap justify-center items-center gap-4 mb-16",children:["Leitbild","→","Strategie","→","Konzept"].map((E,I)=>P.jsx("div",{className:E==="→"?"text-2xl text-gray-600":"px-6 py-3 bg-gray-800/50 rounded-xl border border-gray-700/50",children:E==="→"?E:P.jsx("span",{className:"font-semibold",children:E})},I))}),P.jsxs("div",{className:`bg-gradient-to-r from-green-500/10 to-gray-800/50 rounded-3xl p-8 mb-16
                        border border-green-500/20`,children:[P.jsx("h3",{className:"text-2xl font-bold mb-4",style:{color:"#76B900"},children:"NVIDIAs Strategie"}),P.jsx("p",{className:"text-lg text-gray-300 leading-relaxed",children:"Durch kontinuierliche Innovation bei GPU-Hardware und Software-Ökosystemen (CUDA) die führende Plattform für AI-Computing weltweit bleiben und dabei sowohl wirtschaftliches Wachstum als auch nachhaltige Technologie vorantreiben."})]}),P.jsx("div",{className:"flex justify-center gap-4 mb-8",children:Object.entries(y).map(([E,I])=>P.jsxs("button",{onClick:()=>h(E),className:`px-6 py-3 rounded-xl font-semibold transition-all duration-300
                         ${d===E?"text-black":"bg-gray-800/50 text-gray-400 hover:text-white"}`,style:{backgroundColor:d===E?"#76B900":void 0},children:[P.jsx("span",{className:"mr-2",children:I.icon}),E.charAt(0).toUpperCase()+E.slice(1)]},E))}),P.jsxs("div",{className:"bg-gray-800/50 rounded-3xl p-8 border border-gray-700/50",children:[P.jsx("h3",{className:"text-2xl font-bold mb-8 text-center",style:{color:"#76B900"},children:y[d].title}),P.jsx("div",{className:"grid md:grid-cols-3 gap-8",children:[{title:"Ziele",items:y[d].ziele,icon:"Z"},{title:"Mittel",items:y[d].mittel,icon:"M"},{title:"Verfahren",items:y[d].verfahren,icon:"V"}].map(E=>P.jsxs("div",{className:"bg-black/30 rounded-2xl p-6",children:[P.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[P.jsx("div",{className:"w-8 h-8 rounded-full flex items-center justify-center",style:{backgroundColor:"#76B900"},children:P.jsx("span",{className:"text-sm font-bold text-black",children:E.icon})}),P.jsx("h4",{className:"text-xl font-bold",children:E.title})]}),P.jsx("ul",{className:"space-y-3",children:E.items.map((I,J)=>P.jsxs("li",{className:"flex items-start gap-2",children:[P.jsx("span",{style:{color:"#76B900"},children:"▸"}),P.jsx("span",{className:"text-gray-300",children:I})]},J))})]},E.title))})]})]})}),z=()=>P.jsx("section",{className:"min-h-screen py-20 px-6 bg-gradient-to-b from-black to-gray-900",children:P.jsxs("div",{className:"max-w-7xl mx-auto",children:[P.jsx("h2",{className:"text-4xl md:text-5xl font-bold text-center mb-4",children:P.jsx("span",{style:{color:"#76B900"},children:"Nachhaltigkeit"})}),P.jsx("p",{className:"text-gray-400 text-center mb-16 text-lg",children:"Ökonomische, soziale und ökologische Zielsetzungen"}),P.jsx("div",{className:"grid md:grid-cols-3 gap-8",children:[{title:"Ökonomisch",icon:"Ö",color:"#FFD700",items:["Langfristiges Wachstum durch AI-Infrastruktur","$3-4 Trillion Markt bis 2030","Reinvestition in Forschung & Entwicklung","Nachhaltige Profitabilität (75% Marge)"]},{title:"Sozial",icon:"S",color:"#76B900",items:['Demokratisierung von AI ("AI für jeden")',"NVIDIA Inception Programm für Startups","Bildungspartnerschaften mit Universitäten","NVIDIA Foundation (>$12 Mrd.)"]},{title:"Ökologisch",icon:"U",color:"#4ECDC4",items:["100% erneuerbare Energie erreicht (2025)","Blackwell-Chips 25x energieeffizienter","Liquid Cooling in Rechenzentren","Scope 1+2 Net-Zero erreicht"]}].map(E=>P.jsxs("div",{className:`relative bg-gradient-to-b from-gray-800/50 to-gray-900/50 
                            rounded-3xl p-8 border border-gray-700/50
                            hover:border-opacity-50 transition-all duration-500`,style:{"--hover-border":E.color},children:[P.jsxs("div",{className:"text-center mb-8",children:[P.jsx("div",{className:"w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4",style:{backgroundColor:E.color},children:P.jsx("span",{className:"text-2xl font-bold text-black",children:E.icon})}),P.jsx("h3",{className:"text-2xl font-bold",style:{color:E.color},children:E.title})]}),P.jsx("ul",{className:"space-y-4",children:E.items.map((I,J)=>P.jsxs("li",{className:"flex items-start gap-3",children:[P.jsx("div",{className:"w-2 h-2 rounded-full mt-2",style:{backgroundColor:E.color}}),P.jsx("span",{className:"text-gray-300",children:I})]},J))}),P.jsx("div",{className:"absolute bottom-0 left-0 right-0 h-1 rounded-b-3xl",style:{backgroundColor:E.color,opacity:.5}})]},E.title))}),P.jsx("div",{className:`mt-16 bg-gradient-to-r from-green-500/10 via-gray-800/50 to-green-500/10 
                        rounded-3xl p-8 border border-green-500/20`,children:P.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-8 text-center",children:[{value:"100%",label:"Erneuerbare Energie"},{value:"25x",label:"Energieeffizienz (Blackwell)"},{value:"335t",label:"E-Waste recycelt (2025)"},{value:"0",label:"Scope 2 Emissionen"}].map((E,I)=>P.jsxs("div",{children:[P.jsx("div",{className:"text-4xl font-black mb-2",style:{color:"#76B900"},children:E.value}),P.jsx("div",{className:"text-sm text-gray-400",children:E.label})]},I))})})]})}),K=()=>P.jsx("section",{className:"min-h-screen py-20 px-6 bg-gradient-to-b from-gray-900 to-black",children:P.jsxs("div",{className:"max-w-5xl mx-auto",children:[P.jsx("h2",{className:"text-4xl md:text-5xl font-bold text-center mb-4",children:P.jsx("span",{style:{color:"#76B900"},children:"Quellenverzeichnis"})}),P.jsx("p",{className:"text-gray-400 text-center mb-16 text-lg",children:"Alle verwendeten Quellen für dieses Projekt"}),[{kategorie:"Offizielle NVIDIA Quellen",icon:"01",quellen:[{title:"NVIDIA Corporate Sustainability",url:"nvidia.com/en-us/sustainability/",info:"Nachhaltigkeitsbericht & Umweltziele"},{title:"NVIDIA Investor Relations",url:"investor.nvidia.com",info:"Finanzdaten, Jahresberichte, SEC Filings"},{title:"NVIDIA Sustainability Report FY2024",url:"nvidia.com/sustainability-report",info:"Detaillierter Nachhaltigkeitsbericht"}]},{kategorie:"Finanznachrichten & Analysen",icon:"02",quellen:[{title:"CNBC - Nvidia earnings Q4 2025",url:"cnbc.com",info:"Quartalszahlen & Umsatzentwicklung"},{title:"Reuters - Nvidia China restrictions",url:"reuters.com",info:"Exportbeschränkungen & China-Markt"},{title:"Bloomberg - Nvidia market cap",url:"bloomberg.com",info:"Marktkapitalisierung & Aktienkurs"},{title:"TechCrunch - Nvidia revenue",url:"techcrunch.com",info:"Umsatzrekorde & AI-Boom"}]},{kategorie:"Unternehmensanalysen",icon:"03",quellen:[{title:"DCF Modeling - NVIDIA Mission & Vision",url:"dcfmodeling.com",info:"Mission Statement Analyse"},{title:"Business Model Analyst",url:"businessmodelanalyst.com",info:"Geschäftsmodell & Strategie"},{title:"Forbes - Jensen Huang Net Worth",url:"forbes.com",info:"CEO Profil & Vermögen"},{title:"Wikipedia - Jensen Huang",url:"en.wikipedia.org/wiki/Jensen_Huang",info:"Biografie & Unternehmensgeschichte"}]},{kategorie:"Aktionärs- & Eigentümerstruktur",icon:"04",quellen:[{title:"Capital.com - NVIDIA Shareholders",url:"capital.com",info:"Grösste Aktionäre"},{title:"TipRanks - NVDA Ownership",url:"tipranks.com",info:"Institutionelle Investoren"},{title:"The Motley Fool - Nvidia Stock",url:"fool.com",info:"Aktienanalyse"}]},{kategorie:"Regulierung & Export",icon:"05",quellen:[{title:"NPR - US China chip restrictions",url:"npr.org",info:"Exportbeschränkungen Analyse"},{title:"Al Jazeera - Nvidia chip smuggling",url:"aljazeera.com",info:"Chip-Schmuggel Fälle"},{title:"TechRepublic - US blocks Nvidia",url:"techrepublic.com",info:"H20 Export-Ban Details"},{title:"Computer Weekly - China chip war",url:"computerweekly.com",info:"US-China Technologie-Konflikt"}]},{kategorie:"Nachhaltigkeit & Energie",icon:"06",quellen:[{title:"Data Center Dynamics",url:"datacenterdynamics.com",info:"100% Renewable Energy"},{title:"The Sustainable Innovation",url:"thesustainableinnovation.com",info:"NVIDIA Nachhaltigkeitsstrategie"},{title:"NVIDIA Blogs - Energy Efficiency",url:"blogs.nvidia.com",info:"Energieeffizienz & Blackwell"}]}].map((E,I)=>P.jsxs("div",{className:"mb-12",children:[P.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[P.jsx("div",{className:"w-10 h-10 rounded-full flex items-center justify-center",style:{backgroundColor:"#76B900"},children:P.jsx("span",{className:"text-sm font-bold text-black",children:E.icon})}),P.jsx("h3",{className:"text-2xl font-bold",style:{color:"#76B900"},children:E.kategorie})]}),P.jsx("div",{className:"space-y-4",children:E.quellen.map((J,se)=>P.jsx("div",{className:`bg-gray-800/50 rounded-xl p-4 border border-gray-700/50
                                        hover:border-green-500/30 transition-all duration-300`,children:P.jsxs("div",{className:"flex flex-col md:flex-row md:items-center md:justify-between gap-2",children:[P.jsxs("div",{children:[P.jsx("h4",{className:"font-semibold text-white",children:J.title}),P.jsx("p",{className:"text-sm text-gray-400",children:J.info})]}),P.jsx("div",{className:"text-sm text-gray-500 font-mono",children:J.url})]})},se))})]},I)),P.jsx("div",{className:"mt-12 p-6 bg-gray-800/30 rounded-2xl border border-gray-700/50 text-center",children:P.jsxs("p",{className:"text-gray-400 text-sm",children:["Stand der Recherche: Dezember 2025",P.jsx("br",{}),"Alle Angaben ohne Gewähr. Dieses Projekt dient ausschliesslich Bildungszwecken."]})})]})}),C=()=>P.jsx("footer",{className:"bg-black border-t border-gray-800 py-12 px-6",children:P.jsxs("div",{className:"max-w-7xl mx-auto",children:[P.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-center gap-8",children:[P.jsxs("div",{className:"text-center md:text-left",children:[P.jsx("div",{className:"text-3xl font-black mb-2",style:{color:"#76B900"},children:"NVIDIA"}),P.jsx("p",{className:"text-gray-500",children:"Unternehmensmodell Projekt"}),P.jsx("p",{className:"text-gray-600 text-sm mt-2",children:"W&G Unterricht - 2025"})]}),P.jsxs("div",{className:"text-center",children:[P.jsx("p",{className:"text-gray-400 text-sm mb-2",children:"Erstellt von"}),P.jsxs("div",{className:"flex flex-wrap justify-center gap-x-4 gap-y-1",children:[P.jsx("span",{className:"text-white font-medium",children:"Hammoudi, Rami"}),P.jsx("span",{className:"text-gray-600",children:"•"}),P.jsx("span",{className:"text-white font-medium",children:"Khachane, Feris"}),P.jsx("span",{className:"text-gray-600",children:"•"}),P.jsx("span",{className:"text-white font-medium",children:"Spielberger, Keanu"})]}),P.jsx("p",{className:"text-sm mt-2",style:{color:"#76B900"},children:"Klasse AB25c"})]}),P.jsxs("div",{className:"text-center md:text-right",children:[P.jsx("p",{className:"text-gray-400 mb-2",children:"Quellen"}),P.jsx("p",{className:"text-gray-600 text-sm",children:"nvidia.com, Reuters, CNBC, Bloomberg, Forbes"})]})]}),P.jsx("div",{className:"mt-8 pt-8 border-t border-gray-800 text-center text-gray-600 text-sm",children:"© 2025 Schulprojekt - Alle Inhalte dienen Bildungszwecken"})]})});return P.jsxs("div",{className:"min-h-screen bg-black text-white font-sans",children:[P.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        
        * {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.5); }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fadeInPage {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0) translateX(-50%); }
          40% { transform: translateY(-15px) translateX(-50%); }
          60% { transform: translateY(-7px) translateX(-50%); }
        }
        
        @keyframes scrollPulse {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
        
        .animate-fadeInPage {
          animation: fadeInPage 0.6s ease-out forwards;
        }
        
        .animate-bounce {
          animation: bounce 2s infinite;
        }
        
        .animate-scrollPulse {
          animation: scrollPulse 2s infinite;
        }
        
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #111;
        }
        ::-webkit-scrollbar-thumb {
          background: #76B900;
          border-radius: 4px;
        }
      `}),P.jsx("nav",{className:`fixed top-0 left-0 right-0 z-50 transition-all duration-300
                      ${x||m?"bg-black/95 backdrop-blur-md border-b border-gray-800":"bg-transparent"}`,children:P.jsxs("div",{className:"max-w-7xl mx-auto px-6 py-4",children:[P.jsxs("div",{className:"flex items-center justify-between",children:[P.jsx("button",{onClick:()=>t("home"),className:"text-2xl font-black hover:opacity-80 transition-opacity",style:{color:"#76B900"},children:"NVIDIA"}),P.jsxs("div",{className:"hidden lg:flex items-center gap-2",children:[P.jsx(_,{id:"home",label:"Home"}),P.jsx(_,{id:"unternehmen",label:"Unternehmen"}),P.jsx(_,{id:"umwelt",label:"Umweltsphären"}),P.jsx(_,{id:"stakeholder",label:"Stakeholder"}),P.jsx(_,{id:"strategie",label:"Strategie"}),P.jsx(_,{id:"nachhaltigkeit",label:"Nachhaltigkeit"}),P.jsx(_,{id:"quellen",label:"Quellen"})]}),P.jsx("button",{className:"lg:hidden text-3xl text-white",onClick:()=>p(!m),children:m?"✕":"☰"})]}),m&&P.jsx("div",{className:"lg:hidden mt-4 pb-4 border-t border-gray-800 pt-4",children:["home","unternehmen","umwelt","stakeholder","strategie","nachhaltigkeit","quellen"].map(E=>P.jsx("button",{onClick:()=>{t(E),p(!1)},className:`block w-full text-left px-4 py-3 rounded-lg mb-1
                             ${o===E?"bg-green-500/20 text-white":"text-gray-400"}`,style:{backgroundColor:o===E?"rgba(118, 185, 0, 0.2)":void 0},children:E.charAt(0).toUpperCase()+E.slice(1)},E))})]})}),P.jsxs("main",{className:"animate-fadeInPage",children:[o==="home"&&P.jsx(L,{}),o==="unternehmen"&&P.jsx(O,{}),o==="umwelt"&&P.jsx(N,{}),o==="stakeholder"&&P.jsx(F,{}),o==="strategie"&&P.jsx(H,{}),o==="nachhaltigkeit"&&P.jsx(z,{}),o==="quellen"&&P.jsx(K,{})]},o),P.jsx(C,{})]})}function B1(){return P.jsx(P1,{})}vS.createRoot(document.getElementById("root")).render(P.jsx(mi.StrictMode,{children:P.jsx(B1,{})}));
