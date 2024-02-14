---
sidebar_position: 4
description: New combined flow for leader/creator 
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Quickstart - Create a DV alone

:::caution
Charon is in a beta state and should be used with caution according to its [Terms of Use](https://obol.tech/terms.pdf).
:::

:::info
It is possible for a single operator to manage all of the nodes of a DV cluster. The nodes can be run on a single machine, which is only ideal for testing, or the nodes can be run on multiple machines, which is ideal for a production setup. 

The private key shares can be created centrally and distributed securely to each node. Alternatively, the private key shares can be created in a lower-trust manner with a Distributed Key Generation process, which avoids the validator private key being stored in full anywhere, at any point in its lifecycle. Follow the group quickstart instead for this latter case.
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

## STEP 1: Create the key shares locally

<Tabs groupId="Launchpad-other">
  <TabItem value="Launchpad" label="Launchpad" default>
Go to the the <a href="https://docs.obol.tech/docs/dvl/intro#dv-launchpad-links">DV Launchpad</a> and select <code>Create a distributed validator alone</code>. Follow the steps to configure your DV cluster. The Launchpad will give you a docker command, which you should run in your terminal.
  </TabItem>
  <TabItem value="CLI" label="CLI">
    
    
1. Clone the <a href="https://github.com/ObolNetwork/charon-distributed-validator-cluster.git">CDVC</a> repo and `cd` into the directory.

  ```sh
  # Clone the repo
  git clone https://github.com/ObolNetwork/charon-distributed-validator-cluster.git

  # Change directory
  cd charon-distributed-validator-cluster/
  ```

2. Prepare the environment variables

```sh
# Copy the sample environment variables
cp .env.sample .env
```
`.env.sample` is a sample environment file that allows overriding default configuration defined in `docker-compose.yml`. Uncomment and set any variable to override its value.

3. Setup the desired inputs for the DV, including the network you wish to operate on. Check the [Charon CLI reference](../charon/charon-cli-reference.md) for additional optional flags to set.

<pre>
  <code>
  WITHDRAWAL_ADDR=[ENTER YOUR WITHDRAWAL ADDRESS HERE]
  <br/>
  FEE_RECIPIENT_ADDR=[ENTER YOUR FEE RECIPIENT ADDRESS HERE]
  <br/>
  NB_NODES=[ENTER AMOUNT OF DESIRED NODES]
  <br/>
  NETWORK="holesky"
  </code>
</pre>
Then, run this command to create all the key shares and cluster artifacts locally:
<pre>
  <code>
  docker run --rm -v "$(pwd):/opt/charon" obolnetwork/charon:v0.19.0 create cluster --name="Quickstart Cluster" --withdrawal-addresses="{'${WITHDRAWAL_ADDR}'}" --fee-recipient-addresses="{'${FEE_RECIPIENT_ADDR}'}" --nodes="{'${NB_NODES}'}" --network="{'${NETWORK}'}" --num-validators=1 --cluster-dir="cluster"
  </code>
</pre>
  </TabItem>
</Tabs>
<br />

You should now have multiple folders within `.charon/cluster`, one for each node created. Backup the `cluster/` folder, then move on to deploying the cluster physically.

## STEP 2: Deploy and start the nodes

<Tabs groupId="Local nodes-distributed nodes">
  <TabItem value="Run the nodes on a single machine" label="Run the nodes on a single machine" default>

:::warning
This part of the guide only runs one Execution Client, one Consensus Client, and 6 Distributed Validator Charon Client + Validator Client pairs on a single docker instance, and **is not suitable for a mainnet deployment**. (If this machine fails, there will not be any fault tolerance - the cluster will also fail.)

For a production deployment with fault tolerance, follow the part of the guide instructing you how to distribute the nodes across multiple machines. 
:::

Run this command to start your cluster containers if you deployed using CDVC repo above.

```sh
# Start the distributed validator cluster
docker compose up --build
```
Check the monitoring dashboard and see if things look all right

```sh
# Open Grafana
open http://localhost:3000/d/laEp8vupp
```

<br />
  </TabItem>
  <TabItem value="Run the nodes on many machines" label="Run the nodes on multiple machines">

:::caution
To distribute your cluster across multiple machines, each node in the cluster needs one of the folders called `node*/` to be copied to it. Each folder should be copied to a CDVN repo and renamed from `node*` to `.charon`.

Right now, the `charon create cluster` command [used earlier to create the private keys](./quickstart_alone#step-1-create-the-key-shares-locally) outputs a folder structure like `cluster/node*/`. Make sure to grab the `./node*/` folders, *rename* them to `.charon` and then move them to one of the single node repos below. Once all nodes are online, synced, and connected, you will be ready to activate your validator.
:::

 This is necessary for the folder to be found by the default `charon run` command. Optionally, it is possible to override `charon run`'s default file locations by using `charon run --private-key-file=".charon/cluster/node0/charon-enr-private-key" --lock-file=".charon/cluster/node0/cluster-lock.json"` for each instance of charon you start.

 :point_right: Use the single node [docker compose](https://github.com/ObolNetwork/charon-distributed-validator-node), the kubernetes [manifests](https://github.com/ObolNetwork/charon-k8s-distributed-validator-node), or the [helm chart](https://github.com/ObolNetwork/helm-charts) example repos to get your nodes up and connected after loading the `.charon` folder artifacts into them appropriately.
<br />

```log title="Output from create cluster"

cluster
├── node0
│   ├── charon-enr-private-key
│   ├── cluster-lock.json
│   ├── deposit-data.json
│   └── validator_keys
│       ├── keystore-0.json
│       └── keystore-0.txt
├── node1
│   ├── charon-enr-private-key
│   ├── cluster-lock.json
│   ├── deposit-data.json
│   └── validator_keys
│       ├── keystore-0.json
│       └── keystore-0.txt
├── node2
│   ├── charon-enr-private-key
│   ├── cluster-lock.json
│   ├── deposit-data.json
│   └── validator_keys
│       ├── keystore-0.json
│       └── keystore-0.txt
└── node3
    ├── charon-enr-private-key
    ├── cluster-lock.json
    ├── deposit-data.json
    └── validator_keys
        ├── keystore-0.json
        └── keystore-0.txt
        ├── keystore-N.json
        └── keystore-N.txt

```

```log title="Folder structure to be placed on each DV node"
└── .charon
    ├── charon-enr-private-key
    ├── cluster-lock.json
    ├── deposit-data.json
    └── validator_keys
        ├── keystore-0.json
        ├── keystore-0.txt
        ├── ...
        ├── keystore-N.json
        └── keystore-N.txt
```

:::info
  Currently, the CDVN repo installs a node on Goerli testnet. It is possible to choose a different network (another testnet, or mainnet) by overriding the .env file. 
  From within the ```charon-distributed-validator-cluster``` directory:
  ```sh
  # Copy ".env.sample", renaming it ".env"
  cp .env.sample .env
  ```
  `.env.sample` is a sample environment file that allows overriding default configuration defined in `docker-compose.yml`. Uncomment and set any variable to override its value.

  Setup the desired inputs for the DV, including the network you wish to operate on. Check the [Charon CLI reference](../charon/charon-cli-reference.md) for additional optional flags to set.
:::

  </TabItem>
</Tabs>