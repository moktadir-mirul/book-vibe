import React, { Suspense } from 'react';
import Banner from '../../Components/Banner';

import BookCards from '../../Components/BookCards';

const Home = () => {
    const allBooksData = fetch('booksData.json').then(res => res.json())
    return (
        <div>
            <Banner></Banner>
            <h1 className='py-10 text-4xl font-semibold text-center'>Books</h1>
            <Suspense>
                <BookCards allBooksData={allBooksData}></BookCards>
            </Suspense>
        </div>
    );
};

export default Home;