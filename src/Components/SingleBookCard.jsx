import React from 'react';

const SingleBookCard = (book) => {
    const {bookName, author, rating, category, tags, image} = book;
    return (
        <div className='border-2 border-gray-200 p-3'>
            <div className='bg-gray-100 px-20 py-5'>
                <img src={image} alt="" />
            </div>
            <div>
                <h1 className='font-bold text-3xl'>{bookName}</h1>
            </div>
        </div>
    );
};

export default SingleBookCard;