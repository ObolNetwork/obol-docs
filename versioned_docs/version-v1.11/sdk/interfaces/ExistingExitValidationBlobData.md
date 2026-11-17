---
sidebar_label: "ExistingExitValidationBlobData"
slug: /sdk/interfaces/existingexitvalidationblobdata
---

# ExistingExitValidationBlobData

Defined in: [types.ts:585](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/types.ts#L585)

Represents the data structure for an already existing exit blob for exit validation.

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="public_key"></a> `public_key` | `string` | The BLS public key of the validator in hex format | [types.ts:589](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/types.ts#L589) |
| <a id="epoch"></a> `epoch` | `string` | The epoch number when the exit is scheduled to occur | [types.ts:593](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/types.ts#L593) |
| <a id="validator_index"></a> `validator_index` | `string` | The unique index of the validator in the beacon chain | [types.ts:597](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/types.ts#L597) |
| <a id="shares_exit_data"></a> `shares_exit_data` | `Record`\<`string`, \{ `partial_exit_signature`: `string`; \}\>[] | Array of distributed validator shares exit data, where each share contains the partial exit signature from each operator in the cluster | [types.ts:602](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/types.ts#L602) |
