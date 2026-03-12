import {combineReducers } from "redux";
import { weatherReducer } from "./reducers/weatherReducer";

const rootReducer = combineReducers({
     weatherReducer
})

export default rootReducer;