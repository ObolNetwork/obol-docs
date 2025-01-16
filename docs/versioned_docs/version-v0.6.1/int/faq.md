---
sidebar_position: 10
description: Frequently asked questions
---

# Frequently asked questions

### Does Obol have a token?

No. Distributed validators use only ether.

### Can I keep my existing validator client?

Yes. Charon sits as a middleware between a validator client and it's beacon node. All validators that implement the standard REST API will be supported, along with all popular client delivery software such as DAppNode [packages](https://dappnode.github.io/explorer/#/), Rocket Pool's [smart node](https://github.com/rocket-pool/smartnode), StakeHouse's [wagyu](https://github.com/stake-house/wagyu), and Stereum's [node launcher](https://stereum.net/development/#roadmap).

### Can I migrate my existing validator into a distributed validator?

It will be possible to split an existing validator keystore into a set of key shares suitable for a distributed validator, but it is a trusted distribution process, and if the old staking system is not safely shut down, it could pose a risk of double signing alongside the new distributed validator.

In an ideal scenario, a distributed validator's private key should never exist in full in a single location.

### What is an ENR?

An ENR is shorthand for an [Ethereum Node Record](https://eips.ethereum.org/EIPS/eip-778). It is a way to represent a node on a public network, with a reliable mechanism to update its information. At Obol we use ENRs to identify charon nodes to one another such that they can form clusters with the right charon nodes and not impostors. 

ENRs have private keys they use to sign updates to the [data contained](https://enr-viewer.com/) in their ENR. This private key is by default found at `.charon/charon-enr-private-key`, and should be kept secure, and not checked into version control. An ENR looks something like this:
```
enr:-JG4QAgAOXjGFcTIkXBO30aUMzg2YSo1CYV0OH8Sf2s7zA2kFjVC9ZQ_jZZItdE8gA-tUXW-rWGDqEcoQkeJ98Pw7GaGAYFI7eoegmlkgnY0gmlwhCKNyGGJc2VjcDI1NmsxoQI6SQlzw3WGZ_VxFHLhawQFhCK8Aw7Z0zq8IABksuJEJIN0Y3CCPoODdWRwgj6E
```

### Where can I learn more about Distributed Validators?

Have you checked out our [blog site](https://blog.obol.tech) and [twitter](https://twitter.com/ObolNetwork) yet? Maybe join our [discord](https://discord.gg/obol) too.
