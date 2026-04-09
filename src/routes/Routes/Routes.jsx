import { createBrowserRouter } from "react-router";
import Home from "../../layouts/Home/Home";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Home
    },
    {
        path: '/auth',
        element: <h2>Auth Layout</h2>
    },
    {
        path: '/news',
        element: <h2>News Layout</h2>
    },
    {
        path: '/*',
        element: <h2>Error 404</h2>
    }
])