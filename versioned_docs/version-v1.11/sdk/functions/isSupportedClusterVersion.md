---
sidebar_label: "isSupportedClusterVersion"
slug: /sdk/functions/issupportedclusterversion
---

# isSupportedClusterVersion()

> **isSupportedClusterVersion**(`version`): `boolean`

Defined in: [verification/common.ts:625](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/verification/common.ts#L625)

Whether `version` is a valid semver at or above
[MIN\_SUPPORTED\_CLUSTER\_VERSION](../variables/MIN_SUPPORTED_CLUSTER_VERSION.md). Legacy (< v1.10.0) definitions are
not created or joined by the SDK; existing legacy locks still validate.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `version` | `unknown` |

## Returns

`boolean`
