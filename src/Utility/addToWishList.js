import { toast } from "react-toastify";

const getFromDB = () => {
    const storedBooksInDB = localStorage.getItem('books');
    if(storedBooksInDB) {
        const allReadListBooks = JSON.parse(storedBooksInDB);
        return allReadListBooks
    }
    return [];
}
const addToDB = (bookId, bookName) => {
    const storedBooks = getFromDB();
    if(storedBooks.includes(bookId)) {
        toast.error(`${bookName} Already Exist in the Read List`);
    } 
    else {
        storedBooks.push(bookId);
        const updatedBooksData = JSON.stringify(storedBooks);
        localStorage.setItem("books", updatedBooksData);
        toast.success(`${bookName} is added to Read List`);
    }
}
const removeFromList = (id) => {
    const listedBooks = getFromDB();
    const updatedListedBooks = listedBooks.filter(bookid => bookid !== id);
    localStorage.setItem("books", JSON.stringify(updatedListedBooks));
}
export {getFromDB, addToDB, removeFromList};