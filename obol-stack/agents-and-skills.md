# Agents & Skills

## The default agent

`obol stack up` creates a default **Hermes** agent in the `hermes-obol-agent` namespace, with its own Ethereum signing wallet (backed by an in-cluster remote signer — the agent never touches raw private keys) and a full embedded skill set. Talk to it with `obol hermes chat`, get its API bearer token with `obol agent auth`.

:::warning
Back up the agent's wallet before you put anything on it. Losing the keystore loses the agent's on-chain identity and funds.

```shell
obol agent wallet backup -o ~/obol-wallet-backup.json --passphrase "..."
```

Store the backup **outside** `~/.config/obol/` — `obol stack purge -f` deletes that directory.
:::

## Creating sub-agents

Additional agents are where the Stack gets interesting: each one is a separate, long-lived specialist with its own namespace, state, skills, and (optionally) its own wallet.

```shell
obol agent new research \
  --model qwen3.5:9b \
  --skills ethereum-networks,buy-x402,indexing \
  --objective "Research onchain data and sell reports. Cite the block number your data came from." \
  --create-wallet
```

* `--objective` becomes the agent's identity — spend real effort on it: scope, output format, refusal policy, tone. One sharp paragraph beats a page of vibes.
* `--skills` should be **narrow**. A specialist selling on-chain analysis doesn't need generalist skills; a tight list keeps a smaller model focused and makes the agent's edge legible to buyers.
* `--create-wallet` gives the sub-agent its own wallet. Skip it if the agent doesn't need to hold or sign funds — payments for its services can go to your main agent's wallet instead.

Manage the fleet:

```shell
obol agent list                    # all agents
obol agent auth research           # bearer token for a specific agent
obol agent sync                    # re-render agent deployments after config changes
obol agent delete research         # remove one
```

An agent created this way can be put on sale in one command — `obol sell agent research --price 0.05 --token USDC --chain base` — turning it into an OpenAI-compatible paid endpoint. See [Selling Agent Services](selling-services.md).

:::info
OpenClaw remains supported as an alternate runtime: `obol agent new --runtime openclaw`, then `obol openclaw dashboard`.
:::

## Embedded skills

Every agent ships with Obol's embedded skills — self-contained playbooks (instructions + scripts) the agent loads on demand. The default set gives your agent working knowledge of the commerce loop, Ethereum, and its own cluster:

### Commerce & agents

| Skill | What the agent can do with it |
| ----- | ----------------------------- |
| `sub-agent-business` | Design, evaluate, price, and sell specialised sub-agents people pay per turn — the business playbook |
| `agent-factory` | Spawn durable child agents with their own namespace, wallet, skills, and paid endpoint |
| `sell` | Create and manage payment-gated ServiceOffers, track reconciliation, register on ERC-8004 |
| `monetize-guide` | Guided end-to-end walkthrough for selling inference or an HTTP API |
| `buy-x402` | Buy from any x402 endpoint — probe pricing, pre-sign payments, auto-refill, check balances |
| `discovery` | Find agents registered on the ERC-8004 Identity Registry across chains |
| `swap` | Treasury moves — swap USDC/ETH/OBOL on Base and mainnet via Uniswap V3, with quotes and slippage guards |
| `autoresearch` / `autoresearch-coordinator` / `autoresearch-worker` | Run, coordinate, or sell GPU time for autonomous LLM optimization experiments |

### Ethereum

| Skill | What the agent can do with it |
| ----- | ----------------------------- |
| `ethereum-networks` | Read-only chain queries via the local RPC gateway — blocks, balances, contract reads, ERC-20, ENS |
| `ethereum-local-wallet` | Sign and send transactions via the per-agent remote signer |
| `addresses` | Verified contract addresses — payment rails first, then DeFi, tokens, bridges, registries |
| `building-blocks` | DeFi protocol composability — Uniswap, Aave, Aerodrome, Pendle |
| `concepts` | The onchain mental model — state machines, incentives, why nothing is automatic |
| `gas` | Real transaction costs today, mainnet vs L2 |
| `indexing` | Reading historical onchain data at scale — The Graph, Dune, Ponder, event-first design |
| `l2s` | The L2 landscape — which chain for which job |
| `standards` | ERC-8004, x402, EIP-3009, EIP-7702, ERC-4337 |
| `wallets` | Wallet architecture and key safety for AI agents |
| `why` | Why Ethereum for agents — the ERC-8004 + x402 loop |

### Operations

| Skill | What the agent can do with it |
| ----- | ----------------------------- |
| `obol-stack` | Kubernetes diagnostics from inside the cluster — pods, logs, events |
| `distributed-validators` | Obol DVT cluster monitoring via the Obol API |

The list evolves — ask your agent, or run:

```shell
obol hermes skills list            # live catalogue (default agent)
obol hermes skills add <package>   # add a skill
obol hermes skills remove <name>   # remove one
```

Custom skills are just directories with a `SKILL.md` — drop your own curated data and playbooks into an agent's skills directory to give it an edge nobody else has. That curation is exactly what makes a sub-agent worth paying for: see [Build a Profitable Obol Stack](build-a-profitable-stack.md).
