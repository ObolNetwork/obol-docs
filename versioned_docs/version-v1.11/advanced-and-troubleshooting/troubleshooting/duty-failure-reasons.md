---
description: "Reference for every duty failure reason instrumented by Charon's tracker component, what each one means, and what to do about it."
sidebar_label: "Duty Failure Reasons"
slug: /advanced-and-troubleshooting/troubleshooting/duty-failure-reasons
---

# Duty Failure Reasons

When a Charon node fails to complete a validator duty, the tracker component records a reason for the failure. Operators can see these reasons in their node's logs, and they are also exposed via the `core_tracker_failed_duty_reasons_total` Prometheus counter (see the [Charon Metrics Reference](../../run-a-dv/running/metrics.md)), so they can be graphed and alerted on in Grafana.

This page explains each failure reason and what it means for your cluster. For guidance on troubleshooting specific error messages, see [Errors & Resolutions](errors.md).

## Beacon Node Communication Failures

These reasons indicate a problem communicating with the beacon node, either broadcasting a duty to it or fetching data from it.

### `broadcast_bn_error`

**Summary**: Failed to broadcast the duty to the beacon node.

The beacon node returned an error while Charon was submitting the duty's aggregated signature to it.

### `fetch_bn_error`

**Summary**: Couldn't fetch duty data from the beacon node.

The duty failed in the fetcher step because Charon couldn't fetch the required data from the beacon node API. This indicates a problem with the upstream beacon node.

### `not_included_onchain`

**Summary**: Duty not included on-chain.

Charon broadcast the duty successfully, but it wasn't included in the beacon chain. This is expected for up to 20% of attestations, but it may also indicate problematic Charon broadcast delays or beacon node network problems.

## Consensus and Peer Signature Failures

These reasons relate to Charon's peer-to-peer consensus and partial signature exchange, and generally point to problems with peers, the p2p network, or the local validator client.

### `no_consensus`

**Summary**: Consensus algorithm didn't complete.

The duty failed in the consensus step. This could indicate that insufficient honest peers participated in consensus, or that there are p2p network connection problems.

### `no_peer_signatures`

**Summary**: No partial signatures received from peers.

No partial signature for the duty was received from any peer. This indicates that all peers are offline, or that there are p2p network connection problems.

### `insufficient_peer_signatures`

**Summary**: Insufficient partial signatures received, minimum required threshold not reached.

Insufficient partial signatures for the duty were received from peers. This indicates problems with peers or p2p network connection problems.

### `no_local_vc_signature`

**Summary**: Signed duty not submitted by the local validator client.

The partial signature was never submitted by the local validator client. This could indicate that the local validator client is offline, has connection problems with Charon, or has some other problem. Check the validator client logs for more details.

### `par_sig_db_inconsistent_sync`

**Summary**: Known limitation: inconsistent sync committee signatures received.

The partial signed data for the sync committee duty was inconsistent. This is a known limitation in this version of Charon.

## Prerequisite Duty Failures

Several duties depend on a prerequisite duty completing first, such as an aggregation or block proposal duty depending on beacon committee selections or RANDAO reveals being aggregated across the cluster. These reasons indicate that the fetcher step couldn't proceed because the prerequisite duty failed.

### `failed_aggregator_selection`

**Summary**: Couldn't aggregate attestation due to failed prepare aggregator duty.

The attestation aggregation duty failed in the fetcher step because it couldn't fetch the prerequisite aggregated beacon committee selections. This indicates the associated prepare aggregation duty failed.

### `insufficient_aggregator_selections`

**Summary**: Couldn't aggregate attestation due to insufficient partial beacon committee selections.

The attestation aggregation duty failed in the fetcher step because it couldn't fetch the prerequisite aggregated beacon committee selections. The associated prepare aggregation duty failed due to insufficient partial beacon committee selections submitted by the cluster's validator clients.

### `no_aggregator_selections`

**Summary**: Couldn't aggregate attestation due to no partial beacon committee selections received from peers.

The attestation aggregation duty failed in the fetcher step because it couldn't fetch the prerequisite aggregated beacon committee selections. The associated prepare aggregation duty failed because no partial beacon committee selections were received from peers.

### `zero_aggregator_prepares`

**Summary**: Couldn't aggregate attestation due to zero partial beacon committee selections.

The attestation aggregation duty failed in the fetcher step because it couldn't fetch the prerequisite aggregated beacon committee selections. The associated prepare aggregation duty failed because no partial beacon committee selections were submitted by the cluster's validator clients.

### `missing_aggregator_attestation`

**Summary**: Couldn't aggregate attestation due to failed attester duty.

The attestation aggregation duty failed in the fetcher step because it couldn't fetch the prerequisite attestation data. This indicates the associated attestation duty failed to obtain a cluster agreed-upon value.

