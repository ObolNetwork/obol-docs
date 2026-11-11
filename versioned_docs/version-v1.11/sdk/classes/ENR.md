---
sidebar_label: "ENR"
slug: /sdk/classes/enr
---

# ENR

Defined in: node\_modules/@chainsafe/enr/lib/enr.d.ts:77

Ethereum Name Record

https://eips.ethereum.org/EIPS/eip-778

`ENR` is used to read serialized ENRs and may not be modified once created.

## Extends

- `BaseENR`

## Properties

| Property | Type | Description | Overrides | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="kvs"></a> `kvs` | `ReadonlyMap`\<`string`, `ENRValue`\> | Raw enr key-values | `BaseENR.kvs` | node\_modules/@chainsafe/enr/lib/enr.d.ts:78 |
| <a id="seq"></a> `seq` | `bigint` | Sequence number | `BaseENR.seq` | node\_modules/@chainsafe/enr/lib/enr.d.ts:79 |
| <a id="nodeid"></a> `nodeId` | `string` | Node identifier | `BaseENR.nodeId` | node\_modules/@chainsafe/enr/lib/enr.d.ts:81 |

## Accessors

### id

#### Get Signature

> **get** **id**(): `IDScheme`

Defined in: node\_modules/@chainsafe/enr/lib/enr.d.ts:53

enr identity scheme

##### Returns

`IDScheme`

#### Inherited from

`BaseENR.id`
