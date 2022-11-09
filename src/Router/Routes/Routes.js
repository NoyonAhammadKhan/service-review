import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
// import { MainURL } from '../../contexts/AuthProvider/AuthProvider';
// import { createBrowserRouter } from 'react-router-dom'
import Main from '../../layouts/Main';
import Blog from '../../pages/Blog/Blog/Blog';
import Home from '../../pages/Home/Home';
import Login from '../../pages/Login/Login';
import Register from '../../pages/Register/Register';
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
                path:"/blog",
                element:<Blog></Blog>
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
            }
        ]
    }
])

export default router;