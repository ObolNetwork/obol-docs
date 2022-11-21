---
sidebar_position: 4
description: Run all nodes in a distributed validator cluster
---

# Run a cluster alone

:::caution
Charon is in an early alpha state and is not ready to be run on mainnet
:::

Ensure you have [docker](https://docs.docker.com/engine/install/) and [git](https://git-scm.com/downloads) installed. Also, make sure `docker` is running before executing the commands below.

1. Clone the [charon-distributed-validator-cluster](https://github.com/ObolNetwork/charon-distributed-validator-cluster) repo and `cd` into the directory.

   ```sh
   # Clone the repo
   git clone https://github.com/ObolNetwork/charon-distributed-validator-cluster.git

   # Change directory
   cd charon-distributed-validator-cluster/
   ```

1. Prepare the environment variables

   ```sh
   # Copy the sample environment variables
   cp .env.sample .env
   ```
   `.env.sample` is a sample environment file that allows overriding default configuration defined in `docker-compose.yml`. Uncomment and set any variable to override its value.

1. Create the artifacts needed to run a testnet distributed validator cluster

   ```sh
   # Create a testnet distributed validator cluster
   docker run --rm -v "$(pwd):/opt/charon" ghcr.io/obolnetwork/charon:v0.11.0 create cluster --withdrawal-address="0x000000000000000000000000000000000000dead" --nodes 6 --threshold 5
   ```

1. Start the cluster
   ```sh
   # Start the distributed validator cluster
   docker-compose up --build
   ```
1. Checkout the monitoring dashboard and see if things look all right

   ```sh
   # Open Grafana
   open http://localhost:3000/d/laEp8vupp
   ```

If all the above went correctly, it's natural to see logs like:

`INFO sched      No active DVs for slot {"slot": 3288627}`

This is because you need to activate your freshly created distributed validator on the testnet with the [existing launchpad](https://prater.launchpad.ethereum.org/en/). The validator deposit data should be in `.charon/cluster/deposit-data.json`.

## Distributed Validator Cluster

The default cluster consists of:
- [Nethermind](https://github.com/NethermindEth/nethermind), an execution layer client
- [Lighthouse](https://github.com/sigp/lighthouse), a consensus layer client
- Six [charon](https://github.com/ObolNetwork/charon) nodes
- Mixture of validator clients:
  - vc0: [Lighthouse](https://github.com/sigp/lighthouse)
  - vc1: [Teku](https://github.com/ConsenSys/teku)
  - vc2: [Vouch](https://github.com/attestantio/vouch)
  - vc3: [Lighthouse](https://github.com/sigp/lighthouse)
  - vc4: [Teku](https://github.com/ConsenSys/teku)
  - vc5: [Vouch](https://github.com/attestantio/vouch)

The intention is to support all validator clients, and work is underway to add support for lodestar to this repo, with [nimbus](https://github.com/ObolNetwork/charon-distributed-validator-cluster/issues/67) and [prysm](https://github.com/ObolNetwork/charon-distributed-validator-cluster/issues/68) support to follow in the future. Read more about our client support [here](https://github.com/ObolNetwork/charon#supported-consensus-layer-clients).

## Create Distributed Validator Keys

Create some testnet private keys for a six node distributed validator cluster with the command:

```sh
docker run --rm -v "$(pwd):/opt/charon" ghcr.io/obolnetwork/charon:v0.11.0 create cluster --withdrawal-address="0x000000000000000000000000000000000000dead" --nodes 6 --threshold 5
```

This command will create a subdirectory `.charon/cluster`. In it are six folders, one for each charon node created. Each folder contains partial private keys that together make up the distributed validator described in `.charon/cluster/cluster-lock.json`.

### Activate your validator

Along with the private keys and cluster lock file is a validator deposit data file located at `.charon/cluster/deposit-data.json`. You can use the original [staking launchpad](https://prater.launchpad.ethereum.org/) app to activate your new validator with the original UI.

Your deposit will take at minimum 8 hours to process, near to the time you can run this new cluster with the command:

```
docker-compose up --build
```

## Import Existing Validator Keys

You might already have keys to an active validator, or are more comfortable creating keys with existing tooling like the [staking deposit CLI](https://github.com/ethereum/staking-deposit-cli) and [ethdo](https://github.com/wealdtech/ethdo).

To import existing EIP-2335 validator key stores:

```
# Create a folder within this checked out repo
mkdir split_keys

# Put the validator keystore.json files in this folder.
# Alongside them, with a matching filename but ending with `.txt` should be the password to the keystore.
# E.g. keystore-0.json keystore-0.txt

# Split these keystores into "n" (--nodes) key shares with "t" (--threshold) as threshold for a distributed validator
docker run --rm  -v $(pwd):/opt/charon ghcr.io/obolnetwork/charon:v0.11.0 create cluster --split-existing-keys --split-keys-dir=/opt/charon/split_keys --threshold 4 --nodes 6

# The above command will create 4 validator keys along with cluster-lock.json and deposit-data.json in ./.charon/cluster : 
# .charon/cluster/
# ├─ cluster-lock.json	Cluster lock defines the cluster lock file which is signed by all nodes
# ├─ deposit-data.json	Deposit data file is used to activate a Distributed Validator on DV Launchpad
# ├─ node[0-5]/		Directory for each node
# │  ├─ charon-enr-private-key		Charon networking private key for node authentication
# │  ├─ validator_keys		Validator keystores and password
# │  │  ├─ keystore-*.json	Validator private share key for duty signing
# │  │  ├─ keystore-*.txt	Keystore password files for keystore-*.json
```