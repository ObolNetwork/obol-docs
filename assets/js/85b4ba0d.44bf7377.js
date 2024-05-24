"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[39227],{15680:(e,t,r)=>{r.d(t,{xA:()=>d,yg:()=>u});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},g="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),g=p(r),y=a,u=g["".concat(s,".").concat(y)]||g[y]||c[y]||i;return r?n.createElement(u,o(o({ref:t},d),{},{components:r})):n.createElement(u,o({ref:t},d))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=y;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[g]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},15350:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=r(58168),a=(r(96540),r(15680));const i={},o=void 0,l={unversionedId:"sdk/interfaces/BuilderRegistrationMessage",id:"sdk/interfaces/BuilderRegistrationMessage",title:"BuilderRegistrationMessage",description:"Unsigned DV Builder Registration Message",source:"@site/docs/sdk/interfaces/BuilderRegistrationMessage.md",sourceDirName:"sdk/interfaces",slug:"/sdk/interfaces/BuilderRegistrationMessage",permalink:"/docs/next/sdk/interfaces/BuilderRegistrationMessage",draft:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/docs/sdk/interfaces/BuilderRegistrationMessage.md",tags:[],version:"current",frontMatter:{},sidebar:"apiSidebar",previous:{title:"BuilderRegistration",permalink:"/docs/next/sdk/interfaces/BuilderRegistration"},next:{title:"ClusterCreator",permalink:"/docs/next/sdk/interfaces/ClusterCreator"}},s={},p=[{value:"Properties",id:"properties",level:2}],d={toc:p},g="wrapper";function c(e){let{components:t,...r}=e;return(0,a.yg)(g,(0,n.A)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Unsigned DV Builder Registration Message"),(0,a.yg)("h2",{id:"properties"},"Properties"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:"left"},"Property"),(0,a.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,a.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},(0,a.yg)("inlineCode",{parentName:"td"},"fee_recipient")),(0,a.yg)("td",{parentName:"tr",align:"left"},(0,a.yg)("inlineCode",{parentName:"td"},"string")),(0,a.yg)("td",{parentName:"tr",align:"left"},"The DV fee recipient.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},(0,a.yg)("inlineCode",{parentName:"td"},"gas_limit")),(0,a.yg)("td",{parentName:"tr",align:"left"},(0,a.yg)("inlineCode",{parentName:"td"},"number")),(0,a.yg)("td",{parentName:"tr",align:"left"},"Default is 30000000.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},(0,a.yg)("inlineCode",{parentName:"td"},"timestamp")),(0,a.yg)("td",{parentName:"tr",align:"left"},(0,a.yg)("inlineCode",{parentName:"td"},"number")),(0,a.yg)("td",{parentName:"tr",align:"left"},"Timestamp when generating cluster lock file.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},(0,a.yg)("inlineCode",{parentName:"td"},"pubkey")),(0,a.yg)("td",{parentName:"tr",align:"left"},(0,a.yg)("inlineCode",{parentName:"td"},"string")),(0,a.yg)("td",{parentName:"tr",align:"left"},"The public key of the DV.")))))}c.isMDXComponent=!0}}]);