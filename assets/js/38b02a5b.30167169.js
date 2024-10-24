"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[3406],{78151:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>d,toc:()=>c});var s=n(74848),r=n(28453);const a={sidebar_position:5,description:"Setup and run a DV within the Lido Community Staking Module"},i="Create a Lido CSM DV",d={id:"advanced/lido_csm",title:"Create a Lido CSM DV",description:"Setup and run a DV within the Lido Community Staking Module",source:"@site/docs/advanced/lido_csm.md",sourceDirName:"advanced",slug:"/advanced/lido_csm",permalink:"/docs/next/advanced/lido_csm",draft:!1,unlisted:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/docs/advanced/lido_csm.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,description:"Setup and run a DV within the Lido Community Staking Module"},sidebar:"tutorialSidebar",previous:{title:"Create an EigenLayer DV",permalink:"/docs/next/advanced/quickstart-eigenpod"},next:{title:"Test a Cluster",permalink:"/docs/next/advanced/test-command"}},o={},c=[{value:"Getting started",id:"getting-started",level:2},{value:"Part 1: Creating the Cluster SAFE + Splitter Contract",id:"part-1-creating-the-cluster-safe--splitter-contract",level:2},{value:"Deploy the SAFE",id:"deploy-the-safe",level:3},{value:"Deploy the Splitter Contract",id:"deploy-the-splitter-contract",level:3},{value:"Part 2: Use the DV Launchpad + CLI to create the cluster keys",id:"part-2-use-the-dv-launchpad--cli-to-create-the-cluster-keys",level:2},{value:"Step 1: Clone the repo",id:"step-1-clone-the-repo",level:3},{value:"Step 2: Create ENR and Backup your Private Key",id:"step-2-create-enr-and-backup-your-private-key",level:3},{value:"Back up the private key located in <code>.charon/charon-enr-private-key</code>",id:"back-up-the-private-key-located-in-charoncharon-enr-private-key",level:3},{value:"Step 3: Create the DV cluster configuration using the Launchpad",id:"step-3-create-the-dv-cluster-configuration-using-the-launchpad",level:3},{value:"Step 4: Distributed Key Generation (DKG)",id:"step-4-distributed-key-generation-dkg",level:3},{value:"Step 5: Create a <code>.env</code> file for Mainnet",id:"step-5-create-a-env-file-for-mainnet",level:3},{value:"Step 6: Starting the Node",id:"step-6-starting-the-node",level:3},{value:"Part 3: Upload the public keys and deposit to Lido CSM",id:"part-3-upload-the-public-keys-and-deposit-to-lido-csm",level:2}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"create-a-lido-csm-dv",children:"Create a Lido CSM DV"})}),"\n",(0,s.jsxs)(t.p,{children:["This is a guide on taking part in Lido's ",(0,s.jsx)(t.a,{href:"https://operatorportal.lido.fi/modules/community-staking-module",children:"Community Staking Module"})," (CSM) with a squad as part of a ",(0,s.jsx)(t.a,{href:"/docs/next/int/key-concepts#distributed-validator-cluster",children:"Distributed Validator Cluster"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"To start, this guide makes a couple assumptions:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["You're running a Linux distribution and you've installed ",(0,s.jsx)(t.a,{href:"https://git-scm.com/downloads",children:"Git"})," and ",(0,s.jsx)(t.a,{href:"https://docs.docker.com/engine/install/",children:"Docker"})," (as a ",(0,s.jsx)(t.a,{href:"https://docs.docker.com/engine/install/linux-postinstall/#manage-docker-as-a-non-root-user",children:"non-root user"}),")."]}),"\n",(0,s.jsxs)(t.li,{children:["You will be deploying on Ethereum mainnet. Some screenshots in this guide are from Holesky just for demonstration purposes, so please verify you are using the correct ",(0,s.jsx)(t.a,{href:"https://operatorportal.lido.fi/modules/community-staking-module#block-d8e94f551b2e47029a54e6cedea914a7",children:"mainnet addresses"}),"."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"getting-started",children:"Getting started"}),"\n",(0,s.jsx)(t.p,{children:"This guide is broken down into 3 parts:"}),"\n",(0,s.jsxs)(t.p,{children:["Part 1: Creating a shared ",(0,s.jsx)(t.a,{href:"https://safe.global/",children:"SAFE"})," wallet for the cluster, and a ",(0,s.jsx)(t.a,{href:"https://splits.org",children:"Splits.org"})," reward splitting contract"]}),"\n",(0,s.jsxs)(t.p,{children:["Part 2: Using the ",(0,s.jsx)(t.a,{href:"https://launchpad.obol.org/",children:"Obol DV Launchpad"})," + CLI to create the cluster"]}),"\n",(0,s.jsx)(t.p,{children:"Part 3: Deploying the validator to Lido's CSM using their UI."}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsxs)(t.p,{children:["In this guide we'll be using CSM UI in advanced mode, using the ",(0,s.jsx)(t.code,{children:"extendedManagerPermissions"})," to set the ",(0,s.jsx)(t.code,{children:"managerAddress"})," to the cluster multi-sig (SAFE) and the ",(0,s.jsx)(t.code,{children:"rewardAddress"})," to the Splits.org splitting contract."]})}),"\n",(0,s.jsx)(t.h2,{id:"part-1-creating-the-cluster-safe--splitter-contract",children:"Part 1: Creating the Cluster SAFE + Splitter Contract"}),"\n",(0,s.jsx)(t.h3,{id:"deploy-the-safe",children:"Deploy the SAFE"}),"\n",(0,s.jsxs)(t.p,{children:["Detailed instructions on how to create a SAFE Wallet can be found ",(0,s.jsx)(t.a,{href:"https://help.safe.global/en/articles/40868-creating-a-safe-on-a-web-browser",children:"here"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"The squad leader should obtain signing addresses for all the cluster members, to create a new SAFE with the operators all as owners."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"SAFE UI Login Screen",src:n(23976).A+"",width:"1920",height:"993"})}),"\n",(0,s.jsxs)(t.p,{children:["After giving the Safe a name and selecting the appropriate network, continue by clicking the ",(0,s.jsx)(t.strong,{children:"Next"})," button."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Create SAFE UI",src:n(60835).A+"",width:"1920",height:"993"})}),"\n",(0,s.jsxs)(t.p,{children:["Add all the signer addresses of the cluster members, select a threshold, and proceed to the final step by clicking the ",(0,s.jsx)(t.strong,{children:"Next"})," button."]}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsxs)(t.p,{children:["Don't require 100% of signers to approve transactions, in case someone loses access to their address. Using the same ",(0,s.jsx)(t.a,{href:"/docs/next/int/key-concepts#distributed-validator-threshold",children:"threshold"})," as your cluster will use is a reasonable starting point."]})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Setting SAFE Threshold",src:n(55610).A+"",width:"1920",height:"993"})}),"\n",(0,s.jsxs)(t.p,{children:["Finally, submit the transaction to create the Safe by clicking on the ",(0,s.jsx)(t.strong,{children:"Create"})," button."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Creating the SAFE",src:n(13557).A+"",width:"1920",height:"993"})}),"\n",(0,s.jsx)(t.h3,{id:"deploy-the-splitter-contract",children:"Deploy the Splitter Contract"}),"\n",(0,s.jsxs)(t.p,{children:["The squad leader should obtain the reward addresses from all the cluster members (if members want to use a distinct address to the one they sign with for receiving rewards). Open ",(0,s.jsx)(t.a,{href:"https://app.splits.org",children:"https://app.splits.org"})," and create a ",(0,s.jsx)(t.code,{children:"New contract"}),". Make sure to select the appropriate network."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Choosing Network",src:n(30668).A+"",width:"1920",height:"945"})}),"\n",(0,s.jsxs)(t.p,{children:["Select ",(0,s.jsx)(t.code,{children:"Split"})," for the contract type."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Selecting Split Contract",src:n(99143).A+"",width:"1920",height:"945"})}),"\n",(0,s.jsxs)(t.p,{children:["Add the reward addresses of all cluster members. Choose whether the contract is immutable (reccommended option), whether to sponsor the maintainers of ",(0,s.jsx)(t.a,{href:"https://splits.org",children:"splits.org"}),", and optionally whether to set a distribution bounty such that third parties could pay the gas costs of distributing the accrued rewards in exchange for a small fee."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Adding recipients",src:n(27806).A+"",width:"1920",height:"945"})}),"\n",(0,s.jsxs)(t.p,{children:["Finally, click the ",(0,s.jsx)(t.strong,{children:"Create Split"})," button, execute the transaction and share the created split contract with all cluster members for review."]}),"\n",(0,s.jsx)(t.h2,{id:"part-2-use-the-dv-launchpad--cli-to-create-the-cluster-keys",children:"Part 2: Use the DV Launchpad + CLI to create the cluster keys"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"Charon"})," is the middleware client that enables validators to be run by a group of independent node operators - a cluster or squad. A complete multi-container ",(0,s.jsx)(t.code,{children:"Docker"})," setup including execution client, consensus client, validator client, MEV-Boost, the ",(0,s.jsx)(t.code,{children:"Charon"})," client and monitoring tools can be found in ",(0,s.jsx)(t.a,{href:"https://github.com/ObolNetwork/charon-distributed-validator-node",children:"this repository"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"step-1-clone-the-repo",children:"Step 1: Clone the repo"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sh",children:"git clone https://github.com/ObolNetwork/charon-distributed-validator-node.git\n"})}),"\n",(0,s.jsx)(t.h3,{id:"step-2-create-enr-and-backup-your-private-key",children:"Step 2: Create ENR and Backup your Private Key"}),"\n",(0,s.jsx)(t.p,{children:"Enter the CDVN directory:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sh",children:"cd charon-distributed-validator-node\n"})}),"\n",(0,s.jsx)(t.p,{children:"Use docker to create an ENR"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sh",children:'docker run --rm -v "$(pwd):/opt/charon" obolnetwork/charon:v1.1.1 create enr\n'})}),"\n",(0,s.jsxs)(t.h3,{id:"back-up-the-private-key-located-in-charoncharon-enr-private-key",children:["Back up the private key located in ",(0,s.jsx)(t.code,{children:".charon/charon-enr-private-key"})]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Creating a charon ENR key pair",src:n(26697).A+"",width:"959",height:"316"})}),"\n",(0,s.jsx)(t.admonition,{type:"caution",children:(0,s.jsxs)(t.p,{children:["What you see in the console starting with ",(0,s.jsx)(t.code,{children:"enr:-"})," is the ",(0,s.jsx)(t.strong,{children:"public key"})," for your Charon node (known as an ENR). The ",(0,s.jsx)(t.strong,{children:"private key"})," is in the file ",(0,s.jsx)(t.code,{children:".charon/charon-enr-private-key"}),", be sure to back it up securely."]})}),"\n",(0,s.jsx)(t.h3,{id:"step-3-create-the-dv-cluster-configuration-using-the-launchpad",children:"Step 3: Create the DV cluster configuration using the Launchpad"}),"\n",(0,s.jsx)(t.p,{children:"Obol has integrated a CSM details into the DV Launchpad. Choosing the \"Lido CSM\" withdrawal configuration allows you to create up to 12 validator keys (CSM's Early Access limit) with Lido's required withdrawal and fee recipient addresses."}),"\n",(0,s.jsxs)(t.p,{children:["To start, the squad leader opens the ",(0,s.jsx)(t.a,{href:"https://launchpad.obol.org",children:"DV Launchpad"}),", then connects their wallet and chooses ",(0,s.jsx)(t.strong,{children:"Create a cluster with a group"}),"."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"DV Launchpad Home Page",src:n(71872).A+"",width:"1833",height:"972"})}),"\n",(0,s.jsxs)(t.p,{children:["Then click ",(0,s.jsx)(t.strong,{children:"Get Started"}),"."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Creation Summary Screen",src:n(46330).A+"",width:"1898",height:"849"})}),"\n",(0,s.jsx)(t.p,{children:"Accept all the necessary advisories and sign to confirm."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Obol Warnings, Terms, and Advisories",src:n(36163).A+"",width:"1920",height:"993"})}),"\n",(0,s.jsx)(t.p,{children:"Cluster configuration begins next. First, select the cluster name and size, then enter all cluster members signer addresses."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Configure Cluster Page",src:n(74184).A+"",width:"2125",height:"1159"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Select the number of validators to create (CSM's Early Access phase is capped at a maximum 12 validators)."}),"\n",(0,s.jsxs)(t.li,{children:["(If the cluster creator is taking part in the cluster) Enter your Charon node's ENR which was generated during ",(0,s.jsx)(t.a,{href:"#step-2-create-enr-and-backup-your-private-key",children:"step 2"})," above."]}),"\n",(0,s.jsxs)(t.li,{children:["In the ",(0,s.jsx)(t.strong,{children:"Withdrawal Configuration"})," field, select ",(0,s.jsx)(t.code,{children:"LIDO CSM"}),". This will automatically fill the required Withdrawal Address and Fee Recipient Addresss per ",(0,s.jsx)(t.a,{href:"https://operatorportal.lido.fi/modules/community-staking-module#block-d8e94f551b2e47029a54e6cedea914a7",children:"Lido's Documentation"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["Finally, click on the ",(0,s.jsx)(t.strong,{children:"Create Cluster Configuration"})," button."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Further Cluster Configuration",src:n(6225).A+"",width:"1805",height:"1271"})}),"\n",(0,s.jsx)(t.p,{children:"Lastly, share the cluster invite link with the other cluster members."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Cluster Invitation Page",src:n(78014).A+"",width:"1879",height:"868"})}),"\n",(0,s.jsx)(t.h3,{id:"step-4-distributed-key-generation-dkg",children:"Step 4: Distributed Key Generation (DKG)"}),"\n",(0,s.jsxs)(t.p,{children:["All squad members need to open the cluster invitation link, connect their wallet, accept all necessary advisories, and to verify the cluster configuration is correct with a signature. Each squad member will also need to upload and sign an ENR to represent their charon client, so see ",(0,s.jsx)(t.a,{href:"#step-1-clone-the-repo",children:"steps 1"})," and ",(0,s.jsx)(t.a,{href:"#step-2-create-enr-and-backup-your-private-key",children:"2"})," above."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Cluster Invitation Acceptance Page",src:n(53799).A+"",width:"1778",height:"1283"})}),"\n",(0,s.jsxs)(t.p,{children:["Once all members confirm the configuration they will see the ",(0,s.jsx)(t.strong,{children:"Continue"})," button."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Prepare for DKG Page",src:n(86764).A+"",width:"944",height:"646"})}),"\n",(0,s.jsx)(t.p,{children:"On the next page, they will find a CLI command which is used to begin the Distributed Key Generation (DKG) ceremony. All members need to synchronously complete this step."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"DKG Command to Run",src:n(98389).A+"",width:"952",height:"880"})}),"\n",(0,s.jsxs)(t.admonition,{type:"tip",children:[(0,s.jsxs)(t.p,{children:["Go back to the terminal and make sure you're in the ",(0,s.jsx)(t.code,{children:"charon-distributed-validator-node"})," directory before running the DKG command:"]}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sh",children:"pwd\n"})}),(0,s.jsxs)(t.p,{children:["If you are not, navigate to it using the ",(0,s.jsx)(t.code,{children:"cd"})," command."]})]}),"\n",(0,s.jsx)(t.p,{children:"Paste the DKG command into your terminal and wait for all the other squad members to connect and complete the DKG ceremony."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Completed DKG CLI Output",src:n(69234).A+"",width:"1640",height:"395"})}),"\n",(0,s.jsxs)(t.p,{children:["New files were generated:  ",(0,s.jsx)(t.code,{children:"cluster-lock.json"}),", ",(0,s.jsx)(t.code,{children:"deposit-data.json"}),", ",(0,s.jsx)(t.code,{children:"validator_keys"})," are all found in the  ",(0,s.jsx)(t.code,{children:".charon"})," folder (hidden by default). This contains each operator's partial key signatures for the validators."]}),"\n",(0,s.jsx)(t.admonition,{type:"danger",children:(0,s.jsxs)(t.p,{children:["At this point, ",(0,s.jsxs)(t.strong,{children:["each operator must make a backup of the ",(0,s.jsx)(t.code,{children:".charon"})," folder and keep it safe, as validator keys cannot be recreated if lost"]}),"."]})}),"\n",(0,s.jsxs)(t.h3,{id:"step-5-create-a-env-file-for-mainnet",children:["Step 5: Create a ",(0,s.jsx)(t.code,{children:".env"})," file for Mainnet"]}),"\n",(0,s.jsxs)(t.p,{children:["Copy and rename the ",(0,s.jsx)(t.code,{children:".env.sample.mainnet"})," file to ",(0,s.jsx)(t.code,{children:".env"})]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sh",children:"cp .env.sample.mainnet .env\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Open the ",(0,s.jsx)(t.code,{children:".env"})," file using you favourite editor:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sh",children:"nano .env\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Uncomment and set ",(0,s.jsx)(t.code,{children:"BUILDER_API_ENABLED=true"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["Uncomment ",(0,s.jsx)(t.code,{children:"MEVBOOST_RELAYS="})," and set it to the URL of at least one of Lido's approved MEV relays ",(0,s.jsx)(t.a,{href:"https://enchanted-direction-844.notion.site/6d369eb33f664487800b0dedfe32171e?v=8e5d1f1276b0493caea8a2aa1517ed65",children:"here"}),". Multiple relays must be separated by a comma. Consult our ",(0,s.jsx)(t.a,{href:"/docs/next/advanced/deployment-best-practices#mev-boost-relays",children:"deployment best practices"})," for further info on MEV relay selection."]}),"\n",(0,s.jsx)(t.h3,{id:"step-6-starting-the-node",children:"Step 6: Starting the Node"}),"\n",(0,s.jsx)(t.p,{children:"Each cluster member should start the node with the following command:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sh",children:"docker compose up -d\n"})}),"\n",(0,s.jsx)(t.p,{children:"At this point, execution and consensus clients should start syncing. Charon and the validator client should start waiting for the consensus client to be synced and the validator to be activated."}),"\n",(0,s.jsx)(t.h2,{id:"part-3-upload-the-public-keys-and-deposit-to-lido-csm",children:"Part 3: Upload the public keys and deposit to Lido CSM"}),"\n",(0,s.jsx)(t.p,{children:"CSM is launching with a whitelisted set of approved operators (Early Access). The squad member with EA should be the one to create the node through the CSM widget."}),"\n",(0,s.jsxs)(t.p,{children:["The EA member will head to ",(0,s.jsx)(t.a,{href:"https://csm.testnet.fi/?mode=extended",children:"CSM Extended Mode"})," and connect their wallet. (Note the ",(0,s.jsx)(t.code,{children:"mode=extended"})," parameter.) This allows the Lido CSM reward address to be set to the split contract created earlier."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"CSM Connect Wallet Modal",src:n(90779).A+"",width:"1241",height:"788"})}),"\n",(0,s.jsxs)(t.p,{children:["The EA member clicks on the ",(0,s.jsx)(t.strong,{children:"Create Node Operator"})," button."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"CSM Create Node Operator Modal",src:n(17131).A+"",width:"1107",height:"744"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["The EA member pastes the contents of the ",(0,s.jsx)(t.code,{children:"deposit-data.json"})," file into the ",(0,s.jsx)(t.code,{children:"Upload deposit data"})," field. The EA member should have enough ETH/stETH/wstETH to cover the bond."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Expand the ",(0,s.jsx)(t.strong,{children:"Specify custom addresses"})," section."]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Set the ",(0,s.jsx)(t.strong,{children:"Reward Address"})," field to the ",(0,s.jsx)(t.code,{children:"Split"})," contract address and the ",(0,s.jsx)(t.strong,{children:"Manager Address"})," field to the ",(0,s.jsx)(t.code,{children:"Safe"})," wallet address. (These were created previously in ",(0,s.jsx)(t.a,{href:"#part-1-creating-the-cluster-safe--splitter-contract",children:"part 1"}),")"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Verify that the ",(0,s.jsx)(t.strong,{children:"Extended"})," box is outlined. This ensures that the ",(0,s.jsx)(t.code,{children:"Safe"})," address has the ability to change the reward address if necessary."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Check that the correct addresses are set and click the ",(0,s.jsx)(t.strong,{children:"Create Node Operator"})," button."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"CSM Extended Mode Settings",src:n(96002).A+"",width:"1509",height:"1278"})}),"\n",(0,s.jsx)(t.p,{children:"Sign the transaction. The cluster is ready for deposit from Lido CSM."})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},23976:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/CSM_walkthrough1-551fabc10ef21d86283bd42cb3407b81.png"},46330:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/CSM_walkthrough10-de4373979f36f0db112869ac5f6d1b73.png"},36163:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/CSM_walkthrough11-f62428089e81a42df1060abc958e792b.png"},74184:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/CSM_walkthrough12-d81380e1945ffe1cc9252304cb1872a5.png"},6225:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/CSM_walkthrough13-fb86179b18f32280382804acff40eed8.png"},78014:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/CSM_walkthrough14-06fd31a7b8678957c57097b8fc45ff92.png"},53799:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/CSM_walkthrough15-bfd6f7f721906c883c86983e7862871c.png"},86764:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/CSM_walkthrough16-05f3da4e90e71cba194d25c0fea32c1f.png"},98389:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/CSM_walkthrough17-fa773958f8ea432597c0964f6c3cd565.png"},69234:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/CSM_walkthrough18-6dfa3b0c3cbf0022dfbb1e795ba5d8a9.png"},90779:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/CSM_walkthrough19-b034f20c32466904f84a47ee43474a41.png"},60835:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/CSM_walkthrough2-343689507f40d752e91db26a25b0d0e8.png"},17131:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/CSM_walkthrough20-2ab2b96951bc33d9867417302daecad6.png"},96002:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/CSM_walkthrough21-75271be688f06fabfdeefe23cabdcb15.png"},55610:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/CSM_walkthrough3-da0f1d310705cb3813f36078cfe9ca74.png"},13557:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/CSM_walkthrough4-8ed3deb7e1845cadb6da00e1a71aacca.png"},30668:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/CSM_walkthrough5-4c59fdd65c16f94c21622ad8e089b450.png"},99143:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/CSM_walkthrough6-b1c3eadf9e6d480153fe37ea91c4a16d.png"},27806:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/CSM_walkthrough7-00548da404266308788a2bb716e2992c.png"},26697:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/CSM_walkthrough8-8619fa38d7be7939912b5d76d603e4ed.png"},71872:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/CSM_walkthrough9-84294ec985eb8c70d506b3c0e8959fc6.png"},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>d});var s=n(96540);const r={},a=s.createContext(r);function i(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);