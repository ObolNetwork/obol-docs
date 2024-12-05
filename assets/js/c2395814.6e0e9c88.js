"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[83128],{43924:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"sec/overview","title":"Overview","description":"Security Overview","source":"@site/versioned_docs/version-v0.16.0/sec/overview.md","sourceDirName":"sec","slug":"/sec/overview","permalink":"/v0.16.0/sec/overview","draft":false,"unlisted":false,"editUrl":"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.16.0/sec/overview.md","tags":[],"version":"v0.16.0","sidebarPosition":1,"frontMatter":{"description":"Security Overview","sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"Testnets","permalink":"/v0.16.0/testnet"},"next":{"title":"Roadmap","permalink":"/v0.16.0/sec/roadmap"}}');var i=o(74848),n=o(28453);const r={description:"Security Overview",sidebar_position:1},a="Overview",l={},c=[{value:"Table of Contents",id:"table-of-contents",level:2},{value:"Open Challenges",id:"open-challenges",level:2},{value:"Validation of Contract Deployment and Deposit Data Relies Heavily on Launchpad",id:"validation-of-contract-deployment-and-deposit-data-relies-heavily-on-launchpad",level:3},{value:"Social Consensus, aka \u201cWho sends the 32 ETH?\u201d",id:"social-consensus-aka-who-sends-the-32-eth",level:3},{value:"Core Public Goods",id:"core-public-goods",level:2},{value:"List of Security Audits",id:"list-of-security-audits",level:2},{value:"2023",id:"2023",level:3}];function d(e){const t={a:"a",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",ul:"ul",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"overview",children:"Overview"})}),"\n",(0,i.jsx)(t.p,{children:"This page serves as an overview of the Obol Network from a security auditor\u2019s point of view. It lists all of the projects that are intended to fall under the scope of the Obol Network project, as well as past audit reports, notable security bugs, and open security/privacy challenges in the Obol Network. You can think of this page as \u201ca security auditor\u2019s guide to Obol.\u201d"}),"\n",(0,i.jsx)(t.p,{children:"This page is updated quarterly. The last update was on 2023-03-21."}),"\n",(0,i.jsx)(t.h2,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"#open-challenges",children:"Open Challenges"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"#core-public-goods",children:"Core Public Goods"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"#list-of-security-audits",children:"List of Security Audits"})}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"open-challenges",children:"Open Challenges"}),"\n",(0,i.jsx)(t.p,{children:"These are the \u201cbig picture\u201d security challenges for Obol Network that are on our radar."}),"\n",(0,i.jsx)(t.h3,{id:"validation-of-contract-deployment-and-deposit-data-relies-heavily-on-launchpad",children:"Validation of Contract Deployment and Deposit Data Relies Heavily on Launchpad"}),"\n",(0,i.jsx)(t.p,{children:"The risks identified include the possibility of malicious contracts being deployed by attackers who compromise the Launchpad or an underlying dependency."}),"\n",(0,i.jsx)(t.p,{children:"Key concerns raised by the auditor:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"How does the group creator know the Launchpad deployed the correct contracts?"}),"\n",(0,i.jsx)(t.li,{children:"How does the rest of the group know the creator deployed the contracts through the Launchpad?\nThe current verification process relies on the independent verification performed by each group member during and after the cluster's setup phase. However, this process may not be sufficient, as most users lack the necessary expertise to verify the source code accurately."}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"The primary risk is that users may deposit with malicious withdrawal or fee recipient credentials, potentially allowing an attacker to steal the entire withdrawal amount once the cluster exits."}),"\n",(0,i.jsx)(t.p,{children:"The audit also mentions similar risks in validating deposit data but lacks clarity on the Obol stack's specific part that generates the deposit data/transaction."}),"\n",(0,i.jsx)(t.p,{children:"The auditor suggests that the mitigation for these risks would involve a more thorough and reliable verification process, although further details are not provided in the summary."}),"\n",(0,i.jsx)(t.h3,{id:"social-consensus-aka-who-sends-the-32-eth",children:"Social Consensus, aka \u201cWho sends the 32 ETH?\u201d"}),"\n",(0,i.jsx)(t.p,{children:"Obol allows multiple operators to act as a single validator, requiring a total of 32 ETH for depositing to the beacon chain. Currently, the process relies on trust and social consensus, where the group decides on individual contributions and trusts someone to complete the deposit process correctly without misusing the funds."}),"\n",(0,i.jsx)(t.p,{children:"While the initial launch of Obol is limited to a small group, for a future public release, the deposit process should be simpler and less reliant on trust to ensure security and user confidence."}),"\n",(0,i.jsx)(t.h2,{id:"core-public-goods",children:"Core Public Goods"}),"\n",(0,i.jsx)(t.p,{children:"The Obol Network consists of four core public goods:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["The Distributed Validator ",(0,i.jsx)(t.a,{href:"https://docs.obol.tech/docs/dvl/intro",children:"Launchpad"}),", a ",(0,i.jsx)(t.a,{href:"https://goerli.launchpad.obol.tech/",children:"User Interface"})," for bootstrapping Distributed Validators"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://docs.obol.tech/docs/charon/intro",children:"Charon"}),", a middleware client that enables validators to run in a fault-tolerant, distributed manner"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://docs.obol.tech/docs/sc/introducing-obol-managers",children:"Obol Managers"}),", a set of solidity smart contracts for the formation of Distributed Validators"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://docs.obol.tech/docs/testnet",children:"Obol Testnets"}),", a set of on-going public incentivized testnets that enable any sized operator to test their deployment before serving for the mainnet Obol Network"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"list-of-security-audits",children:"List of Security Audits"}),"\n",(0,i.jsx)(t.h3,{id:"2023",children:"2023"}),"\n",(0,i.jsxs)(t.p,{children:["The completed audits reports are linked ",(0,i.jsx)(t.a,{href:"https://github.com/ObolNetwork/obol-security/tree/main/audits",children:"here"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,t,o)=>{o.d(t,{R:()=>r,x:()=>a});var s=o(96540);const i={},n=s.createContext(i);function r(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);