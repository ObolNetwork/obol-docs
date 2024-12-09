"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[30974],{90896:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"sdk/index","title":"index","description":"SDK Version: v2.1.0","source":"@site/docs/sdk/index.md","sourceDirName":"sdk","slug":"/sdk/","permalink":"/next/sdk/","draft":false,"unlisted":false,"editUrl":"https://github.com/ObolNetwork/obol-docs/edit/main/docs/sdk/index.md","tags":[],"version":"current","frontMatter":{"hide_title":true},"sidebar":"apiSidebar","next":{"title":"FORK_MAPPING","permalink":"/next/sdk/enumerations/FORK_MAPPING"}}');var t=s(74848),r=s(28453);const l={hide_title:!0},o=void 0,d={},a=[{value:"Getting Started",id:"getting-started",level:2},{value:"Terms and Conditions",id:"terms-and-conditions",level:2},{value:"\u26a0\ufe0f Important Security Notice:",id:"\ufe0f-important-security-notice",level:2},{value:"Contributing",id:"contributing",level:2},{value:"How to Report Bugs",id:"how-to-report-bugs",level:3},{value:"How to Propose Changes",id:"how-to-propose-changes",level:3},{value:"Code Review Process",id:"code-review-process",level:3},{value:"Enumerations",id:"enumerations",level:2},{value:"Classes",id:"classes",level:2},{value:"Interfaces",id:"interfaces",level:2},{value:"Type Aliases",id:"type-aliases",level:2},{value:"Functions",id:"functions",level:2}];function c(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("span",{className:"theme-doc-version-badge badge badge--secondary",children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)("strong",{children:"SDK Version:"})," v2.1.0"]})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://obol.org/obolnetwork.png",alt:"Obol Logo"})}),"\n",(0,t.jsx)("h1",{align:"center",children:"Obol SDK"}),"\n",(0,t.jsxs)(n.p,{children:["This repo contains the Obol Software Development Kit, for creating Distributed Validators with the help of the ",(0,t.jsx)(n.a,{href:"https://docs.obol.org/api",children:"Obol API"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"getting-started",children:"Getting Started"}),"\n",(0,t.jsxs)(n.p,{children:["Checkout our ",(0,t.jsx)(n.a,{href:"https://docs.obol.org/advanced/quickstart-sdk",children:"docs"}),", ",(0,t.jsx)(n.a,{href:"https://github.com/ObolNetwork/obol-sdk-examples/",children:"examples"}),", and SDK ",(0,t.jsx)(n.a,{href:"https://obolnetwork.github.io/obol-sdk",children:"reference"}),". Further guides and walkthroughs coming soon."]}),"\n",(0,t.jsx)(n.h2,{id:"terms-and-conditions",children:"Terms and Conditions"}),"\n",(0,t.jsxs)(n.p,{children:["To use obol-sdk and in order to be able to create a cluster definition or accept an invite to join a cluster, you must accept the ",(0,t.jsx)(n.a,{href:"https://obol.org/terms.pdf",children:"latest Obol terms and conditions"})," by calling acceptObolLatestTermsAndConditions."]}),"\n",(0,t.jsx)(n.h2,{id:"\ufe0f-important-security-notice",children:"\u26a0\ufe0f Important Security Notice:"}),"\n",(0,t.jsxs)(n.p,{children:["If you're integrating this SDK with a ",(0,t.jsx)(n.strong,{children:"backend"})," (e.g., in Node.js), and you store a private key for executing splitter transactions, handle it with extreme caution. Ensure that:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The private key is securely stored (e.g., in an ",(0,t.jsx)(n.code,{children:".env"})," file)."]}),"\n",(0,t.jsxs)(n.li,{children:["Never commit or push your ",(0,t.jsx)(n.code,{children:".env"})," file containing the private key to version control."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"contributing",children:"Contributing"}),"\n",(0,t.jsx)(n.p,{children:"Please review the following guidelines:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#how-to-report-bugs",children:"How to Report Bugs"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#how-to-propose-changes",children:"How to Propose Changes"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#code-review-process",children:"Code Review Process"})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"how-to-report-bugs",children:"How to Report Bugs"}),"\n",(0,t.jsx)(n.p,{children:"If you encounter a bug or unexpected behavior, please follow these steps to report it:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:'Go to the "Issues" tab of this repository.'}),"\n",(0,t.jsx)(n.li,{children:'Click on the "Get started" button in the Bug report section.'}),"\n",(0,t.jsx)(n.li,{children:"Provide a clear title and description of the issue following the format provided."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"how-to-propose-changes",children:"How to Propose Changes"}),"\n",(0,t.jsx)(n.p,{children:"If you'd like to propose improvements or new features, please follow these steps:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Fork this repository."}),"\n",(0,t.jsx)(n.li,{children:"Create a new branch for your changes."}),"\n",(0,t.jsx)(n.li,{children:"Make your changes and commit them with clear messages."}),"\n",(0,t.jsx)(n.li,{children:"Open a pull request with a detailed description of the changes."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"code-review-process",children:"Code Review Process"}),"\n",(0,t.jsx)(n.p,{children:"All contributions are reviewed before they are merged into the main branch. Please address any feedback provided during the review process."}),"\n",(0,t.jsx)(n.p,{children:"Thank you for contributing to Obol-SDK!"}),"\n",(0,t.jsx)(n.h2,{id:"enumerations",children:"Enumerations"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/next/sdk/enumerations/FORK_MAPPING",children:"FORK_MAPPING"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"classes",children:"Classes"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/next/sdk/classes/Client",children:"Client"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"interfaces",children:"Interfaces"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/next/sdk/interfaces/ClusterDefinition",children:"ClusterDefinition"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/next/sdk/interfaces/RewardsSplitPayload",children:"RewardsSplitPayload"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"type-aliases",children:"Type Aliases"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/next/sdk/type-aliases/ClusterOperator",children:"ClusterOperator"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/next/sdk/type-aliases/OperatorPayload",children:"OperatorPayload"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/next/sdk/type-aliases/ClusterCreator",children:"ClusterCreator"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/next/sdk/type-aliases/ClusterValidator",children:"ClusterValidator"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/next/sdk/type-aliases/ClusterPayload",children:"ClusterPayload"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/next/sdk/type-aliases/SplitRecipient",children:"SplitRecipient"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/next/sdk/type-aliases/TotalSplitPayload",children:"TotalSplitPayload"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/next/sdk/type-aliases/BuilderRegistrationMessage",children:"BuilderRegistrationMessage"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/next/sdk/type-aliases/BuilderRegistration",children:"BuilderRegistration"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/next/sdk/type-aliases/DepositData",children:"DepositData"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/next/sdk/type-aliases/DistributedValidator",children:"DistributedValidator"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/next/sdk/type-aliases/ClusterLock",children:"ClusterLock"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/next/sdk/type-aliases/ETH_ADDRESS",children:"ETH_ADDRESS"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"functions",children:"Functions"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/next/sdk/functions/validateClusterLock",children:"validateClusterLock"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>o});var i=s(96540);const t={},r=i.createContext(t);function l(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);