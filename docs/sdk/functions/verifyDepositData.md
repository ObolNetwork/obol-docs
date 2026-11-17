---
sidebar_label: "verifyDepositData"
slug: /sdk/functions/verifydepositdata
---

# verifyDepositData()

> **verifyDepositData**(`distributedPublicKey`, `depositData`, `withdrawalAddress`, `forkVersion`, `compounding?`): `object`

Defined in: [verification/common.ts:453](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/verification/common.ts#L453)

Verify deposit data withdrawal credintials and signature (structure + BLS in one call).
Prefer `depositBlsCheck` + batch verify in lock validation for large locks.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `distributedPublicKey` | `string` |
| `depositData` | `Partial`\<[`DepositData`](../type-aliases/DepositData.md)\> |
| `withdrawalAddress` | `string` |
| `forkVersion` | `string` |
| `compounding?` | `boolean` |

## Returns

`object`

| Name | Type | Defined in |
| ------ | ------ | ------ |
| `isValidDepositData` | `boolean` | [verification/common.ts:459](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/verification/common.ts#L459) |
| `depositDataMsg` | `Uint8Array` | [verification/common.ts:459](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/verification/common.ts#L459) |
