---
sidebar_position: 2
description: Some of the key terms in the field of Distributed Validator Technology
---

# Obol vs Other DV Implementations

This page outlines the unique features of Obol's DV implemenation, constrasting with other DV implementations. We built Obol’s DVT as a middleware to keep Ethereum secure, resilient, and composable. See also the blog article [Why We Built Charon as a Middleware](https://blog.obol.org/why-we-built-charon-as-a-middleware/).

![Obol vs others table](/img/ObolvsOthers.png)

## No private keys put on chain

Obol's distributed key generation (DKG) event generates key shares for each node within the DV cluster. The entire validator key NEVER exists in one place. Keys are generated locally on the nodes, and can be backed up. The private keys of Obol DVs are NEVER uploaded to the internet or published on-chain.

An alternative approach to doing this is to split it into shares, encrypt each share with the public key of a node operator, and publish the encrypted private key on chain. The operators’ node key could then decrypt the validator private key. In our opinion, this is not secure. We believe that the safest approach is to avoid the existence of a singular private key, and certainly never to post any private key to a public blockchain network.

## Cluster independance: Clusters can upgrade independently

DV clusters are independent from one another. They can run different versions of Charon, and don't need to upgrade together. Charon will NEVER require a hard fork or simultaneous update for any upgrades.  

In an Obol DV cluster, nodes use LibP2P to communicate directly with each other, and communications are end-to-end encrypted with SSL. Clusters are independent and do not need to communicate with one another. When a new version of Obol’s Charon is released, Obol DV clusters can upgrade on their own time, individually from other DV clusters. 

![Cluster Independence](/img/ClusterIndependence.png)

## Cluster independance: No reliance on a single P2P gossip network
In an Obol DV cluster, nodes use LibP2P to communicate directly with each other, and communications are end-to-end encrypted with SSL. This direct communication of nodes within a cluster improves latency, and makes cluster communications harder to attack with a denial of service (DOS) attack. It also allows an Obol DV cluster to be run within a private network. This may allow cost savings on data egress costs, for operators running cluster nodes across multiple locations of a single cloud provider, for example.

For other DVT implementations, each DV cluster communicates with every other cluster, creating a large, cumbersome gossip network. This limits scaling and requires the nodes of every DV cluster to run the same version. A drawback: the public gossip network relies on nodes to voluntarily open their ports and participate in peering and gossip, resulting in higher data egress costs, since each node is relaying many more messages than only the ones related to that node’s cluster. This may require some type of artificial incentivization to encourage nodes to participate in gossip messaging. In the event that nodes don’t broadly participate in peering, it may be necessary for the network developers to run a central messaging relayer in order to support the gossip network and ensure continued performance between all gossip nodes. (The costs associated with this central relaying would somehow need to be passed onto the network operators and users.)

![Gossip Network](/img/GossipNetwork.png)

## Works with existing validator clients and PKI
We built Obol’s DV implementation as a secure and trust-minimised middleware architecture. Our middleware client, Charon, doesn’t replace anything in the client stack, instead it sits between the consensus and validator clients. Node operators integrating the Charon DVT middleware into their stack can continue to use the same clients and private key infrastructure as before, albeit with a different key generation method. 

The alternative approach to DV design is to replace the validator client with a DV-native client, which has custody of the private keys and the capability to sign arbitrary data. However, in our opinion a full validator client capable of signing and exfiltrating arbitrary data without the oversight of a second software implementation has much higher risk of causing correlated slashing. 

![Standard VC](/img/StandardVC.png)

This gives the benefit of having both Charon and the existing validator client as failsafes, greatly reducing the odds of unintended slashing. Even in the worst case scenario where Charon is compromised by a supply chain attack or a remote code execution attack, or the Obol team become bad actors and push a malicious release, Charon cannot do a lot of damage as a middleware. If a compromised Charon client proposes a potential double vote or surround vote for a validator to sign, the validator client will check its anti-slashing database, see that it has already signed something conflicting, and simply refuse to return a signature. Charon could propose that a validator should sign an invalid block, but the chain would reject this and simply consider the proposal missed  - a much better outcome than slashing.

## No non-ETH token risk
Obol makes no changes to Ethereum’s standard bonding and reward mechanism, and does not require nodes to post any bonds additional to the 32 ETH required for a validator. To pay out rewards to operators, splitter contracts like Obol Splits can be used to withdraw and share rewards on a continuous basis. This allows products like liquid staking protocols to be built on top of Obol, implementing a bond or unique token into their protocol, should they choose to do so.

![ETH only](/img/ETHonly.png)

The alternative approach is to create a token and require stakers to pay operators in that token. This would require stakers to keep a balance of the network token ready for fee paying, in order to continue using the staking service. This mechanism would be informed by oracles, which decide when to post rewards and punish operators. This alternative model has some drawbacks. Namely, the varying price of the network’s unique token will change relative to the price of ETH: operators are not able to determine their commission as a percentage of ETH staked, and stakers likewise must consider the additional initial cost of purchasing the token to determine their long-term rate of return on their staked ETH.

![ETH an Fee](/img/ETHandFee.png)


## Non-custodial reward splits
(see also the [docs page on Splits](../../learn/intro/obol-splits.mdx), and the [0x Splits blog article](https://splits.org/blog/obol-ethereum-resilience/).)

To pay out rewards to operators, splitter contracts like Obol Splits can be used to withdraw and share rewards on a continuous basis. Two key goals of validator reward management are:
    1. To be able to differentiate reward ether from principal ether such that node operators can be paid a percentage the *reward* they accrue for the principal provider rather than a percentage of *principal+reward*.
    2. To be able to withdraw the rewards in an ongoing manner without exiting the validator.
This allows products like liquid staking protocols to be built on top of Obol, implementing a bond or unique token into their protocol, should they choose to do so.

![Splits OWR](/img/ObolSplits.png)
