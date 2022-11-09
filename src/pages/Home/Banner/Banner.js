import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="p-6 py-12 dark:bg-violet-400 dark:text-gray-900 border-2 border-indigo-600 w-11/12 mr-auto ml-auto mt-16 mb-16">
	<div className="container mx-auto">
		<div className="flex flex-col lg:flex-row items-center justify-between">
			<h2 className="text-center text-6xl tracking-tighter font-bold">Up to
				<br className="sm:hidden"/>50% Off
			</h2>
			<div className="space-x-2 text-center py-2 lg:py-0">
				<span>For getting extra offer! Use code:</span>
				<span className="font-bold text-lg">HomeElectro50</span>
			</div>
			<Link to="/services"  className="px-5 mt-4 lg:mt-0 py-3 rounded-md border block dark:bg-gray-50 dark:text-gray-900 dark:border-gray-400">Book Services</Link>
		</div>
	</div>
</div>
    );
};

export default Banner;