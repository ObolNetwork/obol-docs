---
sidebar_position: 1
description: A leader/creator creates a cluster configuration to be shared with operators
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Creator & Leader Journey

:::caution
Charon is in an early alpha state and is not ready to be run on mainnet
:::

The following instructions aim to assist with the preparation of a distributed validator key generation ceremony. Select the *Leader* tab if you **will** be an operator participating in the cluster, and select the *Creator* tab if you **will not** be an operator in the cluster. This person holds no position of privilege in the cluster, they only set the initial terms of the cluster that the other operators agree to. 

<Tabs groupId="leader-creator">
  <TabItem value="leader" label="Leader" default>
    The person creating the cluster will be a node operator in the cluster.
  </TabItem>
  <TabItem value="creator" label="Creator">
    The person creating the cluster will NOT be a node operator in the cluster.
  </TabItem>
</Tabs>

## Overview Video

<p align="center"><iframe width="560" height="315" src="https://www.youtube.com/embed/OK6WE8te33Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

## Pre-requisites

- Ensure you have [docker](https://docs.docker.com/engine/install/) installed.
- Ensure you have [git](https://git-scm.com/downloads) installed. 
- Make sure `docker` is running before executing the commands below.

## Step 1. Collect Ethereum addresses of the cluster operators
Before starting the cluster creation, you will need to collect one Ethereum address per operator in the cluster. They will need to be able to sign messages through metamask with this address. Broader wallet support will be added in future. 

## Step 2. Create and back up a private key for charon

<Tabs groupId="leader-creator">
  <TabItem value="leader" label="Leader" default>

In order to prepare for a distributed key generation ceremony, you need to create an [ENR](docs/int/faq/errors.mdx#enrs-keys) for your charon client. Operators in your cluster will also need to do this step, as per their [quickstart](./quickstart-group-operator#step-2-create-and-back-up-a-private-key-for-charon). This ENR is a public/private key pair, and allows the other charon clients in the DKG to identify and connect to your node.

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
</TabItem>
<TabItem value="creator" label="Creator">

This step is not needed and you can move on to [Step 3](#step-3-create-the-dkg-configuration-file-and-distribute-it-to-cluster-operators).

</TabItem>
</Tabs>

## Step 3. Create the DKG configuration file and distribute it to cluster operators

You will prepare the configuration file for the distributed key generation ceremony using the launchpad.

1. Go to the [DV Launchpad](https://goerli.launchpad.obol.tech) 
2. Connect your wallet

  ![Connect your Wallet](/img/Guide01.png)

3. Select `Create a Cluster with a group` then `Get Started`.

  ![Get Started](/img/Guide02.png)

4. Follow the flow and accept the advisories.
5. Configure the Cluster 
    - Input the `Cluster Name` & `Cluster Size` (i.e. number of operators in the cluster). The threshold for the cluster to operate sucessfully will update automatically.
    
    <Tabs groupId="leader-creator">
      <TabItem value="leader" label="Leader" default>
    <ul><li>
    
    ⚠️ Leave the `Non-Operator` toggle <b>OFF</b>.
    
    </li></ul>
      </TabItem>
      <TabItem value="creator" label="Creator">
    <ul><li>
    
    ⚠️ Turn the `Non-Operator` toggle <b>ON</b>.
    
    </li></ul>
      </TabItem>
    </Tabs>

    - Input the Ethereum addresses for each operator collected during [step 1](#step-1-collect-ethereum-addresses-of-the-cluster-operators).
    - Select the desired amount of validators (32 ETH each) the cluster will run.
    - Paste your `ENR` generated at [Step 2](#step-2-create-and-back-up-a-private-key-for-charon).
    - Input the `Withdrawal Address` to receive validator principal and consensus rewards at exit.
    - Input the `Fee Recipient Address` to receive transation fees from block proposals. 
    - Create Cluster Configuration

    ![Create Group](/img/Guide03.png)

6. Review, Confirm and Sign the following with your wallet

<Tabs groupId="leader-creator">
  <TabItem value="leader" label="Leader" default>
<ul><ul>
<li>
  
  The config hash. This is a hashed representation of all of the details for this cluster. 
</li>
<li>

  The `operator_config_hash` 
</li>
<li>

  Your `ENR`: this signature authorises the key represented by this ENR to act on your behalf in the cluster.
</li>
</ul></ul>

  </TabItem>
  <TabItem value="creator" label="Creator">
<ul><ul>
<li>
  
  The config hash. This is a hashed representation of all of the details for this cluster. 
</li>
</ul></ul>
</TabItem>
</Tabs>

7. Share your cluster invite link with the operators. Following the link will show you a screen waiting for other operators to accept the configuration you created.

  ![Invite Operators](/img/Guide04.png)

<Tabs groupId="leader-creator">
  <TabItem value="leader" label="Leader" default>

   👉 Once every participating operator has signed their approval to the terms, you will continue the [**Operator** journey](./quickstart-group-operator#step-3-run-the-dkg) by completing the distributed key generation step.
  </TabItem>
  <TabItem value="creator" label="Creator">

   Your journey ends here and you can monitor with the link whether the operators confirm their agreement to the cluster by signing their approval. Future versions of the launchpad will allow a creator to track a distributed validator's lifecycle in its entirety.
  </TabItem>
</Tabs>

