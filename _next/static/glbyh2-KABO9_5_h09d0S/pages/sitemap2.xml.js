(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"037t":function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/sitemap2.xml",function(){return e("4QGt")}])},"1OyB":function(t,n,e){"use strict";function r(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}e.d(n,"a",(function(){return r}))},"4QGt":function(t,n,e){"use strict";e.r(n);var r=e("o0o1"),o=e.n(r);function u(t,n,e,r,o,u,c){try{var i=t[u](c),f=i.value}catch(a){return void e(a)}i.done?n(f):Promise.resolve(f).then(r,o)}var c=e("1OyB"),i=e("vuIU");function f(t,n){return(f=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}var a=e("U8pU"),s=e("JX7q");function p(t,n){return!n||"object"!==Object(a.a)(n)&&"function"!==typeof n?Object(s.a)(t):n}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var y=e("q1tI");function b(t){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,r=l(t);if(n){var o=l(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return p(this,e)}}var v=function(t){!function(t,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&f(t,n)}(e,t);var n=b(e);function e(){return Object(c.a)(this,e),n.apply(this,arguments)}return Object(i.a)(e,null,[{key:"getServerSideProps",value:function(){var t,n=(t=o.a.mark((function t(n){var e,r,u;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=n.res,t.next=3,fetch(EXTERNAL_DATA_URL);case 3:return r=t.sent,t.next=6,r.json();case 6:u=t.sent,e.setHeader("Content-Type","text/xml"),e.write(createSitemap(u)),e.end();case 10:case"end":return t.stop()}}),t)})),function(){var n=this,e=arguments;return new Promise((function(r,o){var c=t.apply(n,e);function i(t){u(c,r,o,i,f,"next",t)}function f(t){u(c,r,o,i,f,"throw",t)}i(void 0)}))});return function(t){return n.apply(this,arguments)}}()}]),e}(e.n(y).a.Component);n.default=v},JX7q:function(t,n,e){"use strict";function r(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}e.d(n,"a",(function(){return r}))},U8pU:function(t,n,e){"use strict";function r(t){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}e.d(n,"a",(function(){return r}))},o0o1:function(t,n,e){t.exports=e("ls82")},vuIU:function(t,n,e){"use strict";function r(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,n,e){return n&&r(t.prototype,n),e&&r(t,e),t}e.d(n,"a",(function(){return o}))}},[["037t",0,2,1]]]);