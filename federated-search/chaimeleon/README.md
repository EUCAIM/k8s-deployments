
# Deploymets of Federated Search at CHAIMELEON side

Schema of connections: 
```
    Central side (EUCAIM)         |        CHAIMELEON side
        beam-broker               
broker.eucaim.cancerimage.eu
            443                 <---   beam-proxy                       responder
                                          8081      <--   focus   -->    1337
```

## Certificate generation

First of all we have to create the certificate for the communication with the broker at central site (EUCAIM).
```console
bash cert/generate-certificate.sh
```
This will generate two files: `chaimeleon.priv.pem` (private key) and `chaimeleon.csr` (public key).  
You must 
 - copy the contents of chaimeleon.priv.pem to the secret `0-secret-proxy-pem.private.yaml` (which will be used by the beam-proxy),
 - and send the chaimeleon.csr (public key) to the admin of the central broker in order to be recongnized as a proxy.

The admin of broker will have to [sign and store the certificate in the vault](https://github.com/EUCAIM/k8s-deployments/tree/main/federated-search#sign-and-store-third-party-repo-certificate).

## Deployment of services

Initially we will create a namespace which will contain this deployment:
```console
kubectl create namespace eucaim-fed-search
```

Make a private copy of the secrets 
and change the `XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX` pattern with your own content.
```console
cp k8s/0-secret-app1-key.yaml k8s/0-secret-app1-key.private.yaml
cp k8s/0-secret-proxy-pem.yaml k8s/0-secret-proxy-pem.private.yaml
```

 - `0-secret-app1-key.private.yaml` is the secret token for the app (focus) to communicate with the beam-proxy, just generate one randomly.
 - `0-secret-proxy-pem.private.yaml` is the private key generated previously for the beam-proxy to communicate with the beam-broker.
 - `0-secret-root-crt-pem.yaml` is the public key of the beam-broker at central side, it is provided by the them.

Now apply the secrets:
```console
kubectl apply -f k8s/0-secret-app1-key.private.yaml
kubectl apply -f k8s/0-secret-proxy-pem.private.yaml
kubectl apply -f k8s/0-secret-root-crt-pem.yaml
```

And finally you are able to deploy the services in order:
```console
kubectl apply -f k8s/1-beam-proxy.yaml
kubectl apply -f k8s/2-focus.yaml
kubectl apply -f k8s/3-responder.yaml
```
