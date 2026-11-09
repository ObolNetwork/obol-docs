# Obol API and DV Launchpad Known Issues

The source code for the Obol API and the DV Launchpad is not public, so their known issues are listed here rather than in a repository. The Obol Security Team has evaluated every item below. Each one is resolved, accepted as a design trade-off, or not a vulnerability.

**Please do not resubmit these findings or close variants of them.** Duplicate submissions are not eligible for a reward. Known issues for Charon, the Obol SDK and the Obol Splits contracts are listed in their repositories; see the [bug bounty program](bug-bounty.md#known-issues-and-common-non-qualifying-reports).

Many of these findings concern what the API does on behalf of a cluster's own participants. The API is not a trust anchor for a distributed validator. A cluster's creator and operators are trusted with the cluster they created: they choose its configuration, hold its key shares, and together control its validators. A finding that requires the creator, an operator, or a threshold of operators to act against their own cluster is not considered a vulnerability.

## Obol API

### Cluster Definitions & Operator Signatures

* **Creator-signed (solo) definitions:** `POST /v1/definition` accepts a definition whose operators have no addresses. Only the creator's EIP-712 signature over `config_hash` authorizes it. This is the single-operator (solo) flow, in which the creator runs every node. No operator has signed anything in such a definition, so the API attaches no operator identity or commitment to it.
* **Creators can list any address as an operator:** a creator can name any addresses as operators. Being listed gives no rights and makes no commitment on that operator's behalf. An operator joins only by submitting their own signatures (see below), and a cluster without every operator's signatures cannot complete a group DKG.
* **Operator signature trust model:** `PUT /v1/definition/{configHash}` accepts an operator's entry only when it carries two signatures from that operator's address. One is an EIP-712 signature over the `config_hash` in the path. The other is an EIP-712 signature over the operator's ENR. EOAs and ERC-1271 contract wallets (such as Safe) are supported. The fork version and schema version must match the stored definition.
* **Who can change a definition:** a definition never changes after it is posted. Its configuration is fixed by `config_hash`, and a different configuration is a different definition. Each listed operator can fill in only their own entry, and only once. The creator cannot edit operator entries. Once a cluster lock exists for the definition, no further entries are accepted. Deleting a definition is an internal administrative action.
* **Definitions and locks are public:** definitions and locks are readable without authentication, including their ENRs, addresses and signatures. They are public by design, so that operators, Charon and third parties can verify them.

### Schema Versions

* **Legacy definition and lock versions (below v1.10.0):** older schemas lack fields that later versions use to bind a cluster to its operators and its deposit configuration. One example is the per-operator node signatures that v1.6 does not have. The API rejects new definitions and new locks below v1.10.0. Clusters already stored at an older version remain readable, and their operators can still use exits, deposits and fee recipient registrations. Reports that a legacy schema offers weaker guarantees apply only to clusters that their own participants created with that version.

### Deposits & Withdrawal Credentials

* **The first partial deposit pins the withdrawal credentials, and there is no delete:** the first accepted partial deposit for a validator fixes that validator's `withdrawal_credentials` in the API. Later partials must use the same credentials, because partial signatures over different messages cannot be aggregated. Every partial is accepted only with a valid BLS signature from that operator's key share of the validator. An operator who submits unwanted credentials can only stop the API from collecting partials for that validator, and operators can still produce deposits with Charon outside the API. The missing delete endpoint for partial deposits is a known limitation.
* **Partial deposits with arbitrary withdrawal credentials:** the API checks the format of the withdrawal credentials and, for v1.10+ clusters, the `0x01`/`0x02` prefix against the cluster's `compounding` setting. It does not require them to match the definition's `withdrawal_address`, because operators choose the credentials when they sign deposits. A deposit is valid on the beacon chain only with a threshold of partial signatures. Only a threshold of operators can produce one, and that threshold already controls the validator key.
* **Partial deposits for validators already on chain:** partial deposits are refused for any validator found in the beacon chain registry or in the pending deposit queue. If the beacon node cannot be queried, the request fails.
* **Non-canonical encodings of signed partials (resolved in v1.2.1, 2026-10-23):** the API used to verify partial deposit and fee recipient signatures over parsed values while storing the raw strings, so a copy of a signed partial in a different encoding was stored as a separate record. The API now requires canonical encodings and rejects other forms.

### Exits

* **Exit authorization tokens do not expire:** the token for reading or deleting a partial exit is a secp256k1 signature from the operator's ENR key. It covers the lock hash, the validator public key and the operator's share index. It is stateless and deterministic, so Charon can recompute it at any time. Each token is scoped to one validator and one operator share. It allows only two things: reading the aggregated exit for that validator once a threshold of operators has submitted partials, and deleting that operator's own partial exit. Creating a token requires the operator's private key.
* **Fetching an exit deletes partial exits:** it does not. `GET /v1/exit/{lockHash}/{shareIdx}/{validatorPubkey}` is read-only. A partial exit is removed only by `DELETE`, and an operator can delete only their own share.
* **Signed exits never expire:** this is how the consensus protocol treats voluntary exits. Once a threshold of operators has signed an exit, they have authorized it, and anyone can broadcast the aggregated message. The API serves it only to the cluster's own operators.

### Terms and Conditions

* **Terms and conditions signature has no chain ID:** The EIP-712 signature that accepts Obol's terms and conditions uses a domain with only `name` and `version`, and no `chainId`. This is deliberate: the terms are the same on every network, so one acceptance by an address covers all of them. The Obol API stores one acceptance per address and terms version, and re-submitting an accepted one changes nothing. The `fork_version` sent with it only selects the chain on which a contract wallet (ERC-1271) signature is checked. The API does not serve the signature back: `GET /v1/termsAndConditions/{address}` returns only whether the address has accepted. Replaying the signature, on another network or by another party, can only record an acceptance its signer already gave.

## DV Launchpad

The DV Launchpad is a client of the Obol API and of the chain. The API trust model above applies to the clusters, deposits and exits it shows.

* **Withdrawal credentials that can never withdraw (resolved in v1.8.0, 2026-10-23):** deposit files and lock deposits whose withdrawal credentials are an execution address padded to 32 bytes were accepted, although the prefix of such credentials is the address's first byte. The Launchpad now requires `0x01`/`0x02` credentials with 11 zero bytes after the prefix. `0x00` (BLS) withdrawal credentials that do not look like a padded address are still accepted, as the beacon chain accepts them.
