"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[97839],{57362:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"int/quickstart/quickstart-mainnet","title":"Run a DV on mainnet","description":"Run a cluster on mainnet","source":"@site/versioned_docs/version-v0.18.0/int/quickstart/quickstart-mainnet.md","sourceDirName":"int/quickstart","slug":"/int/quickstart/quickstart-mainnet","permalink":"/v0.18.0/int/quickstart/quickstart-mainnet","draft":false,"unlisted":false,"editUrl":"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.18.0/int/quickstart/quickstart-mainnet.md","tags":[],"version":"v0.18.0","sidebarPosition":7,"frontMatter":{"sidebar_position":7,"description":"Run a cluster on mainnet"},"sidebar":"tutorialSidebar","previous":{"title":"Exit a DV","permalink":"/v0.18.0/int/quickstart/quickstart-exit"},"next":{"title":"Create a DV using the SDK","permalink":"/v0.18.0/int/quickstart/advanced/quickstart-sdk"}}');var s=i(74848),o=i(28453);const r={sidebar_position:7,description:"Run a cluster on mainnet"},d="Run a DV on mainnet",a={},c=[{value:"Pre-requisites",id:"pre-requisites",level:2},{value:"Steps",id:"steps",level:2},{value:"Using charon-distributed-validator-node in full",id:"using-charon-distributed-validator-node-in-full",level:3},{value:"Using a remote mainnet beacon node",id:"using-a-remote-mainnet-beacon-node",level:3},{value:"Exit a mainnet Distributed Validator",id:"exit-a-mainnet-distributed-validator",level:3}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"run-a-dv-on-mainnet",children:"Run a DV on mainnet"})}),"\n",(0,s.jsxs)(n.admonition,{type:"warning",children:[(0,s.jsxs)(n.p,{children:["Charon is in a beta state, and ",(0,s.jsxs)(n.strong,{children:["you should proceed only if you accept the risk, the ",(0,s.jsx)(n.a,{href:"https://obol.tech/terms.pdf",children:"terms of use"}),", and have tested running a Distributed Validator on a testnet first"]}),"."]}),(0,s.jsx)(n.p,{children:"Distributed Validators created for goerli cannot be used on mainnet and vice versa, please take caution when creating, backing up, and activating mainnet validators. Incorrect usage may result in a loss of funds."})]}),"\n",(0,s.jsx)(n.p,{children:"This section is intended for users who wish to run their Distributed Validator on Ethereum mainnet."}),"\n",(0,s.jsx)(n.h2,{id:"pre-requisites",children:"Pre-requisites"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["You have ",(0,s.jsx)(n.a,{href:"/v0.18.0/int/key-concepts#distributed-validator-threshold",children:"enough up-to-spec nodes"})," for your mainnet deployment."]}),"\n",(0,s.jsxs)(n.li,{children:["Ensure you have ",(0,s.jsx)(n.a,{href:"https://docs.docker.com/engine/install/",children:"docker"})," installed on each node."]}),"\n",(0,s.jsxs)(n.li,{children:["Ensure you have ",(0,s.jsx)(n.a,{href:"https://git-scm.com/downloads",children:"git"})," installed on each node."]}),"\n",(0,s.jsxs)(n.li,{children:["Make sure ",(0,s.jsx)(n.code,{children:"docker"})," is running before executing the commands below."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"steps",children:"Steps"}),"\n",(0,s.jsx)(n.h3,{id:"using-charon-distributed-validator-node-in-full",children:"Using charon-distributed-validator-node in full"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Clone the ",(0,s.jsx)(n.a,{href:"https://github.com/ObolNetwork/charon-distributed-validator-node",children:"charon-distributed-validator-node"})," repo and ",(0,s.jsx)(n.code,{children:"cd"})," into the directory."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"# Clone this repo\ngit clone https://github.com/ObolNetwork/charon-distributed-validator-node.git\n\n# Change directory\ncd charon-distributed-validator-node\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["If you have already cloned the repo previously, make sure that it is ",(0,s.jsx)(n.a,{href:"./update",children:"up-to-date"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Copy the ",(0,s.jsx)(n.code,{children:".env.sample.mainnet"})," file to ",(0,s.jsx)(n.code,{children:".env"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"cp -n .env.sample.mainnet .env\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"4",children:["\n",(0,s.jsx)(n.li,{children:"Run the docker compose file"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"docker compose up -d\n"})}),"\n",(0,s.jsx)(n.p,{children:"Once your clients can connect and sync appropriately, your DV stack is now mainnet ready \ud83c\udf89"}),"\n",(0,s.jsx)(n.h3,{id:"using-a-remote-mainnet-beacon-node",children:"Using a remote mainnet beacon node"}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsx)(n.p,{children:"Using a remote beacon node will impact the performance of your Distributed Validator and should be used sparingly."})}),"\n",(0,s.jsxs)(n.p,{children:["If you already have a mainnet beacon node running somewhere and you want to use that instead of running EL (",(0,s.jsx)(n.code,{children:"geth"}),") & CL (",(0,s.jsx)(n.code,{children:"lighthouse"}),") as part of the repo, you can disable these images. To do so, follow these steps:"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Copy the ",(0,s.jsx)(n.code,{children:"docker-compose.override.yml.sample"})," file"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"cp -n docker-compose.override.yml.sample docker-compose.override.yml\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsxs)(n.li,{children:["Uncomment the ",(0,s.jsx)(n.code,{children:"profiles: [disable]"})," section for both ",(0,s.jsx)(n.code,{children:"geth"})," and ",(0,s.jsx)(n.code,{children:"lighthouse"}),". The override file should now look like this"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"services:\n  geth:\n    # Disable geth\n    profiles: [disable]\n    # Bind geth internal ports to host ports\n    #ports:\n      #- 8545:8545 # JSON-RPC\n      #- 8551:8551 # AUTH-RPC\n      #- 6060:6060 # Metrics\n\n  lighthouse:\n    # Disable lighthouse\n    profiles: [disable]\n    # Bind lighthouse internal ports to host ports\n    #ports:\n      #- 5052:5052 # HTTP\n      #- 5054:5054 # Metrics\n...\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsxs)(n.li,{children:["Then, uncomment and set the ",(0,s.jsx)(n.code,{children:"CHARON_BEACON_NODE_ENDPOINTS"})," variable in the ",(0,s.jsx)(n.code,{children:".env"})," file to your mainnet beacon node's URL"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"...\n# Connect to one or more external beacon nodes. Use a comma separated list excluding spaces.\nCHARON_BEACON_NODE_ENDPOINTS=<YOUR_REMOTE_MAINNET_BEACON_NODE_URL>\n...\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"4",children:["\n",(0,s.jsx)(n.li,{children:"Restart your docker compose"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"docker compose down\ndocker compose up -d\n"})}),"\n",(0,s.jsx)(n.h3,{id:"exit-a-mainnet-distributed-validator",children:"Exit a mainnet Distributed Validator"}),"\n",(0,s.jsxs)(n.p,{children:["If you want to exit your mainnet validator, refer to our ",(0,s.jsx)(n.a,{href:"/v0.18.0/int/quickstart/quickstart-exit",children:"exit guide"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>d});var t=i(96540);const s={},o=t.createContext(s);function r(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);