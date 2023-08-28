/*! For license information please see 393bf8b9.bd3810ad.js.LICENSE.txt */
"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[946],{6164:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(5721);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=p(n),f=o,m=s["".concat(i,".").concat(f)]||s[f]||d[f]||a;return n?r.createElement(m,l(l({ref:t},u),{},{components:n})):r.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=f;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[s]="string"==typeof e?e:o,l[1]=c;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1294:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>m,default:()=>O,frontMatter:()=>f,metadata:()=>y,toc:()=>v});var r=n(6529),o=n(5721),a=n(6164),l=n(6521);n(6157);"function"==typeof SuppressedError&&SuppressedError;"function"==typeof SuppressedError&&SuppressedError;var c=function(e){var t=e.children,n=Math.random()<.5?0:1,r=o.Children.toArray(t),a=0,l=0;if(2!==r.length)return null;for(var i=0,p=r;i<p.length;i++){var u=p[i];if(![c.CaseA,c.CaseB].includes(u.type))return null;u.type===c.CaseA?a+=1:l+=1}return a>=2||l>=2?null:n?r[0]:r[1]};c.CaseA=function(e){var t=e.children;return(0,l.jsx)(o.Fragment,{children:t})},c.CaseB=function(e){var t=e.children;return(0,l.jsx)(o.Fragment,{children:t})};var i="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,p="object"==typeof self&&self&&self.Object===Object&&self,u=i||p||Function("return this")(),s=u.Symbol,d=Object.prototype;d.hasOwnProperty,d.toString,s&&s.toStringTag,Object.prototype.toString,s&&s.toStringTag;Math.max,Math.min;"undefined"!=typeof window||void 0===n.g?o.useLayoutEffect:o.useEffect;const f={},m="AB",y={unversionedId:"react/components/AB",id:"react/components/AB",title:"AB",description:"Component that can be used when AB testing.",source:"@site/docs/react/components/AB.mdx",sourceDirName:"react/components",slug:"/react/components/AB",permalink:"/devgrace/docs/react/components/AB",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Introduce",permalink:"/devgrace/docs/introduce/"},next:{title:"Portal",permalink:"/devgrace/docs/react/components/Portal"}},g={},v=[{value:"Interface",id:"interface",level:2},{value:"Example",id:"example",level:2},{value:"Output",id:"output",level:2}],h={toc:v},b="wrapper";function O(e){let{components:t,...n}=e;return(0,a.kt)(b,(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ab"},"AB"),(0,a.kt)("p",null,"Component that can be used when ",(0,a.kt)("inlineCode",{parentName:"p"},"AB testing"),"."),(0,a.kt)("p",null,"Returns ",(0,a.kt)("inlineCode",{parentName:"p"},"null")," if not used correctly, as shown below."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Using an invalid component type (AB.CaseA. AB.CaseB)"),(0,a.kt)("li",{parentName:"ul"},"Using a duplicate component type"),(0,a.kt)("li",{parentName:"ul"},"children length is not ",(0,a.kt)("inlineCode",{parentName:"li"},"2"))),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"interface"},"Interface"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const AB: {\n  ({ children }: { children: React.ReactNode }): JSX.Element | null;\n  CaseA({ children }: { children: React.ReactNode }): JSX.Element;\n  CaseB({ children }: { children: React.ReactNode }): JSX.Element;\n}\n")),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { AB } from '@devgrace/react';\n\nconst { CaseA, CaseB } = AB;\n\nconst Example = () => {\n  return (\n    <AB>\n      <CaseA>\n        <div>A</div>\n      </CaseA>\n      <CaseB>\n        <div>B</div>\n      </CaseB>\n    </AB>\n  );\n}; \n")),(0,a.kt)("h2",{id:"output"},"Output"),(0,a.kt)("div",null,(0,a.kt)("p",null,"Refreshing the page will change the value."),(0,a.kt)(c,{mdxType:"AB"},(0,a.kt)(c.CaseA,null,(0,a.kt)("div",{style:{width:"50px",backgroundColor:"green",color:"white",fontSize:"2rem",textAlign:"center"}},"A")),(0,a.kt)(c.CaseB,null,(0,a.kt)("div",{style:{width:"50px",backgroundColor:"green",color:"white",fontSize:"2rem",textAlign:"center"}},"B")))))}O.isMDXComponent=!0},5657:(e,t,n)=>{var r=n(5721),o=Symbol.for("react.element"),a=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function p(e,t,n){var r,a={},p=null,u=null;for(r in void 0!==n&&(p=""+n),void 0!==t.key&&(p=""+t.key),void 0!==t.ref&&(u=t.ref),t)l.call(t,r)&&!i.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{$$typeof:o,type:e,key:p,ref:u,props:a,_owner:c.current}}t.jsx=p},6521:(e,t,n)=>{e.exports=n(5657)}}]);