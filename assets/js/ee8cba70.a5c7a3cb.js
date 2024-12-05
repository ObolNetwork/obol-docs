"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[25692],{52898:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"int/Overview","title":"Overview","description":"An overview of the Obol network","source":"@site/versioned_docs/version-v0.4.0/int/Overview.md","sourceDirName":"int","slug":"/int/Overview","permalink":"/v0.4.0/int/Overview","draft":false,"unlisted":false,"editUrl":"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.4.0/int/Overview.md","tags":[],"version":"v0.4.0","sidebarPosition":2,"frontMatter":{"sidebar_position":2,"description":"An overview of the Obol network"},"sidebar":"tutorialSidebar","previous":{"title":"Introduction","permalink":"/v0.4.0/intro"},"next":{"title":"Key concepts","permalink":"/v0.4.0/int/key-concepts"}}');var o=i(74848),s=i(28453);const r={sidebar_position:2,description:"An overview of the Obol network"},a=void 0,l={},d=[{value:"The Network",id:"the-network",level:2},{value:"Sustainable Public Goods",id:"sustainable-public-goods",level:3},{value:"The Vision",id:"the-vision",level:2},{value:"V1 - Trusted Distributed Validators",id:"v1---trusted-distributed-validators",level:3},{value:"V2 - Trustless Distributed Validators",id:"v2---trustless-distributed-validators",level:3}];function c(e){const t={a:"a",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"the-network",children:"The Network"}),"\n",(0,o.jsx)(t.p,{children:"The network can be best visualized as a work layer that sits directly on top of base layer consensus. This work layer is designed to provide the base layer with more resiliency and promote decentralization as it scales. As the current chapter of Ethereum matures over the coming years, the community will move onto the next great scaling challenge, which is stake centralization. To effectively mititgate these risks, community building and credible neutrality must be used as a primary design principles."}),"\n",(0,o.jsx)(t.p,{children:"Obol as a layer is focused on scaling main chain staking by providing permissionless access to Distributed Validators (DV's). We believe that DV's will and should make up a large portion of mainnet validator configurations. In preparation for the first wave of adoption the network currently utilizes a middleware implementation of Distributed Validator Technology (DVT), to enable the operation of distributed validator clusters that can preserve validators current client and remote signing configurations."}),"\n",(0,o.jsx)(t.p,{children:"Similar to how roll up technology laid the foundation for L2 scaling implementations, we believe DVT will do the same for scaling main chain staking while preserving decentralization. Staking infrastructure is entering its protocol phase of evolution, which must include trust-minimized staking networks that can be plugged into at scale. Layers like Obol are critical to the long term viability and resiliency of public networks, especially networks like Ethereum. We believe DVT will evolve into a widely used primitive and will ensure the security, resiliency, and decentralization of the public blockchain networks that adopt it."}),"\n",(0,o.jsx)(t.p,{children:"The Obol Network consists of four core public goods:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["The ",(0,o.jsx)(t.a,{href:"/v0.4.0/dvk/distributed-validator-keys",children:"Distributed Validator Launchpad"}),", a CLI tool and dApp for bootstrapping Distributed Validators"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"/v0.4.0/dv/introducing-charon",children:"Charon"}),", a middleware client that enables validators to run in a fault-tolerant, distributed manner"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"/v0.4.0/sc/introducing-obol-managers",children:"Obol Managers"}),", a set of solidity smart contracts for the formation of Distributed Validators"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"/v0.4.0/testnet",children:"Obol Testnets"}),", a set of on-going public incentivised testnets that enable any sized operator to test their deployment before serving for the mainnet Obol Network"]}),"\n"]}),"\n",(0,o.jsx)(t.h3,{id:"sustainable-public-goods",children:"Sustainable Public Goods"}),"\n",(0,o.jsx)(t.p,{children:"The Obol Ecosystem is inspired by previous work on Ethereum public goods and experimenting with circular economics. We believe that to unlock innovation in staking use cases, a credibly neutral layer must exist for innovation to flow and evolve vertically. Without this layer highly available uptime will continue to be a moat and stake will accumulate amongst a few products."}),"\n",(0,o.jsx)(t.p,{children:"The Obol Network will become an open, community governed, self-sustaining project over the coming months and years. Together we will incentivize, build, and maintain distributed validator technology that makes public networks a more secure and resilient foundation to build on top of."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:i(15003).A+"",width:"1001",height:"565"})}),"\n",(0,o.jsx)(t.h2,{id:"the-vision",children:"The Vision"}),"\n",(0,o.jsx)(t.p,{children:"The road to decentralising stake is a long one. At Obol we have divided our vision into two key versions of distributed validators."}),"\n",(0,o.jsx)(t.h3,{id:"v1---trusted-distributed-validators",children:"V1 - Trusted Distributed Validators"}),"\n",(0,o.jsx)(t.p,{children:"The first version of distibuted validators will have dispute resolution out of band. Meaning you need to know and communicate with your counterparty operators if there is an issue with your shared cluster."}),"\n",(0,o.jsx)(t.p,{children:"A DV without in-band dispute resolution/incentivisation is still extremely valuable. Individuals and staking as a service providers can deploy DVs on their own to make their validators fault tolerant. Groups can run DVs together, but need to bring their own dispute resolution to the table, whether that be a smart contract of their own, a traditional legal service agreement, or simply high trust between the group."}),"\n",(0,o.jsx)(t.p,{children:"Obol V1 will utilize retroactive public goods principles to lay the foundation of its economic ecosystem. The Obol Community will responsibly allocate the collected ETH as grants to projects in the staking ecosystem for the entirety of V1."}),"\n",(0,o.jsx)(t.h3,{id:"v2---trustless-distributed-validators",children:"V2 - Trustless Distributed Validators"}),"\n",(0,o.jsx)(t.p,{children:"V1 of charon serves a small by count, large by stake-weight group of individuals. The long tail of home and small stakers also deserve to have access to fault tolerant validation, but they may not know enough other operators personally to a sufficient level of trust to run a DV cluster together."}),"\n",(0,o.jsx)(t.p,{children:"Version 2 of charon will layer in an incentivisation scheme to ensure any operator not online and taking part in validation is not earning any rewards. Further incentivisation alignment can be achieved with operator bonding requirements that can be slashed for unacceptable performance."}),"\n",(0,o.jsx)(t.p,{children:"To add an un-gameable incentivisation layer to threshold validation requires complex interactive cryptography schemes, secure off-chain dispute resolution, and EVM support for proofs of the consensus layer state, as a result, this will be a longer and more complex undertaking than V1, hence the deliniation between the two."})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},15003:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/DVT4-293fe7544cd15e65e3f8c17bde106d45.png"},28453:(e,t,i)=>{i.d(t,{R:()=>r,x:()=>a});var n=i(96540);const o={},s=n.createContext(o);function r(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);