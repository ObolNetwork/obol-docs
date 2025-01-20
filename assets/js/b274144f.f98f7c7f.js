"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[11675],{64770:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"learn/intro/obol-vs-others","title":"Obol vs Other DV Implementations","description":"Some of the key terms in the field of Distributed Validator Technology","source":"@site/docs/learn/intro/obol-vs-others.md","sourceDirName":"learn/intro","slug":"/learn/intro/obol-vs-others","permalink":"/next/learn/intro/obol-vs-others","draft":false,"unlisted":false,"editUrl":"https://github.com/ObolNetwork/obol-docs/edit/main/docs/learn/intro/obol-vs-others.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2,"description":"Some of the key terms in the field of Distributed Validator Technology"},"sidebar":"tutorialSidebar","previous":{"title":"Key Staking Concepts","permalink":"/next/learn/intro/key-concepts"},"next":{"title":"Obol Splits","permalink":"/next/learn/intro/obol-splits"}}');var i=n(74848),a=n(28453);const s={sidebar_position:2,description:"Some of the key terms in the field of Distributed Validator Technology"},r="Obol vs Other DV Implementations",l={},d=[{value:"No private keys put on chain",id:"no-private-keys-put-on-chain",level:2},{value:"Cluster independance: Clusters can upgrade independently",id:"cluster-independance-clusters-can-upgrade-independently",level:2},{value:"Cluster independance: No reliance on a common P2P gossip network",id:"cluster-independance-no-reliance-on-a-common-p2p-gossip-network",level:2},{value:"Works with existing validator clients and PKI",id:"works-with-existing-validator-clients-and-pki",level:2},{value:"No non-ETH token risk",id:"no-non-eth-token-risk",level:2},{value:"Non-custodial reward splits",id:"non-custodial-reward-splits",level:2}];function c(e){const t={a:"a",em:"em",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"obol-vs-other-dv-implementations",children:"Obol vs Other DV Implementations"})}),"\n",(0,i.jsxs)(t.p,{children:["This page outlines the unique features of Obol's DV implemenation, constrasting with other DV implementations. We built Obol\u2019s DVT as a middleware to keep Ethereum secure, resilient, and composable. See also the blog article ",(0,i.jsx)(t.a,{href:"https://blog.obol.org/why-we-built-charon-as-a-middleware/",children:"Why We Built Charon as a Middleware"}),"."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Obol vs others table",src:n(68543).A+"",width:"1800",height:"1068"})}),"\n",(0,i.jsx)(t.h2,{id:"no-private-keys-put-on-chain",children:"No private keys put on chain"}),"\n",(0,i.jsx)(t.p,{children:"Obol's distributed key generation (DKG) event generates key shares for each node within the DV cluster. The entire validator key NEVER exists in one place. Keys are generated locally on the nodes, and can be backed up. The private keys of Obol DVs are NEVER uploaded to the internet or published on-chain."}),"\n",(0,i.jsx)(t.p,{children:"An alternative approach to doing this is to split it into shares, encrypt each share with the public key of a node operator, and publish the encrypted private key on chain. The operators\u2019 node key could then decrypt the validator private key. In our opinion, this is not secure. We believe that the safest approach is to avoid the existence of a singular private key, and certainly never to post any private key to a public blockchain network."}),"\n",(0,i.jsx)(t.h2,{id:"cluster-independance-clusters-can-upgrade-independently",children:"Cluster independance: Clusters can upgrade independently"}),"\n",(0,i.jsx)(t.p,{children:"In an Obol DV cluster, nodes use LibP2P to communicate directly with each other, and communications are end-to-end encrypted with TLS. Clusters are independent from one another, can run different versions of Charon, and don't need to upgrade together. This means that when a new version of Obol\u2019s Charon is released, Obol DV clusters can upgrade on their own time, individually from other DV clusters. Charon will NEVER require a hard fork or simultaneous updates across clusters for any upgrades."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Cluster Independence",src:n(42609).A+"",width:"1439",height:"763"})}),"\n",(0,i.jsx)(t.h2,{id:"cluster-independance-no-reliance-on-a-common-p2p-gossip-network",children:"Cluster independance: No reliance on a common P2P gossip network"}),"\n",(0,i.jsx)(t.p,{children:"In an Obol DV cluster, nodes use LibP2P to communicate directly with each other, and communications are end-to-end encrypted with TSL. This direct communication of nodes within a cluster improves latency, and makes cluster communications harder to attack with a denial of service (DOS) attack. It also allows an Obol DV cluster to be run within a private network. This may allow cost savings on data egress costs, for operators running cluster nodes across multiple locations of a single cloud provider, for example."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Gossip Network",src:n(82306).A+"",width:"1800",height:"942"})}),"\n",(0,i.jsx)(t.h2,{id:"works-with-existing-validator-clients-and-pki",children:"Works with existing validator clients and PKI"}),"\n",(0,i.jsx)(t.p,{children:"We built Obol\u2019s DV implementation as a secure and trust-minimised middleware architecture. Our middleware client, Charon, doesn\u2019t replace anything in the client stack, instead it sits between the consensus and validator clients. Node operators integrating the Charon DVT middleware into their stack can continue to use the same clients and private key infrastructure as before, albeit with a different key generation method."}),"\n",(0,i.jsx)(t.p,{children:"The alternative approach to DV design is to replace the validator client with a DV-native client, which has custody of the private keys and the capability to sign arbitrary data. However, in our opinion a full validator client capable of signing and exfiltrating arbitrary data without the oversight of a second software implementation has much higher risk of causing correlated slashing."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Standard VC",src:n(67179).A+"",width:"1800",height:"942"})}),"\n",(0,i.jsx)(t.p,{children:"This gives the benefit of having both Charon and the existing validator client as failsafes, greatly reducing the odds of unintended slashing. Even in the worst case scenario where Charon is compromised by a supply chain attack or a remote code execution attack, or the Obol team become bad actors and push a malicious release, Charon cannot do a lot of damage as a middleware. If a compromised Charon client proposes a potential double vote or surround vote for a validator to sign, the validator client will check its anti-slashing database, see that it has already signed something conflicting, and simply refuse to return a signature. Charon could propose that a validator should sign an invalid block, but the chain would reject this and simply consider the proposal missed  - a much better outcome than slashing."}),"\n",(0,i.jsx)(t.h2,{id:"no-non-eth-token-risk",children:"No non-ETH token risk"}),"\n",(0,i.jsxs)(t.p,{children:["Obol makes no changes to Ethereum\u2019s standard bonding and reward mechanism, and does not require nodes to post any bonds additional to the 32 ETH required for a validator. To pay out rewards to operators, splitter contracts like ",(0,i.jsx)(t.a,{href:"/next/learn/intro/obol-splits",children:"Obol Splits"})," can be used to withdraw and share rewards on a continuous basis. This allows products like liquid staking protocols to be built on top of Obol, implementing a bond or unique token into their protocol, should they choose to do so."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"ETH only",src:n(64582).A+"",width:"1800",height:"942"})}),"\n",(0,i.jsx)(t.p,{children:"The alternative approach is to create a token and require stakers to pay operators in that token. This would require stakers to keep a balance of the network token ready for fee paying, in order to continue using the staking service. This mechanism would be informed by oracles, which decide when to post rewards and punish operators. This alternative model has some drawbacks. Namely, the varying price of the network\u2019s unique token will change relative to the price of ETH: operators are not able to determine their commission as a percentage of ETH staked, and stakers likewise must consider the additional initial cost of purchasing the token to determine their long-term rate of return on their staked ETH."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"ETH and Fee Token",src:n(31073).A+"",width:"1800",height:"942"})}),"\n",(0,i.jsx)(t.h2,{id:"non-custodial-reward-splits",children:"Non-custodial reward splits"}),"\n",(0,i.jsxs)(t.p,{children:["(see also the ",(0,i.jsx)(t.a,{href:"/next/learn/intro/obol-splits",children:"docs page on Splits"}),", and the ",(0,i.jsx)(t.a,{href:"https://splits.org/blog/obol-ethereum-resilience/",children:"Splits.org blog article"}),".)"]}),"\n",(0,i.jsx)(t.p,{children:"To pay out rewards to operators, splitter contracts like Obol Splits can be used to withdraw and share rewards on a continuous basis. Two key goals of validator reward management are:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["To be able to differentiate reward ether from principal ether such that node operators can be paid a percentage of the\xa0",(0,i.jsx)(t.em,{children:"reward"}),"\xa0they accrue for the principal provider, rather than a percentage of\xa0",(0,i.jsx)(t.em,{children:"principal and reward"}),"."]}),"\n",(0,i.jsx)(t.li,{children:"To be able to withdraw the rewards in an ongoing manner without exiting the validator.\nThis allows products like liquid staking protocols to be built on top of Obol, implementing a bond or unique token into their protocol, should they choose to do so."}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Splits OWR",src:n(46560).A+"",width:"804",height:"947"})})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},42609:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/ClusterIndependence-14dc80f82af8980e2a3f66ae2382af86.png"},31073:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/ETHandFee-d0d2a1b21a1730561b82e1c6c9c7f1ff.png"},64582:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/ETHonly-1971637930c08898e470f6d68d42f084.png"},82306:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/GossipNetwork-7da0d5a0cfca1aa601ea80f11666a710.png"},46560:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/ObolSplits-abb44cb0d8a090d6d0bc3e52dacc6d66.png"},68543:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/ObolvsOthers-65f2bd619647f24d33fbaa8f809e537d.png"},67179:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/StandardVC-a21b001d50459476c1fd6e2c2fd9116c.png"},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>r});var o=n(96540);const i={},a=o.createContext(i);function s(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);