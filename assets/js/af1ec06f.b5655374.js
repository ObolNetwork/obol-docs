"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[81138],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,k=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return n?a.createElement(k,o(o({ref:t},u),{},{components:n})):a.createElement(k,o({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},19690:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={sidebar_position:6,description:"Obol testnets roadmap"},o="Testnets",l={unversionedId:"testnet",id:"version-v0.14.4/testnet",title:"Testnets",description:"Obol testnets roadmap",source:"@site/versioned_docs/version-v0.14.4/testnet.md",sourceDirName:".",slug:"/testnet",permalink:"/docs/v0.14.4/testnet",draft:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.14.4/testnet.md",tags:[],version:"v0.14.4",sidebarPosition:6,frontMatter:{sidebar_position:6,description:"Obol testnets roadmap"},sidebar:"tutorialSidebar",previous:{title:"Obol Manager Contracts",permalink:"/docs/v0.14.4/sc/introducing-obol-managers"},next:{title:"Overview",permalink:"/docs/v0.14.4/sec/overview"}},s={},p=[{value:"Devnet 1",id:"devnet-1",level:2},{value:"Devnet 2",id:"devnet-2",level:2},{value:"Athena Public Testnet 1",id:"athena-public-testnet-1",level:2},{value:"Bia Public Testnet 2",id:"bia-public-testnet-2",level:2},{value:"Circe Attack Net",id:"circe-attack-net",level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"testnets"},"Testnets"),(0,r.kt)("p",null,"Over the coming quarters, Obol Labs has and will continue to coordinate and host a number of progressively larger testnets to help harden the Charon client and iterate on the key generation tooling."),(0,r.kt)("p",null,"The following is a breakdown of the intended testnet roadmap, the features that are to be completed by each testnet, and their target start date and duration."),(0,r.kt)("h1",{id:"testnets-1"},"Testnets"),(0,r.kt)("ul",{className:"contains-task-list"},(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.kt)("a",{parentName:"li",href:"#devnet-1"},"Dev Net 1")),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.kt)("a",{parentName:"li",href:"#devnet-2"},"Dev Net 2")),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.kt)("a",{parentName:"li",href:"#athena-public-testnet-1"},"Athena Public Testnet 1")),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.kt)("a",{parentName:"li",href:"#bia-public-testnet-2"},"Bia Public Testnet 2")),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.kt)("a",{parentName:"li",href:"#circe-attack-net"},"Circe Attack Net"))),(0,r.kt)("h2",{id:"devnet-1"},"Devnet 1"),(0,r.kt)("p",null,"The first devnet aimed to have a number of trusted operators test out our earliest tutorial flows. The aim was for a single user to complete these tutorials alone, using ",(0,r.kt)("inlineCode",{parentName:"p"},"docker compose")," to spin up 4 Charon clients and 4 different validator clients on a single machine, with a remote consensus client. The keys were created locally in Charon and activated with the existing launchpad."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Participants:")," Obol Dev Team, Client team advisors."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"State:")," Pre-product"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Network:")," Kiln"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Completed Date:")," June 2022"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Duration:")," 1 week"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Goals:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A single user completes a first tutorial alone, using ",(0,r.kt)("inlineCode",{parentName:"li"},"docker compose")," to spin up 4 Charon clients on a single machine, with a remote consensus client. The keys are created locally in Charon and activated with the existing launchpad."),(0,r.kt)("li",{parentName:"ul"},"Prove that the distributed validator paradigm with 4 separate VC implementations together operating as one logical validator works."),(0,r.kt)("li",{parentName:"ul"},"Get the basics of monitoring in place, for the following testnet where accurate monitoring will be important due to Charon running across a network.")),(0,r.kt)("h2",{id:"devnet-2"},"Devnet 2"),(0,r.kt)("p",null,"The second devnet aimed to have a number of trusted operators test out our earliest tutorial flows ",(0,r.kt)("strong",{parentName:"p"},"together")," for the first time."),(0,r.kt)("p",null,"The aim was for groups of 4 testers to complete a group onboarding tutorial, using ",(0,r.kt)("inlineCode",{parentName:"p"},"docker compose")," to spin up 4 Charon clients and 4 different validator clients (lighthouse, teku, lodestar and vouch), each on their own machine at each operator's home or their place of choosing, running at least a kiln consensus client. "),(0,r.kt)("p",null,"This devnet was the first time ",(0,r.kt)("inlineCode",{parentName:"p"},"charon dkg")," was tested with users. A core focus of this devnet was to collect network performance data."),(0,r.kt)("p",null,"This was also the first time Charon was run in variable, non-virtual networks (i.e. the real internet)."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Participants:")," Obol Dev Team, Client team advisors."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"State:")," Pre-product"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Network:")," Kiln"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Completed Date:")," July 2022"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Duration:")," 2 weeks"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Goals:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Groups of 4 testers complete a group onboarding tutorial, using ",(0,r.kt)("inlineCode",{parentName:"li"},"docker compose")," to spin up 4 Charon clients, each on their own machine at each operator's home or their place of choosing, running at least a kiln consensus client."),(0,r.kt)("li",{parentName:"ul"},"Operators avoid exposing Charon to the public internet on a static IP address through the use of Obol-hosted relay nodes."),(0,r.kt)("li",{parentName:"ul"},"Users test ",(0,r.kt)("inlineCode",{parentName:"li"},"charon dkg"),". The launchpad is not used, and this dkg is triggered by a manifest config file created locally by a single operator using the ",(0,r.kt)("inlineCode",{parentName:"li"},"charon create dkg")," command."),(0,r.kt)("li",{parentName:"ul"},"Effective collection of network performance data, to enable gathering even higher signal performance data at scale during public testnets."),(0,r.kt)("li",{parentName:"ul"},"Block proposals are in place.")),(0,r.kt)("h2",{id:"athena-public-testnet-1"},"Athena Public Testnet 1"),(0,r.kt)("p",null,"With tutorials for solo and group flows having been developed and refined. The goal for public testnet 1 was to get distributed validators into the hands of the wider Obol Community for the first time. The core focus of this testnet was the onboarding experience."),(0,r.kt)("p",null,"The core output from this testnet was a significant number of public cluster running and public feedback collected."),(0,r.kt)("p",null,"This was an unincentivized testnet and formed the basis for us to figure out a Sybil resistance mechanism."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Participants:")," Obol Community"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"State:")," Bare Minimum"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Network:")," G\xf6rli"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Completed date:")," October 2022"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Duration:")," 2 weeks cluster setup, 8 weeks operation"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Goals:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Get distributed validators into the hands of the Obol Early Community for the first time."),(0,r.kt)("li",{parentName:"ul"},"Create the first public onboarding experience and gather feedback. This is the first time we need to provide comprehensive instructions for as many platforms (Unix, Mac, Windows) as possible."),(0,r.kt)("li",{parentName:"ul"},"Make deploying Ethereum validator nodes accessible using the CLI."),(0,r.kt)("li",{parentName:"ul"},"Generate a backlog of bugs, feature requests, platform requests and integration requests.")),(0,r.kt)("h2",{id:"bia-public-testnet-2"},"Bia Public Testnet 2"),(0,r.kt)("p",null,"This second public testnet intends to take the learning from Athena and scale the network by engaging both the wider at-home validator community and professional operators. This is the first time users are setting up DVs using the DV launchpad."),(0,r.kt)("p",null,"This testnet is also important for learning the conditions Charon will be subjected to in production. A core output of this testnet is a large number of autonomous public DV clusters running and building up the Obol community with technical ambassadors."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Participants:")," Obol Community, Ethereum staking community"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"State:")," MVP"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Network:")," G\xf6rli"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Target Completed date:")," March 2023"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Duration:")," 2 weeks cluster setup, 4-8 weeks operation"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Goals:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Engage the wider Solo and Professional Ethereum Staking Community."),(0,r.kt)("li",{parentName:"ul"},"Get integration feedback."),(0,r.kt)("li",{parentName:"ul"},"Build confidence in Charon after running DVs on an Ethereum testnet. "),(0,r.kt)("li",{parentName:"ul"},"Learn about the conditions Charon will be subjected to in production."),(0,r.kt)("li",{parentName:"ul"},"Distributed Validator returns are competitive versus single validator clients."),(0,r.kt)("li",{parentName:"ul"},"Make deploying Ethereum validator nodes accessible using the DV Launchpad."),(0,r.kt)("li",{parentName:"ul"},"Build comprehensive guides for various profiles to spin up DVs with minimal supervision from the core team.")),(0,r.kt)("h2",{id:"circe-attack-net"},"Circe Attack Net"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Participants:")," Obol Community, Immunefi Bug Bounty searchers, Code4rena.io"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"State:")," Client Hardening"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Network:")," G\xf6rli"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Target Completed Date:")," June 2023"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Duration:")," 2-4 weeks operation, depending on how resilient the clients are"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Goals:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Break Charon, the DV launchpad, and the API in multiple ways after having focused primarily on the happy path during the previous testnets."),(0,r.kt)("li",{parentName:"ul"},"Create a number of testing tools to facilitate the disruption of Charon, including releasing a p2p network abuser, a fuzz testing client, k6 scripts for load testing/hammering RPC endpoints and more."),(0,r.kt)("li",{parentName:"ul"},"Find as many memory leaks, DoS vulnerable endpoints and operations, missing signature verifications and more."),(0,r.kt)("li",{parentName:"ul"},"This testnet may be centered around a hackathon if suitable.")))}c.isMDXComponent=!0}}]);