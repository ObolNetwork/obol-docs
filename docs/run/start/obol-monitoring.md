---
sidebar_position: 4
description: Add monitoring credentials to help the Obol Team monitor the health of your cluster
---

# Push Metrics to Obol Monitoring

:::info
This is **optional** and does not confer any special privileges within the Obol Network.
:::

You may have been provided with **Monitoring Credentials** used to push distributed validator metrics to Obol's central Prometheus cluster to monitor, analyze, and improve your Distributed Validator Cluster's performance. (For example, this is necessary to participate in the Obol [Techne](https://squadstaking.com/techne) credential program.) 

## Update the monitoring token in the `.env` file  
- Inside your `.env` file, uncomment the `PROM_REMOTE_WRITE_TOKEN` line by removing the `#` symbol.  
- Enter your monitoring token in the format shown below:

```shell
PROM_REMOTE_WRITE_TOKEN=your_monitoring_token
```

## Save the `.env` file and restart Prometheus  
Save the .env file, and restart Prometheus to apply the changes:

```shell
docker compose restart prometheus
```