### `failed_proposer_randao`

**Summary**: Couldn't propose block due to failed RANDAO duty.

The block proposer duty failed in the fetcher step because it couldn't fetch the prerequisite aggregated RANDAO. This indicates the associated RANDAO duty failed.

### `proposer_insufficient_randaos`

**Summary**: Couldn't propose block due to insufficient partial RANDAO signatures.

The block proposer duty failed in the fetcher step because it couldn't fetch the prerequisite aggregated RANDAO. The associated RANDAO duty failed due to insufficient partial RANDAO signatures submitted by the cluster's validator clients.

### `proposer_no_external_randaos`

**Summary**: Couldn't propose block due to no partial RANDAO signatures received from peers.

The block proposer duty failed in the fetcher step because it couldn't fetch the prerequisite aggregated RANDAO. The associated RANDAO duty failed because no partial RANDAO signatures were received from peers.

### `proposer_zero_randaos`

**Summary**: Couldn't propose block due to zero partial RANDAO signatures.

The block proposer duty failed in the fetcher step because it couldn't fetch the prerequisite aggregated RANDAO. The associated RANDAO duty failed because no partial RANDAO signatures were submitted by the cluster's validator clients.

### `sync_contribution_failed_prepare`

**Summary**: Couldn't fetch sync contribution due to failed prepare sync contribution duty.

The sync contribution duty failed in the fetcher step because it couldn't fetch the prerequisite aggregated sync contribution selections. This indicates the associated prepare sync contribution duty failed.

### `sync_contribution_few_prepares`

**Summary**: Couldn't fetch sync contribution due to insufficient partial sync contribution selections.

The sync contribution duty failed in the fetcher step because it couldn't fetch the prerequisite aggregated sync contribution selections. The associated prepare sync contribution duty failed due to insufficient partial sync contribution selections submitted by the cluster's validator clients.

### `sync_contribution_no_external_prepares`

**Summary**: Couldn't fetch sync contribution due to no partial sync contribution selections received from peers.

The sync contribution duty failed in the fetcher step because it couldn't fetch the prerequisite aggregated sync contribution selections. The associated prepare sync contribution duty failed because no partial sync contribution selections were received from peers.

### `sync_contribution_zero_prepares`

**Summary**: Couldn't fetch sync contribution due to zero partial sync contribution selections.

The sync contribution duty failed in the fetcher step because it couldn't fetch the prerequisite aggregated sync contribution selections. The associated prepare sync contribution duty failed because no partial sync contribution selections were submitted by the cluster's validator clients.

### `sync_contribution_no_sync_msg`

**Summary**: Couldn't fetch sync contribution due to failed sync message duty.

The sync contribution duty failed in the fetcher step because it couldn't fetch the prerequisite sync message. This indicates the associated sync message duty failed to obtain a cluster agreed-upon value.

## Internal Bugs

These reasons indicate an unexpected internal error in Charon rather than an operator-actionable problem. If you encounter one of these reasons, capture your node's debug logs and open an [issue](https://github.com/ObolNetwork/charon/issues) with the Obol team.

### `bug_aggregation_error`

**Summary**: Bug: failed to store aggregated signature in the aggregate signature database.

This indicates a bug in the aggregate signature database, as it is unexpected.

### `bug_duty_db_error`

**Summary**: Bug: failed to store duty data in DutyDB.

This indicates a bug in the DutyDB database, as it is unexpected.

### `bug_fetch_error`

**Summary**: Bug: couldn't fetch due to unexpected error.

The duty failed in the fetcher step with an unexpected error. This indicates a problem in Charon, as it is unexpected.

### `bug_par_sig_db_external`

**Summary**: Bug: failed to store external partial signatures in the partial signature database.

This indicates a bug in the partial signature database, as it is unexpected.

### `bug_par_sig_db_inconsistent`

**Summary**: Bug: inconsistent partial signatures received.

The partial signed data for the duty was inconsistent. For non-sync-committee duties, this indicates a bug in Charon, as it is unexpected.

### `bug_par_sig_db_internal`

**Summary**: Bug: partial signature database didn't trigger partial signature exchange; this is unexpected.

This indicates a bug in the partial signature database, as it is unexpected. Note that this may happen due to an expiry race.

### `bug_sig_agg`

**Summary**: Bug: threshold aggregation of partial signatures failed due to inconsistent signed data.

BLS threshold aggregation of sufficient partial signatures failed, indicating inconsistent signed data. This indicates a bug in Charon, as it is unexpected.

## Unknown

### `unknown`

**Summary**: Unknown error.

An unknown error occurred.

## Next Steps

- For troubleshooting specific Charon, beacon node, and validator client error messages, see [Errors & Resolutions](errors.md).
- To validate the health of your cluster's beacon node, validator client, and peer connectivity, run the [test commands](test_command.mdx).
