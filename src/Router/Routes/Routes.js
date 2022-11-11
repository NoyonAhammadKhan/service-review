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
                loader:()=>fetch('http://127.0.0.1:5000/services')
            },
            {
                path:'/services/:id',
                element:<ServiceDetails/>,
                loader:({params})=>fetch(`http://127.0.0.1:5000/services/${params.id}`)
            },
            {
                path:"/blogs",
                element:<Blogs></Blogs>,
                loader:()=>fetch('http://localhost:5000/blogs')
            },
            {
                path:"/my-reviews",
                element:<MyReviews/>,
               
            },
            {
                path:"/add-services",
                element:<AddService/>
            }
        ]
    }
])

export default router;