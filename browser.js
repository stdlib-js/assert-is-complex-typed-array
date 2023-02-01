// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).isComplexTypedArray=r()}(this,(function(){"use strict";var e="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function r(){return e&&"symbol"==typeof Symbol.toStringTag}var t=Object.prototype.toString;var n=Object.prototype.hasOwnProperty;function o(e,r){return null!=e&&n.call(e,r)}var i="function"==typeof Symbol?Symbol.toStringTag:"";var a=r()?function(e){var r,n,a;if(null==e)return t.call(e);n=e[i],r=o(e,i);try{e[i]=void 0}catch(r){return t.call(e)}return a=t.call(e),r?e[i]=n:delete e[i],a}:function(e){return t.call(e)},u="function"==typeof Object.defineProperty?Object.defineProperty:null;var f,l=Object.defineProperty,c=Object.prototype,s=c.toString,h=c.__defineGetter__,y=c.__defineSetter__,m=c.__lookupGetter__,p=c.__lookupSetter__;f=function(){try{return u({},"x",{}),!0}catch(e){return!1}}()?l:function(e,r,t){var n,o,i,a;if("object"!=typeof e||null===e||"[object Array]"===s.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===s.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((o="value"in t)&&(m.call(e,r)||p.call(e,r)?(n=e.__proto__,e.__proto__=c,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),i="get"in t,a="set"in t,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&h&&h.call(e,r,t.get),a&&y&&y.call(e,r,t.set),e};var g=f;function b(e,r,t){g(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function w(){return/^\s*function\s*([^(]*)/i}var v=/^\s*function\s*([^(]*)/i;b(w,"REGEXP",v);var d=Array.isArray?Array.isArray:function(e){return"[object Array]"===a(e)};function E(e){return null!==e&&"object"==typeof e}function _(e){var r,t,n,o;if(("Object"===(t=a(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=v.exec(n.toString()))return r[1]}return E(o=e)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}b(E,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError("invalid argument. Must provide a function. Value: `"+e+"`.");return function(r){var t,n;if(!d(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(E));var T=/./;function j(e){return"boolean"==typeof e}var x=Boolean.prototype.toString;var A=r();function B(e){return"object"==typeof e&&(e instanceof Boolean||(A?function(e){try{return x.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===a(e)))}function L(e){return j(e)||B(e)}function S(){return new Function("return this;")()}b(L,"isPrimitive",j),b(L,"isObject",B);var V="object"==typeof self?self:null,R="object"==typeof window?window:null,k="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},O="object"==typeof k?k:null;var M=function(e){if(arguments.length){if(!j(e))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+e+"`.");if(e)return S()}if(V)return V;if(R)return R;if(O)return O;throw new Error("unexpected error. Unable to resolve global object.")}(),N=M.document&&M.document.childNodes,P=Int8Array;var F="function"==typeof T||"object"==typeof P||"function"==typeof N?function(e){return _(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?_(e).toLowerCase():r};function C(e){return"function"===F(e)}var Y,I=Object.getPrototypeOf;Y=C(Object.getPrototypeOf)?I:function(e){var r=function(e){return e.__proto__}(e);return r||null===r?r:"[object Function]"===a(e.constructor)?e.constructor.prototype:e instanceof Object?Object.prototype:null};var W=Y;function G(e){return null==e?null:(e=Object(e),W(e))}function J(e){return"number"==typeof e}var U=Number,X=U.prototype.toString;var q=r();function z(e){return"object"==typeof e&&(e instanceof U||(q?function(e){try{return X.call(e),!0}catch(e){return!1}}(e):"[object Number]"===a(e)))}function D(e){return J(e)||z(e)}b(D,"isPrimitive",J),b(D,"isObject",z);var H=Number.POSITIVE_INFINITY,K=U.NEGATIVE_INFINITY,Q=Math.floor;function Z(e){return Q(e)===e}function $(e){return e<H&&e>K&&Z(e)}function ee(e){return J(e)&&$(e)}function re(e){return z(e)&&$(e.valueOf())}function te(e){return ee(e)||re(e)}function ne(e){return ee(e)&&e>=0}function oe(e){return re(e)&&e.valueOf()>=0}function ie(e){return ne(e)||oe(e)}b(te,"isPrimitive",ee),b(te,"isObject",re),b(ie,"isPrimitive",ne),b(ie,"isObject",oe);function ae(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&Z(e.length)&&e.length>=0&&e.length<=4294967295}function ue(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&Z(e.length)&&e.length>=0&&e.length<=9007199254740991}var fe="function"==typeof ArrayBuffer;function le(e){return fe&&e instanceof ArrayBuffer||"[object ArrayBuffer]"===a(e)}function ce(e){return"object"==typeof e&&null!==e&&!d(e)}function se(e,r){if(!(this instanceof se))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!J(e))throw new TypeError("invalid argument. Real component must be a number primitive. Value: `"+e+"`.");if(!J(r))throw new TypeError("invalid argument. Imaginary component must be a number primitive. Value: `"+r+"`.");return g(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:e}),g(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:r}),this}b(se,"BYTES_PER_ELEMENT",8),b(se.prototype,"BYTES_PER_ELEMENT",8),b(se.prototype,"byteLength",16),b(se.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),b(se.prototype,"toJSON",(function(){var e={type:"Complex128"};return e.re=this.re,e.im=this.im,e}));var he="function"==typeof Math.fround?Math.fround:null,ye="function"==typeof Float32Array;var me="function"==typeof Float32Array?Float32Array:null;var pe="function"==typeof Float32Array?Float32Array:void 0;var ge=function(){var e,r,t;if("function"!=typeof me)return!1;try{r=new me([1,3.14,-3.14,5e40]),t=r,e=(ye&&t instanceof Float32Array||"[object Float32Array]"===a(t))&&1===r[0]&&3.140000104904175===r[1]&&-3.140000104904175===r[2]&&r[3]===H}catch(r){e=!1}return e}()?pe:function(){throw new Error("not implemented")},be=new ge(1);var we="function"==typeof he?he:function(e){return be[0]=e,be[0]};function ve(e,r){if(!(this instanceof ve))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!J(e))throw new TypeError("invalid argument. Real component must be a number primitive. Value: `"+e+"`.");if(!J(r))throw new TypeError("invalid argument. Imaginary component must be a number primitive. Value: `"+r+"`.");return g(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:we(e)}),g(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:we(r)}),this}function de(e){return e instanceof se||e instanceof ve||"object"==typeof e&&null!==e&&"number"==typeof e.re&&"number"==typeof e.im}function Ee(e){return Z(e/2)}function _e(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&o(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator}b(ve,"BYTES_PER_ELEMENT",4),b(ve.prototype,"BYTES_PER_ELEMENT",4),b(ve.prototype,"byteLength",8),b(ve.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),b(ve.prototype,"toJSON",(function(){var e={type:"Complex64"};return e.re=this.re,e.im=this.im,e}));var Te=_e()?Symbol.iterator:null;function je(e,r,t){g(e,r,{configurable:!1,enumerable:!1,get:t})}function xe(e){return e.re}function Ae(e){return e.im}function Be(e,r){return new ge(e.buffer,e.byteOffset+e.BYTES_PER_ELEMENT*r,2*(e.length-r))}var Le="function"==typeof Float64Array;var Se="function"==typeof Float64Array?Float64Array:null;var Ve="function"==typeof Float64Array?Float64Array:void 0;var Re=function(){var e,r,t;if("function"!=typeof Se)return!1;try{r=new Se([1,3.14,-3.14,NaN]),t=r,e=(Le&&t instanceof Float64Array||"[object Float64Array]"===a(t))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){e=!1}return e}()?Ve:function(){throw new Error("not implemented")};function ke(e,r){return new Re(e.buffer,e.byteOffset+e.BYTES_PER_ELEMENT*r,2*(e.length-r))}function Oe(e,r){return e[r]}function Me(e,r){return e.get(r)}function Ne(e,r,t){e[r]=t}function Pe(e,r,t){e.set(t,r)}function Fe(e){var r=Boolean(e.get&&e.set);return{data:e,accessors:r,getter:r?Me:Oe,setter:r?Pe:Ne}}function Ce(e){var r,t,n;for(r=[];!(t=e.next()).done;)if(ae(n=t.value)&&n.length>=2)r.push(n[0],n[1]);else{if(!de(n))return new TypeError("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `"+n+"`.");r.push(xe(n),Ae(n))}return r}function Ye(e,r,t){var n,o,i,a;for(n=[],a=-1;!(o=e.next()).done;)if(a+=1,ae(i=r.call(t,o.value,a))&&i.length>=2)n.push(i[0],i[1]);else{if(!de(i))return new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+i+"`.");n.push(xe(i),Ae(i))}return n}function Ie(e,r){var t,n,o,i;for(t=r.length,i=0,o=0;o<t;o++){if(!de(n=r[o]))return null;e[i]=xe(n),e[i+1]=Ae(n),i+=2}return e}var We=2*ge.BYTES_PER_ELEMENT,Ge=_e();function Je(e){return e instanceof ze||"object"==typeof e&&null!==e&&("Complex64Array"===e.constructor.name||"Complex128Array"===e.constructor.name)&&"number"==typeof e._length&&"object"==typeof e._buffer}function Ue(e){return e===ze||"Complex128Array"===e.name}function Xe(e){return"object"==typeof e&&null!==e&&"Complex64Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===We}function qe(e){return"object"==typeof e&&null!==e&&"Complex128Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===2*We}function ze(){var e,r,t,n;if(r=arguments.length,!(this instanceof ze))return 0===r?new ze:1===r?new ze(arguments[0]):2===r?new ze(arguments[0],arguments[1]):new ze(arguments[0],arguments[1],arguments[2]);if(0===r)t=new ge(0);else if(1===r)if(ne(arguments[0]))t=new ge(2*arguments[0]);else if(ue(arguments[0]))if((n=(t=arguments[0]).length)&&d(t)&&de(t[0])){if(null===(t=Ie(new ge(2*n),t))){if(!Ee(n))throw new RangeError("invalid argument. Array-like object input arguments must have a length which is a multiple of two. Length: `"+n+"`.");t=new ge(arguments[0])}}else{if(Xe(t))t=Be(t,0);else if(qe(t))t=ke(t,0);else if(!Ee(n))throw new RangeError("invalid argument. Array-like object and typed array input arguments must have a length which is a multiple of two. Length: `"+n+"`.");t=new ge(t)}else if(le(arguments[0])){if(!Z((t=arguments[0]).byteLength/We))throw new RangeError("invalid argument. ArrayBuffer byte length must be a multiple of "+We+". Byte length: `"+t.byteLength+"`.");t=new ge(t)}else{if(!ce(arguments[0]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+arguments[0]+"`.");if(t=arguments[0],!1===Ge)throw new TypeError("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `"+t+"`.");if(!C(t[Te]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+t+"`.");if(!C((t=t[Te]()).next))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable.");if((t=Ce(t))instanceof Error)throw t;t=new ge(t)}else{if(!le(t=arguments[0]))throw new TypeError("invalid argument. First argument must be an array buffer. Value: `"+t+"`.");if(!ne(e=arguments[1]))throw new TypeError("invalid argument. Byte offset must be a nonnegative integer. Value: `"+e+"`.");if(!Z(e/We))throw new RangeError("invalid argument. Byte offset must be a multiple of "+We+". Value: `"+e+"`.");if(2===r){if(!Z((n=t.byteLength-e)/We))throw new RangeError("invalid arguments. ArrayBuffer view byte length must be a multiple of "+We+". View byte length: `"+n+"`.");t=new ge(t,e)}else{if(!ne(n=arguments[2]))throw new TypeError("invalid argument. Length must be a nonnegative integer. Value: `"+n+"`.");if(n*We>t.byteLength-e)throw new RangeError("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `"+n*We+"`.");t=new ge(t,e,2*n)}}return b(this,"_buffer",t),b(this,"_length",t.length/2),this}function De(e){return e.re}function He(e){return e.im}function Ke(e){var r,t,n;for(r=[];!(t=e.next()).done;)if(ae(n=t.value)&&n.length>=2)r.push(n[0],n[1]);else{if(!de(n))return new TypeError("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `"+n+"`.");r.push(De(n),He(n))}return r}function Qe(e,r,t){var n,o,i,a;for(n=[],a=-1;!(o=e.next()).done;)if(a+=1,ae(i=r.call(t,o.value,a))&&i.length>=2)n.push(i[0],i[1]);else{if(!de(i))return new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+i+"`.");n.push(De(i),He(i))}return n}function Ze(e,r){var t,n,o,i;for(t=r.length,i=0,o=0;o<t;o++){if(!de(n=r[o]))return null;e[i]=De(n),e[i+1]=He(n),i+=2}return e}b(ze,"BYTES_PER_ELEMENT",We),b(ze,"name","Complex64Array"),b(ze,"from",(function(e){var r,t,n,o,i,a,u,f,l,c,s;if(!C(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Ue(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((t=arguments.length)>1){if(!C(n=arguments[1]))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+n+"`.");t>2&&(r=arguments[2])}if(Je(e)){if(u=e.length,n){for(i=(o=new this(u))._buffer,s=0,c=0;c<u;c++){if(de(l=n.call(r,e.get(c),c)))i[s]=xe(l),i[s+1]=Ae(l);else{if(!(ae(l)&&l.length>=2))throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");i[s]=l[0],i[s+1]=l[1]}s+=2}return o}return new this(e)}if(ue(e)){if(n){for(u=e.length,a=Fe(e),c=0;c<u;c++)if(!de(a.getter(e,c))){f=!0;break}if(f){if(!Ee(u))throw new RangeError("invalid argument. First argument must have a length which is a multiple of two. Length: `"+u+"`.");for(i=(o=new this(u/2))._buffer,c=0;c<u;c++)i[c]=n.call(r,a.getter(e,c),c);return o}for(i=(o=new this(u))._buffer,s=0,c=0;c<u;c++){if(de(l=n.call(r,a.getter(e,c),c)))i[s]=xe(l),i[s+1]=Ae(l);else{if(!(ae(l)&&l.length>=2))throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");i[s]=l[0],i[s+1]=l[1]}s+=2}return o}return new this(e)}if(ce(e)&&Ge&&C(e[Te])){if(!C((i=e[Te]()).next))throw new TypeError("invalid argument. First argument must be an array-like object or an iterable.");if((a=n?Ye(i,n,r):Ce(i))instanceof Error)throw a;for(i=(o=new this(u=a.length/2))._buffer,c=0;c<u;c++)i[c]=a[c];return o}throw new TypeError("invalid argument. First argument must be an array-like object or an iterable. Value: `"+e+"`.")})),b(ze,"of",(function(){var e,r;if(!C(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Ue(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],r=0;r<arguments.length;r++)e.push(arguments[r]);return new this(e)})),je(ze.prototype,"buffer",(function(){return this._buffer.buffer})),je(ze.prototype,"byteLength",(function(){return this._buffer.byteLength})),je(ze.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),b(ze.prototype,"BYTES_PER_ELEMENT",ze.BYTES_PER_ELEMENT),b(ze.prototype,"copyWithin",(function(e,r){if(!Je(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*e,2*r):this._buffer.copyWithin(2*e,2*r,2*arguments[2]),this})),b(ze.prototype,"entries",(function(){var e,r,t,n,o,i,a;if(!Je(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return r=this,e=this._buffer,n=this._length,i=-1,a=-2,b(t={},"next",(function(){var r;if(i+=1,o||i>=n)return{done:!0};return r=new ve(e[a+=2],e[a+1]),{value:[i,r],done:!1}})),b(t,"return",(function(e){if(o=!0,arguments.length)return{value:e,done:!0};return{done:!0}})),Te&&b(t,Te,(function(){return r.entries()})),t})),b(ze.prototype,"get",(function(e){var r;if(!Je(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!ne(e))throw new TypeError("invalid argument. Must provide a nonnegative integer. Value: `"+e+"`.");if(!(e>=this._length))return new ve((r=this._buffer)[e*=2],r[e+1])})),je(ze.prototype,"length",(function(){return this._length})),b(ze.prototype,"set",(function(e){var r,t,n,o,i,a,u,f,l;if(!Je(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!ne(t=arguments[1]))throw new TypeError("invalid argument. Index argument must be a nonnegative integer. Value: `"+t+"`.")}else t=0;if(de(e)){if(t>=this._length)throw new RangeError("invalid argument. Index argument is out-of-bounds. Value: `"+t+"`.");return n[t*=2]=xe(e),void(n[t+1]=Ae(e))}if(Je(e)){if(t+(a=e._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e._buffer,l=n.byteOffset+t*We,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(o=new ge(r.length),f=0;f<r.length;f++)o[f]=r[f];r=o}for(t*=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2}else{if(!ue(e))throw new TypeError("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `"+e+"`.");for(a=e.length,f=0;f<a;f++)if(!de(e[f])){i=!0;break}if(i){if(!Ee(a))throw new RangeError("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `"+a+"`.");if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e,l=n.byteOffset+t*We,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(o=new ge(a),f=0;f<a;f++)o[f]=r[f];r=o}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=e[f],n[t]=xe(u),n[t+1]=Ae(u),t+=2}}));var $e=2*Re.BYTES_PER_ELEMENT,er=_e();function rr(e){return e instanceof ir||"object"==typeof e&&null!==e&&("Complex64Array"===e.constructor.name||"Complex128Array"===e.constructor.name)&&"number"==typeof e._length&&"object"==typeof e._buffer}function tr(e){return e===ir||"Complex64Array"===e.name}function nr(e){return"object"==typeof e&&null!==e&&"Complex64Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===$e/2}function or(e){return"object"==typeof e&&null!==e&&"Complex128Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===$e}function ir(){var e,r,t,n;if(r=arguments.length,!(this instanceof ir))return 0===r?new ir:1===r?new ir(arguments[0]):2===r?new ir(arguments[0],arguments[1]):new ir(arguments[0],arguments[1],arguments[2]);if(0===r)t=new Re(0);else if(1===r)if(ne(arguments[0]))t=new Re(2*arguments[0]);else if(ue(arguments[0]))if((n=(t=arguments[0]).length)&&d(t)&&de(t[0])){if(null===(t=Ze(new Re(2*n),t))){if(!Ee(n))throw new RangeError("invalid argument. Array-like object input arguments must have a length which is a multiple of two. Length: `"+n+"`.");t=new Re(arguments[0])}}else{if(nr(t))t=Be(t,0);else if(or(t))t=ke(t,0);else if(!Ee(n))throw new RangeError("invalid argument. Array-like object and typed array input arguments must have a length which is a multiple of two. Length: `"+n+"`.");t=new Re(t)}else if(le(arguments[0])){if(!Z((t=arguments[0]).byteLength/$e))throw new RangeError("invalid argument. ArrayBuffer byte length must be a multiple of "+$e+". Byte length: `"+t.byteLength+"`.");t=new Re(t)}else{if(!ce(arguments[0]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+arguments[0]+"`.");if(t=arguments[0],!1===er)throw new TypeError("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `"+t+"`.");if(!C(t[Te]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+t+"`.");if(!C((t=t[Te]()).next))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable.");if((t=Ke(t))instanceof Error)throw t;t=new Re(t)}else{if(!le(t=arguments[0]))throw new TypeError("invalid argument. First argument must be an array buffer. Value: `"+t+"`.");if(!ne(e=arguments[1]))throw new TypeError("invalid argument. Byte offset must be a nonnegative integer. Value: `"+e+"`.");if(!Z(e/$e))throw new RangeError("invalid argument. Byte offset must be a multiple of "+$e+". Value: `"+e+"`.");if(2===r){if(!Z((n=t.byteLength-e)/$e))throw new RangeError("invalid arguments. ArrayBuffer view byte length must be a multiple of "+$e+". View byte length: `"+n+"`.");t=new Re(t,e)}else{if(!ne(n=arguments[2]))throw new TypeError("invalid argument. Length must be a nonnegative integer. Value: `"+n+"`.");if(n*$e>t.byteLength-e)throw new RangeError("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `"+n*$e+"`.");t=new Re(t,e,2*n)}}return b(this,"_buffer",t),b(this,"_length",t.length/2),this}b(ir,"BYTES_PER_ELEMENT",$e),b(ir,"name","Complex128Array"),b(ir,"from",(function(e){var r,t,n,o,i,a,u,f,l,c,s;if(!C(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!tr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((t=arguments.length)>1){if(!C(n=arguments[1]))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+n+"`.");t>2&&(r=arguments[2])}if(rr(e)){if(u=e.length,n){for(i=(o=new this(u))._buffer,s=0,c=0;c<u;c++){if(de(l=n.call(r,e.get(c),c)))i[s]=De(l),i[s+1]=He(l);else{if(!(ae(l)&&l.length>=2))throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");i[s]=l[0],i[s+1]=l[1]}s+=2}return o}return new this(e)}if(ue(e)){if(n){for(u=e.length,a=Fe(e),c=0;c<u;c++)if(!de(a.getter(e,c))){f=!0;break}if(f){if(!Ee(u))throw new RangeError("invalid argument. First argument must have a length which is a multiple of two. Length: `"+u+"`.");for(i=(o=new this(u/2))._buffer,c=0;c<u;c++)i[c]=n.call(r,a.getter(e,c),c);return o}for(i=(o=new this(u))._buffer,s=0,c=0;c<u;c++){if(de(l=n.call(r,a.getter(e,c),c)))i[s]=De(l),i[s+1]=He(l);else{if(!(ae(l)&&l.length>=2))throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");i[s]=l[0],i[s+1]=l[1]}s+=2}return o}return new this(e)}if(ce(e)&&er&&C(e[Te])){if(!C((i=e[Te]()).next))throw new TypeError("invalid argument. First argument must be an array-like object or an iterable.");if((a=n?Qe(i,n,r):Ke(i))instanceof Error)throw a;for(i=(o=new this(u=a.length/2))._buffer,c=0;c<u;c++)i[c]=a[c];return o}throw new TypeError("invalid argument. First argument must be an array-like object or an iterable. Value: `"+e+"`.")})),b(ir,"of",(function(){var e,r;if(!C(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!tr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],r=0;r<arguments.length;r++)e.push(arguments[r]);return new this(e)})),je(ir.prototype,"buffer",(function(){return this._buffer.buffer})),je(ir.prototype,"byteLength",(function(){return this._buffer.byteLength})),je(ir.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),b(ir.prototype,"BYTES_PER_ELEMENT",ir.BYTES_PER_ELEMENT),b(ir.prototype,"copyWithin",(function(e,r){if(!rr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*e,2*r):this._buffer.copyWithin(2*e,2*r,2*arguments[2]),this})),b(ir.prototype,"entries",(function(){var e,r,t,n,o,i,a;if(!rr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return r=this,e=this._buffer,n=this._length,i=-1,a=-2,b(t={},"next",(function(){var r;if(i+=1,o||i>=n)return{done:!0};return r=new se(e[a+=2],e[a+1]),{value:[i,r],done:!1}})),b(t,"return",(function(e){if(o=!0,arguments.length)return{value:e,done:!0};return{done:!0}})),Te&&b(t,Te,(function(){return r.entries()})),t})),b(ir.prototype,"get",(function(e){var r;if(!rr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!ne(e))throw new TypeError("invalid argument. Must provide a nonnegative integer. Value: `"+e+"`.");if(!(e>=this._length))return new se((r=this._buffer)[e*=2],r[e+1])})),je(ir.prototype,"length",(function(){return this._length})),b(ir.prototype,"set",(function(e){var r,t,n,o,i,a,u,f,l;if(!rr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!ne(t=arguments[1]))throw new TypeError("invalid argument. Index argument must be a nonnegative integer. Value: `"+t+"`.")}else t=0;if(de(e)){if(t>=this._length)throw new RangeError("invalid argument. Index argument is out-of-bounds. Value: `"+t+"`.");return n[t*=2]=De(e),void(n[t+1]=He(e))}if(rr(e)){if(t+(a=e._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e._buffer,l=n.byteOffset+t*$e,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(o=new Re(r.length),f=0;f<r.length;f++)o[f]=r[f];r=o}for(t*=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2}else{if(!ue(e))throw new TypeError("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `"+e+"`.");for(a=e.length,f=0;f<a;f++)if(!de(e[f])){i=!0;break}if(i){if(!Ee(a))throw new RangeError("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `"+a+"`.");if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e,l=n.byteOffset+t*$e,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(o=new Re(a),f=0;f<a;f++)o[f]=r[f];r=o}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=e[f],n[t]=De(u),n[t+1]=He(u),t+=2}}));var ar=[ir,ze],ur=["Complex64Array","Complex128Array"];return function(e){var r,t;if("object"!=typeof e||null===e)return!1;for(t=0;t<ar.length;t++)if(e instanceof ar[t])return!0;for(;e;){for(r=_(e),t=0;t<ur.length;t++)if(ur[t]===r)return!0;e=G(e)}return!1}}));
//# sourceMappingURL=browser.js.map
