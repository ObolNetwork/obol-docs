"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[94383],{26985:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var n=i(74848),r=i(28453);const s={sidebar_position:3,description:"Some of the key terms in the field of Distributed Validator Technology"},o="Key concepts",a={id:"int/key-concepts",title:"Key concepts",description:"Some of the key terms in the field of Distributed Validator Technology",source:"@site/versioned_docs/version-v0.4.0/int/key-concepts.md",sourceDirName:"int",slug:"/int/key-concepts",permalink:"/docs/v0.4.0/int/key-concepts",draft:!1,unlisted:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.4.0/int/key-concepts.md",tags:[],version:"v0.4.0",sidebarPosition:3,frontMatter:{sidebar_position:3,description:"Some of the key terms in the field of Distributed Validator Technology"},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/v0.4.0/int/Overview"},next:{title:"Working groups",permalink:"/docs/v0.4.0/int/working-groups"}},d={},l=[{value:"Distributed validator",id:"distributed-validator",level:2},{value:"Distributed Validator Node",id:"distributed-validator-node",level:2},{value:"Execution Client",id:"execution-client",level:3},{value:"Consensus Client",id:"consensus-client",level:3},{value:"Distributed Validator Client",id:"distributed-validator-client",level:3},{value:"Validator Client",id:"validator-client",level:3},{value:"Distributed Validator Cluster",id:"distributed-validator-cluster",level:2},{value:"Distributed Validator Key",id:"distributed-validator-key",level:3},{value:"Distributed Validator Key Share",id:"distributed-validator-key-share",level:3},{value:"Distributed Validator Key Generation Ceremony",id:"distributed-validator-key-generation-ceremony",level:3}];function c(e){const t={a:"a",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"key-concepts",children:"Key concepts"})}),"\n",(0,n.jsx)(t.p,{children:"This page outlines a number of the key concepts behind the various technologies that Obol is developing."}),"\n",(0,n.jsx)(t.h2,{id:"distributed-validator",children:"Distributed validator"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"A Distributed Validator",src:i(79049).A+"",width:"960",height:"540"})}),"\n",(0,n.jsxs)(t.p,{children:["A distributed validator is an Ethereum proof-of-stake validator that runs on more than one node/machine. This functionality is provided by ",(0,n.jsx)(t.strong,{children:"Distributed Validator Technology"})," (DVT)."]}),"\n",(0,n.jsx)(t.p,{children:"Distributed validator technology removes the problem of single-point failure. Should <33% of the participating nodes in the DVT cluster go offline, the remaining active nodes are still able to come to consensus on what to sign and produce valid signatures for their staking duties. This is known as Active/Active redundancy, a common pattern for minimizing downtime in mission critical systems.\n\u200b"}),"\n",(0,n.jsx)(t.h2,{id:"distributed-validator-node",children:"Distributed Validator Node"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"A Distributed Validator Node",src:i(97797).A+"",width:"2600",height:"1460"})}),"\n",(0,n.jsxs)(t.p,{children:["A distributed validator node is the set of clients an operator needs to configure and run to fulfil the duties of a Distributed Validator Operator. An operator may also run redundant execution and consensus clients, an execution payload relayer like ",(0,n.jsx)(t.a,{href:"https://github.com/flashbots/mev-boost",children:"mev-boost"}),", or other monitoring or telemetry services on the same hardware to ensure optimal performance."]}),"\n",(0,n.jsx)(t.p,{children:"In the above example, the stack includes geth, lighthouse, charon and lodestar."}),"\n",(0,n.jsx)(t.h3,{id:"execution-client",children:"Execution Client"}),"\n",(0,n.jsx)(t.p,{children:"An execution client (formerly known as an Eth1 client) specialises in running the EVM and managing the transaction pool for the Ethereum network. These clients provide execution payloads to consensus clients for inclusion into blocks."}),"\n",(0,n.jsx)(t.p,{children:"Examples of execution clients include:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://geth.ethereum.org/",children:"Go-Ethereum"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://docs.nethermind.io/nethermind/",children:"Nethermind"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/ledgerwatch/erigon",children:"Erigon"})}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"consensus-client",children:"Consensus Client"}),"\n",(0,n.jsx)(t.p,{children:"A consensus client's duty is to run the proof of stake consensus layer of Ethereum, often referred to as the beacon chain."}),"\n",(0,n.jsx)(t.p,{children:"Examples of Consensus clients include:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://docs.prylabs.network/docs/how-prysm-works/beacon-node",children:"Prysm"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://docs.teku.consensys.net/en/stable/",children:"Teku"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://lighthouse-book.sigmaprime.io/api-bn.html",children:"Lighthouse"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://nimbus.guide/",children:"Nimbus"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/ChainSafe/lodestar",children:"Lodestar"})}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"distributed-validator-client",children:"Distributed Validator Client"}),"\n",(0,n.jsxs)(t.p,{children:["A distributed validator client intercepts the validator client \u2194 consensus client communication flow over the ",(0,n.jsx)(t.a,{href:"https://ethereum.github.io/beacon-APIs/#/ValidatorRequiredApi",children:"standardised REST API"}),", and focuses on two core duties."]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Coming to consensus on a candidate duty for all validators to sign"}),"\n",(0,n.jsx)(t.li,{children:"Combining signatures from all validators into a distributed validator signature"}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["The only example of a distributed validator client built with a non-custodial middleware architecture to date is ",(0,n.jsx)(t.a,{href:"/docs/v0.4.0/dv/introducing-charon",children:"charon"}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"validator-client",children:"Validator Client"}),"\n",(0,n.jsx)(t.p,{children:"A validator client is a piece of code that operates one or more Ethereum validators."}),"\n",(0,n.jsx)(t.p,{children:"Examples of validator clients include:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://www.attestant.io/posts/introducing-vouch/",children:"Vouch"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://docs.prylabs.network/docs/how-prysm-works/prysm-validator-client/",children:"Prysm"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://docs.teku.consensys.net/en/stable/",children:"Teku"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://lighthouse-book.sigmaprime.io/api-bn.html",children:"Lighthouse"})}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"distributed-validator-cluster",children:"Distributed Validator Cluster"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"A Distributed Validator Cluster",src:i(92403).A+"",width:"2598",height:"1458"})}),"\n",(0,n.jsx)(t.p,{children:"A distributed validator cluster is a collection of distributed validator nodes connected together to service a set of distributed validators generated during a DVK ceremony."}),"\n",(0,n.jsx)(t.h3,{id:"distributed-validator-key",children:"Distributed Validator Key"}),"\n",(0,n.jsx)(t.p,{children:"A distributed validator key is a group of BLS private keys, that together operate as a threshold key for participating in proof of stake consensus with."}),"\n",(0,n.jsx)(t.h3,{id:"distributed-validator-key-share",children:"Distributed Validator Key Share"}),"\n",(0,n.jsx)(t.p,{children:"One piece of the distributed validator private key."}),"\n",(0,n.jsx)(t.h3,{id:"distributed-validator-key-generation-ceremony",children:"Distributed Validator Key Generation Ceremony"}),"\n",(0,n.jsx)(t.p,{children:"To achieve fault tolerance in a distributed validator, the individual private key shares need to be generated together. Rather than have a trusted dealer produce a private key, split it and distribute it, the preferred approach is to never construct the full private key at any point, by having each operator in the distributed validator cluster participate in what is known as a Distributed Key Generation ceremony."}),"\n",(0,n.jsx)(t.p,{children:"A distributed validator key generation ceremony is a type of DKG ceremony. A DVK ceremony produces signed validator deposit and exit data, along with all of the validator key shares and their associated metadata."})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},79049:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/WhatIsADistributedValidator-1d68c966ef7f4693794521a99de78040.png"},92403:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/WhatIsADistributedValidatorCluster-08b5c5e2ec95891fbde83f064babb5e0.png"},97797:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/WhatIsADistributedValidatorNode-44bd20b3e4c9af9907dd4f841f6d0c1a.png"},28453:(e,t,i)=>{i.d(t,{R:()=>o,x:()=>a});var n=i(96540);const r={},s=n.createContext(r);function o(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);