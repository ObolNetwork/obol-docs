---
description: "An overview of Obol's security posture — official domains, completed audits, threat model references, and the bug bounty program."
sidebar_label: "Overview"
slug: /advanced-and-troubleshooting/security/overview
---

# Overview

This page serves as an overview of the Obol Network from a security point of view.

This page is updated quarterly. The last update was on 2025-December-05.

View the operational status of Obol's supporting infrastructure at https://status.obol.org/. Your distributed validator does not require any centrally managed software to operate (if you run your own [relay](./risks.md)).

## Table of Contents

* [Overview](overview.md)
  * [Table of Contents](overview.md#table-of-contents)
  * [Official Domains and Channels](overview.md#domain-names-and-official-channels)
  * [List of Security Audits and Assessments](overview.md#list-of-security-audits-and-assessments)
  * [Security focused documents](overview.md#security-focused-documents)
  * [Bug Bounty](overview.md#bug-bounty)

## Domain names and official channels

The Obol network and affiliated teams may use the following domain names and social media accounts;
- [obol.org](https://obol.org/)
- [obol.tech](https://obol.tech/)
- obol.dev
- [dvlabs.tech](https://dvlabs.tech/)
- [@obol_collective](https://twitter.com/obol_collective) on x.com
- [@dv_labs](https://x.com/dv_labs) on x.com

Be wary of any communication presenting as related to Obol from other domains or social media accounts. Use good judgement and caution even when interacting with trusted domains and channels, as domain names, emails, and social media accounts can be compromised or impersonated.

## List of Security Audits and Assessments

The completed audits reports are linked [here](https://github.com/ObolNetwork/obol-security/tree/main/audits).

* A review of Obol Labs [development processes](ev-assessment.md) by [Ethereal Ventures](https://www.etherealventures.com/).
* A [security assessment](https://github.com/ObolNetwork/obol-security/blob/f9d7b0ad0bb8897f74ccb34cd4bd83012ad1d2b5/audits/Sigma_Prime_Obol_Network_Charon_Security_Assessment_Report_v2_1.pdf) of Charon by [Sigma Prime](https://sigmaprime.io/) resulting in version [`v0.16.0`](https://github.com/ObolNetwork/charon/releases/tag/v0.16.0).
* A second [assessment of Charon](https://obol.tech/charon_quantstamp_assessment.pdf) by [QuantStamp](https://quantstamp.com/) resulting in version [`v0.19.1`](https://github.com/ObolNetwork/charon/releases/tag/v0.19.1).
* A [security assessment of Charon's editability features](https://github.com/ObolNetwork/charon/blob/main/docs/audit/2026%20-%20Charon%20V2%20Audit%20-%20TrailOfBits.pdf) by [Trail of Bits](https://www.trailofbits.com/) resulting in version [`v1.9.0`](https://github.com/ObolNetwork/charon/releases/tag/v1.9.0).
* A [solidity audit](smart-contract-audit.md) of the Obol Splits contracts by [Zach Obront](https://zachobront.com/).
* A [penetration testing certificate](https://github.com/ObolNetwork/obol-security/blob/main/audits/Sayfer_2024-03_Penetration_Testing_CFD.pdf) of the Obol DV Launchpad by [Sayfer](https://sayfer.io/).
* A [second](https://github.com/ObolNetwork/obol-splits/blob/main/audit/2025%20-%20Obol%20Splits%20V2%20Audit%20-%20Nethermind.pdf) and [third](https://github.com/ObolNetwork/obol-splits/blob/main/audit/2025%20-%20Obol%20Splits%20V3%20Audit%20-%20Nethermind.pdf) solidity audit by [Nethermind Security](https://www.nethermind.io/nethermind-security).

## Security focused documents

* A [threat model](threat_model.md) for a DV middleware client like Charon.

## Bug Bounty

Information related to disclosing bugs and vulnerabilities to Obol can be found on [the next page](bug-bounty.md).
