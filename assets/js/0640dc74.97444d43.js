"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[29287],{84174:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"advanced/quickstart-combine","title":"Combine DV private key shares","description":"Combine distributed validator private key shares to recover the validator private key.","source":"@site/versioned_docs/version-v0.19.2/advanced/quickstart-combine.md","sourceDirName":"advanced","slug":"/advanced/quickstart-combine","permalink":"/v0.19.2/advanced/quickstart-combine","draft":false,"unlisted":false,"editUrl":"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.19.2/advanced/quickstart-combine.md","tags":[],"version":"v0.19.2","sidebarPosition":9,"frontMatter":{"sidebar_position":9,"description":"Combine distributed validator private key shares to recover the validator private key."},"sidebar":"tutorialSidebar","previous":{"title":"Advanced Docker Configs","permalink":"/v0.19.2/advanced/adv-docker-configs"},"next":{"title":"Frequently asked questions","permalink":"/v0.19.2/faq/general"}}');var o=n(74848),s=n(28453);const i={sidebar_position:9,description:"Combine distributed validator private key shares to recover the validator private key."},a="Combine DV private key shares",d={},c=[{value:"Pre-requisites",id:"pre-requisites",level:2},{value:"Step 1. Set up the key combination directory tree",id:"step-1-set-up-the-key-combination-directory-tree",level:2},{value:"Step 2. Combine the key shares",id:"step-2-combine-the-key-shares",level:2}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"combine-dv-private-key-shares",children:"Combine DV private key shares"})}),"\n",(0,o.jsxs)(t.admonition,{type:"warning",children:[(0,o.jsx)(t.p,{children:"Reconstituting Distributed Validator private key shares into a standard validator private key is a security risk, and can potentially cause your validator to be slashed."}),(0,o.jsx)(t.p,{children:"Only combine private keys as a last resort and do so with extreme caution."})]}),"\n",(0,o.jsx)(t.p,{children:"Combine distributed validator private key shares into an Ethereum validator private key."}),"\n",(0,o.jsx)(t.h2,{id:"pre-requisites",children:"Pre-requisites"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["Ensure you have the ",(0,o.jsx)(t.code,{children:".charon"})," directories of at least a threshold of the cluster's node operators."]}),"\n",(0,o.jsxs)(t.li,{children:["Ensure you have ",(0,o.jsx)(t.a,{href:"https://docs.docker.com/engine/install/",children:"docker"})," installed."]}),"\n",(0,o.jsxs)(t.li,{children:["Make sure ",(0,o.jsx)(t.code,{children:"docker"})," is running before executing the commands below."]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"step-1-set-up-the-key-combination-directory-tree",children:"Step 1. Set up the key combination directory tree"}),"\n",(0,o.jsxs)(t.p,{children:["Rename each cluster node operator ",(0,o.jsx)(t.code,{children:".charon"})," directory in a different way to avoid folder name conflicts."]}),"\n",(0,o.jsx)(t.p,{children:"We suggest naming them clearly and distinctly, to avoid confusion."}),"\n",(0,o.jsx)(t.p,{children:"At the end of this process, you should have a tree like this:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-shell",children:"$ tree ./cluster\n\ncluster/\n\u251c\u2500\u2500 node0\n\u2502\xa0\xa0 \u251c\u2500\u2500 charon-enr-private-key\n\u2502\xa0\xa0 \u251c\u2500\u2500 cluster-lock.json\n\u2502\xa0\xa0 \u251c\u2500\u2500 deposit-data.json\n\u2502\xa0\xa0 \u2514\u2500\u2500 validator_keys\n\u2502\xa0\xa0     \u251c\u2500\u2500 keystore-0.json\n\u2502\xa0\xa0     \u251c\u2500\u2500 keystore-0.txt\n\u2502\xa0\xa0     \u251c\u2500\u2500 keystore-1.json\n\u2502\xa0\xa0     \u2514\u2500\u2500 keystore-1.txt\n\u251c\u2500\u2500 node1\n\u2502\xa0\xa0 \u251c\u2500\u2500 charon-enr-private-key\n\u2502\xa0\xa0 \u251c\u2500\u2500 cluster-lock.json\n\u2502\xa0\xa0 \u251c\u2500\u2500 deposit-data.json\n\u2502\xa0\xa0 \u2514\u2500\u2500 validator_keys\n\u2502\xa0\xa0     \u251c\u2500\u2500 keystore-0.json\n\u2502\xa0\xa0     \u251c\u2500\u2500 keystore-0.txt\n\u2502\xa0\xa0     \u251c\u2500\u2500 keystore-1.json\n\u2502\xa0\xa0     \u2514\u2500\u2500 keystore-1.txt\n\u251c\u2500\u2500 node2\n\u2502\xa0\xa0 \u251c\u2500\u2500 charon-enr-private-key\n\u2502\xa0\xa0 \u251c\u2500\u2500 cluster-lock.json\n\u2502\xa0\xa0 \u251c\u2500\u2500 deposit-data.json\n\u2502\xa0\xa0 \u2514\u2500\u2500 validator_keys\n\u2502\xa0\xa0     \u251c\u2500\u2500 keystore-0.json\n\u2502\xa0\xa0     \u251c\u2500\u2500 keystore-0.txt\n\u2502\xa0\xa0     \u251c\u2500\u2500 keystore-1.json\n\u2502\xa0\xa0     \u2514\u2500\u2500 keystore-1.txt\n...\n\u2514\u2500\u2500 node*\n    \u251c\u2500\u2500 charon-enr-private-key\n    \u251c\u2500\u2500 cluster-lock.json\n    \u251c\u2500\u2500 deposit-data.json\n    \u2514\u2500\u2500 validator_keys\n        \u251c\u2500\u2500 keystore-0.json\n        \u251c\u2500\u2500 keystore-0.txt\n        \u251c\u2500\u2500 keystore-1.json\n        \u2514\u2500\u2500 keystore-1.txt\n"})}),"\n",(0,o.jsxs)(t.admonition,{type:"warning",children:[(0,o.jsxs)(t.p,{children:["Make sure to never mix the various ",(0,o.jsx)(t.code,{children:".charon"})," directories with one another."]}),(0,o.jsx)(t.p,{children:"Doing so can potentially cause the combination process to fail."})]}),"\n",(0,o.jsx)(t.h2,{id:"step-2-combine-the-key-shares",children:"Step 2. Combine the key shares"}),"\n",(0,o.jsx)(t.p,{children:"Run the following command:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-sh",children:'# Combine a clusters private keys\ndocker run --rm -v "$(pwd):/opt/charon" obolnetwork/charon:v0.19.2 combine --cluster-dir /opt/charon/cluster --output-dir /opt/charon/combined\n'})}),"\n",(0,o.jsxs)(t.p,{children:["This command will store the combined keys in the ",(0,o.jsx)(t.code,{children:"output-dir"}),", in this case a folder named ",(0,o.jsx)(t.code,{children:"combined"}),"."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-shell",children:"$ tree combined\ncombined\n\u251c\u2500\u2500 keystore-0.json\n\u251c\u2500\u2500 keystore-0.txt\n\u251c\u2500\u2500 keystore-1.json\n\u2514\u2500\u2500 keystore-1.txt\n"})}),"\n",(0,o.jsx)(t.p,{children:"We can verify that the directory names are correct by looking at the lock file:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-shell",children:'$ jq .distributed_validators[].distributed_public_key  cluster/node0/cluster-lock.json\n"0x822c5310674f4fc4ec595642d0eab73d01c62b588f467da6f98564f292a975a0ac4c3a10f1b3a00ccc166a28093c2dcd"\n"0x8929b4c8af2d2eb222d377cac2aa7be950e71d2b247507d19b5fdec838f0fb045ea8910075f191fd468da4be29690106"\n'})}),"\n",(0,o.jsxs)(t.admonition,{type:"info",children:[(0,o.jsxs)(t.p,{children:["The generated private keys are in the standard ",(0,o.jsx)(t.a,{href:"https://github.com/ethereum/EIPs/blob/master/EIPS/eip-2335.md",children:"EIP-2335"})," format, and can be imported in any Ethereum validator client that supports it."]}),(0,o.jsx)(t.p,{children:"Ensure your distributed validator cluster is completely shut down before starting a replacement validator or you are likely to be slashed."})]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>a});var r=n(96540);const o={},s=r.createContext(o);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);