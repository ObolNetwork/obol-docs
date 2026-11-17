---
sidebar_label: "builderBlsCheck"
slug: /sdk/functions/builderblscheck
---

# builderBlsCheck()

> **builderBlsCheck**(`validator`, `feeRecipientAddress`, `forkVersion`, `precomputedBuilderDomain?`): [`BlsSignatureCheck`](../type-aliases/BlsSignatureCheck.md) \| `null`

Defined in: [verification/common.ts:528](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/verification/common.ts#L528)

Builder registration BLS triple for batch verification. Returns null if structure is invalid.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `validator` | [`DistributedValidator`](../type-aliases/DistributedValidator.md) |
| `feeRecipientAddress` | `string` |
| `forkVersion` | `string` |
| `precomputedBuilderDomain?` | `Uint8Array`\<`ArrayBufferLike`\> |

## Returns

[`BlsSignatureCheck`](../type-aliases/BlsSignatureCheck.md) \| `null`
