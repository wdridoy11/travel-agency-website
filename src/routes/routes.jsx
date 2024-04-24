import React from 'react'
import { createBrowserRouter } from "react-router-dom";
// import pages
import Main from '../layout/Main';
import Login from '../pages/login/Login';
import Places from '../pages/place/Places';
import Home from '../pages/home/home/Home';
import Booking from '../pages/booking/Booking';
import SignupForm from '../pages/Signup/SignupForm';
import PlaceDetail from '../pages/place/PlaceDetail';
import BlogDetails from '../pages/blogs/BlogDetails';
import Dashboard from '../layout/Dashboard';
import Blog from '../pages/blogs/Blog';
import MyBooking from '../pages/dashboard/user/MyBooking';

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
                path: "place/:id",
                element: <PlaceDetail></PlaceDetail>,
                loader: ({ params }) => fetch(`http://localhost:5000/places/${params.id}`),
              },
              {
                path: "booking/:id",
                element: <Booking></Booking>,
                loader: ({ params }) => fetch(`http://localhost:5000/places/${params.id}`),
              },
              {
                path: "blog/:id",
                element:<BlogDetails></BlogDetails>,
                loader:({params})=>fetch(`http://localhost:5000/blogs/${params.id}`)
              },
        ]
    },{
      path:"dashboard",
      element:<Dashboard />,
      children:[
          {
              path:"doctor",
              element:<Blog />
          },
          {
              path:"my-booking",
              element:<MyBooking />
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