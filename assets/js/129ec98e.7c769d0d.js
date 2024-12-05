"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[98905],{35767:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"testnet","title":"Testnets","description":"Obol testnets roadmap","source":"@site/versioned_docs/version-v0.13.0/testnet.md","sourceDirName":".","slug":"/testnet","permalink":"/v0.13.0/testnet","draft":false,"unlisted":false,"editUrl":"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.13.0/testnet.md","tags":[],"version":"v0.13.0","sidebarPosition":6,"frontMatter":{"sidebar_position":6,"description":"Obol testnets roadmap"},"sidebar":"tutorialSidebar","previous":{"title":"Obol Manager Contracts","permalink":"/v0.13.0/sc/introducing-obol-managers"},"next":{"title":"Filing a bug report","permalink":"/v0.13.0/cg/bug-report"}}');var i=t(74848),r=t(28453);const o={sidebar_position:6,description:"Obol testnets roadmap"},a="Testnets",l={},c=[{value:"Devnet 1",id:"devnet-1",level:2},{value:"Devnet 2",id:"devnet-2",level:2},{value:"Athena Public Testnet 1",id:"athena-public-testnet-1",level:2},{value:"Bia Public Testnet 2",id:"bia-public-testnet-2",level:2},{value:"Circe Attack Net",id:"circe-attack-net",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",input:"input",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"testnets",children:"Testnets"})}),"\n",(0,i.jsx)(n.p,{children:"Over the coming quarters, Obol Labs has and will continue to coordinate and host a number of progressively larger testnets to help harden the Charon client and iterate on the key generation tooling."}),"\n",(0,i.jsx)(n.p,{children:"The following is a breakdown of the intended testnet roadmap, the features that are to be completed by each testnet, and their target start date and duration."}),"\n",(0,i.jsx)(n.h1,{id:"testnets-1",children:"Testnets"}),"\n",(0,i.jsxs)(n.ul,{className:"contains-task-list",children:["\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:[(0,i.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," ",(0,i.jsx)(n.a,{href:"#devnet-1",children:"Dev Net 1"})]}),"\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:[(0,i.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," ",(0,i.jsx)(n.a,{href:"#devnet-2",children:"Dev Net 2"})]}),"\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:[(0,i.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," ",(0,i.jsx)(n.a,{href:"#athena-public-testnet-1",children:"Athena Public Testnet 1"})]}),"\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:[(0,i.jsx)(n.input,{type:"checkbox",disabled:!0})," ",(0,i.jsx)(n.a,{href:"#bia-public-testnet-2",children:"Bia Public Testnet 2"})]}),"\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:[(0,i.jsx)(n.input,{type:"checkbox",disabled:!0})," ",(0,i.jsx)(n.a,{href:"#circe-attack-net",children:"Circe Attack Net"})]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"devnet-1",children:"Devnet 1"}),"\n",(0,i.jsxs)(n.p,{children:["The first devnet aimed to have a number of trusted operators test out our earliest tutorial flows. The aim was for a single user to complete these tutorials alone, using ",(0,i.jsx)(n.code,{children:"docker compose"})," to spin up 4 Charon clients and 4 different validator clients on a single machine, with a remote consensus client. The keys were created locally in Charon and activated with the existing launchpad."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Participants:"})," Obol Dev Team, Client team advisors."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"State:"})," Pre-product"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Network:"})," Kiln"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Completed Date:"})," June 2022"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Duration:"})," 1 week"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Goals:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["A single user completes a first tutorial alone, using ",(0,i.jsx)(n.code,{children:"docker compose"})," to spin up 4 Charon clients on a single machine, with a remote consensus client. The keys are created locally in Charon and activated with the existing launchpad."]}),"\n",(0,i.jsx)(n.li,{children:"Prove that the distributed validator paradigm with 4 separate VC implementations together operating as one logical validator works."}),"\n",(0,i.jsx)(n.li,{children:"Get the basics of monitoring in place, for the following testnet where accurate monitoring will be important due to Charon running across a network."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"devnet-2",children:"Devnet 2"}),"\n",(0,i.jsxs)(n.p,{children:["The second devnet aimed to have a number of trusted operators test out our earliest tutorial flows ",(0,i.jsx)(n.strong,{children:"together"})," for the first time."]}),"\n",(0,i.jsxs)(n.p,{children:["The aim was for groups of 4 testers to complete a group onboarding tutorial, using ",(0,i.jsx)(n.code,{children:"docker compose"})," to spin up 4 Charon clients and 4 different validator clients (lighthouse, teku, lodestar and vouch), each on their own machine at each operator's home or their place of choosing, running at least a kiln consensus client."]}),"\n",(0,i.jsxs)(n.p,{children:["This devnet was the first time ",(0,i.jsx)(n.code,{children:"charon dkg"})," was tested with users. A core focus of this devnet was to collect network performance data."]}),"\n",(0,i.jsx)(n.p,{children:"This was also the first time Charon was run in variable, non-virtual networks (i.e. the real internet)."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Participants:"})," Obol Dev Team, Client team advisors."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"State:"})," Pre-product"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Network:"})," Kiln"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Completed Date:"})," July 2022"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Duration:"})," 2 weeks"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Goals:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Groups of 4 testers complete a group onboarding tutorial, using ",(0,i.jsx)(n.code,{children:"docker compose"})," to spin up 4 Charon clients, each on their own machine at each operator's home or their place of choosing, running at least a kiln consensus client."]}),"\n",(0,i.jsx)(n.li,{children:"Operators avoid exposing Charon to the public internet on a static IP address through the use of Obol-hosted relay nodes."}),"\n",(0,i.jsxs)(n.li,{children:["Users test ",(0,i.jsx)(n.code,{children:"charon dkg"}),". The launchpad is not used, and this dkg is triggered by a manifest config file created locally by a single operator using the ",(0,i.jsx)(n.code,{children:"charon create dkg"})," command."]}),"\n",(0,i.jsx)(n.li,{children:"Effective collection of network performance data, to enable gathering even higher signal performance data at scale during public testnets."}),"\n",(0,i.jsx)(n.li,{children:"Block proposals are in place."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"athena-public-testnet-1",children:"Athena Public Testnet 1"}),"\n",(0,i.jsx)(n.p,{children:"With tutorials for solo and group flows having been developed and refined. The goal for public testnet 1 was to get distributed validators into the hands of the wider Obol Community for the first time. The core focus of this testnet was the onboarding experience."}),"\n",(0,i.jsx)(n.p,{children:"The core output from this testnet was a significant number of public cluster running and public feedback collected."}),"\n",(0,i.jsx)(n.p,{children:"This was an unincentivised testnet and formed the basis for us to figure out a Sybil resistance mechanism."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Participants:"})," Obol Community"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"State:"})," Bare Minimum"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Network:"})," G\xf6rli"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Completed date:"})," October 2022"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Duration:"})," 2 weeks cluster setup, 8 weeks operation"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Goals:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Get distributed validators into the hands of the Obol Early Community for the first time."}),"\n",(0,i.jsx)(n.li,{children:"Create the first public onboarding experience and gather feedback. This is the first time we need to provide comprehensive instructions for as many platforms (Unix, Mac, Windows) as possible."}),"\n",(0,i.jsx)(n.li,{children:"Make deploying Ethereum validator nodes accessible using the CLI."}),"\n",(0,i.jsx)(n.li,{children:"Generate a backlog of bugs, feature requests, platform requests and integration requests."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"bia-public-testnet-2",children:"Bia Public Testnet 2"}),"\n",(0,i.jsx)(n.p,{children:"This second public testnet intends to take the learning from Athena and scale the network by engaging both the wider at-home validator community and professional operators. This is the first time users are setting up DVs using the DV launchpad."}),"\n",(0,i.jsx)(n.p,{children:"This testnet is also important for learning the conditions Charon will be subjected to in production. A core output of this testnet is a large number of autonomous public DV clusters running and building up the Obol community with technical ambassadors."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Participants:"})," Obol Community, Ethereum staking community"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"State:"})," MVP"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Network:"})," G\xf6rli"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Target Completed date:"})," March 2023"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Duration:"})," 2 weeks cluster setup, 4-8 weeks operation"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Goals:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Engage the wider Solo and Professional Ethereum Staking Community."}),"\n",(0,i.jsx)(n.li,{children:"Get integration feedback."}),"\n",(0,i.jsx)(n.li,{children:"Build confidence in Charon after running DVs on an Ethereum testnet."}),"\n",(0,i.jsx)(n.li,{children:"Learn about the conditions Charon will be subjected to in production."}),"\n",(0,i.jsx)(n.li,{children:"Distributed Validator returns are competitive versus single validator clients."}),"\n",(0,i.jsx)(n.li,{children:"Make deploying Ethereum validator nodes accessible using the DV Launchpad."}),"\n",(0,i.jsx)(n.li,{children:"Build comprehensive guides for various profiles to spin up DVs with minimal supervision from the core team."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"circe-attack-net",children:"Circe Attack Net"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Participants:"})," Obol Community, Immunefi Bug Bounty searchers, Code4rena.io"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"State:"})," Client Hardening"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Network:"})," G\xf6rli"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Target Completed Date:"})," June 2023"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Duration:"})," 2-4 weeks operation, depending on how resilient the clients are"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Goals:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Break Charon, the DV launchpad, and the API in multiple ways after having focused primarily on the happy path during the previous testnets."}),"\n",(0,i.jsx)(n.li,{children:"Create a number of testing tools to facilitate the disruption of Charon, including releasing a p2p network abuser, a fuzz testing client, k6 scripts for load testing/hammering RPC endpoints and more."}),"\n",(0,i.jsx)(n.li,{children:"Find as many memory leaks, DoS vulnerable endpoints and operations, missing signature verifications and more."}),"\n",(0,i.jsx)(n.li,{children:"This testnet may be centered around a hackathon if suitable."}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var s=t(96540);const i={},r=s.createContext(i);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);