import { createBrowserRouter } from "react-router";
import HomeLayouts from "../layouts/HomeLayouts";
import Home from "../components/Pages/Home";
import CategoryNews from "../components/Pages/CategoryNews";

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
            element: <h2>Authentication Layout</h2>,
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