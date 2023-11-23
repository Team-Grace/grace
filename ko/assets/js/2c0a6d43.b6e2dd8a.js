"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[613],{152:(e,t,n)=>{n.r(t),n.d(t,{Example:()=>f,assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>u,metadata:()=>a,toc:()=>d});var r=n(5735),o=n(289),s=n(2590),i=n(4614);const u={},c="usePrevious",a={id:"react/hooks/usePrevious",title:"usePrevious",description:"\uc774\uc804 \ub80c\ub354\ub9c1\uc5d0\uc11c \uc778\uc218\uc758 \uac12\uc744 \ubc18\ud658\ud558\ub294 \ucee4\uc2a4\ud140 \ud6c5\uc785\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/react/hooks/usePrevious.mdx",sourceDirName:"react/hooks",slug:"/react/hooks/usePrevious",permalink:"/devgrace/ko/docs/react/hooks/usePrevious",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"usePreservedCallback",permalink:"/devgrace/ko/docs/react/hooks/usePreservedCallback"},next:{title:"useResizeObserver",permalink:"/devgrace/ko/docs/react/hooks/useResizeObserver"}},l={},d=[{value:"Interface",id:"interface",level:2},{value:"Usage",id:"usage",level:2}],f=()=>{const e={button:"button",div:"div",...(0,o.a)()},[t,n]=(0,i.useState)(0),u=(0,s.D9)(t);return(0,r.jsxs)(e.div,{children:[(0,r.jsxs)(e.div,{children:["Current Count is - ",t]}),(0,r.jsxs)(e.div,{children:["Previous Count is - ",u]}),(0,r.jsx)(e.button,{onClick:()=>{n(t+1)},children:"Increment"})]})};function v(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"useprevious",children:"usePrevious"}),"\n",(0,r.jsx)(t.p,{children:"\uc774\uc804 \ub80c\ub354\ub9c1\uc5d0\uc11c \uc778\uc218\uc758 \uac12\uc744 \ubc18\ud658\ud558\ub294 \ucee4\uc2a4\ud140 \ud6c5\uc785\ub2c8\ub2e4."}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"const usePrevious: <T>(value: T) => T;\n"})}),"\n",(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { usePrevious } from '@devgrace/react';\n\nconst Example = () => {\n  const [count, setCount] = useState(0);\n  const previousCount = usePrevious(count);\n\n  const onIncrementCount = () => {\n    setCount(count + 1);\n  };\n\n  return (\n    <div>\n      <div>Current Count is - {count}</div>\n      <div>Previous Count is - {previousCount}</div>\n      <button onClick={onIncrementCount}>Increment</button>\n    </div>\n  );\n};\n"})}),"\n","\n",(0,r.jsx)(f,{})]})}function p(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(v,{...e})}):v(e)}},2590:(e,t,n)=>{n.d(t,{AB:()=>s,D9:()=>W,df:()=>D,iP:()=>H,t$:()=>U,uM:()=>I,wY:()=>L,yU:()=>$});var r=n(5735),o=n(4614);n(3133);"function"==typeof SuppressedError&&SuppressedError;const s=({children:e})=>{const t=Math.random()<.5?0:1,n=o.Children.toArray(e);let r=0,i=0;if(2!==n.length)return null;for(const o of n){if(![s.CaseA,s.CaseB].includes(o.type))return null;o.type===s.CaseA?r+=1:i+=1}return r>=2||i>=2?null:t?n[0]:n[1]};s.CaseA=({children:e})=>(0,r.jsx)(o.Fragment,{children:e}),s.CaseB=({children:e})=>(0,r.jsx)(o.Fragment,{children:e});var i="object"==typeof global&&global&&global.Object===Object&&global,u="object"==typeof self&&self&&self.Object===Object&&self,c=i||u||Function("return this")(),a=c.Symbol,l=Object.prototype,d=l.hasOwnProperty,f=l.toString,v=a?a.toStringTag:void 0,p=Object.prototype.toString,h="[object Null]",b="[object Undefined]",g=a?a.toStringTag:void 0;var m="[object Symbol]",y=/\s/,x=/^\s+/;function j(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}var w=NaN,O=/^[-+]0x[0-9a-f]+$/i,C=/^0b[01]+$/i,k=/^0o[0-7]+$/i,E=parseInt;function P(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return null!=e&&"object"==typeof e}(e)&&function(e){return null==e?void 0===e?b:h:g&&g in Object(e)?function(e){var t=d.call(e,v),n=e[v];try{e[v]=void 0;var r=!0}catch(e){}var o=f.call(e);return r&&(t?e[v]=n:delete e[v]),o}(e):function(e){return p.call(e)}(e)}(e)==m}(e))return w;if(j(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=j(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=function(e){return e?e.slice(0,function(e){for(var t=e.length;t--&&y.test(e.charAt(t)););return t}(e)+1).replace(x,""):e}(e);var n=C.test(e);return n||k.test(e)?E(e.slice(2),n?2:8):O.test(e)?w:+e}var M=function(){return c.Date.now()},S=Math.max,R=Math.min;const T=(e,t,n={})=>{const r=(0,o.useMemo)((()=>function(e,t,n){var r,o,s,i,u,c,a=0,l=!1,d=!1,f=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function v(t){var n=r,s=o;return r=o=void 0,a=t,i=e.apply(s,n)}function p(e){var n=e-c;return void 0===c||n>=t||n<0||d&&e-a>=s}function h(){var e=M();if(p(e))return b(e);u=setTimeout(h,function(e){var n=t-(e-c);return d?R(n,s-(e-a)):n}(e))}function b(e){return u=void 0,f&&r?v(e):(r=o=void 0,i)}function g(){var e=M(),n=p(e);if(r=arguments,o=this,c=e,n){if(void 0===u)return function(e){return a=e,u=setTimeout(h,t),l?v(e):i}(c);if(d)return clearTimeout(u),u=setTimeout(h,t),v(c)}return void 0===u&&(u=setTimeout(h,t)),i}return t=P(t)||0,j(n)&&(l=!!n.leading,s=(d="maxWait"in n)?S(P(n.maxWait)||0,t):s,f="trailing"in n?!!n.trailing:f),g.cancel=function(){void 0!==u&&clearTimeout(u),a=0,r=c=o=u=void 0},g.flush=function(){return void 0===u?i:b(M())},g}(e,t,n)),[e,t,n]);return(e=>{const t=(0,o.useRef)(e);(0,o.useEffect)((()=>{t.current=e}),[e]),(0,o.useEffect)((()=>()=>t.current()),[])})((()=>r.cancel())),r},I=({children:e,capture:t,wait:n,options:r})=>{const s=o.Children.only(e),i=T(((...e)=>{const n=null==s?void 0:s.props;if(n)return"function"==typeof n[t]?n[t](...e):void 0}),n,r);return(0,o.cloneElement)(s,{[t]:i})};function A(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}"function"==typeof SuppressedError&&SuppressedError;const z=e=>{const t=(0,o.useRef)(e);return(0,o.useEffect)((()=>{t.current=e}),[e]),(0,o.useCallback)(((...e)=>t.current(1===e.length?e[0]:e)),[])},N=({action:e,calledOnce:t=!1,root:n=null,threshold:r=0,rootMargin:s="0px 0px 0px 0px"})=>{const i=(0,o.useRef)(null),u=z(e),c=(0,o.useCallback)((([e],n)=>{if(e&&e.isIntersecting){const r=e.target;u&&u(e),t&&n.unobserve(r)}}),[u,t]);return(0,o.useEffect)((()=>{const e=i.current;if("undefined"==typeof IntersectionObserver)return;if(!e)return;const t=new IntersectionObserver(c,{root:n,rootMargin:s,threshold:r});return t.observe(e),()=>{t.unobserve(e)}}),[n,r,s,c]),i},B=(...e)=>(0,o.useCallback)((t=>{e.forEach((e=>{"function"==typeof e?e(t):null!=e&&(e.current=t)}))}),[...e]),D=(0,o.forwardRef)(((e,t)=>{const{action:n,calledOnce:o,threshold:s,root:i,rootMargin:u}=e,c=A(e,["action","calledOnce","threshold","root","rootMargin"]),a=N({action:n,calledOnce:o,threshold:s,root:i,rootMargin:u});return(0,r.jsx)("div",Object.assign({ref:B(t,a)},c,{children:e.children}))})),L=(0,o.forwardRef)(((e,t)=>{var{src:n,style:s,threshold:i,root:u,rootMargin:c}=e,a=A(e,["src","style","threshold","root","rootMargin"]);const l=N({action:e=>{e.target.src=n},calledOnce:!0,threshold:i,root:u,rootMargin:c}),d=(0,o.useMemo)((()=>Object.assign({display:"inline-block"},s)),[s]);return(0,r.jsx)("img",Object.assign({},a,{ref:B(t,l),style:d}))})),F="undefined"!=typeof window?o.useLayoutEffect:o.useEffect;(0,o.createContext)({parentPortalElement:null});const U=e=>{const t=(0,o.useRef)(null),n=z(e);return(0,o.useEffect)((()=>{const e=(()=>{if("undefined"==typeof window&&"undefined"!=typeof global)return!1;const e=window.navigator.userAgent;return/Android|webOS|iPhone|iPad|iPod|Windows Phone|BlackBerry|IEMobile|Opera Mini/i.test(e)})()?"touchstart":"mousedown",r=e=>{const r=t.current;r&&!r.contains(e.target)&&n(r)};return document.addEventListener(e,r),()=>{document.removeEventListener(e,r)}}),[n]),{ref:t}},W=e=>{const t=(0,o.useRef)(e);return(0,o.useEffect)((()=>{t.current=e}),[e]),t.current},$=e=>{const[t,n]=(0,o.useState)({bottom:0,height:0,left:0,right:0,top:0,width:0,x:0,y:0}),r=(0,o.useRef)(null),s=z(e),i=(0,o.useCallback)((([e])=>{e&&(s(e),n(e.contentRect))}),[s]);return(0,o.useEffect)((()=>{const e=r.current;if("undefined"==typeof ResizeObserver)return;if(!e)return;const t=new ResizeObserver(i);return t.observe(e),()=>{t.unobserve(e)}}),[i]),{ref:r,contentRect:t}},H=(e={})=>{const{isDebounce:t=!1,wait:n=300}=e,[r,s]=(0,o.useState)({width:null,height:null}),i=(0,o.useCallback)((()=>{s({width:window.innerWidth,height:window.innerHeight})}),[]),u=T(i,n),c=(0,o.useMemo)((()=>t?u:i),[i,t,u]);return F((()=>(i(),window.addEventListener("resize",c),()=>{window.removeEventListener("resize",c)})),[]),r}},289:(e,t,n)=>{n.d(t,{Z:()=>u,a:()=>i});var r=n(4614);const o={},s=r.createContext(o);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function u(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);