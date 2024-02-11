---
id: "Client"
title: "Class: Client"
sidebar_label: "Client"
sidebar_position: 0
custom_edit_url: null
---

Obol sdk Client can be used for creating, managing and activating distributed validators.

## Hierarchy

- `Base`

  ↳ **`Client`**

## Constructors

### constructor

• **new Client**(`config`, `signer?`): [`Client`](Client)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config` | `Object` |  |
| `config.baseUrl?` | `string` | - |
| `config.chainId?` | `number` | - |
| `signer?` | `Signer` | ethersJS Signer |

#### Returns

[`Client`](Client)

Obol-SDK Client instance

An example of how to instantiate obol-sdk Client:
[obolClient](https://github.com/ObolNetwork/obol-sdk-examples/blob/main/TS-Example/index.ts#L29)

#### Overrides

Base.constructor

#### Defined in

index.ts:27

## Properties

### baseUrl

• **baseUrl**: `string`

#### Inherited from

Base.baseUrl

#### Defined in

base.ts:11

___

### chainId

• **chainId**: `number`

#### Inherited from

Base.chainId

#### Defined in

base.ts:12

___

### fork\_version

• **fork\_version**: `string`

#### Inherited from

Base.fork\_version

#### Defined in

base.ts:13

___

### signer

• `Private` **signer**: `undefined` \| `Signer`

#### Defined in

index.ts:17

## Methods

### createClusterDefinition

▸ **createClusterDefinition**(`newCluster`): `Promise`<`string`\>

Creates a cluster definition which contains cluster configuration.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newCluster` | [`ClusterPayload`](../interfaces/ClusterPayload) | The new unique cluster. |

#### Returns

`Promise`<`string`\>

config_hash.

**`Throws`**

On duplicate entries, missing or wrong cluster keys.

An example of how to use createClusterDefinition:
[createObolCluster](https://github.com/ObolNetwork/obol-sdk-examples/blob/main/TS-Example/index.ts)

#### Defined in

index.ts:42

___

### getClusterDefinition

▸ **getClusterDefinition**(`configHash`): `Promise`<[`ClusterDefintion`](../interfaces/ClusterDefintion)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `configHash` | `string` |

#### Returns

`Promise`<[`ClusterDefintion`](../interfaces/ClusterDefintion)\>

The  cluster definition for config hash

**`Throws`**

On not found config hash.

An example of how to use getClusterDefinition:
[getObolClusterDefinition](https://github.com/ObolNetwork/obol-sdk-examples/blob/main/TS-Example/index.ts)

#### Defined in

index.ts:132

___

### getClusterLock

▸ **getClusterLock**(`configHash`): `Promise`<[`ClusterLock`](../interfaces/ClusterLock)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `configHash` | `string` |

#### Returns

`Promise`<[`ClusterLock`](../interfaces/ClusterLock)\>

The matched cluster details (lock) from DB

**`Throws`**

On not found cluster definition or lock.

An example of how to use getClusterLock:
[getObolClusterLock](https://github.com/ObolNetwork/obol-sdk-examples/blob/main/TS-Example/index.ts)

#### Defined in

index.ts:148

___

### request

▸ **request**<`T`\>(`endpoint`, `options?`): `Promise`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpoint` | `string` |
| `options?` | `RequestInit` |

#### Returns

`Promise`<`T`\>

#### Inherited from

Base.request

#### Defined in

base.ts:23

___

### updateClusterDefinition

▸ **updateClusterDefinition**(`operatorPayload`, `configHash`): `Promise`<[`ClusterDefintion`](../interfaces/ClusterDefintion)\>

Approves joining a cluster with specific configuration.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `operatorPayload` | [`OperatorPayload`](../modules#operatorpayload) | The operator data including signatures. |
| `configHash` | `string` | The config hash of the cluster which the operator confirms joining to. |

#### Returns

`Promise`<[`ClusterDefintion`](../interfaces/ClusterDefintion)\>

The cluster definition.

**`Throws`**

On unauthorized, duplicate entries, missing keys, not found cluster or invalid data.

An example of how to use updateClusterDefinition:
[updateClusterDefinition](https://github.com/ObolNetwork/obol-sdk-examples/blob/main/TS-Example/index.ts)

#### Defined in

index.ts:93
