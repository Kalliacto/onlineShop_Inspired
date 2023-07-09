import { createAsyncThunk, createSlice, isPending, isRejected } from '@reduxjs/toolkit';
import { COLORS_URL } from '../../utils/api';

const initialState = {
    colorList: [],
    isLoading: false,
    error: null,
};

export const getColors = createAsyncThunk(
    'colors/getColors',
    async (_, { fulfillWithValue, rejectWithValue }) => {
        try {
            const data = await fetch(COLORS_URL);
            const colors = await data.json();
            return fulfillWithValue(colors);
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

const colorSlice = createSlice({
    name: 'color',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getColors.fulfilled, (state, action) => {
            state.isLoading = false;
            state.colorList = action.payload;
            console.log(action.payload);
        });
        builder.addMatcher(isPending(getColors), (state) => {
            state.isLoading = true;
        });
        builder.addMatcher(isRejected(getColors), (state, action) => {
            state.isLoading = false;
            console.log(action.payload.message);
        });
    },
});

export default colorSlice.reducer;
