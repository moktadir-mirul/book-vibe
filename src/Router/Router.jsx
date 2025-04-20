import { createBrowserRouter } from "react-router";
import App from "../App";
import Footer from "../Components/Footer";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
    },
    {
        path: "/ABout",
        element: <Footer></Footer>
    }
])