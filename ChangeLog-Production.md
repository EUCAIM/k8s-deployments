<img width="705" alt="image" src="https://github.com/EUCAIM/k8s-deployments/blob/261c99d76127db5b19339dcd75409565bf520fe5/EUCAIM-updated.png">

# Change Log of the EUCAIM Platform Production Version

This document describes the functionality of the EUCAIM Platform, accessible in [https://dashboard.eucaim.cancerimage.eu/](https://dashboard.eucaim.cancerimage.eu/). The current functtionality includes:
- Dashboard with profile information, links to the catalogue and a basic helpdesk for anonymous users and all the applications. Once authenticated, the users can access the explorer and the negotiator.
- Catalogue, with 64 datasets with a total of 45573 subjects, well connected to the explorer and the negotiator.
- Federated Search, with 27 searchable items and covering 60% of the datasets (4 providers), including AND/OR clauses.
- Negotiator implements the whole access workflow and all datasets are registered in the database.
- Helpdesk, with anonymous and authenticated access for managing the user's support.
- Federated processing: Not yet avaiable.
- Reference Nodes: Two reference nodes with data ingestion capacity and processing capacity (UPV) through Secure Processing Environments with 15 GPUs, over 400 cores and 3 TB RAM.

## MM2 Prototype (September 2023)
These are the features available in the production version
## MM3 Pre-production prototype (June 2024)
These are the features available in the production version

## First Release (January 2024)
### January Release
These are the features available in the production version
- Catalogue 
- Explorer (Federated Search):
  - Advanced functionality in Lens to allow "OR" clauses.
  - 27 items included as searching criteria.
- Negotiator:
  - Full negotiation cycle implemented in the UI.
- Reference Nodes:
  - UPV Reference Node:
    - QP Insigths deployed.
    - Data ingestion services available.
- Helpdesk: Operative.
- Federated Processing: Not yet integrated in the platform.

### March Release
These are the features added to the previous release
- Catalogue 
  - New datasets from PRIMAGE and CHAIMELEON registered.
- Explorer (Federated Search)
  - Two new providers: INCISIVE and EUCAIM UPV Reference Node
- Reference Nodes
  - UPV Reference Node:
    - SPE in production.
    - Mount point bug solved.
    - Sample notebook corrected (additional comparisons in case of Null DICOM Tags added)
    - Batch execution operational and managing 15 GPUs, 400 cores and over 3 TB of RAM.
