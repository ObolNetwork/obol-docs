"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[68848],{95788:(e,t,r)=>{r.d(t,{Iu:()=>p,yg:()=>y});var n=r(11504);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),h=a,y=d["".concat(s,".").concat(h)]||d[h]||u[h]||o;return r?n.createElement(y,i(i({ref:t},p),{},{components:r})):n.createElement(y,i({ref:t},p))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},30516:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(45072),a=(r(11504),r(95788));const o={sidebar_position:3,description:"Run one node in a multi-operator distributed validator cluster using the CLI"},i="Using the CLI",l={unversionedId:"int/quickstart/group/quickstart-cli",id:"version-v0.18.0/int/quickstart/group/quickstart-cli",title:"Using the CLI",description:"Run one node in a multi-operator distributed validator cluster using the CLI",source:"@site/versioned_docs/version-v0.18.0/int/quickstart/group/quickstart-cli.md",sourceDirName:"int/quickstart/group",slug:"/int/quickstart/group/quickstart-cli",permalink:"/docs/v0.18.0/int/quickstart/group/quickstart-cli",draft:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.18.0/int/quickstart/group/quickstart-cli.md",tags:[],version:"v0.18.0",sidebarPosition:3,frontMatter:{sidebar_position:3,description:"Run one node in a multi-operator distributed validator cluster using the CLI"},sidebar:"tutorialSidebar",previous:{title:"Operator Journey",permalink:"/docs/v0.18.0/int/quickstart/group/quickstart-group-operator"},next:{title:"Activate a DV",permalink:"/docs/v0.18.0/int/quickstart/activate-dv"}},s={},c=[{value:"Pre-requisites",id:"pre-requisites",level:2},{value:"Step 1. Create and back up a private key for charon",id:"step-1-create-and-back-up-a-private-key-for-charon",level:2},{value:"Step 2. Leader or Creator creates the DKG configuration file and distribute it to cluster operators",id:"step-2-leader-or-creator-creates-the-dkg-configuration-file-and-distribute-it-to-cluster-operators",level:2},{value:"Step 3. Run the DKG",id:"step-3-run-the-dkg",level:2},{value:"Step 4. Start your Distributed Validator Node",id:"step-4-start-your-distributed-validator-node",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...r}=e;return(0,a.yg)(d,(0,n.c)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"using-the-cli"},"Using the CLI"),(0,a.yg)("admonition",{type:"caution"},(0,a.yg)("p",{parentName:"admonition"},"Charon is in a beta state and should be used with caution according to its ",(0,a.yg)("a",{parentName:"p",href:"https://obol.tech/terms.pdf"},"Terms of Use"),".")),(0,a.yg)("p",null,"The following instructions aim to assist a group of operators coordinating together to create a distributed validator cluster via the CLI."),(0,a.yg)("h2",{id:"pre-requisites"},"Pre-requisites"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Ensure you have ",(0,a.yg)("a",{parentName:"li",href:"https://docs.docker.com/engine/install/"},"docker")," installed."),(0,a.yg)("li",{parentName:"ul"},"Ensure you have ",(0,a.yg)("a",{parentName:"li",href:"https://git-scm.com/downloads"},"git")," installed. "),(0,a.yg)("li",{parentName:"ul"},"Make sure ",(0,a.yg)("inlineCode",{parentName:"li"},"docker")," is running before executing the commands below."),(0,a.yg)("li",{parentName:"ul"},"Decide who the Leader or Creator of your cluster will be. Only them have to perform ",(0,a.yg)("a",{parentName:"li",href:"#step-2-leader-creates-the-dkg-configuration-file-and-distributes-it-to-everyone-else"},"step 2")," and ",(0,a.yg)("a",{parentName:"li",href:"#step-5-activate-the-deposit-data"},"step 5")," in this quickstart. They do not get any special privilege.",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"In the ",(0,a.yg)("strong",{parentName:"li"},"Leader")," case, the operator creating the cluster will also operate a node in the cluster."),(0,a.yg)("li",{parentName:"ul"},"In the ",(0,a.yg)("strong",{parentName:"li"},"Creator")," case, the cluster is created by an external party to the cluster.")))),(0,a.yg)("h2",{id:"step-1-create-and-back-up-a-private-key-for-charon"},"Step 1. Create and back up a private key for charon"),(0,a.yg)("p",null,"In order to prepare for a distributed key generation ceremony, all operators (including the leader but NOT a creator) need to create an ",(0,a.yg)("a",{parentName:"p",href:"/docs/v0.18.0/int/faq/errors"},"ENR")," for their charon client. This ENR is a public/private key pair, and allows the other charon clients in the DKG to identify and connect to your node."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},'# Clone this repo\ngit clone https://github.com/ObolNetwork/charon-distributed-validator-node.git\n\n# Change directory\ncd charon-distributed-validator-node\n\n# Create your charon ENR private key, this will create a charon-enr-private-key file in the .charon directory\ndocker run --rm -v "$(pwd):/opt/charon" obolnetwork/charon:v0.18.0 create enr\n')),(0,a.yg)("p",null,"You should expect to see a console output like"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"Created ENR private key: .charon/charon-enr-private-key\nenr:-JG4QGQpV4qYe32QFUAbY1UyGNtNcrVMip83cvJRhw1brMslPeyELIz3q6dsZ7GblVaCjL_8FKQhF6Syg-O_kIWztimGAYHY5EvPgmlkgnY0gmlwhH8AAAGJc2VjcDI1NmsxoQKzMe_GFPpSqtnYl-mJr8uZAUtmkqccsAx7ojGmFy-FY4N0Y3CCDhqDdWRwgg4u\n")),(0,a.yg)("admonition",{type:"caution"},(0,a.yg)("p",{parentName:"admonition"},"Please make sure to create a backup of the private key at ",(0,a.yg)("inlineCode",{parentName:"p"},".charon/charon-enr-private-key"),". Be careful not to commit it to git! ",(0,a.yg)("strong",{parentName:"p"},"If you lose this file you won't be able to take part in the DKG ceremony and start the DV cluster successfully."))),(0,a.yg)("p",null,"Finally, share your ENR with the leader or creator so that he/she can proceed to Step 2."),(0,a.yg)("h2",{id:"step-2-leader-or-creator-creates-the-dkg-configuration-file-and-distribute-it-to-cluster-operators"},"Step 2. Leader or Creator creates the DKG configuration file and distribute it to cluster operators"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"The leader or creator of the cluster will prepare the ",(0,a.yg)("inlineCode",{parentName:"p"},"cluster-definition.json")," file for the Distributed Key Generation ceremony using the ",(0,a.yg)("inlineCode",{parentName:"p"},"charon create dkg")," command."),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre"},"# Prepare an environment variable file\ncp .env.create_dkg.sample .env.create_dkg\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Populate the ",(0,a.yg)("inlineCode",{parentName:"p"},".env.create_dkg")," file created with the ",(0,a.yg)("inlineCode",{parentName:"p"},"cluster name"),", the ",(0,a.yg)("inlineCode",{parentName:"p"},"fee recipient")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"withdrawal Ethereum addresses"),", and the ",(0,a.yg)("inlineCode",{parentName:"p"},"ENRs")," of all the operators participating in the cluster."),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"The file generated is hidden by default. To view it, run ",(0,a.yg)("inlineCode",{parentName:"li"},"ls -al")," in your terminal. Else, if you are on ",(0,a.yg)("inlineCode",{parentName:"li"},"macOS"),", press ",(0,a.yg)("inlineCode",{parentName:"li"},"Cmd + Shift + .")," to view all hidden files in the finder application."))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Run the ",(0,a.yg)("inlineCode",{parentName:"p"},"charon create dkg")," command that generates DKG cluster-definition.json file."),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre"},'docker run --rm -v "$(pwd):/opt/charon" --env-file .env.create_dkg obolnetwork/charon:v0.18.0 create dkg\n')),(0,a.yg)("p",{parentName:"li"},"This command should output a file at ",(0,a.yg)("inlineCode",{parentName:"p"},".charon/cluster-definition.json"),". This file needs to be shared with the other operators in a cluster."))),(0,a.yg)("h2",{id:"step-3-run-the-dkg"},"Step 3. Run the DKG"),(0,a.yg)("p",null,"After receiving the ",(0,a.yg)("inlineCode",{parentName:"p"},"cluster-definition.json")," file created by the leader, cluster operators should ideally save it in the ",(0,a.yg)("inlineCode",{parentName:"p"},".charon/")," folder that was created during step 1, alternatively the ",(0,a.yg)("inlineCode",{parentName:"p"},"--definition-file")," flag can override the default expected location for this file."),(0,a.yg)("p",null,"Every cluster member then participates in the DKG ceremony. For Charon v1, this needs to happen relatively synchronously between participants at an agreed time."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'# Participate in DKG ceremony, this will create .charon/cluster-lock.json, .charon/deposit-data.json and .charon/validator_keys\ndocker run --rm -v "$(pwd):/opt/charon" obolnetwork/charon:v0.18.0 dkg\n')),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"This is a helpful ",(0,a.yg)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=94Pkovp5zoQ&ab_channel=ObolNetwork"},"video walkthrough"),".")),(0,a.yg)("p",null,"Assuming the DKG is successful, a number of artefacts will be created in the ",(0,a.yg)("inlineCode",{parentName:"p"},".charon")," folder. These include:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"A ",(0,a.yg)("inlineCode",{parentName:"li"},"deposit-data.json")," file. This contains the information needed to activate the validator on the Ethereum network."),(0,a.yg)("li",{parentName:"ul"},"A ",(0,a.yg)("inlineCode",{parentName:"li"},"cluster-lock.json")," file. This contains the information needed by charon to operate the distributed validator cluster with its peers."),(0,a.yg)("li",{parentName:"ul"},"A ",(0,a.yg)("inlineCode",{parentName:"li"},"validator_keys/")," folder. This folder contains the private key shares and passwords for the created distributed validators.")),(0,a.yg)("admonition",{type:"caution"},(0,a.yg)("p",{parentName:"admonition"},"Please make sure to create a backup of ",(0,a.yg)("inlineCode",{parentName:"p"},".charon/validator_keys"),". ",(0,a.yg)("strong",{parentName:"p"},"If you lose your keys you won't be able to start the DV cluster successfully."))),(0,a.yg)("admonition",{type:"info"},(0,a.yg)("p",{parentName:"admonition"},"The ",(0,a.yg)("inlineCode",{parentName:"p"},"cluster-lock")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"deposit-data")," files are identical for each operator and can be copied if lost.")),(0,a.yg)("h2",{id:"step-4-start-your-distributed-validator-node"},"Step 4. Start your Distributed Validator Node"),(0,a.yg)("p",null,"With the DKG ceremony over, the last phase before activation is to prepare your node for validating over the long term. This repo is configured to sync an execution layer client (",(0,a.yg)("inlineCode",{parentName:"p"},"geth"),") and a consensus layer client (",(0,a.yg)("inlineCode",{parentName:"p"},"lighthouse"),")."),(0,a.yg)("p",null,"Before completing these instructions, you should assign a static local IP address to your device (extending the DHCP reservation indefinitely or removing the device from the DCHP pool entirely if you prefer), and port forward the TCP protocol on the public port ",(0,a.yg)("inlineCode",{parentName:"p"},":3610")," on your router to your device's local IP address on the same port. This step is different for every person's home internet, and can be complicated by the presence of dynamic public IP addresses. We are currently working on making this as easy as possible, but for the time being, a distributed validator cluster isn't going to work very resiliently if all charon nodes cannot talk directly to one another and instead need to have an intermediary node forwarding traffic to them."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Caution"),": If you manually update ",(0,a.yg)("inlineCode",{parentName:"p"},"docker-compose")," to mount ",(0,a.yg)("inlineCode",{parentName:"p"},"lighthouse")," from your locally synced ",(0,a.yg)("inlineCode",{parentName:"p"},"~/.lighthouse"),", the whole chain database may get deleted. It'd be best not to manually update as ",(0,a.yg)("inlineCode",{parentName:"p"},"lighthouse")," checkpoint-syncs so the syncing doesn't take much time."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Note"),": If you have a ",(0,a.yg)("inlineCode",{parentName:"p"},"geth")," node already synced, you can simply copy over the directory. For ex: ",(0,a.yg)("inlineCode",{parentName:"p"},"cp -r ~/.ethereum/goerli data/geth"),". This makes everything faster since you start from a synced geth node."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"# Delete lighthouse data if it exists\nrm -r ./data/lighthouse\n\n# Spin up a Distributed Validator Node with a Validator Client\ndocker compose up\n\n# Open Grafana dashboard\nopen http://localhost:3000/d/singlenode/\n")),(0,a.yg)("p",null,"You should use the grafana dashboard to infer whether your cluster is healthy. In particular you should check:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"That your charon client can connect to the configured beacon client."),(0,a.yg)("li",{parentName:"ul"},"That your charon client can connect to all peers.")),(0,a.yg)("p",null,"Most components in the dashboard have some help text there to assist you in understanding your cluster performance."),(0,a.yg)("p",null,"You might notice that there are logs indicating that a validator cannot be found and that APIs are returning 404. This is to be expected at this point, as the validator public keys listed in the lock file have not been deposited and acknowledged on the consensus layer yet (usually ~16 hours after the deposit is made)."),(0,a.yg)("p",null,"If at any point you need to turn off your node, you can run:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"# Shut down the currently running distributed validator node\ndocker compose down\n")))}u.isMDXComponent=!0}}]);