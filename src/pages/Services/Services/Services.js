import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Services = () => {
    const services=useLoaderData();
    console.log(services)
    return (
        <div>
            <h1>This is services page</h1>
        </div>
    );
};

export default Services;