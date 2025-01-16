> **DepositData**: `object`

Required deposit data for validator activation

## Type declaration

| Member | Type | Description |
| :------ | :------ | :------ |
| `pubkey` | `string` | The public key of the distributed validator. |
| `withdrawal_credentials` | `string` | The 0x01 withdrawal address of the DV. |
| `amount` | `string` | 32 ethers. |
| `deposit_data_root` | `string` | A checksum for DepositData fields . |
| `signature` | `string` | BLS signature of the deposit message. |

## Source

types.ts:154
