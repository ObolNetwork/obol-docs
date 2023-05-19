"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[48849],{3905:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>f});var a=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var l=a.createContext({}),d=function(e){var t=a.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=d(i),u=n,f=h["".concat(l,".").concat(u)]||h[u]||p[u]||r;return i?a.createElement(f,o(o({ref:t},c),{},{components:i})):a.createElement(f,o({ref:t},c))}));function f(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=i.length,o=new Array(r);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:n,o[1]=s;for(var d=2;d<r;d++)o[d]=i[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,i)}u.displayName="MDXCreateElement"},95059:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var a=i(87462),n=(i(67294),i(3905));const r={Description:"Generating private keys for a Distributed Validator requires a Distributed Key Generation (DKG) Ceremony."},o="Distributed Validator Key Generation",s={unversionedId:"dvk/distributed-validator-keys",id:"version-v0.7.0/dvk/distributed-validator-keys",title:"Distributed Validator Key Generation",description:"Contents",source:"@site/versioned_docs/version-v0.7.0/dvk/01_distributed-validator-keys.md",sourceDirName:"dvk",slug:"/dvk/distributed-validator-keys",permalink:"/docs/v0.7.0/dvk/distributed-validator-keys",draft:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.7.0/dvk/01_distributed-validator-keys.md",tags:[],version:"v0.7.0",sidebarPosition:1,frontMatter:{Description:"Generating private keys for a Distributed Validator requires a Distributed Key Generation (DKG) Ceremony."},sidebar:"tutorialSidebar",previous:{title:"Charon CLI reference",permalink:"/docs/v0.7.0/dv/charon_cli_reference"},next:{title:"Distributed Validator launchpad",permalink:"/docs/v0.7.0/dvk/distributed_validator_launchpad"}},l={},d=[{value:"Contents",id:"contents",level:2},{value:"Overview",id:"overview",level:2},{value:"Actors Involved",id:"actors-involved",level:2},{value:"Cluster Definition Creation",id:"cluster-definition-creation",level:2},{value:"Carrying out the DKG ceremony",id:"carrying-out-the-dkg-ceremony",level:2},{value:"Backing up the ceremony artifacts",id:"backing-up-the-ceremony-artifacts",level:2},{value:"Preparing for validator activation",id:"preparing-for-validator-activation",level:2},{value:"DKG Verification",id:"dkg-verification",level:2},{value:"Appendix",id:"appendix",level:2},{value:"Using DKG without the launchpad",id:"using-dkg-without-the-launchpad",level:3},{value:"Sample Configuration and Lock Files",id:"sample-configuration-and-lock-files",level:3}],c={toc:d};function h(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"distributed-validator-key-generation"},"Distributed Validator Key Generation"),(0,n.kt)("h2",{id:"contents"},"Contents"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#overview"},"Overview")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#actors-involved"},"Actors involved")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#cluster-definition-creation"},"Cluster Definition creation")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#carrying-out-the-dkg-ceremony"},"Carrying out the DKG ceremony")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#backing-up-the-ceremony-artifacts"},"Backing up ceremony artifacts")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#preparing-for-validator-activation"},"Preparing for validator activation")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#dkg-verification"},"DKG verification")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#appendix"},"Appendix"))),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"A distributed validator key is a group of BLS private keys that together operate as a threshold key for participating in proof-of-stake consensus."),(0,n.kt)("p",null,"To make a distributed validator with no fault-tolerance (i.e. all nodes need to be online to sign every message), due to the BLS signature scheme used by Proof of Stake Ethereum, each key share could be chosen by operators independently. However, to create a distributed validator that can stay online despite a subset of its nodes going offline, the key shares need to be generated together. (4 randomly chosen points on a graph don't all neccessarily sit on the same order three curve.) To do this in a secure manner with no one party being trusted to distribute the keys requires what is known as a distributed key generation ceremony."),(0,n.kt)("p",null,"The charon client has the responsibility of securely completing a distributed key generation ceremony with its counterparty nodes. The ceremony configuration is outlined in a ",(0,n.kt)("a",{parentName:"p",href:"https://docs.obol.tech/docs/dv/distributed-validator-cluster-manifest"},"cluster definition"),"."),(0,n.kt)("h2",{id:"actors-involved"},"Actors Involved"),(0,n.kt)("p",null,"A distributed key generation ceremony involves ",(0,n.kt)("inlineCode",{parentName:"p"},"Operators")," and their ",(0,n.kt)("inlineCode",{parentName:"p"},"Charon clients"),"."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"An ",(0,n.kt)("inlineCode",{parentName:"p"},"Operator")," is identified by their Ethereum address. They will sign with this address's private key to authenticate their charon client ahead of the ceremony. The signature will be of; a hash of the charon clients ENR public key, the ",(0,n.kt)("inlineCode",{parentName:"p"},"cluster_definition_hash"),", and an incrementing ",(0,n.kt)("inlineCode",{parentName:"p"},"nonce"),", allowing for a direct linkage between a user, their charon client, and the cluster this client is intended to service, while retaining the ability to update the charon client by incrementing the nonce value and re-signing like the standard ENR spec.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"A ",(0,n.kt)("inlineCode",{parentName:"p"},"Charon client")," is also identified by a public/private key pair, in this instance, the public key is represented as an ",(0,n.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-778"},"Ethereum Node Record")," (ENR). This is a standard identity format for both EL and CL clients. These ENRs are used by each charon node to identify its cluster peers over the internet, and to communicate with one another in an ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/libp2p/go-libp2p-noise"},"end to end encrypted manner"),". These keys need to be created by each operator before they can participate in a cluster creation."))),(0,n.kt)("h2",{id:"cluster-definition-creation"},"Cluster Definition Creation"),(0,n.kt)("p",null,"This definition file is created with the help of the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.obol.tech/docs/dvk/distributed_validator_launchpad"},"Distributed Validator Launchpad"),". The creation process involves a number of steps."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A ",(0,n.kt)("inlineCode",{parentName:"li"},"leader"),' Operator, that wishes to co-ordinate the creation of a new Distributed Validator Cluster navigates to the launch pad and selects "Create new Cluster"'),(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("inlineCode",{parentName:"li"},"leader")," uses the user interface to configure all of the important details about the cluster including:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("inlineCode",{parentName:"li"},"withdrawal address")," for the created validators"),(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("inlineCode",{parentName:"li"},"feeRecipient")," for block proposals if it differs from the withdrawal address"),(0,n.kt)("li",{parentName:"ul"},"The number of distributed validators to create"),(0,n.kt)("li",{parentName:"ul"},"The list of participants in the cluster specified by Ethereum address(/ENS)"),(0,n.kt)("li",{parentName:"ul"},"The threshold of fault tolerance required (if not choosing the safe default)"),(0,n.kt)("li",{parentName:"ul"},"The network (fork_version/chainId) that this cluster will validate on"))),(0,n.kt)("li",{parentName:"ul"},"These key pieces of information form the basis of the cluster configuration. These fields (and some technical fields like DKG algorithm to use) are serialised and merklised to produce the definition's ",(0,n.kt)("inlineCode",{parentName:"li"},"cluster_definition_hash"),". This merkle root will be used to confirm that their is no ambiguity or deviation between definitions when they are provided to charon nodes."),(0,n.kt)("li",{parentName:"ul"},"Once the leader is satisfied with the configuration they publish it to the launchpad's data availability layer for the other participants to access. (For early development the launchpad will use a centralised backend db to store the cluster configuration. Near production, solutions like IPFS or arweave may be more suitable for the long term decentralisation of the launchpad.)"),(0,n.kt)("li",{parentName:"ul"},"The leader will then share the URL to this ceremony with their intended participants."),(0,n.kt)("li",{parentName:"ul"},"Anyone that clicks the ceremony url, or inputs the ",(0,n.kt)("inlineCode",{parentName:"li"},"cluster_definition_hash")," when prompted on the landing page will be brought to the ceremony status page. (After completing all disclaimers and advisories)"),(0,n.kt)("li",{parentName:"ul"},'A "Connect Wallet" button will be visible beneath the ceremony status container, a participant can click on it to connect their wallet to the site',(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"If the participant connects a wallet that is not in the participant list, the button disables, as there is nothing to do"),(0,n.kt)("li",{parentName:"ul"},"If the participant connects a wallet that is in the participant list, they get prompted to input the ENR of their charon node."),(0,n.kt)("li",{parentName:"ul"},'If the ENR field is populated and validated the participant can now see a "Confirm Cluster Configuration" button. This button triggers one/two signatures.',(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"The participant signs the ",(0,n.kt)("inlineCode",{parentName:"li"},"cluster_definition_hash"),", to prove they are consensting to this exact configuration."),(0,n.kt)("li",{parentName:"ul"},"The participant signs their charon node's ENR, to authenticate and authorise that specific charon node to participate on their behalf in the distributed validator cluster."))),(0,n.kt)("li",{parentName:"ul"},"These/this signature is sent to the data availability layer, where it verifies the signatures are correct for the given participants ethereum address. If the signatures pass validation, the signature of the definition hash and the the ENR + signature get saved to the definition object."))),(0,n.kt)("li",{parentName:"ul"},"All participants in the list must sign the definition hash and submit a signed ENR before a DKG ceremony can begin. The outstanding signatures can be easily displayed on the status page."),(0,n.kt)("li",{parentName:"ul"},"Finally, once all participants have signed their approval, and submitted a charon node ENR to act on their behalf, the definition data can be downloaded as a file if the users click a newly displayed button, ",(0,n.kt)("inlineCode",{parentName:"li"},"Download Manifest"),"."),(0,n.kt)("li",{parentName:"ul"},"At this point each participant must load this definition into their charon client, and the client will attempt to complete the DKG.")),(0,n.kt)("h2",{id:"carrying-out-the-dkg-ceremony"},"Carrying out the DKG ceremony"),(0,n.kt)("p",null,"Once participant has their definition file prepared, they will pass the file to charon's ",(0,n.kt)("inlineCode",{parentName:"p"},"dkg")," command. Charon will read the ENRs in the definition, confirm that its ENR is present, and then will reach out to bootnodes that are deployed to find the other ENRs on the network. (Fresh ENRs just have a public key and an IP address of 0.0.0.0 until they are loaded into a live charon client, which will update the IP address and increment the ENRs nonce and resign with the clients private key. If an ENR with a higher nonce is seen be a charon client, they will update the IP address of that ENR in their address book.)"),(0,n.kt)("p",null,"Once all clients in the cluster can establish a connection with one another and they each complete a handshake (confirm everyone has a matching ",(0,n.kt)("inlineCode",{parentName:"p"},"cluster_definition_hash"),"), the ceremony begins."),(0,n.kt)("p",null,"No user input is required, charon does the work and outputs the following files to each machine and then exits."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"# Common data\n.cluster-definition.json          # The original definition file from the DV Launchpad or `charon create dkg`\n.cluster-lock.json                # New lockfile based on cluster-definition.json with validator group public keys and threshold BLS verifiers included with the initial cluster config\n.charon/deposit-data.json         # JSON file of deposit data for the distributed validators\n\n# Sensitive operator-specific data\n.charon/charon-enr-private-key    # Created before the ceremony took place [Back this up]\n.charon/validator_keys/           # Folder of key shares to be backed up and moved to validator client [Back this up]\n")),(0,n.kt)("h2",{id:"backing-up-the-ceremony-artifacts"},"Backing up the ceremony artifacts"),(0,n.kt)("p",null,"Once the ceremony is complete, all participants should take a backup of the created files. In future versions of charon, if a participant loses access to these key shares, it will be possible to use a key re-sharing protocol to swap the participants old keys out of a distributed validator in favour of new keys, allowing the rest of a cluster to recover from a set of lost key shares. However for now, without a backup, the safest thing to do would be to exit the validator."),(0,n.kt)("h2",{id:"preparing-for-validator-activation"},"Preparing for validator activation"),(0,n.kt)("p",null,"Once the ceremony is complete, and secure backups of key shares have been made by each operator. They must now load these key shares into their validator clients, and run the ",(0,n.kt)("inlineCode",{parentName:"p"},"charon run")," command to turn it into operational mode."),(0,n.kt)("p",null,"All operators should confirm that their charon client logs indicate all nodes are online and connected. They should also verify the readiness of their beacon clients and validator clients. Charon's grafana dashboard is a good way to see the readiness of the full cluster from its perspective."),(0,n.kt)("p",null,"Once all operators are satisfied with network connectivity, one member can use the Obol Distributed Validator deposit flow to send the required ether and deposit data to the deposit contract, beginning the process of a distributed validator activation. Good luck."),(0,n.kt)("h2",{id:"dkg-verification"},"DKG Verification"),(0,n.kt)("p",null,"For many use cases of distributed validators, the funder/depositor of the validator may not be the same person as the key creators/node operators, as (outside of the base protocol) stake delegation is a common phenomenon. This handover of information introduces a point of trust. How does someone verify that a proposed validator ",(0,n.kt)("inlineCode",{parentName:"p"},"deposit data")," corresponds to a real, fair, DKG with participants the depositor expects?"),(0,n.kt)("p",null,'There are a number of aspects to this trust surface that can be mitigated with a "Don\'t trust, verify" model. Verification for the time being is easier off chain, until things like a ',(0,n.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-2537"},"BLS precompile")," are brought into the EVM, along with cheap ZKP verification on chain. Some of the questions that can be asked of Distributed Validator Key Generation Ceremonies include:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Do the public key shares combine together to form the group public key?",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"This can be checked on chain as it doe not require a pairing operation"),(0,n.kt)("li",{parentName:"ul"},"This can give confidence that a BLS pubkey represents a Distributed Validator, but does not say anything about the custody of the keys. (e.g. Was the ceremony sybil attacked, did they collude to reconstitute the group private key etc.)"))),(0,n.kt)("li",{parentName:"ul"},"Do the created BLS public keys attest to their ",(0,n.kt)("inlineCode",{parentName:"li"},"cluster_definition_hash"),"?",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"This is to create a backwards link between newly created BLS public keys and the operator's eth1 addresses that took part in their creation."),(0,n.kt)("li",{parentName:"ul"},"If a proposed distributed validator BLS group public key can produce a signature of the ",(0,n.kt)("inlineCode",{parentName:"li"},"cluster_definition_hash"),", it can be inferred that at least a threshold of the operators signed this data."),(0,n.kt)("li",{parentName:"ul"},"As the ",(0,n.kt)("inlineCode",{parentName:"li"},"cluster_definition_hash")," is the same for all distributed validators created in the ceremony, the signatures can be aggregated into a group signature that verifies all created group keys at once. This makes it cheaper to verify a number of validators at once on chain."))),(0,n.kt)("li",{parentName:"ul"},"Is there either a VSS or PVSS proof of a fair DKG ceremony?",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"VSS (Verifiable Secret Sharing) means only operators can verify fairness, as the proof requires knowledge of one of the secrets."),(0,n.kt)("li",{parentName:"ul"},"PVSS (Publicly Verifiable Secret Sharing) means anyone can verify fairness, as the proof is usually a Zero Knowledge Proof."),(0,n.kt)("li",{parentName:"ul"},"A PVSS of a fair DKG would make it more difficult for operators to collude and undermine the security of the Distributed Validator."),(0,n.kt)("li",{parentName:"ul"},"Zero Knowledge Proof verification on chain is currently expensive, but is becoming achievable through the hard work and research of the many ZK based teams in the industry.")))),(0,n.kt)("h2",{id:"appendix"},"Appendix"),(0,n.kt)("h3",{id:"using-dkg-without-the-launchpad"},"Using DKG without the launchpad"),(0,n.kt)("p",null,"Charon clients can do a DKG with a definition file that does not contain operator signatures if you pass a ",(0,n.kt)("inlineCode",{parentName:"p"},"--no-verify")," flag to ",(0,n.kt)("inlineCode",{parentName:"p"},"charon dkg"),". This can be used for testing purposes when strict signature verification is not of the utmost importance."),(0,n.kt)("h3",{id:"sample-configuration-and-lock-files"},"Sample Configuration and Lock Files"),(0,n.kt)("p",null,"Refer to the details ",(0,n.kt)("a",{parentName:"p",href:"/docs/v0.7.0/dv/distributed-validator-cluster-manifest#cluster-configuration-files"},"here"),"."))}h.isMDXComponent=!0}}]);