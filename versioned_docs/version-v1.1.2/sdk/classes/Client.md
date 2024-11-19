Obol sdk Client can be used for creating, managing and activating distributed validators.

## Extends

- `Base`

## Constructors

### new Client()

> **new Client**(`config`, `signer`?): [`Client`](Client.md)

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
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

#### Defined in

index.ts:66

## Methods

### acceptObolLatestTermsAndConditions()

> **acceptObolLatestTermsAndConditions**(): `Promise`\<`string`\>

Accepts Obol terms and conditions to be able to create or update data.

#### Returns

`Promise`\<`string`\>

terms and conditions acceptance success message.

#### Throws

On unverified signature or wrong hash.

An example of how to use acceptObolLatestTermsAndConditions:
[acceptObolLatestTermsAndConditions](https://github.com/ObolNetwork/obol-sdk-examples/blob/main/TS-Example/index.ts#L44)

#### Defined in

index.ts:79

***

### createObolRewardsSplit()

> **createObolRewardsSplit**(`rewardsSplitPayload`): `Promise`\<[`ClusterValidator`](../type-aliases/ClusterValidator.md)\>

Deploys OWR and Splitter Proxy.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `rewardsSplitPayload` | [`RewardsSplitPayload`](../interfaces/RewardsSplitPayload.md) | Data needed to deploy owr and splitter. |

#### Returns

`Promise`\<[`ClusterValidator`](../type-aliases/ClusterValidator.md)\>

owr address as withdrawal address and splitter as fee recipient

An example of how to use createObolRewardsSplit:
[createObolRewardsSplit](https://github.com/ObolNetwork/obol-sdk-examples/blob/main/TS-Example/index.ts#L141)

#### Remarks

**⚠️ Important:**  If you're storing the private key in an `.env` file, ensure it is securely managed 
and not pushed to version control.

#### Defined in

index.ts:133

***

### createObolTotalSplit()

> **createObolTotalSplit**(`totalSplitPayload`): `Promise`\<[`ClusterValidator`](../type-aliases/ClusterValidator.md)\>

Deploys Splitter Proxy.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `totalSplitPayload` | [`TotalSplitPayload`](../type-aliases/TotalSplitPayload.md) | Data needed to deploy splitter if it doesnt exist. |

#### Returns

`Promise`\<[`ClusterValidator`](../type-aliases/ClusterValidator.md)\>

splitter address as withdrawal address and splitter as fee recipient too

An example of how to use createObolTotalSplit:
[createObolTotalSplit](https://github.com/ObolNetwork/obol-sdk-examples/blob/main/TS-Example/index.ts#L168)

#### Remarks

**⚠️ Important:**  If you're storing the private key in an `.env` file, ensure it is securely managed 
and not pushed to version control.

#### Defined in

index.ts:254

***

### createClusterDefinition()

> **createClusterDefinition**(`newCluster`): `Promise`\<`string`\>

Creates a cluster definition which contains cluster configuration.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `newCluster` | [`ClusterPayload`](../type-aliases/ClusterPayload.md) | The new unique cluster. |

#### Returns

`Promise`\<`string`\>

config_hash.

#### Throws

On duplicate entries, missing or wrong cluster keys.

An example of how to use createClusterDefinition:
[createObolCluster](https://github.com/ObolNetwork/obol-sdk-examples/blob/main/TS-Example/index.ts#L59)

#### Defined in

index.ts:350

***

### acceptClusterDefinition()

> **acceptClusterDefinition**(`operatorPayload`, `configHash`): `Promise`\<[`ClusterDefinition`](../interfaces/ClusterDefinition.md)\>

Approves joining a cluster with specific configuration.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `operatorPayload` | [`OperatorPayload`](../type-aliases/OperatorPayload.md) | The operator data including signatures. |
| `configHash` | `string` | The config hash of the cluster which the operator confirms joining to. |

#### Returns

`Promise`\<[`ClusterDefinition`](../interfaces/ClusterDefinition.md)\>

The cluster definition.

#### Throws

On unauthorized, duplicate entries, missing keys, not found cluster or invalid data.

An example of how to use acceptClusterDefinition:
[acceptClusterDefinition](https://github.com/ObolNetwork/obol-sdk-examples/blob/main/TS-Example/index.ts#L106)

#### Defined in

index.ts:415

***

### getClusterDefinition()

> **getClusterDefinition**(`configHash`): `Promise`\<[`ClusterDefinition`](../interfaces/ClusterDefinition.md)\>

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `configHash` | `string` | The configuration hash returned in createClusterDefinition |

#### Returns

`Promise`\<[`ClusterDefinition`](../interfaces/ClusterDefinition.md)\>

The  cluster definition for config hash

#### Throws

On not found config hash.

An example of how to use getClusterDefinition:
[getObolClusterDefinition](https://github.com/ObolNetwork/obol-sdk-examples/blob/main/TS-Example/index.ts#L74)

#### Defined in

index.ts:469

***

### getClusterLock()

> **getClusterLock**(`configHash`): `Promise`\<[`ClusterLock`](../type-aliases/ClusterLock.md)\>

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `configHash` | `string` | The configuration hash in cluster-definition |

#### Returns

`Promise`\<[`ClusterLock`](../type-aliases/ClusterLock.md)\>

The matched cluster details (lock) from DB

#### Throws

On not found cluster definition or lock.

An example of how to use getClusterLock:
[getObolClusterLock](https://github.com/ObolNetwork/obol-sdk-examples/blob/main/TS-Example/index.ts#L89)

#### Defined in

index.ts:488
