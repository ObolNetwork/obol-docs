"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[35904],{95788:(e,t,r)=>{r.d(t,{Iu:()=>u,yg:()=>v});var a=r(11504);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),l=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),y=n,v=p["".concat(c,".").concat(y)]||p[y]||d[y]||o;return r?a.createElement(v,i(i({ref:t},u),{},{components:r})):a.createElement(v,i({ref:t},u))}));function v(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=y;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}y.displayName="MDXCreateElement"},59268:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=r(45072),n=(r(11504),r(95788));const o={sidebar_position:1,description:"Quickstart Overview"},i="Quickstart Overview",s={unversionedId:"start/quickstart_overview",id:"version-v0.19.1/start/quickstart_overview",title:"Quickstart Overview",description:"Quickstart Overview",source:"@site/versioned_docs/version-v0.19.1/start/quickstart_overview.md",sourceDirName:"start",slug:"/start/quickstart_overview",permalink:"/docs/start/quickstart_overview",draft:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.19.1/start/quickstart_overview.md",tags:[],version:"v0.19.1",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"Quickstart Overview"},sidebar:"tutorialSidebar",previous:{title:"Handling DKG failure",permalink:"/docs/int/faq/dkg_failure"},next:{title:"Create a DV alone",permalink:"/docs/start/quickstart_alone"}},c={},l=[{value:"Need assistance?",id:"need-assistance",level:2}],u={toc:l},p="wrapper";function d(e){let{components:t,...r}=e;return(0,n.yg)(p,(0,a.c)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"quickstart-overview"},"Quickstart Overview"),(0,n.yg)("p",null,"The quickstart guides are aimed at developers and stakers looking to utilize Distributed Validators for solo or multi-operator staking. To contribute to this documentation, head over to our ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/ObolNetwork/obol-docs"},"Github repository")," and file a pull request."),(0,n.yg)("p",null,'There are two ways to set up a distributed validator and each comes with its own quickstart, within the "Getting Started" section:'),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Run a DV cluster as a ",(0,n.yg)("a",{parentName:"p",href:"/docs/start/quickstart_group"},(0,n.yg)("strong",{parentName:"a"},"group")),", where several operators run the nodes that make up the cluster. In this setup, the key shares are created using a distributed key generation process, avoiding the full private keys being stored in full in any one place.\nThis approach can also be used by single operators looking to manage all nodes of a cluster but wanting to create the key shares in a trust-minimised fashion.")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Run a DV cluster ",(0,n.yg)("a",{parentName:"p",href:"/docs/start/quickstart_alone"},(0,n.yg)("strong",{parentName:"a"},"alone")),", where a single operator runs all the nodes of the DV. Depending on trust assumptions, there is not necessarily the need to create the key shares via a DKG process. Instead the key shares can be created in a centralised manner, and distributed securely to the nodes."))),(0,n.yg)("h2",{id:"need-assistance"},"Need assistance?"),(0,n.yg)("p",null,"If you have any questions about this documentation or are experiencing technical problems with any Obol-related projects, head on over to our ",(0,n.yg)("a",{parentName:"p",href:"https://discord.gg/n6ebKsX46w"},"Discord")," where a member of our team or the community will be happy to assist you."))}d.isMDXComponent=!0}}]);