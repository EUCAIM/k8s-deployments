import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDatabase, faScrewdriverWrench, faUser} from "@fortawesome/free-solid-svg-icons";


export const BecomeUser = () => {

  return(
    <main className="flex-shrink-0 become-user">

      <section className="pt-5 pb-5">

        <div className="bg-light" style={{marginTop: "15px"}}>
          <div className="h1-bg-image">

            <div className="d-flex justify-content-center align-items-center h-100">
              <div className="text-white p-3">
                <h1>Become a data user in EUCAIM</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid pt-4">
          <h2 className="container p-0 bg-dark text-white">1. Which data EUCAIM provides</h2>
        </div>

        <div className="container">
          <div className="row pt-5">
            <p>In EUCAIM you can find a wide range of cancer images and associated data from both daily clinical practice (real-world data) and existing cancer image repositories, including data from a variety of sources such as clinical and imaging, pathological, molecular and laboratory data.</p>
            <p>Specifically, you can request access to aggregated metadata and datasets from:</p>

            <ul>
              <li><b>Imaging Data:</b></li>
              <ul>
                <li>Radiological and nuclear medicine cancer images in DICOM format.</li>
                <li>Segmentation masks with annotations (e.g., DICOM Segmentation object).</li>
                <li>Histopathological images (WSI) with optional metadata.</li>
              </ul>
            </ul>

            <ul>
              <li><b>Other Clinical Data:</b></li>
              <ul>
                <li>Clinical information accompanying images, such as patient demographics, medical history, diagnosis, treatments, and follow-ups.</li>
                <li>Mutation status information.</li>
                <li>Multi-omics data (genomics, transcriptomics, proteomics, metabolomics, radiomics).</li>
                <li>Biological sample results (e.g., tumor tissues, NGS processing).</li>
                <li>Quality of Life (QoL), quality of care (PREMs & PROMs), and health cost data.</li>
              </ul>
            </ul>

          </div>
        </div>


        <div className="container-fluid pt-4">
          <h2 className="container p-0 bg-dark text-white">2. How is the data request process</h2>
        </div>

        <div className="container">
          <div className="row pt-5">
            <p>As you navigate through the main menu of this website, you can easily access the <b>public metadata catalogue</b> containing metadata from all the datasets within the EUCAIM infrastructure. Within this catalogue, you will find <u>general information</u> about each dataset, and you will have the ability to apply basic <u>filters</u> from the left panel to refine and customize your selections. However, for more in-depth exploration, conducting federated queries, and accessing aggregated dataset information, it is necessary to authenticate yourself on the platform via the Life Science AAI (several options are available for this, like affiliation to organizations, using an ORCID, an LS Hostel account).</p>
            <p>Upon <b>registration</b>, you will be able to select available datasets for <u>federated queries</u> and perform counts according to your interests. You will have the option of including them in your <u>personal library</u>. If you finally want to gain access to the dataset, you will need to submit an <b>application</b>. This application should include details about your approved project, its purpose (including hypotheses and methodologies), how you plan to select cases, the specific data fields you need, the ethical approvals obtained, your planned tools for analysis, endorsement from your institution, and any potential processing resources required.</p>
            <p>The EUCAIM <b>Access Committee</b> will diligently review your application for completeness and will seek technical, ethical, legal, and scientific assessments as required. If the requested data are in the Central Repository, the final decision will be taken by this committee, but in case the dataset belongs to a federated node or to a Research Community, the committee will consult the corresponding Data Providers on the availability of the requested data, even if certain variables are not fully present in their existing datasets, with the approval of the access becoming the responsibility of their Committees. Moreover, Real-World data from our member Hospitals will potentially be available for specific projects upon specific requests.</p>
            <p>Subsequently, you will receive the outcome of your application and detailed information regarding the data access conditions. This will enable you to make informed decisions about whether refinements to your request are necessary. Upon successful <b>negotiation</b>, EUCAIM will generate a Data Sharing, Data Processing, or Data Transfer Agreement for your endorsement.</p>
            <p>Finally, you will be assigned <b>permissions</b> to your user account, and for the duration of the project, according to the access conditions established with the provider:</p>
            <ul>
              <li><p><b>Full access to data:</b> This includes download capabilities, allowing you to acquire fully public collections and store them on your premises.</p></li>
              <li><p><b>Full on-premises access to data:</b> This model allows you to view and process data within the provider's resources, without the option to download data. Access can be granted for a limited period.</p></li>
              <li><p><b>Restricted on-premises access to data:</b> In this model, you can process data using authorized tools, but you cannot view or download data. Suppliers may release a small sample of meaningful data to help you understand its nature and organization. Access is usually granted for a limited time.</p></li>
            </ul>
          </div>
        </div>



        <div className="container-fluid pt-4">
          <h2 className="container p-0 bg-dark text-white">3. Obligations and Terms of Usage</h2>
        </div>

        <div className="container">
          <div className="row pt-5">
            <p>When using the EUCAIM platform, you must adhere to specific procedures and meet certain requirements. The obligations and terms of usage ensure responsible and ethical usage of the EUCAIM platform, safeguarding the privacy and integrity of research data while promoting scientific advancement.</p>
            <p><b>User identity verification</b></p>
            <ul>
              <li>To access the platform's tools and services, you must register and authenticate your identity.</li>
              <li>During the authentication process, you will be asked to agree to various usage conditions outlined in EUCAIM's Acceptable Use Policy.</li>
            </ul>
            <p><b>Common conditions of use</b></p>
            <ul>
              <li>You should identify as a researcher with the intention of generating new knowledge using rigorous scientific methods.</li>
              <li>You are expected to publish your research findings and share the derived data in the scientific community, benefiting wider scientific and public knowledge.</li>
              <li>Your activities must align with legal, ethical requirements, and established research practices.</li>
              <li>Attempting to reverse privacy-enhancing technologies or (re-)identify individual research participants is strictly prohibited.</li>
            </ul>
            <p><b>Key legal requirements</b></p>
            <ul>
              <li>You must specify why you need access to the data and estimate how long you will need it.</li>
              <li>You should outline measures to prevent any unauthorized use of electronic health data.</li>
              <li>Specify the tools and computing resources you will need to use EUCAIM's secure environment.</li>
              <li>When registering on the platform, you have two options:</li>
              <ul>
                <li>For individual users: When you connect to the platform for the first time, you will need to accept certain security responsibilities. If needed, you may also have to agree not to re-identify data.</li>
                <li>For corporates (entities): If you represent an organization, you may need to agree to additional data usage terms and conditions. These terms could include additional obligations and protections based on current laws. You will also need to specify who within your organization is authorized to access and use the data. If necessary, Data Protection Impact Assessment should be provided to ensure data privacy and security.</li>
              </ul>
            </ul>

            <p><b>Ethical requirements for Data Users</b></p>
            <ul>
              <li>You should describe how you plan to use the data ethically.</li>
              <li>Provide a certificate from an ethics committee, confirming that your data usage aligns with ethical standards.</li>
              <li>Provide an AI risk analysis.</li>
            </ul>

          </div>
        </div>


      </section>

    </main>
  )

}
