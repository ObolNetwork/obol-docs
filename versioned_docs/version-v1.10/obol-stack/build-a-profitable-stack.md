---
description: "An end-to-end walkthrough — sync a bounded archive node, build a specialized quant agent on top, expose it as a paid service, and get it discoverable on agent marketplaces."
sidebar_label: "Build a Profitable Obol Stack"
slug: /obol-stack/build-a-profitable-stack
---

# Build a profitable Obol Stack

This is the long-form narrative for an Obol Stack operator who wants to actually make money. It assumes you've finished the [Quickstart](quickstart.mdx) — you have `obol stack up` running, you can talk to your default Hermes agent, and you've watched `obol sell demo` settle a payment.

The journey:

1. Sync a **bounded archive node** of the chain your target application lives on, starting from the block at which it was deployed.
2. Build a **purpose-built index or feed** over that archive.
3. Wrap the index as a **paid HTTP service** (`obol sell http`).
4. Build a **specialized agent** on top that uses the index and a tight skill set to answer buyer questions better than any general-purpose agent could.
5. Sell the agent's replies via `obol sell agent` and **get listed** on the marketplaces where buyer-agents look.
6. Set up out-of-band notifications so your agent can ping you on **Telegram** when the work is done — you don't need to babysit it.
7. **Iterate**.

