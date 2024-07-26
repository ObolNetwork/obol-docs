---
sidebar_position: 4
description: Take part in a distributed validator cluster
---

# Quickstart

:::warning
Charon is in an early alpha state and is not ready to be run on mainnet
:::

There are two ways to test out a distributed validator.

- Running the full cluster alone.
- Running one node in a cluster with a group of other node operators.

## Run a cluster alone

1. Clone the [starter repo](https://github.com/ObolNetwork/charon-docker-compose) and `cd` into the directory.

    ```sh
    # Clone the repo
    git clone https://github.com/ObolNetwork/charon-docker-compose.git
    
    # Change directory
    cd charon-docker-compose/
    ```

1. Prepare the environment variables

    ```sh
    # Copy the sample environment variables
    cp .env.sample .env
    ```

    For simplicities sake, this repo is configured to work with a remote Beacon node such as one from [Infura](https://infura.io/). 
    
    Create an Eth2 project and copy the `https` URL:

    ![Example Infura API Endpoint](/img/example-infura-details.png)

    Replace the placeholder value of `CHARON_BEACON_NODE_ENDPOINT` in your newly created `.env` file with this URL.

1. Create the artifacts needed to run a testnet distributed validator cluster

    ```sh
    # Create a testnet distributed validator cluster
    docker run --rm -v "$(pwd):/opt/charon" ghcr.io/obolnetwork/charon:latest create cluster --cluster-dir=".charon/cluster" --withdrawal-address="0x000000000000000000000000000000000000dead"
    ``` 
1. Start the cluster
    ```sh
    # Start the distributed validator cluster
    docker-compose up
    ```
1. Checkout the monitoring dashboard and see if things look all right
    ```sh
    # Open Grafana
    open http://localhost:3000/d/laEp8vupp
    ```

1. Activate the validator on the testnet using the original [staking launchpad](https://prater.launchpad.ethereum.org/en/overview) site with the deposit data created at `.charon/deposit-data.json`. 
    - If you use Mac OS, `.charon` the default output folder, does not show up on the launchpad's "Upload Deposit Data" file picker. Rectify this by pressing `Command + Shift + . ` (full stop). This should display hidden folders, allowing you to select the deposit file. 


Congratulations, if this all worked you are now running a distributed validator cluster on a testnet. Try turning off a single node of the four and see if the validator stays online or begins missing duties, to see for yourself the fault-tolerance that can be added to proof of stake validation with this new Distributed Validator Technology. 

:::tip 
Don't forget to be a good testnet steward and exit your validator when you are finished testing with it.* 

**Once charon creates validator exit data in an upcoming release.*
:::

## Run a cluster with others

This section will be completed alongside version `v0.6.0`. Sit tight.
<!--

Subsections for run as a group:

- Prepare dkg config
- Run DKG
- Prepare node
- Activate deposit data
-->