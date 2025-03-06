# Architecture of the EUCAIM Data Federation

EUCAIM focuses on a federated model in which data holders can contribute by connecting their sites to the federation services of the central hub of EUCAIM. EUCAIM offers two reference nodes that can host data from data holders that cannot provide the required service level needed for the access and processing of their data. Reference Nodes have Secure Processing Environments where data can be processed safely.

The central hub features a Dashboard that gives access to the catalogue, the distributed processing, the access negotiation, the helpdesk and the federated search services. Figure 1 shows a high level schema that denotes all the different entities, including Data Holders that contribute with Real World Data (RWD) through observational studies. 

<img width="705" alt="image" src="https://github.com/EUCAIM/k8s-deployments/blob/7a9cdce11347beea9ad309654cbd2c572372f13c/EUCAIM%20federation%20model.png">

Figure 1: EUCAIM federation model. Central services are depicted in orange and data providers in blue. DTA stands for Data Transfer Agreement and DSA for Data Sharing Agreement.

The federation model of EUCAIM implies three different tier levels, already described in several documents, which define:
- Tier 1: Interoperability at the level of the collection/dataset metadata. If the data holder owns a catalogue, this catalogue should be searchable and accessible via FAIR Data Points and DCAT. Data could be registered manually in the general catalogue otherwise.
- Tier 2: Interoperability at the level of the federated search. The data should be searchable so aggregated results can be retrieved according to searching criteria. The node should provide a query mediator to adapt the standard queries of the federated search to the local searching service format.
- Tier 3: Interoperability at the level of the distributed processing. The data must comply with the data model of EUCAIM and should be made available in an execution environment by means of a materializator component.

To federate a node those components described above have to be developed and deployed at the provider’s side to achieve interoperability at the different tier levels. Figure 2 shows an schema. 

<img width="705" alt="image" src="https://github.com/EUCAIM/k8s-deployments/blob/7a9cdce11347beea9ad309654cbd2c572372f13c/EUCAIM%20federation%20architecture.png">

Figure 2: Components required at the federation node to interact with the federation services. Colours define the components involved in the interoperability at the different tiers (red for tier 1, orange for tier 2 and green for tier 3).

The following subsections describe in detail the current version of the architecture of EUCAIM and its main components.

## Authentication and Authorization Infrastructure (AAI)
Only the Dashboard and the Catalogue in EUCAIM allow anonymous access, as they provide access to general information, onboarding processes and aggregated data. The rest of the services are only accessible for duly authenticated and authorised users, and the dashboard and the catalogue expose additional features to authenticated users.

Authentication and Authorisation in EUCAIM services is performed through the LS-AAI. Every core service is registered as one LS-AAI service, so the management of the authorisation can be centrally applied by means of VO groups. 

The researchers can use their own IdP credentials (if included in the eduGAIN Federation) to authenticate themselves. Only users of the EUCAIM VO Group are authorised to access the services and EUCAIM VO membership is manually validated.  

The following services are registered in the LS-AAI:
- Dashboard, deployed in dashboard.eucaim.cancerimage.eu, which verifies that the  attribute urn:geant:lifescience-ri.eu:group:lifescience:communities_and_projects has the value EUCAIM#aai.lifescience-ri.eu. This membership attribute is also verified in other services.
- Federated Search, deployed in explorer.eucaim.cancerimage.eu, which is directly restricted to users in the EUCAIM VO group at the authentication on the LS-AAI service, using an OAuth Proxy in front of the Lens service.
- Negotiator UI, deployed in negotiator.eucaim.cancerimage.eu, and Negotiator backend, deployed in negotiator.eucaim.cancerimage.eu/api, which retrieve not only the membership attribute but also the roles with respect to the datasets. The responsible person for each dataset is registered in LS-AAI, as well as the negotiator admin role.
- Helpdesk, deployed in helpdesk.eucaim.cancerimage.eu, retrieving the membership attribute.
- Reference Node at UPV, deployed in eucaim-node.i3m.upv.es, through a Keycloak service that interacts with the LS-AAI and retrieves the membership attribute. Additional authorisation configurations are defined at the level of the node Keycloak. It is important to outline that the reference node is a canonical implementation for other nodes in the federation.

