"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[68822],{15680:(e,t,i)=>{i.d(t,{xA:()=>c,yg:()=>y});var a=i(96540);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,a,r=function(e,t){if(null==e)return{};var i,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)i=n[a],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)i=n[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var i=e.components,r=e.mdxType,n=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(i),g=r,y=u["".concat(s,".").concat(g)]||u[g]||p[g]||n;return i?a.createElement(y,o(o({ref:t},c),{},{components:i})):a.createElement(y,o({ref:t},c))}));function y(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=i.length,o=new Array(n);o[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var d=2;d<n;d++)o[d]=i[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,i)}g.displayName="MDXCreateElement"},2369:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>n,metadata:()=>l,toc:()=>d});var a=i(58168),r=(i(96540),i(15680));const n={sidebar_position:2,description:"Some of the key terms in the field of Distributed Validator Technology"},o="Key concepts",l={unversionedId:"int/key-concepts",id:"version-v1.0.0/int/key-concepts",title:"Key concepts",description:"Some of the key terms in the field of Distributed Validator Technology",source:"@site/versioned_docs/version-v1.0.0/int/key-concepts.md",sourceDirName:"int",slug:"/int/key-concepts",permalink:"/docs/int/key-concepts",draft:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v1.0.0/int/key-concepts.md",tags:[],version:"v1.0.0",sidebarPosition:2,frontMatter:{sidebar_position:2,description:"Some of the key terms in the field of Distributed Validator Technology"},sidebar:"tutorialSidebar",previous:{title:"Overview of Obol",permalink:"/docs/int/Overview"},next:{title:"Quickstart Overview",permalink:"/docs/start/quickstart_overview"}},s={},d=[{value:"Distributed validator",id:"distributed-validator",level:2},{value:"Distributed Validator Node",id:"distributed-validator-node",level:2},{value:"Execution Client",id:"execution-client",level:3},{value:"Consensus Client",id:"consensus-client",level:3},{value:"Distributed Validator Client",id:"distributed-validator-client",level:3},{value:"Validator Client",id:"validator-client",level:3},{value:"Distributed Validator Cluster",id:"distributed-validator-cluster",level:2},{value:"Distributed Validator Key",id:"distributed-validator-key",level:3},{value:"Distributed Validator Key Share",id:"distributed-validator-key-share",level:3},{value:"Distributed Validator Threshold",id:"distributed-validator-threshold",level:3},{value:"Distributed Validator Key Generation Ceremony",id:"distributed-validator-key-generation-ceremony",level:3}],c={toc:d},u="wrapper";function p(e){let{components:t,...n}=e;return(0,r.yg)(u,(0,a.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"key-concepts"},"Key concepts"),(0,r.yg)("p",null,"This page outlines a number of the key concepts behind the various technologies that Obol is developing."),(0,r.yg)("h2",{id:"distributed-validator"},"Distributed validator"),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"A Distributed Validator",src:i(717).A,width:"1200",height:"630"})),(0,r.yg)("p",null,"A distributed validator is an Ethereum proof-of-stake validator that runs on more than one node/machine. This functionality is possible with the use of ",(0,r.yg)("strong",{parentName:"p"},"Distributed Validator Technology")," (DVT)."),(0,r.yg)("p",null,"Distributed validator technology removes some of the single points of failure in validation. Should <33% of the participating nodes in a DV cluster go offline, the remaining active nodes can still come to consensus on what to sign and can produce valid signatures for their staking duties. This is known as Active/Active redundancy, a common pattern for minimizing downtime in mission critical systems.\n\u200b"),(0,r.yg)("h2",{id:"distributed-validator-node"},"Distributed Validator Node"),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"A Distributed Validator Node",src:i(73343).A,width:"1200",height:"630"})),(0,r.yg)("p",null,"A distributed validator node is the set of clients an operator needs to configure and run to fulfil the duties of a Distributed Validator Operator. An operator may also run redundant execution and consensus clients, an execution payload relayer like ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/flashbots/mev-boost"},"mev-boost"),", or other monitoring or telemetry services on the same hardware to ensure optimal performance."),(0,r.yg)("p",null,"In the above example, the stack includes Geth, Lighthouse, Charon and Teku."),(0,r.yg)("h3",{id:"execution-client"},"Execution Client"),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"A Geth Client",src:i(89527).A,width:"1200",height:"630"})),(0,r.yg)("p",null,"An execution client (formerly known as an Eth1 client) specializes in running the EVM and managing the transaction pool for the Ethereum network. These clients provide execution payloads to consensus clients for inclusion into blocks."),(0,r.yg)("p",null,"Examples of execution clients include:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://geth.ethereum.org/"},"Go-Ethereum")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://docs.nethermind.io/"},"Nethermind")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/ledgerwatch/erigon"},"Erigon"))),(0,r.yg)("h3",{id:"consensus-client"},"Consensus Client"),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"A Geth Client",src:i(77778).A,width:"1200",height:"630"})),(0,r.yg)("p",null,"A consensus client's duty is to run the proof of stake consensus layer of Ethereum, often referred to as the beacon chain."),(0,r.yg)("p",null,"Examples of Consensus clients include:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://docs.prylabs.network/docs/how-prysm-works/beacon-node"},"Prysm")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://docs.teku.consensys.net/en/stable/"},"Teku")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://lighthouse-book.sigmaprime.io/api-bn.html"},"Lighthouse")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://nimbus.guide/"},"Nimbus")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/ChainSafe/lodestar"},"Lodestar"))),(0,r.yg)("h3",{id:"distributed-validator-client"},"Distributed Validator Client"),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"A Charon Client",src:i(44831).A,width:"1200",height:"630"})),(0,r.yg)("p",null,"A distributed validator client intercepts the validator client \u2194 consensus client communication flow over the ",(0,r.yg)("a",{parentName:"p",href:"https://ethereum.github.io/beacon-APIs/#/ValidatorRequiredApi"},"standardised REST API"),", and focuses on two core duties:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Coming to consensus on a candidate duty for all validators to sign."),(0,r.yg)("li",{parentName:"ul"},"Combining signatures from all validators into a distributed validator signature.")),(0,r.yg)("p",null,"The only example of a distributed validator client built with a non-custodial middleware architecture to date is ",(0,r.yg)("a",{parentName:"p",href:"../charon/intro"},"Charon"),"."),(0,r.yg)("h3",{id:"validator-client"},"Validator Client"),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"A Lighthouse Client",src:i(73432).A,width:"1200",height:"630"})),(0,r.yg)("p",null,"A validator client is a piece of code that operates one or more Ethereum validators."),(0,r.yg)("p",null,"Examples of validator clients include:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://www.attestant.io/posts/introducing-vouch/"},"Vouch")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://docs.prylabs.network/docs/how-prysm-works/prysm-validator-client/"},"Prysm")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://docs.teku.consensys.net/en/stable/"},"Teku")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://lighthouse-book.sigmaprime.io/api-vc.html"},"Lighthouse"))),(0,r.yg)("h2",{id:"distributed-validator-cluster"},"Distributed Validator Cluster"),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"A Distributed Validator Cluster",src:i(56629).A,width:"1200",height:"630"})),(0,r.yg)("p",null,"A distributed validator cluster is a collection of distributed validator nodes connected together to service a set of distributed validators generated during a DVK ceremony."),(0,r.yg)("h3",{id:"distributed-validator-key"},"Distributed Validator Key"),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"A Distributed Validator Key",src:i(87011).A,width:"1200",height:"630"})),(0,r.yg)("p",null,"A distributed validator key is a group of BLS private keys, that together operate as a threshold key for participating in proof of stake consensus."),(0,r.yg)("h3",{id:"distributed-validator-key-share"},"Distributed Validator Key Share"),(0,r.yg)("p",null,"One piece of the distributed validator private key."),(0,r.yg)("h3",{id:"distributed-validator-threshold"},"Distributed Validator Threshold"),(0,r.yg)("p",null,"The number of nodes in a cluster that needs to be online and honest for their distributed validators to be online is outlined in the following table."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},"Cluster Size"),(0,r.yg)("th",{parentName:"tr",align:"center"},"Threshold"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Note"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"4"),(0,r.yg)("td",{parentName:"tr",align:"center"},"3/4"),(0,r.yg)("td",{parentName:"tr",align:"left"},"Minimum threshold")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"5"),(0,r.yg)("td",{parentName:"tr",align:"center"},"4/5"),(0,r.yg)("td",{parentName:"tr",align:"left"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"6"),(0,r.yg)("td",{parentName:"tr",align:"center"},"4/6"),(0,r.yg)("td",{parentName:"tr",align:"left"},"Minimum to tolerate two offline nodes")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"7"),(0,r.yg)("td",{parentName:"tr",align:"center"},"5/7"),(0,r.yg)("td",{parentName:"tr",align:"left"},"Minimum to tolerate two ",(0,r.yg)("strong",{parentName:"td"},"malicious")," nodes")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"8"),(0,r.yg)("td",{parentName:"tr",align:"center"},"6/8"),(0,r.yg)("td",{parentName:"tr",align:"left"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"9"),(0,r.yg)("td",{parentName:"tr",align:"center"},"6/9"),(0,r.yg)("td",{parentName:"tr",align:"left"},"Minimum to tolerate three offline nodes")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"10"),(0,r.yg)("td",{parentName:"tr",align:"center"},"7/10"),(0,r.yg)("td",{parentName:"tr",align:"left"},"Minimum to tolerate three ",(0,r.yg)("strong",{parentName:"td"},"malicious")," nodes")))),(0,r.yg)("h3",{id:"distributed-validator-key-generation-ceremony"},"Distributed Validator Key Generation Ceremony"),(0,r.yg)("p",null,"To achieve fault tolerance in a distributed validator, the individual private key shares need to be generated together. Rather than have a trusted dealer produce a private key, split it and distribute it, the preferred approach is to never construct the full private key at any point, by having each operator in the distributed validator cluster participate in what is known as a Distributed Key Generation ceremony."),(0,r.yg)("p",null,"A distributed validator key generation ceremony is a type of DKG ceremony. A ceremony produces signed validator deposit and exit data, along with all of the validator key shares and their associated metadata. Read more about these ceremonies ",(0,r.yg)("a",{parentName:"p",href:"../charon/dkg"},"here"),"."))}p.isMDXComponent=!0},717:(e,t,i)=>{i.d(t,{A:()=>a});const a=i.p+"assets/images/32Eth-cb753aaa3c05ea0dfd8f3931560e8dbc.png"},44831:(e,t,i)=>{i.d(t,{A:()=>a});const a=i.p+"assets/images/CharonBrick-b3dd387a297ec185950d68f3926df674.png"},56629:(e,t,i)=>{i.d(t,{A:()=>a});const a=i.p+"assets/images/DVCluster-d161355b3dfd1808a86148c8fe28271e.png"},73343:(e,t,i)=>{i.d(t,{A:()=>a});const a=i.p+"assets/images/DVNode-198d4144347989babb813893bbd5e19d.png"},77778:(e,t,i)=>{i.d(t,{A:()=>a});const a=i.p+"assets/images/POSClient-79b14193fccdf5ddecfa407e6d6da782.png"},89527:(e,t,i)=>{i.d(t,{A:()=>a});const a=i.p+"assets/images/POWNodeV2-466e5d9b230f25737437ca8ca8ec1231.png"},87011:(e,t,i)=>{i.d(t,{A:()=>a});const a=i.p+"assets/images/ThresholdSigning-c5c0f9d305f9438c8ff5dc7f3e7d0eab.png"},73432:(e,t,i)=>{i.d(t,{A:()=>a});const a=i.p+"assets/images/ValidatorBrick-16d3ee183477cc43cc4c620178ed900d.png"}}]);