"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[22266],{4761:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>n,toc:()=>a});const n=JSON.parse('{"id":"sec/overview","title":"Overview","description":"Security Overview","source":"@site/versioned_docs/version-v1.1.2/sec/overview.md","sourceDirName":"sec","slug":"/sec/overview","permalink":"/sec/overview","draft":false,"unlisted":false,"editUrl":"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v1.1.2/sec/overview.md","tags":[],"version":"v1.1.2","sidebarPosition":1,"frontMatter":{"sidebar_position":1,"description":"Security Overview"},"sidebar":"tutorialSidebar","previous":{"title":"TotalSplitPayload","permalink":"/sdk/type-aliases/TotalSplitPayload"},"next":{"title":"Obol Bug Bounty Program","permalink":"/sec/bug-bounty"}}');var i=t(74848),r=t(28453);const o={sidebar_position:1,description:"Security Overview"},c="Overview",l={},a=[{value:"Table of Contents",id:"table-of-contents",level:2},{value:"List of Security Audits and Assessments",id:"list-of-security-audits-and-assessments",level:2},{value:"Security focused documents",id:"security-focused-documents",level:2},{value:"Bug Bounty",id:"bug-bounty",level:2}];function d(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.header,{children:(0,i.jsx)(s.h1,{id:"overview",children:"Overview"})}),"\n",(0,i.jsx)(s.p,{children:"This page serves as an overview of the Obol Network from a security point of view."}),"\n",(0,i.jsx)(s.p,{children:"This page is updated quarterly. The last update was on 2024-June-19."}),"\n",(0,i.jsx)(s.h2,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"#overview",children:"Overview"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"#table-of-contents",children:"Table of Contents"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"#list-of-security-audits-and-assessments",children:"List of Security Audits and Assessments"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"#security-focused-documents",children:"Security focused documents"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"#bug-bounty",children:"Bug Bounty"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"list-of-security-audits-and-assessments",children:"List of Security Audits and Assessments"}),"\n",(0,i.jsxs)(s.p,{children:["The completed audits reports are linked ",(0,i.jsx)(s.a,{href:"https://github.com/ObolNetwork/obol-security/tree/main/audits",children:"here"}),"."]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["A review of Obol Labs ",(0,i.jsx)(s.a,{href:"./ev-assessment",children:"development processes"})," by ",(0,i.jsx)(s.a,{href:"https://www.etherealventures.com/",children:"Ethereal Ventures"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["A ",(0,i.jsx)(s.a,{href:"https://github.com/ObolNetwork/obol-security/blob/f9d7b0ad0bb8897f74ccb34cd4bd83012ad1d2b5/audits/Sigma_Prime_Obol_Network_Charon_Security_Assessment_Report_v2_1.pdf",children:"security assessment"})," of Charon by ",(0,i.jsx)(s.a,{href:"https://sigmaprime.io/",children:"Sigma Prime"})," resulting in version ",(0,i.jsx)(s.a,{href:"https://github.com/ObolNetwork/charon/releases/tag/v0.16.0",children:(0,i.jsx)(s.code,{children:"v0.16.0"})}),"."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["A second ",(0,i.jsx)(s.a,{href:"https://obol.tech/charon_quantstamp_assessment.pdf",children:"assessment of Charon"})," by ",(0,i.jsx)(s.a,{href:"https://quantstamp.com/",children:"QuantStamp"})," resulting in version ",(0,i.jsx)(s.a,{href:"https://github.com/ObolNetwork/charon/releases/tag/v0.19.1",children:(0,i.jsx)(s.code,{children:"v0.19.1"})}),"."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["A ",(0,i.jsx)(s.a,{href:"./smart_contract_audit",children:"solidity audit"})," of the Obol Splits contracts by ",(0,i.jsx)(s.a,{href:"https://zachobront.com/",children:"Zach Obront"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["A ",(0,i.jsx)(s.a,{href:"https://github.com/ObolNetwork/obol-security/blob/main/audits/Sayfer_2024-03_Penetration_Testing_CFD.pdf",children:"penetration testing certificate"})," of the Obol DV Launchpad by ",(0,i.jsx)(s.a,{href:"https://sayfer.io/",children:"Sayfer"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"security-focused-documents",children:"Security focused documents"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["A ",(0,i.jsx)(s.a,{href:"./threat_model",children:"threat model"})," for a DV middleware client like Charon."]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"bug-bounty",children:"Bug Bounty"}),"\n",(0,i.jsxs)(s.p,{children:["Information related to disclosing bugs and vulnerabilities to Obol can be found on ",(0,i.jsx)(s.a,{href:"/sec/bug-bounty",children:"the next page"}),"."]})]})}function h(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>o,x:()=>c});var n=t(96540);const i={},r=n.createContext(i);function o(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);