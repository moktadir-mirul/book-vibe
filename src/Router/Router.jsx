import { createBrowserRouter } from "react-router";
import App from "../App";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
    },
    {
        path: "/about",
        element: <h1>This is ABount page.</h1>
    }
])