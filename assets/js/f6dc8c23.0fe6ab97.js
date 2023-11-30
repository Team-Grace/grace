"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[324],{1447:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>l,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var r=n(5735),s=n(289);const o={},c="mergeProperties",i={id:"utils/object/mergeProperties",title:"mergeProperties",description:"a utility function that merges the properties of the target and source objects.",source:"@site/docs/utils/object/mergeProperties.md",sourceDirName:"utils/object",slug:"/utils/object/mergeProperties",permalink:"/devgrace/docs/utils/object/mergeProperties",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"deleteEmptyProperties",permalink:"/devgrace/docs/utils/object/deleteEmptyProperties"},next:{title:"objectEntries",permalink:"/devgrace/docs/utils/object/objectEntries"}},a={},d=[{value:"Interface",id:"interface",level:2},{value:"Usage",id:"usage",level:2}];function u(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"mergeproperties",children:"mergeProperties"}),"\n",(0,r.jsx)(t.p,{children:"a utility function that merges the properties of the target and source objects."}),"\n",(0,r.jsx)(t.p,{children:"When the keys are the same, the value is overwritten with the value from source if it is a primitive type, or returns an array with both target and source elements if it is an array."}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"const mergeProperties: <\n  T extends Record<PropertyKey, any>,\n  K extends Record<PropertyKey, any>\n>(\n  target: T,\n  source: K\n) => T & K;\n"})}),"\n",(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"import { mergeProperties } from '@devgrace/utils';\n\n  const target = {\n    a: 1,\n    b: 2,\n    c: {\n      c_a: 1,\n      c_b: 2,\n    },\n    d: 4,\n    e: [1, 2],\n  };\n  const source = {\n    c: {\n      c_c: 3,\n      c_d: 4,\n    },\n    d: 5,\n    e: [3, 4],\n  };\n\n  const obj = mergeProperties(target, source);\n\n/**\n *  obj = {\n    a: 1,\n    b: 2,\n    c: {\n      c_a: 1,\n      c_b: 2,\n      c_c: 3,\n      c_d: 4,\n    },\n    d: 5,\n    e: [1, 2, 3, 4],\n  };\n  */\n"})})]})}function l(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},289:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>c});var r=n(4614);const s={},o=r.createContext(s);function c(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);