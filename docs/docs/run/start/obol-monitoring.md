---
sidebar_position: 5
description: >-
  Add monitoring credentials to help the Obol Team monitor the health of your
  cluster
---

# obol-monitoring

import Tabs from "@theme/Tabs"; import TabItem from "@theme/TabItem";

## Push Metrics to Obol Monitoring

:::info This is **optional** and does not confer any special privileges within the Obol Network. :::

This is for operators using the [example repo](https://github.com/ObolNetwork/charon-distributed-validator-node) from our [quickstart guide](quickstart_overview.md), and have been provided with **Monitoring Credentials** used to push distributed validator metrics to Obol's central Prometheus cluster to monitor, analyze, and improve your Distributed Validator Cluster's performance. (For example, this is necessary to participate in the Obol [Techne](https://squadstaking.com/techne) credential program.)

### Update the monitoring token in the `.env` file

* Inside your `.env` file, uncomment the `PROM_REMOTE_WRITE_TOKEN` line by removing the `#` symbol.
* Enter your monitoring token in the format shown below:

```shell
PROM_REMOTE_WRITE_TOKEN=your_monitoring_token
```

### Save the `.env` file and restart Prometheus

Save the `.env` file, and run the `docker compose up -d` command, and prometheus will be restarted to apply the changes.

```shell
docker compose up -d
# Alternatively
docker compose restart prometheus
```

The last step in your DappNode setup is to add your Monitoring Credentials. This allows you to push distributed validator metrics to Obol’s central Prometheus cluster for monitoring, analysis, and performance optimization of your Distributed Validator Cluster. It also facilitates easier troubleshooting with the Obol team when needed.

1.  Get Prometheus credentials from Obol, which will look like:

    ```
    obol20tnt8UC...
    ```
2. Navigate to your Obol package in DappNode and go to the Config tab.
3. ![Go to config tab](https://github.com/ObolNetwork/obol-docs/blob/main/img/monitoringDappnode.png)
4. At the bottom of the page, add the credential token under \*\*Prometheus Monitoring Credentials (optional)\*\*, then click the Update button.
5. Return to the Info tab, scroll down to the Containers section, and click the down arrow to view all container statuses. If the Prometheus container is stopped, please restart it. ![Restart containers](https://github.com/ObolNetwork/obol-docs/blob/main/img/restart-dappnode-container.png)
