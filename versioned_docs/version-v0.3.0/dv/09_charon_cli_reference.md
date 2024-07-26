---
description: A go-based middleware client for taking part in Distributed Validator clusters.
---

# Charon CLI reference

:::warning

The `charon` client is under heavy development, interfaces are subject to change until a first major version is published. 

:::

The following is a reference for charon version [`0.3.0`](https://github.com/ObolNetwork/charon/releases/tag/v0.3.0). Find the latest release on [our Github](https://github.com/ObolNetwork/charon/releases).

```markdown
charon --help
Charon enables the operation of Ethereum validators in a fault tolerant manner by splitting the validating keys across a group of trusted parties using threshold cryptography.

Usage:
  charon [command]

Available Commands:
  bootnode       Starts a p2p-udp discv5 bootnode
  completion     Generate the autocompletion script for the specified shell
  create-cluster Create a local charon cluster
  enr            Return this node's ENR
  gen-p2pkey     Generates a new p2p key
  help           Help about any command
  run            Runs the Charon middleware
  version        Print version and exit

Flags:
  -h, --help   Help for charon

Use "charon [command] --help" for more information about a command.
```

```markdown
charon create-cluster --help
Create a local charon cluster including validator keys, charon p2p keys, and a cluster manifest. See flags for supported features.

Usage:
  charon create-cluster [flags]

Flags:
      --clean                   Delete the cluster directory before generating it.
      --cluster-dir string      The target folder to create the cluster in. (default "./charon/cluster")
      --config                  Enables creation of local non-docker config files.
      --config-binary string    Path of the charon binary to use in the config files. Defaults to this binary if empty. Requires --config.
      --config-port-start int   Starting port number used in config files. Requires --config. (default 16000)
      --config-simnet           Configures a simulated network cluster with mock beacon node and mock validator clients. It showcases a running charon in isolation. Requires --config. (default true)
  -h, --help                    Help for create-cluster
  -n, --nodes int               The number of charon nodes in the cluster. (default 4)
      --split-existing-keys     Enables splitting of existing non-dvt validator keys into distributed threshold private shares (instead of creating new random keys).
      --split-keys-dir string   Directory containing keys to split. Expects keys in keystore-*.json and passwords in keystore-*.txt. Requires --split-validator-keys.
  -t, --threshold int           The threshold required for signature reconstruction. Minimum is n-(ceil(n/3)-1). (default 3)

```

```markdown
charon run --help
Starts the long-running Charon middleware process to perform distributed validator duties.

Usage:
  charon run [flags]

Flags:
      --beacon-node-endpoint string    Beacon node endpoint URL (default "http://localhost/")
      --data-dir string                The directory where charon will store all its internal data (default "./charon/data")
  -h, --help                           Help for run
      --jaeger-address string          Listening address for jaeger tracing
      --jaeger-service string          Service name used for jaeger tracing (default "charon")
      --log-format string              Log format; console, logfmt or json (default "console")
      --log-level string               Log level; debug, info, warn or error (default "info")
      --manifest-file string           The path to the manifest file defining distributed validator cluster (default "./charon/manifest.json")
      --monitoring-address string      Listening address (ip and port) for the monitoring API (prometheus, pprof) (default "127.0.0.1:16001")
      --p2p-allowlist string           Comma-separated list of CIDR subnets for allowing only certain peer connections. Example: 192.168.0.0/16 would permit connections to peers on your local network only. The default is to accept all connections.
      --p2p-bootmanifest               Enables using manifest ENRs as discv5 bootnodes. Allows skipping explicit bootnodes if key generation ceremony included correct IPs.
      --p2p-bootnode-relay             Enables using bootnodes as libp2p circuit relays. Useful if some charon nodes are not have publicly accessible.
      --p2p-bootnodes strings          Comma-separated list of discv5 bootnode URLs or ENRs. Example: enode://<hex node id>@10.3.58.6:30303?discport=30301.
      --p2p-denylist string            Comma-separated list of CIDR subnets for disallowing certain peer connections. Example: 192.168.0.0/16 would disallow connections to peers on your local network. The default is to accept all connections.
      --p2p-external-hostname string   The DNS hostname advertised by libp2p. This may be used to advertise an external DNS.
      --p2p-external-ip string         The IP address advertised by libp2p. This may be used to advertise an external IP.
      --p2p-peerdb string              Path to store a discv5 peer database. Empty default results in in-memory database.
      --p2p-tcp-address strings        Comma-separated list of listening TCP addresses (ip and port) for libP2P traffic. (default [127.0.0.1:16003])
      --p2p-udp-address string         Listening UDP address (ip and port) for discv5 discovery. (default "127.0.0.1:16004")
      --simnet-beacon-mock             Enables an internal mock beacon node for running a simnet.
      --simnet-validator-mock          Enables an internal mock validator client when running a simnet. Requires simnet-beacon-mock.
      --validator-api-address string   Listening address (ip and port) for validator-facing traffic proxying the beacon-node API (default "127.0.0.1:16002")
```
