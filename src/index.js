import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "./common.css"

import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import Hotel from './Components/Hotel/Hotel';
import Places from './Components/Place/Places';

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

