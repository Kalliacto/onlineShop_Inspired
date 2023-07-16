import { createAsyncThunk, createSlice, isPending, isRejected } from '@reduxjs/toolkit';
import { GOODS_URL } from '../../utils/api';

const initialState = {
    product: {},
    isLoading: false,
    error: null,
};

export const getProductInfo = createAsyncThunk(
    'product/getProductInfo',
    async (id, { fulfillWithValue, rejectWithValue }) => {
        try {
            const res = await fetch(`${GOODS_URL}/${id}`);
            const data = await res.json();
            return fulfillWithValue(data);
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

const productSlice = createSlice({
    name: 'product',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getProductInfo.fulfilled, (state, action) => {
            state.isLoading = false;
            state.product = action.payload;
        });
        builder.addMatcher(isPending(getProductInfo), (state) => {
            state.isLoading = true;
        });
        builder.addMatcher(isRejected(getProductInfo), (state, action) => {
            state.isLoading = false;
            state.error = action.payload.message;
        });
    },
});

export default productSlice.reducer;
