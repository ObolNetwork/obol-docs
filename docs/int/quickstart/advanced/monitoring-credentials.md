---
sidebar_position: 4
description: Add monitoring credentials to help the Obol Team monitor the health of your cluster
---
# Getting Started Monitoring your Node

Welcome to this comprehensive guide, designed to assist you in effectively monitoring your Charon cluster and nodes, and setting up alerts based on specified parameters.

## Pre-requisites

Ensure the following software are installed:

- Docker: Find the installation guide for Ubuntu **[here](https://docs.docker.com/engine/install/ubuntu/)**
- Prometheus: You can install it using the guide available **[here](https://prometheus.io/docs/prometheus/latest/installation/)**
- Grafana: Follow this **[link](https://grafana.com/docs/grafana/latest/setup-grafana/installation/)** to install Grafana

# Push metrics to Obol Monitoring

:::info
This is **optional** and does not confer any special privileges within the Obol Network.
:::

You may have been provided with **Monitoring Credentials** used to push distributed validator metrics to Obol's central prometheus cluster to monitor, analyze, and improve your Distributed Validator Cluster's performance.

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
  - job_name: "lodestar"
    static_configs:
      - targets: [ "lodestar:5064" ]
  - job_name: 'node-exporter'
    static_configs:
      - targets: ['node-exporter:9100']
```

## Import Pre-Configured Charon Dashboards

- Navigate to the **[repository](https://github.com/ObolNetwork/terraform-modules/tree/main/grafana-dashboards/dashboards)** that contains a variety of Grafana dashboards. For this demonstration, we will utilize the Charon Dashboard json.
- In your Grafana interface, create a new dashboard and select the import option.

![Screenshot 2023-06-26 at 1.00.05 PM.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2bba3f52-ff32-452e-811b-f2ac7a4905fb/Screenshot_2023-06-26_at_1.00.05_PM.png)

- Copy the content of the Charon Dashboard json from the repository and paste it into the import box in Grafana. Click "Load" to proceed.

![Screenshot 2023-06-26 at 1.03.08 PM.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6790e67a-eb51-4bfb-b7b1-df14f214b72d/Screenshot_2023-06-26_at_1.03.08_PM.png)

- Finalize the import by clicking on the "Import" button. At this point, your dashboard should begin displaying metrics. Ensure your Charon client and Prometheus are operational for this to occur.

![Screenshot 2023-06-26 at 1.16.27 PM.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/cc0b4a9e-c21c-4ce4-b613-9c3f84e696ed/Screenshot_2023-06-26_at_1.16.27_PM.png)

## Example alerting rules

- Alerts for Node-Exporter can be created using the sample rules provided here

[Awesome Prometheus alerts](https://samber.github.io/awesome-prometheus-alerts/rules.html#host-and-hardware)

- For Charon/Alpha alerts, refer to the alerting rules available

[monitoring/alerting-rules at main · ObolNetwork/monitoring](https://github.com/ObolNetwork/monitoring/tree/main/alerting-rules)

## Understanding Alert rules

1. `AlphaClusterBeaconNodeDown`This alert is activated when the beacon node in a specified Alpha cluster is offline. The beacon node is crucial for validating transactions and producing new blocks. Its unavailability could disrupt the overall functionality of the cluster.
2. `AlphaClusterBeaconNodeSyncing`This alert indicates that the beacon node in a specified Alpha cluster is synchronizing, i.e., catching up with the latest blocks in the cluster.
3. `AlphaClusterNodeDown`This alert is activated when a node in a specified Alpha cluster is offline.
4. `AlphaClusterMissedAttestations`:This alert indicates that there have been missed attestations in a specified Alpha cluster. Missed attestations may suggest that validators are not operating correctly, compromising the security and efficiency of the cluster.
5. `AlphaClusterInUnknownStatus`: This alert is designed to activate when a node within the "Alpha M1 Cluster #1" is detected to be in an unknown state. The condition is evaluated by checking whether the maximum of the app_monitoring_readyz metric is 0.
6. `AlphaClusterInsufficientPeers`:This alert is set to activate when the number of peers for a node in the Alpha M1 Cluster #1 is insufficient. The condition is evaluated by checking whether the maximum of the **`app_monitoring_readyz`** equals 4.
7. `AlphaClusterFailureRate`: This alert is activated when the failure rate of the Alpha M1 Cluster #1 exceeds a certain threshold.
8. `AlphaClusterVCMissingValidators`: This alert is activated if any validators in the Alpha M1 Cluster #1 are missing.
9. `AlphaClusterHighPctFailedSyncMsgDuty`: This alert is activated if a high percentage of sync message duties failed in the "Alpha M1 Cluster #1". The alert is activated if the sum of the increase in failed duties tagged with "sync_message" in the last hour divided by the sum of the increase in total duties tagged with "sync_message" in the last hour is greater than 0.1.
10. `AlphaClusterNumConnectedRelays`: This alert is activated if the number of connected relays in the "Alpha M1 Cluster #1" falls to 0.
11. PeerPingLatency: 1. This alert is activated if the 90th percentile of the ping latency to the peers in a cluster exceeds 500ms within 2 minutes.

## ****Best Practices for Monitoring Charon Nodes & Cluster****

- **Establish Baselines**: Familiarize yourself with the normal operation metrics like CPU, memory, and network usage. This will help you detect anomalies.
- **Define Key Metrics**: Set up alerts for essential metrics, encompassing both system-level and Charon-specific ones.
- **Configure Alerts**: Based on these metrics, set up actionable alerts.
- **Monitor Network**: Regularly assess the connectivity between nodes and the network.
- **Perform Regular Health Checks**: Consistently evaluate the status of your nodes and clusters.
- **Monitor System Logs**: Keep an eye on logs for error messages or unusual activities.
- **Assess Resource Usage**: Ensure your nodes are neither over- nor under-utilized.
- **Automate Monitoring**: Use automation to ensure no issues go undetected.
- **Conduct Drills**: Regularly simulate failure scenarios to fine-tune your setup.
- **Update Regularly**: Keep your nodes and clusters updated with the latest software versions.

## ****Third-Party Services for Uptime Testing****

- [updown.io](https://updown.io/)
- [Grafana synthetic Monitoring](https://grafana.com/blog/2022/03/10/best-practices-for-alerting-on-synthetic-monitoring-metrics-in-grafana-cloud/?src=ggl-s&mdm=cpc&camp=nb-synthetic-monitoring-pm&cnt=130224525351&trm=grafana%20synthetic%20monitoring&device=c&gclid=CjwKCAjwzJmlBhBBEiwAEJyLu4A0quHdic_UAyYuJgqUntwGTq6DKIFq0rfPkp9fxt4lK8VMgYmo4BoCO3EQAvD_BwE)

## **Key metrics to watch to verify node health based on jobs**

**node_exporter:**

**CPU Usage**: High or spiking CPU usage can be a sign of a process demanding more resources than it should.

**Memory Usage**: If a node is consistently running out of memory, it could be due to a memory leak or simply under-provisioning.

**Disk I/O**: Slow disk operations can cause applications to hang or delay responses. High disk I/O can indicate storage performance issues or a sign of high load on the system.

**Network Usage**: High network traffic or packet loss can signal network configuration issues, or that a service is being overwhelmed by requests.

**Disk Space**: Running out of disk space can lead to application errors and data loss.

**Uptime**: The amount of time a system has been up without any restarts. Frequent restarts can indicate instability in the system.

**Error Rates**: The number of errors encountered by your application. This could be 4xx/5xx HTTP errors, exceptions, or any other kind of error your application may log.

**Latency**: The delay before a transfer of data begins following an instruction for its transfer.

It is also important to check:

- NTP clock skew
- Process restarts and failures (eg. through `node_systemd`)
- alert on high error and panic log counts.