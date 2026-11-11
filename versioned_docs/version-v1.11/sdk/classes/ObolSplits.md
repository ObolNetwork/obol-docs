---
sidebar_label: "ObolSplits"
slug: /sdk/classes/obolsplits
---

# ObolSplits

Defined in: [splits/splits.ts:70](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/splits/splits.ts#L70)

Deploys and manages Obol Validator Manager (OVM) and SplitV2 contracts
for automated reward and principal splitting among cluster participants.

Do not instantiate directly; access via `client.splits`.

Available methods:
- [ObolSplits.createValidatorManagerAndRewardsSplit](#createvalidatormanagerandrewardssplit) – rewards-only split (single principal recipient)
- [ObolSplits.createValidatorManagerAndTotalSplit](#createvalidatormanagerandtotalsplit) – total split (principal also split)
- [ObolSplits.requestWithdrawal](#requestwithdrawal) – request withdrawal from an OVM contract
- [ObolSplits.deposit](#deposit) – deposit to an OVM contract

All write methods send on-chain transactions and require a signer with ETH for gas.

## Example

```typescript
const client = new Client({ chainId: 560048 }, signer);

const { withdrawal_address, fee_recipient_address } =
  await client.splits.createValidatorManagerAndRewardsSplit({
    rewardSplitRecipients: [
      { address: "0xOp1...", percentAllocation: 50 },
      { address: "0xOp2...", percentAllocation: 49 },
    ],
    principalRecipient: "0xPrincipal...",
    OVMOwnerAddress: "0xOwner...",
  });
```

## Methods

### createValidatorManagerAndRewardsSplit()

> **createValidatorManagerAndRewardsSplit**(`payload`): `Promise`\<[`ClusterValidator`](../type-aliases/ClusterValidator.md)\>

Defined in: [splits/splits.ts:113](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/splits/splits.ts#L113)

Deploys an OVM and SplitV2 contract for a **rewards-only** split scenario.

Principal goes to a single address; only validator rewards are split among
the configured recipients. Automatically appends the Obol RAF recipient.

- Sends one or more on-chain transactions (irreversible).
- Only supported on chains with OVM factory contracts (Mainnet, Hoodi).

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `payload` | [`OVMRewardsSplitPayload`](../type-aliases/OVMRewardsSplitPayload.md) | Configuration for the OVM and SplitV2 deployment. |

#### Returns

`Promise`\<[`ClusterValidator`](../type-aliases/ClusterValidator.md)\>

The OVM address as `withdrawal_address` and splitter as `fee_recipient_address`.

#### Throws

If no signer was provided.

#### Throws

If the signer is connected to a different chain.

#### Throws

If the chain does not support splitters.

#### Example

```typescript
const { withdrawal_address, fee_recipient_address } =
  await client.splits.createValidatorManagerAndRewardsSplit({
    rewardSplitRecipients: [
      { address: "0xOp1...", percentAllocation: 50 },
      { address: "0xOp2...", percentAllocation: 49 },
    ],
    principalRecipient: "0xPrincipal...",
    OVMOwnerAddress: "0xOwner...",
  });
```

***

### createValidatorManagerAndTotalSplit()

> **createValidatorManagerAndTotalSplit**(`payload`): `Promise`\<[`ClusterValidator`](../type-aliases/ClusterValidator.md)\>

Defined in: [splits/splits.ts:304](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/splits/splits.ts#L304)

Deploys an OVM and SplitV2 contract for a **total split** scenario.

Both principal and rewards are split among recipients via separate SplitV2
contracts. Automatically appends the Obol RAF recipient to rewards.

- Sends one or more on-chain transactions (irreversible).
- Only supported on chains with OVM factory contracts (Mainnet, Hoodi).

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `payload` | [`OVMTotalSplitPayload`](../type-aliases/OVMTotalSplitPayload.md) | Configuration for the OVM and SplitV2 deployment. |

#### Returns

`Promise`\<[`ClusterValidator`](../type-aliases/ClusterValidator.md)\>

The OVM address as `withdrawal_address` and rewards splitter as `fee_recipient_address`.

#### Throws

If no signer was provided.

#### Throws

If the signer is connected to a different chain.

#### Throws

If the chain does not support splitters.

#### Example

```typescript
const { withdrawal_address, fee_recipient_address } =
  await client.splits.createValidatorManagerAndTotalSplit({
    rewardSplitRecipients: [
      { address: "0xOp1...", percentAllocation: 50 },
      { address: "0xOp2...", percentAllocation: 49 },
    ],
    principalSplitRecipients: [
      { address: "0xOp1...", percentAllocation: 50 },
      { address: "0xOp2...", percentAllocation: 50 },
    ],
    OVMOwnerAddress: "0xOwner...",
  });
```

***

### requestWithdrawal()

> **requestWithdrawal**(`payload`, `options?`): `Promise`\<\{ `txHash`: `string`; \}\>

Defined in: [splits/splits.ts:527](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/splits/splits.ts#L527)

Requests withdrawal of validator funds from an OVM contract.

Sends an on-chain transaction to the OVM contract requesting withdrawal
for the specified validator public keys and amounts.

The fee is checked against the current fee read from the EIP-7002
withdrawal request contract (using the client provider, or the signer's
provider). If `withdrawalFees` is omitted, twice the current fee per
request is sent. If it is given, it must cover the current fee and be at
most max(10x the current fee, 1 gwei) per request. The OVM refunds the
unused part of the fees to `excessFeeRecipient`, which defaults to the
signer's address.

`amounts` are in gwei, as the OVM contract takes them.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `payload` | [`OVMRequestWithdrawalPayload`](../type-aliases/OVMRequestWithdrawalPayload.md) | Withdrawal request data including OVM address, validator public keys, amounts (gwei), and optional total fees (wei) and `excessFeeRecipient`. |
| `options?` | [`WriteOptions`](../type-aliases/WriteOptions.md) | Optional `onSent` callback, called with each transaction hash as soon as it is broadcast. |

#### Returns

`Promise`\<\{ `txHash`: `string`; \}\>

The transaction hash of the withdrawal request.

#### Throws

If no signer was provided.

#### Throws

If the signer is connected to a different chain.

#### Throws

If no provider is available or `withdrawalFees` is out of range.

#### Throws

If the call fails after a transaction
  was broadcast (`txHashes`, `pendingTxHash` and `cause` say what was sent).

#### Example

```typescript
const { txHash } = await client.splits.requestWithdrawal({
  ovmAddress: "0xOVM...",
  pubKeys: ["0xValidatorPubkey..."],
  amounts: ["32000000000"],
});
```

***

### deposit()

> **deposit**(`payload`, `options?`): `Promise`\<\{ `txHashes`: `string`[]; \}\>

Defined in: [splits/splits.ts:608](https://github.com/ObolNetwork/obol-sdk/blob/cf0106cb36847b1c3a84065e90778e6a094e3577/src/splits/splits.ts#L608)

Deposits validators to an OVM contract. Each deposit is sent as a separate
on-chain transaction.

Before sending, each deposit is checked: withdrawal credentials are 0x01
or 0x02 credentials for `ovmAddress`, `amount` (wei) is a whole number of
gwei between 1 ETH and 32 ETH (2048 ETH for 0x02 credentials),
`deposit_data_root` matches the deposit fields, and the BLS signature is
valid for this chain. For top-ups to validators that already exist on the
beacon chain, pass `kind: 'topUp'`: the signature is not checked, the
withdrawal credentials may be all zero instead of the expected ones, and
up to 2048 ETH is allowed per deposit. Without it, a deposit with an
all-zero signature is refused (`DEPOSIT_LOOKS_LIKE_TOP_UP`).
The output of [Client.getDepositData](Client.md#getdepositdata) can be passed as `deposits`.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `payload` | [`OVMDepositPayload`](../type-aliases/OVMDepositPayload.md) | Deposit data including the OVM address and an array of validator deposit objects (pubkey, withdrawal_credentials, signature, deposit_data_root, amount). |
| `options?` | [`WriteOptions`](../type-aliases/WriteOptions.md) | Optional `onSent` callback, called with each transaction hash as soon as it is broadcast. |

#### Returns

`Promise`\<\{ `txHashes`: `string`[]; \}\>

An array of transaction hashes, one per deposit.

#### Throws

If no signer was provided.

#### Throws

If the signer is connected to a different chain.

#### Throws

If the payload is invalid.

#### Throws

If any deposit fails the checks above.

#### Throws

If the call fails after a transaction
  was broadcast (`txHashes`, `pendingTxHash` and `cause` say what was sent).

#### Example

```typescript
const { txHashes } = await client.splits.deposit({
  ovmAddress: "0xOVM...",
  deposits: [{
    pubkey: "0x...",
    withdrawal_credentials: "0x...",
    signature: "0x...",
    deposit_data_root: "0x...",
    amount: "32000000000000000000",
  }],
});
```
