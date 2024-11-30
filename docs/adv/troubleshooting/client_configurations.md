---
sidebar_position: 3
description: A reference for extra configuration of Ethereum Clients when running in DVs. 
---

# Client Configuration

Many execution, consensus, and validator clients need custom flags or parameters to work best with Distributed Validators. These settings are often dispersed across a number of documentation pages or example repos. This page aims to be a reference for each client and the specific additions they may require.




## Lighthouse

### Consensus Client

Nothing specific for distributed validators is required. If you are configuring MEV-boost, consult the settings you need [here](../../run/start/quickstart-builder-api.mdx#consensus-clients).

### Validator Client

Required flags:
```shell
--distributed
```

## Lodestar

### Consensus Client

Nothing specific for distributed validators is required. If you are configuring MEV-boost, consult the settings you need [here](../../run/start/quickstart-builder-api.mdx#consensus-clients).

### Validator Client

Required flags:
```shell
--distributed
```

## Nimbus

### Consensus Client

When running a Nimbus Consensus Client you must add the following flag **to `charon run`**:
```shell
--feature-set-enable=json_requests
```

### Validator Client

Required flags:
```shell
--distributed
```

## Prysm

### Consensus Client

Nothing specific for distributed validators is required. If you are configuring MEV-boost, consult the settings you need [here](../../run/start/quickstart-builder-api.mdx#consensus-clients).

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