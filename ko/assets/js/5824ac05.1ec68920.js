"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3527],{936:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>l,frontMatter:()=>s,metadata:()=>a,toc:()=>i});var n=r(5735),o=r(4474);const s={},c="useIsMounted",a={id:"react/hooks/useIsMounted",title:"useIsMounted",description:"\ucef4\ud3ec\ub10c\ud2b8\uac00 \ube0c\ub77c\uc6b0\uc800\uc5d0 mount \ub418\uc5c8\ub294\uc9c0 \uc5ec\ubd80\ub97c \ud655\uc778 \ud560 \uc218 \uc788\ub294 \ucee4\uc2a4\ud140 \ud6c5\uc785\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/react/hooks/useIsMounted.mdx",sourceDirName:"react/hooks",slug:"/react/hooks/useIsMounted",permalink:"/devgrace/ko/docs/react/hooks/useIsMounted",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"useInterval",permalink:"/devgrace/ko/docs/react/hooks/useInterval"},next:{title:"useIsomorphicLayoutEffect",permalink:"/devgrace/ko/docs/react/hooks/useIsomorphicLayoutEffect"}},u={},i=[{value:"Interface",id:"interface",level:2},{value:"Usage",id:"usage",level:2}];function d(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.ah)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"useismounted",children:"useIsMounted"}),"\n",(0,n.jsx)(t.p,{children:"\ucef4\ud3ec\ub10c\ud2b8\uac00 \ube0c\ub77c\uc6b0\uc800\uc5d0 mount \ub418\uc5c8\ub294\uc9c0 \uc5ec\ubd80\ub97c \ud655\uc778 \ud560 \uc218 \uc788\ub294 \ucee4\uc2a4\ud140 \ud6c5\uc785\ub2c8\ub2e4."}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"SSR"})," \ud658\uacbd\uc5d0\uc11c \uc2e4\uc81c \ucef4\ud3ec\ub10c\ud2b8\uac00 \ube0c\ub77c\uc6b0\uc800\uc5d0 mount \ub418\uc5c8\ub2e4\ub294 \uac83\uc744 \ubcf4\uc7a5\ud558\uae30 \uc704\ud574 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. ",(0,n.jsx)(t.code,{children:"(Feat. Hydration Error)"})]}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"const useIsMounted: () => boolean\n"})}),"\n",(0,n.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { useIsMounted } from '@devgrace/react';\n\nconst Example = () => {\n  const isMounted = useIsMounted();\n\n  return <div>{isMounted ? 'done' : 'in progress'}</div>;\n};\n"})})]})}function l(e={}){const{wrapper:t}={...(0,o.ah)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},4474:(e,t,r)=>{r.d(t,{ah:()=>i});var n=r(4614);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),i=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},l=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,u=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),p=i(r),f=o,h=p["".concat(u,".").concat(f)]||p[f]||d[f]||s;return r?n.createElement(h,c(c({ref:t},l),{},{components:r})):n.createElement(h,c({ref:t},l))}));l.displayName="MDXCreateElement"}}]);