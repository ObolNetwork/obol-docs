"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[70396],{34469:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var s=i(74848),t=i(28453);const l={sidebar_position:5,description:"A reference for extra configuration of Ethereum Clients when running in DVs."},r="Client Configuration",o={id:"faq/client_configurations",title:"Client Configuration",description:"A reference for extra configuration of Ethereum Clients when running in DVs.",source:"@site/versioned_docs/version-v1.1.1/faq/client_configurations.md",sourceDirName:"faq",slug:"/faq/client_configurations",permalink:"/docs/v1.1.1/faq/client_configurations",draft:!1,unlisted:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v1.1.1/faq/client_configurations.md",tags:[],version:"v1.1.1",sidebarPosition:5,frontMatter:{sidebar_position:5,description:"A reference for extra configuration of Ethereum Clients when running in DVs."},sidebar:"tutorialSidebar",previous:{title:"Handling DKG failure",permalink:"/docs/v1.1.1/faq/dkg_failure"},next:{title:"Obol Contributions Program",permalink:"/docs/v1.1.1/faq/contributions"}},a={},d=[{value:"Lighthouse",id:"lighthouse",level:2},{value:"Consensus Client",id:"consensus-client",level:3},{value:"Validator Client",id:"validator-client",level:3},{value:"Lodestar",id:"lodestar",level:2},{value:"Consensus Client",id:"consensus-client-1",level:3},{value:"Validator Client",id:"validator-client-1",level:3},{value:"Nimbus",id:"nimbus",level:2},{value:"Consensus Client",id:"consensus-client-2",level:3},{value:"Validator Client",id:"validator-client-2",level:3},{value:"Prysm",id:"prysm",level:2},{value:"Consensus Client",id:"consensus-client-3",level:3},{value:"Validator Client",id:"validator-client-3",level:3},{value:"Teku",id:"teku",level:2},{value:"Consensus Client",id:"consensus-client-4",level:3},{value:"Validator Client",id:"validator-client-4",level:3}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"client-configuration",children:"Client Configuration"})}),"\n",(0,s.jsx)(n.p,{children:"Many execution, consensus, and validator clients need custom flags or parameters to work best with Distributed Validators. These settings are often dispersed across a number of documentation pages or example repos. This page aims to be a reference for each client and the specific additions they may require."}),"\n",(0,s.jsx)(n.h2,{id:"lighthouse",children:"Lighthouse"}),"\n",(0,s.jsx)(n.h3,{id:"consensus-client",children:"Consensus Client"}),"\n",(0,s.jsxs)(n.p,{children:["Nothing specific for distributed validators is required. If you are configuring MEV-boost, consult the settings you need ",(0,s.jsx)(n.a,{href:"/docs/v1.1.1/advanced/quickstart-builder-api#consensus-clients",children:"here"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"validator-client",children:"Validator Client"}),"\n",(0,s.jsx)(n.p,{children:"Required flags:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"--distributed\n"})}),"\n",(0,s.jsx)(n.h2,{id:"lodestar",children:"Lodestar"}),"\n",(0,s.jsx)(n.h3,{id:"consensus-client-1",children:"Consensus Client"}),"\n",(0,s.jsxs)(n.p,{children:["Nothing specific for distributed validators is required. If you are configuring MEV-boost, consult the settings you need ",(0,s.jsx)(n.a,{href:"/docs/v1.1.1/advanced/quickstart-builder-api#consensus-clients",children:"here"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"validator-client-1",children:"Validator Client"}),"\n",(0,s.jsx)(n.p,{children:"Required flags:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"--distributed\n"})}),"\n",(0,s.jsx)(n.h2,{id:"nimbus",children:"Nimbus"}),"\n",(0,s.jsx)(n.h3,{id:"consensus-client-2",children:"Consensus Client"}),"\n",(0,s.jsxs)(n.p,{children:["When running a Nimbus Consensus Client you must add the following flag ",(0,s.jsxs)(n.strong,{children:["to ",(0,s.jsx)(n.code,{children:"charon run"})]}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"--feature-set-enable=json_requests\n"})}),"\n",(0,s.jsx)(n.h3,{id:"validator-client-2",children:"Validator Client"}),"\n",(0,s.jsx)(n.p,{children:"Required flags:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"--distributed\n"})}),"\n",(0,s.jsx)(n.h2,{id:"prysm",children:"Prysm"}),"\n",(0,s.jsx)(n.h3,{id:"consensus-client-3",children:"Consensus Client"}),"\n",(0,s.jsxs)(n.p,{children:["Nothing specific for distributed validators is required. If you are configuring MEV-boost, consult the settings you need ",(0,s.jsx)(n.a,{href:"/docs/v1.1.1/advanced/quickstart-builder-api#consensus-clients",children:"here"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"validator-client-3",children:"Validator Client"}),"\n",(0,s.jsx)(n.p,{children:"Required flags:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"--distributed\n"})}),"\n",(0,s.jsx)(n.h2,{id:"teku",children:"Teku"}),"\n",(0,s.jsx)(n.h3,{id:"consensus-client-4",children:"Consensus Client"}),"\n",(0,s.jsx)(n.p,{children:"Required flags:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"--validators-graffiti-client-append-format=DISABLED\n"})}),"\n",(0,s.jsx)(n.h3,{id:"validator-client-4",children:"Validator Client"}),"\n",(0,s.jsx)(n.p,{children:"Required flags:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"--Xobol-dvt-integration-enabled\n"})})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>o});var s=i(96540);const t={},l=s.createContext(t);function r(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);