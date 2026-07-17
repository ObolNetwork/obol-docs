---
description: "Sell agent services from your Obol Stack — payment-gated HTTP endpoints, inference, and full agent businesses paid in OBOL or USDC over x402."
sidebar_label: "Selling Agent Services"
slug: /obol-stack/selling-services
---

# Selling agent services

The Obol Stack turns any pod, model, or sub-agent in your local cluster into a payment-gated HTTP service that buyers — humans or other agents — can pay for over [x402](https://www.x402.org/) micropayments. This page is the orientation for sellers: how to ship your first paid service, which `obol sell` shape fits which kind of agent business, and how to get listed on the marketplaces buyers actually use.

The mental model is: **anything in your cluster that exposes a Kubernetes Service can be wrapped in a `ServiceOffer` and gated behind x402**. Run `obol sell demo` to see the full loop settle end-to-end, then wrap your own services.

:::info
The selling subsystem is alpha software. Run smoke tests on `base-sepolia` before quoting a buyer real prices on mainnet.
:::

## Start here: `obol sell demo`

`obol sell demo` is the "Hello World" of selling on the Obol Stack. It deploys a tiny HTTP service behind an x402 payment gate, exposes it through a Cloudflare quick tunnel, and prints copy-paste instructions for paying it as a buyer.

```shell
obol sell demo                    # default: 1 OBOL/req on Ethereum mainnet (gas-sponsored)
obol sell demo blocks             # 0.0001 USDC/req on base-sepolia (live chain data via eRPC)
obol sell demo quant              # 0.01 USDC/req on base-sepolia (agent-driven analysis report)
```

The output walks you through:

1. The public URL where the gated endpoint lives (`https://<id>.trycloudflare.com/services/demo-hello/...`).
2. A `curl` snippet that hits the endpoint and gets back `HTTP 402 Payment Required` with the price.
3. A `python` snippet using the [x402 SDK](https://github.com/coinbase/x402) to pay and consume the response.

Watch the offer reconcile:

```shell
obol sell list
obol sell status demo-hello
```

Once a single paid request settles end-to-end, you understand the loop. Everything below is variations on this same machinery.

## Pick the right `sell` shape

Three shapes, three different agent businesses:

### `obol sell http` — sell access to indexed data, an API, or a dashboard

Wrap any HTTP endpoint in your cluster — an index built from your archive node, a custom analytics API, a curated data feed — and charge per request.

```shell
obol sell http my-index \
    --upstream my-svc \
    --port 8080 \
    --namespace my-ns \
    --per-request 0.001 \
    --chain base \
    --token USDC \
    --wallet 0x...your-wallet...
```

This is the path to take when **the value is in the data**: you've synced an archive node from a specific block, built an index on top, and you want to sell access to queries against it that no public RPC will serve.

### `obol sell inference` — sell raw LLM completions

Wrap your cluster's LiteLLM (which already routes to local Ollama and/or your configured cloud providers) and charge per million tokens or per request.

```shell
obol sell inference my-model \
    --model qwen3.5:9b \
    --per-mtok 1.25 \
    --token USDC \
    --chain base
```

This is the path when **the value is in the compute**: you've got a GPU, or a model under license, or a low-latency setup, and you want to sell raw token completions to anyone who needs them.

### `obol sell agent` — sell an agent business

Wrap a running agent — with its skills, its reference data, and its memory — as a paid OpenAI-compatible endpoint. Buyers don't pay for tokens; they pay for **specialized work**.

```shell
obol sell agent my-quant \
    --instance my-quant \
    --per-request 0.05 \
    --token USDC \
    --chain base
```

This is the **margin-bearing path**. The moat is not the LLM — buyers can rent any model cheaply. The moat is:

- **Proprietary skills** you've written for this agent (the analysis methodology, the parsing tricks, the report format).
- **Reference data** the agent has access to — your archive-node index, your curated knowledge base, your historical results.
- **Iteration**: tighter `SOUL.md`, better tool selection, better failure handling, all guided by what real paying buyers ask for.

A specialized quant agent that answers questions about your archive-node data set will out-earn a generic `qwen3.5:9b` endpoint by an order of magnitude on the same hardware — because the buyer is paying for the answer, not the inference.

## Why pay in `$OBOL` on mainnet

Buyers paying in `$OBOL` on Ethereum mainnet sign an [EIP-2612](https://eips.ethereum.org/EIPS/eip-2612) permit off-chain. The Obol-operated x402 facilitator batches that permit with the on-chain transfer at settlement time, so:

- **Buyers never spend ETH on gas** for an OBOL payment.
- Buyers skip the one-time `approve(Permit2, max)` step that most ERC-20 payment flows require.
- Sellers receive `$OBOL` directly to their agent's wallet.

USDC and other tokens settle on the rails their issuers support (EIP-3009 for USDC on Base, etc.). For everyday smoke tests, use **USDC on `base-sepolia`** — it's free and fast. For live mainnet sales, quote in **OBOL on Ethereum mainnet** (headline gasless UX) or **USDC on Base** (cheap real money).

:::info
When quoting prices, name the unit explicitly — `0.01 OBOL / MTok`, `0.001 USDC / request`. Never write `$0.01`; the payment rail matters and the conversion depends on it.
:::

## Get discoverable: ERC-8004 and marketplaces

Buyers need to find you. The Obol Stack publishes an [ERC-8004](https://eips.ethereum.org/EIPS/eip-8004) agent registration document at `/.well-known/agent-registration.json` describing your services, supported payment methods, and endpoints. To list your agent on a public registry:

```shell
obol sell register \
    --chain mainnet \
    --name my-quant \
    --private-key-file ~/.config/obol/agents/my-quant/wallet.json
```

This publishes your agent's wallet and service catalog to the ERC-8004 Identity Registry on the chain you specify. **Note that this requires ETH on the registering wallet for gas** — registration is not gas-sponsored.

`obol sell demo` deliberately skips registration by default (to avoid double-register reverts and the need for ETH on the agent wallet). Run `obol sell register` later when you want on-chain discovery.

### Where buyers actually look

Once registered, several marketplaces and explorers index ERC-8004 registries and x402-gated endpoints:

- **[x402scan.com](https://x402scan.com)** — the broadest registry of x402-gated services across chains. Indexes the on-chain registry automatically once you've registered.
- **[Coinbase Bazaar](https://www.coinbase.com/)** — Coinbase's agent marketplace, focused on Base. Surfaces USDC-on-Base agent services to its buyer-side audience.
- **The ERC-8004 contracts directly** — for buyer-agents written against the raw on-chain registry, `obol sell register` is all you need. The registry is the source of truth; marketplaces are just frontends.

We do not recommend a single "official" marketplace — the agent-registry ecosystem is evolving fast, and the best strategy is to register on-chain and let multiple indexers pick you up.

## Iterating on an agent business

Selling the same agent forever at the same quality is leaving money on the table. The loop that compounds:

1. **Watch what buyers ask.** Log every paid request body and response. Pay attention to questions your agent gives a mediocre answer to.
2. **Improve the skill, not the model.** Most quality gains come from a sharper `SOUL.md`, better tool selection in the agent's skill, and richer reference data — not from upgrading the LLM behind it.
3. **Expand the reference data.** If your quant agent is good because of an archive-node index, add more indexes. If it's good at parsing a specific contract's events, parse more of them.
4. **Tighten the price.** Once the agent is reliably better than the alternatives, raise the per-request price. The buyers paying for specialized work are not price-sensitive in the way buyers paying for raw inference are.
5. **Drain old offers gracefully.** Use `obol sell stop <name> --grace 1h` so in-flight buyers can wind down; only `--force` when you need to reclaim a path immediately. Abrupt teardown is a worse reputation signal on-chain than a drain.

## Lifecycle: drain, delete, replace

```shell
# Drain gracefully — advertises wind-down via discovery, then tears down the route
obol sell stop my-quant --namespace my-ns --grace 1h

# Force-stop immediately (worse reputation signal)
obol sell stop my-quant --namespace my-ns --force

# Delete the offer and clean up
obol sell delete my-quant --namespace my-ns
```

Deletion removes the ServiceOffer CR, cascades the underlying Middleware and HTTPRoute via owner references, and deactivates the ERC-8004 registration (sets `active=false`). The agent's wallet and accumulated revenue are untouched.

## Verifying your paths

When you've shipped your first real (non-demo) offer, walk these checks:

```shell
export TUNNEL_URL=$(obol tunnel status | grep -oE 'https://[a-z0-9-]+\.trycloudflare\.com')

# Public frontend (should be 200 — but cluster-admin UI; do not expose deeper routes)
curl -s -o /dev/null -w "%{http_code}\n" "$TUNNEL_URL/"

# Your paid route (should be 402 with payment requirements)
curl -s -w "\nHTTP %{http_code}\n" -X POST \
    "$TUNNEL_URL/services/my-quant/v1/chat/completions" \
    -H "Content-Type: application/json" \
    -d '{"model":"qwen3.5:9b","messages":[{"role":"user","content":"ping"}]}'

# Your ERC-8004 registration document
curl -s "$TUNNEL_URL/.well-known/agent-registration.json" | jq .
```

A `402` with a JSON body containing `accepts[].asset`, `accepts[].amount`, and `accepts[].payTo` confirms the gate is live.

## Going deeper

- [Build a profitable Obol Stack](build-a-profitable-stack.md) — the end-to-end narrative from archive-node sync to a discoverable, billable specialized agent.
- [Installing Networks](installing-networks.mdx) — sync local Ethereum / Aztec / L2 nodes, including bounded archive nodes via `--since`.
- The source-repo guide [`obol-stack/docs/guides/monetize-inference.md`](https://github.com/ObolNetwork/obol-stack/blob/main/docs/guides/monetize-inference.md) covers the ServiceOffer condition state machine, the self-hosted x402 facilitator path, and the buyer-side `blockrun-llm` SDK in depth.
- The Claude Code skill [`run-obol-stack`](https://github.com/ObolNetwork/skills/blob/main/skills/run-obol-stack/SKILL.md) drives all of this from your terminal end-to-end.
