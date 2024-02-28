---
sidebar_position: 2
description: Bug Bounty Policy
---

# Obol Bug Bounty Program

## Overview

At Obol Labs, we prioritize the security of our distributed validator software and related services. Our Bug Bounty Program is designed to encourage and reward security researchers for identifying and reporting potential vulnerabilities. This initiative supports our commitment to the security and integrity of our products.

## Participant Eligibility

Participants must meet the following criteria to be eligible for the Bug Bounty Program:

- Not reside in countries where participation in such programs is prohibited.
- Be at least 14 years of age and possess the legal capacity to participate.
- Have received consent from your employer, if applicable.
- Not have been employed or contracted by Obol Labs, nor be an immediate family member of an employee, within the last 12 months.

## Scope of the Program

Eligible submissions must involve software and services developed by Obol, specifically under the domains of:

- Charon
- Obol DV Launchpad
- Obol Splits

Submissions related to the following are considered out of scope:

- Social engineering
- Rate Limiting (Non-critical issues)
- Physical security breaches
- Non-security related UX/UI issues
- Third-party application vulnerabilities
- Obol's website or cloud infrastructure

## Program Rules

- Submitted bugs must not have been previously disclosed publicly.
- Only first reports of vulnerabilities will be considered for rewards; previously reported or known vulnerabilities are ineligible.
- The severity of the vulnerability, as assessed by our team, will determine the reward amount. See the "Rewards" section for details.
- Submissions must include a reproducible proof of concept.
- The Obol security team reserves the right to determine the eligibility and reward for each submission.
- Program terms may be updated at Obol's discretion.
- Valid bugs may be disclosed to partner protocols within the Obol ecosystem to enhance overall security.

## Rewards Structure

Rewards are issued based on the severity and impact of the disclosed vulnerability, determined at the discretion of Obol Labs.

### Critical Vulnerabilities: Up to $100,000

For vulnerabilities posing a severe risk to our system's security. requiring immediate attention. Highly likely to have a material impact on availability, integrity, and/or loss of funds.

- High impact, high likelihood
  Examples:
- Attacker can successfully conduct remote code execution in charon client to exfiltrate BLS private key material.

### High Vulnerabilities: Up to $20,000

For significant security risks that impact system integrity or funds and requires a significant effort to fix.

- High impact, medium likelihood
- Medium impact, high likelihood
  Examples:
- Attacker can successfully partition the cluster and keep the cluster offline.

### Medium Vulnerabilities: Up to $5,000

For vulnerabilities with a moderate impact, affecting system availability or integrity.

- High impact, low likelihood
- Medium impact, medium likelihood
- Low impact, high likelihood
  Examples:
- Attacker can successfully conduct eclipse attacks on the cluster nodes with peer-ids with 4 leading zero bytes.

### Low Vulnerabilities: Up to $500

For vulnerabilities with minimal impact, unlikely to significantly affect system operations.

- Low impact, medium likelihood
- Medium impact, low likelihood
  Examples:
- Attacker can sometimes put a charon node in a state that causes it to drop one out of every one hundred attestations made by a validator

Rewards may be issued as cash, merchandise, or other forms of recognition, at Obol's discretion. Only one reward will be granted per unique vulnerability.

## Submission process

To report a vulnerability, please contact us at security@obol.tech with:

- A detailed description of the vulnerability and its potential impact.
- Steps to reproduce the issue.
- Any relevant proof of concept code, screenshots, or documentation.
- Your contact information.

Incomplete reports may not be eligible for rewards.

## Disclosure and Confidentiality

Obol Labs will disclose vulnerabilities and the identity of the researcher (with consent) after remediation. Researchers are required to maintain confidentiality until official disclosure by Obol Labs.

## Legal and Ethical Compliance

Participants must adhere to all relevant laws and regulations. Obol Labs will not pursue legal action against researchers reporting vulnerabilities in good faith, but reserves the right to respond to violations of this policy.

## Non-Disclosure Agreement (NDA)

Participants may be required to sign an NDA for access to certain proprietary information during their research.
