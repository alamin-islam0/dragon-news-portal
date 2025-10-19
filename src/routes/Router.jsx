import { createBrowserRouter } from "react-router";
import HomeLayouts from "../layouts/HomeLayouts";

const Router = createBrowserRouter (
    [
        {
            path: '/',
            element: <HomeLayouts></HomeLayouts>,
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