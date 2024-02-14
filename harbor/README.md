# Configuration of the helm charts:

Documentation of the Helm chart: 
https://github.com/goharbor/harbor-helm/tree/1.6.0  
https://artifacthub.io/packages/helm/harbor/harbor/1.6.0

## __values-persistence.yaml:__

- Line 36: ``enabled``: _true_. Enable persistence.
- Lines 39,42,45,48,51,54: ``existingClaim``: _harbor-harbor-pvc_. The name of the PVC defined in __pvc-harbor.yaml__.
- Line 58: ``harborAdminPassword``: _XXXXXXXXXX_.
- Line 78: ``username``: _admin_. Name of the user for Photon container registry.
- Line 79: ``password``: _XXXXXXXXXX_. Name of the user for Photon container registry.
- Line 80: ``htpasswd``: _admin:XXXXXXXXXXX_. You can generate it using:
```console 
htpasswd -nbBC10 $username $password
```
- Line 96: ``password``: _XXXXXXXXXX_.

# Deployment

First, you must create the namespace for the deployment of Harbor:
```console
kubectl apply -f harbor-namespace.yaml
```
Then, it is required to create the persistent volume claim (PVC) where all Harbor components will store their data.  
(This step only is required if persistence is enabled, which is our case.)
```console
kubectl apply -f pvc-harbor.yaml
```
Now make a private copy of the values file and change it for your preferences.
```console
cp values.yaml values.private.yaml
```

If you set `expose.type: nodePort`, and `expose.tls.certSource: secret`, then you must ensure the certificate in that secret is renewed when expires.
In our case the certificate for the domain is renewed automatically in another namespace: `kubernetes-dashboard`, 
so we have to copy every time the secret from there to this namespace `harbor`, and we can achieve that with a cronjob:
```console
kubectl apply -f copy-cert-secret-cronjob.yaml
```

Now you can deploy Harbor:
```console
helm repo add harbor https://helm.goharbor.io
helm repo update harbor
helm install harbor --namespace harbor  -f values.private.yaml harbor/harbor --version 1.10.1

# using oci still not works
#helm install --namespace harbor -f values.private.yaml harbor oci://helm.goharbor.io/harbor/harbor --version 1.10.1

# alternative: clone github repo
#git clone -b 1.6.0 https://github.com/chaimeleon-eu/helm-chart-harbor.git
#helm install harbor --namespace harbor  -f values.private.yaml ./helm-chart-harbor
```

As soon as all components are running, Harbor portal should be available at https://eucaim.cancerimage.eu:10433.

Finally we must ensure the nginx pod will be regenerated when the certificate expires in order to reload the new certificate from the secret.
So we can change the nginx deployment...
```console
kubectl edit deployment harbor-nginx -n harbor
```
and change the livenessProbe of the container to use the `curl` command instead of the `httpget` method (which does not check the certificate).
It should be like this:
```
          livenessProbe:
            exec:
              command:
                - curl
                - https://eucaim.cancerimage.eu:10443/
            initialDelaySeconds: 300
            timeoutSeconds: 1
            periodSeconds: 10
            successThreshold: 1
            failureThreshold: 3
```
