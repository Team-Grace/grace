"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[559],{6164:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(5721);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=s(r),f=i,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||o;return r?n.createElement(m,l(l({ref:t},u),{},{components:r})):n.createElement(m,l({ref:t},u))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,l=new Array(o);l[0]=f;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[p]="string"==typeof e?e:i,l[1]=a;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},6718:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>s});var n=r(6529),i=(r(5721),r(6164));const o={},l="isMobile",a={unversionedId:"utils/device/isMobile",id:"utils/device/isMobile",title:"isMobile",description:"\ubaa8\ubc14\uc77c \ud658\uacbd\uc778\uc9c0 \ud655\uc778\ud558\ub294 \ud568\uc218\uc785\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/utils/device/isMobile.md",sourceDirName:"utils/device",slug:"/utils/device/isMobile",permalink:"/devgrace/ko/docs/utils/device/isMobile",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"isClient",permalink:"/devgrace/ko/docs/utils/device/isClient"},next:{title:"isServer",permalink:"/devgrace/ko/docs/utils/device/isSever"}},c={},s=[{value:"Interface",id:"interface",level:2},{value:"Example",id:"example",level:2}],u={toc:s},p="wrapper";function d(e){let{components:t,...r}=e;return(0,i.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"ismobile"},"isMobile"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"\ubaa8\ubc14\uc77c \ud658\uacbd"),"\uc778\uc9c0 \ud655\uc778\ud558\ub294 \ud568\uc218\uc785\ub2c8\ub2e4."),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"interface"},"Interface"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"const isMobile: () => boolean\n")),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { isMobile } from '@devgrace/utils';\n\nif (isMobile()) {\n  /* \ubaa8\ubc14\uc77c \ud658\uacbd \ubcf4\uc7a5 */\n}\n")))}d.isMDXComponent=!0}}]);