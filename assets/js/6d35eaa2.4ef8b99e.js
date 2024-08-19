"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[36242],{49391:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var i=n(74848),r=n(28453);const s={sidebar_position:4,description:"Run all nodes in a distributed validator cluster"},o="Run a cluster alone",a={id:"int/quickstart/quickstart-alone",title:"Run a cluster alone",description:"Run all nodes in a distributed validator cluster",source:"@site/versioned_docs/version-v0.11.0/int/quickstart/quickstart-alone.md",sourceDirName:"int/quickstart",slug:"/int/quickstart/quickstart-alone",permalink:"/docs/v0.11.0/int/quickstart/quickstart-alone",draft:!1,unlisted:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.11.0/int/quickstart/quickstart-alone.md",tags:[],version:"v0.11.0",sidebarPosition:4,frontMatter:{sidebar_position:4,description:"Run all nodes in a distributed validator cluster"},sidebar:"tutorialSidebar",previous:{title:"CLI",permalink:"/docs/v0.11.0/int/quickstart/group/quickstart-group-cli"},next:{title:"Run a cluster with MEV-Boost",permalink:"/docs/v0.11.0/int/quickstart/quickstart-builder-api"}},d={},l=[];function c(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"run-a-cluster-alone",children:"Run a cluster alone"})}),"\n",(0,i.jsx)(t.admonition,{type:"warning",children:(0,i.jsx)(t.p,{children:"Charon is in an early alpha state and is not ready to be run on mainnet"})}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Clone the ",(0,i.jsx)(t.a,{href:"https://github.com/ObolNetwork/charon-distributed-validator-cluster",children:"charon-distributed-validator-cluster"})," template repo and ",(0,i.jsx)(t.code,{children:"cd"})," into the directory."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sh",children:"# Clone the repo\ngit clone https://github.com/ObolNetwork/charon-distributed-validator-cluster.git\n\n# Change directory\ncd charon-distributed-validator-cluster/\n"})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Prepare the environment variables"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sh",children:"# Copy the sample environment variables\ncp .env.sample .env\n"})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:".env.sample"})," is a sample environment file that allows overriding default configuration defined in ",(0,i.jsx)(t.code,{children:"docker-compose.yml"}),". Uncomment and set any variable to override its value."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Create the artifacts needed to run a testnet distributed validator cluster"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sh",children:'# Create a testnet distributed validator cluster\ndocker run --rm -v "$(pwd):/opt/charon" obolnetwork/charon:v0.11.0 create cluster --withdrawal-address="0x000000000000000000000000000000000000dead"\n'})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Start the cluster"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sh",children:"# Start the distributed validator cluster\ndocker-compose up\n"})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Checkout the monitoring dashboard and see if things look all right"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sh",children:"# Open Grafana\nopen http://localhost:3000/d/singlenode/single-charon-node-dashboard?\n"})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Activate the validator on the testnet using the original ",(0,i.jsx)(t.a,{href:"https://goerli.launchpad.ethereum.org/en/overview",children:"staking launchpad"})," site with the deposit data created at ",(0,i.jsx)(t.code,{children:".charon/cluster/deposit-data.json"}),"."]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["If you use Mac OS, ",(0,i.jsx)(t.code,{children:".charon"}),' the default output folder, does not show up on the launchpad\'s "Upload Deposit Data" file picker. Rectify this by pressing ',(0,i.jsx)(t.code,{children:"Command + Shift + . "})," (full stop). This should display hidden folders, allowing you to select the deposit file."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["If this all worked, you are now running a distributed validator cluster on a testnet. Congratulations \ud83c\udf89.\nTry turning off a single node of the four with ",(0,i.jsx)(t.code,{children:"docker stop"})," and see if the validator stays online or begins missing duties, to see for yourself the fault-tolerance that can be added to proof of stake validation with this new Distributed Validator Technology."]}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsx)(t.p,{children:"Don't forget to be a good testnet steward and exit your validator when you are finished testing with it."})})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var i=n(96540);const r={},s=i.createContext(r);function o(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);