---
description: Documenting a Distributed Validator Cluster in a standardised file format
---

# Distributed Validator Cluster Manifest

The manifest file captures the public and private info required to take part in a distributed validator cluster. Each operator has their own version of the cluster manifest containing their DV client secrets.

One manifest can contain a number of distributed validators being operated by the same group of nodes.

The manifest provides at least the following info.

- The number of operators participating in this cluster.
- ENRs for each participating operator. (SECP256K1 public keys)
- Signatures from each key shard authorising their respective operator ENRs
- A collection of distributed validators operated by this cluster

  - The BLS public key of the Distributed Validator
  - The total number of shards and minimum threshold required for signing
  - The BLS public keys for each shard of this validator
  - Public commitments to the secret sharing polynomial.

    Used to verify partial signatures during signature aggregation.

### JSON schema

The JSON schema of the DV manifest file is as follows.

```
{
  "type": "object",
  "properties": {
    "tss": {
      "type": "array",
      "description": "Public commitments to secret sharing polynomial",
      "items": {
        "type": "string",
        "description": "Hex serialization of BLS12-381 G1 point in compressed form"
      }
    },
    "members": {
      "type": "array",
      "description": "BLS12-381 pubkeys of QBFT members",
      "items": {
        "type": "string",
        "description": "Hex serialization of BLS12-381 G1 point in compressed form"
      }
    },
    "enrs": {
      "type": "array",
      "description": "Authorized ENRs",
      "items": {
        "type": "string",
        "description": "Serialized ENR"
      }
    }
  }
}
```

Example file

```
{
	"tss": [
		"87db49c4c40d89f2415cd10765a348df5233ce5cb5f6667cf023680517d494bece8289e047da2488c87bc84a22a3a229",
		"8197ef68c97101e0c6f8f48c4883d2b6e948c79d6b23614220d7e6cb70b3b0473df64d20bd68539365c531e179ee9639",
		"8d952cf7b27d4c8071eb8bdd3de39a279ceb801d3f6cc21b185535653f4c81d9546b0e3b5d010636abdb6291264c562b"
	],
	"members": [
		"b733fec0e82d482f44c9a3b1622b6f31343d37084825f7e338793ba253164e0f0c01af6bfb7ec8e3e93e5001fe0f6d4a",
		"87bfd3fb2b1f3803b7879c3aefa19f74b659e4d54d4198503d94116110955beeef3ba3ba9b279b1155932286499fb91c",
		"a675dd7fbf50e8d9d3c86e6895a18a2ef6f9d311d41afa965a0850688c06bffa0d5fa9495a49a26c1275ce16982796b7",
		"914ca58d4e1d83659a8773d4c22e066fa965f992c11c957669d6ec7363281785b138723e139df4f86829252cd0c1a0b4"
	],
	"enrs": [
		"enr:-IS4QOFHbEmXaGJLA3SVlxzdIfl-GHj34whXBoZnjis8CB4xY0tmAOtrJLVe4DOTaovuPK-9w957RIAxI8DsXZM9k14BgmlkgnY0gmlwhLrX64GJc2VjcDI1NmsxoQI8CxcDw3mohnRxoOkL-nuxV-QdAk1Nm4Mw3klXkr4sSYN0Y3CCJpU=",
		"enr:-IS4QIrcdKUzqmlKJDrxSdW4OJz2cW_cwrasXYc7bpEG4RouGmxOUj6R7K1RmtNyTPSR2v62nawk3b7QO8OwTJoD6w4BgmlkgnY0gmlwhMkEDBqJc2VjcDI1NmsxoQMmH-veW70QZOibI2-DUf5W4oqUTVIAnZugMX7vSwy7OoN0Y3CCJpU=",
		"enr:-IS4QMCn5qdN7bodIX5rqJnKMblyf2qYqeQSCxXewLUkq7UfPKBi8bD8-ytGYF0GZGHWK8WQ3vTaqi610t-ofXw_4mwBgmlkgnY0gmlwhNCgZkWJc2VjcDI1NmsxoQPdLhVvXOOMFoqglBB9zDiJEiSwi7MIMHjyKB4o6Fdv_IN0Y3CCJpU=",
		"enr:-IS4QKpNR_dnKMH28k46MHi5nXZBpSMWaBb_Bqy0sdOp72IKdXWdVxVND-ur-31qO1FhjalM5Uz2nkBE0968kKndse8BgmlkgnY0gmlwhEvZrWOJc2VjcDI1NmsxoQLiUs6XmW_0fVAhFYkQewDlLYvHrc3MOGCzy2tJQxBrBIN0Y3CCJpU="
	]
}
```

This manifest file is a work in progress, and intends to be standardised for operating distributed validators via the [EIP process](../dvk/distributed-validator-keys.md#standardising-the-format-of-dvks) when appropriate.
