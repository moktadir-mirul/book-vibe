import { toast } from "react-toastify";

const getFromoDBForWishList = () => {
    const wishedBooks = localStorage.getItem("wishedBooks");
    if(wishedBooks) {
        return JSON.parse(wishedBooks);
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

export {addToDBWishList, getFromoDBForWishList};