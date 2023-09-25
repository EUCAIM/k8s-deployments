import React from "react";


export const BecomeTool = () => {

  return(
    <main className="flex-shrink-0 become-tool">

      <section className="pt-5 pb-5">

        <div className="bg-light" style={{marginTop: "15px"}}>
          <div className="h1-bg-image">

            <div className="d-flex justify-content-center align-items-center h-100">
              <div className="text-white p-3">
                <h1>Become a tool provider of EUCAIM</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid pt-4">
          <h2 className="container p-0 bg-dark text-white">1. Why becoming a tool provider</h2>
        </div>
        <div className="container">
          <div className="row pt-5">
            <p>At EUCAIM, we believe in the power of collaboration and innovation to advance cancer research and improve patient outcomes. As a Tool Provider, you play a crucial role in our mission to build a pan-European digital federated infrastructure for cancer-related radiological and nuclear medicine images. Here are some compelling reasons to consider becoming a Tool Provider with EUCAIM:</p>
            <ul>
              <li><p><b>Contribute to Cutting-Edge Cancer Research:</b> By providing your developed data processing tools, services, or applications to the EUCAIM marketplace, you become an integral part of the fight against cancer. Your contributions will be utilized by researchers, clinicians, and innovators across Europe to develop AI-driven solutions for precision medicine.</p></li>
              <li><p><b>Enhance Visibility and Recognition:</b> Your institution will gain recognition and prestige by actively participating in EUCAIM. This affiliation positions you as a leader in cancer research and innovation, attracting additional funding and fostering partnership opportunities.</p></li>
              <li><p><b>Opportunity for Revenue Generation:</b> Collaboration within the EUCAIM framework allows you to explore partnerships with data users and stakeholders under the European Data Governance Act (DGA) and European Health Data Space (EHDS) framework, potentially leading to revenue generation.</p></li>
              <li><p><b>Facilitated Cross-Border Collaboration:</b> EUCAIM connects data providers and tool providers across the European Union, promoting collaboration and knowledge sharing. Our platform includes a social component that facilitates communication and interaction among researchers, industry experts, and policymakers.</p></li>
              <li><p><b>Advanced AI and Imaging Training:</b> EUCAIM supports scientists and physicians by promoting state-of-the-art training on AI and imaging tools, ensuring that you are well-equipped to leverage these technologies effectively.</p></li>
            </ul>
            <p>In summary, becoming a Tool Provider with EUCAIM offers a unique opportunity to make a meaningful impact on cancer research, gain recognition within the scientific community, and contribute to your institution's growth. Join us in our mission to revolutionize cancer management through AI and innovative tools.</p>
          </div>
        </div>



        <div className="container-fluid pt-4">
          <h2 className="container p-0 bg-dark text-white">2. Tools Specifications</h2>
        </div>
        <div className="container">
          <div className="row pt-5">
            <img src="/images/tools_specification.png" />
            <p>To become a Tool Provider with EUCAIM, it is important to adhere to specific guidelines and development principles. Here are some key specifications for providing tools and services within our platform:</p>
            <ul>
              <li><p><b>Container-based Development:</b> Tools and services should be packaged into container images to ensure portability and ease of deployment across different environments.</p></li>
              <li><p><b>Container Image Requirements:</b> Container images should meet specific requirements, including base image specifications and necessary dependencies and configurations.</p></li>
              <li><p><b>Verification by Security Experts:</b> Before deployment, tools and services undergo verification by a group of experts within the Consortium to assess potential security risks and ensure compliance with established standards.</p></li>
              <li><p><b>Usage Instructions and Examples:</b> Clear usage instructions and examples should be provided to facilitate tool adoption, including step-by-step deployment instructions and common use case scenarios.</p></li>
              <li><p><b>Specific Usage License:</b> Define a specific usage license that outlines terms and conditions for tool use, distribution, and modification.</p></li>
              <li><p><b>Integration Tests:</b> Perform comprehensive integration tests to ensure compatibility and seamless integration with existing infrastructure.</p></li>
              <li><p><b>Periodic Dependency Updates:</b> Regularly update dependencies to address security vulnerabilities and maintain compatibility with other components.</p></li>
            </ul>
            <p>By following these specifications, Tool Providers can ensure that their contributions are standardized, secure, and user-friendly within the EUCAIM platform.</p>
          </div>
        </div>



        <div className="container-fluid pt-4">
          <h2 className="container p-0 bg-dark text-white">3. Rules of Participation</h2>
        </div>
        <div className="container">
          <div className="row pt-5">
            <p>To become a Tool Provider with EUCAIM, entities must adhere to the following rules of participation:</p>
            <ul>
              <li><p><b>Infrastructure and Technical Requirements:</b> Tools must be provided as containerized images, typically using technologies such as Docker, to ensure compatibility with the central node and federated nodes via container orchestrators like Kubernetes.</p></li>
              <li><p><b>EUCAIM Terms of Usage:</b> Tools must comply with technical guidelines and terms of usage provided by EUCAIM, including data handling and documentation requirements.</p></li>
              <li><p><b>User Support and Tool Maintenance:</b> Tool Providers must offer user support and commit to long-term maintenance to ensure secure and stable functionality.</p></li>
              <li><p><b>Minimum Documentation Required:</b> Provide essential documentation, including user manuals, license agreements, data usage policies, security information, and technical support details.</p></li>
              <li><p><b>Traceability Mechanisms:</b> Tools must register relevant user actions and provide logs to monitor usage and identify incidents.</p></li>
              <li><p><b>Monitoring Capabilities:</b> Tools should offer monitoring capabilities to enable EUCAIM to track their status and performance.</p></li>
              <li><p><b>Benchmarking:</b> Tool Providers must communicate essential information about their tools, including descriptions, training datasets, tool types, performance metrics, input requirements, and more.</p></li>
              <li><p><b>Quality Control:</b> Implement quality control measures, including code-related quality controls, functional validation, and external assessments if applicable.</p></li>
              <li><p><b>Compliance with Security and Privacy Requirements:</b> Tools handling sensitive data must comply with GDPR guidelines and other legal and ethical requirements related to data protection.</p></li>
              <li><p><b>Compliance with Applicable Legislation:</b> All tools must comply with current European and national legislation, as well as upcoming regulations that may come into force during the EUCAIM Project.</p></li>
            </ul>
            <p>Becoming a Tool Provider with EUCAIM offers a unique opportunity to contribute to groundbreaking cancer research while adhering to essential guidelines and standards for tool development and deployment. Join us in our mission to transform cancer management through innovation and collaboration.</p>
          </div>
        </div>

      </section>

    </main>
  )

}
