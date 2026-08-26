# EOA

Defined in: [eoa/eoa.ts:26](https://github.com/ObolNetwork/obol-sdk/blob/5137bd5c4ded55a50234f19135ea3a5bfeab4d47/src/eoa/eoa.ts#L26)

**`Internal`**

EOA can be used for managing EOA (Externally Owned Account) operations like withdrawals.

 Access it through Client.eoa.

## Example

```ts
const obolClient = new Client(config);
await obolClient.eoa.requestWithdrawal(EOAWithdrawalPayload);
```

## Methods

### requestWithdrawal()

> **requestWithdrawal**(`payload`): `Promise`\<\{ `txHash`: `string` \| `null`; \}\>

Defined in: [eoa/eoa.ts:65](https://github.com/ObolNetwork/obol-sdk/blob/5137bd5c4ded55a50234f19135ea3a5bfeab4d47/src/eoa/eoa.ts#L65)

Requests withdrawal from an EOA contract.

This method allows requesting withdrawal of validator funds.
The withdrawal request includes validator public key and corresponding withdrawal amount.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `payload` | [`EOAWithdrawalPayload`](../type-aliases/EOAWithdrawalPayload.md) | Data needed to request withdrawal |

#### Returns

`Promise`\<\{ `txHash`: `string` \| `null`; \}\>

Transaction hash of the withdrawal request

#### Remarks

**⚠️ Important:**  If you're storing the private key in an `.env` file, ensure it is securely managed
and not pushed to version control.

#### Throws

Will throw an error if the signer is not provided or the request fails

An example of how to use requestWithdrawal:
```typescript
const result = await client.eoa.requestWithdrawal({
  pubkey: '0x123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456',
  allocation: 32, // 32 ETH
  requiredFee: '1' // in wei
});
console.log('Withdrawal requested:', result.txHash);
```

***

### deposit()

> **deposit**(`payload`): `Promise`\<\{ `txHashes`: `string`[]; \}\>

Defined in: [eoa/eoa.ts:132](https://github.com/ObolNetwork/obol-sdk/blob/5137bd5c4ded55a50234f19135ea3a5bfeab4d47/src/eoa/eoa.ts#L132)

Deposits to batch deposit contract.

This method allows depositing multiple validators to the Ethereum beacon chain
using the Pier Two batch deposit contract for gas efficiency.
Each deposit includes validator public key, withdrawal credentials, signature, and amount.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `payload` | [`EOADepositPayload`](../type-aliases/EOADepositPayload.md) | Data needed to deposit to batch contract |

#### Returns

`Promise`\<\{ `txHashes`: `string`[]; \}\>

Array of transaction hashes for all batches

#### Remarks

**⚠️ Important:**  If you're storing the private key in an `.env` file, ensure it is securely managed
and not pushed to version control.

**⚠️ Gas Limit:** Due to EVM constraints, it is recommended to deposit in batches of up to 500 at a time.

#### Throws

Will throw an error if the signer is not provided, contract is not configured, or the deposit fails

An example of how to use deposit:
```typescript
const result = await client.eoa.deposit({
  deposits: [{
    pubkey: '0x123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456',
    withdrawal_credentials: '0x1234567890123456789012345678901234567890',
    deposit_data_root: '0x1234567890123456789012345678901234567890123456789012345678901234',
    signature: '0x123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456',
    amount: '32000000000000000000' // 32 ETH in wei
  }]
});
console.log('Deposits completed:', result.txHashes);
```
