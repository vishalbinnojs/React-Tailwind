

import { ADD_TO_CART } from "../constants/cartConstants"

const cartState = {
    item: 0,
}

export const cartReducer = (state=cartState, action) => {
    if(action.type === ADD_TO_CART){
        console.log("Added to Cart Successfully",state.item);

        return {
            ...state,
            item: state.item + 1,
        }
    }else{
        return state;
    }
}

