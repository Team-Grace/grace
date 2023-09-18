/*! For license information please see 54102c04.a8a8344f.js.LICENSE.txt */
"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2269],{6164:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(5721);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},f="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=s(n),d=o,m=f["".concat(l,".").concat(d)]||f[d]||p[d]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[f]="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8138:(e,t,n)=>{n.d(t,{AB:()=>c,D9:()=>z,df:()=>f,iP:()=>T,wY:()=>p,yU:()=>N});var r=n(6521),o=n(5721);n(6157);function a(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}"function"==typeof SuppressedError&&SuppressedError;"function"==typeof SuppressedError&&SuppressedError;const i=()=>"undefined"==typeof window&&void 0!==n.g,c=e=>{let{children:t}=e;const n=Math.random()<.5?0:1,r=o.Children.toArray(t);let a=0,i=0;if(2!==r.length)return null;for(const o of r){if(![c.CaseA,c.CaseB].includes(o.type))return null;o.type===c.CaseA?a+=1:i+=1}return a>=2||i>=2?null:n?r[0]:r[1]};c.CaseA=e=>{let{children:t}=e;return(0,r.jsx)(o.Fragment,{children:t})},c.CaseB=e=>{let{children:t}=e;return(0,r.jsx)(o.Fragment,{children:t})};const l=e=>{const t=(0,o.useRef)(e);return(0,o.useEffect)((()=>{t.current=e}),[e]),(0,o.useCallback)((function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];t.current(1===n.length?n[0]:n)}),[])},s=e=>{let{action:t,calledOnce:n=!1,root:r=null,threshold:a=0,rootMargin:i="0px 0px 0px 0px"}=e;const c=(0,o.useRef)(null),s=l(t),u=(0,o.useCallback)(((e,t)=>{let[r]=e;if(r&&r.isIntersecting){const e=r.target;s&&s(r),n&&t.unobserve(e)}}),[s,n]);return(0,o.useEffect)((()=>{const e=c.current;if("undefined"==typeof IntersectionObserver)return;if(!e)return;const t=new IntersectionObserver(u,{root:r,rootMargin:i,threshold:a});return t.observe(e),()=>{t.unobserve(e)}}),[r,a,i,u]),c},u=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,o.useCallback)((e=>{t.forEach((t=>{"function"==typeof t?t(e):null!=t&&(t.current=e)}))}),[...t])},f=(0,o.forwardRef)(((e,t)=>{const{action:n,calledOnce:o,threshold:i,root:c,rootMargin:l}=e,f=a(e,["action","calledOnce","threshold","root","rootMargin"]),p=s({action:n,calledOnce:o,threshold:i,root:c,rootMargin:l});return(0,r.jsx)("div",Object.assign({ref:u(t,p)},f,{children:e.children}))})),p=(0,o.forwardRef)(((e,t)=>{var{src:n,style:i,threshold:c,root:l,rootMargin:f}=e,p=a(e,["src","style","threshold","root","rootMargin"]);const d=s({action:e=>{e.target.src=n},calledOnce:!0,threshold:c,root:l,rootMargin:f}),m=(0,o.useMemo)((()=>Object.assign({display:"inline-block"},i)),[i]);return(0,r.jsx)("img",Object.assign({},p,{ref:u(t,d),style:m}))}));var d="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==n.g?n.g:"undefined"!=typeof self?self:{};var m=/^\s+|\s+$/g,g=/^[-+]0x[0-9a-f]+$/i,y=/^0b[01]+$/i,h=/^0o[0-7]+$/i,v=parseInt,b="object"==typeof d&&d&&d.Object===Object&&d,w="object"==typeof self&&self&&self.Object===Object&&self,O=b||w||Function("return this")(),k=Object.prototype.toString,x=Math.max,j=Math.min,E=function(){return O.Date.now()};function I(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function L(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==k.call(e)}(e))return NaN;if(I(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=I(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(m,"");var n=y.test(e);return n||h.test(e)?v(e.slice(2),n?2:8):g.test(e)?NaN:+e}var S=function(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}((function(e,t,n){var r,o,a,i,c,l,s=0,u=!1,f=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function d(t){var n=r,a=o;return r=o=void 0,s=t,i=e.apply(a,n)}function m(e){var n=e-l;return void 0===l||n>=t||n<0||f&&e-s>=a}function g(){var e=E();if(m(e))return y(e);c=setTimeout(g,function(e){var n=t-(e-l);return f?j(n,a-(e-s)):n}(e))}function y(e){return c=void 0,p&&r?d(e):(r=o=void 0,i)}function h(){var e=E(),n=m(e);if(r=arguments,o=this,l=e,n){if(void 0===c)return function(e){return s=e,c=setTimeout(g,t),u?d(e):i}(l);if(f)return c=setTimeout(g,t),d(l)}return void 0===c&&(c=setTimeout(g,t)),i}return t=L(t)||0,I(n)&&(u=!!n.leading,a=(f="maxWait"in n)?x(L(n.maxWait)||0,t):a,p="trailing"in n?!!n.trailing:p),h.cancel=function(){void 0!==c&&clearTimeout(c),s=0,r=l=o=c=void 0},h.flush=function(){return void 0===c?i:y(E())},h}));const C=function(e,t,n){void 0===n&&(n={});const r=(0,o.useMemo)((()=>S(e,t,n)),[e,t,n]);return(e=>{const t=(0,o.useRef)(e);(0,o.useEffect)((()=>{t.current=e}),[e]),(0,o.useEffect)((()=>()=>t.current()),[])})((()=>r.cancel())),r},P=i()?o.useEffect:o.useLayoutEffect,z=e=>{const t=(0,o.useRef)(e);return(0,o.useEffect)((()=>{t.current=e}),[e]),t.current},N=e=>{const[t,n]=(0,o.useState)({bottom:0,height:0,left:0,right:0,top:0,width:0,x:0,y:0}),r=(0,o.useRef)(null),a=l(e),i=(0,o.useCallback)((e=>{let[t]=e;t&&(a(t),n(t.contentRect))}),[a]);return(0,o.useEffect)((()=>{const e=r.current;if("undefined"==typeof ResizeObserver)return;if(!e)return;const t=new ResizeObserver(i);return t.observe(e),()=>{t.unobserve(e)}}),[i]),{ref:r,contentRect:t}},T=function(e){void 0===e&&(e={});const{isDebounce:t=!1,wait:n=300}=e,[r,a]=(0,o.useState)({width:null,height:null}),i=(0,o.useCallback)((()=>{a({width:window.innerWidth,height:window.innerHeight})}),[]),c=C(i,n),l=(0,o.useMemo)((()=>t?c:i),[i,t,c]);return P((()=>(i(),window.addEventListener("resize",l),()=>{window.removeEventListener("resize",l)})),[]),r}},9681:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(6529),o=(n(5721),n(6164)),a=n(8138);const i={},c="LazyImage",l={unversionedId:"react/components/LazyImage",id:"react/components/LazyImage",title:"LazyImage",description:"An image component that Lazy loading an assigned image when exposed to a Viewport.",source:"@site/docs/react/components/LazyImage.mdx",sourceDirName:"react/components",slug:"/react/components/LazyImage",permalink:"/devgrace/docs/react/components/LazyImage",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"InView",permalink:"/devgrace/docs/react/components/InView"},next:{title:"Portal",permalink:"/devgrace/docs/react/components/Portal"}},s={},u=[{value:"Interface",id:"interface",level:2},{value:"Usage",id:"usage",level:2},{value:"Default",id:"default",level:3},{value:"Fallback",id:"fallback",level:3},{value:"Example",id:"example",level:2},{value:"Note",id:"note",level:2}],f={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"lazyimage"},"LazyImage"),(0,o.kt)("p",null,"An image component that ",(0,o.kt)("inlineCode",{parentName:"p"},"Lazy loading")," an assigned image when exposed to a ",(0,o.kt)("inlineCode",{parentName:"p"},"Viewport"),"."),(0,o.kt)("p",null,"You can resize the image by entering ",(0,o.kt)("inlineCode",{parentName:"p"},"width"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"height")," values and at the same time improve the ",(0,o.kt)("inlineCode",{parentName:"p"},"Layout Shift"),"."),(0,o.kt)("p",null,"You can set the Intersection Observer Option (see ",(0,o.kt)("inlineCode",{parentName:"p"},"Note")," below)."),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"interface"},"Interface"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"interface LazyImageProps extends React.ComponentProps<'img'> {\n  src: string;\n  threshold?: number | number[]; // default: 0\n  root?: Document | Element | null; // default: null\n  rootMargin?: string; // default: '0px 0px 0px 0px'\n}\n\nconst LazyImage: React.ForwardRefExoticComponent<Omit<LazyImageProps, \"ref\"> & React.RefAttributes<HTMLDivElement>>\n")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("h3",{id:"default"},"Default"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { LazyImage } from '@devgrace/react';\nimport img1 from '../assets/img1.png';\nimport img2 from '../assets/img2.png';\n\nconst Example = () => {\n  return (\n    <div>\n      {/* ... */}\n      <LazyImage width={400} height={400} src={img1} alt=\"img1\" />\n      {/* ... */}\n      <LazyImage width={400} height={400} src={img2} alt=\"img2\" />\n      {/* ... */}\n    </div>\n  );\n}; \n")),(0,o.kt)("br",null),(0,o.kt)("h3",{id:"fallback"},"Fallback"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { LazyImage } from '@devgrace/react';\nimport img1 from '../assets/img1.png';\n\nconst Example = () => {\n  const [isLoaded, setIsLoaded] = useState(false);\n\n  const wrapperStyle: CSSProperties = {\n    position: 'relative',\n    width: '400px',\n    height: '400px',\n  };\n\n  const imgStyle: CSSProperties = {\n    position: 'absolute',\n    top: 0,\n    left: 0,\n    opacity: isLoaded ? 1 : 0,\n    transition: 'opacity 0.2s',\n  };\n\n  const skeletonStyle: CSSProperties = {\n    width: '400px',\n    height: '400px',\n    backgroundColor: '#cdcbcb',\n  }\n\n  return (\n    <div style={wrapperStyle}>\n      {!isLoaded && <div style={skeletonStyle} />}\n      <LazyImage\n        style={imgStyle}\n        width={400}\n        height={400}\n        src={img1}\n        alt=\"img1\"\n        onLoad={() => setIsLoaded(true)}\n      />\n    </div>\n  );\n}; \n")),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("div",{style:{maxWidth:"500px",height:"500px",overflow:"scroll",background:"#f8f8f8"}},(0,o.kt)("div",{style:{width:"100%",height:"500px",textAlign:"center",fontSize:"2rem"}},"Please scroll down."),(0,o.kt)(a.wY,{width:"100%",height:400,src:"https://github.com/Team-Grace/devgrace/assets/64779472/b5640bec-2abc-4205-afbf-ccfd9876a90b",alt:"img1",onClick:()=>console.log("img click1"),mdxType:"LazyImage"}),(0,o.kt)("div",{style:{width:"100%",height:"150px"}}),(0,o.kt)(a.wY,{width:"100%",height:400,src:"https://github.com/Team-Grace/devgrace/assets/64779472/207743a7-b29f-4826-bc08-8df0d67e568b",alt:"img2",onClick:()=>console.log("img click2"),mdxType:"LazyImage"}),(0,o.kt)("div",{style:{width:"100%",height:"150px"}}),(0,o.kt)(a.wY,{width:"100%",height:400,src:"https://github.com/Team-Grace/devgrace/assets/64779472/d1957ec8-fe87-406e-bfda-fb4ee505b152",alt:"img3",onClick:()=>console.log("img click3"),mdxType:"LazyImage"})),(0,o.kt)("h2",{id:"note"},"Note"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API"},"Intersection Observer API")))}d.isMDXComponent=!0},5657:(e,t,n)=>{var r=n(5721),o=Symbol.for("react.element"),a=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,n){var r,a={},s=null,u=null;for(r in void 0!==n&&(s=""+n),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(u=t.ref),t)i.call(t,r)&&!l.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{$$typeof:o,type:e,key:s,ref:u,props:a,_owner:c.current}}t.jsx=s,t.jsxs=s},6521:(e,t,n)=>{e.exports=n(5657)}}]);