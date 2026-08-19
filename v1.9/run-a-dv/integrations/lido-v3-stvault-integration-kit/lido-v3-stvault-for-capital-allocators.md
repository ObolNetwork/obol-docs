# For Capital Allocators

***

## Quick Overview

**Target audience:** ETH capital allocators – retail, treasuries, funds, ETF/ETP issuers, institutions.

:::info
Obol's [Cluster-as-a-Service](https://hubs.ly/Q03Y2Srl0) offering can get you started quickly: we act as a trusted advisor, connect you with top node operators, and help guide decisions around validator sidecars and MEV strategies.
:::

For a capital allocator, a **Lido stVault** provides a way to create a **dedicated, siloed ETH staking vault**:

* you choose the **node operator set** (e.g. by geography, infrastructure used, reputation),
* you agree on **additional reward arrangements** (e.g. [ETH gas](https://www.ethgas.com/), [Primev](https://www.ethgas.com/), other DV compatible incentives),
* and you retain the option to tap into **stETH liquidity** at the vault level.

That liquidity can then be used by a curator or strategy provider for things like **boosted APR via looping**, **restaking**, or other structured strategies – while the underlying validators are run by an **Obol Distributed Validator (DV) cluster** for operational resilience.

***

## Definitions

**stVaults** are Lido's staking "building blocks": isolated vaults that hold ETH, run validators, and (optionally) mint stETH under a configurable risk framework. Each vault has its own operator set and parameters, so risk and behavior are compartmentalized rather than shared across the entire protocol.

On top of this, Obol provides **Distributed Validator Technology (DVT)**: validator keys and duties are spread across multiple independent operators/nodes rather than being concentrated on a single computer.

### stVault terminology

*   **stVault**

    A Lido V3 vault that:

    * accepts ETH,
    * funds validators on the beacon chain, and
    * can optionally mint stETH under a specific tier configuration (Reserve Ratio + minting cap) for DeFi / strategy use.
*   **Reserve Ratio (RR)**

    The percentage of vault value that must remain reserved as collateral when minting stETH.

    * No stETH can be minted for this reserved portion.
    * Higher RR ⇒ more conservative, less minting capacity.
    * Lower RR ⇒ more capital efficient, more minting capacity (within caps).
*   **Tier**

    A risk configuration assigned to a Node Operator. A tier defines:

    * a **Reserve Ratio (RR)**, and
    * a **maximum stETH minting cap** for vaults attached to that tier.
*   **Default tier**

    The tier applied to vaults created by **non-identified** node operators:

    * fixed **RR = 50%**,
    * conservative minting behavior, especially in early rollout phases.
*   **DVT tiers**

    Tiers designed for vaults operated by **multi-operator DV clusters** (e.g. Obol). The current default DV vault schedule proposed in Lido's risk framework is:

    * **Tier 1** – up to 50,000 ETH used for minting capacity, **RR = 2%** → max \~49,000 stETH
    * **Tier 2** – up to 50,000 ETH, **RR = 2%** → max \~49,000 stETH
    * **Tier 3** – up to 200,000 ETH, **RR = 2%** → max \~196,000 stETH
    * **Tier 4** – up to 300,000 ETH, **RR = 3%** → max \~291,000 stETH
    * **Tier 5** – up to 400,000 ETH, **RR = 4%** → max \~384,000 stETH

    In total, these DVT tiers allow up to **969,000 stETH** to be minted on **1,000,000 ETH** of "mintable" value, reflecting higher capital efficiency than the Default 50% RR, while still enforcing explicit per-tier caps.
*   **Total Value**

    The sum of:

    * ETH staked in validators (including rewards), and
    * ETH held in the vault's balance.
*   **stETH Liability / Minting Capacity / Utilization / Health Factor**

    Core metrics Lido uses to track vault safety and usage:

    * **stETH liability** – how much stETH the vault has minted,
    * **minting capacity** – how much more could be minted given RR and caps,
    * **utilization** – what fraction of capacity is in use,
    * **health factor** – how safely the vault is collateralized.

### Obol terminology

*   **Distributed Validator (DV)**

    A validator whose signing key is split across multiple operator nodes. Duties are executed collaboratively through DV middlewares (for example, Obol's Charon or Nethermind's Pluto), so no single node holds the full key or can unilaterally control the validator.
*   **DVT (Distributed Validator Technology)**

    The underlying cryptographic and networking stack that makes DVs possible: threshold BLS signatures, distributed key generation, signature aggregation, peer to peer communication, and consensus components.
*   **DV cluster**

    A group of independent node operators jointly running one or more DVs.

    In the Lido stVault context, DVT categories typically assume:

    * **4 or more independent operators**, and
    * validator keys generated via a DKG ceremony.
*   **DKG (Distributed Key Generation)**

    A protocol that generates validator private keys collaboratively such that:

    * no single operator ever knows the full validator private key, and
    * key shares can be used jointly to produce valid signatures.
*   **Curator / Strategy provider**

    An entity responsible for the _economic_ behavior of the vault:

    * deciding whether the vault is staking only, or using minted liquid staked tokens to generate further yield.
    * designing and managing these further strategies (e.g., looping, hedging price risk, or other structured approaches).

    Obol can help connect depositors with suitable curators where an end-to-end solution is desired.

***

## Comparison: Lido Core vs non-DV Vault vs Vault on Obol DVs

| Dimension                            | Staking via Lido Core (no vault)                                                                                                                                                                                            | Staking with a Vault (no DV)                                                                                                                                                                                                                                                 | Staking with an Obol DV and a Vault                                                                                                                                                                                                |
| ------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **What it is**                       | Stake directly through Lido Core; ETH is pooled and allocated across Lido's curated operator set.                                                                                                                           | ETH is deposited into a **dedicated stVault** with a chosen single node operator; vault can optionally mint stETH under a tier (RR + cap).                                                                                                                                   | ETH is deposited into a **dedicated stVault** whose validators are run by a **multi-operator Obol DV cluster**; vault can target DVT-specific tiers over time.                                                                     |
| **Risk isolation & scope**           | Risk is **global** at the protocol level; underperformance or slashing impacts the broader Lido Core pool.                                                                                                                  | Each stVault is a **siloed risk container**; failures or misconfigurations are contained to that vault, not the global pool. But failure risk is higher due to lack of diversity of operators and clients.                                                                   | Same per-vault isolation as a non-DV vault, **plus** risk is mitigated due to multiple operators inside the DV cluster sharing the staking duties.                                                                                 |
| **Operator model**                   | Operators are selected by Lido and managed via governance; you do **not** choose specific operators for your stake.                                                                                                         | You select a **specific operator** (or operator entity) per vault and rely on them for security and resilience. But even the biggest operators can be [subject to attacks](https://www.theblock.co/post/370141/kiln-exits-ethereum-validators) despite their best practices. | You select or approve a **set of independent operators** forming a DV cluster. No one holds the entire private key, protecting your stake even when an operator is compromised.                                                    |
| **Operational resilience**           | Resilience comes from Lido's **diversified operator set** at protocol scale, but each validator is still run by a single operator in the majority of cases.                                                                 | Validator duties are typically run on a **single operator's stack**. A misconfig, hardware failure, or outage can significantly impact that vault's uptime and rewards.                                                                                                      | Duties are distributed across a **DV cluster** (multiple operators/machines, often across geographies). The system is not down with one node/operator going offline.                                                               |
| **Tiers & Reserve Ratio (RR)**       | You don't see or control tiers directly; you simply receive stETH and its yield.                                                                                                                                            | Vault uses a **tier** (RR + cap). Non-identified operator vaults default to **50% RR** (Default tier) with conservative minting behavior.                                                                                                                                    | Vault can qualify for **DVT tiers**: RR as low as **2–4%** with explicit per-tier minting caps (e.g. 5 tiers totalling 1,000,000 ETH "mintable" with 969,000 max stETH). It is 10+ times better than non-identified, non-DV vaults |
| **Access to DVT tiers**              | No direct access: there's no per-vault DVT tier concept since you're staking into the global Lido Core pool.                                                                                                                | Not DVT by design, so **no DVT tier** access; can only move from Default 50% RR to other non-DVT identified tiers (if/when operator qualifies).                                                                                                                              | DV cluster can be **identified** via Lido's Identified Node Operator process and attached to **DVT tiers**, providing a path from Default 50% RR to lower-RR, higher-efficiency tiers.                                             |
| **Capital efficiency & strategies**  | stETH/wstETH is liquid and can be used in DeFi, but there is no per-vault RR control; strategies are entirely external to Lido Core.                                                                                        | Vault can mint stETH subject to its RR and caps; with **50% RR**, leverage for looping/restaking is limited, so APR uplift over baseline staking is modest.                                                                                                                  | Low-RR DVT tiers enable **much higher minting capacity** for the same TVL, making looping/restaking strategies more capital efficient (e.g. meaningful APR uplift vs Default RR 50%).                                              |
| **Strategy surface (looping, etc.)** | Strategy design is off-protocol; you use stETH in external DeFi venues.                                                                                                                                                     | Strategies can be layered at the vault level (via a curator), but constrained by higher RR if the operator isn't DVT-qualified.                                                                                                                                              | Vault becomes a **strategy-friendly substrate**: DVT tiers with low RR + health metrics + multi-op resilience make it a natural base for looping, restaking, and structured products.                                              |
| **Governance & customization**       | Governance is at the Lido protocol level; you cannot customize per-pool economics or operator sets for your specific capital.                                                                                               | You can customize **governance, fees, and operator choice** per vault using roles (e.g. fund-specific or ETF-specific vaults with bespoke controls).                                                                                                                         | Same per-vault governance/customization but roles can be given to a multisig-Safe wallet for extra security across operators.                                                                                                      |
| **Typical user / use case**          | Users who want **simple, liquid staking** and are comfortable with protocol-wide diversification instead of bespoke vaults. They would like to actively manage their own strategies and calculate risks associated with it. | Capital allocators wanting **dedicated infrastructure** and configurable fees/parameters, but willing to accept **single-operator slashing and downtime risks**.                                                                                                             | Capital allocators who want **dedicated vaults**, **multi-operator resilience**, a **governed path to DVT tiers (lower RR)**, and the option to run advanced strategies on top.                                                    |

## Understanding impact of RR with an Example

To illustrate how DVT RR if utilized properly can yield boosted APR, we compare three cases:

1. **No looping** (pure staking)
2. **Looping on non-DVT vault** (50% mintable capacity)
3. **Looping on DVT vault** (98% mintable capacity)

It must be noted that following calculations are only for illustrative purpose and numbers will vary with market conditions and risk appetite. To understand the calculations, refer to the appendix.

**High-level outcomes**

| Case                                 | Mintable fraction | Effective leverage (≈ TVL / capital) | Approx. TVL in vault | Approx. total borrow | User APR (net) |
| ------------------------------------ | ----------------- | ------------------------------------ | -------------------- | -------------------- | -------------- |
| No looping                           | 0% (no minting)   | **1.0×**                             | 10,000               | 0                    | **≈ 2.84%**    |
| Looping – non-DVT vault (default RR) | 50%               | **≈ 1.87×**                          | ≈ 18,687             | ≈ 8,687              | **≈ 3.16%**    |
| Looping – DVT vault (DVT tier)       | 98%               | **≈ 7.22×**                          | ≈ 72,188             | ≈ 62,188             | **≈ 5.19%**    |

Where:

* **Effective leverage** ≈ `Total vault value / Initial capital`
* **Total borrow** is the cumulative ETH borrowed from Aave and re-deposited into the vault.

:::warning
Eth Staking APR and Eth borrow cost are variable. Borrowing cost can be higher than the staking APR, resulting in a negative APR from looping. Consult the appendix below for more information.
:::

***

## How Should I Stake? – High-Level Decision Tree

```
Start
 ├─→ Are you a retail user or an allocator who does NOT need a dedicated, isolated vault?
 │      │
 │      ├─→ YES → Use a shared vault such as the Ethereum Client Team Vault
 │      │          (pooled vault, boosted strategies, Primev rewards)
 │      │
 │      └─→ NO  → Continue ↓
 │
 └─→ Are you an ETF issuer, fund, DAO treasury, or institution that
        requires segregation of ETH and custom governance/controls?
        │
        ├─→ YES → Create a dedicated DVT stVault with Obol
        │          (per-vault operators, governance, strategies)
        │
        └─→ NO  → Consider whether a DeFi-wrapper enabled vault already meets
                   your requirements; if in doubt, talk to Obol.

```

***

## Path A: Shared DeFi-Wrapper Vault (Retail / Non-Dedicated)

**Who this is for**

* Retail users, DAOs, funds, or smaller treasuries that:
  * don't need their **own dedicated vault**, and
  * want exposure to **pooled strategies** with boosted rewards.

**What you get**

* A **DeFi-wrapper vault** (launching in January 2026) that:
  * pools ETH from multiple users into an underlying stVault,
  * is **run by Ethereum client teams** and curated by **Nethermind**,
  * implements **boosted strategies** (e.g. looping, restaking),
  * leverages **Primev** for additional rewards where applicable.

**What you do**

* Deposit ETH into the 'Ethereum Client Team Boosted Vault'.
* Receive the wrapper's token / position representing your share.
* Monitor:
  * published strategy,
  * net APR after fees,
  * risk disclosures (health/LTV-style metrics where available).

You **do not** need to handle:

* vault creation,
* node operator selection,
* Obol DV cluster formation.

All of that is handled by the client teams + Nethermind (strategy), with Obol DVT under the hood.

***

## Path B: Dedicated DVT stVault with Obol (ETF / Treasury / Institutional)

If you are an ETF issuer, large fund, DAO treasury, or any allocator that **does not want to pool ETH with other users** or have specific choice of operators, you will create a **dedicated DV stVault**.

Obol will assist along the way: from design → DV cluster → identification → strategy.

### Step 1 — Define the Vault and Its Controls

**Who this is for**

* Capital allocators that require:
  * **segregated ETH**,
  * specific governance (e.g. ETF board / DAO / foundation),
  * audit-friendly parameterization (fees, roles, permissions).

**Decisions you make**

* **Product scope**
  * _Staking-only_, or
  * _Staking + optional liquidity/strategies_ (e.g. looping, restaking, Primev, etc.).
* **RR / tier posture**
  * Start at **Default 50% RR** (non-identified), with a plan to move to DVT tiers later, or
  * Aim directly for DVT tiers via early alignment with Lido's DVT category.
* **Governance model**
  * Multisig composition for:
    * vault owner / governance safe,
    * node operator safe,
    * fee recipient / accounting.
  * Emergency powers (pauses, exits).
  * Fee parameters (node operator fee, any additional service/strategy fees).

**What happens technically**

* A **stVault** is deployed with:
  * roles and permissions matching the above,
  * a designated Node Operator entity (which will represent the DV cluster),
  * initial tier attachment (typically defaults to 50% RR at launch).

**How Obol helps**

* Co-design of roles, safes, and failure modes.
* Helps you move from normal tier to a DVT tier through [Lido's identification process](https://docs.lido.fi/run-on-lido/stvaults/node-operators-identification/).
* Templates / examples for:
  * governance policies,
  * incident playbooks,
  * fee configurations.
* Introduction to **curators / strategy providers** if you want an economic layer on top (beyond pure staking).

:::info
For detailed identification process steps, see the [Node Operator Guide](lido-v3-stvault-for-node-operator.md#51-dv-cluster-identification-process).
:::

***

### Step 2 — Assemble the DV Operators

**Objective**

Build a **DV cluster** that can qualify for Lido's **DVT category** and DVT tiers, while meeting your internal constraints (jurisdiction, infra diversity, etc.).

**Requirements (high-level)**

* **≥ 4 independent operators** (distinct entities).
* Validators run as **DVs**, not single-operator keys.
* Validator keys generated via **DKG**, so no single party ever sees the full key.
* Operational standards:
  * monitoring,
  * upgrade processes,
  * on-call / incident response,
  * SLAs.

**What happens technically**

* Candidate operators are selected and agree on operational expectations.
* An **Obol DV cluster** is created:
  * DKG ceremony for validator keys,
  * cluster configuration (Charon, clients, networking),
  * metrics and alerting wired up.
* The DV cluster's structure and operational procedures are documented as part of the material needed for **Lido's Identified Node Operator process** (to attach DVT tiers later).

**How Obol helps**

* Maintains an ecosystem view of potential operators.
* Proposes **operator sets** that match:
  * geography / jurisdiction preferences,
  * infrastructure diversity (cloud vs bare metal, client diversity, etc.).
* Coordinates:
  * DKG,
  * cluster bootstrapping,
  * best practices on monitoring and upgrades.
* Prepares technical input for the **Identified Node Operator** submission (DVT category).

For detailed steps on the identification process, see the [Node Operator Guide](lido-v3-stvault-for-node-operator.md#51-dv-cluster-identification-process).

***

### Step 3 — Strategies and Additional Rewards (Optional)

This step is optional and only applies if you want more than the **baseline staking yield**.

**Decisions you make**

* Whether to:
  * keep the vault **staking-only**, or
  * allow **minted stETH** to be used in strategies (looping, hedged positions, restaking, Primev, etc.).
* Your comfort with:
  * leverage/looping levels,
  * borrow rate risk,
  * extra smart contract and integration risk.

**What happens technically**

* A **curator / strategy provider** designs a strategy that:
  * respects the vault's RR and DVT tier caps,
  * stays within safe **health / utilization** bounds,
  * integrates any sidecars (e.g. Primev) for extra rewards.
* The strategy is executed at the vault level:
  * minting stETH (within capacity),
  * routing it into external protocols,
  * managing rebalances and unwinds.
* Health metrics (utilization, health factor) are monitored; corrective actions are defined in advance.

**How Obol helps**

* Connects you with **curators** who have relevant experience (looping, restaking, market-neutral, etc.).
* Provides **operational constraints** from the validator side:
  * how often it is safe to rebalance without stressing infra,
  * how exits/redemptions map to validator exit queues.
* Works alongside the curator to ensure the strategy is compatible with:
  * cluster operations,
  * Lido's risk framework,
  * your internal risk policies.

## Appendix

### Parameters Used

| Category          | Parameter                   | Value                       |
| ----------------- | --------------------------- | --------------------------- |
| User              | Initial capital             | **10,000**                  |
| stVault economics | stVault gross yield         | **3.15%**                   |
|                   | Node operator fee           | **2.0%** (of staking yield) |
|                   | Obol fee                    | **0.5%** (of staking yield) |
| Lido fees         | Lido infra fee              | **1.0%** (of staking yield) |
|                   | Lido liquidity fee          | **6.5%** (of staking yield) |
|                   | Total fee share             | **10.0%** of staking yield  |
|                   | **Net base APR to user**    | **≈ 2.84%** (no looping)    |
| stETH reference   | stETH gross yield           | **3.0%** (context only)     |
| Vault tier        | Mintable capacity (DVT)     | **98%** of vault value      |
|                   | Mintable capacity (non-DVT) | **50%** of vault value      |
| Aave / looping    | Loops                       | **10**                      |
|                   | wstETH LTV                  | **93%**                     |
|                   | wstETH supply APY           | **0.04%**                   |
|                   | ETH borrow cost             | **2.5%**                    |

For the example we compress all staking-side fees into a single **net base yield**:

```
stVault gross yield      = 3.15%
Total fee share on yield = 1.0% + 6.5% + 2.0% + 0.5% = 10.0%

Net base APR to user (no looping)
r_base_net = 3.15% × (1 − 10%) ≈ 2.835%

```

So with _no looping_, a 10,000 deposit would earn ≈ 2.84% APR.

***

### How the APR Is Calculated (Conceptual)

For each case with looping we approximate:

```
Profit ≈ TV × r_base_net   +   minted_stETH × r_supply   −   borrowed_ETH × r_borrow
       (staking on TV)          (Aave supply APY)             (borrow cost)

User APR ≈ Profit / Initial capital

```

Using:

* `r_base_net ≈ 2.835%` (net staking APR to user, from the stVault)
* `r_supply = 0.04%` (wstETH supply APY on Aave)
* `r_borrow = 2.5%` (ETH borrow cost)

### Case B – Non-DVT vault (50% mintable)

After 10 loops:

* `TV ≈ 18,687`
* `minted_stETH ≈ 9,341`
* `borrowed_ETH ≈ 8,687`

Approximate annual profit:

* Base staking: `18,687 × 2.835% ≈ 530`
* Aave supply: `9,341 × 0.04% ≈ 3.7`
* Borrow cost: `8,687 × 2.5% ≈ 217`

```
Profit ≈ 530 + 3.7 − 217 ≈ 316
APR_default ≈ 316 / 10,000 ≈ 3.16%

```

### Case C – DVT vault (98% mintable)

After 10 loops:

* `TV ≈ 72,188`
* `minted_stETH ≈ 66,869`
* `borrowed_ETH ≈ 62,188`

Approximate annual profit:

* Base staking: `72,188 × 2.835% ≈ 2,046`
* Aave supply: `66,869 × 0.04% ≈ 26.7`
* Borrow cost: `62,188 × 2.5% ≈ 1,555`

```
Profit ≈ 2,046 + 26.7 − 1,555 ≈ 518.6
APR_DVT ≈ 518.6 / 10,000 ≈ 5.19%

```
