"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[15202],{41365:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var i=n(74848),r=n(28453);const o={sidebar_position:10,description:"Frequently asked questions"},a="Frequently asked questions",s={id:"int/faq",title:"Frequently asked questions",description:"Frequently asked questions",source:"@site/versioned_docs/version-v0.10.0/int/faq.md",sourceDirName:"int",slug:"/int/faq",permalink:"/docs/v0.10.0/int/faq",draft:!1,unlisted:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.10.0/int/faq.md",tags:[],version:"v0.10.0",sidebarPosition:10,frontMatter:{sidebar_position:10,description:"Frequently asked questions"},sidebar:"tutorialSidebar",previous:{title:"Working groups",permalink:"/docs/v0.10.0/int/working-groups"},next:{title:"Introducing Charon",permalink:"/docs/v0.10.0/dv/introducing-charon"}},d={},l=[{value:"General",id:"general",level:2},{value:"Does Obol have a token?",id:"does-obol-have-a-token",level:3},{value:"Where can I learn more about Distributed Validators?",id:"where-can-i-learn-more-about-distributed-validators",level:3},{value:"What&#39;s with the name Charon?",id:"whats-with-the-name-charon",level:3},{value:"What are the hardware requirements for running a Charon node?",id:"what-are-the-hardware-requirements-for-running-a-charon-node",level:3},{value:"Migrating existing validators",id:"migrating-existing-validators",level:2},{value:"Can I keep my existing validator client?",id:"can-i-keep-my-existing-validator-client",level:3},{value:"Can I migrate my existing validator into a distributed validator?",id:"can-i-migrate-my-existing-validator-into-a-distributed-validator",level:3},{value:"ENR &amp; Keys",id:"enr--keys",level:2},{value:"What is an ENR?",id:"what-is-an-enr",level:3},{value:"How do I get my ENR if I want to generate it again?",id:"how-do-i-get-my-enr-if-i-want-to-generate-it-again",level:3},{value:"What do I do if lose my charon-enr-private-key?",id:"what-do-i-do-if-lose-my-charon-enr-private-key",level:3},{value:"I have run the command in Step 1 of the quickstart but I can&#39;t find the created private key anywhere.",id:"i-have-run-the-command-in-step-1-of-the-quickstart-but-i-cant-find-the-created-private-key-anywhere",level:3},{value:"Distributed Key Generation",id:"distributed-key-generation",level:2},{value:"How to run a successful DKG?",id:"how-to-run-a-successful-dkg",level:3},{value:"What are the min and max numbers of operators for a Distributed Validator?",id:"what-are-the-min-and-max-numbers-of-operators-for-a-distributed-validator",level:3},{value:"Debugging Errors in Logs",id:"debugging-errors-in-logs",level:2}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"frequently-asked-questions",children:"Frequently asked questions"})}),"\n",(0,i.jsx)(t.h2,{id:"general",children:"General"}),"\n",(0,i.jsx)(t.h3,{id:"does-obol-have-a-token",children:"Does Obol have a token?"}),"\n",(0,i.jsx)(t.p,{children:"No. Distributed validators use only ether."}),"\n",(0,i.jsx)(t.h3,{id:"where-can-i-learn-more-about-distributed-validators",children:"Where can I learn more about Distributed Validators?"}),"\n",(0,i.jsxs)(t.p,{children:["Have you checked out our ",(0,i.jsx)(t.a,{href:"https://blog.obol.tech",children:"blog site"})," and ",(0,i.jsx)(t.a,{href:"https://twitter.com/ObolNetwork",children:"twitter"})," yet? Maybe join our ",(0,i.jsx)(t.a,{href:"https://discord.gg/obol",children:"discord"})," too."]}),"\n",(0,i.jsx)(t.h3,{id:"whats-with-the-name-charon",children:"What's with the name Charon?"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"https://www.theoi.com/Khthonios/Kharon.html",children:"Charon"})," is the Ancient Greek Ferryman of the Dead. He was tasked with bringing people across the Acheron river to the underworld. His fee was one Obol coin, placed in the mouth of the deceased. This tradition of placing a coin or Obol in the mouth of the deceased continues to this day across the Greek world."]}),"\n",(0,i.jsx)(t.h3,{id:"what-are-the-hardware-requirements-for-running-a-charon-node",children:"What are the hardware requirements for running a Charon node?"}),"\n",(0,i.jsx)(t.p,{children:"It should be the same as running a normal post-merge Ethereum node. It would be easiest with 16GB of RAM, 500GB of disk and 8MB/s of internet bandwidth, though lower resourced machines can probably be used with some effort."}),"\n",(0,i.jsx)(t.p,{children:"Charon alone uses negligible disk space of not more than a few MBs. However if you are running your consensus client and execution client on the same server with charon then you will need 500GB of free SSD disk space (assuming you are running a testnet chain, mainnet requires 1TB or more disk space ideally)."}),"\n",(0,i.jsxs)(t.p,{children:["For now, Teku & Lighthouse clients are packaged within the docker compose file provided in the ",(0,i.jsx)(t.a,{href:"./quickstart/",children:"quickstart guides"}),", so you don't have to install anything else to run a cluster. Just make sure you give them some time to sync once you start running your node."]}),"\n",(0,i.jsx)(t.h2,{id:"migrating-existing-validators",children:"Migrating existing validators"}),"\n",(0,i.jsx)(t.h3,{id:"can-i-keep-my-existing-validator-client",children:"Can I keep my existing validator client?"}),"\n",(0,i.jsxs)(t.p,{children:["Yes. Charon sits as a middleware between a validator client and it's beacon node. All validators that implement the standard REST API will be supported, along with all popular client delivery software such as DAppNode ",(0,i.jsx)(t.a,{href:"https://dappnode.github.io/explorer/#/",children:"packages"}),", Rocket Pool's ",(0,i.jsx)(t.a,{href:"https://github.com/rocket-pool/smartnode",children:"smart node"}),", StakeHouse's ",(0,i.jsx)(t.a,{href:"https://github.com/stake-house/wagyu",children:"wagyu"}),", and Stereum's ",(0,i.jsx)(t.a,{href:"https://stereum.net/development/#roadmap",children:"node launcher"}),"."]}),"\n",(0,i.jsx)(t.h3,{id:"can-i-migrate-my-existing-validator-into-a-distributed-validator",children:"Can I migrate my existing validator into a distributed validator?"}),"\n",(0,i.jsx)(t.p,{children:"It is possible to split an existing validator keystore into a set of key shares suitable for a distributed validator cluster, but it is a trusted distribution process which is not ideal compared to setting up a fresh cluster using a DKG ceremony where no operator ever has the full private key. Furthermore, if the old staking system is not safely shut down, it could pose a risk of slashing by double signing alongside the new distributed validator, please use extreme caution if migrating a validator, and make sure to wait at least three epochs offline to reduce the risk of double signing or surround voting."}),"\n",(0,i.jsx)(t.p,{children:"In an ideal scenario, a distributed validator's private key should never exist in full in a single location."}),"\n",(0,i.jsxs)(t.p,{children:["You can split an existing EIP-2335 keystore for a validator to migrate it to a distributed validator architecture with the ",(0,i.jsx)(t.code,{children:"charon create cluster --split-existing-keys"})," command documented ",(0,i.jsx)(t.a,{href:"/docs/v0.10.0/dv/charon_cli_reference#create-a-full-cluster-locally",children:"here"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"enr--keys",children:"ENR & Keys"}),"\n",(0,i.jsx)(t.h3,{id:"what-is-an-enr",children:"What is an ENR?"}),"\n",(0,i.jsxs)(t.p,{children:["An ENR is shorthand for an ",(0,i.jsx)(t.a,{href:"https://eips.ethereum.org/EIPS/eip-778",children:"Ethereum Node Record"}),". It is a way to represent a node on a public network, with a reliable mechanism to update its information. At Obol we use ENRs to identify charon nodes to one another such that they can form clusters with the right charon nodes and not impostors."]}),"\n",(0,i.jsxs)(t.p,{children:["ENRs have private keys they use to sign updates to the ",(0,i.jsx)(t.a,{href:"https://enr-viewer.com/",children:"data contained"})," in their ENR. This private key is by default found at ",(0,i.jsx)(t.code,{children:".charon/charon-enr-private-key"}),", and should be kept secure, and not checked into version control. An ENR looks something like this:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"enr:-JG4QAgAOXjGFcTIkXBO30aUMzg2YSo1CYV0OH8Sf2s7zA2kFjVC9ZQ_jZZItdE8gA-tUXW-rWGDqEcoQkeJ98Pw7GaGAYFI7eoegmlkgnY0gmlwhCKNyGGJc2VjcDI1NmsxoQI6SQlzw3WGZ_VxFHLhawQFhCK8Aw7Z0zq8IABksuJEJIN0Y3CCPoODdWRwgj6E\n"})}),"\n",(0,i.jsx)(t.h3,{id:"how-do-i-get-my-enr-if-i-want-to-generate-it-again",children:"How do I get my ENR if I want to generate it again?"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"cd"})," to the directory where your ",(0,i.jsx)(t.code,{children:".charon"})," folder is located (ex: ",(0,i.jsx)(t.code,{children:"cd /path/to/charon-distributed-validator-node/"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["Run ",(0,i.jsx)(t.code,{children:'docker run --rm -v "$(pwd):/opt/charon" obolnetwork/charon:latest enr'}),". This prints the ENR to your console."]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"what-do-i-do-if-lose-my-charon-enr-private-key",children:"What do I do if lose my charon-enr-private-key?"}),"\n",(0,i.jsx)(t.p,{children:"For now, ENR rotation/replacement is not supported, it will be supported in a future release. Therefore, it's advised to always keep a backup of your private-key in a secure location (e.g. a USB Flash drive)"}),"\n",(0,i.jsxs)(t.h3,{id:"i-have-run-the-command-in-step-1-of-the-quickstart-but-i-cant-find-the-created-private-key-anywhere",children:["I have run the command in Step 1 of the ",(0,i.jsx)(t.a,{href:"./quickstart/quickstart-group#step-1-creating-and-backing-up-a-private-key-for-charon",children:"quickstart"})," but I can't find the created private key anywhere."]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["The ",(0,i.jsx)(t.code,{children:"charon-enr-private-key"})," is generated inside a hidden folder ",(0,i.jsx)(t.code,{children:".charon"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["To view it, run ",(0,i.jsx)(t.code,{children:"ls -al"})," in your terminal."]}),"\n",(0,i.jsxs)(t.li,{children:["You can then copy the key to your ",(0,i.jsx)(t.code,{children:"~/Downloads"})," folder for easy access by running ",(0,i.jsx)(t.code,{children:"cp .charon/charon-enr-private-key ~/Downloads"}),". (This copy command will be different for Windows)"]}),"\n",(0,i.jsxs)(t.li,{children:["Alternatively, if you are on macOS, press ",(0,i.jsx)(t.code,{children:"Cmd + Shift + ."})," to make the ",(0,i.jsx)(t.code,{children:".charon"})," folder visible in the finder application."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"distributed-key-generation",children:"Distributed Key Generation"}),"\n",(0,i.jsx)(t.h3,{id:"how-to-run-a-successful-dkg",children:"How to run a successful DKG?"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Here is a helpful ",(0,i.jsx)(t.a,{href:"https://www.youtube.com/watch?v=94Pkovp5zoQ&ab_channel=ObolNetwork",children:"video walkthrough"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["You can also use ",(0,i.jsx)(t.a,{href:"https://docs.google.com/spreadsheets/d/1A-ncCgasaRZwRPlvrUqRFovNaUTOksNuQLFOqGCaxf8/edit#gid=0",children:"this worksheet"})," to easily follow the steps it outlines."]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"what-are-the-min-and-max-numbers-of-operators-for-a-distributed-validator",children:"What are the min and max numbers of operators for a Distributed Validator?"}),"\n",(0,i.jsx)(t.p,{children:"Currently, the minimum is 4 operators with a threshold of 3."}),"\n",(0,i.jsxs)(t.p,{children:["The threshold (aka quorum) corresponds to the minimum numbers of operators that need to be active for the validator(s) to be able to perform its(their) duties. It is defined by the following formula ",(0,i.jsx)(t.code,{children:"n-(ceil(n/3)-1)"}),". We strongly recommend using this default threshold in your DKG as it maximises liveness while maintaing BFT safety. Setting a 4 out of 4 cluster for example, would make your validator more vulnerable to going offline instead of less vulnerable. You can check threshold value in your ",(0,i.jsx)(t.a,{href:"/docs/v0.10.0/dv/distributed-validator-cluster-manifest#cluster-lock-file",children:(0,i.jsx)(t.code,{children:"cluster-lock.json"})})," file."]}),"\n",(0,i.jsx)(t.p,{children:"The maximum, honest answer, we don't know yet! It will depend heavily on your nodes network latency to talk to one another. The CLI caps out at 31 for now for a sane maximum. In practice, 10 nodes allows 3 nodes to fail at any one time, and probably is the largest cluster you should attempt for now unless you you're really experimenting \ud83d\ude05."}),"\n",(0,i.jsx)(t.p,{children:"By the way, the more operators, the longer the DKG, but don't worry, there is no limit in the timing for connecting nodes during the DKG."}),"\n",(0,i.jsx)(t.h2,{id:"debugging-errors-in-logs",children:"Debugging Errors in Logs"}),"\n",(0,i.jsxs)(t.p,{children:["You can check if the containers on your node are outputting errors by running ",(0,i.jsx)(t.code,{children:"docker-compose logs --tail 100 -f"})," on a machine with a running cluster."]}),"\n",(0,i.jsxs)(t.p,{children:["Diagnose some common errors and view their resolutions ",(0,i.jsx)(t.a,{href:"https://github.com/ObolNetwork/charon-distributed-validator-node#faqs",children:"here"}),"."]})]})}function c(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>s});var i=n(96540);const r={},o=i.createContext(r);function a(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);