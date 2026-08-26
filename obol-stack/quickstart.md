# Quickstart

This guide walks you through installing the Obol Stack, chatting with your default agent, and selling your first payment-gated service.

## Prerequisites

* Docker installed and running on your machine.
* macOS or Linux operating system.
* At least 8 GB of RAM available.

:::info
Verify Docker is running with `docker info` before proceeding.
:::

**Optional but recommended:** install [Ollama](https://ollama.com) and pull a tool-call-capable model so your agent has a free, local LLM to talk to:

```shell
ollama pull qwen3.5:4b   # or qwen3.5:9b on a 16 GB+ machine
```

The installer may offer to install Ollama. **If you decline and do not configure a cloud/custom model**, `obol stack up` has nothing to put in LiteLLM and **skips the default Hermes agent**. Fix after install with:

```shell
obol model setup          # interactive; or e.g. --provider openrouter
obol agent init
```

You can also use Anthropic, OpenAI, OpenRouter, Venice, or any OpenAI-compatible endpoint via `obol model setup` after the cluster is up.

## Step 1: Install the Obol Stack

Run the bootstrap installer:

```shell
bash <(curl -fsSL https://stack.obol.org)
```

The installer will:

1. Validate that Docker is running.
2. Install the `obol` CLI binary and dependencies (kubectl, helm, k3d, helmfile, k9s).
3. Configure your PATH and try to add `obol.stack` to `/etc/hosts`.
4. Offer to start the cluster immediately.

<Tabs>
<TabItem value="default-installation" label="Default installation">
```shell
bash <(curl -fsSL https://stack.obol.org)
```

Files are installed to:

* Config: `~/.config/obol/`
* Data: `~/.local/share/obol/`
* Binaries: `~/.local/bin/`
</TabItem>

<TabItem value="specific-version" label="Specific version">
```shell
OBOL_RELEASE=v0.13.0 bash <(curl -fsSL https://stack.obol.org)
```

Use the current tag from the [GitHub releases](https://github.com/ObolNetwork/obol-stack/releases) page when newer than v0.13.0.
</TabItem>

<TabItem value="development-mode" label="Development mode">
```shell
git clone https://github.com/ObolNetwork/obol-stack.git
cd obol-stack
OBOL_DEVELOPMENT=true ./obolup.sh
```

Development mode uses a local `.workspace/` directory and runs `go run` instead of a compiled binary.
</TabItem>
</Tabs>

:::warning
**If `/etc/hosts` cannot be updated** (no sudo, or you cancel the password prompt), the installer still finishes — it does not hard-fail. Add the host, then start the stack yourself:

```shell
echo "127.0.0.1 obol.stack" | sudo tee -a /etc/hosts
obol stack init
obol stack up
obol agent init   # if Hermes was skipped (no model yet)
```

`obol stack up` will try hosts again (including agent hostnames such as `obol-agent.obol.stack`). A failed write is a **warning**, not a stop.

For CI/automation without a sudo password prompt, set `OBOL_NONINTERACTIVE=true` (hosts update fails fast unless sudo is already cached or NOPASSWD is configured).
:::

## Step 2: Start the stack

```shell
obol stack init
obol stack up
```

`obol stack up` does a lot on first run — 2–5 minutes is normal. When a model is available it deploys a default Hermes agent in the `hermes-obol-agent` namespace with its own Ethereum signing wallet. The **Cloudflare tunnel stays dormant** until the first selling workflow or an explicit `obol tunnel restart` / `obol tunnel setup`.

:::info
First startup pulls several Docker images. If it stalls, check `obol kubectl get pods -A` to see what's still pending.
:::

### Open the local UI

```text
http://obol.stack
```

Use the **`obol.stack` hostname**, not `localhost`. Traefik routes the frontend (and eRPC) only for `Host: obol.stack`. **`http://localhost:8080` returns 404** even when the stack is healthy.

* Prefer **`:8080`** on macOS when port 80 is unavailable (or after editing `~/.config/obol/k3d.yaml` to drop privileged 80/443 binds).
* If port 80 is mapped, `http://obol.stack/` works too.
* Hermes dashboard (separate host): `http://obol-agent.obol.stack` (add `:8080` if that is your ingress).

## Step 3: Chat with your agent

Hermes is the default Obol Agent runtime. Talk to it directly from your terminal:

```shell
obol hermes chat
```

That drops you into a TUI chat session against the in-cluster Hermes gateway, using whichever LLM `obol stack up` auto-configured (your local Ollama models if available, otherwise the cloud provider you set up with `obol model setup`).

A few useful pass-through commands:

```shell
obol hermes skills list           # see the agent's installed skills
obol hermes config show           # inspect the runtime config
obol hermes --help                # full Hermes CLI surface
```

:::tip
Want the agent to message you on Telegram, Discord, or Slack? Run `obol hermes setup` and follow the prompts to wire up a chat-app integration. Hermes will then notify you when long-running work finishes. The full Telegram bot flow (which involves talking to `@BotFather` and `@userinfobot` first) is covered in [Build a profitable Obol Stack](build-a-profitable-stack.md#step-7-tell-your-agent-to-ping-you-on-telegram).
:::

The agent has its own Ethereum wallet — back it up before you put anything on it:

```shell
obol agent wallet address         # print the agent's wallet address
obol agent wallet backup -o ~/obol-wallet-backup.json --passphrase "..."
```

## Step 4: Sell your first service (`obol sell demo`)

This is the headline feature of the v0.9 release. `obol sell demo` deploys a tiny HTTP service behind an [x402](https://www.x402.org/) payment gate, registers it on a Cloudflare quick tunnel, and prints copy-paste instructions to test it as a buyer.

```shell
obol sell demo                    # deploys "hello" demo @ 1 OBOL/req on Ethereum mainnet
```

The output walks you through:

1. The public URL where the gated endpoint lives (`https://<tunnel>.trycloudflare.com/services/demo-hello/...`).
2. A `curl` snippet that hits the endpoint and gets back HTTP `402 Payment Required` with the price.
3. A `python` snippet using the [x402](https://github.com/coinbase/x402) SDK to pay and consume the response.

Other demo types ship in the same command:

```shell
obol sell demo blocks             # 0.0001 USDC/req on base-sepolia (live chain data via eRPC)
obol sell demo quant              # 0.01 USDC/req on base-sepolia (agent-driven analysis report)
```

Once you've watched a demo settle end-to-end, the same machinery lets you sell anything:

```shell
obol sell inference my-model --model qwen3.5:9b --per-mtok 0.01 --token USDC --chain base
obol sell http my-api --upstream my-svc --port 8080 --namespace my-ns \
  --per-request 0.001 --chain base --pay-to <your-wallet>
obol sell agent my-analyst --price 0.05 --token USDC --chain base
```

`sell agent` is the highest-margin shape — buyers pay for a whole specialised agent's replies (skills + memory + curated data), not just raw tokens. See [Agents & Skills](agents-and-skills.md) for building one worth paying for.

The mental model is: **anything in your cluster that exposes a Service can be wrapped in a `ServiceOffer` and gated behind x402**. The goal of v0.9 is to make that loop short enough that you can actually iterate on what's worth selling.

See [Selling agent services](selling-services.md) for the full orientation on the three `sell` shapes (`http`, `inference`, `agent`), x402 economics, ERC-8004 registration, and marketplaces.

### Why $OBOL on mainnet?

Buyers paying in `$OBOL` on Ethereum mainnet sign an [EIP-2612](https://eips.ethereum.org/EIPS/eip-2612) permit off-chain, and the Obol-operated facilitator batches that permit with the on-chain transfer at settlement time. **Buyers never need ETH for gas**, and they skip the one-time `approve` step that most ERC-20 payment flows require.

Sellers receive `$OBOL` directly into their agent wallet. Read more about the [OBOL token](../community-and-governance/obol-token/).

### List on the agent registry (ERC-8004)

`obol sell demo` skips on-chain registration by default (to avoid double-register reverts and the need for ETH on the agent wallet). When you're ready to be discoverable on a public agent registry:

```shell
obol sell register --chain mainnet --name my-service
```

This publishes the agent's wallet + service catalog to the [ERC-8004](https://eips.ethereum.org/EIPS/eip-8004) Identity Registry on the chain you specify.

## Step 5: Drive the stack from Claude Code (optional)

The Obol team publishes a Claude Code plugin with skills for installing, operating, and selling on the Obol Stack. If you use Claude Code, install it once and let Claude run the playbook for you next time.

```
/plugin marketplace add ObolNetwork/skills
/plugin install obol@obol
```

The `run-obol-stack` skill teaches Claude how to drive the CLI end-to-end — bring-up, debugging stuck pods, deploying services, registering on ERC-8004, and pointing buyers at your tunnel URL. Source: [github.com/ObolNetwork/skills](https://github.com/ObolNetwork/skills).

## Step 6: Deploy a blockchain network (optional)

The stack ships with built-in eRPC routing to public Ethereum mainnet and Hoodi RPCs — no node required. If your agent makes a lot of requests, or you want a Consensus Layer client to run a distributed validator, run your own local node:

```shell
# Install an Ethereum node on Hoodi testnet
obol network install ethereum --network=hoodi

# Deploy to the cluster
obol network sync ethereum
```

This creates the deployment `ethereum/hoodi` and registers the local node as the primary RPC upstream, with the built-in public RPCs as automatic fallback. See [Installing Networks](installing-networks.mdx) for the full set of supported networks and clients.

## Step 7: Explore

```shell
obol k9s                          # interactive cluster TUI (press '0' to view all)
obol kubectl get pods -A          # all pods across all namespaces
obol tunnel status                # public tunnel URL
obol sell list                    # services you're selling
obol sell status <name>           # ServiceOffer reconciliation state
```

:::info
A plain `obol stack up` leaves the tunnel **dormant**. Selling (`obol sell demo`, `obol sell http`, …) or `obol tunnel restart` activates a temporary quick-tunnel URL (it can change on restart). For a stable public hostname, use [Set up a permanent URL](permanent-url.md) (`obol tunnel setup --hostname …`).
:::

## Stopping and cleaning up

```shell
obol stack down                   # stop the cluster (preserves data)
obol stack up                     # restart
obol stack purge -f               # remove everything, including data
```

:::warning
`obol stack purge -f` is irreversible. It removes all cluster data and configuration — including any agent wallets that aren't backed up outside `~/.config/obol/`.
:::

## Next steps

* [Build a profitable Obol Stack](build-a-profitable-stack.md) — the end-to-end narrative: sync a bounded archive node, build an index, wrap it as a paid service, and turn it into a specialized agent business.
* [Selling agent services](selling-services.md) — depth on the three `sell` shapes, x402 economics, and getting listed on marketplaces.
* [Buying services](buying-services.md) — rent a remote model with `obol buy inference`, or pay any x402 endpoint from your agent.
* [Agents & Skills](agents-and-skills.md) — create specialised sub-agents and see everything your agent can already do.
* [Installing Networks](installing-networks.mdx) — sync local Ethereum / Aztec nodes (including bounded archives via `--since`).
* [Installing Apps](installing-apps.md) — deploy any Helm chart.
* [FAQ](faq.md) — common questions and troubleshooting.
