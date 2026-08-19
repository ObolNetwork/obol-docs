# Client

Defined in: [index.ts:67](https://github.com/ObolNetwork/obol-sdk/blob/5137bd5c4ded55a50234f19135ea3a5bfeab4d47/src/index.ts#L67)

Obol sdk Client can be used for creating, managing and activating distributed validators.

## Extends

- `Base`

## Constructors

### Constructor

> **new Client**(`config`, `signer?`, `provider?`): `Client`

Defined in: [index.ts:113](https://github.com/ObolNetwork/obol-sdk/blob/5137bd5c4ded55a50234f19135ea3a5bfeab4d47/src/index.ts#L113)

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `config` | \{ `baseUrl?`: `string`; `chainId?`: `number`; \} | Client configurations |
| `config.baseUrl?` | `string` | obol-api url |
| `config.chainId?` | `number` | Blockchain network ID |
| `signer?` | [`SignerType`](../type-aliases/SignerType.md) | ethersJS Signer |
| `provider?` | [`ProviderType`](../type-aliases/ProviderType.md) | - |

#### Returns

`Client`

Obol-SDK Client instance

An example of how to instantiate obol-sdk Client:
[obolClient](https://github.com/ObolNetwork/obol-sdk-examples/blob/main/TS-Example/index.ts#L29)

#### Overrides

`Base.constructor`

## Properties

| Property | Modifier | Type | Description | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="incentives"></a> `incentives` | `public` | [`Incentives`](Incentives.md) | The incentives module, responsible for managing Obol tokens distribution. | [index.ts:77](https://github.com/ObolNetwork/obol-sdk/blob/5137bd5c4ded55a50234f19135ea3a5bfeab4d47/src/index.ts#L77) |
| <a id="exit"></a> `exit` | `public` | [`Exit`](Exit.md) | The exit module, responsible for managing exit validation. | [index.ts:83](https://github.com/ObolNetwork/obol-sdk/blob/5137bd5c4ded55a50234f19135ea3a5bfeab4d47/src/index.ts#L83) |
| <a id="splits"></a> `splits` | `public` | [`ObolSplits`](ObolSplits.md) | The splits module, responsible for managing splits. | [index.ts:89](https://github.com/ObolNetwork/obol-sdk/blob/5137bd5c4ded55a50234f19135ea3a5bfeab4d47/src/index.ts#L89) |
| <a id="eoa"></a> `eoa` | `public` | [`EOA`](EOA.md) | The eoa module, responsible for managing EOA operations. | [index.ts:95](https://github.com/ObolNetwork/obol-sdk/blob/5137bd5c4ded55a50234f19135ea3a5bfeab4d47/src/index.ts#L95) |
| <a id="provider"></a> `provider` | `public` | [`ProviderType`](../type-aliases/ProviderType.md) \| `null` \| `undefined` | The blockchain provider, used to interact with the network. It can be null, undefined, or a valid provider instance and defaults to the Signer provider if Signer is passed. | [index.ts:101](https://github.com/ObolNetwork/obol-sdk/blob/5137bd5c4ded55a50234f19135ea3a5bfeab4d47/src/index.ts#L101) |

## Methods

### acceptObolLatestTermsAndConditions()

> **acceptObolLatestTermsAndConditions**(): `Promise`\<`string`\>

Defined in: [index.ts:143](https://github.com/ObolNetwork/obol-sdk/blob/5137bd5c4ded55a50234f19135ea3a5bfeab4d47/src/index.ts#L143)

Accepts Obol terms and conditions to be able to create or update data.

#### Returns

`Promise`\<`string`\>

terms and conditions acceptance success message.

#### Throws

On unverified signature or wrong hash.

An example of how to use acceptObolLatestTermsAndConditions:
[acceptObolLatestTermsAndConditions](https://github.com/ObolNetwork/obol-sdk-examples/blob/main/TS-Example/index.ts#L44)

***

### createObolRewardsSplit()

> **createObolRewardsSplit**(`rewardsSplitPayload`): `Promise`\<[`ClusterValidator`](../type-aliases/ClusterValidator.md)\>

Defined in: [index.ts:198](https://github.com/ObolNetwork/obol-sdk/blob/5137bd5c4ded55a50234f19135ea3a5bfeab4d47/src/index.ts#L198)

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

***

### createObolTotalSplit()

> **createObolTotalSplit**(`totalSplitPayload`): `Promise`\<[`ClusterValidator`](../type-aliases/ClusterValidator.md)\>

Defined in: [index.ts:325](https://github.com/ObolNetwork/obol-sdk/blob/5137bd5c4ded55a50234f19135ea3a5bfeab4d47/src/index.ts#L325)

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

***

### getOWRTranches()

> **getOWRTranches**(`owrAddress`): `Promise`\<[`OWRTranches`](../type-aliases/OWRTranches.md)\>

Defined in: [index.ts:430](https://github.com/ObolNetwork/obol-sdk/blob/5137bd5c4ded55a50234f19135ea3a5bfeab4d47/src/index.ts#L430)

Read OWR Tranches.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `owrAddress` | `string` | Address of the Deployed OWR Contract |

#### Returns

`Promise`\<[`OWRTranches`](../type-aliases/OWRTranches.md)\>

owr tranch information about principal and reward reciepient, as well as the principal amount

#### Remarks

**⚠️ Important:**  If you're storing the private key in an `.env` file, ensure it is securely managed
and not pushed to version control.

***

### createClusterDefinition()

> **createClusterDefinition**(`newCluster`): `Promise`\<`string`\>

Defined in: [index.ts:448](https://github.com/ObolNetwork/obol-sdk/blob/5137bd5c4ded55a50234f19135ea3a5bfeab4d47/src/index.ts#L448)

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

***

### acceptClusterDefinition()

> **acceptClusterDefinition**(`operatorPayload`, `configHash`): `Promise`\<[`ClusterDefinition`](../interfaces/ClusterDefinition.md)\>

Defined in: [index.ts:513](https://github.com/ObolNetwork/obol-sdk/blob/5137bd5c4ded55a50234f19135ea3a5bfeab4d47/src/index.ts#L513)

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

***

### getClusterDefinition()

> **getClusterDefinition**(`configHash`): `Promise`\<[`ClusterDefinition`](../interfaces/ClusterDefinition.md)\>

Defined in: [index.ts:570](https://github.com/ObolNetwork/obol-sdk/blob/5137bd5c4ded55a50234f19135ea3a5bfeab4d47/src/index.ts#L570)

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

***

### getClusterLock()

> **getClusterLock**(`configHash`): `Promise`\<[`ClusterLock`](../type-aliases/ClusterLock.md)\>

Defined in: [index.ts:589](https://github.com/ObolNetwork/obol-sdk/blob/5137bd5c4ded55a50234f19135ea3a5bfeab4d47/src/index.ts#L589)

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

***

### getClusterLockByHash()

> **getClusterLockByHash**(`lockHash`): `Promise`\<[`ClusterLock`](../type-aliases/ClusterLock.md)\>

Defined in: [index.ts:605](https://github.com/ObolNetwork/obol-sdk/blob/5137bd5c4ded55a50234f19135ea3a5bfeab4d47/src/index.ts#L605)

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `lockHash` | `string` | The configuration hash in cluster-definition |

#### Returns

`Promise`\<[`ClusterLock`](../type-aliases/ClusterLock.md)\>

The matched cluster details (lock) from DB

#### Throws

On not found cluster definition or lock.
