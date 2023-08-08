import { createSlice } from '@reduxjs/toolkit';

const statusServerSlice = createSlice({
    name: 'statusServer',
    initialState: {
        status: true,
    },
    reducers: {
        setStatusServer(state, { payload }) {
            state.status = payload;
        },
    },
});

export const { setStatusServer } = statusServerSlice.actions;
export default statusServerSlice.reducer;
