import {createBrowserRouter} from "react-router-dom";
import {Layout} from "./Layout";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
export const router = createBrowserRouter([
    {
        path: '/',
        element:<Layout />,
        errorElement: <Error />,
        children: [
            {
                index : true,
                element: <Home />
            },
            {
                path: "cart",
                element: <Cart />
            }
        ]
    }
])