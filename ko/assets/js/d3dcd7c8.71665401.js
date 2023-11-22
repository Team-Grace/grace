"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6816],{6853:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>c,metadata:()=>o,toc:()=>l});var n=t(5735),a=t(4474);const c={},s="repeatCharacters",o={id:"utils/string/repeatCharacters",title:"repeatCharacters",description:"\uc8fc\uc5b4\uc9c4 \ubb38\uc790\uc5f4\uc758 \uac01 \ubb38\uc790\ub97c \uc8fc\uc5b4\uc9c4 \ubc18\ubcf5 \ud69f\uc218\ub9cc\ud07c \ubc18\ubcf5\ud574\uc11c \uc0c8\ub85c\uc6b4 \ubb38\uc790\uc5f4\uc744 \ubc18\ud658\ud558\ub294 \ud568\uc218\uc785\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/utils/string/repeatCharacters.md",sourceDirName:"utils/string",slug:"/utils/string/repeatCharacters",permalink:"/devgrace/ko/docs/utils/string/repeatCharacters",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"removeSpecialCharacters",permalink:"/devgrace/ko/docs/utils/string/removeSpecialCharacters"},next:{title:"isValidEmail",permalink:"/devgrace/ko/docs/utils/validator/isValidEmail"}},i={},l=[{value:"Interface",id:"interface",level:2},{value:"Usage",id:"usage",level:2}];function p(e){const r={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.ah)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"repeatcharacters",children:"repeatCharacters"}),"\n",(0,n.jsx)(r.p,{children:"\uc8fc\uc5b4\uc9c4 \ubb38\uc790\uc5f4\uc758 \uac01 \ubb38\uc790\ub97c \uc8fc\uc5b4\uc9c4 \ubc18\ubcf5 \ud69f\uc218\ub9cc\ud07c \ubc18\ubcf5\ud574\uc11c \uc0c8\ub85c\uc6b4 \ubb38\uc790\uc5f4\uc744 \ubc18\ud658\ud558\ub294 \ud568\uc218\uc785\ub2c8\ub2e4."}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)(r.h2,{id:"interface",children:"Interface"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-tsx",children:"const repeatCharacters: (value: string, repeatCount: number) => string\n"})}),"\n",(0,n.jsx)(r.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-ts",children:"import { repeatCharacters } from '@devgrace/utils';\n\nconst str1 = 'A!B@C';\nconst repeatedStr1 = repeatCharacters(str1, 2); // 'AA!!BB@@CC'\n\nconst str2 = 'Hello';\nconst repeatedStr2 = repeatCharacters(str2, 3); // 'HHHeeelllooo'\n"})})]})}function u(e={}){const{wrapper:r}={...(0,a.ah)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},4474:(e,r,t)=>{t.d(r,{ah:()=>l});var n=t(4614);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=n.createContext({}),l=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=l(t),f=a,h=d["".concat(i,".").concat(f)]||d[f]||p[f]||c;return t?n.createElement(h,s(s({ref:r},u),{},{components:t})):n.createElement(h,s({ref:r},u))}));u.displayName="MDXCreateElement"}}]);