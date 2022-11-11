import React from 'react';
import ReviewSection from '../ReviewSection/ReviewSection';
import ServiceDetailSection from '../ServiceDetailSection/ServiceDetailSection';

const ServiceDetails = () => {
    return (
        <div className='grid grid-cols-2'>
            
            <ServiceDetailSection/>
            <ReviewSection/>
        </div>
    );
};

export default ServiceDetails;