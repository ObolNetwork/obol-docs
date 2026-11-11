---
sidebar_label: "TransactionSentInfo"
slug: /sdk/type-aliases/transactionsentinfo
---

# TransactionSentInfo

> **TransactionSentInfo** = `object`

Defined in: [types.ts:447](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/types.ts#L447)

Passed to [WriteOptions.onSent](WriteOptions.md#onsent) for each transaction a write method
broadcasts, before its receipt is awaited.

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="hash"></a> `hash` | `string` | Hash returned by the wallet. For a contract wallet (e.g. a Safe) this is the wallet's own transaction hash, not the hash it executes under. | [types.ts:452](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/types.ts#L452) |
| <a id="index"></a> `index` | `number` | Position of this transaction among those sent by the call (from 0). | [types.ts:454](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/types.ts#L454) |
| <a id="contractwallet"></a> `contractWallet` | `boolean` | Whether the signer is a contract wallet (e.g. a Safe). | [types.ts:456](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/types.ts#L456) |
