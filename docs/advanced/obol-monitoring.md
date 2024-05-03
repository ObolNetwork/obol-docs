---
sidebar_position: 5
description: Add monitoring credentials to help the Obol Team monitor the health of your cluster
---

# Push Metrics to Obol Monitoring

:::info
This is **optional** and does not confer any special privileges within the Obol Network.
:::

You may have been provided with **Monitoring Credentials** used to push distributed validator metrics to Obol's central prometheus cluster to monitor, analyze, and improve your Distributed Validator Cluster's performance.

The provided credentials needs to be added in `prometheus/prometheus.yml` replacing `$PROM_REMOTE_WRITE_TOKEN` and will look like:
```
obol20!tnt8U!C...
```

The updated `prometheus/prometheus.yml` file should look like:
```yaml
global:
  scrape_interval:     30s # Set the scrape interval to every 30 seconds.
  evaluation_interval: 30s # Evaluate rules every 30 seconds.

remote_write:
  - url: https://vm.monitoring.gcp.obol.tech/write
    authorization:
      credentials: obol20!tnt8U!C...
    write_relabel_configs:
      - source_labels: [job]
        regex: "charon"
        action: keep # Keeps charon metrics and drop metrics from other containers.

scrape_configs:
  - job_name: 'charon'
    static_configs:
      - targets: ['charon:3620']
  - job_name: "lodestar"
    static_configs:
      - targets: [ "lodestar:5064" ]
  - job_name: 'node-exporter'
    static_configs:
      - targets: ['node-exporter:9100']
```