## Dashboard
The Dashboard is a website application that integrates the Graphical User Interfaces of the different components in a seamless environment with a common design. This website links to the core services as described in D4.5 First Federated Core Services: the Public Catalogue, Federated Search, Negotiator, the Authentication and Authorisation Infrastructure (AAI),  Data Population Monitoring and the Helpdesk.

The architecture of the Dashboard application is simple, comprising two components, a node js server with the application and the database for the persistence layer of the application. The application interacts with other services in EUCAIM. 
 
## Public Catalogue
The public catalogue stores the metadata of data sets, and offers the researchers descriptive information about the available datasets, while displaying data characteristics as well as access conditions.

The metadata catalogue consists of the Molgenis emx2 platform as a back-end service with a custom Javascript front-end which is based on prior catalogues. The catalogue lists the datasets registered in the platform grouped into dataset series. Four components are involved: the Molgenis front-end and backend, an Elasticsearch component for indexing data and a Postgres database for the persistence of all the information.

The metadata catalogue offers an API through the Molgenis platform that facilitates the querying of the metadata in the catalogue. Just like the metadata which are made publicly accessible in the GUI, this information is also made accessible through the API. 

To allow the dissemination of dataset metadata into multiple catalogues, without going through the trouble of repeatedly registering the datasets, the FAIR Data Point (FDP) protocol is used to connect the catalogues. The FDP protocol uses the DCAT vocabulary and the DCAT-AP Health application profile, plus some additional fields defined for EUCAIM. 

## Federated Query
Federated search enables users to retrieve the number of subjects that fulfil specific criteria. The federated search is deployed in two different environments: The central core services, which consist of the front-end, its back-end, the federated query brokering system, and the certificate storage; and, on each providers’ side, the query dispatcher, the store, and the data holders customised components to translate the query into the local format. 

The central core services are the following:
- Lens - the front-end application and a set of components that propagate the search queries to different providers in the federation, and display the search results.
- Spot - Lens backend creating a task containing the query from Lens and sending it to Beam using Beam Proxy.
- Beam Proxy - handling communication with Beam Broker, taking care of authentication, encryption, and signatures.
- Beam Broker - distributed task broker.
- Vault - used to store the credentials for accessing the searching endpoints at each data holder registered in the system.

The data-holder side integrates the following components:
- Beam proxy - handling communication with Beam Broker, taking care of authentication, encryption, and signatures.
- Focus query dispatcher - receiving Beam tasks using Beam Proxy, translating queries depending on the types of endpoints, running them, and returning the results to Beam.
- Different stores (DBMS) and custom components translating the queries.

An implementation of the mediator component for connecting CHAIMELEON data holder has been integrated in CHAIMELEON Dataset service. The implementation can be found in the Github repository. ProCancer-I and INCISIVE have also implemented a mediator for the datasets available from this project.

## Federated Access
Access requests to datasets are collected through the negotiator. This is a service that collects the information about a data access request, which should be evaluated by the Access Committee.  Access requests are always triggered through the catalogue. The user selects the set of datasets of interest and sends the request to the negotiator. Then, the negotiator presents a dynamic form that could depend on the type of the dataset and creates the full request. Further accesses can be performed directly on the negotiator to follow-on (or evaluate) the requests. In the case of observational studies, a “customisable” dataset should be selected, leading to a specific access form. 

The negotiator comprises three services: the front-end, which builds interfaces according to the requests, the backend service, which exposes the API of the negotiator’s functionality. Finally, a postgres database persists the specifications of the access form and the information regarding special privileged roles for each dataset. The negotiator periodically collects this information from the catalogue. All negotiations start  from the user of the catalogue which interacts through the “export” method with the Negotiator under the user “directory”. 

