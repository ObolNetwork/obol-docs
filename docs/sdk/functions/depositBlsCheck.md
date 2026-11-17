---
sidebar_label: "depositBlsCheck"
slug: /sdk/functions/depositblscheck
---

# depositBlsCheck()

> **depositBlsCheck**(`distributedPublicKey`, `depositData`, `withdrawalAddress`, `forkVersion`, `compounding?`, `precomputedDepositDomain?`): [`BlsSignatureCheck`](../type-aliases/BlsSignatureCheck.md) \| `null`

Defined in: [verification/common.ts:425](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/verification/common.ts#L425)

Deposit fields + BLS triple for batch verification. Returns null if structure is invalid.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `distributedPublicKey` | `string` |
| `depositData` | `Partial`\<[`DepositData`](../type-aliases/DepositData.md)\> |
| `withdrawalAddress` | `string` |
| `forkVersion` | `string` |
| `compounding?` | `boolean` |
| `precomputedDepositDomain?` | `Uint8Array`\<`ArrayBufferLike`\> |

## Returns

[`BlsSignatureCheck`](../type-aliases/BlsSignatureCheck.md) \| `null`
