"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7647],{685:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>l,frontMatter:()=>r,metadata:()=>a,toc:()=>i});var o=n(2082),c=n(289);const r={},s="useForceUpdate",a={id:"react/hooks/useForceUpdate",title:"useForceUpdate",description:"A custom hook that forces the component to re-render when the returned function is executed.",source:"@site/docs/react/hooks/useForceUpdate.mdx",sourceDirName:"react/hooks",slug:"/react/hooks/useForceUpdate",permalink:"/devgrace/docs/react/hooks/useForceUpdate",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"useFileReader",permalink:"/devgrace/docs/react/hooks/useFileReader"},next:{title:"useImageStatus",permalink:"/devgrace/docs/react/hooks/useImageStatus"}},d={},i=[{value:"Interface",id:"interface",level:2},{value:"Usage",id:"usage",level:2},{value:"Note",id:"note",level:2}];function u(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,c.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"useforceupdate",children:"useForceUpdate"}),"\n",(0,o.jsxs)(t.p,{children:["A custom hook that forces the component to ",(0,o.jsx)(t.code,{children:"re-render"})," when the returned function is executed."]}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"// type DispatchWithoutAction = () => void;\nconst useForceUpdate: () => React.DispatchWithoutAction\n"})}),"\n",(0,o.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"import { useForceUpdate } from '@devgrace/react';\n\nconst Example = () => {\n  const forceUpdate = useForceUpdate();\n  \n  const handleForceUpdate = useCallback(() => {\n    forceUpdate();\n  }, [forceUpdate]);\n\n  return (\n    <div>\n      <button onClick={handleForceUpdate}>Button</button>;\n    </div>\n  );\n};\n"})}),"\n",(0,o.jsx)(t.h2,{id:"note",children:"Note"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"https://github.com/streamich/react-use/pull/837",children:"https://github.com/streamich/react-use/pull/837"})})]})}function l(e={}){const{wrapper:t}={...(0,c.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},289:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>s});var o=n(8290);const c={},r=o.createContext(c);function s(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:s(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);