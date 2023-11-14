## EUCAIM architechture
**Lens and Spot Deployment:** Lens and Spot are deployed in the same environment and share the same ingress.\
**Spot as a Backend for Lens:** Spot functions as a backend service for Lens.\
**Connection to the Broker through the Beam Proxy:** Both Lens and Spot connect to the Broker through the Beam Proxy. The Beam Proxy acts as an intermediary for requests from clients seeking resources from the Broker.\
**Broker’s Connection to the Vault Server:** The Broker, in turn, connects to the Vault Server. Vault is a tool for securely accessing secrets such as API keys, passwords, or certificates.

This architecture allows for efficient data flow and secure access to necessary resources.

<img width="959" alt="image" src="https://github.com/EUCAIM/k8s-deployments/assets/100042312/31359057-ea7d-47ef-ae5c-576086edd93f">



