import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Service from '../../Services/Service/Service';

const ServicePortion = ({services}) => {
    
    return (
        <div>
             <div className='grid grid-cols-3 ml-40 mt-16'>
            {
                services.map(service=><Service service={service} key={service._id}/>)
            }
            </div>
            <div className='container py-10 px-10 mx-0 min-w-full flex flex-col items-center'>
                {/* <button type="button" className="px-8 py-3  font-semibold border rounded dark:border-gray-100 dark:text-gray-100">See More</button> */}
               <Link to="/services"><button className="bg-purple-900 text-white hover:bg-blue-400 font-bold py-2 px-4 mt-3 rounded">See More</button></Link> 
            </div>
        </div>
       
    );
};

export default ServicePortion;