# DistributedValidator

> **DistributedValidator** = `object`

Defined in: [types.ts:321](https://github.com/ObolNetwork/obol-sdk/blob/5137bd5c4ded55a50234f19135ea3a5bfeab4d47/src/types.ts#L321)

Required deposit data for validator activation

## Properties

| Property                 | Type                                            | Description                                                                        | Defined in                                                                                                              |
| ------------------------ | ----------------------------------------------- | ---------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `distributed_public_key` | `string`                                        | The public key of the distributed validator.                                       | [types.ts:323](https://github.com/ObolNetwork/obol-sdk/blob/5137bd5c4ded55a50234f19135ea3a5bfeab4d47/src/types.ts#L323) |
| `public_shares`          | `string`\[]                                     | The public key of the node distributed validator share.                            | [types.ts:326](https://github.com/ObolNetwork/obol-sdk/blob/5137bd5c4ded55a50234f19135ea3a5bfeab4d47/src/types.ts#L326) |
| `deposit_data?`          | `Partial`<[`DepositData`](DepositData.md)>      | The deposit data for activating the DV.                                            | [types.ts:329](https://github.com/ObolNetwork/obol-sdk/blob/5137bd5c4ded55a50234f19135ea3a5bfeab4d47/src/types.ts#L329) |
| `partial_deposit_data?`  | `Partial`<[`DepositData`](DepositData.md)>\[]   | The deposit data with partial amounts or full amount for activating the DV.        | [types.ts:332](https://github.com/ObolNetwork/obol-sdk/blob/5137bd5c4ded55a50234f19135ea3a5bfeab4d47/src/types.ts#L332) |
| `builder_registration?`  | [`BuilderRegistration`](BuilderRegistration.md) | pre-generated signed validator builder registration to be sent to builder network. | [types.ts:335](https://github.com/ObolNetwork/obol-sdk/blob/5137bd5c4ded55a50234f19135ea3a5bfeab4d47/src/types.ts#L335) |
