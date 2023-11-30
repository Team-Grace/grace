"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2386],{2411:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>a,frontMatter:()=>s,metadata:()=>p,toc:()=>l});var n=r(5735),o=r(289);const s={},i="deleteEmptyProperties",p={id:"utils/object/deleteEmptyProperties",title:"deleteEmptyProperties",description:"A utility function that traverses all properties of an object, including nested objects/arrays, and if the value is one of the empty values listed below, returns a new object with those properties removed.",source:"@site/docs/utils/object/deleteEmptyProperties.md",sourceDirName:"utils/object",slug:"/utils/object/deleteEmptyProperties",permalink:"/devgrace/docs/utils/object/deleteEmptyProperties",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"isServer",permalink:"/devgrace/docs/utils/device/isSever"},next:{title:"mergeProperties",permalink:"/devgrace/docs/utils/object/mergeProperties"}},c={},l=[{value:"Interface",id:"interface",level:2},{value:"Usage",id:"usage",level:2}];function d(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"deleteemptyproperties",children:"deleteEmptyProperties"}),"\n",(0,n.jsx)(t.p,{children:"A utility function that traverses all properties of an object, including nested objects/arrays, and if the value is one of the empty values listed below, returns a new object with those properties removed."}),"\n",(0,n.jsxs)(t.p,{children:["What to remove: ",(0,n.jsx)(t.code,{children:'Empty String("")'}),", ",(0,n.jsx)(t.code,{children:"Empty Array([])"}),", ",(0,n.jsx)(t.code,{children:"Empty Object({})"}),", ",(0,n.jsx)(t.code,{children:"null"}),", ",(0,n.jsx)(t.code,{children:"undefined"})]}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"const deleteEmptyProperties: <T extends Record<PropertyKey, any>>(obj: T) => T\n"})}),"\n",(0,n.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"import { deleteEmptyProperties } from '@devgrace/utils';\n\nconst obj = deleteEmptyProperties({\n  prop1: 1,\n  prop2: 0,\n  prop3: '',\n  prop4: '1',\n  prop5: true,\n  prop6: false,\n  prop7: null,\n  prop8: undefined,\n  prop9: [],\n  prop10: {},\n});\n\n/**\n * obj = {\n    prop1: 1,\n    prop2: 0,\n    prop4: '1',\n    prop5: true,\n    prop6: false,\n  };\n */\n"})})]})}function a(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},289:(e,t,r)=>{r.d(t,{Z:()=>p,a:()=>i});var n=r(4614);const o={},s=n.createContext(o);function i(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function p(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);