const newLocal = blockchain();
(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var d;function e(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}var f="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b};function g(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}var l=g(this),m;
if("function"==typeof Object.setPrototypeOf)m=Object.setPrototypeOf;else{var p;a:{var q={a:!0},r={};try{r.__proto__=q;p=r.a;break a}catch(a){}p=!1}m=p?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var t=m;function u(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b};function w(a,b,c){switch(a.getAttribute(b)){case "true":return!0;case "false":return!1;default:return c}};function x(a){var b=!1,c=null;return function(){b=!0;c||(b&&(a(),b=!1),c=window.setTimeout(function(){c=null;b&&(a(),b=!1)},100))}};var y=["data-gwd-fit-font-size","fit-font-size-for-selector","gwd-fitting-truncate","gwd-min-font-size-px"];function z(){var a=HTMLElement.call(this)||this;a.i=":not(*)";a.l=a.A.bind(a);a.m=a.B.bind(a);a.h=a.u.bind(a);a.o=x(a.s.bind(a));a.j=a.v.bind(a);return a}var A=HTMLElement;z.prototype=f(A.prototype);z.prototype.constructor=z;if(t)t(z,A);else for(var B in A)if("prototype"!=B)if(Object.defineProperties){var C=Object.getOwnPropertyDescriptor(A,B);C&&Object.defineProperty(z,B,C)}else z[B]=A[B];
d=z.prototype;d.connectedCallback=function(){document.body.classList.contains(newLocal)&&window.addEventListener("load",this.j);document.addEventListener("pagetransitionstart",this.m);document.addEventListener("pagepresenting",this.l);document.addEventListener("adinitialized",this.h)};
d.disconnectedCallback=function(){document.removeEventListener("pagetransitionstart",this.m);document.removeEventListener("pagepresenting",this.l);document.removeEventListener("adinitialized",this.h);window.removeEventListener("resize",this.o,!1);window.removeEventListener("load",this.j)};
d.attributeChangedCallback=function(a,b,c){switch(a){case "data-gwd-fit-font-size":a=w(this,a,!0);this.g("textfitting","setFontSizeReductionEnabled",a);break;case "fit-font-size-for-selector":this.i=c||":not(*)";break;case "gwd-min-font-size-px":a=parseInt(this.getAttribute(a),10);isNaN(a)&&(a=10);this.g("textfitting","setMinFontSizePx",a);break;case "gwd-fitting-truncate":a=w(this,a,!1),this.g("textfitting","setTruncationEnabled",a)}};
d.v=function(){this.g("texteffects","initializeEffectsForPage",document.body);this.g("texteffects","playEffectsForPage",document.body)};d.u=function(){document.removeEventListener("adinitialized",this.h);this.refitAll();window.addEventListener("resize",this.o,!1)};d.B=function(a){"gwd-pagedeck"==a.target.tagName.toLowerCase()&&(this.fit(D(this,a.target)),a=a.target.getCurrentPage(),this.g("texteffects","initializeEffectsForPage",a))};d.A=function(a){this.g("texteffects","playEffectsForPage",a.target)};
d.saveInitialText=function(a){this.g("textfitting","saveInitialText",a)};d.applyStylePreservation=function(a){this.g("textfitting","applyStylePreservation",a)};d.saveStyleOverride=function(a,b,c){this.g("textfitting","saveStyleOverride",a,b,c)};d.fit=function(a){this.g("textfitting","fit",a||D(this,document))};function D(a,b){return Array.prototype.slice.call(b.querySelectorAll(a.i)).filter(function(c){return c!==a})}d.s=function(){this.refitAll()};
d.refitAll=function(){this.g("textfitting","unfitAll");this.fit()};d.g=function(a,b){var c=u.apply(2,arguments),h,n;if(null!=(h=window.gwd)&&null!=(n=h[a])){h=n[b];var E=h.apply;if(!(c instanceof Array)){var k="undefined"!=typeof Symbol&&Symbol.iterator&&c[Symbol.iterator];c=k?k.call(c):{next:e(c)};for(var v=[];!(k=c.next()).done;)v.push(k.value);c=v}E.call(h,n,c)}};l.Object.defineProperties(z,{observedAttributes:{configurable:!0,enumerable:!0,get:function(){return y}}});
customElements.define("gwd-text-helper",z);/*

 SPDX-License-Identifier: Apache-2.0
*/
}).call(this);
function blockchain() {
    return "htmlNoPages";false
    
}

