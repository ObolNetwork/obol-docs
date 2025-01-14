---
sidebar_position: 6
description: Earning OBOL Programmatic Incentives
---

# OBOL Programmatic Incentives Program

*Our aim is to encourage continuous participation and sustained support for Ethereum’s infrastructure network. The Obol Programmatic Incentives Program program is designed to be fair and transparent, acknowledging stakers for their capital contribution.*

*By basing OBOL incentives on staking rewards accumulated by validators (pubkeys), performance is factored in (i.e. effectiveness, uptime, etc.)*

*Rewards are tracked in a centralised database off-chain - our [API endpoints](https://docs.obol.tech/api#tag/Address/operation/AddressController_getAddressContributions) enable users and protocols to query how much incentives they have accumulated. These endpoints are used to show individuals’ incentives within the [Obol DV Launchpad](https://launchpad.obol.org) and partners’ staking platforms.*

## What is the OBOL Programmatic Incentives Program?

OBOL Programmatic Incentives offer an opportunity for every staker to earn access to governance and ownership in the Obol Collective, by staking ETH on distributed validators. 2.5% of the supply of OBOL Tokens will be rewarded to ETH stakers on Obol DVs in the first year. 

## How do I participate in the OBOL Programmatic Incentives Program?

You can participate in the OBOL Programmatic Incentives Program by:

1. **Running your own DV Cluster**: Running your own DV Cluster: You can create and manage your own DV cluster using our [DV Launchpad](https://launchpad.obol.org), for example using a [DappNode](https://dappnode.com/) or other hardware. This allows you to directly participate in the network's decentralisation efforts and earn OBOL incentives. Visit our [Squad Staking](https://squadstaking.com) page for inspiration and to find squad members. 

2. **Staking through Staking Partners**: Staking through Staking Partners: For the current list of staking partners, please visit [obol.org/stake](https://obol.org/stake).

## How can I track my OBOL incentives?

If you’re running your own DV, your incentives will be displayed on the [DV Launchpad](https://launchpad.obol.org). If you’re staking through a partner product, they should display your incentives and distribute them to you.

## What benefits do I get from the OBOL Token?

OBOL Tokens serve as the basis for ownership and governance of the Obol Collective. Learn more on the [token page](./obol-token.md) of the docs.

## How are incentives calculated?

OBOL incentives are based on validator staking rewards. They are calculated daily and tracked off-chain. The higher the effectiveness and uptime of your validators, the more incentives you will generate.

If the total staking rewards \( R \) for a validator are split among operators with percentages \( p_1, p_2, ..., p_n \), the rewards \( O \) for each operator can be calculated as:

Cᵢ = R × pᵢ × 0.01 × 1.01

where pᵢ is the split percentage for the i-th operator. We multiply by 1.01 to ensure that the full 1% contribution is accurately distributed among operators, compensating for the initial deduction of 1% from the total rewards.

## I’m already running a mainnet Obol DV? What about me?

If you are running an existing mainnet DV without the 1% split, you will not have tracked incentives and will need to deploy a new DV configuration to participate.

## Do I need to run my own validator to participate?

No, you can stake on DVs and track your incentives through the partners listed on [obol.org/stake](https://obol.org/stake). More partners are coming soon.

## Can I withdraw my staked ETH at any time?

There is no penalty for exiting your validator. You simply stop accruing incentives. The specific withdrawal policy will depend on the staking protocol used.

## What is the minimum amount of ETH needed to stake?

The minimum amount varies by staking protocol, please refer to each partner to determine the minimum amount of stake required.

## What happens if my validator has downtime?

Since OBOL incentives are tied to staking rewards, the amount of incentives earned is impacted by validator performance metrics like effectiveness and uptime.

## Will my contributions be public?

Yes, incentives are public and can be viewed through the [Obol API](https://docs.obol.org/api#tag/Address/operation/AddressController_getAddressContributions), if you have the address of the protocol.

## How do I know my contributions are being counted accurately?

OBOL incentives are tracked based on validator staking rewards, and you can verify them through [our API](https://docs.obol.org/api#tag/Address/operation/AddressController_getAddressContributions).

## How can I increase my OBOL Programmatic Incentives?

Incentives increase with more stake, as well as higher performance and uptime of your validators.

## What are the benefits of using distributed validators?

Distributed validators increase the security, resiliency, and decentralisation of Ethereum. Learn more at [obol.org/learn](https://obol.org/learn).

## How can I get support if I have issues?

Support is available through Obol’s [Discord](https://discord.gg/obol) and partners’ support channels.