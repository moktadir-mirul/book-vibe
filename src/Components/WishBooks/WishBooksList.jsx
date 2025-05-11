import React from 'react';
import WishBookCard from './WishBookCard';
import Fallback from '../Fallback';

const WishBooksList = ({wishListedBooks, setWishListedBooks, allBooks}) => {

    
    if(wishListedBooks.length <= 0) {
        return <div className='w-full flex justify-center text-3xl font-bold py-5 text-red-900'><h1>No Books Found in the Wish List</h1></div>
    }
    return (
        <div>
            {
                wishListedBooks.map((book) => <WishBookCard allBooks={allBooks} key={book.bookId} book={book} setWishListedBooks={setWishListedBooks}></WishBookCard>)
            }
        </div>
    );
};

export default WishBooksList;