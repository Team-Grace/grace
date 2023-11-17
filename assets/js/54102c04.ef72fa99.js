/*! For license information please see 54102c04.ef72fa99.js.LICENSE.txt */
"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2269],{4474:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(4614);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),d=o,m=p["".concat(l,".").concat(d)]||p[d]||f[d]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7212:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(2073),o=(n(4614),n(4474)),a=n(2590);const i={},c="LazyImage",l={unversionedId:"react/components/LazyImage",id:"react/components/LazyImage",title:"LazyImage",description:"An image component that Lazy loading an assigned image when exposed to a Viewport.",source:"@site/docs/react/components/LazyImage.mdx",sourceDirName:"react/components",slug:"/react/components/LazyImage",permalink:"/devgrace/docs/react/components/LazyImage",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"InView",permalink:"/devgrace/docs/react/components/InView"},next:{title:"Portal",permalink:"/devgrace/docs/react/components/Portal"}},s={},u=[{value:"Interface",id:"interface",level:2},{value:"Usage",id:"usage",level:2},{value:"Default",id:"default",level:3},{value:"Fallback",id:"fallback",level:3},{value:"Example",id:"example",level:2},{value:"Note",id:"note",level:2}],p={toc:u},f="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(f,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"lazyimage"},"LazyImage"),(0,o.kt)("p",null,"An image component that ",(0,o.kt)("inlineCode",{parentName:"p"},"Lazy loading")," an assigned image when exposed to a ",(0,o.kt)("inlineCode",{parentName:"p"},"Viewport"),"."),(0,o.kt)("p",null,"You can resize the image by entering ",(0,o.kt)("inlineCode",{parentName:"p"},"width"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"height")," values and at the same time improve the ",(0,o.kt)("inlineCode",{parentName:"p"},"Layout Shift"),"."),(0,o.kt)("p",null,"You can set the Intersection Observer Option (see ",(0,o.kt)("inlineCode",{parentName:"p"},"Note")," below)."),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"interface"},"Interface"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"interface LazyImageProps extends React.ComponentProps<'img'> {\n  src: string;\n  threshold?: number | number[]; // default: 0\n  root?: Document | Element | null; // default: null\n  rootMargin?: string; // default: '0px 0px 0px 0px'\n}\n\nconst LazyImage: React.ForwardRefExoticComponent<Omit<LazyImageProps, \"ref\"> & React.RefAttributes<HTMLDivElement>>\n")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("h3",{id:"default"},"Default"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { LazyImage } from '@devgrace/react';\nimport img1 from '../assets/img1.png';\nimport img2 from '../assets/img2.png';\n\nconst Example = () => {\n  return (\n    <div>\n      {/* ... */}\n      <LazyImage width={400} height={400} src={img1} alt=\"img1\" />\n      {/* ... */}\n      <LazyImage width={400} height={400} src={img2} alt=\"img2\" />\n      {/* ... */}\n    </div>\n  );\n}; \n")),(0,o.kt)("br",null),(0,o.kt)("h3",{id:"fallback"},"Fallback"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { LazyImage } from '@devgrace/react';\nimport img1 from '../assets/img1.png';\n\nconst Example = () => {\n  const [isLoaded, setIsLoaded] = useState(false);\n\n  const wrapperStyle: CSSProperties = {\n    position: 'relative',\n    width: '400px',\n    height: '400px',\n  };\n\n  const imgStyle: CSSProperties = {\n    position: 'absolute',\n    top: 0,\n    left: 0,\n    opacity: isLoaded ? 1 : 0,\n    transition: 'opacity 0.2s',\n  };\n\n  const skeletonStyle: CSSProperties = {\n    width: '400px',\n    height: '400px',\n    backgroundColor: '#cdcbcb',\n  }\n\n  return (\n    <div style={wrapperStyle}>\n      {!isLoaded && <div style={skeletonStyle} />}\n      <LazyImage\n        style={imgStyle}\n        width={400}\n        height={400}\n        src={img1}\n        alt=\"img1\"\n        onLoad={() => setIsLoaded(true)}\n      />\n    </div>\n  );\n}; \n")),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("div",{style:{maxWidth:"500px",height:"500px",overflow:"scroll",background:"#f8f8f8"}},(0,o.kt)("div",{style:{width:"100%",height:"500px",textAlign:"center",fontSize:"2rem"}},"Please scroll down."),(0,o.kt)(a.wY,{width:"100%",height:400,src:"https://github.com/Team-Grace/devgrace/assets/64779472/b5640bec-2abc-4205-afbf-ccfd9876a90b",alt:"img1",onClick:()=>console.log("img click1"),mdxType:"LazyImage"}),(0,o.kt)("div",{style:{width:"100%",height:"150px"}}),(0,o.kt)(a.wY,{width:"100%",height:400,src:"https://github.com/Team-Grace/devgrace/assets/64779472/207743a7-b29f-4826-bc08-8df0d67e568b",alt:"img2",onClick:()=>console.log("img click2"),mdxType:"LazyImage"}),(0,o.kt)("div",{style:{width:"100%",height:"150px"}}),(0,o.kt)(a.wY,{width:"100%",height:400,src:"https://github.com/Team-Grace/devgrace/assets/64779472/d1957ec8-fe87-406e-bfda-fb4ee505b152",alt:"img3",onClick:()=>console.log("img click3"),mdxType:"LazyImage"})),(0,o.kt)("h2",{id:"note"},"Note"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API"},"Intersection Observer API")))}d.isMDXComponent=!0},1819:(e,t,n)=>{var r=n(4614),o=Symbol.for("react.element"),a=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,n){var r,a={},s=null,u=null;for(r in void 0!==n&&(s=""+n),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(u=t.ref),t)i.call(t,r)&&!l.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{$$typeof:o,type:e,key:s,ref:u,props:a,_owner:c.current}}t.jsx=s,t.jsxs=s},5735:(e,t,n)=>{e.exports=n(1819)},2590:(e,t,n)=>{n.d(t,{AB:()=>a,D9:()=>z,df:()=>L,iP:()=>T,uM:()=>x,wY:()=>S,yU:()=>N});var r=n(5735),o=n(4614);n(3133);"function"==typeof SuppressedError&&SuppressedError;const a=({children:e})=>{const t=Math.random()<.5?0:1,n=o.Children.toArray(e);let r=0,i=0;if(2!==n.length)return null;for(const o of n){if(![a.CaseA,a.CaseB].includes(o.type))return null;o.type===a.CaseA?r+=1:i+=1}return r>=2||i>=2?null:t?n[0]:n[1]};a.CaseA=({children:e})=>(0,r.jsx)(o.Fragment,{children:e}),a.CaseB=({children:e})=>(0,r.jsx)(o.Fragment,{children:e});var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var c=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,u=/^0o[0-7]+$/i,p=parseInt,f="object"==typeof i&&i&&i.Object===Object&&i,d="object"==typeof self&&self&&self.Object===Object&&self,m=f||d||Function("return this")(),g=Object.prototype.toString,y=Math.max,h=Math.min,b=function(){return m.Date.now()};function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function w(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==g.call(e)}(e))return NaN;if(v(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=v(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(c,"");var n=s.test(e);return n||u.test(e)?p(e.slice(2),n?2:8):l.test(e)?NaN:+e}var O=function(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}((function(e,t,n){var r,o,a,i,c,l,s=0,u=!1,p=!1,f=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function d(t){var n=r,a=o;return r=o=void 0,s=t,i=e.apply(a,n)}function m(e){var n=e-l;return void 0===l||n>=t||n<0||p&&e-s>=a}function g(){var e=b();if(m(e))return O(e);c=setTimeout(g,function(e){var n=t-(e-l);return p?h(n,a-(e-s)):n}(e))}function O(e){return c=void 0,f&&r?d(e):(r=o=void 0,i)}function k(){var e=b(),n=m(e);if(r=arguments,o=this,l=e,n){if(void 0===c)return function(e){return s=e,c=setTimeout(g,t),u?d(e):i}(l);if(p)return c=setTimeout(g,t),d(l)}return void 0===c&&(c=setTimeout(g,t)),i}return t=w(t)||0,v(n)&&(u=!!n.leading,a=(p="maxWait"in n)?y(w(n.maxWait)||0,t):a,f="trailing"in n?!!n.trailing:f),k.cancel=function(){void 0!==c&&clearTimeout(c),s=0,r=l=o=c=void 0},k.flush=function(){return void 0===c?i:O(b())},k}));const k=(e,t,n={})=>{const r=(0,o.useMemo)((()=>O(e,t,n)),[e,t,n]);return(e=>{const t=(0,o.useRef)(e);(0,o.useEffect)((()=>{t.current=e}),[e]),(0,o.useEffect)((()=>()=>t.current()),[])})((()=>r.cancel())),r},x=({children:e,capture:t,wait:n,options:r})=>{const a=o.Children.only(e),i=k(((...e)=>{const n=null==a?void 0:a.props;if(n)return"function"==typeof n[t]?n[t](...e):void 0}),n,r);return(0,o.cloneElement)(a,{[t]:i})};function E(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}"function"==typeof SuppressedError&&SuppressedError;const j=e=>{const t=(0,o.useRef)(e);return(0,o.useEffect)((()=>{t.current=e}),[e]),(0,o.useCallback)(((...e)=>t.current(1===e.length?e[0]:e)),[])},I=({action:e,calledOnce:t=!1,root:n=null,threshold:r=0,rootMargin:a="0px 0px 0px 0px"})=>{const i=(0,o.useRef)(null),c=j(e),l=(0,o.useCallback)((([e],n)=>{if(e&&e.isIntersecting){const r=e.target;c&&c(e),t&&n.unobserve(r)}}),[c,t]);return(0,o.useEffect)((()=>{const e=i.current;if("undefined"==typeof IntersectionObserver)return;if(!e)return;const t=new IntersectionObserver(l,{root:n,rootMargin:a,threshold:r});return t.observe(e),()=>{t.unobserve(e)}}),[n,r,a,l]),i},C=(...e)=>(0,o.useCallback)((t=>{e.forEach((e=>{"function"==typeof e?e(t):null!=e&&(e.current=t)}))}),[...e]),L=(0,o.forwardRef)(((e,t)=>{const{action:n,calledOnce:o,threshold:a,root:i,rootMargin:c}=e,l=E(e,["action","calledOnce","threshold","root","rootMargin"]),s=I({action:n,calledOnce:o,threshold:a,root:i,rootMargin:c});return(0,r.jsx)("div",Object.assign({ref:C(t,s)},l,{children:e.children}))})),S=(0,o.forwardRef)(((e,t)=>{var{src:n,style:a,threshold:i,root:c,rootMargin:l}=e,s=E(e,["src","style","threshold","root","rootMargin"]);const u=I({action:e=>{e.target.src=n},calledOnce:!0,threshold:i,root:c,rootMargin:l}),p=(0,o.useMemo)((()=>Object.assign({display:"inline-block"},a)),[a]);return(0,r.jsx)("img",Object.assign({},s,{ref:C(t,u),style:p}))}));(0,o.createContext)({parentPortalElement:null});const P="undefined"!=typeof window?o.useLayoutEffect:o.useEffect,z=e=>{const t=(0,o.useRef)(e);return(0,o.useEffect)((()=>{t.current=e}),[e]),t.current},N=e=>{const[t,n]=(0,o.useState)({bottom:0,height:0,left:0,right:0,top:0,width:0,x:0,y:0}),r=(0,o.useRef)(null),a=j(e),i=(0,o.useCallback)((([e])=>{e&&(a(e),n(e.contentRect))}),[a]);return(0,o.useEffect)((()=>{const e=r.current;if("undefined"==typeof ResizeObserver)return;if(!e)return;const t=new ResizeObserver(i);return t.observe(e),()=>{t.unobserve(e)}}),[i]),{ref:r,contentRect:t}},T=(e={})=>{const{isDebounce:t=!1,wait:n=300}=e,[r,a]=(0,o.useState)({width:null,height:null}),i=(0,o.useCallback)((()=>{a({width:window.innerWidth,height:window.innerHeight})}),[]),c=k(i,n),l=(0,o.useMemo)((()=>t?c:i),[i,t,c]);return P((()=>(i(),window.addEventListener("resize",l),()=>{window.removeEventListener("resize",l)})),[]),r}}}]);