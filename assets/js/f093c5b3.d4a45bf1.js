"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[5814],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return h}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(a),h=r,m=p["".concat(s,".").concat(h)]||p[h]||c[h]||i;return a?n.createElement(m,o(o({ref:t},d),{},{components:a})):n.createElement(m,o({ref:t},d))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},86437:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var n=a(83117),r=a(80102),i=(a(67294),a(3905)),o=["components"],l={sidebar_position:2,description:"Run all nodes in a distributed validator cluster"},s="Run a cluster alone",u={unversionedId:"int/quickstart/quickstart-alone",id:"version-v0.13.0/int/quickstart/quickstart-alone",title:"Run a cluster alone",description:"Run all nodes in a distributed validator cluster",source:"@site/versioned_docs/version-v0.13.0/int/quickstart/quickstart-alone.md",sourceDirName:"int/quickstart",slug:"/int/quickstart/quickstart-alone",permalink:"/docs/int/quickstart/quickstart-alone",draft:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.13.0/int/quickstart/quickstart-alone.md",tags:[],version:"v0.13.0",sidebarPosition:2,frontMatter:{sidebar_position:2,description:"Run all nodes in a distributed validator cluster"},sidebar:"tutorialSidebar",previous:{title:"Operator Journey",permalink:"/docs/int/quickstart/group/quickstart-group-operator"},next:{title:"Run a cluster with MEV-Boost",permalink:"/docs/int/quickstart/quickstart-builder-api"}},d={},c=[{value:"Pre-requisites",id:"pre-requisites",level:2},{value:"Step 1. Download the components and set up the environment",id:"step-1-download-the-components-and-set-up-the-environment",level:2},{value:"Step 2. Create the artifacts needed to run a DV cluster",id:"step-2-create-the-artifacts-needed-to-run-a-dv-cluster",level:2},{value:"Distributed Validator Cluster",id:"distributed-validator-cluster",level:3},{value:"Step 3. Start the cluster",id:"step-3-start-the-cluster",level:2},{value:"Step 4. Activate the validator",id:"step-4-activate-the-validator",level:2},{value:"Step 5. Validator Voluntary Exit",id:"step-5-validator-voluntary-exit",level:2},{value:"Feedback",id:"feedback",level:2}],p={toc:c};function h(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"run-a-cluster-alone"},"Run a cluster alone"),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Charon is in an early alpha state and is not ready to be run on mainnet")),(0,i.kt)("h2",{id:"pre-requisites"},"Pre-requisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Ensure you have ",(0,i.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/install/"},"docker")," installed."),(0,i.kt)("li",{parentName:"ul"},"Ensure you have ",(0,i.kt)("a",{parentName:"li",href:"https://git-scm.com/downloads"},"git")," installed. "),(0,i.kt)("li",{parentName:"ul"},"Make sure ",(0,i.kt)("inlineCode",{parentName:"li"},"docker")," is running before executing the commands below.")),(0,i.kt)("h2",{id:"step-1-download-the-components-and-set-up-the-environment"},"Step 1. Download the components and set up the environment"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Clone the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ObolNetwork/charon-distributed-validator-cluster"},"charon-distributed-validator-cluster")," repo and ",(0,i.kt)("inlineCode",{parentName:"p"},"cd")," into the directory."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"# Clone the repo\ngit clone https://github.com/ObolNetwork/charon-distributed-validator-cluster.git\n\n# Change directory\ncd charon-distributed-validator-cluster/\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Prepare the environment variables"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"# Copy the sample environment variables\ncp .env.sample .env\n")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},".env.sample")," is a sample environment file that allows overriding default configuration defined in ",(0,i.kt)("inlineCode",{parentName:"p"},"docker-compose.yml"),". Uncomment and set any variable to override its value."))),(0,i.kt)("h2",{id:"step-2-create-the-artifacts-needed-to-run-a-dv-cluster"},"Step 2. Create the artifacts needed to run a DV cluster"),(0,i.kt)("p",null,"Run the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'# Create a testnet distributed validator cluster\ndocker run --rm -v "$(pwd):/opt/charon" obolnetwork/charon:v0.13.0 create cluster --withdrawal-address="0x000000000000000000000000000000000000dead" --nodes 6 --threshold 5\n')),(0,i.kt)("p",null,"This command will create a subdirectory ",(0,i.kt)("inlineCode",{parentName:"p"},".charon/cluster"),". In it are six folders, one for each charon node created. Each folder contains partial private keys that together make up the distributed validator described in ",(0,i.kt)("inlineCode",{parentName:"p"},".charon/cluster/cluster-lock.json"),"."),(0,i.kt)("h3",{id:"distributed-validator-cluster"},"Distributed Validator Cluster"),(0,i.kt)("p",null,"The default cluster consists of:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/NethermindEth/nethermind"},"Nethermind"),", an execution layer client"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/sigp/lighthouse"},"Lighthouse"),", a consensus layer client"),(0,i.kt)("li",{parentName:"ul"},"Six ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/ObolNetwork/charon"},"charon")," nodes"),(0,i.kt)("li",{parentName:"ul"},"Mixture of validator clients:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"vc0: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/sigp/lighthouse"},"Lighthouse")),(0,i.kt)("li",{parentName:"ul"},"vc1: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/ConsenSys/teku"},"Teku")),(0,i.kt)("li",{parentName:"ul"},"vc2: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/attestantio/vouch"},"Vouch")),(0,i.kt)("li",{parentName:"ul"},"vc3: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/sigp/lighthouse"},"Lighthouse")),(0,i.kt)("li",{parentName:"ul"},"vc4: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/ConsenSys/teku"},"Teku")),(0,i.kt)("li",{parentName:"ul"},"vc5: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/attestantio/vouch"},"Vouch"))))),(0,i.kt)("p",null,"The intention is to support all validator clients. Read more about our client support ",(0,i.kt)("a",{parentName:"p",href:"https://dvt.obol.tech"},"here"),"."),(0,i.kt)("h2",{id:"step-3-start-the-cluster"},"Step 3. Start the cluster"),(0,i.kt)("p",null,"Run this command to start your cluster containers"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"# Start the distributed validator cluster\ndocker-compose up --build\n")),(0,i.kt)("p",null,"Check the monitoring dashboard and see if things look all right"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"# Open Grafana\nopen http://localhost:3000/d/laEp8vupp\n")),(0,i.kt)("h2",{id:"step-4-activate-the-validator"},"Step 4. Activate the validator"),(0,i.kt)("p",null,"If all the above went correctly, it's natural to see logs like:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'INFO sched      No active DVs for slot {"slot": 3288627}')),(0,i.kt)("p",null,"This is because you need to activate your freshly created distributed validator on the testnet with the ",(0,i.kt)("a",{parentName:"p",href:"https://goerli.launchpad.ethereum.org/en/"},"existing launchpad"),". The validator deposit data should be in ",(0,i.kt)("inlineCode",{parentName:"p"},".charon/cluster/deposit-data.json"),"."),(0,i.kt)("p",null,"This process can take a minimum of 16 hours, with the maximum time to activation being dictated by the length of the activation queue, which can be weeks. You can leave your distributed validator cluster offline until closer to the activation period if you would prefer. You can also use this time to improve and harden your monitoring and alerting for the cluster."),(0,i.kt)("h2",{id:"step-5-validator-voluntary-exit"},"Step 5. Validator Voluntary Exit"),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"This step only needs to be taken when you decide to exit your DV cluster. ")),(0,i.kt)("p",null,"A voluntary exit is when a validator chooses to stop performing its duties, and exits the beacon chain permanently. To voluntarily exit, the validator must continue performing its validator duties until successfully exited to avoid penalties."),(0,i.kt)("p",null,"To trigger a voluntary exit, a sidecar ",(0,i.kt)("inlineCode",{parentName:"p"},"docker-compose")," command is executed that signs and submits the voluntary exit to the active running charon node that shares it with other nodes in the cluster. The commands below should be executed in the terminal on the same machine and same folder as the active running ",(0,i.kt)("inlineCode",{parentName:"p"},"charon-distribute-validator-node")," docker compose."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"A threshold of nodes in the cluster need to perform this task to exit a validator.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Create a new ",(0,i.kt)("inlineCode",{parentName:"li"},"exit_keys")," folder next to ",(0,i.kt)("inlineCode",{parentName:"li"},".charon/validator_keys"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"mkdir .charon/exit_keys")),(0,i.kt)("li",{parentName:"ul"},"Copy the validator keys and passwords that you want to exit from the ",(0,i.kt)("inlineCode",{parentName:"li"},"validator_keys")," folder to the ",(0,i.kt)("inlineCode",{parentName:"li"},"exit_keys")," folder.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"E.g. to exit validator #4: ",(0,i.kt)("inlineCode",{parentName:"li"},"cp .charon/validator_keys/keystore/keystore-4* .charon/exit_keys/")),(0,i.kt)("li",{parentName:"ul"},"Warning: all keys copied to the ",(0,i.kt)("inlineCode",{parentName:"li"},"exit_keys")," folder will be exited, so be careful!"))),(0,i.kt)("li",{parentName:"ul"},"Ensure the external network in ",(0,i.kt)("inlineCode",{parentName:"li"},"compose-volutary-exit.yml")," is correct.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Confirm the name of the exiting ",(0,i.kt)("inlineCode",{parentName:"li"},"charon-distributed-validator-node")," docker network: ",(0,i.kt)("inlineCode",{parentName:"li"},"docker network ls"),"."),(0,i.kt)("li",{parentName:"ul"},"If it isn't ",(0,i.kt)("inlineCode",{parentName:"li"},"charon-distributed-validator-node-dvnode"),", then update ",(0,i.kt)("inlineCode",{parentName:"li"},"compose-volutary-exit.yml")," accordingly."))),(0,i.kt)("li",{parentName:"ul"},"Ensure the latest fork version epoch is used:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Voluntary exists require an epoch after which they take effect."),(0,i.kt)("li",{parentName:"ul"},"All VCs need to sign and submit the exact same messages (epoch) in DVT."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--epoch=1")," would be ideal, since all chains have that epoch in the past, so the validator should exit immediately."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"compose-volutary-exit.yml")," is configured with ",(0,i.kt)("inlineCode",{parentName:"li"},"--epoch=112260")," which is the latest Bellatrix fork on Prater."),(0,i.kt)("li",{parentName:"ul"},"If the Charon cluster is running on a different chain, ",(0,i.kt)("strong",{parentName:"li"},"ALL")," operators must update ",(0,i.kt)("inlineCode",{parentName:"li"},"--epoch")," to the same latest fork version returned by ",(0,i.kt)("inlineCode",{parentName:"li"},"curl $BEACON_NODE/eth/v1/config/fork_schedule"),"."))),(0,i.kt)("li",{parentName:"ul"},"Run the command to submit this node's partially signed voluntary exit:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"docker-compose -f compose-voluntary-exit.yml up")),(0,i.kt)("li",{parentName:"ul"},"Confirm the logs: ",(0,i.kt)("inlineCode",{parentName:"li"},"Exit for validator XXXXX submitted")),(0,i.kt)("li",{parentName:"ul"},"Exit the container: ",(0,i.kt)("inlineCode",{parentName:"li"},"Ctrl-C")))),(0,i.kt)("li",{parentName:"ul"},"The charon metric ",(0,i.kt)("inlineCode",{parentName:"li"},"core_parsigdb_exit_total")," will be incremented each time a voluntary exit partial signature is received, either from this node or from peers.")),(0,i.kt)("h2",{id:"feedback"},"Feedback"),(0,i.kt)("p",null,"If you have gotten this far through the process, and whether you succeeded or failed at running the distributed validator successfully, we would like to hear your feedback on the process and where you encountered difficulties. Please let us know by joining and posting on our ",(0,i.kt)("a",{parentName:"p",href:"https://discord.gg/n6ebKsX46w"},"Discord"),". Also, feel free to add issues to our ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ObolNetwork"},"GitHub repos"),"."))}h.isMDXComponent=!0}}]);