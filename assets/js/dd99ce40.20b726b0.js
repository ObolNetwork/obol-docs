"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[96821],{15680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>g});var o=r(96540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),d=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},h="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=d(r),m=n,g=h["".concat(l,".").concat(m)]||h[m]||c[m]||i;return r?o.createElement(g,a(a({ref:t},u),{},{components:r})):o.createElement(g,a({ref:t},u))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:n,a[1]=s;for(var d=2;d<i;d++)a[d]=r[d];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},38961:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var o=r(58168),n=(r(96540),r(15680));const i={sidebar_position:4,description:"Ethereum and its relationship with DVT"},a="Ethereum and its Relationship with DVT",s={unversionedId:"fr/ethereum_and_dvt",id:"version-v1.0.0/fr/ethereum_and_dvt",title:"Ethereum and its Relationship with DVT",description:"Ethereum and its relationship with DVT",source:"@site/versioned_docs/version-v1.0.0/fr/ethereum_and_dvt.md",sourceDirName:"fr",slug:"/fr/ethereum_and_dvt",permalink:"/docs/fr/ethereum_and_dvt",draft:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v1.0.0/fr/ethereum_and_dvt.md",tags:[],version:"v1.0.0",sidebarPosition:4,frontMatter:{sidebar_position:4,description:"Ethereum and its relationship with DVT"},sidebar:"tutorialSidebar",previous:{title:"Feedback",permalink:"/docs/cf/feedback"},next:{title:"Community Testing",permalink:"/docs/fr/testnet"}},l={},d=[{value:"<strong>Understanding Ethereum</strong>",id:"understanding-ethereum",level:2},{value:"<strong>DVT &amp; Ethereum</strong>",id:"dvt--ethereum",level:2},{value:"Distributed Validator Technology",id:"distributed-validator-technology",level:3},{value:"Learn More About Distributed Validator technology from The Official Ethereum Website",id:"learn-more-about-distributed-validator-technology-from-the-official-ethereum-website",level:4},{value:"How Does DVT Improve Staking on Ethereum?",id:"how-does-dvt-improve-staking-on-ethereum",level:3},{value:"Deep Dive Into DVT and Charon\u2019s Architecture",id:"deep-dive-into-dvt-and-charons-architecture",level:3},{value:"Performance Testing Distributed Validators",id:"performance-testing-distributed-validators",level:3},{value:"More Resources",id:"more-resources",level:3},{value:"References",id:"references",level:4}],u={toc:d},h="wrapper";function c(e){let{components:t,...r}=e;return(0,n.yg)(h,(0,o.A)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"ethereum-and-its-relationship-with-dvt"},"Ethereum and its Relationship with DVT"),(0,n.yg)("p",null,"Our goal for this page is to equip you with the foundational knowledge needed to actively contribute to the advancement of Obol while also directing you to valuable Ethereum and DVT related resources. Additionally, we will shed light on the intersection of DVT and Ethereum, offering curated articles and blog posts to enhance your understanding."),(0,n.yg)("h2",{id:"understanding-ethereum"},(0,n.yg)("strong",{parentName:"h2"},"Understanding Ethereum")),(0,n.yg)("p",null,"To grasp the current landscape of Ethereum's PoS development, we encourage you to delve into the wealth of information available on the ",(0,n.yg)("a",{parentName:"p",href:"https://ethereum.org/en/learn/"},"Official Ethereum Website."),"\nThe Ethereum website serves as a hub for all things Ethereum, catering to individuals at various levels of expertise, whether you're just starting your journey or are an Ethereum veteran. Here, you'll find a trove of resources that cater to diverse learning needs and preferences, ensuring that there's something valuable for everyone in the Ethereum community to discover."),(0,n.yg)("h2",{id:"dvt--ethereum"},(0,n.yg)("strong",{parentName:"h2"},"DVT & Ethereum")),(0,n.yg)("h3",{id:"distributed-validator-technology"},"Distributed Validator Technology"),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},'"Distributed validator technology (DVT) is an approach to validator security that spreads out key management and signing responsibilities across multiple parties, to reduce single points of failure, and increase validator resiliency.'),(0,n.yg)("p",{parentName:"blockquote"},'It does this by splitting the private key used to secure a validator across many computers organized into a "cluster". The benefit of this is that it makes it very difficult for attackers to gain access to the key, because it is not stored in full on any single machine. It also allows for some nodes to go offline, as the necessary signing can be done by a subset of the machines in each cluster. This reduces single points of failure from the network and makes the whole validator set more robust." ',(0,n.yg)("em",null,"(ethereum.org, 2023)"))),(0,n.yg)("h4",{id:"learn-more-about-distributed-validator-technology-from-the-official-ethereum-website"},"Learn More About Distributed Validator technology from ",(0,n.yg)("a",{parentName:"h4",href:"https://ethereum.org/en/staking/dvt/"},"The Official Ethereum Website")),(0,n.yg)("h3",{id:"how-does-dvt-improve-staking-on-ethereum"},"How Does DVT Improve Staking on Ethereum?"),(0,n.yg)("p",null,"If you haven\u2019t yet heard, Distributed Validator Technology, or DVT, is the next big thing on The Merge section of the Ethereum roadmap. Learn more about this in our blog post: ",(0,n.yg)("a",{parentName:"p",href:"https://blog.obol.tech/what-is-dvt-and-how-does-it-improve-staking-on-ethereum/"},"What is DVT and How Does It Improve Staking on Ethereum?")),(0,n.yg)("img",{src:"/img/ethereum-roadmap.png",alt:"Image Alt Text",width:"800",height:"1000"}),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("em",{parentName:"strong"},"Vitalik's Ethereum Roadmap"))),(0,n.yg)("h3",{id:"deep-dive-into-dvt-and-charons-architecture"},"Deep Dive Into DVT and Charon\u2019s Architecture"),(0,n.yg)("p",null,"Minimizing correlation is vital when designing DVT as Ethereum Proof of Stake is designed to heavily punish correlated behavior. In designing Obol, we\u2019ve made careful choices to create a trust-minimized and non-correlated architecture. "),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://blog.obol.tech/deep-dive-into-dvt-and-charons-architecture/"},(0,n.yg)("strong",{parentName:"a"},"Read more about Designing Non-Correlation Here"))),(0,n.yg)("h3",{id:"performance-testing-distributed-validators"},"Performance Testing Distributed Validators"),(0,n.yg)("p",null,"In our mission to help make Ethereum consensus more resilient and decentralised with distributed validators (DVs), it\u2019s critical that we do not compromise on the performance and effectiveness of validators. Earlier this year, we worked with MigaLabs, the blockchain ecosystem observatory located in Barcelona, to perform an independent test to validate the performance of Obol DVs under different configurations and conditions. After taking a few weeks to fully analyse the results together with MigaLabs, we\u2019re happy to share the results of these performance tests."),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://blog.obol.tech/performance-testing-distributed-validators/"},(0,n.yg)("strong",{parentName:"a"},"Read More About The Performance Test Results Here"))),(0,n.yg)("img",{src:"/img/MigaLabs-Performance-Results.png",alt:"Image Alt Text",width:"800",height:"600"}),(0,n.yg)("h3",{id:"more-resources"},"More Resources"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://medium.com/nethermind-eth/sorting-out-distributed-validator-technology-a6f8ca1bbce3"},"Sorting out Distributed Validator Technology")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://medium.com/nethermind-eth/a-tour-of-verifiable-secret-sharing-schemes-and-distributed-key-generation-protocols-3c814e0d47e1"},"A tour of Verifiable Secret Sharing schemes and Distributed Key Generation protocols")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://medium.com/nethermind-eth/threshold-signature-schemes-36f40bc42aca"},"Threshold Signature Schemes"))),(0,n.yg)("h4",{id:"references"},"References"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"ethereum.org. (2023). Distributed Validator Technology. ","[online]"," Available at: ",(0,n.yg)("a",{parentName:"li",href:"https://ethereum.org/en/staking/dvt/"},"https://ethereum.org/en/staking/dvt/")," ","[Accessed 25 Sep. 2023]",".")))}c.isMDXComponent=!0}}]);