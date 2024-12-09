"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[62892],{14881:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"adv/security/bug-bounty","title":"Obol Bug Bounty Program","description":"Bug Bounty Policy","source":"@site/docs/adv/security/bug-bounty.md","sourceDirName":"adv/security","slug":"/adv/security/bug-bounty","permalink":"/next/adv/security/bug-bounty","draft":false,"unlisted":false,"editUrl":"https://github.com/ObolNetwork/obol-docs/edit/main/docs/adv/security/bug-bounty.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3,"description":"Bug Bounty Policy"},"sidebar":"tutorialSidebar","previous":{"title":"Centralization Risks and Mitigation","permalink":"/next/adv/security/risks"},"next":{"title":"Smart Contract Audit","permalink":"/next/adv/security/smart_contract_audit"}}');var r=t(74848),s=t(28453);const o={sidebar_position:3,description:"Bug Bounty Policy"},l="Obol Bug Bounty Program",a={},c=[{value:"Overview",id:"overview",level:2},{value:"Participant Eligibility",id:"participant-eligibility",level:2},{value:"Scope of the Program",id:"scope-of-the-program",level:2},{value:"Program Rules",id:"program-rules",level:2},{value:"Rewards Structure",id:"rewards-structure",level:2},{value:"Critical Vulnerabilities: Up to $100,000",id:"critical-vulnerabilities-up-to-100000",level:3},{value:"High Vulnerabilities: Up to $10,000",id:"high-vulnerabilities-up-to-10000",level:3},{value:"Medium Vulnerabilities: Up to $2,500",id:"medium-vulnerabilities-up-to-2500",level:3},{value:"Low Vulnerabilities: Up to $500",id:"low-vulnerabilities-up-to-500",level:3},{value:"The following activities are prohibited by this bug bounty program",id:"the-following-activities-are-prohibited-by-this-bug-bounty-program",level:2},{value:"Submission process",id:"submission-process",level:2},{value:"Disclosure and Confidentiality",id:"disclosure-and-confidentiality",level:2},{value:"Legal and Ethical Compliance",id:"legal-and-ethical-compliance",level:2},{value:"Non-Disclosure Agreement (NDA)",id:"non-disclosure-agreement-nda",level:2}];function d(e){const i={a:"a",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.header,{children:(0,r.jsx)(i.h1,{id:"obol-bug-bounty-program",children:"Obol Bug Bounty Program"})}),"\n",(0,r.jsx)(i.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsx)(i.p,{children:"At Obol Labs, we prioritize the security of our distributed validator software and related services. Our Bug Bounty Program is designed to encourage and reward security researchers for identifying and reporting potential vulnerabilities. This initiative supports our commitment to the security and integrity of our products."}),"\n",(0,r.jsx)(i.h2,{id:"participant-eligibility",children:"Participant Eligibility"}),"\n",(0,r.jsx)(i.p,{children:"Participants must meet the following criteria to be eligible for the Bug Bounty Program:"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Not reside in countries where participation in such programs is prohibited."}),"\n",(0,r.jsx)(i.li,{children:"Be at least 14 years of age and possess the legal capacity to participate."}),"\n",(0,r.jsx)(i.li,{children:"Have received consent from your employer, if applicable."}),"\n",(0,r.jsx)(i.li,{children:"Not have been employed or contracted by Obol Labs, nor be an immediate family member of an employee, within the last 12 months."}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"scope-of-the-program",children:"Scope of the Program"}),"\n",(0,r.jsx)(i.p,{children:"Eligible submissions must involve software and services developed by Obol, specifically under the domains of:"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Charon the DV Middleware Client"}),"\n",(0,r.jsx)(i.li,{children:"Obol DV Launchpad and Public API"}),"\n",(0,r.jsx)(i.li,{children:"Obol Splits Contracts"}),"\n",(0,r.jsx)(i.li,{children:"Obol Labs hosted Public Relay Infrastructure"}),"\n"]}),"\n",(0,r.jsx)(i.p,{children:"Submissions related to the following are considered out of scope:"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Social engineering"}),"\n",(0,r.jsx)(i.li,{children:"Rate Limiting (Non-critical issues)"}),"\n",(0,r.jsx)(i.li,{children:"Physical security breaches"}),"\n",(0,r.jsx)(i.li,{children:"Non-security related UX/UI issues"}),"\n",(0,r.jsx)(i.li,{children:"Third-party application vulnerabilities"}),"\n",(0,r.jsxs)(i.li,{children:["The ",(0,r.jsx)(i.a,{href:"https://obol.org",children:"Obol"})," static website or the Obol infrastructure"]}),"\n",(0,r.jsx)(i.li,{children:"The operational security of node operators running or using Obol software"}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"program-rules",children:"Program Rules"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Submitted bugs must not have been previously disclosed publicly."}),"\n",(0,r.jsx)(i.li,{children:"Only first reports of vulnerabilities will be considered for rewards; previously reported or known vulnerabilities are ineligible."}),"\n",(0,r.jsx)(i.li,{children:'The severity of the vulnerability, as assessed by our team, will determine the reward amount. See the "Rewards" section for details.'}),"\n",(0,r.jsx)(i.li,{children:"Submissions must include a reproducible proof of concept."}),"\n",(0,r.jsx)(i.li,{children:"The Obol security team reserves the right to determine the eligibility and reward for each submission."}),"\n",(0,r.jsx)(i.li,{children:"Program terms may be updated at Obol's discretion."}),"\n",(0,r.jsx)(i.li,{children:"Valid bugs may be disclosed to partner protocols within the Obol ecosystem to enhance overall security."}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"rewards-structure",children:"Rewards Structure"}),"\n",(0,r.jsx)(i.p,{children:"Rewards are issued based on the severity and impact of the disclosed vulnerability, determined at the discretion of Obol Labs."}),"\n",(0,r.jsx)(i.h3,{id:"critical-vulnerabilities-up-to-100000",children:"Critical Vulnerabilities: Up to $100,000"}),"\n",(0,r.jsx)(i.p,{children:"A Critical-level vulnerability is one that has a severe impact on the security of the in-production system from an unauthenticated external attacker, and requires immediate attention to fix. Highly likely to have a material impact on validator private key security, and/or loss of funds."}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"High impact, high likelihood"}),"\n"]}),"\n",(0,r.jsx)(i.p,{children:"Impacts:"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Attacker that is not a member of the cluster can successfully exfiltrate BLS (not K1) private key material from a threshold number of operators in the cluster."}),"\n",(0,r.jsx)(i.li,{children:"Attacker that is not a member of the cluster can achieve the production of arbitrary BLS signatures from a threshold number of operators in the cluster."}),"\n",(0,r.jsx)(i.li,{children:"Attacker can craft a malicious cluster invite capable of subverting even careful review of all data to steal funds during a deposit."}),"\n",(0,r.jsx)(i.li,{children:"Direct theft of any user funds, whether at-rest or in-motion, other than unclaimed yield"}),"\n",(0,r.jsx)(i.li,{children:"Direct loss of funds"}),"\n",(0,r.jsx)(i.li,{children:"Permanent freezing of funds (fix requires hard fork)"}),"\n",(0,r.jsx)(i.li,{children:"Network not being able to confirm new transactions (Total network shutdown)"}),"\n",(0,r.jsx)(i.li,{children:"Protocol insolvency"}),"\n"]}),"\n",(0,r.jsx)(i.h3,{id:"high-vulnerabilities-up-to-10000",children:"High Vulnerabilities: Up to $10,000"}),"\n",(0,r.jsx)(i.p,{children:"For significant security risks that impact the system from a position of low-trust and require a significant effort to fix."}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"High impact, medium likelihood"}),"\n",(0,r.jsx)(i.li,{children:"Medium impact, high likelihood"}),"\n"]}),"\n",(0,r.jsx)(i.p,{children:"Impacts:"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Attacker that is not a member of the cluster can successfully partition the cluster and keep the cluster offline indefinitely."}),"\n",(0,r.jsx)(i.li,{children:"Attacker that is not a member of the cluster can exfiltrate Charon ENR private keys."}),"\n",(0,r.jsx)(i.li,{children:"Attacker that is not a member of the cluster can destroy funds but cannot steal them."}),"\n",(0,r.jsx)(i.li,{children:"Unintended chain split (Network partition)"}),"\n",(0,r.jsx)(i.li,{children:"Temporary freezing of network transactions by delaying one block by 500% or more of the average block time of the preceding 24 hours beyond standard difficulty adjustments"}),"\n",(0,r.jsx)(i.li,{children:"RPC API crash affecting projects with greater than or equal to 25% of the market capitalization on top of the respective layer"}),"\n",(0,r.jsx)(i.li,{children:"Theft of unclaimed yield"}),"\n",(0,r.jsx)(i.li,{children:"Theft of unclaimed royalties"}),"\n",(0,r.jsx)(i.li,{children:"Permanent freezing of unclaimed yield"}),"\n",(0,r.jsx)(i.li,{children:"Permanent freezing of unclaimed royalties"}),"\n",(0,r.jsx)(i.li,{children:"Temporary freezing of funds"}),"\n",(0,r.jsxs)(i.li,{children:["Retrieve sensitive data/files from a running server:","\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"blockchain keys"}),"\n",(0,r.jsx)(i.li,{children:"database passwords"}),"\n",(0,r.jsx)(i.li,{children:"(this does not include non-sensitive environment variables, open source code, or usernames)"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["Taking state-modifying authenticated actions (with or without blockchain state interaction) on behalf of other users without any interaction by that user, such as:","\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Changing cluster information"}),"\n",(0,r.jsx)(i.li,{children:"Withdrawals"}),"\n",(0,r.jsx)(i.li,{children:"Making trades"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(i.h3,{id:"medium-vulnerabilities-up-to-2500",children:"Medium Vulnerabilities: Up to $2,500"}),"\n",(0,r.jsx)(i.p,{children:"For vulnerabilities with a moderate impact, affecting system availability or integrity."}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"High impact, low likelihood"}),"\n",(0,r.jsx)(i.li,{children:"Medium impact, medium likelihood"}),"\n",(0,r.jsx)(i.li,{children:"Low impact, high likelihood"}),"\n"]}),"\n",(0,r.jsx)(i.p,{children:"Impacts:"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Attacker that is a member of a cluster can exfiltrate K1 key material from another member."}),"\n",(0,r.jsx)(i.li,{children:"Attacker that is a member of the cluster can denial of service attack enough peers in the cluster to prevent operation of the validator(s)"}),"\n",(0,r.jsx)(i.li,{children:"Attacker that is a member of the cluster can bias the protocol in a manner to control the majority of block proposal opportunities."}),"\n",(0,r.jsx)(i.li,{children:"Attacker can get a DV Launchpad user to inadvertently interact with a smart contract that is not a part of normal operation of the launchpad."}),"\n",(0,r.jsx)(i.li,{children:"Increasing network processing node resource consumption by at least 30% without brute force actions, compared to the preceding 24 hours"}),"\n",(0,r.jsx)(i.li,{children:"Shutdown of greater than or equal to 30% of network processing nodes without brute force actions, but does not shut down the network"}),"\n",(0,r.jsx)(i.li,{children:"Charon cluster identity private key theft"}),"\n",(0,r.jsx)(i.li,{children:"Rogue node operator to penetrate and compromise other nodes to disturb the cluster\u2019s lifecycle"}),"\n",(0,r.jsx)(i.li,{children:"Charon public relay node is compromised and leads to cluster topologies getting discovered and disrupted"}),"\n",(0,r.jsx)(i.li,{children:"Smart contract unable to operate due to lack of token funds"}),"\n",(0,r.jsx)(i.li,{children:"Block stuffing"}),"\n",(0,r.jsx)(i.li,{children:"Griefing (e.g. no profit motive for an attacker, but damage to the users or the protocol)"}),"\n",(0,r.jsx)(i.li,{children:"Theft of gas"}),"\n",(0,r.jsx)(i.li,{children:"Unbounded gas consumption"}),"\n",(0,r.jsx)(i.li,{children:"Redirecting users to malicious websites (Open Redirect)"}),"\n"]}),"\n",(0,r.jsx)(i.h3,{id:"low-vulnerabilities-up-to-500",children:"Low Vulnerabilities: Up to $500"}),"\n",(0,r.jsx)(i.p,{children:"For vulnerabilities with minimal impact, unlikely to significantly affect system operations."}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Low impact, medium likelihood"}),"\n",(0,r.jsx)(i.li,{children:"Medium impact, low likelihood"}),"\n"]}),"\n",(0,r.jsx)(i.p,{children:"Impacts:"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Attacker can sometimes put a Charon node in a state that causes it to drop one out of every one hundred attestations made by a validator"}),"\n",(0,r.jsx)(i.li,{children:"Attacker can display bad data on a non-interactive part of the launchpad."}),"\n",(0,r.jsx)(i.li,{children:"Contract fails to deliver promised returns, but doesn't lose value"}),"\n",(0,r.jsx)(i.li,{children:"Shutdown of greater than 10% or equal to but less than 30% of network processing nodes without brute force actions, but does not shut down the network"}),"\n",(0,r.jsxs)(i.li,{children:["Changing details of other users (including modifying browser local storage) without already-connected wallet interaction and with significant user interaction such as:","\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Iframing leading to modifying the backend/browser state (must demonstrate impact with PoC)"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["Taking over broken or expired outgoing links such as:","\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Social media handles, etc."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["Temporarily disabling user to access target site, such as:","\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Locking up the victim from login"}),"\n",(0,r.jsx)(i.li,{children:"Cookie bombing, etc."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(i.p,{children:"Rewards may be issued as cash, merchandise, or other forms of recognition, at Obol's discretion. Only one reward will be granted per unique vulnerability."}),"\n",(0,r.jsx)(i.h2,{id:"the-following-activities-are-prohibited-by-this-bug-bounty-program",children:"The following activities are prohibited by this bug bounty program"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Any testing on mainnet or public testnet deployed code; all testing should be done on local-forks of either public testnet or mainnet"}),"\n",(0,r.jsx)(i.li,{children:"Any testing with pricing oracles or third-party smart contracts"}),"\n",(0,r.jsx)(i.li,{children:"Attempting phishing or other social engineering attacks against our employees and/or customers"}),"\n",(0,r.jsx)(i.li,{children:"Any testing with third-party systems and applications (e.g. browser extensions) as well as websites (e.g. SSO providers, advertising networks)"}),"\n",(0,r.jsx)(i.li,{children:"Any denial of service attacks that are executed against project assets"}),"\n",(0,r.jsx)(i.li,{children:"Automated testing of services that generate significant amounts of traffic"}),"\n",(0,r.jsx)(i.li,{children:"Public disclosure of an unpatched vulnerability in an embargoed bounty"}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"submission-process",children:"Submission process"}),"\n",(0,r.jsxs)(i.p,{children:["To report a vulnerability, please contact us at ",(0,r.jsx)(i.a,{href:"mailto:security@obol.tech",children:"security@obol.tech"})," with:"]}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"A detailed description of the vulnerability and its potential impact."}),"\n",(0,r.jsx)(i.li,{children:"Steps to reproduce the issue."}),"\n",(0,r.jsx)(i.li,{children:"Any relevant proof of concept code, screenshots, or documentation."}),"\n",(0,r.jsx)(i.li,{children:"Your contact information."}),"\n"]}),"\n",(0,r.jsx)(i.p,{children:"Incomplete reports may not be eligible for rewards."}),"\n",(0,r.jsx)(i.h2,{id:"disclosure-and-confidentiality",children:"Disclosure and Confidentiality"}),"\n",(0,r.jsx)(i.p,{children:"Obol Labs will disclose vulnerabilities and the identity of the researcher (with consent) after remediation. Researchers are required to maintain confidentiality until official disclosure by Obol Labs."}),"\n",(0,r.jsx)(i.h2,{id:"legal-and-ethical-compliance",children:"Legal and Ethical Compliance"}),"\n",(0,r.jsx)(i.p,{children:"Participants must adhere to all relevant laws and regulations. Obol Labs will not pursue legal action against researchers reporting vulnerabilities in good faith, but reserves the right to respond to violations of this policy."}),"\n",(0,r.jsx)(i.h2,{id:"non-disclosure-agreement-nda",children:"Non-Disclosure Agreement (NDA)"}),"\n",(0,r.jsx)(i.p,{children:"Participants may be required to sign an NDA for access to certain proprietary information during their research."})]})}function h(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,i,t)=>{t.d(i,{R:()=>o,x:()=>l});var n=t(96540);const r={},s=n.createContext(r);function o(e){const i=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(s.Provider,{value:i},e.children)}}}]);