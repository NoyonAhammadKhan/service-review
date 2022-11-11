import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import ReviewCard from '../ReviewCard/ReviewCard';

const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/my-reviews?email=${user.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('service-token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setReviews(data);
            })
    }, [])
    return (
        <div>
            {reviews.length ?(<div>
                    <h1 className='text-6xl text-center mb-8'>All Your Reviews Are Here</h1>
                    <div className='grid grid-cols-3 gap-3'>
                        {reviews.map(review => <ReviewCard key={review._id} review={review} />)}
                    </div>
                </div>)
                :
                (<h1 className='text-6xl text-center mb-8'>You Don't Give Any Review</h1>)
            }


        </div>
    );
};

export default MyReviews;