/*! For license information please see 9f21287a.ee34cc24.js.LICENSE.txt */
"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[89],{6164:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>y});var r=n(5721);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=s(n),d=o,y=p["".concat(l,".").concat(d)]||p[d]||f[d]||i;return n?r.createElement(y,c(c({ref:t},u),{},{components:n})):r.createElement(y,c({ref:t},u))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,c=new Array(i);c[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[p]="string"==typeof e?e:o,c[1]=a;for(var s=2;s<i;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8138:(e,t,n)=>{n.d(t,{AB:()=>c,df:()=>l,wY:()=>s});var r=n(6521),o=n(5721);n(6157);function i(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}"function"==typeof SuppressedError&&SuppressedError;"function"==typeof SuppressedError&&SuppressedError;const c=e=>{let{children:t}=e;const n=Math.random()<.5?0:1,r=o.Children.toArray(t);let i=0,a=0;if(2!==r.length)return null;for(const o of r){if(![c.CaseA,c.CaseB].includes(o.type))return null;o.type===c.CaseA?i+=1:a+=1}return i>=2||a>=2?null:n?r[0]:r[1]};c.CaseA=e=>{let{children:t}=e;return(0,r.jsx)(o.Fragment,{children:t})},c.CaseB=e=>{let{children:t}=e;return(0,r.jsx)(o.Fragment,{children:t})};const a=e=>{let{action:t,calledOnce:n=!1,root:r=null,threshold:i=0,rootMargin:c="0px 0px 0px 0px"}=e;const a=(0,o.useRef)(null),l=(0,o.useCallback)(((e,r)=>{let[o]=e;if(o&&o.isIntersecting){const e=o.target;t&&t(o),a.current&&n&&r.unobserve(e)}}),[t,n]);return(0,o.useEffect)((()=>{const e=a.current;if("undefined"==typeof IntersectionObserver)return;if(!e)return;const t=new IntersectionObserver(l,{root:r,rootMargin:c,threshold:i});return t.observe(e),()=>{t.unobserve(e)}}),[r,i,c,l]),a},l=e=>{var{children:t,style:n}=e,o=i(e,["children","style"]);const c=a(Object.assign({},o));return(0,r.jsx)("div",{ref:c,style:n,children:t})},s=(0,o.forwardRef)(((e,t)=>{var{src:n,fallback:c,threshold:l,root:s,rootMargin:u,width:p,height:f,duration:d=0}=e,y=i(e,["src","fallback","threshold","root","rootMargin","width","height","duration"]);const[m,v]=(0,o.useState)(!1),h=a({action:e=>{e.target.src=n},calledOnce:!0,threshold:l,root:s,rootMargin:u}),g=(0,o.useMemo)((()=>({position:"relative",width:"number"==typeof p?`${p}px`:p,height:"number"==typeof f?`${f}px`:f})),[p,f]),b=(0,o.useMemo)((()=>({position:"absolute",left:0,top:0,width:"100%",height:"100%",opacity:m?1:0,transition:`opacity ${d/1e3}s`})),[m,d]);return(0,r.jsxs)("div",{ref:t,style:g,children:[!m&&c?c:null,(0,r.jsx)("img",Object.assign({},y,{style:b,ref:h,onLoad:()=>v(!0)}))]})}));var u="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==n.g?n.g:"undefined"!=typeof self?self:{};var p=/^\s+|\s+$/g,f=/^[-+]0x[0-9a-f]+$/i,d=/^0b[01]+$/i,y=/^0o[0-7]+$/i,m=parseInt,v="object"==typeof u&&u&&u.Object===Object&&u,h="object"==typeof self&&self&&self.Object===Object&&self,g=v||h||Function("return this")(),b=Object.prototype.toString,O=Math.max,w=Math.min,x=function(){return g.Date.now()};function k(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function j(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==b.call(e)}(e))return NaN;if(k(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=k(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(p,"");var n=d.test(e);return n||y.test(e)?m(e.slice(2),n?2:8):f.test(e)?NaN:+e}!function(e){e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")&&e.default}((function(e,t,n){var r,o,i,c,a,l,s=0,u=!1,p=!1,f=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function d(t){var n=r,i=o;return r=o=void 0,s=t,c=e.apply(i,n)}function y(e){var n=e-l;return void 0===l||n>=t||n<0||p&&e-s>=i}function m(){var e=x();if(y(e))return v(e);a=setTimeout(m,function(e){var n=t-(e-l);return p?w(n,i-(e-s)):n}(e))}function v(e){return a=void 0,f&&r?d(e):(r=o=void 0,c)}function h(){var e=x(),n=y(e);if(r=arguments,o=this,l=e,n){if(void 0===a)return function(e){return s=e,a=setTimeout(m,t),u?d(e):c}(l);if(p)return a=setTimeout(m,t),d(l)}return void 0===a&&(a=setTimeout(m,t)),c}return t=j(t)||0,k(n)&&(u=!!n.leading,i=(p="maxWait"in n)?O(j(n.maxWait)||0,t):i,f="trailing"in n?!!n.trailing:f),h.cancel=function(){void 0!==a&&clearTimeout(a),s=0,r=l=o=a=void 0},h.flush=function(){return void 0===a?c:v(x())},h}));"undefined"!=typeof window||void 0===n.g?o.useLayoutEffect:o.useEffect},8984:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>c,metadata:()=>l,toc:()=>u});var r=n(6529),o=(n(5721),n(6164)),i=n(8138);const c={},a="InView",l={unversionedId:"react/components/InView",id:"react/components/InView",title:"InView",description:"Viewport\uc5d0 \ub178\ucd9c\ub420 \ub54c props\ub85c \ub118\uaca8\uc8fc\ub294 action \ucf5c\ubc31 \ud568\uc218\ub97c \ud638\ucd9c\ud558\ub294 \ucef4\ud3ec\ub10c\ud2b8\uc785\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/react/components/InView.mdx",sourceDirName:"react/components",slug:"/react/components/InView",permalink:"/devgrace/ko/docs/react/components/InView",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"AB",permalink:"/devgrace/ko/docs/react/components/AB"},next:{title:"LazyImage",permalink:"/devgrace/ko/docs/react/components/LazyImage"}},s={},u=[{value:"Interface",id:"interface",level:2},{value:"Usage",id:"usage",level:2},{value:"Example",id:"example",level:2}],p={toc:u},f="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(f,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"inview"},"InView"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Viewport"),"\uc5d0 \ub178\ucd9c\ub420 \ub54c props\ub85c \ub118\uaca8\uc8fc\ub294 ",(0,o.kt)("inlineCode",{parentName:"p"},"action")," \ucf5c\ubc31 \ud568\uc218\ub97c \ud638\ucd9c\ud558\ub294 \ucef4\ud3ec\ub10c\ud2b8\uc785\ub2c8\ub2e4."),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"interface"},"Interface"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"interface UseIntersectionObserverProps {\n  action: (entry: IntersectionObserverEntry) => void;\n  calledOnce?: boolean;\n  threshold?: number | number[];\n  root?: Document | Element | null;\n  rootMargin?: string;\n}\n\ninterface InViewProps extends UseIntersectionObserverProps {\n  children: React.ReactNode;\n  style?: CSSProperties;\n}\n\nconst InView: ({ \n  children, \n  style, \n  action, \n  calledOnce, \n  threshold, \n  root, \n  rootMargin \n}: InViewProps) => JSX.Element\n")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { InView } from '@devgrace/react';\n\nconst Example = () => {\n  const onAction = () => {\n    /* action */\n  }\n\n  return (\n    <div>\n      {/* ... */}\n      <InView action={onAction} calledOnce>Box1</InView>\n    </div>\n  );\n}; \n")),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("div",{style:{maxWidth:"500px",height:"500px",overflow:"scroll",background:"#f1f3f5"}},(0,o.kt)("div",{style:{width:"100%",height:"600px",textAlign:"center",fontSize:"2rem"}},"\uc2a4\ud06c\ub864 \ud574\uc8fc\uc138\uc694."),(0,o.kt)(i.df,{style:{width:"100%",height:"300px",background:"#c0392B",color:"white",textAlign:"center",fontSize:"21px"},action:()=>console.log("action callback(1)"),calledOnce:!0,mdxType:"InView"},(0,o.kt)("div",null,(0,o.kt)("p",null,"Box1"),(0,o.kt)("p",null,"\ube0c\ub77c\uc6b0\uc800 \uac1c\ubc1c\uc790 \ub3c4\uad6c\uc758 \ucf58\uc194\uc744 \ud655\uc778\ud574\uc8fc\uc138\uc694."),(0,o.kt)("p",null,"action \ucf5c\ubc31 \ud568\uc218\uac00 \ucd5c\ucd08 1\ud68c\ub9cc \ud638\ucd9c\ub429\ub2c8\ub2e4."),(0,o.kt)("p",null,"calledOnce: true"))),(0,o.kt)("div",{style:{width:"100%",height:"100px"}}),(0,o.kt)(i.df,{style:{width:"100%",height:"300px",background:"#89a5ea",color:"white",textAlign:"center",fontSize:"21px"},action:()=>console.log("action callback(2)"),mdxType:"InView"},(0,o.kt)("div",null,(0,o.kt)("p",null,"Box2"),(0,o.kt)("p",null,"\ube0c\ub77c\uc6b0\uc800 \uac1c\ubc1c\uc790 \ub3c4\uad6c\uc758 \ucf58\uc194\uc744 \ud655\uc778\ud574\uc8fc\uc138\uc694."),(0,o.kt)("p",null,"action \ucf5c\ubc31 \ud568\uc218\uac00 \uc5ec\ub7ec \ubc88 \ud638\ucd9c\ub429\ub2c8\ub2e4."),(0,o.kt)("p",null,"calledOnce: false"))),(0,o.kt)("div",{style:{width:"100%",height:"600px",textAlign:"center"}})))}d.isMDXComponent=!0},5657:(e,t,n)=>{var r=n(5721),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,n){var r,i={},s=null,u=null;for(r in void 0!==n&&(s=""+n),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(u=t.ref),t)c.call(t,r)&&!l.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:o,type:e,key:s,ref:u,props:i,_owner:a.current}}t.jsx=s,t.jsxs=s},6521:(e,t,n)=>{e.exports=n(5657)}}]);