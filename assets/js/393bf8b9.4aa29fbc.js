/*! For license information please see 393bf8b9.4aa29fbc.js.LICENSE.txt */
"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[946],{6164:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(5721);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),f=o,m=u["".concat(i,".").concat(f)]||u[f]||d[f]||a;return n?r.createElement(m,l(l({ref:t},p),{},{components:n})):r.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=f;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[u]="string"==typeof e?e:o,l[1]=c;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8138:(e,t,n)=>{n.d(t,{AB:()=>l,df:()=>c});var r=n(6521),o=n(5721);n(6157);function a(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}"function"==typeof SuppressedError&&SuppressedError;"function"==typeof SuppressedError&&SuppressedError;const l=e=>{let{children:t}=e;const n=Math.random()<.5?0:1,r=o.Children.toArray(t);let a=0,c=0;if(2!==r.length)return null;for(const o of r){if(![l.CaseA,l.CaseB].includes(o.type))return null;o.type===l.CaseA?a+=1:c+=1}return a>=2||c>=2?null:n?r[0]:r[1]};l.CaseA=e=>{let{children:t}=e;return(0,r.jsx)(o.Fragment,{children:t})},l.CaseB=e=>{let{children:t}=e;return(0,r.jsx)(o.Fragment,{children:t})};const c=e=>{var{children:t,style:n}=e,l=a(e,["children","style"]);const c=(e=>{let{action:t,calledOnce:n=!1,root:r=null,threshold:a=0,rootMargin:l="0px 0px 0px 0px"}=e;const c=(0,o.useRef)(null),i=(0,o.useCallback)(((e,r)=>{let[o]=e;if(o&&o.isIntersecting){const e=o.target;t&&t(o),c.current&&n&&r.unobserve(e)}}),[t,n]);return(0,o.useEffect)((()=>{const e=c.current;if("undefined"==typeof IntersectionObserver)return;if(!e)return;const t=new IntersectionObserver(i,{root:r,rootMargin:l,threshold:a});return t.observe(e),()=>{t.unobserve(e)}}),[r,a,l,i]),c})(Object.assign({},l));return(0,r.jsx)("div",{ref:c,style:n,children:t})};var i="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,s="object"==typeof self&&self&&self.Object===Object&&self,p=i||s||Function("return this")(),u=p.Symbol,d=Object.prototype;d.hasOwnProperty,d.toString,u&&u.toStringTag,Object.prototype.toString,u&&u.toStringTag;Math.max,Math.min;"undefined"!=typeof window||void 0===n.g?o.useLayoutEffect:o.useEffect},4750:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>f,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=n(6529),o=(n(5721),n(6164)),a=n(8138);const l={},c="AB",i={unversionedId:"react/components/AB",id:"react/components/AB",title:"AB",description:"Component that can be used when AB testing.",source:"@site/docs/react/components/AB.mdx",sourceDirName:"react/components",slug:"/react/components/AB",permalink:"/devgrace/docs/react/components/AB",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Introduce",permalink:"/devgrace/docs/introduce/"},next:{title:"InView",permalink:"/devgrace/docs/react/components/InView"}},s={},p=[{value:"Interface",id:"interface",level:2},{value:"Usage",id:"usage",level:2},{value:"Example",id:"example",level:2}],u={toc:p},d="wrapper";function f(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"ab"},"AB"),(0,o.kt)("p",null,"Component that can be used when ",(0,o.kt)("inlineCode",{parentName:"p"},"AB testing"),"."),(0,o.kt)("p",null,"Returns ",(0,o.kt)("inlineCode",{parentName:"p"},"null")," if not used correctly, as shown below."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Using an invalid component type (AB.CaseA. AB.CaseB)"),(0,o.kt)("li",{parentName:"ul"},"Using a duplicate component type"),(0,o.kt)("li",{parentName:"ul"},"children length is not ",(0,o.kt)("inlineCode",{parentName:"li"},"2"))),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"interface"},"Interface"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"const AB: {\n  ({ children }: { children: React.ReactNode }): JSX.Element | null;\n  CaseA({ children }: { children: React.ReactNode }): JSX.Element;\n  CaseB({ children }: { children: React.ReactNode }): JSX.Element;\n}\n")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { AB } from '@devgrace/react';\n\nconst { CaseA, CaseB } = AB;\n\nconst Example = () => {\n  return (\n    <AB>\n      <CaseA>\n        <div>A</div>\n      </CaseA>\n      <CaseB>\n        <div>B</div>\n      </CaseB>\n    </AB>\n  );\n}; \n")),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("div",null,(0,o.kt)("p",null,"Refreshing the page will change the value."),(0,o.kt)(a.AB,{mdxType:"AB"},(0,o.kt)(a.AB.CaseA,null,(0,o.kt)("div",{style:{width:"50px",backgroundColor:"green",color:"white",fontSize:"2rem",textAlign:"center"}},"A")),(0,o.kt)(a.AB.CaseB,null,(0,o.kt)("div",{style:{width:"50px",backgroundColor:"green",color:"white",fontSize:"2rem",textAlign:"center"}},"B")))))}f.isMDXComponent=!0},5657:(e,t,n)=>{var r=n(5721),o=Symbol.for("react.element"),a=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,n){var r,a={},s=null,p=null;for(r in void 0!==n&&(s=""+n),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(p=t.ref),t)l.call(t,r)&&!i.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{$$typeof:o,type:e,key:s,ref:p,props:a,_owner:c.current}}t.jsx=s},6521:(e,t,n)=>{e.exports=n(5657)}}]);