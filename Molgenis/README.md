# EUCAIM Kubernetes deployment

 

YAML files for the deployment of EUCAIM's Molgenis in Kubernetes. These deployment files are customised to UPV's deployment. In this version, we have improved service access by implementing Ingresses instead of NodePorts for reducing the dependencies on port limitations of sites.

 

## Topology of the deployment

 

All the services are deployed under a specific namespace (not hard-coded in the files). The deployment considers 8 Deployments:
- frontend
- molgenis
- postgres
- minio
- opencppu
- kibana
- kibana-dashboard
- elasticsearch

 

5 of these Deployments (molgenis, postgres, minio, elasticsearch and kibana-dashboard) require one or several persistent volumes. These persistent volumes are implemented through NFS volumes that are exposed on a server in the same private network (in UPV's deployment, this server is the front-end of the K8s cluster). The volumes are accessed through Persistent Volume Claims. The frontend deployment mounts a config file (`/etc/nginx/proxy.d/backend.conf`) through a ConfigMap file. 
<br>
<br>

<img width="705" alt="image" src="https://github.com/EUCAIM/k8s-deployments/assets/100042312/5e91761c-84a6-46e6-a49d-cfb868cfefa9">
<br>
<br>

<img width="713" alt="image" src="https://github.com/EUCAIM/k8s-deployments/assets/100042312/15e9be35-af9a-4962-87e7-679276ca3747">

 <br>

We have improved the accessibility of our pods by implementing Ingress routes, which offer several benefits, including simplified configuration and better handling of redirects.

## Previous Configuration

First of all, if you want to deploy the NFS Persistent Volumes, you may need to add the IP address of your NFS server in the files `deployment-nfsvols-template.yaml` and `nginx-vol-template.yaml`.

**Ingress Configuration**

 

We have configured an Ingress resource named `cancerimage-ingress` to handle incoming traffic to our application on the host `catalogue.eucaim.cancerimage.eu`.
For incoming HTTP traffic to the host `catalogue.eucaim.cancerimage.eu`, the Ingress resource directs it to the `frontend` service on port `80`. Requests are routed based on the prefix path `/`.

 

The rest of the port listen at private addresses:
- es:9200 (app=elasticsearch)
- kibana:5601 (app=kibana)
- minio:9000 (app=minio)
- opencpu:8004 (app=opencpu)
- postgres:5432 (app=postgres)
- molgenis:8080 (app=molgenis)

 

## Deployment process
Deployment is a bit tricky, as Molgenis is not intended to work within K8s, as some services do not terminate if they fail, but show an error message instead and get blocked. This implies carefully deploying the objects in order.

 

First step is to deploy the NFS Persistent Volumes using the `deployment-nfsvols-template.yaml` file. **You have to update the NFS server IP in this file before**. Once the NFS PVs have been created, the Persistent Volume Claims can be created using the `deployment-nfspvc.yaml` file. NFS should be installed in advanced, and exposed only through the private IP of the cluster (you can use the `nfs_install.sh`script).

 

```
sudo kubectl create namespace eucaim
sudo kubectl create -f deployment-nfsvols.yaml
sudo kubectl apply -n eucaim -f deployment-nfspvc.yaml
```

 

Before the pods are deployed, it will be convenient to create the appropriate directories and ensure that the permissions are well fixed. Some pods use non-privileged users and fail when writing into the folders. In our case we decided to give full access permission to all users (this does not imply a security issue as it is not exposed outside of the cluster and access to cluster resources is limited to the administrators of the platform.

 

The hierarcy used in the current deployment is:
- `/mnt/nfs_share/molgenis/postgres`
- `/mnt/nfs_share/molgenis/elasticsearch`
- `/mnt/nfs_share/molgenis/kibana`
- `/mnt/nfs_share/molgenis/minio`
- `/mnt/nfs_share/molgenis/molgenis/data`
- `/mnt/nfs_share/molgenis/molgenis/audit`

 

Once the storage is defined, we proceed to deploy the pods and the services. First we will deploy the configmap defined in the `backend.yaml` file (the current value of `proxy_pass` of `http://molgenis` is a consequence of the DNS redirection that will be explained in the follwing section). Here we need the address of the molgenis backend service (e.g. in a NodePort, it could be `http://<Public IP of the frontend>:8080`, but as UPV restricts the access to resources within its network we had to change it by a proxy DNS). Once the configmap is created, the rest of the objects can be deployed using the `deployment-nfs.yaml`file. Finally, we have added the configuration file of nginx as a separate config map to faciltate changing options (e.g. we increased the client max body size to 5Mb). This configuration file is also placed in the `backend.yaml` file.

 

```
sudo kubectl apply -n eucaim -f backend.yaml
sudo kubectl apply -n eucaim -f deployment-nfs.yaml
```

 

Some services take longer to start. Docker images are big and starting time could take longer. Therefore, in case of issues, you could delete frontend and molgenis pods and restart them again (These are the ones that typically get stalled). You should check that all the services are responding by pinging the service URIs (using curl and the pair cluster IP : cluster Port).

 

## DNS redirections needed

 

Instead of directly exposing ports 30010 and 8080 for the frontend and Molgenis services, respectively, we've opted for a more secure and flexible approach. We now utilize Ingress resources to manage and route incoming traffic to the appropriate services within our Kubernetes cluster.

 

Apart from this changes, we've updated our DNS redirections, `eucaim.ramses.i3m.upv.es` has been replaced by Ingress routing to `catalogue.eucaim.cancerimage.eu`
