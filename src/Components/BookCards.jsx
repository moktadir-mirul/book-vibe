import React, { use } from 'react';
import SingleBookCard from './SingleBookCard';

const BookCards = ({allBooksData}) => {
    const allBooks = use(allBooksData);
    return (
        <div>
            {
                allBooks.map(book => <SingleBookCard key={book.bookId} book={book}></SingleBookCard>)
            }
        </div>
    );
};

export default BookCards;