import React from 'react';
import { Star } from 'lucide-react';

const SingleBookCard = ({book}) => {
    const {bookName, author, rating, category, tags, image} = book;
    return (
        <div className='border-2 border-gray-200 p-3'>
            <div className='bg-gray-100 px-20 py-5'>
                <img className='w-40 h-48 mx-auto' src={image} alt="" />
            </div>
            <div>
                <h1 className='font-bold text-3xl play'>{bookName}</h1>
                <p>Type: {category}</p>
                <p className='font-semibold text-xl'>Writer: {author}</p>
            </div>
            <div><p className='flex gap-4'>Rating: <span><Star /></span> {rating}</p>
            {
                tags.map((tag, index) => <button className='btn btn-soft btn-accent m-2' key={index}>{tag}</button>)
            }
            </div>
        </div>
    );
};

export default SingleBookCard;