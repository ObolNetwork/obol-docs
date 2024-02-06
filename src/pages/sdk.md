**Obol SDK Documentation v1.0.8** • API

***

![Obol Logo](https://obol.tech/obolnetwork.png)

<h1 align="center">Obol SDK</h1>

This repo contains the Obol Software Development Kit, for creating Distributed Validators with the help of the [Obol API](https://docs.obol.tech/api). 

## Getting Started

Checkout our [docs](https://docs.obol.tech/docs/int/quickstart/advanced/quickstart-sdk), [examples](https://github.com/ObolNetwork/obol-sdk-examples/), and SDK [reference](https://obolnetwork.github.io/obol-packages). Further guides and walkthroughs coming soon.

## Enumerations

### FORK\_MAPPING

Permitted ChainID's

#### Enumeration Members

| Enumeration Member | Value | Description |
| :------ | :------ | :------ |
| `0x00000000` | `1` | Mainnet. |
| `0x00000064` | `100` | Gnosis Chain. |
| `0x00001020` | `5` | Goerli/Prater. |
| `0x01017000` | `17000` | Holesky. |

## Classes

### Client

Obol sdk Client can be used for creating, managing and activating distributed validators.

#### Extends

- `Base`

#### Constructors

##### new Client(config, signer)

> **new Client**(`config`, `signer`?): [`Client`](sdk#client)

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `config` | `Object` |  |
| `config.baseUrl`? | `string` | - |
| `config.chainId`? | `number` | - |
| `signer`? | `Signer` | ethersJS Signer |

###### Returns

[`Client`](sdk#client)

Obol-SDK Client instance

An example of how to instantiate obol-sdk Client:
[obolClient](https://github.com/ObolNetwork/obol-sdk-examples/blob/main/TS-Example/index.ts#L29)

###### Overrides

`Base.constructor`

###### Source

[index.ts:27](https://github.com/ObolNetwork/obol-packages/blob/9a4d69b/packages/obol-sdk/src/index.ts#L27)

#### Methods

##### createClusterDefinition()

> **createClusterDefinition**(`newCluster`): `Promise`\<`string`\>

Creates a cluster definition which contains cluster configuration.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `newCluster` | [`ClusterPayload`](sdk#clusterpayload) | The new unique cluster. |

###### Returns

`Promise`\<`string`\>

config_hash.

###### Throws

On duplicate entries, missing or wrong cluster keys.

An example of how to use createClusterDefinition:
[createObolCluster](https://github.com/ObolNetwork/obol-sdk-examples/blob/main/TS-Example/index.ts)

###### Source

[index.ts:42](https://github.com/ObolNetwork/obol-packages/blob/9a4d69b/packages/obol-sdk/src/index.ts#L42)

##### getClusterDefinition()

> **getClusterDefinition**(`configHash`): `Promise`\<[`ClusterDefintion`](sdk#clusterdefintion)\>

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `configHash` | `string` |

###### Returns

`Promise`\<[`ClusterDefintion`](sdk#clusterdefintion)\>

The  cluster definition for config hash

###### Throws

On not found config hash.

An example of how to use getClusterDefinition:
[getObolClusterDefinition](https://github.com/ObolNetwork/obol-sdk-examples/blob/main/TS-Example/index.ts)

###### Source

[index.ts:132](https://github.com/ObolNetwork/obol-packages/blob/9a4d69b/packages/obol-sdk/src/index.ts#L132)

##### getClusterLock()

> **getClusterLock**(`configHash`): `Promise`\<[`ClusterLock`](sdk#clusterlock)\>

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `configHash` | `string` |

###### Returns

`Promise`\<[`ClusterLock`](sdk#clusterlock)\>

The matched cluster details (lock) from DB

###### Throws

On not found cluster definition or lock.

An example of how to use getClusterLock:
[getObolClusterLock](https://github.com/ObolNetwork/obol-sdk-examples/blob/main/TS-Example/index.ts)

###### Source

[index.ts:148](https://github.com/ObolNetwork/obol-packages/blob/9a4d69b/packages/obol-sdk/src/index.ts#L148)

##### updateClusterDefinition()

> **updateClusterDefinition**(`operatorPayload`, `configHash`): `Promise`\<[`ClusterDefintion`](sdk#clusterdefintion)\>

Approves joining a cluster with specific configuration.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `operatorPayload` | [`OperatorPayload`](sdk#operatorpayload) | The operator data including signatures. |
| `configHash` | `string` | The config hash of the cluster which the operator confirms joining to. |

###### Returns

`Promise`\<[`ClusterDefintion`](sdk#clusterdefintion)\>

The cluster definition.

###### Throws

On unauthorized, duplicate entries, missing keys, not found cluster or invalid data.

An example of how to use updateClusterDefinition:
[updateClusterDefinition](https://github.com/ObolNetwork/obol-sdk-examples/blob/main/TS-Example/index.ts)

###### Source

[index.ts:93](https://github.com/ObolNetwork/obol-packages/blob/9a4d69b/packages/obol-sdk/src/index.ts#L93)

## Interfaces

### ClusterDefintion

Cluster Definition

#### Extends

- [`ClusterPayload`](sdk#clusterpayload)

#### Properties

| Property | Type | Description | Inherited from |
| :------ | :------ | :------ | :------ |
| `config_hash` | `string` | The cluster configuration hash. | - |
| `creator` | [`ClusterCreator`](sdk#clustercreator) | The creator of the cluster. | - |
| `definition_hash?` | `string` | The hash of the cluster definition. | - |
| `dkg_algorithm` | `string` | The cluster dkg algorithm. | - |
| `fork_version` | `string` | The cluster fork version. | - |
| `name` | `string` | The cluster name. | [`ClusterPayload`](sdk#clusterpayload).`name` |
| `num_validators` | `number` | The number of distributed validators in the cluster. | - |
| `operators` | [`ClusterOperator`](sdk#clusteroperator)[] | The cluster nodes operators addresses. | [`ClusterPayload`](sdk#clusterpayload).`operators` |
| `threshold` | `number` | The distributed validator threshold. | - |
| `timestamp` | `string` | The cluster creation timestamp. | - |
| `uuid` | `string` | The cluster uuid. | - |
| `validators` | [`ClusterValidator`](sdk#clustervalidator)[] | The clusters validators information. | [`ClusterPayload`](sdk#clusterpayload).`validators` |
| `version` | `string` | The cluster configuration version. | - |

***

### ClusterLock

Cluster Lock (Cluster Details after DKG is complete)

#### Properties

| Property | Type | Description |
| :------ | :------ | :------ |
| `cluster_definition` | [`ClusterDefintion`](sdk#clusterdefintion) | The cluster definition. |
| `distributed_validators` | [`DistributedValidator`](sdk#distributedvalidator)[] | The cluster distributed validators. |
| `lock_hash` | `string` | The hash of the cluster lock. |
| `node_signatures` | `string`[] | Node Signature for the lock hash by the node secp256k1 key. |
| `signature_aggregate` | `string` | The cluster bls signature aggregate. |

***

### ClusterPayload

Cluster Required Configuration

#### Extended by

- [`ClusterDefintion`](sdk#clusterdefintion)

#### Properties

| Property | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The cluster name. |
| `operators` | [`ClusterOperator`](sdk#clusteroperator)[] | The cluster nodes operators addresses. |
| `validators` | [`ClusterValidator`](sdk#clustervalidator)[] | The clusters validators information. |

## Type Aliases

### BuilderRegistration

> **BuilderRegistration**: `Object`

Pre-generated Signed Validator Builder Registration

#### Type declaration

| Member | Type | Description |
| :------ | :------ | :------ |
| `message` | [`BuilderRegistrationMessage`](sdk#builderregistrationmessage) | Builder registration message. |
| `signature` | `string` | BLS signature of the builder registration message. |

#### Source

[types.ts:143](https://github.com/ObolNetwork/obol-packages/blob/9a4d69b/packages/obol-sdk/src/types.ts#L143)

***

### BuilderRegistrationMessage

> **BuilderRegistrationMessage**: `Object`

Unsigned DV Builder Registration Message

#### Type declaration

| Member | Type | Description |
| :------ | :------ | :------ |
| `fee_recipient` | `string` | The DV fee recipient. |
| `gas_limit` | `number` | Default is 30000000. |
| `pubkey` | `string` | The public key of the DV. |
| `timestamp` | `number` | Timestamp when generating cluster lock file. |

#### Source

[types.ts:125](https://github.com/ObolNetwork/obol-packages/blob/9a4d69b/packages/obol-sdk/src/types.ts#L125)

***

### ClusterCreator

> **ClusterCreator**: `Object`

Cluster Creator

#### Type declaration

| Member | Type | Description |
| :------ | :------ | :------ |
| `address` | `string` | The creator address. |
| `config_signature` | `string` | The cluster configuration signature. |

#### Source

[types.ts:51](https://github.com/ObolNetwork/obol-packages/blob/9a4d69b/packages/obol-sdk/src/types.ts#L51)

***

### ClusterOperator

> **ClusterOperator**: `Object`

Cluster Node Operator

#### Type declaration

| Member | Type | Description |
| :------ | :------ | :------ |
| `address` | `string` | The operator address. |
| `config_signature` | `string` | The operator configuration signature. |
| `enr` | `string` | The operator ethereum node record. |
| `enr_signature` | `string` | The operator enr signature. |
| `fork_version` | `string` | The cluster fork_version. |
| `version` | `string` | The cluster version. |

#### Source

[types.ts:22](https://github.com/ObolNetwork/obol-packages/blob/9a4d69b/packages/obol-sdk/src/types.ts#L22)

***

### ClusterValidator

> **ClusterValidator**: `Object`

Cluster Validator

#### Type declaration

| Member | Type | Description |
| :------ | :------ | :------ |
| `fee_recipient_address` | `string` | The validator fee recipient address. |
| `withdrawal_address` | `string` | The validator reward address. |

#### Source

[types.ts:62](https://github.com/ObolNetwork/obol-packages/blob/9a4d69b/packages/obol-sdk/src/types.ts#L62)

***

### DepositData

> **DepositData**: `Object`

Deposit Data

#### Type declaration

| Member | Type | Description |
| :------ | :------ | :------ |
| `amount` | `string` | 32 ethers. |
| `deposit_data_root` | `string` | A checksum for DepositData fields . |
| `pubkey` | `string` | The public key of the distributed validator. |
| `signature` | `string` | BLS signature of the deposit message. |
| `withdrawal_credentials` | `string` | The 0x01 withdrawal address of the DV. |

#### Source

[types.ts:155](https://github.com/ObolNetwork/obol-packages/blob/9a4d69b/packages/obol-sdk/src/types.ts#L155)

***

### DistributedValidator

> **DistributedValidator**: `Object`

Distributed Validator

#### Type declaration

| Member | Type | Description |
| :------ | :------ | :------ |
| `builder_registration` | [`BuilderRegistration`](sdk#builderregistration) | pre-generated signed validator builder registration to be sent to builder network. |
| `deposit_data` | `Partial`\<[`DepositData`](sdk#depositdata)\> | The required deposit data for activating the DV. |
| `distributed_public_key` | `string` | The public key of the distributed validator. |
| `public_shares` | `string`[] | The public key of the node distributed validator share. |

#### Source

[types.ts:176](https://github.com/ObolNetwork/obol-packages/blob/9a4d69b/packages/obol-sdk/src/types.ts#L176)

***

### OperatorPayload

> **OperatorPayload**: `Partial`\<[`ClusterOperator`](sdk#clusteroperator)\> & `Required`\<`Pick`\<[`ClusterOperator`](sdk#clusteroperator), `"enr"` \| `"version"`\>\>

A partial view of `ClusterOperator` with `enr` and `version` as required properties.

#### Source

[types.ts:46](https://github.com/ObolNetwork/obol-packages/blob/9a4d69b/packages/obol-sdk/src/types.ts#L46)
