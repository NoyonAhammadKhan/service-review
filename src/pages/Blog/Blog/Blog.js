import React from 'react';

const Blog = ({blog}) => {
	const {question ,answer}=blog;
    return (
        <div className=''>
            <div className="dark:bg-gray-800 dark:text-gray-100">
	<div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900 border border-fuchsia-400 m-5">
		
		<div className="mt-3">
			<h1 className="text-2xl font-bold hover:underline">{question}</h1>
			<p className="mt-2">{answer}</p>
		</div>
		
	</div>
</div>
        </div>
    );
};

export default Blog;