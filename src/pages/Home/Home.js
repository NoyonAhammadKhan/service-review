import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Banner from './Banner/Banner';
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
        </div>
    );
};

export default Home;