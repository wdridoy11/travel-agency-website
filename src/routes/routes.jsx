import React from 'react'
import { createBrowserRouter } from "react-router-dom";
import Main from '../layout/Main';
import Places from '../pages/place/Places';
import Home from '../pages/home/home/Home';
import Login from '../pages/login/Login'
import SignupForm from '../pages/Signup/SignupForm';
import PlaceDetails from '../pages/place/PlaceDetails';
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
                element: <PlaceDetails></PlaceDetails>,
                loader: ({ params }) => fetch(`/travelPlace.json`),
              },
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