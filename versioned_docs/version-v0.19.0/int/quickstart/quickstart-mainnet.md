---
sidebar_position: 7
description: Run a cluster on mainnet
---

# Run a DV on mainnet

:::warning
Charon is in a beta state, and **you should proceed only if you accept the risk, the [terms of use](https://obol.tech/terms.pdf), and have tested running a Distributed Validator on a testnet first**.

Distributed Validators created for goerli cannot be used on mainnet and vice versa, please take caution when creating, backing up, and activating mainnet validators. Incorrect usage may result in a loss of funds.
:::

This section is intended for users who wish to run their Distributed Validator on Ethereum mainnet.

## Pre-requisites

- You have [enough up-to-spec nodes](../key-concepts.md#distributed-validator-threshold) for your mainnet deployment.
- Ensure you have [docker](https://docs.docker.com/engine/install/) installed on each node.
- Ensure you have [git](https://git-scm.com/downloads) installed on each node.
- Make sure `docker` is running before executing the commands below.

## Steps

### Using charon-distributed-validator-node in full

1. Clone the [charon-distributed-validator-node](https://github.com/ObolNetwork/charon-distributed-validator-node) repo and `cd` into the directory.

```sh
# Clone this repo
git clone https://github.com/ObolNetwork/charon-distributed-validator-node.git

# Change directory
cd charon-distributed-validator-node
```

2. If you have already cloned the repo previously, make sure that it is [up-to-date](./update).

3. Copy the `.env.sample.mainnet` file to `.env`

```
cp -n .env.sample.mainnet .env
```

4. Run the docker compose file

```
docker compose up -d
```

Once your clients can connect and sync appropriately, your DV stack is now mainnet ready 🎉

### Using a remote mainnet beacon node

:::warning
Using a remote beacon node will impact the performance of your Distributed Validator and should be used sparingly.
:::

If you already have a mainnet beacon node running somewhere and you want to use that instead of running EL (`geth`) & CL (`lighthouse`) as part of the repo, you can disable these images. To do so, follow these steps:

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

4. Restart your docker compose

```
docker compose down
docker compose up -d
```

### Exit a mainnet Distributed Validator

If you want to exit your mainnet validator, refer to our [exit guide](./quickstart-exit.md).