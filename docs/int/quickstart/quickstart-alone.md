---
sidebar_position: 2
description: Run all nodes in a distributed validator cluster
---

# Run a cluster alone

:::caution
Charon is in an early alpha state and is not ready to be run on mainnet
:::

## Pre-requisites

- Ensure you have [docker](https://docs.docker.com/engine/install/) installed.
- Ensure you have [git](https://git-scm.com/downloads) installed. 
- Make sure `docker` is running before executing the commands below.

## Step 1. Download the components and set up the environment

1. Clone the [charon-distributed-validator-cluster](https://github.com/ObolNetwork/charon-distributed-validator-cluster) repo and `cd` into the directory.

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

## Step 2. Create the artifacts needed to run a DV cluster

Run the following command:

```sh
# Enter required validator addresses
WITHDRAWAL_ADDR=<ENTER YOUR WITHDRAWAL ADDRESS HERE>
FEE_RECIPIENT_ADDR=<ENTER YOUR FEE RECIPIENT ADDRESS HERE>

# Create a distributed validator cluster
docker run --rm -v "$(pwd):/opt/charon" obolnetwork/charon:v0.14.4 create cluster --name="mycluster" --withdrawal-addresses="${WITHDRAWAL_ADDR}" --fee-recipient-addresses="${FEE_RECIPIENT_ADDR}" --nodes 6 --threshold 5
```

This command will create a subdirectory `.charon/cluster`. In it are six folders, one for each charon node created. Each folder contains partial private keys that together make up the distributed validator described in `.charon/cluster/cluster-lock.json`. Note
that charon versions prior to `v0.14.4` had a single `--withdrawal-address` flag which was changed to the `--withdrawal-addresses` flag in the [v0.14.4 release](https://github.com/ObolNetwork/charon/releases/tag/v0.14.4).

This guide will launch all six charon clients in separate containers along with an execution client and consensus client. To distribute your cluster physically, copy each directory with one (or several) private keys within it to the other machines you want to use. Consider using the single node [docker compose](https://github.com/ObolNetwork/charon-distributed-validator-node), the kubernetes [manifests](https://github.com/ObolNetwork/charon-k8s-distributed-validator-node), or the [helm chart](https://github.com/ObolNetwork/helm-charts) example repos to get your nodes up and connected.

### Distributed Validator Cluster

The default cluster consists of:
- [Nethermind](https://github.com/NethermindEth/nethermind), an execution layer client
- [Lighthouse](https://github.com/sigp/lighthouse), a consensus layer client
- Six [charon](https://github.com/ObolNetwork/charon) nodes
- Mixture of validator clients:
   - vc0: [Lighthouse](https://github.com/sigp/lighthouse)
   - vc1: [Teku](https://github.com/ConsenSys/teku)
   - vc2: [Nimbus](https://github.com/status-im/nimbus-eth2)
   - vc3: [Lighthouse](https://github.com/sigp/lighthouse)
   - vc4: [Teku](https://github.com/ConsenSys/teku)
   - vc5: [Nimbus](https://github.com/status-im/nimbus-eth2)

The intention is to support all validator clients. Read more about our client support [here](https://dvt.obol.tech).

## Step 3. Start the cluster
Run this command from each machine containing private keys to start your cluster containers

```sh
# Start the distributed validator cluster
docker compose up --build
```
Check the monitoring dashboard and see if things look all right

```sh
# Open Grafana
open http://localhost:3000/d/laEp8vupp
```

## Step 4. Activate the validator

If all the above went correctly, it's natural to see logs like:

`INFO sched      No active DVs for slot {"slot": 3288627}`

This is because you need to activate your freshly created distributed validator on the testnet with the [existing launchpad](https://goerli.launchpad.ethereum.org/en/). The validator deposit data should be in `.charon/cluster/deposit-data.json`.

This process can take a minimum of 16 hours, with the maximum time to activation being dictated by the length of the activation queue, which can be weeks. You can leave your distributed validator cluster offline until closer to the activation period if you would prefer. You can also use this time to improve and harden your monitoring and alerting for the cluster.

## Step 5. Validator Voluntary Exit

Exiting your validator(s) can be useful in situations where you want to stop staking and withdraw your staked ETH.

👉 Follow the exit guide [here](docs/int/quickstart/quickstart-exit.md)

## Run Prysm VCs in a DV Cluster

We have provided experimental support of prysm validator client through [compose-prysm.yml](https://github.com/ObolNetwork/charon-distributed-validator-cluster/blob/main/compose-prysm.yml) 
which needs a prysm beacon node to work alongside a REST based beacon node. Here are the steps to test prysm in a DV Cluster:

1. Run the following command:
   ```sh
   cp docker-compose.override.yml.sample docker-compose.override.yml
   ```
2. **Disable** the VCs in `docker-compose.override.yml` that are to be replaced by corresponding prysm VCs by un-commenting profiles field
([more details on profiles](https://docs.docker.com/compose/profiles/)). Also disable the prysm VCs that are not required in the cluster in `docker-compose.override.yml`.
3. Run the following command:
   ```sh
   docker compose -f docker-compose.yml -f compose-prysm.yml -f docker-compose.override.yml up --build
   ```

Note: Support for prysm validator clients is in an experimental phase as prysm doesn't provide [complete support](https://github.com/prysmaticlabs/prysm/issues/11580)
for running their validator client on a beacon node REST API. 

## Updating DVT stack

It is highly recommended to upgrade your DVT stack from time to time. This ensures that your node is secure, performant, up-to-date and you don't miss important hard forks.
To do this, follow these steps:
```
# Change to the node directory
cd charon-distributed-validator-cluster

# Stop and remove containers, networks
# Give sufficient time for all containers to exit
docker compose down

# Pull latest changes to the repo
git pull

# Restart your DVT stack!
docker compose up -d --build
```

## Feedback

If you have gotten this far through the process, and whether you succeeded or failed at running the distributed validator successfully, we would like to hear
your feedback on the process and where you encountered difficulties. Please let us know by joining and posting on our [Discord](https://discord.gg/n6ebKsX46w). 
Also, feel free to add issues to our [GitHub repos](https://github.com/ObolNetwork).