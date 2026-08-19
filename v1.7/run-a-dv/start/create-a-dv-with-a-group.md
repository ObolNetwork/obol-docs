# Create a DV With a Group

### Pre-requisites[​](https://docs.obol.org/next/run/start/quickstart_group#pre-requisites) {#pre-requisites}
* A basic [knowledge](https://docs.ethstaker.cc/ethstaker-knowledge-base/) of Ethereum nodes and validators.
* A machine that meets the [minimum requirements](https://docs.obol.org/next/run/prepare/deployment-best-practices#hardware-specifications) for the network you intend to validate.
* If you are taking part using a [DappNode](https://dappnode.com/):
  * A computer with an up to date version of [DappNode](https://docs.dappnode.io/docs/user/install/overview/)'s software and an internet connection.
* If you are taking part using [Sedge](https://www.nethermind.io/sedge), or [Charon's Distributed Validator Node](https://github.com/ObolNetwork/lido-charon-distributed-validator-node) (CDVN) starter repo:
  * Ensure you have [git](https://git-scm.com/downloads) installed.
  * Ensure you have [docker](https://docs.docker.com/engine/install/) installed.
  * Make sure `docker` is running before executing the commands below.

### Step 1: Get your ENR {#step-1-get-your-enr}
<Tabs>
<TabItem value="cdvn" label="CDVN">
In order to prepare for a distributed key generation ceremony, you need to create an ENR for your Charon client. This ENR is a public/private key pair that allows the other Charon clients in the DKG to identify and connect to your node. If you are creating a cluster but not taking part as a node operator in it, you can skip this step.

```sh
# Clone the repo
git clone https://github.com/ObolNetwork/charon-distributed-validator-node.git
# Change directory
cd charon-distributed-validator-node/
# Use docker to create an ENR. Backup the file `.charon/charon-enr-private-key`.
docker run --rm -v "$(pwd):/opt/charon" obolnetwork/charon:v1.7.0 create enr
```

You should expect to see a console output like this:

```sh
Created ENR private key: .charon/charon-enr-private-key
enr:-JG4QGQpV4qYe32QFUAbY1UyGNtNcrVMip83cvJRhw1brMslPeyELIz3q6dsZ7GblVaCjL_8FKQhF6Syg-O_kIWztimGAYHY5EvPgmlkgnY0gmlwhH8AAAGJc2VjcDI1NmsxoQKzMe_GFPpSqtnYl-mJr8uZAUtmkqccsAx7ojGmFy-FY4N0Y3CCDhqDdWRwgg4u
```

:::warning
Please make sure to create a backup of the private key at `.charon/charon-enr-private-key` Be careful not to commit it to git! **If you lose this file you won't be able to take part in the DKG ceremony nor start the DV cluster successfully.**
:::

:::tip
If instead of being shown your `enr` you see an error saying `permission denied` then you may need to [update your docker permissions](https://docs.obol.org/next/adv/troubleshooting/errors#docker-permission-denied-error) to allow the command to run successfully.
:::

For Step 2 of the quickstart:

* Select the **Creator** tab if you are coordinating the creation of the cluster (this role holds no position of privilege in the cluster, it only sets the initial terms of the cluster that the other operators agree to).
* Select the **Operator** tab if you are accepting an invitation to operate a node in a cluster, proposed by the cluster creator.
</TabItem>

<TabItem value="dappnode" label="DappNode">
**Prepare an Execution and Consensus client**[**​**](https://docs.obol.org/next/run/start/quickstart_group#prepare-an-execution-and-consensus-client)

Before preparing the DappNode to take part in a Distributed Validator Cluster, you must ensure you have selected an execution client & consensus client on your DappNode under the 'Stakers' tab for the network you intend to validate.

1.  Login to the DappNode Interface:

    ![](/img/gitbook/image-58.png)
2.  Click on the 'Stakers' tab on the left side, select an execution client (e.g. Geth) & consensus client (e.g. Lodestar) & click 'Apply changes'. This will start the syncing process which can take a number of hours.

    ![](/img/gitbook/image-64.png)
3.  Once the clients are finished syncing, it should reflect on your 'Dashboard' as shown below.

    ![](/img/gitbook/image-65.png)

**Install the Obol DappNode package**[**​**](https://docs.obol.org/next/run/start/quickstart_group#install-the-obol-dappnode-package)

With a fully synced Ethereum node now running on the DappNode, the below steps will walk through installing the Obol package via an IPFS hash and preparing for a Distributed Key Generation ceremony. Future versions of this guide will download the package from the official DappNode DappStore once a stable 1.0 release is made.

1. Before installing the package, make sure you are installing the correct one, this depends on which network your creator configures the cluster on, Holesky or Mainnet. You can find the link to both packages below:
   * [Holesky Repo](http://my.dappnode/installer/dnp/holesky-obol.dnp.dappnode.eth)
   * [Mainnet Repo](http://my.dappnode/installer/dnp/obol.dnp.dappnode.eth)
2.  Copy the latest IPFS hash from the release details dropdown.

    ![](/img/gitbook/image-66.png)
3.  Go back to DappNode Dashboard > Dappstore, select the 'Public' tab, and accept the terms & conditions before proceeding.

    ![](/img/gitbook/image-68.png)
4.  Paste the IPFS hash you copied from Github and click 'Search' (It may take a minute for the package to be found.) You will then be presented with the package installation page. Under the blue 'Install' button, click on 'Advanced Options' & toggle the button to 'Bypass only signed safe restriction'.

    ![](/img/gitbook/image-69.png)
5.  Click 'Install' & in the config mode page > select new cluster & submit. (if you already have the config URL, you can select URL option.)

    ![](/img/gitbook/image-70.png)
6.  Accept the terms & conditions and the install process will begin.

    ![](/img/gitbook/image-71.png)

    ![](/img/gitbook/image-72.png)
7.  You should now be able to see the Holesky Obol package under the 'Packages' tab. Click on the package to see important details.

    ![](/img/gitbook/image-73.png)
8.  Under the 'Info' tab, you will see pre-generated ENRs, along with information such as the status of all five distributed validator clusters, their docker volumes & other menu options.

    ![](/img/gitbook/image-74.png)
9. Select any of the ENRs listed that are not already in use. This ENR will be used in the next step.

For Step 2 of the quickstart:

* Select the **Creator** tab if you are coordinating the creation of the cluster (this role holds no position of privilege in the cluster, it only sets the initial terms of the cluster that the other operators agree to).
* Select the **Operator** tab if you are accepting an invitation to operate a node in a cluster, proposed by the cluster creator.
</TabItem>

<TabItem value="sedge" label="Sedge">
**Installing Sedge**

First you must install Sedge, please refer to the [official Sedge installation guide](https://docs.sedge.nethermind.io/docs/quickstart/install-guide) to do so.

**Check the install was successful**

Run the below command to check if your have successfully installed sedge in your computer.

```
sedge
```

Expected output:

```sh
A tool to allow deploying validators with ease.
  Usage:
    sedge [command]
  Available Commands:
    cli             Generate a node setup interactively
    clients         List supported clients
    deps            Manage dependencies
    down            Shutdown sedge running containers
    generate        Generate new setups according to selected options
    help            Help about any command
    import-key      Import validator keys
    keys            Generate keystore folder
    logs            Get running container logs
    networks        List supported networks
    run             Run services
    show            Show useful information about sedge running containers
    slashing-export Export slashing protection data
    slashing-import Import slashing protection data
    version         Print sedge version
  Flags:
    -h, --help               help for sedge
        --log-level string   Set Log Level, e.g panic, fatal, error, warn, warning, info, debug, trace (default "info")
  Use "sedge [command] --help" for more information about a command.
```

Create an ENR using charon:

```sh
# Use docker to create an ENR. Backup the file `.charon/charon-enr-private-key`.
docker run --rm -v "$(pwd):/opt/charon" obolnetwork/charon:v1.7.0 create enr
```

For Step 2 of the quickstart:

* Select the **Creator** tab if you are coordinating the creation of the cluster (this role holds no position of privilege in the cluster, it only sets the initial terms of the cluster that the other operators agree to).
* Select the **Operator** tab if you are accepting an invitation to operate a node in a cluster, proposed by the cluster creator.
</TabItem>
</Tabs>

### Step 2: Create a cluster or accept an invitation to a cluster {#step-2-create-a-cluster-or-accept-an-invitation-to-a-cluster}
<Tabs>
<TabItem value="creator" label="Creator">
**Collect addresses, configure the cluster, share the invitation**

Before starting the cluster creation process, you will need to collect an Ethereum address for each operator in the cluster. They will need to be able to sign messages through MetaMask with this address. _(Broader wallet support will be added in future.)_ With these addresses in hand, go through the cluster creation flow.

<Tabs>
<TabItem value="launchpad" label="Launchpad">
You will use the Launchpad to create an invitation, and share it with the operators. This video shows the flow within the [DV Launchpad](https://docs.obol.org/next/learn/intro/launchpad)

<iframe class="video-embed" src="https://www.youtube-nocookie.com/embed/6pXASqjAQbs" title="YouTube video" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

The following are the steps for creating a cluster.

1. Go to the [DV Launchpad](https://docs.obol.org/docs/dvl/intro#dv-launchpad-links)
2.  Connect your wallet

    ![](/img/gitbook/image-75.png)
3.  Select `Create a Cluster with a group` then `Get Started`.

    ![](/img/gitbook/image-76.png)
4. Follow the flow and accept the advisories.
5. Configure the Cluster
   1. Input the `Cluster Name` & `Cluster Size` (i.e. number of operators in the cluster). The threshold will update automatically, it shows the number of nodes that need to be functioning for the validator(s) to stay active.
6. Input the Ethereum addresses for each operator that you collected previously. If you will be taking part as an operator, click the "Use My Address" button for Operator 1.
   1. Select the desired amount of validators (32 ETH each) the cluster will run. (Note that the mainnet launchpad is restricted to one validator for now.)
   2. If you are taking part in the cluster, enter the ENR you generated in [step one](https://docs.obol.org/next/run/start/quickstart_group#step-1-generate-an-enr) in the "What is your charon client's ENR?" field.
   3. Enter the `Principal address` which should receive the principal 32 ETH and the accrued consensus layer rewards when the validator is exited. This can optionally be set to the contract address of a multisig / splitter contract.
   4. Enter the `Fee Recipient address` to which the execution layer rewards will go. This can be the same as the principal address, or it can be a different address. This can optionally be set to the contract address of a multisig / splitter contract.
7. Click `Create Cluster Configuration`. Review that all the details are correct, and press `Confirm and Sign` You will be prompted to sign two or three transactions with your MetaMask wallet. These are:
   1. The `config_hash`. This is a hashed representation of the details of this cluster, to ensure everyone is agreeing to an identical setup.
   2. The `operator_config_hash`. This is your acceptance of the terms and conditions of participating as a node operator.
   3. Your `ENR`. Signing your ENR authorises the corresponding private key to act on your behalf in the cluster.
8.  Share your cluster invite link with the operators. Following the link will show you a screen waiting for other operators to accept the configuration you created.

    ![](/img/gitbook/image-77.png)
9. You can use the link to monitor how many of the operators have already signed their approval of the cluster configuration and submitted their ENR.

Once every participating operator is ready, the next step is the distributed key generation amongst the operators.

* If you are not planning on operating a node, and were only configuring the cluster for the operators, your journey ends here. Well done!
* If you are one of the cluster operators, continue to the next step.
</TabItem>

<TabItem value="cdvn" label="CDVN">
You will use the CLI to create the cluster definition file, which you will distribute it to the operators manually.

1. The leader or creator of the cluster will prepare the `cluster-definition.json` file for the Distributed Key Generation ceremony using the `charon create dkg` command.
2. Populate the `charon create dkg` command with the appropriate flags including the `name`, the `num-validators`, the `fee-recipient-addresses`, the `withdrawal-addresses`, and the `operator-enrs` of all the operators participating in the cluster.
3.  Run the `charon create dkg` command that generates DKG cluster-definition.json file.

    ```sh
    docker run --rm -v "$(pwd):/opt/charon" obolnetwork/charon:v1.7.0 create dkg 

    --name="Quickstart" 

    --num-validators=1 

    --fee-recipient-addresses="0x0000000000000000000000000000000000000000" 

    --withdrawal-addresses="0x0000000000000000000000000000000000000000" 

    --operator-enrs="enr:-JG4QGQpV4qYe32QFUAbY1UyGNtNcrVMip83cvJRhw1brMslPeyELIz3q6dsZ7GblVaCjL_8FKQhF6Syg-O_kIWztimGAYHY5EvPgmlkgnY0gmlwhH8AAAGJc2VjcDI1NmsxoQKzMe_GFPpSqtnYl-mJr8uZAUtmkqccsAx7ojGmFy-FY4N0Y3CCDhqDdWRwgg4u"
    ```

    This command should output a file at `.charon/cluster-definition.json` This file needs to be shared with the other operators in a cluster.

    * The `.charon` folder is hidden by default. To view it, run `ls -al .charon` in your terminal. Else, if you are on `macOS`, press `Cmd + Shift + .` to view all hidden files in the Finder application.

Once every participating operator is ready, the next step is the distributed key generation amongst the operators.

* If you are not planning on operating a node, and were only configuring the cluster for the operators, your journey ends here. Well done!
* If you are one of the cluster operators, continue to the next step.
</TabItem>
</Tabs>
</TabItem>

<TabItem value="operator" label="Operator">
**Join the cluster prepared by the creator**

Use the Launchpad or CLI to join the cluster configuration generated by the creator:

<Tabs>
<TabItem value="launchpad" label="Launchpad">
Your cluster creator needs to configure the cluster, and send you an invite URL link to join the cluster on the Launchpad. Once you've received the Launchpad invite link, you can begin the cluster acceptance process.

<iframe class="video-embed" src="https://www.youtube-nocookie.com/embed/6pXASqjAQbs" title="YouTube video" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

1. Click on the DV launchpad link provided by the leader or creator. Make sure you recognise the domain and the person sending you the link, to ensure you are not being phished.
2.  Connect your wallet using the Ethereum address provided to the leader.\\

    ![](/img/gitbook/image-81.png)
3.  Review the operators addresses submitted and click `Get Started` to continue.\\

    ![](/img/gitbook/image-82.png)
4. Review and accept the DV Launchpad terms & conditions and advisories.
5.  Review the cluster configuration set by the creator and add your `ENR` that you generated in [step 1](https://docs.obol.org/next/run/start/quickstart_group#step-1-generate-an-enr).\\

    ![](/img/gitbook/image-83.png)
6. Sign the two transactions with your wallet, these are:
   * The config hash. This is a hashed representation of all of the details for this cluster.
   * Your own `ENR` This signature authorises the key represented by this ENR to act on your behalf in the cluster.
7. Wait for all the other operators in your cluster to also finish these steps.

Once every participating operator is ready, the next step is the distributed key generation amongst the operators.

* If you are not planning on operating a node, and were only configuring the cluster for the operators, your journey ends here. Well done!
* If you are one of the cluster operators, continue to the next step.
</TabItem>

<TabItem value="cdvn" label="CDVN">
You'll receive the `cluster-definition.json` file created by the leader/creator. You should save it in the `.charon/` folder that was created initially. (Alternatively, you can use the `--definition-file` flag to override the default expected location for this file.)

Once every participating operator is ready, the next step is the distributed key generation amongst the operators.

* If you are not planning on operating a node, and were only configuring the cluster for the operators, your journey ends here. Well done!
* If you are one of the cluster operators, continue to the next step.
</TabItem>
</Tabs>
</TabItem>
</Tabs>

### Step 3: Run the Distributed Key Generation (DKG) ceremony {#step-3-run-the-distributed-key-generation-dkg-ceremony}
:::tip
For the [DKG](https://docs.obol.org/next/learn/charon/dkg) to complete, all operators need to be running the command simultaneously. It helps if operators can agree on a certain time or schedule a video call for them to all run the command together.
:::

<Tabs>
<TabItem value="launchpad" label="Launchpad">
<iframe class="video-embed" src="https://www.youtube-nocookie.com/embed/cEMhxHuNJrI" title="YouTube video" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

1.  Once all operators successfully signed, your screen will automatically advance to the next step and look like this. Click `Continue`. (If you closed the tab, you can always go back to the invite link shared by the leader and connect your wallet.) \\

    ![](/img/gitbook/image-1-1-1.png)
2.  Copy and run the `docker` command on the screen into your terminal. It will retrieve the remote cluster details and begin the DKG process. \\

    ![](/img/gitbook/image-2-1.png)
3. Assuming the DKG is successful, a number of artefacts will be created in the `.charon` folder of the node. These include:
   * A `deposit-data.json` file. This contains the information needed to activate the validator on the Ethereum network.
   * A `cluster-lock.json` file. This contains the information needed by Charon to operate the distributed validator cluster with its peers.
   * A `validator_keys/` folder. This folder contains the private key shares and passwords for the created distributed validators.
</TabItem>

<TabItem value="cdvn" label="CDVN">
Once the creator gives you the `cluster-definition.json` file and you place it in a `.charon` subdirectory, run:

```sh
docker run --rm -v "$(pwd):/opt/charon" obolnetwork/charon:v1.7.0 dkg --publish
```

and the DKG process should begin.
</TabItem>

<TabItem value="dappnode" label="DappNode">
Follow this step if you are signing through the DV Launchpad, importing the cluster definition URL into the DappNode package's config & then running the DKG inside the DappNode, followed by cluster run.\\

![](/img/gitbook/image-3-1.png)

1.  After all operators have signed with their wallet and has provided an ENR from the DappNode info tab, the Launchpad will instruct operators to begin the DKG ceremony. Click continue & navigate to the 'Dappnode/Avado' tab where the cluster definition URL is presented.

    ![](/img/gitbook/image-4-1.png)
2.  To run the Distributed Key Generation ceremony using a DappNode, you must paste the cluster definition URL into the Obol Package interface. Go to the 'Config' tab, select 'URL' from the dropdown menu, paste the cluster definition URL you retrieved from the launchpad, into the validator `cluster-*`field which matches the cluster you took the ENR from. Example: If you picked ENR1 for signing, then you should paste the URL into Cluster-1. Finally, click the 'Update' button at the bottom of the page.\\

    ![](/img/gitbook/image-6-1.png)

    ![](/img/gitbook/image-7-1.png)

    ![](/img/gitbook/image-8-1.png)
3.  After DappNode records the cluster definition URL, go back to the 'Info' tab and restart the Charon container.

    ![](/img/gitbook/image-9-1.png)
4.  The node is now ready and will attempt to complete the DKG. You can monitor the DKG progress via the 'Logs' tab of the package. Once all clients in the cluster can establish a connection with one another and they each complete a handshake (confirm everyone has a matching `cluster_definition_hash`), the key generation ceremony begins.

    ![](/img/gitbook/image-10-1.png)
5.  Example of DKG ceremony competed log.

    ![](/img/gitbook/image-11-1.png)

**Create a DV Node Backup**

It is important to back up all artefacts generated by the DKG ceremony, and your node ENR private key. The below steps will show you how to download your keys & node artefacts.

1.  Navigate to the backup tab inside the Obol package.

    ![](/img/gitbook/image-12-1.png)
2.  Click on the 'Backup now' button and it will open a new chrome window with a 'file save' option. Select the path where you want to save the Backup tar file.

    ![](/img/gitbook/image-13-1.png)
3.  Double click to extract the tar file. There will be folders for each charon node (max 5). Navigate to each node folder, and all artefacts related to each node will be present.\\

    ![](/img/gitbook/image-14-1.png)

    ![](/img/gitbook/image-15-1.png)
</TabItem>

<TabItem value="sedge" label="Sedge">
Sedge does not currently support taking part in a DKG. Follow the instructions for **Launchpad** to take part in the DKG with Charon, and in Step 4 you will import these keys into Sedge.
</TabItem>
</Tabs>

:::danger
Please make sure to create a backup of your `.charon/` folder. **If you lose your private keys you won't be able to start the DV cluster successfully and may risk your validator deposit becoming unrecoverable.** Ensure every operator has their `.charon` folder securely and privately backed up before activating any validators.
:::

:::info
The `cluster-lock` and `deposit-data` files are identical for each operator, if lost, they can be copied from one operator to another.
:::

Now that the DKG has been completed, all operators can start their nodes.

### Step 4: Start your Distributed Validator Node {#step-4-start-your-distributed-validator-node}
With the DKG ceremony over, the last phase before activation is to prepare your node for validating over the long-term.

The [CDVN repository](https://github.com/ObolNetwork/charon-distributed-validator-node) is configured to sync an execution layer client (`Nethermind`) and a consensus layer client (`Lighthouse`) using Docker Compose, further client combinations can be prepared using Sedge. You can also leverage alternative ways to run a node such as Ansible, Helm, or Kubernetes manifests.

<Tabs>
<TabItem value="cdvn" label="CDVN">
:::info
Currently, the [CDVN repo](https://github.com/ObolNetwork/charon-distributed-validator-node) has defaults for the Holesky testnet and for mainnet.
:::

Start by copying the appropriate `.env.sample.<NETWORK>` file to `.env`, and modifying values as needed.

```sh
# To prepare the node for the Holesky test network
# Copy ".env.sample.holesky", renaming it ".env"
cp .env.sample.holesky .env

# To prepare the node for the main Ethereum network
# Copy ".env.sample.mainnet", renaming it ".env"
cp .env.sample.mainnet .env
```

In the same folder where you created your ENR in Step 1, and ran the DKG in Step 3, start your node in the DV cluster with docker compose.

```sh

# To be run from the ./charon-distributed-validator-node folder
# Spin up a Distributed Validator Node with a Validator Client
docker compose up -d
```

:::danger
Do not start this node until the DKG is complete, as the charon container will interfere with the charon instance attempting to take part in the DKG ceremony.
:::

If at any point you need to turn off your node, you can run:

```sh
# Shut down the currently running Distributed Validator Node
docker compose down
```

You should use the Grafana dashboard that accompanies the quickstart repo to see whether your cluster is healthy.

```sh
# Open Grafana dashboard
open http://localhost:3000/d/charonoverview/
```

In particular you should check:

* That your Charon client can connect to the configured beacon client.
* That your Charon client can connect to all peers directly.
* That your validator client is connected to Charon, and has the private keys it needs loaded and accessible. Most components in the dashboard have some help text there to assist you in understanding your cluster performance. You might notice that there are logs indicating that a validator cannot be found and that APIs are returning 404. This is to be expected at this point, as the validator public keys listed in the lock file have not been deposited and acknowledged on the consensus layer yet (usually it takes \~16 hours after the deposit is made).

</TabItem>

<TabItem value="existing-bn" label="Existing BN">
:::danger
Using a remote beacon node will impact the performance of your Distributed Validator and should be used sparingly.
:::

If you already have a beacon node running somewhere and you want to use that instead of running an EL (`nethermind`) & CL (`lighthouse`) as part of the example repo, you can disable these images. To do so, follow these steps:

1. Stop your docker compose

```sh
docker compose down
```

2. Uncomment and set the `CHARON_BEACON_NODE_ENDPOINTS` variable in the `.env` file to your beacon node's URL

```sh
...
# Connect to one or more external beacon nodes. Use a comma separated list excluding spaces.
CHARON_BEACON_NODE_ENDPOINTS=<YOUR_REMOTE_BEACON_NODE_URL>
...
```

3. Uncomment `EL=el-none` and `CL=cl-none` variables in the `.env` file and comment `EL=el-nethermind` and `CL=cl-lighthouse` variables:

```sh
...
#EL=el-nethermind
...
EL=el-none
...
#CL=cl-lighthouse
...
CL=cl-none
...
```

4. Start your docker compose

```sh
docker compose up -d
```

</TabItem>

<TabItem value="sedge" label="Sedge">
To prepare a Distributed Validator node using sedge, we will use the `sedge generate` command to prepare a docker-compose file of our preferred clients, `sedge import-key` to import the artifacts created during the DKG ceremony, and `sedge run` to begin running the node.

**Sedge generate**[**​**](https://docs.obol.org/next/run/start/quickstart_group#sedge-generate)

With Sedge installed, and the DKG complete, it’s time to deploy a Distributed Validator. Using the `sedge generate` command and its subcommands, Sedge will create a Docker Compose file needed to run the validator node.

1.  The following command generates the artifacts required to deploy a distributed validator on the Holesky network, using Teku as the validator client, Prysm as the consensus client, and Geth as the execution client. For additional supported client combinations, [refer to the documentation here](https://github.com/NethermindEth/sedge?tab=readme-ov-file#supported-networks-and-clients).

    ```sh
    sedge generate full-node --validator=teku --consensus=prysm --execution=geth --network=holesky --distributed
    ```

    You should be shown a long list of configuration outputs with the following endings:

    ```sh
    2024-09-20 12:56:15 -- [INFO] Generation of files successfully, happy staking! You can use now 'sedge run' to start the setup.
    ```
2.  Explore the config files.

    You should now see a `sedge-data` directory created in the folder where you ran the `sedge generate` command. To view the directory contents, use the `ls` command.

    ```sh
    ls sedge-data
    > docker-compose.yml jwtsecret
    ```

**Sedge Import-key**[**​**](https://docs.obol.org/next/run/start/quickstart_group#sedge-import-key)

Use the following command to import keys from the directory where the `.charon` dir is located.

```sh
sedge import-key --from ./ holesky teku
```

**Sedge Run**[**​**](https://docs.obol.org/next/run/start/quickstart_group#sedge-run)

After confirming the configurations and ensuring all files are in place, use the `sedge run` command to deploy the DV docker containers. Sedge will then begin pulling all the required Docker images.

```sh
> sedge run
2024-09-20 13:11:49 -- [INFO] [Logger Init] Log level: info
2024-09-20 13:11:49 -- [WARN] A new Version of sedge is available. Please update to the latest Version. See https://github.com/NethermindEth/sedge/releases for more information. Latest detected tag: fatal: not a git repository (or any of the parent directories): .git
2024-09-20 13:11:50 -- [INFO] Setting up containers
2024-09-20 13:11:50 -- [INFO] Running command: docker compose -f /sedge/sedge-data/docker-compose.yml build
2024-09-20 13:11:50 -- [INFO] Running command: docker compose -f /sedge-data/docker-compose.yml pull
[+] Pulling 16/44
 ⠇ consensus [⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀] Pulling                                                                                                                                                     20.8s
   ⠙ b003b463d750 Downloading [===============>                                   ]   32.9kB/103.7kB                                                                                                14.2s
   ⠙ fe5ca62666f0 Waiting                                                                                                                                                                           14.2s
   ⠙ b02a7525f878 Waiting                                                                                                                                                                           14.2s
   ⠙ fcb6f6d2c998 Waiting                                                                                                                                                                           14.2s
   ⠙ e8c73c638ae9 Waiting                                                                                                                                                                           14.2s
   ⠙ 1e3d9b7d1452 Waiting                                                                                                                                                                           14.2s
   ⠙ 4aa0ea1413d3 Waiting                                                                                                                                                                           14.2s
   ⠙ 7c881f9ab25e Waiting                                                                                                                                                                           14.2s
   ⠙ 5627a970d25e Waiting                                                                                                                                                                           14.2s
   ⠙ 5cf83054c259 Waiting                                                                                                                                                                           14.2s
   ⠙ fec68abcb14d Waiting                                                                                                                                                                           14.2s
   ⠙ 4d5ad547ce94 Waiting                                                                                                                                                                           14.2s
   ⠙ e1ea80853e89 Waiting                                                                                                                                                                           14.2s
   ⠙ 17b1d7e8d99a Waiting                                                                                                                                                                           14.2s
   ⠙ 841a2fc14521 Waiting                                                                                                                                                                           14.2s
   ⠙ 55b44d28dd62 Waiting                                                                                                                                                                           14.2s
   ⠙ f3e3115c6547 Pulling fs layer                                                                                                                                                                  14.2s
   ⠙ 3cec53649029 Waiting                                                                                                                                                                           14.2s
   ⠙ 01739568079a Waiting                                                                                                                                                                           14.2s
   ⠙ c6bd24b188db Waiting                                                                                                                                                                           14.2s
   ⠙ fe8d2e9c9467 Waiting                                                                                                                                                                           14.2s
   ⠙ c151008cbec0 Waiting                                                                                                                                                                           14.2s
   ⠙ de1ef6c90686 Waiting                                                                                                                                                                           14.2s
   ⠙ 03d09d97b125 Waiting                                                                                                                                                                           14.2s
 ✔ execution Pulled                                                                                                                                                                                  9.3s
   ✔ a258b2a6b59a Pull complete                                                                                                                                                                      1.5s
   ✔ a2d6cf6afda3 Pull complete                                                                                                                                                                      1.7s
   ✔ a3dd8256fc41 Pull complete                                                                                                                                                                      6.9s
```

Once all docker images are pulled, sedge will create & start the containers to run all the required clients. See below for example output of the progress.

```sh
✔ 8db8b5d461a7 Pull complete                                                                                                                                                                     24.1s
   ✔ 2288b86b1d5f Pull complete                                                                                                                                                                     24.3s
   ✔ 4becb7b9a44b Pull complete                                                                                                                                                                     24.3s
   ✔ 4f4fb700ef54 Pull complete                                                                                                                                                                     24.3s
   ✔ 5c35e3728c84 Pull complete                                                                                                                                                                     35.1s
2024-09-20 13:12:45 -- [INFO] Running command: docker compose -f /sedge-data/docker-compose.yml create
[+] Creating 7/7
 ✔ Network sedge-network              Created                                                                                                                                                        0.1s
 ✔ Container sedge-dv-client          Created                                                                                                                                                        0.4s
 ✔ Container sedge-consensus-client   Created                                                                                                                                                        0.4s
 ✔ Container sedge-execution-client   Created                                                                                                                                                        0.4s
 ✔ Container sedge-mev-boost          Created                                                                                                                                                        0.4s
 ✔ Container sedge-validator-blocker  Created                                                                                                                                                        0.4s
 ✔ Container sedge-validator-client   Created                                                                                                                                                        0.1s
2024-09-20 13:12:45 -- [INFO] Running command: docker compose -f /sedge-data/docker-compose.yml up -d
[+] Running 4/5
 ✔ Container sedge-consensus-client   Started                                                                                                                                                        1.0s
 ⠧ Container sedge-validator-blocker  Waiting                                                                                                                                                      130.8s
 ✔ Container sedge-dv-client          Started                                                                                                                                                        1.0s
 ✔ Container sedge-execution-client   Started                                                                                                                                                        1.3s
 ✔ Container sedge-mev-boost          Started      
```

Given time, the execution and consensus clients should complete syncing, and if a Distributed Validator has already been activated, the node should begin to validate.

If you encounter issues with using Sedge as part of a DV cluster, consider consulting the [Sedge docs](https://docs.sedge.nethermind.io/) directly, or opening an [issue](https://github.com/NethermindEth/sedge/issues) or [pull request](https://github.com/NethermindEth/sedge/pulls) if appropriate.
</TabItem>

<TabItem value="ansible" label="Ansible">
Use an Ansible playbook to start your node. [See the repo here](https://github.com/ObolNetwork/obol-ansible) for further instructions.
</TabItem>

<TabItem value="helm" label="Helm">
Use a Helm to start your node. [See the repo here](https://github.com/ObolNetwork/helm-charts) for further instructions.
</TabItem>

<TabItem value="k8s" label="K8s">
Use Kubernetes manifests to start your Charon client and validator client. These manifests expect an existing Beacon Node Endpoint to connect to. [See the repo here](https://github.com/ObolNetwork/charon-k8s-distributed-validator-node) for further instructions.
</TabItem>
</Tabs>

:::tip
In a Distributed Validator Cluster, it is important to have a low latency connection to your peers. Charon clients will use the NAT protocol to attempt to establish a direct connection to one another automatically. If this doesn't happen, you should port forward Charon's p2p port to the public internet to facilitate direct connections. The default port to expose is `:3610`. Read more about Charon's networking [here](https://docs.obol.org/next/learn/charon/networking).
:::

If you have gotten to this stage, every node is up, synced and connected, congratulations. You can now move forward to [activating your validator](https://docs.obol.org/next/run/running/activate-dv) to begin staking.
