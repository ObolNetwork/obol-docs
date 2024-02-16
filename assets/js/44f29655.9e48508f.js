"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[84496],{95788:(e,t,n)=>{n.d(t,{Iu:()=>d,yg:()=>h});var r=n(11504);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),p=i,h=u["".concat(l,".").concat(p)]||u[p]||f[p]||a;return n?r.createElement(h,o(o({ref:t},d),{},{components:n})):r.createElement(h,o({ref:t},d))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},17364:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>f,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(45072),i=(n(11504),n(95788));const a={description:"Documenting a Distributed Validator Cluster in a standardised file format",sidebar_position:3},o="Cluster configuration",s={unversionedId:"charon/cluster-configuration",id:"version-v0.15.0/charon/cluster-configuration",title:"Cluster configuration",description:"Documenting a Distributed Validator Cluster in a standardised file format",source:"@site/versioned_docs/version-v0.15.0/charon/cluster-configuration.md",sourceDirName:"charon",slug:"/charon/cluster-configuration",permalink:"/docs/v0.15.0/charon/cluster-configuration",draft:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.15.0/charon/cluster-configuration.md",tags:[],version:"v0.15.0",sidebarPosition:3,frontMatter:{description:"Documenting a Distributed Validator Cluster in a standardised file format",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Distributed Key Generation",permalink:"/docs/v0.15.0/charon/dkg"},next:{title:"Charon networking",permalink:"/docs/v0.15.0/charon/networking"}},l={},c=[{value:"Cluster Definition File",id:"cluster-definition-file",level:2},{value:"Using the CLI",id:"using-the-cli",level:3},{value:"Using the DV Launchpad",id:"using-the-dv-launchpad",level:3},{value:"Cluster Lock File",id:"cluster-lock-file",level:2}],d={toc:c},u="wrapper";function f(e){let{components:t,...n}=e;return(0,i.yg)(u,(0,r.c)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"cluster-configuration"},"Cluster configuration"),(0,i.yg)("admonition",{type:"caution"},(0,i.yg)("p",{parentName:"admonition"},"These cluster definition and cluster lock files are a work in progress. The intention is for the files to be standardised for operating distributed validators via the ",(0,i.yg)("a",{parentName:"p",href:"https://eips.ethereum.org/"},"EIP process")," when appropriate.")),(0,i.yg)("p",null,"This document describes the configuration options for running a charon client or cluster."),(0,i.yg)("p",null,"A charon cluster is configured in two steps:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"cluster-definition.json")," which defines the intended cluster configuration before keys have been created in a distributed key generation ceremony."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"cluster-lock.json")," which includes and extends ",(0,i.yg)("inlineCode",{parentName:"li"},"cluster-definition.json")," with distributed validator BLS public key shares.")),(0,i.yg)("p",null,"In the case of a solo operator running a cluster, the ",(0,i.yg)("a",{parentName:"p",href:"/docs/v0.15.0/charon/charon-cli-reference#create-a-full-cluster-locally"},(0,i.yg)("inlineCode",{parentName:"a"},"charon create cluster"))," command combines both steps into one and just outputs the final ",(0,i.yg)("inlineCode",{parentName:"p"},"cluster-lock.json")," without a DKG step."),(0,i.yg)("h2",{id:"cluster-definition-file"},"Cluster Definition File"),(0,i.yg)("p",null,"The ",(0,i.yg)("inlineCode",{parentName:"p"},"cluster-definition.json")," is provided as input to the DKG which generates keys and the ",(0,i.yg)("inlineCode",{parentName:"p"},"cluster-lock.json")," file."),(0,i.yg)("h3",{id:"using-the-cli"},"Using the CLI"),(0,i.yg)("p",null,"The ",(0,i.yg)("a",{parentName:"p",href:"/docs/v0.15.0/charon/charon-cli-reference#creating-the-configuration-for-a-dkg-ceremony"},(0,i.yg)("inlineCode",{parentName:"a"},"charon create dkg"))," command is used to create the ",(0,i.yg)("inlineCode",{parentName:"p"},"cluster-definition.json")," file which is used as input to ",(0,i.yg)("inlineCode",{parentName:"p"},"charon dkg"),"."),(0,i.yg)("p",null,"The schema of the ",(0,i.yg)("inlineCode",{parentName:"p"},"cluster-definition.json")," is defined as:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "best cluster", // Optional cosmetic identifier\n  "creator": {\n    "address": "0x123..abfc", //ETH1 address of the creator\n    "config_signature": "0x123654...abcedf" // EIP712 Signature of config_hash using creator privkey\n  },\n  "operators": [\n    {\n      "address": "0x123..abfc", // ETH1 address of the operator\n      "enr": "enr://abcdef...12345", // Charon node ENR\n      "config_signature": "0x123456...abcdef", // EIP712 Signature of config_hash by ETH1 address priv key\n      "enr_signature": "0x123654...abcedf" // EIP712 Signature of ENR by ETH1 address priv key\n    }\n  ],\n  "uuid": "1234-abcdef-1234-abcdef", // Random unique identifier.\n  "version": "v1.2.0", // Schema version\n  "timestamp": "2022-01-01T12:00:00+00:00", // Creation timestamp\n  "num_validators": 2, // Number of distributed validators to be created in cluster-lock.json\n  "threshold": 3, // Optional threshold required for signature reconstruction\n  "validators": [\n    {\n      "fee_recipient_address": "0x123..abfc", // ETH1 fee_recipient address of validator\n      "withdrawal_address": "0x123..abfc" // ETH1 withdrawal address of validator\n    },\n    {\n      "fee_recipient_address": "0x123..abfc", // ETH1 fee_recipient address of validator\n      "withdrawal_address": "0x123..abfc" // ETH1 withdrawal address of validator\n    }\n  ],\n  "dkg_algorithm": "foo_dkg_v1", // Optional DKG algorithm for key generation\n  "fork_version": "0x00112233", // Chain/Network identifier\n  "config_hash": "0xabcfde...acbfed", // Hash of the static (non-changing) fields\n  "definition_hash": "0xabcdef...abcedef" // Final hash of all fields\n}\n')),(0,i.yg)("h3",{id:"using-the-dv-launchpad"},"Using the DV Launchpad"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"A ",(0,i.yg)("a",{parentName:"li",href:"/docs/v0.15.0/int/quickstart/group/"},(0,i.yg)("inlineCode",{parentName:"a"},"leader/creator")),', that wishes to coordinate the creation of a new Distributed Validator Cluster navigates to the launchpad and selects "Create new Cluster"'),(0,i.yg)("li",{parentName:"ul"},"The ",(0,i.yg)("inlineCode",{parentName:"li"},"leader/creator")," uses the user interface to configure all of the important details about the cluster including:",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"The ",(0,i.yg)("inlineCode",{parentName:"li"},"Withdrawal Address")," for the created validators"),(0,i.yg)("li",{parentName:"ul"},"The ",(0,i.yg)("inlineCode",{parentName:"li"},"Fee Recipient Address")," for block proposals if it differs from the withdrawal address"),(0,i.yg)("li",{parentName:"ul"},"The number of distributed validators to create"),(0,i.yg)("li",{parentName:"ul"},"The list of participants in the cluster specified by Ethereum address(/ENS)"),(0,i.yg)("li",{parentName:"ul"},"The threshold of fault tolerance required"))),(0,i.yg)("li",{parentName:"ul"},"These key pieces of information form the basis of the cluster configuration. These fields (and some technical fields like DKG algorithm to use) are serialized and merklized to produce the definition's ",(0,i.yg)("inlineCode",{parentName:"li"},"cluster_definition_hash"),". This merkle root will be used to confirm that there is no ambiguity or deviation between definitions when they are provided to charon nodes."),(0,i.yg)("li",{parentName:"ul"},"Once the ",(0,i.yg)("inlineCode",{parentName:"li"},"leader/creator")," is satisfied with the configuration they publish it to the launchpad's data availability layer for the other participants to access. (For early development the launchpad will use a centralized backend db to store the cluster configuration. Near production, solutions like IPFS or arweave may be more suitable for the long term decentralization of the launchpad.)")),(0,i.yg)("h2",{id:"cluster-lock-file"},"Cluster Lock File"),(0,i.yg)("p",null,"The ",(0,i.yg)("inlineCode",{parentName:"p"},"cluster-lock.json")," has the following schema:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "cluster_definition": {...},                              // Cluster definiition json, identical schema to above,\n  "distributed_validators": [                               // Length equal to cluster_definition.num_validators.\n    {\n      "distributed_public_key":  "0x123..abfc",             // DV root pubkey\n      "public_shares": [ "abc...fed", "cfd...bfe"],         // Length equal to cluster_definition.operators\n      "fee_recipient": "0x123..abfc"                        // Defaults to withdrawal address if not set, can be edited manually\n    }\n  ],\n  "lock_hash": "abcdef...abcedef",                          // Config_hash plus distributed_validators\n  "signature_aggregate": "abcdef...abcedef"                 // BLS aggregate signature of the lock hash signed by each DV pubkey.\n}\n')))}f.isMDXComponent=!0}}]);