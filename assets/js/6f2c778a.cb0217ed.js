"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[74273],{7900:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"int/quickstart/quickstart-alone","title":"Run a cluster alone","description":"Run all nodes in a distributed validator cluster","source":"@site/versioned_docs/version-v0.6.1/int/quickstart/quickstart-alone.md","sourceDirName":"int/quickstart","slug":"/int/quickstart/quickstart-alone","permalink":"/v0.6.1/int/quickstart/quickstart-alone","draft":false,"unlisted":false,"editUrl":"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.6.1/int/quickstart/quickstart-alone.md","tags":[],"version":"v0.6.1","sidebarPosition":4,"frontMatter":{"sidebar_position":4,"description":"Run all nodes in a distributed validator cluster"},"sidebar":"tutorialSidebar","previous":{"title":"Quickstart Guides","permalink":"/v0.6.1/int/quickstart/"},"next":{"title":"Run a cluster with others","permalink":"/v0.6.1/int/quickstart/quickstart-group"}}');var r=n(74848),s=n(28453);const a={sidebar_position:4,description:"Run all nodes in a distributed validator cluster"},o="Run a cluster alone",l={},d=[];function c(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"run-a-cluster-alone",children:"Run a cluster alone"})}),"\n",(0,r.jsx)(t.admonition,{type:"warning",children:(0,r.jsx)(t.p,{children:"Charon is in an early alpha state and is not ready to be run on mainnet"})}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Clone the ",(0,r.jsx)(t.a,{href:"https://github.com/ObolNetwork/charon-distributed-validator-cluster",children:"charon-distributed-validator-cluster"})," template repo and ",(0,r.jsx)(t.code,{children:"cd"})," into the directory."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sh",children:"# Clone the repo\ngit clone https://github.com/ObolNetwork/charon-distributed-validator-cluster.git\n\n# Change directory\ncd charon-distributed-validator-cluster/\n"})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Prepare the environment variables"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sh",children:"# Copy the sample environment variables\ncp .env.sample .env\n"})}),"\n",(0,r.jsxs)(t.p,{children:["For simplicities sake, this repo is configured to work with a remote Beacon node such as one from ",(0,r.jsx)(t.a,{href:"https://infura.io/",children:"Infura"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["Create an Eth2 project and copy the ",(0,r.jsx)(t.code,{children:"https"})," URL:"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Example Infura API Endpoint",src:n(13438).A+"",width:"2084",height:"616"})}),"\n",(0,r.jsxs)(t.p,{children:["Replace the placeholder value of ",(0,r.jsx)(t.code,{children:"CHARON_BEACON_NODE_ENDPOINT"})," in your newly created ",(0,r.jsx)(t.code,{children:".env"})," file with this URL."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Create the artifacts needed to run a testnet distributed validator cluster"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sh",children:'# Create a testnet distributed validator cluster\ndocker run --rm -v "$(pwd):/opt/charon" ghcr.io/obolnetwork/charon:latest create cluster --cluster-dir=".charon" --withdrawal-address="0x000000000000000000000000000000000000dead"\n'})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Start the cluster"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sh",children:"# Start the distributed validator cluster\ndocker-compose up\n"})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Checkout the monitoring dashboard and see if things look all right"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sh",children:"# Open Grafana\nopen http://localhost:3000/d/laEp8vupp\n"})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Activate the validator on the testnet using the original ",(0,r.jsx)(t.a,{href:"https://prater.launchpad.ethereum.org/en/overview",children:"staking launchpad"})," site with the deposit data created at ",(0,r.jsx)(t.code,{children:".charon/deposit-data.json"}),"."]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["If you use Mac OS, ",(0,r.jsx)(t.code,{children:".charon"}),' the default output folder, does not show up on the launchpad\'s "Upload Deposit Data" file picker. Rectify this by pressing ',(0,r.jsx)(t.code,{children:"Command + Shift + . "})," (full stop). This should display hidden folders, allowing you to select the deposit file."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["Congratulations, if this all worked you are now running a distributed validator cluster on a testnet. Try turning off a single node of the four with ",(0,r.jsx)(t.code,{children:"docker stop"})," and see if the validator stays online or begins missing duties, to see for yourself the fault-tolerance that can be added to proof of stake validation with this new Distributed Validator Technology."]}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsx)(t.p,{children:"Don't forget to be a good testnet steward and exit your validator when you are finished testing with it."})})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},13438:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/example-infura-details-4f1f2822efecb29117f6e929380cf9aa.png"},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>o});var i=n(96540);const r={},s=i.createContext(r);function a(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);