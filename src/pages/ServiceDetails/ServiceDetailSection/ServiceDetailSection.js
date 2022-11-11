import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetailSection = ({serviceDetail}) => {
  
  const {picture,price,rating,serviceDetails, serviceName,serviceAlreadyTaken,timeRequired}=serviceDetail;
    return (
        <div>
            <div className="bg-white">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{serviceName}</h2>
          <p className="mt-4 text-gray-500">
            {serviceDetails}
          </p>

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
          
          </dl>
        </div>
        <div className="grid grid-cols-1 grid-rows-1 gap-4 sm:gap-6 lg:gap-8">
         
          <img
            src={picture}
            alt="Walnut card tray filled with cards and card angled in dedicated groove."
            className="w-10/12 rounded-lg bg-gray-100"
          />
          <div>
           <h1 className='text-xl'>Price:{price}$</h1><h1 className='text-xl'>Hours Require:{timeRequired} Hours</h1><h1 className='text-xl'>Service Already Taken:{serviceAlreadyTaken} Hours</h1>
        </div>
        </div>
        
      </div>
    </div>
   
        </div>
    );
};

export default ServiceDetailSection;