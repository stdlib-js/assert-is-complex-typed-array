"use strict";var i=function(e,t){return function(){try{return t||e((t={exports:{}}).exports,t),t.exports}catch(r){throw (t=0, r)}};};var a=i(function(g,o){
var x=require('@stdlib/array-complex64/dist'),y=require('@stdlib/array-complex128/dist'),c=[y,x];o.exports=c
});var s=i(function(h,m){m.exports=["Complex64Array","Complex128Array"]});var p=i(function(O,f){
var q=require('@stdlib/utils-constructor-name/dist'),C=require('@stdlib/utils-get-prototype-of/dist'),n=a(),u=s();function l(e){var t,r;if(typeof e!="object"||e===null)return!1;for(r=0;r<n.length;r++)if(e instanceof n[r])return!0;for(;e;){for(t=q(e),r=0;r<u.length;r++)if(u[r]===t)return!0;e=C(e)}return!1}f.exports=l
});var A=p();module.exports=A;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
