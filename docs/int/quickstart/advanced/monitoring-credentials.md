---
sidebar_position: 4
description: Allow monitoring credentials to help the Obol Team monitor the health of your cluster
---

# Allow Obol Central Monitoring

:::info
This is **optional** and does not grant any privileges within the Obol Network.
:::

You may have been provided with **Monitoring Credentials** used to push distributed validator metrics to Obol central prometheus service to monitor, analyze and improve your cluster's performance.

The provided credentials needs to be added in `prometheus/prometheus.yml` replacing `$PROM_REMOTE_WRITE_TOKEN` and will look like:
```
obol20!tnt8U!C...
```

The updated `prometheus/prometheus.yml` file should look like:
```
global:
  scrape_interval:     30s # Set the scrape interval to every 30 seconds.
  evaluation_interval: 30s # Evaluate rules every 30 seconds.

remote_write:
  - url: https://vm.monitoring.gcp.obol.tech/write
    authorization:
      credentials: obol20!tnt8U!C...

scrape_configs:
  - job_name: 'charon'
    static_configs:
      - targets: ['charon:3620']
  - job_name: 'teku'
    static_configs:
      - targets: ['teku:8008']
  - job_name: 'node-exporter'
    static_configs:
      - targets: ['node-exporter:9100']
```