You can use Claude Code as your operator throughout — the [`run-obol-stack` skill](https://github.com/ObolNetwork/skills/blob/main/skills/run-obol-stack/SKILL.md) drives all of this and knows the right next command at every step.

## Step 1: pick the right archive scope

The single most important decision is **what history you actually need**. A full mainnet archive from genesis is ~4 TB and weeks of sync — overkill for almost every realistic agent business. A bounded archive is the right default.

If your target application is a DeFi protocol deployed at block `N`, install with `--mode=archive --since=<N>`. You'll carry the state trie from `N` forward and nothing earlier:

```shell
obol network install ethereum \
    --network=mainnet \
    --mode=archive \
    --since=22500000      # the block your app was deployed

obol network sync ethereum
```

Pick `--since` based on what your agent needs to answer:

- **A specific app deployed at block N** → `--since=N`.
- **Anything Cancun-or-later** → `--since=cancun` (~800 GB).
- **Anything from the last year** → `--since=365d` (~600 GB).
- **Recent execution-layer history for a quick indexer** → `--since=prague` (~0.4 TB).

See [Installing Networks](installing-networks.mdx#archive-nodes-and-bounded-history-since) for the full `--since` reference.

While the node syncs (hours to days depending on scope), keep moving. The other steps don't require the archive to be complete.

## Step 2: build the index your agent will sell

A raw archive node is not yet a product — it's storage. The product is **a query surface that returns useful, application-specific answers in milliseconds**.

Two reliable shapes:

- **An events index.** Subscribe to your app's contract logs from `--since` forward, decode them, and write them to a small Postgres or DuckDB. Buyers query "all positions opened between X and Y", "all liquidations involving address Z", etc.
- **A state snapshot service.** Run historical `eth_call` against the archive at the block ranges that matter, cache the results, and expose a stable HTTP endpoint that returns "what did this contract look like at this block?" without paying the archive node's full cost per query.

Deploy whatever you build as a regular Kubernetes Service in your cluster — the `obol app install` command takes any Helm chart, and the `obol-app` chart in [`ObolNetwork/helm-charts`](https://github.com/ObolNetwork/helm-charts) packages an arbitrary Dockerfile for you.

## Step 3: sell the index

Once the index is healthy, wrap it as a paid HTTP service:

```shell
obol sell http my-index \
    --upstream my-index-svc \
    --port 8080 \
    --namespace my-ns \
    --per-request 0.001 \
    --chain base \
    --token USDC \
    --wallet 0x...your-wallet...
```

Confirm it reconciles to `Ready`:

```shell
obol sell status my-index --namespace my-ns
```

You now have a billable data feed. Some buyers — particularly other agents writing custom analyses — will pay for this directly.

## Step 4: build the specialized quant agent

The bigger margin lives one layer up. Buyers who don't want to write their own analysis will happily pay 10–50× more for an **agent that already knows what to do with the index**.

Inside the Obol Agent, the levers that compound are:

- **`SOUL.md`** — the agent's system prompt. The difference between "an LLM that knows about Ethereum" and "a quant agent that answers a specific class of questions reliably" is two well-edited paragraphs of `SOUL.md`.
- **Custom skills.** Add a skill that knows how to query your index, decode your app's events, and present the result in the format your buyers actually want.
- **Reference data.** Give the agent direct access to the index (and any other curated data you have) so it doesn't have to guess.

The `run-obol-stack` skill calls this the **margin-bearing path**: the LLM is fungible, but a tight skill plus proprietary data is not. Iterate on `SOUL.md` and the skill until paid buyers consistently give thumbs-up answers.

Once the agent is reliable, expose it as a paid agent service:

```shell
obol sell agent my-quant \
    --instance my-quant \
    --per-request 0.05 \
    --token USDC \
    --chain base
```

Buyers pay per reply, not per token — and pay for the answer, not the inference.

## Step 5: get a permanent URL

So far your service has been reachable on a temporary quick-tunnel URL (`https://<id>.trycloudflare.com`) that changes on every restart. Before you register and start attracting buyers, give it a stable home — otherwise anyone who bookmarked or registered the old URL hits errors after a restart.

```shell
# 1. In the Cloudflare dashboard: Networks → Tunnels → Create a tunnel.
# 2. Add a Public Hostname:
#      Subdomain/Domain: stack.example.com
#      Service:          http://traefik.traefik.svc.cluster.local:80
# 3. Copy the connector token and hand it to Obol:
obol tunnel setup --hostname stack.example.com <connector-token>
```

You can paste the whole `cloudflared tunnel run --token …` line the dashboard shows — Obol strips the prefix and keeps the token. This uses a least-privilege, single-tunnel **connector token**, not an account-wide API key, so the credential can only run this one tunnel.

Confirm it's live with `obol tunnel status`. For the full dashboard walkthrough with screenshots, see [Set up a permanent URL](permanent-url.md).

## Step 6: get listed

Register your agent on [ERC-8004](https://eips.ethereum.org/EIPS/eip-8004) so buyers can find it:

```shell
obol sell register \
    --chain mainnet \
    --name my-quant \
    --private-key-file ~/.config/obol/agents/my-quant/wallet.json
```

Registration writes to the on-chain Identity Registry. From there, multiple marketplaces and explorers index your offer:

- **[x402scan.com](https://x402scan.com)** — the broadest cross-chain x402 registry.
- **[Coinbase Bazaar](https://www.coinbase.com/)** — Coinbase's USDC-on-Base agent marketplace.
- **The ERC-8004 contracts directly** — for buyer-agents written against the raw registry.

You don't need to pick one marketplace; registering once gets you indexed by all of them. See [Selling agent services](selling-services.md#get-discoverable-erc-8004-and-marketplaces) for the longer marketplace orientation.

## Step 7: tell your agent to ping you on Telegram

By the time you have an archive node syncing in the background, an index updating, and a paid agent live on a tunnel — you probably don't want to sit and watch a terminal. `obol hermes setup` wires Hermes to a Telegram bot (or Discord, Slack, etc.) so it can message you when things change.

The Telegram bot flow involves talking to two other Telegram bots:

1. **Talk to `@BotFather`** in Telegram (`https://t.me/BotFather`). Send `/newbot`, follow the prompts to pick a name and a username for your bot, and you'll receive an **HTTP API token** (something like `1234567890:ABCdefGhIJKlmNoPQRstUvWXYZabcdefghi`). Save it — this is how Hermes will send messages **as** the bot.
2. **Talk to `@userinfobot`** in Telegram (`https://t.me/userinfobot`). It will reply with your numeric **Telegram user ID** (something like `123456789`). Save this — this is the chat the bot will message.
3. **Start a chat with your new bot** by clicking through the link `@BotFather` gave you, and send it `/start`. Telegram won't let a bot DM you until you initiate the conversation.
4. **Run `obol hermes setup`** and paste both the bot token and your numeric user ID when prompted.

Test it: ask the agent to ping you when the next sync milestone hits. If you get a Telegram message, you're done — you can close the laptop and let the agent work.

## Step 8: iterate

The compounding loop:

- Watch which buyer questions your agent answers poorly — that's the prompt for the next `SOUL.md` edit or skill improvement.
- Watch which queries against your index are popular — that's the prompt for the next index expansion (more contracts decoded, deeper historical coverage, etc.).
- Watch your revenue per buyer. Specialized work is not price-sensitive in the way raw inference is — once you're reliably better than the alternatives, raise the price.
- When you stop an offer, **drain it gracefully** (`obol sell stop --grace 1h`). On-chain buyers' reputation systems penalize abrupt teardown.

A profitable Obol Stack is one where the operator is *bored*. The agent syncs the data, builds the index, sells the queries, sells the replies, pings the operator on Telegram when something interesting happens, and otherwise gets on with it.

## Where to go from here

- [Selling agent services](selling-services.md) — in-depth coverage of `obol sell`, x402 economics, and marketplaces.
- [Installing Networks](installing-networks.mdx) — full archive `--since` reference and multi-network setup.
- [Installing Apps](installing-apps.md) — deploying any Helm chart (your index, your custom services) into the stack.
- [`run-obol-stack` Claude Code skill](https://github.com/ObolNetwork/skills/blob/main/skills/run-obol-stack/SKILL.md) — drive the entire flow from your terminal, with a Claude that already knows the right next command.
