---
description: Documenting a Distributed Validator Cluster in a standardised file format
---

# Charon CLI Reference

:::caution

The `charon` client is under heavy development, interfaces are subject to change until a first major version is published. 

:::

The following is a reference for charon version [`0.1.1`](https://github.com/ObolNetwork/charon/releases/tag/v0.1.1). Find the latest release on [our github](https://github.com/ObolNetwork/charon/releases).

```markdown
charon --help    
Charon enables the operation of Ethereum validators in a fault tolerant manner by splitting the
                                validating keys across a group of trusted parties using threshold cryptography.

Usage:
  charon [command]

Available Commands:
  completion  Generate the autocompletion script for the specified shell
  enr         Return this node's ENR
  help        Help about any command
  run         Runs the Charon middleware
  version     Print version and exit

Flags:
  -h, --help   help for charon

Use "charon [command] --help" for more information about a command.
```

```
charon run --help
Starts the long-running Charon middleware process to perform distributed validator duties.

Usage:
  charon run [flags]

Flags:
      --beacon-node-endpoint string    Beacon node endpoint URL (default "http://localhost/")
      --data-dir string                The directory where charon will store all its internal data (default "./charon/data")
  -h, --help                           help for run
      --jaeger-address string          Listening address for Jaeger tracing
      --manifest-file string           The path to the manifest file defining distributed validator cluster (default "./charon/manifest.json")
      --monitoring-address string      Listening address (ip and port) for the monitoring API (prometheus, pprof) (default "127.0.0.1:8088")
      --p2p-allowlist string           Comma-separated list of CIDR subnets for allowing only certain peer connections. Example: 192.168.0.0/16 would permit connections to peers on your local network only. The default is to accept all connections.
      --p2p-denylist string            Comma-separated list of CIDR subnets for disallowing certain peer connections. Example: 192.168.0.0/16 would disallow connections to peers on your local network. The default is to accept all connections.
      --p2p-tcp-address strings        Comma-separated list of listening TCP addresses (ip and port) for LibP2P traffic (default [127.0.0.1:13900])
      --p2p-udp-address string         Listening UDP address (ip and port) for Discv5 discovery (default "127.0.0.1:30309")
      --p2p-udp-bootnodes strings      Comma-separated list of discv5 bootnode URLs or ENRs. Example URL: enode://<hex node id>@10.3.58.6:30303?discport=30301
      --p2p-udp-peerdb string          Path to store a discv5 peer database. Empty default results in in-memory database.
      --validator-api-address string   Listening address (ip and port) for validator-facing traffic proxying the beacon-node API (default "127.0.0.1:3500")
```