"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[8137],{94850:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>s,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"int/working-groups","title":"Working groups","description":"Obol Network\'s working group structure.","source":"@site/versioned_docs/version-v0.12.0/int/working-groups.md","sourceDirName":"int","slug":"/int/working-groups","permalink":"/v0.12.0/int/working-groups","draft":false,"unlisted":false,"editUrl":"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.12.0/int/working-groups.md","tags":[],"version":"v0.12.0","sidebarPosition":5,"frontMatter":{"sidebar_position":5,"description":"Obol Network\'s working group structure."},"sidebar":"tutorialSidebar","previous":{"title":"Run a cluster with MEV-Boost","permalink":"/v0.12.0/int/quickstart/quickstart-builder-api"},"next":{"title":"Frequently asked questions","permalink":"/v0.12.0/int/faq/general"}}');var o=n(74848),r=n(28453);const s={sidebar_position:5,description:"Obol Network's working group structure."},a="Working groups",l={},d=[{value:"The Obol ecosystem",id:"the-obol-ecosystem",level:2},{value:"Working group formation",id:"working-group-formation",level:2},{value:"The DVK working group",id:"the-dvk-working-group",level:2},{value:"Phases",id:"phases",level:2},{value:"Phase 0 participation",id:"phase-0-participation",level:3},{value:"Phase 1 participation",id:"phase-1-participation",level:3},{value:"Phase 1.5 participation",id:"phase-15-participation",level:3},{value:"Phase progress",id:"phase-progress",level:2},{value:"Working group key objectives",id:"working-group-key-objectives",level:2},{value:"1. Standardize the format of DVKs through EIPs",id:"1-standardize-the-format-of-dvks-through-eips",level:3},{value:"2. A CLI program for distributed validator key (DVK) ceremonies",id:"2-a-cli-program-for-distributed-validator-key-dvk-ceremonies",level:3},{value:"3. A Distributed validator launchpad",id:"3-a-distributed-validator-launchpad",level:3},{value:"Working group participants",id:"working-group-participants",level:2}];function h(e){const i={a:"a",del:"del",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.header,{children:(0,o.jsx)(i.h1,{id:"working-groups",children:"Working groups"})}),"\n",(0,o.jsx)(i.p,{children:"The Obol Network is a distributed consensus protocol and ecosystem with a mission to eliminate single points of technical failure risks on Ethereum via Distributed Validator Technology (DVT). The project has reached the point where increasing the community coordination, participation, and ownership will drive significant impact on the growth of the core technology. As a result, the Obol Labs team will open workstreams and incentives to the community, with the first working group being dedicated to the creation process of distributed validators."}),"\n",(0,o.jsx)(i.p,{children:"This document intends to outline what Obol is, how the ecosystem is structured, how it plans to evolve, and what the first working group will consist."}),"\n",(0,o.jsx)(i.h2,{id:"the-obol-ecosystem",children:"The Obol ecosystem"}),"\n",(0,o.jsx)(i.p,{children:"The Obol Network consists of four core public goods:"}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsxs)(i.li,{children:["\n",(0,o.jsxs)(i.p,{children:[(0,o.jsx)(i.strong,{children:"The DVK Launchpad"})," - a CLI tool and user interface for bootstrapping Distributed Validators"]}),"\n"]}),"\n",(0,o.jsxs)(i.li,{children:["\n",(0,o.jsxs)(i.p,{children:[(0,o.jsx)(i.strong,{children:"Charon"})," - a middleware client that enables validators to run in a fault-tolerant, distributed manner"]}),"\n"]}),"\n",(0,o.jsxs)(i.li,{children:["\n",(0,o.jsxs)(i.p,{children:[(0,o.jsx)(i.strong,{children:"Obol Managers"})," - a set of solidity smart contracts for the formation of Distributed Validators"]}),"\n"]}),"\n",(0,o.jsxs)(i.li,{children:["\n",(0,o.jsxs)(i.p,{children:[(0,o.jsx)(i.strong,{children:"Obol Testnets"})," - a set of on-going public incentivised testnets that enable any sized operator to test their deployment before serving for the mainnet Obol Network"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(i.h2,{id:"working-group-formation",children:"Working group formation"}),"\n",(0,o.jsx)(i.p,{children:"Obol Labs aims to enable contributor diversity by opening the project to external participation. The contributors are then sorted into structured working groups early on, allowing many voices to collaborate on the standardisation and building of open source components."}),"\n",(0,o.jsx)(i.p,{children:"Each public good component will have a dedicated working group open to participation by members of the Obol community. The first working group is dedicated to the development of distributed validator keys and the DV Launchpad. This will allow participants to experiment with the Obol ecosystem and look for mutual long-term alignment with the project."}),"\n",(0,o.jsx)(i.p,{children:"The second working group will be focused on testnets after the first is completed."}),"\n",(0,o.jsx)(i.h2,{id:"the-dvk-working-group",children:"The DVK working group"}),"\n",(0,o.jsx)(i.p,{children:"The first working group that Obol will launch for participation is focused on the distributed validator key generation component of the Obol technology stack. This is an effort to standardize the creation of a distributed validator through EIPs and build a community launchpad tool, similar to the Eth2 Launchpad today (previously built by Obol core team members)."}),"\n",(0,o.jsx)(i.p,{children:"The distributed validator key (DVK) generation is a critical core capability of the protocol and more broadly an important public good for a variety of extended use cases. As a result, the goal of the working group is to take a community-led approach in defining, developing, and standardizing an open source distributed validator key generation tool and community launchpad."}),"\n",(0,o.jsx)(i.p,{children:"This effort can be broadly broken down into three phases:"}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsx)(i.li,{children:"Phase 0: POC testing, POC feedback, DKG implementation, EIP specification & submission"}),"\n",(0,o.jsx)(i.li,{children:"Phase 1: Launchpad specification and user feedback"}),"\n",(0,o.jsx)(i.li,{children:"Phase 1.5: Complimentary research (Multi-operator validation)"}),"\n"]}),"\n",(0,o.jsx)(i.h2,{id:"phases",children:"Phases"}),"\n",(0,o.jsx)(i.p,{children:"DVK WG members will have different responsibilities depending on their participation phase."}),"\n",(0,o.jsx)(i.h3,{id:"phase-0-participation",children:"Phase 0 participation"}),"\n",(0,o.jsx)(i.p,{children:"Phase 0 is focused on applied cryptography and security. The expected output of this phase is a CLI program for taking part in DVK ceremonies."}),"\n",(0,o.jsx)(i.p,{children:"Obol will specify and build an interactive CLI tool capable of generating distributed validator keys given a standardised configuration file and network access to coordinate with other participant nodes. This tool can be used by a single entity (synchronous) or a group of participants (semi-asynchronous)."}),"\n",(0,o.jsx)(i.p,{children:"The Phase 0 group is in the process of submitting EIPs for a Distributed Validator Key encoding scheme in line with EIP-2335, and a new EIP for encoding the configuration and secrets needed for a DKG process as the working group outlines."}),"\n",(0,o.jsx)(i.p,{children:(0,o.jsx)(i.strong,{children:"Participant responsibilities:"})}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsx)(i.li,{children:"Implementation testing and feedback"}),"\n",(0,o.jsx)(i.li,{children:"DKG Algorithm feedback"}),"\n",(0,o.jsx)(i.li,{children:"Ceremony security feedback"}),"\n",(0,o.jsx)(i.li,{children:"Experience in Go, Rust, Solidity, or applied cryptography"}),"\n"]}),"\n",(0,o.jsx)(i.h3,{id:"phase-1-participation",children:"Phase 1 participation"}),"\n",(0,o.jsx)(i.p,{children:"Phase 1 is focused on the development of the DV LaunchPad, an open source SPA web interface for facilitating DVK ceremonies with authenticated counterparties."}),"\n",(0,o.jsx)(i.p,{children:"To facilitate the generation of distributed validator keys amongst remote users with high trust, Obol Labs intends to develop and maintain a website that enables a group of users to generate the configuration required for a DVK generation ceremony."}),"\n",(0,o.jsx)(i.p,{children:"The Obol Labs team is collaborating with Deep Work Studio on a multi-week design and user feedback session that began on April 1st. The collaborative design and prototyping sessions include the Obol core team and genesis community members. All sessions will be recorded and published publicly."}),"\n",(0,o.jsx)(i.p,{children:(0,o.jsx)(i.strong,{children:"Participant responsibilities:"})}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsx)(i.li,{children:"DV LaunchPad architecture feedback"}),"\n",(0,o.jsx)(i.li,{children:"Participate in 2 rounds of syncronous user testing with the Deep Work team (April 6-10 & April 18-22)"}),"\n",(0,o.jsx)(i.li,{children:"Testnet Validator creation"}),"\n"]}),"\n",(0,o.jsx)(i.h3,{id:"phase-15-participation",children:"Phase 1.5 participation"}),"\n",(0,o.jsx)(i.p,{children:"Phase 1.5 is focused on formal research on the demand and understanding of multi-operator validation. This will be a separate research effort that will be taken place by Georgia Rakusen. This research will be turned into a formal report and distributed for free to the ethereum community. Participation in Phase 1.5 is user interview based and involves psychology based testing. This effort began in early April."}),"\n",(0,o.jsx)(i.p,{children:(0,o.jsx)(i.strong,{children:"Participant responsibilities:"})}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsx)(i.li,{children:"Complete asyncronous survey"}),"\n",(0,o.jsx)(i.li,{children:"Pass the survery to profile users to enhance the depth of the research effort"}),"\n",(0,o.jsx)(i.li,{children:"Produce design assets for the final resarch artifact"}),"\n"]}),"\n",(0,o.jsx)(i.h2,{id:"phase-progress",children:"Phase progress"}),"\n",(0,o.jsx)(i.p,{children:"The Obol core team has begun work on all three phases of the effort, and will present draft versions as well as launch Discord channels for each phase when relevant. Below is a status update of where the core team is with each phase as of today."}),"\n",(0,o.jsx)(i.p,{children:(0,o.jsx)(i.strong,{children:"Progress:"})}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsx)(i.li,{children:"Phase 0: 70%"}),"\n",(0,o.jsx)(i.li,{children:"Phase 1: 65%"}),"\n",(0,o.jsx)(i.li,{children:"Phase 1.5: 30%"}),"\n"]}),"\n",(0,o.jsx)(i.p,{children:"The core team plans to release the different phases for proto community feedback as they approach 75% completion."}),"\n",(0,o.jsx)(i.h2,{id:"working-group-key-objectives",children:"Working group key objectives"}),"\n",(0,o.jsx)(i.p,{children:"The deliverables of this working group are:"}),"\n",(0,o.jsx)(i.h3,{id:"1-standardize-the-format-of-dvks-through-eips",children:"1. Standardize the format of DVKs through EIPs"}),"\n",(0,o.jsx)(i.p,{children:"One of the many successes in the Ethereum development community is the high levels of support from all client teams around standardised file formats. It is critical that we all work together as a working group on this specific front."}),"\n",(0,o.jsx)(i.p,{children:"Two examples of such standards in the consensus client space include:"}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsxs)(i.li,{children:["\n",(0,o.jsx)(i.p,{children:"EIP-2335: A JSON format for the storage and interchange of BLS12-381 private keys"}),"\n"]}),"\n",(0,o.jsxs)(i.li,{children:["\n",(0,o.jsx)(i.p,{children:"EIP-3076: Slashing Protection Interchange Format\ndistributed validator key encoding scheme in line with EIP-2335, and a new EIP for encoding the configuration and secrets needed for a DV Cluster that has outputs based on the working groups feedback. Outputs from the DVK ceremony may include:"}),"\n"]}),"\n",(0,o.jsxs)(i.li,{children:["\n",(0,o.jsx)(i.p,{children:"Signed validator deposit data files"}),"\n"]}),"\n",(0,o.jsxs)(i.li,{children:["\n",(0,o.jsx)(i.p,{children:"Signed exit validator messages"}),"\n"]}),"\n",(0,o.jsxs)(i.li,{children:["\n",(0,o.jsx)(i.p,{children:"Private key shares for each operator's validator client"}),"\n"]}),"\n",(0,o.jsxs)(i.li,{children:["\n",(0,o.jsx)(i.p,{children:"Distributed Validator Cluster manifests to bind each node together"}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(i.h3,{id:"2-a-cli-program-for-distributed-validator-key-dvk-ceremonies",children:"2. A CLI program for distributed validator key (DVK) ceremonies"}),"\n",(0,o.jsx)(i.p,{children:"One of the key successes of Proof of Stake Ethereum's launch was the availability of high quality CLI tools for generating Ethereum validator keys including eth2.0-deposit-cli and ethdo."}),"\n",(0,o.jsx)(i.p,{children:"The working group will ship a similar CLI tool capable of generating distributed validator keys given a standardised configuration and network access to coordinate with other participant nodes."}),"\n",(0,o.jsx)(i.p,{children:"As of March 1st, the WG is testing a POC DKG CLI based on Kobi Gurkan's previous work. In the coming weeks we will submit EIPs and begin to implement our DKG CLI in line with our V0.5 specs and the WG's feedback."}),"\n",(0,o.jsx)(i.h3,{id:"3-a-distributed-validator-launchpad",children:"3. A Distributed validator launchpad"}),"\n",(0,o.jsxs)(i.p,{children:["To activate an Ethereum validator you need to deposit 32 ether into the official deposit contract. The vast majority of users that created validators to date have used the ",(0,o.jsx)(i.strong,{children:(0,o.jsxs)(i.a,{href:"https://launchpad.ethereum.org/",children:[(0,o.jsx)(i.del,{children:"Eth2"})," Staking Launchpad"]})}),", a public good open source website built by the Ethereum Foundation and participants that later went on to found Obol. This tool has been wildly successful in the safe and educational creation of a significant number of validators on the Ethereum mainnet."]}),"\n",(0,o.jsx)(i.p,{children:"To facilitate the generation of distributed validator keys amongst remote users with high trust, Obol Labs will host and maintain a website that enables a group of users to generate distributed validator keys together using a DKG ceremony in-browser."}),"\n",(0,o.jsx)(i.p,{children:"Over time, the DV LaunchPads features will primarily extended the spectrum of trustless key generation. The V1 featues of the launchpad can be user tested and commented on by anyone in the Obol Proto Community!"}),"\n",(0,o.jsx)(i.h2,{id:"working-group-participants",children:"Working group participants"}),"\n",(0,o.jsx)(i.p,{children:"The members of the Phase 0 working group are:"}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsx)(i.li,{children:"The Obol genesis community"}),"\n",(0,o.jsx)(i.li,{children:"Ethereum Foundation (Carl, Dankrad, Aditya)"}),"\n",(0,o.jsx)(i.li,{children:"Ben Edgington"}),"\n",(0,o.jsx)(i.li,{children:"Jim McDonald"}),"\n",(0,o.jsx)(i.li,{children:"Prysmatic Labs"}),"\n",(0,o.jsx)(i.li,{children:"Sourav Das"}),"\n",(0,o.jsx)(i.li,{children:"Mamy Ratsimbazafy"}),"\n",(0,o.jsx)(i.li,{children:"Kobi Gurkan"}),"\n",(0,o.jsx)(i.li,{children:"Coinbase Cloud"}),"\n"]}),"\n",(0,o.jsxs)(i.p,{children:["The intended universe of Phase 1 & Phase 1.5 will launch with no initial members, though they will immediately be available for submission by participants that have joined the Obol Proto community right ",(0,o.jsx)(i.a,{href:"https://pwxy2mff03w.typeform.com/to/Kk0TfaYF",children:"here"}),". Everyone can join the proto community; however, working group participation will be based on relevance and skill set."]})]})}function c(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,o.jsx)(i,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},28453:(e,i,n)=>{n.d(i,{R:()=>s,x:()=>a});var t=n(96540);const o={},r=t.createContext(o);function s(e){const i=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(r.Provider,{value:i},e.children)}}}]);