import { createBrowserRouter } from "react-router";
import HomeLayout from "../../layouts/HomeLayout/HomeLayout";
import Home from "../../pages/Home/Home";
import CategoryNews from "../../pages/CategoryNews/CategoryNews";
import AuthLayout from "../../layouts/AuthLayout/AuthLayout";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import NewsDetails from "../../pages/NewsDetails/NewsDetails";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      {
        path: "",
        element: <Home></Home>,
      },
      {
        path: "/category/:id",
        element: <CategoryNews></CategoryNews>,
        loader: () => fetch("/news.json"),
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/news-details/:id",
    element: (
      <PrivateRoutes>
        <NewsDetails></NewsDetails>
      </PrivateRoutes>
    ),
    loader: () => fetch("/news.json"),
  },
  {
    path: "/*",
    element: <h2>Error 404</h2>,
  },
]);
