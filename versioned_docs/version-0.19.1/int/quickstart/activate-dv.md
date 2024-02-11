---
sidebar_position: 4
description: Activate the Distributed Validator using the deposit contract
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Activate a DV

:::caution
Charon is in a beta state and should be used with caution according to its [Terms of Use](https://obol.tech/terms.pdf).
:::

If you have successfully created a distributed validator and you are ready to activate it, congratulations! 🎉

Once you have connected all of your charon clients together, synced all of your ethereum nodes such that the monitoring indicates that they are all healthy and ready to operate, **ONE operator** may proceed to deposit and activate the validator(s).

The `deposit-data.json` to be used to deposit will be located in each operator's `.charon` folder. The copies across every node should be identical and any of them can be uploaded.

:::warning
If you are being given a `deposit-data.json` file that you didn't generate yourself, please take extreme care to ensure this operator has not given you a malicious `deposit-data.json` file that is not the one you expect. Cross reference the files from multiple operators if there is any doubt. Activating the wrong validator or an invalid deposit could result in complete theft or loss of funds.
:::

Use any of the following tools to deposit. Please use the third-party tools at your own risk and always double check the staking contract address.

<Tabs groupId="network">
  <TabItem value="goërli" label="Goërli" default>
    <ul>
      <li><a href="https://goerli.launchpad.obol.tech/" target="_blank">Obol Distributed Validator Launchpad</a></li>
      <li><a href="https://goerli.launchpad.ethereum.org/en/" target="_blank">ethereum.org Staking Launchpad</a></li>
    </ul>
  </TabItem>
  <TabItem value="mainnet" label="Mainnet" >
    <ul>
      <li><a href="https://beta.launchpad.obol.tech/deposit/advisories/" target="_blank">Obol Distributed Validator Launchpad</a></li>
      <li><a href="https://launchpad.ethereum.org/" target="_blank">ethereum.org Staking Launchpad</a></li>
      <li>From a <a href="https://safe.global/">SAFE</a> Multisig (Repeat these steps for every validator to deposit in your cluster)</li>
      <ul>
        <li>From the SAFE UI, click on <code>New Transaction</code> then <code>Transaction Builder</code> to create a new custom transaction</li>
        <li>Enter the beacon chain contract for Deposit on mainnet - you can find it <a href="https://ethereum.org/en/staking/deposit-contract/">here</a></li>
        <li>Fill the transaction information</li>
        <li>Set amount to <code>32</code> in ETH</li>
        <li>Use your <code>deposit-data.json</code> to fill the required data : <code>pubkey</code>,<code>withdrawal credentials</code>,<code>signature</code>,<code>deposit_data_root</code>. Make sure to prefix the input with <code>0x</code> to format them in bytes</li>
        <li>Click on <code>Add transaction</code></li>
        <li>Click on <code>Create Batch</code></li>
        <li>Click on <code>Send Batch</code>, you can click on Simulate to check if the transaction will execute successfully</li>
        <li>Get the minimum threshold of signatures from the other addresses and execute the custom transaction</li>
      </ul>
    </ul>
  </TabItem>
</Tabs>

The activation process can take a minimum of 16 hours, with the maximum time to activation being dictated by the length of the activation queue, which can be weeks.
