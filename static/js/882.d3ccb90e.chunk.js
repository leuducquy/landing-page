(self.webpackChunklanding_page=self.webpackChunklanding_page||[]).push([[882],{3882:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>re});var r,i,a,s,o,c,l=t(605),p=t(9603),d=t(2907),u=t(1758),m=t(168),h=t(1191);const f=(0,h.ZP)("section")(r||(r=(0,m.Z)(["\n  position: relative;\n  padding: 10rem 0 8rem;\n\n  @media only screen and (max-width: 1024px) {\n    padding: 4rem 0 4rem;\n  }\n"]))),x=(0,h.ZP)("p")(i||(i=(0,m.Z)(["\n  margin: 1.5rem 0 2rem 0;\n"]))),v=(0,h.ZP)("div")(a||(a=(0,m.Z)(["\n  position: relative;\n  max-width: 540px;\n\n  @media only screen and (max-width: 575px) {\n    padding-top: 4rem;\n  }\n"]))),g=(0,h.ZP)("div")(s||(s=(0,m.Z)(["\n  display: flex;\n  justify-content: space-between;\n  max-width: 100%;\n"])));(0,h.ZP)("h6")(o||(o=(0,m.Z)(['\n  font-size: 15px;\n  line-height: 1rem;\n  padding: 0.5rem 0;\n  text-transform: uppercase;\n  color: #000;\n  font-family: "Motiva Sans Light", sans-serif;\n']))),(0,h.ZP)("p")(c||(c=(0,m.Z)(["\n  font-size: 13px;\n"])));var y=t(184);const j=(0,d.Z)()((e=>{let{icon:n,title:t,content:r,section:i,t:a,id:s,image:o}=e;return(0,y.jsx)(f,{children:(0,y.jsx)(u.pT,{direction:"left",children:(0,y.jsxs)(l.Z,{justify:"space-between",align:"middle",id:s,children:[(0,y.jsx)(p.Z,{lg:11,md:11,sm:12,xs:24,children:(0,y.jsx)("img",{src:o,alt:"Logo",style:{width:"100%",height:"100%"}})}),(0,y.jsx)(p.Z,{lg:11,md:11,sm:11,xs:24,children:(0,y.jsxs)(v,{children:[(0,y.jsx)("h6",{children:a(t)}),(0,y.jsx)(x,{children:a(r)}),(0,y.jsx)(g,{children:(0,y.jsx)(l.Z,{justify:"space-between",children:"object"===typeof i&&i.map(((e,n)=>(0,y.jsx)(p.Z,{span:11},n)))})})]})})]})})})}));var b=t(5224),Z=t(5987),O=t(1002),w=t(4942),E=t(2791),k=t(7399),P=t.n(k),N=/\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;function K(e){var n={type:"tag",name:"",voidElement:!1,attrs:{},children:[]},t=e.match(/<\/?([^\s]+?)[/\s>]/);if(t&&(n.name=t[1],(P()[t[1]]||"/"===e.charAt(e.length-2))&&(n.voidElement=!0),n.name.startsWith("!--"))){var r=e.indexOf("--\x3e");return{type:"comment",comment:-1!==r?e.slice(4,r):""}}for(var i=new RegExp(N),a=null;null!==(a=i.exec(e));)if(a[0].trim())if(a[1]){var s=a[1].trim(),o=[s,""];s.indexOf("=")>-1&&(o=s.split("=")),n.attrs[o[0]]=o[1],i.lastIndex--}else a[2]&&(n.attrs[a[2]]=a[3].trim().substring(1,a[3].length-1));return n}var S=/<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g,A=/^\s*$/,T=Object.create(null);function V(e,n){switch(n.type){case"text":return e+n.content;case"tag":return e+="<"+n.name+(n.attrs?function(e){var n=[];for(var t in e)n.push(t+'="'+e[t]+'"');return n.length?" "+n.join(" "):""}(n.attrs):"")+(n.voidElement?"/>":">"),n.voidElement?e:e+n.children.reduce(V,"")+"</"+n.name+">";case"comment":return e+"\x3c!--"+n.comment+"--\x3e"}}var B={parse:function(e,n){n||(n={}),n.components||(n.components=T);var t,r=[],i=[],a=-1,s=!1;if(0!==e.indexOf("<")){var o=e.indexOf("<");r.push({type:"text",content:-1===o?e:e.substring(0,o)})}return e.replace(S,(function(o,c){if(s){if(o!=="</"+t.name+">")return;s=!1}var l,p="/"!==o.charAt(1),d=o.startsWith("\x3c!--"),u=c+o.length,m=e.charAt(u);if(d){var h=K(o);return a<0?(r.push(h),r):((l=i[a]).children.push(h),r)}if(p&&(a++,"tag"===(t=K(o)).type&&n.components[t.name]&&(t.type="component",s=!0),t.voidElement||s||!m||"<"===m||t.children.push({type:"text",content:e.slice(u,e.indexOf("<",u))}),0===a&&r.push(t),(l=i[a-1])&&l.children.push(t),i[a]=t),(!p||t.voidElement)&&(a>-1&&(t.voidElement||t.name===o.slice(2,-1))&&(a--,t=-1===a?r:i[a]),!s&&"<"!==m&&m)){l=-1===a?r:i[a].children;var f=e.indexOf("<",u),x=e.slice(u,-1===f?void 0:f);A.test(x)&&(x=" "),(f>-1&&a+l.length>=0||" "!==x)&&l.push({type:"text",content:x})}})),r},stringify:function(e){return e.reduce((function(e,n){return e+V("",n)}),"")}};const I=B;var D,H,z,C,F=t(8589),L=t(1426),W=["format"],R=["children","count","parent","i18nKey","context","tOptions","values","defaults","components","ns","i18n","t","shouldUnescape"];function $(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function M(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?$(Object(t),!0).forEach((function(n){(0,w.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):$(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function U(e,n){if(!e)return!1;var t=e.props?e.props.children:e.children;return n?t.length>0:!!t}function _(e){return e?e.props?e.props.children:e.children:[]}function J(e){return Array.isArray(e)?e:[e]}function Y(e,n){if(!e)return"";var t="",r=J(e),i=n.transSupportBasicHtmlNodes&&n.transKeepBasicHtmlNodesFor?n.transKeepBasicHtmlNodesFor:[];return r.forEach((function(e,r){if("string"===typeof e)t+="".concat(e);else if((0,E.isValidElement)(e)){var a=Object.keys(e.props).length,s=i.indexOf(e.type)>-1,o=e.props.children;if(!o&&s&&0===a)t+="<".concat(e.type,"/>");else if(o||s&&0===a)if(e.props.i18nIsDynamicList)t+="<".concat(r,"></").concat(r,">");else if(s&&1===a&&"string"===typeof o)t+="<".concat(e.type,">").concat(o,"</").concat(e.type,">");else{var c=Y(o,n);t+="<".concat(r,">").concat(c,"</").concat(r,">")}else t+="<".concat(r,"></").concat(r,">")}else if(null===e)(0,L.ZK)("Trans: the passed in value is invalid - seems you passed in a null child.");else if("object"===(0,O.Z)(e)){var l=e.format,p=(0,Z.Z)(e,W),d=Object.keys(p);if(1===d.length){var u=l?"".concat(d[0],", ").concat(l):d[0];t+="{{".concat(u,"}}")}else(0,L.ZK)("react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.",e)}else(0,L.ZK)("Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.",e)})),t}function q(e,n,t,r,i,a){if(""===n)return[];var s=r.transKeepBasicHtmlNodesFor||[],o=n&&new RegExp(s.join("|")).test(n);if(!e&&!o)return[n];var c={};!function e(n){J(n).forEach((function(n){"string"!==typeof n&&(U(n)?e(_(n)):"object"!==(0,O.Z)(n)||(0,E.isValidElement)(n)||Object.assign(c,n))}))}(e);var l=I.parse("<0>".concat(n,"</0>")),p=M(M({},c),i);function d(e,n,t){var r=_(e),i=m(r,n.children,t);return function(e){return"[object Array]"===Object.prototype.toString.call(e)&&e.every((function(e){return(0,E.isValidElement)(e)}))}(r)&&0===i.length?r:i}function u(e,n,t,r,i){e.dummy&&(e.children=n),t.push((0,E.cloneElement)(e,M(M({},e.props),{},{key:r}),i?void 0:n))}function m(n,i,c){var l=J(n);return J(i).reduce((function(n,i,h){var f=i.children&&i.children[0]&&i.children[0].content&&t.services.interpolator.interpolate(i.children[0].content,p,t.language);if("tag"===i.type){var x=l[parseInt(i.name,10)];!x&&1===c.length&&c[0][i.name]&&(x=c[0][i.name]),x||(x={});var v=0!==Object.keys(i.attrs).length?function(e,n){var t=M({},n);return t.props=Object.assign(e.props,n.props),t}({props:i.attrs},x):x,g=(0,E.isValidElement)(v),y=g&&U(i,!0)&&!i.voidElement,j=o&&"object"===(0,O.Z)(v)&&v.dummy&&!g,b="object"===(0,O.Z)(e)&&null!==e&&Object.hasOwnProperty.call(e,i.name);if("string"===typeof v){var Z=t.services.interpolator.interpolate(v,p,t.language);n.push(Z)}else if(U(v)||y){u(v,d(v,i,c),n,h)}else if(j){var w=m(l,i.children,c);n.push((0,E.cloneElement)(v,M(M({},v.props),{},{key:h}),w))}else if(Number.isNaN(parseFloat(i.name))){if(b)u(v,d(v,i,c),n,h,i.voidElement);else if(r.transSupportBasicHtmlNodes&&s.indexOf(i.name)>-1)if(i.voidElement)n.push((0,E.createElement)(i.name,{key:"".concat(i.name,"-").concat(h)}));else{var k=m(l,i.children,c);n.push((0,E.createElement)(i.name,{key:"".concat(i.name,"-").concat(h)},k))}else if(i.voidElement)n.push("<".concat(i.name," />"));else{var P=m(l,i.children,c);n.push("<".concat(i.name,">").concat(P,"</").concat(i.name,">"))}}else if("object"!==(0,O.Z)(v)||g)1===i.children.length&&f?n.push((0,E.cloneElement)(v,M(M({},v.props),{},{key:h}),f)):n.push((0,E.cloneElement)(v,M(M({},v.props),{},{key:h})));else{var N=i.children[0]?f:null;N&&n.push(N)}}else if("text"===i.type){var K=r.transWrapTextNodes,S=a?r.unescape(t.services.interpolator.interpolate(i.content,p,t.language)):t.services.interpolator.interpolate(i.content,p,t.language);K?n.push((0,E.createElement)(K,{key:"".concat(i.name,"-").concat(h)},S)):n.push(S)}return n}),[])}return _(m([{dummy:!0,children:e||[]}],l,J(e||[]))[0])}function G(e){var n=e.children,t=e.count,r=e.parent,i=e.i18nKey,a=e.context,s=e.tOptions,o=void 0===s?{}:s,c=e.values,l=e.defaults,p=e.components,d=e.ns,u=e.i18n,m=e.t,h=e.shouldUnescape,f=(0,Z.Z)(e,R),x=(0,E.useContext)(F.OO)||{},v=x.i18n,g=x.defaultNS,y=u||v||(0,F.nI)();if(!y)return(0,L.O4)("You will need to pass in an i18next instance by using i18nextReactModule"),n;var j=m||y.t.bind(y)||function(e){return e};a&&(o.context=a);var b=M(M({},(0,F.JP)()),y.options&&y.options.react),O=d||j.ns||g||y.options&&y.options.defaultNS;O="string"===typeof O?[O]:O||["translation"];var w=l||Y(n,b)||b.transEmptyNodeValue||i,k=b.hashTransKey,P=i||(k?k(w):w),N=c?o.interpolation:{interpolation:M(M({},o.interpolation),{},{prefix:"#$?",suffix:"?$#"})},K=M(M(M(M({},o),{},{count:t},c),N),{},{defaultValue:w,ns:O}),S=q(p||n,P?j(P,K):w,y,b,K,h),A=void 0!==r?r:b.defaultTransParent;return A?(0,E.createElement)(A,f,S):S}const Q=(0,h.ZP)("section")(D||(D=(0,m.Z)(["\n  position: relative;\n  padding: 10rem 0 8rem;\n\n  @media only screen and (max-width: 1024px) {\n    padding: 8rem 0 6rem;\n  }\n\n  @media only screen and (max-width: 768px) {\n    padding: 4rem 0 3rem;\n  }\n"]))),X=(0,h.ZP)("p")(H||(H=(0,m.Z)(["\n  margin: 1.5rem 0 2rem 0;\n  white-space: pre-line;\n"]))),ee=(0,h.ZP)("div")(z||(z=(0,m.Z)(["\n  position: relative;\n  max-width: 540px;\n\n  @media only screen and (max-width: 575px) {\n    padding-bottom: 4rem;\n  }\n"]))),ne=(0,h.ZP)("div")(C||(C=(0,m.Z)(["\n  display: flex;\n  justify-content: space-between;\n  max-width: 100%;\n\n  @media screen and (min-width: 1024px) {\n    max-width: 80%;\n  }\n\n  button:last-child {\n    margin-left: 20px;\n  }\n"]))),te=(0,d.Z)()((e=>{let{title:n,content:t,button:r,icon:i,t:a,id:s,image:o}=e;return(0,y.jsx)(Q,{children:(0,y.jsx)(u.pT,{direction:"right",children:(0,y.jsxs)(l.Z,{justify:"space-between",align:"middle",id:s,children:[(0,y.jsx)(p.Z,{lg:11,md:11,sm:11,xs:24,children:(0,y.jsxs)(ee,{children:[(0,y.jsx)("h6",{children:a(n)}),(0,y.jsx)(X,{children:(0,y.jsx)(G,{i18nKey:a(t),components:{1:(0,y.jsx)("br",{})}})}),(0,y.jsx)(ne,{children:"object"===typeof r&&r.map(((e,n)=>(0,y.jsx)(b.z,{color:e.color,fixedWidth:!0,onClick:()=>(e=>{document.getElementById(e).scrollIntoView({behavior:"smooth"})})("about"),children:a(e.title)},n)))})]})}),(0,y.jsx)(p.Z,{lg:11,md:11,sm:12,xs:24,children:(0,y.jsx)("img",{src:o,style:{width:"100%",height:"100%"},alt:"Logo"})})]})})})})),re=e=>"left"===e.type?(0,y.jsx)(j,{...e}):"right"===e.type?(0,y.jsx)(te,{...e}):null},7399:e=>{e.exports={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0}}}]);
//# sourceMappingURL=882.d3ccb90e.chunk.js.map