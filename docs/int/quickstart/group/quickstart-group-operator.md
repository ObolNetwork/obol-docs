---
sidebar_position: 1
description: A node operator joins a DV cluster
---

# Operator Journey

:::caution
Charon is in an early alpha state and is not ready to be run on mainnet
:::

The following instructions aim to assist a group of operators coordinating together to create a distributed validator cluster after receiving an cluster invite link from a leader or creator.

## Overview Video
<p align="center"><iframe width="560" height="315" src="https://www.youtube.com/embed/6pXASqjAQbs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

## Pre-requisites

- Ensure you have [docker](https://docs.docker.com/engine/install/) installed.
- Ensure you have [git](https://git-scm.com/downloads) installed. 
- Make sure `docker` is running before executing the commands below.

## Step 1. Share an Ethereum address with your Leader or Creator
Before starting the cluster creation, make sure you have shared an Ethereum address with your cluster **Leader** or **Creator**. If you haven't chosen someone as a Leader or Creator yet, please go back to the [Quickstart intro](./index.md) and define one person to go through the [Leader & Creator Journey](./quickstart-group-leader-creator) before moving forward. 

## Step 2. Create and back up a private key for charon

In order to prepare for a distributed key generation ceremony, you need to create an [ENR](docs/int/faq/errors.mdx#enrs-keys) for your charon client. This ENR is a public/private key pair, and allows the other charon clients in the DKG to identify and connect to your node.

```sh
# Clone this repo
git clone https://github.com/ObolNetwork/charon-distributed-validator-node.git

# Change directory
cd charon-distributed-validator-node

# Create your charon ENR private key, this will create a charon-enr-private-key file in the .charon directory
docker run --rm -v "$(pwd):/opt/charon" obolnetwork/charon:v0.12.0 create enr
```

You should expect to see a console output like

    Created ENR private key: .charon/charon-enr-private-key
    enr:-JG4QGQpV4qYe32QFUAbY1UyGNtNcrVMip83cvJRhw1brMslPeyELIz3q6dsZ7GblVaCjL_8FKQhF6Syg-O_kIWztimGAYHY5EvPgmlkgnY0gmlwhH8AAAGJc2VjcDI1NmsxoQKzMe_GFPpSqtnYl-mJr8uZAUtmkqccsAx7ojGmFy-FY4N0Y3CCDhqDdWRwgg4u

:::caution
Please make sure to create a backup of the private key at `.charon/charon-enr-private-key`. Be careful not to commit it to git! **If you lose this file you won't be able to take part in the DKG ceremony and start the DV cluster successfully.**
:::

## Step 3. Join and sign the cluster configuration

After receiving the invite link created by the **Leader** or **Creator**, you will be able to join and sign the cluster configuration created.

1. Go to the DV launchpad link provided by the leader or creator.
2. Connect your wallet using the Ethereum address provided to the leader in [step 1](#step-1-share-an-ethereum-address-with-your-leader-or-creator).
  
  ![Connect Wallet](/img/Guide05.png)

3. Review the operators addresses submitted and click `Get Started` to continue.

  ![Get Started](/img/Guide06.png)

4. Review and accept the advisories.
5. Review the configuration created by the leader or creator and add your `ENR` generated in [step 2](#step-2-create-and-back-up-a-private-key-for-charon).

  ![Review Config](/img/Guide07.png)

6. Sign the following with your wallet 
    - The config hash. This is a hashed representation of all of the details for this cluster. 
    - Your own `ENR`. This signature authorises the key represented by this ENR to act on your behalf in the cluster.

7. Wait for all the other operators in your cluster to do the same.

## Step 3. Run the DKG
:::info
For Charon v1, the [DKG](docs/dv/charon/dkg.md) needs to happen relatively synchronously between participants at an agreed time.
:::

### Overview
<p align="center"><iframe width="560" height="315" src="https://www.youtube.com/embed/cEMhxHuNJrI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

1. Once all operators successfully signed, your screen will automatically advance to the next step and look like this. Click `Continue`. If you closed the tab, just go back to the invite link shared by the leader and connect your wallet.

  ![Config Signing Success](/img/Guide08.png)

2. You have two options to perform the DKG.
    1. **Option 1** and default is to copy and run the `docker` command on the screen into your terminal. It will retrieve the remote cluster details and begin the DKG process.

    2. **Option 2** (Manual DKG) is to download the `cluster-definition` file manually and move it to the hidden `.charon` folder. Then, every cluster member participates in the DKG ceremony by running the command displayed.

      ![Run the DKG](/img/Guide10.png)

3. Assuming the DKG is successful, a number of artefacts will be created in the `.charon` folder. These include:

    - A `deposit-data.json` file. This contains the information needed to activate the validator on the Ethereum network.
    - A `cluster-lock.json` file. This contains the information needed by charon to operate the distributed validator cluster with its peers.
    - A `validator_keys/` folder. This folder contains the private key shares and passwords for the created distributed validators.

4. At this point you should make a backup of the `.charon/validator_keys` folder as replacing lost private keys is not straightforward at this point in charon's development. The `cluster-lock` and `deposit-data` files are identical for each operator and can be copied if lost.

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

- That your charon client can connect to the configured beacon client.
- That your charon client can connect to all peers.

Most components in the dashboard have some help text there to assist you in understanding your cluster performance.

You might notice that there are logs indicating that a validator cannot be found and that APIs are returning 404. This is to be expected at this point, as the validator public keys listed in the lock file have not been deposited and acknowledged on the consensus layer yet (usually ~16 hours after the deposit is made).

If at any point you need to turn off your node, you can run:

```
# Shut down the currently running distributed validator node
docker-compose down
```

## Step 5. Activate the deposit data

Congrats 🎉 if your cluster have gotten to this step of the quickstart and have successfully created a distributed validator together. 

If you have connected all of your charon clients together such that the monitoring indicates that they are all healthy and ready to operate, **ONE operator** may process to activate this deposit data with the existing [staking launchpad](https://goerli.launchpad.ethereum.org/).

This process can take a minimum of 16 hours, with the maximum time to activation being dictated by the length of the activation queue, which can be weeks. You can leave your distributed validator cluster offline until closer to the activation period if you would prefer. You can also use this time to improve and harden your monitoring and alerting for the cluster.

## Step 6. Add the Central Monitoring Token

:::info
This step is **optional** but recommended in order for the Obol Team to help with the health of your cluster.
:::

1. You may have been provided with a **Central Monitoring Token** used to push distributed validator metrics to our central prometheus service to monitor, analyze and improve your cluster's performance. The token needs to be added in `prometheus/prometheus.yml` replacing `$PROM_REMOTE_WRITE_TOKEN`. The token will look like:
`eyJtZXNzYWdlIjoiSldUIFJ1bGVzISIsImlhdCI6MTQ1OTQ0ODExOSwiZXhwIjoxNDU5NDU0NTE5fQ`.

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
      credentials: 436764:eyJtZXNzYWdlIjoiSldUIFJ1bGVzISIsImlhdCI6MTQ1OTQ0ODExOSwiZXhwIjoxNDU5NDU0NTE5fQ

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

:::caution
This step only needs to be taken when you decide to exit your DV cluster. 
:::
A voluntary exit is when a validator chooses to stop performing its duties, and exits the beacon chain permanently. To voluntarily exit, the validator must continue performing its validator duties until successfully exited to avoid penalties.

To trigger a voluntary exit, a sidecar `docker-compose` command is executed that signs and submits the voluntary exit to the active running charon node that shares it with other nodes in the cluster. The commands below should be executed in the terminal on the same machine and same folder as the active running `charon-distribute-validator-node` docker compose.

:::info
A threshold of operators in the cluster need to perform this task to exit a validator.
:::

- Create a new `exit_keys` folder next to `.charon/validator_keys`: `mkdir .charon/exit_keys`
- Copy the validator keys and passwords that you want to exit from the `validator_keys` folder to the `exit_keys` folder.
  - E.g. to exit validator #4: `cp .charon/validator_keys/keystore/keystore-4* .charon/exit_keys/`
  - Warning: all keys copied to the `exit_keys` folder will be exited, so be careful!
- Ensure the external network in `compose-volutary-exit.yml` is correct.
  - Confirm the name of the exiting `charon-distributed-validator-node` docker network: `docker network ls`.
  - If it isn't `charon-distributed-validator-node-dvnode`, then update `compose-volutary-exit.yml` accordingly.
- Ensure the latest fork version epoch is used:
  - Voluntary exists require an epoch after which they take effect.
  - All VCs need to sign and submit the exact same messages (epoch) in DVT.
  - `--epoch=1` would be ideal, since all chains have that epoch in the past, so the validator should exit immediately.
  - `compose-volutary-exit.yml` is configured with `--epoch=112260` which is the latest Bellatrix fork on Prater.
  - If the Charon cluster is running on a different chain, **ALL** operators must update `--epoch` to the same latest fork version returned by `curl $BEACON_NODE/eth/v1/config/fork_schedule`.
- Run the command to submit this node's partially signed voluntary exit:
  - `docker-compose -f compose-voluntary-exit.yml up`
  - Confirm the logs: `Exit for validator XXXXX submitted`
  - Exit the container: `Ctrl-C`
- The charon metric `core_parsigdb_exit_total` will be incremented each time a voluntary exit partial signature is received, either from this node or from peers.

## Feedback

If you have gotten this far through the process, and whether you succeeded or failed at running the distributed validator successfully, we would like to hear your feedback on the process and where you encountered difficulties. Please let us know by joining and posting on our [Discord](https://discord.gg/n6ebKsX46w). Also, feel free to add issues to our [GitHub repos](https://github.com/ObolNetwork).

## Other Actions

The above steps should get you running a distributed validator cluster. The following are some extra steps you may want to take either to improve the resilience and performance of your distributed validator cluster.

### Docker power users

This section of the readme is intended for the "docker power users", i.e., for the ones who are familiar with working with `docker-compose` and want to have more flexibility and power to change the default configuration.

We use the "Multiple Compose File" feature which provides a very powerful way to override any configuration in `docker-compose.yml` without needing to modify git-checked-in files since that results in conflicts when upgrading this repo.
See [this](https://docs.docker.com/compose/extends/#multiple-compose-files) for more details.

There are two additional files in this repository, `compose-debug.yml` and `docker-compose.override.yml.sample`, alongwith the default `docker-compose.yml` file that you can use for this purpose.

- `compose-debug.yml` contains some additional containers that developers can use for debugging, like `jaeger`. To achieve this, you can run:
```
docker-compose -f docker-compose.yml -f compose-debug.yml up
```

- `docker-compose.override.yml.sample` is intended to override the default configuration provided in `docker-compose.yml`. This is useful when, for example, you wish to add port mappings or want to disable a container.

- To use it, just copy the sample file to `docker-compose.override.yml` and customise it to your liking. Please create this file ONLY when you want to tweak something. This is because the default override file is empty and docker errors if you provide an empty compose file.
```
cp docker-compose.override.yml.sample docker-compose.override.yml

# Tweak docker-compose.override.yml and then run docker-compose up
docker-compose up
```

- You can also run all these compose files together. This is desirable when you want to use both the features. For example, you may want to have some debugging containers AND also want to override some defaults. To achieve this, you can run:
```
docker-compose -f docker-compose.yml -f docker-compose.override.yml -f compose-debug.yml up
```