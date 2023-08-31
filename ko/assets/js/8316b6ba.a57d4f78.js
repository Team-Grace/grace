/*! For license information please see 8316b6ba.a57d4f78.js.LICENSE.txt */
"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[364],{6164:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(5721);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),f=o,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8138:(e,t,n)=>{n.d(t,{AB:()=>i,df:()=>c,wY:()=>s});var r=n(6521),o=n(5721);n(6157);function a(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}"function"==typeof SuppressedError&&SuppressedError;"function"==typeof SuppressedError&&SuppressedError;const i=e=>{let{children:t}=e;const n=Math.random()<.5?0:1,r=o.Children.toArray(t);let a=0,l=0;if(2!==r.length)return null;for(const o of r){if(![i.CaseA,i.CaseB].includes(o.type))return null;o.type===i.CaseA?a+=1:l+=1}return a>=2||l>=2?null:n?r[0]:r[1]};i.CaseA=e=>{let{children:t}=e;return(0,r.jsx)(o.Fragment,{children:t})},i.CaseB=e=>{let{children:t}=e;return(0,r.jsx)(o.Fragment,{children:t})};const l=e=>{let{action:t,calledOnce:n=!1,root:r=null,threshold:a=0,rootMargin:i="0px 0px 0px 0px"}=e;const l=(0,o.useRef)(null),c=(0,o.useCallback)(((e,r)=>{let[o]=e;if(o&&o.isIntersecting){const e=o.target;t&&t(o),l.current&&n&&r.unobserve(e)}}),[t,n]);return(0,o.useEffect)((()=>{const e=l.current;if("undefined"==typeof IntersectionObserver)return;if(!e)return;const t=new IntersectionObserver(c,{root:r,rootMargin:i,threshold:a});return t.observe(e),()=>{t.unobserve(e)}}),[r,a,i,c]),l},c=e=>{var{children:t,style:n}=e,o=a(e,["children","style"]);const i=l(Object.assign({},o));return(0,r.jsx)("div",{ref:i,style:n,children:t})},s=(0,o.forwardRef)(((e,t)=>{var{src:n,fallback:i,threshold:c,root:s,rootMargin:u,width:p,height:d,duration:f=0}=e,m=a(e,["src","fallback","threshold","root","rootMargin","width","height","duration"]);const[g,y]=(0,o.useState)(!1),h=l({action:e=>{e.target.src=n},calledOnce:!0,threshold:c,root:s,rootMargin:u}),b=(0,o.useMemo)((()=>({position:"relative",width:"number"==typeof p?`${p}px`:p,height:"number"==typeof d?`${d}px`:d})),[p,d]),v=(0,o.useMemo)((()=>({position:"absolute",left:0,top:0,width:"100%",height:"100%",opacity:g?1:0,transition:`opacity ${f/1e3}s`})),[g,f]);return(0,r.jsxs)("div",{ref:t,style:b,children:[!g&&i?i:null,(0,r.jsx)("img",Object.assign({},m,{style:v,ref:h,onLoad:()=>y(!0)}))]})}));var u="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==n.g?n.g:"undefined"!=typeof self?self:{};var p=/^\s+|\s+$/g,d=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,m=/^0o[0-7]+$/i,g=parseInt,y="object"==typeof u&&u&&u.Object===Object&&u,h="object"==typeof self&&self&&self.Object===Object&&self,b=y||h||Function("return this")(),v=Object.prototype.toString,k=Math.max,w=Math.min,O=function(){return b.Date.now()};function x(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function j(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==v.call(e)}(e))return NaN;if(x(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=x(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(p,"");var n=f.test(e);return n||m.test(e)?g(e.slice(2),n?2:8):d.test(e)?NaN:+e}!function(e){e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")&&e.default}((function(e,t,n){var r,o,a,i,l,c,s=0,u=!1,p=!1,d=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function f(t){var n=r,a=o;return r=o=void 0,s=t,i=e.apply(a,n)}function m(e){var n=e-c;return void 0===c||n>=t||n<0||p&&e-s>=a}function g(){var e=O();if(m(e))return y(e);l=setTimeout(g,function(e){var n=t-(e-c);return p?w(n,a-(e-s)):n}(e))}function y(e){return l=void 0,d&&r?f(e):(r=o=void 0,i)}function h(){var e=O(),n=m(e);if(r=arguments,o=this,c=e,n){if(void 0===l)return function(e){return s=e,l=setTimeout(g,t),u?f(e):i}(c);if(p)return l=setTimeout(g,t),f(c)}return void 0===l&&(l=setTimeout(g,t)),i}return t=j(t)||0,x(n)&&(u=!!n.leading,a=(p="maxWait"in n)?k(j(n.maxWait)||0,t):a,d="trailing"in n?!!n.trailing:d),h.cancel=function(){void 0!==l&&clearTimeout(l),s=0,r=c=o=l=void 0},h.flush=function(){return void 0===l?i:y(O())},h}));"undefined"!=typeof window||void 0===n.g?o.useLayoutEffect:o.useEffect},5691:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var r=n(6529),o=(n(5721),n(6164)),a=n(8138);const i={},l="LazyImage",c={unversionedId:"react/components/LazyImage",id:"react/components/LazyImage",title:"LazyImage",description:"Viewport\uc5d0 \ub178\ucd9c\ub420 \ub54c \ud560\ub2f9\ub41c \uc774\ubbf8\uc9c0\ub97c Lazy Loading \ud558\ub294 \uc774\ubbf8\uc9c0 \ucef4\ud3ec\ub10c\ud2b8\uc785\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/react/components/LazyImage.mdx",sourceDirName:"react/components",slug:"/react/components/LazyImage",permalink:"/devgrace/ko/docs/react/components/LazyImage",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"InView",permalink:"/devgrace/ko/docs/react/components/InView"},next:{title:"Portal",permalink:"/devgrace/ko/docs/react/components/Portal"}},s={},u=[{value:"Interface",id:"interface",level:2},{value:"Usage",id:"usage",level:2},{value:"Default",id:"default",level:3},{value:"Fallback",id:"fallback",level:3},{value:"Example",id:"example",level:2},{value:"Note",id:"note",level:2}],p={toc:u},d="wrapper";function f(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"lazyimage"},"LazyImage"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Viewport"),"\uc5d0 \ub178\ucd9c\ub420 \ub54c \ud560\ub2f9\ub41c \uc774\ubbf8\uc9c0\ub97c Lazy Loading \ud558\ub294 \uc774\ubbf8\uc9c0 \ucef4\ud3ec\ub10c\ud2b8\uc785\ub2c8\ub2e4."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"width"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"height")," \uac12\uc744 \uc785\ub825\ud574 \uc774\ubbf8\uc9c0\uc758 \ud06c\uae30\ub97c \uc870\uc808 \ud560 \uc218 \uc788\uc73c\uba70, \ub3d9\uc2dc\uc5d0 ",(0,o.kt)("inlineCode",{parentName:"p"},"Layout Shift"),"\ub97c \uac1c\uc120\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"fallback")," props\ub97c \ud1b5\ud574 \ub85c\ub4dc\uc911\uc77c \ub54c ",(0,o.kt)("inlineCode",{parentName:"p"},"\ub300\uccb4 UI"),"\ub97c \ubcf4\uc5ec\uc904 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"duration")," props\ub97c \ud1b5\ud574 \uc774\ubbf8\uc9c0 \ub85c\ub4dc \ud6c4\uc5d0 \ubd80\ub4dc\ub7ec\uc6b4 \ud6a8\uacfc\ub97c \uc704\ud574 ",(0,o.kt)("inlineCode",{parentName:"p"},"transition-duration(ms)"),"\uc744 \uc904 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("p",null,"Intersection Observer Option\uc744 \uc124\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.(\ud558\ub2e8 ",(0,o.kt)("inlineCode",{parentName:"p"},"Note")," \ucc38\uace0)"),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"interface"},"Interface"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"interface LazyImageProps extends React.ComponentProps<'img'> {\n  src: string;\n  duration?: number;\n  fallback?: React.ReactNode;\n  threshold?: number | number[];\n  root?: Document | Element | null;\n  rootMargin?: string;\n}\n\nconst LazyImage: React.ForwardRefExoticComponent<Omit<LazyImageProps, \"ref\"> & React.RefAttributes<HTMLDivElement>>\n")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("h3",{id:"default"},"Default"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { LazyImage } from '@devgrace/react';\nimport img1 from '../assets/img1.png';\nimport img2 from '../assets/img2.png';\n\nconst Example = () => {\n  return (\n    <div>\n      {/* ... */}\n      <LazyImage width={400} height={400} src={img1} alt=\"img1\" />\n      {/* ... */}\n      <LazyImage width={400} height={400} src={img2} alt=\"img2\" />\n      {/* ... */}\n    </div>\n  );\n}; \n")),(0,o.kt)("br",null),(0,o.kt)("h3",{id:"fallback"},"Fallback"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { LazyImage } from '@devgrace/react';\nimport img1 from '../assets/img1.png';\n\nconst Example = () => {\n  const skeletonStyle = {\n    width: '400px',\n    height: '400px',\n    backgroundColor: '#cdcbcb',\n  }\n\n  return (\n    <div>\n      <LazyImage\n        fallback={<div style={skeletonStyle} />} // Fallback UI\n        duration={500} // .5s opacity transition-duration(ms)\n        width={400}\n        height={400}\n        src={img1}\n        alt=\"img1\"\n      />\n    </div>\n  );\n}; \n")),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("div",{style:{maxWidth:"500px",height:"500px",overflow:"scroll",background:"#f8f8f8"}},(0,o.kt)("div",{style:{width:"100%",height:"500px",textAlign:"center",fontSize:"2rem"}},"\uc2a4\ud06c\ub864 \ud574\uc8fc\uc138\uc694."),(0,o.kt)(a.wY,{width:"100%",height:400,duration:300,src:"https://github.com/Team-Grace/devgrace/assets/64779472/b5640bec-2abc-4205-afbf-ccfd9876a90b",alt:"img1",onClick:()=>console.log("img click1"),mdxType:"LazyImage"}),(0,o.kt)("div",{style:{width:"100%",height:"150px"}}),(0,o.kt)("div",{style:{display:"flex",gap:"8px"}},(0,o.kt)(a.wY,{fallback:(0,o.kt)("div",{style:{width:"100%",height:"400px",background:"#34e09b"}},"Skeleton1"),width:"100%",height:250,duration:300,src:"https://github.com/Team-Grace/devgrace/assets/64779472/207743a7-b29f-4826-bc08-8df0d67e568b",alt:"img2",onClick:()=>console.log("img click2"),mdxType:"LazyImage"}),(0,o.kt)(a.wY,{fallback:(0,o.kt)("div",{style:{width:"100%",height:"400px",background:"#3cbce7"}},"Skeleton2"),width:"100%",height:250,duration:300,src:"https://github.com/Team-Grace/devgrace/assets/64779472/7c2a8cf4-989d-425f-80a8-1f6e1620e56b",alt:"img3",onClick:()=>console.log("img click3"),mdxType:"LazyImage"})),(0,o.kt)("div",{style:{width:"100%",height:"150px"}}),(0,o.kt)(a.wY,{fallback:(0,o.kt)("div",{style:{width:"100%",height:"400px",background:"#E79E90"}},"Skeleton3"),width:"100%",height:400,duration:300,src:"https://github.com/Team-Grace/devgrace/assets/64779472/d1957ec8-fe87-406e-bfda-fb4ee505b152",alt:"img1",onClick:()=>console.log("img click4"),mdxType:"LazyImage"})),(0,o.kt)("h2",{id:"note"},"Note"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/ko/docs/Web/API/IntersectionObserver"},"Intersection Observer API")))}f.isMDXComponent=!0},5657:(e,t,n)=>{var r=n(5721),o=Symbol.for("react.element"),a=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,n){var r,a={},s=null,u=null;for(r in void 0!==n&&(s=""+n),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(u=t.ref),t)i.call(t,r)&&!c.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{$$typeof:o,type:e,key:s,ref:u,props:a,_owner:l.current}}t.jsx=s,t.jsxs=s},6521:(e,t,n)=>{e.exports=n(5657)}}]);