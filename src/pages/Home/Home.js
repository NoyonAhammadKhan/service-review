import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import About from './About/About';
import Banner from './Banner/Banner';
import Pricing from './Pricing/Pricing';
import ServicePortion from './ServicePortion/ServicePortion';


const Home = () => {
    const [services,setServices]=useState([]);
    useEffect(()=>{
        fetch('https://b6a11-service-review-server-side-noyon-ahammad-khan.vercel.app/services?dataAmount=3')
        .then(res=>res.json())
        .then(data=>setServices(data));
    },[])
    
    return (
        <div>
           <ServicePortion services={services}/>
           <Banner/>
           <About/>
           <Pricing/>
        </div>
    );
};

export default Home;