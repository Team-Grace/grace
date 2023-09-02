"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[257],{6164:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>b});var n=r(5721);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),m=l(r),f=o,b=m["".concat(c,".").concat(f)]||m[f]||p[f]||a;return r?n.createElement(b,i(i({ref:t},s),{},{components:r})):n.createElement(b,i({ref:t},s))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u[m]="string"==typeof e?e:o,i[1]=u;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},3260:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>u,toc:()=>l});var n=r(6529),o=(r(5721),r(6164));const a={},i="formatPhoneNumber",u={unversionedId:"utils/string/formatPhoneNumber",id:"utils/string/formatPhoneNumber",title:"formatPhoneNumber",description:"\ubb38\uc790\uc5f4\uc744 \uc785\ub825\ud558\uba74 \uc804\ud654 \ubc88\ud638 \ud3ec\ub9f7\uc73c\ub85c -(hyphen)\uc744 \ub123\uc5b4\uc11c \ubc18\ud658\ud574\uc8fc\ub294 \ud568\uc218\uc785\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/utils/string/formatPhoneNumber.md",sourceDirName:"utils/string",slug:"/utils/string/formatPhoneNumber",permalink:"/devgrace/ko/docs/utils/string/formatPhoneNumber",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"formatNumberWithCommas",permalink:"/devgrace/ko/docs/utils/string/formatNumberWithCommas"},next:{title:"removeSpecialCharacters",permalink:"/devgrace/ko/docs/utils/string/removeSpecialCharacters"}},c={},l=[{value:"Interface",id:"interface",level:2},{value:"Usage",id:"usage",level:2},{value:"Note",id:"note",level:2}],s={toc:l},m="wrapper";function p(e){let{components:t,...r}=e;return(0,o.kt)(m,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"formatphonenumber"},"formatPhoneNumber"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"\ubb38\uc790\uc5f4"),"\uc744 \uc785\ub825\ud558\uba74 ",(0,o.kt)("inlineCode",{parentName:"p"},"\uc804\ud654 \ubc88\ud638 \ud3ec\ub9f7"),"\uc73c\ub85c ",(0,o.kt)("inlineCode",{parentName:"p"},"-(hyphen)"),"\uc744 \ub123\uc5b4\uc11c \ubc18\ud658\ud574\uc8fc\ub294 \ud568\uc218\uc785\ub2c8\ub2e4."),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"interface"},"Interface"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"const formatPhoneNumber: (value: string) => string\n")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { formatPhoneNumber } from '@devgrace/utils';\n\nconst phoneNumber0 = formatPhoneNumber('03112345678'); // '031-1234-5678'\nconst phoneNumber1 = formatPhoneNumber('01012345678'); // '010-1234-5678'\nconst phoneNumber2 = formatPhoneNumber('021231234'); // '02-123-1234'\nconst phoneNumber2 = formatPhoneNumber('(02)12351234'); // '02-1235-1234'\nconst phoneNumber3 = formatPhoneNumber('12334788'); // '1233-4788'\n")),(0,o.kt)("h2",{id:"note"},"Note"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://ko.wikipedia.org/wiki/%EB%8C%80%ED%95%9C%EB%AF%BC%EA%B5%AD%EC%9D%98_%EC%A0%84%ED%99%94%EB%B2%88%ED%98%B8_%EC%B2%B4%EA%B3%84"},"\ub300\ud55c\ubbfc\uad6d\uc758 \uc804\ud654\ubc88\ud638 \uccb4\uacc4")))}p.isMDXComponent=!0}}]);