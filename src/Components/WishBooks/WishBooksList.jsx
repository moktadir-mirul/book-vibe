import React from 'react';
import WishBookCard from './WishBookCard';

const WishBooksList = ({wishListedBooks, setWishListedBooks}) => {
    console.log(wishListedBooks)
    return (
        <div>
            {
                wishListedBooks.map((book) => <WishBookCard key={book.bookId} book={book} setWishListedBooks={setWishListedBooks}></WishBookCard>)
            }
        </div>
    );
};

export default WishBooksList;