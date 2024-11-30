---
sidebar_position: 6
description: Use advanced docker-compose features to have more flexibility and power to change the default configuration.
---

# Advanced Docker Configs

:::info
This section is intended for *docker power users*, i.e.: for those who are familiar with working with `docker compose` and want to have more flexibility and power to change the default configuration.
:::

We use the "Multiple Compose File" feature which provides a very powerful way to override any configuration in `docker-compose.yml` without needing to modify git-checked-in files since that results in conflicts when upgrading this repo.
See [this](https://docs.docker.com/compose/extends/#multiple-compose-files) for more details.

There are some additional compose files in [this repository](https://github.com/ObolNetwork/charon-distributed-validator-node/), `compose-debug.yml` and `docker-compose.override.yml.sample`, along-with the default `docker-compose.yml` file that you can use for this purpose.

- `compose-debug.yml` contains some additional containers that developers can use for debugging, like `jaeger`. To achieve this, you can run:

```shell
docker compose -f docker-compose.yml -f compose-debug.yml up
```

- `docker-compose.override.yml.sample` is intended to override the default configuration provided in `docker-compose.yml`. This is useful when, for example, you wish to add port mappings or want to disable a container.

- To use it, just copy the sample file to `docker-compose.override.yml` and customise it to your liking. Please create this file ONLY when you want to tweak something. This is because the default override file is empty and docker errors if you provide an empty compose file.

```shell
cp docker-compose.override.yml.sample docker-compose.override.yml

# Tweak docker-compose.override.yml and then run docker compose up
docker compose up
```

- You can also run all these compose files together. This is desirable when you want to use both the features. For example, you may want to have some debugging containers AND also want to override some defaults. To achieve this, you can run:

```shell
docker compose -f docker-compose.yml -f docker-compose.override.yml -f compose-debug.yml up
```
