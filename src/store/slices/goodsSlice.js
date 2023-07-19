import { createAsyncThunk, createSlice, isPending, isRejected } from '@reduxjs/toolkit';
import { GOODS_URL } from '../../utils/api';

const initialState = {
    goods: [],
    isLoading: false,
    error: null,
    page: 0,
    pages: 0,
    totalCount: null,
};

export const getGender = createAsyncThunk(
    'goods/getGender',
    async (gender, { fulfillWithValue, rejectWithValue }) => {
        try {
            const url = new URL(GOODS_URL);
            url.searchParams.append('gender', gender);
            const res = await fetch(url);
            const data = await res.json();
            return fulfillWithValue(data);
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const getCategory = createAsyncThunk(
    'goods/getCategory',
    async (param, { fulfillWithValue, rejectWithValue }) => {
        try {
            const url = new URL(GOODS_URL);
            for (const key in param) {
                url.searchParams.append(key, param[key]);
            }

            const res = await fetch(url);
            const data = await res.json();
            return fulfillWithValue(data);
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const getAll = createAsyncThunk(
    'goods/getAll',
    async (param = [], { fulfillWithValue, rejectWithValue }) => {
        try {
            const url = new URL(GOODS_URL);
            for (const key in param) {
                url.searchParams.append(key, param[key]);
            }
            url.searchParams.append('count', 'all');
            const res = await fetch(url);
            const data = await res.json();
            return fulfillWithValue(data);
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

const goodsSlice = createSlice({
    name: 'goods',
    initialState,
    reducers: {
        setPage: (state, action) => {
            state.page = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getGender.fulfilled, (state, action) => {
            state.isLoading = false;
            state.goods = action.payload;
            state.page = 0;
            state.totalCount = null;
        });
        builder.addCase(getCategory.fulfilled, (state, action) => {
            state.isLoading = false;
            state.goods = action.payload.goods;
            //state.page = action.payload.page;
            state.pages = action.payload.pages;
            state.totalCount = action.payload.totalCount;
        });
        builder.addCase(getAll.fulfilled, (state, action) => {
            state.isLoading = false;
            state.goods = action.payload;
            state.page = 0;
            state.totalCount = null;
        });
        builder.addMatcher(isPending(getGender, getCategory), (state) => {
            state.isLoading = true;
        });
        builder.addMatcher(isRejected(getGender, getCategory), (state, action) => {
            state.isLoading = false;
            state.error = action.payload.message;
        });
    },
});

export const { setPage } = goodsSlice.actions;
export default goodsSlice.reducer;
