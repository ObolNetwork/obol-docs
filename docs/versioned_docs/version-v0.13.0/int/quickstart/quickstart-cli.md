---
sidebar_position: 4
description: Run one node in a multi-operator distributed validator cluster using the CLI
---

# Run a cluster using the CLI

:::warning Charon is in an early alpha state and is not ready to be run on mainnet :::

The following instructions aim to assist a group of operators coordinating together to create a distributed validator cluster.

## Pre-requisites

* Ensure you have [docker](https://docs.docker.com/engine/install/) installed.
* Ensure you have [git](https://git-scm.com/downloads) installed.
* Make sure `docker` is running before executing the commands below.
* Decide who the Leader or Creator of your cluster will be. Only them have to perform [step 2](quickstart-cli.md#step-2-leader-creates-the-dkg-configuration-file-and-distributes-it-to-everyone-else) and [step 5](quickstart-cli.md#step-5-activate-the-deposit-data) in this quickstart. They do not get any special privilege.
  * In the **Leader** case, the operator creating the cluster will also operate a node in the cluster.
  * In the **Creator** case, the cluster is created by an external party to the cluster.

## Step 1. Create and back up a private key for charon

In order to prepare for a distributed key generation ceremony, all operators (including the leader but NOT a creator) need to create an [ENR](https://github.com/ObolNetwork/obol-docs/blob/main/versioned_docs/version-v0.13.0/int/faq/errors.mdx#enrs-keys) for their charon client. This ENR is a public/private key pair, and allows the other charon clients in the DKG to identify and connect to your node.

```sh
# Clone this repo
git clone https://github.com/ObolNetwork/charon-distributed-validator-node.git

# Change directory
cd charon-distributed-validator-node

# Create your charon ENR private key, this will create a charon-enr-private-key file in the .charon directory
docker run --rm -v "$(pwd):/opt/charon" obolnetwork/charon:v0.13.0 create enr
```

You should expect to see a console output like

```
Created ENR private key: .charon/charon-enr-private-key
enr:-JG4QGQpV4qYe32QFUAbY1UyGNtNcrVMip83cvJRhw1brMslPeyELIz3q6dsZ7GblVaCjL_8FKQhF6Syg-O_kIWztimGAYHY5EvPgmlkgnY0gmlwhH8AAAGJc2VjcDI1NmsxoQKzMe_GFPpSqtnYl-mJr8uZAUtmkqccsAx7ojGmFy-FY4N0Y3CCDhqDdWRwgg4u
```

:::warning Please make sure to create a backup of the private key at `.charon/charon-enr-private-key`. Be careful not to commit it to git! **If you lose this file you won't be able to take part in the DKG ceremony and start the DV cluster successfully.** :::

Finally, share your ENR with the leader or creator so that he/she can proceed to Step 2.

## Step 2. Leader or Creator creates the DKG configuration file and distribute it to cluster operators

1. The leader or creator of the cluster will prepare the `cluster-definition.json` file for the Distributed Key Generation ceremony using the `charon create dkg` command.

```
# Prepare an environment variable file
cp .env.create_dkg.sample .env.create_dkg
```

2. Populate the `.env.create_dkg` file created with the `cluster name`, the `fee recipient` and `withdrawal Ethereum addresses`, and the `ENRs` of all the operators participating in the cluster.
   * The file generated is hidden by default. To view it, run `ls -al` in your terminal. Else, if you are on `macOS`, press `Cmd + Shift + .` to view all hidden files in the finder application.
3. Run the `charon create dkg` command that generates DKG cluster-definition.json file.

```
docker run --rm -v "$(pwd):/opt/charon" --env-file .env.create_dkg obolnetwork/charon:v0.13.0 create dkg
```

This command should output a file at `.charon/cluster-definition.json`. This file needs to be shared with the other operators in a cluster.

## Step 3. Run the DKG

After receiving the `cluster-definition.json` file created by the leader, cluster operators should ideally save it in the `.charon/` folder that was created during step 1, alternatively the `--definition-file` flag can override the default expected location for this file.

Every cluster member then participates in the DKG ceremony. For Charon v1, this needs to happen relatively synchronously between participants at an agreed time.

```
# Participate in DKG ceremony, this will create .charon/cluster-lock.json, .charon/deposit-data.json and .charon/validator_keys
docker run --rm -v "$(pwd):/opt/charon" obolnetwork/charon:v0.13.0 dkg
```

> This is a helpful [video walkthrough](https://www.youtube.com/watch?v=94Pkovp5zoQ\&ab_channel=ObolNetwork).

Assuming the DKG is successful, a number of artefacts will be created in the `.charon` folder. These include:

* A `deposit-data.json` file. This contains the information needed to activate the validator on the Ethereum network.
* A `cluster-lock.json` file. This contains the information needed by charon to operate the distributed validator cluster with its peers.
* A `validator_keys/` folder. This folder contains the private key shares and passwords for the created distributed validators.

At this point you should make a backup of the `.charon/validator_keys` folder as replacing lost private keys is not straightforward at this point in charon's development. The `cluster-lock` and `deposit-data` files are identical for each operator and can be copied if lost.

## Step 4. Start your Distributed Validator Node

With the DKG ceremony over, the last phase before activation is to prepare your node for validating over the long term. This repo is configured to sync an execution layer client (`geth`) and a consensus layer client (`lighthouse`).

Before completing these instructions, you should assign a static local IP address to your device (extending the DHCP reservation indefinitely or removing the device from the DCHP pool entirely if you prefer), and port forward the TCP protocol on the public port `:3610` on your router to your device's local IP address on the same port. This step is different for every person's home internet, and can be complicated by the presence of dynamic public IP addresses. We are currently working on making this as easy as possible, but for the time being, a distributed validator cluster isn't going to work very resiliently if all charon nodes cannot talk directly to one another and instead need to have an intermediary node forwarding traffic to them.

**Caution**: If you manually update `docker-compose` to mount `lighthouse` from your locally synced `~/.lighthouse`, the whole chain database may get deleted. It'd be best not to manually update as `lighthouse` checkpoint-syncs so the syncing doesn't take much time.

**Note**: If you have a `geth` node already synced, you can simply copy over the directory. For ex: `cp -r ~/.ethereum/goerli data/geth`. This makes everything faster since you start from a synced geth node.

```
# Delete lighthouse data if it exists
rm -r ./data/lighthouse

# Spin up a Distributed Validator Node with a Validator Client
docker-compose up

# Open Grafana dashboard
open http://localhost:3000/d/singlenode/
```

You should use the grafana dashboard to infer whether your cluster is healthy. In particular you should check:

* That your charon client can connect to the configured beacon client.
* That your charon client can connect to all peers.

Most components in the dashboard have some help text there to assist you in understanding your cluster performance.

You might notice that there are logs indicating that a validator cannot be found and that APIs are returning 404. This is to be expected at this point, as the validator public keys listed in the lock file have not been deposited and acknowledged on the consensus layer yet (usually \~16 hours after the deposit is made).

If at any point you need to turn off your node, you can run:

```
# Shut down the currently running distributed validator node
docker-compose down
```

## Step 5. Activate the deposit data

Congrats 🎉 if your cluster have gotten to this step of the quickstart and have successfully created a distributed validator together.

If you have connected all of your charon clients together such that the monitoring indicates that they are all healthy and ready to operate, **ONE operator**, usually the leader, may process to activate this deposit data with the existing [staking launchpad](https://goerli.launchpad.ethereum.org/).

This process can take a minimum of 16 hours, with the maximum time to activation being dictated by the length of the activation queue, which can be weeks. You can leave your distributed validator cluster offline until closer to the activation period if you would prefer. You can also use this time to improve and harden your monitoring and alerting for the cluster.

## Step 6 - Optional. Add the Monitoring Credentials

:::info This step is **optional** but will help the Obol Team monitor the health of your cluster. It can only be perfomed if the Obol Team has given you a credential to use. :::

1. You may have been provided with **Monitoring Credentials** used to push distributed validator metrics to our central prometheus service to monitor, analyze and improve your cluster's performance. The provided credentials needs to be added in `prometheus/prometheus.yml` replacing `$PROM_REMOTE_WRITE_TOKEN` and will look like: `obol20!tnt8U!C...`.
2. To help us easily identify your cluster, also add your `cluster name` in the `prometheus/prometheus.yml` file, replacing `$CLUSTER_NAME`.

The final `prometheus/prometheus.yml` file would look like:

```
global:
  scrape_interval:     30s # Set the scrape interval to every 30 seconds.
  evaluation_interval: 30s # Evaluate rules every 30 seconds.
  external_labels:
    cluster_name: cluster-123

remote_write:
  - url: https://vm.monitoring.gcp.obol.tech/write
    authorization:
      credentials: obol20!tnt8U!C...

scrape_configs:
  - job_name: 'charon'
    static_configs:
      - targets: ['charon:3620']
  - job_name: 'teku'
    static_configs:
      - targets: ['teku:8008']
  - job_name: 'node-exporter'
    static_configs:
      - targets: ['node-exporter:9100']
```

## Step 7. Validator Voluntary Exit

:::warning This step only needs to be taken when you decide to exit your DV cluster. ::: A voluntary exit is when a validator chooses to stop performing its duties, and exits the beacon chain permanently. To voluntarily exit, the validator must continue performing its validator duties until successfully exited to avoid penalties.

To trigger a voluntary exit, a sidecar `docker-compose` command is executed that signs and submits the voluntary exit to the active running charon node that shares it with other nodes in the cluster. The commands below should be executed in the terminal on the same machine and same folder as the active running `charon-distribute-validator-node` docker compose.

:::info A threshold of operators in the cluster need to perform this task to exit a validator. :::

* Create a new `exit_keys` folder next to `.charon/validator_keys`: `mkdir .charon/exit_keys`
* Copy the validator keys and passwords that you want to exit from the `validator_keys` folder to the `exit_keys` folder.
  * E.g. to exit validator #4: `cp .charon/validator_keys/keystore/keystore-4* .charon/exit_keys/`
  * Warning: all keys copied to the `exit_keys` folder will be exited, so be careful!
* Ensure the external network in `compose-voluntary-exit.yml` is correct.
  * Confirm the name of the exiting `charon-distributed-validator-node` docker network: `docker network ls`.
  * If it isn't `charon-distributed-validator-node-dvnode`, then update `compose-voluntary-exit.yml` accordingly.
* Ensure the latest fork version epoch is used:
  * Voluntary exists require an epoch after which they take effect.
  * All VCs need to sign and submit the exact same messages (epoch) in DVT.
  * `--epoch=1` would be ideal, since all chains have that epoch in the past, so the validator should exit immediately.
  * `compose-voluntary-exit.yml` is configured with `--epoch=112260` which is the latest Bellatrix fork on Prater.
  * If the Charon cluster is running on a different chain, **ALL** operators must update `--epoch` to the same latest fork version returned by `curl $BEACON_NODE/eth/v1/config/fork_schedule`.
* Run the command to submit this node's partially signed voluntary exit:
  * `docker-compose -f compose-voluntary-exit.yml up`
  * Confirm the logs: `Exit for validator XXXXX submitted`
  * Exit the container: `Ctrl-C`
* The charon metric `core_parsigdb_exit_total` will be incremented each time a voluntary exit partial signature is received, either from this node or from peers.

## Feedback

If you have gotten this far through the process, and whether you succeeded or failed at running the distributed validator successfully, we would like to hear your feedback on the process and where you encountered difficulties. Please let us know by joining and posting on our [Discord](https://discord.gg/n6ebKsX46w). Also, feel free to add issues to our [GitHub repos](https://github.com/ObolNetwork).

## Other Actions

The above steps should get you running a distributed validator cluster. The following are some extra steps you may want to take either to improve the resilience and performance of your distributed validator cluster.

### Docker power users

This section of the readme is intended for the "docker power users", i.e., for the ones who are familiar with working with `docker-compose` and want to have more flexibility and power to change the default configuration.

We use the "Multiple Compose File" feature which provides a very powerful way to override any configuration in `docker-compose.yml` without needing to modify git-checked-in files since that results in conflicts when upgrading this repo. See [this](https://docs.docker.com/compose/extends/#multiple-compose-files) for more details.

There are two additional files in this repository, `compose-debug.yml` and `docker-compose.override.yml.sample`, alongwith the default `docker-compose.yml` file that you can use for this purpose.

* `compose-debug.yml` contains some additional containers that developers can use for debugging, like `jaeger`. To achieve this, you can run:

```
docker-compose -f docker-compose.yml -f compose-debug.yml up
```

* `docker-compose.override.yml.sample` is intended to override the default configuration provided in `docker-compose.yml`. This is useful when, for example, you wish to add port mappings or want to disable a container.
* To use it, just copy the sample file to `docker-compose.override.yml` and customise it to your liking. Please create this file ONLY when you want to tweak something. This is because the default override file is empty and docker errors if you provide an empty compose file.

```
cp docker-compose.override.yml.sample docker-compose.override.yml

# Tweak docker-compose.override.yml and then run docker-compose up
docker-compose up
```

* You can also run all these compose files together. This is desirable when you want to use both the features. For example, you may want to have some debugging containers AND also want to override some defaults. To achieve this, you can run:

```
docker-compose -f docker-compose.yml -f docker-compose.override.yml -f compose-debug.yml up
```
