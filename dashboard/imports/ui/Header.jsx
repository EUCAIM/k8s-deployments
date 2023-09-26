import { Meteor } from 'meteor/meteor';
import React from "react";
import {useAuth} from "react-oidc-context";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons";
import {Button} from "react-bootstrap";

export const Header = () => {

  const auth = useAuth();


  return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <a className="navbar-brand" href="/"><img src="/images/logoEUCAIM_nav@1.5x-8.png" width="131" height="37" alt="EUCAIM Cancer Image Europe"/>
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span> </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto mr-5">
          <li className="nav-item active"> <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a> </li>
          <li className="nav-item"> <a className="nav-link" href="https://catalogue.eucaim.cancerimage.eu">PUBLIC CATALOGUE</a> </li>
        </ul>
        {auth.isAuthenticated?
          <button className="btn btn-profile my-2 my-sm-0 ms-4" onClick={() => auth.removeUser()}><FontAwesomeIcon icon={faUser} style={{color: "#fff", paddingRight: "5px"}} /> {auth.user.profile.name} (Logout)</button>
          :
          <button className="btn btn-profile my-2 my-sm-0 ms-4" onClick={() => auth.signinRedirect()}><FontAwesomeIcon icon={faUser} style={{color: "#fff", paddingRight: "5px"}} /> My profile</button>
        }

      </div>
    </nav>
  )
}
