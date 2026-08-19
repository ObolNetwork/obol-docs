---
sidebar_label: "Activate a DV"
slug: /run-a-dv/running/activate-a-dv
---

# Activate a DV

If you have successfully created a distributed validator and you are ready to activate it, congratulations! 🎉

Once you have connected all of your Charon clients together, synced all of your ethereum nodes such that the monitoring indicates that they are all healthy and ready to operate, **ONE operator** may proceed to deposit and activate the validator(s).

The `deposit-data.json` to be used to deposit will be located in each operator's `.charon` folder. The copies across every node should be identical and any of them can be uploaded.

:::danger
If you are being given a `deposit-data.json` file that you didn't generate yourself, please take extreme care to ensure this operator has not given you a malicious `deposit-data.json` file that is not the one you expect. Cross reference the files from multiple operators if there is any doubt. Activating the wrong validator or an invalid deposit could result in complete theft or loss of funds.
:::

Use any of the following tools to deposit. Please use the third-party tools at your own risk and always double check the staking contract address.

* [Obol Distributed Validator Launchpad](https://launchpad.obol.org/deposit/advisories/)
* [ethereum.org Staking Launchpad](https://launchpad.ethereum.org/)

The activation process can take a minimum of 16 hours, with the maximum time to activation being dictated by the length of the activation queue, which can be weeks.
