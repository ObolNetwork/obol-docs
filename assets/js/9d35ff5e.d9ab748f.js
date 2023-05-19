"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[67262],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(r),h=n,m=p["".concat(s,".").concat(h)]||p[h]||u[h]||o;return r?a.createElement(m,i(i({ref:t},d),{},{components:r})):a.createElement(m,i({ref:t},d))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},90392:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const o={description:"Creating a Distributed Validator cluster from scratch"},i="Distributed validator creation",l={unversionedId:"dv/validator-creation",id:"version-v0.11.0/dv/validator-creation",title:"Distributed validator creation",description:"Creating a Distributed Validator cluster from scratch",source:"@site/versioned_docs/version-v0.11.0/dv/02_validator-creation.md",sourceDirName:"dv",slug:"/dv/validator-creation",permalink:"/docs/v0.11.0/dv/validator-creation",draft:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.11.0/dv/02_validator-creation.md",tags:[],version:"v0.11.0",sidebarPosition:2,frontMatter:{description:"Creating a Distributed Validator cluster from scratch"},sidebar:"tutorialSidebar",previous:{title:"Introducing Charon",permalink:"/docs/v0.11.0/dv/introducing-charon"},next:{title:"Peer discovery",permalink:"/docs/v0.11.0/dv/peer-discovery"}},s={},c=[{value:"Stages of creating a distributed validator",id:"stages-of-creating-a-distributed-validator",level:3}],d={toc:c};function p(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"distributed-validator-creation"},"Distributed validator creation"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"A sample Distributed Validator cluster",src:r(6412).Z,width:"2596",height:"1460"})),(0,n.kt)("h3",{id:"stages-of-creating-a-distributed-validator"},"Stages of creating a distributed validator"),(0,n.kt)("p",null,"To create a distributed validator cluster, you and your group of operators need to complete the following steps:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"One operator begins the cluster setup on the ",(0,n.kt)("a",{parentName:"li",href:"/docs/v0.11.0/dvk/distributed_validator_launchpad"},"Distributed Validator Launchpad"),".",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"This involves setting all of the terms for the cluster, including; withdrawal address, fee recipient, validator count, operator addresses, etc. This information is known as a ",(0,n.kt)("em",{parentName:"li"},"cluster configuration"),"."),(0,n.kt)("li",{parentName:"ul"},"This operator also sets their charon client's Ethereum Node Record (",(0,n.kt)("a",{parentName:"li",href:"/docs/v0.11.0/int/faq/errors#what-is-an-enr"},"ENR"),")."),(0,n.kt)("li",{parentName:"ul"},"This operator signs both the hash of the cluster config and the ENR to prove custody of their address."),(0,n.kt)("li",{parentName:"ul"},"This data is stored in the DV Launchpad data layer and a shareable URL is generated. This is a link for the other operators to join and complete the ceremony."))),(0,n.kt)("li",{parentName:"ol"},"The other operators in the cluster follow this URL to the launchpad.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"They review the terms of the cluster configuration."),(0,n.kt)("li",{parentName:"ul"},"They submit the ENR of their charon client."),(0,n.kt)("li",{parentName:"ul"},"They sign both the hash of the cluster config and their charon ENR to indicate acceptance of the terms."))),(0,n.kt)("li",{parentName:"ol"},"Once all operators have submitted signatures for the cluster configuration and ENRs, they can all download the cluster definition file. "),(0,n.kt)("li",{parentName:"ol"},"Every operator passes this cluster definition file to the ",(0,n.kt)("inlineCode",{parentName:"li"},"charon dkg")," command. The definition provides the charon process with the information it needs to find and complete the DKG ceremony with the other charon clients involved. "),(0,n.kt)("li",{parentName:"ol"},"Once all charon clients can communicate with one another, the DKG process completes. All operators end up with:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"A ",(0,n.kt)("inlineCode",{parentName:"li"},"cluster-lock.json")," file, which contains the original cluster configuration data, combined with the newly generated group public keys and their associated public key shares. This file is needed by the ",(0,n.kt)("inlineCode",{parentName:"li"},"charon run")," command. "),(0,n.kt)("li",{parentName:"ul"},"Validator deposit data"),(0,n.kt)("li",{parentName:"ul"},"Validator private key shares "))),(0,n.kt)("li",{parentName:"ol"},"Operators can now take backups of the generated private key shares, their ENR private key if they have not yet done so, and the ",(0,n.kt)("inlineCode",{parentName:"li"},"cluster-lock.json")," file. "),(0,n.kt)("li",{parentName:"ol"},"All operators load the keys and cluster lockfiles generated in the ceremony, into their staking deployments."),(0,n.kt)("li",{parentName:"ol"},"Operators can run a performance test of the configured cluster to ensure connectivity between all operators at a reasonable latency is observed."),(0,n.kt)("li",{parentName:"ol"},"Once all readiness tests have passed, one operator activates the distributed validator(s) with an on-chain deposit.")))}p.isMDXComponent=!0},6412:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/ObolCluster-0bbe0b53c392ef9fbe6e5e3ef648ef0c.png"}}]);