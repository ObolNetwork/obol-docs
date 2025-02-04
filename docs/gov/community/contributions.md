---
sidebar_position: 6
description: Earning Obol Contributions
---

# Obol Contributions Program

_Our aim is to encourage continuous participation and sustained support for Ethereum’s consensus. The Obol Contributions program is therefore designed to be fair and transparent, without arbitrary gimmicks promoting short-term interest at the cost of long-term participation. Obol Contributions are meant to acknowledge all of the actors in the staking stack for their contribution to Ethereum’s decentralisation. test test_

_Each Obol DV contributes 1% of the total staking reward it earns to the Obol Collective. This economic stream is the basis for recognized Contributions. By basing Contributions on staking rewards accumulated by validators (pubkeys), performance is factored in (i.e. effectiveness, uptime, etc.)_

_Contributions are tracked in a centralised database off-chain, not on the blockchain as transferable or non-transferable tokens. Our_ [_API endpoints_](https://docs.obol.tech/api#tag/Address/operation/AddressController_getAddressContributions) _enable users and protocols to query how much they have contributed. These endpoints are used to show individuals’ Contributions within the_ [_Obol DV Launchpad_](https://launchpad.obol.org) _and partners’ staking platforms._

## What is the Obol Contributions Program?

* An opportunity for every staker to participate in and get recognised for scaling and decentralising Ethereum by staking on Obol Distributed Validators (DVs).
* Stake deployed on Obol DVs will contribute 1% of staking rewards to the Obol Collective’s retroactive funding mechanism.
* Those contributions will be tracked and recognised, and serve as the basis for future governance and ownership in the Obol Collective.

## How do I participate in the Obol Contributions Program?

You can participate in the Obol Contributions Program by:

1. **Running your own DV Cluster**: You can create and manage your own DV cluster using our [DV Launchpad](https://launchpad.obol.org), for example using a [DappNode](https://dappnode.com/). This allows you to directly participate in the network's decentralisation efforts and earn contributions. You can also visit our [Squad Staking](https://squadstaking.com) page for inspiration and to find squad members.
2. **Staking through Staking Partners**: By participating in staking through our partners, your staking rewards will also contribute to the Obol Collective. For the current list of staking partners, please visit [obol.org/contributions](https://obol.org/contributions).

## How can I track my contributions?

If you’re staking through a partner product, their dashboard will display your contributions. If you’re running your own DV, your contributions will be displayed on the [DV Launchpad](https://launchpad.obol.org/cluster/list/).

## What benefits do I get from contributing?

Contributions will serve as the basis for future ownership and governance of the Obol Collective’s retroactive funding mechanism.

## How are contributions calculated?

Contributions are based on 1% of validator rewards, which are contributed to the Obol Collective’s “1% for Decentralization” retroactive fund. (retroactivefunding.obol.eth) Contributions are calculated daily and tracked off-chain. This means that the higher the effectiveness and uptime of your validators, the more rewards (and thus contributions) you will generate.

If the total rewards ( R ) for a validator are split among operators with percentages ( p\_1, p\_2, ..., p\_n ), the contributions ( C ) for each operator can be calculated as:

Cᵢ = R × pᵢ × 0.01 × 1.01

where pᵢ is the split percentage for the i-th operator. We multiply by 1.01 to ensure that the full 1% contribution is accurately distributed among operators, compensating for the initial deduction of 1% from the total rewards.

## I’m already running a mainnet Obol DV? What about me?

If you are running an existing mainnet DV without the 1% split, you will not have tracked contributions and will need to deploy a new DV configuration to participate.

## Wen Token?

Obol Contributions are not a promise or indication of any future plans for an Obol Token. They are purely a recognition of your contribution to the security, resiliency, and decentralisation of Ethereum consensus through the adoption of Obol DVs.

## What is the 1% for Decentralization retroactive funding program?

Users of Obol distributed validator (DV) clusters contribute 1% of their staking rewards to a retroactive funding program. These funds will reward projects and innovations which add value and drive impact towards Ethereum’s decentralisation. Read more on our blog or on obol.org/governance.

## Do I need to run my own validator to participate?

No, you can stake on DVs and track your contributions through the partners listed on [obol.org/contributions](https://obol.org/contributions). More partners are coming soon.

## Can I withdraw my staked ETH at any time?

There is no penalty for exiting your validator. You simply stop accruing Contributions. The specific withdrawal policy will depend on the staking protocol used.

## What is the minimum amount of ETH needed to stake?

The minimum amount varies by staking protocol, please refer to each partner to determine the minimum amount of stake required.

## What happens if my validator has downtime?

Since Contributions are tied to staking rewards, the amount of Contributions earned is impacted by on performance metrics like effectiveness and uptime.

## Will my contributions be public?

Yes, contributions can be viewed through the [Obol API](https://docs.obol.org/api#tag/Address/operation/AddressController_getAddressContributions), though specific visibility settings depend on the protocol.

## How do I know my contributions are being counted accurately?

Contributions are tracked based on validator rewards, and you can verify them through [our API](https://docs.obol.org/api#tag/Address/operation/AddressController_getAddressContributions).

## How can I increase my contributions?

Contributions increase with higher stake, as well as higher performance and uptime of your validators.

## What are the benefits of using distributed validators?

Distributed validators increase the security, resiliency, and decentralisation of Ethereum.

## How can I get support if I have issues?

Support is available through Obol’s [Discord](https://discord.gg/obol) and partners’ support channels.
