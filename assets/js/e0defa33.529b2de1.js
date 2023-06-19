"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[91105],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},h=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),c=d(n),u=r,m=c["".concat(l,".").concat(u)]||c[u]||p[u]||o;return n?a.createElement(m,i(i({ref:t},h),{},{components:n})):a.createElement(m,i({ref:t},h))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},63166:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const o={description:"Charon - The Distributed Validator Client",sidebar_position:1},i="Introduction",s={unversionedId:"charon/intro",id:"version-v0.16.0/charon/intro",title:"Introduction",description:"Charon - The Distributed Validator Client",source:"@site/versioned_docs/version-v0.16.0/charon/intro.md",sourceDirName:"charon",slug:"/charon/intro",permalink:"/docs/charon/intro",draft:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.16.0/charon/intro.md",tags:[],version:"v0.16.0",sidebarPosition:1,frontMatter:{description:"Charon - The Distributed Validator Client",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Centralization risks and mitigation",permalink:"/docs/int/faq/risks"},next:{title:"Distributed Key Generation",permalink:"/docs/charon/dkg"}},l={},d=[{value:"What is Charon?",id:"what-is-charon",level:2},{value:"Charon Architecture",id:"charon-architecture",level:2},{value:"Determine <strong>when</strong> duties need to be performed",id:"determine-when-duties-need-to-be-performed",level:3},{value:"Fetch and come to consensus on <strong>what</strong> data to sign",id:"fetch-and-come-to-consensus-on-what-data-to-sign",level:3},{value:"<strong>Wait</strong> for the VC to sign",id:"wait-for-the-vc-to-sign",level:3},{value:"<strong>Share</strong> partial signatures",id:"share-partial-signatures",level:3},{value:"<strong>Threshold Aggregate</strong> partial signatures",id:"threshold-aggregate-partial-signatures",level:3},{value:"<strong>Broadcast</strong> final signature",id:"broadcast-final-signature",level:3},{value:"Ports",id:"ports",level:3},{value:"Getting started",id:"getting-started",level:2}],h={toc:d};function c(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"This section introduces and outlines the Charon ",(0,r.kt)("em",{parentName:"p"},"[kharon]")," middleware, Obol's implementation of DVT. Please see the ",(0,r.kt)("a",{parentName:"p",href:"/docs/int/key-concepts"},"key concepts")," section as background and context."),(0,r.kt)("h2",{id:"what-is-charon"},"What is Charon?"),(0,r.kt)("p",null,"Charon is a GoLang-based, HTTP middleware built by Obol to enable any existing Ethereum validator clients to operate together as part of a distributed validator."),(0,r.kt)("p",null,"Charon sits as a middleware between a normal validating client and its connected beacon node, intercepting and proxying API traffic. Multiple Charon clients are configured to communicate together to come to consensus on validator duties and behave as a single unified proof-of-stake validator together. The nodes form a cluster that is ",(0,r.kt)("em",{parentName:"p"},"byzantine-fault tolerant")," and continues to progress assuming a supermajority of working/honest nodes is met."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Charon Cluster",src:n(74837).Z,width:"1200",height:"630"})),(0,r.kt)("h2",{id:"charon-architecture"},"Charon Architecture"),(0,r.kt)("p",null,"Charon is an Ethereum proof of stake distributed validator (DV) client. Like any validator client, its main purpose is to perform validation duties for the Beacon Chain, primarily attestations and block proposals. The beacon client handles a lot of the heavy lifting, leaving the validator client to focus on fetching duty data, signing that data, and submitting it back to the beacon client."),(0,r.kt)("p",null,"Charon is designed as a generic event-driven workflow with different components coordinating to perform validation duties. All duties follow the same flow, the only difference being the signed data. The workflow can be divided into phases consisting of one or more components:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Charon Workflow",src:n(76938).Z,width:"455",height:"540"})),(0,r.kt)("h3",{id:"determine-when-duties-need-to-be-performed"},"Determine ",(0,r.kt)("strong",{parentName:"h3"},"when")," duties need to be performed"),(0,r.kt)("p",null,"The beacon chain is divided into ",(0,r.kt)("a",{parentName:"p",href:"https://eth2book.info/bellatrix/part3/config/types/#slot"},"slots")," and ",(0,r.kt)("a",{parentName:"p",href:"https://eth2book.info/bellatrix/part3/config/types/#epoch"},"epochs"),", which divides it into deterministically fixed-size time chunks.\nThe first step is to determine when (which slot/epoch) duties need to be performed. This is done by the ",(0,r.kt)("inlineCode",{parentName:"p"},"scheduler")," component.\nIt queries the beacon node to detect which validators defined in the cluster lock are active, and what duties they need to perform for\nthe upcoming epoch and slots. When such a slot starts, the ",(0,r.kt)("inlineCode",{parentName:"p"},"scheduler")," emits an event indicating which validator needs to perform what duty."),(0,r.kt)("h3",{id:"fetch-and-come-to-consensus-on-what-data-to-sign"},"Fetch and come to consensus on ",(0,r.kt)("strong",{parentName:"h3"},"what")," data to sign"),(0,r.kt)("p",null,"A DV cluster consists of multiple operators each provided with one of the M-of-N threshold BLS private key shares per validator.\nThe key shares are imported into the validator clients which produce partial signatures.\nCharon threshold aggregates these partial signatures before broadcasting them to the Beacon Chain.\n",(0,r.kt)("em",{parentName:"p"},"But to threshold aggregate partial signatures, each validator must sign the same data."),"\nThe cluster must therefore coordinate and come to a consensus on what data to sign."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Fetcher")," fetches the unsigned duty data from the beacon node upon receiving an event from ",(0,r.kt)("inlineCode",{parentName:"p"},"Scheduler"),".",(0,r.kt)("br",{parentName:"p"}),"\n","For attestations, this is the unsigned attestation, for block proposals, this is the unsigned block."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Consensus")," component listens to events from Fetcher and starts a ",(0,r.kt)("a",{parentName:"p",href:"https://docs.goquorum.consensys.net/configure-and-manage/configure/consensus-protocols/qbft/"},"QBFT")," consensus game with the other\nCharon nodes in the cluster for that specific duty and slot.\nWhen consensus is reached, the resulting unsigned duty data is stored in the ",(0,r.kt)("inlineCode",{parentName:"p"},"DutyDB"),"."),(0,r.kt)("h3",{id:"wait-for-the-vc-to-sign"},(0,r.kt)("strong",{parentName:"h3"},"Wait")," for the VC to sign"),(0,r.kt)("p",null,"Charon is a ",(0,r.kt)("strong",{parentName:"p"},"middleware")," distributed validator client. That means Charon doesn\u2019t have access to the\nvalidator private key shares and cannot sign anything on demand.\nInstead, operators import the key shares into industry-standard validator clients (VC)\nthat are configured to connect to their local Charon client instead of their local Beacon node directly."),(0,r.kt)("p",null,"Charon, therefore, serves the ",(0,r.kt)("a",{parentName:"p",href:"https://ethereum.github.io/beacon-APIs/#/"},"Ethereum Beacon Node API")," from the ",(0,r.kt)("inlineCode",{parentName:"p"},"ValidatorAPI")," component and\nintercepts some endpoints while proxying other endpoints directly to the upstream Beacon node."),(0,r.kt)("p",null,"The VC queries the ",(0,r.kt)("inlineCode",{parentName:"p"},"ValidatorAPI")," for unsigned data which is retrieved from the ",(0,r.kt)("inlineCode",{parentName:"p"},"DutyDB"),". It then signs it and submits it\nback to the ",(0,r.kt)("inlineCode",{parentName:"p"},"ValidatorAPI")," which stores it in the ",(0,r.kt)("inlineCode",{parentName:"p"},"PartialSignatureDB"),"."),(0,r.kt)("h3",{id:"share-partial-signatures"},(0,r.kt)("strong",{parentName:"h3"},"Share")," partial signatures"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"PartialSignatureDB")," stores the partially signed data submitted by the local Charon client\u2019s VC.\nBut it also stores all the partial signatures submitted by the VCs of other peers in the cluster.\nThis is achieved by the ",(0,r.kt)("inlineCode",{parentName:"p"},"PartialSignatureExchange")," component that exchanges partial signatures between all peers in the cluster.\nAll charon clients, therefore, store all partial signatures the cluster generates."),(0,r.kt)("h3",{id:"threshold-aggregate-partial-signatures"},(0,r.kt)("strong",{parentName:"h3"},"Threshold Aggregate")," partial signatures"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"SignatureAggregator")," is invoked as soon as sufficient (any M of N) partial signatures are stored in the ",(0,r.kt)("inlineCode",{parentName:"p"},"PartialSignatureDB"),".\nIt performs BLS threshold aggregation of the partial signatures resulting in a final signature that is valid for the beacon chain."),(0,r.kt)("h3",{id:"broadcast-final-signature"},(0,r.kt)("strong",{parentName:"h3"},"Broadcast")," final signature"),(0,r.kt)("p",null,"Finally, the ",(0,r.kt)("inlineCode",{parentName:"p"},"Broadcaster")," component broadcasts the final threshold aggregated signature to the Beacon client, thereby completing the duty."),(0,r.kt)("h3",{id:"ports"},"Ports"),(0,r.kt)("p",null,"The following is an outline of the services that can be exposed by charon."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},":3600")," - The validator REST API. This is the port that serves the consensus layer's ",(0,r.kt)("a",{parentName:"p",href:"https://ethereum.github.io/beacon-APIs/"},"beacon node API"),". This is the port validator clients should talk to instead of their standard consensus client REST API port. Charon subsequently proxies these requests to the upstream consensus client specified by ",(0,r.kt)("inlineCode",{parentName:"p"},"--beacon-node-endpoints"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},":3610")," - Charon P2P port. This is the port that charon clients use to communicate with one another via TCP. This endpoint should be port-forwarded on your router and exposed publicly, preferably on a static IP address. This IP address should then be set on the charon run command with ",(0,r.kt)("inlineCode",{parentName:"p"},"--p2p-external-ip")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"CHARON_P2P_EXTERNAL_IP"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},":3620")," - Monitoring port. This port hosts a webserver that serves prometheus metrics on ",(0,r.kt)("inlineCode",{parentName:"p"},"/metrics"),", a readiness endpoint on ",(0,r.kt)("inlineCode",{parentName:"p"},"/readyz")," and a liveness endpoint on ",(0,r.kt)("inlineCode",{parentName:"p"},"/livez"),", and a pprof server on ",(0,r.kt)("inlineCode",{parentName:"p"},"/debug/pprof"),". This port should not be exposed publicly."))),(0,r.kt)("h2",{id:"getting-started"},"Getting started"),(0,r.kt)("p",null,"For more information on running charon, take a look at our ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/int/quickstart/"},"Quickstart Guides"),"."))}c.isMDXComponent=!0},74837:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/DVCluster-d161355b3dfd1808a86148c8fe28271e.png"},76938:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/workflow-de4700cb1dd4e2adf00f90bf14a2dd3a.jpg"}}]);