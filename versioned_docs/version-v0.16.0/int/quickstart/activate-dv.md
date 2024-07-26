---
sidebar_position: 4
description: Activate the Distributed Validator using the deposit contract
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Activate a DV

:::warning
Charon is in an alpha state and should be used with caution according to its [Terms of Use](https://obol.tech/terms.pdf).
:::

If you have successfully created a distributed validator and you are ready to activate it, congratulations.  

Once you have connected all of your charon clients together, synced all of your ethereum nodes such that the monitoring indicates that they are all healthy and ready to operate, **ONE operator** may proceed to activate the validators using one of the following websites: 

<Tabs groupId="network">
  <TabItem value="goërli" label="Goërli" default>
    <a href="https://goerli.launchpad.obol.tech/" target="_blank">Obol Distributed Validator Launchpad</a>
  </TabItem>
  <TabItem value="mainnet" label="Mainnet" >
    <a href="https://launchpad.ethereum.org/" target="_blank">ethereum.org Staking Launchpad</a>
  </TabItem>
</Tabs>

The `deposit-data.json` to be uploaded to the launchpad will be located in each operator's `.charon` folder. The copies across every node should be identical and any of them can be uploaded. Only one, 32 ether deposit, needs to be made for each validator operated by the cluster. 

:::warning
If you are being given a `deposit-data.json` file that you didn't generate yourself, please take extreme care to ensure this operator has not given you a malicious `deposit-data.json` file that is not the one you expect. Cross reference the files from multiple operators if there is any doubt. Activating the wrong validator or an invalid deposit could result in complete theft or loss of funds. 
:::

The activation process can take a minimum of 16 hours, with the maximum time to activation being dictated by the length of the activation queue, which can be weeks.