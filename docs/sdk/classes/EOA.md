---
sidebar_label: "EOA"
slug: /sdk/classes/eoa
---

# EOA

Defined in: [eoa/eoa.ts:54](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/eoa/eoa.ts#L54)

Manages Externally Owned Account (EOA) operations: validator withdrawals
and batch deposits via on-chain contracts.

Do not instantiate directly; access via `client.eoa`.

Available methods:
- [EOA.requestWithdrawal](#requestwithdrawal) – request validator withdrawal
- [EOA.deposit](#deposit) – batch-deposit validators for gas efficiency

All methods send on-chain transactions and require a signer with ETH for gas.

## Example

```typescript
const client = new Client({ chainId: 1 }, signer, provider);

// Request withdrawal
const { txHash } = await client.eoa.requestWithdrawal({
  pubkey: "0xValidatorPubkey...",
  allocation: 32,
});

// Batch deposit
const { txHashes } = await client.eoa.deposit({
  deposits: [{ pubkey: "0x...", withdrawal_credentials: "0x...", ... }],
});
```

## Methods

### requestWithdrawal()

> **requestWithdrawal**(`payload`, `options?`): `Promise`\<\{ `txHash`: `string` \| `null`; \}\>

Defined in: [eoa/eoa.ts:101](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/eoa/eoa.ts#L101)

Requests withdrawal of validator funds via the EOA withdrawal contract.

Sends an on-chain transaction. Requires both a signer and a provider.

The fee is checked against the current fee read from the EIP-7002
withdrawal request contract. If `requiredFee` is omitted, exactly the
current fee is sent: the EIP-7002 contract keeps any excess, and if the
fee rises before the transaction is mined it reverts (costing only gas).
If `requiredFee` is given, it must cover the current fee and be at most
max(10x the current fee, 1 gwei); otherwise the call throws.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `payload` | [`EOAWithdrawalPayload`](../type-aliases/EOAWithdrawalPayload.md) | Withdrawal data including validator `pubkey`, `allocation` (in ETH), and optional `requiredFee` (in wei). |
| `options?` | [`WriteOptions`](../type-aliases/WriteOptions.md) | Optional `onSent` callback, called with each transaction hash as soon as it is broadcast. |

#### Returns

`Promise`\<\{ `txHash`: `string` \| `null`; \}\>

The transaction hash, or `null` if no transaction was needed.

#### Throws

If no signer was provided.

#### Throws

If the signer is connected to a different chain.

#### Throws

If the chain has no EOA withdrawal contract.

#### Throws

If `requiredFee` is below the current fee or far above it.

#### Throws

If the call fails after a transaction
  was broadcast (`txHashes`, `pendingTxHash` and `cause` say what was sent).

#### Example

```typescript
const { txHash } = await client.eoa.requestWithdrawal({
  pubkey: "0xValidatorPubkey...",
  allocation: 32,
});
```

***

### deposit()

> **deposit**(`payload`, `options?`): `Promise`\<\{ `txHashes`: `string`[]; \}\>

Defined in: [eoa/eoa.ts:195](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/eoa/eoa.ts#L195)

Batch-deposits validators to the beacon chain via the Pier Two batch
deposit contract for gas efficiency.

Due to EVM gas limits, it is recommended to deposit at most 500
validators per call.

Before sending, each deposit is checked: `amount` (wei) is a whole number
of gwei between 1 ETH and 32 ETH (2048 ETH for 0x02 credentials),
`deposit_data_root` matches the deposit fields, the BLS signature is valid
for this chain, and, if `expectedWithdrawalAddress` is given, the
withdrawal credentials point at it. For top-ups to validators that
already exist on the beacon chain, pass `kind: 'topUp'`: the signature is
not checked, the withdrawal credentials may be all zero instead of the
expected ones, and up to 2048 ETH is allowed per deposit. Without it, a
deposit with an all-zero signature is refused (`DEPOSIT_LOOKS_LIKE_TOP_UP`).
The output of [Client.getDepositData](Client.md#getdepositdata) can be passed as `deposits`.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `payload` | [`EOADepositPayload`](../type-aliases/EOADepositPayload.md) | Deposit data including an array of validator deposit objects. |
| `options?` | [`WriteOptions`](../type-aliases/WriteOptions.md) | Optional `onSent` callback, called with each transaction hash as soon as it is broadcast. |

#### Returns

`Promise`\<\{ `txHashes`: `string`[]; \}\>

An array of transaction hashes, one per batch.

#### Throws

If no signer was provided.

#### Throws

If the signer is connected to a different chain.

#### Throws

If the chain has no batch deposit contract.

#### Throws

If the payload is invalid.

#### Throws

If any deposit fails the checks above.

#### Throws

If the call fails after a transaction
  was broadcast (`txHashes`, `pendingTxHash` and `cause` say what was sent).

#### Example

```typescript
const { txHashes } = await client.eoa.deposit({
  deposits: [{
    pubkey: "0x...",
    withdrawal_credentials: "0x...",
    deposit_data_root: "0x...",
    signature: "0x...",
    amount: "32000000000000000000",
  }],
  expectedWithdrawalAddress: "0xWithdrawalAddress...",
});
```
