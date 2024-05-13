---
sidebar_position: 4
description: Create a DV with a group
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

# Create a DV with a group

:::caution
Charon is in a beta state and should be used with caution according to its [Terms of Use](https://obol.tech/terms.pdf).
:::

This quickstart guide will walk you through creating a Distributed Validator Cluster with a number of other node operators.

## Pre-requisites

<ul>
  <li>
    A basic{" "}
    <a
      href="https://docs.ethstaker.cc/ethstaker-knowledge-base/"
      target="_blank"
    >
      knowledge
    </a>{" "}
    of Ethereum nodes and validators.
  </li>
  <li>
    Ensure you have{" "}
    <a href="https://git-scm.com/downloads" target="_blank">
      git
    </a>{" "}
    installed.
  </li>
  <li>
    Ensure you have{" "}
    <a href="https://docs.docker.com/engine/install/" target="_blank">
      docker
    </a>{" "}
    installed.{" "}
  </li>
  <li>
    Make sure <code>docker</code> is running before executing the commands
    below.
  </li>
</ul>

<br />

## Step 1: Generate an ENR

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

    Created ENR private key: .charon/charon-enr-private-key
    enr:-JG4QGQpV4qYe32QFUAbY1UyGNtNcrVMip83cvJRhw1brMslPeyELIz3q6dsZ7GblVaCjL_8FKQhF6Syg-O_kIWztimGAYHY5EvPgmlkgnY0gmlwhH8AAAGJc2VjcDI1NmsxoQKzMe_GFPpSqtnYl-mJr8uZAUtmkqccsAx7ojGmFy-FY4N0Y3CCDhqDdWRwgg4u

:::caution
Please make sure to create a backup of the private key at `.charon/charon-enr-private-key`. Be careful not to commit it to git! **If you lose this file you won't be able to take part in the DKG ceremony nor start the DV cluster successfully.**
:::

:::tip
If instead of being shown your `enr` you see an error saying `permission denied` then you may need to [update your docker permissions](../faq/errors.mdx#docker-permission-denied-error) to allow the command to run successfully.
:::

For the next step, select the _Creator_ tab if you are coordinating the creation of the cluster. (This role holds no position of privilege in the cluster, it only sets the initial terms of the cluster that the other operators agree to.) Select the _Operator_ tab if you are accepting an invitation to operate a node in a cluster proposed by the cluster creator.

## Step 2: Create a cluster or accept an invitation to a cluster

<Tabs groupId="Creator">
  <TabItem value="Creator" label="Creator" default>
    <h2> Collect addresses, configure the cluster, share the invitation</h2>
    <p>
      Before starting the cluster creation process, you will need to collect an
      Ethereum address for each operator in the cluster. They will need to be
      able to sign messages through MetaMask with this address.
      <i>(Broader wallet support will be added in future.)</i> With these addresses
      in hand, go through the cluster creation flow.
    </p>
    <Tabs groupId="Launchpad-other">
      <TabItem value="Launchpad" label="Launchpad" default>
        You will use the Launchpad to create an invitation, and share it with
        the operators.
        <br />
        This video shows the flow within the{" "}
        <a href="/docs/dvl/intro#dv-launchpad-links" target="_blank">
          DV Launchpad
        </a>
        :<p align="center">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/6pXASqjAQbs"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </p>
        <p>
          The following are the steps for creating a cluster.
          <ol>
            <li>
              Go to the{" "}
              <a href="/docs/dvl/intro#dv-launchpad-links">DV Launchpad</a>
            </li>
            <li>
              Connect your wallet
              <img src="/img/Guide01.png" alt="Connect your wallet" />
            </li>
            <li>
              Select <code>Create a Cluster with a group</code> then{" "}
              <code>Get Started</code>.
              <img src="/img/Guide02.png" alt="Get started" />
            </li>
            <li>Follow the flow and accept the advisories.</li>
            <li>Configure the Cluster</li>
            <ul>
              <li>
                Input the <code>Cluster Name</code> & <code>Cluster Size</code>{" "}
                (i.e. number of operators in the cluster). The threshold will
                update automatically, it shows the number of nodes that need to
                be functioning for the validator(s) to stay active.
              </li>
            </ul>
            <li>
              Input the Ethereum addresses for each operator that you collected
              previously. If you will be taking part as an operator, click the
              "Use My Address" button for Operator 1.
            </li>
            <ul>
              <li>
                Select the desired amount of validators (32 ETH each) the
                cluster will run. (Note that the mainnet launchpad is restricted
                to one validator for now.)
              </li>
              <li>
                If you are taking part in the cluster, enter the ENR you
                generated in <a href="#step-1-generate-an-enr">step one</a> in
                the "What is your charon client's ENR?" field.
              </li>
              <li>
                Enter the <code>Principal address</code> which should receive
                the principal 32 ETH and the accrued consensus layer rewards
                when the validator is exited. This can optionally be set to the
                contract address of a multisig / splitter contract.
              </li>
              <li>
                Enter the <code>Fee Recipient address</code> to which the
                execution layer rewards will go. This can be the same as the
                principal address, or it can be a different address. This can
                optionally be set to the contract address of a multisig /
                splitter contract.
              </li>
            </ul>
            <li>
              Click <code>Create Cluster Configuration</code>. Review that all
              the details are correct, and press <code>Confirm and Sign</code>{" "}
              You will be prompted to sign two or three transactions with your
              MetaMask wallet. These are:
            </li>
            <ul>
              <li>
                The <code>config_hash</code>. This is a hashed representation of
                the details of this cluster, to ensure everyone is agreeing to
                an identical setup.
              </li>
              <li>
                The <code>operator_config_hash</code>. This is your acceptance
                of the terms and conditions of participating as a node operator.
              </li>
              <li>
                Your <code>ENR</code>. Signing your ENR authorises the
                corresponding private key to act on your behalf in the cluster.
              </li>
            </ul>
            <li>
              Share your cluster invite link with the operators. Following the
              link will show you a screen waiting for other operators to accept
              the configuration you created.
              <img src="/img/Guide04.png" alt="Invite Operators" />
            </li>
            <li>
              You can use the link to monitor how many of the operators have
              already signed their approval of the cluster configuration and
              submitted their ENR.
            </li>
          </ol>
        </p>
      </TabItem>
      <TabItem value="CLI" label="CLI">
        <p>
          You will use the CLI to create the cluster definition file, which you
          will distribute it to the operators manually.
          <ol>
            <li>
              The leader or creator of the cluster will prepare the
              <code>cluster-definition.json</code> file for the Distributed Key Generation
              ceremony using the <code>charon create dkg</code> command.
            </li>
            <li>
              Populate the <code>charon create dkg</code> command with the
              appropriate flags including the <code>name</code>, the{" "}
              <code>num-validators</code>, the{" "}
              <code>fee-recipient-addresses</code>, the{" "}
              <code>withdrawal-addresses</code>, and the{" "}
              <code>operator-enrs</code> of all the operators participating in
              the cluster.
            </li>
            <li>
              Run the <code>charon create dkg</code> command that generates DKG
              cluster-definition.json file. (Note: in the "docker run" command,
              you may have to change the version from v0.19.2 to the correct
              version of the repo you are using)
              <pre>
                docker run --rm -v "$(pwd):/opt/charon"
                obolnetwork/charon:v0.19.2 create dkg --name="Quickstart"
                --num-validators=1
                --fee-recipient-addresses="0x0000000000000000000000000000000000000000"
                --withdrawal-addresses="0x0000000000000000000000000000000000000000"
                --operator-enrs="enr:-JG4QGQpV4qYe32QFUAbY1UyGNtNcrVMip83cvJRhw1brMslPeyELIz3q6dsZ7GblVaCjL_8FKQhF6Syg-O_kIWztimGAYHY5EvPgmlkgnY0gmlwhH8AAAGJc2VjcDI1NmsxoQKzMe_GFPpSqtnYl-mJr8uZAUtmkqccsAx7ojGmFy-FY4N0Y3CCDhqDdWRwgg4u"
              </pre>
              This command should output a file at
              <code>.charon/cluster-definition.json</code> This file needs to be
              shared with the other operators in a cluster.
              <ul>
                <li>
                  The <code>.charon</code> folder is hidden by default. To view
                  it, run <code>ls -al .charon</code> in your terminal. Else, if
                  you are on <code>macOS</code>, press{" "}
                  <code>Cmd + Shift + .</code> to view all hidden files in the
                  finder application.
                </li>
              </ul>
            </li>
          </ol>
        </p>
      </TabItem>
    </Tabs>
  </TabItem>
  <TabItem value="Operator" label="Operator">
    <h2>Join the cluster prepared by the creator</h2>
    Use the Launchpad or CLI to join the cluster configuration generated by the creator:
    <Tabs groupId="Launchpad-other">
      <TabItem
        value="Launchpad"
        label="Launchpad"
        default
      >
        Your cluster creator needs to configure the cluster, and send you
        an invite URL link to join the cluster on the Launchpad. Once you've
        received the Launchpad invite link, you can begin the cluster acceptance process. 
        <p align="center">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/6pXASqjAQbs"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </p>
        <ol>
          <li>Click on the DV launchpad link provided by the leader or creator. Make sure you recognise the domain and the person sending you the link, to ensure you are not being phished.</li>
          <li>Connect your wallet using the Ethereum address provided to the leader. <img src="/img/Guide05.png" alt="Connect Wallet" /></li>
          <li>Review the operators addresses
        submitted and click <code>Get Started</code> to continue. <img src="/img/Guide06.png" alt="Get Started" /></li>
          <li>Review and accept the DV Launchpad terms &amp; conditions and advisories. </li>
          <li>Review the cluster configuration set by the creator and add your
        <code>ENR</code> that you generated in <a href="#step-1-generate-an-enr">step 1</a>.<img src="/img/Guide07.png" alt="Review Config" /></li>
          <li>
            Sign the two transactions with your wallet, these are:
            <ul>The config hash.
        This is a hashed representation of all of the details for this cluster.</ul>
            <ul>Your own <code>ENR</code> This signature authorises the key represented by
        this ENR to act on your behalf in the cluster.</ul>
          </li>
          <li>Wait for all the other
        operators in your cluster to also finish these steps.</li>
        </ol>
      </TabItem>
      <TabItem value="CLI" label="CLI">
        You'll receive the <code>cluster-definition.json</code> file created by
        the leader/creator. You should save it in the <code>.charon/</code>{" "}
        folder that was created initially. (Alternatively, you can use the{" "}
        <code>--definition-file</code>
        flag to override the default expected location for this file.)
      </TabItem>
    </Tabs>
  </TabItem>
</Tabs>

Once every participating operator is ready, the next step is the distributed key generation amongst the operators.

- If you are not planning on operating a node, and were only configuring the cluster for the operators, your journey ends here. Well done!
- If you are one of the cluster operators, continue to the next step.

## Step 3: Run the Distributed Key Generation (DKG) ceremony

:::tip
For the [DKG](../charon/dkg.md) to complete, all operators need to be running the command simultaneously. It helps if operators can agreed on a certain time or schedule a video call for them to all run the command together.
:::

<Tabs groupId="Launchpad-other">
  <TabItem value="Launchpad" label="Launchpad" default>
  <p align="center">
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/cEMhxHuNJrI"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </p>

1. Once all operators successfully signed, your screen will automatically advance to the next step and look like this. Click `Continue`. (If you closed the tab, you can always go back to the invite link shared by the leader and connect your wallet.)

![Config Signing Success](/img/Guide08.png)

2. Copy and run the `docker` command on the screen into your terminal. It will retrieve the remote cluster details and begin the DKG process.

   ![Run the DKG](/img/Guide10.png)

3. Assuming the DKG is successful, a number of artefacts will be created in the `.charon` folder of the node. These include:

   - A `deposit-data.json` file. This contains the information needed to activate the validator on the Ethereum network.
   - A `cluster-lock.json` file. This contains the information needed by charon to operate the distributed validator cluster with its peers.
   - A `validator_keys/` folder. This folder contains the private key shares and passwords for the created distributed validators.


  </TabItem>
  <TabItem value="CLI" label="CLI">
    Once the creator gives you the <code>cluster-definition.json</code> file and you place it in a <code>.charon</code> subdirectory, run: <pre>docker run --rm -v "$(pwd):/opt/charon" obolnetwork/charon:v0.19.2 dkg --publish</pre> and the DKG process should begin. 
  </TabItem>
</Tabs>

:::warning
Please make sure to create a backup of your `.charon/` folder. **If you lose your private keys you won't be able to start the DV cluster successfully and may risk your validator deposit becoming unrecoverable.** Ensure every operator has their `.charon` folder securely and privately backed up before activating any validators.
:::

:::info
The `cluster-lock` and `deposit-data` files are identical for each operator, if lost, they can be copied from one operator to another.
:::


Now that the DKG has been completed, all operators can start their nodes.

## Step 4: Start your Distributed Validator Node

With the DKG ceremony over, the last phase before activation is to prepare your node for validating over the long term.

<Tabs groupId="Full-Pre-Existing">
  <TabItem value="Full Node" label="Full Node" default>
    The quickstart <a href="https://github.com/ObolNetwork/charon-distributed-validator-node" target="_blank">repository</a> is configured to sync an execution layer client (<code>Nethermind</code>) and a consensus layer client (<code>Lighthouse</code>). You can also leverage alternative ways to run a node such as Ansible, Helm, or Kubernetes manifests. 


<Tabs groupId="Docker-Helm">
  
  <TabItem value="Docker" label="Docker" default>
    

:::info
Currently, the quickstart [repo](https://github.com/ObolNetwork/charon-distributed-validator-node) configures a node for the Holesky testnet. It is possible to choose a different network (another testnet, or mainnet) by overriding the `.env` file.
From within the `charon-distributed-validator-node` directory:

`.env.sample` is a sample environment file that allows overriding default configuration defined in `docker-compose.yml`. Uncomment and set any variable to override its value.

Setup the desired inputs for the DV, including the network you wish to operate on. Check the [Charon CLI reference](../charon/charon-cli-reference.md) for additional optional flags to set.

```bash
# Copy ".env.sample", renaming it ".env"
cp .env.sample .env
```
:::

:::caution
If you manually update `docker compose` to mount `lighthouse` from your locally synced `~/.lighthouse`, the whole chain database may get deleted. It'd be best not to manually update as `lighthouse` checkpoint-syncs so the syncing doesn't take much time.<br />

**Note**: If you have a `nethermind` node already synced, you can simply copy over the directory. For ex: `cp -r ~/.ethereum/goerli data/nethermind`. This makes everything faster since you start from a synced nethermind node.
:::

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

- That your charon client can connect to the configured beacon client.
- That your charon client can connect to all peers directly.
- That your validator client is connected to charon, and has the private keys it needs loaded and accessible.

Most components in the dashboard have some help text there to assist you in understanding your cluster performance.

You might notice that there are logs indicating that a validator cannot be found and that APIs are returning 404. This is to be expected at this point, as the validator public keys listed in the lock file have not been deposited and acknowledged on the consensus layer yet (usually ~16 hours after the deposit is made).

  </TabItem>

  <TabItem value="Ansible" label="Ansible">
    Use an ansible playbook to start your node. <a href="https://github.com/ObolNetwork/obol-ansible" target="_blank">See the repo here</a> for further instructions.
  </TabItem>
  <TabItem value="Helm" label="Helm">
    Use a Helm to start your node. <a href="https://github.com/ObolNetwork/helm-charts" target="_blank">See the repo here</a> for further instructions. 
  </TabItem>
  <TabItem value="Kubernetes" label="Kubernetes">
    Use Kubernetes manifests to start your charon client and validator client. These manifests expect an existing Beacon Node Endpoint to connect to. <a href="https://github.com/ObolNetwork/charon-k8s-distributed-validator-node" target="_blank">See the repo here</a> for further instructions.
  </TabItem>
  </Tabs>

</TabItem>

<TabItem value="Existing Beacon Node" label="Existing Beacon Node">


#### Using a pre-existing beacon node

:::caution
Using a remote beacon node will impact the performance of your Distributed Validator and should be used sparingly.
:::

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

  </TabItem>
</Tabs>


:::tip
In a Distributed Validator Cluster, it is important to have a low latency connection to your peers. Charon clients will use the NAT protocol to attempt to establish a direct connection to one another automatically. If this doesn't happen, you should port forward charon's p2p port to the public internet to facilitate direct connections. (The default port to expose is `:3610`). Read more about charon's networking [here](../charon/networking.md).
:::

If you have gotten to this stage, every node is up, synced and connected, congratulations. You can now move forward to activating your validator to begin staking. 