import React from 'react';
import ReadBookCard from './ReadBookCard';

const ReadBooksList = ({listedBooks}) => {
    return (
        <div>
            {
                listedBooks.map(book => <ReadBookCard key={book.bookId} book={book}></ReadBookCard>)
            }
        </div>
    );
};

export default ReadBooksList;