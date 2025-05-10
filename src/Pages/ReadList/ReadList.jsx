import React, { useEffect, useState } from "react";
import { getFromDB } from "../../Utility/addToWishList";
import { useLoaderData } from "react-router";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import ReadBooksList from "../../Components/ReadBooks/ReadBooksList";
import WishBooksList from "../../Components/WishBooks/WishBooksList";


const ReadList = () => {
  const allBooks = useLoaderData();
  const [listedBooks, setlistedBooks] = useState([]);
  useEffect(() => {
    const readList = getFromDB();
    const readListedBooks = [];
    for (let i = 0; i < readList.length; i++) {
      const readBook = allBooks.find((book) => book.bookId === readList[i]);
      readListedBooks.push(readBook);
    }
    setlistedBooks(readListedBooks);
  }, [allBooks]);
  console.log(listedBooks);
  return (
    <div className="w-11/12 mx-auto">
      <Tabs>
        <TabList>
          <Tab>Read List</Tab>
          <Tab>WishList</Tab>
        </TabList>

        <TabPanel>
          <ReadBooksList listedBooks={listedBooks}></ReadBooksList>
        </TabPanel>
        <TabPanel>
          <WishBooksList></WishBooksList>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadList;
