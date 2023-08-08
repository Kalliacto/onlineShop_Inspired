import { createAsyncThunk, createSlice, isPending, isRejected } from '@reduxjs/toolkit';
import { ORDER_URL } from '../../utils/api';

const cartItems = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];

const initialState = {
    cartItems,
    countItems: cartItems.length,
    orderStatus: 'idle',
    order: {},
    error: null,
    total: 0,
};

export const sendOrder = createAsyncThunk(
    'cart/sendOrder',
    async (data, { fulfillWithValue, rejectWithValue }) => {
        try {
            const url = new URL(ORDER_URL);
            const res = await fetch(url, {
                method: 'POST',
                body: JSON.stringify(data),
            }).then((res) => res.json());
            return fulfillWithValue(res);
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

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
                state.cartItems.push({ id, color, size, count });
            }
            localStorage.setItem('cart', JSON.stringify(state.cartItems));
            state.countItems = state.cartItems.length;
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
            state.countItems = state.cartItems.length;
        },
        clearCart(state) {
            state.cartItems = [];
            localStorage.setItem('cart', JSON.stringify(state.cartItems));
            state.countItems = state.cartItems.length;

            state.orderStatus = 'idle';
            state.order = {};
        },
    },
    extraReducers: (builder) => {
        builder.addCase(sendOrder.fulfilled, (state, action) => {
            state.orderStatus = 'success';
            state.order = action.payload;

            state.error = null;
        });
        builder.addMatcher(isPending(sendOrder), (state, action) => {
            state.orderStatus = 'loading';
            state.order = {};
            state.error = null;
        });
        builder.addMatcher(isRejected(sendOrder), (state, action) => {
            state.orderStatus = 'failed';
            state.order = {};
            state.error = action.payload.message;
        });
    },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
