import { combineReducers } from "redux";
import navigationSlices from "./slices/navigationSlices";

export const rootReducer =combineReducers({
    navigation: navigationSlices,
})