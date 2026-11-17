---
sidebar_label: "LockDepositData"
slug: /sdk/type-aliases/lockdepositdata
---

# LockDepositData

> **LockDepositData** = `object`

Defined in: [deposits/lockDeposits.ts:31](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/deposits/lockDeposits.ts#L31)

Deposit data extracted from a cluster lock.

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="lockhash"></a> `lockHash` | `string` | Hash of the lock the deposits were read from. | [deposits/lockDeposits.ts:33](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/deposits/lockDeposits.ts#L33) |
| <a id="amounts"></a> `amounts` | `string`[] | Distinct deposit amounts present in the lock, in wei, ascending. | [deposits/lockDeposits.ts:36](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/deposits/lockDeposits.ts#L36) |
| <a id="depositsbyamount"></a> `depositsByAmount` | `Record`\<`string`, [`ValidatorDeposit`](ValidatorDeposit.md)[]\> | Deposits grouped by amount (wei): one entry per validator that has a deposit of that amount, in lock order. | [deposits/lockDeposits.ts:42](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/deposits/lockDeposits.ts#L42) |
| <a id="deposits"></a> `deposits?` | [`ValidatorDeposit`](ValidatorDeposit.md)[] | One deposit per validator for the requested `amount`, or for the lock's only amount. `undefined` when the lock has several amounts and none was requested; pick one from `amounts` / `depositsByAmount`. | [deposits/lockDeposits.ts:49](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/deposits/lockDeposits.ts#L49) |
