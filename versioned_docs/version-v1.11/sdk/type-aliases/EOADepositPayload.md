---
sidebar_label: "EOADepositPayload"
slug: /sdk/type-aliases/eoadepositpayload
---

# EOADepositPayload

> **EOADepositPayload** = `object`

Defined in: [types.ts:833](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/types.ts#L833)

Input payload for [EOA.deposit](../classes/EOA.md#deposit).
Batch-deposits validators to the beacon chain via the Pier Two batch deposit contract.

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="deposits"></a> `deposits` | [`ValidatorDeposit`](ValidatorDeposit.md)[] | Array of deposit objects | [types.ts:835](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/types.ts#L835) |
| <a id="expectedwithdrawaladdress"></a> `expectedWithdrawalAddress?` | `string` | If set, every deposit's withdrawal credentials must be 0x01 or 0x02 credentials for this address. | [types.ts:841](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/types.ts#L841) |
| <a id="kind"></a> `kind?` | [`DepositKind`](DepositKind.md) | What the deposits are. `'deposit'` (the default): deposits to new validators, which need a valid BLS signature for this chain and the expected withdrawal credentials; an all-zero signature is refused with `DEPOSIT_LOOKS_LIKE_TOP_UP`. `'topUp'`: every deposit tops up a validator that already exists on the beacon chain (where the signature is not checked): no BLS check, the expected or all-zero withdrawal credentials, and up to 2048 ETH per deposit. | [types.ts:852](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/types.ts#L852) |
