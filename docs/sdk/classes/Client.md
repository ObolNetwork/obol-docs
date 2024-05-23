Obol sdk Client can be used for creating, managing and activating distributed validators.

## Extends

- `Base`

## Constructors

### new Client()

> **new Client**(`config`, `signer`?): [`Client`](Client.md)

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `config` | `object` | Client configurations |
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

index.ts:45

## Methods

### acceptObolLatestTermsAndConditions()

> **acceptObolLatestTermsAndConditions**(): `Promise`\<`string`\>

Accepts Obol terms and conditions to be able to create or update data.

#### Returns

`Promise`\<`string`\>

terms and conditions acceptance success message.

#### Throws

On unverified signature or wrong hash.

#### Source

index.ts:59

***

### createClusterDefinition()

> **createClusterDefinition**(`newCluster`): `Promise`\<`string`\>

Creates a cluster definition which contains cluster configuration.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `newCluster` | [`ClusterPayload`](../interfaces/ClusterPayload.md) | The new unique cluster. |

#### Returns

`Promise`\<`string`\>

config_hash.

#### Throws

On duplicate entries, missing or wrong cluster keys.

An example of how to use createClusterDefinition:
[createObolCluster](https://github.com/ObolNetwork/obol-sdk-examples/blob/main/TS-Example/index.ts)

#### Source

index.ts:105

***

### acceptClusterDefinition()

> **acceptClusterDefinition**(`operatorPayload`, `configHash`): `Promise` \<[`ClusterDefinition`](../interfaces/ClusterDefinition.md)\>

Approves joining a cluster with specific configuration.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `operatorPayload` | [`OperatorPayload`](../type-aliases/OperatorPayload.md) | The operator data including signatures. |
| `configHash` | `string` | The config hash of the cluster which the operator confirms joining to. |

#### Returns

`Promise` \<[`ClusterDefinition`](../interfaces/ClusterDefinition.md)\>

The cluster definition.

#### Throws

On unauthorized, duplicate entries, missing keys, not found cluster or invalid data.

An example of how to use acceptClusterDefinition:
[acceptClusterDefinition](https://github.com/ObolNetwork/obol-sdk-examples/blob/main/TS-Example/index.ts)

#### Source

index.ts:163

***

### getClusterDefinition()

> **getClusterDefinition**(`configHash`): `Promise` \<[`ClusterDefinition`](../interfaces/ClusterDefinition.md)\>

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `configHash` | `string` | The configuration hash returned in createClusterDefinition |

#### Returns

`Promise` \<[`ClusterDefinition`](../interfaces/ClusterDefinition.md)\>

The  cluster definition for config hash

#### Throws

On not found config hash.

An example of how to use getClusterDefinition:
[getObolClusterDefinition](https://github.com/ObolNetwork/obol-sdk-examples/blob/main/TS-Example/index.ts)

#### Source

index.ts:215

***

### getClusterLock()

> **getClusterLock**(`configHash`): `Promise` \<[`ClusterLock`](../interfaces/ClusterLock.md)\>

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `configHash` | `string` | The configuration hash in cluster-definition |

#### Returns

`Promise` \<[`ClusterLock`](../interfaces/ClusterLock.md)\>

The matched cluster details (lock) from DB

#### Throws

On not found cluster definition or lock.

An example of how to use getClusterLock:
[getObolClusterLock](https://github.com/ObolNetwork/obol-sdk-examples/blob/main/TS-Example/index.ts)

#### Source

index.ts:234
