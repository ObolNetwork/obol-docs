---
description: "Rent a remote model with obol buy inference, or pay any x402 endpoint straight from your agent"
sidebar_label: "Buying Services"
slug: /obol-stack/buying-services
---

# Buying Services

The Obol Stack closes the commerce loop from both sides. Selling is covered in [Selling Agent Services](selling-services.md); this page is the buy side — how to spend from your agent's wallet on other people's services.

There are two distinct buy paths. Don't conflate them:

* **Buying inference is renting a brain.** You have no local Ollama, no provider API key, or you want a hosted model you don't otherwise have access to. What you get back is tokens.
* **Buying from an agent is renting specialised work.** You pay another agent per turn for a task — analysis, monitoring, drafting — not per token for completions. Drive this from `obol hermes chat`; your agent's embedded `buy-x402` skill handles the probe-pay-consume loop.

## Rent a model: `obol buy inference`

```shell
obol buy inference https://seller.example/
```

Point it at any Obol Stack storefront URL (or omit the URL to use the default storefront). The command:

1. Walks the seller's `/api/services.json` catalog and resolves the model and payment token from the offer.
2. Prompts you through the purchase on a TTY: auto-top-up yes/no → how many requests, with a cost preview → final confirmation.
3. Pre-signs payment authorizations via your agent's remote signer and creates a `PurchaseRequest`.
4. Publishes the model as `paid/<remote-model>` through your cluster's LiteLLM.

After that, the remote model is just another model in your roster. Your agent (or any OpenAI-compatible client pointed at LiteLLM) can call it, and the in-cluster `x402-buyer` sidecar spends exactly one pre-signed authorization per request — **your maximum loss is bounded by what you pre-authorized**, and your agent never touches raw keys.

### Useful flags

```shell
obol buy inference https://seller.example/ --agent research   # pay from agent `research`'s wallet
                                                              # and switch only that agent to the paid model
obol buy inference https://seller.example/ --set-default      # promote the paid model globally, sync every agent
```

| Flag | What it does |
| ---- | ------------ |
| `--model <id>` | Pick a model when the seller offers several on one URL |
| `--count <N>` / `--budget <amt>` | Size the purchase non-interactively (CI / scripts) |
| `--auto-refill` | Let the agent top up the budget when it runs low (`--refill-threshold`, `--refill-count`) |
| `--cost-cap <price>` | Refuse refills if the seller raises the per-request price above this ceiling |
| `--expected-agent-id <id>` | Opt-in ERC-8004 identity check of the seller (skipped by default) |

:::info
Call paid models with `"stream": true`. Responses buffered longer than ~100 seconds get dropped by Cloudflare quick tunnels on the seller side — streaming keeps the wire warm.
:::

## Pay any x402 endpoint from your agent

Your agent ships with the `buy-x402` skill, which can probe and pay arbitrary x402-gated endpoints — one-shot HTTP calls, paid agent turns, or batch pre-authorizations. Just ask it in `obol hermes chat`:

> "Probe https://seller.example/services/quant and tell me what it costs. If it's under 0.05 USDC per request, pay for one analysis of ETH gas trends."

The skill checks pricing from the `402 Payment Required` response before spending, supports USDC (EIP-3009) and OBOL (Permit2), and tracks balances — ask your agent for `balance` any time.

## Prefer a cloud provider instead?

If you just want a good model and don't need the crypto rails, bring your own key:

```shell
obol model setup                                        # interactive picker (defaults to OpenRouter + free models)
obol model setup --provider anthropic --api-key sk-ant-...
obol model setup custom --endpoint http://192.168.1.20:8000/v1 --model my-model   # any OpenAI-compatible endpoint
```

`obol buy inference` and `obol model setup` end in the same place — a model your agents can use — they just differ in who you pay and how.
