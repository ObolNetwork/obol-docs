---
sidebar_label: "wstOBOL"
slug: /community-and-governance/obol-token/wstobol
---

# wstOBOL

### What is wstOBOL? {#what-is-wstobol}
When you stake OBOL, you receive stOBOL, a non-rebasing, auto-compounding token.

* Your stOBOL balance stays constant in your wallet.
* The value of each stOBOL relative to OBOL increases over time as staking rewards accrue.

Unlike “plain” LSTs like stETH, stOBOL is designed to preserve governance: each staked token maintains its delegation, ensuring governance always reflects the real economic stake.

**wstOBOL (wrapped stOBOL)** is simply a wrapped version of stOBOL. It **carries the same yield and economics**, with rewards accruing via the same exchange-rate mechanism. The difference lies in integration:

* stOBOL can introduce a minor 1-wei transfer variance due to its governance-preserving accounting.
* wstOBOL eliminates this by providing a perfectly static balance, making it fully compatible with DeFi protocols that require strict 1:1 transfers.

Think of wstOBOL as the “DeFi-strict” form of stOBOL. It does not change how rewards work, only how the token behaves when integrated into external systems.

#### Why does wstOBOL exist? {#why-does-wstobol-exist}
Some DeFi protocols cannot easily integrate stOBOL’s governance logic. wstOBOL simplifies adoption. stOBOL continues to safeguard governance rights, while wstOBOL ensures smooth DeFi use.

**Not all integrations require wstOBOL.** Some can use stOBOL directly. We will keep this page updated so users know which path to take for each integration. For example, Pendle requires wstOBOL.

### How does wrapping work? {#how-does-wrapping-work}
* **Wrapping**: you deposit stOBOL and receive the same amount of wstOBOL.
* **Unwrapping**: you return wstOBOL and receive the same amount of stOBOL.

The number of tokens is 1:1. The economic value grows over time because **stOBOL’s exchange rate to OBOL increases**, and wstOBOL simply represents the same claim on that growing value.

### User Flows {#user-flows}
You can manage wrapping and unwrapping directly on our [staking platform](https://vote.obol.org/dao/token/wrap). The process is fully integrated and intuitive: just head to the staking portal and you’ll see the following options:

* **Stake (OBOL → stOBOL)**: Stake OBOL and receive stOBOL, which auto-compounds and preserves delegation.
* **Unstake (stOBOL → OBOL)**: Exit staking and redeem more OBOL back from stOBOL.
* **Wrap (stOBOL → wstOBOL)**: Convert stOBOL into wstOBOL for use in integrations that require strict accounting.
* **Unwrap (wstOBOL → stOBOL)**: Redeem wstOBOL back into stOBOL 1:1.

### Where can I use wstOBOL? {#where-can-i-use-wstobol}
* [**Pendle Finance**](https://app.pendle.finance/trade/pools/0x78954a6a2c2a08455f92e47c4e587feb7467bf37/zap/in?chain=ethereum) (yield trading, fixed/floating yield markets).
* Future integrations in lending, borrowing, and liquidity protocols.

### Risks & Considerations {#risks-and-considerations}
* Wrapping/unwrapping requires **gas fees**.
* UX involves an extra step for users who hold stOBOL and want to access these DeFi apps.

### Learn More {#learn-more}
* [Pendle Documentation](https://pendle.gitbook.io/)
