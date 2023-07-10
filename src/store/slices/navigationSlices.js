import { createAsyncThunk, createSlice, isPending, isRejected } from '@reduxjs/toolkit';
import { CATEGORY_URL } from '../../utils/api';

const initialState = {
    activeGender: 'women',
    categories: {},
    genderList: [],
    isLoading: false,
    error: null,
};

export const getCategories = createAsyncThunk(
    'navigation/getCategories',
    async (_, { fulfillWithValue, rejectWithValue }) => {
        try {
            const categories = await fetch(CATEGORY_URL);
            const data = await categories.json();
            return fulfillWithValue(data);
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

const navigationSlice = createSlice({
    name: 'navigation',
    initialState,
    reducers: {
        setActiveGender: (state, action) => {
            state.activeGender = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getCategories.fulfilled, (state, action) => {
            state.isLoading = false;
            state.categories = action.payload;
            state.genderList = Object.keys(action.payload);
        });
        builder.addMatcher(isPending(getCategories), (state) => {
            state.isLoading = true;
        });
        builder.addMatcher(isRejected(getCategories), (state, action) => {
            state.isLoading = false;
            state.error = action.payload.message;
        });
    },
});

export const { setActiveGender } = navigationSlice.actions;
export default navigationSlice.reducer;
