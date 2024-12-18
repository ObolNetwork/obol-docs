---
description: How does the Obol Network look on-chain?
---

# Obol Manager Contracts

Obol develops and maintains a suite of smart contracts for use with Distributed Validators. 

## Withdrawal Recipients

The key to a distributed validator is understanding how a withdrawal is processed. The most common way to handle a withdrawal of a validator operated by a number of different people is to use an immutable withdrawal recipient contract, with the distribution rules hardcoded into it. 

For the time being Obol uses `0x01` withdrawal credentials, and intends to upgrade to [0x03 withdrawal credentials](https://ethresear.ch/t/0x03-withdrawal-credentials-simple-eth1-triggerable-withdrawals/10021) when smart contract initiated exits are enabled. 

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

An Ownable Withdrawal Recipient is the most basic type of withdrawal recipient contract. It implements Open Zeppelin's `Ownable` interface and allows one address to call the `withdraw()` function, which pulls all ether from the address into the owners address (or another address specified). Calling withdraw could also fund a fee split to the Obol Network, and/or the protocol that has deployed and instantiated this DV.

### Immutable Withdrawal Recipient

An immutable withdrawal recipient is similar to an ownable recipient except the owner is hardcoded during construction and the ability to change ownership is removed. This contract should only be used as part of a larger smart contract system, for example a yearn vault strategy might use an immutable recipient contract as its vault address should never change. 

## Registries

### Deposit Registry

The Deposit Registry is a way for the deposit and activation of distributed validators to be two separate processes. In the simple case for DVs, a registry of deposits is not required. However when the person depositing the ether is not the same entity as the operators producing the deposits, a coordination mechanism is needed to make sure only one 32 eth deposit is submitted per DV. A deposit registry can prevent double deposits by ordering the allocation of ether to validator deposits. 

### Operator Registry

If the submission of deposits to a deposit registry needs to be gated to only whitelisted addresses, a simple operator registry may serve as a way to control who can submit deposits to the deposit registry. 

### Validator Registry

If validators need to be managed on chain programmatically rather than manually with humans triggering exits, a validator registry can be used. Deposits getting activated get an entry into the validator registry, and validators using 0x03 exits get staged for removal from the registry. This registry can be used to coordinate many validators with similar operators and configuration. 

:::note

Validator registries depend on the as of yet unimplemented `0x03` validator exit feature.

:::

