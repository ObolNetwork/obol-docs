# DistributedValidator

> **DistributedValidator**: `Object`

Distributed Validator

### Type declaration

| Member                   | Type                                            | Description                                                                        |
| ------------------------ | ----------------------------------------------- | ---------------------------------------------------------------------------------- |
| `builder_registration`   | [`BuilderRegistration`](builderregistration.md) | pre-generated signed validator builder registration to be sent to builder network. |
| `deposit_data`           | `Partial`< [`DepositData`](depositdata.md) >    | The required deposit data for activating the DV.                                   |
| `distributed_public_key` | `string`                                        | The public key of the distributed validator.                                       |
| `public_shares`          | `string`\[]                                     | The public key of the node distributed validator share.                            |

### Source

types.ts:176
