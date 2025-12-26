
import {combineReducers} from "redux"
import { productReducer } from "./productReducer";
import { cartReducer } from "./cartReducer";

const rootReducer = combineReducers(
    {
         // productReducer: productReducer,
        productReducer, cartReducer
    }
);
export default rootReducer;