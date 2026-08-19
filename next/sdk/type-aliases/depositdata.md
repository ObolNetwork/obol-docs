# DepositData

> **DepositData** = `object`

Defined in: [types.ts:301](https://github.com/ObolNetwork/obol-sdk/blob/5137bd5c4ded55a50234f19135ea3a5bfeab4d47/src/types.ts#L301)

Required deposit data for validator activation

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="pubkey"></a> `pubkey` | `string` | The public key of the distributed validator. | [types.ts:303](https://github.com/ObolNetwork/obol-sdk/blob/5137bd5c4ded55a50234f19135ea3a5bfeab4d47/src/types.ts#L303) |
| <a id="withdrawal_credentials"></a> `withdrawal_credentials` | `string` | The 0x01 withdrawal address of the DV. | [types.ts:306](https://github.com/ObolNetwork/obol-sdk/blob/5137bd5c4ded55a50234f19135ea3a5bfeab4d47/src/types.ts#L306) |
| <a id="amount"></a> `amount` | `string` | 32 ethers. | [types.ts:309](https://github.com/ObolNetwork/obol-sdk/blob/5137bd5c4ded55a50234f19135ea3a5bfeab4d47/src/types.ts#L309) |
| <a id="deposit_data_root"></a> `deposit_data_root` | `string` | A checksum for DepositData fields . | [types.ts:312](https://github.com/ObolNetwork/obol-sdk/blob/5137bd5c4ded55a50234f19135ea3a5bfeab4d47/src/types.ts#L312) |
| <a id="signature"></a> `signature` | `string` | BLS signature of the deposit message. | [types.ts:315](https://github.com/ObolNetwork/obol-sdk/blob/5137bd5c4ded55a50234f19135ea3a5bfeab4d47/src/types.ts#L315) |
