import {createBrowserRouter} from "react-router-dom";
import {Layout} from "./Layout";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import {WishListPage} from "../pages/WishListPage";
import {LoginPage} from "../pages/LoginPage";
import {ProductListPage} from "../pages/ProductListPage";
import {RegisterPage} from "../pages/RegisterPage";
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
            },

            {
                path: "checkout",
                element: <Checkout />
            },

            {
                path: "wish-list",
                element: <WishListPage />
            },
            {
                path: "login",
                element: <LoginPage />
            },
            {
                path: "register",
                element: <RegisterPage />
            },

            {
                path: "product-list",
                element: <ProductListPage />
            }

        ]
    }
])