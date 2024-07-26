---
sidebar_position: 8
description: Run a cluster on mainnet
---

# Run a cluster on mainnet

:::warning
Note that you should proceed only if you accept the risk and have tested this on goerli testnet.

DKG keys created for goerli cannot be used on mainnet and vice versa.
:::

This section is intended for users who wish to run their distributed validator on Ethereum mainnet.

### Pre-requisites

- Ensure you have [docker](https://docs.docker.com/engine/install/) installed.
- Ensure you have [git](https://git-scm.com/downloads) installed.
- Make sure `docker` is running before executing the commands below.

### Steps

1. Clone the [charon-distributed-validator-node](https://github.com/ObolNetwork/charon-distributed-validator-node) repo and `cd` into the directory.

```sh
# Clone this repo
git clone https://github.com/ObolNetwork/charon-distributed-validator-node.git

# Change directory
cd charon-distributed-validator-node
```

2. If you have already cloned the repo, make sure that it is [up-to-date](./quickstart-alone#updating-dv-stack).

3. Copy the `.env.sample` file to `.env`
```
cp -n .env.sample .env
```

4. In your `.env` file, uncomment and set values for `NETWORK` & `LIGHTHOUSE_CHECKPOINT_SYNC_URL`
```
...
# Overrides network for all the relevant services.
NETWORK=mainnet
...
# Checkpoint sync url used by lighthouse to fast sync.
LIGHTHOUSE_CHECKPOINT_SYNC_URL=https://mainnet.checkpoint.sigp.io/https://eth-clients.github.io/checkpoint-sync-endpoints/#mainnet
...
```
Note that you can choose any checkpoint sync url from https://eth-clients.github.io/checkpoint-sync-endpoints/#mainnet.

Your DV stack is now mainnet ready 🎉

#### Remote mainnet beacon node

If you already have a mainnet beacon node running somewhere and you want to use that instead of running EL (`geth`) & CL (`lighthouse`) as part
of the repo, you can disable these images. To do so, follow these steps:

1. Copy the `docker-compose.override.yml.sample` file
```
cp -n docker-compose.override.yml.sample docker-compose.override.yml
```
2. Uncomment the `profiles: [disable]` section for both `geth` and `lighthouse`. The override file should now look like this
```
services:
  geth:
    # Disable geth
    profiles: [disable]
    # Bind geth internal ports to host ports
    #ports:
      #- 8545:8545 # JSON-RPC
      #- 8551:8551 # AUTH-RPC
      #- 6060:6060 # Metrics

  lighthouse:
    # Disable lighthouse
    profiles: [disable]
    # Bind lighthouse internal ports to host ports
    #ports:
      #- 5052:5052 # HTTP
      #- 5054:5054 # Metrics
...
```
3. Then, uncomment and set the `CHARON_BEACON_NODE_ENDPOINTS` variable in the `.env` file to your mainnet beacon node's URL
```
...
# Connect to one or more external beacon nodes. Use a comma separated list excluding spaces.
CHARON_BEACON_NODE_ENDPOINTS=<YOUR_REMOTE_MAINNET_BEACON_NODE_URL>
...
```

#### Mainnet node with mev-boost

If you are running your mainnet DV node with `mev-boost`, you need to uncomment and set the `MEVBOOST_RELAYS` variable in the `.env` file
```
...
# MEV-Boost docker container image version, e.g. `latest` or `v1.4.0`.
#MEVBOOST_VERSION=
MEVBOOST_RELAYS=https://0x9000009807ed12c1f08bf4e81c6da3ba8e3fc3d953898ce0102433094e5f22f21102ec057841fcb81978ed1ea0fa8246@builder-relay-mainnet.blocknative.com
...
```
You can also use the [flashbots relay](https://boost-relay.flashbots.net/).

#### Exit a mainnet distributed validator

If you want to exit your mainnet validator, you need to uncomment and set the `EXIT_EPOCH` variable in the `.env` file

```
...
# Cluster wide consistent exit epoch. Set to latest for fork version, see `curl $BEACON_NODE/eth/v1/config/fork_schedule`
# Currently, the latest fork is bellatrix (epoch: 144896)
EXIT_EPOCH=144896
...
```
Note that `EXIT_EPOCH` should be `194048` after the [shapella fork](https://blog.ethereum.org/2023/03/28/shapella-mainnet-announcement).
