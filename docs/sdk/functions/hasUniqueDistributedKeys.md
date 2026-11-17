---
sidebar_label: "hasUniqueDistributedKeys"
slug: /sdk/functions/hasuniquedistributedkeys
---

# hasUniqueDistributedKeys()

> **hasUniqueDistributedKeys**(`clusterLock`): `boolean`

Defined in: [verification/common.ts:613](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/verification/common.ts#L613)

Returns true iff every validator's distributed_public_key is unique across
the lock. Normalizes hex case (charon emits lowercase today, but mixed-case
copies shouldn't sneak through). Exported so it can be unit-tested
independently of the rest of validateClusterLock — a tampered lock that
trips a downstream check (signature_aggregate, node sigs) cannot isolate
this branch.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `clusterLock` | [`ClusterLock`](../type-aliases/ClusterLock.md) |

## Returns

`boolean`
