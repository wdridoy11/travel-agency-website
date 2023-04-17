import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "./common.css"

import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import Hotel from './Components/Hotel/Hotel';
import Places from './Components/Place/Places';
import PlaceDetails from './Components/Place/PlaceDetails';
import Logo from './Components/Login/Login';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Layout /> ,
    children:[
      {
        path:"/",
        element:<Home />
      },
      {
        path:"place",
        element:<Places />
      },
      {
       path:"place/:PlaceDetails",
       element:<PlaceDetails />,
       loader:({params})=>fetch(`/travelPlace.json`)
      },
      {
        path:"hotel",
        element:<Hotel />
      },
      {
        path:"login",
        element:<Logo />
      }
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

