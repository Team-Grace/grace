/*! For license information please see b3bf5b56.86a464b0.js.LICENSE.txt */
"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1175],{6164:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>h});var r=n(5721);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=r.createContext({}),s=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(a.Provider,{value:t},e.children)},f="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=s(n),p=o,h=f["".concat(a,".").concat(p)]||f[p]||d[p]||i;return n?r.createElement(h,u(u({ref:t},l),{},{components:n})):r.createElement(h,u({ref:t},l))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,u=new Array(i);u[0]=p;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c[f]="string"==typeof e?e:o,u[1]=c;for(var s=2;s<i;s++)u[s]=n[s];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8138:(e,t,n)=>{n.d(t,{AB:()=>u,D9:()=>T,df:()=>l,iP:()=>C,wY:()=>f,yU:()=>M});var r=n(6521),o=n(5721);n(6157);function i(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}"function"==typeof SuppressedError&&SuppressedError;"function"==typeof SuppressedError&&SuppressedError;const u=e=>{let{children:t}=e;const n=Math.random()<.5?0:1,r=o.Children.toArray(t);let i=0,c=0;if(2!==r.length)return null;for(const o of r){if(![u.CaseA,u.CaseB].includes(o.type))return null;o.type===u.CaseA?i+=1:c+=1}return i>=2||c>=2?null:n?r[0]:r[1]};u.CaseA=e=>{let{children:t}=e;return(0,r.jsx)(o.Fragment,{children:t})},u.CaseB=e=>{let{children:t}=e;return(0,r.jsx)(o.Fragment,{children:t})};const c=e=>{const t=(0,o.useRef)(e);return(0,o.useEffect)((()=>{t.current=e}),[e]),(0,o.useCallback)((function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];t.current(1===n.length?n[0]:n)}),[])},a=e=>{let{action:t,calledOnce:n=!1,root:r=null,threshold:i=0,rootMargin:u="0px 0px 0px 0px"}=e;const a=(0,o.useRef)(null),s=c(t),l=(0,o.useCallback)(((e,t)=>{let[r]=e;if(r&&r.isIntersecting){const e=r.target;s&&s(r),n&&t.unobserve(e)}}),[s,n]);return(0,o.useEffect)((()=>{const e=a.current;if("undefined"==typeof IntersectionObserver)return;if(!e)return;const t=new IntersectionObserver(l,{root:r,rootMargin:u,threshold:i});return t.observe(e),()=>{t.unobserve(e)}}),[r,i,u,l]),a},s=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,o.useCallback)((e=>{t.forEach((t=>{"function"==typeof t?t(e):null!=t&&(t.current=e)}))}),[...t])},l=(0,o.forwardRef)(((e,t)=>{const{action:n,calledOnce:o,threshold:u,root:c,rootMargin:l}=e,f=i(e,["action","calledOnce","threshold","root","rootMargin"]),d=a({action:n,calledOnce:o,threshold:u,root:c,rootMargin:l});return(0,r.jsx)("div",Object.assign({ref:s(t,d)},f,{children:e.children}))})),f=(0,o.forwardRef)(((e,t)=>{var{src:n,style:u,threshold:c,root:l,rootMargin:f}=e,d=i(e,["src","style","threshold","root","rootMargin"]);const p=a({action:e=>{e.target.src=n},calledOnce:!0,threshold:c,root:l,rootMargin:f}),h=(0,o.useMemo)((()=>Object.assign({display:"inline-block"},u)),[u]);return(0,r.jsx)("img",Object.assign({},d,{ref:s(t,p),style:h}))}));var d="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==n.g?n.g:"undefined"!=typeof self?self:{};var p=/^\s+|\s+$/g,h=/^[-+]0x[0-9a-f]+$/i,b=/^0b[01]+$/i,y=/^0o[0-7]+$/i,w=parseInt,m="object"==typeof d&&d&&d.Object===Object&&d,v="object"==typeof self&&self&&self.Object===Object&&self,g=m||v||Function("return this")(),O=Object.prototype.toString,k=Math.max,x=Math.min,S=function(){return g.Date.now()};function E(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function j(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==O.call(e)}(e))return NaN;if(E(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=E(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(p,"");var n=b.test(e);return n||y.test(e)?w(e.slice(2),n?2:8):h.test(e)?NaN:+e}var z=function(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}((function(e,t,n){var r,o,i,u,c,a,s=0,l=!1,f=!1,d=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function p(t){var n=r,i=o;return r=o=void 0,s=t,u=e.apply(i,n)}function h(e){var n=e-a;return void 0===a||n>=t||n<0||f&&e-s>=i}function b(){var e=S();if(h(e))return y(e);c=setTimeout(b,function(e){var n=t-(e-a);return f?x(n,i-(e-s)):n}(e))}function y(e){return c=void 0,d&&r?p(e):(r=o=void 0,u)}function w(){var e=S(),n=h(e);if(r=arguments,o=this,a=e,n){if(void 0===c)return function(e){return s=e,c=setTimeout(b,t),l?p(e):u}(a);if(f)return c=setTimeout(b,t),p(a)}return void 0===c&&(c=setTimeout(b,t)),u}return t=j(t)||0,E(n)&&(l=!!n.leading,i=(f="maxWait"in n)?k(j(n.maxWait)||0,t):i,d="trailing"in n?!!n.trailing:d),w.cancel=function(){void 0!==c&&clearTimeout(c),s=0,r=a=o=c=void 0},w.flush=function(){return void 0===c?u:y(S())},w}));const D=function(e,t,n){void 0===n&&(n={});const r=(0,o.useMemo)((()=>z(e,t,n)),[e,t,n]);return(e=>{const t=(0,o.useRef)(e);(0,o.useEffect)((()=>{t.current=e}),[e]),(0,o.useEffect)((()=>()=>t.current()),[])})((()=>r.cancel())),r},P="undefined"!=typeof window||void 0===n.g?o.useLayoutEffect:o.useEffect,T=e=>{const t=(0,o.useRef)(e);return(0,o.useEffect)((()=>{t.current=e}),[e]),t.current},M=e=>{const[t,n]=(0,o.useState)({bottom:0,height:0,left:0,right:0,top:0,width:0,x:0,y:0}),r=(0,o.useRef)(null),i=c(e),u=(0,o.useCallback)((e=>{let[t]=e;t&&(i(t),n(t.contentRect))}),[i]);return(0,o.useEffect)((()=>{const e=r.current;if("undefined"==typeof ResizeObserver)return;if(!e)return;const t=new ResizeObserver(u);return t.observe(e),()=>{t.unobserve(e)}}),[u]),{ref:r,contentRect:t}},C=function(e){void 0===e&&(e={});const{isDebounce:t=!1,wait:n=300}=e,[r,i]=(0,o.useState)({width:null,height:null}),u=(0,o.useCallback)((()=>{i({width:window.innerWidth,height:window.innerHeight})}),[]),c=D(u,n),a=(0,o.useMemo)((()=>t?c:u),[u,t,c]);return P((()=>(u(),window.addEventListener("resize",a),()=>{window.removeEventListener("resize",a)})),[]),r}},723:(e,t,n)=>{n.r(t),n.d(t,{DebounceExample:()=>p,DefaultExample:()=>d,assets:()=>l,contentTitle:()=>a,default:()=>y,frontMatter:()=>c,metadata:()=>s,toc:()=>f});var r=n(6529),o=n(5721),i=n(6164),u=n(8138);const c={},a="useWindowSize",s={unversionedId:"react/hooks/useWindowSize",id:"react/hooks/useWindowSize",title:"useWindowSize",description:"A custom hook that tracks and returns the width and height information of the current browser window. It also provides a debounce function to prevent unnecessary calls.",source:"@site/docs/react/hooks/useWindowSize.mdx",sourceDirName:"react/hooks",slug:"/react/hooks/useWindowSize",permalink:"/devgrace/docs/react/hooks/useWindowSize",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"useUnMount",permalink:"/devgrace/docs/react/hooks/useUnmount"},next:{title:"abRandom",permalink:"/devgrace/docs/utils/common/abRandom"}},l={},f=[{value:"Interface",id:"interface",level:2},{value:"Usage",id:"usage",level:2},{value:"Default",id:"default",level:3},{value:"Debounce",id:"debounce",level:3}],d=()=>{const e=(0,u.iP)(),t=(0,o.useMemo)((()=>({width:"100%",background:"#439966",fontSize:"2rem",color:"#fff"})),[]);return(0,i.kt)("div",{style:t},"Try reducing the width of your browser. ",(0,i.kt)("br",null),"width: ",e.width,"px ",(0,i.kt)("br",null),"height: ",e.height,"px")},p=()=>{const e=(0,u.iP)({isDebounce:!0,wait:300}),t=(0,o.useMemo)((()=>({width:"100%",background:"#0067A3",fontSize:"2rem",color:"#fff"})),[]);return(0,i.kt)("div",{style:t},"Try reducing the width of your browser. ",(0,i.kt)("br",null),"width: ",e.width,"px ",(0,i.kt)("br",null),"height: ",e.height,"px")},h={toc:f,DefaultExample:d,DebounceExample:p},b="wrapper";function y(e){let{components:t,...n}=e;return(0,i.kt)(b,(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"usewindowsize"},"useWindowSize"),(0,i.kt)("p",null,"A custom hook that tracks and returns the width and height information of the current browser window. It also provides a ",(0,i.kt)("inlineCode",{parentName:"p"},"debounce")," function to prevent unnecessary calls."),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"interface"},"Interface"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"interface Size {\n  width: number | null;\n  height: number | null;\n}\n\ninterface useWindowSizeProps {\n  isDebounce?: boolean; // debounce options, default: false\n  wait?: number; // debounce delay time, default: 300\n}\n\nconst useWindowSize: (options?: useWindowSizeProps) => Size\n")),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("h3",{id:"default"},"Default"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useWindowSize } from '@devgrace/react';\n\nconst Example = () => {\n  const windowSize = useWindowSize();\n  const boxStyle = useMemo(() => {\n    return {\n      width: '100%', \n      background: '#439966', \n      fontSize: '2rem',\n      color: '#fff',\n    }\n  }, []);\n\n  return (\n    <div style={boxStyle}>\n      Try reducing the width of your browser. <br />\n      width: {windowSize.width}px <br />\n      height: {windowSize.height}px\n    </div>\n  );\n};\n")),(0,i.kt)(d,{mdxType:"DefaultExample"}),(0,i.kt)("br",null),(0,i.kt)("h3",{id:"debounce"},"Debounce"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useWindowSize } from '@devgrace/react';\n\nconst DebounceExample = () => {\n  const windowSize = useWindowSize({ isDebounce: true, wait: 300 });\n  const boxStyle = useMemo(() => {\n    return {\n      width: '100%', \n      background: '#0067A3', \n      fontSize: '2rem',\n      color: '#fff',\n    }\n  }, []);\n\n  return (\n    <div style={boxStyle}>\n      Try reducing the width of your browser. <br />\n      width: {windowSize.width}px <br />\n      height: {windowSize.height}px\n    </div>\n  );\n};\n")),(0,i.kt)(p,{mdxType:"DebounceExample"}),(0,i.kt)("br",null))}y.isMDXComponent=!0},5657:(e,t,n)=>{var r=n(5721),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,n){var r,i={},s=null,l=null;for(r in void 0!==n&&(s=""+n),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(l=t.ref),t)u.call(t,r)&&!a.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:o,type:e,key:s,ref:l,props:i,_owner:c.current}}t.jsx=s,t.jsxs=s},6521:(e,t,n)=>{e.exports=n(5657)}}]);