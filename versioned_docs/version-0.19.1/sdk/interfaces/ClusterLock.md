---
id: "ClusterLock"
title: "Interface: ClusterLock"
sidebar_label: "ClusterLock"
sidebar_position: 0
custom_edit_url: null
---

Cluster Lock (Cluster Details after DKG is complete)

## Properties

### cluster\_definition

• **cluster\_definition**: [`ClusterDefintion`](ClusterDefintion)

The cluster definition.

#### Defined in

types.ts:197

___

### distributed\_validators

• **distributed\_validators**: [`DistributedValidator`](../modules#distributedvalidator)[]

The cluster distributed validators.

#### Defined in

types.ts:200

___

### lock\_hash

• **lock\_hash**: `string`

The hash of the cluster lock.

#### Defined in

types.ts:206

___

### node\_signatures

• **node\_signatures**: `string`[]

Node Signature for the lock hash by the node secp256k1 key.

#### Defined in

types.ts:209

___

### signature\_aggregate

• **signature\_aggregate**: `string`

The cluster bls signature aggregate.

#### Defined in

types.ts:203
