# ObolSplits

Defined in: [splits/splits.ts:42](https://github.com/ObolNetwork/obol-sdk/blob/5137bd5c4ded55a50234f19135ea3a5bfeab4d47/src/splits/splits.ts#L42)

**`Internal`**

ObolSplits can be used for creating and managing Obol splits.

 Access it through Client.splits.

## Example

```ts
const obolClient = new Client(config);
await obolClient.splits.createValidatorManagerAndRewardsSplit(OVMRewardsSplitPayload);
```

## Methods

### createValidatorManagerAndRewardsSplit()

> **createValidatorManagerAndRewardsSplit**(`payload`): `Promise`\<[`ClusterValidator`](../type-aliases/ClusterValidator.md)\>

Defined in: [splits/splits.ts:76](https://github.com/ObolNetwork/obol-sdk/blob/5137bd5c4ded55a50234f19135ea3a5bfeab4d47/src/splits/splits.ts#L76)

Creates an Obol OVM and Pull split configuration for rewards-only scenario.

This method deploys OVM and SplitV2 contracts for managing validator rewards only.
Principal is handled by a single address, while rewards are split among recipients.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `payload` | [`OVMRewardsSplitPayload`](../type-aliases/OVMRewardsSplitPayload.md) | Data needed to deploy OVM and SplitV2 |

#### Returns

`Promise`\<[`ClusterValidator`](../type-aliases/ClusterValidator.md)\>

OVM address as withdrawal address and splitter as fee recipient

#### Remarks

**⚠️ Important:**  If you're storing the private key in an `.env` file, ensure it is securely managed
and not pushed to version control.

**📌 Note:** The Obol Validator Manager (OVM) feature is only enabled on Hoodi on launchpad.

#### Throws

Will throw an error if the splitter configuration is not supported or deployment fails

An example of how to use createValidatorManagerAndRewardsSplit:
[createValidatorManagerAndRewardsSplit](https://github.com/ObolNetwork/obol-sdk-examples/blob/main/TS-Example/index.ts#L333)

***

### createValidatorManagerAndTotalSplit()

> **createValidatorManagerAndTotalSplit**(`payload`): `Promise`\<[`ClusterValidator`](../type-aliases/ClusterValidator.md)\>

Defined in: [splits/splits.ts:244](https://github.com/ObolNetwork/obol-sdk/blob/5137bd5c4ded55a50234f19135ea3a5bfeab4d47/src/splits/splits.ts#L244)

Creates an Obol OVM and Total split configuration for total split scenario.

This method deploys OVM and SplitV2 contracts for managing both validator rewards and principal.
Both rewards and principal are split among recipients, with rewards including RAF recipient.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `payload` | [`OVMTotalSplitPayload`](../type-aliases/OVMTotalSplitPayload.md) | Data needed to deploy OVM and SplitV2 |

#### Returns

`Promise`\<[`ClusterValidator`](../type-aliases/ClusterValidator.md)\>

OVM address as withdrawal address and splitter as fee recipient

#### Remarks

**⚠️ Important:**  If you're storing the private key in an `.env` file, ensure it is securely managed
and not pushed to version control.

**📌 Note:** The Obol Validator Manager (OVM) feature is only enabled on Hoodi on launchpad.

#### Throws

Will throw an error if the splitter configuration is not supported or deployment fails

An example of how to use createValidatorManagerAndTotalSplit:
[createValidatorManagerAndTotalSplit](https://github.com/ObolNetwork/obol-sdk-examples/blob/main/TS-Example/index.ts#340)

***

### requestWithdrawal()

> **requestWithdrawal**(`payload`): `Promise`\<\{ `txHash`: `string`; \}\>

Defined in: [splits/splits.ts:442](https://github.com/ObolNetwork/obol-sdk/blob/5137bd5c4ded55a50234f19135ea3a5bfeab4d47/src/splits/splits.ts#L442)

Requests withdrawal from an OVM contract.

This method allows requesting withdrawal of validator funds from an OVM contract.
The withdrawal request includes OVM address, validator public keys and corresponding withdrawal amounts.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `payload` | [`OVMRequestWithdrawalPayload`](../type-aliases/OVMRequestWithdrawalPayload.md) | Data needed to request withdrawal |

#### Returns

`Promise`\<\{ `txHash`: `string`; \}\>

Transaction hash of the withdrawal request

#### Remarks

**⚠️ Important:**  If you're storing the private key in an `.env` file, ensure it is securely managed
and not pushed to version control.

#### Throws

Will throw an error if the signer is not provided, OVM address is invalid, or the request fails

An example of how to use requestWithdrawal:
```typescript
const result = await client.splits.requestWithdrawal({
  ovmAddress: '0x1234567890123456789012345678901234567890',
  pubKeys: ['0x123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456'],
  amounts: ['32000000000'], // 32 ETH in gwei
  withdrawalFees: '1000000000000000' // Total fees in wei
});
console.log('Withdrawal requested:', result.txHash);
```

***

### deposit()

> **deposit**(`payload`): `Promise`\<\{ `txHashes`: `string`[]; \}\>

Defined in: [splits/splits.ts:492](https://github.com/ObolNetwork/obol-sdk/blob/5137bd5c4ded55a50234f19135ea3a5bfeab4d47/src/splits/splits.ts#L492)

Deposits to OVM contract by sending individual transactions for each deposit.

This method allows depositing to an OVM contract. Each deposit is sent as a separate transaction
Each deposit includes validator public key, withdrawal credentials, signature, deposit data root, and amount.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `payload` | [`OVMDepositPayload`](../type-aliases/OVMDepositPayload.md) | Data needed to deposit to OVM |

#### Returns

`Promise`\<\{ `txHashes`: `string`[]; \}\>

Array of transaction hashes, one for each deposit

#### Remarks

**⚠️ Important:**  If you're storing the private key in an `.env` file, ensure it is securely managed
and not pushed to version control.

#### Throws

Will throw an error if the signer is not provided, OVM address is invalid, or the deposit fails

An example of how to use deposit:
```typescript
const result = await client.splits.deposit({
  ovmAddress: '0x1234567890123456789012345678901234567890',
  deposits: [{
    pubkey: '0x123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456',
    withdrawal_credentials: '0x1234567890123456789012345678901234567890',
    signature: '0x123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456',
    deposit_data_root: '0x1234567890123456789012345678901234567890123456789012345678901234',
    amount: '32000000000000000000' // 32 ETH in wei
  }]
});
console.log('Deposits completed:', result.txHashes);
```
