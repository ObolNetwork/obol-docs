# Client Configuration

Many execution, consensus, and validator clients need custom flags or parameters to work best with Distributed Validators. These settings are often dispersed across a number of documentation pages or example repos. This page aims to be a reference for each client and the specific additions they may require.

## Nethermind

Nethermind should be configured to not include blobs in locally-built blocks while using MEV relays. In the case where MEV relays fail to provide blocks to propose and the node falls back to building locally, significant time will have passed and there is a risk of missing the block proposal window should block building be further delayed with blob processing. For this reason, blob inclusion should be disabled:
```shell
--Blocks.BlockProductionBlobLimit 0
```

## Lighthouse

### Consensus Client

Nothing specific for distributed validators is required. If you are configuring MEV-boost, consult the settings you need [here](../advanced/enable-mev.mdx#consensus-clients).

### Validator Client

Required flags:

```shell
--distributed
```

## Lodestar

### Consensus Client

Nothing specific for distributed validators is required. If you are configuring MEV-boost, consult the settings you need [here](../advanced/enable-mev.mdx#consensus-clients).

### Validator Client

Required flags:

```shell
--distributed
```

## Nimbus

### Validator Client

Required flags:

```shell
--distributed
```

## Prysm

### Consensus Client

Nothing specific for distributed validators is required. If you are configuring MEV-boost, consult the settings you need [here](../advanced/enable-mev.mdx#consensus-clients).

### Validator Client

Required flags:

```shell
--distributed
```

## Teku

### Consensus Client

Required flags:

```shell
--validators-graffiti-client-append-format=DISABLED
```

### Validator Client

Required flags:

```shell
--Xobol-dvt-integration-enabled
```
