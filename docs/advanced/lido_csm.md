---
sidebar_position: 5
description: Create a DV within Lido CSM 
---
# Create a DV within Lido CSM 

## Setup on Obol Launchpad 

For a step-by-step guide more suited to beginners, please see [here.](./lido_csm_walkthrough.md)

You can use the [Obol Launchpad](../dvl/intro.md) to configure a DV for use within Lido's Community Staking Module (CSM). From within the configuration page of the launchpad:

1. Enter your cluster's size and Node Operator addresses.
2. Set the `validators` field to the appropriate value (up to 12 for CSM Early Access).
3. Set `withdrawal configuration` to `LIDO CSM` 
4. `Withdrawal address` is automatically set to *Lido’s Withdrawal Vault address:*, [0xB9D7934878B5FB9610B3fE8A5e441e8fad7E293f](https://etherscan.io/address/0xb9d7934878b5fb9610b3fe8a5e441e8fad7e293f) as per Lido’s [documentation](https://operatorportal.lido.fi/modules/community-staking-module#block-d8e94f551b2e47029a54e6cedea914a7).
5. `Fee recipient` is automatically set to *Lido's Execution Layer Rewards Vault Address:* [0x388C818CA8B9251b393131C08a736A67ccB19297](https://etherscan.io/address/0x388C818CA8B9251b393131C08a736A67ccB19297), as per Lido’s [documentation](https://operatorportal.lido.fi/modules/community-staking-module#block-d8e94f551b2e47029a54e6cedea914a7).

![CSM tab of the Launchpad](/img/CSM_launchpad_tab.png)

6. Once all operators sign the cluster configuration, the next step is the distributed key generation.
7. Once DKG is complete, you have the appropriate `deposit-data.json` file to upload to Lido CSM. 
8. If you are not planning on operating a node, and were only configuring the cluster for the operators, your journey ends here. 
9. If you are one of the cluster operators, continue to the next step.
