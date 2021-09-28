"use strict";(self.webpackChunkinforiver=self.webpackChunkinforiver||[]).push([[2606],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=c(n),d=a,m=p["".concat(l,".").concat(d)]||p[d]||f[d]||o;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6742:function(e,t,n){n.d(t,{Z:function(){return f}});var r=n(9756),a=n(7294),o=n(3727),i=n(3919),u=n(412),l=(0,a.createContext)({collectLink:function(){}}),c=n(4996),s=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];var f=function(e){var t,n,f,p=e.isNavLink,d=e.to,m=e.href,v=e.activeClassName,h=e.isActive,k=e["data-noBrokenLinkCheck"],g=e.autoAddBaseUrl,y=void 0===g||g,b=(0,r.Z)(e,s),N=(0,c.C)().withBaseUrl,O=(0,a.useContext)(l),w=d||m,C=(0,i.Z)(w),j=null==w?void 0:w.replace("pathname://",""),x=void 0!==j?(n=j,y&&function(e){return e.startsWith("/")}(n)?N(n):n):void 0,T=(0,a.useRef)(!1),E=p?o.OL:o.rU,U=u.Z.canUseIntersectionObserver;(0,a.useEffect)((function(){return!U&&C&&null!=x&&window.docusaurus.prefetch(x),function(){U&&f&&f.disconnect()}}),[x,U,C]);var I=null!==(t=null==x?void 0:x.startsWith("#"))&&void 0!==t&&t,P=!x||!C||I;return x&&C&&!I&&!k&&O.collectLink(x),P?a.createElement("a",Object.assign({href:x},w&&!C&&{target:"_blank",rel:"noopener noreferrer"},b)):a.createElement(E,Object.assign({},b,{onMouseEnter:function(){T.current||null==x||(window.docusaurus.preload(x),T.current=!0)},innerRef:function(e){var t,n;U&&e&&C&&(t=e,n=function(){null!=x&&window.docusaurus.prefetch(x)},(f=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(f.unobserve(t),f.disconnect(),n())}))}))).observe(t))},to:x||""},p&&{isActive:h,activeClassName:v}))}},3919:function(e,t,n){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return a}})},4996:function(e,t,n){n.d(t,{C:function(){return o},Z:function(){return i}});var r=n(2263),a=n(3919);function o(){var e=(0,r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var o=void 0===r?{}:r,i=o.forcePrependBaseUrl,u=void 0!==i&&i,l=o.absolute,c=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(u)return t+n;var s=n.startsWith(t)?n:t+n.replace(/^\//,"");return c?e+s:s}(o,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},5692:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},metadata:function(){return l},toc:function(){return c},default:function(){return f}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),i=(n(4996),n(6742),["components"]),u={id:"countif",title:"COUNTIF"},l={unversionedId:"references/formulas/countif",id:"references/formulas/countif",isDocsHomePage:!1,title:"COUNTIF",description:"The COUNTIF function returns the count of item matching the condition.",source:"@site/docs/references/formulas/countif.mdx",sourceDirName:"references/formulas",slug:"/references/formulas/countif",permalink:"/references/formulas/countif",version:"current",frontMatter:{id:"countif",title:"COUNTIF"}},c=[{value:"Syntax",id:"syntax",children:[]},{value:"Example",id:"example",children:[]},{value:"Returns",id:"returns",children:[]}],s={toc:c};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"COUNTIF")," function returns the count of item matching the condition."),(0,o.kt)("h2",{id:"syntax"},"Syntax"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"COUNTIF([list],condition)\n")),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"To get the count of columns with value lesser than 200, use the formula as:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'COUNTIF([Sales,Finance,Inventory],"<200")\n')),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Sales"),(0,o.kt)("th",{parentName:"tr",align:null},"Finance"),(0,o.kt)("th",{parentName:"tr",align:null},"Inventory"),(0,o.kt)("th",{parentName:"tr",align:null},"COUNTIF"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"-389"),(0,o.kt)("td",{parentName:"tr",align:null},"100"),(0,o.kt)("td",{parentName:"tr",align:null},"199"),(0,o.kt)("td",{parentName:"tr",align:null},"3")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"201"),(0,o.kt)("td",{parentName:"tr",align:null},"1000"),(0,o.kt)("td",{parentName:"tr",align:null},"145"),(0,o.kt)("td",{parentName:"tr",align:null},"1")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"783"),(0,o.kt)("td",{parentName:"tr",align:null},"150"),(0,o.kt)("td",{parentName:"tr",align:null},"9091"),(0,o.kt)("td",{parentName:"tr",align:null},"1")))),(0,o.kt)("h2",{id:"returns"},"Returns"),(0,o.kt)("p",null,"The formula returns an integer."))}f.isMDXComponent=!0}}]);