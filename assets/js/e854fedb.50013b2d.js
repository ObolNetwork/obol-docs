"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[48672],{95788:(e,t,r)=>{r.d(t,{Iu:()=>u,yg:()=>m});var n=r(11504);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),y=a,m=p["".concat(c,".").concat(y)]||p[y]||d[y]||o;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=y;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},80740:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(45072),a=(r(11504),r(95788));const o={},i="Quickstart Guides",s={unversionedId:"int/quickstart/index",id:"version-v0.17.0/int/quickstart/index",title:"Quickstart Guides",description:"Charon is in an alpha state and should be used with caution according to its Terms of Use.",source:"@site/versioned_docs/version-v0.17.0/int/quickstart/index.md",sourceDirName:"int/quickstart",slug:"/int/quickstart/",permalink:"/docs/v0.17.0/int/quickstart/",draft:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.17.0/int/quickstart/index.md",tags:[],version:"v0.17.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Key concepts",permalink:"/docs/v0.17.0/int/key-concepts"},next:{title:"Run a test cluster locally",permalink:"/docs/v0.17.0/int/quickstart/alone/test-locally"}},c={},l=[],u={toc:l},p="wrapper";function d(e){let{components:t,...r}=e;return(0,a.yg)(p,(0,n.c)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"quickstart-guides"},"Quickstart Guides"),(0,a.yg)("admonition",{type:"caution"},(0,a.yg)("p",{parentName:"admonition"},"Charon is in an alpha state and should be used with caution according to its ",(0,a.yg)("a",{parentName:"p",href:"https://obol.tech/terms.pdf"},"Terms of Use"),".")),(0,a.yg)("p",null,"There are two ways to set up a distributed validator and each comes with its own quickstart"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("a",{parentName:"p",href:"/docs/v0.17.0/int/quickstart/group/"},"Run a DV cluster as a ",(0,a.yg)("strong",{parentName:"a"},"group")),", where several operators run the nodes that make up the cluster. In this setup, the key shares are created using a distributed key generation process, avoiding the full private keys being stored in full in any one place.\nThis approach can also be used by single operators looking to manage all nodes of a cluster but wanting to create the key shares in a trust-minimised fashion.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("a",{parentName:"p",href:"./quickstart/alone/create-keys"},"Run a DV cluster ",(0,a.yg)("strong",{parentName:"a"},"alone")),", where a single operator runs all the nodes of the DV. Depending on trust assumptions, there is not necessarily the need to create the key shares via a DKG process. Instead the key shares can be created in a centralised manner, and distributed securely to the nodes."))))}d.isMDXComponent=!0}}]);