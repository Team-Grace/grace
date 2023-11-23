"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5181],{7331:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>i});var s=t(5735),r=t(289);const o={},c="useInterval",a={id:"react/hooks/useInterval",title:"useInterval",description:"window.setInterval\uc744 \ud3b8\ub9ac\ud558\uac8c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 \ucee4\uc2a4\ud140 \ud6c5\uc785\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/react/hooks/useInterval.mdx",sourceDirName:"react/hooks",slug:"/react/hooks/useInterval",permalink:"/devgrace/ko/docs/react/hooks/useInterval",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"useIntersectionObserver",permalink:"/devgrace/ko/docs/react/hooks/useIntersectionObserver"},next:{title:"useIsMounted",permalink:"/devgrace/ko/docs/react/hooks/useIsMounted"}},l={},i=[{value:"Interface",id:"interface",level:2},{value:"Usage",id:"usage",level:2}];function u(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"useinterval",children:"useInterval"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"window.setInterval"}),"\uc744 \ud3b8\ub9ac\ud558\uac8c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 \ucee4\uc2a4\ud140 \ud6c5\uc785\ub2c8\ub2e4."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"window.setInterva"}),"\uacfc ",(0,s.jsx)(n.code,{children:"useInterval"})," \ud6c5\uc758 \uc8fc\uc694 \ucc28\uc774\uc810\uc740 \uadf8 \uc778\uc218\uac00 ",(0,s.jsx)(n.code,{children:"\ub3d9\uc801"}),"\uc774\ub77c\ub294 \uac83\uc785\ub2c8\ub2e4."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"delay"}),"\uc758 \uac12\uc73c\ub85c ",(0,s.jsx)(n.code,{children:"null"}),"\uc744 \ub123\uc73c\uba74 \ud0c0\uc774\uba38\ub97c \uc911\uc9c0\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(n.h2,{id:"interface",children:"Interface"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"const useInterval: (callback: () => void, delay: number | null) => void\n"})}),"\n",(0,s.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"import { useInterval } from '@devgrace/react';\n\nconst Example = () => {\n  const [number, setNumber] = useState(0);\n  const [isPlaying, setIsPlaying] = useState(true);\n\n  useInterval(() => setNumber(number + 1), isPlaying ? 1000 : null);\n\n  return (\n    <div>\n      <div>{number}</div>\n      <button onClick={() => setIsPlaying(false)}>button</button>\n    </div>\n  );\n};\n"})})]})}function d(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},289:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>c});var s=t(4614);const r={},o=s.createContext(r);function c(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);