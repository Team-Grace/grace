/*! For license information please see eb736ecc.09e38a8f.js.LICENSE.txt */
"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[472],{6164:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(5721);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(r),f=o,m=u["".concat(i,".").concat(f)]||u[f]||d[f]||a;return r?n.createElement(m,l(l({ref:t},p),{},{components:r})):n.createElement(m,l({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=f;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[u]="string"==typeof e?e:o,l[1]=c;for(var s=2;s<a;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},8138:(e,t,r)=>{r.d(t,{AB:()=>l,df:()=>c});var n=r(6521),o=r(5721);r(6157);function a(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}"function"==typeof SuppressedError&&SuppressedError;"function"==typeof SuppressedError&&SuppressedError;const l=e=>{let{children:t}=e;const r=Math.random()<.5?0:1,n=o.Children.toArray(t);let a=0,c=0;if(2!==n.length)return null;for(const o of n){if(![l.CaseA,l.CaseB].includes(o.type))return null;o.type===l.CaseA?a+=1:c+=1}return a>=2||c>=2?null:r?n[0]:n[1]};l.CaseA=e=>{let{children:t}=e;return(0,n.jsx)(o.Fragment,{children:t})},l.CaseB=e=>{let{children:t}=e;return(0,n.jsx)(o.Fragment,{children:t})};const c=e=>{var{children:t,style:r}=e,l=a(e,["children","style"]);const c=(e=>{let{action:t,calledOnce:r=!1,root:n=null,threshold:a=0,rootMargin:l="0px 0px 0px 0px"}=e;const c=(0,o.useRef)(null),i=(0,o.useCallback)(((e,n)=>{let[o]=e;if(o&&o.isIntersecting){const e=o.target;t&&t(o),c.current&&r&&n.unobserve(e)}}),[t,r]);return(0,o.useEffect)((()=>{const e=c.current;if("undefined"==typeof IntersectionObserver)return;if(!e)return;const t=new IntersectionObserver(i,{root:n,rootMargin:l,threshold:a});return t.observe(e),()=>{t.unobserve(e)}}),[n,a,l,i]),c})(Object.assign({},l));return(0,n.jsx)("div",{ref:c,style:r,children:t})};var i="object"==typeof r.g&&r.g&&r.g.Object===Object&&r.g,s="object"==typeof self&&self&&self.Object===Object&&self,p=i||s||Function("return this")(),u=p.Symbol,d=Object.prototype;d.hasOwnProperty,d.toString,u&&u.toStringTag,Object.prototype.toString,u&&u.toStringTag;Math.max,Math.min;"undefined"!=typeof window||void 0===r.g?o.useLayoutEffect:o.useEffect},7922:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>f,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=r(6529),o=(r(5721),r(6164)),a=r(8138);const l={},c="AB",i={unversionedId:"react/components/AB",id:"react/components/AB",title:"AB",description:"AB \ud14c\uc2a4\ud2b8\ud560 \ub54c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 \ucef4\ud3ec\ub10c\ud2b8\uc785\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/react/components/AB.mdx",sourceDirName:"react/components",slug:"/react/components/AB",permalink:"/devgrace/ko/docs/react/components/AB",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\uc18c\uac1c",permalink:"/devgrace/ko/docs/introduce/"},next:{title:"InView",permalink:"/devgrace/ko/docs/react/components/InView"}},s={},p=[{value:"Interface",id:"interface",level:2},{value:"Usage",id:"usage",level:2},{value:"Example",id:"example",level:2}],u={toc:p},d="wrapper";function f(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"ab"},"AB"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"AB \ud14c\uc2a4\ud2b8"),"\ud560 \ub54c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 \ucef4\ud3ec\ub10c\ud2b8\uc785\ub2c8\ub2e4. "),(0,o.kt)("p",null,"\uc544\ub798\uc640 \uac19\uc774 \uc62c\ubc14\ub974\uac8c \uc0ac\uc6a9\ud558\uc9c0 \uc54a\uc73c\uba74 ",(0,o.kt)("inlineCode",{parentName:"p"},"null"),"\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\uc62c\ubc14\ub974\uc9c0 \uc54a\uc740 \ucef4\ud3ec\ub10c\ud2b8 \ud0c0\uc785\uc744 \uc0ac\uc6a9 (AB.CaseA. AB.CaseB)"),(0,o.kt)("li",{parentName:"ul"},"\uc911\ubcf5\ub41c \ucef4\ud3ec\ub10c\ud2b8 \ud0c0\uc785\uc744 \uc0ac\uc6a9"),(0,o.kt)("li",{parentName:"ul"},"\uc790\uc2dd \ucef4\ud3ec\ub10c\ud2b8 \uae38\uc774\uac00 ",(0,o.kt)("inlineCode",{parentName:"li"},"2"),"\uac00 \uc544\ub2cc \uacbd\uc6b0")),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"interface"},"Interface"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"const AB: {\n  ({ children }: { children: React.ReactNode }): JSX.Element | null;\n  CaseA({ children }: { children: React.ReactNode }): JSX.Element;\n  CaseB({ children }: { children: React.ReactNode }): JSX.Element;\n}\n")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { AB } from '@devgrace/react';\n\nconst { CaseA, CaseB } = AB;\n\nconst Example = () => {\n  return (\n    <AB>\n      <CaseA>\n        <div>A</div>\n      </CaseA>\n      <CaseB>\n        <div>B</div>\n      </CaseB>\n    </AB>\n  );\n}; \n")),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("div",null,(0,o.kt)("p",null,"\ud398\uc774\uc9c0\ub97c \uc0c8\ub85c\uace0\uce68 \ud558\uba74 \uac12\uc774 \ubcc0\uacbd\ub429\ub2c8\ub2e4."),(0,o.kt)(a.AB,{mdxType:"AB"},(0,o.kt)(a.AB.CaseA,null,(0,o.kt)("div",{style:{width:"50px",backgroundColor:"green",color:"white",fontSize:"2rem",textAlign:"center"}},"A")),(0,o.kt)(a.AB.CaseB,null,(0,o.kt)("div",{style:{width:"50px",backgroundColor:"green",color:"white",fontSize:"2rem",textAlign:"center"}},"B")))))}f.isMDXComponent=!0},5657:(e,t,r)=>{var n=r(5721),o=Symbol.for("react.element"),a=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,r){var n,a={},s=null,p=null;for(n in void 0!==r&&(s=""+r),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(p=t.ref),t)l.call(t,n)&&!i.hasOwnProperty(n)&&(a[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===a[n]&&(a[n]=t[n]);return{$$typeof:o,type:e,key:s,ref:p,props:a,_owner:c.current}}t.jsx=s},6521:(e,t,r)=>{e.exports=r(5657)}}]);