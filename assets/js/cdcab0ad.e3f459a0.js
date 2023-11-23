"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3470],{6910:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var r=t(5735),o=t(289);const a={},l="Portal",c={id:"react/components/Portal",title:"Portal",description:"The Portal Component uses React.createPortal to render the Child Component on a DOM Element outside of the Parent Component's DOM hierarchy.",source:"@site/docs/react/components/Portal.mdx",sourceDirName:"react/components",slug:"/react/components/Portal",permalink:"/devgrace/docs/react/components/Portal",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"LazyImage",permalink:"/devgrace/docs/react/components/LazyImage"},next:{title:"useAsyncPreservedCallback",permalink:"/devgrace/docs/react/hooks/useAsyncPreservedCallback"}},s={},d=[{value:"Interface",id:"interface",level:2},{value:"Usage",id:"usage",level:2},{value:"Default",id:"default",level:3},{value:"Container",id:"container",level:3},{value:"Nested",id:"nested",level:3}];function i(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"portal",children:"Portal"}),"\n",(0,r.jsxs)(n.p,{children:["The Portal Component uses ",(0,r.jsx)(n.code,{children:"React.createPortal"})," to render the Child Component on a DOM Element outside of the Parent Component's DOM hierarchy."]}),"\n",(0,r.jsxs)(n.p,{children:["The Portal Component renders a Child Component in ",(0,r.jsx)(n.code,{children:"document.body"})," by default. However, if you pass in the Portal Component's ",(0,r.jsx)(n.code,{children:"containerRef"})," prop, you can render the Child Component in a ",(0,r.jsx)(n.code,{children:"different DOM Element"})," than ",(0,r.jsx)(n.code,{children:"document.body"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Additionally, it supports ",(0,r.jsx)(n.code,{children:"nested portal functionality"}),". Nesting multiple Portal Components creates ",(0,r.jsx)(n.code,{children:"a nested portal DOM hierarchy"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["The Portal Component is ideal for use with features like ",(0,r.jsx)(n.code,{children:"Modal"}),", ",(0,r.jsx)(n.code,{children:"Dialog"}),", and ",(0,r.jsx)(n.code,{children:"Tooltip"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://react.dev/reference/react-dom/createPortal#rendering-a-modal-dialog-with-a-portal",children:"React CreatePortal"})," Please refer to the following articles"]}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.h2,{id:"interface",children:"Interface"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"const Portal: ({ children, className, containerRef }: {\n  children: React.ReactNode;\n  className?: string;\n  containerRef?: React.RefObject<HTMLElement>;\n}) => JSX.Element\n"})}),"\n",(0,r.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(n.h3,{id:"default",children:"Default"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { Portal } from '@devgrace/react'\n\nconst Example = () => {\n  return (\n    <Portal>\n      <p>Example Portal</p>\n    </Portal>\n  );\n};\n"})}),"\n",(0,r.jsx)(n.h3,{id:"container",children:"Container"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { Portal } from '@devgrace/react'\n\nconst Example = () => {\n  const ref = useRef<HTMLDivElement | null>(null);\n\n  return (\n    <div>\n      <Portal containerRef={ref}>\n        <p>Example Portal</p>\n      </Portal>\n\n      <div id=\"outer\" ref={ref} />\n    </div>\n  );\n};\n"})}),"\n",(0,r.jsx)(n.h3,{id:"nested",children:"Nested"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { Portal } from '@devgrace/react'\n\nconst Example = () => {\n  return (\n    <Portal>\n      <p>Default Portal</p>\n      <Portal>\n        <p>Nested Portal1</p>\n        <Portal>\n          <p>Nested Portal2</p>\n        </Portal>\n      </Portal>\n    </Portal>\n  );\n};\n"})})]})}function p(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}},289:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>l});var r=t(4614);const o={},a=r.createContext(o);function l(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);