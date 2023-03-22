---
description: Charon - The Distributed Validator Client
sidebar_position: 1
---

# Obol Security Overview
This page serves as an overview of the Obol Network from a security auditor’s point of view. It lists all of the projects that are intended to fall under the scope of the Obol Network project, as well as past audit reports, notable security bugs, and open security/privacy challenges in the Obol Network. You can think of this page as “a security auditor’s guide to Obol.”

This page is updated quarterly. The last update was on 2023-03-21.

## Table of Contents
1. [Obol Audits](#obol-audits)
2. [Open Problems and Challenges](#open-problems-and-challenges)
3. [Core Public Goods](#core-public-goods)
4. [List of Security Audits](#list-of-security-audits)

## Obol Audits
Obol Network has completed the following security audits:
- Ethereal Ventures Security Audit [Report](https://hackmd.io/sH7FDtgTQV-2jN2ODfiscw)

## Open Problems and Challenges
These are the “big picture” security challenges for Obol Network that are on our radar.

### Validation of Contract Deployment and Deposit Data Relies Heavily on Launchpad

The risks identified include the possibility of malicious contracts being deployed by attackers who compromise the Launchpad or an underlying dependency.

Key concerns raised by the auditor:
1. How does the group creator know the Launchpad deployed the correct contracts?
2. How does the rest of the group know the creator deployed the contracts through the Launchpad?
The current verification process relies on the independent verification performed by each group member during and after the cluster's setup phase. However, this process may not be sufficient, as most users lack the necessary expertise to verify the source code accurately.

The primary risk is that users may deposit with malicious withdrawal or fee recipient credentials, potentially allowing an attacker to steal the entire withdrawal amount once the cluster exits.

The audit also mentions similar risks in validating deposit data but lacks clarity on the Obol stack's specific part that generates the deposit data/transaction.

The auditor suggests that the mitigation for these risks would involve a more thorough and reliable verification process, although further details are not provided in the summary.

### Social Consensus, aka “Who sends the 32 ETH?”

Obol allows multiple operators to act as a single validator, requiring a total of 32 ETH for depositing to the beacon chain. Currently, the process relies on trust and social consensus, where the group decides on individual contributions and trusts someone to complete the deposit process correctly without misusing the funds.

While the initial launch of Obol is limited to a small group, for a future public release, the deposit process should be simpler and less reliant on trust to ensure security and user confidence.

## Core Public Goods
The Obol Network consists of four core public goods:

- The Distributed Validator [Launchpad](https://docs.obol.tech/docs/dvl/intro), a [User Interface](https://goerli.launchpad.obol.tech/) for bootstrapping Distributed Validators
- [Charon](https://docs.obol.tech/docs/charon/intro), a middleware client that enables validators to run in a fault-tolerant, distributed manner
- [Obol Managers](https://docs.obol.tech/docs/sc/introducing-obol-managers), a set of solidity smart contracts for the formation of Distributed Validators
- [Obol Testnets])(https://docs.obol.tech/docs/testnet), a set of on-going public incentivized testnets that enable any sized operator to test their deployment before serving for the mainnet Obol Network

## List of Security Audits

### 2023
Ethereal Ventures did the initial security audit for Obol's software development processes, vulnerability disclosure and escalation procedures, and the key personnel risk. The audits completed reports are linked [here](https://github.com/ObolNetwork/obol-security/tree/main/audits).
