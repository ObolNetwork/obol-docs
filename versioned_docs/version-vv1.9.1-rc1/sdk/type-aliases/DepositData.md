> **DepositData**: `object`

Required deposit data for validator activation

## Type declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `pubkey` | `string` | The public key of the distributed validator. | types.ts:195 |
| `withdrawal_credentials` | `string` | The 0x01 withdrawal address of the DV. | types.ts:198 |
| `amount` | `string` | 32 ethers. | types.ts:201 |
| `deposit_data_root` | `string` | A checksum for DepositData fields . | types.ts:204 |
| `signature` | `string` | BLS signature of the deposit message. | types.ts:207 |

## Defined in

types.ts:193
