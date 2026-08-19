# Installing apps

The Obol Stack supports installing additional applications on top of your local Kubernetes cluster. Applications extend the functionality of your stack with monitoring, RPC proxies, and other services.

:::info
The application system is under active development. Currently, default applications are deployed automatically with the stack. The `obol app` command for installing additional applications is planned for a future release.
:::

## Default applications

When you run `obol stack up`, the following applications are automatically deployed:

### Monitoring stack

A complete monitoring solution based on Prometheus and Grafana:

* **Grafana** - Dashboards and visualization
* **Prometheus** - Metrics collection and storage
* **Pre-configured dashboards** - Kubernetes and application metrics

Access Grafana at: `http://grafana.localhost:8080`

:::tip
Grafana is configured with anonymous admin access for local development. No login required.
:::

Access Prometheus at: `http://prometheus.localhost:8080`

### Local path provisioner

Provides persistent storage for applications using local disk. All networks and applications use this storage class by default.

## Application architecture

Applications in Obol Stack follow a self-registration pattern for monitoring:

* **ServiceMonitors** - Applications expose metrics that Prometheus discovers via the `release: monitoring` label.
* **Grafana dashboards** - Applications can provide dashboards via ConfigMaps with the `grafana_dashboard: "1"` label.

This means networks you install (Ethereum, Aztec, etc.) automatically appear in the monitoring stack.

## Planned features

The following features are planned for future releases:

### Application management commands

```shell
obol app list                    # List available apps
obol app install <app-name>      # Install an application
obol app edit <app-name>         # Edit application configuration
obol app sync <app-name>         # Deploy/update application
obol app delete <app-name>       # Remove application
```

### Additional applications

* **ERPC** - Unified RPC proxy and load balancer for Ethereum endpoints
* **Obol Frontend** - Web-based management interface

## Viewing application status

Check running applications:

```shell
# View default namespace resources
obol kubectl get all -n default

# View monitoring stack
obol kubectl get all -n monitoring

# View all Helm releases
obol helm list -A
```

## Accessing services

Services are exposed via Traefik ingress on ports 8080 (HTTP) and 8443 (HTTPS).

| Service | URL |
| --- | --- |
| Grafana | `http://grafana.localhost:8080` |
| Prometheus | `http://prometheus.localhost:8080` |

:::info
The `obol.stack` hostname is added to `/etc/hosts` during installation, enabling local DNS resolution for stack services.
:::
