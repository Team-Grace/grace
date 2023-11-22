"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5666],{9391:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(5735),a=n(4474);const o={},c="deepEqual",s={id:"utils/common/deepEqual",title:"deepEqual",description:"A function that performs a deep comparison between two values given as arguments and returns whether they are the same or different.",source:"@site/docs/utils/common/deepEqual.md",sourceDirName:"utils/common",slug:"/utils/common/deepEqual",permalink:"/devgrace/docs/utils/common/deepEqual",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"deepCopy",permalink:"/devgrace/docs/utils/common/deepCopy"},next:{title:"getUniqId",permalink:"/devgrace/docs/utils/common/getUniqId"}},i={},l=[{value:"Interface",id:"interface",level:2},{value:"Usage",id:"usage",level:2}];function u(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.ah)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"deepequal",children:"deepEqual"}),"\n",(0,r.jsxs)(t.p,{children:["A function that performs a ",(0,r.jsx)(t.code,{children:"deep comparison"})," between two values given as arguments and returns whether they are the same or different."]}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"const deepEqual: (source: any, target: any) => boolean\n"})}),"\n",(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:'import { deepEqual } from \'@devgrace/utils\';\n\nconst isEqual1 = deepEqual(1, 1); // true\nconst isEqual2 = deepEqual({ a: 1}, { a: 1}); // true\nconst isEqual3 = deepEqual([1, 2, 3] [1, 2, 3]); // true\n\nconst isEqual4 = deepEqual("1", "2"); // false\nconst isEqual5 = deepEqual({ a: 1}, { a: 2}); // false\nconst isEqual6 = deepEqual([1, 2, 3], [1, "2", 3]); // false\n'})})]})}function p(e={}){const{wrapper:t}={...(0,a.ah)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},4474:(e,t,n)=>{n.d(t,{ah:()=>l});var r=n(4614);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),f=a,m=d["".concat(i,".").concat(f)]||d[f]||u[f]||o;return n?r.createElement(m,c(c({ref:t},p),{},{components:n})):r.createElement(m,c({ref:t},p))}));p.displayName="MDXCreateElement"}}]);