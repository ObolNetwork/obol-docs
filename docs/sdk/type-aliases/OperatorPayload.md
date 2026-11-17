---
sidebar_label: "OperatorPayload"
slug: /sdk/type-aliases/operatorpayload
---

# OperatorPayload

> **OperatorPayload** = `Partial`\<[`ClusterOperator`](ClusterOperator.md)\> & `Required`\<`Pick`\<[`ClusterOperator`](ClusterOperator.md), `"enr"`\>\>

Defined in: [types.ts:70](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/types.ts#L70)

Payload an operator provides when joining a cluster via
[Client.acceptClusterDefinition](../classes/Client.md#acceptclusterdefinition).

Requires at minimum `enr` (Ethereum Node Record). `version` is optional:
when omitted it is taken from the cluster definition; when given it must
match the definition's version.
Other `ClusterOperator` fields are optional overrides.
