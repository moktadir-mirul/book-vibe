import { createBrowserRouter } from "react-router";
import App from "../App";
import Footer from "../Components/Footer";
import Home from "../Pages/Home/Home";
import BookDetails from "../Components/BookDetails";
import ReadList from "../Pages/ReadList/ReadList";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      { index: true, Component: Home },
      { path: "/readlist", Component: ReadList },
      {
        path: "/bookDetails/:id",
        loader: () => fetch("/booksData.json"),
        Component: BookDetails,
        hydrateFallbackElement: (
          <div className="flex justify-center py-14">
            <span className="loading loading-spinner loading-xl"></span>
          </div>
        ),
      },
    ],
  },
]);
