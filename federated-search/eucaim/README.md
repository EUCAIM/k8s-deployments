## EUCAIM architechture
**Lens as the frontend server:** Lens is just an nginx service which sends the webUI to the client (browser).\
**Spot as a Backend for Lens:** Spot functions as a backend service for Lens.\
**OAuth2-proxy:** Both Lens and Spot authenticates the user through an instance OAuth2-proxy in order to contact to the OIDC service (LifeScience-AAI) of  there is a instance of that tool just for control the access to 
**Connection to the Broker through the Beam Proxy:** Spot connects to the Broker through the Beam Proxy. The Beam Proxy acts as an intermediary for requests from clients seeking resources from the Broker. See the [Samply.Beam](https://github.com/samply/beam) project for more details.\
**Beam Broker:** is the central communication component responsible for facilitating connections between proxies, storing and forwarding tasks and messages.
**Vault server:** The Broker uses a Vault service as a Certificate Authority (CA) for managing all certificates required for signing and encrypting the payload of messages. See the [Vault](https://github.com/hashicorp/vault) project for more details.


This architecture allows for efficient data flow and secure access to necessary resources.

<img width="959" alt="image" src="https://github.com/EUCAIM/k8s-deployments/assets/100042312/31359057-ea7d-47ef-ae5c-576086edd93f">


## Deployment
First of all, you must create the namespace for the deployments:
```console
kubectl create namespace federated-search
```

### Vault, beam-broker and beam-proxy
https://github.com/samply/beam-deploy/blob/master/docker-compose.yml

### Spot and lens
```
kubectl apply -f spot.yml -n federated-search
kubectl apply -f lens.yml -n federated-search
```

### OAuth2-proxy
Make a private copy of the secrets file and set your client secret and cookie secret in your private copy.
```console
cp oauth2-proxy-secrets.yml oauth2-proxy-secrets.private.yml
```
 - The client secret is provided by your OIDC service admin.
 - And for the cookie secret you can just generate one with: 
   `python -c 'import secrets,base64; print(base64.b64encode(base64.b64encode(secrets.token_bytes(16))));'`
   
Then apply to create the secret:
```
kubectl apply -f oauth2-proxy-secrets.private.yml -n federated-search
```

Deploy the oauth2-proxy instance:
```
kubectl apply -f oauth2-proxy.yml -n federated-search
```
