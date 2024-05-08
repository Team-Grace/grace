"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8067],{4824:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>f,frontMatter:()=>i,metadata:()=>a,toc:()=>u});var r=t(2082),o=t(289),c=t(2590);const i={},s="InView",a={id:"react/components/InView",title:"InView",description:"A component that calls an action callback function that is passed as a prop when exposed to a Viewport.",source:"@site/docs/react/components/InView.mdx",sourceDirName:"react/components",slug:"/react/components/InView",permalink:"/devgrace/docs/react/components/InView",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"DebounceWrapper",permalink:"/devgrace/docs/react/components/DebounceWrapper"},next:{title:"LazyImage",permalink:"/devgrace/docs/react/components/LazyImage"}},l={},u=[{value:"Interface",id:"interface",level:2},{value:"Usage",id:"usage",level:2},{value:"Example",id:"example",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"inview",children:"InView"}),"\n",(0,r.jsxs)(n.p,{children:["A component that calls an ",(0,r.jsx)(n.code,{children:"action"})," callback function that is passed as a prop when exposed to a ",(0,r.jsx)(n.code,{children:"Viewport"}),"."]}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.h2,{id:"interface",children:"Interface"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"type InViewProps = React.ComponentProps<'div'> & UseIntersectionObserverProps;\n\nconst InView: React.ForwardRefExoticComponent<\n  Omit<React.PropsWithChildren<InViewProps>, 'ref'> &\n    React.RefAttributes<HTMLDivElement>\n>;\n"})}),"\n",(0,r.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { InView } from '@devgrace/react';\n\nconst Example = () => {\n  const onAction = () => {\n    /* action */\n  }\n\n  return (\n    <div>\n      {/* ... */}\n      <InView action={onAction} calledOnce>Box1</InView>\n    </div>\n  );\n}; \n"})}),"\n",(0,r.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,r.jsxs)("div",{style:{maxWidth:"500px",height:"500px",overflow:"scroll",background:"#f1f3f5"},children:[(0,r.jsx)("div",{style:{width:"100%",height:"600px",textAlign:"center",fontSize:"2rem"},children:"Please scroll down."}),(0,r.jsx)(c.df,{style:{width:"100%",height:"300px",background:"#c0392B",color:"white",textAlign:"center",fontSize:"21px"},action:()=>console.log("action callback(1)"),calledOnce:!0,children:(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{children:"Box1"}),(0,r.jsx)("p",{children:"Check the console in your browser's developer tools."}),(0,r.jsx)("p",{children:"The action callback function is called only the first time."}),(0,r.jsx)("p",{children:"calledOnce: true"})]})}),(0,r.jsx)("div",{style:{width:"100%",height:"100px"}}),(0,r.jsx)(c.df,{style:{width:"100%",height:"300px",background:"#89a5ea",color:"white",textAlign:"center",fontSize:"21px"},action:()=>console.log("action callback(2)"),children:(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{children:"Box2"}),(0,r.jsx)("p",{children:"Check the console in your browser's developer tools."}),(0,r.jsx)("p",{children:"The action callback function is called multiple times."}),(0,r.jsx)("p",{children:"calledOnce: false"})]})}),(0,r.jsx)("div",{style:{width:"100%",height:"600px",textAlign:"center"}})]})]})}function f(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},2590:(e,n,t)=>{t.d(n,{D9:()=>J,Hk:()=>$,Mm:()=>Y,Nr:()=>R,ac:()=>q,df:()=>B,iP:()=>Q,nA:()=>H,t$:()=>G,uM:()=>V,wY:()=>F,yU:()=>K});var r=t(8290),o=t(2082),c=(t(286),"object"==typeof global&&global&&global.Object===Object&&global),i="object"==typeof self&&self&&self.Object===Object&&self,s=c||i||Function("return this")(),a=s.Symbol,l=Object.prototype,u=l.hasOwnProperty,d=l.toString,f=a?a.toStringTag:void 0,p=Object.prototype.toString,h="[object Null]",v="[object Undefined]",m=a?a.toStringTag:void 0;var x="[object Symbol]",g=/\s/,b=/^\s+/;function w(e){var n=typeof e;return null!=e&&("object"==n||"function"==n)}var y=NaN,j=/^[-+]0x[0-9a-f]+$/i,O=/^0b[01]+$/i,E=/^0o[0-7]+$/i,k=parseInt;function I(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return null!=e&&"object"==typeof e}(e)&&function(e){return null==e?void 0===e?v:h:m&&m in Object(e)?function(e){var n=u.call(e,f),t=e[f];try{e[f]=void 0;var r=!0}catch(e){}var o=d.call(e);return r&&(n?e[f]=t:delete e[f]),o}(e):function(e){return p.call(e)}(e)}(e)==x}(e))return y;if(w(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=w(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=function(e){return e?e.slice(0,function(e){for(var n=e.length;n--&&g.test(e.charAt(n)););return n}(e)+1).replace(b,""):e}(e);var t=O.test(e);return t||E.test(e)?k(e.slice(2),t?2:8):j.test(e)?y:+e}var M=function(){return s.Date.now()},S=Math.max,C=Math.min;const P=e=>{const n=(0,r.useRef)(e);return(0,r.useEffect)((()=>{n.current=e}),[e]),(0,r.useCallback)(((...e)=>n.current(...e)),[])},R=(e,n,t={})=>{const o=P(e),c=(0,r.useMemo)((()=>function(e,n,t){var r,o,c,i,s,a,l=0,u=!1,d=!1,f=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function p(n){var t=r,c=o;return r=o=void 0,l=n,i=e.apply(c,t)}function h(e){var t=e-a;return void 0===a||t>=n||t<0||d&&e-l>=c}function v(){var e=M();if(h(e))return m(e);s=setTimeout(v,function(e){var t=n-(e-a);return d?C(t,c-(e-l)):t}(e))}function m(e){return s=void 0,f&&r?p(e):(r=o=void 0,i)}function x(){var e=M(),t=h(e);if(r=arguments,o=this,a=e,t){if(void 0===s)return function(e){return l=e,s=setTimeout(v,n),u?p(e):i}(a);if(d)return clearTimeout(s),s=setTimeout(v,n),p(a)}return void 0===s&&(s=setTimeout(v,n)),i}return n=I(n)||0,w(t)&&(u=!!t.leading,c=(d="maxWait"in t)?S(I(t.maxWait)||0,n):c,f="trailing"in t?!!t.trailing:f),x.cancel=function(){void 0!==s&&clearTimeout(s),l=0,r=a=o=s=void 0},x.flush=function(){return void 0===s?i:m(M())},x}(o,n,t)),[o,n,t]);return(e=>{const n=P(e);(0,r.useEffect)((()=>()=>n()),[n])})((()=>c.cancel())),c},V=({children:e,capture:n,wait:t,options:o})=>{const c=r.Children.only(e),i=R(((...e)=>{const t=null==c?void 0:c.props;if(t)return"function"==typeof t[n]?t[n](...e):void 0}),t,o);return(0,r.cloneElement)(c,{[n]:i})};function A(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]])}return t}function T(e,n,t,r){return new(t||(t=Promise))((function(o,c){function i(e){try{a(r.next(e))}catch(e){c(e)}}function s(e){try{a(r.throw(e))}catch(e){c(e)}}function a(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(i,s)}a((r=r.apply(e,n||[])).next())}))}"function"==typeof SuppressedError&&SuppressedError,"function"==typeof SuppressedError&&SuppressedError;const L=()=>"undefined"==typeof window&&"undefined"!=typeof global,z=()=>{},N=()=>!L(),W=({action:e,calledOnce:n=!1,root:t=null,threshold:o=[0],rootMargin:c="0px 0px 0px 0px"})=>{const i=(0,r.useRef)(null),s=P(null!=e?e:z),a=P((([e],t)=>{if(e&&e.isIntersecting){const r=e.target;s&&s(e),n&&t.unobserve(r)}}));return P((e=>{i.current&&i.current.disconnect(),i.current=new IntersectionObserver(a,{root:t,threshold:o,rootMargin:c}),e&&i.current.observe(e)}))},D=(...e)=>(0,r.useCallback)((n=>{e.forEach((e=>{"function"==typeof e?e(n):null!=e&&(e.current=n)}))}),[...e]),B=(0,r.forwardRef)(((e,n)=>{const{action:t,calledOnce:r,threshold:c,root:i,rootMargin:s}=e,a=A(e,["action","calledOnce","threshold","root","rootMargin"]),l=W({action:t,calledOnce:r,threshold:c,root:i,rootMargin:s});return(0,o.jsx)("div",Object.assign({ref:D(n,l)},a,{children:e.children}))}));B.displayName="InView";const F=(0,r.forwardRef)(((e,n)=>{var{src:t,style:c,threshold:i,root:s,rootMargin:a}=e,l=A(e,["src","style","threshold","root","rootMargin"]);const u=W({action:e=>{e.target.src=t},calledOnce:!0,threshold:i,root:s,rootMargin:a}),d=(0,r.useMemo)((()=>Object.assign({display:"inline-block"},c)),[c]);return(0,o.jsx)("img",Object.assign({},l,{ref:D(n,u),style:d}))}));F.displayName="LazyImage";const U=N()?r.useLayoutEffect:r.useEffect;(0,r.createContext)({parentPortalElement:null});const $=({condition:e,cases:n,defaultCaseComponent:t=null})=>{var c;return(0,o.jsx)(r.Fragment,null==e?{children:t}:{children:null!==(c=n[e])&&void 0!==c?c:t})},H=({children:e,condition:n})=>{var t;return("function"==typeof(t=n)?t():t)?(0,o.jsx)(r.Fragment,{children:e}):null},Y=()=>{const[e,n]=(0,r.useState)(!1),t=(0,r.useRef)(!1);return{isLoading:e,blockMultipleClick:e=>T(void 0,void 0,void 0,(function*(){t.current||(t.current=!0,n(!0),yield e(),t.current=!1,n(!1))}))}},Z=e=>!!N()&&window.matchMedia(e).matches,q=e=>{const[n,t]=(0,r.useState)(Z(e)),o=(0,r.useCallback)((()=>{t(Z(e))}),[e]);return(0,r.useEffect)((()=>{const n=window.matchMedia(e);return n.addEventListener("change",o),()=>n.removeEventListener("change",o)}),[e,o]),{isMatch:n}},G=e=>{const n=(0,r.useRef)(null),t=P(e);return(0,r.useEffect)((()=>{const e=(()=>{if(L())return!1;const e=window.navigator.userAgent;return/Android|webOS|iPhone|iPad|iPod|Windows Phone|BlackBerry|IEMobile|Opera Mini/i.test(e)})()?"touchstart":"mousedown",r=e=>{const r=n.current;r&&!r.contains(e.target)&&t(r)};return document.addEventListener(e,r),()=>{document.removeEventListener(e,r)}}),[t]),{ref:n}},J=e=>{const n=(0,r.useRef)(e);return(0,r.useEffect)((()=>{n.current=e}),[e]),n.current},K=e=>{const[n,t]=(0,r.useState)({bottom:0,height:0,left:0,right:0,top:0,width:0,x:0,y:0}),o=(0,r.useRef)(null),c=P(e),i=(0,r.useCallback)((([e])=>{e&&(c(e),t(e.contentRect))}),[c]);return(0,r.useEffect)((()=>{const e=o.current;if("undefined"==typeof ResizeObserver)return;if(!e)return;const n=new ResizeObserver(i);return n.observe(e),()=>{n.unobserve(e)}}),[i]),{ref:o,contentRect:n}},Q=(e={})=>{const{isDebounce:n=!1,wait:t=200}=e,[o,c]=(0,r.useState)({width:null,height:null}),i=(0,r.useCallback)((()=>{c({width:window.innerWidth,height:window.innerHeight})}),[]),s=R(i,t),a=(0,r.useMemo)((()=>n?s:i),[i,n,s]);return U((()=>(i(),window.addEventListener("resize",a),()=>{window.removeEventListener("resize",a)})),[]),o}},289:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>i});var r=t(8290);const o={},c=r.createContext(o);function i(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);