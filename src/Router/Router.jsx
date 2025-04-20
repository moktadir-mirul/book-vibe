import { createBrowserRouter } from "react-router";
import App from "../App";
import Footer from "../Components/Footer";
import Home from "../Pages/Home/Home";
import BookDetails from "../Components/BookDetails";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      { index: true, Component: Home },
      { path: "ABout", Component: Footer},
      {path: "/bookDetails/:id", loader: () => fetch('./booksData.json'),  Component: BookDetails}
    ],
  }
]);
