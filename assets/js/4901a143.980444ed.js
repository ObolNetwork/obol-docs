"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[85816],{95788:(e,t,r)=>{r.d(t,{Iu:()=>l,yg:()=>y});var n=r(11504);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=c(r),g=a,y=p["".concat(u,".").concat(g)]||p[g]||d[g]||o;return r?n.createElement(y,i(i({ref:t},l),{},{components:r})):n.createElement(y,i({ref:t},l))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=g;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},80236:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(45072),a=(r(11504),r(95788));const o={},i="Run a cluster as a group",s={unversionedId:"int/quickstart/group/index",id:"version-v0.17.0/int/quickstart/group/index",title:"Run a cluster as a group",description:"Charon is in an alpha state and should be used with caution according to its Terms of Use.",source:"@site/versioned_docs/version-v0.17.0/int/quickstart/group/index.md",sourceDirName:"int/quickstart/group",slug:"/int/quickstart/group/",permalink:"/docs/v0.17.0/int/quickstart/group/",draft:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.17.0/int/quickstart/group/index.md",tags:[],version:"v0.17.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Deploy the cluster",permalink:"/docs/v0.17.0/int/quickstart/alone/deploy"},next:{title:"Creator & Leader Journey",permalink:"/docs/v0.17.0/int/quickstart/group/quickstart-group-leader-creator"}},u={},c=[],l={toc:c},p="wrapper";function d(e){let{components:t,...r}=e;return(0,a.yg)(p,(0,n.c)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"run-a-cluster-as-a-group"},"Run a cluster as a group"),(0,a.yg)("admonition",{type:"caution"},(0,a.yg)("p",{parentName:"admonition"},"Charon is in an alpha state and should be used with caution according to its ",(0,a.yg)("a",{parentName:"p",href:"https://obol.tech/terms.pdf"},"Terms of Use"),".")),(0,a.yg)("admonition",{type:"info"},(0,a.yg)("p",{parentName:"admonition"},"Running a Distributed Validator with others typically means that several operators run the various nodes of the cluster. In such a case, the key shares should be created with a ",(0,a.yg)("a",{parentName:"p",href:"/docs/v0.17.0/int/key-concepts#distributed-validator-key-generation-ceremony"},"distributed key generation process"),", avoiding the private key being stored in full, anywhere.")),(0,a.yg)("p",null,"There are two sequential user journeys when setting up a DV cluster with others. Each comes with its own quickstart:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"The ",(0,a.yg)("a",{parentName:"li",href:"./group/quickstart-group-leader-creator"},(0,a.yg)("strong",{parentName:"a"},"Creator")," (",(0,a.yg)("strong",{parentName:"a"},"Leader"),") Journey"),", which outlines the steps to propose a Distributed Validator Cluster. ",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"In the ",(0,a.yg)("strong",{parentName:"li"},"Creator")," case, the person creating the cluster ",(0,a.yg)("em",{parentName:"li"},"will NOT")," be a node operator in the cluster."),(0,a.yg)("li",{parentName:"ul"},"In the ",(0,a.yg)("strong",{parentName:"li"},"Leader")," case, the person creating the cluster ",(0,a.yg)("em",{parentName:"li"},"will")," be a node operator in the cluster. ")))),(0,a.yg)("ol",{start:2},(0,a.yg)("li",{parentName:"ol"},"The ",(0,a.yg)("a",{parentName:"li",href:"./group/quickstart-group-operator"},(0,a.yg)("strong",{parentName:"a"},"Operator")," Journey")," which outlines the steps to create a Distributed Validator Cluster proposed by a leader or creator using the above process.")))}d.isMDXComponent=!0}}]);