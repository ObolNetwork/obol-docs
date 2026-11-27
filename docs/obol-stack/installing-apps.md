---
description: "Deploy additional applications on your Obol Stack"
sidebar_label: "Installing Apps"
slug: /obol-stack/installing-apps
---

# Installing apps

The Obol Stack can install any Helm chart as a managed application. Each installation is one directory of files on your machine, deployed to its own namespace with `obol app sync` and restored on `obol stack up`.

```
~/.config/obol/applications/<name>/<id>/
├── helmfile.yaml   chart, version, release name, namespace
├── values.yaml     your overrides of the chart defaults
└── obol-app.yaml   release name and the revision obol last synced (v0.19.0+, managed by obol)
```

This page describes Obol Stack v0.19.0. Check yours with `obol version`; the differences from earlier versions are called out below.

## Install an application

```shell
# A chart from a repository, latest version
obol app install bitnami/redis

# A specific version, with your own name, deployment ID and values
obol app install bitnami/postgresql@15.0.0 --name mydb --id production --set auth.database=app

# A direct URL or an OCI reference
obol app install https://charts.bitnami.com/bitnami/redis-19.0.0.tgz
obol app install oci://registry-1.docker.io/bitnamicharts/redis --name cache --id prod
```

`install` only writes the files. Deploy with `obol app sync` (below).

**Chart references.** For `repo/chart[@version]`, `obol` looks the repository name up in this order:

