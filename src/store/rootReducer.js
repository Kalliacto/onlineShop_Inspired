import { combineReducers } from 'redux';
import navigationSlices from './slices/navigationSlices';
import colorSlice from './slices/colorSlice';
import goodsSlice from './slices/goodsSlice';

export const rootReducer = combineReducers({
    navigation: navigationSlices,
    colors: colorSlice,
    goods: goodsSlice,
});
