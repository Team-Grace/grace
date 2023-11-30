"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2685],{7823:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>l,frontMatter:()=>c,metadata:()=>i,toc:()=>d});var r=t(5735),s=t(289);const c={},o="mergeProperties",i={id:"utils/object/mergeProperties",title:"mergeProperties",description:"\uae30\uc900\uc774 \ub418\ub294 target \uac1d\uccb4\uc640 source \uac1d\uccb4\uc758 \ud504\ub85c\ud37c\ud2f0\ub97c \ubcd1\ud569\ud558\ub294 \uc720\ud2f8 \ud568\uc218\uc785\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/utils/object/mergeProperties.md",sourceDirName:"utils/object",slug:"/utils/object/mergeProperties",permalink:"/devgrace/ko/docs/utils/object/mergeProperties",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"deleteEmptyProperties",permalink:"/devgrace/ko/docs/utils/object/deleteEmptyProperties"},next:{title:"objectEntries",permalink:"/devgrace/ko/docs/utils/object/objectEntries"}},a={},d=[{value:"Interface",id:"interface",level:2},{value:"Usage",id:"usage",level:2}];function u(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"mergeproperties",children:"mergeProperties"}),"\n",(0,r.jsx)(n.p,{children:"\uae30\uc900\uc774 \ub418\ub294 target \uac1d\uccb4\uc640 source \uac1d\uccb4\uc758 \ud504\ub85c\ud37c\ud2f0\ub97c \ubcd1\ud569\ud558\ub294 \uc720\ud2f8 \ud568\uc218\uc785\ub2c8\ub2e4."}),"\n",(0,r.jsx)(n.p,{children:"Key\uac00 \ub3d9\uc77c\ud560 \ub54c \uac12\uc774 \uc6d0\uc2dc \ud0c0\uc785\uc758 \uacbd\uc6b0 source\uc758 \uac12\uc73c\ub85c \ub36e\uc5b4\uc50c\uc6cc\uc9c0\uba70, \ubc30\uc5f4\uc778 \uacbd\uc6b0 target\uacfc source \uc694\uc18c\ub97c \ubaa8\ub450 \uac16\ub294 \ubc30\uc5f4\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4."}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.h2,{id:"interface",children:"Interface"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"const mergeProperties: <\n  T extends Record<PropertyKey, any>,\n  K extends Record<PropertyKey, any>\n>(\n  target: T,\n  source: K\n) => T & K;\n"})}),"\n",(0,r.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import { mergeProperties } from '@devgrace/utils';\n\n  const target = {\n    a: 1,\n    b: 2,\n    c: {\n      c_a: 1,\n      c_b: 2,\n    },\n    d: 4,\n    e: [1, 2],\n  };\n  const source = {\n    c: {\n      c_c: 3,\n      c_d: 4,\n    },\n    d: 5,\n    e: [3, 4],\n  };\n\n  const obj = mergeProperties(target, source);\n\n  /**\n   *  obj = {\n      a: 1,\n      b: 2,\n      c: {\n        c_a: 1,\n        c_b: 2,\n        c_c: 3,\n        c_d: 4,\n      },\n      d: 5,\n      e: [1, 2, 3, 4],\n    };\n   */\n"})})]})}function l(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},289:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>o});var r=t(4614);const s={},c=r.createContext(s);function o(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);