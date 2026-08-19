---
sidebar_label: "Run a DV on a DappNode"
slug: /run-a-dv/integrations/dappnode
---

# DappNode

For setup, see quickstart guide:<a id="for-setup-see-quickstart-guide"></a>

For set-up of a DV using DappNode, see the quickstart guide [Create a DV Alone](../start/create-a-dv-alone.mdx), and select the appropriate tab for "DappNode".

### Frequently asked questions<a id="frequently-asked-questions"></a> {#frequently-asked-questions}
#### If an operator uses an ENR to join a cluster, then exits the validator key, do they need to clean up the validator and Charon volumes to use the same ENR for another cluster?<a id="if-an-operator-uses-an-enr-to-join-a-cluster-then-exits-the-validator-key-do-they-need-to-clean-up-the-validator-and-charon-volumes-to-use-the-same-enr-for-another-cluster"></a> {#if-an-operator-uses-an-enr-to-join-a-cluster-then-exits-the-validator-key-do-they-need-to-clean-up-t}
Yes, they need to clean up the Charon and validator volumes. However, instead of deleting everything, the operator can:

1. Download a backup (keep a copy just in case).
2. Edit the backup, keeping only the necessary files from the specific cluster (see image below)

![](/img/gitbook/image.png)

3. Recompress the edited backup and upload it again after removing the Charon and validator volumes.

#### Does an operator need to use the `VALIDATOR_EXTRA_OPTS` to pass the `builderonly` or `builderalways` flag for Lodestar VC?<a id="does-an-operator-need-to-use-the-validator_extra_opts-to-pass-the-builderonly-or-builderalways-flag-for-lodestar-vc"></a> {#does-an-operator-need-to-use-the-validator_extra_opts-to-pass-the-builderonly-or-builderalways-flag}
No, if `ENABLE_MEV_BOOST` is set to `true`, these flags will be added automatically.\\

![](/img/gitbook/image-90.png)

#### How can users running two clusters (e.g., one for EtherFi solo stakers and another for Techne) on the same Dappnode machine push monitoring data from both clusters to Obol?<a id="how-can-users-running-two-clusters-eg-one-for-etherfi-solo-stakers-and-another-for-techne-on-the-same-dappnode-machine-push-monitoring-data-from-both-clusters-to-obol"></a> {#how-can-users-running-two-clusters-eg-one-for-etherfi-solo-stakers-and-another-for-techne-on-the-sam}
In the Config tab, there is a field called "Charons to monitor by Obol (optional)". You just need to enter the cluster numbers you are using in Dappnode. For example, if you’re running three nodes on clusters 1, 2, and 3, you would enter “1,2,3”.
