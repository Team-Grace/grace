"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[542],{6164:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(5721);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(r),f=a,d=p["".concat(l,".").concat(f)]||p[f]||m[f]||o;return r?n.createElement(d,c(c({ref:t},s),{},{components:r})):n.createElement(d,c({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:a,c[1]=i;for(var u=2;u<o;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},2042:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=r(6529),a=(r(5721),r(6164));const o={},c="extractNumber",i={unversionedId:"utils/format/extractNumber",id:"utils/format/extractNumber",title:"extractNumber",description:"Function that returns a string stripped of all characters except numbers when string is entered.",source:"@site/docs/utils/format/extractNumber.md",sourceDirName:"utils/format",slug:"/utils/format/extractNumber",permalink:"/devgrace/docs/utils/format/extractNumber",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"isServer",permalink:"/devgrace/docs/utils/device/isSever"},next:{title:"formatPhoneNumber",permalink:"/devgrace/docs/utils/format/formatPhoneNumber"}},l={},u=[{value:"Interface",id:"interface",level:2},{value:"Example",id:"example",level:2}],s={toc:u},p="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"extractnumber"},"extractNumber"),(0,a.kt)("p",null,"Function that returns a string stripped of all characters except numbers when ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," is entered."),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"interface"},"Interface"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const extractNumber: (value: string) => string\n")),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { extractNumber } from '@devgrace/utils';\n\nconst str1 = extractNumber('abc123sd45'); // '12345'\nconst str2 = extractNumber('1 23 sd 4 5'); // '12345'\nconst str3 = extractNumber('\ud83e\udd72'); // ''\nconst str4 = extractNumber('   '); // ''\n")))}m.isMDXComponent=!0}}]);