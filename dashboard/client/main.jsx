import React from 'react';
import {createRoot} from 'react-dom/client';

import { Meteor } from 'meteor/meteor';
import {Router} from "/imports/Router";
import {RouterProvider} from "react-router-dom";
import {AuthProvider} from "react-oidc-context";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Header} from "../imports/ui/Header.jsx";
import {Footer} from "../imports/ui/Footer.jsx";
import CryptoJS from "crypto-js";



Meteor.startup(() => {

  const LSConfig = {
    authority: "https://proxy.aai.lifescience-ri.eu",
    client_id: Meteor.settings.public.client_id,
    client_secret: CryptoJS.AES.decrypt(Meteor.settings.public.client_secret, Meteor.settings.public.client_id).toString(CryptoJS.enc.Utf8),
    redirect_uri: Meteor.absoluteUrl()+"login/oauth2/code/life_science",
    scope: 'openid profile email eduperson_entitlement',
    response_type: "code",
    loadUserInfo: true
  }

  function onSigninCallback() {
    window.history.replaceState(null, '', '/');
  }


  const container = document.getElementById('root')
  const root = createRoot(container)
  root.render(
    <React.StrictMode>
      <AuthProvider {...LSConfig} onSigninCallback={onSigninCallback}>
        <Header/>
        <RouterProvider router={Router} />
        <Footer/>
      </AuthProvider>
    </React.StrictMode>
  )

});


