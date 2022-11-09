import { Footer } from 'flowbite-react';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../pages/Shared/Header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;