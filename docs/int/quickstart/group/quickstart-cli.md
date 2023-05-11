---
sidebar_position: 3
description: Run one node in a multi-operator distributed validator cluster using the CLI
---

# Using the CLI

:::caution
Charon is in an alpha state and should be used with caution according to its [Terms of Use](https://obol.tech/terms.pdf).
:::

The following instructions aim to assist a group of operators coordinating together to create a distributed validator cluster via the CLI.

## Pre-requisites

- Ensure you have [docker](https://docs.docker.com/engine/install/) installed.
- Ensure you have [git](https://git-scm.com/downloads) installed. 
- Make sure `docker` is running before executing the commands below.
- Decide who the Leader or Creator of your cluster will be. Only them have to perform [step 2](#step-2-leader-creates-the-dkg-configuration-file-and-distributes-it-to-everyone-else) and [step 5](#step-5-activate-the-deposit-data) in this quickstart. They do not get any special privilege.
  - In the **Leader** case, the operator creating the cluster will also operate a node in the cluster.
  - In the **Creator** case, the cluster is created by an external party to the cluster.

## Step 1. Create and back up a private key for charon

In order to prepare for a distributed key generation ceremony, all operators (including the leader but NOT a creator) need to create an [ENR](../faq/errors.mdx#enrs-keys) for their charon client. This ENR is a public/private key pair, and allows the other charon clients in the DKG to identify and connect to your node.

```sh
# Clone this repo
git clone https://github.com/ObolNetwork/charon-distributed-validator-node.git

# Change directory
cd charon-distributed-validator-node

# Create your charon ENR private key, this will create a charon-enr-private-key file in the .charon directory
docker run --rm -v "$(pwd):/opt/charon" obolnetwork/charon:v0.15.0 create enr
```

You should expect to see a console output like

    Created ENR private key: .charon/charon-enr-private-key
    enr:-JG4QGQpV4qYe32QFUAbY1UyGNtNcrVMip83cvJRhw1brMslPeyELIz3q6dsZ7GblVaCjL_8FKQhF6Syg-O_kIWztimGAYHY5EvPgmlkgnY0gmlwhH8AAAGJc2VjcDI1NmsxoQKzMe_GFPpSqtnYl-mJr8uZAUtmkqccsAx7ojGmFy-FY4N0Y3CCDhqDdWRwgg4u

:::caution
Please make sure to create a backup of the private key at `.charon/charon-enr-private-key`. Be careful not to commit it to git! **If you lose this file you won't be able to take part in the DKG ceremony and start the DV cluster successfully.**
:::

Finally, share your ENR with the leader or creator so that he/she can proceed to Step 2.

## Step 2. Leader or Creator creates the DKG configuration file and distribute it to cluster operators

1. The leader or creator of the cluster will prepare the `cluster-definition.json` file for the Distributed Key Generation ceremony using the `charon create dkg` command.

  ```
  # Prepare an environment variable file
  cp .env.create_dkg.sample .env.create_dkg
  ```
2. Populate the `.env.create_dkg` file created with the `cluster name`, the `fee recipient` and `withdrawal Ethereum addresses`, and the `ENRs` of all the operators participating in the cluster.
    - The file generated is hidden by default. To view it, run `ls -al` in your terminal. Else, if you are on `macOS`, press `Cmd + Shift + .` to view all hidden files in the finder application.

3. Run the `charon create dkg` command that generates DKG cluster-definition.json file.
  ```
  docker run --rm -v "$(pwd):/opt/charon" --env-file .env.create_dkg obolnetwork/charon:v0.15.0 create dkg
  ```

  This command should output a file at `.charon/cluster-definition.json`. This file needs to be shared with the other operators in a cluster.

## Step 3. Run the DKG

After receiving the `cluster-definition.json` file created by the leader, cluster operators should ideally save it in the `.charon/` folder that was created during step 1, alternatively the `--definition-file` flag can override the default expected location for this file.

Every cluster member then participates in the DKG ceremony. For Charon v1, this needs to happen relatively synchronously between participants at an agreed time.

```
# Participate in DKG ceremony, this will create .charon/cluster-lock.json, .charon/deposit-data.json and .charon/validator_keys
docker run --rm -v "$(pwd):/opt/charon" obolnetwork/charon:v0.15.0 dkg
```

>This is a helpful [video walkthrough](https://www.youtube.com/watch?v=94Pkovp5zoQ&ab_channel=ObolNetwork).

Assuming the DKG is successful, a number of artefacts will be created in the `.charon` folder. These include:

- A `deposit-data.json` file. This contains the information needed to activate the validator on the Ethereum network.
- A `cluster-lock.json` file. This contains the information needed by charon to operate the distributed validator cluster with its peers.
- A `validator_keys/` folder. This folder contains the private key shares and passwords for the created distributed validators.

:::caution
Please make sure to create a backup of `.charon/validator_keys`. **If you lose your keys you won't be able to start the DV cluster successfully.**
:::

:::info
The `cluster-lock` and `deposit-data` files are identical for each operator and can be copied if lost.
:::

## Step 4. Start your Distributed Validator Node

With the DKG ceremony over, the last phase before activation is to prepare your node for validating over the long term. This repo is configured to sync an execution layer client (`geth`) and a consensus layer client (`lighthouse`).

Before completing these instructions, you should assign a static local IP address to your device (extending the DHCP reservation indefinitely or removing the device from the DCHP pool entirely if you prefer), and port forward the TCP protocol on the public port `:3610` on your router to your device's local IP address on the same port. This step is different for every person's home internet, and can be complicated by the presence of dynamic public IP addresses. We are currently working on making this as easy as possible, but for the time being, a distributed validator cluster isn't going to work very resiliently if all charon nodes cannot talk directly to one another and instead need to have an intermediary node forwarding traffic to them.

**Caution**: If you manually update `docker-compose` to mount `lighthouse` from your locally synced `~/.lighthouse`, the whole chain database may get deleted. It'd be best not to manually update as `lighthouse` checkpoint-syncs so the syncing doesn't take much time.

**Note**: If you have a `geth` node already synced, you can simply copy over the directory. For ex: `cp -r ~/.ethereum/goerli data/geth`. This makes everything faster since you start from a synced geth node.

```
# Delete lighthouse data if it exists
rm -r ./data/lighthouse

# Spin up a Distributed Validator Node with a Validator Client
docker compose up

# Open Grafana dashboard
open http://localhost:3000/d/singlenode/
```

You should use the grafana dashboard to infer whether your cluster is healthy. In particular you should check:

- That your charon client can connect to the configured beacon client.
- That your charon client can connect to all peers.

Most components in the dashboard have some help text there to assist you in understanding your cluster performance.

You might notice that there are logs indicating that a validator cannot be found and that APIs are returning 404. This is to be expected at this point, as the validator public keys listed in the lock file have not been deposited and acknowledged on the consensus layer yet (usually ~16 hours after the deposit is made).

If at any point you need to turn off your node, you can run:

```
# Shut down the currently running distributed validator node
docker compose down
```