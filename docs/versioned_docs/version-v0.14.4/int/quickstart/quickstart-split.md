---
sidebar_position: 5
description: Split existing validator keys
---

# Split existing validator keys

:::warning Charon is in an early alpha state and is not ready to be run on mainnet.

This process should only be used if you want to split an existing validator key into multiple keyshares.

If you are starting a new validator, you should follow the [quickstart guide](https://github.com/ObolNetwork/obol-docs/blob/main/versioned_docs/version-v0.14.4/int/quickstart/README.md) instead. :::

Split an existing Ethereum validator key into multiple keyshares for use in an Obol Distributed Validator.

## Pre-requisites

* Ensure you have the existing validator keys (the ones to split) ready to be copied.
* Ensure you have [docker](https://docs.docker.com/engine/install/) installed.
* Make sure `docker` is running before executing the commands below.

## Step 1. Clone the charon repo and copy existing keystore files

Clone the [charon](https://github.com/ObolNetwork/charon) repo.

```sh
# Clone the repo
git clone https://github.com/ObolNetwork/charon.git

# Change directory
cd charon/

# Create a folder within this checked out repo
mkdir split_keys
```

Copy the existing validator `keystore.json` files into this new folder. Alongside them, with a matching filename but ending with `.txt` should be the password to the keystore. E.g., `keystore-0.json` `keystore-0.txt`

At the end of this process, you should have a tree like this:

```shell
├── split_keys
│   ├── keystore-0.json
│   ├── keystore-0.txt
│   ├── keystore-1.json
│   ├── keystore-1.txt
│   ...
│   ├── keystore-*.json
│   ├── keystore-*.txt
```

## Step 2. Split the keys using the charon docker command

Run the following docker command to split the keys:

```shell
CHARON_VERSION=                # E.g. 0.16.0
NETWORK=                       # E.g. goerli or mainnet
CLUSTER_NAME=                  # The name of the cluster you want to create.
WITHDRAWAL_ADDRESS=            # The address you want to use for withdrawals.
FEE_RECIPIENT_ADDRESS=         # The address you want to use for fee payments.
THRESHOLD=                     # The number of keyshares required to sign a message.
NODES=                         # The number of nodes in the cluster.    

docker run --rm -v $(pwd):/opt/charon obolnetwork/charon:v${CHARON_VERSION} create cluster --name="${CLUSTER_NAME}" --network="${NETWORK}" --withdrawal-addresses="${WITHDRAWAL_ADDRESS}" --fee-recipient-addresses="${FEE_RECIPIENT_ADDRESS}" --split-existing-keys --split-keys-dir=/opt/charon/split_keys --threshold ${THRESHOLD} --nodes ${NODES}
```

The above command will create `validator_keys` along with `cluster-lock.json` and `deposit-data.json` in `./.charon/cluster` for each node.

Command output:

```shell
***************** WARNING: Splitting keys **********************
 Please make sure any existing validator has been shut down for
 at least 2 finalised epochs before starting the charon cluster,
 otherwise slashing could occur.                               
****************************************************************

Created charon cluster:
 --split-existing-keys=true

.charon/cluster/
├─ node[0-*]/                   Directory for each node
│  ├─ charon-enr-private-key    Charon networking private key for node authentication
│  ├─ cluster-lock.json         Cluster lock defines the cluster lock file which is signed by all nodes
│  ├─ deposit-data.json         Deposit data file is used to activate a Distributed Validator on DV Launchpad
│  ├─ validator_keys            Validator keystores and password
│  │  ├─ keystore-*.json        Validator private share key for duty signing
│  │  ├─ keystore-*.txt         Keystore password files for keystore-*.json
```

These split keys can now be used to start a charon cluster.

## Feedback

If you have gotten this far through the process, and whether you succeeded or failed at splitting an existing validator keystore, we would like to hear your feedback on the process and where you encountered difficulties. Please let us know by joining and posting on our [Discord](https://discord.gg/n6ebKsX46w). Also, feel free to add issues to our [GitHub repos](https://github.com/ObolNetwork).
