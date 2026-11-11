---
title: For AI agents
slug: /sdk/v3/for-agents
description: How an AI agent should use @obolnetwork/obol-sdk v3 safely — prepare, simulate, report warnings to its operator, send only with the codes the operator accepted — and where the machine-readable contracts live.
---

# For AI agents

:::caution[v3 release candidate, unreleased]

The v3 SDK is a release candidate; check the installed version (`npm ls @obolnetwork/obol-sdk`) before relying on a name here. Agents on the released SDK should use the [2.x reference](../sdk/index.md).

:::

The v3 SDK was designed so that an agent can plug it together with confidence: typed inputs and outputs, an operation name that says how it fails, a checked transaction before anything is signed, and a stable code for every error and warning. Those guarantees hold only if the agent keeps one rule.

:::danger[The rule]

**Never acknowledge a warning on the user's behalf.** Show each warning to whoever owns the funds, and send only with the codes they accepted. Do not call `warningCodes` for warnings nobody was shown, and do not resubmit with the codes from a `FINDINGS_NOT_ACKNOWLEDGED` hint without asking. A warning means funds may go somewhere unintended, or that a safety check did not run.

:::

## The safe loop {#loop}

1. **Prepare.** Call the `prepare*` operation. If it throws, read `error.code` with [`isObolError`](./reference/checks.md#isObolError) and act on the [code](./errors.md); do not retry blindly (see [Retrying](#retry)).
2. **Simulate.** `obol.experimental.simulate(tx, { from })` shows what the transaction would move. Its own warnings (a revert, a difference from the preview, reads that failed) join the transaction's.
3. **Report.** `warningsOf(tx, sim)` gives the open warnings. Report each with `FINDINGS[code].meaning` and `FINDINGS[code].guidance` (what accepting it accepts), plus `subject` (which validator or address).
4. **Send with what was accepted.** `obol.send(tx, { simulation: sim, acknowledge: accepted })`. If the operator accepted only some, `send` throws `FINDINGS_NOT_ACKNOWLEDGED` naming the rest: report again.
5. **Keep the hash.** `send` returns as soon as the wallet gives a hash. Store it before `await sent.wait()`.

The SDK README shows this as code, next to a confirmation dialog and a scripted policy: [Three ways to acknowledge](./warnings.md#patterns).

## Errors an agent can fix itself {#self-fix}

| Code | What it means for an agent |
|---|---|
| [`PAYLOAD_INVALID`](./errors.md#PAYLOAD_INVALID) | `details.issues` lists each bad field with its `path`; `issue: 'unknown_key'` names a key the operation does not define and the allowed ones. Fix the input and call again. |
| [`DEPOSIT_AMOUNT_REQUIRED`](./errors.md#DEPOSIT_AMOUNT_REQUIRED) | The lock holds several deposit amounts; ask which one (`details.available`), never pick. |
| [`API_RATE_LIMIT`](./errors.md#API_RATE_LIMIT) | Wait `details.retryAfterSeconds`, then retry. |
| [`STATUS_UNAVAILABLE`](./errors.md#STATUS_UNAVAILABLE) | `details.reason` says which: `signatures_pending` clears in a slot or two; `beacon_*` means the beacon node is on another chain or not synced. |

Everything else (a validator that already exists, a role the sender lacks, a lock that fails verification) is a decision for the operator, not a retry. `error.hint` says what a person would do.

## Retrying {#retry}

| After | Safe to retry? |
|---|---|
| `TX_REJECTED` (nothing was sent) | yes |
| `TX_REVERTED`, `TX_REPLACED` (the call did not take effect) | yes |
| `TX_UNCONFIRMED` (no receipt yet) | no: watch the hash; it may still be mined |
| `API_TIMEOUT` on a write | read the resource first; the API may have processed it |
| A deposit, an OVM creation or a withdrawal request that was sent | no: none of them is idempotent |

From the SDK's [lifecycle states](./lifecycle.mdx#states).

## Machine-readable contracts {#machine-readable}

| What | Where |
|---|---|
| Every finding code with its severity, meaning and guidance | `FINDINGS` (exported); the [warnings page](./warnings.md) |
| The codes each kind of transaction can carry | `FINDING_CODES_BY_KIND`; type `FindingCodeFor<'withdraw'>` |
| Every error code, and its typed `details` | `OBOL_ERROR_CODES`, `ObolErrorDetails`; the [errors page](./errors.md) |
| The warnings that only mean "a check could not run" | `UNCHECKED_WARNING_CODES` |
| Each operation's checks, in order, with their codes | [`spec/operations.md`](https://github.com/ObolNetwork/obol-sdk/blob/feat/sdk-v3-package/spec/operations.md) (shown on each method of the [reference](./reference/index.md) under "Specification") |
| JSON Schemas of the inputs | [`spec/schemas/`](https://github.com/ObolNetwork/obol-sdk/tree/feat/sdk-v3-package/spec/schemas) |
| Test vectors (share math, fees, distribution routing) | [`spec/vectors/`](https://github.com/ObolNetwork/obol-sdk/tree/feat/sdk-v3-package/spec/vectors) |
| Repo guide for agents | [`AGENTS.md`](https://github.com/ObolNetwork/obol-sdk/blob/feat/sdk-v3-package/AGENTS.md) |

Every page of this site is also served as Markdown: append `.md` to its URL (this page is `for-agents.md`). The site index for agents is [`/llms.txt`](pathname:///llms.txt), and Obol's wider one is [obol.org/llms.txt](https://obol.org/llms.txt).

## When to use something else {#elsewhere}

- Creating a cluster with friends through a UI: [launchpad.obol.org](https://launchpad.obol.org).
- Running a distributed validator node (Charon and a validator client): the [run a DV](../run-a-dv/start/quickstart_overview.md) guides, not the SDK.
- One-shot cluster creation, DKG or lock inspection from a shell: the [Charon CLI](../learn/charon/charon-cli-reference.md).
- A codebase on ethers that cannot move to viem: SDK 2.x.
