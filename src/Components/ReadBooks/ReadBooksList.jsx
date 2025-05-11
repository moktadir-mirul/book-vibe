import React from "react";
import ReadBookCard from "./ReadBookCard";

const ReadBooksList = ({ listedBooks, setlistedBooks, allBooks }) => {
  if(listedBooks.length <= 0) {
        return <div className='w-full flex justify-center text-3xl font-bold py-5 text-red-900'><h1>No Books Found in the Read List</h1></div>
    }
  return (
    <div>
      {listedBooks.map((book) => {
        return (
        <ReadBookCard
        allBooks={allBooks}
          setlistedBooks={setlistedBooks}
          key={book.bookId}
          book={book}
        ></ReadBookCard>)
        
})}
    </div>
  );
};

export default ReadBooksList;
