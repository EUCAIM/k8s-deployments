# EUCAIM Hyperontology Service

This repository contains the Kubernetes manifests for deploying the EUCAIM Hyperontology service.

## Overview

The Hyperontology service is a static web server hosting ontology files for the EUCAIM project. It's deployed on Kubernetes using NGINX as the web server.

**Service URL:** https://hyperontology.eucaim.cancerimage.eu

## Architecture

- **Web Server:** NGINX serving static content
- **Storage:** NFS-backed persistent volume 
- **TLS:** Automated certificate management via cert-manager (Let's Encrypt)

### Prerequisites

- Kubernetes cluster (v1.29+)
- `kubectl` configured with cluster access
- cert-manager installed with `letsencrypt-prod` ClusterIssuer
- NGINX Ingress Controller
- NFS server accessible at `kubeserver.localdomain`

### Deploy

1. **Create namespace:**
   ```bash
   kubectl create namespace ontology
   ```

2. **Apply manifests in order:**
   ```bash
   kubectl apply -f pv-onto.yaml
   kubectl apply -f claim-onto.yaml
   kubectl apply -f deploy-onto.yaml
   kubectl apply -f dummy.yaml  # Required for redirect
   kubectl apply -f ingress-onto.yaml
   kubectl apply -f ing-redirect.yaml
   ```


## Managing Content

Ontology files are stored in the NFS volume at the volume mounted on the NFS server.

