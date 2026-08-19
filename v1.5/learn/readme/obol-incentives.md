# OBOL Incentives

## OBOL Incentives Program

The **OBOL Incentives Program** is designed to be powerful and transparent, rewarding anyone OBOL tokens for staking on **Distributed Validators (DVs).**

### What is the OBOL Incentives Program?

OBOL Incentives offer an opportunity to **earn OBOL Token incentives** for staking on **Distributed Validators**.

* **12.5 million OBOL Tokens** (2.5% of the total supply) will be distributed in the **first year (2025).**
* Incentives **begin accruing on March 24th, 2025.**
* **Claiming** will be possible shortly after the OBOL Token is unlocked (as per O[IP#2](https://community.obol.org/t/oip-2-unlock-obol-token/)) and starts trading.

Each week, **1/52 of the 12.5M OBOL** will be distributed (**\~240,385 OBOL per week**).

If you are staking with a partner, incentives will either be claimed via the participating partner UI frontends or via the [DV Launchpad](https://launchpad.obol.org/) as per the table below.

***

### How do I participate?

You can participate by:

1. **Staking through Staking Partners**
   * For the latest list of partners that qualify for OBOL Incentives, visit [https://obol.org/incentives](https://obol.org/incentives) and see the table below.
2. **Running Your Own DV Cluster**
   * Use the [DV Launchpad](https://launchpad.obol.org) to create and manage your own DV cluster, e.g., using a [DappNode](https://dappnode.com/) or other hardware. Please note, you must opt into [1% for Decentralization](https://blog.obol.org/1-percent-for-decentralisation/) to qualify for Obol Incentives.&#x20;
   * This method directly supports Ethereum’s decentralization while earning OBOL incentives.
   * Visit the official Obol Discord to find squad mates.

***

### Is existing stake eligible?

* If you are staking yourself directly on Obol DVs and/or Squad Staking, your stake is 100% eligible for rewards. Please note, you must opt into [1% for Decentralization](https://blog.obol.org/1-percent-for-decentralisation/) to qualify for Obol Incentives.&#x20;
* If you are staking with a partner protocol, it's best to review the details of that partner at Obol.org/incentives. Only ETH staked on Obol DVs with qualified partners qualify for Obol Incentives and not all partners are created equal.

***

### How much OBOL will I receive per ETH staked on DVs?

* **The OBOL amount per ETH depends on total ETH participation.**
* The **240,385 OBOL per week** is distributed **proportionally** across all participating ETH.
* Your **share of the total ETH** determines your **share of OBOL incentives.**
* If you need help calculating your potential rewards, feel free to use this community created calculator:
  * **NOTE:** This is a community created calculator, is not managed by DV Labs or the Obol Association, and is not to be fully trusted.&#x20;

***

### How are incentives tracked?

OBOL incentives are based on staking rewards earned by validators (pubkeys). Performance factors like effectiveness and uptime impact rewards.



* Incentives are tracked off-chain in a centralized database.
* API endpoints allow users & protocols to query earned incentives.
* Incentives are displayed in the [Obol DV Launchpad](https://launchpad.obol.org) and/or participating partner UI frontends.

***

### How do you ensure calculations for OBOL Incentives are made properly?

Our rewards calculation and distribution system is built for accuracy, transparency, and security. We use Miga Labs' indexer to reliably track validator rewards, and all critical data—such as total rewards, split configurations, and depositor allocations—is verified on-chain and made publicly available for cross-verification. In cases where a partner misreports depositor splits, it only affects their own internal distribution and does not compromise the total rewards allocation or the fairness of the system.

***

### How can I track my OBOL incentives?

* For those staking with a Partner: Your staking platform should show and distribute your OBOL incentives in their UI frontend.
* For those running their own Distributed Validators: Incentives are displayed on the [DV Launchpad](https://launchpad.obol.org).

***

### What benefits do I get from the OBOL Token?

OBOL Tokens serve as the basis for ownership and governance of the Obol Collective.\
Learn more on the OBOL Token page.

![](/img/gitbook/image-57.png)

***

### How are incentives calculated?

OBOL incentives are tied to validator staking rewards and calculated daily.

For a validator with total staking rewards ( R ), and operator split percentages ( p\_1, p\_2, ..., p\_n ), the operator’s rewards (Oᵢ) are:

\[ Oᵢ = R × pᵢ × 0.01 × 1.01 ]

* ( pᵢ ) = Operator’s percentage split.
* The 1.01 multiplier ensures the full 1% of rewards is distributed correctly.

Higher effectiveness & uptime = more incentives.

***

### Can I withdraw my staked ETH at any time?

Yes, you can withdraw at anytime but you **stop accruing incentives** upon withdrawal.

* If you are staking with a partner,  they may choose to set penalties for early withdrawals but this is not common.
* If you are running your own distributed validator, there is no penalty for withdrawing or exiting.

***

### What is the minimum amount of ETH needed to stake?

* If you are staking with a partner,  they will have their own minimum deposit amount.
* If you are running your own distributed validator, the total amount required by your squad is 32 ETH.
* Check each partner’s requirements at [https://obol.org/incentives](https://obol.org/incentives).

***

### What happens if my validator has downtime?

Since OBOL incentives are tied to staking rewards, validator performance metrics directly impact earned incentives.

* More uptime & effectiveness = More incentives.
* Longer downtime = Fewer rewards.

***

### Will my incentives be public?

Yes. Incentives are publicly accessible through the Obol API (with the correct protocol address).

***

### How do I increase the amount of OBOL I can earn?

* Increase the amount of ETH staked.
* Improve validator performance (higher uptime & effectiveness).

***

### What are the benefits of using Distributed Validators?

Distributed Validators improve performance, lower risks and increase rewards. Learn more at [obol.org/learn](https://obol.org/learn).

***

### How can I get support if I have issues?

* Join the Obol Discord community: [discord.gg/obol](https://discord.gg/obol).
* If you are staking with a partner, reach out to them directly.

***

### Who are the staking partners and how can I get access to my rewards?

For each partner listed below, you’ll find:

* The eligible TVL for Obol Incentives
* How depositors can claim these incentives
* The portion of incentives (if any) retained by the partner

You’ll also see an estimated multiplier, which reflects how each partner manages these incentives.

* A **multiplier below 100%** typically means Obol incentives are spread across all depositors, even though only a portion of the partner's total TVL is running Obol DVs.
* A **multiplier above 100%** usually indicates that the partner is concentrating Obol rewards on a specific vault, which has less TVL than the total TVL running Obol DVs.

| Partner Name                                                     | Eligible TVL                                                                                                                 | Claim Method                                                                                       | Incentives Split                                                                                                    | Multiplier |
| ---------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ---------- |
| [Mellow DVV](https://app.mellow.finance/vaults/ethereum-dvsteth) | <p>All of Mellow DVV TVL <br />+ Lido SDVT Module validators added post Jan 13th Airdrop<br />+ Lido CSM TVL ran by Obol DVs</p> | [Obol Launchpad](https://launchpad.obol.org/)                                                      | <ul><li>Mellow Depositors: 80% for CSM TVL, 90% for SDVT TVL</li></ul><ul><li>Rest to Node Operators</li></ul>      | ≥ 100%     |
| [Ether.fi](https://app.ether.fi/weeth)                           | Portion of total TVL running on Obol DVs                                                                                     | Directly accruing as [KING rewards](https://etherfi.gitbook.io/etherfi/king-protocol-formerly-lrt) | According to partner's [fee structure](https://etherfi.gitbook.io/etherfi/ether.fi-whitepaper/ether.fi-staking)     | <100%      |
| Blockdaemon                                                      | TBD                                                                                                                          | [Blockdaemon UI](https://www.blockdaemon.com/)                                                     | According to partner's fee structure                                                                                | TBD        |
| [Chorus One](https://opus.chorus.one/pool/stake/)                | Total TVL of the OBOL Vault                                                                                                  | TBD                                                                                                | According to partner's fee structure                                                                                | = 100%     |
| [Dinero](https://dinero.xyz/pxeth/deposit)                       | Portion of total TVL running on Obol DVs                                                                                     | TBD                                                                                                | According to partner's fee structure                                                                                | < 100%     |
| [Stakewise](https://app.stakewise.io/)                           | Portion of total TVL running on Obol DVs                                                                                     | [Stakewise UI](https://app.stakewise.io/)                                                          | According to partner's [fee structure](https://docs.stakewise.io/protocol-overview-in-depth/fees#vault-staking-fee) | < 100%     |
| [Swell](https://app.swellnetwork.io/stake/rsweth)                | Portion of total TVL running on Obol DVs                                                                                     | TBD                                                                                                | According to partner's fee structure                                                                                | < 100%     |
| [Hashkey Cloud](https://www.hashkey.cloud/)                      | TBD                                                                                                                          | [Obol Launchpad](https://launchpad.obol.org/)                                                      | According to partner's fee structure                                                                                | TBD        |
| [Validation Cloud](https://www.validationcloud.io/)              | Portion of total TVL running on Obol DVs                                                                                     | [Obol Launchpad](https://launchpad.obol.org/)                                                      | According to partner's fee structure                                                                                | = 100%     |
