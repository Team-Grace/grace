"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6923],{4635:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>o});var n=t(5735),i=t(4474);const a={},l="isValidEmail",c={id:"utils/validator/isValidEmail",title:"isValidEmail",description:"\uc8fc\uc5b4\uc9c4 \ubb38\uc790\uc5f4\uc774 \uc774\uba54\uc77c \ud615\uc2dd\uc744 \uc900\uc218\ud558\ub294\uc9c0 \ud655\uc778\ud558\ub294 \ud568\uc218\uc785\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/utils/validator/isValidEmail.md",sourceDirName:"utils/validator",slug:"/utils/validator/isValidEmail",permalink:"/devgrace/ko/docs/utils/validator/isValidEmail",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"repeatCharacters",permalink:"/devgrace/ko/docs/utils/string/repeatCharacters"},next:{title:"isValidPhoneNumberFormat",permalink:"/devgrace/ko/docs/utils/validator/isValidPhoneNumberFormat"}},s={},o=[{value:"Interface",id:"interface",level:2},{value:"Usage",id:"usage",level:2},{value:"Note",id:"note",level:2}];function d(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.ah)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"isvalidemail",children:"isValidEmail"}),"\n",(0,n.jsxs)(r.p,{children:["\uc8fc\uc5b4\uc9c4 \ubb38\uc790\uc5f4\uc774 ",(0,n.jsx)(r.code,{children:"\uc774\uba54\uc77c \ud615\uc2dd"}),"\uc744 \uc900\uc218\ud558\ub294\uc9c0 \ud655\uc778\ud558\ub294 \ud568\uc218\uc785\ub2c8\ub2e4."]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"https://www.ietf.org/rfc/rfc5322.txt",children:"RFC 5322"})," \uae30\uc900\uc758 \uc815\uaddc\ud45c\ud604\uc2dd\uc744 \uc0ac\uc6a9\ud558\uc600\uc73c\uba70, \ud574\ub2f9 \ud568\uc218\uc5d0\uc11c \uc0ac\uc6a9\ud558\ub294 \uc815\uaddc\uc2dd\uc740 \uc774\uba54\uc77c \ud615\ud0dc\uc758 ",(0,n.jsx)(r.code,{children:"99.99%"}),"\ub97c \uac80\uc0ac\ub97c \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,n.jsxs)(r.p,{children:["\ucc38\uace0\ub85c, \uc644\ubcbd\ud55c \uc774\uba54\uc77c \uc815\uaddc\uc2dd\uc740 \uc874\uc7ac\ud558\uc9c0 \uc54a\uae30 \ub54c\ubb38\uc5d0 ",(0,n.jsx)(r.code,{children:"99.99%"})," \uc785\ub2c8\ub2e4."]}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)(r.h2,{id:"interface",children:"Interface"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-tsx",children:"const isValidEmail: (email: string) => boolean\n"})}),"\n",(0,n.jsx)(r.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-ts",children:"import { isValidEmail } from '@devgrace/utils';\n\nconst isEmail1 = isValidEmail('example@email.com'); // true\nconst isEmail2 = isValidEmail('invalid-email'); // false\n"})}),"\n",(0,n.jsx)(r.h2,{id:"note",children:"Note"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"https://www.ietf.org/rfc/rfc5322.txt",children:"RFC 5322"})}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"https://emailregex.com/",children:"emailregex"})})]})}function u(e={}){const{wrapper:r}={...(0,i.ah)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},4474:(e,r,t)=>{t.d(r,{ah:()=>o});var n=t(4614);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=n.createContext({}),o=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=o(t),m=i,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return t?n.createElement(f,l(l({ref:r},u),{},{components:t})):n.createElement(f,l({ref:r},u))}));u.displayName="MDXCreateElement"}}]);