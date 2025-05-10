import { toast } from "react-toastify";

const getFromoDBForWishList = () => {
    const wishedBooks = localStorage.getItem("wishedBooks");
    if(wishedBooks) {
        const allWishListedBooks = JSON.parse(wishedBooks);
        return allWishListedBooks;
    }
    return [];
}

const addToDBWishList = (bookId, bookName) => {
    const getWishedBooks = getFromoDBForWishList();
    if(getWishedBooks.includes(bookId)) {
        toast.error(`${bookName} is already in the wishlist.`)
    }
    else {
        getWishedBooks.push(bookId);
        const allWishedBooksId = JSON.stringify(getWishedBooks);
        localStorage.setItem("wishedBooks", allWishedBooksId);
        toast(`${bookName} added to wish list.`)
    }
}
 const removeFromWishList = (id) => {
    const allWishBooks = getFromoDBForWishList();
    const updatedWishList = allWishBooks.filter(bookid => bookid !== id);
    localStorage.setItem("wishedBooks", JSON.stringify(updatedWishList));
 }
export {addToDBWishList, getFromoDBForWishList, removeFromWishList};