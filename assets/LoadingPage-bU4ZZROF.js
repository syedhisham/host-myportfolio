import{c as te,g as ne,j as J}from"./index-IK7N5hOz.js";var ee={exports:{}};(function(q,Z){(function(p,o){q.exports=o()})(typeof self<"u"?self:te,function(){return function(l){var p={};function o(c){if(p[c])return p[c].exports;var d=p[c]={i:c,l:!1,exports:{}};return l[c].call(d.exports,d,d.exports,o),d.l=!0,d.exports}return o.m=l,o.c=p,o.d=function(c,d,T){o.o(c,d)||Object.defineProperty(c,d,{configurable:!1,enumerable:!0,get:T})},o.n=function(c){var d=c&&c.__esModule?function(){return c.default}:function(){return c};return o.d(d,"a",d),d},o.o=function(c,d){return Object.prototype.hasOwnProperty.call(c,d)},o.p="/",o(o.s=7)}([function(l,p,o){function c(d,T,S,h,v,H,j,R){if(!d){var b;if(T===void 0)b=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var x=[S,h,v,H,j,R],A=0;b=new Error(T.replace(/%s/g,function(){return x[A++]})),b.name="Invariant Violation"}throw b.framesToPop=1,b}}l.exports=c},function(l,p,o){function c(T){return function(){return T}}var d=function(){};d.thatReturns=c,d.thatReturnsFalse=c(!1),d.thatReturnsTrue=c(!0),d.thatReturnsNull=c(null),d.thatReturnsThis=function(){return this},d.thatReturnsArgument=function(T){return T},l.exports=d},function(l,p,o){/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var c=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;function S(v){if(v==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(v)}function h(){try{if(!Object.assign)return!1;var v=new String("abc");if(v[5]="de",Object.getOwnPropertyNames(v)[0]==="5")return!1;for(var H={},j=0;j<10;j++)H["_"+String.fromCharCode(j)]=j;var R=Object.getOwnPropertyNames(H).map(function(x){return H[x]});if(R.join("")!=="0123456789")return!1;var b={};return"abcdefghijklmnopqrst".split("").forEach(function(x){b[x]=x}),Object.keys(Object.assign({},b)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}l.exports=h()?Object.assign:function(v,H){for(var j,R=S(v),b,x=1;x<arguments.length;x++){j=Object(arguments[x]);for(var A in j)d.call(j,A)&&(R[A]=j[A]);if(c){b=c(j);for(var z=0;z<b.length;z++)T.call(j,b[z])&&(R[b[z]]=j[b[z]])}}return R}},function(l,p,o){var c=o(1),d=c;l.exports=d},function(l,p,o){var c="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";l.exports=c},function(l,p,o){var c={};l.exports=c},function(l,p,o){function c(d,T,S,h,v){}l.exports=c},function(l,p,o){Object.defineProperty(p,"__esModule",{value:!0});var c=Object.assign||function(f){for(var s=1;s<arguments.length;s++){var O=arguments[s];for(var m in O)Object.prototype.hasOwnProperty.call(O,m)&&(f[m]=O[m])}return f},d=function(){function f(s,O){for(var m=0;m<O.length;m++){var V=O[m];V.enumerable=V.enumerable||!1,V.configurable=!0,"value"in V&&(V.writable=!0),Object.defineProperty(s,V.key,V)}}return function(s,O,m){return O&&f(s.prototype,O),m&&f(s,m),s}}(),T=o(8),S=b(T),h=o(11),v=b(h),H=o(14),j=R(H);function R(f){if(f&&f.__esModule)return f;var s={};if(f!=null)for(var O in f)Object.prototype.hasOwnProperty.call(f,O)&&(s[O]=f[O]);return s.default=f,s}function b(f){return f&&f.__esModule?f:{default:f}}function x(f,s){var O={};for(var m in f)s.indexOf(m)>=0||Object.prototype.hasOwnProperty.call(f,m)&&(O[m]=f[m]);return O}function A(f,s){if(!(f instanceof s))throw new TypeError("Cannot call a class as a function")}function z(f,s){if(!f)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s&&(typeof s=="object"||typeof s=="function")?s:f}function F(f,s){if(typeof s!="function"&&s!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof s);f.prototype=Object.create(s&&s.prototype,{constructor:{value:f,enumerable:!1,writable:!0,configurable:!0}}),s&&(Object.setPrototypeOf?Object.setPrototypeOf(f,s):f.__proto__=s)}var P=function(f){F(s,f);function s(){var O,m,V,E;A(this,s);for(var $=arguments.length,B=Array($),N=0;N<$;N++)B[N]=arguments[N];return E=(m=(V=z(this,(O=s.__proto__||Object.getPrototypeOf(s)).call.apply(O,[this].concat(B))),V),V.state={delayed:V.props.delay>0},m),z(V,E)}return d(s,[{key:"componentDidMount",value:function(){var m=this,V=this.props.delay,E=this.state.delayed;E&&(this.timeout=setTimeout(function(){m.setState({delayed:!1})},V))}},{key:"componentWillUnmount",value:function(){var m=this.timeout;m&&clearTimeout(m)}},{key:"render",value:function(){var m=this.props,V=m.color;m.delay;var E=m.type,$=m.height,B=m.width,N=x(m,["color","delay","type","height","width"]),W=this.state.delayed?"blank":E,G=j[W],Y={fill:V,height:$,width:B};return S.default.createElement("div",c({style:Y,dangerouslySetInnerHTML:{__html:G}},N))}}]),s}(T.Component);P.propTypes={color:v.default.string,delay:v.default.number,type:v.default.string,height:v.default.oneOfType([v.default.string,v.default.number]),width:v.default.oneOfType([v.default.string,v.default.number])},P.defaultProps={color:"#fff",delay:0,type:"balls",height:64,width:64},p.default=P},function(l,p,o){l.exports=o(9)},function(l,p,o){/** @license React v16.3.2
 * react.production.min.js
 *
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var c=o(2),d=o(0),T=o(5),S=o(1),h=typeof Symbol=="function"&&Symbol.for,v=h?Symbol.for("react.element"):60103,H=h?Symbol.for("react.portal"):60106,j=h?Symbol.for("react.fragment"):60107,R=h?Symbol.for("react.strict_mode"):60108,b=h?Symbol.for("react.provider"):60109,x=h?Symbol.for("react.context"):60110,A=h?Symbol.for("react.async_mode"):60111,z=h?Symbol.for("react.forward_ref"):60112,F=typeof Symbol=="function"&&Symbol.iterator;function P(e){for(var t=arguments.length-1,a="http://reactjs.org/docs/error-decoder.html?invariant="+e,r=0;r<t;r++)a+="&args[]="+encodeURIComponent(arguments[r+1]);d(!1,"Minified React error #"+e+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",a)}var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}};function s(e,t,a){this.props=e,this.context=t,this.refs=T,this.updater=a||f}s.prototype.isReactComponent={},s.prototype.setState=function(e,t){typeof e!="object"&&typeof e!="function"&&e!=null&&P("85"),this.updater.enqueueSetState(this,e,t,"setState")},s.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function O(){}O.prototype=s.prototype;function m(e,t,a){this.props=e,this.context=t,this.refs=T,this.updater=a||f}var V=m.prototype=new O;V.constructor=m,c(V,s.prototype),V.isPureReactComponent=!0;var E={current:null},$=Object.prototype.hasOwnProperty,B={key:!0,ref:!0,__self:!0,__source:!0};function N(e,t,a){var r=void 0,i={},g=null,C=null;if(t!=null)for(r in t.ref!==void 0&&(C=t.ref),t.key!==void 0&&(g=""+t.key),t)$.call(t,r)&&!B.hasOwnProperty(r)&&(i[r]=t[r]);var k=arguments.length-2;if(k===1)i.children=a;else if(1<k){for(var U=Array(k),L=0;L<k;L++)U[L]=arguments[L+2];i.children=U}if(e&&e.defaultProps)for(r in k=e.defaultProps,k)i[r]===void 0&&(i[r]=k[r]);return{$$typeof:v,type:e,key:g,ref:C,props:i,_owner:E.current}}function W(e){return typeof e=="object"&&e!==null&&e.$$typeof===v}function G(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,function(a){return t[a]})}var Y=/\/+/g,I=[];function X(e,t,a,r){if(I.length){var i=I.pop();return i.result=e,i.keyPrefix=t,i.func=a,i.context=r,i.count=0,i}return{result:e,keyPrefix:t,func:a,context:r,count:0}}function _(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>I.length&&I.push(e)}function D(e,t,a,r){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var g=!1;if(e===null)g=!0;else switch(i){case"string":case"number":g=!0;break;case"object":switch(e.$$typeof){case v:case H:g=!0}}if(g)return a(r,e,t===""?"."+K(e,0):t),1;if(g=0,t=t===""?".":t+":",Array.isArray(e))for(var C=0;C<e.length;C++){i=e[C];var k=t+K(i,C);g+=D(i,k,a,r)}else if(e===null||typeof e>"u"?k=null:(k=F&&e[F]||e["@@iterator"],k=typeof k=="function"?k:null),typeof k=="function")for(e=k.call(e),C=0;!(i=e.next()).done;)i=i.value,k=t+K(i,C++),g+=D(i,k,a,r);else i==="object"&&(a=""+e,P("31",a==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":a,""));return g}function K(e,t){return typeof e=="object"&&e!==null&&e.key!=null?G(e.key):t.toString(36)}function Q(e,t){e.func.call(e.context,t,e.count++)}function n(e,t,a){var r=e.result,i=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?u(e,r,a,S.thatReturnsArgument):e!=null&&(W(e)&&(t=i+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(Y,"$&/")+"/")+a,e={$$typeof:v,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}),r.push(e))}function u(e,t,a,r,i){var g="";a!=null&&(g=(""+a).replace(Y,"$&/")+"/"),t=X(t,g,r,i),e==null||D(e,"",n,t),_(t)}var w={Children:{map:function(e,t,a){if(e==null)return e;var r=[];return u(e,r,null,t,a),r},forEach:function(e,t,a){if(e==null)return e;t=X(null,null,t,a),e==null||D(e,"",Q,t),_(t)},count:function(e){return e==null?0:D(e,"",S.thatReturnsNull,null)},toArray:function(e){var t=[];return u(e,t,null,S.thatReturnsArgument),t},only:function(e){return W(e)||P("143"),e}},createRef:function(){return{current:null}},Component:s,PureComponent:m,createContext:function(e,t){return t===void 0&&(t=null),e={$$typeof:x,_calculateChangedBits:t,_defaultValue:e,_currentValue:e,_changedBits:0,Provider:null,Consumer:null},e.Provider={$$typeof:b,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:z,render:e}},Fragment:j,StrictMode:R,unstable_AsyncMode:A,createElement:N,cloneElement:function(e,t,a){e==null&&P("267",e);var r=void 0,i=c({},e.props),g=e.key,C=e.ref,k=e._owner;if(t!=null){t.ref!==void 0&&(C=t.ref,k=E.current),t.key!==void 0&&(g=""+t.key);var U=void 0;e.type&&e.type.defaultProps&&(U=e.type.defaultProps);for(r in t)$.call(t,r)&&!B.hasOwnProperty(r)&&(i[r]=t[r]===void 0&&U!==void 0?U[r]:t[r])}if(r=arguments.length-2,r===1)i.children=a;else if(1<r){U=Array(r);for(var L=0;L<r;L++)U[L]=arguments[L+2];i.children=U}return{$$typeof:v,type:e.type,key:g,ref:C,props:i,_owner:k}},createFactory:function(e){var t=N.bind(null,e);return t.type=e,t},isValidElement:W,version:"16.3.2",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentOwner:E,assign:c}},M=Object.freeze({default:w}),y=M&&w||M;l.exports=y.default?y.default:y},function(l,p,o){},function(l,p,o){l.exports=o(13)()},function(l,p,o){var c=o(1),d=o(0),T=o(3),S=o(2),h=o(4),v=o(6);l.exports=function(H,j){var R=typeof Symbol=="function"&&Symbol.iterator,b="@@iterator";function x(n){var u=n&&(R&&n[R]||n[b]);if(typeof u=="function")return u}var A="<<anonymous>>",z={array:s("array"),bool:s("boolean"),func:s("function"),number:s("number"),object:s("object"),string:s("string"),symbol:s("symbol"),any:O(),arrayOf:m,element:V(),instanceOf:E,node:W(),objectOf:B,oneOf:$,oneOfType:N,shape:G,exact:Y};function F(n,u){return n===u?n!==0||1/n===1/u:n!==n&&u!==u}function P(n){this.message=n,this.stack=""}P.prototype=Error.prototype;function f(n){function u(M,y,e,t,a,r,i){return t=t||A,r=r||e,i!==h&&j&&d(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"),y[e]==null?M?y[e]===null?new P("The "+a+" `"+r+"` is marked as required "+("in `"+t+"`, but its value is `null`.")):new P("The "+a+" `"+r+"` is marked as required in "+("`"+t+"`, but its value is `undefined`.")):null:n(y,e,t,a,r)}var w=u.bind(null,!1);return w.isRequired=u.bind(null,!0),w}function s(n){function u(w,M,y,e,t,a){var r=w[M],i=_(r);if(i!==n){var g=D(r);return new P("Invalid "+e+" `"+t+"` of type "+("`"+g+"` supplied to `"+y+"`, expected ")+("`"+n+"`."))}return null}return f(u)}function O(){return f(c.thatReturnsNull)}function m(n){function u(w,M,y,e,t){if(typeof n!="function")return new P("Property `"+t+"` of component `"+y+"` has invalid PropType notation inside arrayOf.");var a=w[M];if(!Array.isArray(a)){var r=_(a);return new P("Invalid "+e+" `"+t+"` of type "+("`"+r+"` supplied to `"+y+"`, expected an array."))}for(var i=0;i<a.length;i++){var g=n(a,i,y,e,t+"["+i+"]",h);if(g instanceof Error)return g}return null}return f(u)}function V(){function n(u,w,M,y,e){var t=u[w];if(!H(t)){var a=_(t);return new P("Invalid "+y+" `"+e+"` of type "+("`"+a+"` supplied to `"+M+"`, expected a single ReactElement."))}return null}return f(n)}function E(n){function u(w,M,y,e,t){if(!(w[M]instanceof n)){var a=n.name||A,r=Q(w[M]);return new P("Invalid "+e+" `"+t+"` of type "+("`"+r+"` supplied to `"+y+"`, expected ")+("instance of `"+a+"`."))}return null}return f(u)}function $(n){if(!Array.isArray(n))return c.thatReturnsNull;function u(w,M,y,e,t){for(var a=w[M],r=0;r<n.length;r++)if(F(a,n[r]))return null;var i=JSON.stringify(n);return new P("Invalid "+e+" `"+t+"` of value `"+a+"` "+("supplied to `"+y+"`, expected one of "+i+"."))}return f(u)}function B(n){function u(w,M,y,e,t){if(typeof n!="function")return new P("Property `"+t+"` of component `"+y+"` has invalid PropType notation inside objectOf.");var a=w[M],r=_(a);if(r!=="object")return new P("Invalid "+e+" `"+t+"` of type "+("`"+r+"` supplied to `"+y+"`, expected an object."));for(var i in a)if(a.hasOwnProperty(i)){var g=n(a,i,y,e,t+"."+i,h);if(g instanceof Error)return g}return null}return f(u)}function N(n){if(!Array.isArray(n))return c.thatReturnsNull;for(var u=0;u<n.length;u++){var w=n[u];if(typeof w!="function")return T(!1,"Invalid argument supplied to oneOfType. Expected an array of check functions, but received %s at index %s.",K(w),u),c.thatReturnsNull}function M(y,e,t,a,r){for(var i=0;i<n.length;i++){var g=n[i];if(g(y,e,t,a,r,h)==null)return null}return new P("Invalid "+a+" `"+r+"` supplied to "+("`"+t+"`."))}return f(M)}function W(){function n(u,w,M,y,e){return I(u[w])?null:new P("Invalid "+y+" `"+e+"` supplied to "+("`"+M+"`, expected a ReactNode."))}return f(n)}function G(n){function u(w,M,y,e,t){var a=w[M],r=_(a);if(r!=="object")return new P("Invalid "+e+" `"+t+"` of type `"+r+"` "+("supplied to `"+y+"`, expected `object`."));for(var i in n){var g=n[i];if(g){var C=g(a,i,y,e,t+"."+i,h);if(C)return C}}return null}return f(u)}function Y(n){function u(w,M,y,e,t){var a=w[M],r=_(a);if(r!=="object")return new P("Invalid "+e+" `"+t+"` of type `"+r+"` "+("supplied to `"+y+"`, expected `object`."));var i=S({},w[M],n);for(var g in i){var C=n[g];if(!C)return new P("Invalid "+e+" `"+t+"` key `"+g+"` supplied to `"+y+"`.\nBad object: "+JSON.stringify(w[M],null,"  ")+`
Valid keys: `+JSON.stringify(Object.keys(n),null,"  "));var k=C(a,g,y,e,t+"."+g,h);if(k)return k}return null}return f(u)}function I(n){switch(typeof n){case"number":case"string":case"undefined":return!0;case"boolean":return!n;case"object":if(Array.isArray(n))return n.every(I);if(n===null||H(n))return!0;var u=x(n);if(u){var w=u.call(n),M;if(u!==n.entries){for(;!(M=w.next()).done;)if(!I(M.value))return!1}else for(;!(M=w.next()).done;){var y=M.value;if(y&&!I(y[1]))return!1}}else return!1;return!0;default:return!1}}function X(n,u){return n==="symbol"||u["@@toStringTag"]==="Symbol"||typeof Symbol=="function"&&u instanceof Symbol}function _(n){var u=typeof n;return Array.isArray(n)?"array":n instanceof RegExp?"object":X(u,n)?"symbol":u}function D(n){if(typeof n>"u"||n===null)return""+n;var u=_(n);if(u==="object"){if(n instanceof Date)return"date";if(n instanceof RegExp)return"regexp"}return u}function K(n){var u=D(n);switch(u){case"array":case"object":return"an "+u;case"boolean":case"date":case"regexp":return"a "+u;default:return u}}function Q(n){return!n.constructor||!n.constructor.name?A:n.constructor.name}return z.checkPropTypes=v,z.PropTypes=z,z}},function(l,p,o){var c=o(1),d=o(0),T=o(4);l.exports=function(){function S(H,j,R,b,x,A){A!==T&&d(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}S.isRequired=S;function h(){return S}var v={array:S,bool:S,func:S,number:S,object:S,string:S,symbol:S,any:S,arrayOf:h,element:S,instanceOf:h,node:S,objectOf:h,oneOf:h,oneOfType:h,shape:h,exact:h};return v.checkPropTypes=c,v.PropTypes=v,v}},function(l,p,o){Object.defineProperty(p,"__esModule",{value:!0});var c=o(15);Object.defineProperty(p,"blank",{enumerable:!0,get:function(){return b(c).default}});var d=o(16);Object.defineProperty(p,"balls",{enumerable:!0,get:function(){return b(d).default}});var T=o(17);Object.defineProperty(p,"bars",{enumerable:!0,get:function(){return b(T).default}});var S=o(18);Object.defineProperty(p,"bubbles",{enumerable:!0,get:function(){return b(S).default}});var h=o(19);Object.defineProperty(p,"cubes",{enumerable:!0,get:function(){return b(h).default}});var v=o(20);Object.defineProperty(p,"cylon",{enumerable:!0,get:function(){return b(v).default}});var H=o(21);Object.defineProperty(p,"spin",{enumerable:!0,get:function(){return b(H).default}});var j=o(22);Object.defineProperty(p,"spinningBubbles",{enumerable:!0,get:function(){return b(j).default}});var R=o(23);Object.defineProperty(p,"spokes",{enumerable:!0,get:function(){return b(R).default}});function b(x){return x&&x.__esModule?x:{default:x}}},function(l,p){l.exports=`<svg class="icon-blank" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"></svg>
`},function(l,p){l.exports=`<svg class="icon-loading" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path transform="translate(-8 0)" d="M4 12 A4 4 0 0 0 4 20 A4 4 0 0 0 4 12"> 
    <animateTransform attributeName="transform" type="translate" values="-8 0; 2 0; 2 0;" dur="0.8s" repeatCount="indefinite" begin="0" keytimes="0;.25;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline"  />
  </path>
  <path transform="translate(2 0)" d="M4 12 A4 4 0 0 0 4 20 A4 4 0 0 0 4 12"> 
    <animateTransform attributeName="transform" type="translate" values="2 0; 12 0; 12 0;" dur="0.8s" repeatCount="indefinite" begin="0" keytimes="0;.35;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline"  />
  </path>
  <path transform="translate(12 0)" d="M4 12 A4 4 0 0 0 4 20 A4 4 0 0 0 4 12"> 
    <animateTransform attributeName="transform" type="translate" values="12 0; 22 0; 22 0;" dur="0.8s" repeatCount="indefinite" begin="0" keytimes="0;.45;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline"  />
  </path>
  <path transform="translate(24 0)" d="M4 12 A4 4 0 0 0 4 20 A4 4 0 0 0 4 12"> 
    <animateTransform attributeName="transform" type="translate" values="22 0; 32 0; 32 0;" dur="0.8s" repeatCount="indefinite" begin="0" keytimes="0;.55;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline"  />
  </path>
</svg>
`},function(l,p){l.exports=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path transform="translate(2)" d="M0 12 V20 H4 V12z"> 
    <animate attributeName="d" values="M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z" dur="1.2s" repeatCount="indefinite" begin="0" keytimes="0;.2;.5;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.8 0.4 0.8" calcMode="spline"  />
  </path>
  <path transform="translate(8)" d="M0 12 V20 H4 V12z">
    <animate attributeName="d" values="M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z" dur="1.2s" repeatCount="indefinite" begin="0.2" keytimes="0;.2;.5;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.8 0.4 0.8" calcMode="spline"  />
  </path>
  <path transform="translate(14)" d="M0 12 V20 H4 V12z">
    <animate attributeName="d" values="M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z" dur="1.2s" repeatCount="indefinite" begin="0.4" keytimes="0;.2;.5;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.8 0.4 0.8" calcMode="spline" />
  </path>
  <path transform="translate(20)" d="M0 12 V20 H4 V12z">
    <animate attributeName="d" values="M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z" dur="1.2s" repeatCount="indefinite" begin="0.6" keytimes="0;.2;.5;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.8 0.4 0.8" calcMode="spline" />
  </path>
  <path transform="translate(26)" d="M0 12 V20 H4 V12z">
    <animate attributeName="d" values="M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z" dur="1.2s" repeatCount="indefinite" begin="0.8" keytimes="0;.2;.5;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.8 0.4 0.8" calcMode="spline" />
  </path>
</svg>
`},function(l,p){l.exports=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <circle transform="translate(8 0)" cx="0" cy="16" r="0"> 
    <animate attributeName="r" values="0; 4; 0; 0" dur="1.2s" repeatCount="indefinite" begin="0"
      keytimes="0;0.2;0.7;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline" />
  </circle>
  <circle transform="translate(16 0)" cx="0" cy="16" r="0"> 
    <animate attributeName="r" values="0; 4; 0; 0" dur="1.2s" repeatCount="indefinite" begin="0.3"
      keytimes="0;0.2;0.7;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline" />
  </circle>
  <circle transform="translate(24 0)" cx="0" cy="16" r="0"> 
    <animate attributeName="r" values="0; 4; 0; 0" dur="1.2s" repeatCount="indefinite" begin="0.6"
      keytimes="0;0.2;0.7;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline" />
  </circle>
</svg>
`},function(l,p){l.exports=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path transform="translate(-8 0)" d="M0 12 V20 H8 V12z"> 
    <animateTransform attributeName="transform" type="translate" values="-8 0; 2 0; 2 0;" dur="0.8s" repeatCount="indefinite" begin="0" keytimes="0;.25;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline"  />
  </path>
  <path transform="translate(2 0)" d="M0 12 V20 H8 V12z"> 
    <animateTransform attributeName="transform" type="translate" values="2 0; 12 0; 12 0;" dur="0.8s" repeatCount="indefinite" begin="0" keytimes="0;.35;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline"  />
  </path>
  <path transform="translate(12 0)" d="M0 12 V20 H8 V12z"> 
    <animateTransform attributeName="transform" type="translate" values="12 0; 22 0; 22 0;" dur="0.8s" repeatCount="indefinite" begin="0" keytimes="0;.45;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline"  />
  </path>
  <path transform="translate(24 0)" d="M0 12 V20 H8 V12z"> 
    <animateTransform attributeName="transform" type="translate" values="22 0; 32 0; 32 0;" dur="0.8s" repeatCount="indefinite" begin="0" keytimes="0;.55;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline"  />
  </path>
</svg>
`},function(l,p){l.exports=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path transform="translate(0 0)" d="M0 12 V20 H4 V12z">
    <animateTransform attributeName="transform" type="translate" values="0 0; 28 0; 0 0; 0 0" dur="1.5s" begin="0" repeatCount="indefinite" keytimes="0;0.3;0.6;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
  </path>
  <path opacity="0.5" transform="translate(0 0)" d="M0 12 V20 H4 V12z">
    <animateTransform attributeName="transform" type="translate" values="0 0; 28 0; 0 0; 0 0" dur="1.5s" begin="0.1s" repeatCount="indefinite" keytimes="0;0.3;0.6;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
  </path>
  <path opacity="0.25" transform="translate(0 0)" d="M0 12 V20 H4 V12z">
    <animateTransform attributeName="transform" type="translate" values="0 0; 28 0; 0 0; 0 0" dur="1.5s" begin="0.2s" repeatCount="indefinite" keytimes="0;0.3;0.6;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
  </path>
</svg>
`},function(l,p){l.exports=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path opacity=".25" d="M16 0 A16 16 0 0 0 16 32 A16 16 0 0 0 16 0 M16 4 A12 12 0 0 1 16 28 A12 12 0 0 1 16 4"/>
  <path d="M16 0 A16 16 0 0 1 32 16 L28 16 A12 12 0 0 0 16 4z">
    <animateTransform attributeName="transform" type="rotate" from="0 16 16" to="360 16 16" dur="0.8s" repeatCount="indefinite" />
  </path>
</svg>
`},function(l,p){l.exports=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <circle cx="16" cy="3" r="0">
    <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
  </circle>
  <circle transform="rotate(45 16 16)" cx="16" cy="3" r="0">
    <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.125s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
  </circle>
  <circle transform="rotate(90 16 16)" cx="16" cy="3" r="0">
    <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.25s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
  </circle>
  <circle transform="rotate(135 16 16)" cx="16" cy="3" r="0">
    <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.375s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
  </circle>
  <circle transform="rotate(180 16 16)" cx="16" cy="3" r="0">
    <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.5s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
  </circle>
  <circle transform="rotate(225 16 16)" cx="16" cy="3" r="0">
    <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.625s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
  </circle>
  <circle transform="rotate(270 16 16)" cx="16" cy="3" r="0">
    <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.75s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
  </circle>
  <circle transform="rotate(315 16 16)" cx="16" cy="3" r="0">
    <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.875s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
  </circle>
  <circle transform="rotate(180 16 16)" cx="16" cy="3" r="0">
    <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.5s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
  </circle>
</svg>
`},function(l,p){l.exports=`<svg id="loading" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(0 16 16)">
    <animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite" begin="0"/>
  </path>
  <path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(45 16 16)">
    <animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite" begin="0.125s"/>
  </path>
  <path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(90 16 16)">
    <animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite" begin="0.25s"/>
  </path>
  <path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(135 16 16)">
    <animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite" begin="0.375s"/>
  </path>
  <path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(180 16 16)">
    <animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite" begin="0.5s"/>
  </path>
  <path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(225 16 16)">
    <animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite" begin="0.675s"/>
  </path>
  <path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(270 16 16)">
    <animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite" begin="0.75s"/>
  </path>
  <path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(315 16 16)">
    <animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite" begin="0.875s"/>
  </path>
</svg>
`}])})})(ee);var re=ee.exports;const ae=ne(re),oe=({textColorClass:q,fontClass:Z,bgClass:l})=>J.jsx("div",{className:`fixed top-0 left-0 w-full h-full ${l}  ${Z} flex items-center justify-center z-50
    ${l} === 'white' ? bg-gray-200 : '${l}'
    `,children:J.jsxs("div",{className:"text-center space-y-6",children:[J.jsx("div",{className:"flex justify-center",children:J.jsx(ae,{type:"spinningBubbles",color:q,height:"20%",width:"20%"})}),J.jsx("h1",{className:`text-2xl md:text-4xl font-bold ${q} animate-pulse`,children:"Please Wait..."}),J.jsx("p",{className:`${q} text-sm md:text-base opacity-80`,children:"We are setting things up for you!"})]})});export{oe as default};
