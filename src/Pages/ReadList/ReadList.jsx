import React, { useEffect, useState } from "react";
import { getFromDB } from "../../Utility/addToWishList";
import { useLoaderData } from "react-router";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ReadBooksList from "../../Components/ReadBooks/ReadBooksList";
import WishBooksList from "../../Components/WishBooks/WishBooksList";
import { getFromoDBForWishList } from "../../Utility/onlyAddToWishList";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const ReadList = () => {
  const [displaySort, setDisplaySort] = useState(false);
  const [sortType, setSortType] = useState("");
  const allBooks = useLoaderData();
  const [listedBooks, setlistedBooks] = useState([]);
  const [wishListedBooks, setWishListedBooks] = useState([]);
  useEffect(() => {
    // For read list
    const readList = getFromDB();
    const readListedBooks = [];
    for (let i = 0; i < readList.length; i++) {
      const readBook = allBooks.find((book) => book.bookId === readList[i]);
      readListedBooks.push(readBook);
    }
    setlistedBooks(readListedBooks);

    // For wishlist
    const wishListedBookofDB = getFromoDBForWishList();
    const wishListedBooksList = allBooks.filter((book) =>
      wishListedBookofDB.includes(book.bookId)
    );
    setWishListedBooks(wishListedBooksList);
  }, [allBooks]);

  const handleSortPageNum = () => {
    const newListedBooks = [...listedBooks].sort((a, b) => {
      return a.totalPages - b.totalPages;
    });
    setlistedBooks(newListedBooks);
    setDisplaySort(false);
    setSortType("Page Number");
  };

  const handleSortRating = () => {
    const newListedBooks = [...listedBooks].sort((a, b) => a.rating - b.rating);
    setlistedBooks(newListedBooks);
    setDisplaySort(false);
    setSortType("Rating");
  };

  const handleSortYear = () => {
    const newListedBooks = [...listedBooks].sort(
      (a, b) => a.yearOfPublishing - b.yearOfPublishing
    );
    setlistedBooks(newListedBooks);
    setDisplaySort(false);
    setSortType("Publishing Year");
  };

  return (
    <div className="w-11/12 mx-auto">
      <div className="flex flex-col items-center">
        <div className="w-full text-5xl font-bold p-10 bg-gray-300 text-center rounded-2xl">
          <h1>Books</h1>
        </div>
        <div className="py-5">
          <button
            onClick={() => setDisplaySort(!displaySort)}
            className="btn bg-green-500 text-white hover:bg-green-800 font-bold px-6 py-2 text-xl"
          >
            Sort By {`- ${sortType}`} {displaySort ? <IoIosArrowUp /> : <IoIosArrowDown />} 
            
          </button>
          <ul className={`${displaySort ? "" : "hidden"}`}>
            <li
              onClick={handleSortPageNum}
              className="px-3 py-1 bg-gray-300 m-1 cursor-pointer hover:bg-gray-600 hover:text-white"
            >
              Page Number
            </li>
            <li
              onClick={handleSortRating}
              className="px-3 py-1 bg-gray-300 m-1 cursor-pointer hover:bg-gray-600 hover:text-white"
            >
              Rating
            </li>
            <li
              onClick={handleSortYear}
              className="px-3 py-1 bg-gray-300 m-1 cursor-pointer hover:bg-gray-600 hover:text-white"
            >
              Publishing Year
            </li>
          </ul>
        </div>
      </div>
      <Tabs>
        <TabList>
          <Tab>
            <h1 className="text-xl text-gray-600">Read List</h1>
          </Tab>
          <Tab>
            <h1 className="text-xl text-gray-600">WishList</h1>
          </Tab>
        </TabList>

        <TabPanel>
          <ReadBooksList
            allBooks={allBooks}
            listedBooks={listedBooks}
            setlistedBooks={setlistedBooks}
          ></ReadBooksList>
        </TabPanel>
        <TabPanel>
          <WishBooksList
            allBooks={allBooks}
            wishListedBooks={wishListedBooks}
            setWishListedBooks={setWishListedBooks}
          ></WishBooksList>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadList;
