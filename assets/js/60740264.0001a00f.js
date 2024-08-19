"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[41348],{55594:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(74848),i=n(28453);const o={sidebar_position:5,description:"Run one node in a multi-operator distributed validator cluster"},a="Run a cluster with others",s={id:"int/quickstart/quickstart-group",title:"Run a cluster with others",description:"Run one node in a multi-operator distributed validator cluster",source:"@site/versioned_docs/version-v0.8.1/int/quickstart/quickstart-group.md",sourceDirName:"int/quickstart",slug:"/int/quickstart/quickstart-group",permalink:"/docs/v0.8.1/int/quickstart/quickstart-group",draft:!1,unlisted:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.8.1/int/quickstart/quickstart-group.md",tags:[],version:"v0.8.1",sidebarPosition:5,frontMatter:{sidebar_position:5,description:"Run one node in a multi-operator distributed validator cluster"},sidebar:"tutorialSidebar",previous:{title:"Run a cluster alone",permalink:"/docs/v0.8.1/int/quickstart/quickstart-alone"},next:{title:"Working groups",permalink:"/docs/v0.8.1/int/working-groups"}},d={},c=[{value:"Getting started with Charon",id:"getting-started-with-charon",level:2},{value:"Performing a Distributed Validator Key Generation Ceremony",id:"performing-a-distributed-validator-key-generation-ceremony",level:2},{value:"Verifying cluster health",id:"verifying-cluster-health",level:2},{value:"Activating the distributed validator",id:"activating-the-distributed-validator",level:2}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"run-a-cluster-with-others",children:"Run a cluster with others"})}),"\n",(0,r.jsx)(t.admonition,{type:"warning",children:(0,r.jsx)(t.p,{children:"Charon is in an early alpha state and is not ready to be run on mainnet"})}),"\n",(0,r.jsx)(t.p,{children:"To create a distributed validator cluster with a group of other node operators requires five key steps:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Every operator prepares their software and gets their charon client's ",(0,r.jsx)(t.a,{href:"/docs/v0.8.1/int/faq#what-is-an-enr",children:"ENR"})]}),"\n",(0,r.jsxs)(t.li,{children:["One operator prepares the terms of the distributed validator key generation ceremony","\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"They select the network, the withdrawal address, the number of 32 ether distributed validators to create, and the ENRs of each operator taking part in the ceremony."}),"\n",(0,r.jsx)(t.li,{children:"In future, the DV launchpad will facilitate this process more seamlessly, with consent on the terms provided by all operators that participate."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["Every operator participates in the DKG ceremony, and once successful, a number of cluster artifacts are created, including:","\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"The private key shares for each distributed validator"}),"\n",(0,r.jsx)(t.li,{children:"The deposit data file containing deposit details for each distributed validator"}),"\n",(0,r.jsxs)(t.li,{children:["A ",(0,r.jsx)(t.code,{children:"cluster-lock.json"})," file which contains the finalised terms of this cluster required by charon to operate."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["Every operator starts their node with ",(0,r.jsx)(t.code,{children:"charon run"}),", and uses their monitoring to determine the cluster health and connectivity"]}),"\n",(0,r.jsxs)(t.li,{children:["Once the cluster is confirmed to be healthy, deposit data files created during this process are activated on the ",(0,r.jsx)(t.a,{href:"https://launchpad.ethereum.org/",children:"staking launchpad"}),"."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"getting-started-with-charon",children:"Getting started with Charon"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Clone the ",(0,r.jsx)(t.a,{href:"https://github.com/ObolNetwork/charon-distributed-validator-node",children:"charon-distributed-validator-node"})," template repository from Github, and ",(0,r.jsx)(t.code,{children:"cd"})," into the directory."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sh",children:"# Clone the repo\ngit clone https://github.com/ObolNetwork/charon-distributed-validator-node.git\n\n# Change directory\ncd charon-distributed-validator-node/\n"})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Next create a private key for charon to use for its ENR"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sh",children:'# Create an ENR private key\ndocker run --rm -v "$(pwd):/opt/charon" ghcr.io/obolnetwork/charon:v0.8.1 create enr\n'})}),"\n",(0,r.jsx)(t.p,{children:"This command will print your charon client's ENR to the console. It should look something like:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"Created ENR private key: .charon/charon-enr-private-key\nenr:-JG4QAgAOXjGFcTIkXBO30aUMzg2YSo1CYV0OH8Sf2s7zA2kFjVC9ZQ_jZZItdE8gA-tUXW-rWGDqEcoQkeJ98Pw7GaGAYFI7eoegmlkgnY0gmlwhCKNyGGJc2VjcDI1NmsxoQI6SQlzw3WGZ_VxFHLhawQFhCK8Aw7Z0zq8IABksuJEJIN0Y3CCPoODdWRwgj6E\n"})}),"\n",(0,r.jsx)(t.admonition,{type:"warning",children:(0,r.jsx)(t.p,{children:"The ability to replace a deleted or compromised private key is limited at this point. Please make a secure backup of this private key if this distributed validator is important to you."})}),"\n",(0,r.jsx)(t.p,{children:"This record identifies your charon client no matter where it communicates from across the internet. It is required for the following step of creating a set of distributed validator private key shares amongst the cluster operators."}),"\n",(0,r.jsx)(t.p,{children:"Please make sure to make a backup of the private key at .charon/charon-enr-private-key. Be careful not to commit it to git! If you lose this file you won't be able to take part in the DKG ceremony."}),"\n",(0,r.jsxs)(t.p,{children:["If you are taking part in an organised Obol testnet, submit the created ENR public address (the console output starting with and including ",(0,r.jsx)(t.code,{children:"enr:-"}),", not the contents of the private key file) to the appropriate typeform."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"performing-a-distributed-validator-key-generation-ceremony",children:"Performing a Distributed Validator Key Generation Ceremony"}),"\n",(0,r.jsx)(t.p,{children:"To create the private keys for a distributed validator securely, a Distributed Key Generation (DKG) process must take place."}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["After gathering each operators ENR and setting them in the ",(0,r.jsx)(t.code,{children:".env"})," file, one operator should prepare the ceremony with ",(0,r.jsx)(t.code,{children:"charon create dkg"})]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sh",children:'\n# First set the ENRs of all the operators participating in DKG ceremony in .env file as CHARON_OPERATOR_ENRS\n\n# Create .charon/cluster-definition.json to participate in DKG ceremony\ndocker run --rm -v "$(pwd):/opt/charon" --env-file .env ghcr.io/obolnetwork/charon:v0.8.1 create dkg\n'})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["The operator that ran this command should distribute the resulting ",(0,r.jsx)(t.code,{children:"cluster-definition.json"})," file to each operator."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["At a pre-agreed time, all operators run the ceremony program with the ",(0,r.jsx)(t.code,{children:"charon dkg"})," command"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sh",children:'# Copy the cluster-definition.json file to .charon\ncp cluster-definition.json .charon/\n\n# Participate in DKG ceremony, this will create .charon/cluster-lock.json, .charon/deposit-data.json and .charon/validator_keys/\ndocker run --rm -v "$(pwd):/opt/charon" ghcr.io/obolnetwork/charon:v0.8.1 dkg\n'})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"verifying-cluster-health",children:"Verifying cluster health"}),"\n",(0,r.jsx)(t.p,{children:"Once the key generation ceremony has been completed, the charon nodes have the data they need to come together to form a cluster."}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["First you must prepare the required environment variables, in particular you need to set the ",(0,r.jsx)(t.code,{children:"CHARON_BEACON_NODE_ENDPOINT"})," variable to point at either a local or remote beacon node API endpoint."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sh",children:"# Copy the sample environment variables\ncp .env.sample .env\n"})}),"\n",(0,r.jsxs)(t.p,{children:["For simplicities sake, this repo is configured to work with a remote Beacon node such as one from ",(0,r.jsx)(t.a,{href:"https://infura.io/",children:"Infura"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["Create an Eth2 project and copy the ",(0,r.jsx)(t.code,{children:"https"})," URL for the network you want to use (this repo expects ",(0,r.jsx)(t.code,{children:"prater"}),"):"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Example Infura API Endpoint",src:n(13438).A+"",width:"2084",height:"616"})}),"\n",(0,r.jsxs)(t.p,{children:["Replace the placeholder value of ",(0,r.jsx)(t.code,{children:"CHARON_BEACON_NODE_ENDPOINT"})," in your newly created ",(0,r.jsx)(t.code,{children:".env"})," file with this URL."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Start your distributed validator node with docker-compose"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sh",children:"# Run a charon client, a vc client, and prom+grafana clients as containers\ndocker-compose up\n"})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Use the pre-prepared ",(0,r.jsx)(t.a,{href:"http://localhost:3000/",children:"grafana"})," dashboard to verify the cluster health looks okay. You should see connections with all other operators in the cluster as healthy, and observed ping times under 1 second for all connections."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sh",children:"# Open Grafana\nopen http://localhost:3000/d/singlenode\n"})}),"\n",(0,r.jsxs)(t.p,{children:["If Grafana doesn't load any data the first time you open it, check ",(0,r.jsx)(t.a,{href:"https://github.com/ObolNetwork/charon-distributed-validator-node#grafana-doesnt-load-any-data",children:"this method"})," for fixing the issue."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"activating-the-distributed-validator",children:"Activating the distributed validator"}),"\n",(0,r.jsx)(t.p,{children:"Once the cluster is healthy and fully connected, it is time to deposit the required 32 (test) ether to activate the newly created Distributed Validator."}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["Activate the validator on the testnet using the original ",(0,r.jsx)(t.a,{href:"https://prater.launchpad.ethereum.org/en/overview",children:"staking launchpad"})," site with the deposit data created at ",(0,r.jsx)(t.code,{children:".charon/deposit-data.json"}),".","\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["If you use Mac OS, ",(0,r.jsx)(t.code,{children:".charon"}),' the default output folder, does not show up on the launchpad\'s "Upload Deposit Data" file picker. Rectify this by pressing ',(0,r.jsx)(t.code,{children:"Command + Shift + . "})," (full stop). This should display hidden folders, allowing you to select the deposit file."]}),"\n",(0,r.jsx)(t.li,{children:"A more distributed validator friendly deposit interface is in the works for an upcoming release."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.li,{children:"This process takes approximately 16 hours for the deposit to be registered on the beacon chain. Future upgrades to the protocol aims to reduce this time."}),"\n",(0,r.jsx)(t.li,{children:"Once the validator deposit is recognised on the beacon chain, the validator is assigned an index, and the wait for activation begins."}),"\n",(0,r.jsxs)(t.li,{children:["Finally, once the validator is activated, it should be monitored for to ensure it is achieving an inclusion distance of near 0, to ensure optimal rewards. You should also tweet the link to your newly activated validator with the hashtag ",(0,r.jsx)(t.a,{href:"https://twitter.com/search?q=%2523RunDVT",children:"#RunDVT"})," \ud83d\ude43"]}),"\n"]}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsx)(t.p,{children:"Don't forget to be a good testnet steward and exit your validator when you are finished testing with it."})})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},13438:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/example-infura-details-4f1f2822efecb29117f6e929380cf9aa.png"},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>s});var r=n(96540);const i={},o=r.createContext(i);function a(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);