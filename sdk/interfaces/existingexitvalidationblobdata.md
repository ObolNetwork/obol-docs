# ExistingExitValidationBlobData

Defined in: [types.ts:501](https://github.com/ObolNetwork/obol-sdk/blob/5137bd5c4ded55a50234f19135ea3a5bfeab4d47/src/types.ts#L501)

Represents the data structure for an already existing exit blob for exit validation.

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="public_key"></a> `public_key` | `string` | The BLS public key of the validator in hex format | [types.ts:505](https://github.com/ObolNetwork/obol-sdk/blob/5137bd5c4ded55a50234f19135ea3a5bfeab4d47/src/types.ts#L505) |
| <a id="epoch"></a> `epoch` | `string` | The epoch number when the exit is scheduled to occur | [types.ts:509](https://github.com/ObolNetwork/obol-sdk/blob/5137bd5c4ded55a50234f19135ea3a5bfeab4d47/src/types.ts#L509) |
| <a id="validator_index"></a> `validator_index` | `string` | The unique index of the validator in the beacon chain | [types.ts:513](https://github.com/ObolNetwork/obol-sdk/blob/5137bd5c4ded55a50234f19135ea3a5bfeab4d47/src/types.ts#L513) |
| <a id="shares_exit_data"></a> `shares_exit_data` | `Record`\<`string`, \{ `partial_exit_signature`: `string`; \}\>[] | Array of distributed validator shares exit data, where each share contains the partial exit signature from each operator in the cluster | [types.ts:518](https://github.com/ObolNetwork/obol-sdk/blob/5137bd5c4ded55a50234f19135ea3a5bfeab4d47/src/types.ts#L518) |
