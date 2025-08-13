
You have to setup MinIO before Velero, to allow the connection from the latter to the former during the latter's setup.

# Ceph setup

```
echo "<your client key>" > /root/.cephx
mkdir -p /mnt/cephfs/eucaimbackups
mount -t ceph eucaimbackups@.eucaimbackups=/ /mnt/cephfs/eucaimbackups -o mon_addr=<ceph_monitor_IP>,secretfile=/root/.cephx
```

# MinIO

## Setup

1. Create the certificates (the CA cert will be used by velero too to authenticate the minio server)

```
mkdir -p $HOME/.minio/certs
cd $HOME/.minio/certs

# Create CA authority key
openssl genrsa -aes256 -out ca.key 2048

# Create CA cert
openssl req -x509 -new -nodes -key ca.key -sha256 -days 3650 -out ca.crt

# Create the certificate private key
openssl genrsa -out private.key 2048

# Create the signing intent
openssl req -new -key private.key -out server.csr

# Create a v3  extension for the signing intent. The IP/DNS has to be the same as the one set at the "Common Name (e.g. server FQDN or YOUR name)" field when creating the signing intent
cat > v3.ext <<EOF
authorityKeyIdentifier=keyid,issuer
basicConstraints=CA:FALSE
keyUsage = digitalSignature, nonRepudiation, keyEncipherment, dataEncipherment
subjectAltName = @alt_names

[alt_names]
IP.1 = <minio_host_IP>      # If you access MinIO via localhost IP
DNS.1 = velero     # If you access MinIO via localhost hostname
EOF

# Create and sign your certicate
openssl x509 -req -in server.csr -CA ca.crt -CAkey ca.key -CAcreateserial -out public.crt -days 365 -sha256 -extfile v3.ext

```

2. Start the container

```
  export MINIO_ROOT_USER="admin"
  export MINIO_ROOT_PASSWORD="this_is_for_test_only"
  docker run -d --restart unless-stopped --name minio-velero -v /home/asalic/tmp/minio-velero:/data -v $HOME/.minio/certs:/minio-certs -p 9000:9000 -p 9001:9001 -e "MINIO_ROOT_USER=$MINIO_ROOT_USER" -e "MINIO_ROOT_PASSWORD=$MINIO_ROOT_PASSWORD" -e MINIO_ADDRESS=':9000' -e MINIO_CONSOLE_ADDRESS=':9001' quay.io/minio/minio:RELEASE.2024-12-13T22-19-12Z minio server /data --certs-dir /minio-certs --console-address ":9001"
```

3. Setup the user and the attached service account

- use the "--insecure" flag imediately after the mc command if you plan to connect to a HTTPS deplyment using a self signed certificate 

- exec  into your docker container

```
docker exec -it minio-velero bash
```

- export the relevant env variables

```
  export VELERO_USER=velero
  export VELERO_USER_PASSWORD=velero_user_password
  export VELERO_SERVICE_ACC=myuserserviceaccount
  export VELERO_SERVICE_ACC_PASSWORD="myuserserviceaccountpassword"
  export VELERO_MINIO_ALIAS=velero-minio
  export VELERO_MINIO_BUCKET=velero-eucaim-prod

```

- Add a new alias for localhost with the alias $VELERO_MINIO_ALIAS pointing to localhost and the relevant port and the root user name and its password that you set during the container creation (change them for your own deployment); The configuration information is stored in a JSON file that is at ~/.mc/config.json

```
  mc alias set $VELERO_MINIO_ALIAS https://<minio_host_IP>:<minio_port>/ $MINIO_ROOT_USER "$MINIO_ROOT_PASSWORD"  --insecure
```

- List the aliases

```
   mc alias list
```

- Create a new user that is not root

```
   mc admin user add $VELERO_MINIO_ALIAS "$VELERO_USER" "$VELERO_USER_PASSWORD" --insecure
```

- List the users

```
   mc admin user ls $VELERO_MINIO_ALIAS
```

- Create a service account and password that will be used by the Velero server (this will  be attached to the user we created earlier)

```
   mc admin user svcacct add  --access-key "$VELERO_SERVICE_ACC" --secret-key "$VELERO_SERVICE_ACC_PASSWORD" $VELERO_MINIO_ALIAS $VELERO_USER

```

- List the existing service accounts and their secret keys

```
   mc admin user svcacct ls $VELERO_MINIO_ALIAS $VELERO_USER
```

- Create a bucket for velero

```
   mc mb "$VELERO_MINIO_ALIAS/$VELERO_MINIO_BUCKET"
```

- List buckets

```
   mc ls --recursive --versions $VELERO_MINIO_ALIAS
```

- Check the size of the bucket

```
   mc du  $VELERO_MINIO_ALIAS/$VELERO_MINIO_BUCKET --insecure
```

4. Docker rootless

If you launched the container with Docker installed and running in rootless mode, make sure you enabled containers execution after logout (otherwise when you terminate the session, the containers are also stopped).
To allow the continued Docker container execution execute the following:
```
   systemctl --user enable docker
   sudo loginctl enable-linger $(whoami)
```


# Run velero server as Docker container

