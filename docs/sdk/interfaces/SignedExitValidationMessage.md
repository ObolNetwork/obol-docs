---
sidebar_label: "SignedExitValidationMessage"
slug: /sdk/interfaces/signedexitvalidationmessage
---

# SignedExitValidationMessage

Defined in: [types.ts:549](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/types.ts#L549)

Represents a signed exit message for exit validation.

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="message"></a> `message` | [`ExitValidationMessage`](ExitValidationMessage.md) | The exit message containing epoch and validator index. | [types.ts:551](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/types.ts#L551) |
| <a id="signature"></a> `signature` | `string` | BLS signature of the exit message. | [types.ts:554](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/types.ts#L554) |
