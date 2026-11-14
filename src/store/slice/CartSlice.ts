
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type CartItem = {
    productId: number;
    variantId: number;
    name: string;
    price: number;
    image: string;
    size: number;
    color: string;
    stock: number;
    quantity: number;
};

type CartState = CartItem[];

const initialState: CartState = [
    {
        productId: 1,
        variantId: 101,
        name: "Nike Air Force 1 '07 SE Premium",
        price: 3519000,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&fit=crop&auto=format&q=80",
        size: 39,
        color: "White",
        stock: 5,
        quantity: 1
    },
    {
        productId: 2,
        variantId: 201,
        name: "Giày Chạy Bộ Nike Pegasus 40",
        price: 3519000,
        image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=400&fit=crop&auto=format&q=80",
        size: 41,
        color: "Black",
        stock: 10,
        quantity: 1
    }
];

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<CartItem>) => {
            const newItem = action.payload;

            if (newItem.stock <= 0) {
                return;
            }

            const existingItem = state.find(
                item =>
                    item.productId === newItem.productId &&
                    item.variantId === newItem.variantId
            );

            if (existingItem) {
                existingItem.quantity = Math.min(
                    existingItem.quantity + newItem.quantity,
                    existingItem.stock
                );
            } else {
                state.push({
                    ...newItem,
                    quantity: Math.max(1, Math.min(newItem.quantity, newItem.stock))
                });
            }
        },

        removeFromCart: (
            state,
            action: PayloadAction<{ productId: number; variantId: number }>
        ) => {
            return state.filter(
                item =>
                    item.productId !== action.payload.productId ||
                    item.variantId !== action.payload.variantId
            );
        },

        updateQuantity: (
            state,
            action: PayloadAction<{
                productId: number;
                variantId: number;
                quantity: number;
            }>
        ) => {
            const item = state.find(
                item =>
                    item.productId === action.payload.productId &&
                    item.variantId === action.payload.variantId
            );

            if (item) {
                item.quantity = Math.max(
                    1,
                    Math.min(action.payload.quantity, item.stock)
                );
            }
        },

        clearCart: () => []
    }
});

export const {
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart
} = cartSlice.actions;

export default cartSlice.reducer;
