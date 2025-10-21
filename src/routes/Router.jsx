import { createBrowserRouter } from "react-router";
import HomeLayouts from "../layouts/HomeLayouts";
import Home from "../components/Pages/Home";
import CategoryNews from "../components/Pages/CategoryNews";
import Login from "../components/Pages/Login";
import Register from "../components/Pages/Register";
import AuthLayout from "../layouts/AuthLayout";

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
            path: '/news',
            element: <h2>News Layout</h2>,
        },
        {
            path: '/*',
            element: <h2>Error Layout</h2>,
        }
    ]
)

export default Router