"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[775],{6164:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>b});var n=r(5721);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var s=n.createContext({}),i=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},l=function(e){var t=i(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,c=e.mdxType,a=e.originalType,s=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),p=i(r),f=c,b=p["".concat(s,".").concat(f)]||p[f]||g[f]||a;return r?n.createElement(b,u(u({ref:t},l),{},{components:r})):n.createElement(b,u({ref:t},l))}));function b(e,t){var r=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var a=r.length,u=new Array(a);u[0]=f;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:c,u[1]=o;for(var i=2;i<a;i++)u[i]=r[i];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},2514:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>u,default:()=>g,frontMatter:()=>a,metadata:()=>o,toc:()=>i});var n=r(6529),c=(r(5721),r(6164));const a={},u="countSubstringOccurrences",o={unversionedId:"utils/string/countSubstringOccurrences",id:"utils/string/countSubstringOccurrences",title:"countSubstringOccurrences",description:"a function that returns a count of how many times a particular substring has occurred in a string.",source:"@site/docs/utils/string/countSubstringOccurrences.md",sourceDirName:"utils/string",slug:"/utils/string/countSubstringOccurrences",permalink:"/devgrace/docs/utils/string/countSubstringOccurrences",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"isServer",permalink:"/devgrace/docs/utils/device/isSever"},next:{title:"extractNumber",permalink:"/devgrace/docs/utils/string/extractNumber"}},s={},i=[{value:"Interface",id:"interface",level:2},{value:"Usage",id:"usage",level:2}],l={toc:i},p="wrapper";function g(e){let{components:t,...r}=e;return(0,c.kt)(p,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"countsubstringoccurrences"},"countSubstringOccurrences"),(0,c.kt)("p",null,"a function that returns a count of how many times a particular substring has occurred in a string."),(0,c.kt)("br",null),(0,c.kt)("h2",{id:"interface"},"Interface"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-tsx"},"const countSubstringOccurrences: (source: string, target: string) => number\n")),(0,c.kt)("h2",{id:"usage"},"Usage"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-ts"},"import { countSubstringOccurrences } from '@devgrace/utils';\n\nconst str = 'apple banana apple grapes apple';\nconst count1 = countSubstringOccurrences(str, 'apple'); // 3\nconst count2 = countSubstringOccurrences(str, 'apple banana'); // 1\n")))}g.isMDXComponent=!0}}]);