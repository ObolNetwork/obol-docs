---
sidebar_position: 3
description: New combined flow for leader/creator 
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Quickstart - Create a DV alone

:::info
It is possible for a single operator to manage all of the nodes of a DV cluster. The nodes can be run on a single machine, which is only ideal for testing, or the nodes can be run on multiple machines, which is ideal for a production setup. 

The private key shares can be created centrally and distributed securely to each node. Alternatively, the private key shares can be created in a lower-trust manner with a Distributed Key Generation process, which avoids the validator private key being stored in full anywhere, at any point in its lifecycle. Follow the group quickstart instead for this latter case.
:::

<h1>Pre-requisites</h1>
    <ul>
      <li>A basic <a href="https://docs.ethstaker.cc/ethstaker-knowledge-base/" target="_blank">knowledge</a> of Ethereum nodes and validators.</li>
      <li>Ensure you have <a href="https://docs.docker.com/desktop/install/ubuntu/#install-docker-desktop" target="_blank">docker</a> installed.</li>
      <li>Ensure you have <a href="https://git-scm.com/downloads" target="_blank">git</a> installed.</li>
      <li>Make sure <code>docker</code> is running before executing the commands below.</li>
    </ul>

<br />

<h3>STEP 1: Create the key shares locally</h3>

<Tabs groupId="Launchpad-CLI">
  <TabItem value="Launchpad key creation" label="Launchpad key creation" default>
Go to the the <a href="https://docs.obol.tech/docs/dvl/intro#dv-launchpad-links">DV Launchpad</a> and select <code>Create a distributed validator alone</code>. Follow the steps to configure your DV cluster. The Launchpad will give you a docker command, which you should run in your terminal.
  </TabItem>
  <TabItem value="CLI Key Creation" label="CLI Key Creation">
    
    
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

3. Setup the desired inputs for the DV, including the network you wish to operate on. Check the Charon CLI reference for additional optional flags to set.

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

<h3>STEP 2: Deploy and start the nodes</h3>

<Tabs groupId="Local nodes-distributed nodes">
  <TabItem value="Run nodes on a single machine" label="Run nodes on a single machine" default>

:::warning
This part of the guide only runs one Execution Client, one Consensus Client, and 6 Distributed Validator Charon Client + Validator Client pairs on a single docker instance, and **is not suitable for a mainnet deployment**. (If this machine fails, there will not be any fault tolerance - the cluster will also fail.)

For a production deployment with fault tolerance, follow the part of the guide instructing you how to distribute the nodes across multiple machines. 
:::


<br />
  </TabItem>
  <TabItem value="Run the nodes on many machines" label="Run the nodes on many machines">
    
To distribute your cluster across multiple machines, each node in the cluster needs one of the folders called `node*/` to be copied to it. Each folder should be copied to a CDVN repo and renamed from `node*` to `.charon`. (This is necessary for the folder to be found by the default `charon run` command. Optionally, it is possible to override `charon run`'s default file locations by using `charon run --private-key-file=".charon/cluster/node0/charon-enr-private-key" --lock-file=".charon/cluster/node0/cluster-lock.json"` for each instance of charon you start.

<br /><br />

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

:point_right: Use the single node [docker compose](https://github.com/ObolNetwork/charon-distributed-validator-node), the kubernetes [manifests](https://github.com/ObolNetwork/charon-k8s-distributed-validator-node), or the [helm chart](https://github.com/ObolNetwork/helm-charts) example repos to get your nodes up and connected after loading the `.charon` folder artifacts into them appropriately.



  </TabItem>
</Tabs>


Run this command to start your cluster containers

```sh
# Start the distributed validator cluster
docker compose up --build
```
Check the monitoring dashboard and see if things look all right

```sh
# Open Grafana
open http://localhost:3000/d/laEp8vupp
```