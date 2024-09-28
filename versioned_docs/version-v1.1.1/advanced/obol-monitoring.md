---
sidebar_position: 3
description: Add monitoring credentials to help the Obol Team monitor the health of your cluster
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

# Push Metrics to Obol Monitoring

:::info
This is **optional** and does not confer any special privileges within the Obol Network.
:::

You may have been provided with **Monitoring Credentials** used to push distributed validator metrics to Obol's central Prometheus cluster to monitor, analyze, and improve your Distributed Validator Cluster's performance.

<Tabs groupId="Monitoring">
  <TabItem value="CLI" label="CLI">

The provided credentials needs to be added in `prometheus/prometheus.yml` replacing `$PROM_REMOTE_WRITE_TOKEN` and will look like:

```shell
obol20tnt8UC...
```

The updated `prometheus/prometheus.yml` file should look like:

```yaml
global:
  scrape_interval:     30s # Set the scrape interval to every 30 seconds.
  evaluation_interval: 30s # Evaluate rules every 30 seconds.

remote_write:
  - url: https://vm.monitoring.gcp.obol.tech/write
    authorization:
      credentials: obol20tnt8UC-your-credential-here...
    write_relabel_configs:
      - source_labels: [job]
        regex: "charon"
        action: keep # Keeps charon metrics and drop metrics from other containers.

scrape_configs:
  - job_name: "nethermind"
    static_configs:
      - targets: ["nethermind:8008"]
  - job_name: "lighthouse"
    static_configs:
      - targets: ["lighthouse:5054"]
  - job_name: "charon"
    static_configs:
      - targets: ["charon:3620"]
  - job_name: "lodestar"
    static_configs:
      - targets: [ "lodestar:5064" ]
```

After updating and saving the `prometheus/prometheus.yml`, you must restart the `prometheus` container for the monitoring credentials to take effect:

```shell
docker compose restart prometheus
```
</TabItem>
<TabItem value="Dappnode" label="Dappnode">
#### Install Dappnode Monitoring Service (DMS)

Before preparing the DappNode to take part in performance monitoring, you must ensure you have the Dappnode Monitoring Software (DMS) package installed and you will need the monitoring credential sent to you by Obol or shared by your Squad leader.

#### Installing and accessing DMS

Locate DMS in your DAppStore, listed among the Featured packages. The installation process is straightforward, much like any other Dappnode package. After installation, you can access DMS Grafana and explore all its dashboards by visiting <a href="[http://my.dappnode/installer/dnp/obol.dnp.dappnode.eth](http://dms.dappnode/)" target="_blank">http://dms.dappnode/</a>

<p>
          <ol>
            <li>
              Login to the DappNode Interface:{" "}
              <a href="http://my.dappnode/dashboard" target="_blank">
                Dappnode Login
              </a>
              <img src="/img/dappnodeLogin.png" alt="Dappnode Login" />
            </li>
            <li>
              Click on the 'DAppStore' tab on the left side, locate and install DMS among the Featured packages. After installation, you can access DMS Grafana and explore all its dashboards by visiting http://dms.dappnode.
            </li>
            <li>
              Once the package is installed, it should reflect on your 'Packages'
            </li>
            </ol>
        </p>

#### Adding montitoring credentials to Obol config

With DMS installed, the below steps will walk through adding the monitoring credential provided by techne@obol.tech or your squad leader.

<p>
  <ol>
   <li>
      Click 'Packages' > 'Obol' > 'Config'
    </li>
    <li>
      Locate the field 'Charons to monitor by Obol (optional)' and input the Charon number which is to be monitored by Obol team for performance and reliability. 
    </li>
    <li>
      Locate Prometheus Monitoring URL field, it should populate with 'https://vm.monitoring.gcp.obol.tech/write' if not, add that now. This is the URL to send the monitoring metrics to. The server must be able to receive the metrics from the prometheus service.
    </li>
    <li>
      Locate the field called 'Prometheus Monitoring Credentials' This is where you will input the monitoring credential provided to you by Obol or shared by your squad leader.  
    </li>
    <li>
      Navigate to the bottom of the page and click 'Update'
    </li>
  </ol>
</p>
</TabItem>
</Tabs>

