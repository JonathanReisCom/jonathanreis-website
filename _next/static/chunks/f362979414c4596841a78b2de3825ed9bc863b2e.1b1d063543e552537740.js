(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{Bhub:function(e,t,o){"use strict";var n=o("ODXe"),r=o("rePB"),a=o("q1tI"),i=o.n(a),s=o("R/WZ"),l=o("ofer"),c=o("tRbT"),u=(o("HMs9"),o("IDPK")),d=o("UBks"),f=o("cGzH"),p=i.a.createElement,m={containerProfile:{textAlign:"center",marginBottom:"3rem"},imagem:Object(r.a)({width:560,height:100,objectFit:"contain",paddingLeft:34},f.a.breakpoints.down("xs"),{width:"100%",paddingLeft:18})},v=Object(s.a)(m);t.a=function(e){var t=v(),o=i.a.useState("https://grass-graph.moshimo.works/images/JonathanReisCom.png?width=568&background=none"),r=Object(n.a)(o,2),a=r[0];r[1];return p(u.a,{color:!1},p(c.a,{container:!0,className:t.containerProfile},p(c.a,{item:!0,xs:12,sm:12,md:12},p(l.a,{variant:"h2"},p(d.a,null,"Atividade no GitHub"))),p(c.a,{item:!0,xs:12,sm:12,md:12},p("br",null),p("img",{className:t.imagem,src:a,alt:"JonathanReis Github chart"}))))}},HMs9:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.forceVisible=t.forceCheck=t.lazyload=void 0;var n=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),r=o("q1tI"),a=d(r),i=d(o("17x9")),s=o("Seim"),l=d(o("tvXG")),c=d(o("PTkm")),u=d(o("uUxy"));function d(e){return e&&e.__esModule?e:{default:e}}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function m(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var v=0,h=0,b=0,g=0,y="data-lazyload-listened",w=[],x=[],O=!1;try{var E=Object.defineProperty({},"passive",{get:function(){O=!0}});window.addEventListener("test",null,E)}catch(B){}var j=!!O&&{capture:!1,passive:!0},P=function(e){var t=e.ref;if(t instanceof HTMLElement){var o=(0,l.default)(t);(e.props.overflow&&o!==t.ownerDocument&&o!==document&&o!==document.documentElement?function(e,t){var o=e.ref,n=void 0,r=void 0,a=void 0,i=void 0;try{var s=t.getBoundingClientRect();n=s.top,r=s.left,a=s.height,i=s.width}catch(B){n=v,r=h,a=g,i=b}var l=window.innerHeight||document.documentElement.clientHeight,c=window.innerWidth||document.documentElement.clientWidth,u=Math.max(n,0),d=Math.max(r,0),f=Math.min(l,n+a)-u,p=Math.min(c,r+i)-d,m=void 0,y=void 0,w=void 0,x=void 0;try{var O=o.getBoundingClientRect();m=O.top,y=O.left,w=O.height,x=O.width}catch(B){m=v,y=h,w=g,x=b}var E=m-u,j=y-d,P=Array.isArray(e.props.offset)?e.props.offset:[e.props.offset,e.props.offset];return E-P[0]<=f&&E+w+P[1]>=0&&j-P[0]<=p&&j+x+P[1]>=0}(e,o):function(e){var t=e.ref;if(!(t.offsetWidth||t.offsetHeight||t.getClientRects().length))return!1;var o=void 0,n=void 0;try{var r=t.getBoundingClientRect();o=r.top,n=r.height}catch(B){o=v,n=g}var a=window.innerHeight||document.documentElement.clientHeight,i=Array.isArray(e.props.offset)?e.props.offset:[e.props.offset,e.props.offset];return o-i[0]<=a&&o+n+i[1]>=0}(e))?e.visible||(e.props.once&&x.push(e),e.visible=!0,e.forceUpdate()):e.props.once&&e.visible||(e.visible=!1,e.props.unmountIfInvisible&&e.forceUpdate())}},R=function(){x.forEach((function(e){var t=w.indexOf(e);-1!==t&&w.splice(t,1)})),x=[]},S=function(){for(var e=0;e<w.length;++e){var t=w[e];P(t)}R()},k=void 0,T=null,A=function(e){function t(e){f(this,t);var o=p(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return o.visible=!1,o.setRef=o.setRef.bind(o),o}return m(t,e),n(t,[{key:"componentDidMount",value:function(){var e=window,t=this.props.scrollContainer;t&&"string"===typeof t&&(e=e.document.querySelector(t));var o=void 0!==this.props.debounce&&"throttle"===k||"debounce"===k&&void 0===this.props.debounce;if(o&&((0,s.off)(e,"scroll",T,j),(0,s.off)(window,"resize",T,j),T=null),T||(void 0!==this.props.debounce?(T=(0,c.default)(S,"number"===typeof this.props.debounce?this.props.debounce:300),k="debounce"):void 0!==this.props.throttle?(T=(0,u.default)(S,"number"===typeof this.props.throttle?this.props.throttle:300),k="throttle"):T=S),this.props.overflow){var n=(0,l.default)(this.ref);if(n&&"function"===typeof n.getAttribute){var r=+n.getAttribute(y)+1;1===r&&n.addEventListener("scroll",T,j),n.setAttribute(y,r)}}else if(0===w.length||o){var a=this.props,i=a.scroll,d=a.resize;i&&(0,s.on)(e,"scroll",T,j),d&&(0,s.on)(window,"resize",T,j)}w.push(this),P(this)}},{key:"shouldComponentUpdate",value:function(){return this.visible}},{key:"componentWillUnmount",value:function(){if(this.props.overflow){var e=(0,l.default)(this.ref);if(e&&"function"===typeof e.getAttribute){var t=+e.getAttribute(y)-1;0===t?(e.removeEventListener("scroll",T,j),e.removeAttribute(y)):e.setAttribute(y,t)}}var o=w.indexOf(this);-1!==o&&w.splice(o,1),0===w.length&&"undefined"!==typeof window&&((0,s.off)(window,"resize",T,j),(0,s.off)(window,"scroll",T,j))}},{key:"setRef",value:function(e){e&&(this.ref=e)}},{key:"render",value:function(){return a.default.createElement("span",{className:"lazyload-wrapper",ref:this.setRef},this.visible?this.props.children:this.props.placeholder?this.props.placeholder:a.default.createElement("div",{style:{height:this.props.height},className:"lazyload-placeholder"}))}}]),t}(r.Component);A.propTypes={once:i.default.bool,height:i.default.oneOfType([i.default.number,i.default.string]),offset:i.default.oneOfType([i.default.number,i.default.arrayOf(i.default.number)]),overflow:i.default.bool,resize:i.default.bool,scroll:i.default.bool,children:i.default.node,throttle:i.default.oneOfType([i.default.number,i.default.bool]),debounce:i.default.oneOfType([i.default.number,i.default.bool]),placeholder:i.default.node,scrollContainer:i.default.oneOfType([i.default.string,i.default.object]),unmountIfInvisible:i.default.bool},A.defaultProps={once:!1,offset:0,overflow:!1,resize:!1,scroll:!0,unmountIfInvisible:!1};var z=function(e){return e.displayName||e.name||"Component"};t.lazyload=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(t){return function(o){function r(){f(this,r);var e=p(this,(r.__proto__||Object.getPrototypeOf(r)).call(this));return e.displayName="LazyLoad"+z(t),e}return m(r,o),n(r,[{key:"render",value:function(){return a.default.createElement(A,e,a.default.createElement(t,this.props))}}]),r}(r.Component)}},t.default=A,t.forceCheck=S,t.forceVisible=function(){for(var e=0;e<w.length;++e){var t=w[e];t.visible=!0,t.forceUpdate()}R()}},IDPK:function(e,t,o){"use strict";var n=o("rePB"),r=o("q1tI"),a=o.n(r),i=o("TSYQ"),s=o.n(i),l=o("R/WZ"),c=o("Ji2X"),u=o("cGzH"),d=a.a.createElement,f=u.a.sizes.subSectionPadding,p={subSection:{paddingTop:f,paddingBottom:f,position:"relative"},relative:{position:"relative"},colored:{height:"100%",width:"100%",position:"absolute",top:0,background:"radial-gradient(ellipse at center, #585858 0, #232323 100%)"},overBottom:{height:"calc(100% - ".concat(2*f-f/2,"px)")}},m=Object(l.a)(p);t.a=function(e){var t,o,r=m(),a=null;e.color&&(a=d("div",{className:s()((o={},Object(n.a)(o,r.colored,!0),Object(n.a)(o,r.overBottom,e.overBottom),o))}));return d("div",{className:s()((t={},Object(n.a)(t,r.subSection,!0),Object(n.a)(t,r.overBottom,e.overBottom),t))},a,d(c.a,{maxWidth:e.maxWidth?e.maxWidth:"md",disableGutters:!0,className:r.relative},e.children))}},PTkm:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,o){var n=void 0,r=void 0,a=void 0,i=void 0,s=void 0,l=function l(){var c=+new Date-i;c<t&&c>=0?n=setTimeout(l,t-c):(n=null,o||(s=e.apply(a,r),n||(a=null,r=null)))};return function(){a=this,r=arguments,i=+new Date;var c=o&&!n;return n||(n=setTimeout(l,t)),c&&(s=e.apply(a,r),a=null,r=null),s}}},Seim:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.on=function(e,t,o,n){n=n||!1,e.addEventListener?e.addEventListener(t,o,n):e.attachEvent&&e.attachEvent("on"+t,(function(t){o.call(e,t||window.event)}))},t.off=function(e,t,o,n){n=n||!1,e.removeEventListener?e.removeEventListener(t,o,n):e.detachEvent&&e.detachEvent("on"+t,o)}},XBo5:function(e,t,o){"use strict";var n=o("q1tI"),r=o.n(n),a=o("R/WZ"),i=o("ofer"),s=o("tRbT"),l=o("wx14"),c=o("Ff2n"),u=(o("17x9"),o("iuhU")),d=o("H2TA"),f=o("HR5l");var p=function(e,t){var o=function(t,o){return r.a.createElement(f.a,Object(l.a)({ref:o},t),e)};return o.muiName=f.a.muiName,r.a.memo(r.a.forwardRef(o))}(n.createElement("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}));var m=n.forwardRef((function(e,t){var o=e.alt,r=e.children,a=e.classes,i=e.className,s=e.component,d=void 0===s?"div":s,f=e.imgProps,m=e.sizes,v=e.src,h=e.srcSet,b=e.variant,g=void 0===b?"circle":b,y=Object(c.a)(e,["alt","children","classes","className","component","imgProps","sizes","src","srcSet","variant"]),w=null,x=function(e){var t=e.src,o=e.srcSet,r=n.useState(!1),a=r[0],i=r[1];return n.useEffect((function(){if(t||o){i(!1);var e=!0,n=new Image;return n.src=t,n.srcSet=o,n.onload=function(){e&&i("loaded")},n.onerror=function(){e&&i("error")},function(){e=!1}}}),[t,o]),a}({src:v,srcSet:h}),O=v||h,E=O&&"error"!==x;return w=E?n.createElement("img",Object(l.a)({alt:o,src:v,srcSet:h,sizes:m,className:a.img},f)):null!=r?r:O&&o?o[0]:n.createElement(p,{className:a.fallback}),n.createElement(d,Object(l.a)({className:Object(u.a)(a.root,a.system,a[g],i,!E&&a.colorDefault),ref:t},y),w)})),v=Object(d.a)((function(e){return{root:{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},colorDefault:{color:e.palette.background.default,backgroundColor:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[600]},circle:{},rounded:{borderRadius:e.shape.borderRadius},square:{borderRadius:0},img:{width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4},fallback:{width:"75%",height:"75%"}}}),{name:"MuiAvatar"})(m),h=o("IDPK"),b=o("UBks"),g=o("cGzH"),y=r.a.createElement,w=g.a.sizes.subSectionPadding,x={containerAvatar:{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"calc(-".concat(w,"px - ").concat(80,"px)")},avatar:{minWidth:160,minHeight:160,borderRadius:"50%",MozBorderRadius:"50%",WebkitBorderRadius:"50%",boxShadow:"0 5px 15px -8px rgba(0, 0, 0, 0.24), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"},containerProfile:{paddingTop:w/2,textAlign:"center"},containerAbout:{paddingTop:w/2,textAlign:"left"},containerBottom:{textAlign:"center",marginTop:"2rem"},align:{textAlign:"center"}},O=Object(a.a)(x);t.a=function(e){var t=O(),o="Jonathan Reis",n="Fullstack Developer",r="Sou desenvolvedor Full-Stack, apaixonado por tecnologia, e principalmente por desenvolvimento, tenho conhecimento na \xe1rea de desenvolvimento de aplicativos e games, de prefer\xeancia Mobile (IOS e Android)",a="Invento, escrevo, codifico, gerencio, fa\xe7o a manuten\xe7\xe3o... enfim, executo todas as fases de desenvolvimento de aplicativos, games, websites, sistemas para as plataformas Android, iOS e web.",l="Crio estrat\xe9gias de monetiza\xe7\xe3o para aplicativos usando vendas ou an\xfancios in-app.",c="Possuo experi\xeancia de mais de 10 anos com desenvolvimento, alocado em empresas no modelo CLT e PJ, tamb\xe9m fa\xe7o trabalhos como freelancer, desenvolvendo para empresas como Spot Educa\xe7\xe3o, Hyper English, Yupi Studios e Red Bull, tenho facilidade com linguagens como JavaScript, C++, PHP, Java, Swift e outras.";return y(h.a,{maxWidth:"sm"},y(s.a,{container:!0,className:t.containerAvatar},y(v,{alt:"Jonathan Reis",src:"https://avatars2.githubusercontent.com/u/3427409?s=460&u=31771fecf4d95a1c16d06f1ff4d1d2a0af27262a&v=4",className:t.avatar})),y(s.a,{container:!0,className:t.containerProfile},y(s.a,{item:!0,xs:12,sm:12,md:12},y(i.a,{variant:"h2",gutterBottom:!0},y(b.a,null,o)),y(i.a,{variant:"body1"},y(b.a,null,n)))),y(s.a,{container:!0,className:t.containerAbout},y(s.a,{item:!0,xs:12,sm:12,md:12},y(i.a,{variant:"body1",gutterBottom:!0},r),y(i.a,{variant:"body1",gutterBottom:!0},a),y(i.a,{variant:"body1",gutterBottom:!0},l),y(i.a,{variant:"body1"},c))))}},tvXG:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(!(e instanceof HTMLElement))return document.documentElement;for(var t="absolute"===e.style.position,o=/(scroll|auto)/,n=e;n;){if(!n.parentNode)return e.ownerDocument||document.documentElement;var r=window.getComputedStyle(n),a=r.position,i=r.overflow,s=r["overflow-x"],l=r["overflow-y"];if("static"===a&&t)n=n.parentNode;else{if(o.test(i)&&o.test(s)&&o.test(l))return n;n=n.parentNode}}return e.ownerDocument||e.documentElement||document.documentElement}},uUxy:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,o){var n,r;return t||(t=250),function(){var a=o||this,i=+new Date,s=arguments;n&&i<n+t?(clearTimeout(r),r=setTimeout((function(){n=i,e.apply(a,s)}),t)):(n=i,e.apply(a,s))}}}}]);