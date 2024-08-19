"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[85879],{65372:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var o=r(74848),n=r(28453);const i={sidebar_position:1,description:"A node operator joins a DV cluster"},s="Operator Journey",a={id:"int/quickstart/group/quickstart-group-operator",title:"Operator Journey",description:"A node operator joins a DV cluster",source:"@site/versioned_docs/version-v0.15.0/int/quickstart/group/quickstart-group-operator.md",sourceDirName:"int/quickstart/group",slug:"/int/quickstart/group/quickstart-group-operator",permalink:"/docs/v0.15.0/int/quickstart/group/quickstart-group-operator",draft:!1,unlisted:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.15.0/int/quickstart/group/quickstart-group-operator.md",tags:[],version:"v0.15.0",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"A node operator joins a DV cluster"},sidebar:"tutorialSidebar",previous:{title:"Creator & Leader Journey",permalink:"/docs/v0.15.0/int/quickstart/group/quickstart-group-leader-creator"},next:{title:"Run a cluster alone",permalink:"/docs/v0.15.0/int/quickstart/quickstart-alone"}},d={},c=[{value:"Overview Video",id:"overview-video",level:2},{value:"Pre-requisites",id:"pre-requisites",level:2},{value:"Step 1. Share an Ethereum address with your Leader or Creator",id:"step-1-share-an-ethereum-address-with-your-leader-or-creator",level:2},{value:"Step 2. Create and back up a private key for charon",id:"step-2-create-and-back-up-a-private-key-for-charon",level:2},{value:"Step 3. Join and sign the cluster configuration",id:"step-3-join-and-sign-the-cluster-configuration",level:2},{value:"Step 4. Run the DKG",id:"step-4-run-the-dkg",level:2},{value:"Overview",id:"overview",level:3},{value:"Step 5. Start your Distributed Validator Node",id:"step-5-start-your-distributed-validator-node",level:2},{value:"Step 6. Activate the deposit data",id:"step-6-activate-the-deposit-data",level:2},{value:"Step 7 - Optional. Add the Monitoring Credentials",id:"step-7---optional-add-the-monitoring-credentials",level:2},{value:"Step 8. Validator Voluntary Exit",id:"step-8-validator-voluntary-exit",level:2},{value:"Updating DV stack",id:"updating-dv-stack",level:2},{value:"Feedback",id:"feedback",level:2},{value:"Other Actions",id:"other-actions",level:2},{value:"Docker power users",id:"docker-power-users",level:3}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"operator-journey",children:"Operator Journey"})}),"\n",(0,o.jsx)(t.admonition,{type:"warning",children:(0,o.jsxs)(t.p,{children:["Charon is in an alpha state and should be used with caution according to its ",(0,o.jsx)(t.a,{href:"https://obol.tech/terms.pdf",children:"Terms of Use"}),"."]})}),"\n",(0,o.jsx)(t.p,{children:"The following instructions aim to assist a group of operators coordinating together to create a distributed validator cluster after receiving an cluster invite link from a leader or creator."}),"\n",(0,o.jsx)(t.h2,{id:"overview-video",children:"Overview Video"}),"\n",(0,o.jsx)("p",{align:"center",children:(0,o.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/6pXASqjAQbs",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})}),"\n",(0,o.jsx)(t.h2,{id:"pre-requisites",children:"Pre-requisites"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["Ensure you have ",(0,o.jsx)(t.a,{href:"https://docs.docker.com/engine/install/",children:"docker"})," installed."]}),"\n",(0,o.jsxs)(t.li,{children:["Ensure you have ",(0,o.jsx)(t.a,{href:"https://git-scm.com/downloads",children:"git"})," installed."]}),"\n",(0,o.jsxs)(t.li,{children:["Make sure ",(0,o.jsx)(t.code,{children:"docker"})," is running before executing the commands below."]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"step-1-share-an-ethereum-address-with-your-leader-or-creator",children:"Step 1. Share an Ethereum address with your Leader or Creator"}),"\n",(0,o.jsxs)(t.p,{children:["Before starting the cluster creation, make sure you have shared an Ethereum address with your cluster ",(0,o.jsx)(t.strong,{children:"Leader"})," or ",(0,o.jsx)(t.strong,{children:"Creator"}),". If you haven't chosen someone as a Leader or Creator yet, please go back to the ",(0,o.jsx)(t.a,{href:"/docs/v0.15.0/int/quickstart/group/",children:"Quickstart intro"})," and define one person to go through the ",(0,o.jsx)(t.a,{href:"./quickstart-group-leader-creator",children:"Leader & Creator Journey"})," before moving forward."]}),"\n",(0,o.jsx)(t.h2,{id:"step-2-create-and-back-up-a-private-key-for-charon",children:"Step 2. Create and back up a private key for charon"}),"\n",(0,o.jsxs)(t.p,{children:["In order to prepare for a distributed key generation ceremony, you need to create an ",(0,o.jsx)(t.a,{href:"/docs/v0.15.0/int/faq/errors#enrs-keys",children:"ENR"})," for your charon client. This ENR is a public/private key pair, and allows the other charon clients in the DKG to identify and connect to your node."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-sh",children:'# Clone this repo\ngit clone https://github.com/ObolNetwork/charon-distributed-validator-node.git\n\n# Change directory\ncd charon-distributed-validator-node\n\n# Create your charon ENR private key, this will create a charon-enr-private-key file in the .charon directory\ndocker run --rm -v "$(pwd):/opt/charon" obolnetwork/charon:v0.15.0 create enr\n'})}),"\n",(0,o.jsx)(t.p,{children:"You should expect to see a console output like"}),"\n",(0,o.jsx)(t.p,{children:"Created ENR private key: .charon/charon-enr-private-key\nenr:-JG4QGQpV4qYe32QFUAbY1UyGNtNcrVMip83cvJRhw1brMslPeyELIz3q6dsZ7GblVaCjL_8FKQhF6Syg-O_kIWztimGAYHY5EvPgmlkgnY0gmlwhH8AAAGJc2VjcDI1NmsxoQKzMe_GFPpSqtnYl-mJr8uZAUtmkqccsAx7ojGmFy-FY4N0Y3CCDhqDdWRwgg4u"}),"\n",(0,o.jsxs)(t.p,{children:["If instead of being shown your ",(0,o.jsx)(t.code,{children:"enr"})," you see an error saying ",(0,o.jsx)(t.code,{children:"permission denied"})," then you may need to ",(0,o.jsx)(t.a,{href:"../../faq/errors#docker-permission-denied-error",children:"update docker permissions"})," to allow the command to run successfully."]}),"\n",(0,o.jsx)(t.admonition,{type:"warning",children:(0,o.jsxs)(t.p,{children:["Please make sure to create a backup of the private key at ",(0,o.jsx)(t.code,{children:".charon/charon-enr-private-key"}),". Be careful not to commit it to git! ",(0,o.jsx)(t.strong,{children:"If you lose this file you won't be able to take part in the DKG ceremony and start the DV cluster successfully."})]})}),"\n",(0,o.jsx)(t.h2,{id:"step-3-join-and-sign-the-cluster-configuration",children:"Step 3. Join and sign the cluster configuration"}),"\n",(0,o.jsxs)(t.p,{children:["After receiving the invite link created by the ",(0,o.jsx)(t.strong,{children:"Leader"})," or ",(0,o.jsx)(t.strong,{children:"Creator"}),", you will be able to join and sign the cluster configuration created."]}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:"Go to the DV launchpad link provided by the leader or creator."}),"\n",(0,o.jsxs)(t.li,{children:["Connect your wallet using the Ethereum address provided to the leader in ",(0,o.jsx)(t.a,{href:"#step-1-share-an-ethereum-address-with-your-leader-or-creator",children:"step 1"}),"."]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Connect Wallet",src:r(540).A+"",width:"1784",height:"607"})}),"\n",(0,o.jsxs)(t.ol,{start:"3",children:["\n",(0,o.jsxs)(t.li,{children:["Review the operators addresses submitted and click ",(0,o.jsx)(t.code,{children:"Get Started"})," to continue."]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Get Started",src:r(8119).A+"",width:"1884",height:"1760"})}),"\n",(0,o.jsxs)(t.ol,{start:"4",children:["\n",(0,o.jsx)(t.li,{children:"Review and accept the advisories."}),"\n",(0,o.jsxs)(t.li,{children:["Review the configuration created by the leader or creator and add your ",(0,o.jsx)(t.code,{children:"ENR"})," generated in ",(0,o.jsx)(t.a,{href:"#step-2-create-and-back-up-a-private-key-for-charon",children:"step 2"}),"."]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Review Config",src:r(24974).A+"",width:"1898",height:"2768"})}),"\n",(0,o.jsxs)(t.ol,{start:"6",children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"Sign the following with your wallet"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"The config hash. This is a hashed representation of all of the details for this cluster."}),"\n",(0,o.jsxs)(t.li,{children:["Your own ",(0,o.jsx)(t.code,{children:"ENR"}),". This signature authorises the key represented by this ENR to act on your behalf in the cluster."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"Wait for all the other operators in your cluster to do the same."}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"step-4-run-the-dkg",children:"Step 4. Run the DKG"}),"\n",(0,o.jsx)(t.admonition,{type:"info",children:(0,o.jsxs)(t.p,{children:["For the ",(0,o.jsx)(t.a,{href:"/docs/next/charon/dkg",children:"DKG"})," to complete, all operators need to be running the command simultaneously. It helps to coordinate an agreed upon time amongst operators at which to run the command."]})}),"\n",(0,o.jsx)(t.h3,{id:"overview",children:"Overview"}),"\n",(0,o.jsx)("p",{align:"center",children:(0,o.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/cEMhxHuNJrI",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["Once all operators successfully signed, your screen will automatically advance to the next step and look like this. Click ",(0,o.jsx)(t.code,{children:"Continue"}),". If you closed the tab, just go back to the invite link shared by the leader and connect your wallet."]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Config Signing Success",src:r(98009).A+"",width:"2864",height:"2164"})}),"\n",(0,o.jsxs)(t.ol,{start:"2",children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"You have two options to perform the DKG."}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Option 1"})," and default is to copy and run the ",(0,o.jsx)(t.code,{children:"docker"})," command on the screen into your terminal. It will retrieve the remote cluster details and begin the DKG process."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Option 2"})," (Manual DKG) is to download the ",(0,o.jsx)(t.code,{children:"cluster-definition"})," file manually and move it to the hidden ",(0,o.jsx)(t.code,{children:".charon"})," folder. Then, every cluster member participates in the DKG ceremony by running the command displayed."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Run the DKG",src:r(32646).A+"",width:"1897",height:"1388"})}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["Assuming the DKG is successful, a number of artefacts will be created in the ",(0,o.jsx)(t.code,{children:".charon"})," folder. These include:"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["A ",(0,o.jsx)(t.code,{children:"deposit-data.json"})," file. This contains the information needed to activate the validator on the Ethereum network."]}),"\n",(0,o.jsxs)(t.li,{children:["A ",(0,o.jsx)(t.code,{children:"cluster-lock.json"})," file. This contains the information needed by charon to operate the distributed validator cluster with its peers."]}),"\n",(0,o.jsxs)(t.li,{children:["A ",(0,o.jsx)(t.code,{children:"validator_keys/"})," folder. This folder contains the private key shares and passwords for the created distributed validators."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.admonition,{type:"warning",children:(0,o.jsxs)(t.p,{children:["Please make sure to create a backup of ",(0,o.jsx)(t.code,{children:".charon/validator_keys"}),". ",(0,o.jsx)(t.strong,{children:"If you lose your keys you won't be able to start the DV cluster successfully."})]})}),"\n",(0,o.jsx)(t.admonition,{type:"info",children:(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"cluster-lock"})," and ",(0,o.jsx)(t.code,{children:"deposit-data"})," files are identical for each operator and can be copied if lost."]})}),"\n",(0,o.jsx)(t.h2,{id:"step-5-start-your-distributed-validator-node",children:"Step 5. Start your Distributed Validator Node"}),"\n",(0,o.jsxs)(t.p,{children:["With the DKG ceremony over, the last phase before activation is to prepare your node for validating over the long term. This repo is configured to sync an execution layer client (",(0,o.jsx)(t.code,{children:"geth"}),") and a consensus layer client (",(0,o.jsx)(t.code,{children:"lighthouse"}),")."]}),"\n",(0,o.jsxs)(t.p,{children:["Before completing these instructions, you should assign a static local IP address to your device (extending the DHCP reservation indefinitely or removing the device from the DCHP pool entirely if you prefer), and port forward the TCP protocol on the public port ",(0,o.jsx)(t.code,{children:":3610"})," on your router to your device's local IP address on the same port. This step is different for every person's home internet, and can be complicated by the presence of dynamic public IP addresses. We are currently working on making this as easy as possible, but for the time being, a distributed validator cluster isn't going to work very resiliently if all charon nodes cannot talk directly to one another and instead need to have an intermediary node forwarding traffic to them."]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Caution"}),": If you manually update ",(0,o.jsx)(t.code,{children:"docker compose"})," to mount ",(0,o.jsx)(t.code,{children:"lighthouse"})," from your locally synced ",(0,o.jsx)(t.code,{children:"~/.lighthouse"}),", the whole chain database may get deleted. It'd be best not to manually update as ",(0,o.jsx)(t.code,{children:"lighthouse"})," checkpoint-syncs so the syncing doesn't take much time."]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Note"}),": If you have a ",(0,o.jsx)(t.code,{children:"geth"})," node already synced, you can simply copy over the directory. For ex: ",(0,o.jsx)(t.code,{children:"cp -r ~/.ethereum/goerli data/geth"}),". This makes everything faster since you start from a synced geth node."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"# Delete lighthouse data if it exists\nrm -r ./data/lighthouse\n\n# Spin up a Distributed Validator Node with a Validator Client\ndocker compose up\n\n# Open Grafana dashboard\nopen http://localhost:3000/d/singlenode/\n"})}),"\n",(0,o.jsx)(t.p,{children:"You should use the grafana dashboard to infer whether your cluster is healthy. In particular you should check:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"That your charon client can connect to the configured beacon client."}),"\n",(0,o.jsx)(t.li,{children:"That your charon client can connect to all peers."}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"Most components in the dashboard have some help text there to assist you in understanding your cluster performance."}),"\n",(0,o.jsx)(t.p,{children:"You might notice that there are logs indicating that a validator cannot be found and that APIs are returning 404. This is to be expected at this point, as the validator public keys listed in the lock file have not been deposited and acknowledged on the consensus layer yet (usually ~16 hours after the deposit is made)."}),"\n",(0,o.jsx)(t.p,{children:"If at any point you need to turn off your node, you can run:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"# Shut down the currently running distributed validator node\ndocker compose down\n"})}),"\n",(0,o.jsx)(t.h2,{id:"step-6-activate-the-deposit-data",children:"Step 6. Activate the deposit data"}),"\n",(0,o.jsx)(t.p,{children:"Congrats \ud83c\udf89 if your cluster have gotten to this step of the quickstart and have successfully created a distributed validator together."}),"\n",(0,o.jsxs)(t.p,{children:["If you have connected all of your charon clients together such that the monitoring indicates that they are all healthy and ready to operate, ",(0,o.jsx)(t.strong,{children:"ONE operator"})," may process to activate this deposit data with the existing ",(0,o.jsx)(t.a,{href:"https://goerli.launchpad.ethereum.org/",children:"staking launchpad"}),"."]}),"\n",(0,o.jsx)(t.p,{children:"This process can take a minimum of 16 hours, with the maximum time to activation being dictated by the length of the activation queue, which can be weeks. You can leave your distributed validator cluster offline until closer to the activation period if you would prefer. You can also use this time to improve and harden your monitoring and alerting for the cluster."}),"\n",(0,o.jsx)(t.h2,{id:"step-7---optional-add-the-monitoring-credentials",children:"Step 7 - Optional. Add the Monitoring Credentials"}),"\n",(0,o.jsx)(t.admonition,{type:"info",children:(0,o.jsxs)(t.p,{children:["This step is ",(0,o.jsx)(t.strong,{children:"optional"})," but will help the Obol Team monitor the health of your cluster. It can only be perfomed if the Obol Team has given you a credential to use."]})}),"\n",(0,o.jsxs)(t.p,{children:["You may have been provided with ",(0,o.jsx)(t.strong,{children:"Monitoring Credentials"})," used to push distributed validator metrics to our central prometheus service to monitor, analyze and improve your cluster's performance. The provided credentials needs to be added in ",(0,o.jsx)(t.code,{children:"prometheus/prometheus.yml"})," replacing ",(0,o.jsx)(t.code,{children:"$PROM_REMOTE_WRITE_TOKEN"})," and will look like:\n",(0,o.jsx)(t.code,{children:"obol20!tnt8U!C..."}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["The final ",(0,o.jsx)(t.code,{children:"prometheus/prometheus.yml"})," file would look like:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"global:\n  scrape_interval:     30s # Set the scrape interval to every 30 seconds.\n  evaluation_interval: 30s # Evaluate rules every 30 seconds.\n\nremote_write:\n  - url: https://vm.monitoring.gcp.obol.tech/write\n    authorization:\n      credentials: obol20!tnt8U!C...\n\nscrape_configs:\n  - job_name: 'charon'\n    static_configs:\n      - targets: ['charon:3620']\n  - job_name: 'teku'\n    static_configs:\n      - targets: ['teku:8008']\n  - job_name: 'node-exporter'\n    static_configs:\n      - targets: ['node-exporter:9100']\n"})}),"\n",(0,o.jsx)(t.h2,{id:"step-8-validator-voluntary-exit",children:"Step 8. Validator Voluntary Exit"}),"\n",(0,o.jsx)(t.p,{children:"Exiting your validator(s) can be useful in situations where you want to stop staking and withdraw your staked ETH."}),"\n",(0,o.jsxs)(t.p,{children:["\ud83d\udc49 Follow the exit guide ",(0,o.jsx)(t.a,{href:"/docs/v0.15.0/int/quickstart/quickstart-exit",children:"here"})]}),"\n",(0,o.jsx)(t.h2,{id:"updating-dv-stack",children:"Updating DV stack"}),"\n",(0,o.jsx)(t.p,{children:"It is highly recommended to upgrade your DV stack from time to time. This ensures that your node is secure, performant, up-to-date and you don't miss important hard forks.\nTo do this, follow these steps:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"# Change to the node directory\ncd charon-distributed-validator-node\n\n# Pull latest changes to the repo\ngit pull\n\n# Create (or recreate) your DV stack!\ndocker compose up -d --build\n"})}),"\n",(0,o.jsxs)(t.p,{children:["You may get a ",(0,o.jsx)(t.code,{children:"git conflict"})," error like this:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-markdown",children:"...\nerror: Your local changes to the following files would be overwritten by merge:\nprometheus/prometheus.yml\n...\nPlease commit your changes or stash them before you merge.\nAborting\n"})}),"\n",(0,o.jsx)(t.p,{children:"This is probably because you have made some changes to some of the files. To get rid of this error, undo all the custom changes that you may have made and then try again."}),"\n",(0,o.jsxs)(t.p,{children:["Most commonly, it happens when you have specified a prometheus token (",(0,o.jsx)(t.code,{children:"$PROM_REMOTE_WRITE_TOKEN"}),") in ",(0,o.jsx)(t.code,{children:"prometheus/prometheus.yml"})," file.\nTo fix this, simply copy your token and undo any changes to the ",(0,o.jsx)(t.code,{children:"prometheus.yml"})," file and try pulling again:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"git pull\n"})}),"\n",(0,o.jsxs)(t.p,{children:["And then, simply replace the ",(0,o.jsx)(t.code,{children:"$PROM_REMOTE_WRITE_TOKEN"})," variable with the token copied earlier."]}),"\n",(0,o.jsx)(t.p,{children:"Now, restart your DVT stack!"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"docker compose restart -d\n"})}),"\n",(0,o.jsx)(t.h2,{id:"feedback",children:"Feedback"}),"\n",(0,o.jsxs)(t.p,{children:["If you have gotten this far through the process, and whether you succeeded or failed at running the distributed validator successfully, we would like to hear your feedback on the process and where you encountered difficulties. Please let us know by joining and posting on our ",(0,o.jsx)(t.a,{href:"https://discord.gg/n6ebKsX46w",children:"Discord"}),". Also, feel free to add issues to our ",(0,o.jsx)(t.a,{href:"https://github.com/ObolNetwork",children:"GitHub repos"}),"."]}),"\n",(0,o.jsx)(t.h2,{id:"other-actions",children:"Other Actions"}),"\n",(0,o.jsx)(t.p,{children:"The above steps should get you running a distributed validator cluster. The following are some extra steps you may want to take either to improve the resilience and performance of your distributed validator cluster."}),"\n",(0,o.jsx)(t.h3,{id:"docker-power-users",children:"Docker power users"}),"\n",(0,o.jsxs)(t.p,{children:['This section of the readme is intended for the "docker power users", i.e., for the ones who are familiar with working with ',(0,o.jsx)(t.code,{children:"docker-compose"})," and want to have more flexibility and power to change the default configuration."]}),"\n",(0,o.jsxs)(t.p,{children:['We use the "Multiple Compose File" feature which provides a very powerful way to override any configuration in ',(0,o.jsx)(t.code,{children:"docker-compose.yml"})," without needing to modify git-checked-in files since that results in conflicts when upgrading this repo.\nSee ",(0,o.jsx)(t.a,{href:"https://docs.docker.com/compose/extends/#multiple-compose-files",children:"this"})," for more details."]}),"\n",(0,o.jsxs)(t.p,{children:["There are some additional compose files in this repository, ",(0,o.jsx)(t.code,{children:"compose-debug.yml"}),", ",(0,o.jsx)(t.code,{children:"docker-compose.override.yml.sample"})," and ",(0,o.jsx)(t.code,{children:"mevboost-compose.yml"}),", along-with the default ",(0,o.jsx)(t.code,{children:"docker-compose.yml"})," file that you can use for this purpose."]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"compose-debug.yml"})," contains some additional containers that developers can use for debugging, like ",(0,o.jsx)(t.code,{children:"jaeger"}),". To achieve this, you can run:"]}),"\n"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"docker compose -f docker-compose.yml -f compose-debug.yml up\n"})}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"docker-compose.override.yml.sample"})," is intended to override the default configuration provided in ",(0,o.jsx)(t.code,{children:"docker-compose.yml"}),". This is useful when, for example, you wish to add port mappings or want to disable a container."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["To use it, just copy the sample file to ",(0,o.jsx)(t.code,{children:"docker-compose.override.yml"})," and customise it to your liking. Please create this file ONLY when you want to tweak something. This is because the default override file is empty and docker errors if you provide an empty compose file."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"cp docker-compose.override.yml.sample docker-compose.override.yml\n\n# Tweak docker-compose.override.yml and then run docker compose up\ndocker compose up\n"})}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"You can also run all these compose files together. This is desirable when you want to use both the features. For example, you may want to have some debugging containers AND also want to override some defaults. To achieve this, you can run:"}),"\n"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"docker compose -f docker-compose.yml -f docker-compose.override.yml -f compose-debug.yml up\n"})}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["To run ",(0,o.jsx)(t.a,{href:"https://boost.flashbots.net/",children:"mev-boost"}),", run:"]}),"\n"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"docker compose -f docker-compose.yml -f mevboost-compose.yml up\n"})})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},540:(e,t,r)=>{r.d(t,{A:()=>o});const o=r.p+"assets/images/Guide05-f21317bae6200ae532bee73349d77207.png"},8119:(e,t,r)=>{r.d(t,{A:()=>o});const o=r.p+"assets/images/Guide06-aef4c137e7c3ea5a383244d3ad563394.png"},24974:(e,t,r)=>{r.d(t,{A:()=>o});const o=r.p+"assets/images/Guide07-2eacaec1895903d6c864a257ad91ba6c.png"},98009:(e,t,r)=>{r.d(t,{A:()=>o});const o=r.p+"assets/images/Guide08-46621accb14c6c81d266bc55adb43621.png"},32646:(e,t,r)=>{r.d(t,{A:()=>o});const o=r.p+"assets/images/Guide10-66d7c37171ee24ff1b6f7118308c6a29.png"},28453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>a});var o=r(96540);const n={},i=o.createContext(n);function s(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);