"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[29349],{37340:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>u,frontMatter:()=>o,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"dv/distributed-validator-cluster-manifest","title":"Cluster Configuration","description":"Documenting a Distributed Validator Cluster in a standardised file format","source":"@site/versioned_docs/version-v0.8.0/dv/08_distributed-validator-cluster-manifest.md","sourceDirName":"dv","slug":"/dv/distributed-validator-cluster-manifest","permalink":"/v0.8.0/dv/distributed-validator-cluster-manifest","draft":false,"unlisted":false,"editUrl":"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.8.0/dv/08_distributed-validator-cluster-manifest.md","tags":[],"version":"v0.8.0","sidebarPosition":8,"frontMatter":{"description":"Documenting a Distributed Validator Cluster in a standardised file format"},"sidebar":"tutorialSidebar","previous":{"title":"P2P interface","permalink":"/v0.8.0/dv/p2p-interface"},"next":{"title":"Charon CLI reference","permalink":"/v0.8.0/dv/charon_cli_reference"}}');var s=i(74848),r=i(28453);const o={description:"Documenting a Distributed Validator Cluster in a standardised file format"},d="Cluster Configuration",a={},c=[{value:"Cluster Configuration Files",id:"cluster-configuration-files",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"cluster-configuration",children:"Cluster Configuration"})}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsxs)(n.p,{children:["These cluster definition and cluster lock files are a work in progress. The intention is for the files to be standardised for operating distributed validators via the ",(0,s.jsx)(n.a,{href:"https://eips.ethereum.org/",children:"EIP process"})," when appropriate."]})}),"\n",(0,s.jsx)(n.p,{children:"This document describes the configuration options for running a charon client (or cluster) locally or in production."}),"\n",(0,s.jsx)(n.h2,{id:"cluster-configuration-files",children:"Cluster Configuration Files"}),"\n",(0,s.jsx)(n.p,{children:"A charon cluster is configured in two steps:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"cluster-definition.json"})," which defines the intended cluster configuration before keys have been created in a distributed key generation ceremony."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"cluster-lock.json"})," which includes and extends ",(0,s.jsx)(n.code,{children:"cluster-definition.json"})," with distributed validator BLS public key shares."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"charon create dkg"})," command is used to create ",(0,s.jsx)(n.code,{children:"cluster-definition.json"})," file which is used as input to ",(0,s.jsx)(n.code,{children:"charon dkg"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"charon create cluster"})," command combines both steps into one and just outputs the final ",(0,s.jsx)(n.code,{children:"cluster-lock.json"})," without a DKG step."]}),"\n",(0,s.jsxs)(n.p,{children:["The schema of the ",(0,s.jsx)(n.code,{children:"cluster-definition.json"})," is defined as:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "name": "best cluster",                       // Optional cosmetic identifier\n  "operators": [\n    {\n      "address": "0x123..abfc",                 // ETH1 address of the operator\n      "enr": "enr://abcdef...12345",            // Charon node ENR\n      "nonce": 1,                               // Nonce (incremented each time the ENR is added/signed)\n      "config_signature": "123456...abcdef",    // EIP712 Signature of config_hash by ETH1 address priv key\n      "enr_signature": "123654...abcedf"        // EIP712 Signature of ENR by ETH1 address priv key\n    }\n  ],\n  "uuid": "1234-abcdef-1234-abcdef",            // Random unique identifier.\n  "version": "v1.0.0",                          // Schema version\n  "num_validators": 100,                        // Number of distributed validators to be created in cluster.lock\n  "threshold": 3,                               // Optional threshold required for signature reconstruction\n  "fee_recipient_address":"0x123..abfc",        // ETH1 fee_recipient address\n  "withdrawal_address": "0x123..abfc",          // ETH1 withdrawal address\n  "dkg_algorithm": "foo_dkg_v1" ,               // Optional DKG algorithm for key generation\n  "fork_version": "0x00112233",                 // Chain/Network identifier\n  "config_hash": "abcfde...acbfed",             // Hash of the static (non-changing) fields\n  "definition_hash": "abcdef...abcedef"         // Final Hash of all fields\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["The above ",(0,s.jsx)(n.code,{children:"cluster-definition.json"})," is provided as input to the DKG which generates keys and the ",(0,s.jsx)(n.code,{children:"cluster-lock.json"})," file."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"cluster-lock.json"})," has the following schema:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "cluster_definition": {...},                              // Cluster definiition json, identical schema to above,\n  "distributed_validators": [                               // Length equaled to num_validators.\n    {\n      "distributed_public_key":  "0x123..abfc",             // DV root pubkey\n      "public_shares": [ "oA8Z...2XyT", "g1q...icu"],       // Public Key Shares\n      "fee_recipient": "0x123..abfc"                        // Defaults to withdrawal address if not set, can be edited manually\n    }\n  ],\n  "lock_hash": "abcdef...abcedef",                          // Config_hash plus distributed_validators\n  "signature_aggregate": "abcdef...abcedef"                 // BLS aggregate signature of the lock hash signed by each DV pubkey.\n}\n'})})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>d});var t=i(96540);const s={},r=t.createContext(s);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);