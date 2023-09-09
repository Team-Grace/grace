"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[863],{6164:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>b});var n=r(5721);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):m(m({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},l="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),l=u(r),f=a,b=l["".concat(s,".").concat(f)]||l[f]||p[f]||o;return r?n.createElement(b,m(m({ref:t},c),{},{components:r})):n.createElement(b,m({ref:t},c))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,m=new Array(o);m[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[l]="string"==typeof e?e:a,m[1]=i;for(var u=2;u<o;u++)m[u]=r[u];return n.createElement.apply(null,m)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},1861:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>m,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=r(6529),a=(r(5721),r(6164));const o={},m="formatNumberWithCommas",i={unversionedId:"utils/string/formatNumberWithCommas",id:"utils/string/formatNumberWithCommas",title:"formatNumberWithCommas",description:"A function that takes a string or number and returns a string with a (,)comma appended to the number in thousands.",source:"@site/docs/utils/string/formatNumberWithCommas.md",sourceDirName:"utils/string",slug:"/utils/string/formatNumberWithCommas",permalink:"/devgrace/docs/utils/string/formatNumberWithCommas",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"extractNumber",permalink:"/devgrace/docs/utils/string/extractNumber"},next:{title:"formatPhoneNumber",permalink:"/devgrace/docs/utils/string/formatPhoneNumber"}},s={},u=[{value:"Interface",id:"interface",level:2},{value:"Usage",id:"usage",level:2}],c={toc:u},l="wrapper";function p(e){let{components:t,...r}=e;return(0,a.kt)(l,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"formatnumberwithcommas"},"formatNumberWithCommas"),(0,a.kt)("p",null,"A function that takes a ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"number")," and returns a string with a ",(0,a.kt)("inlineCode",{parentName:"p"},"(,)comma")," appended to the number in thousands."),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"interface"},"Interface"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const formatNumberWithCommas: (value: string | number) => string\n")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { formatNumberWithCommas } from '@devgrace/utils';\n\nconst numberWithComma1 = formatNumberWithCommas(200); // '200'\nconst numberWithComma2 = formatNumberWithCommas(3000); // '3,000'\nconst numberWithComma3 = formatNumberWithCommas('50000'); // '50,000'\nconst numberWithComma4 = formatNumberWithCommas('123123123'); // '123,123,123'\nconst numberWithComma5 = formatNumberWithCommas('price: 500000'); // 'price: 500,000'\n")))}p.isMDXComponent=!0}}]);