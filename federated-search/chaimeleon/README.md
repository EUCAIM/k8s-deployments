
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

First of all you have to create the certificate for the communication with the broker at central site (EUCAIM).
```console
bash cert/generate-certificate.sh
```
This will generate two files: `chaimeleon.priv.pem` (private key) and `chaimeleon.csr` (public key).  
You must 
 - copy the contents of `chaimeleon.priv.pem` to the key `proxy.pem` in the secret `0-secret-certs.private.yaml` (which will be used by the beam-proxy),
 - and send the `chaimeleon.csr` to the admin of the central broker in order to be our proxy recognized by them.

The admin of broker will have to [sign and store the certificate in the vault](https://github.com/EUCAIM/k8s-deployments/tree/main/federated-search#sign-and-store-third-party-repo-certificate).

## Deployment of services

Initially we will create a namespace which will contain this deployment:
```console
kubectl create namespace eucaim-fed-search
```

Make a private copy of the secrets 
and change the `XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX` pattern with your own content.
```console
cp k8s/0-secret-api-keys.yaml k8s/0-secret-api-keys.private.yaml
cp k8s/0-secret-certs.yaml k8s/0-secret-certs.private.yaml
```

 - In the secret in file `0-secret-api-keys.private.yaml`: 
   - `FOCUS_API_KEY` is the secret token for the app (focus) to communicate with the beam-proxy, just generate one randomly.
   - `DATASET_SERVICE_AUTH_HEADER` is the secret token for the app (focus) to communicate with the dataset-service, it is provided by the admin of that service.
 - In the secret in file `0-secret-certs.private.yaml`: 
   - `proxy.pem` is the private key generated previously for the beam-proxy to communicate with the beam-broker.
   - `root.crt.pem` is the public key of the beam-broker at central side, it is provided by the admin of that beam-broker.

Now apply the secrets:
```console
kubectl apply -f k8s/0-secret-api-keys.private.yaml -n eucaim-fed-search
kubectl apply -f k8s/0-secret-certs.private.yaml -n eucaim-fed-search
```

And finally you are able to deploy the services in order:
```console
kubectl apply -f k8s/1-beam-proxy.yaml -n eucaim-fed-search
kubectl apply -f k8s/2-focus.yaml -n eucaim-fed-search
```

---
\[Optional\] Additionally you can deploy a fake data responder (only for development purposes)
```console
kubectl apply -f k8s/3-responder.yaml -n eucaim-fed-search
```
