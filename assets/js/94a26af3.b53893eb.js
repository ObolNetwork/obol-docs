"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[97839],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>y});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(n),m=a,y=p["".concat(s,".").concat(m)]||p[m]||u[m]||i;return n?r.createElement(y,o(o({ref:t},c),{},{components:n})):r.createElement(y,o({ref:t},c))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},69950:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=n(58168),a=(n(96540),n(15680));const i={sidebar_position:7,description:"Run a cluster on mainnet"},o="Run a DV on mainnet",l={unversionedId:"int/quickstart/quickstart-mainnet",id:"version-v0.18.0/int/quickstart/quickstart-mainnet",title:"Run a DV on mainnet",description:"Run a cluster on mainnet",source:"@site/versioned_docs/version-v0.18.0/int/quickstart/quickstart-mainnet.md",sourceDirName:"int/quickstart",slug:"/int/quickstart/quickstart-mainnet",permalink:"/docs/v0.18.0/int/quickstart/quickstart-mainnet",draft:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.18.0/int/quickstart/quickstart-mainnet.md",tags:[],version:"v0.18.0",sidebarPosition:7,frontMatter:{sidebar_position:7,description:"Run a cluster on mainnet"},sidebar:"tutorialSidebar",previous:{title:"Exit a DV",permalink:"/docs/v0.18.0/int/quickstart/quickstart-exit"},next:{title:"Create a DV using the SDK",permalink:"/docs/v0.18.0/int/quickstart/advanced/quickstart-sdk"}},s={},d=[{value:"Pre-requisites",id:"pre-requisites",level:2},{value:"Steps",id:"steps",level:2},{value:"Using charon-distributed-validator-node in full",id:"using-charon-distributed-validator-node-in-full",level:3},{value:"Using a remote mainnet beacon node",id:"using-a-remote-mainnet-beacon-node",level:3},{value:"Exit a mainnet Distributed Validator",id:"exit-a-mainnet-distributed-validator",level:3}],c={toc:d},p="wrapper";function u(e){let{components:t,...n}=e;return(0,a.yg)(p,(0,r.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"run-a-dv-on-mainnet"},"Run a DV on mainnet"),(0,a.yg)("admonition",{type:"warning"},(0,a.yg)("p",{parentName:"admonition"},"Charon is in a beta state, and ",(0,a.yg)("strong",{parentName:"p"},"you should proceed only if you accept the risk, the ",(0,a.yg)("a",{parentName:"strong",href:"https://obol.tech/terms.pdf"},"terms of use"),", and have tested running a Distributed Validator on a testnet first"),"."),(0,a.yg)("p",{parentName:"admonition"},"Distributed Validators created for goerli cannot be used on mainnet and vice versa, please take caution when creating, backing up, and activating mainnet validators. Incorrect usage may result in a loss of funds.")),(0,a.yg)("p",null,"This section is intended for users who wish to run their Distributed Validator on Ethereum mainnet."),(0,a.yg)("h2",{id:"pre-requisites"},"Pre-requisites"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"You have ",(0,a.yg)("a",{parentName:"li",href:"/docs/v0.18.0/int/key-concepts#distributed-validator-threshold"},"enough up-to-spec nodes")," for your mainnet deployment."),(0,a.yg)("li",{parentName:"ul"},"Ensure you have ",(0,a.yg)("a",{parentName:"li",href:"https://docs.docker.com/engine/install/"},"docker")," installed on each node."),(0,a.yg)("li",{parentName:"ul"},"Ensure you have ",(0,a.yg)("a",{parentName:"li",href:"https://git-scm.com/downloads"},"git")," installed on each node."),(0,a.yg)("li",{parentName:"ul"},"Make sure ",(0,a.yg)("inlineCode",{parentName:"li"},"docker")," is running before executing the commands below.")),(0,a.yg)("h2",{id:"steps"},"Steps"),(0,a.yg)("h3",{id:"using-charon-distributed-validator-node-in-full"},"Using charon-distributed-validator-node in full"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Clone the ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/ObolNetwork/charon-distributed-validator-node"},"charon-distributed-validator-node")," repo and ",(0,a.yg)("inlineCode",{parentName:"li"},"cd")," into the directory.")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"# Clone this repo\ngit clone https://github.com/ObolNetwork/charon-distributed-validator-node.git\n\n# Change directory\ncd charon-distributed-validator-node\n")),(0,a.yg)("ol",{start:2},(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"If you have already cloned the repo previously, make sure that it is ",(0,a.yg)("a",{parentName:"p",href:"./update"},"up-to-date"),".")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Copy the ",(0,a.yg)("inlineCode",{parentName:"p"},".env.sample.mainnet")," file to ",(0,a.yg)("inlineCode",{parentName:"p"},".env")))),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"cp -n .env.sample.mainnet .env\n")),(0,a.yg)("ol",{start:4},(0,a.yg)("li",{parentName:"ol"},"Run the docker compose file")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"docker compose up -d\n")),(0,a.yg)("p",null,"Once your clients can connect and sync appropriately, your DV stack is now mainnet ready \ud83c\udf89"),(0,a.yg)("h3",{id:"using-a-remote-mainnet-beacon-node"},"Using a remote mainnet beacon node"),(0,a.yg)("admonition",{type:"caution"},(0,a.yg)("p",{parentName:"admonition"},"Using a remote beacon node will impact the performance of your Distributed Validator and should be used sparingly.")),(0,a.yg)("p",null,"If you already have a mainnet beacon node running somewhere and you want to use that instead of running EL (",(0,a.yg)("inlineCode",{parentName:"p"},"geth"),") & CL (",(0,a.yg)("inlineCode",{parentName:"p"},"lighthouse"),") as part of the repo, you can disable these images. To do so, follow these steps:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Copy the ",(0,a.yg)("inlineCode",{parentName:"li"},"docker-compose.override.yml.sample")," file")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"cp -n docker-compose.override.yml.sample docker-compose.override.yml\n")),(0,a.yg)("ol",{start:2},(0,a.yg)("li",{parentName:"ol"},"Uncomment the ",(0,a.yg)("inlineCode",{parentName:"li"},"profiles: [disable]")," section for both ",(0,a.yg)("inlineCode",{parentName:"li"},"geth")," and ",(0,a.yg)("inlineCode",{parentName:"li"},"lighthouse"),". The override file should now look like this")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"services:\n  geth:\n    # Disable geth\n    profiles: [disable]\n    # Bind geth internal ports to host ports\n    #ports:\n      #- 8545:8545 # JSON-RPC\n      #- 8551:8551 # AUTH-RPC\n      #- 6060:6060 # Metrics\n\n  lighthouse:\n    # Disable lighthouse\n    profiles: [disable]\n    # Bind lighthouse internal ports to host ports\n    #ports:\n      #- 5052:5052 # HTTP\n      #- 5054:5054 # Metrics\n...\n")),(0,a.yg)("ol",{start:3},(0,a.yg)("li",{parentName:"ol"},"Then, uncomment and set the ",(0,a.yg)("inlineCode",{parentName:"li"},"CHARON_BEACON_NODE_ENDPOINTS")," variable in the ",(0,a.yg)("inlineCode",{parentName:"li"},".env")," file to your mainnet beacon node's URL")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"...\n# Connect to one or more external beacon nodes. Use a comma separated list excluding spaces.\nCHARON_BEACON_NODE_ENDPOINTS=<YOUR_REMOTE_MAINNET_BEACON_NODE_URL>\n...\n")),(0,a.yg)("ol",{start:4},(0,a.yg)("li",{parentName:"ol"},"Restart your docker compose")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"docker compose down\ndocker compose up -d\n")),(0,a.yg)("h3",{id:"exit-a-mainnet-distributed-validator"},"Exit a mainnet Distributed Validator"),(0,a.yg)("p",null,"If you want to exit your mainnet validator, refer to our ",(0,a.yg)("a",{parentName:"p",href:"/docs/v0.18.0/int/quickstart/quickstart-exit"},"exit guide"),"."))}u.isMDXComponent=!0}}]);