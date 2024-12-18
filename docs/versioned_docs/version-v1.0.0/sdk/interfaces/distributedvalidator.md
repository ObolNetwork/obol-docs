# DistributedValidator

Required deposit data for validator activation

### Properties

| Property                 | Type                                            | Description                                                                        |
| ------------------------ | ----------------------------------------------- | ---------------------------------------------------------------------------------- |
| `distributed_public_key` | `string`                                        | The public key of the distributed validator.                                       |
| `public_shares`          | `string`\[]                                     | The public key of the node distributed validator share.                            |
| `deposit_data?`          | `Partial` <[`DepositData`](depositdata.md)>     | The deposit data for activating the DV.                                            |
| `partial_deposit_data?`  | `Partial` <[`DepositData`](depositdata.md)>\[]  | The deposit data with partial amounts or full amount for activating the DV.        |
| `builder_registration?`  | [`BuilderRegistration`](builderregistration.md) | pre-generated signed validator builder registration to be sent to builder network. |
