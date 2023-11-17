/*! For license information please see cc8f1e9f.c6476aba.js.LICENSE.txt */
"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[786],{4474:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(4614);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(r),p=o,h=d["".concat(c,".").concat(p)]||d[p]||f[p]||a;return r?n.createElement(h,i(i({ref:t},u),{},{components:r})):n.createElement(h,i({ref:t},u))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},9906:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var n=r(2073),o=(r(4614),r(4474)),a=r(7263);const i={},s="Loader",c={unversionedId:"ui/Loader",id:"ui/Loader",title:"Loader",description:"@devgrace/ui \ub85c\ub354 \ucef4\ud3ec\ub10c\ud2b8",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/ui/Loader.mdx",sourceDirName:"ui",slug:"/ui/Loader",permalink:"/devgrace/ko/docs/ui/Loader",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Button",permalink:"/devgrace/ko/docs/ui/Button"},next:{title:"colors",permalink:"/devgrace/ko/docs/ui/colors"}},l={},u=[{value:"interface",id:"interface",level:2},{value:"Usage",id:"usage",level:2},{value:"Example",id:"example",level:2}],d={toc:u},f="wrapper";function p(e){let{components:t,...r}=e;return(0,o.kt)(f,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"loader"},"Loader"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"@devgrace/ui")," \ub85c\ub354 \ucef4\ud3ec\ub10c\ud2b8"),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"interface"},"interface"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"interface LoaderProps {\n  width?: CSSProperties['width']; // default: 24\n  height?: CSSProperties['height']; // default: 24\n  duration?: number; // default: 0.75\n  color?: string; // default: 'currentColor'\n  viewBox?: string; // viewBox = '0 0 24 24'\n}\n\nconst Loader: ({ width, height, duration, color, viewBox }: LoaderProps) => JSX.Element\n")),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Loader } from \'@devgrace/ui\'\n\nconst Example = () => {\n  return (\n    <div style={{ display: \'flex\', gap: \'8px\' }}>\n      <Loader width={200} height={200} />\n      <Loader width={100} height={100} color="#eeeeee" duration={1} />\n      <Loader width={80} height={80} color="red" duration={1.25} />\n      <Loader width={60} height={60} color="green" duration={1.5} />\n      <Loader width={40} height={40} color="blue" duration={1.75} />\n      <Loader width={20} height={20} color="orange" duration={2} />\n    </div>\n  )\n}\n')),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("div",{style:{display:"flex",gap:"8px"}},(0,o.kt)(a.aN,{width:200,height:200,mdxType:"Loader"}),(0,o.kt)(a.aN,{width:100,height:100,color:"#eeeeee",duration:1,mdxType:"Loader"}),(0,o.kt)(a.aN,{width:80,height:80,color:"red",duration:1.25,mdxType:"Loader"}),(0,o.kt)(a.aN,{width:60,height:60,color:"green",duration:1.5,mdxType:"Loader"}),(0,o.kt)(a.aN,{width:40,height:40,color:"blue",duration:1.75,mdxType:"Loader"}),(0,o.kt)(a.aN,{width:20,height:20,color:"orange",duration:2,mdxType:"Loader"})))}p.isMDXComponent=!0},1819:(e,t,r)=>{var n=r(4614),o=Symbol.for("react.element"),a=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,r){var n,a={},l=null,u=null;for(n in void 0!==r&&(l=""+r),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(u=t.ref),t)i.call(t,n)&&!c.hasOwnProperty(n)&&(a[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===a[n]&&(a[n]=t[n]);return{$$typeof:o,type:e,key:l,ref:u,props:a,_owner:s.current}}t.jsx=l,t.jsxs=l},5735:(e,t,r)=>{e.exports=r(1819)},7263:(e,t,r)=>{r.d(t,{O9:()=>tt,aN:()=>nt,zx:()=>ot});var n=r(5735),o=r(4614);function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function i(e){var t=Object.create(null);return function(r){return void 0===t[r]&&(t[r]=e(r)),t[r]}}"function"==typeof SuppressedError&&SuppressedError;var s=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,c=i((function(e){return s.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)<91})),l=function(){function e(e){var t=this;this._insertTag=function(e){var r;r=0===t.tags.length?t.insertionPoint?t.insertionPoint.nextSibling:t.prepend?t.container.firstChild:t.before:t.tags[t.tags.length-1].nextSibling,t.container.insertBefore(e,r),t.tags.push(e)},this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(e){e.forEach(this._insertTag)},t.insert=function(e){this.ctr%(this.isSpeedy?65e3:1)==0&&this._insertTag(function(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),void 0!==e.nonce&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}(this));var t=this.tags[this.tags.length-1];if(this.isSpeedy){var r=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}(t);try{r.insertRule(e,r.cssRules.length)}catch(t){}}else t.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach((function(e){return e.parentNode&&e.parentNode.removeChild(e)})),this.tags=[],this.ctr=0},e}(),u="-ms-",d="-moz-",f="-webkit-",p="comm",h="rule",m="decl",g="@keyframes",y=Math.abs,v=String.fromCharCode,b=Object.assign;function x(e){return e.trim()}function C(e,t,r){return e.replace(t,r)}function k(e,t){return e.indexOf(t)}function w(e,t){return 0|e.charCodeAt(t)}function E(e,t,r){return e.slice(t,r)}function A(e){return e.length}function F(e){return e.length}function S(e,t){return t.push(e),e}var O=1,_=1,B=0,P=0,$=0,T="";function D(e,t,r,n,o,a,i){return{value:e,root:t,parent:r,type:n,props:o,children:a,line:O,column:_,length:i,return:""}}function L(e,t){return b(D("",null,null,"",null,null,0),e,{length:-e.length},t)}function j(){return $=P>0?w(T,--P):0,_--,10===$&&(_=1,O--),$}function N(){return $=P<B?w(T,P++):0,_++,10===$&&(_=1,O++),$}function M(){return w(T,P)}function R(){return P}function z(e,t){return E(T,e,t)}function I(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function W(e){return O=_=1,B=A(T=e),P=0,[]}function H(e){return T="",e}function U(e){return x(z(P-1,G(91===e?e+2:40===e?e+1:e)))}function q(e){for(;($=M())&&$<33;)N();return I(e)>2||I($)>3?"":" "}function X(e,t){for(;--t&&N()&&!($<48||$>102||$>57&&$<65||$>70&&$<97););return z(e,R()+(t<6&&32==M()&&32==N()))}function G(e){for(;N();)switch($){case e:return P;case 34:case 39:34!==e&&39!==e&&G($);break;case 40:41===e&&G(e);break;case 92:N()}return P}function V(e,t){for(;N()&&e+$!==57&&(e+$!==84||47!==M()););return"/*"+z(t,P-1)+"*"+v(47===e?e:N())}function Y(e){for(;!I(M());)N();return z(e,P)}function Z(e){return H(K("",null,null,null,[""],e=W(e),0,[0],e))}function K(e,t,r,n,o,a,i,s,c){for(var l=0,u=0,d=i,f=0,p=0,h=0,m=1,g=1,y=1,b=0,x="",E=o,F=a,O=n,_=x;g;)switch(h=b,b=N()){case 40:if(108!=h&&58==w(_,d-1)){-1!=k(_+=C(U(b),"&","&\f"),"&\f")&&(y=-1);break}case 34:case 39:case 91:_+=U(b);break;case 9:case 10:case 13:case 32:_+=q(h);break;case 92:_+=X(R()-1,7);continue;case 47:switch(M()){case 42:case 47:S(Q(V(N(),R()),t,r),c);break;default:_+="/"}break;case 123*m:s[l++]=A(_)*y;case 125*m:case 59:case 0:switch(b){case 0:case 125:g=0;case 59+u:-1==y&&(_=C(_,/\f/g,"")),p>0&&A(_)-d&&S(p>32?ee(_+";",n,r,d-1):ee(C(_," ","")+";",n,r,d-2),c);break;case 59:_+=";";default:if(S(O=J(_,t,r,l,u,o,s,x,E=[],F=[],d),a),123===b)if(0===u)K(_,t,O,O,E,a,d,s,F);else switch(99===f&&110===w(_,3)?100:f){case 100:case 108:case 109:case 115:K(e,O,O,n&&S(J(e,O,O,0,0,o,s,x,o,E=[],d),F),o,F,d,s,n?E:F);break;default:K(_,O,O,O,[""],F,0,s,F)}}l=u=p=0,m=y=1,x=_="",d=i;break;case 58:d=1+A(_),p=h;default:if(m<1)if(123==b)--m;else if(125==b&&0==m++&&125==j())continue;switch(_+=v(b),b*m){case 38:y=u>0?1:(_+="\f",-1);break;case 44:s[l++]=(A(_)-1)*y,y=1;break;case 64:45===M()&&(_+=U(N())),f=M(),u=d=A(x=_+=Y(R())),b++;break;case 45:45===h&&2==A(_)&&(m=0)}}return a}function J(e,t,r,n,o,a,i,s,c,l,u){for(var d=o-1,f=0===o?a:[""],p=F(f),m=0,g=0,v=0;m<n;++m)for(var b=0,k=E(e,d+1,d=y(g=i[m])),w=e;b<p;++b)(w=x(g>0?f[b]+" "+k:C(k,/&\f/g,f[b])))&&(c[v++]=w);return D(e,t,r,0===o?h:s,c,l,u)}function Q(e,t,r){return D(e,t,r,p,v($),E(e,2,-2),0)}function ee(e,t,r,n){return D(e,t,r,m,E(e,0,n),E(e,n+1,-1),n)}function te(e,t){for(var r="",n=F(e),o=0;o<n;o++)r+=t(e[o],o,e,t)||"";return r}function re(e,t,r,n){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case m:return e.return=e.return||e.value;case p:return"";case g:return e.return=e.value+"{"+te(e.children,n)+"}";case h:e.value=e.props.join(",")}return A(r=te(e.children,n))?e.return=e.value+"{"+r+"}":""}function ne(e){var t=F(e);return function(r,n,o,a){for(var i="",s=0;s<t;s++)i+=e[s](r,n,o,a)||"";return i}}var oe=function(e,t,r){for(var n=0,o=0;n=o,o=M(),38===n&&12===o&&(t[r]=1),!I(o);)N();return z(e,P)},ae=new WeakMap,ie=function(e){if("rule"===e.type&&e.parent&&!(e.length<1)){for(var t=e.value,r=e.parent,n=e.column===r.column&&e.line===r.line;"rule"!==r.type;)if(!(r=r.parent))return;if((1!==e.props.length||58===t.charCodeAt(0)||ae.get(r))&&!n){ae.set(e,!0);for(var o=[],a=function(e,t){return H(function(e,t){var r=-1,n=44;do{switch(I(n)){case 0:38===n&&12===M()&&(t[r]=1),e[r]+=oe(P-1,t,r);break;case 2:e[r]+=U(n);break;case 4:if(44===n){e[++r]=58===M()?"&\f":"",t[r]=e[r].length;break}default:e[r]+=v(n)}}while(n=N());return e}(W(e),t))}(t,o),i=r.props,s=0,c=0;s<a.length;s++)for(var l=0;l<i.length;l++,c++)e.props[c]=o[s]?a[s].replace(/&\f/g,i[l]):i[l]+" "+a[s]}}},se=function(e){if("decl"===e.type){var t=e.value;108===t.charCodeAt(0)&&98===t.charCodeAt(2)&&(e.return="",e.value="")}};function ce(e,t){switch(function(e,t){return 45^w(e,0)?(((t<<2^w(e,0))<<2^w(e,1))<<2^w(e,2))<<2^w(e,3):0}(e,t)){case 5103:return f+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return f+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return f+e+d+e+u+e+e;case 6828:case 4268:return f+e+u+e+e;case 6165:return f+e+u+"flex-"+e+e;case 5187:return f+e+C(e,/(\w+).+(:[^]+)/,f+"box-$1$2"+u+"flex-$1$2")+e;case 5443:return f+e+u+"flex-item-"+C(e,/flex-|-self/,"")+e;case 4675:return f+e+u+"flex-line-pack"+C(e,/align-content|flex-|-self/,"")+e;case 5548:return f+e+u+C(e,"shrink","negative")+e;case 5292:return f+e+u+C(e,"basis","preferred-size")+e;case 6060:return f+"box-"+C(e,"-grow","")+f+e+u+C(e,"grow","positive")+e;case 4554:return f+C(e,/([^-])(transform)/g,"$1"+f+"$2")+e;case 6187:return C(C(C(e,/(zoom-|grab)/,f+"$1"),/(image-set)/,f+"$1"),e,"")+e;case 5495:case 3959:return C(e,/(image-set\([^]*)/,f+"$1$`$1");case 4968:return C(C(e,/(.+:)(flex-)?(.*)/,f+"box-pack:$3"+u+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+f+e+e;case 4095:case 3583:case 4068:case 2532:return C(e,/(.+)-inline(.+)/,f+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(A(e)-1-t>6)switch(w(e,t+1)){case 109:if(45!==w(e,t+4))break;case 102:return C(e,/(.+:)(.+)-([^]+)/,"$1"+f+"$2-$3$1"+d+(108==w(e,t+3)?"$3":"$2-$3"))+e;case 115:return~k(e,"stretch")?ce(C(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(115!==w(e,t+1))break;case 6444:switch(w(e,A(e)-3-(~k(e,"!important")&&10))){case 107:return C(e,":",":"+f)+e;case 101:return C(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+f+(45===w(e,14)?"inline-":"")+"box$3$1"+f+"$2$3$1"+u+"$2box$3")+e}break;case 5936:switch(w(e,t+11)){case 114:return f+e+u+C(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return f+e+u+C(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return f+e+u+C(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return f+e+u+e+e}return e}var le,ue,de,fe="undefined"!=typeof document,pe=fe?void 0:(le=function(){return i((function(){var e={};return function(t){return e[t]}}))},ue=new WeakMap,function(e){if(ue.has(e))return ue.get(e);var t=le();return ue.set(e,t),t}),he=[function(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case m:e.return=ce(e.value,e.length);break;case g:return te([L(e,{value:C(e.value,"@","@"+f)})],n);case h:if(e.length)return function(e,t){return e.map(t).join("")}(e.props,(function(t){switch(function(e,t){return(e=/(::plac\w+|:read-\w+)/.exec(e))?e[0]:e}(t)){case":read-only":case":read-write":return te([L(e,{props:[C(t,/:(read-\w+)/,":-moz-$1")]})],n);case"::placeholder":return te([L(e,{props:[C(t,/:(plac\w+)/,":"+f+"input-$1")]}),L(e,{props:[C(t,/:(plac\w+)/,":-moz-$1")]}),L(e,{props:[C(t,/:(plac\w+)/,u+"input-$1")]})],n)}return""}))}}],me=function(e){var t=e.key;if(fe&&"css"===t){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,(function(e){-1!==e.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(e),e.setAttribute("data-s",""))}))}var n=e.stylisPlugins||he;var o,a,i={},s=[];fe&&(o=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+t+' "]'),(function(e){for(var t=e.getAttribute("data-emotion").split(" "),r=1;r<t.length;r++)i[t[r]]=!0;s.push(e)})));var c,u=[ie,se];if(fe){var d,f=[re,(c=function(e){d.insert(e)},function(e){e.root||(e=e.return)&&c(e)})],p=ne(u.concat(n,f));a=function(e,t,r,n){d=r,te(Z(e?e+"{"+t.styles+"}":t.styles),p),n&&(y.inserted[t.name]=!0)}}else{var h=[re],m=ne(u.concat(n,h)),g=pe(n)(t);a=function(e,t,r,n){var o=t.name,a=function(e,t){var r=t.name;return void 0===g[r]&&(g[r]=te(Z(e?e+"{"+t.styles+"}":t.styles),m)),g[r]}(e,t);return void 0===y.compat?(n&&(y.inserted[o]=!0),a):n?void(y.inserted[o]=a):a}}var y={key:t,sheet:new l({key:t,container:o,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:i,registered:{},insert:a};return y.sheet.hydrate(s),y},ge={exports:{}},ye={};ge.exports=function(){if(de)return ye;de=1;var e="function"==typeof Symbol&&Symbol.for,t=e?Symbol.for("react.element"):60103,r=e?Symbol.for("react.portal"):60106,n=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,a=e?Symbol.for("react.profiler"):60114,i=e?Symbol.for("react.provider"):60109,s=e?Symbol.for("react.context"):60110,c=e?Symbol.for("react.async_mode"):60111,l=e?Symbol.for("react.concurrent_mode"):60111,u=e?Symbol.for("react.forward_ref"):60112,d=e?Symbol.for("react.suspense"):60113,f=e?Symbol.for("react.suspense_list"):60120,p=e?Symbol.for("react.memo"):60115,h=e?Symbol.for("react.lazy"):60116,m=e?Symbol.for("react.block"):60121,g=e?Symbol.for("react.fundamental"):60117,y=e?Symbol.for("react.responder"):60118,v=e?Symbol.for("react.scope"):60119;function b(e){if("object"==typeof e&&null!==e){var f=e.$$typeof;switch(f){case t:switch(e=e.type){case c:case l:case n:case a:case o:case d:return e;default:switch(e=e&&e.$$typeof){case s:case u:case h:case p:case i:return e;default:return f}}case r:return f}}}function x(e){return b(e)===l}return ye.AsyncMode=c,ye.ConcurrentMode=l,ye.ContextConsumer=s,ye.ContextProvider=i,ye.Element=t,ye.ForwardRef=u,ye.Fragment=n,ye.Lazy=h,ye.Memo=p,ye.Portal=r,ye.Profiler=a,ye.StrictMode=o,ye.Suspense=d,ye.isAsyncMode=function(e){return x(e)||b(e)===c},ye.isConcurrentMode=x,ye.isContextConsumer=function(e){return b(e)===s},ye.isContextProvider=function(e){return b(e)===i},ye.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===t},ye.isForwardRef=function(e){return b(e)===u},ye.isFragment=function(e){return b(e)===n},ye.isLazy=function(e){return b(e)===h},ye.isMemo=function(e){return b(e)===p},ye.isPortal=function(e){return b(e)===r},ye.isProfiler=function(e){return b(e)===a},ye.isStrictMode=function(e){return b(e)===o},ye.isSuspense=function(e){return b(e)===d},ye.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===n||e===l||e===a||e===o||e===d||e===f||"object"==typeof e&&null!==e&&(e.$$typeof===h||e.$$typeof===p||e.$$typeof===i||e.$$typeof===s||e.$$typeof===u||e.$$typeof===g||e.$$typeof===y||e.$$typeof===v||e.$$typeof===m)},ye.typeOf=b,ye}();var ve=ge.exports,be={};be[ve.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},be[ve.Memo]={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0};var xe="undefined"!=typeof document;function Ce(e,t,r){var n="";return r.split(" ").forEach((function(r){void 0!==e[r]?t.push(e[r]+";"):n+=r+" "})),n}var ke=function(e,t,r){var n=e.key+"-"+t.name;(!1===r||!1===xe&&void 0!==e.compat)&&void 0===e.registered[n]&&(e.registered[n]=t.styles)},we=function(e,t,r){ke(e,t,r);var n=e.key+"-"+t.name;if(void 0===e.inserted[t.name]){var o="",a=t;do{var i=e.insert(t===a?"."+n:"",a,e.sheet,!0);xe||void 0===i||(o+=i),a=a.next}while(void 0!==a);if(!xe&&0!==o.length)return o}},Ee={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ae=/[A-Z]|^ms/g,Fe=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Se=function(e){return 45===e.charCodeAt(1)},Oe=function(e){return null!=e&&"boolean"!=typeof e},_e=i((function(e){return Se(e)?e:e.replace(Ae,"-$&").toLowerCase()})),Be=function(e,t){switch(e){case"animation":case"animationName":if("string"==typeof t)return t.replace(Fe,(function(e,t,r){return $e={name:t,styles:r,next:$e},t}))}return 1===Ee[e]||Se(e)||"number"!=typeof t||0===t?t:t+"px"};function Pe(e,t,r){if(null==r)return"";if(void 0!==r.__emotion_styles)return r;switch(typeof r){case"boolean":return"";case"object":if(1===r.anim)return $e={name:r.name,styles:r.styles,next:$e},r.name;if(void 0!==r.styles){var n=r.next;if(void 0!==n)for(;void 0!==n;)$e={name:n.name,styles:n.styles,next:$e},n=n.next;return r.styles+";"}return function(e,t,r){var n="";if(Array.isArray(r))for(var o=0;o<r.length;o++)n+=Pe(e,t,r[o])+";";else for(var a in r){var i=r[a];if("object"!=typeof i)null!=t&&void 0!==t[i]?n+=a+"{"+t[i]+"}":Oe(i)&&(n+=_e(a)+":"+Be(a,i)+";");else if(!Array.isArray(i)||"string"!=typeof i[0]||null!=t&&void 0!==t[i[0]]){var s=Pe(e,t,i);switch(a){case"animation":case"animationName":n+=_e(a)+":"+s+";";break;default:n+=a+"{"+s+"}"}}else for(var c=0;c<i.length;c++)Oe(i[c])&&(n+=_e(a)+":"+Be(a,i[c])+";")}return n}(e,t,r);case"function":if(void 0!==e){var o=$e,a=r(e);return $e=o,Pe(e,t,a)}}if(null==t)return r;var i=t[r];return void 0!==i?i:r}var $e,Te=/label:\s*([^\s;\n{]+)\s*(;|$)/g,De=function(e,t,r){if(1===e.length&&"object"==typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var n=!0,o="";$e=void 0;var a=e[0];null==a||void 0===a.raw?(n=!1,o+=Pe(r,t,a)):o+=a[0];for(var i=1;i<e.length;i++)o+=Pe(r,t,e[i]),n&&(o+=a[i]);Te.lastIndex=0;for(var s,c="";null!==(s=Te.exec(o));)c+="-"+s[1];var l=function(e){for(var t,r=0,n=0,o=e.length;o>=4;++n,o-=4)t=1540483477*(65535&(t=255&e.charCodeAt(n)|(255&e.charCodeAt(++n))<<8|(255&e.charCodeAt(++n))<<16|(255&e.charCodeAt(++n))<<24))+(59797*(t>>>16)<<16),r=1540483477*(65535&(t^=t>>>24))+(59797*(t>>>16)<<16)^1540483477*(65535&r)+(59797*(r>>>16)<<16);switch(o){case 3:r^=(255&e.charCodeAt(n+2))<<16;case 2:r^=(255&e.charCodeAt(n+1))<<8;case 1:r=1540483477*(65535&(r^=255&e.charCodeAt(n)))+(59797*(r>>>16)<<16)}return(((r=1540483477*(65535&(r^=r>>>13))+(59797*(r>>>16)<<16))^r>>>15)>>>0).toString(36)}(o)+c;return{name:l,styles:o,next:$e}},Le="undefined"!=typeof document,je=!!o.useInsertionEffect&&o.useInsertionEffect,Ne=Le&&je||function(e){return e()},Me=je||o.useLayoutEffect,Re="undefined"!=typeof document,ze={}.hasOwnProperty,Ie=o.createContext("undefined"!=typeof HTMLElement?me({key:"css"}):null);Ie.Provider;var We=function(e){return(0,o.forwardRef)((function(t,r){var n=(0,o.useContext)(Ie);return e(t,n,r)}))};Re||(We=function(e){return function(t){var r=(0,o.useContext)(Ie);return null===r?(r=me({key:"css"}),o.createElement(Ie.Provider,{value:r},e(t,r))):e(t,r)}});var He=o.createContext({}),Ue="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",qe=function(e){var t=e.cache,r=e.serialized,n=e.isStringTag;ke(t,r,n);var a=Ne((function(){return we(t,r,n)}));if(!Re&&void 0!==a){for(var i,s=r.name,c=r.next;void 0!==c;)s+=" "+c.name,c=c.next;return o.createElement("style",((i={})["data-emotion"]=t.key+" "+s,i.dangerouslySetInnerHTML={__html:a},i.nonce=t.sheet.nonce,i))}return null};We((function(e,t,r){var n=e.css;"string"==typeof n&&void 0!==t.registered[n]&&(n=t.registered[n]);var a=e[Ue],i=[n],s="";"string"==typeof e.className?s=Ce(t.registered,i,e.className):null!=e.className&&(s=e.className+" ");var c=De(i,void 0,o.useContext(He));s+=t.key+"-"+c.name;var l={};for(var u in e)!ze.call(e,u)||"css"===u||u===Ue||(l[u]=e[u]);return l.ref=r,l.className=s,o.createElement(o.Fragment,null,o.createElement(qe,{cache:t,serialized:c,isStringTag:"string"==typeof a}),o.createElement(a,l))})),We((function(e,t){var r=e.styles,n=De([r],void 0,o.useContext(He));if(!Re){for(var a,i=n.name,s=n.styles,c=n.next;void 0!==c;)i+=" "+c.name,s+=c.styles,c=c.next;var l=!0===t.compat,u=t.insert("",{name:i,styles:s},t.sheet,l);return l?null:o.createElement("style",((a={})["data-emotion"]=t.key+"-global "+i,a.dangerouslySetInnerHTML={__html:u},a.nonce=t.sheet.nonce,a))}var d=o.useRef();return Me((function(){var e=t.key+"-global",r=new t.sheet.constructor({key:e,nonce:t.sheet.nonce,container:t.sheet.container,speedy:t.sheet.isSpeedy}),o=!1,a=document.querySelector('style[data-emotion="'+e+" "+n.name+'"]');return t.sheet.tags.length&&(r.before=t.sheet.tags[0]),null!==a&&(o=!0,a.setAttribute("data-emotion",e),r.hydrate([a])),d.current=[r,o],function(){r.flush()}}),[t]),Me((function(){var e=d.current,r=e[0];if(e[1])e[1]=!1;else{if(void 0!==n.next&&we(t,n.next,!0),r.tags.length){var o=r.tags[r.tags.length-1].nextElementSibling;r.before=o,r.flush()}t.insert("",n,r,!1)}}),[t,n.name]),null}));function Xe(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return De(t)}var Ge=function e(t){for(var r=t.length,n=0,o="";n<r;n++){var a=t[n];if(null!=a){var i=void 0;switch(typeof a){case"boolean":break;case"object":if(Array.isArray(a))i=e(a);else for(var s in i="",a)a[s]&&s&&(i&&(i+=" "),i+=s);break;default:i=a}i&&(o&&(o+=" "),o+=i)}}return o},Ve=function(e){var t,r=e.cache,n=e.serializedArr,a=Ne((function(){for(var e="",t=0;t<n.length;t++){var o=we(r,n[t],!1);Re||void 0===o||(e+=o)}if(!Re)return e}));return Re||0===a.length?null:o.createElement("style",((t={})["data-emotion"]=r.key+" "+n.map((function(e){return e.name})).join(" "),t.dangerouslySetInnerHTML={__html:a},t.nonce=r.sheet.nonce,t))},Ye=(We((function(e,t){var r=[],n=function(){for(var e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];var a=De(n,t.registered);return r.push(a),ke(t,a,!1),t.key+"-"+a.name},a={css:n,cx:function(){for(var e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];return function(e,t,r){var n=[],o=Ce(e,n,r);return n.length<2?r:o+t(n)}(t.registered,n,Ge(r))},theme:o.useContext(He)},i=e.children(a);return!0,o.createElement(o.Fragment,null,o.createElement(Ve,{cache:t,serializedArr:r}),i)})),c),Ze=function(e){return"theme"!==e},Ke=function(e){return"string"==typeof e&&e.charCodeAt(0)>96?Ye:Ze},Je=function(e,t,r){var n;if(t){var o=t.shouldForwardProp;n=e.__emotion_forwardProp&&o?function(t){return e.__emotion_forwardProp(t)&&o(t)}:o}return"function"!=typeof n&&r&&(n=e.__emotion_forwardProp),n},Qe="undefined"!=typeof document,et=function(e){var t=e.cache,r=e.serialized,n=e.isStringTag;ke(t,r,n);var a=Ne((function(){return we(t,r,n)}));if(!Qe&&void 0!==a){for(var i,s=r.name,c=r.next;void 0!==c;)s+=" "+c.name,c=c.next;return o.createElement("style",((i={})["data-emotion"]=t.key+" "+s,i.dangerouslySetInnerHTML={__html:a},i.nonce=t.sheet.nonce,i))}return null};const tt={red:{50:"#FFEBEE",100:"#FFCDD2",200:"#EF9A9A",300:"#E57373",400:"#EF5350",500:"#F44336",600:"#E53935",700:"#D32F2F",800:"#C62828",900:"#B71C1C"},pink:{50:"#FCE4EC",100:"#F8BBD0",200:"#F48FB1",300:"#F06292",400:"#EC407A",500:"#E91E63",600:"#D81B60",700:"#C2185B",800:"#AD1457",900:"#880E4F"},purple:{50:"#F3E5F5",100:"#E1BEE7",200:"#CE93D8",300:"#BA68C8",400:"#AB47BC",500:"#9C27B0",600:"#8E24AA",700:"#7B1FA2",800:"#6A1B9A",900:"#4A148C"},indigo:{50:"#E8EAF6",100:"#C5CAE9",200:"#9FA8DA",300:"#7986CB",400:"#5C6BC0",500:"#3F51B5",600:"#3949AB",700:"#303F9F",800:"#283593",900:"#1A237E"},blue:{50:"#E3F2FD",100:"#BBDEFB",200:"#90CAF9",300:"#64B5F6",400:"#42A5F5",500:"#2196F3",600:"#1E88E5",700:"#1976D2",800:"#1565C0",900:"#0D47A1"},cyan:{50:"#E0F7FA",100:"#B2EBF2",200:"#80DEEA",300:"#4DD0E1",400:"#26C6DA",500:"#00BCD4",600:"#00ACC1",700:"#0097A7",800:"#00838F",900:"#006064"},teal:{50:"#E0F2F1",100:"#B2DFDB",200:"#80CBC4",300:"#4DB6AC",400:"#26A69A",500:"#009688",600:"#00897B",700:"#00796B",800:"#00695C",900:"#004D40"},green:{50:"#E8F5E9",100:"#C8E6C9",200:"#A5D6A7",300:"#81C784",400:"#66BB6A",500:"#4CAF50",600:"#43A047",700:"#388E3C",800:"#2E7D32",900:"#1B5E20"},lime:{50:"#F9FBE7",100:"#F0F4C3",200:"#E6EE9C",300:"#DCE775",400:"#D4E157",500:"#CDDC39",600:"#C0CA33",700:"#AFB42B",800:"#9E9D24",900:"#827717"},yellow:{50:"#FFFDE7",100:"#FFF9C4",200:"#FFF59D",300:"#FFF176",400:"#FFEE58",500:"#FFEB3B",600:"#FDD835",700:"#FBC02D",800:"#F9A825",900:"#F57F17"},orange:{50:"#FFF3E0",100:"#FFF0B2",200:"#FFCC80",300:"#FFB74D",400:"#FFA726",500:"#FF9800",600:"#FB8C00",700:"#F57C00",800:"#EF6C00",900:"#E65100"},brown:{50:"#EFEBE9",100:"#D7CCC8",200:"#BCAAA4",300:"#A1887F",400:"#8D6E63",500:"#795548",600:"#6D4C41",700:"#5D4037",800:"#4E342E",900:"#3E2723"},gray:{50:"#FAFAFA",100:"#F5F5F5",200:"#EEEEEE",300:"#E0E0E0",400:"#BDBDBD",500:"#9E9E9E",600:"#757575",700:"#616161",800:"#424242",900:"#212121"}},rt=function e(t,r){var n,i,s=t.__emotion_real===t,c=s&&t.__emotion_base||t;void 0!==r&&(n=r.label,i=r.target);var l=Je(t,r,s),u=l||Ke(c),d=!u("as");return function(){var f=arguments,p=s&&void 0!==t.__emotion_styles?t.__emotion_styles.slice(0):[];if(void 0!==n&&p.push("label:"+n+";"),null==f[0]||void 0===f[0].raw)p.push.apply(p,f);else{p.push(f[0][0]);for(var h=f.length,m=1;m<h;m++)p.push(f[m],f[0][m])}var g=We((function(e,t,r){var n=d&&e.as||c,a="",s=[],f=e;if(null==e.theme){for(var h in f={},e)f[h]=e[h];f.theme=o.useContext(He)}"string"==typeof e.className?a=Ce(t.registered,s,e.className):null!=e.className&&(a=e.className+" ");var m=De(p.concat(s),t.registered,f);a+=t.key+"-"+m.name,void 0!==i&&(a+=" "+i);var g=d&&void 0===l?Ke(n):u,y={};for(var v in e)d&&"as"===v||g(v)&&(y[v]=e[v]);return y.className=a,y.ref=r,o.createElement(o.Fragment,null,o.createElement(et,{cache:t,serialized:m,isStringTag:"string"==typeof n}),o.createElement(n,y))}));return g.displayName=void 0!==n?n:"Styled("+("string"==typeof c?c:c.displayName||c.name||"Component")+")",g.defaultProps=t.defaultProps,g.__emotion_real=g,g.__emotion_base=c,g.__emotion_styles=p,g.__emotion_forwardProp=l,Object.defineProperty(g,"toString",{value:function(){return"."+i}}),g.withComponent=function(t,n){return e(t,a({},r,n,{shouldForwardProp:Je(g,n,!0)})).apply(void 0,p)},g}}("button",{target:"e1qgkyay0"})("position:relative;white-space:nowrap;outline:none;border:none;display:flex;justify-content:center;align-items:center;font-weight:",(({fontWeight:e})=>e),";color:",(({fontColor:e})=>e),";border-radius:",(({shape:e})=>(e=>({rect:"0px",round:"6px"}[e||"round"]))(e)),";width:",(({fullWidth:e})=>e?"100%":"fit-content"),";transition:all 0.2s;line-height:1;opacity:",(({isLoading:e})=>e?.7:1),";cursor:",(({isLoading:e})=>e?"default":"pointer"),";svg{margin-right:6px;}&:disabled{background-color:",(({variant:e})=>"text"===e?"transparent":tt.gray[100]),";border:",(({variant:e})=>"text"===e?"1px solid transparent":`1px solid ${tt.gray[400]}`),";color:",tt.gray[400],";cursor:not-allowed;}&:disabled:hover,&:disabled:active{background-color:",(({variant:e})=>"text"===e?"transparent":tt.gray[100]),";}",(({size:e})=>{const{height:t,padding:r,fontSize:n}=(e=>({small:{height:"32px",padding:"0 12px",fontSize:"14px"},medium:{height:"40px",padding:"0 16px",fontSize:"16px"},large:{height:"48px",padding:"0 24px",fontSize:"18px"}}[e||"medium"]))(e);return Xe("height:",t,";padding:",r,";font-size:",n,";","")}),";",(({variant:e,colorTheme:t,fontColor:r})=>{const{defaultBgColor:n,hoverBgColor:o,activeBgColor:a,borderColor:i,color:s}=((e,t,r)=>r?{contained:{defaultBgColor:tt[r][500],hoverBgColor:tt[r][600],activeBgColor:tt[r][700],borderColor:tt[r][500],color:t||"#fff"},outlined:{defaultBgColor:"#fff",hoverBgColor:tt[r][50],activeBgColor:tt[r][100],borderColor:tt[r][500],color:t||tt[r][500]},text:{defaultBgColor:"transparent",hoverBgColor:tt[r][50],activeBgColor:tt[r][100],borderColor:"transparent",color:t||tt[r][500]}}[e||"contained"]:{defaultBgColor:tt.blue[500],hoverBgColor:tt.blue[600],activeBgColor:tt.blue[700],borderColor:tt.blue[500],color:t||"#fff"})(e,r,t);return Xe("background-color:",n,";border:1px solid ",i,";color:",s,";&:hover{background-color:",o,";}&:active{background-color:",a,";}","")}),";"),nt=({width:e=24,height:t=24,duration:r=.75,color:o="currentColor",viewBox:a="0 0 24 24"})=>(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:t,viewBox:a,children:(0,n.jsx)("path",{fill:o,d:"M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z",children:(0,n.jsx)("animateTransform",{dur:r,attributeName:"transform",repeatCount:"indefinite",type:"rotate",values:"0 12 12;360 12 12"})})}),ot=(0,o.forwardRef)(((e,t)=>{var{children:r,fontColor:o,isLoading:a=!1,fullWidth:i=!1,fontWeight:s=700,size:c="medium",variant:l="contained",shape:u="round",colorTheme:d="blue"}=e,f=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}(e,["children","fontColor","isLoading","fullWidth","fontWeight","size","variant","shape","colorTheme"]);const{width:p,height:h}=(e=>{switch(e){case"large":return{width:18,height:18};case"medium":return{width:16,height:16};default:return{width:14,height:14}}})(c);return(0,n.jsxs)(rt,Object.assign({},f,{ref:t,isLoading:a,fullWidth:i,fontWeight:s,size:c,colorTheme:d,variant:l,shape:u,fontColor:o,onClick:e=>{const{onClick:t}=f;a||t&&t(e)},children:[a&&(0,n.jsx)(nt,{width:p,height:h}),r]}))}))}}]);