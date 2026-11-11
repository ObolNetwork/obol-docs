---
sidebar_label: "Client"
slug: /sdk/classes/client
---

# Client

Defined in: [index.ts:185](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/index.ts#L185)

Primary entrypoint for the Obol SDK. Use this class to create, manage,
and activate Distributed Validators via the Obol API.

All operations are namespaced under the client instance:
- `client.incentives.*`  – claim and query Obol incentives
- `client.exit.*`        – validate and recombine voluntary exit signatures
- `client.splits.*`      – deploy OVM / SplitV2 reward-splitting contracts
- `client.eoa.*`         – EOA withdrawals and batch deposits

Cluster lifecycle helpers live directly on the client:
- [Client.hasAcceptedTerms](#hasacceptedterms)
- [Client.acceptObolLatestTermsAndConditions](#acceptobollatesttermsandconditions)
- [Client.createClusterDefinition](#createclusterdefinition)
- [Client.acceptClusterDefinition](#acceptclusterdefinition)
- [Client.getClusterDefinition](#getclusterdefinition)
- [Client.getClusterLock](#getclusterlock)
- [Client.getClusterLockByHash](#getclusterlockbyhash)
- [Client.getDepositData](#getdepositdata)
- [Client.createObolRewardsSplit](#createobolrewardssplit)
- [Client.createObolTotalSplit](#createoboltotalsplit)
- [Client.getOWRTranches](#getowrtranches)

Supported networks (by `chainId`): Mainnet (1) and Hoodi (560048), plus
Gnosis (100) and Sepolia (11155111) for cluster definitions and locks only
(no splitter contracts; not recommended for new clusters). Any other
`chainId` throws [UnsupportedChainError](UnsupportedChainError.md) from the constructor.

## Example

```typescript
import { Client } from "@obolnetwork/obol-sdk";
import { Wallet } from "ethers";

const signer = new Wallet(process.env.PRIVATE_KEY!);
const client = new Client({ chainId: 560048 }, signer);

// 1. Accept terms (required once before creating/updating data)
await client.acceptObolLatestTermsAndConditions();

// 2. Create a cluster definition
const configHash = await client.createClusterDefinition({
  name: "my-cluster",
  operators: [{ address: "0x..." }],
  validators: [{
    fee_recipient_address: "0x...",
    withdrawal_address: "0x...",
  }],
});

// 3. Retrieve the definition
const def = await client.getClusterDefinition(configHash);
```

## Extends

- `Base`

## Constructors

### Constructor

> **new Client**(`config`, `signer?`, `provider?`): `Client`

Defined in: [index.ts:254](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/index.ts#L254)

Creates a new Obol SDK client.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `config` | `BaseConfig` | Client configuration object. |
| `signer?` | `Signer` | Any ethers v6 `Signer` (`Wallet`, `HDNodeWallet`, `JsonRpcSigner`, `NonceManager`, or a custom `AbstractSigner`). Required for any write operation (creating clusters, deploying splits, claiming incentives). Read-only operations (`getClusterDefinition`, `getClusterLock`) work without a signer. |
| `provider?` | `Provider` | An ethers `Provider`. If omitted, falls back to `signer.provider`. |

#### Returns

`Client`

#### Throws

If `chainId` is not a supported chain.

#### Throws

If `baseUrl` is not an allowed Obol API URL.

#### Example

```typescript
// Minimal read-only client (no signer)
const readClient = new Client({ chainId: 1 });
const def = await readClient.getClusterDefinition(configHash);

// Full client with signer for write operations
const client = new Client({ chainId: 560048 }, signer);
```

#### Overrides

`Base.constructor`

## Properties

| Property | Modifier | Type | Description | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="incentives"></a> `incentives` | `public` | [`Incentives`](Incentives.md) | Incentives module – claim and query Obol incentive rewards. **See** [Incentives](Incentives.md) | [index.ts:193](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/index.ts#L193) |
| <a id="exit"></a> `exit` | `public` | [`Exit`](Exit.md) | Exit module – verify partial exit signatures and recombine exit blobs for distributed validator voluntary exits. **See** [Exit](Exit.md) | [index.ts:201](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/index.ts#L201) |
| <a id="splits"></a> `splits` | `public` | [`ObolSplits`](ObolSplits.md) | Splits module – deploy OVM and SplitV2 contracts for reward/principal splitting, request withdrawals, and deposit to OVM contracts. **See** [ObolSplits](ObolSplits.md) | [index.ts:209](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/index.ts#L209) |
| <a id="eoa"></a> `eoa` | `public` | [`EOA`](EOA.md) | EOA module – request withdrawals and batch-deposit validators via Externally Owned Account contracts. **See** [EOA](EOA.md) | [index.ts:217](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/index.ts#L217) |
| <a id="provider"></a> `provider` | `public` | `Provider` \| `null` \| `undefined` | The blockchain provider used for on-chain reads. Defaults to `signer.provider` when a signer is supplied. | [index.ts:223](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/index.ts#L223) |

## Methods

### request()

> `protected` **request**\<`T`\>(`endpoint`, `options?`): `Promise`\<`T`\>

Defined in: [base.ts:96](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/base.ts#L96)

Sends a request to the Obol API and parses the JSON response.

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `endpoint` | `string` |
| `options?` | `RequestInit` |

#### Returns

`Promise`\<`T`\>

#### Throws

(or a status-specific subclass) on a non-2xx response.

#### Throws

If no response arrives within `timeoutMs`.

#### Inherited from

`Base.request`

***

### hasAcceptedTerms()

> **hasAcceptedTerms**(`address?`): `Promise`\<`boolean`\>

Defined in: [index.ts:295](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/index.ts#L295)

Checks whether an address has accepted the latest Obol terms and conditions.

This is a read-only API call; no signature is requested.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `address?` | `string` | Address to check. Defaults to the signer's address. |

#### Returns

`Promise`\<`boolean`\>

`true` if the terms have been accepted, otherwise `false`.

#### Throws

If no address is given and no signer was provided.

#### Throws

If `address` is given and is not a 0x-prefixed 20-byte
  address (checked before calling the API).

#### Throws

If the API rejects the address.

#### Example

```typescript
if (!(await client.hasAcceptedTerms())) {
  await client.acceptObolLatestTermsAndConditions();
}
```

***

### acceptObolLatestTermsAndConditions()

> **acceptObolLatestTermsAndConditions**(`options?`): `Promise`\<`string`\>

Defined in: [index.ts:343](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/index.ts#L343)

Accepts the latest Obol terms and conditions.

**Must be called once** before any write operation
(`createClusterDefinition`, `acceptClusterDefinition`, etc.).

- Requires a `signer` to be provided at client construction.
- Signs an EIP-712 typed-data message; no on-chain transaction is sent.
- Not idempotent by default: calling it again after acceptance throws a
  [ConflictError](ConflictError.md). Pass `{ ifNotAccepted: true }` to first check with
  [Client.hasAcceptedTerms](#hasacceptedterms) and return without signing if the signer
  has already accepted.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options?` | \{ `ifNotAccepted?`: `boolean`; \} | Optional settings. |
| `options.ifNotAccepted?` | `boolean` | When `true`, skip signing and return [TERMS\_ACCEPTED\_MSG](../variables/TERMS_ACCEPTED_MSG.md) if the signer has already accepted the terms. |

#### Returns

`Promise`\<`string`\>

A success message string from the Obol API.

#### Throws

If no signer was provided to the client.

#### Throws

If the terms were already accepted by this address
  (only when `ifNotAccepted` is not set).

#### Example

```typescript
const message = await client.acceptObolLatestTermsAndConditions({
  ifNotAccepted: true,
});
console.log(message); // "successful authorization"
```

***

### ~~createObolRewardsSplit()~~

> **createObolRewardsSplit**(`rewardsSplitPayload`): `Promise`\<[`ClusterValidator`](../type-aliases/ClusterValidator.md)\>

Defined in: [index.ts:437](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/index.ts#L437)

Deploys an Optimistic Withdrawal Recipient (OWR) and a Splitter Proxy contract.

Use this when the **principal** goes to a single address and only **rewards**
are split among recipients. For splitting both principal and rewards, see
[Client.createObolTotalSplit](#createoboltotalsplit).

- Requires a `signer` with ETH to pay deployment gas.
- Sends one or more on-chain transactions (irreversible).
- Automatically appends the Obol Retroactive Funding (RAF) recipient at the
  configured percentage (default 1%).
- Only supported on Mainnet (1) and Hoodi (560048).
- With a `controllerAddress` (a mutable split), the splitter is deployed
  in its own transaction first and the OWR is created with its address in
  a second one, since a mutable split's address cannot be predicted.
  Without one, an immutable splitter and the OWR are deployed together.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `rewardsSplitPayload` | [`RewardsSplitPayload`](../interfaces/RewardsSplitPayload.md) | Configuration for the OWR and splitter deployment. |

#### Returns

`Promise`\<[`ClusterValidator`](../type-aliases/ClusterValidator.md)\>

The deployed OWR address as `withdrawal_address` and the
  splitter proxy address as `fee_recipient_address`.

#### Throws

If no signer was provided.

#### Throws

If the signer is connected to a different chain.

#### Throws

If the chain does not support splitters.

#### Example

```typescript
const { withdrawal_address, fee_recipient_address } =
  await client.createObolRewardsSplit({
    splitRecipients: [
      { account: "0xOperator1...", percentAllocation: 50 },
      { account: "0xOperator2...", percentAllocation: 49 },
    ],
    principalRecipient: "0xPrincipalAddress...",
    etherAmount: 32,
  });
```

#### Deprecated

For new clusters use
  [ObolSplits.createValidatorManagerAndRewardsSplit](ObolSplits.md#createvalidatormanagerandrewardssplit). An OWR cannot
  make EIP-7002 withdrawal requests, so getting the stake back depends on
  pre-signed exits. Reading existing OWRs ([Client.getOWRTranches](#getowrtranches))
  is unaffected.

***

### ~~createObolTotalSplit()~~

> **createObolTotalSplit**(`totalSplitPayload`): `Promise`\<[`ClusterValidator`](../type-aliases/ClusterValidator.md)\>

Defined in: [index.ts:612](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/index.ts#L612)

Deploys a Splitter Proxy contract that splits **both principal and rewards**.

Unlike [Client.createObolRewardsSplit](#createobolrewardssplit), this method does not deploy an
OWR – the splitter address is used as both `withdrawal_address` and
`fee_recipient_address`.

- Requires a `signer` with ETH to pay deployment gas.
- Sends an on-chain transaction if the splitter is not already deployed (irreversible).
- Without a `controllerAddress` (an immutable split), if the predicted
  splitter is already deployed, returns the existing address without
  sending a transaction (idempotent). With one (a mutable split), a new
  splitter is deployed on every call.
- Automatically appends the Obol RAF recipient.
- Only supported on Mainnet (1) and Hoodi (560048).

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `totalSplitPayload` | [`TotalSplitPayload`](../type-aliases/TotalSplitPayload.md) | Configuration for the splitter deployment. |

#### Returns

`Promise`\<[`ClusterValidator`](../type-aliases/ClusterValidator.md)\>

The splitter address as both `withdrawal_address` and `fee_recipient_address`.

#### Throws

If no signer was provided.

#### Throws

If the signer is connected to a different chain.

#### Throws

If the chain does not support splitters.

#### Throws

If required on-chain factory contracts are unavailable.

#### Example

```typescript
const { withdrawal_address, fee_recipient_address } =
  await client.createObolTotalSplit({
    splitRecipients: [
      { account: "0xOperator1...", percentAllocation: 50 },
      { account: "0xOperator2...", percentAllocation: 49.9 },
    ],
  });
// withdrawal_address === fee_recipient_address (same splitter)
```

#### Deprecated

For new clusters use
  [ObolSplits.createValidatorManagerAndTotalSplit](ObolSplits.md#createvalidatormanagerandtotalsplit). A splitter as
  withdrawal address cannot make EIP-7002 withdrawal requests, so getting
  the stake back depends on pre-signed exits. Existing splitters are
  unaffected.

***

### getOWRTranches()

> **getOWRTranches**(`owrAddress`): `Promise`\<[`OWRTranches`](../type-aliases/OWRTranches.md)\>

Defined in: [index.ts:731](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/index.ts#L731)

Reads the tranches of a deployed Optimistic Withdrawal Recipient (OWR) contract.

Returns the principal recipient, reward recipient, and staked principal amount
configured in the OWR. This is a read-only on-chain call (no transaction sent).

- Uses the client's provider (or the signer's provider); no signer is
  needed when a provider was passed to the `Client`.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `owrAddress` | `string` | The Ethereum address of the deployed OWR contract. |

#### Returns

`Promise`\<[`OWRTranches`](../type-aliases/OWRTranches.md)\>

The OWR tranche data: `principalRecipient`, `rewardRecipient`, and `amountOfPrincipalStake`.

#### Throws

If the client has neither a provider nor a signer.

#### Example

```typescript
const tranches = await client.getOWRTranches("0xOWRAddress...");
console.log(tranches.principalRecipient);
console.log(tranches.rewardRecipient);
console.log(tranches.amountOfPrincipalStake);
```

***

### createClusterDefinition()

> **createClusterDefinition**(`newCluster`, `version?`): `Promise`\<`string`\>

Defined in: [index.ts:783](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/index.ts#L783)

Creates a new cluster definition and registers it with the Obol API.

A cluster definition describes the operators, validators, and configuration
for a Distributed Key Generation (DKG) ceremony. After creation, each operator
must call [Client.acceptClusterDefinition](#acceptclusterdefinition) to join.

- Requires [Client.acceptObolLatestTermsAndConditions](#acceptobollatesttermsandconditions) to have been called first.
- Requires a `signer`.
- The `config_hash` returned is the unique identifier for this cluster.
- Threshold is automatically set to `ceil(2/3 * operators.length)`.
- Creating a duplicate cluster throws a [ConflictError](ConflictError.md).

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `newCluster` | [`ClusterPayload`](../type-aliases/ClusterPayload.md) | `undefined` | The cluster configuration payload. |
| `version` | `string` | `CONFIG_VERSION` | Definition version. Defaults to CONFIG\_VERSION; must be one of [SUPPORTED\_DEFINITION\_VERSIONS](../variables/SUPPORTED_DEFINITION_VERSIONS.md). Pass an earlier version such as `'v1.10.0'` for DKG nodes running a charon release without the latest schema. |

#### Returns

`Promise`\<`string`\>

The `config_hash` string that uniquely identifies this cluster definition.

#### Throws

If no signer was provided.

#### Throws

If `version` is not supported.

#### Throws

If the payload fails validation (unknown
  fields, fewer than 4 operators, invalid or duplicate addresses, zero
  withdrawal or fee recipient address).

#### Throws

If the signer is connected to a different chain.

#### Throws

If an identical cluster definition already exists.

#### Example

```typescript
const configHash = await client.createClusterDefinition({
  name: "my-dvt-cluster",
  operators: [{ address: "0xOp1..." }, { address: "0xOp2..." }],
  validators: [{
    fee_recipient_address: "0xFeeRecipient...",
    withdrawal_address: "0xWithdrawal...",
  }],
});
console.log("Cluster created:", configHash);
```

***

### acceptClusterDefinition()

> **acceptClusterDefinition**(`operatorPayload`, `configHash`): `Promise`\<[`ClusterDefinition`](../interfaces/ClusterDefinition.md)\>

Defined in: [index.ts:896](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/index.ts#L896)

Accepts (joins) an existing cluster definition as an operator.

Each operator in the cluster must call this method with their ENR and the
cluster's `config_hash` to signal readiness for the DKG ceremony.

Before signing, the definition is fetched and verified locally: the
returned `config_hash` equals `configHash`, the `config_hash` recomputed
from the definition's contents matches, and the definition's
`fork_version` matches this client's chain. The signer's address must be
one of the definition's operators. Integrators should show the user the
definition's withdrawal and fee recipient addresses before calling this
method.

- Requires a `signer` (the operator's address is derived from it).
- Signs two EIP-712 messages: one for the config hash, one for the ENR.
- If this operator has already accepted with the same ENR, the current
  definition is returned and nothing is signed.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `operatorPayload` | [`OperatorPayload`](../type-aliases/OperatorPayload.md) | Operator data. Must include `enr` (Ethereum Node Record). `version` is optional and defaults to the definition's version; if given, it must match it. |
| `configHash` | `string` | The `config_hash` returned by [Client.createClusterDefinition](#createclusterdefinition). |

#### Returns

`Promise`\<[`ClusterDefinition`](../interfaces/ClusterDefinition.md)\>

The updated cluster definition with the operator's acceptance recorded.

#### Throws

If no signer was provided.

#### Throws

If `configHash` is not a 0x-prefixed
  32-byte hex string.

#### Throws

If the signer is connected to a different chain.

#### Throws

If the definition fails verification,
  its version is below [MIN\_SUPPORTED\_CLUSTER\_VERSION](../variables/MIN_SUPPORTED_CLUSTER_VERSION.md), or
  `operatorPayload.version` differs from the definition's version.

#### Throws

If the operator payload is invalid.

#### Throws

If the signer is not an operator in the definition.

#### Example

```typescript
const updatedDef = await client.acceptClusterDefinition(
  { enr: "enr:-LK4Q..." },
  configHash,
);
```

***

### getClusterDefinition()

> **getClusterDefinition**(`configHash`): `Promise`\<[`ClusterDefinition`](../interfaces/ClusterDefinition.md)\>

Defined in: [index.ts:1036](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/index.ts#L1036)

Retrieves a cluster definition by its configuration hash.

This is a read-only API call – no signer is required.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `configHash` | `string` | The `config_hash` returned by [Client.createClusterDefinition](#createclusterdefinition). |

#### Returns

`Promise`\<[`ClusterDefinition`](../interfaces/ClusterDefinition.md)\>

The full cluster definition including operators, validators, and metadata.

#### Throws

If no cluster definition exists for the given hash (404).

#### Throws

If `configHash` is not a 0x-prefixed 32-byte hex string.

#### Example

```typescript
const definition = await client.getClusterDefinition(configHash);
console.log(definition.name, definition.operators.length);
```

***

### getClusterLock()

> **getClusterLock**(`configHash`): `Promise`\<[`ClusterLock`](../type-aliases/ClusterLock.md)\>

Defined in: [index.ts:1067](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/index.ts#L1067)

Retrieves a cluster lock by the cluster's configuration hash.

A cluster lock is generated after a successful DKG ceremony and contains
the distributed validators, their public key shares, and deposit data.
This is a read-only API call – no signer is required.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `configHash` | `string` | The `config_hash` from the cluster definition. |

#### Returns

`Promise`\<[`ClusterLock`](../type-aliases/ClusterLock.md)\>

The cluster lock including distributed validators and deposit data.

#### Throws

If no lock exists for the given config hash (DKG not yet complete, or not found).

#### Throws

If `configHash` is not a 0x-prefixed 32-byte hex string.

#### Example

```typescript
const lock = await client.getClusterLock(configHash);
console.log(lock.distributed_validators.length);
console.log(lock.lock_hash);
```

***

### getClusterLockByHash()

> **getClusterLockByHash**(`lockHash`): `Promise`\<[`ClusterLock`](../type-aliases/ClusterLock.md)\>

Defined in: [index.ts:1095](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/index.ts#L1095)

Retrieves a cluster lock by its lock hash (as opposed to config hash).

Use this when you have the `lock_hash` directly rather than the `config_hash`.
This is a read-only API call – no signer is required.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `lockHash` | `string` | The `lock_hash` from a cluster lock. |

#### Returns

`Promise`\<[`ClusterLock`](../type-aliases/ClusterLock.md)\>

The cluster lock including distributed validators and deposit data.

#### Throws

If no lock exists for the given lock hash (not found).

#### Throws

If `lockHash` is not a 0x-prefixed 32-byte hex string.

#### Example

```typescript
const lock = await client.getClusterLockByHash(lockHash);
console.log(lock.cluster_definition.name);
```

***

### getDepositData()

> **getDepositData**(`lockHash`, `__namedParameters?`): `Promise`\<[`LockDepositData`](../type-aliases/LockDepositData.md)\>

Defined in: [index.ts:1143](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/index.ts#L1143)

Fetches a cluster lock by lock hash and returns its deposit data as
payloads for [EOA.deposit](EOA.md#deposit) / [ObolSplits.deposit](ObolSplits.md#deposit)
(`amount` in wei, hex fields 0x-prefixed).

By default the lock is fully validated first ([validateClusterLock](../functions/validateClusterLock.md):
operator signatures, lock hash, every deposit signature). This is
CPU-bound and can take from seconds to about a minute for locks with
hundreds of validators; pass `verify: false` only if the lock was already
validated. The lock's fork version must match this client's chain.

Locks from v1.8.0 carry `partial_deposit_data`, which can hold several
deposit amounts per validator (e.g. 1 ETH and 32 ETH). When there is more
than one, pass `amount` (wei) to choose, or read `depositsByAmount`;
`deposits` is then only set for the chosen amount. Older locks with a
single `deposit_data` are supported.

This is a read-only API call – no signer is required.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `lockHash` | `string` | The `lock_hash` of the cluster lock. |
| `__namedParameters` | [`GetDepositDataOptions`](../type-aliases/GetDepositDataOptions.md) | - |

#### Returns

`Promise`\<[`LockDepositData`](../type-aliases/LockDepositData.md)\>

The lock hash, the available amounts, deposits grouped by amount,
  and `deposits` for the chosen (or only) amount.

#### Throws

If the lock is not found, fails validation, was created
  for another chain, has missing/malformed deposit data, or `amount` is
  not available for every validator.

#### Example

```typescript
const { deposits } = await client.getDepositData(lockHash, {
  amount: "32000000000000000000",
});
await client.eoa.deposit({ deposits: deposits! });
```
