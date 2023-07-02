import React from 'react'
import { createBrowserRouter } from "react-router-dom";
import Main from '../layout/Main';
import Places from '../pages/place/Places';
import Home from '../pages/home/home/Home';
import Login from '../../src/pages/login/Login'
import SignupForm from '../pages/Signup/SignupForm';
const router=createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        children:[
            {
                path: "/",
                element: <Home></Home>,
              },
              {
                path: "place",
                element: <Places></Places>,
              },
              {
                path: "place/:PlaceDetails",
                // element: <PlaceDetails />,
                loader: ({ params }) => fetch(`/travelPlace.json`),
              },
              {
                path: "create_account",
                // element: <CreateAccount></CreateAccount>,
              }
        ]
    },
    {
      path: "login",
      element: <Login></Login>
    },
    {
      path: "signup",
      element:<SignupForm></SignupForm>
    },
])

export default router