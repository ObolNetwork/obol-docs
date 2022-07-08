"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[8900],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return h}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(r),h=i,f=p["".concat(l,".").concat(h)]||p[h]||u[h]||o;return r?n.createElement(f,a(a({ref:t},d),{},{components:r})):n.createElement(f,a({ref:t},d))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},8827:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var n=r(7462),i=r(3366),o=(r(7294),r(3905)),a=["components"],s={description:"How do distributed validator clients communicate with one another securely?"},l="Peer discovery",c={unversionedId:"dv/peer-discovery",id:"version-v0.7.0/dv/peer-discovery",title:"Peer discovery",description:"How do distributed validator clients communicate with one another securely?",source:"@site/versioned_docs/version-v0.7.0/dv/06_peer-discovery.md",sourceDirName:"dv",slug:"/dv/peer-discovery",permalink:"/docs/v0.7.0/dv/peer-discovery",draft:!1,editUrl:"https://github.com/obolnetwork/obol-docs/edit/main/website/versioned_docs/version-v0.7.0/dv/06_peer-discovery.md",tags:[],version:"v0.7.0",sidebarPosition:6,frontMatter:{description:"How do distributed validator clients communicate with one another securely?"},sidebar:"tutorialSidebar",previous:{title:"Middleware Architecture",permalink:"/docs/v0.7.0/dv/middleware-daemon"},next:{title:"P2P interface",permalink:"/docs/v0.7.0/dv/p2p-interface"}},d={},u=[{value:"Authenticating a distributed validator client",id:"authenticating-a-distributed-validator-client",level:3},{value:"Node database",id:"node-database",level:4},{value:"Node discovery",id:"node-discovery",level:4}],p={toc:u};function h(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"peer-discovery"},"Peer discovery"),(0,o.kt)("p",null,"In order to maintain security and sybil-resistance, charon clients need to be able to authenticate one another. We achieve this by giving each charon client a public/private key pair that they can sign with such that other clients in the cluster will be able to recognise them as legitimate no matter which IP address they communicate from."),(0,o.kt)("p",null,"At the end of a ",(0,o.kt)("a",{parentName:"p",href:"/docs/v0.7.0/dv/validator-creation#stages-of-creating-a-distributed-validator"},"DKG ceremony"),", each operator will have a number of files outputted by their charon client based on how many distributed validators the group chose to generate together."),(0,o.kt)("p",null,"These files are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Validator keystore(s):")," These files will be loaded into the operator's validator client and each file represents one share of a Distributed Validator."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"A distributed validator cluster lock file:")," This ",(0,o.kt)("inlineCode",{parentName:"li"},"cluster-lock.json")," file contains the configuration a distributed validator client like charon needs to join a cluster capable of operating a number of distributed validators."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Validator deposit data:")," This file is used to activate one or more distributed validators on the Ethereum network. ")),(0,o.kt)("h3",{id:"authenticating-a-distributed-validator-client"},"Authenticating a distributed validator client"),(0,o.kt)("p",null,"Before a DKG process begins, all operators must run ",(0,o.kt)("inlineCode",{parentName:"p"},"charon create enr"),", or just ",(0,o.kt)("inlineCode",{parentName:"p"},"charon enr"),", to create or get the Ethereum Node Record for their client. These ENRs are included in the configuration of a Distributed Key Generation ceremony. "),(0,o.kt)("p",null,"The file that outlines a DKG ceremony is known as a ",(0,o.kt)("a",{parentName:"p",href:"/docs/v0.7.0/dv/distributed-validator-cluster-manifest"},(0,o.kt)("inlineCode",{parentName:"a"},"cluster-definition"))," file. This file is passed to ",(0,o.kt)("inlineCode",{parentName:"p"},"charon dkg")," which uses it to create private keys, a cluster lock file and deposit data for the configured number of distributed validators. The cluster-lock file will be made available to ",(0,o.kt)("inlineCode",{parentName:"p"},"charon run"),", and the validator key stores will be made available to the configured validator client. "),(0,o.kt)("p",null,"When ",(0,o.kt)("inlineCode",{parentName:"p"},"charon run")," starts up and ingests its configuration from the ",(0,o.kt)("inlineCode",{parentName:"p"},"cluster-lock.json")," file, it checks if its observed/configured public IP address differs from what is listed in the lock file. If it is different; it updates the IP address, increments the nonce of the ENR and reissues it before beginning to establish connections with the other operators in the cluster."),(0,o.kt)("h4",{id:"node-database"},"Node database"),(0,o.kt)("p",null,"Distributed Validator Clusters are permissioned networks with a fully meshed topology. Each node will permanently store the ENRs of all other known Obol nodes in their node database."),(0,o.kt)("p",null,"Unlike with node databases of public permissionless networks (such as ",(0,o.kt)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/ethereum/go-ethereum@v1.10.13/p2p/enode#DB"},"Go-Ethereum"),"), there is no inbuilt eviction logic \u2013 the database will keep growing indefinitely. This is acceptable as the number of operators in a cluster is expected to stay constant. Mutable cluster operators will be introduced in future. "),(0,o.kt)("h4",{id:"node-discovery"},"Node discovery"),(0,o.kt)("p",null,"At boot, a charon client will ingest it's configured ",(0,o.kt)("inlineCode",{parentName:"p"},"cluster-lock.json")," file. This file contains a list of ENRs of the client's peers. The client will attempt to establish a connection with these peers, and will perform a handshake if they connect to establish an end to end encrypted communication channel between the clients. "),(0,o.kt)("p",null,"However, the IP addresses within an ENR can become stale. This could result in a cluster not being able to establish a connection with all nodes. To be tolerant to operator IP addresses changing, charon also supports the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ethereum/devp2p/blob/master/discv5/discv5.md"},"discv5")," discovery protocol. This allows a charon client to find another operator that might have moved IP address, but still retains the same ENR private key."))}h.isMDXComponent=!0}}]);