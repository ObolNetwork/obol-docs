# Incentives

Defined in: [incentives/incentives.ts:24](https://github.com/ObolNetwork/obol-sdk/blob/5137bd5c4ded55a50234f19135ea3a5bfeab4d47/src/incentives/incentives.ts#L24)

**`Internal`**

Incentives can be used for fetching and claiming Obol incentives.

 Access it through Client.incentives.

## Example

```ts
const obolClient = new Client(config);
await obolClient.incentives.claimIncentives(address);
```

## Methods

### claimIncentives()

> **claimIncentives**(`address`): `Promise`\<[`ClaimIncentivesResponse`](../type-aliases/ClaimIncentivesResponse.md)\>

Defined in: [incentives/incentives.ts:65](https://github.com/ObolNetwork/obol-sdk/blob/5137bd5c4ded55a50234f19135ea3a5bfeab4d47/src/incentives/incentives.ts#L65)

Claims Obol incentives from a Merkle Distributor contract using an address.

This method automatically fetches incentive data and verifies whether the incentives have already been claimed.
If `txHash` is `null`, it indicates that the incentives were already claimed.

Note: This method is not yet enabled and will throw an error if called.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `address` | `string` | The address to claim incentives for |

#### Returns

`Promise`\<[`ClaimIncentivesResponse`](../type-aliases/ClaimIncentivesResponse.md)\>

The transaction hash or already claimed status

#### Remarks

**⚠️ Important:**  If you're storing the private key in an `.env` file, ensure it is securely managed
and not pushed to version control.

#### Throws

Will throw an error if the incentives data is not found or the claim fails

An example of how to use claimIncentives:
[obolClient](https://github.com/ObolNetwork/obol-sdk-examples/blob/main/TS-Example/index.ts#L281)

***

### isClaimed()

> **isClaimed**(`contractAddress`, `index`): `Promise`\<`boolean`\>

Defined in: [incentives/incentives.ts:124](https://github.com/ObolNetwork/obol-sdk/blob/5137bd5c4ded55a50234f19135ea3a5bfeab4d47/src/incentives/incentives.ts#L124)

Read isClaimed.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `contractAddress` | `string` | Address of the Merkle Distributor Contract |
| `index` | `number` | operator index in merkle tree |

#### Returns

`Promise`\<`boolean`\>

true if incentives are already claime

An example of how to use isClaimed:
[obolClient](https://github.com/ObolNetwork/obol-sdk-examples/blob/main/TS-Example/index.ts#L266)

***

### getIncentivesByAddress()

> **getIncentivesByAddress**(`address`): `Promise`\<[`ClaimableIncentives`](../type-aliases/ClaimableIncentives.md)\>

Defined in: [incentives/incentives.ts:143](https://github.com/ObolNetwork/obol-sdk/blob/5137bd5c4ded55a50234f19135ea3a5bfeab4d47/src/incentives/incentives.ts#L143)

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `address` | `string` | Operator address |

#### Returns

`Promise`\<[`ClaimableIncentives`](../type-aliases/ClaimableIncentives.md)\>

The matched incentives from DB

#### Throws

On not found if address not found.

An example of how to use getIncentivesByAddress:
[obolClient](https://github.com/ObolNetwork/obol-sdk-examples/blob/main/TS-Example/index.ts#L250)
