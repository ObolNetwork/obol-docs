---
sidebar_label: "OVMTotalSplitPayload"
slug: /sdk/type-aliases/ovmtotalsplitpayload
---

# OVMTotalSplitPayload

> **OVMTotalSplitPayload** = [`OVMBaseSplitPayload`](OVMBaseSplitPayload.md) & `object`

Defined in: [types.ts:255](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/types.ts#L255)

Input payload for [ObolSplits.createValidatorManagerAndTotalSplit](../classes/ObolSplits.md#createvalidatormanagerandtotalsplit).
Both principal and rewards are split among recipients.

## Type Declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `principalSplitRecipients` | [`SplitV2Recipient`](SplitV2Recipient.md)[] | Principal recipients addresses and splits (array for total split scenario). | [types.ts:257](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/types.ts#L257) |
