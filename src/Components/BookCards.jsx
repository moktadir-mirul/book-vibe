import React, { use } from 'react';
import SingleBookCard from './SingleBookCard';

const BookCards = ({allBooksData}) => {
    const allBooks = use(allBooksData);
    return (
        <div className='w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10'>
            {
                allBooks.map(book => <SingleBookCard key={book.bookId} book={book}></SingleBookCard>)
            }
        </div>
    );
};

export default BookCards;