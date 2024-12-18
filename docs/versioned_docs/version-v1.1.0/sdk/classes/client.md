# Client

Obol sdk Client can be used for creating, managing and activating distributed validators.

### Extends

* `Base`

### Constructors

#### new Client()

> **new Client**(`config`, `signer`?): [`Client`](client.md)

**Parameters**

| Parameter         | Type     | Description           |
| ----------------- | -------- | --------------------- |
| `config`          | `object` | Client configurations |
| `config.baseUrl`? | `string` | obol-api url          |
| `config.chainId`? | `number` | Blockchain network ID |
| `signer`?         | `Signer` | ethersJS Signer       |

**Returns**

[`Client`](client.md)

Obol-SDK Client instance

An example of how to instantiate obol-sdk Client: [obolClient](https://github.com/ObolNetwork/obol-sdk-examples/blob/main/TS-Example/index.ts#L29)

**Overrides**

`Base.constructor`

**Source**

index.ts:45

### Methods

#### acceptObolLatestTermsAndConditions()

> **acceptObolLatestTermsAndConditions**(): `Promise`<`string`>

Accepts Obol terms and conditions to be able to create or update data.

**Returns**

`Promise`<`string`>

terms and conditions acceptance success message.

**Throws**

On unverified signature or wrong hash.

An example of how to use acceptObolLatestTermsAndConditions: [acceptObolLatestTermsAndConditions](https://github.com/ObolNetwork/obol-sdk-examples/blob/main/TS-Example/index.ts#L44)

**Source**

index.ts:61

***

#### createClusterDefinition()

> **createClusterDefinition**(`newCluster`): `Promise`<`string`>

Creates a cluster definition which contains cluster configuration.

**Parameters**

| Parameter    | Type                                                  | Description             |
| ------------ | ----------------------------------------------------- | ----------------------- |
| `newCluster` | [`ClusterPayload`](../type-aliases/clusterpayload.md) | The new unique cluster. |

**Returns**

`Promise`<`string`>

config\_hash.

**Throws**

On duplicate entries, missing or wrong cluster keys.

An example of how to use createClusterDefinition: [createObolCluster](https://github.com/ObolNetwork/obol-sdk-examples/blob/main/TS-Example/index.ts#L59)

**Source**

index.ts:107

***

#### acceptClusterDefinition()

> **acceptClusterDefinition**(`operatorPayload`, `configHash`): `Promise` <[`ClusterDefinition`](../interfaces/clusterdefinition.md)>

Approves joining a cluster with specific configuration.

**Parameters**

| Parameter         | Type                                                    | Description                                                            |
| ----------------- | ------------------------------------------------------- | ---------------------------------------------------------------------- |
| `operatorPayload` | [`OperatorPayload`](../type-aliases/operatorpayload.md) | The operator data including signatures.                                |
| `configHash`      | `string`                                                | The config hash of the cluster which the operator confirms joining to. |

**Returns**

`Promise` <[`ClusterDefinition`](../interfaces/clusterdefinition.md)>

The cluster definition.

**Throws**

On unauthorized, duplicate entries, missing keys, not found cluster or invalid data.

An example of how to use acceptClusterDefinition: [acceptClusterDefinition](https://github.com/ObolNetwork/obol-sdk-examples/blob/main/TS-Example/index.ts#L106)

**Source**

index.ts:165

***

#### getClusterDefinition()

> **getClusterDefinition**(`configHash`): `Promise` <[`ClusterDefinition`](../interfaces/clusterdefinition.md)>

**Parameters**

| Parameter    | Type     | Description                                                |
| ------------ | -------- | ---------------------------------------------------------- |
| `configHash` | `string` | The configuration hash returned in createClusterDefinition |

**Returns**

`Promise` <[`ClusterDefinition`](../interfaces/clusterdefinition.md)>

The cluster definition for config hash

**Throws**

On not found config hash.

An example of how to use getClusterDefinition: [getObolClusterDefinition](https://github.com/ObolNetwork/obol-sdk-examples/blob/main/TS-Example/index.ts#L74)

**Source**

index.ts:217

***

#### getClusterLock()

> **getClusterLock**(`configHash`): `Promise` <[`ClusterLock`](../type-aliases/clusterlock.md)>

**Parameters**

| Parameter    | Type     | Description                                  |
| ------------ | -------- | -------------------------------------------- |
| `configHash` | `string` | The configuration hash in cluster-definition |

**Returns**

`Promise` <[`ClusterLock`](../type-aliases/clusterlock.md)>

The matched cluster details (lock) from DB

**Throws**

On not found cluster definition or lock.

An example of how to use getClusterLock: [getObolClusterLock](https://github.com/ObolNetwork/obol-sdk-examples/blob/main/TS-Example/index.ts#L89)

**Source**

index.ts:236
