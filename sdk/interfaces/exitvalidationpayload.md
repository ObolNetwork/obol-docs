# ExitValidationPayload

Defined in: [types.ts:487](https://github.com/ObolNetwork/obol-sdk/blob/5137bd5c4ded55a50234f19135ea3a5bfeab4d47/src/types.ts#L487)

Represents the overall exit payload structure for exit validation.

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="partial_exits"></a> `partial_exits` | [`ExitValidationBlob`](ExitValidationBlob.md)[] | Array of partial exits for validators. | [types.ts:489](https://github.com/ObolNetwork/obol-sdk/blob/5137bd5c4ded55a50234f19135ea3a5bfeab4d47/src/types.ts#L489) |
| <a id="share_idx"></a> `share_idx` | `number` | Operator's share index (1-based). | [types.ts:492](https://github.com/ObolNetwork/obol-sdk/blob/5137bd5c4ded55a50234f19135ea3a5bfeab4d47/src/types.ts#L492) |
| <a id="signature"></a> `signature` | `string` | Signature of the ExitValidationPayload by the operator. | [types.ts:495](https://github.com/ObolNetwork/obol-sdk/blob/5137bd5c4ded55a50234f19135ea3a5bfeab4d47/src/types.ts#L495) |
