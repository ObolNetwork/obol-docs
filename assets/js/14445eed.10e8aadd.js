"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[80685],{23487:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>c,frontMatter:()=>s,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"int/faq","title":"Frequently asked questions","description":"Frequently asked questions","source":"@site/versioned_docs/version-v0.8.0/int/faq.md","sourceDirName":"int","slug":"/int/faq","permalink":"/v0.8.0/int/faq","draft":false,"unlisted":false,"editUrl":"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.8.0/int/faq.md","tags":[],"version":"v0.8.0","sidebarPosition":10,"frontMatter":{"sidebar_position":10,"description":"Frequently asked questions"},"sidebar":"tutorialSidebar","previous":{"title":"Working groups","permalink":"/v0.8.0/int/working-groups"},"next":{"title":"Introducing Charon","permalink":"/v0.8.0/dv/introducing-charon"}}');var o=i(74848),a=i(28453);const s={sidebar_position:10,description:"Frequently asked questions"},r="Frequently asked questions",d={},l=[{value:"Does Obol have a token?",id:"does-obol-have-a-token",level:3},{value:"Can I keep my existing validator client?",id:"can-i-keep-my-existing-validator-client",level:3},{value:"Can I migrate my existing validator into a distributed validator?",id:"can-i-migrate-my-existing-validator-into-a-distributed-validator",level:3},{value:"What is an ENR?",id:"what-is-an-enr",level:3},{value:"Where can I learn more about Distributed Validators?",id:"where-can-i-learn-more-about-distributed-validators",level:3},{value:"What&#39;s with the name Charon?",id:"whats-with-the-name-charon",level:3}];function h(e){const t={a:"a",code:"code",h1:"h1",h3:"h3",header:"header",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"frequently-asked-questions",children:"Frequently asked questions"})}),"\n",(0,o.jsx)(t.h3,{id:"does-obol-have-a-token",children:"Does Obol have a token?"}),"\n",(0,o.jsx)(t.p,{children:"No. Distributed validators use only ether."}),"\n",(0,o.jsx)(t.h3,{id:"can-i-keep-my-existing-validator-client",children:"Can I keep my existing validator client?"}),"\n",(0,o.jsxs)(t.p,{children:["Yes. Charon sits as a middleware between a validator client and it's beacon node. All validators that implement the standard REST API will be supported, along with all popular client delivery software such as DAppNode ",(0,o.jsx)(t.a,{href:"https://dappnode.github.io/explorer/#/",children:"packages"}),", Rocket Pool's ",(0,o.jsx)(t.a,{href:"https://github.com/rocket-pool/smartnode",children:"smart node"}),", StakeHouse's ",(0,o.jsx)(t.a,{href:"https://github.com/stake-house/wagyu",children:"wagyu"}),", and Stereum's ",(0,o.jsx)(t.a,{href:"https://stereum.net/development/#roadmap",children:"node launcher"}),"."]}),"\n",(0,o.jsx)(t.h3,{id:"can-i-migrate-my-existing-validator-into-a-distributed-validator",children:"Can I migrate my existing validator into a distributed validator?"}),"\n",(0,o.jsx)(t.p,{children:"It will be possible to split an existing validator keystore into a set of key shares suitable for a distributed validator, but it is a trusted distribution process, and if the old staking system is not safely shut down, it could pose a risk of double signing alongside the new distributed validator."}),"\n",(0,o.jsx)(t.p,{children:"In an ideal scenario, a distributed validator's private key should never exist in full in a single location."}),"\n",(0,o.jsxs)(t.p,{children:["You can split an existing EIP-2335 keystore for a validator to migrate it to a distributed validator architecture with the ",(0,o.jsx)(t.code,{children:"charon create cluster --split-existing-keys"})," command documented ",(0,o.jsx)(t.a,{href:"/v0.8.0/dv/charon_cli_reference#create-a-full-cluster-locally",children:"here"}),"."]}),"\n",(0,o.jsx)(t.h3,{id:"what-is-an-enr",children:"What is an ENR?"}),"\n",(0,o.jsxs)(t.p,{children:["An ENR is shorthand for an ",(0,o.jsx)(t.a,{href:"https://eips.ethereum.org/EIPS/eip-778",children:"Ethereum Node Record"}),". It is a way to represent a node on a public network, with a reliable mechanism to update its information. At Obol we use ENRs to identify charon nodes to one another such that they can form clusters with the right charon nodes and not impostors."]}),"\n",(0,o.jsxs)(t.p,{children:["ENRs have private keys they use to sign updates to the ",(0,o.jsx)(t.a,{href:"https://enr-viewer.com/",children:"data contained"})," in their ENR. This private key is by default found at ",(0,o.jsx)(t.code,{children:".charon/charon-enr-private-key"}),", and should be kept secure, and not checked into version control. An ENR looks something like this:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"enr:-JG4QAgAOXjGFcTIkXBO30aUMzg2YSo1CYV0OH8Sf2s7zA2kFjVC9ZQ_jZZItdE8gA-tUXW-rWGDqEcoQkeJ98Pw7GaGAYFI7eoegmlkgnY0gmlwhCKNyGGJc2VjcDI1NmsxoQI6SQlzw3WGZ_VxFHLhawQFhCK8Aw7Z0zq8IABksuJEJIN0Y3CCPoODdWRwgj6E\n"})}),"\n",(0,o.jsx)(t.h3,{id:"where-can-i-learn-more-about-distributed-validators",children:"Where can I learn more about Distributed Validators?"}),"\n",(0,o.jsxs)(t.p,{children:["Have you checked out our ",(0,o.jsx)(t.a,{href:"https://blog.obol.tech",children:"blog site"})," and ",(0,o.jsx)(t.a,{href:"https://twitter.com/ObolNetwork",children:"twitter"})," yet? Maybe join our ",(0,o.jsx)(t.a,{href:"https://discord.gg/obol",children:"discord"})," too."]}),"\n",(0,o.jsx)(t.h3,{id:"whats-with-the-name-charon",children:"What's with the name Charon?"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"https://www.theoi.com/Khthonios/Kharon.html",children:"Charon"})," is the Ancient Greek Ferryman of the Dead. He was tasked with bringing people across the Acheron river to the underworld. His fee was one Obol coin, placed in the mouth of the deceased. This tradition of placing a coin or Obol in the mouth of the deceased continues to this day across the Greek world."]})]})}function c(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>s,x:()=>r});var n=i(96540);const o={},a=n.createContext(o);function s(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);