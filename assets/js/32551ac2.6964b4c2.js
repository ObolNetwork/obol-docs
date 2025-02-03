"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[60783],{28486:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"learn/intro/faq","title":"Frequently Asked Questions","description":"Frequently asked questions","source":"@site/docs/learn/intro/faq.mdx","sourceDirName":"learn/intro","slug":"/learn/intro/faq","permalink":"/next/learn/intro/faq","draft":false,"unlisted":false,"editUrl":"https://github.com/ObolNetwork/obol-docs/edit/main/docs/learn/intro/faq.mdx","tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"sidebar_position":6,"description":"Frequently asked questions"},"sidebar":"tutorialSidebar","previous":{"title":"DV Launchpad","permalink":"/next/learn/intro/launchpad"},"next":{"title":"Introduction to Charon","permalink":"/next/learn/charon/intro"}}');var a=n(74848),o=n(28453),s=n(49489),i=n(7227);const l={sidebar_position:6,description:"Frequently asked questions"},d="Frequently Asked Questions",h={},c=[{value:"General",id:"general",level:2},{value:"Does Obol have a token?",id:"does-obol-have-a-token",level:3},{value:"Where can I learn more about Distributed Validators?",id:"where-can-i-learn-more-about-distributed-validators",level:3},{value:"Where does the name Charon come from?",id:"where-does-the-name-charon-come-from",level:3},{value:"What are the hardware requirements for running a Charon node?",id:"what-are-the-hardware-requirements-for-running-a-charon-node",level:3},{value:"What is the difference between a node, a validator and a cluster?",id:"what-is-the-difference-between-a-node-a-validator-and-a-cluster",level:3},{value:"Can I migrate an existing Charon node to a new machine?",id:"can-i-migrate-an-existing-charon-node-to-a-new-machine",level:3},{value:"What is an ENR?",id:"what-is-an-enr",level:3},{value:"Distributed Key Generation",id:"distributed-key-generation",level:2},{value:"What are the min and max numbers of operators for a Distributed Validator?",id:"what-are-the-min-and-max-numbers-of-operators-for-a-distributed-validator",level:3},{value:"Obol Splits",id:"obol-splits",level:2},{value:"What are Obol Splits?",id:"what-are-obol-splits",level:3},{value:"Are Obol Splits non-custodial?",id:"are-obol-splits-non-custodial",level:3},{value:"Can I change the percentages in a split?",id:"can-i-change-the-percentages-in-a-split",level:3},{value:"How do Obol Splits work?",id:"how-do-obol-splits-work",level:3},{value:"Are Obol Splits open source?",id:"are-obol-splits-open-source",level:3},{value:"Are Obol Splits audited?",id:"are-obol-splits-audited",level:3},{value:"Are the Obol Splits contracts verified on Etherscan?",id:"are-the-obol-splits-contracts-verified-on-etherscan",level:3},{value:"Does my cold wallet have to call the Obol Splits contracts?",id:"does-my-cold-wallet-have-to-call-the-obol-splits-contracts",level:3},{value:"Are there any edge cases I should be aware of when using Obol Splits?",id:"are-there-any-edge-cases-i-should-be-aware-of-when-using-obol-splits",level:3},{value:"Debugging Errors in Logs",id:"debugging-errors-in-logs",level:2}];function u(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"frequently-asked-questions",children:"Frequently Asked Questions"})}),"\n",(0,a.jsx)(t.h2,{id:"general",children:"General"}),"\n",(0,a.jsx)(t.h3,{id:"does-obol-have-a-token",children:"Does Obol have a token?"}),"\n",(0,a.jsxs)(t.p,{children:["Yes, please see the token page[../../gov/governance/obol-token.md] for details about the OBOL Token and our ",(0,a.jsx)(t.a,{href:"https://blog.obol.org/airdrop/",children:"announcement"})," for details about the community airdrop that took place in January 2025. The official token contract address is 0x0B010000b7624eb9B3DfBC279673C76E9D29D5F7."]}),"\n",(0,a.jsx)(t.h3,{id:"where-can-i-learn-more-about-distributed-validators",children:"Where can I learn more about Distributed Validators?"}),"\n",(0,a.jsxs)(t.p,{children:["Have you checked out our ",(0,a.jsx)(t.a,{href:"https://blog.obol.tech",children:"blog site"})," and ",(0,a.jsx)(t.a,{href:"https://twitter.com/ObolNetwork",children:"twitter"})," yet? Maybe join our ",(0,a.jsx)(t.a,{href:"https://discord.gg/n6ebKsX46w",children:"discord"})," too."]}),"\n",(0,a.jsx)(t.h3,{id:"where-does-the-name-charon-come-from",children:"Where does the name Charon come from?"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"https://www.theoi.com/Khthonios/Kharon.html",children:"Charon"})," [kharon] is the Ancient Greek Ferryman of the Dead. He was tasked with bringing people across the Acheron river to the underworld. His fee was one Obol coin, placed in the mouth of the deceased. This tradition of placing a coin or Obol in the mouth of the deceased continues to this day across the Greek world."]}),"\n",(0,a.jsx)(t.h3,{id:"what-are-the-hardware-requirements-for-running-a-charon-node",children:"What are the hardware requirements for running a Charon node?"}),"\n",(0,a.jsx)(t.p,{children:"Charon alone uses negligible disk space of not more than a few MBs. However, if you are running your consensus client and execution client on the same server as Charon, then you will typically need the same hardware as running a full Ethereum node:"}),"\n",(0,a.jsxs)(s.A,{groupId:"Hardware",children:[(0,a.jsx)(i.A,{value:"Minimum",label:"Minimum",children:(0,a.jsxs)("table",{children:[(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{}),(0,a.jsx)("th",{children:"Charon + VC"}),(0,a.jsx)("th",{children:"Beacon Node"})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("strong",{children:"CPU*"})}),(0,a.jsx)("td",{children:"1"}),(0,a.jsx)("td",{children:"2"})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("strong",{children:"RAM"})}),(0,a.jsx)("td",{children:"2"}),(0,a.jsx)("td",{children:"16"})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("strong",{children:"Storage"})}),(0,a.jsx)("td",{children:"100 MB"}),(0,a.jsx)("td",{children:"2 TB"})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("strong",{children:"Internet Bandwidth"})}),(0,a.jsx)("td",{children:"10 Mb/s"}),(0,a.jsx)("td",{children:"10 Mb/s"})]})]})}),(0,a.jsx)(i.A,{value:"Recommended",label:"Recommended",default:!0,children:(0,a.jsxs)("table",{children:[(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{}),(0,a.jsx)("th",{children:"Charon + VC"}),(0,a.jsx)("th",{children:"Beacon Node"})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("strong",{children:"CPU*"})}),(0,a.jsx)("td",{children:"2"}),(0,a.jsx)("td",{children:"4"})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("strong",{children:"RAM"})}),(0,a.jsx)("td",{children:"3"}),(0,a.jsx)("td",{children:"24"})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("strong",{children:"Storage"})}),(0,a.jsx)("td",{children:"100 MB"}),(0,a.jsx)("td",{children:"2 TB"})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("strong",{children:"Internet Bandwidth"})}),(0,a.jsx)("td",{children:"25 Mb/s"}),(0,a.jsx)("td",{children:"25 Mb/s"})]})]})}),(0,a.jsx)(i.A,{value:"High # of Validators",label:"High # of Validators (>200)",default:!0,children:(0,a.jsxs)("table",{children:[(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{}),(0,a.jsx)("th",{children:"Charon + VC"}),(0,a.jsx)("th",{children:"Beacon Node"})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("strong",{children:"CPU*"})}),(0,a.jsx)("td",{children:"2"}),(0,a.jsx)("td",{children:"8"})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("strong",{children:"RAM"})}),(0,a.jsx)("td",{children:"4"}),(0,a.jsx)("td",{children:"32"})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("strong",{children:"Storage"})}),(0,a.jsx)("td",{children:"100 MB"}),(0,a.jsx)("td",{children:"2 TB"})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("strong",{children:"Internet Bandwidth"})}),(0,a.jsx)("td",{children:"100 Mb/s"}),(0,a.jsx)("td",{children:"100 Mb/s"})]})]})})]}),"\n",(0,a.jsx)(t.p,{children:"*if using vCPU, aim for 2x the above amounts"}),"\n",(0,a.jsxs)(t.p,{children:["For more hardware considerations, check out the ",(0,a.jsx)(t.a,{href:"https://ethereum.org/en/developers/docs/nodes-and-clients/run-a-node/#environment-and-hardware",children:"ethereum.org guides"})," which explores various setups and trade-offs, such as running the node locally or in the cloud."]}),"\n",(0,a.jsxs)(t.p,{children:["For now, Geth, Teku & Lighthouse clients are packaged within the docker compose file provided in the ",(0,a.jsx)(t.a,{href:"/next/run/start/quickstart_overview",children:"quickstart guides"}),", so you don't have to install anything else to run a cluster. Just make sure you give them some time to sync once you start running your node."]}),"\n",(0,a.jsx)(t.h3,{id:"what-is-the-difference-between-a-node-a-validator-and-a-cluster",children:"What is the difference between a node, a validator and a cluster?"}),"\n",(0,a.jsx)(t.p,{children:"A node is a single instance of Ethereum EL+CL clients that can communicate with other nodes to maintain the Ethereum blockchain."}),"\n",(0,a.jsx)(t.p,{children:"A validator is a node that participates in the consensus process by verifying transactions and creating new blocks. Multiple validators can run from the same node."}),"\n",(0,a.jsx)(t.p,{children:"A cluster is a group of nodes that act together as one or several validators which allows for a more efficient use of resources, reduces operational costs, and provides better reliability and fault tolerance."}),"\n",(0,a.jsx)(t.h3,{id:"can-i-migrate-an-existing-charon-node-to-a-new-machine",children:"Can I migrate an existing Charon node to a new machine?"}),"\n",(0,a.jsxs)(t.p,{children:["It is possible to migrate your Charon node to another machine running the same config by moving the ",(0,a.jsx)(t.code,{children:".charon"})," folder with its contents to your new machine. Make sure the EL and CL on the new machine are synced before proceeding to the move to minimize downtime."]}),"\n",(0,a.jsx)(t.h3,{id:"what-is-an-enr",children:"What is an ENR?"}),"\n",(0,a.jsxs)(t.p,{children:["An ENR is shorthand for an ",(0,a.jsx)(t.a,{href:"https://eips.ethereum.org/EIPS/eip-778",children:"Ethereum Node Record"}),". It is a way to represent a node on a public network, with a reliable mechanism to update its information."]}),"\n",(0,a.jsxs)(t.p,{children:["At Obol we use ENRs to identify Charon nodes to one another such that they can form clusters with the right Charon nodes and not impostors. ENRs have private keys they use to sign updates to the ",(0,a.jsx)(t.a,{href:"https://enr-viewer.com/",children:"data contained in their ENR"}),". This private key is by default found at ",(0,a.jsx)(t.code,{children:".charon/charon-enr-private-key"}),", and should be kept secure, and not checked into version control."]}),"\n",(0,a.jsxs)(t.p,{children:["An ENR looks something like this:\n",(0,a.jsx)(t.code,{children:"enr:-JG4QAgAOXjGFcTIkXBO30aUMzg2YSo1CYV0OH8Sf2s7zA2kFjVC9ZQ_jZZItdE8gA-tUXW-rWGDqEcoQkeJ98Pw7GaGAYFI7eoegmlkgnY0gmlwhCKNyGGJc2VjcDI1NmsxoQI6SQlzw3WGZ_VxFHLhawQFhCK8Aw7Z0zq8IABksuJEJIN0Y3CCPoODdWRwgj6E"})]}),"\n",(0,a.jsx)(t.h2,{id:"distributed-key-generation",children:"Distributed Key Generation"}),"\n",(0,a.jsx)(t.h3,{id:"what-are-the-min-and-max-numbers-of-operators-for-a-distributed-validator",children:"What are the min and max numbers of operators for a Distributed Validator?"}),"\n",(0,a.jsx)(t.p,{children:"Currently, the minimum is 4 operators with a threshold of 3."}),"\n",(0,a.jsxs)(t.p,{children:["The threshold (aka quorum) corresponds to the minimum numbers of operators that need to be active for the validator(s) to be able to perform its duties. It is defined by the following formula ",(0,a.jsx)(t.code,{children:"n-(ceil(n/3)-1)"}),". We strongly recommend using this default threshold in your DKG as it maximises liveness while maintaining BFT safety. Setting a 4 out of 4 cluster for example, would make your validator more vulnerable to going offline instead of less vulnerable. You can check the recommended threshold values for a cluster ",(0,a.jsx)(t.a,{href:"/next/learn/intro/key-concepts#distributed-validator-threshold",children:"here"}),"."]}),"\n",(0,a.jsx)(t.h2,{id:"obol-splits",children:"Obol Splits"}),"\n",(0,a.jsx)(t.h3,{id:"what-are-obol-splits",children:"What are Obol Splits?"}),"\n",(0,a.jsx)(t.p,{children:"Obol Splits refers to a collection of composable smart contracts that enable the splitting of validator rewards and/or principal in a non-custodial, trust-minimised manner. Obol Splits contains integrations to enable DVs within Lido, Eigenlayer, and in future a number of other LSPs."}),"\n",(0,a.jsx)(t.h3,{id:"are-obol-splits-non-custodial",children:"Are Obol Splits non-custodial?"}),"\n",(0,a.jsxs)(t.p,{children:["Yes. Unless you were to decide to ",(0,a.jsx)(t.a,{href:"#can-i-change-the-percentages-in-a-split",children:"deploy an editable splitter contract"}),", Obol Splits are immutable, non-upgradeable, non-custodial, and oracle-free."]}),"\n",(0,a.jsx)(t.h3,{id:"can-i-change-the-percentages-in-a-split",children:"Can I change the percentages in a split?"}),"\n",(0,a.jsxs)(t.p,{children:["Generally Obol Splits are deployed in an immutable fashion, meaning you cannot edit the percentages after deployment. However, if you were to choose to deploy a ",(0,a.jsx)(t.em,{children:"controllable"})," splitter contract when creating your Split, then yes, the address you select as controller can update the split percentages arbitrarily. A common pattern for this use case is to use a Gnosis SAFE as the controller address for the split, giving a group of entities (usually the operators and principal provider) the ability to update the percentages if need be. A well known example of this pattern is the ",(0,a.jsx)(t.a,{href:"https://protocol-guild.readthedocs.io/en/latest/03-onchain-architecture.html#",children:"Protocol Guild"}),"."]}),"\n",(0,a.jsx)(t.h3,{id:"how-do-obol-splits-work",children:"How do Obol Splits work?"}),"\n",(0,a.jsxs)(t.p,{children:["You can read more about how Obol Splits work ",(0,a.jsx)(t.a,{href:"/next/learn/intro/obol-splits",children:"here"}),"."]}),"\n",(0,a.jsx)(t.h3,{id:"are-obol-splits-open-source",children:"Are Obol Splits open source?"}),"\n",(0,a.jsxs)(t.p,{children:["Yes, Obol Splits are licensed under GPLv3 and the source code is available ",(0,a.jsx)(t.a,{href:"https://github.com/ObolNetwork/obol-splits",children:"here"}),"."]}),"\n",(0,a.jsx)(t.h3,{id:"are-obol-splits-audited",children:"Are Obol Splits audited?"}),"\n",(0,a.jsxs)(t.p,{children:["The Obol Splits contracts have been audited, though further development has continued on the contracts since. Consult the audit results ",(0,a.jsx)(t.a,{href:"/next/adv/security/smart_contract_audit",children:"here"}),"."]}),"\n",(0,a.jsx)(t.h3,{id:"are-the-obol-splits-contracts-verified-on-etherscan",children:"Are the Obol Splits contracts verified on Etherscan?"}),"\n",(0,a.jsxs)(t.p,{children:["Yes, you can view the verified contracts on Etherscan. A list of the contract deployments can be found ",(0,a.jsx)(t.a,{href:"https://github.com/ObolNetwork/obol-splits?#deployment",children:"here"}),"."]}),"\n",(0,a.jsx)(t.h3,{id:"does-my-cold-wallet-have-to-call-the-obol-splits-contracts",children:"Does my cold wallet have to call the Obol Splits contracts?"}),"\n",(0,a.jsx)(t.p,{children:"No. Any address can trigger the contracts to move the funds, they do not need to be a member of the Split either. You can set your cold wallet/custodian address as the recipient of the principal and rewards, and use any hot wallet to pay the gas fees to push the ether into the recipient address."}),"\n",(0,a.jsx)(t.h3,{id:"are-there-any-edge-cases-i-should-be-aware-of-when-using-obol-splits",children:"Are there any edge cases I should be aware of when using Obol Splits?"}),"\n",(0,a.jsx)(t.p,{children:"The most important decision is to be aware of whether or not the Split contract you are using has been set up with editability. If a splitter is editable, you should understand what the address that can edit the split does. Is the editor an EOA? Who controls that address? How secure is their seed phrase? Is it a smart contract? What can that contract do? Can the controller contract be upgraded? etc. Generally, the safest thing in Obol's perspective is not to have an editable splitter, and if in future you are unhappy with the configuration, that you exit the validator and create a fresh cluster with new settings that fit your needs."}),"\n",(0,a.jsxs)(t.p,{children:["Another aspect to be aware of is how the splitting of principal from rewards works using the Optimistic Withdrawal Recipient contract. There are edge cases relating to not calling the contracts periodically or ahead of a withdrawal, activating more validators than the contract was configured for, and a worst case mass slashing on the network. Consult the documentation on the contract ",(0,a.jsx)(t.a,{href:"/next/learn/intro/obol-splits#optimistic-withdrawal-recipient",children:"here"}),", its audit ",(0,a.jsx)(t.a,{href:"/next/adv/security/smart_contract_audit",children:"here"}),", and follow up with the core team if you have further questions."]}),"\n",(0,a.jsx)(t.h2,{id:"debugging-errors-in-logs",children:"Debugging Errors in Logs"}),"\n",(0,a.jsxs)(t.p,{children:["You can check if the containers on your node are outputting errors by running ",(0,a.jsx)(t.code,{children:"docker compose logs"})," on a machine with a running cluster."]}),"\n",(0,a.jsxs)(t.p,{children:["Diagnose some common errors and view their resolutions ",(0,a.jsx)(t.a,{href:"/next/adv/troubleshooting/errors",children:"here"}),"."]})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},7227:(e,t,n)=>{n.d(t,{A:()=>s});n(96540);var r=n(34164);const a={tabItem:"tabItem_Ymn6"};var o=n(74848);function s(e){let{children:t,hidden:n,className:s}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,s),hidden:n,children:t})}},49489:(e,t,n)=>{n.d(t,{A:()=>y});var r=n(96540),a=n(34164),o=n(24245),s=n(56347),i=n(36494),l=n(62814),d=n(45167),h=n(69900);function c(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return c(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,d.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.W6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=u(e),[s,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[d,c]=b({queryString:n,groupId:a}),[m,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,h.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),x=(()=>{const e=d??m;return p({value:e,tabValues:o})?e:null})();(0,i.A)((()=>{x&&l(x)}),[x]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),f(e)}),[c,f,o]),tabValues:o}}var f=n(11062);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(74848);function j(e){let{className:t,block:n,selectedValue:r,selectValue:s,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.a_)(),h=e=>{const t=e.currentTarget,n=l.indexOf(t),a=i[n].value;a!==r&&(d(t),s(a))},c=e=>{let t=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:o}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>l.push(e),onKeyDown:c,onClick:h,...o,className:(0,a.A)("tabs__item",x.tabItem,o?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function v(e){let{lazy:t,children:n,selectedValue:o}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===o));return e?(0,r.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==o})))})}function w(e){const t=m(e);return(0,g.jsxs)("div",{className:(0,a.A)("tabs-container",x.tabList),children:[(0,g.jsx)(j,{...t,...e}),(0,g.jsx)(v,{...t,...e})]})}function y(e){const t=(0,f.A)();return(0,g.jsx)(w,{...e,children:c(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>i});var r=n(96540);const a={},o=r.createContext(a);function s(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);