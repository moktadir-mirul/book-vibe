import React, { useEffect, useState } from "react";
import { getFromDB } from "../../Utility/addToWishList";
import { useLoaderData } from "react-router";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import ReadBooksList from "../../Components/ReadBooks/ReadBooksList";
import WishBooksList from "../../Components/WishBooks/WishBooksList";
import { getFromoDBForWishList } from "../../Utility/onlyAddToWishList";


const ReadList = () => {
  const allBooks = useLoaderData();
  const [listedBooks, setlistedBooks] = useState([]);
  const [wishListedBooks, setWishListedBooks] = useState(getFromoDBForWishList())
  useEffect(() => {
    const readList = getFromDB();
    const readListedBooks = [];
    for (let i = 0; i < readList.length; i++) {
      const readBook = allBooks.find((book) => book.bookId === readList[i]);
      readListedBooks.push(readBook);
    }
    setlistedBooks(readListedBooks);
    const wishListedBookofDB = getFromoDBForWishList();
    const wishListedBooksList = allBooks.filter((book) => wishListedBookofDB.includes(book.bookId));
    setWishListedBooks(wishListedBooksList);
  
  }, [allBooks]);
  console.log(listedBooks);
  console.log(wishListedBooks);
  return (
    <div className="w-11/12 mx-auto">
      <div className="flex flex-col items-center">
        <div className="w-full text-5xl font-bold p-10 bg-gray-300 text-center rounded-2xl">
          <h1>Books</h1>
        </div>
        <div className="py-5">
          <button className="btn bg-green-500 text-white hover:bg-green-800 font-bold px-6 py-2">Sort By</button>
        </div>
      </div>
      <Tabs>
        <TabList>
          <Tab><h1 className="text-xl text-gray-600">Read List</h1></Tab>
          <Tab><h1 className="text-xl text-gray-600">WishList</h1></Tab>
        </TabList>

        <TabPanel>
          <ReadBooksList listedBooks={listedBooks}></ReadBooksList>
        </TabPanel>
        <TabPanel>
          <WishBooksList wishListedBooks={wishListedBooks}></WishBooksList>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadList;
