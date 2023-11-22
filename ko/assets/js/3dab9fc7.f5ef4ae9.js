"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4277],{9261:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var n=r(5735),c=r(4474);const s={},a="extractNumber",o={id:"utils/string/extractNumber",title:"extractNumber",description:"\ubb38\uc790\uc5f4\uc744 \uc785\ub825\ud558\uba74 \uc22b\uc790\ub97c \uc81c\uc678\ud55c \ubaa8\ub4e0 \ubb38\uc790\ub97c \uc81c\uac70\ud55c \ubb38\uc790\uc5f4\uc744 \ubc18\ud658\ud558\ub294 \ud568\uc218\uc785\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/utils/string/extractNumber.md",sourceDirName:"utils/string",slug:"/utils/string/extractNumber",permalink:"/devgrace/ko/docs/utils/string/extractNumber",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"countSubstringOccurrences",permalink:"/devgrace/ko/docs/utils/string/countSubstringOccurrences"},next:{title:"formatNumberWithCommas",permalink:"/devgrace/ko/docs/utils/string/formatNumberWithCommas"}},i={},u=[{value:"Interface",id:"interface",level:2},{value:"Usage",id:"usage",level:2}];function l(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,c.ah)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"extractnumber",children:"extractNumber"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"\ubb38\uc790\uc5f4"}),"\uc744 \uc785\ub825\ud558\uba74 \uc22b\uc790\ub97c \uc81c\uc678\ud55c \ubaa8\ub4e0 \ubb38\uc790\ub97c \uc81c\uac70\ud55c \ubb38\uc790\uc5f4\uc744 \ubc18\ud658\ud558\ub294 \ud568\uc218\uc785\ub2c8\ub2e4."]}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"const extractNumber: (value: string) => string\n"})}),"\n",(0,n.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"import { extractNumber } from '@devgrace/utils';\n\nconst str1 = extractNumber('abc123sd45'); // '12345'\nconst str2 = extractNumber('1 23 sd 4 5'); // '12345'\nconst str3 = extractNumber('\ud83e\udd72'); // ''\nconst str4 = extractNumber('   '); // ''\n"})})]})}function d(e={}){const{wrapper:t}={...(0,c.ah)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},4474:(e,t,r)=>{r.d(t,{ah:()=>u});var n=r(4614);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,c=e.mdxType,s=e.originalType,i=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=u(r),m=c,b=p["".concat(i,".").concat(m)]||p[m]||l[m]||s;return r?n.createElement(b,a(a({ref:t},d),{},{components:r})):n.createElement(b,a({ref:t},d))}));d.displayName="MDXCreateElement"}}]);