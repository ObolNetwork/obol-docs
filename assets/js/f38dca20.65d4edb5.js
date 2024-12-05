"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[62284],{19891:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"int/quickstart/alone/test-locally","title":"Run a test cluster locally","description":"Test the solo cluster locally","source":"@site/versioned_docs/version-v0.17.0/int/quickstart/alone/test-locally.md","sourceDirName":"int/quickstart/alone","slug":"/int/quickstart/alone/test-locally","permalink":"/v0.17.0/int/quickstart/alone/test-locally","draft":false,"unlisted":false,"editUrl":"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.17.0/int/quickstart/alone/test-locally.md","tags":[],"version":"v0.17.0","sidebarPosition":1,"frontMatter":{"sidebar_position":1,"description":"Test the solo cluster locally"},"sidebar":"tutorialSidebar","previous":{"title":"Quickstart Guides","permalink":"/v0.17.0/int/quickstart/"},"next":{"title":"Create the private key shares","permalink":"/v0.17.0/int/quickstart/alone/create-keys"}}');var r=t(74848),i=t(28453);const l={sidebar_position:1,description:"Test the solo cluster locally"},o="Run a test cluster locally",c={},a=[{value:"Pre-requisites",id:"pre-requisites",level:2},{value:"Create the key shares locally",id:"create-the-key-shares-locally",level:2},{value:"Start the cluster",id:"start-the-cluster",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"run-a-test-cluster-locally",children:"Run a test cluster locally"})}),"\n",(0,r.jsxs)(n.admonition,{type:"warning",children:[(0,r.jsx)(n.p,{children:"This is a demo repo to understand how Distributed Validators work and is not suitable for a production deployment."}),(0,r.jsx)(n.p,{children:"This guide only runs one Execution Client, one Consensus Client, and 6 Distributed Validator Charon Client + Validator Client pairs on a single docker instance. As a consequence, if this machine fails, there will not be fault tolerance."}),(0,r.jsxs)(n.p,{children:["Follow these two guides sequentially instead for production deployment: ",(0,r.jsx)(n.a,{href:"/v0.17.0/int/quickstart/alone/create-keys",children:"create keys centrally"})," and ",(0,r.jsx)(n.a,{href:"/v0.17.0/int/quickstart/alone/deploy",children:"how to deploy them"}),"."]})]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.a,{href:"https://github.com/ObolNetwork/charon-distributed-validator-cluster",children:(0,r.jsx)(n.code,{children:"charon-distributed-validator-cluster"})})," repo contains six charon clients in separate docker containers along with an execution client and consensus client, simulating a Distributed Validator cluster running."]}),"\n",(0,r.jsx)(n.p,{children:"The default cluster consists of:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://github.com/NethermindEth/nethermind",children:"Nethermind"}),", an execution layer client"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://github.com/sigp/lighthouse",children:"Lighthouse"}),", a consensus layer client"]}),"\n",(0,r.jsxs)(n.li,{children:["Six ",(0,r.jsx)(n.a,{href:"https://github.com/ObolNetwork/charon",children:"charon"})," nodes"]}),"\n",(0,r.jsxs)(n.li,{children:["A mixture of validator clients:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["VC0: ",(0,r.jsx)(n.a,{href:"https://github.com/sigp/lighthouse",children:"Lighthouse"})]}),"\n",(0,r.jsxs)(n.li,{children:["vc1: ",(0,r.jsx)(n.a,{href:"https://github.com/ConsenSys/teku",children:"Teku"})]}),"\n",(0,r.jsxs)(n.li,{children:["vc2: ",(0,r.jsx)(n.a,{href:"https://github.com/status-im/nimbus-eth2",children:"Nimbus"})]}),"\n",(0,r.jsxs)(n.li,{children:["vc3: ",(0,r.jsx)(n.a,{href:"https://github.com/sigp/lighthouse",children:"Lighthouse"})]}),"\n",(0,r.jsxs)(n.li,{children:["vc4: ",(0,r.jsx)(n.a,{href:"https://github.com/ConsenSys/teku",children:"Teku"})]}),"\n",(0,r.jsxs)(n.li,{children:["vc5: ",(0,r.jsx)(n.a,{href:"https://github.com/status-im/nimbus-eth2",children:"Nimbus"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"pre-requisites",children:"Pre-requisites"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Ensure you have ",(0,r.jsx)(n.a,{href:"https://docs.docker.com/engine/install/",children:"docker"})," installed."]}),"\n",(0,r.jsxs)(n.li,{children:["Ensure you have ",(0,r.jsx)(n.a,{href:"https://git-scm.com/downloads",children:"git"})," installed."]}),"\n",(0,r.jsxs)(n.li,{children:["Make sure ",(0,r.jsx)(n.code,{children:"docker"})," is running before executing the commands below."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"create-the-key-shares-locally",children:"Create the key shares locally"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Clone the ",(0,r.jsx)(n.a,{href:"https://github.com/ObolNetwork/charon-distributed-validator-cluster",children:"charon-distributed-validator-cluster"})," repo and ",(0,r.jsx)(n.code,{children:"cd"})," into the directory."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"# Clone the repo\ngit clone https://github.com/ObolNetwork/charon-distributed-validator-cluster.git\n\n# Change directory\ncd charon-distributed-validator-cluster/\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Prepare the environment variables"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"# Copy the sample environment variables\ncp .env.sample .env\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:".env.sample"})," is a sample environment file that allows overriding default configuration defined in ",(0,r.jsx)(n.code,{children:"docker-compose.yml"}),". Uncomment and set any variable to override its value."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Create the artifacts needed to run a DV cluster by running the following command:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:'# Enter required validator addresses\nWITHDRAWAL_ADDR=<ENTER YOUR WITHDRAWAL ADDRESS HERE>\nFEE_RECIPIENT_ADDR=<ENTER YOUR FEE RECIPIENT ADDRESS HERE>\n\n# Create a distributed validator cluster\ndocker run --rm -v "$(pwd):/opt/charon" obolnetwork/charon:v0.17.0 create cluster --name="mycluster" --cluster-dir=".charon/cluster/" --withdrawal-addresses="${WITHDRAWAL_ADDR}" --fee-recipient-addresses="${FEE_RECIPIENT_ADDR}" --nodes 6 --network goerli --num-validators=1\n'})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["These commands will create six folders within ",(0,r.jsx)(n.code,{children:".charon/cluster"}),", one for each node created. You will need to rename ",(0,r.jsx)(n.code,{children:"node*"})," to ",(0,r.jsx)(n.code,{children:".charon"})," for each folder to be found by the default ",(0,r.jsx)(n.code,{children:"charon run"})," command, or you can use ",(0,r.jsx)(n.code,{children:'charon run --private-key-file=".charon/cluster/node0/charon-enr-private-key" --lock-file=".charon/cluster/node0/cluster-lock.json"'})," for each instance of charon you start."]}),"\n",(0,r.jsx)(n.h2,{id:"start-the-cluster",children:"Start the cluster"}),"\n",(0,r.jsx)(n.p,{children:"Run this command to start your cluster containers"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"# Start the distributed validator cluster\ndocker compose up --build\n"})}),"\n",(0,r.jsx)(n.p,{children:"Check the monitoring dashboard and see if things look all right"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"# Open Grafana\nopen http://localhost:3000/d/laEp8vupp\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>o});var s=t(96540);const r={},i=s.createContext(r);function l(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);