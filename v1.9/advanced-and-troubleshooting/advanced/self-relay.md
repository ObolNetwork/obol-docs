# Self-Host a Relay

If you are experiencing connectivity issues with the Obol hosted relays, or you want to improve your clusters latency, resilience, and decentralization, you can opt to host your own relay on a separate open and static internet port.

Below is a simple `docker compose` file which runs a Charon as a relay server:

```shell
# Clone the repo and cd into it.
git clone https://github.com/ObolNetwork/charon-distributed-validator-node.git

cd charon-distributed-validator-node

# If you are exposing your relay on the public internet, determine your public IP
curl v4.ident.me

# Replace 'replace.with.public.ip.or.hostname' in relay/docker-compose.yml with your 
# public IPv4 or DNS hostname, or with your private IP on your local (v)LAN, if this 
# relay is running for Charon's sharing a private network. 
nano relay/docker-compose.yml

# Start the relay
docker compose -f relay/docker-compose.yml up
```

Test whether the relay is publicly (or privately) accessible. This should return an ENR: `curl http://replace.with.public.ip.or.hostname:3640/enr`

Ensure the ENR returned by the relay contains the correct public IP and port by decoding it with [ENR viewer](https://enr-viewer.com/).

Configure **ALL** charon nodes in your cluster to use this relay:

* Either by adding a flag: `--p2p-relays=http://replace.with.public.ip.or.hostname:3640/enr`
* Or by setting the environment variable: `CHARON_P2P_RELAYS=http://replace.with.public.ip.or.hostname:3640/enr`

:::info
Keep the default relays and append your self-hosted relay to Charon's flag/environment variables if you want the most resilience `https://0.relay.obol.tech,https://1.relay.obol.tech,https://2.relay.obol.dev`, rather than having your one relay be a single point of failure in your cluster.
:::

:::info
If you are running a relay on a private network, consult your monitoring to confirm your Charon nodes are able to establish a direct connection with one another for optimal performance. You may need to update `charon run` to specify `--p2p-tcp-address=<this-charons-private-network-host-and-port`, such that the two Charon's discover each other on their shared private network.
:::

Note that a local `relay/.charon/charon-enr-private-key` file will be created next to `relay/docker-compose.yml` to ensure a persisted relay ENR across restarts.

A list of publicly available relays that can be used is maintained [here](../security/risks.md).
