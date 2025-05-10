import { toast } from "react-toastify";

const getFromDB = () => {
    const storedBooksInDB = localStorage.getItem('books');
    if(storedBooksInDB) {
        return JSON.parse(storedBooksInDB);
    }
    return [];
}
const addToDB = (bookId, bookName) => {
    const storedBooks = getFromDB();
    if(storedBooks.includes(bookId)) {
        toast.error('The Book Already Exist in the Read List');
    } 
    else {
        storedBooks.push(bookId);
        const updatedBooksData = JSON.stringify(storedBooks);
        localStorage.setItem("books", updatedBooksData);
        toast.success(`${bookName} is added to Read List`);
    }
}
export {getFromDB, addToDB};