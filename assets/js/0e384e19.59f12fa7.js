"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[671],{3905:function(e,t,i){i.d(t,{Zo:function(){return u},kt:function(){return h}});var n=i(7294);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,o=function(e,t){if(null==e)return{};var i,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var i=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(i),h=o,b=p["".concat(s,".").concat(h)]||p[h]||d[h]||r;return i?n.createElement(b,a(a({ref:t},u),{},{components:i})):n.createElement(b,a({ref:t},u))}));function h(e,t){var i=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=i.length,a=new Array(r);a[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<r;c++)a[c]=i[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,i)}p.displayName="MDXCreateElement"},9881:function(e,t,i){i.r(t),i.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var n=i(7462),o=i(3366),r=(i(7294),i(3905)),a=["components"],l={sidebar_position:1,description:"Welcome to the Multi-Operator Validator Network"},s="\ud83d\udc4b Introduction",c={unversionedId:"intro",id:"intro",isDocsHomePage:!1,title:"\ud83d\udc4b Introduction",description:"Welcome to the Multi-Operator Validator Network",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",editUrl:"https://github.com/obolnetwork/obol-docs/edit/main/website/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"Welcome to the Multi-Operator Validator Network"},sidebar:"tutorialSidebar",next:{title:"\ud83d\udca1 Key Concepts",permalink:"/docs/key-concepts"}},u=[{value:"What is Obol?",id:"what-is-obol",children:[],level:2},{value:"The Network",id:"the-network",children:[{value:"Sustainable Public Goods",id:"sustainable-public-goods",children:[],level:3}],level:2},{value:"The Vision",id:"the-vision",children:[{value:"V1 - Trusted Distributed Validators",id:"v1---trusted-distributed-validators",children:[],level:3},{value:"V2 - Trustless Distributed Validators",id:"v2---trustless-distributed-validators",children:[],level:3}],level:2}],d={toc:u};function p(e){var t=e.components,l=(0,o.Z)(e,a);return(0,r.kt)("wrapper",(0,n.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"-introduction"},"\ud83d\udc4b Introduction"),(0,r.kt)("h2",{id:"what-is-obol"},"What is Obol?"),(0,r.kt)("p",null,"Obol Labs is a remote first research and software development team focused on POS infrastructure for public blockchain networks. Specific topics of focus are Internet Bonds, Distributed Validator Technology and Multi-Operator Validation. The core team currently includes 10 members that are spread across the world."),(0,r.kt)("p",null,"The core team is currently building the Obol Network, a protocol to foster trust minimized staking through multi-operator validation. This will enable low-trust access to Ethereum staking yield, which can be used as a core building block in a variety of Web3 products."),(0,r.kt)("h2",{id:"the-network"},"The Network"),(0,r.kt)("p",null,"The network can be best visualized as a work layer that sits directly on top of base layer consensus. This work layer is designed to provide the base layer with more resiliency and decentralization as it scales. In this chapter of Ethereum we will move onto the next great scaling challenge, which is stake centralization. To effectively mititgate these risks, credible neutrality must be used as a primary design principal. "),(0,r.kt)("p",null,"Obol as a layer is focused on scaling main chain staking by providing permissionless access to Distributed Validators. The network utilizes a middleware implementation of Distributed Validator Technology (DVT), to enable the operation of distributed validator clusters that can preserve validators current client and remote signing configurations."),(0,r.kt)("p",null,"Similar to how roll up technology laid the foundation for L2 scaling implementations, we believe DVT will do the same for scaling main chain staking while preserving decentralization. Staking infrastructure is entering its protocol phase of evolution, which must include trust-minimized staking networks that can be plugged into at scale. Layers like Obol are critical to the long term viability and resiliency of public networks, especially networks like Ethereum. We believe DVT will evolve into a widely used primitive and will ensure the security, resiliency, and decentralization of  the public blockchain networks that adopt it."),(0,r.kt)("p",null,"The Obol Network develops and maintains four core public goods:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("a",{parentName:"li",href:"/docs/dvk/distributed-validator-keys"},"Distributed Validator Launchpad"),", a CLI tool and dApp for bootstrapping Distributed Validators"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/dv/introducing-charon"},"Charon"),", a middleware client that enables validators to run in a fault-tolerant, distributed manner"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/sc/introducing-obol-managers"},"Obol Managers"),", a set of solidity smart contracts for the formation of Distributed Validators"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/testnet"},"Obol Testnets"),", a set of on-going public incentivised testnets that enable any sized operator to test their deployment before serving for the mainnet Obol Network")),(0,r.kt)("h3",{id:"sustainable-public-goods"},"Sustainable Public Goods"),(0,r.kt)("p",null,"The Obol Ecosystem is inspired by previous work on Ethereum public goods and experimenting with circular economics. We believe that to unlock innovation in staking use cases, a credibly neutral layer must exist for innovation to flow and evolve vertically. Without this layer highly available uptime will continue to be a moat and stake will accumulate amongst a few products."),(0,r.kt)("p",null,"The Obol Network will become an open, community governed, self-sustaining project over the coming months and years. Together we will incentivize, build, and maintain distributed validator technology that makes public networks a more secure and resilient foundation to build on top of."),(0,r.kt)("p",null,(0,r.kt)("img",{src:i(3230).Z})),(0,r.kt)("h2",{id:"the-vision"},"The Vision"),(0,r.kt)("p",null,"The road to decentralising stake is a long one. At Obol we have divided our vision into two key versions of distributed validators. "),(0,r.kt)("h3",{id:"v1---trusted-distributed-validators"},"V1 - Trusted Distributed Validators"),(0,r.kt)("p",null,"The first version of distibuted validators will have dispute resolution out of band. Meaning you need to know and communicate with your counterparty operators if there is an issue with your shared cluster. "),(0,r.kt)("p",null,"A DV without in-band dispute resolution/incentivisation is still extremely valuable. Individuals and staking as a service providers can deploy DVs on their own to make their validators fault tolerant. Groups can run DVs together, but need to bring their own dispute resolution to the table, whether that be a smart contract of their own, a traditional legal service agreement, or simply high trust between the group. "),(0,r.kt)("h3",{id:"v2---trustless-distributed-validators"},"V2 - Trustless Distributed Validators"),(0,r.kt)("p",null,"V1 of charon serves a small by count, large by stake-weight group of individuals. The long tail of home and small stakers also deserve to have access to fault tolerant validation, but they may not know enough other operators personally to a sufficient level of trust to run a DV cluster together. "),(0,r.kt)("p",null,"Version 2 of charon will layer in an incentivisation scheme to ensure any operator not online and taking part in validation is not earning any rewards. Further incentivisation alignment can be achieved with operator bonding requirements that can be slashed for unacceptable performance. "),(0,r.kt)("p",null,"To add an un-gameable incentivisation layer to threshold validation requires complex interactive cryptography schemes, secure off-chain dispute resolution, and EVM support for proofs of the consensus layer state, as a result, this will be a longer and more complex undertaking than V1, hence the deliniation between the two."))}p.isMDXComponent=!0},3230:function(e,t,i){t.Z=i.p+"assets/images/DVT4-293fe7544cd15e65e3f8c17bde106d45.png"}}]);