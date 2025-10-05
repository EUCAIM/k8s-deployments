#!/bin/bash

openssl genrsa --out upv-node.priv.pem 2048
openssl req -key upv-node.priv.pem -new -subj "/CN=upv-node.broker.eucaim.cancerimage.eu/C=ES/L=Valencia" -out upv-node.csr

