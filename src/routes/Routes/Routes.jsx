import { createBrowserRouter } from "react-router";
import HomeLayout from "../../layouts/HomeLayout/HomeLayout";
import Home from "../../pages/Home/Home";
import CategoryNews from "../../pages/CategoryNews/CategoryNews";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: HomeLayout,
        children: [
            {
                path: '',
                element: <Home></Home>
            },
            {
                path: '/category/:id',
                element: <CategoryNews></CategoryNews>
            }
        ]
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