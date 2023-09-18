/*! For license information please see 5a39a76a.5fb9ffab.js.LICENSE.txt */
"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5576],{6164:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>y});var n=r(5721);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),a=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=a(e.components);return n.createElement(u.Provider,{value:t},e.children)},f="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=a(r),p=o,y=f["".concat(u,".").concat(p)]||f[p]||d[p]||i;return r?n.createElement(y,s(s({ref:t},l),{},{components:r})):n.createElement(y,s({ref:t},l))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,s=new Array(i);s[0]=p;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c[f]="string"==typeof e?e:o,s[1]=c;for(var a=2;a<i;a++)s[a]=r[a];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},8138:(e,t,r)=>{r.d(t,{AB:()=>c,D9:()=>S,df:()=>f,iP:()=>N,wY:()=>d,yU:()=>C});var n=r(6521),o=r(5721);r(6157);function i(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}"function"==typeof SuppressedError&&SuppressedError;"function"==typeof SuppressedError&&SuppressedError;const s=()=>"undefined"==typeof window&&void 0!==r.g,c=e=>{let{children:t}=e;const r=Math.random()<.5?0:1,n=o.Children.toArray(t);let i=0,s=0;if(2!==n.length)return null;for(const o of n){if(![c.CaseA,c.CaseB].includes(o.type))return null;o.type===c.CaseA?i+=1:s+=1}return i>=2||s>=2?null:r?n[0]:n[1]};c.CaseA=e=>{let{children:t}=e;return(0,n.jsx)(o.Fragment,{children:t})},c.CaseB=e=>{let{children:t}=e;return(0,n.jsx)(o.Fragment,{children:t})};const u=e=>{const t=(0,o.useRef)(e);return(0,o.useEffect)((()=>{t.current=e}),[e]),(0,o.useCallback)((function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];t.current(1===r.length?r[0]:r)}),[])},a=e=>{let{action:t,calledOnce:r=!1,root:n=null,threshold:i=0,rootMargin:s="0px 0px 0px 0px"}=e;const c=(0,o.useRef)(null),a=u(t),l=(0,o.useCallback)(((e,t)=>{let[n]=e;if(n&&n.isIntersecting){const e=n.target;a&&a(n),r&&t.unobserve(e)}}),[a,r]);return(0,o.useEffect)((()=>{const e=c.current;if("undefined"==typeof IntersectionObserver)return;if(!e)return;const t=new IntersectionObserver(l,{root:n,rootMargin:s,threshold:i});return t.observe(e),()=>{t.unobserve(e)}}),[n,i,s,l]),c},l=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,o.useCallback)((e=>{t.forEach((t=>{"function"==typeof t?t(e):null!=t&&(t.current=e)}))}),[...t])},f=(0,o.forwardRef)(((e,t)=>{const{action:r,calledOnce:o,threshold:s,root:c,rootMargin:u}=e,f=i(e,["action","calledOnce","threshold","root","rootMargin"]),d=a({action:r,calledOnce:o,threshold:s,root:c,rootMargin:u});return(0,n.jsx)("div",Object.assign({ref:l(t,d)},f,{children:e.children}))})),d=(0,o.forwardRef)(((e,t)=>{var{src:r,style:s,threshold:c,root:u,rootMargin:f}=e,d=i(e,["src","style","threshold","root","rootMargin"]);const p=a({action:e=>{e.target.src=r},calledOnce:!0,threshold:c,root:u,rootMargin:f}),y=(0,o.useMemo)((()=>Object.assign({display:"inline-block"},s)),[s]);return(0,n.jsx)("img",Object.assign({},d,{ref:l(t,p),style:y}))}));var p="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==r.g?r.g:"undefined"!=typeof self?self:{};var y=/^\s+|\s+$/g,v=/^[-+]0x[0-9a-f]+$/i,b=/^0b[01]+$/i,h=/^0o[0-7]+$/i,m=parseInt,O="object"==typeof p&&p&&p.Object===Object&&p,g="object"==typeof self&&self&&self.Object===Object&&self,w=O||g||Function("return this")(),k=Object.prototype.toString,R=Math.max,j=Math.min,x=function(){return w.Date.now()};function E(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function z(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==k.call(e)}(e))return NaN;if(E(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=E(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(y,"");var r=b.test(e);return r||h.test(e)?m(e.slice(2),r?2:8):v.test(e)?NaN:+e}var T=function(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}((function(e,t,r){var n,o,i,s,c,u,a=0,l=!1,f=!1,d=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function p(t){var r=n,i=o;return n=o=void 0,a=t,s=e.apply(i,r)}function y(e){var r=e-u;return void 0===u||r>=t||r<0||f&&e-a>=i}function v(){var e=x();if(y(e))return b(e);c=setTimeout(v,function(e){var r=t-(e-u);return f?j(r,i-(e-a)):r}(e))}function b(e){return c=void 0,d&&n?p(e):(n=o=void 0,s)}function h(){var e=x(),r=y(e);if(n=arguments,o=this,u=e,r){if(void 0===c)return function(e){return a=e,c=setTimeout(v,t),l?p(e):s}(u);if(f)return c=setTimeout(v,t),p(u)}return void 0===c&&(c=setTimeout(v,t)),s}return t=z(t)||0,E(r)&&(l=!!r.leading,i=(f="maxWait"in r)?R(z(r.maxWait)||0,t):i,d="trailing"in r?!!r.trailing:d),h.cancel=function(){void 0!==c&&clearTimeout(c),a=0,n=u=o=c=void 0},h.flush=function(){return void 0===c?s:b(x())},h}));const M=function(e,t,r){void 0===r&&(r={});const n=(0,o.useMemo)((()=>T(e,t,r)),[e,t,r]);return(e=>{const t=(0,o.useRef)(e);(0,o.useEffect)((()=>{t.current=e}),[e]),(0,o.useEffect)((()=>()=>t.current()),[])})((()=>n.cancel())),n},P=s()?o.useEffect:o.useLayoutEffect,S=e=>{const t=(0,o.useRef)(e);return(0,o.useEffect)((()=>{t.current=e}),[e]),t.current},C=e=>{const[t,r]=(0,o.useState)({bottom:0,height:0,left:0,right:0,top:0,width:0,x:0,y:0}),n=(0,o.useRef)(null),i=u(e),s=(0,o.useCallback)((e=>{let[t]=e;t&&(i(t),r(t.contentRect))}),[i]);return(0,o.useEffect)((()=>{const e=n.current;if("undefined"==typeof ResizeObserver)return;if(!e)return;const t=new ResizeObserver(s);return t.observe(e),()=>{t.unobserve(e)}}),[s]),{ref:n,contentRect:t}},N=function(e){void 0===e&&(e={});const{isDebounce:t=!1,wait:r=300}=e,[n,i]=(0,o.useState)({width:null,height:null}),s=(0,o.useCallback)((()=>{i({width:window.innerWidth,height:window.innerHeight})}),[]),c=M(s,r),u=(0,o.useMemo)((()=>t?c:s),[s,t,c]);return P((()=>(s(),window.addEventListener("resize",u),()=>{window.removeEventListener("resize",u)})),[]),n}},3390:(e,t,r)=>{r.r(t),r.d(t,{ResizeObserver:()=>f,assets:()=>a,contentTitle:()=>c,default:()=>y,frontMatter:()=>s,metadata:()=>u,toc:()=>l});var n=r(6529),o=(r(5721),r(6164)),i=r(8138);const s={},c="useResizeObserver",u={unversionedId:"react/hooks/useResizeObserver",id:"react/hooks/useResizeObserver",title:"useResizeObserver",description:"ref\ub97c \ud560\ub2f9\ud55c \ud0c0\uac9f \uc5d8\ub9ac\uba3c\ud2b8\uc758 DOM \ud06c\uae30 \ubcc0\ud654\ub97c \uac10\uc9c0\ud558\ub294 \ucee4\uc2a4\ud140 \ud6c5\uc785\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/react/hooks/useResizeObserver.mdx",sourceDirName:"react/hooks",slug:"/react/hooks/useResizeObserver",permalink:"/devgrace/ko/docs/react/hooks/useResizeObserver",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"usePrevious",permalink:"/devgrace/ko/docs/react/hooks/usePrevious"},next:{title:"useTimeout",permalink:"/devgrace/ko/docs/react/hooks/useTimeout"}},a={},l=[{value:"Interface",id:"interface",level:2},{value:"Usage",id:"usage",level:2},{value:"Note",id:"note",level:2}],f=()=>{const{ref:e,contentRect:t}=(0,i.yU)((e=>{console.log("resize",e)}));return(0,o.kt)("div",{ref:e,style:{width:"100%",height:"400px",background:"#439966",fontSize:"2rem",color:"#fff"}},"\ube0c\ub77c\uc6b0\uc800 \ub108\ube44\ub97c \uc904\uc5ec\ubcf4\uc138\uc694. ",(0,o.kt)("br",null),`width: ${t.width}, height: ${t.height}`)},d={toc:l,ResizeObserver:f},p="wrapper";function y(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"useresizeobserver"},"useResizeObserver"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ref"),"\ub97c \ud560\ub2f9\ud55c \ud0c0\uac9f \uc5d8\ub9ac\uba3c\ud2b8\uc758 DOM \ud06c\uae30 \ubcc0\ud654\ub97c \uac10\uc9c0\ud558\ub294 \ucee4\uc2a4\ud140 \ud6c5\uc785\ub2c8\ub2e4."),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"interface"},"Interface"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"/**\n * type ContentRect = {\n    readonly bottom: number;\n    readonly height: number;\n    readonly left: number;\n    readonly right: number;\n    readonly top: number;\n    readonly width: number;\n    readonly x: number;\n    readonly y: number;\n  }\n */\ntype ContentRect = Omit<DOMRectReadOnly, 'toJSON'>;\n\nconst useResizeObserver: <T extends HTMLElement>(\n  action: (entry: ResizeObserverEntry) => void\n) => {\n  ref: React.RefObject<T>;\n  contentRect: ContentRect;\n};\n")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import React, { forwardRef, useRef } from 'react';\nimport { useResizeObserver } from '@devgrace/react';\n\nconst Example = () => {\n  const { ref, contentRect } = useResizeObserver<HTMLDivElement>((entry) => {\n    console.log('resize', entry);\n  });\n\n  const boxStyle = useMemo(() => {\n    return {\n      width: '100%', \n      height: '400px', \n      background: '#439966', \n      fontSize: '2rem',\n      color: '#fff',\n    }\n  }, []);\n\n  return (\n    <div\n      ref={ref}\n      style={boxStyle}>\n      \ube0c\ub77c\uc6b0\uc800 \ub108\ube44\ub97c \uc904\uc5ec\ubcf4\uc138\uc694. <br />\n      {`width: ${contentRect.width}, height: ${contentRect.height}`}\n    </div>\n  );\n};\n")),(0,o.kt)(f,{mdxType:"ResizeObserver"}),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"note"},"Note"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver"},"ResizeObserver API")))}y.isMDXComponent=!0},5657:(e,t,r)=>{var n=r(5721),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function a(e,t,r){var n,i={},a=null,l=null;for(n in void 0!==r&&(a=""+r),void 0!==t.key&&(a=""+t.key),void 0!==t.ref&&(l=t.ref),t)s.call(t,n)&&!u.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===i[n]&&(i[n]=t[n]);return{$$typeof:o,type:e,key:a,ref:l,props:i,_owner:c.current}}t.jsx=a,t.jsxs=a},6521:(e,t,r)=>{e.exports=r(5657)}}]);