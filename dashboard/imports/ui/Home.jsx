import React from "react";
import {useAuth} from "react-oidc-context";
import {faDatabase, faScrewdriverWrench, faUser} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Meteor} from "meteor/meteor";



export const Home = () => {


  const auth = useAuth();

  return (
    <main className="flex-shrink-0 home">
      <div className="py-5 text-center container-fluid bg-dark title_eucaim" style={{marginTop: "58px"}}>
        <div className="row py-lg-5">
          <div className="container text-white pt-4">
            <img src="/images/LOGO EUCAIM_home@2x-8.png" width="416" height="126" alt="EUCAIM logotype"/>
            <h1 className="fw-light pt-4">The Dashboard of the European Federation of Cancer Images</h1>
            {auth.isAuthenticated? <div>SUB: {auth.user.profile.sub}</div> : <></>}

          </div>
        </div>
      </div>
      <section className="pt-5 pb-5">

        <div className="container pb-5">
          <div className="row">
            <div className="col d-flex align-items-end">

              <a href="/become-a-user"><div className="img-thumbnail-eucaim pl-1" style={{width: "110px", height: "110px"}}><FontAwesomeIcon icon={faUser} size="2x" style={{marginTop: "70px", marginLeft: "5px"}}/></div></a>
              <h3>Become a <br/>
                <a href="/become-a-user">User</a></h3>
            </div>
            <div className="col d-flex align-items-end">

              <a href="/become-a-tool-provider"><div className="img-thumbnail-eucaim pl-1" style={{width: "110px", height: "110px"}}><FontAwesomeIcon icon={faScrewdriverWrench} size="2x" style={{marginTop: "70px", marginLeft: "5px"}}/></div></a>
              <h3 className="aling-baseline" style={{verticalAlign: "bottom"}}>Become a<br/>
                <a href="/become-a-tool-provider">Tool</a> Provider</h3>
            </div>
            <div className="col d-flex align-items-end">

              <a href="/become-a-data-provider"><div className="img-thumbnail-eucaim pl-1" style={{width: "110px", height: "110px"}}><FontAwesomeIcon icon={faDatabase} size="2x" style={{marginTop: "70px", marginLeft: "5px"}}/></div></a>
              <h3>Become a <br/>
                <a href="/become-a-data-provider">Data</a> Provider</h3>
            </div>

          </div>

        </div>
        {/*
        <div className="container-fluid">
          <h2 className="container p-0 bg-dark text-white">What we believe</h2>
        </div>
        */}
        <div className="container">
          <div className="row pt-5" style={{padding: "0 6rem"}}>
            <h3 className="text-center" style={{padding: "0 5rem", marginBottom: "20px", lineHeight: "40px"}}>Cancer Image Europe is pioneering a pan-European federated infrastructure for cancer images, fueling AI innovations</h3>

            <p className="text-center">Cancer Image Europe provides a robust, trustworthy platform for researchers, clinicians, and innovators to access diverse cancer images, enabling the benchmarking, testing, and piloting of AI-driven technologies.</p>

            <p className="text-center">By connecting high-quality cancer image data and AI experts, Cancer Image Europe facilitates collaboration and accelerates the development of cutting-edge solutions for cancer diagnosis and treatment.</p>

          </div></div>
      </section>

    </main>

  )
}
