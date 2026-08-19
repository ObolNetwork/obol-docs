# Enable TLS Protocol

## Securing VC to Charon communication

To secure the communication between the Validator Client and Charon, you can enable the TLS protocol in Charon's HTTP server. This only affects [Beacon API](https://ethereum.github.io/beacon-APIs/) endpoints and not debug/metrics endpoints. As an operator of the node, you need to have a TLS certificate and a private key that signed this certificate or CSR. Then you need to configure Charon to use them.

## Usage example

Suppose we don't have a TLS certificate and a key yet. We can create a self-signed certificate and a key using OpenSSL:

```
openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -days 365 -nodes
```

Then you could pass the flags to your Charon instance like this:

```
charon run --vc-tls-cert-file cert.pem --vc-tls-key-file key.pem
```

Charon accepts a certificate in PEM or CRT formats and the private key in PEM or DER formats.

Also you can specify these parameters as environment variables like this:

```
CHARON_VC_TLS_CERT_FILE="cert.pem"
CHARON_VC_TLS_KEY_FILE="key.pem"
```

On the Validator Client (VC) side, no additional configuration is typically required. The VC will automatically use the TLS protocol when communicating with Charon. However, if the TLS certificate is signed by a custom or non-standard certificate authority (CA), you may need to configure the VC to trust this CA. This can usually be achieved by adding the CA's certificate to the trusted certificate store on the machine running the VC.

If necessary, you can also enable `insecure` mode in the VC configuration to bypass TLS verification. Note that this approach is not recommended for production environments as it compromises security. Detailed instructions for configuring specific Validator Clients are beyond the scope of this article.
