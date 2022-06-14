---
sidebar_position: 5
description: Run one node in a multi-operator distributed validator cluster
---

# Run a cluster with others

:::caution
Charon is in an early alpha state and is not ready to be run on mainnet
:::

To create a distributed validator cluster with a group of other node operators requires four key steps:
- Every operator prepares their software and gets their charon client's ENR
- One operator prepares the terms of the distributed validator key generation ceremony
    - They select the network, the withdrawal address, the number of 32 ether distributed validators to create, and the ENRs of each operator taking part in the ceremony.
    - In future, the DV launchpad will facilitate this process more seamlessly, with consent on the terms provided by all operators that participate.
- Every operator runs the ceremony, and once successful, a number of cluster artifacts are created, including:
    - The private key shares for each distributed validator
    - The deposit data file containing deposit details for each distributed validator
    - A `cluster-lock.json` file which contains the finalised terms of this cluster required by charon to operate. 
- Every operator starts their node with `charon run`, and uses their monitoring to determine the cluster health and connectivity
- Once the cluster is confirmed to be healthy, deposit data files created during this process are activated on the staking launchpad. 

### Getting setup with charon

1. Clone the [charon-distributed-validator-node](https://github.com/ObolNetwork/charon-distributed-validator-cluster) template repository from Github, and `cd` into the directory.

    ```sh
    # Clone the repo
    git clone https://github.com/ObolNetwork/charon-distributed-validator-node.git
    
    # Change directory
    cd charon-distributed-validator-node/
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

1. Now create a private key for charon to use for its ENR

    ```sh
    # Create an ENR private key
    docker run --rm -v "$(pwd):/opt/charon" ghcr.io/obolnetwork/charon:latest create enr
    ``` 
    :::caution
    The ability to replace a deleted or compromised private key is limited at this point. Please make a secure backup of this private key if this distributed validator is important to you.  
    :::
    This command will print your charon client's ENR to the command line. It should look something like:
    ```
    enr:-JG4QAgAOXjGFcTIkXBO30aUMzg2YSo1CYV0OH8Sf2s7zA2kFjVC9ZQ_jZZItdE8gA-tUXW-rWGDqEcoQkeJ98Pw7GaGAYFI7eoegmlkgnY0gmlwhCKNyGGJc2VjcDI1NmsxoQI6SQlzw3WGZ_VxFHLhawQFhCK8Aw7Z0zq8IABksuJEJIN0Y3CCPoODdWRwgj6E
    ```
    This record identifies your charon client no matter where it communicates from across the internet. It is required for the following step of creating a set of distributed validator private key shares amongst the cluster operators. 

### Performing a Distributed Validator Key Generation Ceremony

To create the private keys for a distributed validator securely, a Distributed Key Generation (DKG) process must take place.

1. After gathering each operators ENR and setting them in the `.env` file, one operator should prepare the ceremony with `charon create dkg`
    ```sh

    # First set the ENRs of all the operators participating in DKG ceremony in .env file as CHARON_OPERATOR_ENRS

    # Create .charon/cluster-definition.json to participate in DKG ceremony
    docker run --rm -v "$(pwd):/opt/charon" --env-file .env ghcr.io/obolnetwork/charon:latest create dkg
    ```
1. The operator that ran this command should distribute the resulting `cluster-definition.json` file to each operator.

1. At a pre-agreed time, all operators run the ceremony program with the `charon dkg` command
    ```sh
    # Copy the cluster-definition.json file to .charon
    cp cluster-definition.json .charon/

    # Participate in DKG ceremony, this will create .charon/cluster-lock.json, .charon/deposit-data.json and .charon/validator_keys/
    docker run --rm -v "$(pwd):/opt/charon" ghcr.io/obolnetwork/charon:latest dkg
    ```

### Verifying cluster health

Once the key generation ceremony has been completed, the charon nodes have the data they need to come together to form a cluster. 

1. Start your distributed validator node with docker-compose
    ```sh
    # Run a charon client, a vc client, and prom+grafana clients as containers
    docker-compose up
    ```
1. Use the pre-prepared [grafana](http://localhost:3000/) dashboard to verify the cluster health looks okay. You should see connections with all other operators in the cluster as healthy, and observed ping times under 1 second for all connections. 
    ```sh
    # Open Grafana
    open http://localhost:3000/d/laEp8vupp
    ```

### Activating the distributed validator

Once the cluster is healthy and fully connected, it is time to deposit the required 32 (test) ether to activate the newly created Distributed Validator.

1. Activate the validator on the testnet using the original [staking launchpad](https://prater.launchpad.ethereum.org/en/overview) site with the deposit data created at `.charon/deposit-data.json`. 
    - If you use Mac OS, `.charon` the default output folder, does not show up on the launchpad's "Upload Deposit Data" file picker. Rectify this by pressing `Command + Shift + . ` (full stop). This should display hidden folders, allowing you to select the deposit file. 
    - A more distributed validator friendly deposit interface is in the works for an upcoming release.
1. This process takes approximately 16 hours for the deposit to be registered on the beacon chain. Future upgrades to the protocol aims to reduce this time. 
1. Once the validator deposit is recognised on the beacon chain, the validator is assigned an index, and the wait for activation begins.
1. Finally, once the validator is activated, it should be monitored for to ensure it is achieving an inclusion distance of near 0, to ensure optimal rewards. You should also tweet the link to your newly activated validator with the hashtag [#RunDVT](https://twitter.com/search?q=%2523RunDVT) 🙃


:::tip 
Don't forget to be a good testnet steward and exit your validator when you are finished testing with it.
:::
