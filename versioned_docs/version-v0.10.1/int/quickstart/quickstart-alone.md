---
sidebar_position: 4
description: Run all nodes in a distributed validator cluster
---

# Run a cluster alone

:::warning
Charon is in an early alpha state and is not ready to be run on mainnet
:::

1. Clone the [charon-distributed-validator-cluster](https://github.com/ObolNetwork/charon-distributed-validator-cluster) template repo and `cd` into the directory.

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

   For simplicities sake, this repo is configured to work with a remote Beacon node such as one from [Infura](https://infura.io/).

   Create an Eth2 project and copy the `https` URL, make sure Prater is selected in dropdown of ENDPOINTS:

   ![Example Infura API Endpoint](/img/example-infura-details.png)

   Replace the placeholder value of `CHARON_BEACON_NODE_ENDPOINT` in your newly created `.env` file with this URL.

1. Create the artifacts needed to run a testnet distributed validator cluster

   ```sh
   # Create a testnet distributed validator cluster
   docker run --rm -v "$(pwd):/opt/charon" obolnetwork/charon:v0.10.0 create cluster --withdrawal-address="0x000000000000000000000000000000000000dead"
   ```

1. Start the cluster
   ```sh
   # Start the distributed validator cluster
   docker-compose up
   ```
1. Checkout the monitoring dashboard and see if things look all right

   ```sh
   # Open Grafana
   open http://localhost:3000/d/singlenode/single-charon-node-dashboard?
   ```

1. Activate the validator on the testnet using the original [staking launchpad](https://goerli.launchpad.ethereum.org/en/overview) site with the deposit data created at `.charon/cluster/deposit-data.json`.
   - If you use Mac OS, `.charon` the default output folder, does not show up on the launchpad's "Upload Deposit Data" file picker. Rectify this by pressing `Command + Shift + . ` (full stop). This should display hidden folders, allowing you to select the deposit file.

Congratulations, if this all worked you are now running a distributed validator cluster on a testnet. Try turning off a single node of the four with `docker stop` and see if the validator stays online or begins missing duties, to see for yourself the fault-tolerance that can be added to proof of stake validation with this new Distributed Validator Technology.

:::tip
Don't forget to be a good testnet steward and exit your validator when you are finished testing with it.
:::
