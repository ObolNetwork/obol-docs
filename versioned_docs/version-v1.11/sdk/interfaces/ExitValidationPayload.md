---
sidebar_label: "ExitValidationPayload"
slug: /sdk/interfaces/exitvalidationpayload
---

# ExitValidationPayload

Defined in: [types.ts:571](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/types.ts#L571)

Represents the overall exit payload structure for exit validation.

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="partial_exits"></a> `partial_exits` | [`ExitValidationBlob`](ExitValidationBlob.md)[] | Array of partial exits for validators. | [types.ts:573](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/types.ts#L573) |
| <a id="share_idx"></a> `share_idx` | `number` | Operator's share index (1-based). | [types.ts:576](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/types.ts#L576) |
| <a id="signature"></a> `signature` | `string` | Signature of the ExitValidationPayload by the operator. | [types.ts:579](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/types.ts#L579) |
