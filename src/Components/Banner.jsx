import React from 'react';
import bookImage from "../assets/books.jpg"

const Banner = () => {
    return (
        <div className='w-11/12 p-10 flex flex-col lg:flex-row justify-between bg-gray-200 mx-auto'>
            <div className='flex flex-col justify-center items-start gap-8'><h1 className='text-4xl font-semibold text-black'>Books to freshen up <br /> your bookshelf</h1>
            <button className='btn btn-success'>View The lIST</button></div>
            <div>
                <img  src={bookImage} alt="" />
            </div>
        </div>
    );
};

export default Banner;