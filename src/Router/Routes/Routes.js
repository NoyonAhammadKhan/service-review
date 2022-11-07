import React from 'react';
// import { createBrowserRouter } from 'react-router-dom'
import Main from '../../layouts/Main';
import Blog from '../../pages/Blog/Blog/Blog';
import Home from '../../pages/Home/Home';
import Login from '../../pages/Login/Login';
import Register from '../../pages/Register/Register';
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
            }
        ]
    }
])

export default router;