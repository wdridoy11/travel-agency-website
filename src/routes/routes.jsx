import React from 'react'
import { createBrowserRouter } from "react-router-dom";
import Main from '../layout/Main';

const router=createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        children:[
            {
                path: "/",
                // element: <Home></Home>,
              },
              {
                path: "place",
                // element: <Places></Places>,
              },
              {
                path: "place/:PlaceDetails",
                // element: <PlaceDetails />,
                loader: ({ params }) => fetch(`/travelPlace.json`),
              },
              {
                path: "create_account",
                // element: <CreateAccount></CreateAccount>,
              },
              {
                path: "login",
                // element: <Login></Login>,
              },
              {
                path: "signup",
                // element: <Signup></Signup>,
              },
        ]
    }
])

export default router