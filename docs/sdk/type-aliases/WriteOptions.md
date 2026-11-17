---
sidebar_label: "WriteOptions"
slug: /sdk/type-aliases/writeoptions
---

# WriteOptions

> **WriteOptions** = `object`

Defined in: [types.ts:460](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/types.ts#L460)

Options accepted by the SDK methods that send transactions.

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="onsent"></a> `onSent?` | (`info`) => `void` | Called as soon as each transaction is broadcast, before waiting for it to be mined, so the hash can be shown or stored even if waiting fails. Errors thrown by the callback are ignored. | [types.ts:466](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/types.ts#L466) |
