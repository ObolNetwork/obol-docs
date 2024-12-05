"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[97233],{9580:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"run/prepare/deployment-best-practices","title":"Deployment Best Practices","description":"DV Deployment best practices, for running an optimal Distributed Validator setup at scale.","source":"@site/docs/run/prepare/deployment-best-practices.md","sourceDirName":"run/prepare","slug":"/run/prepare/deployment-best-practices","permalink":"/next/run/prepare/deployment-best-practices","draft":false,"unlisted":false,"editUrl":"https://github.com/ObolNetwork/obol-docs/edit/main/docs/run/prepare/deployment-best-practices.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2,"description":"DV Deployment best practices, for running an optimal Distributed Validator setup at scale."},"sidebar":"tutorialSidebar","previous":{"title":"How and Where To Run DVs","permalink":"/next/run/prepare/how_where_DVs"},"next":{"title":"Test a Cluster","permalink":"/next/run/prepare/test-command"}}');var r=t(74848),s=t(28453);const o={sidebar_position:2,description:"DV Deployment best practices, for running an optimal Distributed Validator setup at scale."},a="Deployment Best Practices",l={},c=[{value:"Hardware Specifications",id:"hardware-specifications",level:2},{value:"Minimum Specs",id:"minimum-specs",level:3},{value:"Recommended Specs for extremely large clusters",id:"recommended-specs-for-extremely-large-clusters",level:3},{value:"Intra-cluster Latency",id:"intra-cluster-latency",level:2},{value:"Node Locations",id:"node-locations",level:2},{value:"Peer Connections",id:"peer-connections",level:2},{value:"Instance Independence",id:"instance-independence",level:2},{value:"Placement of Charon clients",id:"placement-of-charon-clients",level:2},{value:"Node Configuration",id:"node-configuration",level:2},{value:"MEV-Boost Relays",id:"mev-boost-relays",level:2},{value:"Client Diversity",id:"client-diversity",level:2},{value:"Metrics Monitoring",id:"metrics-monitoring",level:2},{value:"Obol Splits",id:"obol-splits",level:2},{value:"Deposit Process",id:"deposit-process",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"deployment-best-practices",children:"Deployment Best Practices"})}),"\n",(0,r.jsx)(n.p,{children:"The following are a selection of best practices for deploying Distributed Validator Clusters at scale on mainnet."}),"\n",(0,r.jsx)(n.h2,{id:"hardware-specifications",children:"Hardware Specifications"}),"\n",(0,r.jsx)(n.p,{children:"The following specifications are recommended for bare metal machines for clusters intending to run a significant number of mainnet validators:"}),"\n",(0,r.jsx)(n.h3,{id:"minimum-specs",children:"Minimum Specs"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["A CPU with 4+ cores, favouring high clock speed over more cores. ( >3.0GHz and higher or a cpubenchmark ",(0,r.jsx)(n.a,{href:"https://www.cpubenchmark.net/singleThread.html",children:"single thread"})," score of >2,500)"]}),"\n",(0,r.jsx)(n.li,{children:"16GB of RAM"}),"\n",(0,r.jsx)(n.li,{children:"2TB+ free SSD disk space (for mainnet)"}),"\n",(0,r.jsx)(n.li,{children:"1000 read/write SSD IOPS"}),"\n",(0,r.jsx)(n.li,{children:"500MB/s read/write SSD speed"}),"\n",(0,r.jsx)(n.li,{children:"10mb/s internet bandwidth"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"recommended-specs-for-extremely-large-clusters",children:"Recommended Specs for extremely large clusters"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"A CPU with 8+ physical cores, with clock speeds >3.5Ghz"}),"\n",(0,r.jsx)(n.li,{children:"32GB+ RAM (depending on the EL+CL clients)"}),"\n",(0,r.jsx)(n.li,{children:"4TB+ NVMe storage"}),"\n",(0,r.jsx)(n.li,{children:"2000 read/write SSD IOPS"}),"\n",(0,r.jsx)(n.li,{children:"1000MB/s read/write SSD speed"}),"\n",(0,r.jsx)(n.li,{children:"25mb/s internet bandwidth"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["An NVMe storage device is ",(0,r.jsx)(n.strong,{children:"highly recommended for optimal performance"}),", offering nearly 10x more random read/writes per second than a standard SSD."]}),"\n",(0,r.jsxs)(n.p,{children:["Inadequate hardware (low-performance virtualized servers and/or slow HDD storage) has been observed to hinder performance, indicating the necessity of provisioning adequate resources. ",(0,r.jsx)(n.strong,{children:"CPU clock speed and Disk throughput+latency are the most important factors for running a performant validator."})]}),"\n",(0,r.jsx)(n.p,{children:"Note that the Charon client itself takes less than 1GB of RAM and minimal CPU load. In order to optimize both performance and cost-effectiveness, it is recommended to prioritize physical over virtualized setups. Such configurations typically offer greater performance and minimize overhead associated with virtualization, contributing to improved efficiency and reliability."}),"\n",(0,r.jsx)(n.p,{children:"When constructing a DV cluster, it is important to be conscious of whether a cluster runs across cloud providers or stays within a single provider's private networking. This likely can impact the bandwidth and latency of the connections between nodes, as well as the egress costs of the cluster (Charon has a relatively low communication with its peers, averaging 10s of kb/s in large mainnet clusters). Ideally, bare metal machines in different locations within the same continent and with at least two providers, balances redundancy and performance."}),"\n",(0,r.jsx)(n.h2,{id:"intra-cluster-latency",children:"Intra-cluster Latency"}),"\n",(0,r.jsxs)(n.p,{children:["It is recommended to ",(0,r.jsx)(n.strong,{children:"keep peer ping latency below 235 milliseconds for all peers in a cluster"}),". Charon should report a consensus duration averaging under 1 second through its prometheus metric ",(0,r.jsx)(n.code,{children:"core_consensus_duration_seconds_bucket"}),' and associated grafana panel titled "Consensus Duration".']}),"\n",(0,r.jsx)(n.p,{children:"In cases where latencies exceed these thresholds, efforts should be made to reduce the physical distance between nodes or optimize Internet Service Provider (ISP) settings accordingly. Ensure all nodes are connecting to one another directly rather than through a relay."}),"\n",(0,r.jsx)(n.p,{children:"For high-scale, performance deployments; inter-peer latency of < 25ms is optimal, along with an average consensus duration under 100ms."}),"\n",(0,r.jsx)(n.h2,{id:"node-locations",children:"Node Locations"}),"\n",(0,r.jsxs)(n.p,{children:["For optimal performance and high availability, it is recommended to provision machines or virtual machines (VMs) within the same continent. This practice helps minimize potential latency issues ensuring efficient communication and responsiveness. Consider maps of ",(0,r.jsx)(n.a,{href:"https://www.submarinecablemap.com/",children:"undersea internet cables"})," when selecting locations across oceans with low latency."]}),"\n",(0,r.jsx)(n.h2,{id:"peer-connections",children:"Peer Connections"}),"\n",(0,r.jsxs)(n.p,{children:["Charon clients can establish connections with one another in two ways: either through a third publicly accessible server known as ",(0,r.jsx)(n.a,{href:"/next/learn/charon/charon-cli-reference#host-a-relay",children:"a relay"})," or directly with one another if they can establish a connection. The former is known as a relay connection and the latter is known as a direct connection."]}),"\n",(0,r.jsxs)(n.p,{children:["It is important that all nodes in a cluster be directly connected to one another - this can halve the latency between them and reduces bandwidth constraints significantly. Opening Charon\u2019s p2p port (the default is ",(0,r.jsx)(n.code,{children:"3610"}),") to the Internet, or configuring your routers NAT gateway to permit connections to your Charon client, are what are required to facilitate a direct connection between clients."]}),"\n",(0,r.jsx)(n.h2,{id:"instance-independence",children:"Instance Independence"}),"\n",(0,r.jsx)(n.p,{children:"Each node in the cluster should have its own independent beacon node (EL+CL) and validator client as well as Charon client. Sharing beacon nodes between the different nodes would potentially impact the fault tolerance of the cluster and as a result should be avoided."}),"\n",(0,r.jsx)(n.h2,{id:"placement-of-charon-clients",children:"Placement of Charon clients"}),"\n",(0,r.jsxs)(n.p,{children:["If you wish to divide a Distributed Validator node across multiple physical or virtual machines; locate the Charon client on the EL/CL machine instead of the VC machine. This setup reduces latency from Charon to the consensus layer, as well as keeping the public-internet connected clients separate from the clients that hold the validator private keys. Be sure to use encrypted communication between your VC and the Charon client, potentially through a cloud-provided network, a self-managed network tunnel, a VPN, a Kubernetes ",(0,r.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/extend-kubernetes/compute-storage-net/network-plugins/",children:"CNI"}),", or other manner."]}),"\n",(0,r.jsx)(n.h2,{id:"node-configuration",children:"Node Configuration"}),"\n",(0,r.jsxs)(n.p,{children:["Cluster sizes that allow for Byzantine Fault Tolerance are recommended as they are safer than clusters with simply Crash Fault Tolerance (See this guide for reference - ",(0,r.jsx)(n.a,{href:"../../learn/charon/cluster-configuration#cluster-size-and-resilience",children:"Cluster Size and Resilience"}),")."]}),"\n",(0,r.jsx)(n.h2,{id:"mev-boost-relays",children:"MEV-Boost Relays"}),"\n",(0,r.jsxs)(n.p,{children:["MEV relays are configured at the Consensus Layer or MEV-boost client level. Refer to our ",(0,r.jsx)(n.a,{href:"/next/run/start/quickstart-builder-api",children:"guide"})," to ensure all necessary configuration has been applied to your clients. As with all validators, low latency during proposal opportunities is extremely important. By default, MEV-Boost waits for all configured relays to return a bid, or will timeout if any have not returned a bid within 950ms. This default timeout is generally too slow for a distributed cluster (think of this time as additive to the time it takes the cluster to come to consensus, both of which need to happen within a 2 second window for optimal proposal broadcasting). It is likely better to only list relays that are located geographically near your node, so that once all relays respond (e.g. in < 50ms) your cluster will move forward with the proposal."]}),"\n",(0,r.jsxs)(n.p,{children:["Use Charon's ",(0,r.jsxs)(n.a,{href:"/next/run/prepare/test-command#test-mev-relay",children:[(0,r.jsx)(n.code,{children:"test mev"})," command"]})," to test a number of your preferred relays, and select the two or three relays with the lowest latency to your node(s), you do not need to have the same relays on each node in a cluster."]}),"\n",(0,r.jsx)(n.h2,{id:"client-diversity",children:"Client Diversity"}),"\n",(0,r.jsx)(n.p,{children:"The clusters should consist of a combination of your preferred consensus, execution, and validator clients. It is recommended to include a combination of multiple clients in order to have a healthy client diversity within the cluster, ideally, if any single client type fails, it should be less than the fault tolerance of the cluster, and the validators should stay online/not do anything slashable."}),"\n",(0,r.jsx)(n.p,{children:"Remote signers can be included as well, such as Web3signer or Dirk. A diversity of private key infrastructure setups further reduces the risk of total key compromise."}),"\n",(0,r.jsxs)(n.p,{children:["Tested client combinations can be found in the ",(0,r.jsx)(n.a,{href:"https://github.com/ObolNetwork/charon/releases",children:"release notes"})," for each Charon version."]}),"\n",(0,r.jsx)(n.h2,{id:"metrics-monitoring",children:"Metrics Monitoring"}),"\n",(0,r.jsxs)(n.p,{children:["As requested by Obol Labs, node operators can push ",(0,r.jsx)(n.a,{href:"/next/run/start/obol-monitoring",children:"standard monitoring"})," (Prometheus) and logging (Loki) data to Obol Labs' core team's cloud infrastructure for in-depth analysis of performance data and to assist during potential issues that may arise. Our recommendation for operators is to independently store information on their node health over the course of the validator lifecycle as well as any information on validator performance that they collect during the normal life cycle of a validator."]}),"\n",(0,r.jsx)(n.h2,{id:"obol-splits",children:"Obol Splits"}),"\n",(0,r.jsxs)(n.p,{children:["Leveraging ",(0,r.jsx)(n.a,{href:"/next/learn/intro/obol-splits",children:"Obol Splits"})," smart contracts allows for non-custodial fund handling and allows for net customer payouts in an ongoing manner. Obol Splits ensure no commingling of funds across customers, and maintain full non-custodial integrity. Read more about Obol Splits ",(0,r.jsx)(n.a,{href:"/next/learn/intro/faq#obol-splits",children:"here"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"deposit-process",children:"Deposit Process"}),"\n",(0,r.jsx)(n.p,{children:"Deposit processes can be done via an automated script. This can be used for DV clusters until they reach the desired number of validators."}),"\n",(0,r.jsx)(n.p,{children:"It is important to allow time for the validators to be activated (usually < 24 hours)."}),"\n",(0,r.jsx)(n.p,{children:"Consider using batching smart contracts to reduce the gas cost of a script, but take caution in their integration not to make an invalid deposit."})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var i=t(96540);const r={},s=i.createContext(r);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);