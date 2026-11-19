import {configureStore} from "@reduxjs/toolkit";
import productSlice from "./slice/ProductSlice";
import BrandsSlice from "./slice/BrandsSlice";
import bannerSlice from "./slice/BannerSlice";
import cartReducer from "./slice/CartSlice";
import { getCartStorageKey, getCurrentUserId } from "./slice/CartSlice";
export const store = configureStore({
    reducer: {
        products: productSlice,
        brands: BrandsSlice,
        banners: bannerSlice,
        cart: cartReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;

store.subscribe(() => {
    const userId = getCurrentUserId();
    const items = store.getState().cart;

    localStorage.setItem(
        getCartStorageKey(userId),
        JSON.stringify({
            userId,
            items
        })
    );
});
