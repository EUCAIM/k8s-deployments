#!/bin/bash

openssl genrsa --out chaimeleon.priv.pem 2048
openssl req -key chaimeleon.priv.pem -new -subj "/CN=chaimeleon.broker.eucaim.cancerimage.eu/C=ES/L=Valencia" -out chaimeleon.csr

