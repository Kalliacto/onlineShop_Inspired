import { createSlice } from '@reduxjs/toolkit';

const favorite = localStorage.getItem('favorite')
    ? JSON.parse(localStorage.getItem('favorite'))
    : [];

const initialState = {
    favorite,
    countFavorite: favorite.length,
};

const favoriteSlice = createSlice({
    name: 'favorite',
    initialState,
    reducers: {
        addToFavorite(state, action) {
            const id = action.payload.id;
            if (!state.favorite.includes(id)) {
                state.favorite.push(id);
            }
            localStorage.setItem('favorite', JSON.stringify(state.favorite));
            state.countFavorite = state.favorite.length;
        },
        removeFromFavorite(state, action) {
            const id = action.payload.id;
            const index = state.favorite.indexOf(id);
            if (index !== -1) {
                state.favorite.splice(index, 1);
            }
            localStorage.setItem('favorite', JSON.stringify(state.favorite));
            state.countFavorite = state.favorite.length;
        },
    },
});

export const { addToFavorite, removeFromFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
