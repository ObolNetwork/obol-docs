---
description: "Deploy additional applications on your Obol Stack"
sidebar_label: "Installing Apps"
slug: /obol-stack/installing-apps
---

# Installing apps

The Obol Stack supports installing arbitrary Helm charts as managed applications. Each installation creates an isolated deployment with its own namespace, similar to network deployments.

## Install an application

Install any Helm chart using one of the supported reference formats:

```shell
# Install from ArtifactHub (repo/chart format)
obol app install bitnami/redis

# Specific version
obol app install bitnami/postgresql@15.0.0

# Direct URL to chart archive
obol app install https://charts.bitnami.com/bitnami/redis-19.0.0.tgz

# Custom name and deployment ID
obol app install bitnami/postgresql --name mydb --id production
```

:::info
Find charts at [Artifact Hub](https://artifacthub.io).
:::

**Supported chart reference formats:**

| Format | Example |
| --- | --- |
| `repo/chart` | `bitnami/redis` (resolved via ArtifactHub) |
| `repo/chart@version` | `bitnami/redis@19.0.0` |
| `https://.../*.tgz` | Direct URL to chart archive |

**What happens during installation:**

1. Resolves the chart reference (via ArtifactHub for `repo/chart` format).
2. Fetches default values from the chart.
3. Generates a `helmfile.yaml` that references the chart remotely.
4. Saves configuration to `~/.config/obol/applications/<app>/<id>/`.

## Deploy to the cluster

After installing, deploy the application:

```shell
# Auto-selects if only one app is installed
obol app sync

# By type (auto-selects if only one postgresql deployment)
obol app sync postgresql

# By full identifier
obol app sync postgresql/eager-fox
```

Check status:

```shell
obol kubectl get all -n postgresql-eager-fox
```

## List applications

```shell
# Simple list
obol app list

# Detailed output
obol app list --verbose
```

## Customize configuration

Edit the values file before deploying or re-syncing:

```shell
$EDITOR ~/.config/obol/applications/postgresql/eager-fox/values.yaml

# Re-deploy with changes (auto-selects if only one app)
obol app sync
```

**Local files per deployment:**

* `helmfile.yaml` - Deployment configuration (references chart remotely)
* `values.yaml` - Configuration values (edit to customize)

## Delete an application

```shell
# Auto-selects if only one app is installed
obol app delete

# By type or full identifier
obol app delete postgresql
obol app delete postgresql/eager-fox

# Skip confirmation
obol app delete postgresql/eager-fox --force
```

This removes the Kubernetes namespace, all deployed resources, and the local configuration directory.

## Default infrastructure

The following services are deployed automatically when the stack starts (you do not need to install them):

| Service | Namespace | Purpose |
| --- | --- | --- |
| **Hermes (default agent)** | `hermes-obol-agent` | AI agent + dashboard |
| **eRPC** | `erpc` | Unified RPC load balancer for Ethereum endpoints |
| **Obol Frontend** | `obol-frontend` | Web management dashboard (local-only) |
| **Monitoring** | `monitoring` | Prometheus + kube-prometheus-stack |
| **Traefik** | `traefik` | Gateway API ingress controller |
| **Cloudflared** | `traefik` | Cloudflare tunnel connector |
| **LiteLLM** | `llm` | OpenAI-compatible LLM gateway |
| **x402 verifier + ServiceOffer controller** | `x402` | Payment gating for `obol sell` |

View all running services:

```shell
obol helm list -A
```
