Obol sdk Client can be used for creating, managing and activating distributed validators.

## Extends

- `Base`

## Constructors

### new Client(config, signer)

> **new Client**(`config`, `signer`?): [`Client`](Client.md)

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `config` | `Object` | Client configurations |
| `config.baseUrl`? | `string` | obol-api url |
| `config.chainId`? | `number` | Blockchain network ID |
| `signer`? | `Signer` | ethersJS Signer |

#### Returns

[`Client`](Client.md)

Obol-SDK Client instance

An example of how to instantiate obol-sdk Client:
[obolClient](https://github.com/ObolNetwork/obol-sdk-examples/blob/main/TS-Example/index.ts#L29)

#### Overrides

`Base.constructor`

#### Source

index.ts:28

## Methods

### createClusterDefinition()

> **createClusterDefinition**(`newCluster`): `Promise`< `string` \>

Creates a cluster definition which contains cluster configuration.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `newCluster` | [`ClusterPayload`](../type-aliases/ClusterPayload.md) | The new unique cluster. |

#### Returns

`Promise`< `string` \>

config_hash.

#### Throws

On duplicate entries, missing or wrong cluster keys.

An example of how to use createClusterDefinition:
[createObolCluster](https://github.com/ObolNetwork/obol-sdk-examples/blob/main/TS-Example/index.ts)

#### Source

index.ts:43

***

### getClusterDefinition()

> **getClusterDefinition**(`configHash`): `Promise`< [`ClusterDefintion`](../interfaces/ClusterDefintion.md) \>

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `configHash` | `string` | The configuration hash returned in createClusterDefinition |

#### Returns

`Promise`< [`ClusterDefintion`](../interfaces/ClusterDefintion.md) \>

The  cluster definition for config hash

#### Throws

On not found config hash.

An example of how to use getClusterDefinition:
[getObolClusterDefinition](https://github.com/ObolNetwork/obol-sdk-examples/blob/main/TS-Example/index.ts)

#### Source

index.ts:134

***

### getClusterLock()

> **getClusterLock**(`configHash`): `Promise`< [`ClusterLock`](../type-aliases/ClusterLock.md) \>

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `configHash` | `string` | The configuration hash in cluster-definition |

#### Returns

`Promise`< [`ClusterLock`](../type-aliases/ClusterLock.md) \>

The matched cluster details (lock) from DB

#### Throws

On not found cluster definition or lock.

An example of how to use getClusterLock:
[getObolClusterLock](https://github.com/ObolNetwork/obol-sdk-examples/blob/main/TS-Example/index.ts)

#### Source

index.ts:151

***

### updateClusterDefinition()

> **updateClusterDefinition**(`operatorPayload`, `configHash`): `Promise`< [`ClusterDefintion`](../interfaces/ClusterDefintion.md) \>

Approves joining a cluster with specific configuration.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `operatorPayload` | [`OperatorPayload`](../type-aliases/OperatorPayload.md) | The operator data including signatures. |
| `configHash` | `string` | The config hash of the cluster which the operator confirms joining to. |

#### Returns

`Promise`< [`ClusterDefintion`](../interfaces/ClusterDefintion.md) \>

The cluster definition.

#### Throws

On unauthorized, duplicate entries, missing keys, not found cluster or invalid data.

An example of how to use updateClusterDefinition:
[updateClusterDefinition](https://github.com/ObolNetwork/obol-sdk-examples/blob/main/TS-Example/index.ts)

#### Source

index.ts:94
