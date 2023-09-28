---
description: Security Overview
sidebar_position: 1
---

# Overview

This page serves as an overview of the Obol Network from a security point of view. It lists all of the projects that are intended to fall under the scope of the Obol Network project, as well as past audit reports, notable security bugs, and open security/privacy challenges in the Obol Network. You can think of this page as “a security auditor’s guide to Obol.”

This page is updated quarterly. The last update was on 2023-09-28.

## Table of Contents

1. [List of Security Audits and Assessments](#list-of-security-audits-and-assessments)
1. [Open Challenges](#open-challenges)

## List of Security Audits and Assessments

The completed audits reports are linked [here](https://github.com/ObolNetwork/obol-security/tree/main/audits).

- A review of Obol Labs development processes by Ethereal Ventures

- A security assessment of Charon by Sigma Prime.

- An solidity audit of the Obol Manager Contracts.

## Security focused documents

- A [threat model](../int/faq/threat_model.md) for a DV middleware client like charon.

## Open Challenges

These are some “big picture” security challenges for Obol Network that are on our radar.

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

Obol allows multiple operators to act as a single validator, requiring a total of 32 ETH for depositing to the beacon chain.
Deposit data for activating a validator is tied to the balance being sent. The safest way to prevent an invalid deposit and losing the ether is to do a full 32 ether deposit, rather than partial deposits each with distinct deposit data. However, in the context of shared validators, where multiple parties are combining their ether to make up a deposit, this leads to a coordination challenge around where to accumulate the required ether. Generally a multisig like a Gnosis SAFE is a reasonable option for a location to accumulate the ether, but that can lead to a risk of withholding the ether, the SAFE members needs to agree to let a contributor back out with the money they contributed. In future, a contract that has a 'rage quit' like feature might be a safer way to allow groups to gather up ether in advance of a deposit.
