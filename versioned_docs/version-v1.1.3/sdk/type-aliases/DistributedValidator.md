> **DistributedValidator**: `object`

Required deposit data for validator activation

## Type declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `distributed_public_key` | `string` | The public key of the distributed validator. | types.ts:215 |
| `public_shares` | `string`[] | The public key of the node distributed validator share. | types.ts:218 |
| `deposit_data`? | `Partial`\<[`DepositData`](DepositData.md)\> | The deposit data for activating the DV. | types.ts:221 |
| `partial_deposit_data`? | `Partial`\<[`DepositData`](DepositData.md)\>[] | The deposit data with partial amounts or full amount for activating the DV. | types.ts:224 |
| `builder_registration`? | [`BuilderRegistration`](BuilderRegistration.md) | pre-generated signed validator builder registration to be sent to builder network. | types.ts:227 |

## Defined in

types.ts:213
