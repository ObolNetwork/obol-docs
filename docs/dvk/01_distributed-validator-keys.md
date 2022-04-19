---
Description: >-
  An Effort to Accelerate and Standardise the Generation of Distributed
  Validators
---

# Distributed validator keys

A distributed validator key is a group of BLS private keys that together operate as a threshold key for participating in proof-of-stake consensus.

To achieve fault tolerance in a distributed validator, the individual private key shares need to be generated together. Rather than have a trusted dealer produce a private key, split it and distribute it, the preferred approach is to never construct the full private key at any point, by having each operator in the distributed validator cluster participate in what is known as a **distributed key generation ceremony**.

A distributed validator key generation ceremony is a type of DKG ceremony. A DVK ceremony produces signed validator deposit and exit data, along with all of the validator key shares and their associated metadata.

**There is currently an active working group developing DKG.** Further information can be seen on the [working groups](../int/working-groups.md) page.

