"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[79282],{77980:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"testnet","title":"Testnets","description":"Testnet Roadmap","source":"@site/versioned_docs/version-v0.5.0/testnet.md","sourceDirName":".","slug":"/testnet","permalink":"/v0.5.0/testnet","draft":false,"unlisted":false,"editUrl":"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.5.0/testnet.md","tags":[],"version":"v0.5.0","sidebarPosition":13,"frontMatter":{"sidebar_position":13},"sidebar":"tutorialSidebar","previous":{"title":"Golang resources","permalink":"/v0.5.0/fr/golang"},"next":{"title":"Glossary","permalink":"/v0.5.0/glossary"}}');var s=n(74848),r=n(28453);const a={sidebar_position:13},o="Testnets",l={},d=[{value:"Devnet 1",id:"devnet-1",level:2},{value:"Devnet 2",id:"devnet-2",level:2},{value:"Athena Public Testnet 1",id:"athena-public-testnet-1",level:2},{value:"Bia Attack Net",id:"bia-attack-net",level:2},{value:"Cerce Public Testnet II",id:"cerce-public-testnet-ii",level:2},{value:"Demeter Red/Blue Net",id:"demeter-redblue-net",level:2}];function c(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",img:"img",input:"input",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"testnets",children:"Testnets"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Testnet Roadmap",src:n(84216).A+"",width:"941",height:"70"})}),"\n",(0,s.jsx)(t.p,{children:"Over the coming quarters, Obol Labs will be coordinating and hosting a number of progressively larger testnets to help harden the charon client and iterate on the key generation tooling."}),"\n",(0,s.jsx)(t.p,{children:"The following is a break down of the intended testnet roadmap, the features that are to be complete by each testnet, and their target start date and durations."}),"\n",(0,s.jsx)(t.h1,{id:"testnets-1",children:"Testnets"}),"\n",(0,s.jsxs)(t.ul,{className:"contains-task-list",children:["\n",(0,s.jsxs)(t.li,{className:"task-list-item",children:[(0,s.jsx)(t.input,{type:"checkbox",disabled:!0})," ","Dev Net 1"]}),"\n",(0,s.jsxs)(t.li,{className:"task-list-item",children:[(0,s.jsx)(t.input,{type:"checkbox",disabled:!0})," ","Dev Net 2"]}),"\n",(0,s.jsxs)(t.li,{className:"task-list-item",children:[(0,s.jsx)(t.input,{type:"checkbox",disabled:!0})," ","Athena Public Testnet 1"]}),"\n",(0,s.jsxs)(t.li,{className:"task-list-item",children:[(0,s.jsx)(t.input,{type:"checkbox",disabled:!0})," ","Bia Attack net"]}),"\n",(0,s.jsxs)(t.li,{className:"task-list-item",children:[(0,s.jsx)(t.input,{type:"checkbox",disabled:!0})," ","Circe Public Testnet 2"]}),"\n",(0,s.jsxs)(t.li,{className:"task-list-item",children:[(0,s.jsx)(t.input,{type:"checkbox",disabled:!0})," ","Demeter Red/Blue net"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"devnet-1",children:"Devnet 1"}),"\n",(0,s.jsx)(t.p,{children:"The first devnet aim will be to have a number of trusted operators test out our earliest tutorial flows. The aim will be for a single user to complete these tutorials alone, using docker compose to spin up 4 charon clients and 4 different validator clients (lighthouse, teku, lodestar and vouch) on a single machine, with the option of adding a single consensus layer client from a weak subjectivity checkpoint (the default will be to connect to our Kiln RPC server, we shouldn't get too much load for this phase). The keys will be created locally in charon, and activated with the existing launchpad or ethdo."}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Participants:"})," Obol Dev Team, Client team advisors."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"State:"})," Pre-product"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Network:"})," Kiln"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Target start date:"})," May 2022"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Duration:"})," 1 week"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Goals:"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"User test a first tutorial flow to get the kinks out of it. Devnet 2 will be a group flow, so we need to get the solo flow right first"}),"\n",(0,s.jsx)(t.li,{children:"Prove the distributed validator paradigm with 4 separate VC implementations together operating as one logical validator works"}),"\n",(0,s.jsx)(t.li,{children:"Get the basics of monitoring in place, for the following testnet where accurate monitoring will be important due to charon running across a newtwork."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Test Artifacts:"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Responding to a typeform, an operator will list:","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"The public key of the distributed validator"}),"\n",(0,s.jsx)(t.li,{children:"Any difficulties they incurred in the cluster instantiation"}),"\n",(0,s.jsx)(t.li,{children:"Any deployment variations they would like to see early support for (e.g. windows, cloud, dappnode etc.)"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"devnet-2",children:"Devnet 2"}),"\n",(0,s.jsxs)(t.p,{children:["The second devnet aim will be to have a number of trusted operators test out our earliest tutorial flows ",(0,s.jsx)(t.em,{children:"together"})," for the first time."]}),"\n",(0,s.jsx)(t.p,{children:"The aim will be for groups of 4 testers to complete a group onboarding tutorial, using docker compose to spin up 4 charon clients and 4 different validator clients (lighthouse, teku, lodestar and vouch), each on their own machine at each operators home or their place of choosing, running at least a kiln consensus client."}),"\n",(0,s.jsx)(t.p,{children:"As part of this testnet, operators will need to expose charon to the public internet on a static IP address."}),"\n",(0,s.jsxs)(t.p,{children:["This devnet will also be the first time ",(0,s.jsx)(t.code,{children:"charon dkg"})," is tested with users. The launchpad is not anticipated to be complete, and this dkg will be triggered by a manifest config file created locally by a single operator using the ",(0,s.jsx)(t.code,{children:"charon create dkg"})," command."]}),"\n",(0,s.jsx)(t.p,{children:"A core focus of this devnet will be to collect network performance data. This will be the first time we will have charon run in variable, non-virtual networks (i.e. the real internet). Focusing on effective collection of performance data in this devnet will be a core focus, to enable gathering even higher signal performance data at scale during public testnets."}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Participants:"})," Obol Dev Team, Client team advisors."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"State:"})," Pre-product"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Network:"})," Kiln"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Target start date:"})," May 2022"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Duration:"})," 2 weeks"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Goals:"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"User test a first dkg flow"}),"\n",(0,s.jsx)(t.li,{children:"User test the complexity of exposing charon to the public internet"}),"\n",(0,s.jsx)(t.li,{children:"Have block proposals in place"}),"\n",(0,s.jsx)(t.li,{children:"Build up the analytics plumbing to injest network traces from dump files or distributed tracing endpoints"}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"athena-public-testnet-1",children:"Athena Public Testnet 1"}),"\n",(0,s.jsx)(t.p,{children:"With tutorials for solo and group flows having been developed and refined. The goal for public testnet 1 is to get distributed validators into the hands of the wider Proto Community for the first time."}),"\n",(0,s.jsx)(t.p,{children:"This testnet would be intended to include the Distributed Validator Launchpad."}),"\n",(0,s.jsx)(t.p,{children:"The core focus of this testnet is the onboarding experience. This is the first time we would need to provide comprehensive instructions for as many platforms (Unix, Mac, Windows) in as many languages as possible (need to engage language moderators on discord)."}),"\n",(0,s.jsx)(t.p,{children:"The core output from this testnet is a large number of typeform submissions, for a feedback form we have refined since devnets 1 and 2."}),"\n",(0,s.jsx)(t.p,{children:"This will be an unincentivised testnet, and will form as the basis for us figuring out a sybil resistance mechanism for later incentivised testnets."}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Participants:"})," Obol Proto Community"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"State:"})," Bare Minimum"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Network:"})," Kiln or a Merged Test Network (e.g. G\xf6rli)"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Target start date:"})," June 2022"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Duration:"})," 2 week setup, 4 weeks operation"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Goals:"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Engage Obol Proto Community"}),"\n",(0,s.jsx)(t.li,{children:"Make deploying Ethereum validator nodes accessible"}),"\n",(0,s.jsx)(t.li,{children:"Generate a huge backlog of bugs, feature requests, platform requests and integration requests"}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"bia-attack-net",children:"Bia Attack Net"}),"\n",(0,s.jsx)(t.p,{children:"At this point, we have tested best-effort, happy-path validation with supportive participants. The next step towards a mainnet ready client is to begin to disrupt and undermine it as much as possible."}),"\n",(0,s.jsx)(t.p,{children:"This testnet needs a consensus implementation as a hard requirement, where it may have been optional for Athena. The intention is to create a number of testing tools to facilitate the disruption of charon, including releasing a p2p network abuser, a fuzz testing client, k6 scripts for load testing/hammering an RPC endpoints and more."}),"\n",(0,s.jsx)(t.p,{children:"The aim is to find as many memory leaks, DoS vulnerable endpoints and operations, missing signature verifications and more. This testnet may be centered around a hackathon if suitable."}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Participants:"})," Obol Proto Community, Immunefi Bug Bounty searchers"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"State:"})," Client Hardening"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Network:"})," Kiln or a Merged Test Network (e.g. G\xf6rli)"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Target start date:"})," August 2022"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Duration:"})," 2-4 weeks operation, depending on how resilient the clients are"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Network:"})," Merged Test Network (e.g. G\xf6rli)"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Goals:"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Break charon in multiple ways"}),"\n",(0,s.jsx)(t.li,{children:"Improve DoS resistance"}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"cerce-public-testnet-ii",children:"Cerce Public Testnet II"}),"\n",(0,s.jsx)(t.p,{children:"After working through the vulnerabilities hopefully surfaced during the attack net, it becomes time to take the stakes up a notch. The second public testnet for Obol will be in partnership with the Gnosis Chain, and will use validators with real skin in the game."}),"\n",(0,s.jsx)(t.p,{children:"This is intended to be the first time that Distributed Validator tokenisation comes into play. Obol intends to let candidate operators form groups, create keys that point to pre-defined Obol controlled withdrawal addresses, and submit a typeform application to our testnet team including their created deposit data and manifest lockfile and exit data. (So we can verify the validator pubkey they are submitting is a DV)"}),"\n",(0,s.jsx)(t.p,{children:"Once the testnet team has verified the operators as real humans not sybil attacking the testnet that have created legitimate DV keys, their validator will be activated with Obol GNO."}),"\n",(0,s.jsx)(t.p,{children:"At the end of the testnet period, all validators will be exited, and their performance will be judged to decide the incentivisation they will recieve."}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Participants:"})," Obol Proto Community, Gnosis Community, Ethereum Staking Community"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"State:"})," MVP"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Network:"})," Merged Gnosis Chain"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Target start date:"})," September 2022 (",(0,s.jsx)(t.a,{href:"https://www.dappcon.io/",children:"Dappcon"})," runs 12th-14th of Sept. )"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Duration:"})," 6 weeks"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Network:"})," Merged Gnosis Chain"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Goals:"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Broad community participation"}),"\n",(0,s.jsx)(t.li,{children:"First Obol Incentivised Testnet"}),"\n",(0,s.jsx)(t.li,{children:"Distributed Validator returns competetive versus single validator clients"}),"\n",(0,s.jsx)(t.li,{children:"Run an unreasonably large percentage of an incentivised test network to see the network performance at scale if a majority of validators moved to DV architectures"}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"demeter-redblue-net",children:"Demeter Red/Blue Net"}),"\n",(0,s.jsx)(t.p,{children:"The final planned testnet before a prospective look at mainnet deployment is a testnet that takes inspiration for the Cyber Security industry and makes use of Red Teams and Blue Teams."}),"\n",(0,s.jsx)(t.p,{children:"In Cyber Security, Red team are on offense, Blue team are on defence. In Obol's case, Operators will be grouped into clusters based on application and are assigned to either red team or blue team in secret. Once the validators are active, it will be the red teamers goal to disrupt the cluster to the best of their ability, and their rewards will be based on how much worse the cluster performs than optimal."}),"\n",(0,s.jsx)(t.p,{children:"The blue team members will aim to keep their cluster online and signing. If they can keep their distributed validator online for the majority of time despite the red teams best efforts, they will recieve an outsized reward versus the red team reward."}),"\n",(0,s.jsx)(t.p,{children:"The aim of this testnet is to show that even with directly incentivised byzantine actors, that a distributed validator client can remain online and timely in it's validation, further cementing trust in the clients mainnet readiness."}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Participants:"})," Obol Proto Community, Gnosis Community, Ethereum Staking Community, Immunefi Bug Bounty searchers"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"State:"})," Mainnet ready"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Network:"})," Merged Gnosis Chain"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Target start date:"})," October 2022 (",(0,s.jsx)(t.a,{href:"https://devcon.org/en/#road-to-devcon",children:"Devcon 6"})," runs 7th-16th of October. )"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Duration:"})," 4 weeks"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Network:"})," Merged Gnosis Chain"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Goals:"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Even with incentivised byzantine actors, distributed validators can reliably stay online"}),"\n",(0,s.jsx)(t.li,{children:"Charon nodes cannot be DoS'd"}),"\n",(0,s.jsx)(t.li,{children:"Demonstrate that fault tolerant validation is real, safe and cost competetive."}),"\n",(0,s.jsx)(t.li,{children:"Charon is feature complete and ready for audit"}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},84216:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/ObolTestnetRoadmap-e060a99ac5f35a356eb2329ce68fea8f.png"},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>o});var i=n(96540);const s={},r=i.createContext(s);function a(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);