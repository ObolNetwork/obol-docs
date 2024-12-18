---
description: Bug Bounty Policy
sidebar_position: 3
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
- Charon DVT Middleware
- DV Launchpad
- Obol’s Public API
- Obol’s Smart Contracts and the contracts they depend on.
- Obol’s Public Relay

Additionally, all vulnerabilities that require or are related to the following are out of scope:
- Social engineering
- Rate Limiting (Non-critical issues)
- Physical security
- Non-security-impacting UX issues
- Vulnerabilities or weaknesses in third party applications that integrate with Obol
- The Obol website or the Obol infrastructure in general is NOT part of this bug bounty program.

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

### Medium: up to $1,000
A Medium-level vulnerability is one that has a moderate impact and requires a more significant effort to fix. Possible to have an impact on availability, integrity, and/or loss of funds.
- High impact, low likelihood
- Medium impact, medium likelihood
- Low impact, high likelihood
Examples:
- Attacker can successfully conduct eclipse attacks on the cluster nodes with peer-ids with 4 leading zero bytes.

### High: up to $2,500
A High-level vulnerability is one that has a significant impact on the security of the system and requires a significant effort to fix. Likely to have impact on availability, integrity, and/or loss of funds.
- High impact, medium likelihood
- Medium impact, high likelihood
Examples:
- Attacker can successfully partition the cluster and exceeding its threshold.

### Critical: up to $5,000
A Critical-level vulnerability is one that has a severe impact on the security of the system and requires immediate attention to fix. Highly likely to have a material impact on availability, integrity, and/or loss of funds.
- High impact, high likelihood
Examples:
- Attacker can successfully conduct remote code execution in charon client.

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
All participants in the bug bounty program will be required to sign a non-disclosure agreement (NDA) before they are given access to our software and services for testing purposes.
