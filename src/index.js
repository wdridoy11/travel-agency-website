import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "./common.css"

import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import Place from './Components/Place/Place';
import Hotel from './Components/Hotel/Hotel';

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
        element:<Place />
      },
      {
        path:"hotel",
        element:<Hotel />
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

