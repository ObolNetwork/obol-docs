---
sidebar_position: 4
description: Create a DV with a group
---

# quickstart\_group

import Tabs from "@theme/Tabs"; import TabItem from "@theme/TabItem";

## Create a DV with a group

:::warning Charon is in a beta state and should be used with caution according to its [Terms of Use](https://obol.tech/terms.pdf). :::

This quickstart guide will walk you through creating a Distributed Validator Cluster with a number of other node operators.

### Pre-requisites

* A basic{" "} [knowledge ](https://docs.ethstaker.cc/ethstaker-knowledge-base/){" "} of Ethereum nodes and validators.
* Ensure you have{" "} [git ](https://git-scm.com/downloads){" "} installed.
* Ensure you have{" "} [docker ](https://docs.docker.com/engine/install/){" "} installed.{" "}
* Make sure `docker` is running before executing the commands below.

\


### Step 1: Generate an ENR

In order to prepare for a distributed key generation ceremony, you need to create an ENR for your charon client. This ENR is a public/private key pair that allows the other charon clients in the DKG to identify and connect to your node. If you are creating a cluster but not taking part as a node operator in it, you can skip this step.

```bash
# Clone the repo
git clone https://github.com/ObolNetwork/charon-distributed-validator-node.git

# Change directory
cd charon-distributed-validator-node/

# Use docker to create an ENR. Backup the file `.charon/charon-enr-private-key`.
docker run --rm -v "$(pwd):/opt/charon" obolnetwork/charon:v0.19.2 create enr
```

You should expect to see a console output like this:

```
Created ENR private key: .charon/charon-enr-private-key
enr:-JG4QGQpV4qYe32QFUAbY1UyGNtNcrVMip83cvJRhw1brMslPeyELIz3q6dsZ7GblVaCjL_8FKQhF6Syg-O_kIWztimGAYHY5EvPgmlkgnY0gmlwhH8AAAGJc2VjcDI1NmsxoQKzMe_GFPpSqtnYl-mJr8uZAUtmkqccsAx7ojGmFy-FY4N0Y3CCDhqDdWRwgg4u
```

:::warning Please make sure to create a backup of the private key at `.charon/charon-enr-private-key`. Be careful not to commit it to git! **If you lose this file you won't be able to take part in the DKG ceremony nor start the DV cluster successfully.** :::

:::tip If instead of being shown your `enr` you see an error saying `permission denied` then you may need to [update your docker permissions](https://github.com/ObolNetwork/obol-docs/blob/main/versioned_docs/version-v0.19.2/faq/errors.mdx#docker-permission-denied-error) to allow the command to run successfully. :::

For the next step, select the _Creator_ tab if you are coordinating the creation of the cluster. (This role holds no position of privilege in the cluster, it only sets the initial terms of the cluster that the other operators agree to.) Select the _Operator_ tab if you are accepting an invitation to operate a node in a cluster proposed by the cluster creator.

### Step 2: Create a cluster or accept an invitation to a cluster

### Collect addresses, configure the cluster, share the invitation

Before starting the cluster creation process, you will need to collect an Ethereum address for each operator in the cluster. They will need to be able to sign messages through MetaMask with this address. _(Broader wallet support will be added in future.)_ With these addresses in hand, go through the cluster creation flow.

You will use the Launchpad to create an invitation, and share it with the operators.\
This video shows the flow within the{" "} [DV Launchpad ](https://github.com/ObolNetwork/obol-docs/blob/main/docs/dvl/intro/README.md#dv-launchpad-links):

The following are the steps for creating a cluster.

1. Go to the{" "} [DV Launchpad](https://github.com/ObolNetwork/obol-docs/blob/main/docs/dvl/intro/README.md#dv-launchpad-links)
2. Connect your wallet ![Connect your wallet](https://github.com/ObolNetwork/obol-docs/blob/main/img/Guide01.png)
3. Select `Create a Cluster with a group` then{" "} `Get Started`. ![Get started](https://github.com/ObolNetwork/obol-docs/blob/main/img/Guide02.png)
4. Follow the flow and accept the advisories.
5. Configure the Cluster
6.
   * Input the `Cluster Name` & `Cluster Size`{" "} (i.e. number of operators in the cluster). The threshold will update automatically, it shows the number of nodes that need to be functioning for the validator(s) to stay active.
7. Input the Ethereum addresses for each operator that you collected previously. If you will be taking part as an operator, click the "Use My Address" button for Operator 1.
8.
   * Select the desired amount of validators (32 ETH each) the cluster will run. (Note that the mainnet launchpad is restricted to one validator for now.)
   * If you are taking part in the cluster, enter the ENR you generated in [step one](quickstart_group.md#step-1-generate-an-enr) in the "What is your charon client's ENR?" field.
   * Enter the `Principal address` which should receive the principal 32 ETH and the accrued consensus layer rewards when the validator is exited. This can optionally be set to the contract address of a multisig / splitter contract.
   * Enter the `Fee Recipient address` to which the execution layer rewards will go. This can be the same as the principal address, or it can be a different address. This can optionally be set to the contract address of a multisig / splitter contract.
9. Click `Create Cluster Configuration`. Review that all the details are correct, and press `Confirm and Sign`{" "} You will be prompted to sign two or three transactions with your MetaMask wallet. These are:
10.
    * The `config_hash`. This is a hashed representation of the details of this cluster, to ensure everyone is agreeing to an identical setup.
    * The `operator_config_hash`. This is your acceptance of the terms and conditions of participating as a node operator.
    * Your `ENR`. Signing your ENR authorises the corresponding private key to act on your behalf in the cluster.
11. Share your cluster invite link with the operators. Following the link will show you a screen waiting for other operators to accept the configuration you created. ![Invite Operators](https://github.com/ObolNetwork/obol-docs/blob/main/img/Guide04.png)
12. You can use the link to monitor how many of the operators have already signed their approval of the cluster configuration and submitted their ENR.

You will use the CLI to create the cluster definition file, which you will distribute it to the operators manually.

1. The leader or creator of the cluster will prepare the `cluster-definition.json` file for the Distributed Key Generation ceremony using the `charon create dkg` command.
2. Populate the `charon create dkg` command with the appropriate flags including the `name`, the{" "} `num-validators`, the{" "} `fee-recipient-addresses`, the{" "} `withdrawal-addresses`, and the{" "} `operator-enrs` of all the operators participating in the cluster.
3.  Run the `charon create dkg` command that generates DKG cluster-definition.json file. (Note: in the "docker run" command, you may have to change the version from v0.19.2 to the correct version of the repo you are using)

    ```
                    docker run --rm -v "$(pwd):/opt/charon"
                    obolnetwork/charon:v0.19.2 create dkg --name="Quickstart"
                    --num-validators=1
                    --fee-recipient-addresses="0x0000000000000000000000000000000000000000"
                    --withdrawal-addresses="0x0000000000000000000000000000000000000000"
                    --operator-enrs="enr:-JG4QGQpV4qYe32QFUAbY1UyGNtNcrVMip83cvJRhw1brMslPeyELIz3q6dsZ7GblVaCjL_8FKQhF6Syg-O_kIWztimGAYHY5EvPgmlkgnY0gmlwhH8AAAGJc2VjcDI1NmsxoQKzMe_GFPpSqtnYl-mJr8uZAUtmkqccsAx7ojGmFy-FY4N0Y3CCDhqDdWRwgg4u"
                  
    ```

    This command should output a file at `.charon/cluster-definition.json` This file needs to be shared with the other operators in a cluster.

    * The `.charon` folder is hidden by default. To view it, run `ls -al .charon` in your terminal. Else, if you are on `macOS`, press{" "} `Cmd + Shift + .` to view all hidden files in the finder application.

### Join the cluster prepared by the creator

Use the Launchpad or CLI to join the cluster configuration generated by the creator: Your cluster creator needs to configure the cluster, and send you an invite URL link to join the cluster on the Launchpad. Once you've received the Launchpad invite link, you can begin the cluster acceptance process.

1. Click on the DV launchpad link provided by the leader or creator. Make sure you recognise the domain and the person sending you the link, to ensure you are not being phished.
2. Connect your wallet using the Ethereum address provided to the leader. ![Connect Wallet](https://github.com/ObolNetwork/obol-docs/blob/main/img/Guide05.png)
3. Review the operators addresses submitted and click `Get Started` to continue. ![Get Started](https://github.com/ObolNetwork/obol-docs/blob/main/img/Guide06.png)
4. Review and accept the DV Launchpad terms & conditions and advisories.
5. Review the cluster configuration set by the creator and add your `ENR` that you generated in [step 1](quickstart_group.md#step-1-generate-an-enr).![Review Config](https://github.com/ObolNetwork/obol-docs/blob/main/img/Guide07.png)
6. Sign the two transactions with your wallet, these are:
   * The config hash. This is a hashed representation of all of the details for this cluster.
   * Your own `ENR` This signature authorises the key represented by this ENR to act on your behalf in the cluster.
7. Wait for all the other operators in your cluster to also finish these steps.

You'll receive the `cluster-definition.json` file created by the leader/creator. You should save it in the `.charon/`{" "} folder that was created initially. (Alternatively, you can use the{" "} `--definition-file` flag to override the default expected location for this file.)

Once every participating operator is ready, the next step is the distributed key generation amongst the operators.

* If you are not planning on operating a node, and were only configuring the cluster for the operators, your journey ends here. Well done!
* If you are one of the cluster operators, continue to the next step.

### Step 3: Run the Distributed Key Generation (DKG) ceremony

:::tip For the [DKG](../charon/dkg.md) to complete, all operators need to be running the command simultaneously. It helps if operators can agreed on a certain time or schedule a video call for them to all run the command together. :::

1. Once all operators successfully signed, your screen will automatically advance to the next step and look like this. Click `Continue`. (If you closed the tab, you can always go back to the invite link shared by the leader and connect your wallet.)

![Config Signing Success](https://github.com/ObolNetwork/obol-docs/blob/main/img/Guide08.png)

2.  Copy and run the `docker` command on the screen into your terminal. It will retrieve the remote cluster details and begin the DKG process.

    ![Run the DKG](https://github.com/ObolNetwork/obol-docs/blob/main/img/Guide10.png)
3. Assuming the DKG is successful, a number of artefacts will be created in the `.charon` folder of the node. These include:
   * A `deposit-data.json` file. This contains the information needed to activate the validator on the Ethereum network.
   * A `cluster-lock.json` file. This contains the information needed by charon to operate the distributed validator cluster with its peers.
   * A `validator_keys/` folder. This folder contains the private key shares and passwords for the created distributed validators.

Once the creator gives you the `cluster-definition.json` file and you place it in a `.charon` subdirectory, run:

```
docker run --rm -v "$(pwd):/opt/charon" obolnetwork/charon:v0.19.2 dkg --publish
```

and the DKG process should begin.

:::warning Please make sure to create a backup of your `.charon/` folder. **If you lose your private keys you won't be able to start the DV cluster successfully and may risk your validator deposit becoming unrecoverable.** Ensure every operator has their `.charon` folder securely and privately backed up before activating any validators. :::

:::info The `cluster-lock` and `deposit-data` files are identical for each operator, if lost, they can be copied from one operator to another. :::

Now that the DKG has been completed, all operators can start their nodes.

### Step 4: Start your Distributed Validator Node

With the DKG ceremony over, the last phase before activation is to prepare your node for validating over the long term.

The quickstart [repository](https://github.com/ObolNetwork/charon-distributed-validator-node) is configured to sync an execution layer client (`Nethermind`) and a consensus layer client (`Lighthouse`). You can also leverage alternative ways to run a node such as Ansible, Helm, or Kubernetes manifests.

:::info Currently, the quickstart [repo](https://github.com/ObolNetwork/charon-distributed-validator-node) configures a node for the Holesky testnet. It is possible to choose a different network (another testnet, or mainnet) by overriding the `.env` file. From within the `charon-distributed-validator-node` directory:

`.env.sample` is a sample environment file that allows overriding default configuration defined in `docker-compose.yml`. Uncomment and set any variable to override its value.

Setup the desired inputs for the DV, including the network you wish to operate on. Check the [Charon CLI reference](../charon/charon-cli-reference.md) for additional optional flags to set.

```bash
# Copy ".env.sample", renaming it ".env"
cp .env.sample .env
```

:::

:::warning If you manually update `docker compose` to mount `lighthouse` from your locally synced `~/.lighthouse`, the whole chain database may get deleted. It'd be best not to manually update as `lighthouse` checkpoint-syncs so the syncing doesn't take much time.\


**Note**: If you have a `nethermind` node already synced, you can simply copy over the directory. For ex: `cp -r ~/.ethereum/goerli data/nethermind`. This makes everything faster since you start from a synced nethermind node. :::

```bash
# Delete lighthouse data if it exists
rm -r ./data/lighthouse

# Spin up a Distributed Validator Node with a Validator Client
docker compose up -d

```

If at any point you need to turn off your node, you can run:

```bash
# Shut down the currently running distributed validator node
docker compose down
```

You should use the grafana dashboard that accompanies the quickstart repo to see whether your cluster is healthy.

```bash
# Open Grafana dashboard
open http://localhost:3000/d/singlenode/
```

In particular you should check:

* That your charon client can connect to the configured beacon client.
* That your charon client can connect to all peers directly.
* That your validator client is connected to charon, and has the private keys it needs loaded and accessible.

Most components in the dashboard have some help text there to assist you in understanding your cluster performance.

You might notice that there are logs indicating that a validator cannot be found and that APIs are returning 404. This is to be expected at this point, as the validator public keys listed in the lock file have not been deposited and acknowledged on the consensus layer yet (usually \~16 hours after the deposit is made).

Use an ansible playbook to start your node. [See the repo here](https://github.com/ObolNetwork/obol-ansible) for further instructions. Use a Helm to start your node. [See the repo here](https://github.com/ObolNetwork/helm-charts) for further instructions. Use Kubernetes manifests to start your charon client and validator client. These manifests expect an existing Beacon Node Endpoint to connect to. [See the repo here](https://github.com/ObolNetwork/charon-k8s-distributed-validator-node) for further instructions.

**Using a pre-existing beacon node**

:::warning Using a remote beacon node will impact the performance of your Distributed Validator and should be used sparingly. :::

If you already have a beacon node running somewhere and you want to use that instead of running an EL (`nethermind`) & CL (`lighthouse`) as part of the example repo, you can disable these images. To do so, follow these steps:

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

:::tip In a Distributed Validator Cluster, it is important to have a low latency connection to your peers. Charon clients will use the NAT protocol to attempt to establish a direct connection to one another automatically. If this doesn't happen, you should port forward charon's p2p port to the public internet to facilitate direct connections. (The default port to expose is `:3610`). Read more about charon's networking [here](../charon/networking.md). :::

If you have gotten to this stage, every node is up, synced and connected, congratulations. You can now move forward to activating your validator to begin staking.
