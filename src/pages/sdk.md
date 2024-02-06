**Obol SDK Documentation v1.0.8** • API

***

# Obol SDK Documentation v1.0.8

## Enumerations

### FORK\_MAPPING

Permitted ChainID's

#### Enumeration Members

##### 0x00000000

> **0x00000000**: `1`

Mainnet.

###### Source

[types.ts:7](https://github.com/ObolNetwork/obol-packages/blob/6c0f69c/packages/obol-sdk/src/types.ts#L7)

##### 0x00000064

> **0x00000064**: `100`

Gnosis Chain.

###### Source

[types.ts:13](https://github.com/ObolNetwork/obol-packages/blob/6c0f69c/packages/obol-sdk/src/types.ts#L13)

##### 0x00001020

> **0x00001020**: `5`

Goerli/Prater.

###### Source

[types.ts:10](https://github.com/ObolNetwork/obol-packages/blob/6c0f69c/packages/obol-sdk/src/types.ts#L10)

##### 0x01017000

> **0x01017000**: `17000`

Holesky.

###### Source

[types.ts:16](https://github.com/ObolNetwork/obol-packages/blob/6c0f69c/packages/obol-sdk/src/types.ts#L16)

## Classes

### Client

Obol sdk Client can be used for creating, managing and activating distributed validators.

#### Extends

- `Base`

#### Constructors

##### new Client(config, signer)

> **new Client**(`config`, `signer`?): [`Client`](README.md#client)

###### Parameters

• **config**: `Object`

• **config\.baseUrl?**: `string`

• **config\.chainId?**: `number`

• **signer?**: `Signer`

ethersJS Signer

###### Returns

[`Client`](README.md#client)

Obol-SDK Client instance

An example of how to instantiate obol-sdk Client:
[obolClient](https://github.com/ObolNetwork/obol-sdk-examples/blob/main/TS-Example/index.ts#L29)

###### Overrides

`Base.constructor`

###### Source

[index.ts:27](https://github.com/ObolNetwork/obol-packages/blob/6c0f69c/packages/obol-sdk/src/index.ts#L27)

#### Methods

##### createClusterDefinition()

> **createClusterDefinition**(`newCluster`): `Promise`\<`string`\>

Creates a cluster definition which contains cluster configuration.

###### Parameters

• **newCluster**: [`ClusterPayload`](README.md#clusterpayload)

The new unique cluster.

###### Returns

`Promise`\<`string`\>

config_hash.

###### Throws

On duplicate entries, missing or wrong cluster keys.

An example of how to use createClusterDefinition:
[createObolCluster](https://github.com/ObolNetwork/obol-sdk-examples/blob/main/TS-Example/index.ts)

###### Source

[index.ts:42](https://github.com/ObolNetwork/obol-packages/blob/6c0f69c/packages/obol-sdk/src/index.ts#L42)

##### getClusterDefinition()

> **getClusterDefinition**(`configHash`): `Promise`\<[`ClusterDefintion`](README.md#clusterdefintion)\>

###### Parameters

• **configHash**: `string`

###### Returns

`Promise`\<[`ClusterDefintion`](README.md#clusterdefintion)\>

The  cluster definition for config hash

###### Throws

On not found config hash.

An example of how to use getClusterDefinition:
[getObolClusterDefinition](https://github.com/ObolNetwork/obol-sdk-examples/blob/main/TS-Example/index.ts)

###### Source

[index.ts:132](https://github.com/ObolNetwork/obol-packages/blob/6c0f69c/packages/obol-sdk/src/index.ts#L132)

##### getClusterLock()

> **getClusterLock**(`configHash`): `Promise`\<[`ClusterLock`](README.md#clusterlock)\>

###### Parameters

• **configHash**: `string`

###### Returns

`Promise`\<[`ClusterLock`](README.md#clusterlock)\>

The matched cluster details (lock) from DB

###### Throws

On not found cluster definition or lock.

An example of how to use getClusterLock:
[getObolClusterLock](https://github.com/ObolNetwork/obol-sdk-examples/blob/main/TS-Example/index.ts)

###### Source

[index.ts:148](https://github.com/ObolNetwork/obol-packages/blob/6c0f69c/packages/obol-sdk/src/index.ts#L148)

##### updateClusterDefinition()

> **updateClusterDefinition**(`operatorPayload`, `configHash`): `Promise`\<[`ClusterDefintion`](README.md#clusterdefintion)\>

Approves joining a cluster with specific configuration.

###### Parameters

• **operatorPayload**: [`OperatorPayload`](README.md#operatorpayload)

The operator data including signatures.

• **configHash**: `string`

The config hash of the cluster which the operator confirms joining to.

###### Returns

`Promise`\<[`ClusterDefintion`](README.md#clusterdefintion)\>

The cluster definition.

###### Throws

On unauthorized, duplicate entries, missing keys, not found cluster or invalid data.

An example of how to use updateClusterDefinition:
[updateClusterDefinition](https://github.com/ObolNetwork/obol-sdk-examples/blob/main/TS-Example/index.ts)

###### Source

[index.ts:93](https://github.com/ObolNetwork/obol-packages/blob/6c0f69c/packages/obol-sdk/src/index.ts#L93)

## Interfaces

### ClusterDefintion

Cluster Definition

#### Extends

- [`ClusterPayload`](README.md#clusterpayload)

#### Properties

##### config\_hash

> **config\_hash**: `string`

The cluster configuration hash.

###### Source

[types.ts:110](https://github.com/ObolNetwork/obol-packages/blob/6c0f69c/packages/obol-sdk/src/types.ts#L110)

##### creator

> **creator**: [`ClusterCreator`](README.md#clustercreator)

The creator of the cluster.

###### Source

[types.ts:92](https://github.com/ObolNetwork/obol-packages/blob/6c0f69c/packages/obol-sdk/src/types.ts#L92)

##### definition\_hash?

> **definition\_hash**?: `string`

The hash of the cluster definition.

###### Source

[types.ts:119](https://github.com/ObolNetwork/obol-packages/blob/6c0f69c/packages/obol-sdk/src/types.ts#L119)

##### dkg\_algorithm

> **dkg\_algorithm**: `string`

The cluster dkg algorithm.

###### Source

[types.ts:98](https://github.com/ObolNetwork/obol-packages/blob/6c0f69c/packages/obol-sdk/src/types.ts#L98)

##### fork\_version

> **fork\_version**: `string`

The cluster fork version.

###### Source

[types.ts:101](https://github.com/ObolNetwork/obol-packages/blob/6c0f69c/packages/obol-sdk/src/types.ts#L101)

##### name

> **name**: `string`

The cluster name.

###### Inherited from

[`ClusterPayload`](README.md#clusterpayload).[`name`](README.md#name-1)

###### Source

[types.ts:77](https://github.com/ObolNetwork/obol-packages/blob/6c0f69c/packages/obol-sdk/src/types.ts#L77)

##### num\_validators

> **num\_validators**: `number`

The number of distributed validators in the cluster.

###### Source

[types.ts:116](https://github.com/ObolNetwork/obol-packages/blob/6c0f69c/packages/obol-sdk/src/types.ts#L116)

##### operators

> **operators**: [`ClusterOperator`](README.md#clusteroperator)[]

The cluster nodes operators addresses.

###### Inherited from

[`ClusterPayload`](README.md#clusterpayload).[`operators`](README.md#operators-1)

###### Source

[types.ts:80](https://github.com/ObolNetwork/obol-packages/blob/6c0f69c/packages/obol-sdk/src/types.ts#L80)

##### threshold

> **threshold**: `number`

The distributed validator threshold.

###### Source

[types.ts:113](https://github.com/ObolNetwork/obol-packages/blob/6c0f69c/packages/obol-sdk/src/types.ts#L113)

##### timestamp

> **timestamp**: `string`

The cluster creation timestamp.

###### Source

[types.ts:107](https://github.com/ObolNetwork/obol-packages/blob/6c0f69c/packages/obol-sdk/src/types.ts#L107)

##### uuid

> **uuid**: `string`

The cluster uuid.

###### Source

[types.ts:104](https://github.com/ObolNetwork/obol-packages/blob/6c0f69c/packages/obol-sdk/src/types.ts#L104)

##### validators

> **validators**: [`ClusterValidator`](README.md#clustervalidator)[]

The clusters validators information.

###### Inherited from

[`ClusterPayload`](README.md#clusterpayload).[`validators`](README.md#validators-1)

###### Source

[types.ts:83](https://github.com/ObolNetwork/obol-packages/blob/6c0f69c/packages/obol-sdk/src/types.ts#L83)

##### version

> **version**: `string`

The cluster configuration version.

###### Source

[types.ts:95](https://github.com/ObolNetwork/obol-packages/blob/6c0f69c/packages/obol-sdk/src/types.ts#L95)

***

### ClusterLock

Cluster Lock (Cluster Details after DKG is complete)

#### Properties

##### cluster\_definition

> **cluster\_definition**: [`ClusterDefintion`](README.md#clusterdefintion)

The cluster definition.

###### Source

[types.ts:197](https://github.com/ObolNetwork/obol-packages/blob/6c0f69c/packages/obol-sdk/src/types.ts#L197)

##### distributed\_validators

> **distributed\_validators**: [`DistributedValidator`](README.md#distributedvalidator)[]

The cluster distributed validators.

###### Source

[types.ts:200](https://github.com/ObolNetwork/obol-packages/blob/6c0f69c/packages/obol-sdk/src/types.ts#L200)

##### lock\_hash

> **lock\_hash**: `string`

The hash of the cluster lock.

###### Source

[types.ts:206](https://github.com/ObolNetwork/obol-packages/blob/6c0f69c/packages/obol-sdk/src/types.ts#L206)

##### node\_signatures

> **node\_signatures**: `string`[]

Node Signature for the lock hash by the node secp256k1 key.

###### Source

[types.ts:209](https://github.com/ObolNetwork/obol-packages/blob/6c0f69c/packages/obol-sdk/src/types.ts#L209)

##### signature\_aggregate

> **signature\_aggregate**: `string`

The cluster bls signature aggregate.

###### Source

[types.ts:203](https://github.com/ObolNetwork/obol-packages/blob/6c0f69c/packages/obol-sdk/src/types.ts#L203)

***

### ClusterPayload

Cluster Required Configuration

#### Extended by

- [`ClusterDefintion`](README.md#clusterdefintion)

#### Properties

##### name

> **name**: `string`

The cluster name.

###### Source

[types.ts:77](https://github.com/ObolNetwork/obol-packages/blob/6c0f69c/packages/obol-sdk/src/types.ts#L77)

##### operators

> **operators**: [`ClusterOperator`](README.md#clusteroperator)[]

The cluster nodes operators addresses.

###### Source

[types.ts:80](https://github.com/ObolNetwork/obol-packages/blob/6c0f69c/packages/obol-sdk/src/types.ts#L80)

##### validators

> **validators**: [`ClusterValidator`](README.md#clustervalidator)[]

The clusters validators information.

###### Source

[types.ts:83](https://github.com/ObolNetwork/obol-packages/blob/6c0f69c/packages/obol-sdk/src/types.ts#L83)

## Type Aliases

### BuilderRegistration

> **BuilderRegistration**: `Object`

Pre-generated Signed Validator Builder Registration

#### Type declaration

##### message

> **message**: [`BuilderRegistrationMessage`](README.md#builderregistrationmessage)

Builder registration message.

##### signature

> **signature**: `string`

BLS signature of the builder registration message.

#### Source

[types.ts:143](https://github.com/ObolNetwork/obol-packages/blob/6c0f69c/packages/obol-sdk/src/types.ts#L143)

***

### BuilderRegistrationMessage

> **BuilderRegistrationMessage**: `Object`

Unsigned DV Builder Registration Message

#### Type declaration

##### fee\_recipient

> **fee\_recipient**: `string`

The DV fee recipient.

##### gas\_limit

> **gas\_limit**: `number`

Default is 30000000.

##### pubkey

> **pubkey**: `string`

The public key of the DV.

##### timestamp

> **timestamp**: `number`

Timestamp when generating cluster lock file.

#### Source

[types.ts:125](https://github.com/ObolNetwork/obol-packages/blob/6c0f69c/packages/obol-sdk/src/types.ts#L125)

***

### ClusterCreator

> **ClusterCreator**: `Object`

Cluster Creator

#### Type declaration

##### address

> **address**: `string`

The creator address.

##### config\_signature?

> **config\_signature**?: `string`

The cluster configuration signature.

#### Source

[types.ts:51](https://github.com/ObolNetwork/obol-packages/blob/6c0f69c/packages/obol-sdk/src/types.ts#L51)

***

### ClusterOperator

> **ClusterOperator**: `Object`

Cluster Node Operator

#### Type declaration

##### address

> **address**: `string`

The operator address.

##### config\_signature?

> **config\_signature**?: `string`

The operator configuration signature.

##### enr?

> **enr**?: `string`

The operator ethereum node record.

##### enr\_signature?

> **enr\_signature**?: `string`

The operator enr signature.

##### fork\_version?

> **fork\_version**?: `string`

The cluster fork_version.

##### version?

> **version**?: `string`

The cluster version.

#### Source

[types.ts:22](https://github.com/ObolNetwork/obol-packages/blob/6c0f69c/packages/obol-sdk/src/types.ts#L22)

***

### ClusterValidator

> **ClusterValidator**: `Object`

Cluster Validator

#### Type declaration

##### fee\_recipient\_address

> **fee\_recipient\_address**: `string`

The validator fee recipient address.

##### withdrawal\_address

> **withdrawal\_address**: `string`

The validator reward address.

#### Source

[types.ts:62](https://github.com/ObolNetwork/obol-packages/blob/6c0f69c/packages/obol-sdk/src/types.ts#L62)

***

### DepositData

> **DepositData**: `Object`

Deposit Data

#### Type declaration

##### amount

> **amount**: `string`

32 ethers.

##### deposit\_data\_root

> **deposit\_data\_root**: `string`

A checksum for DepositData fields .

##### pubkey

> **pubkey**: `string`

The public key of the distributed validator.

##### signature

> **signature**: `string`

BLS signature of the deposit message.

##### withdrawal\_credentials

> **withdrawal\_credentials**: `string`

The 0x01 withdrawal address of the DV.

#### Source

[types.ts:155](https://github.com/ObolNetwork/obol-packages/blob/6c0f69c/packages/obol-sdk/src/types.ts#L155)

***

### DistributedValidator

> **DistributedValidator**: `Object`

Distributed Validator

#### Type declaration

##### builder\_registration

> **builder\_registration**: [`BuilderRegistration`](README.md#builderregistration)

pre-generated signed validator builder registration to be sent to builder network.

##### deposit\_data

> **deposit\_data**: `Partial`\<[`DepositData`](README.md#depositdata)\>

The required deposit data for activating the DV.

##### distributed\_public\_key

> **distributed\_public\_key**: `string`

The public key of the distributed validator.

##### public\_shares

> **public\_shares**: `string`[]

The public key of the node distributed validator share.

#### Source

[types.ts:176](https://github.com/ObolNetwork/obol-packages/blob/6c0f69c/packages/obol-sdk/src/types.ts#L176)

***

### OperatorPayload

> **OperatorPayload**: `Partial`\<[`ClusterOperator`](README.md#clusteroperator)\> & `Required`\<`Pick`\<[`ClusterOperator`](README.md#clusteroperator), `"enr"` \| `"version"`\>\>

A partial view of `ClusterOperator` with `enr` and `version` as required properties.

#### Source

[types.ts:46](https://github.com/ObolNetwork/obol-packages/blob/6c0f69c/packages/obol-sdk/src/types.ts#L46)
