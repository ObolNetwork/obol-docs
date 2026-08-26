# verifyDepositData()

> **verifyDepositData**(`distributedPublicKey`, `depositData`, `withdrawalAddress`, `forkVersion`, `compounding?`): `object`

Defined in: [verification/common.ts:362](https://github.com/ObolNetwork/obol-sdk/blob/5137bd5c4ded55a50234f19135ea3a5bfeab4d47/src/verification/common.ts#L362)

Verify deposit data withdrawal credintials and signature

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `distributedPublicKey` | `string` | - |
| `depositData` | `Partial`\<[`DepositData`](../type-aliases/DepositData.md)\> | - |
| `withdrawalAddress` | `string` | withdrawal address in definition file. |
| `forkVersion` | `string` | fork version in definition file. |
| `compounding?` | `boolean` | - |

## Returns

`object`

- return if deposit data is valid.

| Name | Type | Defined in |
| ------ | ------ | ------ |
| `isValidDepositData` | `boolean` | [verification/common.ts:368](https://github.com/ObolNetwork/obol-sdk/blob/5137bd5c4ded55a50234f19135ea3a5bfeab4d47/src/verification/common.ts#L368) |
| `depositDataMsg` | `Uint8Array` | [verification/common.ts:368](https://github.com/ObolNetwork/obol-sdk/blob/5137bd5c4ded55a50234f19135ea3a5bfeab4d47/src/verification/common.ts#L368) |
