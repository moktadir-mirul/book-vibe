import React from 'react';
import WishBookCard from './WishBookCard';

const WishBooksList = ({wishListedBooks}) => {
    console.log(wishListedBooks)
    return (
        <div>
            {
                wishListedBooks.map((book) => <WishBookCard key={book.bookId} book={book}></WishBookCard>)
            }
        </div>
    );
};

export default WishBooksList;