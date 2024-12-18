---
sidebar_position: 3
description: Migrate an existing validator by splitting its private key into shares
---

# Migrate an Existing Validator

:::warning
This process should only be used if you want to split an *existing validator private key* into multiple private key shares for use in a Distributed Validator Cluster. **If your existing validator is not properly shut down before the Distributed Validator starts, your validator may be slashed**.

If you are starting a new validator, you should follow a [quickstart guide](../../run/start/quickstart_overview.md) instead.
:::

Split an existing Ethereum validator key into multiple key shares for use in an [Obol Distributed Validator Cluster](../../learn/intro/key-concepts.md#distributed-validator-cluster).

## Pre-requisites

- Ensure you have the existing validator keystores (the ones to split) and passwords.
- Ensure you have [docker](https://docs.docker.com/engine/install/) installed.
- Make sure `docker` is running before executing the commands below.
- If you use MEV-Boost, you must either:
    - Turn off your MEV-Boost client before you split your keys, or;
    - Temporarily use a relay you won't be using when running the Distributed Validator; to prevent registering for MEV with a timestamp more recent than the one Charon prepares at the moment of key splitting.

## Step 1. Prepare the existing keystore files

Create a folder to hold the encrypted keystores, along with the passwords to decrypt them.

```shell
   # Create a folder
   mkdir split_keys
```

Copy the existing validator `keystore.json` files into this new folder. Alongside them, with a matching filename but ending with `.txt` should be the password to the keystore (e.g.: `keystore-0.json`, `keystore-0.txt`). The files must start with `keystore*`.

At the end of this process, you should have a tree like this:

```shell
├── split_keys
│   ├── keystore-0.json
│   ├── keystore-0.txt
│   ├── keystore-1.json
│   ├── keystore-1.txt
│   ...
│   ├── keystore-N.json
│   ├── keystore-N.txt
```

## Step 2. Split the keys using the charon docker command

Run the following docker command to split the keys (for mainnet):

```shell
CHARON_VERSION=                # E.g. v1.2.0
CLUSTER_NAME=                  # The name of the cluster you want to create.
WITHDRAWAL_ADDRESS=            # The address you want to use for withdrawals (this is just for accuracy in your lock file, you can't change a withdrawal address for a validator that has already been deposited)
FEE_RECIPIENT_ADDRESS=         # The address you want to use for block reward and MEV payments.
NODES=                         # The number of nodes in the cluster.

docker run --rm -v $(pwd):/opt/charon obolnetwork/charon:${CHARON_VERSION} create cluster \
   --name="${CLUSTER_NAME}" \
   --withdrawal-addresses="${WITHDRAWAL_ADDRESS}" \
   --fee-recipient-addresses="${FEE_RECIPIENT_ADDRESS}" \
   --split-existing-keys \
   --split-keys-dir=/opt/charon/split_keys \
   --nodes ${NODES} \
   --network mainnet
```

The above command will create `validator_keys` along with `cluster-lock.json` in `./cluster` for each node.

Command output:

```shell
***************** WARNING: Splitting keys **********************
 Please make sure any existing validator has been shut down for
 at least 2 finalised epochs before starting the Charon cluster,
 otherwise slashing could occur.                               
****************************************************************

Created Charon cluster:
 --split-existing-keys=true

./cluster/
├─ node[0-*]/                   # Directory for each node
│  ├─ charon-enr-private-key    # Charon networking private key for node authentication
│  ├─ cluster-lock.json         # Cluster lock defines the cluster lock file which is signed by all nodes
│  ├─ validator_keys            # Validator keystores and password
│  │  ├─ keystore-*.json        # Validator private share key for duty signing
│  │  ├─ keystore-*.txt         # Keystore password files for keystore-*.json
```

These split keys can now be used to start a Charon cluster.

## Step 3. (Optional) Encrypt artifacts for distribution

Within each folder are the encrypted [private key shares](../../learn/intro/key-concepts.md#distributed-validator-key-share), along with the decryption passwords. To transmit these folders to the operators/machines where they will run, it might be prudent to encrypt the folder as a `.zip` to transport them.

```shell
# For each folder in ./cluster/ encrypt it with a different password
zip -er node1.zip ./cluster/node1/

# Repeat for node2,...,nodeN.
```