import { createBrowserRouter } from "react-router";
import HomeLayout from "../../layouts/HomeLayout/HomeLayout";
import Home from "../../pages/Home/Home";
import CategoryNews from "../../pages/CategoryNews/CategoryNews";
import AuthLayout from "../../layouts/AuthLayout/AuthLayout";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";

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
                element: <CategoryNews></CategoryNews>,
                loader: ()=>fetch('/news.json')
            }
        ]
    },
    {
        path: '/auth',
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: '/auth/login',
                element: <Login></Login>
            },
            {
                path: '/auth/register',
                element: <Register></Register>
            }
        ]
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