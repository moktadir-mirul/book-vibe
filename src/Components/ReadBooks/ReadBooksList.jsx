import React from "react";
import ReadBookCard from "./ReadBookCard";

const ReadBooksList = ({ listedBooks, setlistedBooks }) => {
    console.log(listedBooks);
  return (
    <div>
      {listedBooks.map((book) => {
        console.log(book);
        return (
        <ReadBookCard
          setlistedBooks={setlistedBooks}
          key={book.bookId}
          book={book}
        ></ReadBookCard>)
        
})}
    </div>
  );
};

export default ReadBooksList;
