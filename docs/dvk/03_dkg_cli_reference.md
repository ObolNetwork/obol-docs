---
Description: >-
  A rust-based CLI client for hosting and participating in Distributed Validator key generation ceremonies.
---

# DKG CLI reference


:::warning

The `dkg-poc` client is a prototype implementation for generating Distributed Validator Keys. Keys generated with this tool will not work with Charon, and they are not suitable for use. Creating keys for a Distributed Validator should use the [`charon create dkg` command](../dv/09_charon_cli_reference.md#creating-the-configuration-for-a-dkg-ceremony).

:::

The following is a reference for `dkg-poc` at commit [`6181fea`](https://github.com/ObolNetwork/dkg-poc/commit/6181feaab2f60bdaaec954f11c04ef49c0b3366a). Find the latest release on our [Github](https://github.com/ObolNetwork/dkg-poc).

`dkg-poc` is implemented as a rust-based webserver for performing a distributed key generation ceremony. This deployment model ended up raising many user experience and security concerns, for example it is both hard and likely insecure to setup a TLS protected webserver at home if you are not a specialist in this area. Further, the PoC is based on an [Aggregatable DKG](https://github.com/kobigurk/aggregatable-dkg) library which is built on sharing a group element rather than a field element, which makes the threshold signing scheme more complex as a result. These factors resulted in a deprecation of this approach, with many valuable insights gained from this client. Currently a DV launchpad and charon based DKG flow serves as the intended [DKG architecture](https://github.com/ObolNetwork/charon/blob/main/docs/dkg.md) for creating Distributed Validator Clusters. 

```
$ dkg-poc --help 

dkg-poc 0.1.0
A Distributed Validator Key Generation client for the Obol Network.

USAGE:
    dkg-poc <SUBCOMMAND>

FLAGS:
    -h, --help       Prints help information
    -V, --version    Prints version information

SUBCOMMANDS:
    help           Prints this message or the help of the given subcommand(s)
    lead           Lead a new DKG ceremony
    participate    Participate in a DKG ceremony

```

```
$ dkg-poc lead --help

dkg-poc-lead 0.1.0
Lead a new DKG ceremony

USAGE:
    dkg-poc lead [OPTIONS] --num-participants <num-participants> --threshold <threshold>

FLAGS:
    -h, --help       Prints help information
    -V, --version    Prints version information

OPTIONS:
    -a, --address <addr>
            The address to bind this client to, to participate in the DKG ceremony (Default: 127.0.0.1:8081)

    -e, --enr <enr>
            Provide existing charon ENR for this participant instead of generating a new private key to import

    -n, --num-participants <num-participants>    The number of participants taking part in the DKG ceremony
    -p, --password <password>
            Password to join the ceremony (Default is to randomly generate a password)

    -t, --threshold <threshold>
            Sets the threshold at which point a group of shareholders can create valid signatures

```

```
$ dkg-poc participate --help

dkg-poc-participate 0.1.0
Participate in a DKG ceremony

USAGE:
    dkg-poc participate [OPTIONS] --leader-address <leader-addr>

FLAGS:
    -h, --help       Prints help information
    -V, --version    Prints version information

OPTIONS:
    -a, --address <addr>                  The address to bind this client to, to participate in the DKG ceremony
                                          (Default: 127.0.0.1:8081)
    -e, --enr <enr>                       Provide existing charon ENR for this participant instead of generating a new
                                          private key to import
    -l, --leader-address <leader-addr>    The address of the webserver leading the DKG ceremony
    -p, --password <password>             Password to join the ceremony (Default is to randomly generate a password)
```
