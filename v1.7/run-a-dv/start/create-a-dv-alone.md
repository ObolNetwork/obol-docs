# Create a DV Alone

:::info
It is possible for a single operator to manage all of the nodes of a DV cluster. The nodes can be run on a single machine, which is only suitable for testing, or the nodes can be run on multiple machines, which is expected for a production setup.

The private key shares can be created centrally and distributed securely to each node. Alternatively, the private key shares can be created in a lower-trust manner with a [Distributed Key Generation](https://docs.obol.org/learn/intro/key-concepts#distributed-validator-key-generation-ceremony) process, which avoids the validator private key being stored in full anywhere, at any point in its lifecycle. Follow the [group quickstart](https://docs.obol.org/run/start/quickstart_group) instead for this latter case.
:::

### Pre-requisites[​](https://docs.obol.org/next/run/start/quickstart_alone#pre-requisites) {#pre-requisites}
* A basic [knowledge](https://docs.ethstaker.cc/ethstaker-knowledge-base/) of Ethereum nodes and validators.
* Ensure you have [git](https://git-scm.com/downloads) installed.
* Ensure you have [docker](https://docs.docker.com/engine/install/) installed.
* Make sure `docker` is running before executing the commands below.

### Step 1: Create the key shares locally {#step-1-create-the-key-shares-locally}
<Tabs>
<TabItem value="launchpad" label="Launchpad">
Go to the [DV Launchpad](https://docs.obol.org/docs/dvl/intro#dv-launchpad-links) and select `Create a distributed validator alone`. Follow the steps to configure your DV cluster. The Launchpad will give you a docker command to create your cluster.\
Before you run the command, clone the [CDVC repo](https://github.com/ObolNetwork/charon-distributed-validator-cluster.git) and `cd` into the directory.

```sh
# Clone the repo
git clone https://github.com/ObolNetwork/charon-distributed-validator-cluster.git

# Change directory
cd charon-distributed-validator-cluster/

# Run the command provided in the DV Launchpad "Create a cluster alone" flow
docker run -u $(id -u):$(id -g) --rm -v "$(pwd)/:/opt/charon" obolnetwork/charon:v1.7.0 create cluster --definition-file=...

```

After the `create cluster` command is run, you should have multiple subfolders within the newly created `./cluster/` folder, one for each node created.

**Backup the `./cluster/` folder, then move on to deploying the cluster.**

:::info
Make sure your backup is secure and private, someone with access to these files could get the validators slashed.
:::
</TabItem>

<TabItem value="cli" label="CLI">
1. Clone the [CDVC repo](https://github.com/ObolNetwork/charon-distributed-validator-cluster) and `cd` into the directory.

```sh
# Clone the repo
git clone https://github.com/ObolNetwork/charon-distributed-validator-cluster.git

# Change directory
cd charon-distributed-validator-cluster/
```

2. Run the cluster creation command, setting required flag values.

Run the below command to create the validator private key shares and cluster artifacts locally, replacing the example values for `nodes`, `network`, `num-validators`, `fee-recipient-addresses`, and `withdrawal-addresses`. Check the [Charon CLI reference](https://docs.obol.org/next/learn/charon/charon-cli-reference#create-a-full-cluster-locally) for additional, optional flags to set.

```sh
  docker run --rm -v "$(pwd):/opt/charon" obolnetwork/charon:v1.7.0 create cluster \
    --nodes=6 \
    --network=holesky \
    --num-validators=1 \
    --name="Quickstart Guide Cluster" \
    --cluster-dir="cluster" \
    --fee-recipient-addresses=0x000000000000000000000000000000000000dead \
    --withdrawal-addresses=0x000000000000000000000000000000000000dead \
    --publish
```

:::tip
If you would like your cluster to appear on the [DV Launchpad](https://docs.obol.org/next/learn/intro/launchpad), add the `--publish` flag to the command.
:::

After the `create cluster` command is run, you should have multiple subfolders within the newly created `./cluster/` folder, one for each node created.

**Backup the `./cluster/` folder, then move on to deploying the cluster.**

:::info
Make sure your backup is secure and private, someone with access to these files could get the validators slashed.
:::
</TabItem>
</Tabs>

### Step 2: Deploy and start the nodes {#step-1-create-the-key-shares-locally}
<Tabs>
<TabItem value="run-the-nodes-on-a-single-machine" label="Run the nodes on a single machine">
:::warning
This part of the guide only runs one Execution Client, one Consensus Client, and 6 Distributed Validator Charon Client + Validator Client pairs on a single docker instance, and **is not suitable for a mainnet deployment**. (If this machine fails, there will not be any fault tolerance - the cluster will also fail.)

For a production deployment with fault tolerance, follow the part of the guide instructing you how to distribute the nodes across multiple machines.
:::

Run this command to start your cluster containers if you deployed using the [CDVC repo](https://github.com/ObolNetwork/charon-distributed-validator-cluster).

```sh
# Start the distributed validator cluster
docker compose up --build -d
```

Check the monitoring dashboard and see if things look all right.

```sh
# Open Grafana
open http://localhost:3000/d/laEp8vupp
```
</TabItem>

<TabItem value="run-the-nodes-on-multiple-machines" label="Run the nodes on multiple machines">
:::warning
To distribute your cluster across multiple machines, each node in the cluster needs one of the folders called `node*/` to be copied to it. Each folder should be copied to a [CDVN repo](https://github.com/ObolNetwork/charon-distributed-validator-node) and renamed from `node*` to `.charon`.

Right now, the `charon create cluster` command [used earlier to create the private keys](https://docs.obol.org/next/run/start/quickstart_alone#step-1-create-the-key-shares-locally) outputs a folder structure like `cluster/node*/`. Make sure to grab the `./node*/` folders, _rename_ them to `.charon` and then move them to one of the single node repos below. Once all nodes are online, synced, and connected, you will be ready to activate your validator.
:::

This is necessary for the folder to be found by the default `charon run` command. Optionally, it is possible to override `charon run`'s default file locations by using `charon run --private-key-file="node0/charon-enr-private-key" --lock-file="node0/cluster-lock.json"` for each instance of Charon you start (substituting `node0` for each node number in your cluster as needed).

👉 Use the single node [docker compose](https://github.com/ObolNetwork/charon-distributed-validator-node), the kubernetes [manifests](https://github.com/ObolNetwork/charon-k8s-distributed-validator-node), or the [helm chart](https://github.com/ObolNetwork/helm-charts) example repos to get your nodes up and connected after loading the `.charon` folder artifacts into them appropriately.\
\
Output from create cluster:

```
cluster
├── node0
│   ├── charon-enr-private-key
│   ├── cluster-lock.json
│   ├── deposit-data.json
│   └── validator_keys
│       ├── keystore-0.json
│       ├── keystore-0.txt
│       ├── ...
│       ├── keystore-N.json
│       └── keystore-N.txt
├── node1
│   ├── charon-enr-private-key
│   ├── cluster-lock.json
│   ├── deposit-data.json
│   └── validator_keys
│       ├── keystore-0.json
│       ├── keystore-0.txt
│       ├── ...
│       ├── keystore-N.json
│       └── keystore-N.txt
├── node2
│   ├── charon-enr-private-key
│   ├── cluster-lock.json
│   ├── deposit-data.json
│   └── validator_keys
│       ├── keystore-0.json
│       ├── keystore-0.txt
│       ├── ...
│       ├── keystore-N.json
│       └── keystore-N.txt
└── node3
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

Folder structure to be placed on each DV node:

```
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
Currently, the quickstart repo installs a node on the Holesky testnet. It is possible to choose a different network (another testnet, or mainnet) by overriding the `.env` file.

`.env.sample` is a sample environment file that allows overriding default configuration defined in `docker-compose.yml`. Uncomment and set any variable to override its value.

Set up the desired inputs for the DV, including the network you wish to operate on. Check the [Charon CLI reference](https://docs.obol.org/next/learn/charon/charon-cli-reference) for additional optional flags to set. Once you have set the values you wish to use. Make a copy of this file called `.env`.

```sh
# Copy ".env.sample", renaming it ".env"
cp .env.sample.holesky .env
```
:::
</TabItem>
</Tabs>
