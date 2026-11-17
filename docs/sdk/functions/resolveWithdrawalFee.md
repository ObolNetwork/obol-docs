---
sidebar_label: "resolveWithdrawalFee"
slug: /sdk/functions/resolvewithdrawalfee
---

# resolveWithdrawalFee()

> **resolveWithdrawalFee**(`__namedParameters`): `bigint`

Defined in: [withdrawalFee.ts:48](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/withdrawalFee.ts#L48)

Returns the total fee (wei) to send for `requestCount` withdrawal requests.

Without `requestedFee`, returns `defaultMultiplier` (default 2) times the
current fee per request. Headroom only makes sense where the excess is
refunded (the OVM refunds it; the EIP-7002 contract itself does not). With
`requestedFee` (a total for all requests), returns it unchanged after
checking it covers the current fee and is not more than
max(10x the current fee, 1 gwei) per request.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | \{ `currentFee`: `bigint`; `requestedFee?`: `string`; `requestCount?`: `number`; `defaultMultiplier?`: `bigint`; \} |
| `__namedParameters.currentFee` | `bigint` |
| `__namedParameters.requestedFee?` | `string` |
| `__namedParameters.requestCount?` | `number` |
| `__namedParameters.defaultMultiplier?` | `bigint` |

## Returns

`bigint`
