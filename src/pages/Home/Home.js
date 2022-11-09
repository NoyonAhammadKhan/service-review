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
        fetch('http://127.0.0.1:5000/services?dataAmount=3')
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