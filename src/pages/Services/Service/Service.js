import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Service = ({service}) => {
	const {_id,serviceName,picture,rating,timeRequired,serviceDetails}=service;
    return (
        <div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
	<img src={picture} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
	<div className="flex flex-col justify-between p-6 space-y-8">
		<div className="space-y-2">
			<h2 className="text-3xl font-semibold tracking-wide">{serviceName}</h2>
			<p className="dark:text-gray-100">Curabitur luctus erat nunc, sed ullamcorper erat vestibulum eget.</p>
		</div>
	<Link to={`/services/${_id}`}><button className="bg-purple-900 text-white hover:bg-blue-400 font-bold py-2 px-4 mt-3 rounded">Details</button></Link>	
	</div>
</div>
    );
};

export default Service;