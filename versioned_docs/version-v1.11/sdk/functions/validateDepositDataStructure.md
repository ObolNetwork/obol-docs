---
sidebar_label: "validateDepositDataStructure"
slug: /sdk/functions/validatedepositdatastructure
---

# validateDepositDataStructure()

> **validateDepositDataStructure**(`distributedPublicKey`, `depositData`, `withdrawalAddress`, `forkVersion`, `compounding?`, `precomputedDepositDomain?`): `object`

Defined in: [verification/common.ts:390](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/verification/common.ts#L390)

Structural deposit checks + signing root (no BLS). Used before batch BLS verify.

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

`object`

| Name | Type | Defined in |
| ------ | ------ | ------ |
| `valid` | `boolean` | [verification/common.ts:397](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/verification/common.ts#L397) |
| `message` | `Uint8Array` | [verification/common.ts:397](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/verification/common.ts#L397) |
