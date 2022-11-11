import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Service from '../Service/Service';

const Services = () => {
    const services=useLoaderData();
    console.log(services)
    return (
       <div>
        <div className='text-center font-bold text-6xl mt-3 mb-3'>
            Choose Your Required Service
        </div>
         <div className='grid grid-cols-3'>
            {
                services.map(service=><Service key={service._id} service={service}/>)
            }
        </div>
       </div>
    );
};

export default Services;