"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[21536],{56377:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"int/quickstart","title":"Quickstart","description":"Take part in a distributed validator cluster","source":"@site/versioned_docs/version-v0.5.0/int/quickstart.md","sourceDirName":"int","slug":"/int/quickstart","permalink":"/v0.5.0/int/quickstart","draft":false,"unlisted":false,"editUrl":"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.5.0/int/quickstart.md","tags":[],"version":"v0.5.0","sidebarPosition":4,"frontMatter":{"sidebar_position":4,"description":"Take part in a distributed validator cluster"},"sidebar":"tutorialSidebar","previous":{"title":"Key concepts","permalink":"/v0.5.0/int/key-concepts"},"next":{"title":"Working groups","permalink":"/v0.5.0/int/working-groups"}}');var r=n(74848),s=n(28453);const o={sidebar_position:4,description:"Take part in a distributed validator cluster"},a="Quickstart",l={},d=[{value:"Run a cluster alone",id:"run-a-cluster-alone",level:2},{value:"Run a cluster with others",id:"run-a-cluster-with-others",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"quickstart",children:"Quickstart"})}),"\n",(0,r.jsx)(t.admonition,{type:"warning",children:(0,r.jsx)(t.p,{children:"Charon is in an early alpha state and is not ready to be run on mainnet"})}),"\n",(0,r.jsx)(t.p,{children:"There are two ways to test out a distributed validator."}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Running the full cluster alone."}),"\n",(0,r.jsx)(t.li,{children:"Running one node in a cluster with a group of other node operators."}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"run-a-cluster-alone",children:"Run a cluster alone"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Clone the ",(0,r.jsx)(t.a,{href:"https://github.com/ObolNetwork/charon-docker-compose",children:"starter repo"})," and ",(0,r.jsx)(t.code,{children:"cd"})," into the directory."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sh",children:"# Clone the repo\ngit clone https://github.com/ObolNetwork/charon-docker-compose.git\n\n# Change directory\ncd charon-docker-compose/\n"})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Prepare the environment variables"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sh",children:"# Copy the sample environment variables\ncp .env.sample .env\n"})}),"\n",(0,r.jsxs)(t.p,{children:["For simplicities sake, this repo is configured to work with a remote Beacon node such as one from ",(0,r.jsx)(t.a,{href:"https://infura.io/",children:"Infura"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["Create an Eth2 project and copy the ",(0,r.jsx)(t.code,{children:"https"})," URL:"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Example Infura API Endpoint",src:n(13438).A+"",width:"2084",height:"616"})}),"\n",(0,r.jsxs)(t.p,{children:["Replace the placeholder value of ",(0,r.jsx)(t.code,{children:"CHARON_BEACON_NODE_ENDPOINT"})," in your newly created ",(0,r.jsx)(t.code,{children:".env"})," file with this URL."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Create the artifacts needed to run a testnet distributed validator cluster"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sh",children:'# Create a testnet distributed validator cluster\ndocker run --rm -v "$(pwd):/opt/charon" ghcr.io/obolnetwork/charon:latest create cluster --cluster-dir=".charon/cluster" --withdrawal-address="0x000000000000000000000000000000000000dead"\n'})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Start the cluster"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sh",children:"# Start the distributed validator cluster\ndocker-compose up\n"})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Checkout the monitoring dashboard and see if things look all right"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sh",children:"# Open Grafana\nopen http://localhost:3000/d/laEp8vupp\n"})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Activate the validator on the testnet using the original ",(0,r.jsx)(t.a,{href:"https://prater.launchpad.ethereum.org/en/overview",children:"staking launchpad"})," site with the deposit data created at ",(0,r.jsx)(t.code,{children:".charon/deposit-data.json"}),"."]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["If you use Mac OS, ",(0,r.jsx)(t.code,{children:".charon"}),' the default output folder, does not show up on the launchpad\'s "Upload Deposit Data" file picker. Rectify this by pressing ',(0,r.jsx)(t.code,{children:"Command + Shift + . "})," (full stop). This should display hidden folders, allowing you to select the deposit file."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"Congratulations, if this all worked you are now running a distributed validator cluster on a testnet. Try turning off a single node of the four and see if the validator stays online or begins missing duties, to see for yourself the fault-tolerance that can be added to proof of stake validation with this new Distributed Validator Technology."}),"\n",(0,r.jsxs)(t.admonition,{type:"tip",children:[(0,r.jsx)(t.mdxAdmonitionTitle,{}),(0,r.jsx)(t.p,{children:"Don't forget to be a good testnet steward and exit your validator when you are finished testing with it.*"}),(0,r.jsxs)(t.p,{children:["*",(0,r.jsx)(t.em,{children:"Once charon creates validator exit data in an upcoming release."})]})]}),"\n",(0,r.jsx)(t.h2,{id:"run-a-cluster-with-others",children:"Run a cluster with others"}),"\n",(0,r.jsxs)(t.p,{children:["This section will be completed alongside version ",(0,r.jsx)(t.code,{children:"v0.6.0"}),". Sit tight."]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},13438:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/example-infura-details-4f1f2822efecb29117f6e929380cf9aa.png"},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var i=n(96540);const r={},s=i.createContext(r);function o(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);