import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    value : 0,
    name: "vishal"
}
const counterSlice = createSlice({
    name:"counter",
    initialState : initialState,
    reducers : {
increment : (state,action) => {
    state.value += 1
},
decrement : (state,action) => {
    if(state.value <= 0) return;
    state.value -= 1
},
changeByValue : (state,action) => {
    console.log(action);
    
    state.value = action.payload
},
changeName : (state,action) => {
    state.name = action.payload
}
    }
})

export const {increment,decrement,changeByValue,changeName} = counterSlice.actions;
export default counterSlice.reducer;