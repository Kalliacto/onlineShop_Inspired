import { combineReducers } from "redux";
import navigationSlices from "./slices/navigationSlices";
import colorSlice from "./slices/colorSlice";

export const rootReducer =combineReducers({
    navigation: navigationSlices,
    colors: colorSlice,
})