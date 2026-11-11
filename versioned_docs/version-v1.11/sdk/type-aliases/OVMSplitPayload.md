---
sidebar_label: "OVMSplitPayload"
slug: /sdk/type-aliases/ovmsplitpayload
---

# OVMSplitPayload

> **OVMSplitPayload** = [`OVMRewardsSplitPayload`](OVMRewardsSplitPayload.md) \| [`OVMTotalSplitPayload`](OVMTotalSplitPayload.md)

Defined in: [types.ts:265](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/types.ts#L265)

Union type covering both OVM split scenarios.
Discriminate by checking for `principalRecipient` (rewards-only) vs
`principalSplitRecipients` (total split).
