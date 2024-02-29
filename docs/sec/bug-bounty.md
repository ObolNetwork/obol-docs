---
sidebar_position: 2
description: Bug Bounty Policy
---

# Obol Bug Bounty

## Overview

Obol Labs is committed to ensuring the security of our distributed validator software and services. As part of our commitment to security, we have established a bug bounty program to encourage security researchers to report vulnerabilities in our software and services to us so that we can quickly address them.

## Eligibility

To participate in the Bug Bounty Program you must:

- Not be a resident of any country that does not allow participation in these types of programs
- Be at least 14 years old and have legal capacity to agree to these terms and participate in the Bug Bounty Program
- Have permission from your employer to participate
- Not be (for the previous 12 months) an Obol Labs employee, immediate family member of an Obol employee, Obol contractor, or Obol service provider.

## Scope

The bug bounty program applies to software and services that are built by Obol. Only submissions under the following domains are eligible for rewards:

- Charon the DV Middleware Client
- The DV Launchpad
- Obol’s Public API
- Obol’s Smart Contracts and the contracts they depend on.
- Obol Labs hosted Public Relay Infrastructure

Additionally, all vulnerabilities that require or are related to the following are out of scope:

- Social engineering
- Rate Limiting (Non-critical issues)
- Physical security
- Non-security-impacting UX issues
- Vulnerabilities or weaknesses in third party applications that integrate Obol
- The [Obol](https://obol.tech) static website or the Obol infrastructure in general is NOT part of this bug bounty program
- The operational security of node operators running or using Obol software

## Rules

- Bug has not been publicly disclosed
- Vulnerabilities that have been previously submitted by another contributor or already known by the Obol development team are not eligible for rewards
- The size of the bounty payout depends on the assessment of the severity of the exploit. Please refer to the rewards section below for additional details
- Bugs must be reproducible in order for us to verify the vulnerability. Submissions with a working proof of concept is necessary
- Rewards and the validity of bugs are determined by the Obol security team and any payouts are made at their sole discretion
- Terms and conditions of the Bug Bounty program can be changed at any time at the discretion of Obol
- Details of any valid bugs may be shared with complementary protocols utilised in the Obol ecosystem in order to promote ecosystem cohesion and safety.

## Rewards

The rewards for participating in our bug bounty program will be based on the severity and impact of the vulnerability discovered. We will evaluate each submission on a case-by-case basis, and the rewards will be at Obol’s sole discretion.

### Low: up to $500

A Low-level vulnerability is one that has a limited impact and can be easily fixed. Unlikely to have a meaningful impact on availability, integrity, and/or loss of funds.

- Low impact, medium likelihood
- Medium impact, low likelihood

Examples:

- Attacker can sometimes put a charon node in a state that causes it to drop one out of every one hundred attestations made by a validator
- Attacker can display bad data on a non-interactive part of the launchpad.

### Medium: up to $2,500

A Medium-level vulnerability is one that has a moderate impact and requires a more significant effort to fix. Possible to have an impact on validator availability, integrity, and/or loss of funds.

- High impact, low likelihood
- Medium impact, medium likelihood
- Low impact, high likelihood

Examples:

- Attacker that is a member of a cluster can exfiltrate K1 key material from another member.
- Attacker that is a member of the cluster can denial of service attack enough peers in the cluster to prevent operation of the validator(s)
- Attacker that is a member of the cluster can bias the protocol in a manner to control the majority of block proposal opportunities.
- Attacker can get a DV Launchpad user to inadvertently interact with a smart contract that is not a part of normal operation of the launchpad.

### High: up to $10,000

A High-level vulnerability is one that has a significant impact on the security of the system from a position of low-trust, and requires a significant effort to fix. Likely to have impact on availability, integrity, and/or loss of funds.

- High impact, medium likelihood
- Medium impact, high likelihood

Examples:

- Attacker that is not a member of the cluster can successfully partition the cluster and keep the cluster offline indefinitely.
- Attacker that is not a member of the cluster can exfiltrate charon ENR private keys.
- Attacker that is not a member of the cluster can destroy funds but cannot steal them.

### Critical: up to $100,000

A Critical-level vulnerability is one that has a severe impact on the security of the in-production system from an unauthenicated external attacker, and requires immediate attention to fix. Highly likely to have a material impact on validator private key security, and/or loss of funds.

- High impact, high likelihood

Examples:

- Attacker that is not a member of the cluster can successfully exfiltrate BLS (not K1) private key material from a threshold number of operators in the cluster.
- Attacker that is not a member of the cluster can achieve the production of arbitrary BLS signatures from a threshold number of operators in the cluster.
- Attacker can craft a malicious cluster invite capable of subverting even careful review of all data to steal funds during a deposit.

We may offer rewards in the form of cash, merchandise, or recognition. We will only award one reward per vulnerability discovered, and we reserve the right to deny a reward if we determine that the researcher has violated the terms and conditions of this policy.

## Submission process

Please email security@obol.tech

Your report should include the following information:

- Description of the vulnerability and its potential impact
- Steps to reproduce the vulnerability
- Proof of concept code, screenshots, or other supporting documentation
- Your name, email address, and any contact information you would like to provide.
  Reports that do not include sufficient detail will not be eligible for rewards.

## Disclosure Policy

Obol Labs will disclose the details of the vulnerability and the researcher’s identity (with their consent) only after we have remediated the vulnerability and issued a fix. Researchers must keep the details of the vulnerability confidential until Obol Labs has acknowledged and remediated the issue.

## Legal Compliance

All participants in the bug bounty program must comply with all applicable laws, regulations, and policy terms and conditions. Obol will not be held liable for any unlawful or unauthorised activities performed by participants in the bug bounty program.

We will not take any legal action against security researchers who discover and report security vulnerabilities in accordance with this bug bounty policy. We do, however, reserve the right to take legal action against anyone who violates the terms and conditions of this policy.

## Non-Disclosure Agreement

All participants in the bug bounty program will be required to sign a non-disclosure agreement (NDA) before they are given access to closed source software and services for testing purposes.
