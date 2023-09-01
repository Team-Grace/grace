/*! For license information please see 8316b6ba.134fc29c.js.LICENSE.txt */
"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[364],{6164:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(5721);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),d=o,m=p["".concat(c,".").concat(d)]||p[d]||f[d]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8138:(e,t,n)=>{n.d(t,{AB:()=>i,df:()=>c,wY:()=>u});var r=n(6521),o=n(5721);n(6157);function a(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}"function"==typeof SuppressedError&&SuppressedError;"function"==typeof SuppressedError&&SuppressedError;const i=e=>{let{children:t}=e;const n=Math.random()<.5?0:1,r=o.Children.toArray(t);let a=0,l=0;if(2!==r.length)return null;for(const o of r){if(![i.CaseA,i.CaseB].includes(o.type))return null;o.type===i.CaseA?a+=1:l+=1}return a>=2||l>=2?null:n?r[0]:r[1]};i.CaseA=e=>{let{children:t}=e;return(0,r.jsx)(o.Fragment,{children:t})},i.CaseB=e=>{let{children:t}=e;return(0,r.jsx)(o.Fragment,{children:t})};const l=e=>{let{action:t,calledOnce:n=!1,root:r=null,threshold:a=0,rootMargin:i="0px 0px 0px 0px"}=e;const l=(0,o.useRef)(null),c=(0,o.useCallback)(((e,r)=>{let[o]=e;if(o&&o.isIntersecting){const e=o.target;t&&t(o),l.current&&n&&r.unobserve(e)}}),[t,n]);return(0,o.useEffect)((()=>{const e=l.current;if("undefined"==typeof IntersectionObserver)return;if(!e)return;const t=new IntersectionObserver(c,{root:r,rootMargin:i,threshold:a});return t.observe(e),()=>{t.unobserve(e)}}),[r,a,i,c]),l},c=e=>{var{children:t,style:n}=e,o=a(e,["children","style"]);const i=l(Object.assign({},o));return(0,r.jsx)("div",{ref:i,style:n,children:t})},s=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,o.useCallback)((e=>{t.forEach((t=>{"function"==typeof t?t(e):null!=t&&(t.current=e)}))}),[...t])},u=(0,o.forwardRef)(((e,t)=>{var{src:n,style:i,threshold:c,root:u,rootMargin:p}=e,f=a(e,["src","style","threshold","root","rootMargin"]);const d=l({action:e=>{e.target.src=n},calledOnce:!0,threshold:c,root:u,rootMargin:p}),m=(0,o.useMemo)((()=>Object.assign({display:"inline-block"},i)),[i]);return(0,r.jsx)("img",Object.assign({},f,{ref:s(t,d),style:m}))}));var p="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==n.g?n.g:"undefined"!=typeof self?self:{};var f=/^\s+|\s+$/g,d=/^[-+]0x[0-9a-f]+$/i,m=/^0b[01]+$/i,g=/^0o[0-7]+$/i,y=parseInt,h="object"==typeof p&&p&&p.Object===Object&&p,v="object"==typeof self&&self&&self.Object===Object&&self,b=h||v||Function("return this")(),k=Object.prototype.toString,O=Math.max,w=Math.min,x=function(){return b.Date.now()};function j(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function I(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==k.call(e)}(e))return NaN;if(j(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=j(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(f,"");var n=m.test(e);return n||g.test(e)?y(e.slice(2),n?2:8):d.test(e)?NaN:+e}!function(e){e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")&&e.default}((function(e,t,n){var r,o,a,i,l,c,s=0,u=!1,p=!1,f=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function d(t){var n=r,a=o;return r=o=void 0,s=t,i=e.apply(a,n)}function m(e){var n=e-c;return void 0===c||n>=t||n<0||p&&e-s>=a}function g(){var e=x();if(m(e))return y(e);l=setTimeout(g,function(e){var n=t-(e-c);return p?w(n,a-(e-s)):n}(e))}function y(e){return l=void 0,f&&r?d(e):(r=o=void 0,i)}function h(){var e=x(),n=m(e);if(r=arguments,o=this,c=e,n){if(void 0===l)return function(e){return s=e,l=setTimeout(g,t),u?d(e):i}(c);if(p)return l=setTimeout(g,t),d(c)}return void 0===l&&(l=setTimeout(g,t)),i}return t=I(t)||0,j(n)&&(u=!!n.leading,a=(p="maxWait"in n)?O(I(n.maxWait)||0,t):a,f="trailing"in n?!!n.trailing:f),h.cancel=function(){void 0!==l&&clearTimeout(l),s=0,r=c=o=l=void 0},h.flush=function(){return void 0===l?i:y(x())},h}));"undefined"!=typeof window||void 0===n.g?o.useLayoutEffect:o.useEffect},5691:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var r=n(6529),o=(n(5721),n(6164)),a=n(8138);const i={},l="LazyImage",c={unversionedId:"react/components/LazyImage",id:"react/components/LazyImage",title:"LazyImage",description:"Viewport\uc5d0 \ub178\ucd9c\ub420 \ub54c \ud560\ub2f9\ub41c \uc774\ubbf8\uc9c0\ub97c Lazy Loading \ud558\ub294 \uc774\ubbf8\uc9c0 \ucef4\ud3ec\ub10c\ud2b8\uc785\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/react/components/LazyImage.mdx",sourceDirName:"react/components",slug:"/react/components/LazyImage",permalink:"/devgrace/ko/docs/react/components/LazyImage",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"InView",permalink:"/devgrace/ko/docs/react/components/InView"},next:{title:"Portal",permalink:"/devgrace/ko/docs/react/components/Portal"}},s={},u=[{value:"Interface",id:"interface",level:2},{value:"Usage",id:"usage",level:2},{value:"Default",id:"default",level:3},{value:"Fallback",id:"fallback",level:3},{value:"Example",id:"example",level:2},{value:"Note",id:"note",level:2}],p={toc:u},f="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(f,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"lazyimage"},"LazyImage"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Viewport"),"\uc5d0 \ub178\ucd9c\ub420 \ub54c \ud560\ub2f9\ub41c \uc774\ubbf8\uc9c0\ub97c ",(0,o.kt)("inlineCode",{parentName:"p"},"Lazy Loading")," \ud558\ub294 \uc774\ubbf8\uc9c0 \ucef4\ud3ec\ub10c\ud2b8\uc785\ub2c8\ub2e4."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"width"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"height")," \uac12\uc744 \uc785\ub825\ud574 \uc774\ubbf8\uc9c0\uc758 \ud06c\uae30\ub97c \uc870\uc808 \ud560 \uc218 \uc788\uc73c\uba70, \ub3d9\uc2dc\uc5d0 ",(0,o.kt)("inlineCode",{parentName:"p"},"Layout Shift"),"\ub97c \uac1c\uc120\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("p",null,"Intersection Observer Option\uc744 \uc124\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.(\ud558\ub2e8 ",(0,o.kt)("inlineCode",{parentName:"p"},"Note")," \ucc38\uace0)"),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"interface"},"Interface"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"interface LazyImageProps extends React.ComponentProps<'img'> {\n  src: string;\n  threshold?: number | number[]; // default: 0\n  root?: Document | Element | null; // default: null\n  rootMargin?: string; // default: '0px 0px 0px 0px'\n}\n\nconst LazyImage: React.ForwardRefExoticComponent<Omit<LazyImageProps, \"ref\"> & React.RefAttributes<HTMLDivElement>>\n")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("h3",{id:"default"},"Default"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { LazyImage } from '@devgrace/react';\nimport img1 from '../assets/img1.png';\nimport img2 from '../assets/img2.png';\n\nconst Example = () => {\n  return (\n    <div>\n      {/* ... */}\n      <LazyImage width={400} height={400} src={img1} alt=\"img1\" />\n      {/* ... */}\n      <LazyImage width={400} height={400} src={img2} alt=\"img2\" />\n      {/* ... */}\n    </div>\n  );\n}; \n")),(0,o.kt)("br",null),(0,o.kt)("h3",{id:"fallback"},"Fallback"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { LazyImage } from '@devgrace/react';\nimport img1 from '../assets/img1.png';\n\nconst Example = () => {\n  const [isLoaded, setIsLoaded] = useState(false);\n\n  const wrapperStyle: CSSProperties = {\n    position: 'relative',\n    width: '400px',\n    height: '400px',\n  };\n\n  const imgStyle: CSSProperties = {\n    position: 'absolute',\n    top: 0,\n    left: 0,\n    width: '100%',\n    height: '100%',\n    opacity: isLoaded ? 1 : 0,\n    transition: 'opacity 0.2s',\n  };\n\n  const skeletonStyle: CSSProperties = {\n    width: '400px',\n    height: '400px',\n    backgroundColor: '#cdcbcb',\n  }\n\n  return (\n    <div style={wrapperStyle}>\n      {!isLoaded && <div style={skeletonStyle} />}\n      <LazyImage\n        style={imgStyle}\n        width={400}\n        height={400}\n        src={img1}\n        alt=\"img1\"\n        onLoad={() => setIsLoaded(true)}\n      />\n    </div>\n  );\n}; \n")),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("div",{style:{maxWidth:"500px",height:"500px",overflow:"scroll",background:"#f8f8f8"}},(0,o.kt)("div",{style:{width:"100%",height:"500px",textAlign:"center",fontSize:"2rem"}},"\uc2a4\ud06c\ub864 \ud574\uc8fc\uc138\uc694."),(0,o.kt)(a.wY,{width:"100%",height:400,src:"https://github.com/Team-Grace/devgrace/assets/64779472/b5640bec-2abc-4205-afbf-ccfd9876a90b",alt:"img1",onClick:()=>console.log("img click1"),mdxType:"LazyImage"}),(0,o.kt)("div",{style:{width:"100%",height:"150px"}}),(0,o.kt)(a.wY,{width:"100%",height:400,src:"https://github.com/Team-Grace/devgrace/assets/64779472/207743a7-b29f-4826-bc08-8df0d67e568b",alt:"img2",onClick:()=>console.log("img click2"),mdxType:"LazyImage"}),(0,o.kt)("div",{style:{width:"100%",height:"150px"}}),(0,o.kt)(a.wY,{width:"100%",height:400,src:"https://github.com/Team-Grace/devgrace/assets/64779472/d1957ec8-fe87-406e-bfda-fb4ee505b152",alt:"img3",onClick:()=>console.log("img click3"),mdxType:"LazyImage"})),(0,o.kt)("h2",{id:"note"},"Note"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/ko/docs/Web/API/IntersectionObserver"},"Intersection Observer API")))}d.isMDXComponent=!0},5657:(e,t,n)=>{var r=n(5721),o=Symbol.for("react.element"),a=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,n){var r,a={},s=null,u=null;for(r in void 0!==n&&(s=""+n),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(u=t.ref),t)i.call(t,r)&&!c.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{$$typeof:o,type:e,key:s,ref:u,props:a,_owner:l.current}}t.jsx=s},6521:(e,t,n)=>{e.exports=n(5657)}}]);