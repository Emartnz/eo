(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[435],{227:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,r,o){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1551:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(2648).Z,n=r(7273).Z,l=o(r(7294)),a=r(1003),u=r(7795),c=r(4465),i=r(2692),f=r(8245),s=r(9246),d=r(227),p=r(3468);let y=new Set;function v(e,t,r,o){if(a.isLocalURL(t)){if(!o.bypassPrefetchedCheck){let n=void 0!==o.locale?o.locale:"locale"in e?e.locale:void 0,l=t+"%"+r+"%"+n;if(y.has(l))return;y.add(l)}Promise.resolve(e.prefetch(t,r,o)).catch(e=>{})}}function h(e){return"string"==typeof e?e:u.formatUrl(e)}let b=l.default.forwardRef(function(e,t){let r,o;let{href:u,as:y,children:b,prefetch:g,passHref:m,replace:C,shallow:O,scroll:k,locale:_,onClick:j,onMouseEnter:E,onTouchStart:w,legacyBehavior:M=!1}=e,x=n(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);r=b,M&&("string"==typeof r||"number"==typeof r)&&(r=l.default.createElement("a",null,r));let P=!1!==g,L=l.default.useContext(i.RouterContext),N=l.default.useContext(f.AppRouterContext),R=null!=L?L:N,S=!L,{href:I,as:T}=l.default.useMemo(()=>{if(!L){let e=h(u);return{href:e,as:y?h(y):e}}let[e,t]=a.resolveHref(L,u,!0);return{href:e,as:y?a.resolveHref(L,y):t||e}},[L,u,y]),z=l.default.useRef(I),D=l.default.useRef(T);M&&(o=l.default.Children.only(r));let K=M?o&&"object"==typeof o&&o.ref:t,[U,B,H]=s.useIntersection({rootMargin:"200px"}),A=l.default.useCallback(e=>{(D.current!==T||z.current!==I)&&(H(),D.current=T,z.current=I),U(e),K&&("function"==typeof K?K(e):"object"==typeof K&&(K.current=e))},[T,K,I,H,U]);l.default.useEffect(()=>{R&&B&&P&&v(R,I,T,{locale:_})},[T,I,B,_,P,null==L?void 0:L.locale,R]);let W={ref:A,onClick(e){M||"function"!=typeof j||j(e),M&&o.props&&"function"==typeof o.props.onClick&&o.props.onClick(e),R&&!e.defaultPrevented&&function(e,t,r,o,n,u,c,i,f,s){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let{target:t}=e.currentTarget;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!a.isLocalURL(r)))return;e.preventDefault();let y=()=>{"beforePopState"in t?t[n?"replace":"push"](r,o,{shallow:u,locale:i,scroll:c}):t[n?"replace":"push"](o||r,{forceOptimisticNavigation:!s})};f?l.default.startTransition(y):y()}(e,R,I,T,C,O,k,_,S,P)},onMouseEnter(e){M||"function"!=typeof E||E(e),M&&o.props&&"function"==typeof o.props.onMouseEnter&&o.props.onMouseEnter(e),R&&(P||!S)&&v(R,I,T,{locale:_,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart(e){M||"function"!=typeof w||w(e),M&&o.props&&"function"==typeof o.props.onTouchStart&&o.props.onTouchStart(e),R&&(P||!S)&&v(R,I,T,{locale:_,priority:!0,bypassPrefetchedCheck:!0})}};if(!M||m||"a"===o.type&&!("href"in o.props)){let e=void 0!==_?_:null==L?void 0:L.locale,t=(null==L?void 0:L.isLocaleDomain)&&d.getDomainLocale(T,e,null==L?void 0:L.locales,null==L?void 0:L.domainLocales);W.href=t||p.addBasePath(c.addLocale(T,e,null==L?void 0:L.defaultLocale))}return M?l.default.cloneElement(o,W):l.default.createElement("a",Object.assign({},x,W),r)});t.default=b,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:r,disabled:c}=e,i=c||!l,[f,s]=o.useState(!1),d=o.useRef(null),p=o.useCallback(e=>{d.current=e},[]);o.useEffect(()=>{if(l){if(i||f)return;let e=d.current;if(e&&e.tagName){let o=function(e,t,r){let{id:o,observer:n,elements:l}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},o=u.find(e=>e.root===r.root&&e.margin===r.margin);if(o&&(t=a.get(o)))return t;let n=new Map,l=new IntersectionObserver(e=>{e.forEach(e=>{let t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e);return t={id:r,observer:l,elements:n},u.push(r),a.set(r,t),t}(r);return l.set(e,t),n.observe(e),function(){if(l.delete(e),n.unobserve(e),0===l.size){n.disconnect(),a.delete(o);let e=u.findIndex(e=>e.root===o.root&&e.margin===o.margin);e>-1&&u.splice(e,1)}}}(e,e=>e&&s(e),{root:null==t?void 0:t.current,rootMargin:r});return o}}else if(!f){let e=n.requestIdleCallback(()=>s(!0));return()=>n.cancelIdleCallback(e)}},[i,r,t,f,d.current]);let y=o.useCallback(()=>{s(!1)},[]);return[p,f,y]};var o=r(7294),n=r(4686);let l="function"==typeof IntersectionObserver,a=new Map,u=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1664:function(e,t,r){e.exports=r(1551)},7219:function(e,t,r){"use strict";r.d(t,{Rgz:function(){return i}});var o=r(7294),n={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},l=o.createContext&&o.createContext(n),a=function(){return(a=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},u=function(e,t){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&0>t.indexOf(o)&&(r[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,o=Object.getOwnPropertySymbols(e);n<o.length;n++)0>t.indexOf(o[n])&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(r[o[n]]=e[o[n]]);return r};function c(e){var t=function(t){var r,n=e.attr,l=e.size,c=e.title,i=u(e,["attr","size","title"]),f=l||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),o.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,i,{className:r,style:a(a({color:e.color||t.color},t.style),e.style),height:f,width:f,xmlns:"http://www.w3.org/2000/svg"}),c&&o.createElement("title",null,c),e.children)};return void 0!==l?o.createElement(l.Consumer,null,function(e){return t(e)}):t(n)}function i(e){var t;return(t={tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"5",y1:"12",x2:"19",y2:"12"}},{tag:"polyline",attr:{points:"12 5 19 12 12 19"}}]},function(e){return o.createElement(c,a({attr:a({},t.attr)},e),function e(t){return t&&t.map(function(t,r){return o.createElement(t.tag,a({key:r},t.attr),e(t.child))})}(t.child))})(e)}}}]);