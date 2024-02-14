"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3442],{1623:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>a,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var i=t(5735),s=t(289);const o={},r="isFunction",c={id:"utils/validator/isFuntion",title:"isFunction",description:"\uc8fc\uc5b4\uc9c4 \uc778\uc790\uac00 \ud568\uc218\uc778\uc9c0 \uac80\uc0ac\ud558\uace0, \ub9de\ub2e4\uba74 \uc778\uc790\uc758 \ud0c0\uc785\uc744 Function\ub85c \uc881\ud600\uc8fc\ub294 \ud568\uc218\uc785\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/utils/validator/isFuntion.md",sourceDirName:"utils/validator",slug:"/utils/validator/isFuntion",permalink:"/devgrace/ko/docs/utils/validator/isFuntion",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"repeatCharacters",permalink:"/devgrace/ko/docs/utils/string/repeatCharacters"},next:{title:"isNotNullish",permalink:"/devgrace/ko/docs/utils/validator/isNotNullish"}},a={},u=[{value:"Interface",id:"interface",level:2},{value:"Usage",id:"usage",level:2}];function l(n){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"isfunction",children:"isFunction"}),"\n",(0,i.jsxs)(e.p,{children:["\uc8fc\uc5b4\uc9c4 \uc778\uc790\uac00 ",(0,i.jsx)(e.code,{children:"\ud568\uc218"}),"\uc778\uc9c0 \uac80\uc0ac\ud558\uace0, \ub9de\ub2e4\uba74 \uc778\uc790\uc758 \ud0c0\uc785\uc744 ",(0,i.jsx)(e.code,{children:"Function"}),"\ub85c \uc881\ud600\uc8fc\ub294 \ud568\uc218\uc785\ub2c8\ub2e4."]}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(e.h2,{id:"interface",children:"Interface"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-tsx",metastring:'title="typescript"',children:"const isFunction: (arg: unknown) => arg is Function\n"})}),"\n",(0,i.jsx)(e.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-ts",children:"import { isFunction } from '@devgrace/utils';\n\nfunction example() {}\n\nisFunction(() => {}); // true\nisFunction(example); // true\n\nisFunction('123'); // false\nisFunction(123); // false\nisFunction({}); // false\nisFunction([]); // false\n"})})]})}function d(n={}){const{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(l,{...n})}):l(n)}},289:(n,e,t)=>{t.d(e,{Z:()=>c,a:()=>r});var i=t(4614);const s={},o=i.createContext(s);function r(n){const e=i.useContext(o);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:r(n.components),i.createElement(o.Provider,{value:e},n.children)}}}]);