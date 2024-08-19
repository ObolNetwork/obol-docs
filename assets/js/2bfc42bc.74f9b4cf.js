"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[81801],{90900:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=i(74848),n=i(28453);const o={description:"Creating a Distributed Validator cluster from scratch"},a="Distributed validator creation",s={id:"dv/validator-creation",title:"Distributed validator creation",description:"Creating a Distributed Validator cluster from scratch",source:"@site/versioned_docs/version-v0.6.0/dv/02_validator-creation.md",sourceDirName:"dv",slug:"/dv/validator-creation",permalink:"/docs/v0.6.0/dv/validator-creation",draft:!1,unlisted:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.6.0/dv/02_validator-creation.md",tags:[],version:"v0.6.0",sidebarPosition:2,frontMatter:{description:"Creating a Distributed Validator cluster from scratch"},sidebar:"tutorialSidebar",previous:{title:"Introducing Charon",permalink:"/docs/v0.6.0/dv/introducing-charon"},next:{title:"Middleware Architecture",permalink:"/docs/v0.6.0/dv/middleware-daemon"}},d={},c=[{value:"Stages of creating a distributed validator",id:"stages-of-creating-a-distributed-validator",level:3}];function l(e){const t={a:"a",code:"code",h1:"h1",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"distributed-validator-creation",children:"Distributed validator creation"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"A sample Distributed Validator cluster",src:i(76461).A+"",width:"2596",height:"1460"})}),"\n",(0,r.jsx)(t.h3,{id:"stages-of-creating-a-distributed-validator",children:"Stages of creating a distributed validator"}),"\n",(0,r.jsx)(t.p,{children:"To create a distributed validator cluster, you and your group of operators need to complete the following steps:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["One operator begins the cluster setup on the ",(0,r.jsx)(t.a,{href:"/docs/v0.6.0/dvk/distributed_validator_launchpad",children:"Distributed Validator Launchpad"}),".","\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["This involves setting all of the terms for the cluster, including; withdrawal address, fee recipient, validator count, operator addresses, etc. This information is known as a ",(0,r.jsx)(t.code,{children:"cluster configuration"}),"."]}),"\n",(0,r.jsx)(t.li,{children:"This operator also sets their charon client's Ethereum Node Record (ENR)."}),"\n",(0,r.jsx)(t.li,{children:"This operator signs both the hash of the cluster config and the ENR to prove custody of their address."}),"\n",(0,r.jsx)(t.li,{children:"This data is stored in the DV Launchpad data layer and a URL is generated. This is a link for the other operators to join and complete the ceremony."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["The other operators in the cluster follow this URL to the launchpad.","\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"They review the terms of the cluster configuration."}),"\n",(0,r.jsx)(t.li,{children:"The submit the ENR of their charon client."}),"\n",(0,r.jsx)(t.li,{children:"They sign both the hash of the cluster config and their charon ENR to indicate acceptance of the terms"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.li,{children:"Once all operators have submitted signatures for the cluster configuration and ENRs, they can all download the cluster definition file."}),"\n",(0,r.jsxs)(t.li,{children:["Every operator loads this cluster definition file into ",(0,r.jsx)(t.code,{children:"charon dkg"}),". The definition provides the charon process with the information it needs to complete the DKG ceremony with the other charon clients."]}),"\n",(0,r.jsxs)(t.li,{children:["Once all charon clients can communicate with one another, the DKG process completes. All operators end up with:","\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["A cluster lockfile, which contains the original cluster configuration data, combined with the newly generated group public keys and their associated threshold verifiers. This file is needed by the ",(0,r.jsx)(t.code,{children:"charon run"})," command."]}),"\n",(0,r.jsx)(t.li,{children:"Validator deposit data"}),"\n",(0,r.jsx)(t.li,{children:"Validator exit data"}),"\n",(0,r.jsx)(t.li,{children:"Validator private key shares"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.li,{children:"Operators can now take backups of the generated private key shares and definition.lock file."}),"\n",(0,r.jsx)(t.li,{children:"All operators load the keys and cluster lockfiles generated in the ceremony, into their staking deployments."}),"\n",(0,r.jsx)(t.li,{children:"Operators can run a performance test of the configured cluster to ensure connectivity between all operators at a reasonable latency is observed."}),"\n",(0,r.jsx)(t.li,{children:"Once all readiness tests have passed, one operator activates the distributed validator(s) with an on-chain deposit."}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},76461:(e,t,i)=>{i.d(t,{A:()=>r});const r=i.p+"assets/images/ObolCluster-0bbe0b53c392ef9fbe6e5e3ef648ef0c.png"},28453:(e,t,i)=>{i.d(t,{R:()=>a,x:()=>s});var r=i(96540);const n={},o=r.createContext(n);function a(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);