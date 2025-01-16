---
sidebar_position: 6
sidebar_label: Client
description: The client object of the Obol SDK
---

# Client

Obol SDK `Client` can be used for creating, managing and activating distributed validators.

### Extends

* `Base`

### Constructors

#### new Client(config, signer)

> **new Client**(`config`, `signer`?): [`Client`](client.md)

**Parameters**

| Parameter         | Type     | Description     |
| ----------------- | -------- | --------------- |
| `config`          | `Object` |                 |
| `config.baseUrl`? | `string` | -               |
| `config.chainId`? | `number` | -               |
| `signer`?         | `Signer` | ethersJS Signer |

**Returns**

[`Client`](client.md)

Obol-SDK Client instance

An example of how to instantiate obol-sdk Client: [obolClient](https://github.com/ObolNetwork/obol-sdk-examples/blob/main/TS-Example/index.ts#L29)

**Overrides**

`Base.constructor`

**Source**

index.ts:27

### Properties

| Property       | Modifier  | Type                    | Inherited from      |
| -------------- | --------- | ----------------------- | ------------------- |
| `baseUrl`      | `public`  | `string`                | `Base.baseUrl`      |
| `chainId`      | `public`  | `number`                | `Base.chainId`      |
| `fork_version` | `public`  | `string`                | `Base.fork_version` |
| `signer`       | `private` | `undefined` \| `Signer` | -                   |

### Methods

#### createClusterDefinition()

> **createClusterDefinition**(`newCluster`): `Promise`< `string` >

Creates a cluster definition which contains cluster configuration.

**Parameters**

| Parameter    | Type                                                | Description             |
| ------------ | --------------------------------------------------- | ----------------------- |
| `newCluster` | [`ClusterPayload`](../interfaces/clusterpayload.md) | The new unique cluster. |

**Returns**

`Promise`< `string` >

config\_hash.

**Throws**

On duplicate entries, missing or wrong cluster keys.

An example of how to use createClusterDefinition: [createObolCluster](https://github.com/ObolNetwork/obol-sdk-examples/blob/main/TS-Example/index.ts)

**Source**

index.ts:42

***

#### getClusterDefinition()

> **getClusterDefinition**(`configHash`): `Promise`< [`ClusterDefintion`](../interfaces/clusterdefintion.md) >

**Parameters**

| Parameter    | Type     |
| ------------ | -------- |
| `configHash` | `string` |

**Returns**

`Promise`< [`ClusterDefintion`](../interfaces/clusterdefintion.md) >

The cluster definition for config hash

**Throws**

On not found config hash.

An example of how to use getClusterDefinition: [getObolClusterDefinition](https://github.com/ObolNetwork/obol-sdk-examples/blob/main/TS-Example/index.ts)

**Source**

index.ts:132

***

#### getClusterLock()

> **getClusterLock**(`configHash`): `Promise`< [`ClusterLock`](../interfaces/clusterlock.md) >

**Parameters**

| Parameter    | Type     |
| ------------ | -------- |
| `configHash` | `string` |

**Returns**

`Promise`< [`ClusterLock`](../interfaces/clusterlock.md) >

The matched cluster details (lock) from DB

**Throws**

On not found cluster definition or lock.

An example of how to use getClusterLock: [getObolClusterLock](https://github.com/ObolNetwork/obol-sdk-examples/blob/main/TS-Example/index.ts)

**Source**

index.ts:148

***

#### request()

> **`protected`** **request**< `T`>(`endpoint`, `options`?): `Promise`< `T` >

**Type parameters**

| Type parameter |
| -------------- |
| `T`            |

**Parameters**

| Parameter  | Type          |
| ---------- | ------------- |
| `endpoint` | `string`      |
| `options`? | `RequestInit` |

**Returns**

`Promise`< `T` >

**Inherited from**

`Base.request`

**Source**

base.ts:23

***

#### updateClusterDefinition()

> **updateClusterDefinition**(`operatorPayload`, `configHash`): `Promise`< [`ClusterDefintion`](../interfaces/clusterdefintion.md) >

Approves joining a cluster with specific configuration.

**Parameters**

| Parameter         | Type                                                    | Description                                                            |
| ----------------- | ------------------------------------------------------- | ---------------------------------------------------------------------- |
| `operatorPayload` | [`OperatorPayload`](../type-aliases/operatorpayload.md) | The operator data including signatures.                                |
| `configHash`      | `string`                                                | The config hash of the cluster which the operator confirms joining to. |

**Returns**

`Promise`< [`ClusterDefintion`](../interfaces/clusterdefintion.md) >

The cluster definition.

**Throws**

On unauthorized, duplicate entries, missing keys, not found cluster or invalid data.

An example of how to use updateClusterDefinition: [updateClusterDefinition](https://github.com/ObolNetwork/obol-sdk-examples/blob/main/TS-Example/index.ts)

**Source**

index.ts:93
