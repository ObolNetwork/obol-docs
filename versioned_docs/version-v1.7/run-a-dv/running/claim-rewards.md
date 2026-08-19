---
sidebar_label: "Claim Rewards"
slug: /run-a-dv/running/claim-rewards
---

# Claim Rewards

Introduction[​](https://docs.obol.org/next/run/running/claim-rewards#introduction)

For every epoch, active validators earn ETH rewards from both the consensus layer and the execution layer. The consensus layer rewards are derived from validator duties such as attestation, proposals, and sync committees. These rewards are accumulated in the validator’s withdrawal address. Execution rewards, which are earned from MEV and transaction priority tips, are accumulated in the fee recipient address.

The method for claiming rewards depends on the Cluster's withdrawal configuration, whether it's an [**OWR**](https://docs.obol.org/next/learn/intro/obol-splits#optimistic-withdrawal-recipient) or an [**Exitable Withdrawal Configuration**](https://docs.obol.org/next/learn/intro/obol-splits#exitable-withdrawal-recipient) . The table below outlines the latest details on how and where to claim rewards.

### Claim Status {#claim-status}
\\

| Withdrawal Configuration                                                | Subcategory Description                                                                   | Is supported on Launchpad? | Where to claim?                                                                                                                                                                                       |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | -------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1. Claim principal + rewards without splits - Exit and get rewards      | To claim principal or rewards without splits, users currently have to exit the validator. | ✅                          | Cluster details page in the Operator Dashboard. For example, [here](https://holesky.launchpad.obol.org/cluster/details/?lockHash=0x42833298f3c767b866615814dd9f86ce35ed2f89bf3d397d5f353a0ad5a38013). |
| 2. Splits only rewards using OWR - ETH                                  | For all clusters with ETH rewards.                                                        | ✅                          | Cluster details page in the Operator Dashboard. For example, [here](https://holesky.launchpad.obol.org/cluster/details/?lockHash=0x42833298f3c767b866615814dd9f86ce35ed2f89bf3d397d5f353a0ad5a38013). |
| 3. Split principal + rewards - ETH                                      | For clusters configured to split both principal and rewards.                              | ✅                          | Operators currently need to use the UI provided by Splits.org. For example, a [Lido Split](https://app.splits.org/accounts/0x845aF36663a9908D9E46101e3CC658FbCEB783a8/?chainId=1).                    |
| 4. Splits non-ETH rewards using any withdrawal config - wstETH or weETH | For Lido and EtherFi clusters earning rewards in protocol-specific tokens.                | In Progress ➡️             | Operators currently need to use the UI provided by Splits.org. For example, a [Lido Split](https://app.splits.org/accounts/0x845aF36663a9908D9E46101e3CC658FbCEB783a8/?chainId=1).                    |
| 5. Lido CSM rewards - wstETH                                            | For all Lido CSM clusters earning wstETH rewards.                                         | In Progress ➡️             | Similar to row number 3, use the Splits UI. More details can be found at the bottom of [this page](https://docs.obol.org/run/integrations/lido-csm).                                                  |

### Claim Flow[​](https://docs.obol.org/next/run/running/claim-rewards#claim-flow) {#claim-flow}
To understand how claims via Launchpad work, it is highly recommended to first understand how splits work. More details are available [**here**](https://docs.obol.org/next/learn/intro/obol-splits). The flowchart below summarizes how an operator and a non-operator can interact with split contracts to facilitate claims:

![](/img/gitbook/image-56.png)

1. All validator rewards are accumulated in the validator's withdrawal address, which is a split wallet.
2. Claims can be triggered in two ways:
   1. **From addresses in the Splitter**: Splitter addresses will see a `Claim All` button. When the first address (e.g., address A) executes `Claim All`, it triggers a multi-call transaction to distribute rewards from all the split wallets associated with a cluster into the Split Main. The Split Main then sends address A’s proportion of the rewards (based on the split configuration at the time of cluster creation). All of this is executed with a single click for the first address.
   2. **From addresses not in the Splitter**: Non-splitter addresses will see a `Distribute All` button instead of `Claim All`. These addresses cannot claim rewards directly but can distribute rewards to the Split Main (subsidizing transaction fees for others). Operators can then claim rewards later by visiting the same cluster details page.
3. Internally, after clicking `Claim All` or `Distribute All`, the split wallet sends the funds to the Split Main contract.
4. The Split Main then sends proportional rewards to **address A**, completing steps 2a, 3, and 4 with a single click.
5. Other addresses (e.g., B, C, D) can later click on `Claim All` to receive their share of the rewards.

### Launchpad Edge Cases[​](https://docs.obol.org/next/run/running/claim-rewards#launchpad-edge-cases) {#launchpad-edge-cases}
We are constantly improving the user experience. Below are some edge cases to avoid confusion:

#### Case 1: The `Claimable` column doesn’t match the amount next to the `Claim All` button. {#case-1-the-claimable-column-doesnt-match-the-amount-next-to-the-claim-all-button}
![](/img/gitbook/image-87.png)

![](/img/gitbook/image-1-1-1-1-1.png)

In this scenario, someone else (a splitter or non-splitter address) has already distributed rewards to the Split Main (e.g., 0.12 ETH). However, your validators (4 in this case) have earned an additional 0.2 ETH in rewards. Your total effective claimable balance is 0.032 ETH, which you can claim using the `Claim All` button.

:::info
Your total effective claimable amount will always be displayed next to the `Claim All` button.
:::

#### Case 2: You don’t see a `Claim All` button but instead see `Distribute All`.[​](https://docs.obol.org/next/run/running/claim-rewards#case-2-you-dont-see-a-claim-all-button-but-instead-see-distribute-all) {#case-2-you-dont-see-a-claim-all-button-but-instead-see-distribute-all}
![](/img/gitbook/image-88.png)

This happens because the connected address is not listed in the split configuration. You may have used a different operator address from the one in the splitter configuration. You can:

* Distribute all rewards using the connected address for all operators and claim using your address in the splitter configuration.
* Switch to the splitter address and claim directly.

Note: It costs the same gas to distribute rewards for one address as it does for all addresses.

#### Case 3: You just created a new cluster with no active validators or rewards, but it shows a `Claim All` amount. {#case-3-you-just-created-a-new-cluster-with-no-active-validators-or-rewards-but-it-shows-a-claim-all}
![](/img/gitbook/image-89.png)

The amount shown here is from a previous case and is now sitting in the Split Main, ready to be claimed. Unfortunately, it is not possible to associate the Split Main balance of an address with a specific cluster. If you are part of multiple clusters, your Split Main balance will appear next to all `Claim All` buttons, regardless of the cluster. We are working on a fix to avoid this confusion.
