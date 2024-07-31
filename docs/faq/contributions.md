---
sidebar_position: 6
description: Earning Obol Contributions
---

# Obol Contributions Program

## What are Contributions?

The Obol Contributions Program acknowledges and rewards participants for their efforts in scaling and decentralising the Ethereum network by staking on Distributed Validators (DVs). When you stake with DVs, 1% of the staking rewards are directed to the Obol Collective’s “1% for Decentralisation” retroactive funding program (RAF), and the amount of rewards you contribute to the RAF program represents your contributions.

## How to Earn Contributions

You can earn contributions by:

1. **Running your own DV Cluster**: You can create and manage your own DV cluster using our Launchpad. This allows you to directly participate in the network's decentralisation efforts and earn contributions. To get started, visit our [DV Launchpad](https://launchpad.obol.org). You can also visit our [Squad Staking](https://squadstaking.com) page for inspiration and to find squad members.

2. **Staking through Staking Partners**: By participating in staking through our partners, your staking rewards will also contribute to the Obol Collective. Here’s how you can start earning contributions through our partners:

- **Lido / Mellow**: The Obol vault accepts ETH deposits into the Simple DVT Module, bridging robust institutional staking and decentralised native staking. [Learn more](https://lido.fi).
- **Chorus One / Stakewise**: Stakewise and Chorus One offer a platform for ETH staking with integrated Obol DVs. [Learn more](https://opus.chorus.one/pool/stake).
- **Stakely**: Our partner enabling contributions through DV staking. [Learn more](https://stakely.io/).

## How Contributions are Accumulated

Your DV earns rewards which are distributed to operators based on the predefined percentages in the split contract. Each DV contributes 1% of its staking rewards to the Obol Collective. This means that the higher the effectiveness and uptime of your validators, the more rewards (and thus contributions) you will generate.

For example, if the total rewards \( R \) for a validator are split among operators with percentages \( p_1, p_2, ..., p_n \), the contributions \( C \) for each operator can be calculated as:

Cᵢ = R × pᵢ × 0.01

where pᵢ is the split percentage for the i-th operator.

## Tracking and Recognition

Your contributions are tracked off-chain in a centralised database. Contributions are updated daily using the aforementioned formula. You can query your contributions using our [API](https://docs.obol.org/api) or view them on the [Obol DV Launchpad](https://launchpad.obol.org/cluster/list/) and our partners' staking platforms. Note that the Launchpad only shows direct contributions by Squads and Clusters. Users who contributed through partners will need to access their partner’s UI to find their contributions.

By participating in the Obol Contributions Program, you not only earn rewards but also play a crucial role in enhancing the resilience and scalability of Ethereum’s network.