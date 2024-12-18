---
sidebar_position: 3
description: Measuring Individual Performance in Distributed Validators
---

# Peer Score

## Introduction

Validator effectiveness is a critical metric for assessing the health of a rated network. It determines how well validators perform their attestation and block proposal duties. Existing solutions, like RAVER (Rated Validator Effectiveness Rating), provide a effectiveness score of a validator. In a monolithic validator that is run by a single operator, validator effectiveness can be considered as a proxy for the effectiveness or “score” of that operator. However, this approach falls short when dealing with distributed validators (DVs) maintained by multiple operators.

Peer Score v0 addresses this limitation by introducing a method to evaluate the performance of individual operators within a DV. This enables a more granular assessment of contribution within a distributed setting.

## Key Concepts

- **Distributed Validator (DV):** A validator maintained by a group of operators in a fault-tolerant manner.
- **Peer:** An individual operator contributing to a DV.
- **Peer Score:** A metric reflecting the performance of a peer within a DV, calculated as the ratio of completed duties to expected duties.
- **Operator Score:** An aggregated metric representing the overall effectiveness of an operator across multiple DVs (planned for future iterations).

## Challenges with RAVER in DVs

RAVER assigns a single effectiveness score to the entire DV. This score doesn't reflect the individual contributions of operators within the group. For example, a DV with 95% effectiveness maintained by four operators (A, B, C, and D) doesn't guarantee that each operator has a 95% effectiveness score. It's possible that even if operator D is frequently offline, the remaining operators (A, B, and C) can maintain the overall DV effectiveness.

## Peer Score v0 Calculation

Peer Score v0 utilizes a straightforward formula:

`Peer Score = (Total duties completed by peer) / (Total duties expected by peer)`

This ratio reflects the peer's adherence to its assigned duties within the DV.

## Future Iterations

Peer Score v0 lays the foundation for a more comprehensive evaluation system. Planned advancements include:

- **Weighted Duties:** Assigning varying weights to different duties based on their significance to the network.
- **Decentralization Scores:** Integrating metrics that consider the decentralization of clients and operator locations.
- Peer rating: an anonymous rating peers can give to their other peers to grade their social co-ordination.

## Use Cases

Peer Score offers valuable insights for various stakeholders:

- **Staking/Restaking Protocols:** Peer Score is crucial component of Obol’s Techne Credential Program. LSPs and LRPs can utilize Techne Credentials ,and hence Peer Score, to identify efficient operators for expanding their operator sets.
- **DV Operators:** Forming operator collectives based on peer effectiveness and potentially removing underperforming peers from DVs (with Charon v2 cluster mutability).
- **DV Software Developers:** Establishing a standardized metric for evaluating operator performance across various DV software, enabling the development of new tools and services.
