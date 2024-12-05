"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[67588],{2491:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>h});const i=JSON.parse('{"id":"fr/ethereum_and_dvt","title":"Ethereum and its Relationship with DVT","description":"Ethereum and its relationship with DVT","source":"@site/versioned_docs/version-v0.19.2/fr/ethereum_and_dvt.md","sourceDirName":"fr","slug":"/fr/ethereum_and_dvt","permalink":"/v0.19.2/fr/ethereum_and_dvt","draft":false,"unlisted":false,"editUrl":"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.19.2/fr/ethereum_and_dvt.md","tags":[],"version":"v0.19.2","sidebarPosition":4,"frontMatter":{"sidebar_position":4,"description":"Ethereum and its relationship with DVT"},"sidebar":"tutorialSidebar","previous":{"title":"Feedback","permalink":"/v0.19.2/cf/feedback"},"next":{"title":"Community Testing","permalink":"/v0.19.2/fr/testnet"}}');var n=r(74848),o=r(28453);const s={sidebar_position:4,description:"Ethereum and its relationship with DVT"},a="Ethereum and its Relationship with DVT",d={},h=[{value:"<strong>Understanding Ethereum</strong>",id:"understanding-ethereum",level:2},{value:"<strong>DVT &amp; Ethereum</strong>",id:"dvt--ethereum",level:2},{value:"Distributed Validator Technology",id:"distributed-validator-technology",level:3},{value:"Learn More About Distributed Validator technology from The Official Ethereum Website",id:"learn-more-about-distributed-validator-technology-from-the-official-ethereum-website",level:4},{value:"How Does DVT Improve Staking on Ethereum?",id:"how-does-dvt-improve-staking-on-ethereum",level:3},{value:"Deep Dive Into DVT and Charon\u2019s Architecture",id:"deep-dive-into-dvt-and-charons-architecture",level:3},{value:"Performance Testing Distributed Validators",id:"performance-testing-distributed-validators",level:3},{value:"More Resources",id:"more-resources",level:3},{value:"References",id:"references",level:4}];function l(e){const t={a:"a",blockquote:"blockquote",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"ethereum-and-its-relationship-with-dvt",children:"Ethereum and its Relationship with DVT"})}),"\n",(0,n.jsx)(t.p,{children:"Our goal for this page is to equip you with the foundational knowledge needed to actively contribute to the advancement of Obol while also directing you to valuable Ethereum and DVT related resources. Additionally, we will shed light on the intersection of DVT and Ethereum, offering curated articles and blog posts to enhance your understanding."}),"\n",(0,n.jsx)(t.h2,{id:"understanding-ethereum",children:(0,n.jsx)(t.strong,{children:"Understanding Ethereum"})}),"\n",(0,n.jsxs)(t.p,{children:["To grasp the current landscape of Ethereum's PoS development, we encourage you to delve into the wealth of information available on the ",(0,n.jsx)(t.a,{href:"https://ethereum.org/en/learn/",children:"Official Ethereum Website."}),"\nThe Ethereum website serves as a hub for all things Ethereum, catering to individuals at various levels of expertise, whether you're just starting your journey or are an Ethereum veteran. Here, you'll find a trove of resources that cater to diverse learning needs and preferences, ensuring that there's something valuable for everyone in the Ethereum community to discover."]}),"\n",(0,n.jsx)(t.h2,{id:"dvt--ethereum",children:(0,n.jsx)(t.strong,{children:"DVT & Ethereum"})}),"\n",(0,n.jsx)(t.h3,{id:"distributed-validator-technology",children:"Distributed Validator Technology"}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:'"Distributed validator technology (DVT) is an approach to validator security that spreads out key management and signing responsibilities across multiple parties, to reduce single points of failure, and increase validator resiliency.'}),"\n",(0,n.jsxs)(t.p,{children:['It does this by splitting the private key used to secure a validator across many computers organized into a "cluster". The benefit of this is that it makes it very difficult for attackers to gain access to the key, because it is not stored in full on any single machine. It also allows for some nodes to go offline, as the necessary signing can be done by a subset of the machines in each cluster. This reduces single points of failure from the network and makes the whole validator set more robust." ',(0,n.jsx)("em",{children:"(ethereum.org, 2023)"})]}),"\n"]}),"\n",(0,n.jsxs)(t.h4,{id:"learn-more-about-distributed-validator-technology-from-the-official-ethereum-website",children:["Learn More About Distributed Validator technology from ",(0,n.jsx)(t.a,{href:"https://ethereum.org/en/staking/dvt/",children:"The Official Ethereum Website"})]}),"\n",(0,n.jsx)(t.h3,{id:"how-does-dvt-improve-staking-on-ethereum",children:"How Does DVT Improve Staking on Ethereum?"}),"\n",(0,n.jsxs)(t.p,{children:["If you haven\u2019t yet heard, Distributed Validator Technology, or DVT, is the next big thing on The Merge section of the Ethereum roadmap. Learn more about this in our blog post: ",(0,n.jsx)(t.a,{href:"https://blog.obol.tech/what-is-dvt-and-how-does-it-improve-staking-on-ethereum/",children:"What is DVT and How Does It Improve Staking on Ethereum?"})]}),"\n",(0,n.jsx)("img",{src:"/img/ethereum-roadmap.png",alt:"Image Alt Text",width:"800",height:"1000"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:(0,n.jsx)(t.strong,{children:"Vitalik's Ethereum Roadmap"})})}),"\n",(0,n.jsx)(t.h3,{id:"deep-dive-into-dvt-and-charons-architecture",children:"Deep Dive Into DVT and Charon\u2019s Architecture"}),"\n",(0,n.jsx)(t.p,{children:"Minimizing correlation is vital when designing DVT as Ethereum Proof of Stake is designed to heavily punish correlated behavior. In designing Obol, we\u2019ve made careful choices to create a trust-minimized and non-correlated architecture."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://blog.obol.tech/deep-dive-into-dvt-and-charons-architecture/",children:(0,n.jsx)(t.strong,{children:"Read more about Designing Non-Correlation Here"})})}),"\n",(0,n.jsx)(t.h3,{id:"performance-testing-distributed-validators",children:"Performance Testing Distributed Validators"}),"\n",(0,n.jsx)(t.p,{children:"In our mission to help make Ethereum consensus more resilient and decentralised with distributed validators (DVs), it\u2019s critical that we do not compromise on the performance and effectiveness of validators. Earlier this year, we worked with MigaLabs, the blockchain ecosystem observatory located in Barcelona, to perform an independent test to validate the performance of Obol DVs under different configurations and conditions. After taking a few weeks to fully analyse the results together with MigaLabs, we\u2019re happy to share the results of these performance tests."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://blog.obol.tech/performance-testing-distributed-validators/",children:(0,n.jsx)(t.strong,{children:"Read More About The Performance Test Results Here"})})}),"\n",(0,n.jsx)("img",{src:"/img/MigaLabs-Performance-Results.png",alt:"Image Alt Text",width:"800",height:"600"}),"\n",(0,n.jsx)(t.h3,{id:"more-resources",children:"More Resources"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://medium.com/nethermind-eth/sorting-out-distributed-validator-technology-a6f8ca1bbce3",children:"Sorting out Distributed Validator Technology"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://medium.com/nethermind-eth/a-tour-of-verifiable-secret-sharing-schemes-and-distributed-key-generation-protocols-3c814e0d47e1",children:"A tour of Verifiable Secret Sharing schemes and Distributed Key Generation protocols"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://medium.com/nethermind-eth/threshold-signature-schemes-36f40bc42aca",children:"Threshold Signature Schemes"})}),"\n"]}),"\n",(0,n.jsx)(t.h4,{id:"references",children:"References"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["ethereum.org. (2023). Distributed Validator Technology. [online] Available at: ",(0,n.jsx)(t.a,{href:"https://ethereum.org/en/staking/dvt/",children:"https://ethereum.org/en/staking/dvt/"})," [Accessed 25 Sep. 2023]."]}),"\n"]})]})}function c(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>a});var i=r(96540);const n={},o=i.createContext(n);function s(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);