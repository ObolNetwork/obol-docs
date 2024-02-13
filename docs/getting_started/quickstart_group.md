---
sidebar_position: 4
description: New combined flow for leader/creator 
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Quickstart - Create a DV with a group

:::caution
Charon is in a beta state and should be used with caution according to its [Terms of Use](https://obol.tech/terms.pdf).
:::



## Pre-requisites
  <ul>
    <li>A basic <a href="https://docs.ethstaker.cc/ethstaker-knowledge-base/" target="_blank">knowledge</a> of Ethereum nodes and validators.</li>
    <li>Ensure you have <a href="https://git-scm.com/downloads" target="_blank">git</a> installed.</li>
    <li>Ensure you have <a href="https://docs.docker.com/engine/install/" target="_blank">docker</a> installed. 
    <br />(Click the above link, and choose your OS. Probably, you do not want to install "Docker Desktop" but rather choose one of the Linux OSs from "Supported platforms" to install "Docker Engine".)</li>
    <li>Make sure <code>docker</code> is running before executing the commands below.</li>
  </ul>

<br />

## STEP 1: Generate ENR

  In order to prepare for a distributed key generation ceremony, you need to create an ENR for your charon client. This ENR is a public/private key pair that allows the other charon clients in the DKG to identify and connect to your node.

<Tabs groupId="Docker-other">
  <TabItem value="Docker" label="Docker" default>
    Use docker to generate an ENR. (Note: in the "docker run" command, you may have to change the version from v0.19.0 to the correct version of the repo you are using)<br /><br />

    # Clone this repo
    git clone https://github.com/ObolNetwork/charon-distributed-validator-node.git

    # Change directory
    cd charon-distributed-validator-node

    # Create your charon ENR private key, this will create a charon-enr-private-key file in the .charon directory
    docker run --rm -v "$(pwd):/opt/charon" obolnetwork/charon:v0.19.0 create enr
    
  If instead of being shown your `enr` you see an error saying `permission denied` then you may need to [update docker permissions](/docs/int/faq/errors#docker-permission-denied-error) to allow the command to run successfully.

  </TabItem>
 <TabItem value="Ansible" label="Ansible">
    Use ansible to generate an ENR. <a href="https://github.com/ObolNetwork/obol-ansible" target="_blank">See the repo here.</a>
  </TabItem>
  <TabItem value="Helm" label="Helm">
    Use Helm to generate an ENR. <a href="https://github.com/ObolNetwork/helm-charts" target="_blank">See the repo here.</a>
  </TabItem>
  <TabItem value="K8s" label="K8s">
    Use K8s to generate an ENR. <a href="https://github.com/ObolNetwork/charon-k8s-distributed-validator-node" target="_blank">See the repo here.</a>
  </TabItem>
</Tabs>
<br />

  You should expect to see a console output like this:

    Created ENR private key: .charon/charon-enr-private-key
    enr:-JG4QGQpV4qYe32QFUAbY1UyGNtNcrVMip83cvJRhw1brMslPeyELIz3q6dsZ7GblVaCjL_8FKQhF6Syg-O_kIWztimGAYHY5EvPgmlkgnY0gmlwhH8AAAGJc2VjcDI1NmsxoQKzMe_GFPpSqtnYl-mJr8uZAUtmkqccsAx7ojGmFy-FY4N0Y3CCDhqDdWRwgg4u

:::caution
Please make sure to create a backup of the private key at `.charon/charon-enr-private-key`. Be careful not to commit it to git! **If you lose this file you won't be able to take part in the DKG ceremony and start the DV cluster successfully.**
:::


For the next step, select the *Leader/Creator* tab if you are coordinating the creation of the cluster. (This role holds no position of privilege in the cluster, it only sets the initial terms of the cluster that the other operators agree to.) Select the *Leader/Creator* tab if you are simply operating a node in a cluster proposed by the cluster coordinator.<br />

## STEP 2: Create or join cluster config

<Tabs groupId="Leader/Creator-operator">
  <TabItem value="Leader/Creator" label="Leader/Creator" default>
    <h2> Collect addresses, create cluster config, share with operators</h2> 
    Before starting the cluster creation, you will need to collect one Ethereum address per operator in the cluster. They will need to be able to sign messages through MetaMask with this address. (Broader wallet support will be added in future.)<br />
    Then, create the cluster configuration. 
    <Tabs groupId="Launchpad-other">
  <TabItem value="Launchpad" label="Launchpad" default>
    You will use Launchpad to create an invite link, and share it with the operators.<br />
    This video shows the flow within the <a href="https://docs.obol.tech/docs/dvl/intro#dv-launchpad-links" target="_blank">DV Launchpad</a>:
    
  <p align="center"><iframe width="560" height="315" src="https://www.youtube.com/embed/6pXASqjAQbs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

You will prepare the configuration file for the distributed key generation ceremony using the launchpad.

1. Go to the [DV Launchpad](https://docs.obol.tech/docs/dvl/intro#dv-launchpad-links) 
2. Connect your wallet

  ![Connect your Wallet](/img/Guide01.png)

3. Select `Create a Cluster with a group` then `Get Started`.

  ![Get Started](/img/Guide02.png)

4. Follow the flow and accept the advisories.
5. Configure the Cluster 
    - Input the `Cluster Name` & `Cluster Size` (i.e. number of operators in the cluster). The threshold will update automatically, it shows the number of nodes that need to be functioning for the validator(s) to stay active.

6. Input the Ethereum addresses for each operator that you collected previously.
    - Select the desired amount of validators (32 ETH each) the cluster will run. (Note that the launchpad is restricted to one validator, for now.)
    - Enter the `Principal address` which should receive the principal 32 ETH should go when the validator is exited. This can optionally be set to the contract address of a multisig / splitter contract.
    - Enter the `Fee Recipient address` to which the validator rewards will go. This can be the same as the principal address, or it can be a different address. This can optionally be set to the contract address of a multisig / splitter contract.
7. Click `Create Cluster Configuration`, then paste your `ENR` that you generated previously. Review that all the details are correct, and press `Confirm and Sign`. You will be prompted to sign three transactions with your MetaMask wallet. These are:
      - The <code>config_hash</code>. This is a hashed representation of the details of this cluster, to ensure everyone is agreeing to an identical setup.
      - The <code>operator_config_hash</code>. This is your acceptance of the terms as a participating node operator.
      - Your <code>ENR</code>. Signing your ENR authorises the corresponding private key to act on your behalf in the cluster.
8. Share your cluster invite link with the operators. Following the link will show you a screen waiting for other operators to accept the configuration you created.

  ![Invite Operators](/img/Guide04.png)

You can use the link to monitor how many of the operators have already signed their approval of the cluster configuration. 

  </TabItem>
  <TabItem value="CLI" label="CLI">
    You will use the CLI to create the cluster config file, which you will distribute it to the operators.

  1. The leader or creator of the cluster will prepare the `cluster-definition.json` file for the Distributed Key Generation ceremony using the `charon create dkg` command.

    ```
    # Prepare an environment variable file
    cp .env.create_dkg.sample .env.create_dkg
    ```
  2. Populate the `.env.create_dkg` file created with the `cluster name`, the `fee recipient` and `withdrawal Ethereum addresses`, and the `ENRs` of all the operators participating in the cluster.
      - The file generated is hidden by default. To view it, run `ls -al` in your terminal. Else, if you are on `macOS`, press `Cmd + Shift + .` to view all hidden files in the finder application.

  3. Run the `charon create dkg` command that generates DKG cluster-definition.json file.
    (Note: in the "docker run" command, you may have to change the version from v0.19.0 to the correct version of the repo you are using)
    ```
    docker run --rm -v "$(pwd):/opt/charon" --env-file .env.create_dkg obolnetwork/charon:v0.19.0 create dkg
    ```

    This command should output a file at `.charon/cluster-definition.json`. This file needs to be shared with the other operators in a cluster.



  </TabItem>
</Tabs>

  </TabItem>
  <TabItem value="Operator" label="Operator">
    <h2>Join the cluster configuration generated by the leader/creator</h2>
    Use the Launchpad or CLI to join the cluster configuration generated by the leader/creator:
    <Tabs groupId="Launchpad-other">
  <TabItem value="Launchpad cluster config" label="Launchpad cluster config" default>
    Your cluster leader/creator needs to configure the cluster, and send you an invitation URL link to join the cluster on the Launchpad. Once you've received the Launchpad invite link, enter your ENR and sign with your wallet.<br /><br />
    
    
  <p align="center"><iframe width="560" height="315" src="https://www.youtube.com/embed/6pXASqjAQbs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>
    

1. Go to the DV launchpad link provided by the leader or creator.
2. Connect your wallet using the Ethereum address provided to the leader in [step 1](#step-1-share-an-ethereum-address-with-your-leader-or-creator).
  
  ![Connect Wallet](/img/Guide05.png)

3. Review the operators addresses submitted and click `Get Started` to continue.

  ![Get Started](/img/Guide06.png)

4. Review and accept the advisories.
5. Review the configuration created by the leader or creator and add your `ENR` that you generated previously.

  ![Review Config](/img/Guide07.png)

6. Sign the two transactions with your wallet, these are: 
    - The config hash. This is a hashed representation of all of the details for this cluster. 
    - Your own `ENR`. This signature authorises the key represented by this ENR to act on your behalf in the cluster.

7. Wait for all the other operators in your cluster to also finish these steps.
    
</TabItem>
  <TabItem value="CLI" label="CLI">
      You'll receive the `cluster-definition.json` file created by the leader/creator. You should save it in the `.charon/` folder that was created initially. (Alternatively, you can use the `--definition-file` flag to override the default expected location for this file.)
  </TabItem>
</Tabs>
  </TabItem>
</Tabs>


Once every participating operator is ready, the next step is the distributed key generation amongst the operators.
- If you are not planning on operating a node, and only wanted to configure the cluster for the operators, your journey ends here. Well done!
- If you are one of the cluster operators, continue to the next step. 
<br /><br />


## STEP 3: Run the Distributed Key Generation (DKG) ceremony

:::info
For the [DKG](docs/charon/dkg.md) to complete, all operators need to be running the command simultaneously. It helps if operators can agreed on a certain time or schedule a video call for them to all run the command together.
:::


<Tabs groupId="Launchpad-other">
  <TabItem value="Launchpad" label="Launchpad" default>

<br />
<p align="center"><iframe width="560" height="315" src="https://www.youtube.com/embed/cEMhxHuNJrI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

1. Once all operators successfully signed, your screen will automatically advance to the next step and look like this. Click `Continue`. (If you closed the tab, you can always go back to the invite link shared by the leader and connect your wallet.)

  ![Config Signing Success](/img/Guide08.png)

2. Copy and run the `docker` command on the screen into your terminal. It will retrieve the remote cluster details and begin the DKG process.

      ![Run the DKG](/img/Guide10.png)

3. Assuming the DKG is successful, a number of artefacts will be created in the `.charon` folder of the node. These include:

    - A `deposit-data.json` file. This contains the information needed to activate the validator on the Ethereum network.
    - A `cluster-lock.json` file. This contains the information needed by charon to operate the distributed validator cluster with its peers.
    - A `validator_keys/` folder. This folder contains the private key shares and passwords for the created distributed validators.

:::caution
Please make sure to create a backup of `.charon/validator_keys`. **If you lose your keys you won't be able to start the DV cluster successfully.**
:::

:::info
The `cluster-lock` and `deposit-data` files are identical for each operator, if lost, they can be copied from one operator to another.
:::


  </TabItem>

  <TabItem value="CLI" label="CLI">
    Please use the Launchpad for now.
  </TabItem>
</Tabs>
Now that the DKG has been completed, all operators can start their nodes. 
<br />

## Step 4: Start your Distributed Validator Node

With the DKG ceremony over, the last phase before activation is to prepare your node for validating over the long term.


<Tabs groupId="Local-Remote">
  <TabItem value="Local Beacon Node" label="Local Beacon Node" default>
    Start a local node, using docker or otherwise: 

<Tabs groupId="Docker-other">
  <TabItem value="Docker" label="Docker" default>
    Start your node with docker. This repo is configured to sync an execution layer client (`Nethermind`) and a consensus layer client (`Lighthouse`).<br /><br />

:::info
  Currently, the CDVN repo installs a node on Holesky testnet. It is possible to choose a different network (another testnet, or mainnet) by overriding the .env file. 
  From within the ```charon-distributed-validator-node``` directory:
  ```sh
  # Copy ".env.sample", renaming it ".env"
  cp .env.sample .env
  ```
  `.env.sample` is a sample environment file that allows overriding default configuration defined in `docker-compose.yml`. Uncomment and set any variable to override its value.

  Setup the desired inputs for the DV, including the network you wish to operate on. Check the [Charon CLI reference](../charon/charon-cli-reference.md) for additional optional flags to set.
:::

:::caution
  If you manually update `docker compose` to mount `lighthouse` from your locally synced `~/.lighthouse`, the whole chain database may get deleted. It'd be best not to manually update as `lighthouse` checkpoint-syncs so the syncing doesn't take much time.<br />
  
  **Note**: If you have a `nethermind` node already synced, you can simply copy over the directory. For ex: `cp -r ~/.ethereum/goerli data/nethermind`. This makes everything faster since you start from a synced nethermind node.
:::

```
# Delete lighthouse data if it exists
rm -r ./data/lighthouse

# Spin up a Distributed Validator Node with a Validator Client
docker compose up

```
If at any point you need to turn off your node, you can run:

```
# Shut down the currently running distributed validator node
docker compose down
```


  </TabItem>

  <TabItem value="Ansible" label="Ansible">
    Use ansible to start your node. <a href="https://github.com/ObolNetwork/obol-ansible" target="_blank">See the repo here.</a>
  </TabItem>
  <TabItem value="Helm" label="Helm">
    Use Helm to start your node. <a href="https://github.com/ObolNetwork/helm-charts" target="_blank">See the repo here.</a>
  </TabItem>
  <TabItem value="K8s" label="K8s">
    Use K8s to start your node. <a href="https://github.com/ObolNetwork/charon-k8s-distributed-validator-node" target="_blank">See the repo here.</a>
  </TabItem>
</Tabs>


  </TabItem>

  <TabItem value="Remote Beacon Node" label="Remote Beacon Node">

### Using a remote beacon node

:::caution
Using a remote beacon node will impact the performance of your Distributed Validator and should be used sparingly.
:::

If you already have a beacon node running somewhere and you want to use that instead of running EL (`nethermind`) & CL (`lighthouse`) as part of the repo, you can disable these images. To do so, follow these steps:

1. Copy the `docker-compose.override.yml.sample` file

```
cp -n docker-compose.override.yml.sample docker-compose.override.yml
```

2. Uncomment the `profiles: [disable]` section for both `nethermind` and `lighthouse`. The override file should now look like this

```
services:
  nethermind:
    # Disable nethermind
    profiles: [disable]
    # Bind nethermind internal ports to host ports
    #ports:
      #- 8545:8545 # JSON-RPC
      #- 8551:8551 # AUTH-RPC
      #- 6060:6060 # Metrics

  lighthouse:
    # Disable lighthouse
    profiles: [disable]
    # Bind lighthouse internal ports to host ports
    #ports:
      #- 5052:5052 # HTTP
      #- 5054:5054 # Metrics
...
```

3. Then, uncomment and set the `CHARON_BEACON_NODE_ENDPOINTS` variable in the `.env` file to your beacon node's URL

```
...
# Connect to one or more external beacon nodes. Use a comma separated list excluding spaces.
CHARON_BEACON_NODE_ENDPOINTS=<YOUR_REMOTE_BEACON_NODE_URL>
...
```

4. Restart your docker compose

```
docker compose down
docker compose up -d
```



  </TabItem>
</Tabs>

<br /><br />

:::tip
In a Distributed Validator Cluster, it is important to have a low latency connection to your peers. Charon clients will use the NAT protocol to attempt to establish a direct connection to one another automatically. If this doesn't happen, you should port forward charon's p2p port to the public internet to facilitate direct connections. (The default port to expose is `:3610`). Read more about charon's networking [here](../../../charon/networking.md).
:::


You should use the grafana dashboard to infer whether your cluster is healthy. 
```
# Open Grafana dashboard
open http://localhost:3000/d/singlenode/
```
In particular you should check:

- That your charon client can connect to the configured beacon client.
- That your charon client can connect to all peers directly.
- That your validator client is connected to charon, and has the private keys it needs loaded and accessible. 

Most components in the dashboard have some help text there to assist you in understanding your cluster performance.

You might notice that there are logs indicating that a validator cannot be found and that APIs are returning 404. This is to be expected at this point, as the validator public keys listed in the lock file have not been deposited and acknowledged on the consensus layer yet (usually ~16 hours after the deposit is made).
