---
sidebar_position: 1
description: Create a DV cluster using the Obol Typescript SDK
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Create a DV using the SDK

:::caution

The Obol-SDK is in an alpha state and should be used with caution.
:::

This is a walkthrough of using the [Obol-SDK](https://www.npmjs.com/package/@obolnetwork/obol-sdk) to propose a four-node distributed validator cluster for creation using the [DV Launchpad](../../../dvl/intro.md). 

## Pre-requisites

- You have [node.js](https://nodejs.org/en) installed.

## Install the package

Install the Obol-SDK package into your development environment

<Tabs groupId="install-sdk">
  <TabItem value="npm" label="NPM" default>
    <pre>
      <code>npm install --save @obolnetwork/obol-sdk</code>
    </pre>
  </TabItem>
  <TabItem value="yarn" label="Yarn">
    <pre>
      <code>yarn add @obolnetwork/obol-sdk</code>
    </pre>
  </TabItem>
</Tabs>

## Instantiate the client

The first thing you need to do is create a instance of the Obol SDK client. The client takes two constructor parameters:

- The `chainID` for the chain you intend to use.
- An ethers.js [signer](https://docs.ethers.org/v6/api/providers/#Signer-signTypedData) object.


```ts
import { Client } from "@obolnetwork/obol-sdk";
import { ethers } from "ethers";

// Create a dummy ethers signer object with a throwaway private key
const mnemonic = ethers.Wallet.createRandom().mnemonic?.phrase || "";
const privateKey = ethers.Wallet.fromPhrase(mnemonic).privateKey;
const wallet = new ethers.Wallet(privateKey);
const signer = wallet.connect(null);

// Instantiate the Obol Client for goerli 
const obol = new Client({chainId: 5}, signer);
```

## Propose the cluster

List the Ethereum addresses of participating operators, along with withdrawal and fee recipient address data for each validator you intend for the operators to create.

```ts
// A config hash is a deterministic hash of the proposed DV cluster configuration
const configHash = await obol.createClusterDefinition({
  name: "SDK Demo Cluster",
  operators:
    [
      { address: "0xC35CfCd67b9C27345a54EDEcC1033F2284148c81" },
      { address: "0x33807D6F1DCe44b9C599fFE03640762A6F08C496" },
      { address: "0xc6e76F72Ea672FAe05C357157CfC37720F0aF26f" },
      { address: "0x86B8145c98e5BD25BA722645b15eD65f024a87EC" }
    ],
  validators: [{
    fee_recipient_address: "0x3CD4958e76C317abcEA19faDd076348808424F99",
    withdrawal_address: "0xE0C5ceA4D3869F156717C66E188Ae81C80914a6e"
  }],
});

console.log(`Direct the operators to https://goerli.launchpad.obol.tech/dv?configHash=${configHash} to complete the key generation process`)
```

## Invite the Operators to complete the DKG

Once the Obol-API returns a `configHash` string from the `createClusterDefinition` method, you can use this identifier to invite the operators to the [Launchpad](../../../dvl/intro.md) to complete the process

1. Operators navigate to `https://<NETWORK_NAME_HERE>.launchpad.obol.tech/dv?configHash=<CONFIG_HASH_HERE>` and complete the [run a DV with others](../group/quickstart-group-operator.md) flow.
1. Once the DKG is complete, and operators are using the `--publish` flag, the created cluster details will be posted to the Obol API
1. The creator will be able to retrieve this data with `obol.getClusterLock(configHash)`, to use for activating the newly created validator. 

## Retrieve the created Distributed Validators using the SDK

Once the DKG is complete, the proposer of the cluster can retrieve key data such as the validator public keys and their associated deposit data messages. 

```js
const clusterLock = await obol.getClusterLock(configHash);
```

Reference lock files can be found [here](https://github.com/ObolNetwork/charon/tree/main/cluster/testdata). 

## Activate the DVs using the deposit contract

This guide will in future cover activating the deposit data from a lock file.

## Usage Examples

Examples of how our SDK can be used are found [here](https://github.com/ObolNetwork/obol-sdk-examples).
