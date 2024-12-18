---
sidebar_position: 4
description: Create an EigenLayer Distributed Validator to enable distributed restaking.
---

# quickstart-eigenpod

import Tabs from '@theme/Tabs'; import TabItem from '@theme/TabItem';

## Create an EigenLayer DV

:::warning The Obol-SDK is in a beta state and should be used with caution. Ensure you validate all important data. :::

This is a walkthrough of creating a distributed validator cluster pointing to an [EigenLayer](https://eigenlayer.xyz/) [EigenPod](https://docs.eigenlayer.xyz/eigenlayer/restaking-guides/restaking-user-guide/native-restaking/create-eigenpod-and-set-withdrawal-credentials/), using the [DV Launchpad](../dvl/intro.md) and other applications.

### Pre-requisites

* The Ethereum addresses or ENS names for the node operators in the cluster. (Currently the DV Launchpad only supports Metamask or equivalent injected web3 browser wallets.)
* If creating more than one validator, the ability to use the [obol-sdk](quickstart-sdk.md) is required.

### Create a SAFE to own the EigenPod

Deploy a [SAFE](https://app.safe.global/) with the addresses of the node operators as signers. A reasonable signing threshold is the same as a cluster (>2/3rds) but use good judgement if a different threshold or signer set suits your use case. The principal ether for these validators will be returned to this address.

### Create an EigenPod

Select the "Create EigenPod" option on the [EigenLayer App](https://app.eigenlayer.xyz/)'s 'Restake' page, using the created SAFE account via WalletConnect. Note the EigenPod's address.

### Create a Splitter for the block reward

Create a Splitter on [splits.org](https://app.splits.org/), to divide the block reward and MEV amongst the operators. Note the split's address.

:::tip To be recognised as a part of Obol's [1% for Decentralisation](https://blog.obol.tech/1-percent-for-decentralisation/) campaign, you must contribute 3% of execution layer rewards by setting [this address](https://etherscan.io/address/0xDe5aE4De36c966747Ea7DF13BD9589642e2B1D0d) as a recipient on your split. Upcoming Obol EigenPods will support contributing 1% of total rewards instead of 3% of only execution rewards. :::

### Create the DV cluster invite

With these contracts deployed, you can now create the DV cluster invitation to send to Node Operators, this can be done through the DV Launchpad or the Obol SDK.

* Use the "Create a cluster with a group" [flow](https://github.com/ObolNetwork/obol-docs/blob/main/versioned_docs/version-v1.0.0/start/quickstart_group/README.md) on the [DV Launchpad](https://github.com/ObolNetwork/obol-docs/blob/main/versioned_docs/version-v1.0.0/dvl/intro/README.md).
* Choose a cluster name and invite your operator's addresses.
* When setting the withdrawal credentials, select "Custom".
* For "Withdrawal Address", set the EigenPod contract address.
* For "Fee Recipient", set the Split contract address.
* Continue the process of creating a cluster normally, share the invitation link with the operators and have them complete the Distributed Key Generation ceremony.
* If you are creating a cluster with more than one validator, you will need to craft the cluster invitation with the [SDK](https://www.npmjs.com/package/@obolnetwork/obol-sdk).
* Follow the [Create a cluster using the SDK](https://github.com/ObolNetwork/obol-docs/blob/main/versioned_docs/version-v1.0.0/advanced/quickstart-sdk/README.md) guide.
* For `withdrawal_address`, set the EigenPod contract address.
* For `fee_recipient_address`, set the Split contract address.
* Continue the process of creating the cluster as per the guide, share the invitation link with the operators and have them complete the Distributed Key Generation ceremony.

### Deposit and restake your Distributed Validator

Once you have completed the DKG ceremony, you can continue the flow on the EigenLayer app to activate these validators and restake them. Consult the EigenLayer [documentation](https://docs.eigenlayer.xyz/eigenlayer/restaking-guides/restaking-user-guide/native-restaking/create-eigenpod-and-set-withdrawal-credentials/enable-restaking) to continue the process.
