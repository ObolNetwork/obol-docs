---
sidebar_label: "GetDepositDataOptions"
slug: /sdk/type-aliases/getdepositdataoptions
---

# GetDepositDataOptions

> **GetDepositDataOptions** = `object`

Defined in: [deposits/lockDeposits.ts:11](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/deposits/lockDeposits.ts#L11)

Options for [Client.getDepositData](../classes/Client.md#getdepositdata) and depositDataFromLock.

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="verify"></a> `verify?` | `boolean` | Run the full cluster lock validation (operator signatures, hashes, every deposit signature) before returning deposit data. Defaults to `true`. Validation is CPU-bound and can take seconds for locks with many validators; only turn it off if the lock was already validated. | [deposits/lockDeposits.ts:18](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/deposits/lockDeposits.ts#L18) |
| <a id="amount"></a> `amount?` | `string` | Deposit amount to return, in wei. Required when the lock carries more than one deposit amount per validator (see `amounts` in the result). | [deposits/lockDeposits.ts:24](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/deposits/lockDeposits.ts#L24) |
| <a id="saferpcurl"></a> `safeRpcUrl?` | `string` | RPC URL used to verify Safe wallet signatures in the lock. | [deposits/lockDeposits.ts:27](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/deposits/lockDeposits.ts#L27) |
