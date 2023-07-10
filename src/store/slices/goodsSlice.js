import { createAsyncThunk, createSlice, isPending, isRejected } from '@reduxjs/toolkit';
import { GOODS_URL } from '../../utils/api';

const initialState = {
    goods: [],
    isLoading: false,
    error: null,
};

export const getGoods = createAsyncThunk(
    'goods/getGoods',
    async (gender, { fulfillWithValue, rejectWithValue }) => {
        try {
            const data = await fetch(`${GOODS_URL}?gender=${gender}`);
            const goods = await data.json();
            return fulfillWithValue(goods);
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

const goodsSlice = createSlice({
    name: 'goods',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getGoods.fulfilled, (state, action) => {
            state.isLoading = false;
            state.goods = action.payload;
        });
        builder.addMatcher(isPending(getGoods), (state) => {
            state.isLoading = true;
        });
        builder.addMatcher(isRejected(getGoods), (state, action) => {
            state.isLoading = false;
            state.error = action.payload.message;
        });
    },
});

export default goodsSlice.reducer;
