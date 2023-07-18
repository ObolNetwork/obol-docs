"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[84749],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(a),h=r,k=p["".concat(l,".").concat(h)]||p[h]||u[h]||o;return a?n.createElement(k,i(i({ref:t},d),{},{components:a})):n.createElement(k,i({ref:t},d))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},66962:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const o={sidebar_position:1,description:"Create a DV cluster using the Obol Typescript SDK"},i="Create a DV using the SDK",s={unversionedId:"int/quickstart/advanced/quickstart-sdk",id:"int/quickstart/advanced/quickstart-sdk",title:"Create a DV using the SDK",description:"Create a DV cluster using the Obol Typescript SDK",source:"@site/docs/int/quickstart/advanced/quickstart-sdk.md",sourceDirName:"int/quickstart/advanced",slug:"/int/quickstart/advanced/quickstart-sdk",permalink:"/docs/next/int/quickstart/advanced/quickstart-sdk",draft:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/docs/int/quickstart/advanced/quickstart-sdk.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"Create a DV cluster using the Obol Typescript SDK"},sidebar:"tutorialSidebar",previous:{title:"Run a DV on mainnet",permalink:"/docs/next/int/quickstart/quickstart-mainnet"},next:{title:"Run a cluster with MEV-Boost",permalink:"/docs/next/int/quickstart/advanced/quickstart-builder-api"}},l={},c=[{value:"Pre-requisites",id:"pre-requisites",level:2},{value:"Install the package",id:"install-the-package",level:2},{value:"Instantiate the client",id:"instantiate-the-client",level:2},{value:"Propose the cluster",id:"propose-the-cluster",level:2},{value:"Invite the Operators to complete the DKG",id:"invite-the-operators-to-complete-the-dkg",level:2},{value:"Retrieve the created Distributed Validators using the SDK",id:"retrieve-the-created-distributed-validators-using-the-sdk",level:2},{value:"Activate the DVs using the deposit contract",id:"activate-the-dvs-using-the-deposit-contract",level:2}],d={toc:c};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"create-a-dv-using-the-sdk"},"Create a DV using the SDK"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"The Obol-SDK is in an alpha state and should be used with caution.")),(0,r.kt)("p",null,"This is a walkthrough of using the ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@obolnetwork/obol-sdk"},"Obol-SDK")," to propose a four-node distributed validator cluster for creation using the ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/dvl/intro"},"DV Launchpad"),". "),(0,r.kt)("h2",{id:"pre-requisites"},"Pre-requisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You have ",(0,r.kt)("a",{parentName:"li",href:"https://nodejs.org/en"},"node.js")," installed.")),(0,r.kt)("h2",{id:"install-the-package"},"Install the package"),(0,r.kt)("p",null,"Install the Obol-SDK package into your development environment"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# NPM\nnpm install --save @obolnetwork/obol-sdk\n\n# Yarn\nyarn add @obolnetwork/obol-sdk\n")),(0,r.kt)("h2",{id:"instantiate-the-client"},"Instantiate the client"),(0,r.kt)("p",null,"The first thing you need to do is create a instance of the Obol SDK client. The client takes two constructor parameters:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"chainID")," for the chain you intend to use."),(0,r.kt)("li",{parentName:"ul"},"An ethers.js ",(0,r.kt)("a",{parentName:"li",href:"https://docs.ethers.org/v6/api/providers/#Signer-signTypedData"},"signer")," object.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { Client } from "@obolnetwork/obol-sdk";\nimport { ethers } from "ethers";\n\n// Create a dummy ethers signer object with a throwaway private key\nconst mnemonic = ethers.Wallet.createRandom().mnemonic?.phrase || "";\nconst privateKey = ethers.Wallet.fromPhrase(mnemonic).privateKey;\nconst wallet = new ethers.Wallet(privateKey);\nconst signer = wallet.connect(null);\n\n// Instantiate the Obol Client for goerli \nconst obol = new Client({chainId: 5}, signer);\n')),(0,r.kt)("h2",{id:"propose-the-cluster"},"Propose the cluster"),(0,r.kt)("p",null,"List the Ethereum addresses of participating operators, along with withdrawal and fee recipient address data for each validator you intend for the operators to create."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'// A config hash is a deterministic hash of the proposed DV cluster configuration\nconst configHash = await obol.createClusterDefinition({\n  name: "SDK Demo Cluster",\n  operators:\n    [\n      { address: "0xC35CfCd67b9C27345a54EDEcC1033F2284148c81" },\n      { address: "0x33807D6F1DCe44b9C599fFE03640762A6F08C496" },\n      { address: "0xc6e76F72Ea672FAe05C357157CfC37720F0aF26f" },\n      { address: "0x86B8145c98e5BD25BA722645b15eD65f024a87EC" }\n    ],\n  validators: [{\n    fee_recipient_address: "0x3CD4958e76C317abcEA19faDd076348808424F99",\n    withdrawal_address: "0xE0C5ceA4D3869F156717C66E188Ae81C80914a6e"\n  }],\n});\n\nconsole.log(`Direct the operators to https://goerli.launchpad.obol.tech/dv?configHash=${configHash} to complete the key generation process`)\n')),(0,r.kt)("h2",{id:"invite-the-operators-to-complete-the-dkg"},"Invite the Operators to complete the DKG"),(0,r.kt)("p",null,"Once the Obol-API returns a ",(0,r.kt)("inlineCode",{parentName:"p"},"configHash")," string from the ",(0,r.kt)("inlineCode",{parentName:"p"},"createClusterDefinition")," method, you can use this identifier to invite the operators to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/dvl/intro"},"Launchpad")," to complete the process"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Operators navigate to ",(0,r.kt)("inlineCode",{parentName:"li"},"https://<NETWORK_NAME_HERE>.launchpad.obol.tech/dv?configHash=<CONFIG_HASH_HERE>")," and complete the ",(0,r.kt)("a",{parentName:"li",href:"/docs/next/int/quickstart/group/quickstart-group-operator"},"run a DV with others")," flow."),(0,r.kt)("li",{parentName:"ol"},"Once the DKG is complete, and operators are using the ",(0,r.kt)("inlineCode",{parentName:"li"},"--publish")," flag, the created cluster details will be posted to the Obol API"),(0,r.kt)("li",{parentName:"ol"},"The creator will be able to retrieve this data with ",(0,r.kt)("inlineCode",{parentName:"li"},"obol.getClusterLock(configHash)"),", to use for activating the newly created validator. ")),(0,r.kt)("h2",{id:"retrieve-the-created-distributed-validators-using-the-sdk"},"Retrieve the created Distributed Validators using the SDK"),(0,r.kt)("p",null,"Once the DKG is complete, the proposer of the cluster can retrieve key data such as the validator public keys and their associated deposit data messages. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const clusterLock = await obol.getClusterLock(configHash);\n")),(0,r.kt)("p",null,"Reference lock files can be found ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ObolNetwork/charon/tree/main/cluster/testdata"},"here"),". "),(0,r.kt)("h2",{id:"activate-the-dvs-using-the-deposit-contract"},"Activate the DVs using the deposit contract"),(0,r.kt)("p",null,"This guide will in future cover activating the deposit data from a lock file."))}p.isMDXComponent=!0}}]);