"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[61727],{15680:(e,t,r)=>{r.d(t,{xA:()=>s,yg:()=>u});var a=r(96540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var d=a.createContext({}),p=function(e){var t=a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},y="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),y=p(r),g=n,u=y["".concat(d,".").concat(g)]||y[g]||c[g]||i;return r?a.createElement(u,o(o({ref:t},s),{},{components:r})):a.createElement(u,o({ref:t},s))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=g;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[y]="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},91111:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=r(58168),n=(r(96540),r(15680));const i={},o=void 0,l={unversionedId:"sdk/type-aliases/DistributedValidator",id:"version-v0.19.2/sdk/type-aliases/DistributedValidator",title:"DistributedValidator",description:"DistributedValidator: Object",source:"@site/versioned_docs/version-v0.19.2/sdk/type-aliases/DistributedValidator.md",sourceDirName:"sdk/type-aliases",slug:"/sdk/type-aliases/DistributedValidator",permalink:"/docs/v0.19.2/sdk/type-aliases/DistributedValidator",draft:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.19.2/sdk/type-aliases/DistributedValidator.md",tags:[],version:"v0.19.2",frontMatter:{},sidebar:"apiSidebar",previous:{title:"DepositData",permalink:"/docs/v0.19.2/sdk/type-aliases/DepositData"},next:{title:"OperatorPayload",permalink:"/docs/v0.19.2/sdk/type-aliases/OperatorPayload"}},d={},p=[{value:"Type declaration",id:"type-declaration",level:2},{value:"Source",id:"source",level:2}],s={toc:p},y="wrapper";function c(e){let{components:t,...r}=e;return(0,n.yg)(y,(0,a.A)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},(0,n.yg)("strong",{parentName:"p"},"DistributedValidator"),": ",(0,n.yg)("inlineCode",{parentName:"p"},"Object"))),(0,n.yg)("p",null,"Required deposit data for validator activation"),(0,n.yg)("h2",{id:"type-declaration"},"Type declaration"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Member"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"distributed_public_key")),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"string")),(0,n.yg)("td",{parentName:"tr",align:"left"},"The public key of the distributed validator.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"public_shares")),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"string"),"[]"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The public key of the node distributed validator share.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"deposit_data")),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"Partial"),"< ",(0,n.yg)("a",{parentName:"td",href:"/docs/v0.19.2/sdk/type-aliases/DepositData"},(0,n.yg)("inlineCode",{parentName:"a"},"DepositData"))," ",">"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The required deposit data for activating the DV.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"builder_registration")),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"/docs/v0.19.2/sdk/type-aliases/BuilderRegistration"},(0,n.yg)("inlineCode",{parentName:"a"},"BuilderRegistration"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"pre-generated signed validator builder registration to be sent to builder network.")))),(0,n.yg)("h2",{id:"source"},"Source"),(0,n.yg)("p",null,"types.ts:176"))}c.isMDXComponent=!0}}]);