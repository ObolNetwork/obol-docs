---
sidebar_position: 1
description: Test the solo cluster locally
---

# Run a test cluster locally
:::warning
This is a demo repo to understand how Distributed Validators work and is not suitable for a production deployment.

This guide only runs one Execution Client, one Consensus Client, and 6 Distributed Validator Charon Client + Validator Client pairs on a single docker instance. As a consequence, if this machine fails, there will not be fault tolerance.

Follow these two guides sequentially instead for production deployment: [create keys centrally](./create-keys.md) and [how to deploy them](./deploy.md). 
:::

The [`charon-distributed-validator-cluster`](https://github.com/ObolNetwork/charon-distributed-validator-cluster) repo contains six charon clients in separate docker containers along with an execution client and consensus client, simulating a Distributed Validator cluster running.

The default cluster consists of:
- [Nethermind](https://github.com/NethermindEth/nethermind), an execution layer client
- [Lighthouse](https://github.com/sigp/lighthouse), a consensus layer client
- Six [charon](https://github.com/ObolNetwork/charon) nodes
- A mixture of validator clients:
   - VC0: [Lighthouse](https://github.com/sigp/lighthouse)
   - vc1: [Teku](https://github.com/ConsenSys/teku)
   - vc2: [Nimbus](https://github.com/status-im/nimbus-eth2)
   - vc3: [Lighthouse](https://github.com/sigp/lighthouse)
   - vc4: [Teku](https://github.com/ConsenSys/teku)
   - vc5: [Nimbus](https://github.com/status-im/nimbus-eth2)

## Pre-requisites

- Ensure you have [docker](https://docs.docker.com/engine/install/) installed.
- Ensure you have [git](https://git-scm.com/downloads) installed. 
- Make sure `docker` is running before executing the commands below.

## Create the key shares locally

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

3. Create the artifacts needed to run a DV cluster by running the following command:

   ```sh
   # Enter required validator addresses
   WITHDRAWAL_ADDR=<ENTER YOUR WITHDRAWAL ADDRESS HERE>
   FEE_RECIPIENT_ADDR=<ENTER YOUR FEE RECIPIENT ADDRESS HERE>

   # Create a distributed validator cluster
   docker run --rm -v "$(pwd):/opt/charon" obolnetwork/charon:v0.17.0 create cluster --name="mycluster" --cluster-dir="cluster-nodes" --withdrawal-addresses="${WITHDRAWAL_ADDR}" --fee-recipient-addresses="${FEE_RECIPIENT_ADDR}" --nodes 6 --threshold 5 --network goerli --num-validators=1
   ```

These commands will create six folders within `cluster-nodes`, one for each node created. You will need to rename `node*` to `.charon` for each folder to be found by the default `charon run` command, or you can use `charon run --private-key-file="./node0/charon-enr-private-key" --lock-file="./node0/cluster-lock.json"` for each instance of charon you start.

## Start the cluster

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