---
description: "Obol's bug bounty program, scope, and reward structure for security researchers reporting vulnerabilities in our distributed validator software."
sidebar_label: "Obol Bug Bounty Program"
slug: /advanced-and-troubleshooting/security/bug-bounty
---

# Obol Bug Bounty Program

## Overview

At Obol, we prioritize the security of our distributed validator software and the staking capital that depends on it. Our Bug Bounty Program rewards security researchers who find and responsibly disclose vulnerabilities in the software, smart contracts, and supporting services that operators and delegators rely on.

Because an Obol Distributed Validator (DV) is an independent BFT cluster — not a shared network with global liveness or a pooled balance sheet — our threat model and reward structure are different from those of an L1 chain or a defi protocol. We reward findings that map to the way DVs actually fail.

## Participant Eligibility

Participants must:

- Not reside in countries where participation in such programs is prohibited.
- Be at least 14 years of age and possess the legal capacity to participate.
- Have received consent from your employer, if applicable.
- Not have been employed or contracted by Obol Labs, nor be an immediate family member of an employee, within the last 12 months.

## Scope of the Program

Eligible submissions must concern software and services developed by Obol, specifically:

- [Charon](https://github.com/ObolNetwork/charon), the DV middleware client.
- The [Obol DV Launchpad](https://launchpad.obol.org) and the [Obol public API](https://api.obol.tech).
- The **Obol Validator Manager (OVM)** smart contracts — the current-generation withdrawal address contract that manages validator deposits, EIP-7002 triggered exits, EIP-7251 consolidations, and reward/principal splitting. Deployed on mainnet (`0x2c26B5A373294CaccBd3DE817D9B7C6aea7De584`), Sepolia, and Hoodi.
- The **OBOL token** contract (`0x0B010000b7624eb9B3DfBC279673C76E9D29D5F7`) governing the Obol Collective.
- Legacy **Obol Splits** contracts (OWR — Optimistic Withdrawal Recipient — and 0xSplits-based contracts deployed before the OVM). These remain in scope for live deployments but findings against deprecated code paths only are lower priority.
- Obol-operated public relay infrastructure.
- Charon's cluster lifecycle commands, including the DKG ceremony.

Submissions related to the following are considered out of scope:

- Social engineering of Obol staff or community members.
- Rate limiting and similar non-security UX issues.
- Physical security breaches.
- Non-security UX/UI issues.
- Third-party application or library vulnerabilities (please report upstream).
- The [obol.org](https://obol.org) static website and Obol's internal corporate infrastructure.
- The operational security of node operators running Obol software (operators are responsible for their own host security).
- The Obol Stack and its in-cluster components (Hermes, OpenClaw, x402 facilitator, Cloudflared, eRPC, etc.). The Obol Stack is pre-release software and is currently out of scope. It will be added to the program when it reaches a stable, publicly supported release.
- Experimental `charon alpha` commands (`charon alpha edit` and related subcommands). These are pre-release features and are not yet in scope for this bounty.

## How we prioritize

The Obol threat model treats **external attackers harming live DV clusters** as the highest priority — these are the failures that destroy delegator capital or take validators offline at scale. A cluster member acting irrationally against the cluster they themselves operate is a real but lower-priority risk: the cluster's BFT thresholds and slashing economics already make this self-defeating, and we deliberately don't over-reward findings that depend on a member being maliciously incompetent against their own stake.

In practice, this means:

- A vulnerability that lets an **outside attacker** slash, partition, or destabilize a DV is rewarded above a comparable-impact finding that requires a **threshold of operators to collude** against themselves.
- Direct vulnerabilities in Obol smart contracts (where capital lives) are rewarded above operational vulnerabilities of equivalent impact severity.
- Findings that survive careful review by a security-aware operator (e.g. a malicious cluster invite that passes inspection) are rewarded above findings that require the victim to opt into known-unsafe behavior (e.g. running with `--no-verify`).

## Program Rules

- Submitted bugs must not have been previously disclosed publicly.
- Only first reports of vulnerabilities will be considered for rewards; previously reported or known vulnerabilities are ineligible.
- The severity of the vulnerability, as assessed by our team, determines the reward amount.
- Submissions must include a reproducible proof of concept.
- The Obol security team reserves the right to determine the eligibility and reward for each submission.
- Program terms may be updated at Obol's discretion.
- Valid bugs may be disclosed to partner protocols within the Obol ecosystem to enhance overall security.

## Rewards Structure

Rewards are issued based on the severity and impact of the disclosed vulnerability, determined at the discretion of Obol Labs. Reward ceilings are guidelines; the exact payout reflects exploitability, blast radius, and the quality of the report.

### Critical Vulnerabilities: Up to $50,000

A Critical finding gives an **external attacker** a path to large-scale loss of delegator funds or systemic harm across many clusters. High impact, high likelihood.

Eligible impacts:

- An external attacker (not a cluster member) can cause a Charon cluster to produce a slashable signature, or otherwise trigger a slashing event, without colluding with cluster operators.
- An external attacker can exfiltrate enough BLS validator key shares from a threshold of operators in a cluster to reconstruct a validator's full private key.
- A vulnerability in the OVM allows an attacker to bypass role-based access controls (WITHDRAWAL_ROLE, CONSOLIDATION_ROLE, DEPOSIT_ROLE) to trigger unauthorized EIP-7002 voluntary exits or EIP-7251 consolidations, or to redirect principal or rewards to an address they control.
- A vulnerability in Obol Splits, the OVM, or legacy OWR contracts allows direct theft of delegator or operator funds at rest or in flight.
- A vulnerability in the DV Launchpad or its dependencies allows an attacker to craft a cluster invite that passes careful operator review while diverting deposits or substituting withdrawal credentials.
- Remote code execution in Charon, exploitable from a peer or relay connection, without prior compromise of the host.
- A vulnerability in the OBOL token contract that allows unauthorized minting, burning, or transfer of tokens at scale.

### High Vulnerabilities: Up to $5,000

A High finding lets an **external attacker** take down a cluster's liveness, exfiltrate operator key material, or compromise infrastructure that many clusters share. High impact, medium likelihood; or medium impact, high likelihood.

Eligible impacts:

- An external attacker can partition a cluster and keep it offline indefinitely, even after operators take reasonable recovery steps.
- An external attacker can exfiltrate Charon ENR (SECP256K1 identity) private keys from a node without compromising the host operating system.
- An external attacker can destroy validator funds (e.g. force exit-with-loss) but cannot steal them.
- An external attacker compromises Obol-operated public relay infrastructure in a way that reveals cluster topologies, disrupts peer discovery across many clusters, or facilitates partitioning attacks against the clusters relying on it.
- An attacker exfiltrates pre-signed exit messages held by the Obol API and uses them to forcibly exit validators against the delegator's wishes (see [Centralization Risks](risks.md)).
- An attacker subverts the DKG ceremony such that the post-ceremony cluster is no longer controlled by its legitimate operators.
- Retrieval of sensitive operational secrets from a running Obol-operated service: BLS or ENR keys, database credentials, signing keys for the public API, etc.
- Authenticated, state-modifying actions on the DV Launchpad or the Obol API performed on behalf of another user without their interaction (changing cluster definitions, redirecting withdrawals, manipulating pre-signed exits, etc.).
- A vulnerability in the OVM role assignment (bitwise permission system) that allows escalation to a higher-privileged role without the owner's consent, without enabling immediate fund theft.


### Medium Vulnerabilities: Up to $1,000

A Medium finding requires either an **insider** (a malicious cluster member) or a constrained external position to cause cluster-level damage. These are real, but the BFT and slashing economics of a DV mean the attacker is usually harming themselves alongside their victims. High impact, low likelihood; medium impact, medium likelihood; low impact, high likelihood.

Eligible impacts:

- A cluster member can exfiltrate K1 (identity) or BLS key material from another member of the same cluster.
- A cluster member can DoS enough peers in their own cluster to take the validator offline, beyond what is possible by simply going offline themselves.
- A cluster member can bias the protocol to control a disproportionate share of block proposal opportunities or other duty assignment.
- A DV Launchpad user can be steered into interacting with a smart contract that is not part of the normal launchpad flow.
- A vulnerability in the OVM or legacy Obol Splits contracts prevents normal operation without permanent loss of funds (e.g. temporary freeze, denial of withdrawal or consolidation under specific state).
- Block-stuffing-style or unbounded-gas vulnerabilities in any Obol smart contract.
- Charon cluster lock-file tampering accepted by a victim operator who is *not* running with `--no-verify`.
- An open-redirect or similar phishing aid on Obol-operated domains.
- Manipulation of OBOL token governance (e.g. vote inflation, delegation hijacking) that does not directly steal tokens.

### Low Vulnerabilities: Up to $250

Low-severity findings have minimal impact on the integrity of a DV cluster or the security of Obol's smart contracts. Low impact, medium likelihood; medium impact, low likelihood.

Eligible impacts:

- An attacker can occasionally put a Charon node into a state that causes it to drop a small fraction of attestations (e.g. one in a hundred).
- An attacker can display incorrect data on a non-interactive part of the DV Launchpad.
- An Obol smart contract behaves suboptimally but does not lose value or block legitimate operations.
- Temporary lockout from a wallet-connected session on Obol-operated services that does not persist past a normal session refresh.
- Takeover of broken or expired outgoing links from Obol-operated content (e.g. abandoned social handles linked from official channels).
- Minor griefing or local-storage tampering that requires significant social interaction to land and does not modify server-side state.

Rewards may be issued as cash, merchandise, or other forms of recognition, at Obol's discretion. Only one reward will be granted per unique vulnerability.

## Prohibited testing

The following activities are not authorized under this program:

- Any testing on mainnet or public testnet deployed code; all testing must be done on local forks. For network-specific testing, Hoodi is the preferred testnet.
- Any testing involving pricing oracles or third-party smart contracts.
- Phishing or other social engineering attacks against Obol employees, contractors, partners, or community members.
- Any testing against third-party systems, applications, browser extensions, or websites (including SSO providers and advertising networks).
- Denial-of-service attacks executed against Obol-operated infrastructure or the deployed contracts.
- Automated testing of services that generates significant traffic.
- Public disclosure of an unpatched vulnerability under an embargoed bounty.

## Submission process

Before investing significant time in a proof of concept, you may email [security@obol.tech](mailto:security@obol.tech) with a brief, non-detailed description of the affected component and the class of vulnerability (e.g. "potential role escalation in OVM" or "Charon peer message handling"). We will confirm within 48 hours whether the issue is already known or under active remediation. This check does not establish submission priority — it only avoids duplicate effort.

To report a vulnerability, please contact us at [security@obol.tech](mailto:security@obol.tech) with:

- A detailed description of the vulnerability and its potential impact.
- Steps to reproduce the issue.
- Any relevant proof-of-concept code, screenshots, or documentation.
- Your contact information.

Incomplete reports may not be eligible for rewards.

## Disclosure and Confidentiality

Obol Labs will disclose vulnerabilities and the identity of the researcher (with consent) after remediation. Researchers are required to maintain confidentiality until official disclosure by Obol Labs.

## Legal and Ethical Compliance

Participants must adhere to all relevant laws and regulations. Obol Labs will not pursue legal action against researchers reporting vulnerabilities in good faith, but reserves the right to respond to violations of this policy.

## Non-Disclosure Agreement (NDA)

Participants may be required to sign an NDA for access to certain proprietary information during their research.
