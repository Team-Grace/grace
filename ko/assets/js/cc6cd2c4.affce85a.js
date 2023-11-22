"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6150],{8507:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>c,metadata:()=>s,toc:()=>a});var n=t(5735),i=t(4474);const c={},o="getOS",s={id:"utils/device/getOS",title:"getOS",description:"userAgent\ub97c \uae30\ubc18\uc73c\ub85c OS \uac12\uc744 \ubc18\ud658\ud558\ub294 \ud568\uc218\uc785\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/utils/device/getOS.md",sourceDirName:"utils/device",slug:"/utils/device/getOS",permalink:"/devgrace/ko/docs/utils/device/getOS",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"wrapInArray",permalink:"/devgrace/ko/docs/utils/common/wrapInArray"},next:{title:"isClient",permalink:"/devgrace/ko/docs/utils/device/isClient"}},l={},a=[{value:"Interface",id:"interface",level:2},{value:"Usage",id:"usage",level:2}];function d(e){const r={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.ah)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"getos",children:"getOS"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"userAgent"}),"\ub97c \uae30\ubc18\uc73c\ub85c OS \uac12\uc744 \ubc18\ud658\ud558\ub294 \ud568\uc218\uc785\ub2c8\ub2e4."]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"server: Server \ud658\uacbd"}),"\n",(0,n.jsx)(r.li,{children:"ios: iOS \ud658\uacbd"}),"\n",(0,n.jsx)(r.li,{children:"android: Android \ud658\uacbd"}),"\n",(0,n.jsx)(r.li,{children:"otherMobile: \uadf8 \uc678 \ubaa8\ubc14\uc77c(ex: BlackBerry)"}),"\n",(0,n.jsx)(r.li,{children:"web: Web \ud658\uacbd"}),"\n"]}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)(r.h2,{id:"interface",children:"Interface"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-tsx",children:'const getOS: () => "server" | "ios" | "android" | "otherMobile" | "web"\n'})}),"\n",(0,n.jsx)(r.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-ts",children:"import { getOS } from '@devgrace/utils';\n\nconst os = getOS();\n"})})]})}function u(e={}){const{wrapper:r}={...(0,i.ah)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},4474:(e,r,t)=>{t.d(r,{ah:()=>a});var n=t(4614);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=n.createContext({}),a=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,c=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=a(t),f=i,g=p["".concat(l,".").concat(f)]||p[f]||d[f]||c;return t?n.createElement(g,o(o({ref:r},u),{},{components:t})):n.createElement(g,o({ref:r},u))}));u.displayName="MDXCreateElement"}}]);