---
sidebar_position: 1
description: Obol Collective Overview
---

# Collective Overview

## Purpose 

The Obol Collective’s governance system has two primary goals:

1. **Resource allocation.** Allocate resources effectively to support the Collective’s vision and grow the Obol Collective's sustainable value. Long-term vision may sometimes conflict with short-term value creation; thus, governance requires a blend of short-term and long-term thinking to allocate the token treasury and protocol revenue effectively.
2. **Capture resistance.** Governance plays a key role in securing the anti-capture and censorship resistance of the Obol Collective. Governance should: 
    1. make it possible for operations to continue over the long term without reliance on any individual entity;
    2. prevent any one entity or small group of entities from being able to control or censor.

## Overview: The Obol Token House and RAF

Two houses govern the Obol Collective: the Token House and the Obol RAF.

In the **Token House,** OBOL Token holders are responsible for submitting, deliberating, and voting on governance proposals using the Governance Portal. Token holders can delegate their OBOL Token voting power to their own address or an eligible third party. Addresses with delegated voting power are called “Delegates”.

In the **Obol Retroactive Fund (RAF)**, OBOL Token Delegates are responsible for allocating funds within the RAF to projects and teams that provide value to the Obol Collective.

All OBOL holders and Delegates are expected to exercise their authority responsibly and follow the Delegate [Rules of Engagement](https://community.obol.org/t/delegates-rules-of-engagement/206) and the general [Code of Conduct](https://community.obol.org/t/code-of-conduct-for-discussion-forum/205) for the forum.

![Goverance Houses](/img/GovernanceHouses.png)

## The Security Council

The Security Council is a committee of multi-sig wallet signers with the power to perform certain emergency actions as delegated to it by the Obol Association. 

The Security Council can execute any software upgrade or perform other emergency actions without delay to respond to a security emergency, should one arise. The Security Council must not use its power to perform Emergency Actions except in a true security emergency, such as a critical vulnerability that could significantly compromise the Obol Collective.

After taking any Emergency Action, the Security Council must issue a full transparency report (at an appropriate time after the security emergency has passed) explaining what was done and why such action was justified.


## Administration and Implementation

In all cases, Obol Collective governance is intended to be carried out in a manner consistent with the Delegate [Rules of Engagement](https://community.obol.org/t/delegates-rules-of-engagement/206) and the general [Code of Conduct](https://community.obol.org/t/code-of-conduct-for-discussion-forum/205) for the forum. The Obol Association will steward this process as described below, with the goal of increasingly decentralising its role over time.

The Obol Association, via its governance administrators, will facilitate administration to ensure that anyone may participate thoughtfully in governance. Such administrative services may include:

- Moderation of governance proposals to ensure they are validly submitted and voted upon;
- Removal of proposals that reasonably appear to be fraudulent, spam-oriented, defamatory, hateful, or otherwise inappropriate or inconsistent with the values of the Collective;
- Monitoring of votes, voting power, the votable token supply, and voting periods for purposes of determining whether quorums and approval thresholds are met or accurately reflected;
- Management of mutually contradictory or duplicate proposals that are submitted simultaneously or close to one another;
- Maintenance of the Governance & RAF Portal;
- Other tasks that the Obol Association deems appropriate in connection with the above.

Approved governance proposals will be routed to the Obol Association for implementation. Upon receipt of an approved proposal or chosen RAF recipients, the Obol Association will determine whether the proposal is safe, consistent with the purposes of the Obol Collective, and capable of being implemented legally (including potential KYC requirements).

- If it is, the Association will act diligently and in a commercially reasonable manner to consider the proposal for implementation.
- If it is not, the Association may, at its discretion, remove the proposal for resubmission or implement it with guardrails, coupled with an explanation.

## Vision for Fully On-Chain Governance

Once Collective’s governance develops and is deemed as sufficiently mature by the Obol Association, the implementations of passed proposals will follow full on-chain execution, where possible. Instead of the Collective’s reliance on the Obol Association for implementation, passed proposals will be moved to a queue to prepare for execution. The queue action will send the proposal to a Timelock contract, which starts a countdown until the proposal can be executed. 

Executing a proposal will run its function calls on-chain. Each proposal can be associated with one or more function calls. These calls will perform actions such as transferring assets from the treasury, updating the Governor's parameters, or calling another smart contract.
