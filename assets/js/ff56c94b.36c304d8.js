"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[666],{6164:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(5721);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),i=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=i(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=i(r),m=a,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return r?n.createElement(f,l(l({ref:t},s),{},{components:r})):n.createElement(f,l({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u[p]="string"==typeof e?e:a,l[1]=u;for(var i=2;i<o;i++)l[i]=r[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9928:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>u,toc:()=>i});var n=r(6529),a=(r(5721),r(6164));const o={},l="deepEqual",u={unversionedId:"utils/common/deepEqual",id:"utils/common/deepEqual",title:"deepEqual",description:"A function that performs a deep comparison between two values given as arguments and returns whether they are the same or different.",source:"@site/docs/utils/common/deepEqual.md",sourceDirName:"utils/common",slug:"/utils/common/deepEqual",permalink:"/devgrace/docs/utils/common/deepEqual",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"deepCopy",permalink:"/devgrace/docs/utils/common/deepCopy"},next:{title:"getUniqId",permalink:"/devgrace/docs/utils/common/getUniqId"}},c={},i=[{value:"Interface",id:"interface",level:2},{value:"Usage",id:"usage",level:2}],s={toc:i},p="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"deepequal"},"deepEqual"),(0,a.kt)("p",null,"A function that performs a ",(0,a.kt)("inlineCode",{parentName:"p"},"deep comparison")," between two values given as arguments and returns whether they are the same or different."),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"interface"},"Interface"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const deepEqual: (source: any, target: any) => boolean\n")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { deepEqual } from \'@devgrace/utils\';\n\nconst isEqual1 = deepEqual(1, 1); // true\nconst isEqual2 = deepEqual({ a: 1}, { a: 1}); // true\nconst isEqual3 = deepEqual([1, 2, 3] [1, 2, 3]); // true\n\nconst isEqual4 = deepEqual("1", "2"); // false\nconst isEqual5 = deepEqual({ a: 1}, { a: 2}); // false\nconst isEqual6 = deepEqual([1, 2, 3], [1, "2", 3]); // false\n')))}d.isMDXComponent=!0}}]);