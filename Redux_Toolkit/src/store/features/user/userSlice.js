import { createSlice } from "@reduxjs/toolkit"
import { fetchUser } from '../thunk/extraReducers';

const initialState = {
    users: [],
    loading: false,
    error: null,
}
// user/fetchUser/pending
// user/fetchUser/fulfilled
// user/fetchUser/rejected

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {

    },
    extraReducers: (addBuilder) => {

        addBuilder.addCase(fetchUser.pending, (state, action) => {
            state.loading = true
            state.error = null
        }),
        addBuilder.addCase(fetchUser.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload;
                // data returned from fetchUser is set to the users array
        }),
        addBuilder.addCase(fetchUser.rejected, (state, action) => {
                console.log(action);
                console.log(action.payload);
                state.loading = false;
                state.error = action.payload;
                // if fetchUser got rejected then custom error come from rejectedWithValue

        })
    }
})
export default userSlice.reducer;




