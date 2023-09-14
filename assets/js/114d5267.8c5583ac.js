"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8828],{6164:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(5721);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(r),d=o,f=p["".concat(l,".").concat(d)]||p[d]||m[d]||a;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3938:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var n=r(6529),o=(r(5721),r(6164));const a={},i="omit",c={unversionedId:"utils/object/omit",id:"utils/object/omit",title:"omit",description:"a function that returns an object omitting the keys given as arguments.",source:"@site/docs/utils/object/omit.md",sourceDirName:"utils/object",slug:"/utils/object/omit",permalink:"/devgrace/docs/utils/object/omit",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"isServer",permalink:"/devgrace/docs/utils/device/isSever"},next:{title:"pick",permalink:"/devgrace/docs/utils/object/pick"}},l={},s=[{value:"Interface",id:"interface",level:2},{value:"Usage",id:"usage",level:2}],u={toc:s},p="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"omit"},"omit"),(0,o.kt)("p",null,"a function that returns an object omitting the ",(0,o.kt)("inlineCode",{parentName:"p"},"keys")," given as arguments."),(0,o.kt)("p",null,"The returned object is ",(0,o.kt)("inlineCode",{parentName:"p"},"a new deeply copied object"),"."),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"interface"},"Interface"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"const omit: <T extends Record<string, any>, K extends keyof T>(\n  obj: T,\n  keys: K | K[]\n) => Omit<T, K>;\n")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { omit } from '@devgrace/utils';\n\nconst omittedObj1 = omit({ a: 1, b: 2, c: 3 }, 'b'); // { a: 1, c: 3 }\nconst omittedObj1 = omit({ a: 1, b: 2, c: 3, d: 4 }, ['b', 'd']); // { a: 1, c: 3 }\n")))}m.isMDXComponent=!0}}]);