/*! For license information please see 393bf8b9.f2663aec.js.LICENSE.txt */
"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6946],{6164:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>y});var r=n(5721);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},f="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=s(n),d=o,y=f["".concat(l,".").concat(d)]||f[d]||p[d]||i;return n?r.createElement(y,a(a({ref:t},u),{},{components:n})):r.createElement(y,a({ref:t},u))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[f]="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8138:(e,t,n)=>{n.d(t,{AB:()=>a,df:()=>u,iP:()=>R,wY:()=>f,yU:()=>N});var r=n(6521),o=n(5721);n(6157);function i(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}"function"==typeof SuppressedError&&SuppressedError;"function"==typeof SuppressedError&&SuppressedError;const a=e=>{let{children:t}=e;const n=Math.random()<.5?0:1,r=o.Children.toArray(t);let i=0,c=0;if(2!==r.length)return null;for(const o of r){if(![a.CaseA,a.CaseB].includes(o.type))return null;o.type===a.CaseA?i+=1:c+=1}return i>=2||c>=2?null:n?r[0]:r[1]};a.CaseA=e=>{let{children:t}=e;return(0,r.jsx)(o.Fragment,{children:t})},a.CaseB=e=>{let{children:t}=e;return(0,r.jsx)(o.Fragment,{children:t})};const c=e=>{const t=(0,o.useRef)(e);return(0,o.useEffect)((()=>{t.current=e}),[e]),(0,o.useCallback)((function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];t.current(1===n.length?n[0]:n)}),[])},l=e=>{let{action:t,calledOnce:n=!1,root:r=null,threshold:i=0,rootMargin:a="0px 0px 0px 0px"}=e;const l=(0,o.useRef)(null),s=c(t),u=(0,o.useCallback)(((e,t)=>{let[r]=e;if(r&&r.isIntersecting){const e=r.target;s&&s(r),n&&t.unobserve(e)}}),[s,n]);return(0,o.useEffect)((()=>{const e=l.current;if("undefined"==typeof IntersectionObserver)return;if(!e)return;const t=new IntersectionObserver(u,{root:r,rootMargin:a,threshold:i});return t.observe(e),()=>{t.unobserve(e)}}),[r,i,a,u]),l},s=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,o.useCallback)((e=>{t.forEach((t=>{"function"==typeof t?t(e):null!=t&&(t.current=e)}))}),[...t])},u=(0,o.forwardRef)(((e,t)=>{const{action:n,calledOnce:o,threshold:a,root:c,rootMargin:u}=e,f=i(e,["action","calledOnce","threshold","root","rootMargin"]),p=l({action:n,calledOnce:o,threshold:a,root:c,rootMargin:u});return(0,r.jsx)("div",Object.assign({ref:s(t,p)},f,{children:e.children}))})),f=(0,o.forwardRef)(((e,t)=>{var{src:n,style:a,threshold:c,root:u,rootMargin:f}=e,p=i(e,["src","style","threshold","root","rootMargin"]);const d=l({action:e=>{e.target.src=n},calledOnce:!0,threshold:c,root:u,rootMargin:f}),y=(0,o.useMemo)((()=>Object.assign({display:"inline-block"},a)),[a]);return(0,r.jsx)("img",Object.assign({},p,{ref:s(t,d),style:y}))}));var p="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==n.g?n.g:"undefined"!=typeof self?self:{};var d=/^\s+|\s+$/g,y=/^[-+]0x[0-9a-f]+$/i,m=/^0b[01]+$/i,v=/^0o[0-7]+$/i,h=parseInt,g="object"==typeof p&&p&&p.Object===Object&&p,b="object"==typeof self&&self&&self.Object===Object&&self,O=g||b||Function("return this")(),w=Object.prototype.toString,k=Math.max,x=Math.min,j=function(){return O.Date.now()};function A(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function C(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==w.call(e)}(e))return NaN;if(A(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=A(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(d,"");var n=m.test(e);return n||v.test(e)?h(e.slice(2),n?2:8):y.test(e)?NaN:+e}var E=function(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}((function(e,t,n){var r,o,i,a,c,l,s=0,u=!1,f=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function d(t){var n=r,i=o;return r=o=void 0,s=t,a=e.apply(i,n)}function y(e){var n=e-l;return void 0===l||n>=t||n<0||f&&e-s>=i}function m(){var e=j();if(y(e))return v(e);c=setTimeout(m,function(e){var n=t-(e-l);return f?x(n,i-(e-s)):n}(e))}function v(e){return c=void 0,p&&r?d(e):(r=o=void 0,a)}function h(){var e=j(),n=y(e);if(r=arguments,o=this,l=e,n){if(void 0===c)return function(e){return s=e,c=setTimeout(m,t),u?d(e):a}(l);if(f)return c=setTimeout(m,t),d(l)}return void 0===c&&(c=setTimeout(m,t)),a}return t=C(t)||0,A(n)&&(u=!!n.leading,i=(f="maxWait"in n)?k(C(n.maxWait)||0,t):i,p="trailing"in n?!!n.trailing:p),h.cancel=function(){void 0!==c&&clearTimeout(c),s=0,r=l=o=c=void 0},h.flush=function(){return void 0===c?a:v(j())},h}));const B=function(e,t,n){void 0===n&&(n={});const r=(0,o.useMemo)((()=>E(e,t,n)),[e,t,n]);return(e=>{const t=(0,o.useRef)(e);(0,o.useEffect)((()=>{t.current=e}),[e]),(0,o.useEffect)((()=>()=>t.current()),[])})((()=>r.cancel())),r},S="undefined"!=typeof window||void 0===n.g?o.useLayoutEffect:o.useEffect,N=e=>{const[t,n]=(0,o.useState)({bottom:0,height:0,left:0,right:0,top:0,width:0,x:0,y:0}),r=(0,o.useRef)(null),i=c(e),a=(0,o.useCallback)((e=>{let[t]=e;t&&(i(t),n(t.contentRect))}),[i]);return(0,o.useEffect)((()=>{const e=r.current;if("undefined"==typeof ResizeObserver)return;if(!e)return;const t=new ResizeObserver(a);return t.observe(e),()=>{t.unobserve(e)}}),[a]),{ref:r,contentRect:t}},R=function(e){void 0===e&&(e={});const{isDebounce:t=!1,wait:n=300}=e,[r,i]=(0,o.useState)({width:null,height:null}),a=(0,o.useCallback)((()=>{i({width:window.innerWidth,height:window.innerHeight})}),[]),c=B(a,n),l=(0,o.useMemo)((()=>t?c:a),[a,t,c]);return S((()=>(a(),window.addEventListener("resize",l),()=>{window.removeEventListener("resize",l)})),[]),r}},4750:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=n(6529),o=(n(5721),n(6164)),i=n(8138);const a={},c="AB",l={unversionedId:"react/components/AB",id:"react/components/AB",title:"AB",description:"Component that can be used when AB testing.",source:"@site/docs/react/components/AB.mdx",sourceDirName:"react/components",slug:"/react/components/AB",permalink:"/devgrace/docs/react/components/AB",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Introduce",permalink:"/devgrace/docs/introduce/"},next:{title:"InView",permalink:"/devgrace/docs/react/components/InView"}},s={},u=[{value:"Interface",id:"interface",level:2},{value:"Usage",id:"usage",level:2},{value:"Example",id:"example",level:2}],f={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"ab"},"AB"),(0,o.kt)("p",null,"Component that can be used when ",(0,o.kt)("inlineCode",{parentName:"p"},"AB testing"),"."),(0,o.kt)("p",null,"Returns ",(0,o.kt)("inlineCode",{parentName:"p"},"null")," if not used correctly, as shown below."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Using an invalid component type (AB.CaseA. AB.CaseB)"),(0,o.kt)("li",{parentName:"ul"},"Using a duplicate component type"),(0,o.kt)("li",{parentName:"ul"},"children length is not ",(0,o.kt)("inlineCode",{parentName:"li"},"2"))),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"interface"},"Interface"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"const AB: {\n  ({ children }: { children: React.ReactNode }): JSX.Element | null;\n  CaseA({ children }: { children: React.ReactNode }): JSX.Element;\n  CaseB({ children }: { children: React.ReactNode }): JSX.Element;\n}\n")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { AB } from '@devgrace/react';\n\nconst { CaseA, CaseB } = AB;\n\nconst Example = () => {\n  return (\n    <AB>\n      <CaseA>\n        <div>A</div>\n      </CaseA>\n      <CaseB>\n        <div>B</div>\n      </CaseB>\n    </AB>\n  );\n}; \n")),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("div",null,(0,o.kt)("p",null,"Refreshing the page will change the value."),(0,o.kt)(i.AB,{mdxType:"AB"},(0,o.kt)(i.AB.CaseA,null,(0,o.kt)("div",{style:{width:"50px",backgroundColor:"green",color:"white",fontSize:"2rem",textAlign:"center"}},"A")),(0,o.kt)(i.AB.CaseB,null,(0,o.kt)("div",{style:{width:"50px",backgroundColor:"green",color:"white",fontSize:"2rem",textAlign:"center"}},"B")))))}d.isMDXComponent=!0},5657:(e,t,n)=>{var r=n(5721),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,n){var r,i={},s=null,u=null;for(r in void 0!==n&&(s=""+n),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(u=t.ref),t)a.call(t,r)&&!l.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:o,type:e,key:s,ref:u,props:i,_owner:c.current}}t.jsx=s,t.jsxs=s},6521:(e,t,n)=>{e.exports=n(5657)}}]);