"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[62652],{95788:(e,t,n)=>{n.d(t,{Iu:()=>l,yg:()=>k});var r=n(11504);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},y="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),y=d(n),u=o,k=y["".concat(c,".").concat(u)]||y[u]||p[u]||a;return n?r.createElement(k,i(i({ref:t},l),{},{components:n})):r.createElement(k,i({ref:t},l))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[y]="string"==typeof e?e:o,i[1]=s;for(var d=2;d<a;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},38844:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var r=n(45072),o=(n(11504),n(95788));const a={sidebar_position:9,description:"Combine distributed validator private key shares to recover the validator private key."},i="Combine DV private key shares",s={unversionedId:"int/quickstart/advanced/quickstart-combine",id:"version-v0.17.0/int/quickstart/advanced/quickstart-combine",title:"Combine DV private key shares",description:"Combine distributed validator private key shares to recover the validator private key.",source:"@site/versioned_docs/version-v0.17.0/int/quickstart/advanced/quickstart-combine.md",sourceDirName:"int/quickstart/advanced",slug:"/int/quickstart/advanced/quickstart-combine",permalink:"/docs/v0.17.0/int/quickstart/advanced/quickstart-combine",draft:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.17.0/int/quickstart/advanced/quickstart-combine.md",tags:[],version:"v0.17.0",sidebarPosition:9,frontMatter:{sidebar_position:9,description:"Combine distributed validator private key shares to recover the validator private key."},sidebar:"tutorialSidebar",previous:{title:"Advanced Docker Configs",permalink:"/docs/v0.17.0/int/quickstart/advanced/adv-docker-configs"},next:{title:"Frequently asked questions",permalink:"/docs/v0.17.0/int/faq/general"}},c={},d=[{value:"Pre-requisites",id:"pre-requisites",level:2},{value:"Step 1. Set up the key combination directory tree",id:"step-1-set-up-the-key-combination-directory-tree",level:2},{value:"Step 2. Combine the key shares",id:"step-2-combine-the-key-shares",level:2}],l={toc:d},y="wrapper";function p(e){let{components:t,...n}=e;return(0,o.yg)(y,(0,r.c)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"combine-dv-private-key-shares"},"Combine DV private key shares"),(0,o.yg)("admonition",{type:"warning"},(0,o.yg)("p",{parentName:"admonition"},"Reconstituting Distributed Validator private key shares into a standard validator private key is a security risk, and can potentially cause your validator to be slashed."),(0,o.yg)("p",{parentName:"admonition"},"Only combine private keys as a last resort and do so with extreme caution.")),(0,o.yg)("p",null,"Combine distributed validator private key shares into an Ethereum validator private key."),(0,o.yg)("h2",{id:"pre-requisites"},"Pre-requisites"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Ensure you have the ",(0,o.yg)("inlineCode",{parentName:"li"},".charon")," directories of at least a threshold of the cluster's node operators."),(0,o.yg)("li",{parentName:"ul"},"Ensure you have ",(0,o.yg)("a",{parentName:"li",href:"https://docs.docker.com/engine/install/"},"docker")," installed."),(0,o.yg)("li",{parentName:"ul"},"Make sure ",(0,o.yg)("inlineCode",{parentName:"li"},"docker")," is running before executing the commands below.")),(0,o.yg)("h2",{id:"step-1-set-up-the-key-combination-directory-tree"},"Step 1. Set up the key combination directory tree"),(0,o.yg)("p",null,"Rename each cluster node operator ",(0,o.yg)("inlineCode",{parentName:"p"},".charon")," directory in a different way to avoid folder name conflicts."),(0,o.yg)("p",null,"We suggest naming them clearly and distinctly, to avoid confusion."),(0,o.yg)("p",null,"At the end of this process, you should have a tree like this:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"$ tree ./validators-to-be-combined\n\nvalidators-to-be-combined/\n\u251c\u2500\u2500 node0\n\u2502\xa0\xa0 \u251c\u2500\u2500 charon-enr-private-key\n\u2502\xa0\xa0 \u251c\u2500\u2500 cluster-lock.json\n\u2502\xa0\xa0 \u251c\u2500\u2500 deposit-data.json\n\u2502\xa0\xa0 \u2514\u2500\u2500 validator_keys\n\u2502\xa0\xa0     \u251c\u2500\u2500 keystore-0.json\n\u2502\xa0\xa0     \u251c\u2500\u2500 keystore-0.txt\n\u2502\xa0\xa0     \u251c\u2500\u2500 keystore-1.json\n\u2502\xa0\xa0     \u2514\u2500\u2500 keystore-1.txt\n\u251c\u2500\u2500 node1\n\u2502\xa0\xa0 \u251c\u2500\u2500 charon-enr-private-key\n\u2502\xa0\xa0 \u251c\u2500\u2500 cluster-lock.json\n\u2502\xa0\xa0 \u251c\u2500\u2500 deposit-data.json\n\u2502\xa0\xa0 \u2514\u2500\u2500 validator_keys\n\u2502\xa0\xa0     \u251c\u2500\u2500 keystore-0.json\n\u2502\xa0\xa0     \u251c\u2500\u2500 keystore-0.txt\n\u2502\xa0\xa0     \u251c\u2500\u2500 keystore-1.json\n\u2502\xa0\xa0     \u2514\u2500\u2500 keystore-1.txt\n\u251c\u2500\u2500 node2\n\u2502\xa0\xa0 \u251c\u2500\u2500 charon-enr-private-key\n\u2502\xa0\xa0 \u251c\u2500\u2500 cluster-lock.json\n\u2502\xa0\xa0 \u251c\u2500\u2500 deposit-data.json\n\u2502\xa0\xa0 \u2514\u2500\u2500 validator_keys\n\u2502\xa0\xa0     \u251c\u2500\u2500 keystore-0.json\n\u2502\xa0\xa0     \u251c\u2500\u2500 keystore-0.txt\n\u2502\xa0\xa0     \u251c\u2500\u2500 keystore-1.json\n\u2502\xa0\xa0     \u2514\u2500\u2500 keystore-1.txt\n...\n\u2514\u2500\u2500 node*\n    \u251c\u2500\u2500 charon-enr-private-key\n    \u251c\u2500\u2500 cluster-lock.json\n    \u251c\u2500\u2500 deposit-data.json\n    \u2514\u2500\u2500 validator_keys\n        \u251c\u2500\u2500 keystore-0.json\n        \u251c\u2500\u2500 keystore-0.txt\n        \u251c\u2500\u2500 keystore-1.json\n        \u2514\u2500\u2500 keystore-1.txt\n")),(0,o.yg)("admonition",{type:"caution"},(0,o.yg)("p",{parentName:"admonition"},"Make sure to never mix the various ",(0,o.yg)("inlineCode",{parentName:"p"},".charon")," directories with one another."),(0,o.yg)("p",{parentName:"admonition"},"Doing so can potentially cause the combination process to fail.")),(0,o.yg)("h2",{id:"step-2-combine-the-key-shares"},"Step 2. Combine the key shares"),(0,o.yg)("p",null,"Run the following command:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sh"},'# Combine a clusters private keys\ndocker run --rm -v "$(pwd):/opt/charon" obolnetwork/charon:v0.17.0 combine --cluster-dir /opt/charon/validators-to-be-combined\n')),(0,o.yg)("p",null,"This command will create one subdirectory for each validator private key that has been combined, named after its public key."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"$ tree ./validators-to-be-combined\n\nvalidators-to-be-combined/\n\u251c\u2500\u2500 0x822c5310674f4fc4ec595642d0eab73d01c62b588f467da6f98564f292a975a0ac4c3a10f1b3a00ccc166a28093c2dcd\n\u2502\xa0\xa0 \u2514\u2500\u2500 validator_keys\n\u2502\xa0\xa0     \u251c\u2500\u2500 keystore-0.json\n\u2502\xa0\xa0     \u2514\u2500\u2500 keystore-0.txt\n\u251c\u2500\u2500 0x8929b4c8af2d2eb222d377cac2aa7be950e71d2b247507d19b5fdec838f0fb045ea8910075f191fd468da4be29690106\n\u2502\xa0\xa0 \u2514\u2500\u2500 validator_keys\n\u2502\xa0\xa0     \u251c\u2500\u2500 keystore-0.json\n\u2502\xa0\xa0     \u2514\u2500\u2500 keystore-0.txt\n\u251c\u2500\u2500 node0\n\u2502\xa0\xa0 \u251c\u2500\u2500 charon-enr-private-key\n\u2502\xa0\xa0 \u251c\u2500\u2500 cluster-lock.json\n\u2502\xa0\xa0 \u251c\u2500\u2500 deposit-data.json\n\u2502\xa0\xa0 \u2514\u2500\u2500 validator_keys\n\u2502\xa0\xa0     \u251c\u2500\u2500 keystore-0.json\n\u2502\xa0\xa0     \u251c\u2500\u2500 keystore-0.txt\n\u2502\xa0\xa0     \u251c\u2500\u2500 keystore-1.json\n\u2502\xa0\xa0     \u2514\u2500\u2500 keystore-1.txt\n\u251c\u2500\u2500 node1\n\u2502\xa0\xa0 \u251c\u2500\u2500 charon-enr-private-key\n\u2502\xa0\xa0 \u251c\u2500\u2500 cluster-lock.json\n\u2502\xa0\xa0 \u251c\u2500\u2500 deposit-data.json\n\u2502\xa0\xa0 \u2514\u2500\u2500 validator_keys\n\u2502\xa0\xa0     \u251c\u2500\u2500 keystore-0.json\n\u2502\xa0\xa0     \u251c\u2500\u2500 keystore-0.txt\n\u2502\xa0\xa0     \u251c\u2500\u2500 keystore-1.json\n\u2502\xa0\xa0     \u2514\u2500\u2500 keystore-1.txt\n\u251c\u2500\u2500 node2\n\u2502\xa0\xa0 \u251c\u2500\u2500 charon-enr-private-key\n\u2502\xa0\xa0 \u251c\u2500\u2500 cluster-lock.json\n\u2502\xa0\xa0 \u251c\u2500\u2500 deposit-data.json\n\u2502\xa0\xa0 \u2514\u2500\u2500 validator_keys\n\u2502\xa0\xa0     \u251c\u2500\u2500 keystore-0.json\n\u2502\xa0\xa0     \u251c\u2500\u2500 keystore-0.txt\n\u2502\xa0\xa0     \u251c\u2500\u2500 keystore-1.json\n\u2502\xa0\xa0     \u2514\u2500\u2500 keystore-1.txt\n\u2514\u2500\u2500 node3\n    \u251c\u2500\u2500 charon-enr-private-key\n    \u251c\u2500\u2500 cluster-lock.json\n    \u251c\u2500\u2500 deposit-data.json\n    \u2514\u2500\u2500 validator_keys\n        \u251c\u2500\u2500 keystore-0.json\n        \u251c\u2500\u2500 keystore-0.txt\n        \u251c\u2500\u2500 keystore-1.json\n        \u2514\u2500\u2500 keystore-1.txt\n")),(0,o.yg)("p",null,"We can verify that the directory names are correct by looking at the lock file:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},'$ jq .distributed_validators[].distributed_public_key  validators-to-be-combined/node0/cluster-lock.json\n"0x822c5310674f4fc4ec595642d0eab73d01c62b588f467da6f98564f292a975a0ac4c3a10f1b3a00ccc166a28093c2dcd"\n"0x8929b4c8af2d2eb222d377cac2aa7be950e71d2b247507d19b5fdec838f0fb045ea8910075f191fd468da4be29690106"\n')),(0,o.yg)("admonition",{type:"info"},(0,o.yg)("p",{parentName:"admonition"},"The generated private keys are in the standard ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/ethereum/EIPs/blob/master/EIPS/eip-2335.md"},"EIP-2335")," format, and can be imported in any Ethereum validator client that supports it. "),(0,o.yg)("p",{parentName:"admonition"},"Ensure your distributed validator cluster is completely shut down before starting a replacement validator or you are likely to be slashed.")))}p.isMDXComponent=!0}}]);