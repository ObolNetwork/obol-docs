---
sidebar_position: 4
description: Smart contracts for managing Distributed Validators
---

# Obol Splits

Obol develops and maintains a suite of smart contracts for use with Distributed Validators. These contracts include:

- Withdrawal Recipients: Contracts used for a validator's withdrawal address.
- Split contracts: Contracts to split ether across multiple entities. Developed by [Splits.org](https://splits.org)
- Split controllers: Contracts that can mutate a splitter's configuration.

Two key goals of validator reward management are:

1. To be able to differentiate reward ether from principal ether such that node operators can be paid a percentage of the _reward_ they accrue for the principal provider rather than a percentage of _principal+reward_.
2. To be able to withdraw the rewards in an ongoing manner without exiting the validator.

Without access to the consensus layer state in the EVM to check a validator's status or balance, and due to the incoming ether being from an irregular state transition, neither of these requirements are easily satisfiable.

The following sections outline different contracts that can be composed to form a solution for one or both goals.

## Withdrawal Recipients

Validators have two streams of revenue, the consensus layer rewards and the execution layer rewards. Withdrawal Recipients focus on the former, receiving the balance skimming from a validator with >32 ether in an ongoing manner, and receiving the principal of the validator upon exit.

### Optimistic Withdrawal Recipient

<span
    style={{
      backgroundColor: '#2D4D53',
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
      display: 'block',
    }}>
    <img src="/img/obol_owr_split.png" alt="Optimistic Withdrawal Recpient graphic"></img>
  </span>

This is the primary withdrawal recipient Obol uses, as it allows for the separation of reward from principal, as well as permitting the ongoing withdrawal of accruing rewards.

An Optimistic Withdrawal Recipient [contract](https://github.com/ObolNetwork/obol-splits/blob/main/src/owr/OptimisticWithdrawalRecipient.sol) takes three inputs when deployed:

- A _principal_ address: The address that controls where the principal ether will be transferred post-exit.
- A _reward_ address: The address where the accruing reward ether is transferred to.
- The amount of ether that makes up the principal.

This contract **assumes that any ether that has appeared in its address since it was last able to do balance accounting is skimming reward from an ongoing validator** (or number of validators) unless the change is > 16 ether. This means balance skimming is immediately claimable as reward, while an inflow of e.g. 31 ether is tracked as a return of principal (despite being slashed in this example).

:::danger

Worst-case mass slashings can theoretically exceed 16 ether, if this were to occur, the returned principal would be misclassified as a reward, and distributed to the wrong address. This risk is the drawback that makes this contract variant 'optimistic'. If you intend to use this contract type, **it is important you fully understand and accept this risk**.

The alternative is to use an splits.org [waterfall contract](https://docs.splits.org/core/waterfall), which won't allow the claiming of rewards until all principal ether has been returned, meaning validators need to be exited for operators to claim their CL rewards.

:::

This contract fits both design goals and can be used with thousands of validators. It is safe to deploy an Optimistic Withdrawal Recipient with a principal higher than you actually end up using, though you should process the accrued rewards before exiting a validator or the reward recipients will be short-changed as that balance may be counted as principal instead of reward the next time the contract is updated. If you activate more validators than you specified in your contract deployment, you will record too much ether as reward and will overpay your reward address with ether that was principal ether, not earned ether. Current iterations of this contract are not designed for editing the amount of principal set.

#### OWR Factory Deployment

The OptimisticWithdrawalRecipient contract is deployed via a [factory contract](https://github.com/ObolNetwork/obol-splits/blob/main/src/owr/OptimisticWithdrawalRecipientFactory.sol). The factory is deployed at the following addresses on the following chains.

| Chain   | Address                                                                                                                       |
|---------|-------------------------------------------------------------------------------------------------------------------------------|
| Mainnet | [0x119acd7844cbdd5fc09b1c6a4408f490c8f7f522](https://etherscan.io/address/0x119acd7844cbdd5fc09b1c6a4408f490c8f7f522)         |
| Goerli  | [0xe9557FCC055c89515AE9F3A4B1238575Fcd80c26](https://goerli.etherscan.io/address/0xe9557FCC055c89515AE9F3A4B1238575Fcd80c26)  |
| Holesky | [0x7fec4add6b5ee2b6c1cba232bc6db754794cb6df](https://holesky.etherscan.io/address/0x7fec4add6b5ee2b6c1cba232bc6db754794cb6df)  |
| Sepolia | [0xca78f8fda7ec13ae246e4d4cd38b9ce25a12e64a](https://sepolia.etherscan.io/address/0xca78f8fda7ec13ae246e4d4cd38b9ce25a12e64a) |

### Exitable Withdrawal Recipient

A much awaited feature for proof of stake Ethereum is the ability to trigger the exit of a validator with only the withdrawal address. This is tracked in [EIP-7002](https://eips.ethereum.org/EIPS/eip-7002). Support for this feature will be inheritable in all other withdrawal recipient contracts. This will mitigate the risk to a principal provider of funds being stuck, or a validator being irrecoverably offline.

## Split Contracts

A split, or splitter, is a set of contracts that can divide ether or an ERC20 across a number of addresses. Splits are often used in conjunction with withdrawal recipients. Execution Layer rewards for a DV are directed to a split address through the use of a `fee recipient` address. Splits can be either immutable, or mutable by way of an admin address capable of updating them.

Further information about splits can be found on the splits.org team's [docs site](https://docs.splits.org/). The addresses of their deployments can be found [here](https://docs.splits.org/core/split#addresses).

## Split Controllers

Splits can be completely edited through the use of the `controller` address, however, total editability of a split is not always wanted. A permissive controller and a restrictive controller are given as examples below.

### (Gnosis) SAFE wallet

A [SAFE](https://safe.global/) is a common method to administrate a mutable split. The most well-known deployment of this pattern is the [protocol guild](https://protocol-guild.readthedocs.io/en/latest/3-smart-contract.html). The SAFE can arbitrarily update the split to any set of addresses with any valid set of percentages.

### Immutable Split Controller

This is a [contract](https://github.com/ObolNetwork/obol-splits/blob/main/src/controllers/ImmutableSplitController.sol) that updates one split configuration with another, exactly once. Only a permissioned address can trigger the change. This contract is suitable for changing a split at an unknown point in future to a configuration pre-defined at deployment.

The Immutable Split Controller [factory contract](https://github.com/ObolNetwork/obol-splits/blob/main/src/controllers/ImmutableSplitControllerFactory.sol) can be found at the following addresses:

| Chain   | Address                                                                                                                       |
|---------|-------------------------------------------------------------------------------------------------------------------------------|
| Mainnet | [0x49e7cA187F1E94d9A0d1DFBd6CCCd69Ca17F56a4](https://etherscan.io/address/0x49e7cA187F1E94d9A0d1DFBd6CCCd69Ca17F56a4)|
| Goerli  | [0x64a2c4A50B1f46c3e2bF753CFe270ceB18b5e18f](https://goerli.etherscan.io/address/0x64a2c4A50B1f46c3e2bF753CFe270ceB18b5e18f) |
| Holesky |                   |
| Sepolia | |
