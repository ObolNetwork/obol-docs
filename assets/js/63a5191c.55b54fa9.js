"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[87974],{89613:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var r=t(74848),i=t(28453);const s={description:"Networking",sidebar_position:4},o="Charon networking",a={id:"charon/networking",title:"Charon networking",description:"Networking",source:"@site/versioned_docs/version-v0.16.0/charon/networking.md",sourceDirName:"charon",slug:"/charon/networking",permalink:"/v0.16.0/charon/networking",draft:!1,unlisted:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.16.0/charon/networking.md",tags:[],version:"v0.16.0",sidebarPosition:4,frontMatter:{description:"Networking",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Cluster configuration",permalink:"/v0.16.0/charon/cluster-configuration"},next:{title:"CLI reference",permalink:"/v0.16.0/charon/charon-cli-reference"}},c={},l=[{value:"Overview",id:"overview",level:2},{value:"Internal Validator Stack",id:"internal-validator-stack",level:2},{value:"External P2P Network",id:"external-p2p-network",level:2},{value:"LibP2P Authentication and Security",id:"libp2p-authentication-and-security",level:3},{value:"LibP2P Relays and Peer Discovery",id:"libp2p-relays-and-peer-discovery",level:3},{value:"Scalable Relay Clusters",id:"scalable-relay-clusters",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"charon-networking",children:"Charon networking"})}),"\n",(0,r.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsxs)(n.p,{children:["This document describes Charon's networking model which can be divided into two parts: the ",(0,r.jsx)(n.a,{href:"#internal-validator-stack",children:(0,r.jsx)(n.em,{children:"internal validator stack"})})," and the ",(0,r.jsx)(n.a,{href:"#external-p2p-network",children:(0,r.jsx)(n.em,{children:"external p2p network"})}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"internal-validator-stack",children:"Internal Validator Stack"}),"\n",(0,r.jsx)("img",{src:"/img/InternalValidatorStack.png",alt:"Internal Validator Stack",width:"50%"}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.p,{children:"Charon is a middleware DVT client and is therefore connected to an upstream beacon node and a downstream validator client is connected to it.\nEach operator should run the whole validator stack (all 4 client software types), either on the same machine or on different machines. The networking between\nthe nodes should be private and not exposed to the public internet."}),"\n",(0,r.jsx)(n.p,{children:"Related Charon configuration flags:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"--beacon-node-endpoints"}),": Connects Charon to one or more beacon nodes."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"--validator-api-address"}),": Address for Charon to listen on and serve requests from the validator client."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"external-p2p-network",children:"External P2P Network"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.img,{alt:"External P2P Network",src:t(58948).A+"",width:"2306",height:"494"}),'\nThe Charon clients in a DV cluster are connected to each other via a small p2p network consisting of only the clients in the cluster. Peer IP addresses are\ndiscovered via an external "relay" server. The p2p connections are over the public internet so the charon p2p port must be publicly accessible. Charon leverages\nthe popular ',(0,r.jsx)(n.a,{href:"https://libp2p.io/",children:"libp2p"})," protocol."]}),"\n",(0,r.jsxs)(n.p,{children:["Related ",(0,r.jsx)(n.a,{href:"/v0.16.0/charon/charon-cli-reference",children:"Charon configuration flags"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"--p2p-tcp-addresses"}),": Addresses for Charon to listen on and serve p2p requests."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"--p2p-relays"}),": Connect charon to one or more relay servers."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"--private-key-file"}),": Private key identifying the charon client."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"libp2p-authentication-and-security",children:"LibP2P Authentication and Security"}),"\n",(0,r.jsxs)(n.p,{children:["Each charon client has a secp256k1 private key. The associated public key is encoded into the ",(0,r.jsx)(n.a,{href:"/v0.16.0/charon/cluster-configuration#Cluster-Lock-File",children:"cluster lock file"})," to identify the nodes in the cluster.\nFor ease of use and to align with the Ethereum ecosystem, Charon encodes these public keys in the ",(0,r.jsx)(n.a,{href:"https://eips.ethereum.org/EIPS/eip-778",children:"ENR format"}),",\nnot in ",(0,r.jsx)(n.a,{href:"https://docs.libp2p.io/concepts/fundamentals/peers/",children:"libp2p\u2019s Peer ID format"}),"."]}),"\n",(0,r.jsxs)(n.admonition,{type:"warning",children:[(0,r.jsx)(n.p,{children:"Each Charon node's secp256k1 private key is critical for authentication and must be kept secure to prevent cluster compromise."}),(0,r.jsx)(n.p,{children:"Do not use the same key across multiple clusters, as this can lead to security issues."}),(0,r.jsxs)(n.p,{children:["For more on p2p security, refer to ",(0,r.jsx)(n.a,{href:"https://docs.libp2p.io/concepts/security/security-considerations",children:"libp2p's article"}),"."]})]}),"\n",(0,r.jsxs)(n.p,{children:["Charon currently only supports libp2p tcp connections with ",(0,r.jsx)(n.a,{href:"https://noiseprotocol.org/",children:"noise"})," security and only accepts incoming libp2p connections from peers defined in the cluster lock."]}),"\n",(0,r.jsx)(n.h3,{id:"libp2p-relays-and-peer-discovery",children:"LibP2P Relays and Peer Discovery"}),"\n",(0,r.jsxs)(n.p,{children:["Relays are simple libp2p servers that are publicly accessible supporting the ",(0,r.jsx)(n.a,{href:"https://docs.libp2p.io/concepts/nat/circuit-relay/",children:"circuit-relay"})," protocol.\nCircuit-relay is a libp2p transport protocol that routes traffic between two peers over a third-party \u201crelay\u201d peer."]}),"\n",(0,r.jsxs)(n.p,{children:["Obol hosts a publicly accessible relay at ",(0,r.jsx)(n.a,{href:"https://0.relay.obol.tech",children:"https://0.relay.obol.tech"})," and will work with other organisations in the community to host alternatives  Anyone can host their own relay server for their DV cluster."]}),"\n",(0,r.jsxs)(n.p,{children:["Each charon node knows which peers are in the cluster from the ENRs in the cluster lock file, but their IP addresses are unknown. By connecting to the same relay,\nnodes establish \u201crelay connections\u201d to each other. Once connected via relay they exchange their known public addresses via libp2p\u2019s ",(0,r.jsx)(n.a,{href:"https://docs.libp2p.io/concepts/fundamentals/protocols/#identify",children:"identify"}),"\nprotocol. The relay connection is then upgraded to a direct connection. If a node\u2019s public IP changes, nodes once again connect via relay, exchange the new IP, and then connect directly once again."]}),"\n",(0,r.jsx)(n.p,{children:"Note that in order for two peers to discover each other, they must connect to the same relay. Cluster operators should therefore coordinate which relays to use."}),"\n",(0,r.jsxs)(n.p,{children:["Libp2p\u2019s ",(0,r.jsx)(n.a,{href:"https://docs.libp2p.io/concepts/fundamentals/protocols/#identify",children:"identify"})," protocol attempts to automatically detect the public IP address of a charon\nclient without the need to explicitly configure it. If this however fails, the following two configuration flags can be used to explicitly set the publicly advertised\naddress:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"--p2p-external-ip"}),": Explicitly sets the external IP address."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"--p2p-external-hostname"}),": Explicitly sets the external DNS host name."]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsx)(n.p,{children:"If a pair of charon clients are not publicly accessible, due to being behind a NAT, they will not be able to upgrade their relay connections to a direct connection.\nEven though this is supported, it isn\u2019t recommended as relay connections introduce additional latency and reduced throughput and will result in decreased validator effectiveness\nand possible missed block proposals and attestations."})}),"\n",(0,r.jsx)(n.p,{children:"Libp2p\u2019s circuit-relay connections are end-to-end encrypted, even though relay servers accept connections between nodes from multiple different clusters, relays are merely\nrouting opaque connections. And since Charon only accepts incoming connections from other peers in its cluster, the use of a relay doesn\u2019t allow connections between clusters."}),"\n",(0,r.jsx)(n.p,{children:"Only the following three libp2p protocols are established between a charon node and a relay itself:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://docs.libp2p.io/concepts/nat/circuit-relay/",children:"circuit-relay"}),": To establish relay e2e encrypted connections between two peers in a cluster. ",(0,r.jsx)("br",{})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://docs.libp2p.io/concepts/fundamentals/protocols/#identify",children:"identify"}),": Auto-detection of public IP addresses to share with other peers in the cluster. ",(0,r.jsx)("br",{})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://github.com/ObolNetwork/charon/blob/main/app/peerinfo/peerinfo.go",children:"peerinfo"}),": Exchanges basic application ",(0,r.jsx)(n.a,{href:"https://github.com/ObolNetwork/charon/blob/main/app/peerinfo/peerinfopb/v1/peerinfo.proto",children:"metadata"})," for improved operational metrics and observability. ",(0,r.jsx)("br",{})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"All other charon protocols are only established between nodes in the same cluster."}),"\n",(0,r.jsx)(n.h3,{id:"scalable-relay-clusters",children:"Scalable Relay Clusters"}),"\n",(0,r.jsxs)(n.p,{children:["In order for a charon client to connect to a relay, it needs the relay's ",(0,r.jsx)(n.a,{href:"https://docs.libp2p.io/concepts/fundamentals/addressing/",children:"multiaddr"})," (containing its public key and IP address).\nBut a single multiaddr can only point to a single relay server which can easily be overloaded if too many clusters connect to it. Charon therefore supports resolving a relay\u2019s multiaddr\nvia HTTP GET request. Since charon also includes the unique ",(0,r.jsx)(n.code,{children:"cluster-hash"})," header in this request, the relay provider can use\n",(0,r.jsx)(n.a,{href:"https://cloud.google.com/load-balancing/docs/https/traffic-management-global#traffic_steering_header-based_routing",children:"consistent header-based load-balancing"})," to map clusters to one of many relays using a single HTTP address."]}),"\n",(0,r.jsxs)(n.p,{children:["The relay supports serving its runtime public multiaddrs via its ",(0,r.jsx)(n.code,{children:"--http-address"})," flag."]}),"\n",(0,r.jsxs)(n.p,{children:["E.g., ",(0,r.jsx)(n.a,{href:"https://0.relay.obol.tech",children:"https://0.relay.obol.tech"})," is actually a load-balancer that routes HTTP requests to one of many relays based on the ",(0,r.jsx)(n.code,{children:"cluster-hash"})," header returning the target relay\u2019s multiaddr\nwhich the charon client then uses to connect to that relay."]}),"\n",(0,r.jsxs)(n.p,{children:["The charon ",(0,r.jsx)(n.code,{children:"--p2p-relays"})," flag therefore supports both multiaddrs as well as HTTP URls."]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},58948:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/ExternalP2PNetwork-37e54ca010415d35ddcc5b8e5dee3aec.png"},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var r=t(96540);const i={},s=r.createContext(i);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);