1. Your local Helm repositories (`obol helm repo list`).
2. The built-in alias `obol`, for Obol's chart repository `https://obolnetwork.github.io/helm-charts` (for example `obol/dv-pod`, `obol/obol-app`).
3. [Artifact Hub](https://artifacthub.io).

| Format | Example |
| --- | --- |
| `repo/chart` | `bitnami/redis` |
| `repo/chart@version` | `bitnami/redis@19.0.0` |
| `https://.../*.tgz` | Direct URL to a chart archive |
| `oci://...` | OCI registry reference |

**Names.** The namespace is `<name>-<id>`. From v0.19.0, the Helm release is `<name>-<id>` too, unless you pass `--release <name>`. Apps installed with earlier versions keep their release name.

**values.yaml holds only your overrides.** From v0.19.0 it contains what you passed with `--values` and `--set`, and a comment with the command that prints all of the chart's defaults (`obol helm show values …`). The chart's defaults are read on every sync, so upgrading the chart brings its new defaults. Charts that ship an Obol Stack example (`values-examples/obol-stack.yaml`, as `dv-pod` does) start from that file, comments included. Comments, key order and quotes survive every write, and values that look like numbers, such as `0x…` addresses and hashes, stay quoted.

**Namespace and release.** `--namespace` and `--release` override the `<name>-<id>` defaults. Namespaces the Stack itself uses (`kube-*`, `default`, `traefik`, `x402`, `llm`, `erpc`, `monitoring`, `obol-frontend`, `reloader`, `hermes-*`, `ethereum-*`, `aztec-*`) are refused.

**Existing Helm releases.** Install refuses when a Helm release of the same name already exists in the namespace and `obol app` doesn't manage it. Pass `--adopt`, with the release's namespace and name, to take it over: `values.yaml` starts from the release's current values, and its current revision becomes the baseline for later syncs. Adopt at the chart version the release runs now (`obol helm list -n <namespace>`), then upgrade:

```shell
# a dv-pod installed with: obol helm upgrade --install my-dv-pod obol/dv-pod -n dv-pod ...
obol app install obol/dv-pod@<CURRENT_VERSION> --name dv-pod --id hoodi \
  --namespace dv-pod --release my-dv-pod --adopt
obol app sync dv-pod/hoodi
```

## Deploy to the cluster

```shell
obol app sync                                   # auto-selects if only one app is installed
obol app sync mydb/production                   # by full identifier
obol app sync mydb/production --set image.tag=1.2.3   # saved into values.yaml, then deployed
```

Check status:

```shell
obol kubectl get all -n mydb-production
```

After a sync, the CLI prints a ready-to-run `obol sell http` command for each Service the app exposes. It never suggests one for validator or signer workloads, such as a `dv-pod`, or for Services on validator, signer or node ports.

**Don't mix `obol app` and `obol helm upgrade`.** From v0.19.0, `obol` records the Helm revision after every sync. If the release was changed directly with `obol helm upgrade` or `rollback` since then, the next sync refuses and names the settings that differ (names only, never values). Copy the changes into `values.yaml` and sync again, or pass `--force` to overwrite them. `obol stack up` and `obol upgrade` report such drift instead of reverting it.

## List applications

```shell
obol app list
obol app list --verbose
```

## Customize configuration

Edit the values file, then sync:

```shell
$EDITOR ~/.config/obol/applications/mydb/production/values.yaml
obol app sync mydb/production
```

## Upgrade the chart

```shell
obol app upgrade mydb/production --version 15.1.0
```

`obol app upgrade` (v0.19.0+) checks that the repository has that version, sets it in the app's `helmfile.yaml` and syncs with the usual drift check. If the sync is refused because the release was changed outside `obol app`, `helmfile.yaml` goes back to the old version; `--force` overrides the check. `values.yaml` isn't changed, so read the new version's notes for settings to add.

An app installed before v0.19.0 may have a `values.yaml` that is a full copy of the old chart's defaults, which would keep the old image tags. `obol app upgrade` warns about it. Slim it first with `obol app install <chart>@<new-version> --name <name> --id <id> --force --values <your-overrides.yaml>`, which keeps the release, namespace and sync record.

A chart installed from a versioned `.tgz` URL can't be upgraded this way; reinstall it from the new URL with `--force`. By hand, the upgrade comes to editing `version:` in `helmfile.yaml` and running `obol app sync`.

## Secrets

`obol app secret` (v0.19.0+) writes a Kubernetes Secret into the app's namespace without its values passing through your shell history, a Helm value or the terminal. `obol` reads the files itself:

```shell
obol app secret set mydb/production api-keys --from-env-file ./keys.env
obol app secret set dv-pod/hoodi obol-monitoring --from-file token=./monitoring-token
obol app secret list dv-pod/hoodi      # names, types and key names only
```

The namespace is created if needed, so you can create a Secret before the first sync. Point the chart at the Secret by name in `values.yaml`.

## Delete an application

```shell
obol app delete mydb/production                     # asks first; --force skips the question
obol app delete dv-pod/hoodi --keep-data            # only the Helm release, always
obol app delete dv-pod/hoodi --delete-data          # everything; type the app name to confirm
obol app delete dv-pod/hoodi --delete-data --yes    # everything, without a terminal
```

From v0.19.0, `obol` first checks the namespace for persistent volumes and for Secrets that look like key material, such as a `dv-pod`'s key shares and ENR key. If it finds any, or can't check, it removes **only the Helm release**: the namespace, volumes, Secrets and configuration stay, and `obol app sync` redeploys onto them. Only `--delete-data` removes them. A namespace that also holds other Helm releases, such as one you adopted a release into, is never deleted as a whole: only the app's release is removed, and `--delete-data` refuses and tells you which volumes to delete. `--force` never deletes data.

:::danger
Before v0.19.0, `obol app delete` removes the whole namespace, including persistent volumes. Don't use it on anything that holds keys on an older version.
:::

## Deploy your own Dockerfile

The `obol-app` chart wraps any container image in a Deployment, Service and route:

1. Build and push your image to a registry the cluster can reach.
2. Write a values file with at least `image.repository`, `image.tag` and the ports to expose. See the chart's [values.yaml](https://github.com/ObolNetwork/helm-charts/blob/main/charts/obol-app/values.yaml).
3. Install and sync it:

   ```shell
   obol app install obol/obol-app --name myservice --id prod --values my-values.yaml
   obol app sync myservice/prod
   ```

To charge for it, see [Selling services](selling-services.md).

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
