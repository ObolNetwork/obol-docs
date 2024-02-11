---
id: "ClusterDefintion"
title: "Interface: ClusterDefintion"
sidebar_label: "ClusterDefintion"
sidebar_position: 0
custom_edit_url: null
---

Cluster Definition

## Hierarchy

- [`ClusterPayload`](ClusterPayload)

  ↳ **`ClusterDefintion`**

## Properties

### config\_hash

• **config\_hash**: `string`

The cluster configuration hash.

#### Defined in

types.ts:110

___

### creator

• **creator**: [`ClusterCreator`](../modules#clustercreator)

The creator of the cluster.

#### Defined in

types.ts:92

___

### definition\_hash

• `Optional` **definition\_hash**: `string`

The hash of the cluster definition.

#### Defined in

types.ts:119

___

### dkg\_algorithm

• **dkg\_algorithm**: `string`

The cluster dkg algorithm.

#### Defined in

types.ts:98

___

### fork\_version

• **fork\_version**: `string`

The cluster fork version.

#### Defined in

types.ts:101

___

### name

• **name**: `string`

The cluster name.

#### Inherited from

[ClusterPayload](ClusterPayload).[name](ClusterPayload#name)

#### Defined in

types.ts:77

___

### num\_validators

• **num\_validators**: `number`

The number of distributed validators in the cluster.

#### Defined in

types.ts:116

___

### operators

• **operators**: [`ClusterOperator`](../modules#clusteroperator)[]

The cluster nodes operators addresses.

#### Inherited from

[ClusterPayload](ClusterPayload).[operators](ClusterPayload#operators)

#### Defined in

types.ts:80

___

### threshold

• **threshold**: `number`

The distributed validator threshold.

#### Defined in

types.ts:113

___

### timestamp

• **timestamp**: `string`

The cluster creation timestamp.

#### Defined in

types.ts:107

___

### uuid

• **uuid**: `string`

The cluster uuid.

#### Defined in

types.ts:104

___

### validators

• **validators**: [`ClusterValidator`](../modules#clustervalidator)[]

The clusters validators information.

#### Inherited from

[ClusterPayload](ClusterPayload).[validators](ClusterPayload#validators)

#### Defined in

types.ts:83

___

### version

• **version**: `string`

The cluster configuration version.

#### Defined in

types.ts:95
