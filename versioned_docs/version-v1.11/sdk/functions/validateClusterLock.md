---
sidebar_label: "validateClusterLock"
slug: /sdk/functions/validateclusterlock
---

# validateClusterLock()

> **validateClusterLock**(`lock`, `safeRpcUrl?`): `Promise`\<`boolean`\>

Defined in: [services.ts:41](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/services.ts#L41)

Verifies the cryptographic validity of a cluster lock.

Checks all operator signatures, config hashes, and definition hashes within
the lock. Supports both EOA and Safe Wallet signatures.

This is a standalone utility – it does **not** require a `Client` instance.

**Charon:** this covers cryptographic and structural checks in this SDK only.
Charon adds further runtime/protocol rules. `true` here does not guarantee
Charon will accept the lock; use Charon or its supported tooling as the
final gate before operating a cluster.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `lock` | [`ClusterLock`](../type-aliases/ClusterLock.md) | The cluster lock object (e.g. from [Client.getClusterLock](../classes/Client.md#getclusterlock)). |
| `safeRpcUrl?` | `string` | Optional RPC URL for Safe Wallet signature verification. If omitted, falls back to the `RPC_MAINNET` / `RPC_HOODI` / etc. env vars. |

## Returns

`Promise`\<`boolean`\>

`true` if the lock is cryptographically valid; `false` if invalid
  (e.g. missing keys, invalid signatures, hash mismatches).

## Throws

[ClusterLockValidationTimeoutError](../classes/ClusterLockValidationTimeoutError.md) when validation exceeds a
  worker deadline (whole-lock or per-chunk BLS workers on large clusters).
  HTTP APIs should map this to **504 Gateway Timeout**, not **400**.

## Throws

[ClusterLockValidationBusyError](../classes/ClusterLockValidationBusyError.md) when concurrent validations exceed
  `OBOL_SDK_MAX_CONCURRENT_LOCK_VALIDATIONS` (default **2**; set `0` for unlimited).
  HTTP APIs should map this to **503 Service Unavailable**.

## Example

```typescript
import { validateClusterLock, Client } from "@obolnetwork/obol-sdk";

const configHash = "0x..."; // your cluster config hash
const client = new Client({ chainId: 560048 });
const lock = await client.getClusterLock(configHash);
const isValid = await validateClusterLock(lock);
```
