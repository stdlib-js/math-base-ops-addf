// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Math.fround?Math.fround:null;var r="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var o=Object.prototype.toString;var n=Object.prototype.hasOwnProperty;var a="function"==typeof Symbol?Symbol.toStringTag:"";var e=r&&"symbol"==typeof Symbol.toStringTag?function(t){var r,e,l,f,u;if(null==t)return o.call(t);e=t[a],u=a,r=null!=(f=t)&&n.call(f,u);try{t[a]=void 0}catch(r){return o.call(t)}return l=o.call(t),r?t[a]=e:delete t[a],l}:function(t){return o.call(t)},l="function"==typeof Float32Array;var f=Number.POSITIVE_INFINITY,u="function"==typeof Float32Array?Float32Array:null;var y="function"==typeof Float32Array?Float32Array:void 0;var c=new(function(){var t,r,o;if("function"!=typeof u)return!1;try{r=new u([1,3.14,-3.14,5e40]),o=r,t=(l&&o instanceof Float32Array||"[object Float32Array]"===e(o))&&1===r[0]&&3.140000104904175===r[1]&&-3.140000104904175===r[2]&&r[3]===f}catch(r){t=!1}return t}()?y:function(){throw new Error("not implemented")})(1);var i="function"==typeof t?t:function(t){return c[0]=t,c[0]};function p(t,r){return i(i(t)+i(r))}export{p as default};
//# sourceMappingURL=mod.js.map
