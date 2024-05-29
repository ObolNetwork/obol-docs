---
sidebar_position: 4
description: Create a DV EigenPod
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Create an EigenLayer DV

:::caution
The Obol-SDK is in a beta state and should be used with caution. Ensure you validate all important data.
:::

This is a walkthrough of creating a distributed validator cluster pointing to an [EigenLayer](https://eigenlayer.xyz/) [EigenPod](https://docs.eigenlayer.xyz/eigenlayer/restaking-guides/restaking-user-guide/native-restaking/create-eigenpod-and-set-withdrawal-credentials/), using the [DV Launchpad](../dvl/intro.md) and other applications.

## Pre-requisites

- The ethereum addresses or ENS names for the node operators in the cluster. (Currently the DV Launchpad only supports Metamask or equivalent injected web3 browser wallets).
- If creating more than one validator, the ability to use the [obol-sdk](./quickstart-sdk.md) is required.

## Create a SAFE to own the EigenPod

Deploy a [SAFE](https://app.safe.global/) with the addresses of the node operators as signers. A reasonable signing threshold is the same as a cluster (>2/3rds) but use good judgement if a different threshold or signer set suits your use case. The principal ether for these validators will be returned to this address.

## Create an EigenPod

Select the "Create EigenPod" option on the [EigenLayer App](https://app.eigenlayer.xyz/)'s 'Restake' page, using the created SAFE account via WalletConnect. Note the EigenPod's address.

## Create a Splitter for the block reward

Create a Splitter on [splits.org](https://app.splits.org/), to divide the block reward and MEV amongst the operators. Note the split's address.

:::tip
To be part of Obol's [1% for Decentralisation ](https://blog.obol.tech/1-percent-for-decentralisation/) campaign, you must contribute 3% of execution layer rewards by setting [this address](etherscan.io/address/0xDe5aE4De36c966747Ea7DF13BD9589642e2B1D0d) as a recipient on your split. Future Obol EigenPods will support contributing 1% of total rewards instead.
:::

## Create the DV cluster invite

With these contracts deployed, you can now create the DV cluster invitation to send to Node Operators, this can be done through the DV Launchpad or the Obol SDK.

<Tabs groupId="configure-eigenpod">
  <TabItem value="launchpad" label="DV Launchpad" default>
    <ul>
      <li>Use the "Create a cluster with a group" <a href="../start/quickstart_group">flow</a> on the <a href="../dvl/intro">DV Launchpad</a>.</li>
      <li>Choose a cluster name and invite your operator's addresses.</li>
      <li>When setting the withdrawal credentials, select "Custom".</li>
      <li>For "Withdrawal Address", set the EigenPod contract address.</li>
      <li>For "Fee Recipient", set the Split contract address.</li>
      <li>Continue the process of creating a cluster normally, share the invitation link with the operators and have them complete the Distributed Key Generation ceremony.</li>
    </ul>
  </TabItem>
  <TabItem value="sdk" label="SDK">
    <ul>
        <li>If you are creating a cluster with more than one validator, you will need to craft the cluster invitation with the <a href="https://www.npmjs.com/package/@obolnetwork/obol-sdk" target="_blank">SDK</a>.</li>
        <li>Follow the  <a href="./quickstart-sdk">Create a cluster using the SDK</a> guide.</li>
        <li>For <code>withdrawal_address</code>, set the EigenPod contract address.</li>
        <li>For <code>fee_recipient_address</code>, set the Split contract address.</li>
        <li>Continue the process of creating the cluster as per the guide, share the invitation link with the operators and have them complete the Distributed Key Generation ceremony.</li>
      </ul>
  </TabItem>
</Tabs>


## Deposit and restake your Distributed Validator

Once you have completed the DKG ceremony, you can continue the flow on the EigenLayer app to activate these validators and restake them. Consult the EigenLayer [documentation](https://docs.eigenlayer.xyz/eigenlayer/restaking-guides/restaking-user-guide/native-restaking/create-eigenpod-and-set-withdrawal-credentials/enable-restaking) to continue the process. 
