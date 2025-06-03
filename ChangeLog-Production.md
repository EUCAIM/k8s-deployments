<img width="705" alt="image" src="https://github.com/EUCAIM/k8s-deployments/blob/261c99d76127db5b19339dcd75409565bf520fe5/EUCAIM-updated.png">

# Change Log of the EUCAIM Platform Production Version

This document describes the functionality of the EUCAIM Platform, accessible in [https://dashboard.eucaim.cancerimage.eu/](https://dashboard.eucaim.cancerimage.eu/). The current functionality includes:
- Dashboard with profile information, links to the catalogue and a basic helpdesk for anonymous users, as the aggregated information of the catalogue (collection summary). Once authenticated, the users can access the explorer and the negotiator and the User's Library, listing the datasets for which a user has access granted, as well as those under negotiation.
- Catalogue, with 64 datasets with a total of 45573 subjects, well connected to the explorer and the negotiator. It uses Molgenis EMX2 version and an RDF FAIR Data Point in [https://catalogue-eucaim.grycap.i3m.upv.es/Eucaim/api/rdf/](https://catalogue-eucaim.grycap.i3m.upv.es/Eucaim/api/rdf/).
- Federated Search, with 27 searchable items and covering 60% of the datasets (4 providers), including AND/OR clauses.
- Negotiator implements the whole access workflow and all datasets are registered in the database.
- Helpdesk, with anonymous and authenticated access for managing the user's support.
- Federated processing: Not yet avaiable.
- Reference Nodes: Two reference nodes with data ingestion capacity and processing capacity (UPV) through Secure Processing Environments with 15 GPUs, over 400 cores and 3 TB RAM.
- Hyperontology deployed in the [https://hyperontology.eucaim.cancerimage.eu](https://hyperontology.eucaim.cancerimage.eu)
- Registry of applications deployed in [https://harbor.eucaim.cancerimage.eu](https://harbor.eucaim.cancerimage.eu)

## MM2 Prototype (September 2023)
These are the features available in the production version

## MM3 Pre-production prototype (June 2024)
These are the features available in the production version:
- Dashboard with anonymous and authenticated access, links to the catalogue for anonymous users, as well as the aggregated information of the catalogue (collection summary). Once authenticated, the users can access the explorer and the negotiator.
- Catalogue with 47 datasets.
- Negotiator with all the registered datasets and request and review stages implemented.

## First Release (January 2024)
### January Release

These are the features available in the production version
- Dashboard with profile information, links to the catalogue and a basic helpdesk for anonymous users. Once authenticated, the users can access the explorer and the negotiator.
- Catalogue with 64 datasets with a total of 45573 subjects, well connected to the explorer and the negotiator.
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
- Dashboard
  - User's Library, listing the datasets for which a user has access granted, as well as those under negotiation.
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
- Hyperontology
  - hyperontology available in [https://hyperontology.eucaim.cancerimage.eu](https://hyperontology.eucaim.cancerimage.eu)
- Registry
  - A Harbor registry of artifacts is deployed in [https://harbor.eucaim.cancerimage.eu](https://harbor.eucaim.cancerimage.eu). The registry is available only to Data Holders to download the tools for the preparation of the data and software developers to push their applications.

### April Release
These are the features added to the previous release
- Dashboard
  - A new version implemented in VUE has been deployed.
- Catalogue
  - A new version based on Molgenis EMX2 version and an RDF FAIR Data Point in [https://catalogue-eucaim.grycap.i3m.upv.es/Eucaim/api/rdf/](https://catalogue-eucaim.grycap.i3m.upv.es/Eucaim/api/rdf/).
- Negotiator
  -  A new version of the negotiator deployed, with advanced functionalities for the management of negotiations and the customisation of the interface for the admin user.
-  Hyperontology
  - Version 1.3 of the hyperontology deployed.
