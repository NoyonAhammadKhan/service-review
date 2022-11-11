import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Blog from '../Blog/Blog';

const Blogs = () => {
    const blogs = useLoaderData();
    console.log(blogs)
    return (
        <div>
            {
                blogs.map(blog=><Blog key={blog._id} blog={blog}/>)
            }         
        </div>
    );
};

export default Blogs;