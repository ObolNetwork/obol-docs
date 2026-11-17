---
sidebar_label: "OVMDepositPayload"
slug: /sdk/type-aliases/ovmdepositpayload
---

# OVMDepositPayload

> **OVMDepositPayload** = `object`

Defined in: [types.ts:810](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/types.ts#L810)

Input payload for [ObolSplits.deposit](../classes/ObolSplits.md#deposit).
Deposits one or more validators to an OVM contract.

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="ovmaddress"></a> `ovmAddress` | `string` | OVM contract address | [types.ts:812](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/types.ts#L812) |
| <a id="deposits"></a> `deposits` | [`ValidatorDeposit`](ValidatorDeposit.md)[] | Array of deposit objects | [types.ts:815](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/types.ts#L815) |
| <a id="kind"></a> `kind?` | [`DepositKind`](DepositKind.md) | What the deposits are. `'deposit'` (the default): deposits to new validators, which need a valid BLS signature for this chain and the expected withdrawal credentials; an all-zero signature is refused with `DEPOSIT_LOOKS_LIKE_TOP_UP`. `'topUp'`: every deposit tops up a validator that already exists on the beacon chain (where the signature is not checked): no BLS check, the expected or all-zero withdrawal credentials, and up to 2048 ETH per deposit. | [types.ts:826](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/types.ts#L826) |
