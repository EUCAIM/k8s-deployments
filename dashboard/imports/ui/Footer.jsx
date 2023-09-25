import { Meteor } from 'meteor/meteor';
import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebookF, faLinkedinIn, faTwitter} from '@fortawesome/free-brands-svg-icons'


export const Footer = () => {
  return (

    <footer className="d-flex flex-wrap justify-content-between align-items-end pt-5 mt-auto">
      <div className="container row">
        <div className="col-md-8 d-flex align-items-center">
          <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
            <img src="/images/logo_EUCAIM_footer@2x-8.png" width="216" height="66" alt=""/>
          </a>
        </div>
        <div className="col-md-4">

          <div className="text-white d-md-block ms-2">FOLLOW US</div>
          <ul className="nav list-unstyled d-flex col-xl-10">

            <li className="icon"><a href="#"><FontAwesomeIcon icon={faTwitter} size="xl" /></a></li>
            <li className="icon"><a href="#"><FontAwesomeIcon icon={faFacebookF} size="xl" /></a></li>
            <li className="icon"><a href="#"><FontAwesomeIcon icon={faLinkedinIn} size="xl" /></a></li>
          </ul>
        </div>
      </div>
      <div className="container-fluid mb-0" style={{backgroundColor: "#416097"}}>
        <ul className="nav align-items-center justify-content-center">
          <li className="nav-item"><a href="#" className="nav-link px-2 text-white">Privacy Policy</a></li>
          <li className="nav-item"><a href="#" className="nav-link px-2 text-white">Cookies Policy</a></li>
        </ul>
      </div>
    </footer>
  )

}
