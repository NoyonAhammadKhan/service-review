import React, { useEffect } from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ReviewSection from '../ReviewSection/ReviewSection';
import ServiceDetailSection from '../ServiceDetailSection/ServiceDetailSection';

const ServiceDetails = () => {
    const serviceDetail = useLoaderData();
    const [reviews, setReviews]=useState([]);
    
    useEffect(()=>{
        fetch(`https://b6a11-service-review-server-side-noyon-ahammad-khan.vercel.app/reviews/${serviceDetail._id}`)
        .then(res=>res.json())
        .then(data=>setReviews(data))
    },[])

    return (
        <div className='grid grid-cols-2'>
            
            <ServiceDetailSection serviceDetail={serviceDetail}/>
            <ReviewSection reviews={reviews}/>
        </div>
    );
};

export default ServiceDetails;