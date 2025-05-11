import Swal from "sweetalert2";

const getFromDB = () => {
  const storedBooksInDB = localStorage.getItem("books");
  if (storedBooksInDB) {
    const allReadListBooks = JSON.parse(storedBooksInDB);
    return allReadListBooks;
  }
  return [];
};
const addToDB = (bookId, bookName) => {
  const storedBooks = getFromDB();
  if (storedBooks.includes(bookId)) {
    Swal.fire({
      icon: "error",
      title: `${bookName} is already in the read list.`,
      text: "The book already exists in the read list. Try removing it first!",
    });
  } else {
    storedBooks.push(bookId);
    const updatedBooksData = JSON.stringify(storedBooks);
    localStorage.setItem("books", updatedBooksData);
    Swal.fire({ title: `${bookName} added successfully.`, icon: "success" });
  }
};
const removeFromList = (id) => {
  const listedBooks = getFromDB();
  const updatedListedBooks = listedBooks.filter((bookid) => bookid !== id);
  localStorage.setItem("books", JSON.stringify(updatedListedBooks));
};
export { getFromDB, addToDB, removeFromList };
