/*! For license information please see 11738f66.2c7918a0.js.LICENSE.txt */
"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4949],{6164:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>y});var n=r(5721);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=n.createContext({}),u=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(a.Provider,{value:t},e.children)},f="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=u(r),p=o,y=f["".concat(a,".").concat(p)]||f[p]||d[p]||i;return r?n.createElement(y,s(s({ref:t},l),{},{components:r})):n.createElement(y,s({ref:t},l))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,s=new Array(i);s[0]=p;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c[f]="string"==typeof e?e:o,s[1]=c;for(var u=2;u<i;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},8138:(e,t,r)=>{r.d(t,{AB:()=>s,df:()=>l,iP:()=>P,wY:()=>f,yU:()=>M});var n=r(6521),o=r(5721);r(6157);function i(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}"function"==typeof SuppressedError&&SuppressedError;"function"==typeof SuppressedError&&SuppressedError;const s=e=>{let{children:t}=e;const r=Math.random()<.5?0:1,n=o.Children.toArray(t);let i=0,c=0;if(2!==n.length)return null;for(const o of n){if(![s.CaseA,s.CaseB].includes(o.type))return null;o.type===s.CaseA?i+=1:c+=1}return i>=2||c>=2?null:r?n[0]:n[1]};s.CaseA=e=>{let{children:t}=e;return(0,n.jsx)(o.Fragment,{children:t})},s.CaseB=e=>{let{children:t}=e;return(0,n.jsx)(o.Fragment,{children:t})};const c=e=>{const t=(0,o.useRef)(e);return(0,o.useEffect)((()=>{t.current=e}),[e]),(0,o.useCallback)((function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];t.current(1===r.length?r[0]:r)}),[])},a=e=>{let{action:t,calledOnce:r=!1,root:n=null,threshold:i=0,rootMargin:s="0px 0px 0px 0px"}=e;const a=(0,o.useRef)(null),u=c(t),l=(0,o.useCallback)(((e,t)=>{let[n]=e;if(n&&n.isIntersecting){const e=n.target;u&&u(n),r&&t.unobserve(e)}}),[u,r]);return(0,o.useEffect)((()=>{const e=a.current;if("undefined"==typeof IntersectionObserver)return;if(!e)return;const t=new IntersectionObserver(l,{root:n,rootMargin:s,threshold:i});return t.observe(e),()=>{t.unobserve(e)}}),[n,i,s,l]),a},u=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,o.useCallback)((e=>{t.forEach((t=>{"function"==typeof t?t(e):null!=t&&(t.current=e)}))}),[...t])},l=(0,o.forwardRef)(((e,t)=>{const{action:r,calledOnce:o,threshold:s,root:c,rootMargin:l}=e,f=i(e,["action","calledOnce","threshold","root","rootMargin"]),d=a({action:r,calledOnce:o,threshold:s,root:c,rootMargin:l});return(0,n.jsx)("div",Object.assign({ref:u(t,d)},f,{children:e.children}))})),f=(0,o.forwardRef)(((e,t)=>{var{src:r,style:s,threshold:c,root:l,rootMargin:f}=e,d=i(e,["src","style","threshold","root","rootMargin"]);const p=a({action:e=>{e.target.src=r},calledOnce:!0,threshold:c,root:l,rootMargin:f}),y=(0,o.useMemo)((()=>Object.assign({display:"inline-block"},s)),[s]);return(0,n.jsx)("img",Object.assign({},d,{ref:u(t,p),style:y}))}));var d="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==r.g?r.g:"undefined"!=typeof self?self:{};var p=/^\s+|\s+$/g,y=/^[-+]0x[0-9a-f]+$/i,b=/^0b[01]+$/i,h=/^0o[0-7]+$/i,v=parseInt,m="object"==typeof d&&d&&d.Object===Object&&d,g="object"==typeof self&&self&&self.Object===Object&&self,O=m||g||Function("return this")(),w=Object.prototype.toString,k=Math.max,R=Math.min,j=function(){return O.Date.now()};function x(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function E(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==w.call(e)}(e))return NaN;if(x(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=x(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(p,"");var r=b.test(e);return r||h.test(e)?v(e.slice(2),r?2:8):y.test(e)?NaN:+e}var z=function(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}((function(e,t,r){var n,o,i,s,c,a,u=0,l=!1,f=!1,d=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function p(t){var r=n,i=o;return n=o=void 0,u=t,s=e.apply(i,r)}function y(e){var r=e-a;return void 0===a||r>=t||r<0||f&&e-u>=i}function b(){var e=j();if(y(e))return h(e);c=setTimeout(b,function(e){var r=t-(e-a);return f?R(r,i-(e-u)):r}(e))}function h(e){return c=void 0,d&&n?p(e):(n=o=void 0,s)}function v(){var e=j(),r=y(e);if(n=arguments,o=this,a=e,r){if(void 0===c)return function(e){return u=e,c=setTimeout(b,t),l?p(e):s}(a);if(f)return c=setTimeout(b,t),p(a)}return void 0===c&&(c=setTimeout(b,t)),s}return t=E(t)||0,x(r)&&(l=!!r.leading,i=(f="maxWait"in r)?k(E(r.maxWait)||0,t):i,d="trailing"in r?!!r.trailing:d),v.cancel=function(){void 0!==c&&clearTimeout(c),u=0,n=a=o=c=void 0},v.flush=function(){return void 0===c?s:h(j())},v}));const T=function(e,t,r){void 0===r&&(r={});const n=(0,o.useMemo)((()=>z(e,t,r)),[e,t,r]);return(e=>{const t=(0,o.useRef)(e);(0,o.useEffect)((()=>{t.current=e}),[e]),(0,o.useEffect)((()=>()=>t.current()),[])})((()=>n.cancel())),n},C="undefined"!=typeof window||void 0===r.g?o.useLayoutEffect:o.useEffect,M=e=>{const[t,r]=(0,o.useState)({bottom:0,height:0,left:0,right:0,top:0,width:0,x:0,y:0}),n=(0,o.useRef)(null),i=c(e),s=(0,o.useCallback)((e=>{let[t]=e;t&&(i(t),r(t.contentRect))}),[i]);return(0,o.useEffect)((()=>{const e=n.current;if("undefined"==typeof ResizeObserver)return;if(!e)return;const t=new ResizeObserver(s);return t.observe(e),()=>{t.unobserve(e)}}),[s]),{ref:n,contentRect:t}},P=function(e){void 0===e&&(e={});const{isDebounce:t=!1,wait:r=300}=e,[n,i]=(0,o.useState)({width:null,height:null}),s=(0,o.useCallback)((()=>{i({width:window.innerWidth,height:window.innerHeight})}),[]),c=T(s,r),a=(0,o.useMemo)((()=>t?c:s),[s,t,c]);return C((()=>(s(),window.addEventListener("resize",a),()=>{window.removeEventListener("resize",a)})),[]),n}},1660:(e,t,r)=>{r.r(t),r.d(t,{ResizeObserver:()=>f,assets:()=>u,contentTitle:()=>c,default:()=>y,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var n=r(6529),o=(r(5721),r(6164)),i=r(8138);const s={},c="useResizeObserver",a={unversionedId:"react/hooks/useResizeObserver",id:"react/hooks/useResizeObserver",title:"useResizeObserver",description:"A custom hook to detect changes in the DOM size of target elements assigned a ref.",source:"@site/docs/react/hooks/useResizeObserver.mdx",sourceDirName:"react/hooks",slug:"/react/hooks/useResizeObserver",permalink:"/devgrace/docs/react/hooks/useResizeObserver",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"usePreservedCallback",permalink:"/devgrace/docs/react/hooks/usePreservedCallback"},next:{title:"useTimeout",permalink:"/devgrace/docs/react/hooks/useTimeout"}},u={},l=[{value:"Interface",id:"interface",level:2},{value:"Usage",id:"usage",level:2},{value:"Note",id:"note",level:2}],f=()=>{const{ref:e,contentRect:t}=(0,i.yU)((e=>{console.log("resize",e)}));return(0,o.kt)("div",{ref:e,style:{width:"100%",height:"400px",background:"#439966",fontSize:"2rem",color:"#fff"}},"Try reducing the width of your browser. ",(0,o.kt)("br",null),`width: ${t.width}, height: ${t.height}`)},d={toc:l,ResizeObserver:f},p="wrapper";function y(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"useresizeobserver"},"useResizeObserver"),(0,o.kt)("p",null,"A custom hook to detect changes in the DOM size of target elements assigned a ",(0,o.kt)("inlineCode",{parentName:"p"},"ref"),". "),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"interface"},"Interface"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"/**\n * type ContentRect = {\n    readonly bottom: number;\n    readonly height: number;\n    readonly left: number;\n    readonly right: number;\n    readonly top: number;\n    readonly width: number;\n    readonly x: number;\n    readonly y: number;\n  }\n */\ntype ContentRect = Omit<DOMRectReadOnly, 'toJSON'>;\n\nconst useResizeObserver: <T extends HTMLElement>(\n  action: (entry: ResizeObserverEntry) => void\n) => {\n  ref: React.RefObject<T>;\n  contentRect: ContentRect;\n};\n")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import React, { forwardRef, useRef } from 'react';\nimport { useResizeObserver } from '@devgrace/react';\n\nconst Example = () => {\n  const { ref, contentRect } = useResizeObserver<HTMLDivElement>((entry) => {\n    console.log('resize', entry);\n  });\n\n  const boxStyle = useMemo(() => {\n    return {\n      width: '100%', \n      height: '400px', \n      background: '#439966', \n      fontSize: '2rem',\n      color: '#fff',\n    }\n  }, []) \n\n  return (\n    <div\n      ref={ref}\n      style={boxStyle}>\n      Try reducing the width of your browser. <br />\n      {`width: ${contentRect.width}, height: ${contentRect.height}`}\n    </div>\n  );\n};\n")),(0,o.kt)(f,{mdxType:"ResizeObserver"}),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"note"},"Note"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver"},"ResizeObserver API")))}y.isMDXComponent=!0},5657:(e,t,r)=>{var n=r(5721),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,r){var n,i={},u=null,l=null;for(n in void 0!==r&&(u=""+r),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(l=t.ref),t)s.call(t,n)&&!a.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===i[n]&&(i[n]=t[n]);return{$$typeof:o,type:e,key:u,ref:l,props:i,_owner:c.current}}t.jsx=u,t.jsxs=u},6521:(e,t,r)=>{e.exports=r(5657)}}]);