import {configureStore} from "@reduxjs/toolkit";
import productSlice from "./slice/ProductSlice";
import BrandsSlice from "./slice/BrandsSlice";
import bannerSlice from "./slice/BannerSlice";
import cartReducer from "./slice/CartSlice";

export const store = configureStore({
    reducer: {
        products: productSlice,
        brands: BrandsSlice,
        banners: bannerSlice,
        cart: cartReducer,
    }
});