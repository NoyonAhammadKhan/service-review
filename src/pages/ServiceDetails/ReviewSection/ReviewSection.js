import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import ReviewCard from './ReviewCard';

const ReviewSection = ({ reviews }) => {
    const {user}=useContext(AuthContext);
    // const {serviceId}=reviews[0];
    // console.log('reviews',reviews[0].serviceId)
    const handleReview = (event) => {
        event.preventDefault();
        const reviewDetails = event.target.review.value;
        const reviewerName =event.target.userName.value;
        const reviewerPicture=user?.photoURL
        const userEmail = user?.email
        const serviceId=reviews[0]?.serviceId;
        // console.log(serviceId)
        event.target.reset()
        const review={
            reviewDetails:reviewDetails,
            reviewerName:reviewerName,
            reviewerPicture:reviewerPicture,
            userEmail:userEmail,
            serviceId:serviceId,
        }
        fetch(`https://b6a11-service-review-server-side-noyon-ahammad-khan.vercel.app/my-reviews`,{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(review)
        })
        .then(res=>res.json())
        .catch(err=>console.log(err))
    }

    return (

        <div className='grid grid-cols-2'>
            <div>
                {
                    reviews.map(review => <ReviewCard key={review._id} review={review} />)
                }
            </div>
            <div className="flex flex-col max-w-xl p-8 shadow-sm rounded-xl lg:p-12 dark:bg-gray-900 dark:text-gray-100">
                <div className="flex flex-col items-center w-full">
                    <h2 className="text-3xl font-semibold text-center">Your opinion matters!</h2>
                    <div className="flex flex-col items-center py-6 space-y-3">
                        <span className="text-center">How was your experience?</span>

                    </div>
                    <div className="flex flex-col w-full">
                        <form onSubmit={handleReview}>
                            <input type="text" name='userName' placeholder='please provide your name' className='p-4 rounded-md resize-none dark:text-gray-100 dark:bg-gray-900 mb-5' required/>
                            <textarea rows="3" name='review' placeholder="Message..." className="p-4 rounded-md resize-none dark:text-gray-100 dark:bg-gray-900"></textarea>
                            <button  type="submit" className="py-4 my-8 font-semibold rounded-md dark:text-gray-900 dark:bg-violet-400">Leave feedback</button>
                        </form>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default ReviewSection;