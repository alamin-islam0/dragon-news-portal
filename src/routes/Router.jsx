import { createBrowserRouter } from "react-router";
import HomeLayouts from "../layouts/HomeLayouts";
import Home from "../components/Pages/Home";
import CategoryNews from "../components/Pages/CategoryNews";
import Login from "../components/Pages/Login";
import Register from "../components/Pages/Register";
import AuthLayout from "../layouts/AuthLayout";
import NewsPages from "../components/Pages/NewsPages";

const Router = createBrowserRouter (
    [
        {
            path: '/',
            element: <HomeLayouts></HomeLayouts>,
            children: [
                {
                    path: '',
                    element: <Home></Home>
                },
                {
                    path: "category/:id",
                    element: <CategoryNews></CategoryNews>,
                    loader: ()=> fetch('/news.json')
                }
            ]
        },
        {
            path: '/auth',
            element: <AuthLayout></AuthLayout>,
            children: [
                {
                    path: "/auth/login",
                    element: <Login></Login>,
                },
                {
                    path: "/auth/register",
                    element: <Register></Register>,
                }
            ]
        },
        {
            path: '/news-details/:id',
            element: <NewsPages></NewsPages>,
            loader: () => fetch("/news.json")
        },
        {
            path: '/*',
            element: <h2>Error Layout</h2>,
        }
    ]
)

export default Router