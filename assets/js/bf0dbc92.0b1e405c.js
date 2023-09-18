/*! For license information please see bf0dbc92.0b1e405c.js.LICENSE.txt */
"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8067],{6164:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(5721);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},f="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),f=s(n),d=o,h=f["".concat(l,".").concat(d)]||f[d]||p[d]||i;return n?r.createElement(h,c(c({ref:t},u),{},{components:n})):r.createElement(h,c({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,c=new Array(i);c[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[f]="string"==typeof e?e:o,c[1]=a;for(var s=2;s<i;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8138:(e,t,n)=>{n.d(t,{AB:()=>a,D9:()=>S,df:()=>f,iP:()=>A,wY:()=>p,yU:()=>M});var r=n(6521),o=n(5721);n(6157);function i(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}"function"==typeof SuppressedError&&SuppressedError;"function"==typeof SuppressedError&&SuppressedError;const c=()=>"undefined"==typeof window&&void 0!==n.g,a=e=>{let{children:t}=e;const n=Math.random()<.5?0:1,r=o.Children.toArray(t);let i=0,c=0;if(2!==r.length)return null;for(const o of r){if(![a.CaseA,a.CaseB].includes(o.type))return null;o.type===a.CaseA?i+=1:c+=1}return i>=2||c>=2?null:n?r[0]:r[1]};a.CaseA=e=>{let{children:t}=e;return(0,r.jsx)(o.Fragment,{children:t})},a.CaseB=e=>{let{children:t}=e;return(0,r.jsx)(o.Fragment,{children:t})};const l=e=>{const t=(0,o.useRef)(e);return(0,o.useEffect)((()=>{t.current=e}),[e]),(0,o.useCallback)((function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];t.current(1===n.length?n[0]:n)}),[])},s=e=>{let{action:t,calledOnce:n=!1,root:r=null,threshold:i=0,rootMargin:c="0px 0px 0px 0px"}=e;const a=(0,o.useRef)(null),s=l(t),u=(0,o.useCallback)(((e,t)=>{let[r]=e;if(r&&r.isIntersecting){const e=r.target;s&&s(r),n&&t.unobserve(e)}}),[s,n]);return(0,o.useEffect)((()=>{const e=a.current;if("undefined"==typeof IntersectionObserver)return;if(!e)return;const t=new IntersectionObserver(u,{root:r,rootMargin:c,threshold:i});return t.observe(e),()=>{t.unobserve(e)}}),[r,i,c,u]),a},u=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,o.useCallback)((e=>{t.forEach((t=>{"function"==typeof t?t(e):null!=t&&(t.current=e)}))}),[...t])},f=(0,o.forwardRef)(((e,t)=>{const{action:n,calledOnce:o,threshold:c,root:a,rootMargin:l}=e,f=i(e,["action","calledOnce","threshold","root","rootMargin"]),p=s({action:n,calledOnce:o,threshold:c,root:a,rootMargin:l});return(0,r.jsx)("div",Object.assign({ref:u(t,p)},f,{children:e.children}))})),p=(0,o.forwardRef)(((e,t)=>{var{src:n,style:c,threshold:a,root:l,rootMargin:f}=e,p=i(e,["src","style","threshold","root","rootMargin"]);const d=s({action:e=>{e.target.src=n},calledOnce:!0,threshold:a,root:l,rootMargin:f}),h=(0,o.useMemo)((()=>Object.assign({display:"inline-block"},c)),[c]);return(0,r.jsx)("img",Object.assign({},p,{ref:u(t,d),style:h}))}));var d="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==n.g?n.g:"undefined"!=typeof self?self:{};var h=/^\s+|\s+$/g,y=/^[-+]0x[0-9a-f]+$/i,v=/^0b[01]+$/i,m=/^0o[0-7]+$/i,b=parseInt,g="object"==typeof d&&d&&d.Object===Object&&d,w="object"==typeof self&&self&&self.Object===Object&&self,O=g||w||Function("return this")(),k=Object.prototype.toString,x=Math.max,j=Math.min,E=function(){return O.Date.now()};function I(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function P(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==k.call(e)}(e))return NaN;if(I(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=I(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(h,"");var n=v.test(e);return n||m.test(e)?b(e.slice(2),n?2:8):y.test(e)?NaN:+e}var C=function(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}((function(e,t,n){var r,o,i,c,a,l,s=0,u=!1,f=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function d(t){var n=r,i=o;return r=o=void 0,s=t,c=e.apply(i,n)}function h(e){var n=e-l;return void 0===l||n>=t||n<0||f&&e-s>=i}function y(){var e=E();if(h(e))return v(e);a=setTimeout(y,function(e){var n=t-(e-l);return f?j(n,i-(e-s)):n}(e))}function v(e){return a=void 0,p&&r?d(e):(r=o=void 0,c)}function m(){var e=E(),n=h(e);if(r=arguments,o=this,l=e,n){if(void 0===a)return function(e){return s=e,a=setTimeout(y,t),u?d(e):c}(l);if(f)return a=setTimeout(y,t),d(l)}return void 0===a&&(a=setTimeout(y,t)),c}return t=P(t)||0,I(n)&&(u=!!n.leading,i=(f="maxWait"in n)?x(P(n.maxWait)||0,t):i,p="trailing"in n?!!n.trailing:p),m.cancel=function(){void 0!==a&&clearTimeout(a),s=0,r=l=o=a=void 0},m.flush=function(){return void 0===a?c:v(E())},m}));const T=function(e,t,n){void 0===n&&(n={});const r=(0,o.useMemo)((()=>C(e,t,n)),[e,t,n]);return(e=>{const t=(0,o.useRef)(e);(0,o.useEffect)((()=>{t.current=e}),[e]),(0,o.useEffect)((()=>()=>t.current()),[])})((()=>r.cancel())),r},R=c()?o.useEffect:o.useLayoutEffect,S=e=>{const t=(0,o.useRef)(e);return(0,o.useEffect)((()=>{t.current=e}),[e]),t.current},M=e=>{const[t,n]=(0,o.useState)({bottom:0,height:0,left:0,right:0,top:0,width:0,x:0,y:0}),r=(0,o.useRef)(null),i=l(e),c=(0,o.useCallback)((e=>{let[t]=e;t&&(i(t),n(t.contentRect))}),[i]);return(0,o.useEffect)((()=>{const e=r.current;if("undefined"==typeof ResizeObserver)return;if(!e)return;const t=new ResizeObserver(c);return t.observe(e),()=>{t.unobserve(e)}}),[c]),{ref:r,contentRect:t}},A=function(e){void 0===e&&(e={});const{isDebounce:t=!1,wait:n=300}=e,[r,i]=(0,o.useState)({width:null,height:null}),c=(0,o.useCallback)((()=>{i({width:window.innerWidth,height:window.innerHeight})}),[]),a=T(c,n),l=(0,o.useMemo)((()=>t?a:c),[c,t,a]);return R((()=>(c(),window.addEventListener("resize",l),()=>{window.removeEventListener("resize",l)})),[]),r}},6967:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>c,metadata:()=>l,toc:()=>u});var r=n(6529),o=(n(5721),n(6164)),i=n(8138);const c={},a="InView",l={unversionedId:"react/components/InView",id:"react/components/InView",title:"InView",description:"A component that calls an action callback function that is passed as a prop when exposed to a Viewport.",source:"@site/docs/react/components/InView.mdx",sourceDirName:"react/components",slug:"/react/components/InView",permalink:"/devgrace/docs/react/components/InView",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"AB",permalink:"/devgrace/docs/react/components/AB"},next:{title:"LazyImage",permalink:"/devgrace/docs/react/components/LazyImage"}},s={},u=[{value:"Interface",id:"interface",level:2},{value:"Usage",id:"usage",level:2},{value:"Example",id:"example",level:2}],f={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"inview"},"InView"),(0,o.kt)("p",null,"A component that calls an ",(0,o.kt)("inlineCode",{parentName:"p"},"action")," callback function that is passed as a prop when exposed to a ",(0,o.kt)("inlineCode",{parentName:"p"},"Viewport"),"."),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"interface"},"Interface"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"interface UseIntersectionObserverProps {\n  action: (entry: IntersectionObserverEntry) => void;\n  calledOnce?: boolean;\n  threshold?: number | number[];\n  root?: Document | Element | null;\n  rootMargin?: string;\n}\n\ntype InViewProps = React.ComponentProps<'div'> & UseIntersectionObserverProps;\n\nconst InView: React.ForwardRefExoticComponent<\n  Omit<React.PropsWithChildren<InViewProps>, 'ref'> &\n    React.RefAttributes<HTMLDivElement>\n>;\n")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { InView } from '@devgrace/react';\n\nconst Example = () => {\n  const onAction = () => {\n    /* action */\n  }\n\n  return (\n    <div>\n      {/* ... */}\n      <InView action={onAction} calledOnce>Box1</InView>\n    </div>\n  );\n}; \n")),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("div",{style:{maxWidth:"500px",height:"500px",overflow:"scroll",background:"#f1f3f5"}},(0,o.kt)("div",{style:{width:"100%",height:"600px",textAlign:"center",fontSize:"2rem"}},"Please scroll down."),(0,o.kt)(i.df,{style:{width:"100%",height:"300px",background:"#c0392B",color:"white",textAlign:"center",fontSize:"21px"},action:()=>console.log("action callback(1)"),calledOnce:!0,mdxType:"InView"},(0,o.kt)("div",null,(0,o.kt)("p",null,"Box1"),(0,o.kt)("p",null,"Check the console in your browser's developer tools."),(0,o.kt)("p",null,"The action callback function is called only the first time."),(0,o.kt)("p",null,"calledOnce: true"))),(0,o.kt)("div",{style:{width:"100%",height:"100px"}}),(0,o.kt)(i.df,{style:{width:"100%",height:"300px",background:"#89a5ea",color:"white",textAlign:"center",fontSize:"21px"},action:()=>console.log("action callback(2)"),mdxType:"InView"},(0,o.kt)("div",null,(0,o.kt)("p",null,"Box2"),(0,o.kt)("p",null,"Check the console in your browser's developer tools."),(0,o.kt)("p",null,"The action callback function is called multiple times."),(0,o.kt)("p",null,"calledOnce: false"))),(0,o.kt)("div",{style:{width:"100%",height:"600px",textAlign:"center"}})))}d.isMDXComponent=!0},5657:(e,t,n)=>{var r=n(5721),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,n){var r,i={},s=null,u=null;for(r in void 0!==n&&(s=""+n),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(u=t.ref),t)c.call(t,r)&&!l.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:o,type:e,key:s,ref:u,props:i,_owner:a.current}}t.jsx=s,t.jsxs=s},6521:(e,t,n)=>{e.exports=n(5657)}}]);