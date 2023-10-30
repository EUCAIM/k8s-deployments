# Deployment of negotiator from BBMRI-ERIC

This code is based on the V2 of the BBMRI-ERIC negotiator available in https://github.com/BBMRI-ERIC/negotiator-deployment/tree/main/K8/v2

The code has been updated to use the specific DNS of the EUCAIM project, as well as NFS volumes as persistent storage.

## Configuration
Prior to deploy the service, the following changes should be applied:
- Update the IP of the NFS server, as well as the folder in which the data will be stored. Change it in the attributes spec.nfs.server and spec.nfs.path in the `negotiator-nfsvol.yaml` file.
- Copy the  `negotiator-deployment-template.yaml` into the `negotiator-deployment.yaml` and update the authentication details:
  - `NEGOTIATOR_URL`, with the URL of the service.
  - `AUTH_HOST`, with the URL for the login service.
  - `AUTH_PUBLIC_KEY`, public key of the login service.
  - `AUTH_CLIENT_ID`, id of the client application.
  - `AUTH_CLIENT_SECRET`, secret of the client application.
- Edit (or remove it and change it to `ClusterIP`) the `nodePort` in `negotiator-service.yaml`
- Update the `negotiator-ingress.yaml` with the correct DNS in the references to the `spec.tls.hosts`, `spec.tls.secretName` and `spec.rules.host`.
- Create a certificate to the service, as described in the other sections of this repository.

<br>

<img width="704" alt="image" src="https://github.com/EUCAIM/k8s-deployments/assets/100042312/34580878-7835-41d7-aac1-a522fe4f310b">


## Deployment

Deploy the components in this order.
1. `negotiator-nfsvol.yaml`
2. `negotiator-db-pvc.yaml`
3. `negotiator-db-deployment.yaml`
4. `negotiator-db-service.yaml`
5. `negotiator-deployment.yaml`
6. `negotiator-service.yaml`
7. `negotiator-ingress.yaml` 
              

    
