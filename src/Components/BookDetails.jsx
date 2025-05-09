import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const BookDetails = () => {
    const {id} = useParams();
    const allBooks = useLoaderData();
    const bookDetailsData = allBooks.find(book => book.bookId === Number(id));
    const {bookName, author, rating, image, review, totalPages, yearOfPublishing, publisher} = bookDetailsData;
    return (
        <div className='w-11/12 border-b-2 border-gray-200 border-t-2 mx-auto py-8 flex justify-between items-start gap-7'>
            <div>
                <img src={image} alt="" />
            </div>
            <div>
                <h1 className='font-bold text-2xl'>Book Name: {bookName}</h1>
                <h1 className='font-bold text-lg'> Author: {author}</h1>
                <h1><strong>Review</strong> <br />{review}</h1>
                <h1><strong>Rating:</strong> {rating}</h1>
                <h1><strong>Year of Publishing:</strong> {yearOfPublishing}</h1>
                <h1><strong>Publisher: </strong>{publisher}</h1>
                <h1 className='font-medium'><strong>Number of Pages:</strong> {totalPages}</h1>
                <button className='btn btn-success '>Mark as Read</button>
                <button className='btn btn-success m-2'>Add to WishList</button>
            </div>
        </div>
    );
};

export default BookDetails;