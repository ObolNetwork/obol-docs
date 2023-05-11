---
sidebar_position: 2
description: Run all nodes in a distributed validator cluster
---

# Create a DV alone

:::caution
Charon is in an alpha state and should be used with caution according to its [Terms of Use](https://obol.tech/terms.pdf).
:::

:::warning
Running a Distributed Validator alone or a solo cluster means that a single operator or entity runs all the nodes of the DV. In such a case and depending on the objective, there not necessarily the need to create the keyshares via a trustless DKG. Instead the keyshares are created centrally, then distributed securely to the nodes. 

Obviously, to maximise the value of a DV, a single operator can still create the keyshares in a trustless manner via the DKG, avoiding the private key being stored in full anywhere during the process. Follow the [group guide](docs/int/quickstart/group/index.md) instead for this latter case.
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
docker run --rm -v "$(pwd):/opt/charon" obolnetwork/charon:v0.15.0 create cluster --name="mycluster" --withdrawal-addresses="${WITHDRAWAL_ADDR}" --fee-recipient-addresses="${FEE_RECIPIENT_ADDR}" --nodes 6 --threshold 5
```

This command will create a subdirectory `.charon/cluster`. In it are six folders, one for each charon node created. Each folder contains partial private keys that together make up the distributed validator described in `.charon/cluster/cluster-lock.json`. Note
that charon versions prior to `v0.14.4` had a single `--withdrawal-address` flag which was changed to the `--withdrawal-addresses` flag in the [v0.14.4 release](https://github.com/ObolNetwork/charon/releases/tag/v0.14.4).

## Step 3. Start the cluster

:::warning
To distribute your cluster physically and start the DV, copy each `.charon` directory with one (or several) private keys within it to the other machines you want to use. Consider using the single node [docker compose](https://github.com/ObolNetwork/charon-distributed-validator-node), the kubernetes [manifests](https://github.com/ObolNetwork/charon-k8s-distributed-validator-node), or the [helm chart](https://github.com/ObolNetwork/helm-charts) example repos to get your nodes up and connected.
:::

# Testing the cluster locally

The repo also contains six charon clients in separate docker containers along with an execution client and consensus client for DENO and TESTING purposes only.

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