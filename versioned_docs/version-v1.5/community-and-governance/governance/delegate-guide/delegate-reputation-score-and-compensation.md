---
sidebar_label: "Delegate Reputation Score & Compensation"
slug: /community-and-governance/governance/delegate-guide/delegate-reputation-score-and-compensation
---

# Delegate Reputation Score & Compensation

As the Obol Collective moves toward more mature governance, we are introducing a new system to help improve delegate accountability and guide token holder decisions: the **Delegate Reputation Score (DRS)**.

This mechanism is part of a broader initiative to evolve token governance beyond simple vote counts but toward systems that reward quality participation and reinforce long-term alignment.

The Obol Collective is among the first DAOs to integrate this model, developed in collaboration with [Tally](https://www.tally.xyz/) and [Curia](https://obol.curiahub.xyz/delegate), helping to pioneer a new standard for **reputation-backed delegate governance**.

## What is the Delegate Reputation Score (DRS)?

The Delegate Reputation Score is a reputation system. It gives each delegate a score from 0 to 100 based on their behavior across three core dimensions:

* **Voting participation**
* **Forum rationale submissions**
* **Forum engagement (discussion and replies)**

These inputs are tracked over a rolling window of proposals, with scoring updates happening after [every **governance cycle** (every 21 days)](../token-house.md#token-house-governance-proposal-process). The current scoring logic can be found in full detail on [Curia’s documentation](https://www.notion.so/DRS-v1-Implementation-Spec-Public-20f5e0b4886180219fcbfb8a2531264f), which also serves as the canonical source of truth.

:::tip
**When does my DRS update?**\
Scores are updated every 21-day governance cycle, but with a 6-day delay after the submission window closes.\
This ensures all proposals, including those submitted just before the deadline, have completed their full voting period before scores are recalculated. This buffer guarantees consistency and fairness across the cycle.
:::

Delegates can view their scores, and token holders can browse and filter delegates based on their reputation and activity levels directly on [Tally](https://www.tally.xyz/gov/obol/delegates).

### Why it matters

The DRS is designed to:

* Help token holders delegate more effectively, with clearer visibility into how delegates are behaving
* Increase accountability by making governance activity measurable and comparable
* Reinforce quality and trust within the delegate set

In practice, this means token holders are strongly encouraged, through the UI and incentive systems, to **delegate to high-DRS delegates**, while delegates are incentivized to maintain an active and transparent presence in the Collective’s governance.

_**This is not just a dashboard feature. DRS has real consequences for rewards and visibility.**_

### Delegate Statuses by DRS

Delegates can fall into different categories based on their Delegate Reputation Score (DRS), which is recalculated after every governance cycle. These statuses help token holders understand delegate behavior and make informed delegation decisions:

* <mark style="color:green;">Active</mark>: Delegates with a DRS ≥ 65 are considered _active. &#x54;_&#x68;is is the ideal status. Active delegates are eligible for compensation and prominently displayed in the UI to encourage token holders to delegate to them.
  * <mark style="color:green;">Active (New)</mark>: A delegate with a DRS ≥ 65 but who has participated in fewer than 5 proposals. While still considered active, this tag highlights that the delegate is relatively new, and their track record is limited.
* <mark style="color:yellow;">Inactive</mark>: Delegates with a DRS < 65. These delegates have either skipped votes or failed to post rationales, indicating lower governance engagement.
  * <mark style="color:yellow;">Inactive (New)</mark>: New delegates (fewer than 5 proposals) whose early participation has not met the DRS threshold. This tag signals limited history and insufficient engagement so far.
* <mark style="color:red;">Ghost</mark>: Delegates who have received voting power but have never participated in any governance vote. Once they vote on a proposal, they’ll transition into an active or inactive status depending on their initial DRS, and will also carry the “new delegate” tag until they surpass 5 evaluated proposals.

### Bootstrapping New Delegates

To avoid penalizing new contributors, DRS includes a bootstrapping mechanism. A delegate’s first vote will trigger their scoring process, and their initial DRS will be calculated based on that single proposal. Over time, the DRS evolves into a moving average across the last 5 proposals they were eligible to vote on. This ensures:

* New delegates who actively participate from the start can achieve a high DRS immediately
* Inconsistent delegates see their score adjust quickly
* A consistent track record is required to maintain an active status

Additionally, new delegates will be visibly tagged as such in the UI, signaling that their DRS is based on limited history. This helps token holders assess delegation options with full context and encourages early but consistent engagement.

This design balances the need to reward early participation while preventing score manipulation. Active delegates (even if new) become eligible for compensation as soon as they meet the DRS threshold.

## Delegate Compensation

_Delegate Compensation is not live yet. It is scheduled to launch in the second part of August 2025._

We are also introducing **delegate compensations**, funded by the Delegate Rewards Pool. Compensation is **gated by DRS**: only delegates with a score of **65 or above** are considered “active” and eligible.

Once classified as active, rewards are distributed using a **square root model**, based on delegated voting power. This model was selected to strike a balance between influence and fairness:

* It reduces reward concentration among the largest delegates
* It supports smaller, high-performing delegates
* It helps foster a more pluralistic and sustainable governance ecosystem

This approach is experimental and will be closely monitored. Over time, we may revisit weighting or distribution methods based on observed outcomes.

### **Why Delegate Compensation?**

At Obol, we believe that **no one should work for free. B**ut we also recognize that **not all participation is equally meaningful**. Delegate compensation isn’t about paying people to hold tokens or rubber-stamp votes. It’s about rewarding those who consistently engage with care, post structured rationales, and help the Collective navigate complex governance questions with thoughtfulness and integrity.

Compensation is now earned through **visible, active contribution —** whether through dissent, alignment, or creative proposals — as long as it’s expressed in a way that moves the Collective forward. Good-faith disagreement and diversity of thought are part of what makes a governance system resilient. That’s the work we want to support.

## A collaborative standard

The DRS is a shared initiative between Obol, Tally (UI and standardization), and Curia (calculation and onchain oracle). While the Obol Collective is among the first to adopt this system, the hope is that it will be used by other DAOs seeking to upgrade their delegate models.

We are proud to help drive this standard forward and will continue sharing learnings as we refine the system in practice.

## Resources

* [Tally Delegate Portal](https://www.tally.xyz/gov/obol/delegates) – see live DRS scores, search delegates, and explore participation history
* [Curia Dashboard](https://obol.curiahub.xyz/delegate) – DRS calculation details and complementary metrics
* [Curia's Source of truth for scoring logic](https://www.notion.so/DRS-v1-Implementation-Spec-Public-20f5e0b4886180219fcbfb8a2531264f) – Broken down calculation of DRS
* [OIP-4: Delegate Compensation & DRS Scoring](https://community.obol.org/t/oip-4-delegate-compensation-and-delegate-reputation-score-integration-for-stobol/522) – original governance proposal
