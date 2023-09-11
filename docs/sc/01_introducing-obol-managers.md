---
description: Smart contracts for managing Distributed Validators
---

# Obol Manager Contracts

Obol develops and maintains a suite of smart contracts for use with Distributed Validators. These contracts include:

- Withdrawal Recipients: Contracts used for a validator's withdrawal address.
- Split contracts: Contracts to split ether across multiple entities. Developed by [0xSplits](https://0xsplits.xyz)
- Split controllers: Contracts that can mutate a splitter's configuration.

Two key goals of validator reward management are:

1. To be able to differentiate reward ether from principal ether such that node operators can be paid a percentage the _reward_ they accrue for the principal provider rather than a percentage of _principal+reward_.
2. To be able to withdraw the rewards in an ongoing manner without exiting the validator.

Without access to the consensus layer state in the EVM to check a validator's status or balance, and due to the incoming ether being from an irregular state transition, neither of these requirements are easily satisfiable.

The following sections outline different contracts that can be composed to form a solution for one or both goals.

## Withdrawal Recipients

Validators have two streams of revenue, the consensus layer rewards and the execution layer rewards. Withdrawal Recipients focus on the former, receiving the balance skimming from a validator with >32 ether in an ongoing manner, and receiving the principal of the validator upon exit.

### Ownable Withdrawal Recipient

```solidity title="WithdrawalRecipientOwnable.sol"
// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";

contract WithdrawalRecipientOwnable is Ownable {
    receive() external payable {}

    function withdraw(address payable recipient) public onlyOwner {
        recipient.transfer(address(this).balance);
    }
}

```

An Ownable Withdrawal Recipient is the most basic example of a withdrawal recipient contract. It implements Open Zeppelin's `Ownable` interface and allows one address to call the `withdraw()` function, which pulls all ether from the address into the owner's address (or another address specified). This contract does no accounting on the amount of ether that is withdrawn, nor does it differentiate reward from principal.

### Optimistic Withdrawal Recipient

This is the primary withdrawal recipient Obol uses, as it allows for the separation of reward from principal, as well as permitting the ongoing withdrawal of accruing rewards.

An Optimistic Withdrawal Recipient contract takes three inputs when deployed:

- A _principal_ address: The address that controls where the principal ether will be transferred post-exit.
- A _reward_ address: The address where the accruing reward ether is transferred to.
- The amount of ether that makes up the principal.

This contract **assumes that any ether that has appeared in it's address since it was last able to do balance accounting is reward from a successful validator** (or number of validators) unless the change is > 16 ether. This means balance skimming is immediately claimable as reward, while an inflow of e.g. 31 ether is tracked as a return of principal (despite being slashed in this example).

:::warning

Worst-case mass slashings can theoretically exceed 16 ether, if this were to occur, the returned principal would be misclassified as a reward, and distributed to the wrong address. This risk is the drawback that makes this contract variant 'optimistic'. If you intend to use this contract type, **it is important you understand and accept this risk**, however minute.

The alternative is to use an 0xSplits waterfall contract, which won't allow the claiming of rewards until all principal ether has been pulled, meaning validators need to be exited for operators to claim their CL rewards.

:::

This contract fits both design goals and can be used with thousands of validators. If you deploy an Optimistic Withdrawal Recipient with a principal higher than you actually end up using, nothing goes wrong. If you activate more validators than you specified in your contract deployment, you will record too much ether as reward and will overpay your reward address with ether that was principal ether, not earned ether. Current iterations of this contract are not designed for editing the amount of principal set.

### Exitable Withdrawal Recipient

A much awaited feature for proof of stake Ethereum is the ability to trigger the exit of a validator with only the withdrawal address. This is tracked in [EIP-7002](https://eips.ethereum.org/EIPS/eip-7002). Support for this feature will be inheritable in all other withdrawal recipient contracts. This will mitigate the risk to a principal provider of funds being stuck, or a validator being irrecoverably offline.

## Split Contracts

A split, or splitter, is a set of contracts that can divide ether or an ERC20 across a number of addresses. Splits are used in conjunction with withdrawal recipients. Execution Layer rewards for a DV are directed to a split address through the use of a `fee recipient` address. Splits can be either immutable, or mutable by way of an admin address capable of updating them.

Further information about splits can be found on the 0xSplits team's [docs site](https://docs.0xsplits.xyz/).

## Split Controllers

Splits can be completely edited through the use of the `controller` address, however, total editability of a split is not always wanted. A permissive controller and a restrictive controller are given as examples below.

### (Gnosis) SAFE wallet

A [SAFE](https://safe.global/) is a common method to administrate a mutable split. The most well-known deployment of this pattern is the [protocol guild](https://protocol-guild.readthedocs.io/en/latest/3-smart-contract.html). The SAFE can arbitrarily update the split to any set of addresses with any valid set of percentages.

### Immutable Split Controller

This is a contract that updates one split configuration with another, exactly once. Only a permissioned address can trigger the change. This contract is suitable for changing a split at an unknown point in future to a configuration pre-defined at deployment.
