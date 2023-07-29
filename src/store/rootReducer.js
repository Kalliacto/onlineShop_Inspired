import { combineReducers } from 'redux';
import navigationSlices from './slices/navigationSlices';
import colorSlice from './slices/colorSlice';
import goodsSlice from './slices/goodsSlice';
import productSlice from './slices/productSlice';
import favoriteSlice from './slices/favoriteSlice';
import cartSlice from './slices/cartSlice';
import statusServerSlice from './slices/statusServerSlice';

export const rootReducer = combineReducers({
    navigation: navigationSlices,
    colors: colorSlice,
    goods: goodsSlice,
    product: productSlice,
    favorite: favoriteSlice,
    cart: cartSlice,
    statusServer: statusServerSlice,
});
