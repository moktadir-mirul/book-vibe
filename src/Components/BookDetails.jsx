import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const BookDetails = () => {
    const {id} = useParams();
    console.log(typeof id);

    const allBooks = useLoaderData();
    console.log(allBooks);
    const bookDetailsData = allBooks.find(book => book.bookId === Number(id));
    console.log(bookDetailsData);
    const {bookName, author, rating, image, review, totalPages, yearOfPublishing, publisher} = bookDetailsData;
    return (
        <div className='w-11/12 border-b-2 border-gray-200 border-t-2 mx-auto py-8 flex justify-between items-start gap-7'>
            <div>
                <img src={image} alt="" />
            </div>
            <div>
                <h1>Book Name: {bookName}</h1>
                <h1> Author: {author}</h1>
                <h1>Review <br />{review}</h1>
                <h1>{rating}{yearOfPublishing}{publisher}</h1>
                <h1>Number of Pages: {totalPages}</h1>
                <button className='btn btn-success '>Mark as Read</button>
                <button className='btn btn-success m-2'>Add to WishList</button>
            </div>
        </div>
    );
};

export default BookDetails;