import {configureStore} from "@reduxjs/toolkit";
import productSlice from "./slice/ProductSlice";
import BrandsSlice from "./slice/BrandsSlice";

export const store = configureStore({
    reducer: {
        products: productSlice,
        brands: BrandsSlice,
    }
});