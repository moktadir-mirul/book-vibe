import React from 'react';
import { IoDocumentOutline } from 'react-icons/io5';
import { LuUsers } from 'react-icons/lu';
import { MdOutlineLocationOn } from 'react-icons/md';
import { getFromoDBForWishList, removeFromWishList } from '../../Utility/onlyAddToWishList';
import { toast } from 'react-toastify';

const WishBookCard = ({book , setWishListedBooks, allBooks}) => {

    const {bookId, bookName, author, rating, category, tags, image, totalPages, yearOfPublishing, publisher} = book;

    const handleWishBookRemove = (id) => {
        removeFromWishList(id);
        const updatedWishList = getFromoDBForWishList();
        if(updatedWishList.length <=0) {
            setWishListedBooks([]);
        } else {
            const wishListedBooksUp = allBooks.filter((book) => updatedWishList.includes(book.bookId));
            setWishListedBooks(wishListedBooksUp);
        }
        toast.info(`${bookName} removed from WIsh`)
    }
    return (
        <div className='p-5 bg-red-100 border-2 border-gray-200 flex flex-col lg:flex-row gap-5 items-center my-5 rounded-xl'>
            <div className='p-5 bg-gray-200 rounded-2xl'>
                <img className='w-48 h-48 rounded-lg'  src={image} alt={bookName} />
            </div>
            <div className='space-y-2'>
                <h1 className='text-3xl font-bold'>{bookName}</h1>
                <h1 className='text-lg'>By : <strong>{author}</strong></h1>
                <div className='flex flex-col lg:flex-row gap-5'>
                    <h1 className='flex items-center'>
                        Tags: {
                        tags.map((tag, i) => <p key={i} className='py-1 px-2 rounded-2xl bg-green-200 text-green-800 font-semibold ml-2'>#{tag}</p>)
                        }
                    </h1>
                    <h1 className='flex items-center'><MdOutlineLocationOn size={25}/> Year of Publishing: <strong>{yearOfPublishing}</strong></h1>
                </div>
                <div className='flex flex-col lg:flex-row gap-5 pb-3 border-b-2 border-gray-200'>
                    <h1 className='flex items-center gap-2'><LuUsers /> Publisher: <strong>{publisher}</strong></h1>
                    <h1 className='flex items-center gap-2'><IoDocumentOutline /> Pages : <strong>{totalPages}</strong></h1>
                </div>
                <div className='flex flex-col lg:flex-row gap-5 pt-3'>
                    <h1 className='flex items-center gap-2  px-2 py-1 bg-blue-300 text-blue-700 rounded-2xl'> Category: <strong> {category}</strong></h1>
                    <h1 className='flex items-center gap-2 bg-amber-200 text-amber-700 px-2 py-1 rounded-2xl'> Ratings : <strong>{rating}</strong></h1>
                </div>
                <div>
                    <button onClick={() => handleWishBookRemove(bookId)} className='btn btn-lg btn-warning'>Remove from Wish List</button>
                </div>
            </div>
        </div>
    );
};

export default WishBookCard;