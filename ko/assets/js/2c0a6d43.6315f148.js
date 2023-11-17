/*! For license information please see 2c0a6d43.6315f148.js.LICENSE.txt */
"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[613],{4474:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>v});var n=r(4614);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},u=Object.keys(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),a=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=a(e.components);return n.createElement(c.Provider,{value:t},e.children)},f="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,u=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=a(r),d=o,v=f["".concat(c,".").concat(d)]||f[d]||p[d]||u;return r?n.createElement(v,i(i({ref:t},l),{},{components:r})):n.createElement(v,i({ref:t},l))}));function v(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var u=r.length,i=new Array(u);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[f]="string"==typeof e?e:o,i[1]=s;for(var a=2;a<u;a++)i[a]=r[a];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9795:(e,t,r)=>{r.r(t),r.d(t,{Example:()=>p,assets:()=>l,contentTitle:()=>c,default:()=>y,frontMatter:()=>s,metadata:()=>a,toc:()=>f});var n=r(2073),o=r(4614),u=r(4474),i=r(2590);const s={},c="usePrevious",a={unversionedId:"react/hooks/usePrevious",id:"react/hooks/usePrevious",title:"usePrevious",description:"\uc774\uc804 \ub80c\ub354\ub9c1\uc5d0\uc11c \uc778\uc218\uc758 \uac12\uc744 \ubc18\ud658\ud558\ub294 \ucee4\uc2a4\ud140 \ud6c5\uc785\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/react/hooks/usePrevious.mdx",sourceDirName:"react/hooks",slug:"/react/hooks/usePrevious",permalink:"/devgrace/ko/docs/react/hooks/usePrevious",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"usePreservedCallback",permalink:"/devgrace/ko/docs/react/hooks/usePreservedCallback"},next:{title:"useResizeObserver",permalink:"/devgrace/ko/docs/react/hooks/useResizeObserver"}},l={},f=[{value:"Interface",id:"interface",level:2},{value:"Usage",id:"usage",level:2}],p=()=>{const[e,t]=(0,o.useState)(0),r=(0,i.D9)(e);return(0,u.kt)("div",null,(0,u.kt)("div",null,"Current Count is - ",e),(0,u.kt)("div",null,"Previous Count is - ",r),(0,u.kt)("button",{onClick:()=>{t(e+1)}},"Increment"))},d={toc:f,Example:p},v="wrapper";function y(e){let{components:t,...r}=e;return(0,u.kt)(v,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,u.kt)("h1",{id:"useprevious"},"usePrevious"),(0,u.kt)("p",null,"\uc774\uc804 \ub80c\ub354\ub9c1\uc5d0\uc11c \uc778\uc218\uc758 \uac12\uc744 \ubc18\ud658\ud558\ub294 \ucee4\uc2a4\ud140 \ud6c5\uc785\ub2c8\ub2e4."),(0,u.kt)("br",null),(0,u.kt)("h2",{id:"interface"},"Interface"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-tsx"},"const usePrevious: <T>(value: T) => T;\n")),(0,u.kt)("h2",{id:"usage"},"Usage"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useState } from 'react';\nimport { usePrevious } from '@devgrace/react';\n\nconst Example = () => {\n  const [count, setCount] = useState(0);\n  const previousCount = usePrevious(count);\n\n  const onIncrementCount = () => {\n    setCount(count + 1);\n  };\n\n  return (\n    <div>\n      <div>Current Count is - {count}</div>\n      <div>Previous Count is - {previousCount}</div>\n      <button onClick={onIncrementCount}>Increment</button>\n    </div>\n  );\n};\n")),(0,u.kt)(p,{mdxType:"Example"}))}y.isMDXComponent=!0},1819:(e,t,r)=>{var n=r(4614),o=Symbol.for("react.element"),u=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function a(e,t,r){var n,u={},a=null,l=null;for(n in void 0!==r&&(a=""+r),void 0!==t.key&&(a=""+t.key),void 0!==t.ref&&(l=t.ref),t)i.call(t,n)&&!c.hasOwnProperty(n)&&(u[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===u[n]&&(u[n]=t[n]);return{$$typeof:o,type:e,key:a,ref:l,props:u,_owner:s.current}}t.jsx=a,t.jsxs=a},5735:(e,t,r)=>{e.exports=r(1819)},2590:(e,t,r)=>{r.d(t,{AB:()=>u,D9:()=>R,df:()=>T,iP:()=>I,uM:()=>j,wY:()=>S,yU:()=>_});var n=r(5735),o=r(4614);r(3133);"function"==typeof SuppressedError&&SuppressedError;const u=({children:e})=>{const t=Math.random()<.5?0:1,r=o.Children.toArray(e);let n=0,i=0;if(2!==r.length)return null;for(const o of r){if(![u.CaseA,u.CaseB].includes(o.type))return null;o.type===u.CaseA?n+=1:i+=1}return n>=2||i>=2?null:t?r[0]:r[1]};u.CaseA=({children:e})=>(0,n.jsx)(o.Fragment,{children:e}),u.CaseB=({children:e})=>(0,n.jsx)(o.Fragment,{children:e});var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var s=/^\s+|\s+$/g,c=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,l=/^0o[0-7]+$/i,f=parseInt,p="object"==typeof i&&i&&i.Object===Object&&i,d="object"==typeof self&&self&&self.Object===Object&&self,v=p||d||Function("return this")(),y=Object.prototype.toString,b=Math.max,m=Math.min,h=function(){return v.Date.now()};function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function O(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==y.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(s,"");var r=a.test(e);return r||l.test(e)?f(e.slice(2),r?2:8):c.test(e)?NaN:+e}var k=function(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}((function(e,t,r){var n,o,u,i,s,c,a=0,l=!1,f=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function d(t){var r=n,u=o;return n=o=void 0,a=t,i=e.apply(u,r)}function v(e){var r=e-c;return void 0===c||r>=t||r<0||f&&e-a>=u}function y(){var e=h();if(v(e))return k(e);s=setTimeout(y,function(e){var r=t-(e-c);return f?m(r,u-(e-a)):r}(e))}function k(e){return s=void 0,p&&n?d(e):(n=o=void 0,i)}function w(){var e=h(),r=v(e);if(n=arguments,o=this,c=e,r){if(void 0===s)return function(e){return a=e,s=setTimeout(y,t),l?d(e):i}(c);if(f)return s=setTimeout(y,t),d(c)}return void 0===s&&(s=setTimeout(y,t)),i}return t=O(t)||0,g(r)&&(l=!!r.leading,u=(f="maxWait"in r)?b(O(r.maxWait)||0,t):u,p="trailing"in r?!!r.trailing:p),w.cancel=function(){void 0!==s&&clearTimeout(s),a=0,n=c=o=s=void 0},w.flush=function(){return void 0===s?i:k(h())},w}));const w=(e,t,r={})=>{const n=(0,o.useMemo)((()=>k(e,t,r)),[e,t,r]);return(e=>{const t=(0,o.useRef)(e);(0,o.useEffect)((()=>{t.current=e}),[e]),(0,o.useEffect)((()=>()=>t.current()),[])})((()=>n.cancel())),n},j=({children:e,capture:t,wait:r,options:n})=>{const u=o.Children.only(e),i=w(((...e)=>{const r=null==u?void 0:u.props;if(r)return"function"==typeof r[t]?r[t](...e):void 0}),r,n);return(0,o.cloneElement)(u,{[t]:i})};function E(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}"function"==typeof SuppressedError&&SuppressedError;const x=e=>{const t=(0,o.useRef)(e);return(0,o.useEffect)((()=>{t.current=e}),[e]),(0,o.useCallback)(((...e)=>t.current(1===e.length?e[0]:e)),[])},C=({action:e,calledOnce:t=!1,root:r=null,threshold:n=0,rootMargin:u="0px 0px 0px 0px"})=>{const i=(0,o.useRef)(null),s=x(e),c=(0,o.useCallback)((([e],r)=>{if(e&&e.isIntersecting){const n=e.target;s&&s(e),t&&r.unobserve(n)}}),[s,t]);return(0,o.useEffect)((()=>{const e=i.current;if("undefined"==typeof IntersectionObserver)return;if(!e)return;const t=new IntersectionObserver(c,{root:r,rootMargin:u,threshold:n});return t.observe(e),()=>{t.unobserve(e)}}),[r,n,u,c]),i},P=(...e)=>(0,o.useCallback)((t=>{e.forEach((e=>{"function"==typeof e?e(t):null!=e&&(e.current=t)}))}),[...e]),T=(0,o.forwardRef)(((e,t)=>{const{action:r,calledOnce:o,threshold:u,root:i,rootMargin:s}=e,c=E(e,["action","calledOnce","threshold","root","rootMargin"]),a=C({action:r,calledOnce:o,threshold:u,root:i,rootMargin:s});return(0,n.jsx)("div",Object.assign({ref:P(t,a)},c,{children:e.children}))})),S=(0,o.forwardRef)(((e,t)=>{var{src:r,style:u,threshold:i,root:s,rootMargin:c}=e,a=E(e,["src","style","threshold","root","rootMargin"]);const l=C({action:e=>{e.target.src=r},calledOnce:!0,threshold:i,root:s,rootMargin:c}),f=(0,o.useMemo)((()=>Object.assign({display:"inline-block"},u)),[u]);return(0,n.jsx)("img",Object.assign({},a,{ref:P(t,l),style:f}))}));(0,o.createContext)({parentPortalElement:null});const M="undefined"!=typeof window?o.useLayoutEffect:o.useEffect,R=e=>{const t=(0,o.useRef)(e);return(0,o.useEffect)((()=>{t.current=e}),[e]),t.current},_=e=>{const[t,r]=(0,o.useState)({bottom:0,height:0,left:0,right:0,top:0,width:0,x:0,y:0}),n=(0,o.useRef)(null),u=x(e),i=(0,o.useCallback)((([e])=>{e&&(u(e),r(e.contentRect))}),[u]);return(0,o.useEffect)((()=>{const e=n.current;if("undefined"==typeof ResizeObserver)return;if(!e)return;const t=new ResizeObserver(i);return t.observe(e),()=>{t.unobserve(e)}}),[i]),{ref:n,contentRect:t}},I=(e={})=>{const{isDebounce:t=!1,wait:r=300}=e,[n,u]=(0,o.useState)({width:null,height:null}),i=(0,o.useCallback)((()=>{u({width:window.innerWidth,height:window.innerHeight})}),[]),s=w(i,r),c=(0,o.useMemo)((()=>t?s:i),[i,t,s]);return M((()=>(i(),window.addEventListener("resize",c),()=>{window.removeEventListener("resize",c)})),[]),n}}}]);