---
sidebar_position: 1
description: Run one node in a multi-operator distributed validator cluster using the DV Launchpad
---

# Launchpad

The following instructions aim to assist a group of users coordinating together to create a distributed validator cluster between them.

## Pre-requisites

- Ensure you have [docker](https://docs.docker.com/engine/install/) and [git](https://git-scm.com/downloads) installed. Also, make sure `docker` is running before executing the commands below.
- Decide who the leader of your cluster will be. Only leaders have to perform [step 2](#step-2-leader-creates-the-dkg-configuration-file-and-distributes-it-to-everyone-else) and [step 5](#step-5-activate-the-deposit-data) in the quickstart process. They do not get any special privilege.

## 1-min Video Overview

<iframe width="560" height="315" src="https://www.youtube.com/embed/QZM7mQs78pI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowfullscreen></iframe>

## Step 1. Creating and backing up a private key for charon

The first step of running a cluster is preparing for a distributed key generation ceremony. To do this everyone must create an [ENR](docs/int/faq/errors.mdx#what-is-an-enr) for their charon client. This ENR is a public/private key pair, and allows the other charon clients in the DKG to identify and connect to your node.

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

> ⚠️ Attention
>
> Please make sure to create a backup of the private key at `.charon/charon-enr-private-key`. Be careful not to commit it to git! **If you lose this file you won't be able to take part in the DKG ceremony.**

Finally, share the Ethereum address you will use for the cluster with the leader so that he/she can proceed to Step 2.

## Step 2. Leader creates the DKG configuration file and distributes it to cluster operators

The leader will prepare the configuration file for the distributed key generation ceremony using the launchpad.

1. Go to the DV Launchpad (https://launchpad.obol.dev) 
2. Connect your wallet

  ![Connect your Wallet](/img/Guide01.png)

3. Select `Create a Cluster with a group` then `Get Started`.

  ![Get Started](/img/Guide02.png)

4. Follow the flow and accept the advisories
5. Configure the Cluster 
    - Add the `Cluster Name` & `Cluster Size` (i.e. number of operators in the cluster)
    - Add the Ethereum addresses for each operator received at the end of [Step 1](#step-1-creating-and-backing-up-a-private-key-for-charon).
    - Select the desired amount of validators (32 ETH each)
    - Paste your `ENR` generated in [Step 1](#step-1-creating-and-backing-up-a-private-key-for-charon).
    - Choose your Withdrawal Addresses for validator exit.
    - Create Group

    ![Create Group](/img/Guide03.png)

6. Review, Confirm and Sign the Configuration (there can be up to 4 signatures needed)
    - Cluster Configuration (contains operators, withdrawal address, # validators, etc.) 
    - Config hash 
    - His/her own `ENR`
    - His/her operator definition (address, `ENR`, `enr_sig` and `config_hash` signatures) 
7. Share your group invite link with the cluster operators. Following the link as a leader will show you a screen waiting for other operators to accept the configuration.

  ![Invite Operators](/img/Guide04.png)

## Step 3. Operators join and sign the cluster configuration

After receiving the invite link created by the leader, cluster members will be able to join and sign the cluster configuration.

1. Go to the DV launchpad link provided by the leader.
2. Connect your wallet using the Ethereum address provided to the leader in [Step 1](#step-1-creating-and-backing-up-a-private-key-for-charon).
  
  ![Connect Wallet](/img/Guide05.png)

3. Review the operators addresses submitted and click `Get Started` to continue.

  ![Get Started](/img/Guide06.png)

4. Review and accept the advisories.
5. Review the configuration created by the leader and add your `ENR` generated in [Step 1](#step-1-creating-and-backing-up-a-private-key-for-charon).

  ![Review Config](/img/Guide07.png)

6. Sign the configuration with your wallet and wait for other operators to do the same (up to three signatures required).
    - Config hash 
    - Your own `ENR`
    - Your operator definition (address, `ENR`, `enr_sig` and `config_hash` signatures)

## Step 3. Run the DKG
For Charon v1, this needs to happen synchronously between participants at an agreed time.

1. Once all operators successfully signed, your screen will automatically advance to the next step and look like this. Click `Continue`.

  ![Config Signing Success](/img/Guide08.png)

2. You have two options at this stage.
    1. Option 1 and default is to run the `docker` command on the screen in your terminal to automatically download the `cluster-definition` file and move it to the hidden `.charon` folder and start the DKG process.

    2. Option 2 is to download the `cluster-definition` file and move it to the hidden `.charon` folder. Then, every cluster member participates in the DKG ceremony by running the command displayed under the `Run the DKG` menu. It will look something like this:

      ![Run the DKG](/img/Guide10.png)

      This is a helpful [DKG video walkthrough](https://www.youtube.com/watch?v=94Pkovp5zoQ&ab_channel=ObolNetwork) (it uses the CLI to get the `cluster-definition` file but the DKG logic is the same).

3. Assuming the DKG is successful, a number of artefacts will be created in the `.charon` folder. These include:

    - A `deposit-data.json` file. This contains the information needed to activate the validator on the Ethereum network.
    - A `cluster-lock.json` file. This contains the information needed by charon to operate the distributed validator cluster with its peers.
    - A `validator_keys/` folder. This folder contains the private key shares and passwords for the created distributed validators.

4. At this point you should make a backup of the `.charon/validator_keys` folder as replacing lost private keys is not straightforward at this point in charon's development. The `cluster-lock` and `deposit-data` files are identical for each operator and can be copied if lost.

5. If taking part in an official Obol testnet, one cluster member will have to submit the `cluster-lock` and `deposit-data` files to the Obol Team.

## Step 4. Start the Distributed Validator Cluster

With the DKG ceremony over, the last phase before activation is to prepare your node for validating over the long term. This repo is configured to sync an execution layer client (`nethermind`) and a consensus layer client (`nimbus`).

Before completing these instructions, you should assign a static local IP address to your device (extending the DHCP reservation indefinitely or removing the device from the DCHP pool entirely if you prefer), and port forward the TCP protocol on the public port `:3610` on your router to your device's local IP address on the same port. This step is different for every person's home internet, and can be complicated by the presence of dynamic public IP addresses. We are currently working on making this as easy as possible, but for the time being, a distributed validator cluster isn't going to work very resiliently if all charon nodes cannot talk directly to one another and instead need to have an intermediary node forwarding traffic to them.

**Caution**: If you manually update `docker-compose` to mount `lighthouse` from your locally synced `~/.lighthouse`, the whole chain database may get deleted. It'd be best not to manually update as `lighthouse` checkpoint-syncs so the syncing doesn't take much time.

**NOTE**: If you have a `geth` node already synced, you can simply copy over the directory. For ex: `cp -r ~/.ethereum/goerli data/geth`. This makes everything faster since you start from a synced geth node.

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

To turn off your node after checking the health of the cluster you can run:

```
# Shut down the currently running distributed validator node
docker-compose down
```

## Step 5. Activate the deposit data

If you and your team have gotten to this phase of the quickstart, and you have successfully created a distributed validator together, and you have connected all of your charon clients together such that the monitoring indicates that they are all healthy and ready to operate, one person may process to activate this deposit data with the existing [staking launchpad](https://prater.launchpad.ethereum.org/).

This process can take a minimum of 16 hours, with the maximum time to activation being dictated by the length of the activation queue, which can be weeks. You can leave your distributed validator cluster offline until closer to the activation period if you would prefer. You can also use this time to improve and harden your monitoring and alerting for the cluster.

If you have gotten this far through the process, and whether you succeed or fail at running the distributed validator successfully on the testnet, we would like to hear your feedback on the process and where you encountered difficulties. Please let us know by joining and posting on our [Discord](https://discord.gg/TsXFa8uB2E). Also, feel free to add issues to our [GitHub repos](https://github.com/ObolNetwork).

## Other Optional Actions

The above steps should get you running a distributed validator cluster. The following are some extra steps you may want to take either to help Obol with their testing program, or to improve the resilience and performance of your distributed validator cluster.

## Step 6. Leader Adds Central Monitoring Token

The cluster leader may be provided with a Central Monitoring Token used to push distributed validator metrics to our central prometheus service to monitor, analyze and improve your cluster's performance. The token needs to be added in prometheus/prometheus.yml replacing `$PROM_REMOTE_WRITE_TOKEN`. The token will look like:
`eyJtZXNzYWdlIjoiSldUIFJ1bGVzISIsImlhdCI6MTQ1OTQ0ODExOSwiZXhwIjoxNDU5NDU0NTE5fQ`.

The cluster leader will be assigned a cluster name to be added in the prometheus/prometheus.yml replacing the `$CLUSTER_NAME`. The cluster name will look like: `cluster-123`
Final prometheus/prometheus.yml would look something like:
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

## Validator Voluntary Exit

A voluntary exit is when a validator chooses to stop performing its duties, and exits the beacon chain permanently. To voluntarily exit, the validator must continue performing its validator duties until successfully exited to avoid penalties.

To trigger a voluntary exit, a sidecar docker-compose command is executed that signs and submits the voluntary exit to the active running charon node that shares it with other nodes in the cluster. The commands below should be executed on the same machine and same folder as the active running `charon-distribute-validator-node` docker compose.

:::info
A threshold of peers in the cluster need to perform this task to exit a validator.
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

## Self-Host a Bootnode

If you are experiencing connectivity issues with the Obol hosted bootnode, or you want to improve your clusters latency and decentralisation, you can opt to host your own bootnode on a separate open and static internet port.

```
# Figure out your public IP
curl v4.ident.me

# Clone the repo and cd into it.
git clone https://github.com/ObolNetwork/charon-distributed-validator-node.git

cd charon-distributed-validator-node

# Replace 'replace.with.public.ip.or.hostname' in bootnode/docker-compose.yml with your public IPv4 or DNS hostname # Replace 'replace.with.public.ip.or.hostname' in bootnode/docker-compose.yml with your public IPv4 or DNS hostname

nano bootnode/docker-compose.yml

docker-compose -f bootnode/docker-compose.yml up
```

Test whether the bootnode is publicly accessible. This should return an ENR:
`curl http://replace.with.public.ip.or.hostname:3640/enr`

Ensure the ENR returned by the bootnode contains the correct public IP and port by decoding it with https://enr-viewer.com/.

Configure **ALL** charon nodes in your cluster to use this bootnode:

- Either by adding a flag: `--p2p-bootnodes=http://replace.with.public.ip.or.hostname:3640/enr`
- Or by setting the environment variable: `CHARON_P2P_BOOTNODES=http://replace.with.public.ip.or.hostname:3640/enr`

Note that a local `boonode/.charon/charon-enr-private-key` file will be created next to `bootnode/docker-compose.yml` to ensure a persisted bootnode ENR across restarts.