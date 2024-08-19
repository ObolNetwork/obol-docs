"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[50428],{73481:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var o=i(74848),n=i(28453);const s={sidebar_position:6,description:"Threat model for a Distributed Validator"},a="Charon threat model",r={id:"sec/threat_model",title:"Charon threat model",description:"Threat model for a Distributed Validator",source:"@site/versioned_docs/version-v0.17.1/sec/threat_model.md",sourceDirName:"sec",slug:"/sec/threat_model",permalink:"/docs/v0.17.1/sec/threat_model",draft:!1,unlisted:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.17.1/sec/threat_model.md",tags:[],version:"v0.17.1",sidebarPosition:6,frontMatter:{sidebar_position:6,description:"Threat model for a Distributed Validator"},sidebar:"tutorialSidebar",previous:{title:"Smart Contract Audit",permalink:"/docs/v0.17.1/sec/smart_contract_audit"},next:{title:"Filing a bug report",permalink:"/docs/v0.17.1/cg/bug-report"}},l={},d=[{value:"Actors",id:"actors",level:2},{value:"General observations",id:"general-observations",level:2},{value:"Identity private key",id:"identity-private-key",level:2},{value:"Ethereum validator private key access",id:"ethereum-validator-private-key-access",level:2},{value:"Rogue node operator",id:"rogue-node-operator",level:2},{value:"Outside attackers interfering with a cluster",id:"outside-attackers-interfering-with-a-cluster",level:2},{value:"Malicious beacon nodes",id:"malicious-beacon-nodes",level:2},{value:"Malicious charon relays",id:"malicious-charon-relays",level:2},{value:"Compromised runtime files",id:"compromised-runtime-files",level:2},{value:"Conclusions",id:"conclusions",level:2}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",ul:"ul",...(0,n.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"charon-threat-model",children:"Charon threat model"})}),"\n",(0,o.jsx)(t.p,{children:"This page outlines a threat model for Charon, in the context of it being a Distributed Validator middleware for Ethereum validator clients."}),"\n",(0,o.jsx)(t.h2,{id:"actors",children:"Actors"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Node owner (NO)"}),"\n",(0,o.jsx)(t.li,{children:"Cluster node operators (CNO)"}),"\n",(0,o.jsx)(t.li,{children:"Rogue node operator (RNO)"}),"\n",(0,o.jsx)(t.li,{children:"Outside attacker (OA)"}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"general-observations",children:"General observations"}),"\n",(0,o.jsx)(t.p,{children:"This page describes some considerations the Obol core team made about the security of a distributed validator in the context of its deployment and interaction with outside actors."}),"\n",(0,o.jsx)(t.p,{children:"The goal of this threat model is to provide transparency, but it is by no means a comprehensive audit or complete security reference. It\u2019s a sharing of the experiences and thoughts we gained during the last few years building distributed validator technologies."}),"\n",(0,o.jsx)(t.p,{children:"While to the Beacon Chain, a distributed validator is seen in much the same way as a regular validator, and thus retains some of the same security considerations, Charon\u2019s threat model is different from a validator client\u2019s threat model because of its general design."}),"\n",(0,o.jsx)(t.p,{children:"While a validator client owns and operates on a set of validator private keys, the design of Charon allows its node operators to rarely (if ever) see the complete validator private keys, relying instead on modern cryptography to generate partial private key shares."}),"\n",(0,o.jsxs)(t.p,{children:["An Ethereum distributed validator employs advanced signature primitives such that no operator ever handles the full validator private key in any standard lifecycle step: the ",(0,o.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/BLS_digital_signature",children:"BLS digital signature scheme"})," employed by the Ethereum network allows distributed validators to individually sign a blob of data and then aggregate the resulting signatures in a transparent manner, never requiring any of the participating parties to know the full private key to do so."]}),"\n",(0,o.jsx)(t.p,{children:"If the subset of the available Charon nodes is lower than a given threshold, the cluster is not able to continue with its duties."}),"\n",(0,o.jsx)(t.p,{children:"Given the collaborative nature of a Distributed Validator cluster, every operator must prioritize the liveliness and well-being of the cluster. Charon, at the moment of writing this page cannot reward and penalize operators within a cluster independently."}),"\n",(0,o.jsx)(t.p,{children:"This implies that Charon\u2019s threat model can\u2019t quite be equated to that of a single validator client, since they work on a different - albeit similar - set of security concepts."}),"\n",(0,o.jsx)(t.h2,{id:"identity-private-key",children:"Identity private key"}),"\n",(0,o.jsx)(t.p,{children:"A distributed validator cluster is made up of a number of nodes, often run by a number of independent operators. For each DV cluster there\u2019s a set of Ethereum validator private keys on which they want to validate on behalf of."}),"\n",(0,o.jsx)(t.p,{children:"Alongside those, each node (henceforth \u2018operator\u2019) holds an SECP256K1 identity private key, referred to as an ENR, that identifies their node to the other cluster operators\u2019 nodes."}),"\n",(0,o.jsx)(t.p,{children:"Exfiltration of said private key could lead to possible impersonation from an outside attacker, possibly leading to intra-cluster peering issues, eclipse attack risks, and degraded validator performance."}),"\n",(0,o.jsx)(t.p,{children:"Charon client communication is handled via BFT consensus, which is able to tolerate a given number of misbehaving nodes up to a certain threshold: once this threshold is reached, the cluster is not able to continue with its lifecycle and loses liveness guarantees (the validator goes offline). If more than two-thirds of nodes in a cluster are malicious, a cluster also loses safety guarantees (enough bad actors could collude to come to consensus on something slashable)."}),"\n",(0,o.jsx)(t.p,{children:"Identity private key theft and the subsequent execution of a rogue cluster node is equivalent in the context of BFT consensus to a misbehaving node, hence the cluster can survive and continue with its duties up to what\u2019s specified by the cluster\u2019s BFT protocol\u2019s parameters."}),"\n",(0,o.jsxs)(t.p,{children:["The likelihood of this happening is low: an OA with enough knowledge of the topology of the operator\u2019s network must steal ",(0,o.jsx)(t.code,{children:"fault tolerance of the cluster + 1"})," identity private keys and run Charon nodes to subvert the distributed validator BFT consensus to push the validator offline."]}),"\n",(0,o.jsx)(t.h2,{id:"ethereum-validator-private-key-access",children:"Ethereum validator private key access"}),"\n",(0,o.jsx)(t.p,{children:"A distributed validator cluster executes Ethereum validator duties by acting as a middleman between the beacon chain and a validator client."}),"\n",(0,o.jsx)(t.p,{children:"To do so, the cluster must have knowledge of the Ethereum validator\u2019s private key."}),"\n",(0,o.jsxs)(t.p,{children:["The design and implementation of Charon minimizes the chances of this by splitting the Ethereum validator private keys into parts, which are then assigned to each node operator.\nA ",(0,o.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Distributed_key_generation",children:"distributed key generation"})," (DKG) process is used in order to evenly and safely create the private key shares without any central party having access to the full private key."]}),"\n",(0,o.jsx)(t.p,{children:"The cryptography primitives employed in Charon can allow a threshold of the node operator\u2019s private key shares to be reconstructed into the whole validator private key if needed."}),"\n",(0,o.jsx)(t.p,{children:"While the facilities to do this are present in the form of CLI commands, as stated before Charon never reconstructs the key in normal operations since BLS digital signature system allows for signature aggregation."}),"\n",(0,o.jsx)(t.p,{children:"A distributed validator cluster can be started in two ways:"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:"An existing Ethereum validator private key is split by the private key holder, and distributed in a trusted manner among the operators."}),"\n",(0,o.jsx)(t.li,{children:"The operators participate in a distributed key generation (DKG) process, to create private key shares that collectively can be used to sign validation duties as an Ethereum distributed validator. The full private key for the cluster never exists in one place during or after the DKG."}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"In case 1, one of the node operators K has direct access to the Ethereum validator key and is tasked with the generation of other operator\u2019s identity keys and key shards."}),"\n",(0,o.jsx)(t.p,{children:"It is clear that in this case the entirety of the sensitive material set is as secure as K\u2019s environment; if K is compromised or malicious, the distributed validator could be slashed."}),"\n",(0,o.jsx)(t.p,{children:"Case 2 is different, because there\u2019s no pre-existing Ethereum validator key in a single operator's hands: it will be generated using the FROST DKG algorithm."}),"\n",(0,o.jsx)(t.p,{children:"Assuming a successful DKG process, each operator will only ever handle its own key shares instead of the full Ethereum validator private key."}),"\n",(0,o.jsx)(t.p,{children:"A set of rogue operators composed of enough members to reconstruct the original Ethereum private keys might pose the risk of slashing for a distributed validator by colluding to produce slashable messages together."}),"\n",(0,o.jsx)(t.p,{children:"We deem this scenario\u2019s likelihood as low, as it would mean that node operators decided to willfully slash the stake that they should be being rewarded for staking."}),"\n",(0,o.jsx)(t.p,{children:"Still, in the context of an outside attack, purposefully slashing a validator would mean stealing multiple operator key shares, which in turn means violating many cluster operator\u2019s security almost at the same time. This scenario may occur if there is a 0-day vulnerability in a piece of software they all run or in case of node misconfiguration."}),"\n",(0,o.jsx)(t.h2,{id:"rogue-node-operator",children:"Rogue node operator"}),"\n",(0,o.jsx)(t.p,{children:"Nodes are connected by means of either relay nodes, or directly to one another."}),"\n",(0,o.jsx)(t.p,{children:"Each node operator is at risk of being impeded by other nodes or by the relay operator in the execution of their duties."}),"\n",(0,o.jsx)(t.p,{children:"Nodes need to expose a set of TCP ports to be able to work, and the mere fact of doing that opens up the opportunity for rogue parties to execute DDoS attacks."}),"\n",(0,o.jsx)(t.p,{children:"Another attack surface for the cluster exists in rogue nodes purposefully filling the various inter-state databases with meaningless data, or more generally submitting bogus information to the other parties to slow down the processing or, in the case of a sybil attack, bring the cluster to a halt."}),"\n",(0,o.jsx)(t.p,{children:"The likelihood of this scenario is medium, because there\u2019s no active threat hunting part: there\u2019s no need for the rogue node operator to penetrate and compromise other nodes to disturb the cluster\u2019s lifecycle."}),"\n",(0,o.jsx)(t.h2,{id:"outside-attackers-interfering-with-a-cluster",children:"Outside attackers interfering with a cluster"}),"\n",(0,o.jsx)(t.p,{children:"There are two levels of sophistication in an OA:"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:"No knowledge of the topology of the cluster: The attacker doesn\u2019t know where each cluster node is located and so can\u2019t force fault tolerance +1 nodes offline if it can\u2019t find them."}),"\n",(0,o.jsx)(t.li,{children:"Knowledge of the topology of the network (or part of it) is possessed: the OA can operate DDoS attacks or try breaking into node\u2019s servers - at that point, the \u201crogue node operator\u201d scenario applies."}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"The likelihood of this scenario is low: an OA needs extensive capabilities and sufficient incentive to be able to carry out an attack of this size."}),"\n",(0,o.jsx)(t.p,{children:"An outside attacker could also find and use vulnerabilities in the underlying cryptosystems and cryptography libraries used by Charon and other Ethereum clients. Forging signatures that fool Charon\u2019s cryptographic library or other dependencies may be feasible, but forging signatures or otherwise finding a vulnerability in either the SECP256K1+ECDSA or BLS12-381+BLS cryptosystems we deem to be a low likelihood risk."}),"\n",(0,o.jsx)(t.h2,{id:"malicious-beacon-nodes",children:"Malicious beacon nodes"}),"\n",(0,o.jsx)(t.p,{children:"A malicious beacon node (BN) could prevent the distributed validator from operating its validation duties, and could plausibly increase the likelihood of slashing by serving charon illegitimate information."}),"\n",(0,o.jsx)(t.p,{children:"If the amount of nodes configured with the malicious BN are equal to the byzantine threshold for the Charon BFT consensus protocol, the validation process can potentially halt since the BFT parameter threshold is reached - most of the nodes are byzantine - the system will reach consensus on a set of data that isn\u2019t valid."}),"\n",(0,o.jsx)(t.p,{children:"We deem the likelihood of this scenario to be medium depending on the trust model associated with the BNs deployment (cloud, self-hosted, SaaS product): node operators should always host or at least trust their own beacon nodes."}),"\n",(0,o.jsx)(t.h2,{id:"malicious-charon-relays",children:"Malicious charon relays"}),"\n",(0,o.jsx)(t.p,{children:"A Charon relay is used as a communication bridge between nodes that aren\u2019t directly exposed on the Internet. It also acts as the peer discovery mechanism for a cluster."}),"\n",(0,o.jsx)(t.p,{children:"Once a peer\u2019s IP address has been discovered via the relay, a direct connection can be attempted. Nodes can either communicate by exchanging data through a relay, or by using the relay as a means to establish a direct TCP connection to one another."}),"\n",(0,o.jsx)(t.p,{children:"A malicious relay owned by a OA could lead to:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Network topology discovery, facilitating the \u201coutside attackers interactions with a cluster\u201d scenario"}),"\n",(0,o.jsx)(t.li,{children:"Impeding node communication, potentially impacting the BFT consensus protocol liveness (not security) and distributed validator duties"}),"\n",(0,o.jsx)(t.li,{children:"DKG process disruption leading to frustration and potential abandonment by node operators: could lead to the usage of a standard Ethereum validator setup, which implies weaker security overall"}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"We note that BFT consensus liveness disruption can only happen if the number of nodes using the malicious relay for communication is equal to the byzantine nodes amount defined in the consensus parameters."}),"\n",(0,o.jsxs)(t.p,{children:["This risk can be mitigated by configuring nodes with multiple relay URLs from only ",(0,o.jsx)(t.a,{href:"/docs/v0.17.1/int/quickstart/advanced/self-relay",children:"trusted entities"}),"."]}),"\n",(0,o.jsx)(t.p,{children:"The likelihood of this scenario is medium: Charon nodes are configured with a default set of relay nodes, so if an OA were to compromise those, it would lead to many cluster topologies getting discovered and potentially attacked and disrupted."}),"\n",(0,o.jsx)(t.h2,{id:"compromised-runtime-files",children:"Compromised runtime files"}),"\n",(0,o.jsx)(t.p,{children:"Charon operates with two runtime files:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"A lock file used to address operator\u2019s nodes, define the Ethereum validator public keys and the public key shares associated with it"}),"\n",(0,o.jsx)(t.li,{children:"A cluster definition file used to define the operator\u2019s addresses and identities during the DKG process"}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"The lock file is signed and validated by all the nodes participating in the cluster: assuming good security practices on the node operator side, and no bugs in Charon or its dependencies\u2019 implementations, this scenario is unlikely."}),"\n",(0,o.jsxs)(t.p,{children:["If one or more node operators are using less than ideal security practices an OA could rewire the Charon CLI flags to include the ",(0,o.jsx)(t.code,{children:"--no-verify"})," flags, which disables lock file signature and hash verification (usually intended only for development purposes)."]}),"\n",(0,o.jsx)(t.p,{children:"By doing that, the OA can edit the lock file as it sees fit, leading to the \u201crogue node operator\u201d scenario. An OA or RNO might also manage to social engineer their way into convincing other operators into running their malicious lock file with verification disabled."}),"\n",(0,o.jsxs)(t.p,{children:["The likelihood of this scenario is low: an OA would need to compromise every node operator through social engineering to both use a different set of files, and to run its cluster with ",(0,o.jsx)(t.code,{children:"--no-verify"}),"."]}),"\n",(0,o.jsx)(t.h2,{id:"conclusions",children:"Conclusions"}),"\n",(0,o.jsx)(t.p,{children:"Distributed Validator Technology (DVT) helps maintain a high-assurance environment for Ethereum validators by leveraging modern cryptography to ensure no single point of failure is easily found in the system."}),"\n",(0,o.jsx)(t.p,{children:"As with any computing system, security considerations are to be expected in order to keep the environment safe."}),"\n",(0,o.jsx)(t.p,{children:"From the point of view of an Ethereum validator entity, running their services with a DV client can help greatly with availability, minimizing slashing risks, and maximizing participation in the network."}),"\n",(0,o.jsx)(t.p,{children:"On the other hand, one must take into consideration the risks involved with dishonest cluster operators, as well as rogue third-party beacon nodes or relay providers."}),"\n",(0,o.jsx)(t.p,{children:"In the end, we believe the benefits of DVT greatly outweigh the potential threats described in this overview."})]})}function c(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>a,x:()=>r});var o=i(96540);const n={},s=o.createContext(n);function a(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);