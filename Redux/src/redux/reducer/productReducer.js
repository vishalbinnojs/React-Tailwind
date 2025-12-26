// Constants
import { ADD_TO_PRODUCT,INCREMENT } from "../constants/productConstants";
// state
const initialState = {
    product : [],
    count : 0,
}


// reducer
 export const productReducer = (state = initialState,action) => {

    if(action.type === ADD_TO_PRODUCT){
        console.log(state,action.payload);
        return {
            ...state,
            product:[...state.product,action.payload]
        }
    }if(action.type === INCREMENT){
        console.log("Increment", state.count);

        return{
          ...state,
          count : state.count + 1,
        }
    }
    else{
        return state;
    }

}


