import { Meteor } from 'meteor/meteor';
import React from 'react';
import {createBrowserRouter, useSearchParams} from "react-router-dom";
import {Home} from "./ui/Home.jsx";
import {PublicCatalogue} from "./ui/PublicCatalogue";
import {BecomeUser} from "./ui/BecomeUser";
import {BecomeTool} from "./ui/BecomeTool";
import {BecomeData} from "./ui/BecomeData";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "become-a-user",
    element: <BecomeUser/>
  },
  {
    path: "become-a-tool-provider",
    element: <BecomeTool/>
  },
  {
    path: "become-a-data-provider",
    element: <BecomeData/>
  },
  {
    path: "/public-catalogue",
    element: <PublicCatalogue/>
  },
  {
    path: "/login/oauth2/code/life_science",
    element: <Home/>
  },
],
//{ basename: new URL(Meteor.absoluteUrl()).pathname.replace(/\/$/,'') }
);
