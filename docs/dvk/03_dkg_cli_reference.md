---
Description: >-
  A rust-based CLI client for hosting and participating in Distributed Validator key generation ceremonies.
---

# DKG CLI Reference


:::caution

The `dkg-poc` client is under heavy development, interfaces are subject to change until a first major version is published. 

:::

The following is a reference for `dkg-poc` at commit [`fe0dc49`](https://github.com/ObolNetwork/dkg-poc/commit/fe0dc49501a759a50191611f04c8178900999e5c). Find the latest release on [our github](https://github.com/ObolNetwork/dkg-poc/releases).

```
$ dkg-poc --help 

dkg-poc 0.1.0
A PoC of the Obol DKG client

USAGE:
    dkg-poc <bind-addr> <SUBCOMMAND>

FLAGS:
    -h, --help       Prints help information
    -V, --version    Prints version information

ARGS:
    <bind-addr>    The address to bind our webserver to

SUBCOMMANDS:
    help           Prints this message or the help of the given subcommand(s)
    lead           
    participate    

```

```
$ dkg-poc lead --help

dkg-poc-lead 0.1.0

USAGE:
    dkg-poc <bind-addr> lead --participants <n-participants> --threshold <threshold>

FLAGS:
    -h, --help       Prints help information
    -V, --version    Prints version information

OPTIONS:
    -p, --participants <n-participants>    Indicates how many users the leader will wait for to connect
    -t, --threshold <threshold>            Sets the threshold at which point a group of shareholders can create valid signatures

```

```
$ dkg-poc participate --help

dkg-poc-participate 0.1.0

USAGE:
    dkg-poc <bind-addr> participate --address <address>

FLAGS:
    -h, --help       Prints help information
    -V, --version    Prints version information

OPTIONS:
    -a, --address <address>    Indicates which address should be contacted to participate in a DKG ceremony
```