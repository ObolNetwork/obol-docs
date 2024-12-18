---
sidebar_position: 3
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

- Charon the DV Middleware Client
- Obol DV Launchpad and Public API
- Obol Splits Contracts
- Obol Labs hosted Public Relay Infrastructure

Submissions related to the following are considered out of scope:

- Social engineering
- Rate Limiting (Non-critical issues)
- Physical security breaches
- Non-security related UX/UI issues
- Third-party application vulnerabilities
- The [Obol](https://obol.org) static website or the Obol infrastructure
- The operational security of node operators running or using Obol software

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

A Critical-level vulnerability is one that has a severe impact on the security of the in-production system from an unauthenticated external attacker, and requires immediate attention to fix. Highly likely to have a material impact on validator private key security, and/or loss of funds.

- High impact, high likelihood

Impacts:

- Attacker that is not a member of the cluster can successfully exfiltrate BLS (not K1) private key material from a threshold number of operators in the cluster.
- Attacker that is not a member of the cluster can achieve the production of arbitrary BLS signatures from a threshold number of operators in the cluster.
- Attacker can craft a malicious cluster invite capable of subverting even careful review of all data to steal funds during a deposit.
- Direct theft of any user funds, whether at-rest or in-motion, other than unclaimed yield
- Direct loss of funds
- Permanent freezing of funds (fix requires hard fork)
- Network not being able to confirm new transactions (Total network shutdown)
- Protocol insolvency

### High Vulnerabilities: Up to $10,000

For significant security risks that impact the system from a position of low-trust and require a significant effort to fix.

- High impact, medium likelihood
- Medium impact, high likelihood

Impacts:

- Attacker that is not a member of the cluster can successfully partition the cluster and keep the cluster offline indefinitely.
- Attacker that is not a member of the cluster can exfiltrate Charon ENR private keys.
- Attacker that is not a member of the cluster can destroy funds but cannot steal them.
- Unintended chain split (Network partition)
- Temporary freezing of network transactions by delaying one block by 500% or more of the average block time of the preceding 24 hours beyond standard difficulty adjustments
- RPC API crash affecting projects with greater than or equal to 25% of the market capitalization on top of the respective layer
- Theft of unclaimed yield
- Theft of unclaimed royalties
- Permanent freezing of unclaimed yield
- Permanent freezing of unclaimed royalties
- Temporary freezing of funds
- Retrieve sensitive data/files from a running server:
  - blockchain keys
  - database passwords
  - (this does not include non-sensitive environment variables, open source code, or usernames)
- Taking state-modifying authenticated actions (with or without blockchain state interaction) on behalf of other users without any interaction by that user, such as:
  - Changing cluster information
  - Withdrawals
  - Making trades

### Medium Vulnerabilities: Up to $2,500

For vulnerabilities with a moderate impact, affecting system availability or integrity.

- High impact, low likelihood
- Medium impact, medium likelihood
- Low impact, high likelihood

Impacts:

- Attacker that is a member of a cluster can exfiltrate K1 key material from another member.
- Attacker that is a member of the cluster can denial of service attack enough peers in the cluster to prevent operation of the validator(s)
- Attacker that is a member of the cluster can bias the protocol in a manner to control the majority of block proposal opportunities.
- Attacker can get a DV Launchpad user to inadvertently interact with a smart contract that is not a part of normal operation of the launchpad.
- Increasing network processing node resource consumption by at least 30% without brute force actions, compared to the preceding 24 hours
- Shutdown of greater than or equal to 30% of network processing nodes without brute force actions, but does not shut down the network
- Charon cluster identity private key theft
- Rogue node operator to penetrate and compromise other nodes to disturb the cluster’s lifecycle
- Charon public relay node is compromised and leads to cluster topologies getting discovered and disrupted
- Smart contract unable to operate due to lack of token funds
- Block stuffing
- Griefing (e.g. no profit motive for an attacker, but damage to the users or the protocol)
- Theft of gas
- Unbounded gas consumption
- Redirecting users to malicious websites (Open Redirect)

### Low Vulnerabilities: Up to $500

For vulnerabilities with minimal impact, unlikely to significantly affect system operations.

- Low impact, medium likelihood
- Medium impact, low likelihood

Impacts:

- Attacker can sometimes put a Charon node in a state that causes it to drop one out of every one hundred attestations made by a validator
- Attacker can display bad data on a non-interactive part of the launchpad.
- Contract fails to deliver promised returns, but doesn't lose value
- Shutdown of greater than 10% or equal to but less than 30% of network processing nodes without brute force actions, but does not shut down the network
- Changing details of other users (including modifying browser local storage) without already-connected wallet interaction and with significant user interaction such as:
  - Iframing leading to modifying the backend/browser state (must demonstrate impact with PoC)
- Taking over broken or expired outgoing links such as:
  - Social media handles, etc.
- Temporarily disabling user to access target site, such as:
  - Locking up the victim from login
  - Cookie bombing, etc.

Rewards may be issued as cash, merchandise, or other forms of recognition, at Obol's discretion. Only one reward will be granted per unique vulnerability.

## The following activities are prohibited by this bug bounty program

- Any testing on mainnet or public testnet deployed code; all testing should be done on local-forks of either public testnet or mainnet
- Any testing with pricing oracles or third-party smart contracts
- Attempting phishing or other social engineering attacks against our employees and/or customers
- Any testing with third-party systems and applications (e.g. browser extensions) as well as websites (e.g. SSO providers, advertising networks)
- Any denial of service attacks that are executed against project assets
- Automated testing of services that generate significant amounts of traffic
- Public disclosure of an unpatched vulnerability in an embargoed bounty

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
