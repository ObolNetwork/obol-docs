"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[31728],{58472:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"dv/p2p-interface","title":"P2P interface","description":"Connectivity between Charon instances","source":"@site/versioned_docs/version-v0.10.0/dv/07_p2p-interface.md","sourceDirName":"dv","slug":"/dv/p2p-interface","permalink":"/v0.10.0/dv/p2p-interface","draft":false,"unlisted":false,"editUrl":"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.10.0/dv/07_p2p-interface.md","tags":[],"version":"v0.10.0","sidebarPosition":7,"frontMatter":{"description":"Connectivity between Charon instances"},"sidebar":"tutorialSidebar","previous":{"title":"Peer discovery","permalink":"/v0.10.0/dv/peer-discovery"},"next":{"title":"Cluster Configuration","permalink":"/v0.10.0/dv/distributed-validator-cluster-manifest"}}');var i=n(74848),r=n(28453);const o={description:"Connectivity between Charon instances"},c="P2P interface",d={},a=[];function l(e){const t={a:"a",code:"code",h1:"h1",header:"header",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"p2p-interface",children:"P2P interface"})}),"\n",(0,i.jsxs)(t.p,{children:["The Charon P2P interface loosely follows the ",(0,i.jsx)(t.a,{href:"https://github.com/ethereum/consensus-specs/blob/dev/specs/phase0/p2p-interface.md",children:"Eth2 beacon P2P interface"}),"."]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Transport: TCP over IPv4/IPv6."}),"\n",(0,i.jsxs)(t.li,{children:["Identity: ",(0,i.jsx)(t.a,{href:"https://eips.ethereum.org/EIPS/eip-778",children:"Ethereum Node Records"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["Handshake: ",(0,i.jsx)(t.a,{href:"https://github.com/libp2p/specs/tree/master/noise",children:"noise-libp2p"})," with ",(0,i.jsx)(t.code,{children:"secp256k1"})," keys.","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Each charon client must have their ENR public key authorized in a ",(0,i.jsx)(t.a,{href:"/v0.10.0/dv/distributed-validator-cluster-manifest",children:"cluster-lock.json"})," file in order for the client handshake to succeed."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["Discovery: ",(0,i.jsx)(t.a,{href:"https://github.com/ethereum/devp2p/blob/master/discv5/discv5.md",children:"Discv5"}),"."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>c});var s=n(96540);const i={},r=s.createContext(i);function o(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);