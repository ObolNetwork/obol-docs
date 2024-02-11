---
id: "modules"
title: "@obolnetwork/obol-sdk"
sidebar_label: "Exports"
sidebar_position: 0.5
custom_edit_url: null
---

## Enumerations

- [FORK\_MAPPING](enums/FORK_MAPPING)

## Classes

- [Client](classes/Client)

## Interfaces

- [ClusterDefintion](interfaces/ClusterDefintion)
- [ClusterLock](interfaces/ClusterLock)
- [ClusterPayload](interfaces/ClusterPayload)

## Type Aliases

### BuilderRegistration

Ƭ **BuilderRegistration**: `Object`

Pre-generated Signed Validator Builder Registration

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | [`BuilderRegistrationMessage`](modules#builderregistrationmessage) | Builder registration message. |
| `signature` | `string` | BLS signature of the builder registration message. |

#### Defined in

types.ts:143

___

### BuilderRegistrationMessage

Ƭ **BuilderRegistrationMessage**: `Object`

Unsigned DV Builder Registration Message

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `fee_recipient` | `string` | The DV fee recipient. |
| `gas_limit` | `number` | Default is 30000000. |
| `pubkey` | `string` | The public key of the DV. |
| `timestamp` | `number` | Timestamp when generating cluster lock file. |

#### Defined in

types.ts:125

___

### ClusterCreator

Ƭ **ClusterCreator**: `Object`

Cluster Creator

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `address` | `string` | The creator address. |
| `config_signature?` | `string` | The cluster configuration signature. |

#### Defined in

types.ts:51

___

### ClusterOperator

Ƭ **ClusterOperator**: `Object`

Cluster Node Operator

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `address` | `string` | The operator address. |
| `config_signature?` | `string` | The operator configuration signature. |
| `enr?` | `string` | The operator ethereum node record. |
| `enr_signature?` | `string` | The operator enr signature. |
| `fork_version?` | `string` | The cluster fork_version. |
| `version?` | `string` | The cluster version. |

#### Defined in

types.ts:22

___

### ClusterValidator

Ƭ **ClusterValidator**: `Object`

Cluster Validator

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `fee_recipient_address` | `string` | The validator fee recipient address. |
| `withdrawal_address` | `string` | The validator reward address. |

#### Defined in

types.ts:62

___

### DepositData

Ƭ **DepositData**: `Object`

Deposit Data

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | `string` | 32 ethers. |
| `deposit_data_root` | `string` | A checksum for DepositData fields . |
| `pubkey` | `string` | The public key of the distributed validator. |
| `signature` | `string` | BLS signature of the deposit message. |
| `withdrawal_credentials` | `string` | The 0x01 withdrawal address of the DV. |

#### Defined in

types.ts:155

___

### DistributedValidator

Ƭ **DistributedValidator**: `Object`

Distributed Validator

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `builder_registration` | [`BuilderRegistration`](modules#builderregistration) | pre-generated signed validator builder registration to be sent to builder network. |
| `deposit_data` | `Partial`<[`DepositData`](modules#depositdata)\> | The required deposit data for activating the DV. |
| `distributed_public_key` | `string` | The public key of the distributed validator. |
| `public_shares` | `string`[] | The public key of the node distributed validator share. |

#### Defined in

types.ts:176

___

### OperatorPayload

Ƭ **OperatorPayload**: `Partial`<[`ClusterOperator`](modules#clusteroperator)\> & `Required`<`Pick`<[`ClusterOperator`](modules#clusteroperator), ``"enr"`` \| ``"version"``\>\>

A partial view of `ClusterOperator` with `enr` and `version` as required properties.

#### Defined in

types.ts:46
