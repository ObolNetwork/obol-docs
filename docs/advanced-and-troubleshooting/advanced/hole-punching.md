---
description: "Achieve a P2P direct connection under a private IP (NAT hole punching)."
sidebar_label: "NAT Hole Punching"
slug: /advanced-and-troubleshooting/advanced/hole-punching
---

# NAT hole punching

Charon uses the _DCUtR (Direct Connection Upgrade through Relay)_ protocol to establish direct connections between peers. Nodes first meet via a relay, then DCUtR coordinates a simultaneous dial from both sides — this creates a temporary Network Address Translation (NAT) hole in each peer's router without any manual port forwarding. DCUtR works over both TCP and QUIC, though QUIC achieves a higher success rate as UDP traversal is more permissive on most NATs.

For the majority of home users, enabling direct connections requires only two configuration changes.

:::warning
Hole punching does not work on Symmetric NAT, which is common on corporate networks and some mobile connections but rare on home routers. If you follow all steps below and direct connections still never establish, your NAT type may be the cause.
:::

:::info
Since Charon v1.11, hole punching success rates between peers have been significantly improved. Hole punching still requires both sides to support the `/libp2p/dcutr` protocol — if a specific peer consistently fails to establish a direct connection, verify they are running Charon v1.11 or later.
:::

## Step 1 — enable QUIC (highly advisable)

Add the following to your Charon startup command:

```sh
--p2p-udp-address=0.0.0.0:3610
--feature-set-enable=quic
```

Without those, hole punching falls back to TCP only, which has a lower success rate on most home routers.

## Step 2 — advertise your public address (advisable)

```sh
--p2p-external-ip=<your-public-ip>
```

Without this, Charon advertises only its private/internal address (e.g. `172.19.0.x`, `192.168.x.x`). Peers have no way to reach you and hole punching cannot be initiated.

:::warning
**Dynamic IP:** Home ISPs frequently reassign public IPs. If you use `--p2p-external-ip`, it will go stale when your IP changes and peers will silently fail to connect. Prefer `--p2p-external-host` with a Dynamic DNS (DDNS) service (e.g. DuckDNS, No-IP) if possible. Charon re-resolves the hostname periodically.
:::

## Docker

### Add port mappings (required)

Docker's bridge network blocks all inbound traffic by default. Unlike a home router — which allows return traffic for outbound-initiated flows — Docker requires explicit port mappings:

```yaml
ports:
  - "3610:3610/udp"
  - "3610:3610/tcp"
```

### Optionally use `network_mode: host`

Setting `network_mode: host` removes Docker's bridge NAT entirely, eliminating a layer of complexity for hole punching:

```yaml
services:
  charon:
    network_mode: host
```

:::warning
**Risks:**

- The container shares the host's full network namespace. Any port Charon binds to is bound directly on the host, which can conflict with other services running on the same machine.
- A compromised container has direct access to the host network stack, increasing the blast radius of a security incident.
- The `ports` mapping in your compose file has no effect in this mode and can be misleading if left in.
:::

## Kubernetes

### Expose both TCP and UDP in your service (required)

Define a service that exposes both protocols on the Charon P2P port:

```yaml
apiVersion: v1
kind: Service
metadata:
  name: charon-p2p
spec:
  type: NodePort
  selector:
    app: charon
  ports:
    - name: p2p-tcp
      port: 3610
      targetPort: 3610
      protocol: TCP
    - name: p2p-udp
      port: 3610
      targetPort: 3610
      protocol: UDP
```

:::info
Some Kubernetes distributions cannot handle TCP and UDP on the same port in a single service. If you encounter issues, split them into two separate services.
:::

### Optionally use `hostNetwork: true`

Setting `hostNetwork: true` on the pod removes the Kubernetes network overlay, letting Charon bind directly to the node's network interface:

```yaml
spec:
  hostNetwork: true
  containers:
    - name: charon
```

:::warning
**Risks:**

- The pod shares the host's full network namespace. Port conflicts with other workloads on the same node become possible.
- Kubernetes network policies no longer apply to the pod, removing a layer of traffic isolation.
- A compromised pod has direct access to the host network stack.
- In multi-node clusters, the pod is tied to a specific node's network, which can complicate scheduling and failover.
:::

:::info
**Running Kubernetes on a cloud provider?** Cloud environments use deny-by-default firewalls that sit below the Kubernetes layer and must be configured separately in the cloud console (AWS Security Groups, GCP Firewall Rules, Azure NSGs). Ensure inbound TCP and UDP on your P2P port are explicitly allowed.
:::
