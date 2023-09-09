"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[297],{6164:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>y});var r=t(5721);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),l=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=l(e.components);return r.createElement(i.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,c=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(t),m=o,y=u["".concat(i,".").concat(m)]||u[m]||d[m]||c;return t?r.createElement(y,a(a({ref:n},s),{},{components:t})):r.createElement(y,a({ref:n},s))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var c=t.length,a=new Array(c);a[0]=m;var p={};for(var i in n)hasOwnProperty.call(n,i)&&(p[i]=n[i]);p.originalType=e,p[u]="string"==typeof e?e:o,a[1]=p;for(var l=2;l<c;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7247:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>d,frontMatter:()=>c,metadata:()=>p,toc:()=>l});var r=t(6529),o=(t(5721),t(6164));const c={},a="deepCopy",p={unversionedId:"utils/common/deepCopy",id:"utils/common/deepCopy",title:"deepCopy",description:"\uc778\uc790\ub85c \uc8fc\uc5b4\uc9c4 \uac12\uc744 \uae4a\uc740 \ubcf5\uc0ac\ub97c \uc218\ud589\ud558\ub294 \ud568\uc218\uc785\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/utils/common/deepCopy.md",sourceDirName:"utils/common",slug:"/utils/common/deepCopy",permalink:"/devgrace/ko/docs/utils/common/deepCopy",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"asyncNoop",permalink:"/devgrace/ko/docs/utils/common/asyncNoop"},next:{title:"deepEqual",permalink:"/devgrace/ko/docs/utils/common/deepEqual"}},i={},l=[{value:"Interface",id:"interface",level:2},{value:"Usage",id:"usage",level:2}],s={toc:l},u="wrapper";function d(e){let{components:n,...t}=e;return(0,o.kt)(u,(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"deepcopy"},"deepCopy"),(0,o.kt)("p",null,"\uc778\uc790\ub85c \uc8fc\uc5b4\uc9c4 \uac12\uc744 ",(0,o.kt)("inlineCode",{parentName:"p"},"\uae4a\uc740 \ubcf5\uc0ac"),"\ub97c \uc218\ud589\ud558\ub294 \ud568\uc218\uc785\ub2c8\ub2e4."),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"interface"},"Interface"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"const deepCopy: <T>(source: T) => T\n")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { deepCopy } from '@devgrace/utils';\n\nconst originNum = 42;\nconst copyNum = deepCopy(originNum);\n\nconst originObj = { a: 1, b: { c: 2 } };\nconst copyObj = deepCopy(originObj);\n\nconst originArray = [1, 2, [3, 4]];\nconst copyArray = deepCopy(originArray);\n\nconst originSet = new Set([1, 2, 3]);\nconst copySet = deepCopy(originSet);\n\nconst originMap = new Map([\n  ['a', 1],\n  ['b', 2],\n]);\nconst copyMap = deepCopy(originMap);\n")))}d.isMDXComponent=!0}}]);