# Fallback beacon nodes

Charon allows specifying multiple beacon node URL endpoints. It sends requests to all specified endpoints simultaneously and proceeds with the first response received. This approach improves reliability but increases the load on the beacon nodes.

To mitigate this additional load, Charon supports configuring a fallback list of beacon nodes. These fallback nodes are only used if all primary beacon nodes fail to respond. This allows operators to designate less critical or public beacon nodes as a backup option, without impacting them under normal conditions.

To configure fallback beacon nodes, provide a comma-separated list of beacon node URLs using the `--fallback-beacon-node-endpoints` CLI flag.
