---
sidebar_position: 2
description: Create a DV within Lido CSM 
---
# Create a DV within Lido CSM 

## Setup on Obol Launchpad 

You can use the [Obol Launchpad](../../learn/intro/launchpad.md) to configure a DV for use within Lido's Community Staking Module (CSM). From within the configuration page of the launchpad:

1. Set the `validators` field to 1 
(only 1 CSM validator can be deployed per cluster via the launchpad. For multi-validator deployments, use the SDK). 
2. Set `withdrawal configuration` to `custom`.
3. Set the `Withdrawal address` set to Lido’s *Withdrawal Vault* address, as per [Lido’s documentation](https://docs.lido.fi/deployed-contracts/holesky/). 
- On Holesky, this is `0xF0179dEC45a37423EAD4FaD5fCb136197872EAd9` 
- On Mainnet, this is `0xb9d7934878b5fb9610b3fe8a5e441e8fad7e293f`
    
4. Set the `fee recipient` to Lido’s *Execution Layer Rewards Vault* address, as per [Lido’s documentation](https://docs.lido.fi/deployed-contracts/holesky/).  
- On Holesky, this is `0xE73a3602b99f1f913e72F8bdcBC235e206794Ac8`
- On Mainnet, this is `0x388C818CA8B9251b393131C08a736A67ccB19297`

Once all operators sign the cluster configuration, the next step is the distributed key generation. If you are not planning on operating a node, and were only configuring the cluster for the operators, your journey ends here. But if you are one of the cluster operators, continue to Step 3 of the [Quickstart](../../run/start/quickstart_group.mdx#step-3-run-the-distributed-key-generation-dkg-ceremony)
