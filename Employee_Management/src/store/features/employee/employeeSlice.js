import {createSlice} from "@reduxjs/toolkit";
import { createEmployee, fetchEmployees, deleteEmployee,updateEmployee } from "../thunk/employeesThunk";

const initialState = {
    employees : [],
    loading: false,
    error:null,
    
}
const employeeSlice = createSlice({
    name: 'employee',
    initialState,
    reducers : {
},
    extraReducers : (addBuilder) => {
addBuilder.addCase(fetchEmployees.pending, (state,action)=>{
    state.loading = true;
    state.error = null;
}),
addBuilder.addCase(fetchEmployees.fulfilled, (state,action)=>{ 
    state.loading = false;
    state.employees = action.payload;
}),
addBuilder.addCase(fetchEmployees.rejected, (state,action)=>{
    state.loading = false;
    state.error = action.payload;
}),
addBuilder.addCase(createEmployee.pending, (state,action)=>{
    state.loading = true;
    state.error = null;
}),
addBuilder.addCase(createEmployee.fulfilled, (state,action)=>{    
    state.loading = false;
    state.employees.push(action.payload)
}),
addBuilder.addCase(createEmployee.rejected, (state,action)=>{
    state.loading = false;
    state.error = action.payload;
}),
//delete
addBuilder.addCase(deleteEmployee.pending, (state,action)=>{
    state.loading = true;
    state.error = null;
}),
addBuilder.addCase(deleteEmployee.fulfilled, (state,action)=>{    
    console.log(action.payload);
    
    state.loading = false;
    state.employees = state.employees.filter(
        emp => emp.id !== action.payload
    )
}),
addBuilder.addCase(deleteEmployee.rejected, (state,action)=>{
    state.loading = false;
    state.error = action.payload;
}),
//update
addBuilder.addCase(updateEmployee.pending, (state,action)=>{
    state.loading = true;
    state.error = null;
}),
addBuilder.addCase(updateEmployee.fulfilled, (state,action)=>{ 
    state.loading = false;
    state.employees = state.employees.map(
        emp => emp.id === action.payload.id ? action.payload : emp
    )
   
}),
addBuilder.addCase(updateEmployee.rejected, (state,action)=>{
    state.loading = false;
    state.error = action.payload;
})
    }
})

export default employeeSlice.reducer;