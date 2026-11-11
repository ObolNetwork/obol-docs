---
sidebar_label: "clusterConfigOrDefinitionHash"
slug: /sdk/functions/clusterconfigordefinitionhash
---

# clusterConfigOrDefinitionHash()

> **clusterConfigOrDefinitionHash**(`cluster`, `configOnly`): `string`

Defined in: [verification/common.ts:74](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/verification/common.ts#L74)

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `cluster` | [`ClusterDefinition`](../interfaces/ClusterDefinition.md) | The cluster configuration or the cluster definition |
| `configOnly` | `boolean` | a boolean to indicate config hash or definition hash |

## Returns

`string`

The config hash or the definition hash in of the corresponding cluster
