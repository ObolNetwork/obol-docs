"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[12456],{51149:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var r=n(74848),o=n(28453);const i={sidebar_position:4,description:"Run one node in a multi-operator distributed validator cluster using the CLI"},s="Run a cluster using the CLI",a={id:"int/quickstart/quickstart-cli",title:"Run a cluster using the CLI",description:"Run one node in a multi-operator distributed validator cluster using the CLI",source:"@site/versioned_docs/version-v0.14.0/int/quickstart/quickstart-cli.md",sourceDirName:"int/quickstart",slug:"/int/quickstart/quickstart-cli",permalink:"/docs/v0.14.0/int/quickstart/quickstart-cli",draft:!1,unlisted:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.14.0/int/quickstart/quickstart-cli.md",tags:[],version:"v0.14.0",sidebarPosition:4,frontMatter:{sidebar_position:4,description:"Run one node in a multi-operator distributed validator cluster using the CLI"},sidebar:"tutorialSidebar",previous:{title:"Run a cluster with MEV-Boost",permalink:"/docs/v0.14.0/int/quickstart/quickstart-builder-api"},next:{title:"Combine DV keyshares",permalink:"/docs/v0.14.0/int/quickstart/quickstart-combine"}},d={},c=[{value:"Pre-requisites",id:"pre-requisites",level:2},{value:"Step 1. Create and back up a private key for charon",id:"step-1-create-and-back-up-a-private-key-for-charon",level:2},{value:"Step 2. Leader or Creator creates the DKG configuration file and distribute it to cluster operators",id:"step-2-leader-or-creator-creates-the-dkg-configuration-file-and-distribute-it-to-cluster-operators",level:2},{value:"Step 3. Run the DKG",id:"step-3-run-the-dkg",level:2},{value:"Step 4. Start your Distributed Validator Node",id:"step-4-start-your-distributed-validator-node",level:2},{value:"Step 5. Activate the deposit data",id:"step-5-activate-the-deposit-data",level:2},{value:"Step 6 - Optional. Add the Monitoring Credentials",id:"step-6---optional-add-the-monitoring-credentials",level:2},{value:"Step 7. Validator Voluntary Exit",id:"step-7-validator-voluntary-exit",level:2},{value:"Feedback",id:"feedback",level:2},{value:"Other Actions",id:"other-actions",level:2},{value:"Docker power users",id:"docker-power-users",level:3}];function l(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"run-a-cluster-using-the-cli",children:"Run a cluster using the CLI"})}),"\n",(0,r.jsx)(t.admonition,{type:"warning",children:(0,r.jsx)(t.p,{children:"Charon is in an early alpha state and is not ready to be run on mainnet"})}),"\n",(0,r.jsx)(t.p,{children:"The following instructions aim to assist a group of operators coordinating together to create a distributed validator cluster."}),"\n",(0,r.jsx)(t.h2,{id:"pre-requisites",children:"Pre-requisites"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Ensure you have ",(0,r.jsx)(t.a,{href:"https://docs.docker.com/engine/install/",children:"docker"})," installed."]}),"\n",(0,r.jsxs)(t.li,{children:["Ensure you have ",(0,r.jsx)(t.a,{href:"https://git-scm.com/downloads",children:"git"})," installed."]}),"\n",(0,r.jsxs)(t.li,{children:["Make sure ",(0,r.jsx)(t.code,{children:"docker"})," is running before executing the commands below."]}),"\n",(0,r.jsxs)(t.li,{children:["Decide who the Leader or Creator of your cluster will be. Only them have to perform ",(0,r.jsx)(t.a,{href:"#step-2-leader-creates-the-dkg-configuration-file-and-distributes-it-to-everyone-else",children:"step 2"})," and ",(0,r.jsx)(t.a,{href:"#step-5-activate-the-deposit-data",children:"step 5"})," in this quickstart. They do not get any special privilege.","\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["In the ",(0,r.jsx)(t.strong,{children:"Leader"})," case, the operator creating the cluster will also operate a node in the cluster."]}),"\n",(0,r.jsxs)(t.li,{children:["In the ",(0,r.jsx)(t.strong,{children:"Creator"})," case, the cluster is created by an external party to the cluster."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"step-1-create-and-back-up-a-private-key-for-charon",children:"Step 1. Create and back up a private key for charon"}),"\n",(0,r.jsxs)(t.p,{children:["In order to prepare for a distributed key generation ceremony, all operators (including the leader but NOT a creator) need to create an ",(0,r.jsx)(t.a,{href:"/docs/v0.14.0/int/faq/errors#enrs-keys",children:"ENR"})," for their charon client. This ENR is a public/private key pair, and allows the other charon clients in the DKG to identify and connect to your node."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sh",children:'# Clone this repo\ngit clone https://github.com/ObolNetwork/charon-distributed-validator-node.git\n\n# Change directory\ncd charon-distributed-validator-node\n\n# Create your charon ENR private key, this will create a charon-enr-private-key file in the .charon directory\ndocker run --rm -v "$(pwd):/opt/charon" obolnetwork/charon:v0.14.0 create enr\n'})}),"\n",(0,r.jsx)(t.p,{children:"You should expect to see a console output like"}),"\n",(0,r.jsx)(t.p,{children:"Created ENR private key: .charon/charon-enr-private-key\nenr:-JG4QGQpV4qYe32QFUAbY1UyGNtNcrVMip83cvJRhw1brMslPeyELIz3q6dsZ7GblVaCjL_8FKQhF6Syg-O_kIWztimGAYHY5EvPgmlkgnY0gmlwhH8AAAGJc2VjcDI1NmsxoQKzMe_GFPpSqtnYl-mJr8uZAUtmkqccsAx7ojGmFy-FY4N0Y3CCDhqDdWRwgg4u"}),"\n",(0,r.jsx)(t.admonition,{type:"warning",children:(0,r.jsxs)(t.p,{children:["Please make sure to create a backup of the private key at ",(0,r.jsx)(t.code,{children:".charon/charon-enr-private-key"}),". Be careful not to commit it to git! ",(0,r.jsx)(t.strong,{children:"If you lose this file you won't be able to take part in the DKG ceremony and start the DV cluster successfully."})]})}),"\n",(0,r.jsx)(t.p,{children:"Finally, share your ENR with the leader or creator so that he/she can proceed to Step 2."}),"\n",(0,r.jsx)(t.h2,{id:"step-2-leader-or-creator-creates-the-dkg-configuration-file-and-distribute-it-to-cluster-operators",children:"Step 2. Leader or Creator creates the DKG configuration file and distribute it to cluster operators"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["The leader or creator of the cluster will prepare the ",(0,r.jsx)(t.code,{children:"cluster-definition.json"})," file for the Distributed Key Generation ceremony using the ",(0,r.jsx)(t.code,{children:"charon create dkg"})," command."]}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"# Prepare an environment variable file\ncp .env.create_dkg.sample .env.create_dkg\n"})}),"\n",(0,r.jsxs)(t.ol,{start:"2",children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Populate the ",(0,r.jsx)(t.code,{children:".env.create_dkg"})," file created with the ",(0,r.jsx)(t.code,{children:"cluster name"}),", the ",(0,r.jsx)(t.code,{children:"fee recipient"})," and ",(0,r.jsx)(t.code,{children:"withdrawal Ethereum addresses"}),", and the ",(0,r.jsx)(t.code,{children:"ENRs"})," of all the operators participating in the cluster."]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["The file generated is hidden by default. To view it, run ",(0,r.jsx)(t.code,{children:"ls -al"})," in your terminal. Else, if you are on ",(0,r.jsx)(t.code,{children:"macOS"}),", press ",(0,r.jsx)(t.code,{children:"Cmd + Shift + ."})," to view all hidden files in the finder application."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Run the ",(0,r.jsx)(t.code,{children:"charon create dkg"})," command that generates DKG cluster-definition.json file."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:'docker run --rm -v "$(pwd):/opt/charon" --env-file .env.create_dkg obolnetwork/charon:v0.14.0 create dkg\n'})}),"\n",(0,r.jsxs)(t.p,{children:["This command should output a file at ",(0,r.jsx)(t.code,{children:".charon/cluster-definition.json"}),". This file needs to be shared with the other operators in a cluster."]}),"\n",(0,r.jsx)(t.h2,{id:"step-3-run-the-dkg",children:"Step 3. Run the DKG"}),"\n",(0,r.jsxs)(t.p,{children:["After receiving the ",(0,r.jsx)(t.code,{children:"cluster-definition.json"})," file created by the leader, cluster operators should ideally save it in the ",(0,r.jsx)(t.code,{children:".charon/"})," folder that was created during step 1, alternatively the ",(0,r.jsx)(t.code,{children:"--definition-file"})," flag can override the default expected location for this file."]}),"\n",(0,r.jsx)(t.p,{children:"Every cluster member then participates in the DKG ceremony. For Charon v1, this needs to happen relatively synchronously between participants at an agreed time."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:'# Participate in DKG ceremony, this will create .charon/cluster-lock.json, .charon/deposit-data.json and .charon/validator_keys\ndocker run --rm -v "$(pwd):/opt/charon" obolnetwork/charon:v0.14.0 dkg\n'})}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["This is a helpful ",(0,r.jsx)(t.a,{href:"https://www.youtube.com/watch?v=94Pkovp5zoQ&ab_channel=ObolNetwork",children:"video walkthrough"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["Assuming the DKG is successful, a number of artefacts will be created in the ",(0,r.jsx)(t.code,{children:".charon"})," folder. These include:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["A ",(0,r.jsx)(t.code,{children:"deposit-data.json"})," file. This contains the information needed to activate the validator on the Ethereum network."]}),"\n",(0,r.jsxs)(t.li,{children:["A ",(0,r.jsx)(t.code,{children:"cluster-lock.json"})," file. This contains the information needed by charon to operate the distributed validator cluster with its peers."]}),"\n",(0,r.jsxs)(t.li,{children:["A ",(0,r.jsx)(t.code,{children:"validator_keys/"})," folder. This folder contains the private key shares and passwords for the created distributed validators."]}),"\n"]}),"\n",(0,r.jsx)(t.admonition,{type:"warning",children:(0,r.jsxs)(t.p,{children:["Please make sure to create a backup of ",(0,r.jsx)(t.code,{children:".charon/validator_keys"}),". ",(0,r.jsx)(t.strong,{children:"If you lose your keys you won't be able to start the DV cluster successfully."})]})}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"cluster-lock"})," and ",(0,r.jsx)(t.code,{children:"deposit-data"})," files are identical for each operator and can be copied if lost."]})}),"\n",(0,r.jsx)(t.h2,{id:"step-4-start-your-distributed-validator-node",children:"Step 4. Start your Distributed Validator Node"}),"\n",(0,r.jsxs)(t.p,{children:["With the DKG ceremony over, the last phase before activation is to prepare your node for validating over the long term. This repo is configured to sync an execution layer client (",(0,r.jsx)(t.code,{children:"geth"}),") and a consensus layer client (",(0,r.jsx)(t.code,{children:"lighthouse"}),")."]}),"\n",(0,r.jsxs)(t.p,{children:["Before completing these instructions, you should assign a static local IP address to your device (extending the DHCP reservation indefinitely or removing the device from the DCHP pool entirely if you prefer), and port forward the TCP protocol on the public port ",(0,r.jsx)(t.code,{children:":3610"})," on your router to your device's local IP address on the same port. This step is different for every person's home internet, and can be complicated by the presence of dynamic public IP addresses. We are currently working on making this as easy as possible, but for the time being, a distributed validator cluster isn't going to work very resiliently if all charon nodes cannot talk directly to one another and instead need to have an intermediary node forwarding traffic to them."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Caution"}),": If you manually update ",(0,r.jsx)(t.code,{children:"docker-compose"})," to mount ",(0,r.jsx)(t.code,{children:"lighthouse"})," from your locally synced ",(0,r.jsx)(t.code,{children:"~/.lighthouse"}),", the whole chain database may get deleted. It'd be best not to manually update as ",(0,r.jsx)(t.code,{children:"lighthouse"})," checkpoint-syncs so the syncing doesn't take much time."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Note"}),": If you have a ",(0,r.jsx)(t.code,{children:"geth"})," node already synced, you can simply copy over the directory. For ex: ",(0,r.jsx)(t.code,{children:"cp -r ~/.ethereum/goerli data/geth"}),". This makes everything faster since you start from a synced geth node."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"# Delete lighthouse data if it exists\nrm -r ./data/lighthouse\n\n# Spin up a Distributed Validator Node with a Validator Client\ndocker compose up\n\n# Open Grafana dashboard\nopen http://localhost:3000/d/singlenode/\n"})}),"\n",(0,r.jsx)(t.p,{children:"You should use the grafana dashboard to infer whether your cluster is healthy. In particular you should check:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"That your charon client can connect to the configured beacon client."}),"\n",(0,r.jsx)(t.li,{children:"That your charon client can connect to all peers."}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"Most components in the dashboard have some help text there to assist you in understanding your cluster performance."}),"\n",(0,r.jsx)(t.p,{children:"You might notice that there are logs indicating that a validator cannot be found and that APIs are returning 404. This is to be expected at this point, as the validator public keys listed in the lock file have not been deposited and acknowledged on the consensus layer yet (usually ~16 hours after the deposit is made)."}),"\n",(0,r.jsx)(t.p,{children:"If at any point you need to turn off your node, you can run:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"# Shut down the currently running distributed validator node\ndocker compose down\n"})}),"\n",(0,r.jsx)(t.h2,{id:"step-5-activate-the-deposit-data",children:"Step 5. Activate the deposit data"}),"\n",(0,r.jsx)(t.p,{children:"Congrats \ud83c\udf89 if your cluster have gotten to this step of the quickstart and have successfully created a distributed validator together."}),"\n",(0,r.jsxs)(t.p,{children:["If you have connected all of your charon clients together such that the monitoring indicates that they are all healthy and ready to operate, ",(0,r.jsx)(t.strong,{children:"ONE operator"}),", usually the leader, may process to activate this deposit data with the existing ",(0,r.jsx)(t.a,{href:"https://goerli.launchpad.ethereum.org/",children:"staking launchpad"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"This process can take a minimum of 16 hours, with the maximum time to activation being dictated by the length of the activation queue, which can be weeks. You can leave your distributed validator cluster offline until closer to the activation period if you would prefer. You can also use this time to improve and harden your monitoring and alerting for the cluster."}),"\n",(0,r.jsx)(t.h2,{id:"step-6---optional-add-the-monitoring-credentials",children:"Step 6 - Optional. Add the Monitoring Credentials"}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsxs)(t.p,{children:["This step is ",(0,r.jsx)(t.strong,{children:"optional"})," but will help the Obol Team monitor the health of your cluster. It can only be perfomed if the Obol Team has given you a credential to use."]})}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["You may have been provided with ",(0,r.jsx)(t.strong,{children:"Monitoring Credentials"})," used to push distributed validator metrics to our central prometheus service to monitor, analyze and improve your cluster's performance. The provided credentials needs to be added in ",(0,r.jsx)(t.code,{children:"prometheus/prometheus.yml"})," replacing ",(0,r.jsx)(t.code,{children:"$PROM_REMOTE_WRITE_TOKEN"})," and will look like:\n",(0,r.jsx)(t.code,{children:"obol20!tnt8U!C..."}),"."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["To help us easily identify your cluster, also add your ",(0,r.jsx)(t.code,{children:"cluster name"})," in the ",(0,r.jsx)(t.code,{children:"prometheus/prometheus.yml"})," file, replacing ",(0,r.jsx)(t.code,{children:"$CLUSTER_NAME"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["The final ",(0,r.jsx)(t.code,{children:"prometheus/prometheus.yml"})," file would look like:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"global:\n  scrape_interval:     30s # Set the scrape interval to every 30 seconds.\n  evaluation_interval: 30s # Evaluate rules every 30 seconds.\n  external_labels:\n    cluster_name: cluster-123\n\nremote_write:\n  - url: https://vm.monitoring.gcp.obol.tech/write\n    authorization:\n      credentials: obol20!tnt8U!C...\n\nscrape_configs:\n  - job_name: 'charon'\n    static_configs:\n      - targets: ['charon:3620']\n  - job_name: 'teku'\n    static_configs:\n      - targets: ['teku:8008']\n  - job_name: 'node-exporter'\n    static_configs:\n      - targets: ['node-exporter:9100']\n"})}),"\n",(0,r.jsx)(t.h2,{id:"step-7-validator-voluntary-exit",children:"Step 7. Validator Voluntary Exit"}),"\n",(0,r.jsx)(t.admonition,{type:"warning",children:(0,r.jsx)(t.p,{children:"This step only needs to be taken when you decide to exit your DV cluster."})}),"\n",(0,r.jsx)(t.p,{children:"A voluntary exit is when a validator chooses to stop performing its duties, and exits the beacon chain permanently. To voluntarily exit, the validator must continue performing its validator duties until successfully exited to avoid penalties."}),"\n",(0,r.jsxs)(t.p,{children:["To trigger a voluntary exit, a sidecar ",(0,r.jsx)(t.code,{children:"docker-compose"})," command is executed that signs and submits the voluntary exit to the active running charon node that shares it with other nodes in the cluster. The commands below should be executed in the terminal on the same machine and same folder as the active running ",(0,r.jsx)(t.code,{children:"charon-distribute-validator-node"})," docker compose."]}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsx)(t.p,{children:"A threshold of operators in the cluster need to perform this task to exit a validator."})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Create a new ",(0,r.jsx)(t.code,{children:"exit_keys"})," folder next to ",(0,r.jsx)(t.code,{children:".charon/validator_keys"}),": ",(0,r.jsx)(t.code,{children:"mkdir .charon/exit_keys"})]}),"\n",(0,r.jsxs)(t.li,{children:["Copy the validator keys and passwords that you want to exit from the ",(0,r.jsx)(t.code,{children:"validator_keys"})," folder to the ",(0,r.jsx)(t.code,{children:"exit_keys"})," folder.","\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["E.g. to exit validator #4: ",(0,r.jsx)(t.code,{children:"cp .charon/validator_keys/keystore/keystore-4* .charon/exit_keys/"})]}),"\n",(0,r.jsxs)(t.li,{children:["Warning: all keys copied to the ",(0,r.jsx)(t.code,{children:"exit_keys"})," folder will be exited, so be careful!"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["Ensure the external network in ",(0,r.jsx)(t.code,{children:"compose-voluntary-exit.yml"})," is correct.","\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Confirm the name of the exiting ",(0,r.jsx)(t.code,{children:"charon-distributed-validator-node"})," docker network: ",(0,r.jsx)(t.code,{children:"docker network ls"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:["If it isn't ",(0,r.jsx)(t.code,{children:"charon-distributed-validator-node-dvnode"}),", then update ",(0,r.jsx)(t.code,{children:"compose-voluntary-exit.yml"})," accordingly."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["Ensure the latest fork version epoch is used:","\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Voluntary exists require an epoch after which they take effect."}),"\n",(0,r.jsx)(t.li,{children:"All VCs need to sign and submit the exact same messages (epoch) in DVT."}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"--epoch=1"})," would be ideal, since all chains have that epoch in the past, so the validator should exit immediately."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"compose-voluntary-exit.yml"})," is configured with ",(0,r.jsx)(t.code,{children:"--epoch=162304"})," which is the latest Capella fork on Goerli."]}),"\n",(0,r.jsxs)(t.li,{children:["If the Charon cluster is running on a different chain, ",(0,r.jsx)(t.strong,{children:"ALL"})," operators must update ",(0,r.jsx)(t.code,{children:"--epoch"})," to the same latest fork version returned by ",(0,r.jsx)(t.code,{children:"curl $BEACON_NODE/eth/v1/config/fork_schedule"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["Run the command to submit this node's partially signed voluntary exit:","\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"docker compose -f compose-voluntary-exit.yml up"})}),"\n",(0,r.jsxs)(t.li,{children:["Confirm the logs: ",(0,r.jsx)(t.code,{children:"Exit for validator XXXXX submitted"})]}),"\n",(0,r.jsxs)(t.li,{children:["Exit the container: ",(0,r.jsx)(t.code,{children:"Ctrl-C"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["The charon metric ",(0,r.jsx)(t.code,{children:"core_parsigdb_exit_total"})," will be incremented each time a voluntary exit partial signature is received, either from this node or from peers."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"feedback",children:"Feedback"}),"\n",(0,r.jsxs)(t.p,{children:["If you have gotten this far through the process, and whether you succeeded or failed at running the distributed validator successfully, we would like to hear your feedback on the process and where you encountered difficulties. Please let us know by joining and posting on our ",(0,r.jsx)(t.a,{href:"https://discord.gg/n6ebKsX46w",children:"Discord"}),". Also, feel free to add issues to our ",(0,r.jsx)(t.a,{href:"https://github.com/ObolNetwork",children:"GitHub repos"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"other-actions",children:"Other Actions"}),"\n",(0,r.jsx)(t.p,{children:"The above steps should get you running a distributed validator cluster. The following are some extra steps you may want to take either to improve the resilience and performance of your distributed validator cluster."}),"\n",(0,r.jsx)(t.h3,{id:"docker-power-users",children:"Docker power users"}),"\n",(0,r.jsxs)(t.p,{children:['This section of the readme is intended for the "docker power users", i.e., for the ones who are familiar with working with ',(0,r.jsx)(t.code,{children:"docker compose"})," and want to have more flexibility and power to change the default configuration."]}),"\n",(0,r.jsxs)(t.p,{children:['We use the "Multiple Compose File" feature which provides a very powerful way to override any configuration in ',(0,r.jsx)(t.code,{children:"docker-compose.yml"})," without needing to modify git-checked-in files since that results in conflicts when upgrading this repo.\nSee ",(0,r.jsx)(t.a,{href:"https://docs.docker.com/compose/extends/#multiple-compose-files",children:"this"})," for more details."]}),"\n",(0,r.jsxs)(t.p,{children:["There are two additional files in this repository, ",(0,r.jsx)(t.code,{children:"compose-debug.yml"})," and ",(0,r.jsx)(t.code,{children:"docker-compose.override.yml.sample"}),", alongwith the default ",(0,r.jsx)(t.code,{children:"docker-compose.yml"})," file that you can use for this purpose."]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"compose-debug.yml"})," contains some additional containers that developers can use for debugging, like ",(0,r.jsx)(t.code,{children:"jaeger"}),". To achieve this, you can run:"]}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"docker compose -f docker-compose.yml -f compose-debug.yml up\n"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"docker-compose.override.yml.sample"})," is intended to override the default configuration provided in ",(0,r.jsx)(t.code,{children:"docker-compose.yml"}),". This is useful when, for example, you wish to add port mappings or want to disable a container."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["To use it, just copy the sample file to ",(0,r.jsx)(t.code,{children:"docker-compose.override.yml"})," and customise it to your liking. Please create this file ONLY when you want to tweak something. This is because the default override file is empty and docker errors if you provide an empty compose file."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"cp docker-compose.override.yml.sample docker-compose.override.yml\n\n# Tweak docker-compose.override.yml and then run docker compose up\ndocker compose up\n"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"You can also run all these compose files together. This is desirable when you want to use both the features. For example, you may want to have some debugging containers AND also want to override some defaults. To achieve this, you can run:"}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"docker compose -f docker-compose.yml -f docker-compose.override.yml -f compose-debug.yml up\n"})})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>a});var r=n(96540);const o={},i=r.createContext(o);function s(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);