more details about standalone installation at [https://velero.io/docs/v1.14/run-locally/](https://velero.io/docs/v1.14/run-locally/).

# Install velero on Kubernetes

This step is required in order to create all the necessary objects needed by Velero.

Let's declare some variablesthat are to be used in the following sub-chapters.

```
   export VELERO_NM=velero
```

When modifying the default velero namespace name, be sure to use the new name in the rest of the files needed for the installation.

## Install via Helm chart

This repository contains a `velero_chart_values.yaml` file with the relevant options.

Before anything you should replace the following fields in the values yaml:

- __configuration -> backupStorageLocation -> caCert__ with the base64 encoded certificate generated for your minio deploymment (see Minio chapter in this README)
- __configuration -> backupStorageLocation -> config ->s3Url__ with the url (includes the port if not standard 443) where minio is listening for connections e.g. https://192.168.0.1:9000/
- __configuration -> backupStorageLocation -> config ->publicUrl__ with the url (includes the port if not standard 443) where minio is listening for connections e.g. https://192.168.0.1:9000/
- __credentials -> secretContents -> cloud__ with the __aws_access_key_id__ (the $MINIO_ROOT_USER defined in the Minio chapter) and __aws_secret_access_key__ (the $MINIO_ROOT_PASSWORD defined in the Minio chapter)


Next, before applying the values, we have to create the namespace:

```
  kubectl create namespace $VELERO_NM
```

Finally, we can install velero.

```
   helm repo add velero https://vmware-tanzu.github.io/helm-charts
   helm repo update
   helm search repo -l velero
   helm install velero velero/velero --namespace $VELERO_NM -f velero_chart_values.yaml --version 10.0.10
   helm upgrade velero velero/velero --namespace $VELERO_NM -f velero_chart_values.yaml --version 10.0.10
   helm uninstall velero --namespace $VELERO_NM 
   helm uninstall velero --namespace $VELERO_NM
```

## Scale down

Once the installation is complete, the default deployment must be scaled down to 0 to avoid interfering with the external velero.

```kubectl scale --replicas=0 deployment velero -n $VELERO_NM```

## Get velero

In order to interact with velero (which we installed in k8s in this chapter), you need to download the binary (for your OS from where you are going to connect to the k8s cluster) available at:

[https://github.com/vmware-tanzu/velero/releases](https://github.com/vmware-tanzu/velero/releases)

## Velero service account

We can create a service account in the velero namespace that will allow us to control velero without needing admin access to the whole cluster.
All the necessary definitions of the k8s resources are in the __velero-client-sa.yaml__.
Apply the file using:

```
   kubectl apply -f velero-client-sa.yaml
```

The service account can be used via a k8s config like the one exemplified in __velero-sa-k8s-config.yaml__, don't forget to replace the marked values with those applying to your cluster.

Examples:

```
   # Get all pods in the velero namespace via kubectl
   kubectl  --kubeconfig ~/.kube/config  --context velero-client-context get pods -n velero

   # Get all backups with velero
   velero --kubeconfig ~/.kube/config --kubecontext velero-client-context backup get

   # Describe backup
   velero --kubeconfig ~/.kube/config --kubecontext velero-client-context backup describe --details <backup_name> --cacert <path_to_minio_ca.crt>
```

# Backups and restores

If you want to control velero directly from your machine, you need its binary, available on Github [https://github.com/vmware-tanzu/velero/releases](https://github.com/vmware-tanzu/velero/releases). 

To create a backup:
```velero backup create <name_of_backup>```

To delete a backup:
```velero backup delete <name_of_backup>```

To list all backups: 
```velero backup get```

To see a backup's logs: 
```velero backup logs <name_of_backup> --cacert <your_CA_cert>```

To see details about the backup:
```velero backup describe --details <name_of_backup> --cacert <your_CA_cert>```

To restore a backup:
```velero restore create <name_of_restore> --from-backup <name_of_backup>```

To list all restores that are available: 
```velero restore get```

## Remove backup jobs on kube

Sometimes the backup jobs have an error and remain stuck, and using the command __velero backup delete <name_of_backup_job>__ doesn't work. 
For this case, we can remove them directly from kube using (remember, this removes the k8s objects, not the data stored on Minio):

```kubectl delete backups.velero.io -n $VELERO_NM <backup_job_name>```

# Run Velero standalone

```
   export REPO_PATH="$HOME/tmp/velero" && docker run -d --name velero-server -v $REPO_PATH/plugin:/plugin -v $REPO_PATH/kube_conf:/kube_conf -v $REPO_PATH/client.crt:/client.crt -v $REPO_PATH/client.key:/client.key -v $REPO_PATH/ca.crt:/ca.crt -it velero/velero:latest /velero server --kubeconfig /kube_conf --plugin-dir /plugin
```
## Get plugins

We need to extract the AWS velero plugin from the velero/velero-plugin-for-aws Docker image.

```
  docker pull velero/velero-plugin-for-aws:latest
  mkdir /tmp/plugin
  chmod 0777 /tmp/plugin
  docker run -v /tmp/plugin:/target velero/velero-plugin-for-aws:latest
```