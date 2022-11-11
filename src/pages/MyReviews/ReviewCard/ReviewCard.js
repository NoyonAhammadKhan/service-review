import React from 'react';

const ReviewCard = ({review}) => {
    // const {reviewDetails}=review
    console.log(review)
    return (
        <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 dark:bg-gray-900 dark:text-gray-100 border border-fuchsia-500">
        <div className="flex justify-between p-4">
            <div className="flex space-x-4">
                <div>
                    <img src={review.reviewerPicture} alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
                </div>
                <div>
                    <h4 className="font-bold">{review.reviewerName}</h4>
                    <span className="text-xs dark:text-gray-400">2 days ago</span>
                </div>
            </div>
          
        </div>
        <div className="p-4 space-y-2 text-sm dark:text-gray-400">
            <p>{review.reviewDetails}</p>
        </div>
        <div className='flex justify-between'> 
        <button type="button" className="px-8 py-3 font-semibold border rounded dark:border-gray-100 dark:text-gray-100">Edit</button>
        <button type="button" className="px-8 py-3 font-semibold border rounded dark:border-gray-100 dark:text-gray-100">Delete</button>
        </div>
    </div>
    );
};

export default ReviewCard;