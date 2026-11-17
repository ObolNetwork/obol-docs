---
sidebar_label: "Incentives"
slug: /sdk/classes/incentives
---

# Incentives

Defined in: [incentives/incentives.ts:64](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/incentives/incentives.ts#L64)

Manages Obol incentive rewards – querying eligibility and claiming from
on-chain Merkle Distributor contracts.

Do not instantiate directly; access via `client.incentives`.

## Example

```typescript
const client = new Client({ chainId: 560048 }, signer);

// Check claimable incentives
const data = await client.incentives.getIncentivesByAddress("0xOperator...");

// Check if already claimed
const claimed = await client.incentives.isClaimed(data.contract_address, data.index);

// Read-only checks before claiming (claimIncentives also runs them)
const { ok, issues } = await client.incentives.preflightClaim("0xOperator...");

// Claim (sends on-chain transaction)
const { txHash } = await client.incentives.claimIncentives("0xOperator...");
```

## Methods

### claimIncentives()

> **claimIncentives**(`address`, `options?`): `Promise`\<[`ClaimIncentivesResponse`](../type-aliases/ClaimIncentivesResponse.md)\>

Defined in: [incentives/incentives.ts:123](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/incentives/incentives.ts#L123)

Claims Obol incentives from a Merkle Distributor contract for the given address.

Automatically fetches incentive data, runs [Incentives.preflightClaim](#preflightclaim)'s
checks, and submits the on-chain claim transaction. Returns `{ txHash: null }`
if incentives were already claimed (idempotent).

The claim may be sent for any address: the signer pays gas and the tokens are
transferred to `address`.

A contract-wallet signer (a Safe over WalletConnect) is supported: the
SDK waits for the Safe's `ExecutionSuccess` (up to 30 minutes) and returns
the executed transaction hash; `onSent` reports the Safe's own hash with
`contractWallet: true`.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `address` | `string` | The operator's Ethereum address to claim incentives for. |
| `options?` | [`WriteOptions`](../type-aliases/WriteOptions.md) | Optional `onSent` callback, called with each transaction hash as soon as it is broadcast. |

#### Returns

`Promise`\<[`ClaimIncentivesResponse`](../type-aliases/ClaimIncentivesResponse.md)\>

The transaction hash, or `{ txHash: null }` if already claimed.

#### Throws

If no signer was provided.

#### Throws

If the signer is connected to a different chain.

#### Throws

If the address has no incentives
  (`NO_INCENTIVES`) or a pre-flight check fails (the message lists the
  issue codes; `issues` holds the details).

#### Throws

If the call fails after a transaction
  was broadcast (`txHashes`, `pendingTxHash` and `cause` say what was sent).

#### Example

```typescript
const { txHash } = await client.incentives.claimIncentives("0xOperator...");
if (txHash) {
  console.log("Claimed:", txHash);
} else {
  console.log("Already claimed");
}
```

***

### preflightClaim()

> **preflightClaim**(`address`): `Promise`\<[`PreflightResult`](../type-aliases/PreflightResult.md)\>

Defined in: [incentives/incentives.ts:217](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/incentives/incentives.ts#L217)

Runs read-only checks on the incentives for an address before claiming.
No signer or transaction is needed, but a provider is.

Checks that:
- the API data is for `address`;
- the contract is a known Obol `MerkleDistributorWithDeadline` and pays out
  the OBOL token for this chain;
- the Merkle proof matches the contract's `merkleRoot`;
- the index is not already claimed and the claim window is open.

Problems are returned as issues rather than thrown: `NO_INCENTIVES` when
the address has none, `INCENTIVES_NOT_FOUND` for a 404 from the API and
`INCENTIVES_FETCH_FAILED` for other API or network errors. Errors
reaching the provider are thrown.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `address` | `string` | The Ethereum address the incentives are claimed for. |

#### Returns

`Promise`\<[`PreflightResult`](../type-aliases/PreflightResult.md)\>

`{ ok, issues }`, where each issue has a `code`, `message` and `hint`.

#### Example

```typescript
const { ok, issues } = await client.incentives.preflightClaim("0xOperator...");
if (!ok) console.log(issues.map(i => i.code));
```

***

### isClaimed()

> **isClaimed**(`contractAddress`, `index`): `Promise`\<`boolean`\>

Defined in: [incentives/incentives.ts:273](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/incentives/incentives.ts#L273)

Checks whether incentives have already been claimed for a given operator index.

Read-only on-chain call – no transaction sent.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `contractAddress` | `string` | Address of the Merkle Distributor contract. |
| `index` | `number` | The operator's index in the Merkle tree (from [Incentives.getIncentivesByAddress](#getincentivesbyaddress)). |

#### Returns

`Promise`\<`boolean`\>

`true` if the incentives at that index have already been claimed.

#### Throws

If `contractAddress` is not an address
  (e.g. the empty address returned for an address without incentives) or
  `index` is not a non-negative integer.

#### Example

```typescript
const claimed = await client.incentives.isClaimed(
  "0xMerkleDistributor...",
  42,
);
```

***

### getIncentivesByAddress()

> **getIncentivesByAddress**(`address`): `Promise`\<[`ClaimableIncentives`](../type-aliases/ClaimableIncentives.md)\>

Defined in: [incentives/incentives.ts:310](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/incentives/incentives.ts#L310)

Fetches claimable incentive data for an operator address from the Obol API.

The returned data includes the Merkle proof, amount, and contract address
needed to claim on-chain. This is a read-only API call.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `address` | `string` | The operator's Ethereum address. |

#### Returns

`Promise`\<[`ClaimableIncentives`](../type-aliases/ClaimableIncentives.md)\>

Claimable incentive data including amount, Merkle proof, and
  contract address. For an address without incentives the API returns
  an empty `contract_address` and `index` -1.

#### Throws

If no incentives are found for the given address (404).

#### Throws

If `address` is not a 0x-prefixed 20-byte address.

#### Example

```typescript
const incentives = await client.incentives.getIncentivesByAddress("0xOperator...");
console.log(incentives.amount, incentives.contract_address);
```
