import { createAsyncThunk } from "@reduxjs/toolkit";
// Extra Reducer
const fetchUser = createAsyncThunk(
    'user/fetchUser',
    // payload from the function where you call it can be received here in async function (payload,thunkApi) thunkApi is an object 
    async (payload, { rejectWithValue }) => {

        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            const data = await response.json();
            console.log(data);
            return data;
        } catch (error) {
            // you can handle custom error it is available in the userSlice in rejected case as payload
            return rejectWithValue("Something went wrong")
        }

    }
)

export { fetchUser } // this is extra reducer. You can pass multiple reducers here
