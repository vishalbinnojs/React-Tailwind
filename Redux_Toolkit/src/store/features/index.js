import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice"
import userReducer from "./user/userSlice";

 const rootReducer = combineReducers({
    counter : counterReducer,
    user : userReducer,
})

export default rootReducer;