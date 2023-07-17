import { createSlice } from '@reduxjs/toolkit';

const cartItems = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];

const initialState = {
    cartItems,
    countItems: cartItems.length,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const { id, color, size, count } = action.payload;
            const item = state.cartItems.find(
                (el) => el.id === id && el.color === color && el.size === size
            );
            if (item) {
                item.count = count;
            } else {
                state.cartItems.push(action.payload);
            }
            localStorage.setItem('cart', JSON.stringify(state.cartItems));
        },
        removeFromCart(state, action) {
            const { id, color, size, count } = action.payload;
            const itemIndex = state.cartItems.findIndex(
                (el) => el.id === id && el.color === color && el.size === size
            );

            if (itemIndex !== -1) {
                state.cartItems.splice(itemIndex, 1);
            }
            localStorage.setItem('cart', JSON.stringify(state.cartItems));
        },
    },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
