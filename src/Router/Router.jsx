import { createBrowserRouter } from "react-router";
import App from "../App";
import Footer from "../Components/Footer";
import Home from "../Pages/Home/Home";
import BookDetails from "../Components/BookDetails";
import ReadList from "../Pages/ReadList/ReadList";
import Fallback from "../Components/Fallback";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      { index: true, Component: Home },
      { path: "/readlist", 
        loader: () => fetch("/booksData.json"),
        Component: ReadList,
        HydrateFallback: Fallback
      },
      {
        path: "/bookDetails/:id",
        loader: () => fetch("/booksData.json"),
        Component: BookDetails,
        HydrateFallback: Fallback
      },
    ],
  },
]);
