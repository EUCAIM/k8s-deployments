

In order to generate the certificates for each third party repo, you can run (on your side):

```
export REPO_ID=<your repo id, e.g. eucaim, chaimeleon>
openssl genrsa --out $REPO_ID.broker.eucaim.cancerimage.eu.priv.pem
openssl req -key $REPO_ID.broker.eucaim.cancerimage.eu.priv.pem -new -subj "/CN=$REPO_ID.broker.eucaim.cancerimage.eu/C=ES/L=Valencia" -out $REPO_ID.broker.eucaim.cancerimage.eu.csr
```

You can sign a certificate for a third party repo taht you generated previously (`$REPO_ID.broker.eucaim.cancerimage.eu.csr`) with the following request to vault:

```
export REPO_ID=<your repo id, e.g. eucaim, chaimeleon>
export VAULT_ADDR=<the vault address, e.g. http://vault:8200>
export VAULT_TOKEN=<your vault token that allows the operation>
curl -X POST -H "X-Vault-Token: $VAULT_TOKEN" -d "{\"csr\": \"$(cat $REPO_ID.csr | sed ':a;N;$!ba;s/\n/\\n/g')\", \"common_name\": \"$REPO_ID.broker.eucaim.cancerimage.eu\", \"ttl\": \"720h\"} " $VAULT_ADDR/v1/samply_pki/sign/samply-beam-default-role
```