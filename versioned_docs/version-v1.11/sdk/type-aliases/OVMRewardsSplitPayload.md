---
sidebar_label: "OVMRewardsSplitPayload"
slug: /sdk/type-aliases/ovmrewardssplitpayload
---

# OVMRewardsSplitPayload

> **OVMRewardsSplitPayload** = [`OVMBaseSplitPayload`](OVMBaseSplitPayload.md) & `object`

Defined in: [types.ts:246](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/types.ts#L246)

Input payload for [ObolSplits.createValidatorManagerAndRewardsSplit](../classes/ObolSplits.md#createvalidatormanagerandrewardssplit).
Principal goes to a single address; rewards are split among recipients.

## Type Declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `principalRecipient` | `string` | Principal recipient address (single address for rewards-only split). | [types.ts:248](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/types.ts#L248) |
