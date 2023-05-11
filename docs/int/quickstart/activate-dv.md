---
sidebar_position: 4
description: Activate the Distributed Validator
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Activate a DV

Congrats 🎉 if you have successfully created a distributed validator. 

Once you have connected all of your charon clients together such that the monitoring indicates that they are all healthy and ready to operate, **ONE operator**, may process to activate this deposit data at the following: 

<Tabs groupId="network">
  <TabItem value="goërli" label="Goërli" default>
    <a href="https://goerli.launchpad.obol.tech/">Obol Launchpad</a>
  </TabItem>
  <TabItem value="mainnet" label="Mainnet" >
    <a href="https://launchpad.ethereum.org/">Ethereum.org Launchpad</a>
  </TabItem>
</Tabs>

This process can take a minimum of 16 hours, with the maximum time to activation being dictated by the length of the activation queue, which can be weeks. You can leave your distributed validator cluster offline until closer to the activation period if you would prefer. You can also use this time to improve and harden your monitoring and alerting for the cluster.

The validator `deposit-data.json` should be in `.charon`.