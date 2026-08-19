# Custom Graffiti

By default, Charon adds a `charon/<version>-<commitSHA>` graffiti to all block proposals. This can be customized using the `--graffiti` and `--graffiti-disable-client-append` CLI flags.

The `--graffiti` flag accepts either:

* A single string, which will be used by all validators, or
* A comma-separated list of strings, allowing each validator to have a unique graffiti (one string per validator).

When possible, Charon automatically appends an Obol signature (`OB`) and the specific consensus client type used (`<CL_TYPE>`) to the end of the custom graffiti. This behavior can be disabled by setting the `--graffiti-disable-client-append` flag.

:::info
The graffiti field in block proposals has a maximum size of 32 bytes.
:::
