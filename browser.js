// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function r(){return e&&"symbol"==typeof Symbol.toStringTag}var t=Object.prototype.toString,n=Object.prototype.hasOwnProperty;function i(e,r){return null!=e&&n.call(e,r)}var o="function"==typeof Symbol?Symbol:void 0,a="function"==typeof o?o.toStringTag:"",u=r()?function(e){var r,n,o;if(null==e)return t.call(e);n=e[a],r=i(e,a);try{e[a]=void 0}catch(r){return t.call(e)}return o=t.call(e),r?e[a]=n:delete e[a],o}:function(e){return t.call(e)},f="function"==typeof Object.defineProperty?Object.defineProperty:null,l=Object.defineProperty;function s(e){return"number"==typeof e}function c(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function h(e,r,t){var n=!1,i=r-e.length;return i<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+c(i):c(i)+e,n&&(e="-"+e)),e}var p=String.prototype.toLowerCase,g=String.prototype.toUpperCase;function y(e){var r,t,n;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,n=parseInt(t,10),!isFinite(n)){if(!s(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===e.specifier||10!==r)&&(n=4294967295+n+1),n<0?(t=(-n).toString(r),e.precision&&(t=h(t,e.precision,e.padRight)),t="-"+t):(t=n.toString(r),n||e.precision?e.precision&&(t=h(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===g.call(e.specifier)?g.call(t):p.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function m(e){return"string"==typeof e}var b=Math.abs,w=String.prototype.toLowerCase,v=String.prototype.toUpperCase,d=String.prototype.replace,E=/e\+(\d)$/,_=/e-(\d)$/,T=/^(\d+)$/,x=/^(\d+)e/,j=/\.0$/,A=/\.0*e/,k=/(\..*[^0])0*e/;function V(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!s(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":b(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=d.call(t,k,"$1e"),t=d.call(t,A,"e"),t=d.call(t,j,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=d.call(t,E,"e+0$1"),t=d.call(t,_,"e-0$1"),e.alternate&&(t=d.call(t,T,"$1."),t=d.call(t,x,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===v.call(e.specifier)?v.call(t):w.call(t)}function L(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function R(e,r,t){var n=r-e.length;return n<0?e:e=t?e+L(n):L(n)+e}var S=String.fromCharCode,B=isNaN,O=Array.isArray;function F(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function M(e){var r,t,n,i,o,a,u,f,l;if(!O(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(a="",u=1,f=0;f<e.length;f++)if(m(n=e[f]))a+=n;else{if(r=void 0!==n.precision,!(n=F(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),t=n.flags,l=0;l<t.length;l++)switch(i=t.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,B(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,B(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=y(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!B(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=B(o)?String(n.arg):S(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=V(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=h(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=R(n.arg,n.width,n.padRight)),a+=n.arg||"",u+=1}return a}var C=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function N(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function P(e){var r,t,n,i;for(t=[],i=0,n=C.exec(e);n;)(r=e.slice(i,C.lastIndex-n[0].length)).length&&t.push(r),t.push(N(n)),i=C.lastIndex,n=C.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function I(e){return"string"==typeof e}function Y(e){var r,t,n;if(!I(e))throw new TypeError(Y("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=P(e),(t=new Array(arguments.length))[0]=r,n=1;n<t.length;n++)t[n]=arguments[n];return M.apply(null,t)}var W,$=Object.prototype,G=$.toString,Z=$.__defineGetter__,U=$.__defineSetter__,X=$.__lookupGetter__,J=$.__lookupSetter__;W=function(){try{return f({},"x",{}),!0}catch(e){return!1}}()?l:function(e,r,t){var n,i,o,a;if("object"!=typeof e||null===e||"[object Array]"===G.call(e))throw new TypeError(Y("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===G.call(t))throw new TypeError(Y("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(X.call(e,r)||J.call(e,r)?(n=e.__proto__,e.__proto__=$,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&Z&&Z.call(e,r,t.get),a&&U&&U.call(e,r,t.set),e};var z=W;function q(e,r,t){z(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function D(){return/^\s*function\s*([^(]*)/i}var H=/^\s*function\s*([^(]*)/i;q(D,"REGEXP",H);var K=Array.isArray?Array.isArray:function(e){return"[object Array]"===u(e)};function Q(e){return null!==e&&"object"==typeof e}function ee(e){var r,t,n,i;if(("Object"===(t=u(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=H.exec(n.toString()))return r[1]}return Q(i=e)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}q(Q,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(Y("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!K(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(Q));var re=Object,te=/./;function ne(e){return"boolean"==typeof e}var ie=Boolean,oe=Boolean.prototype.toString,ae=r();function ue(e){return"object"==typeof e&&(e instanceof ie||(ae?function(e){try{return oe.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===u(e)))}function fe(e){return ne(e)||ue(e)}function le(){return new Function("return this;")()}q(fe,"isPrimitive",ne),q(fe,"isObject",ue);var se="object"==typeof self?self:null,ce="object"==typeof window?window:null,he="object"==typeof globalThis?globalThis:null,pe=function(e){if(arguments.length){if(!ne(e))throw new TypeError(Y("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return le()}if(he)return he;if(se)return se;if(ce)return ce;throw new Error("unexpected error. Unable to resolve global object.")}(),ge=pe.document&&pe.document.childNodes,ye=Int8Array,me="function"==typeof te||"object"==typeof ye||"function"==typeof ge?function(e){return ee(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"==(r=typeof e)?ee(e).toLowerCase():r};function be(e){return"function"===me(e)}var we,ve=Object.getPrototypeOf;we=be(Object.getPrototypeOf)?ve:function(e){var r=function(e){return e.__proto__}(e);return r||null===r?r:"[object Function]"===u(e.constructor)?e.constructor.prototype:e instanceof Object?Object.prototype:null};var de=we;function Ee(e){return null==e?null:(e=re(e),de(e))}function _e(e){return"number"==typeof e}var Te=Number,xe=Te.prototype.toString,je=r();function Ae(e){return"object"==typeof e&&(e instanceof Te||(je?function(e){try{return xe.call(e),!0}catch(e){return!1}}(e):"[object Number]"===u(e)))}function ke(e){return _e(e)||Ae(e)}q(ke,"isPrimitive",_e),q(ke,"isObject",Ae);var Ve=Number.POSITIVE_INFINITY,Le=Te.NEGATIVE_INFINITY,Re=Math.floor;function Se(e){return Re(e)===e}function Be(e){return e<Ve&&e>Le&&Se(e)}function Oe(e){return _e(e)&&Be(e)}function Fe(e){return Ae(e)&&Be(e.valueOf())}function Me(e){return Oe(e)||Fe(e)}function Ce(e){return Oe(e)&&e>=0}function Ne(e){return Fe(e)&&e.valueOf()>=0}function Pe(e){return Ce(e)||Ne(e)}function Ie(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&Se(e.length)&&e.length>=0&&e.length<=4294967295}function Ye(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&Se(e.length)&&e.length>=0&&e.length<=9007199254740991}q(Me,"isPrimitive",Oe),q(Me,"isObject",Fe),q(Pe,"isPrimitive",Ce),q(Pe,"isObject",Ne);var We="function"==typeof ArrayBuffer;function $e(e){return We&&e instanceof ArrayBuffer||"[object ArrayBuffer]"===u(e)}function Ge(e){return"object"==typeof e&&null!==e&&!K(e)}function Ze(e,r){if(!(this instanceof Ze))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!_e(e))throw new TypeError(Y("invalid argument. Real component must be a number. Value: `%s`.",e));if(!_e(r))throw new TypeError(Y("invalid argument. Imaginary component must be a number. Value: `%s`.",r));return z(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:e}),z(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:r}),this}q(Ze,"BYTES_PER_ELEMENT",8),q(Ze.prototype,"BYTES_PER_ELEMENT",8),q(Ze.prototype,"byteLength",16),q(Ze.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),q(Ze.prototype,"toJSON",(function(){var e={type:"Complex128"};return e.re=this.re,e.im=this.im,e}));var Ue="function"==typeof Math.fround?Math.fround:null,Xe="function"==typeof Float32Array,Je="function"==typeof Float32Array?Float32Array:null,ze="function"==typeof Float32Array?Float32Array:void 0,qe=function(){var e,r,t;if("function"!=typeof Je)return!1;try{r=new Je([1,3.14,-3.14,5e40]),t=r,e=(Xe&&t instanceof Float32Array||"[object Float32Array]"===u(t))&&1===r[0]&&3.140000104904175===r[1]&&-3.140000104904175===r[2]&&r[3]===Ve}catch(r){e=!1}return e}()?ze:function(){throw new Error("not implemented")},De=new qe(1),He="function"==typeof Ue?Ue:function(e){return De[0]=e,De[0]};function Ke(e,r){if(!(this instanceof Ke))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!_e(e))throw new TypeError(Y("invalid argument. Real component must be a number. Value: `%s`.",e));if(!_e(r))throw new TypeError(Y("invalid argument. Imaginary component must be a number. Value: `%s`.",r));return z(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:He(e)}),z(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:He(r)}),this}function Qe(e){return e instanceof Ze||e instanceof Ke||"object"==typeof e&&null!==e&&"number"==typeof e.re&&"number"==typeof e.im}function er(e){return Se(e/2)}function rr(){return"function"==typeof o&&"symbol"==typeof o("foo")&&i(o,"iterator")&&"symbol"==typeof o.iterator}q(Ke,"BYTES_PER_ELEMENT",4),q(Ke.prototype,"BYTES_PER_ELEMENT",4),q(Ke.prototype,"byteLength",8),q(Ke.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),q(Ke.prototype,"toJSON",(function(){var e={type:"Complex64"};return e.re=this.re,e.im=this.im,e}));var tr=rr()?Symbol.iterator:null;function nr(e,r,t){z(e,r,{configurable:!1,enumerable:!1,get:t})}function ir(e){return e.re}function or(e){return e.im}function ar(e,r){return new qe(e.buffer,e.byteOffset+e.BYTES_PER_ELEMENT*r,2*(e.length-r))}var ur="function"==typeof Float64Array,fr="function"==typeof Float64Array?Float64Array:null,lr="function"==typeof Float64Array?Float64Array:void 0,sr=function(){var e,r,t;if("function"!=typeof fr)return!1;try{r=new fr([1,3.14,-3.14,NaN]),t=r,e=(ur&&t instanceof Float64Array||"[object Float64Array]"===u(t))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){e=!1}return e}()?lr:function(){throw new Error("not implemented")};function cr(e,r){return new sr(e.buffer,e.byteOffset+e.BYTES_PER_ELEMENT*r,2*(e.length-r))}var hr={float64:function(e,r){return e[r]},float32:function(e,r){return e[r]},int32:function(e,r){return e[r]},int16:function(e,r){return e[r]},int8:function(e,r){return e[r]},uint32:function(e,r){return e[r]},uint16:function(e,r){return e[r]},uint8:function(e,r){return e[r]},uint8c:function(e,r){return e[r]},generic:function(e,r){return e[r]},default:function(e,r){return e[r]}};function pr(e){var r=hr[e];return"function"==typeof r?r:hr.default}var gr={complex128:function(e,r){return e.get(r)},complex64:function(e,r){return e.get(r)},default:function(e,r){return e.get(r)}};function yr(e){var r=gr[e];return"function"==typeof r?r:gr.default}function mr(e){var r,t,n;for(r=[];!(t=e.next()).done;)if(Ie(n=t.value)&&n.length>=2)r.push(n[0],n[1]);else{if(!Qe(n))return new TypeError(Y("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",n));r.push(ir(n),or(n))}return r}function br(e,r,t){var n,i,o,a;for(n=[],a=-1;!(i=e.next()).done;)if(a+=1,Ie(o=r.call(t,i.value,a))&&o.length>=2)n.push(o[0],o[1]);else{if(!Qe(o))return new TypeError(Y("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",o));n.push(ir(o),or(o))}return n}function wr(e,r){var t,n,i,o;for(t=r.length,o=0,i=0;i<t;i++){if(!Qe(n=r[i]))return null;e[o]=ir(n),e[o+1]=or(n),o+=2}return e}var vr=2*qe.BYTES_PER_ELEMENT,dr=rr();function Er(e){return e instanceof jr||"object"==typeof e&&null!==e&&("Complex64Array"===e.constructor.name||"Complex128Array"===e.constructor.name)&&"number"==typeof e._length&&"object"==typeof e._buffer}function _r(e){return e===jr||"Complex128Array"===e.name}function Tr(e){return"object"==typeof e&&null!==e&&"Complex64Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===vr}function xr(e){return"object"==typeof e&&null!==e&&"Complex128Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===2*vr}function jr(){var e,r,t,n;if(r=arguments.length,!(this instanceof jr))return 0===r?new jr:1===r?new jr(arguments[0]):2===r?new jr(arguments[0],arguments[1]):new jr(arguments[0],arguments[1],arguments[2]);if(0===r)t=new qe(0);else if(1===r)if(Ce(arguments[0]))t=new qe(2*arguments[0]);else if(Ye(arguments[0]))if((n=(t=arguments[0]).length)&&K(t)&&Qe(t[0])){if(null===(t=wr(new qe(2*n),t))){if(!er(n))throw new RangeError(Y("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new qe(arguments[0])}}else{if(Tr(t))t=ar(t,0);else if(xr(t))t=cr(t,0);else if(!er(n))throw new RangeError(Y("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new qe(t)}else if($e(arguments[0])){if(!Se((t=arguments[0]).byteLength/vr))throw new RangeError(Y("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",vr,t.byteLength));t=new qe(t)}else{if(!Ge(arguments[0]))throw new TypeError(Y("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));if(t=arguments[0],!1===dr)throw new TypeError(Y("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!be(t[tr]))throw new TypeError(Y("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(!be((t=t[tr]()).next))throw new TypeError(Y("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if((t=mr(t))instanceof Error)throw t;t=new qe(t)}else{if(!$e(t=arguments[0]))throw new TypeError(Y("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(!Ce(e=arguments[1]))throw new TypeError(Y("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",e));if(!Se(e/vr))throw new RangeError(Y("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",vr,e));if(2===r){if(!Se((n=t.byteLength-e)/vr))throw new RangeError(Y("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",vr,n));t=new qe(t,e)}else{if(!Ce(n=arguments[2]))throw new TypeError(Y("invalid argument. Length must be a nonnegative integer. Value: `%s`.",n));if(n*vr>t.byteLength-e)throw new RangeError(Y("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",n*vr));t=new qe(t,e,2*n)}}return q(this,"_buffer",t),q(this,"_length",t.length/2),this}function Ar(e){return e.re}function kr(e){return e.im}function Vr(e){var r,t,n;for(r=[];!(t=e.next()).done;)if(Ie(n=t.value)&&n.length>=2)r.push(n[0],n[1]);else{if(!Qe(n))return new TypeError(Y("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",n));r.push(Ar(n),kr(n))}return r}function Lr(e,r,t){var n,i,o,a;for(n=[],a=-1;!(i=e.next()).done;)if(a+=1,Ie(o=r.call(t,i.value,a))&&o.length>=2)n.push(o[0],o[1]);else{if(!Qe(o))return new TypeError(Y("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",o));n.push(Ar(o),kr(o))}return n}function Rr(e,r){var t,n,i,o;for(t=r.length,o=0,i=0;i<t;i++){if(!Qe(n=r[i]))return null;e[o]=Ar(n),e[o+1]=kr(n),o+=2}return e}q(jr,"BYTES_PER_ELEMENT",vr),q(jr,"name","Complex64Array"),q(jr,"from",(function(e){var r,t,n,i,o,a,u,f,l,s,c,h;if(!be(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!_r(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((t=arguments.length)>1){if(!be(n=arguments[1]))throw new TypeError(Y("invalid argument. Second argument must be a function. Value: `%s`.",n));t>2&&(r=arguments[2])}if(Er(e)){if(f=e.length,n){for(o=(i=new this(f))._buffer,h=0,c=0;c<f;c++){if(Qe(s=n.call(r,e.get(c),c)))o[h]=ir(s),o[h+1]=or(s);else{if(!(Ie(s)&&s.length>=2))throw new TypeError(Y("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",s));o[h]=s[0],o[h+1]=s[1]}h+=2}return i}return new this(e)}if(Ye(e)){if(n){for(f=e.length,u=e.get&&e.set?yr("default"):pr("default"),c=0;c<f;c++)if(!Qe(u(e,c))){l=!0;break}if(l){if(!er(f))throw new RangeError(Y("invalid argument. First argument must have a length which is a multiple of %u. Length: `%u`.",2,f));for(o=(i=new this(f/2))._buffer,c=0;c<f;c++)o[c]=n.call(r,u(e,c),c);return i}for(o=(i=new this(f))._buffer,h=0,c=0;c<f;c++){if(Qe(s=n.call(r,u(e,c),c)))o[h]=ir(s),o[h+1]=or(s);else{if(!(Ie(s)&&s.length>=2))throw new TypeError(Y("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",s));o[h]=s[0],o[h+1]=s[1]}h+=2}return i}return new this(e)}if(Ge(e)&&dr&&be(e[tr])){if(!be((o=e[tr]()).next))throw new TypeError(Y("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e));if((a=n?br(o,n,r):mr(o))instanceof Error)throw a;for(o=(i=new this(f=a.length/2))._buffer,c=0;c<f;c++)o[c]=a[c];return i}throw new TypeError(Y("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e))})),q(jr,"of",(function(){var e,r;if(!be(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!_r(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],r=0;r<arguments.length;r++)e.push(arguments[r]);return new this(e)})),nr(jr.prototype,"buffer",(function(){return this._buffer.buffer})),nr(jr.prototype,"byteLength",(function(){return this._buffer.byteLength})),nr(jr.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),q(jr.prototype,"BYTES_PER_ELEMENT",jr.BYTES_PER_ELEMENT),q(jr.prototype,"copyWithin",(function(e,r){if(!Er(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*e,2*r):this._buffer.copyWithin(2*e,2*r,2*arguments[2]),this})),q(jr.prototype,"entries",(function(){var e,r,t,n,i,o,a;if(!Er(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return r=this,e=this._buffer,n=this._length,o=-1,a=-2,q(t={},"next",(function(){var r;return o+=1,i||o>=n?{done:!0}:(r=new Ke(e[a+=2],e[a+1]),{value:[o,r],done:!1})})),q(t,"return",(function(e){return i=!0,arguments.length?{value:e,done:!0}:{done:!0}})),tr&&q(t,tr,(function(){return r.entries()})),t})),q(jr.prototype,"get",(function(e){var r;if(!Er(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Ce(e))throw new TypeError(Y("invalid argument. Must provide a nonnegative integer. Value: `%s`.",e));if(!(e>=this._length))return new Ke((r=this._buffer)[e*=2],r[e+1])})),nr(jr.prototype,"length",(function(){return this._length})),q(jr.prototype,"set",(function(e){var r,t,n,i,o,a,u,f,l;if(!Er(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!Ce(t=arguments[1]))throw new TypeError(Y("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",t))}else t=0;if(Qe(e)){if(t>=this._length)throw new RangeError(Y("invalid argument. Index argument is out-of-bounds. Value: `%u`.",t));return n[t*=2]=ir(e),void(n[t+1]=or(e))}if(Er(e)){if(t+(a=e._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e._buffer,l=n.byteOffset+t*vr,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(i=new qe(r.length),f=0;f<r.length;f++)i[f]=r[f];r=i}for(t*=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2}else{if(!Ye(e))throw new TypeError(Y("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",e));for(a=e.length,f=0;f<a;f++)if(!Qe(e[f])){o=!0;break}if(o){if(!er(a))throw new RangeError(Y("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",a));if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e,l=n.byteOffset+t*vr,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(i=new qe(a),f=0;f<a;f++)i[f]=r[f];r=i}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=e[f],n[t]=ir(u),n[t+1]=or(u),t+=2}}));var Sr=2*sr.BYTES_PER_ELEMENT,Br=rr();function Or(e){return e instanceof Nr||"object"==typeof e&&null!==e&&("Complex64Array"===e.constructor.name||"Complex128Array"===e.constructor.name)&&"number"==typeof e._length&&"object"==typeof e._buffer}function Fr(e){return e===Nr||"Complex64Array"===e.name}function Mr(e){return"object"==typeof e&&null!==e&&"Complex64Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===Sr/2}function Cr(e){return"object"==typeof e&&null!==e&&"Complex128Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===Sr}function Nr(){var e,r,t,n;if(r=arguments.length,!(this instanceof Nr))return 0===r?new Nr:1===r?new Nr(arguments[0]):2===r?new Nr(arguments[0],arguments[1]):new Nr(arguments[0],arguments[1],arguments[2]);if(0===r)t=new sr(0);else if(1===r)if(Ce(arguments[0]))t=new sr(2*arguments[0]);else if(Ye(arguments[0]))if((n=(t=arguments[0]).length)&&K(t)&&Qe(t[0])){if(null===(t=Rr(new sr(2*n),t))){if(!er(n))throw new RangeError(Y("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new sr(arguments[0])}}else{if(Mr(t))t=ar(t,0);else if(Cr(t))t=cr(t,0);else if(!er(n))throw new RangeError(Y("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new sr(t)}else if($e(arguments[0])){if(!Se((t=arguments[0]).byteLength/Sr))throw new RangeError(Y("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",Sr,t.byteLength));t=new sr(t)}else{if(!Ge(arguments[0]))throw new TypeError(Y("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));if(t=arguments[0],!1===Br)throw new TypeError(Y("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!be(t[tr]))throw new TypeError(Y("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(!be((t=t[tr]()).next))throw new TypeError(Y("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if((t=Vr(t))instanceof Error)throw t;t=new sr(t)}else{if(!$e(t=arguments[0]))throw new TypeError(Y("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(!Ce(e=arguments[1]))throw new TypeError(Y("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",e));if(!Se(e/Sr))throw new RangeError(Y("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",Sr,e));if(2===r){if(!Se((n=t.byteLength-e)/Sr))throw new RangeError(Y("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",Sr,n));t=new sr(t,e)}else{if(!Ce(n=arguments[2]))throw new TypeError(Y("invalid argument. Length must be a nonnegative integer. Value: `%s`.",n));if(n*Sr>t.byteLength-e)throw new RangeError(Y("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",n*Sr));t=new sr(t,e,2*n)}}return q(this,"_buffer",t),q(this,"_length",t.length/2),this}q(Nr,"BYTES_PER_ELEMENT",Sr),q(Nr,"name","Complex128Array"),q(Nr,"from",(function(e){var r,t,n,i,o,a,u,f,l,s,c,h;if(!be(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Fr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((t=arguments.length)>1){if(!be(n=arguments[1]))throw new TypeError(Y("invalid argument. Second argument must be a function. Value: `%s`.",n));t>2&&(r=arguments[2])}if(Or(e)){if(f=e.length,n){for(o=(i=new this(f))._buffer,h=0,c=0;c<f;c++){if(Qe(s=n.call(r,e.get(c),c)))o[h]=Ar(s),o[h+1]=kr(s);else{if(!(Ie(s)&&s.length>=2))throw new TypeError(Y("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",s));o[h]=s[0],o[h+1]=s[1]}h+=2}return i}return new this(e)}if(Ye(e)){if(n){for(f=e.length,u=e.get&&e.set?yr("default"):pr("default"),c=0;c<f;c++)if(!Qe(u(e,c))){l=!0;break}if(l){if(!er(f))throw new RangeError(Y("invalid argument. First argument must have a length which is a multiple of two. Length: `%u`.",f));for(o=(i=new this(f/2))._buffer,c=0;c<f;c++)o[c]=n.call(r,u(e,c),c);return i}for(o=(i=new this(f))._buffer,h=0,c=0;c<f;c++){if(Qe(s=n.call(r,u(e,c),c)))o[h]=Ar(s),o[h+1]=kr(s);else{if(!(Ie(s)&&s.length>=2))throw new TypeError(Y("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",s));o[h]=s[0],o[h+1]=s[1]}h+=2}return i}return new this(e)}if(Ge(e)&&Br&&be(e[tr])){if(!be((o=e[tr]()).next))throw new TypeError(Y("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e));if((a=n?Lr(o,n,r):Vr(o))instanceof Error)throw a;for(o=(i=new this(f=a.length/2))._buffer,c=0;c<f;c++)o[c]=a[c];return i}throw new TypeError(Y("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e))})),q(Nr,"of",(function(){var e,r;if(!be(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Fr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],r=0;r<arguments.length;r++)e.push(arguments[r]);return new this(e)})),nr(Nr.prototype,"buffer",(function(){return this._buffer.buffer})),nr(Nr.prototype,"byteLength",(function(){return this._buffer.byteLength})),nr(Nr.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),q(Nr.prototype,"BYTES_PER_ELEMENT",Nr.BYTES_PER_ELEMENT),q(Nr.prototype,"copyWithin",(function(e,r){if(!Or(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*e,2*r):this._buffer.copyWithin(2*e,2*r,2*arguments[2]),this})),q(Nr.prototype,"entries",(function(){var e,r,t,n,i,o,a;if(!Or(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return r=this,e=this._buffer,n=this._length,o=-1,a=-2,q(t={},"next",(function(){var r;return o+=1,i||o>=n?{done:!0}:(r=new Ze(e[a+=2],e[a+1]),{value:[o,r],done:!1})})),q(t,"return",(function(e){return i=!0,arguments.length?{value:e,done:!0}:{done:!0}})),tr&&q(t,tr,(function(){return r.entries()})),t})),q(Nr.prototype,"get",(function(e){var r;if(!Or(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Ce(e))throw new TypeError(Y("invalid argument. Must provide a nonnegative integer. Value: `%s`.",e));if(!(e>=this._length))return new Ze((r=this._buffer)[e*=2],r[e+1])})),nr(Nr.prototype,"length",(function(){return this._length})),q(Nr.prototype,"set",(function(e){var r,t,n,i,o,a,u,f,l;if(!Or(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!Ce(t=arguments[1]))throw new TypeError(Y("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",t))}else t=0;if(Qe(e)){if(t>=this._length)throw new RangeError(Y("invalid argument. Index argument is out-of-bounds. Value: `%u`.",t));return n[t*=2]=Ar(e),void(n[t+1]=kr(e))}if(Or(e)){if(t+(a=e._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e._buffer,l=n.byteOffset+t*Sr,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(i=new sr(r.length),f=0;f<r.length;f++)i[f]=r[f];r=i}for(t*=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2}else{if(!Ye(e))throw new TypeError(Y("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",e));for(a=e.length,f=0;f<a;f++)if(!Qe(e[f])){o=!0;break}if(o){if(!er(a))throw new RangeError(Y("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",a));if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e,l=n.byteOffset+t*Sr,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(i=new sr(a),f=0;f<a;f++)i[f]=r[f];r=i}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=e[f],n[t]=Ar(u),n[t+1]=kr(u),t+=2}}));var Pr=[Nr,jr],Ir=["Complex64Array","Complex128Array"];return function(e){var r,t;if("object"!=typeof e||null===e)return!1;for(t=0;t<Pr.length;t++)if(e instanceof Pr[t])return!0;for(;e;){for(r=ee(e),t=0;t<Ir.length;t++)if(Ir[t]===r)return!0;e=Ee(e)}return!1}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).isComplexTypedArray=r();
//# sourceMappingURL=browser.js.map
