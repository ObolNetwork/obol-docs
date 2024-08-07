---
description: Documenting a Distributed Validator Cluster in a standardised file format
---

# Distributed validator cluster manifest

:::warning
This manifest file is a work in progress, and intends to be standardised for operating distributed validators via the [EIP process](../dvk/01_distributed-validator-keys.md#standardising-the-format-of-dvks) when appropriate.
:::

The manifest file captures the public, read-only info required to take part in a distributed validator cluster.

One manifest can contain a number of distributed validators being operated by the same group of nodes.

The manifest provides at least the following info:

- ENRs for each participating operator
  - SECP256K1 public keys
  - Used to identify a DVC client across the internet
  - Forms the basis of identity between charon nodes
- Signature(s) from each key share(s) authorising their respective operator ENRs as acting on their behalf
  - Used to link validator key shares to DVC ENRs, includes a nonce to allow for ENR key rotation
- An array of distributed validators operated by this cluster
  - The BLS public key of the Distributed Validator
  - The TSS verifiers for the group key, from which BLS public keys can be inferred

## Example manifest

```json5 title="manifest.yaml"
{
  "version": "obol/charon/manifest/0.0.1",
  "description": "dv/2/threshold/3/peer/5",
  "distributed_validators": [
    {
      "root_pubkey": "0xaf7e10e176ad2cd634009fed0e906e95866d47ec16808cc4df32b3bcfcaffbad9158f52531a086f6d9c54152dc4250da",
      "threshold_verifiers": [
        "r34Q4XatLNY0AJ/tDpBulYZtR+wWgIzE3zKzvPyv+62RWPUlMaCG9tnFQVLcQlDa",
        "jRadEC0L5vp+sYPUvRgp9b4x/nzN1qGkiFA+lgpwNjq3BiJjhhikMKY8HQ1PJ0R2",
        "uQHdtolDJjjXXwnQikhBx9T9Hp20fPXqOS4hP3nZORhtPlVCCvP8IggANkq9o7hF"
      ]
    },
    {
      "root_pubkey": "0x82313d1fc1b7e2e361935b977068434226a0bc1ec3680a35669b63378f0154e419b1daba3531b0068a7af3159e0f56d7",
      "threshold_verifiers": [
        "gjE9H8G34uNhk1uXcGhDQiagvB7DaAo1ZptjN48BVOQZsdq6NTGwBop68xWeD1bX",
        "ud3X5IV2KqOkBMWRLGpWsuyRQkK0shUKp8pascNEQE3Vo2ujVfs0O+3dPPbi8CYm",
        "hQl8KQo8usksZjaE04L6vJRPXrv2k7h542adcK8Ibwhvci1hWwppBc54VvKG9VfL"
      ]
    }
  ],
  "peers": [
    "enr:-Ie4QFdd7auMcA6Sht4fD5alWeChra30HTW0eIOr6XkYQtivD2Ev1HNdkyhFnT5LcVKB-2aROv2wAW5EJW5NKLx_fUiAgmlkgnY0gmlwhH8AAAGJc2VjcDI1NmsxoQK1OEYKGHj2rkQflwpMENJhr9_AAVIMdgRjp-D7dPVUVIN0Y3ABg3VkcAI=",
    "enr:-Ie4QP4mbZPiuYMGJxpbV1bb5KwYz69pONum1XLQWJNscrABMZMaR8-mco4vZRwHpJfLV-Xq-2MMmGPcWvKGurzoV8SAgmlkgnY0gmlwhH8AAAGJc2VjcDI1NmsxoQPXTrrbopT8F81z6nd9BP6OMaiXdU4hovsGz4alw74JkIN0Y3ADg3VkcAQ=",
    "enr:-Ie4QCvui6MrHdcZmCmpenVBzfJ7kylTt2gHBvG-C5Hy7fZCXeM2Ct0NUBcuQZUQgKwiRpIza1qVUFUttaWO7RHwDx6AgmlkgnY0gmlwhH8AAAGJc2VjcDI1NmsxoQLmzL1T7YS3su4_059MUAQD3Dk8PM8Jh_1qq8jUzeaRWoN0Y3AFg3VkcAY=",
    "enr:-Ie4QCok_dUP2L9mVUPpLdVl_VLcTwESD7Xd4WYRSbPq__srFVsJT4MPxsQOP68BPXw2IMWvThA6SfBs-PMne__srdSAgmlkgnY0gmlwhH8AAAGJc2VjcDI1NmsxoQLITI6sd1v-A1ArY0oBvIjGPsJWjc1XvbIxjWr1jvRSA4N0Y3AHg3VkcAg=",
    "enr:-Ie4QAaRwPBsUloA1AlLmgjRx-zIHipzM06ioU2hH9Uv-mKRNUfScDInXlPGomDslz3QbAu0gxR-Jgq7d3SKHohjI7SAgmlkgnY0gmlwhH8AAAGJc2VjcDI1NmsxoQNfEIdLwYgnPux1pXBg5enZ8jlIsPzMtHAJH1tnRfeMiYN0Y3AJg3VkcAo="
  ]
}

```
