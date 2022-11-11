import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
// import { MainURL } from '../../contexts/AuthProvider/AuthProvider';
// import { createBrowserRouter } from 'react-router-dom'
import Main from '../../layouts/Main';
import AddService from '../../pages/AddService/AddService';
import Blogs from '../../pages/Blog/Blogs/Blogs';
import Home from '../../pages/Home/Home';
import Login from '../../pages/Login/Login';
import MyReviews from '../../pages/MyReviews/MyReviews/MyReviews';
import Register from '../../pages/Register/Register';
import ServiceDetails from '../../pages/ServiceDetails/ServiceDetails/ServiceDetails';
import Services from '../../pages/Services/Services/Services';
import PrivateRoute from '../PrivateRoutes/PrivateRoute';
const { createBrowserRouter } = require("react-router-dom");



const router = createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/register",
                element:<Register></Register>
            },
            {
                path:"/services",
                element:<Services></Services>,
                loader:()=>fetch('https://b6a11-service-review-server-side-noyon-ahammad-khan.vercel.app/services')
            },
            {
                path:'/services/:id',
                element:<ServiceDetails/>,
                loader:({params})=>fetch(`https://b6a11-service-review-server-side-noyon-ahammad-khan.vercel.app/services/${params.id}`)
            },
            {
                path:"/blogs",
                element:<Blogs></Blogs>,
                loader:()=>fetch('https://b6a11-service-review-server-side-noyon-ahammad-khan.vercel.app/blogs')
            },
            {
                path:"/my-reviews",
                element:<PrivateRoute><MyReviews/></PrivateRoute>,
               
            },
            {
                path:"/add-services",
                element:<PrivateRoute><AddService/></PrivateRoute>
            }
        ]
    }
])

export default router;