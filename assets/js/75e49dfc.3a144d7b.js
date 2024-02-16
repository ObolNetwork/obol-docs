"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[26132],{95788:(e,t,n)=>{n.d(t,{Iu:()=>g,yg:()=>y});var a=n(11504);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},g=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),u=s(n),c=r,y=u["".concat(d,".").concat(c)]||u[c]||p[c]||l;return n?a.createElement(y,i(i({ref:t},g),{},{components:n})):a.createElement(y,i({ref:t},g))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1736:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=n(45072),r=(n(11504),n(95788));const l={description:"Documenting a Distributed Validator Cluster in a standardised file format",sidebar_position:3},i="Cluster configuration",o={unversionedId:"charon/cluster-configuration",id:"version-v0.17.1/charon/cluster-configuration",title:"Cluster configuration",description:"Documenting a Distributed Validator Cluster in a standardised file format",source:"@site/versioned_docs/version-v0.17.1/charon/cluster-configuration.md",sourceDirName:"charon",slug:"/charon/cluster-configuration",permalink:"/docs/v0.17.1/charon/cluster-configuration",draft:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.17.1/charon/cluster-configuration.md",tags:[],version:"v0.17.1",sidebarPosition:3,frontMatter:{description:"Documenting a Distributed Validator Cluster in a standardised file format",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Distributed Key Generation",permalink:"/docs/v0.17.1/charon/dkg"},next:{title:"Charon networking",permalink:"/docs/v0.17.1/charon/networking"}},d={},s=[{value:"Cluster Definition File",id:"cluster-definition-file",level:2},{value:"Using the CLI",id:"using-the-cli",level:3},{value:"Using the DV Launchpad",id:"using-the-dv-launchpad",level:3},{value:"Cluster Lock File",id:"cluster-lock-file",level:2},{value:"Cluster Size and Resilience",id:"cluster-size-and-resilience",level:2}],g={toc:s},u="wrapper";function p(e){let{components:t,...n}=e;return(0,r.yg)(u,(0,a.c)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"cluster-configuration"},"Cluster configuration"),(0,r.yg)("admonition",{type:"caution"},(0,r.yg)("p",{parentName:"admonition"},"These cluster definition and cluster lock files are a work in progress. The intention is for the files to be standardised for operating distributed validators via the ",(0,r.yg)("a",{parentName:"p",href:"https://eips.ethereum.org/"},"EIP process")," when appropriate.")),(0,r.yg)("p",null,"This document describes the configuration options for running a charon client or cluster."),(0,r.yg)("p",null,"A charon cluster is configured in two steps:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"cluster-definition.json")," which defines the intended cluster configuration before keys have been created in a distributed key generation ceremony."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"cluster-lock.json")," which includes and extends ",(0,r.yg)("inlineCode",{parentName:"li"},"cluster-definition.json")," with distributed validator BLS public key shares.")),(0,r.yg)("p",null,"In the case of a solo operator running a cluster, the ",(0,r.yg)("a",{parentName:"p",href:"/docs/v0.17.1/charon/charon-cli-reference#create-a-full-cluster-locally"},(0,r.yg)("inlineCode",{parentName:"a"},"charon create cluster"))," command combines both steps into one and just outputs the final ",(0,r.yg)("inlineCode",{parentName:"p"},"cluster-lock.json")," without a DKG step."),(0,r.yg)("h2",{id:"cluster-definition-file"},"Cluster Definition File"),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"cluster-definition.json")," is provided as input to the DKG which generates keys and the ",(0,r.yg)("inlineCode",{parentName:"p"},"cluster-lock.json")," file."),(0,r.yg)("h3",{id:"using-the-cli"},"Using the CLI"),(0,r.yg)("p",null,"The ",(0,r.yg)("a",{parentName:"p",href:"/docs/v0.17.1/charon/charon-cli-reference#creating-the-configuration-for-a-dkg-ceremony"},(0,r.yg)("inlineCode",{parentName:"a"},"charon create dkg"))," command is used to create the ",(0,r.yg)("inlineCode",{parentName:"p"},"cluster-definition.json")," file which is used as input to ",(0,r.yg)("inlineCode",{parentName:"p"},"charon dkg"),"."),(0,r.yg)("p",null,"The schema of the ",(0,r.yg)("inlineCode",{parentName:"p"},"cluster-definition.json")," is defined as:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "best cluster", // Optional cosmetic identifier\n  "creator": {\n    "address": "0x123..abfc", //ETH1 address of the creator\n    "config_signature": "0x123654...abcedf" // EIP712 Signature of config_hash using creator privkey\n  },\n  "operators": [\n    {\n      "address": "0x123..abfc", // ETH1 address of the operator\n      "enr": "enr://abcdef...12345", // Charon node ENR\n      "config_signature": "0x123456...abcdef", // EIP712 Signature of config_hash by ETH1 address priv key\n      "enr_signature": "0x123654...abcedf" // EIP712 Signature of ENR by ETH1 address priv key\n    }\n  ],\n  "uuid": "1234-abcdef-1234-abcdef", // Random unique identifier.\n  "version": "v1.2.0", // Schema version\n  "timestamp": "2022-01-01T12:00:00+00:00", // Creation timestamp\n  "num_validators": 2, // Number of distributed validators to be created in cluster-lock.json\n  "threshold": 3, // Optional threshold required for signature reconstruction\n  "validators": [\n    {\n      "fee_recipient_address": "0x123..abfc", // ETH1 fee_recipient address of validator\n      "withdrawal_address": "0x123..abfc" // ETH1 withdrawal address of validator\n    },\n    {\n      "fee_recipient_address": "0x123..abfc", // ETH1 fee_recipient address of validator\n      "withdrawal_address": "0x123..abfc" // ETH1 withdrawal address of validator\n    }\n  ],\n  "dkg_algorithm": "foo_dkg_v1", // Optional DKG algorithm for key generation\n  "fork_version": "0x00112233", // Chain/Network identifier\n  "config_hash": "0xabcfde...acbfed", // Hash of the static (non-changing) fields\n  "definition_hash": "0xabcdef...abcedef" // Final hash of all fields\n}\n')),(0,r.yg)("h3",{id:"using-the-dv-launchpad"},"Using the DV Launchpad"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"A ",(0,r.yg)("a",{parentName:"li",href:"/docs/v0.17.1/int/quickstart/group/"},(0,r.yg)("inlineCode",{parentName:"a"},"leader/creator")),', that wishes to coordinate the creation of a new Distributed Validator Cluster navigates to the launchpad and selects "Create new Cluster"'),(0,r.yg)("li",{parentName:"ul"},"The ",(0,r.yg)("inlineCode",{parentName:"li"},"leader/creator")," uses the user interface to configure all of the important details about the cluster including:",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"The ",(0,r.yg)("inlineCode",{parentName:"li"},"Withdrawal Address")," for the created validators"),(0,r.yg)("li",{parentName:"ul"},"The ",(0,r.yg)("inlineCode",{parentName:"li"},"Fee Recipient Address")," for block proposals if it differs from the withdrawal address"),(0,r.yg)("li",{parentName:"ul"},"The number of distributed validators to create"),(0,r.yg)("li",{parentName:"ul"},"The list of participants in the cluster specified by Ethereum address(/ENS)"),(0,r.yg)("li",{parentName:"ul"},"The threshold of fault tolerance required"))),(0,r.yg)("li",{parentName:"ul"},"These key pieces of information form the basis of the cluster configuration. These fields (and some technical fields like DKG algorithm to use) are serialized and merklized to produce the definition's ",(0,r.yg)("inlineCode",{parentName:"li"},"cluster_definition_hash"),". This merkle root will be used to confirm that there is no ambiguity or deviation between definitions when they are provided to charon nodes."),(0,r.yg)("li",{parentName:"ul"},"Once the ",(0,r.yg)("inlineCode",{parentName:"li"},"leader/creator")," is satisfied with the configuration they publish it to the launchpad's data availability layer for the other participants to access. (For early development the launchpad will use a centralized backend db to store the cluster configuration. Near production, solutions like IPFS or arweave may be more suitable for the long term decentralization of the launchpad.)")),(0,r.yg)("h2",{id:"cluster-lock-file"},"Cluster Lock File"),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"cluster-lock.json")," has the following schema:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "cluster_definition": {...},                              // Cluster definiition json, identical schema to above,\n  "distributed_validators": [                               // Length equal to cluster_definition.num_validators.\n    {\n      "distributed_public_key":  "0x123..abfc",             // DV root pubkey\n      "public_shares": [ "abc...fed", "cfd...bfe"],         // Length equal to cluster_definition.operators\n      "fee_recipient": "0x123..abfc"                        // Defaults to withdrawal address if not set, can be edited manually\n    }\n  ],\n  "lock_hash": "abcdef...abcedef",                          // Config_hash plus distributed_validators\n  "signature_aggregate": "abcdef...abcedef"                 // BLS aggregate signature of the lock hash signed by each DV pubkey.\n}\n')),(0,r.yg)("h2",{id:"cluster-size-and-resilience"},"Cluster Size and Resilience"),(0,r.yg)("p",null,"The cluster size (the number of nodes/operators in the cluster) determines the resilience of the cluster; its ability remain operational under diverse failure scenarios.\nLarger clusters can tolerate more faulty nodes.\nHowever, increased cluster size implies higher operational costs and potential network latency, which may negatively affect performance"),(0,r.yg)("p",null,"Optimal cluster size is therefore trade-off between resilience (larger is better) vs cost-efficiency and performance (smaller is better)."),(0,r.yg)("p",null,"Cluster resilience can be broadly classified into two categories:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},(0,r.yg)("a",{parentName:"strong",href:"https://en.wikipedia.org/wiki/Byzantine_fault"},"Byzantine Fault Tolerance (BFT)"))," - the ability to tolerate nodes that are actively trying to disrupt the cluster."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},(0,r.yg)("a",{parentName:"strong",href:"https://en.wikipedia.org/wiki/Fault_tolerance"},"Crash Fault Tolerance (CFT)"))," - the ability to tolerate nodes that have crashed or are otherwise unavailable.")),(0,r.yg)("p",null,"Different cluster sizes tolerate different counts of byzantine vs crash nodes.\nIn practice, hardware and software crash relatively frequently, while byzantine behaviour is relatively uncommon.\nHowever, Byzantine Fault Tolerance is crucial for trust minimised systems like distributed validators.\nThus, cluster size can be chosen to optimise for either BFT or CFT."),(0,r.yg)("p",null,"The table below lists different cluster sizes and their characteristics:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"Cluster Size")," - the number of nodes in the cluster."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"Threshold")," - the minimum number of nodes that must collaborate to reach consensus quorum and to create signatures."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"BFT #")," - the maximum number of byzantine nodes that can be tolerated."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"CFT #")," - the maximum number of crashed nodes that can be tolerated.")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Cluster Size"),(0,r.yg)("th",{parentName:"tr",align:null},"Threshold"),(0,r.yg)("th",{parentName:"tr",align:null},"BFT #"),(0,r.yg)("th",{parentName:"tr",align:null},"CFT #"),(0,r.yg)("th",{parentName:"tr",align:null},"Note"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"1"),(0,r.yg)("td",{parentName:"tr",align:null},"1"),(0,r.yg)("td",{parentName:"tr",align:null},"0"),(0,r.yg)("td",{parentName:"tr",align:null},"0"),(0,r.yg)("td",{parentName:"tr",align:null},"\u274c Invalid: Not CFT nor BFT!")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"2"),(0,r.yg)("td",{parentName:"tr",align:null},"2"),(0,r.yg)("td",{parentName:"tr",align:null},"0"),(0,r.yg)("td",{parentName:"tr",align:null},"0"),(0,r.yg)("td",{parentName:"tr",align:null},"\u274c Invalid: Not CFT nor BFT!")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"3"),(0,r.yg)("td",{parentName:"tr",align:null},"2"),(0,r.yg)("td",{parentName:"tr",align:null},"0"),(0,r.yg)("td",{parentName:"tr",align:null},"1"),(0,r.yg)("td",{parentName:"tr",align:null},"\u26a0\ufe0f Warning: CFT but not BFT!")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"4"),(0,r.yg)("td",{parentName:"tr",align:null},"3"),(0,r.yg)("td",{parentName:"tr",align:null},"1"),(0,r.yg)("td",{parentName:"tr",align:null},"1"),(0,r.yg)("td",{parentName:"tr",align:null},"\u2705 CFT and BFT optimal for 1 faulty")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"5"),(0,r.yg)("td",{parentName:"tr",align:null},"4"),(0,r.yg)("td",{parentName:"tr",align:null},"1"),(0,r.yg)("td",{parentName:"tr",align:null},"1"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"6"),(0,r.yg)("td",{parentName:"tr",align:null},"4"),(0,r.yg)("td",{parentName:"tr",align:null},"1"),(0,r.yg)("td",{parentName:"tr",align:null},"2"),(0,r.yg)("td",{parentName:"tr",align:null},"\u2705 CFT optimal for 2 crashed")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"7"),(0,r.yg)("td",{parentName:"tr",align:null},"5"),(0,r.yg)("td",{parentName:"tr",align:null},"2"),(0,r.yg)("td",{parentName:"tr",align:null},"2"),(0,r.yg)("td",{parentName:"tr",align:null},"\u2705 BFT optimal for 2 byzantine")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"8"),(0,r.yg)("td",{parentName:"tr",align:null},"6"),(0,r.yg)("td",{parentName:"tr",align:null},"2"),(0,r.yg)("td",{parentName:"tr",align:null},"2"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"9"),(0,r.yg)("td",{parentName:"tr",align:null},"6"),(0,r.yg)("td",{parentName:"tr",align:null},"2"),(0,r.yg)("td",{parentName:"tr",align:null},"3"),(0,r.yg)("td",{parentName:"tr",align:null},"\u2705 CFT optimal for 3 crashed")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"10"),(0,r.yg)("td",{parentName:"tr",align:null},"7"),(0,r.yg)("td",{parentName:"tr",align:null},"3"),(0,r.yg)("td",{parentName:"tr",align:null},"3"),(0,r.yg)("td",{parentName:"tr",align:null},"\u2705 BFT optimal for 3 byzantine")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"11"),(0,r.yg)("td",{parentName:"tr",align:null},"8"),(0,r.yg)("td",{parentName:"tr",align:null},"3"),(0,r.yg)("td",{parentName:"tr",align:null},"3"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"12"),(0,r.yg)("td",{parentName:"tr",align:null},"8"),(0,r.yg)("td",{parentName:"tr",align:null},"3"),(0,r.yg)("td",{parentName:"tr",align:null},"4"),(0,r.yg)("td",{parentName:"tr",align:null},"\u2705 CFT optimal for 4 crashed")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"13"),(0,r.yg)("td",{parentName:"tr",align:null},"9"),(0,r.yg)("td",{parentName:"tr",align:null},"4"),(0,r.yg)("td",{parentName:"tr",align:null},"4"),(0,r.yg)("td",{parentName:"tr",align:null},"\u2705 BFT optimal for 4 byzantine")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"14"),(0,r.yg)("td",{parentName:"tr",align:null},"10"),(0,r.yg)("td",{parentName:"tr",align:null},"4"),(0,r.yg)("td",{parentName:"tr",align:null},"4"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"15"),(0,r.yg)("td",{parentName:"tr",align:null},"10"),(0,r.yg)("td",{parentName:"tr",align:null},"4"),(0,r.yg)("td",{parentName:"tr",align:null},"5"),(0,r.yg)("td",{parentName:"tr",align:null},"\u2705 CFT optimal for 5 crashed")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"16"),(0,r.yg)("td",{parentName:"tr",align:null},"11"),(0,r.yg)("td",{parentName:"tr",align:null},"5"),(0,r.yg)("td",{parentName:"tr",align:null},"5"),(0,r.yg)("td",{parentName:"tr",align:null},"\u2705 BFT optimal for 5 byzantine")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"17"),(0,r.yg)("td",{parentName:"tr",align:null},"12"),(0,r.yg)("td",{parentName:"tr",align:null},"5"),(0,r.yg)("td",{parentName:"tr",align:null},"5"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"18"),(0,r.yg)("td",{parentName:"tr",align:null},"12"),(0,r.yg)("td",{parentName:"tr",align:null},"5"),(0,r.yg)("td",{parentName:"tr",align:null},"6"),(0,r.yg)("td",{parentName:"tr",align:null},"\u2705 CFT optimal for 6 crashed")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"19"),(0,r.yg)("td",{parentName:"tr",align:null},"13"),(0,r.yg)("td",{parentName:"tr",align:null},"6"),(0,r.yg)("td",{parentName:"tr",align:null},"6"),(0,r.yg)("td",{parentName:"tr",align:null},"\u2705 BFT optimal for 6 byzantine")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"20"),(0,r.yg)("td",{parentName:"tr",align:null},"14"),(0,r.yg)("td",{parentName:"tr",align:null},"6"),(0,r.yg)("td",{parentName:"tr",align:null},"6"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"21"),(0,r.yg)("td",{parentName:"tr",align:null},"14"),(0,r.yg)("td",{parentName:"tr",align:null},"6"),(0,r.yg)("td",{parentName:"tr",align:null},"7"),(0,r.yg)("td",{parentName:"tr",align:null},"\u2705 CFT optimal for 7 crashed")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"22"),(0,r.yg)("td",{parentName:"tr",align:null},"15"),(0,r.yg)("td",{parentName:"tr",align:null},"7"),(0,r.yg)("td",{parentName:"tr",align:null},"7"),(0,r.yg)("td",{parentName:"tr",align:null},"\u2705 BFT optimal for 7 byzantine")))),(0,r.yg)("p",null,"The table above is determined by the QBFT consensus algorithm with the\nfollowing formulas from ",(0,r.yg)("a",{parentName:"p",href:"https://arxiv.org/pdf/1909.10194.pdf"},"this")," paper: "),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"n = cluster size\n\nThreshold: min number of honest nodes required to reach quorum given size n\nQuarom(n) = ceiling(2n/3) \n\nBFT #: max number of faulty (byzantine) nodes given size n\nf(n) = floor((n-1)/3)\n\nCFT #: max number of unavailable (crashed) nodes given size n\ncrashed(n) = n - Quorum(n)\n")))}p.isMDXComponent=!0}}]);