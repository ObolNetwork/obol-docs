---
sidebar_position: 1
description: A leader/creator creates a cluster configuration to be shared with operators
---

# quickstart-group-leader-creator

import Tabs from '@theme/Tabs'; import TabItem from '@theme/TabItem';

## Creator & Leader Journey

:::warning Charon is in an early alpha state and is not ready to be run on mainnet :::

The following instructions aim to assist with the preparation of a distributed validator key generation ceremony. Select the _Leader_ tab if you **will** be an operator participating in the cluster, and select the _Creator_ tab if you **will NOT** be an operator in the cluster.

These roles hold no position of privilege in the cluster, they only set the initial terms of the cluster that the other operators agree to.

The person creating the cluster will be a node operator in the cluster.\
\


## Pre-requisites

* Ensure you have [docker](https://docs.docker.com/engine/install/) installed.
* Ensure you have [git](https://git-scm.com/downloads) installed.
* Make sure `docker` is running before executing the commands below.

The person creating the cluster will not be a node operator in the cluster.

### Overview Video

### Step 1. Collect Ethereum addresses of the cluster operators

Before starting the cluster creation, you will need to collect one Ethereum address per operator in the cluster. They will need to be able to sign messages through metamask with this address. Broader wallet support will be added in future.

### Step 2. Create and back up a private key for charon

In order to prepare for a distributed key generation ceremony, you need to create an [ENR](https://github.com/ObolNetwork/obol-docs/blob/main/versioned_docs/version-v0.14.0/int/faq/errors.mdx#enrs-keys) for your charon client. Operators in your cluster will also need to do this step, as per their [quickstart](https://github.com/ObolNetwork/obol-docs/blob/main/versioned_docs/version-v0.14.0/int/quickstart/group/quickstart-group-operator/README.md#step-2-create-and-back-up-a-private-key-for-charon). This ENR is a public/private key pair, and allows the other charon clients in the DKG to identify and connect to your node.

```sh
# Clone this repo
git clone https://github.com/ObolNetwork/charon-distributed-validator-node.git

# Change directory
cd charon-distributed-validator-node

# Create your charon ENR private key, this will create a charon-enr-private-key file in the .charon directory
docker run --rm -v "$(pwd):/opt/charon" obolnetwork/charon:v0.14.0 create enr
```

You should expect to see a console output like

```
Created ENR private key: .charon/charon-enr-private-key
enr:-JG4QGQpV4qYe32QFUAbY1UyGNtNcrVMip83cvJRhw1brMslPeyELIz3q6dsZ7GblVaCjL_8FKQhF6Syg-O_kIWztimGAYHY5EvPgmlkgnY0gmlwhH8AAAGJc2VjcDI1NmsxoQKzMe_GFPpSqtnYl-mJr8uZAUtmkqccsAx7ojGmFy-FY4N0Y3CCDhqDdWRwgg4u
```

If instead of being shown your `enr` you see an error saying `permission denied` then you may need to [update docker permissions](https://github.com/ObolNetwork/obol-docs/blob/main/versioned_docs/version-v0.14.0/int/faq/errors/README.md#docker-permission-denied-error) to allow the command to run successfully.

:::warning Please make sure to create a backup of the private key at `.charon/charon-enr-private-key`. Be careful not to commit it to git! **If you lose this file you won't be able to take part in the DKG ceremony and start the DV cluster successfully.** :::

This step is not needed and you can move on to [Step 3](quickstart-group-leader-creator.md#step-3-create-the-dkg-configuration-file-and-distribute-it-to-cluster-operators).

### Step 3. Create the DKG configuration file and distribute it to cluster operators

You will prepare the configuration file for the distributed key generation ceremony using the launchpad.

1. Go to the [DV Launchpad](https://goerli.launchpad.obol.tech)
2. Connect your wallet

![Connect your Wallet](https://github.com/ObolNetwork/obol-docs/blob/main/img/Guide01.png)

3. Select `Create a Cluster with a group` then `Get Started`.

![Get Started](https://github.com/ObolNetwork/obol-docs/blob/main/img/Guide02.png)

4. Follow the flow and accept the advisories.
5.  Configure the Cluster

    * Input the `Cluster Name` & `Cluster Size` (i.e. number of operators in the cluster). The threshold for the cluster to operate sucessfully will update automatically.
    * ⚠️ Leave the `Non-Operator` toggle OFF.
    * ⚠️ Turn the `Non-Operator` toggle ON.
    * Input the Ethereum addresses for each operator collected during [step 1](quickstart-group-leader-creator.md#step-1-collect-ethereum-addresses-of-the-cluster-operators).
    * Select the desired amount of validators (32 ETH each) the cluster will run.
    * Paste your `ENR` generated at [Step 2](quickstart-group-leader-creator.md#step-2-create-and-back-up-a-private-key-for-charon).
    * Select the `Withdrawal Addresses` method. Use `Single address` to receive the principal and fees to a single address or `Splitter Contracts` to share them among operators.
    * Enter the `Withdrawal Address` that will receive the validator effective balance at exit and when balance skimming occurs.
    * Enter the `Fee Recipient Address` to receive MEV rewards (if enabled), and block proposal priority fees.
    * \


    You can set them to be the same as your connected wallet address in one click.\
    \


    ![Create Group](https://github.com/ObolNetwork/obol-docs/blob/main/img/Guide03.png)

    * Enter the Ethereum address to claim the validator principal (32 ether) at exit.
    * Enter the Ethereum addresses and their percentage split of the validator's rewards. Validator rewards include consensus rewards, MEV rewards and proposal priority fees.

    \


    ![Create Group](https://github.com/ObolNetwork/obol-docs/blob/main/img/Guide03-splitter.png)

    * Click `Create Cluster Configuration`

* 6\. Review the cluster configuration
* 6\. Deploy the withdrawal manager contracts by signing the two transactions with your wallet.
* 7\. You will be asked to confirm your configuration and to sign:
*
  * The `config_hash`. This is a hashed representation of the details of this cluster, to ensure everyone is agreeing to an identical setup.
  * The `operator_config_hash`. This is your acceptance of the terms as a participating node operator.
  * Your `ENR`. Signing your ENR authorises the corresponding private key to act on your behalf in the cluster.
* 7\. You will be asked to confirm your configuration and to sign:
*
  * The `config_hash`. This is a hashed representation of the details of this cluster, to ensure everyone is agreeing to an identical setup.

8. Share your cluster invite link with the operators. Following the link will show you a screen waiting for other operators to accept the configuration you created.

![Invite Operators](https://github.com/ObolNetwork/obol-docs/blob/main/img/Guide04.png)

👉 Once every participating operator has signed their approval to the terms, you will continue the [**Operator** journey](https://github.com/ObolNetwork/obol-docs/blob/main/versioned_docs/version-v0.14.0/int/quickstart/group/quickstart-group-operator/README.md#step-3-run-the-dkg) by completing the distributed key generation step.

Your journey ends here and you can monitor with the link whether the operators confirm their agreement to the cluster by signing their approval. Future versions of the launchpad will allow a creator to track a distributed validator's lifecycle in its entirety.
