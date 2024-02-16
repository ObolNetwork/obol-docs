"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[42276],{95788:(e,t,n)=>{n.d(t,{Iu:()=>d,yg:()=>h});var i=n(11504);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),p=r,h=u["".concat(l,".").concat(p)]||u[p]||f[p]||a;return n?i.createElement(h,o(o({ref:t},d),{},{components:n})):i.createElement(h,o({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},54376:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>f,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var i=n(45072),r=(n(11504),n(95788));const a={description:"Documenting a Distributed Validator Cluster in a standardised file format",sidebar_position:3},o="Cluster Configuration",s={unversionedId:"charon/cluster-configuration",id:"version-v0.13.0/charon/cluster-configuration",title:"Cluster Configuration",description:"Documenting a Distributed Validator Cluster in a standardised file format",source:"@site/versioned_docs/version-v0.13.0/charon/cluster-configuration.md",sourceDirName:"charon",slug:"/charon/cluster-configuration",permalink:"/docs/v0.13.0/charon/cluster-configuration",draft:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.13.0/charon/cluster-configuration.md",tags:[],version:"v0.13.0",sidebarPosition:3,frontMatter:{description:"Documenting a Distributed Validator Cluster in a standardised file format",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Distributed Key Generation",permalink:"/docs/v0.13.0/charon/dkg"},next:{title:"Peer discovery",permalink:"/docs/v0.13.0/charon/peer-discovery"}},l={},c=[{value:"Cluster Definition File",id:"cluster-definition-file",level:2},{value:"Using the CLI",id:"using-the-cli",level:3},{value:"Using the DV Launchpad",id:"using-the-dv-launchpad",level:3},{value:"Cluster Lock File",id:"cluster-lock-file",level:2}],d={toc:c},u="wrapper";function f(e){let{components:t,...n}=e;return(0,r.yg)(u,(0,i.c)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"cluster-configuration"},"Cluster Configuration"),(0,r.yg)("admonition",{type:"caution"},(0,r.yg)("p",{parentName:"admonition"},"These cluster definition and cluster lock files are a work in progress. The intention is for the files to be standardised for operating distributed validators via the ",(0,r.yg)("a",{parentName:"p",href:"https://eips.ethereum.org/"},"EIP process")," when appropriate.")),(0,r.yg)("p",null,"This document describes the configuration options for running a charon client or cluster."),(0,r.yg)("p",null,"A charon cluster is configured in two steps:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"cluster-definition.json")," which defines the intended cluster configuration before keys have been created in a distributed key generation ceremony."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"cluster-lock.json")," which includes and extends ",(0,r.yg)("inlineCode",{parentName:"li"},"cluster-definition.json")," with distributed validator BLS public key shares.")),(0,r.yg)("p",null,"In the case of a solo operator running a cluster, the ",(0,r.yg)("a",{parentName:"p",href:"/docs/v0.13.0/charon/charon_cli_reference#create-a-full-cluster-locally"},(0,r.yg)("inlineCode",{parentName:"a"},"charon create cluster"))," command combines both steps into one and just outputs the final ",(0,r.yg)("inlineCode",{parentName:"p"},"cluster-lock.json")," without a DKG step."),(0,r.yg)("h2",{id:"cluster-definition-file"},"Cluster Definition File"),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"cluster-definition.json")," is provided as input to the DKG which generates keys and the ",(0,r.yg)("inlineCode",{parentName:"p"},"cluster-lock.json")," file."),(0,r.yg)("h3",{id:"using-the-cli"},"Using the CLI"),(0,r.yg)("p",null,"The ",(0,r.yg)("a",{parentName:"p",href:"/docs/v0.13.0/charon/charon_cli_reference#creating-the-configuration-for-a-dkg-ceremony"},(0,r.yg)("inlineCode",{parentName:"a"},"charon create dkg"))," command is used to create the ",(0,r.yg)("inlineCode",{parentName:"p"},"cluster-definition.json")," file which is used as input to ",(0,r.yg)("inlineCode",{parentName:"p"},"charon dkg"),"."),(0,r.yg)("p",null,"The schema of the ",(0,r.yg)("inlineCode",{parentName:"p"},"cluster-definition.json")," is defined as:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "best cluster", // Optional cosmetic identifier\n  "operators": [\n    {\n      "address": "0x123..abfc", // ETH1 address of the operator\n      "enr": "enr://abcdef...12345", // Charon node ENR\n      "config_signature": "0x123456...abcdef", // EIP712 Signature of config_hash by ETH1 address priv key\n      "enr_signature": "0x123654...abcedf" // EIP712 Signature of ENR by ETH1 address priv key\n    }\n  ],\n  "uuid": "1234-abcdef-1234-abcdef", // Random unique identifier.\n  "version": "v1.2.0", // Schema version\n  "timestamp": "2022-01-01T12:00:00+00:00", // Creation timestamp\n  "num_validators": 100, // Number of distributed validators to be created in cluster-lock.json\n  "threshold": 3, // Optional threshold required for signature reconstruction\n  "fee_recipient_address": "0x123..abfc", // ETH1 fee_recipient address\n  "withdrawal_address": "0x123..abfc", // ETH1 withdrawal address\n  "dkg_algorithm": "foo_dkg_v1", // Optional DKG algorithm for key generation\n  "fork_version": "0x00112233", // Chain/Network identifier\n  "config_hash": "abcfde...acbfed", // Hash of the static (non-changing) fields\n  "definition_hash": "abcdef...abcedef" // Final hash of all fields\n}\n')),(0,r.yg)("h3",{id:"using-the-dv-launchpad"},"Using the DV Launchpad"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"A ",(0,r.yg)("a",{parentName:"li",href:"/docs/v0.13.0/int/quickstart/group/"},(0,r.yg)("inlineCode",{parentName:"a"},"leader/creator")),', that wishes to co-ordinate the creation of a new Distributed Validator Cluster navigates to the launchpad and selects "Create new Cluster"'),(0,r.yg)("li",{parentName:"ul"},"The ",(0,r.yg)("inlineCode",{parentName:"li"},"leader/creator")," uses the user interface to configure all of the important details about the cluster including:",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"The ",(0,r.yg)("inlineCode",{parentName:"li"},"Withdrawal Address")," for the created validators"),(0,r.yg)("li",{parentName:"ul"},"The ",(0,r.yg)("inlineCode",{parentName:"li"},"Fee Recipient Address")," for block proposals if it differs from the withdrawal address"),(0,r.yg)("li",{parentName:"ul"},"The number of distributed validators to create"),(0,r.yg)("li",{parentName:"ul"},"The list of participants in the cluster specified by Ethereum address(/ENS)"),(0,r.yg)("li",{parentName:"ul"},"The threshold of fault tolerance required"))),(0,r.yg)("li",{parentName:"ul"},"These key pieces of information form the basis of the cluster configuration. These fields (and some technical fields like DKG algorithm to use) are serialised and merklised to produce the definition's ",(0,r.yg)("inlineCode",{parentName:"li"},"cluster_definition_hash"),". This merkle root will be used to confirm that their is no ambiguity or deviation between definitions when they are provided to charon nodes."),(0,r.yg)("li",{parentName:"ul"},"Once the ",(0,r.yg)("inlineCode",{parentName:"li"},"leader/creator")," is satisfied with the configuration they publish it to the launchpad's data availability layer for the other participants to access. (For early development the launchpad will use a centralised backend db to store the cluster configuration. Near production, solutions like IPFS or arweave may be more suitable for the long term decentralisation of the launchpad.)")),(0,r.yg)("h2",{id:"cluster-lock-file"},"Cluster Lock File"),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"cluster-lock.json")," has the following schema:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "cluster_definition": {...},                              // Cluster definiition json, identical schema to above,\n  "distributed_validators": [                               // Length equal to cluster_definition.num_validators.\n    {\n      "distributed_public_key":  "0x123..abfc",             // DV root pubkey\n      "public_shares": [ "abc...fed", "cfd...bfe"],         // Length equal to cluster_definition.operators\n      "fee_recipient": "0x123..abfc"                        // Defaults to withdrawal address if not set, can be edited manually\n    }\n  ],\n  "lock_hash": "abcdef...abcedef",                          // Config_hash plus distributed_validators\n  "signature_aggregate": "abcdef...abcedef"                 // BLS aggregate signature of the lock hash signed by each DV pubkey.\n}\n')))}f.isMDXComponent=!0}}]);