import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../config/axiosInstance";


export const fetchEmployees =  createAsyncThunk(
    'employee/fetchEmployees',
    async (_,{rejectWithValue})=>{
        try {
            
            const response = await api.get('employees')
            // console.log(response)
            return response.data;
        } catch (error) {
            return rejectWithValue("something went wrong.")
        }
           
})
        //    employee/fetchEmployees/pending 
        //    employee/fetchEmployees/fulfilled
        //    employee/fetchEmployees/rejected 
        
        // Add Employee
        export const createEmployee = createAsyncThunk(
            'employee/createEmployee',
            async (payload,{rejectWithValue,dispatch}) => {

                try {
                   const response =  await api.post("employees",payload)
                   return response.data;
                    
                } catch (error) {
                   return rejectWithValue(
                    error.response?.data || "Failed to create employee"
                   );
                    
                }
            }
        )
// Delete Employee
        export const deleteEmployee = createAsyncThunk(
            'employee/deleteEmployee',
            async (id,{rejectWithValue,dispatch}) => {
                try {
                    
                    const response =  await api.delete(`employees/${id}`)
                    return response.data.id;
                  
                    
                } catch (error) {
                    return rejectWithValue(
                        error.response?.data || "Unable to delete Employee."
                    )
                }
            }
        )
// Update Employee
        export const updateEmployee = createAsyncThunk(
            'employee/updateEmployee',
            async ({id,details},{rejectWithValue}) => {
                try{
                    const response = await api.put(`employees/${id}`,details)
                    return response.data;
                }catch(error){
                    return rejectWithValue(
                        error.response?.data || "Failed to update Employee Details"
                    )
                }
            }
        )