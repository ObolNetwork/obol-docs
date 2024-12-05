"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[88171],{79790:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"int/faq/general","title":"Frequently asked questions","description":"Frequently asked questions","source":"@site/versioned_docs/version-v0.15.0/int/faq/general.md","sourceDirName":"int/faq","slug":"/int/faq/general","permalink":"/v0.15.0/int/faq/general","draft":false,"unlisted":false,"editUrl":"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.15.0/int/faq/general.md","tags":[],"version":"v0.15.0","sidebarPosition":1,"frontMatter":{"sidebar_position":1,"description":"Frequently asked questions"},"sidebar":"tutorialSidebar","previous":{"title":"Run a cluster on mainnet","permalink":"/v0.15.0/int/quickstart/quickstart-mainnet"},"next":{"title":"Errors & Resolutions","permalink":"/v0.15.0/int/faq/errors"}}');var i=n(74848),o=n(28453);const a={sidebar_position:1,description:"Frequently asked questions"},s="Frequently asked questions",l={},d=[{value:"General",id:"general",level:2},{value:"Does Obol have a token?",id:"does-obol-have-a-token",level:3},{value:"Where can I learn more about Distributed Validators?",id:"where-can-i-learn-more-about-distributed-validators",level:3},{value:"What&#39;s with the name Charon?",id:"whats-with-the-name-charon",level:3},{value:"What are the hardware requirements for running a Charon node?",id:"what-are-the-hardware-requirements-for-running-a-charon-node",level:3},{value:"Migrating existing validators",id:"migrating-existing-validators",level:2},{value:"Can I keep my existing validator client?",id:"can-i-keep-my-existing-validator-client",level:3},{value:"Can I migrate my existing validator into a distributed validator?",id:"can-i-migrate-my-existing-validator-into-a-distributed-validator",level:3},{value:"Can I migrate an existing Charon node to a new machine?",id:"can-i-migrate-an-existing-charon-node-to-a-new-machine",level:3},{value:"Distributed Key Generation",id:"distributed-key-generation",level:2},{value:"What are the min and max numbers of operators for a Distributed Validator?",id:"what-are-the-min-and-max-numbers-of-operators-for-a-distributed-validator",level:3},{value:"Debugging Errors in Logs",id:"debugging-errors-in-logs",level:2},{value:"Self-Host a Relay",id:"self-host-a-relay",level:2}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"frequently-asked-questions",children:"Frequently asked questions"})}),"\n",(0,i.jsx)(t.h2,{id:"general",children:"General"}),"\n",(0,i.jsx)(t.h3,{id:"does-obol-have-a-token",children:"Does Obol have a token?"}),"\n",(0,i.jsx)(t.p,{children:"No. Distributed validators use only Ether."}),"\n",(0,i.jsx)(t.h3,{id:"where-can-i-learn-more-about-distributed-validators",children:"Where can I learn more about Distributed Validators?"}),"\n",(0,i.jsxs)(t.p,{children:["Have you checked out our ",(0,i.jsx)(t.a,{href:"https://blog.obol.tech",children:"blog site"})," and ",(0,i.jsx)(t.a,{href:"https://twitter.com/ObolNetwork",children:"twitter"})," yet? Maybe join our ",(0,i.jsx)(t.a,{href:"https://discord.gg/n6ebKsX46w",children:"discord"})," too."]}),"\n",(0,i.jsx)(t.h3,{id:"whats-with-the-name-charon",children:"What's with the name Charon?"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"https://www.theoi.com/Khthonios/Kharon.html",children:"Charon"})," [kharon] is the Ancient Greek Ferryman of the Dead. He was tasked with bringing people across the Acheron river to the underworld. His fee was one Obol coin, placed in the mouth of the deceased. This tradition of placing a coin or Obol in the mouth of the deceased continues to this day across the Greek world."]}),"\n",(0,i.jsx)(t.h3,{id:"what-are-the-hardware-requirements-for-running-a-charon-node",children:"What are the hardware requirements for running a Charon node?"}),"\n",(0,i.jsx)(t.p,{children:"It should be the same as running a normal post-merge Ethereum node. It would be easiest with 16GB of RAM, 1TB of disk and 8MB/s of internet bandwidth, though lower resourced machines can probably be used with some effort."}),"\n",(0,i.jsxs)(t.p,{children:["Charon alone uses negligible disk space of not more than a few MBs. However, if you are running your consensus client and execution client on the same server with charon, then you will need 1TB of free SSD disk space (assuming you are running a testnet chain, mainnet requires ",(0,i.jsx)(t.a,{href:"https://geth.ethereum.org/docs/getting-started/hardware-requirements",children:"2TB"})," of disk space)."]}),"\n",(0,i.jsxs)(t.p,{children:["For now, Teku & Lighthouse clients are packaged within the docker compose file provided in the ",(0,i.jsx)(t.a,{href:"../quickstart/group",children:"quickstart guides"}),", so you don't have to install anything else to run a cluster. Just make sure you give them some time to sync once you start running your node."]}),"\n",(0,i.jsx)(t.h2,{id:"migrating-existing-validators",children:"Migrating existing validators"}),"\n",(0,i.jsx)(t.h3,{id:"can-i-keep-my-existing-validator-client",children:"Can I keep my existing validator client?"}),"\n",(0,i.jsxs)(t.p,{children:["Yes. Charon sits as a middleware between a validator client and it's beacon node. All validators that implement the standard REST API will be supported, along with all popular client delivery software such as Dappnode ",(0,i.jsx)(t.a,{href:"https://dappnode.github.io/explorer/#/",children:"packages"}),", Rocket Pool's ",(0,i.jsx)(t.a,{href:"https://github.com/rocket-pool/smartnode",children:"smart node"}),", StakeHouse's ",(0,i.jsx)(t.a,{href:"https://github.com/stake-house/wagyu",children:"wagyu"}),", and Stereum's ",(0,i.jsx)(t.a,{href:"https://stereum.net/development/#roadmap",children:"node launcher"}),"."]}),"\n",(0,i.jsx)(t.h3,{id:"can-i-migrate-my-existing-validator-into-a-distributed-validator",children:"Can I migrate my existing validator into a distributed validator?"}),"\n",(0,i.jsx)(t.p,{children:"It is possible to split an existing validator keystore into a set of key shares suitable for a distributed validator cluster, but it is a trusted distribution process which is not ideal compared to setting up a fresh cluster using a DKG ceremony where no operator ever has the full private key. Furthermore, if the old staking system is not safely shut down, it could pose a risk of slashing by double signing alongside the new distributed validator, please use extreme caution if migrating a validator, and make sure to wait at least three epochs offline to reduce the risk of double signing or surround voting."}),"\n",(0,i.jsx)(t.p,{children:"In an ideal scenario, a distributed validator's private key should never exist in full in a single location."}),"\n",(0,i.jsxs)(t.p,{children:["You can split an existing EIP-2335 keystore for a validator to migrate it to a distributed validator architecture with the ",(0,i.jsx)(t.code,{children:"charon create cluster --split-existing-keys"})," command documented ",(0,i.jsx)(t.a,{href:"/v0.15.0/charon/charon-cli-reference#create-a-full-cluster-locally",children:"here"}),"."]}),"\n",(0,i.jsx)(t.h3,{id:"can-i-migrate-an-existing-charon-node-to-a-new-machine",children:"Can I migrate an existing Charon node to a new machine?"}),"\n",(0,i.jsxs)(t.p,{children:["It is possible to migrate your Charon node to another machine running the same config by moving the ",(0,i.jsx)(t.code,{children:".charon"})," folder with its contents to your new machine. Make sure the EL and CL on the new machine are synced before proceeding to the move to minimize downtime."]}),"\n",(0,i.jsx)(t.h2,{id:"distributed-key-generation",children:"Distributed Key Generation"}),"\n",(0,i.jsx)(t.h3,{id:"what-are-the-min-and-max-numbers-of-operators-for-a-distributed-validator",children:"What are the min and max numbers of operators for a Distributed Validator?"}),"\n",(0,i.jsx)(t.p,{children:"Currently, the minimum is 4 operators with a threshold of 3."}),"\n",(0,i.jsxs)(t.p,{children:["The threshold (aka quorum) corresponds to the minimum numbers of operators that need to be active for the validator(s) to be able to perform its(their) duties. It is defined by the following formula ",(0,i.jsx)(t.code,{children:"n-(ceil(n/3)-1)"}),". We strongly recommend using this default threshold in your DKG as it maximises liveness while maintaining BFT safety. Setting a 4 out of 4 cluster for example, would make your validator more vulnerable to going offline instead of less vulnerable. You can check threshold value in your ",(0,i.jsx)(t.a,{href:"/v0.15.0/charon/cluster-configuration",children:(0,i.jsx)(t.code,{children:"cluster-lock.json"})})," file."]}),"\n",(0,i.jsx)(t.p,{children:"The maximum, honest answer, we don't know yet! It will depend heavily on your nodes network latency to talk to one another. The CLI caps out at 31 for now for a sane maximum. In practice, 10 nodes allows 3 nodes to fail at any one time, and probably is the largest cluster you should attempt for now unless you you're really experimenting \ud83d\ude05."}),"\n",(0,i.jsx)(t.p,{children:"By the way, the more operators, the longer the DKG, but don't worry, there is no limit in the timing for connecting nodes during the DKG."}),"\n",(0,i.jsx)(t.h2,{id:"debugging-errors-in-logs",children:"Debugging Errors in Logs"}),"\n",(0,i.jsxs)(t.p,{children:["You can check if the containers on your node are outputting errors by running ",(0,i.jsx)(t.code,{children:"docker compose logs"})," on a machine with a running cluster."]}),"\n",(0,i.jsxs)(t.p,{children:["Diagnose some common errors and view their resolutions ",(0,i.jsx)(t.a,{href:"/v0.15.0/int/faq/errors",children:"here"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"self-host-a-relay",children:"Self-Host a Relay"}),"\n",(0,i.jsx)(t.p,{children:"If you are experiencing connectivity issues with the Obol hosted relays, or you want to improve your clusters latency and decentralization, you can opt to host your own relay on a separate open and static internet port."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"# Figure out your public IP\ncurl v4.ident.me\n\n# Clone the repo and cd into it.\ngit clone https://github.com/ObolNetwork/charon-distributed-validator-node.git\n\ncd charon-distributed-validator-node\n\n# Replace 'replace.with.public.ip.or.hostname' in relay/docker-compose.yml with your public IPv4 or DNS hostname # Replace 'replace.with.public.ip.or.hostname' in relay/docker-compose.yml with your public IPv4 or DNS hostname\n\nnano relay/docker-compose.yml\n\ndocker compose -f relay/docker-compose.yml up\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Test whether the relay is publicly accessible. This should return an ENR:\n",(0,i.jsx)(t.code,{children:"curl http://replace.with.public.ip.or.hostname:3640/enr"})]}),"\n",(0,i.jsxs)(t.p,{children:["Ensure the ENR returned by the relay contains the correct public IP and port by decoding it with ",(0,i.jsx)(t.a,{href:"https://enr-viewer.com/",children:"https://enr-viewer.com/"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["Configure ",(0,i.jsx)(t.strong,{children:"ALL"})," charon nodes in your cluster to use this relay:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Either by adding a flag: ",(0,i.jsx)(t.code,{children:"--p2p-relays=http://replace.with.public.ip.or.hostname:3640/enr"})]}),"\n",(0,i.jsxs)(t.li,{children:["Or by setting the environment variable: ",(0,i.jsx)(t.code,{children:"CHARON_P2P_RELAYS=http://replace.with.public.ip.or.hostname:3640/enr"})]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["Note that a local ",(0,i.jsx)(t.code,{children:"relay/.charon/charon-enr-private-key"})," file will be created next to ",(0,i.jsx)(t.code,{children:"relay/docker-compose.yml"})," to ensure a persisted relay ENR across restarts."]})]})}function c(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>s});var r=n(96540);const i={},o=r.createContext(i);function a(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);