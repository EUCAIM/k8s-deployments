# Manifests for the Molgenis EMX2 deployment

The deployment of the EMX2 version requires the following components:
- The catalogue front-end
- The catalogue backend
- A postgress database

The three components are manged through individual deployments with a specific service each of them. A Persistent Volume Claim is used to persist the database file and an ingress controller is used to expose the front end service.
