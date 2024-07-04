"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[73067],{15680:(e,t,r)=>{r.d(t,{xA:()=>d,yg:()=>g});var a=r(96540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=p(r),y=n,g=c["".concat(s,".").concat(y)]||c[y]||u[y]||l;return r?a.createElement(g,o(o({ref:t},d),{},{components:r})):a.createElement(g,o({ref:t},d))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=y;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:n,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}y.displayName="MDXCreateElement"},18380:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=r(58168),n=(r(96540),r(15680));const l={hide_title:!0},o=void 0,i={unversionedId:"sdk/index",id:"version-v0.19.2/sdk/index",title:"index",description:"Obol Logo",source:"@site/versioned_docs/version-v0.19.2/sdk/index.md",sourceDirName:"sdk",slug:"/sdk/",permalink:"/docs/v0.19.2/sdk/",draft:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.19.2/sdk/index.md",tags:[],version:"v0.19.2",frontMatter:{hide_title:!0},sidebar:"apiSidebar",next:{title:"FORK_MAPPING",permalink:"/docs/v0.19.2/sdk/enumerations/FORK_MAPPING"}},s={},p=[{value:"Getting Started",id:"getting-started",level:2},{value:"Enumerations",id:"enumerations",level:2},{value:"Classes",id:"classes",level:2},{value:"Interfaces",id:"interfaces",level:2},{value:"Type Aliases",id:"type-aliases",level:2},{value:"Functions",id:"functions",level:2}],d={toc:p},c="wrapper";function u(e){let{components:t,...r}=e;return(0,n.yg)(c,(0,a.A)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://obol.tech/obolnetwork.png",alt:"Obol Logo"})),(0,n.yg)("h1",{align:"center"},"Obol SDK"),(0,n.yg)("p",null,"This repo contains the Obol Software Development Kit, for creating Distributed Validators with the help of the ",(0,n.yg)("a",{parentName:"p",href:"https://docs.obol.tech/api"},"Obol API"),". "),(0,n.yg)("h2",{id:"getting-started"},"Getting Started"),(0,n.yg)("p",null,"Checkout our ",(0,n.yg)("a",{parentName:"p",href:"https://docs.obol.tech/docs/advanced/quickstart-sdk"},"docs"),", ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/ObolNetwork/obol-sdk-examples/"},"examples"),", and SDK ",(0,n.yg)("a",{parentName:"p",href:"https://obolnetwork.github.io/obol-packages"},"reference"),". Further guides and walkthroughs coming soon."),(0,n.yg)("h2",{id:"enumerations"},"Enumerations"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/v0.19.2/sdk/enumerations/FORK_MAPPING"},"FORK","_","MAPPING"))),(0,n.yg)("h2",{id:"classes"},"Classes"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/v0.19.2/sdk/classes/Client"},"Client"))),(0,n.yg)("h2",{id:"interfaces"},"Interfaces"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/v0.19.2/sdk/interfaces/ClusterDefintion"},"ClusterDefintion"))),(0,n.yg)("h2",{id:"type-aliases"},"Type Aliases"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/v0.19.2/sdk/type-aliases/ClusterOperator"},"ClusterOperator")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/v0.19.2/sdk/type-aliases/OperatorPayload"},"OperatorPayload")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/v0.19.2/sdk/type-aliases/ClusterCreator"},"ClusterCreator")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/v0.19.2/sdk/type-aliases/ClusterValidator"},"ClusterValidator")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/v0.19.2/sdk/type-aliases/ClusterPayload"},"ClusterPayload")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/v0.19.2/sdk/type-aliases/BuilderRegistrationMessage"},"BuilderRegistrationMessage")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/v0.19.2/sdk/type-aliases/BuilderRegistration"},"BuilderRegistration")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/v0.19.2/sdk/type-aliases/DepositData"},"DepositData")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/v0.19.2/sdk/type-aliases/DistributedValidator"},"DistributedValidator")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/v0.19.2/sdk/type-aliases/ClusterLock"},"ClusterLock"))),(0,n.yg)("h2",{id:"functions"},"Functions"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/v0.19.2/sdk/functions/validateClusterLock"},"validateClusterLock"))))}u.isMDXComponent=!0}}]);