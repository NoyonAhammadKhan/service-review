import React from 'react';

const About = () => {
    return (
        <div>
             <div className='mb-5'>
                <h1 className='text-6xl text-center font-bold'>About</h1>
            </div>
        <section className="dark:bg-gray-800 dark:text-gray-100 border-2 border-indigo-600 w-11/12 mx-auto my-auto">
           
        <div className="container flex flex-col mx-auto lg:flex-row">
            <div className="w-full lg:w-1/3" style={{backgroundImage:" url('https://i.ibb.co/WntZCh8/repair-electronics.jpg')",backgroundPosition: "center center", backgroundSize: "cover"}}></div>
            <div className="flex flex-col w-full p-6 lg:w-2/3 md:p-8 lg:p-12">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 mb-8 dark:text-violet-400">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <h2 className="text-3xl font-semibold leading-none">Modern solutions to all kinds of Installation problems</h2>
                <p className="mt-4 mb-8 text-sm">I am  here to  solve all kind of electronic gadget installation problem  and repairs the electronics gadget I have many years of experience to solve these type of thing</p>
               
            </div>
        </div>
    </section>
    </div>
    );
};

export default About;