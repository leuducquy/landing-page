"use strict";(self.webpackChunklanding_page=self.webpackChunklanding_page||[]).push([[281],{6281:function(e,n,t){t.r(n),t.d(n,{default:function(){return b}});var r,i,o,a=t(605),c=t(9603),s=t(4720),u=t(383),f=t(5224),d=t(168),l=t(4313),p=(0,l.ZP)("section")(r||(r=(0,d.Z)(["\n  position: relative;\n  padding: 7.5rem 0 3rem;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n\n  @media screen and (max-width: 1024px) {\n    padding: 5.5rem 0 3rem;\n  }\n"]))),g=(0,l.ZP)("p")(i||(i=(0,d.Z)(["\n  padding: 0.75rem 0 0.75rem;\n"]))),h=(0,l.ZP)("div")(o||(o=(0,d.Z)(["\n  max-width: 570px;\n\n  @media only screen and (max-width: 768px) {\n    max-width: 100%;\n  }\n"]))),y=t(184),b=(0,s.Z)()((function(e){var n=e.title,t=e.content,r=e.content1,i=e.button;e.t;return(0,y.jsx)(p,{children:(0,y.jsx)(u.Mi,{direction:"up",children:(0,y.jsx)(a.Z,{justify:"center",align:"middle",children:(0,y.jsx)(h,{children:(0,y.jsxs)(c.Z,{lg:24,md:24,sm:24,xs:24,children:[(0,y.jsx)("h6",{children:n}),(0,y.jsx)(g,{children:t}),(0,y.jsx)(g,{children:r}),i&&(0,y.jsx)(f.z,{name:"submit",onClick:function(){return e="mission",void document.getElementById(e).scrollIntoView({behavior:"smooth"});var e},children:i})]})})})})})}))},4720:function(e,n,t){t.d(n,{Z:function(){return m}});var r=t(4942),i=t(9439),o=t(5987),a=t(2791),c=t(8589);function s(){if(console&&console.warn){for(var e,n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];"string"===typeof t[0]&&(t[0]="react-i18next:: ".concat(t[0])),(e=console).warn.apply(e,t)}}var u={};function f(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];"string"===typeof n[0]&&u[n[0]]||("string"===typeof n[0]&&(u[n[0]]=new Date),s.apply(void 0,n))}function d(e,n,t){e.loadNamespaces(n,(function(){if(e.isInitialized)t();else{e.on("initialized",(function n(){setTimeout((function(){e.off("initialized",n)}),0),t()}))}}))}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var g=function(e,n){var t=(0,a.useRef)();return(0,a.useEffect)((function(){t.current=n?t.current:e}),[e,n]),t.current};function h(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.i18n,r=(0,a.useContext)(c.OO)||{},o=r.i18n,s=r.defaultNS,u=t||o||(0,c.nI)();if(u&&!u.reportNamespaces&&(u.reportNamespaces=new c.zv),!u){f("You will need to pass in an i18next instance by using initReactI18next");var l=function(e){return Array.isArray(e)?e[e.length-1]:e},h=[l,{},!1];return h.t=l,h.i18n={},h.ready=!1,h}u.options.react&&void 0!==u.options.react.wait&&f("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var y=p(p(p({},(0,c.JP)()),u.options.react),n),b=y.useSuspense,v=y.keyPrefix,m=e||s||u.options&&u.options.defaultNS;m="string"===typeof m?[m]:m||["translation"],u.reportNamespaces.addUsedNamespaces&&u.reportNamespaces.addUsedNamespaces(m);var w=(u.isInitialized||u.initializedStoreOnce)&&m.every((function(e){return function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return n.languages&&n.languages.length?void 0!==n.options.ignoreJSONStructure?n.hasLoadedNamespace(e,{precheck:function(n,r){if(t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&n.services.backendConnector.backend&&n.isLanguageChangingTo&&!r(n.isLanguageChangingTo,e))return!1}}):function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.languages[0],i=!!n.options&&n.options.fallbackLng,o=n.languages[n.languages.length-1];if("cimode"===r.toLowerCase())return!0;var a=function(e,t){var r=n.services.backendConnector.state["".concat(e,"|").concat(t)];return-1===r||2===r};return!(t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&n.services.backendConnector.backend&&n.isLanguageChangingTo&&!a(n.isLanguageChangingTo,e))&&(!!n.hasResourceBundle(r,e)||!(n.services.backendConnector.backend&&(!n.options.resources||n.options.partialBundledLanguages))||!(!a(r,e)||i&&!a(o,e)))}(e,n,t):(f("i18n.languages were undefined or empty",n.languages),!0)}(e,u,y)}));function O(){return u.getFixedT(null,"fallback"===y.nsMode?m:m[0],v)}var j=(0,a.useState)(O),x=(0,i.Z)(j,2),P=x[0],k=x[1],C=m.join(),Z=g(C),I=(0,a.useRef)(!0);(0,a.useEffect)((function(){var e=y.bindI18n,n=y.bindI18nStore;function t(){I.current&&k(O)}return I.current=!0,w||b||d(u,m,(function(){I.current&&k(O)})),w&&Z&&Z!==C&&I.current&&k(O),e&&u&&u.on(e,t),n&&u&&u.store.on(n,t),function(){I.current=!1,e&&u&&e.split(" ").forEach((function(e){return u.off(e,t)})),n&&u&&n.split(" ").forEach((function(e){return u.store.off(e,t)}))}}),[u,C]);var R=(0,a.useRef)(!0);(0,a.useEffect)((function(){I.current&&!R.current&&k(O),R.current=!1}),[u,v]);var N=[P,u,w];if(N.t=P,N.i18n=u,N.ready=w,w)return N;if(!w&&!b)return N;throw new Promise((function(e){d(u,m,(function(){e()}))}))}var y=["forwardedRef"];function b(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function v(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?b(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function m(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function(t){function r(r){var c=r.forwardedRef,s=(0,o.Z)(r,y),u=h(e,v(v({},s),{},{keyPrefix:n.keyPrefix})),f=(0,i.Z)(u,3),d=f[0],l=f[1],p=f[2],g=v(v({},s),{},{t:d,i18n:l,tReady:p});return n.withRef&&c?g.ref=c:!n.withRef&&c&&(g.forwardedRef=c),(0,a.createElement)(t,g)}var c;r.displayName="withI18nextTranslation(".concat((c=t).displayName||c.name||("string"===typeof c&&c.length>0?c:"Unknown"),")"),r.WrappedComponent=t;return n.withRef?(0,a.forwardRef)((function(e,n){return(0,a.createElement)(r,Object.assign({},e,{forwardedRef:n}))})):r}}}}]);
//# sourceMappingURL=281.544dc068.chunk.js.map