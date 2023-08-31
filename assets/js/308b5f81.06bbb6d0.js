"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[580],{6164:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>v});var r=n(5721);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),f=o,v=p["".concat(i,".").concat(f)]||p[f]||d[f]||a;return n?r.createElement(v,s(s({ref:t},u),{},{components:n})):r.createElement(v,s({ref:t},u))}));function v(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=f;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[p]="string"==typeof e?e:o,s[1]=c;for(var l=2;l<a;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9126:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=n(6529),o=(n(5721),n(6164));const a={},s="useIntersectionObserver",c={unversionedId:"react/hooks/useIntersectionObserver",id:"react/hooks/useIntersectionObserver",title:"useIntersectionObserver",description:"A custom hook that calls the action callback function when the target element assigned ref is exposed to the Viewport.",source:"@site/docs/react/hooks/useIntersectionObserver.mdx",sourceDirName:"react/hooks",slug:"/react/hooks/useIntersectionObserver",permalink:"/devgrace/docs/react/hooks/useIntersectionObserver",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"useForceUpdate",permalink:"/devgrace/docs/react/hooks/useForceUpdate"},next:{title:"useInterval",permalink:"/devgrace/docs/react/hooks/useInterval"}},i={},l=[{value:"Interface",id:"interface",level:2},{value:"Usage",id:"usage",level:2},{value:"Note",id:"note",level:2}],u={toc:l},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"useintersectionobserver"},"useIntersectionObserver"),(0,o.kt)("p",null,"A custom hook that calls the ",(0,o.kt)("inlineCode",{parentName:"p"},"action")," callback function when the target element assigned ",(0,o.kt)("inlineCode",{parentName:"p"},"ref")," is exposed to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Viewport"),"."),(0,o.kt)("p",null,"You can set the Intersection Observer Option (see ",(0,o.kt)("inlineCode",{parentName:"p"},"Note")," below)."),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"interface"},"Interface"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"interface UseIntersectionObserverProps {\n  action: (entry: IntersectionObserverEntry) => void;\n  calledOnce?: boolean;\n  threshold?: number | number[];\n  root?: Document | Element | null;\n  rootMargin?: string;\n}\n\nconst useIntersectionObserver: <T extends HTMLElement>({ \n  action, \n  calledOnce, \n  root, \n  threshold, \n  rootMargin\n}: UseIntersectionObserverProps) => React.RefObject<T>\n")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useIntersectionObserver } from \'@devgrace/react\';\n\nconst Example = () => {\n  const divRef = useIntersectionObserver<HTMLDivElement>({\n    action: () => { /* action */},\n  });\n  const imgRef = useIntersectionObserver<HTMLImageElement>({\n    action: (entry) => { /* You can use IntersectionObserverEntry if needed. */},\n  });\n\n  return (\n    <div>\n      {/* ... */}\n      <div ref={divRef}>Box</div>\n      <img ref={imgRef} src="url" alt="img" />\n    </div>\n  );\n};\n')),(0,o.kt)("h2",{id:"note"},"Note"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API"},"Intersection Observer API")))}d.isMDXComponent=!0}}]);