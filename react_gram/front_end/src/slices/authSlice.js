import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authServices from "../services/authServices"

const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
    user: user ? user : null,
    error: false,
    success: false,
    loading: false,
};

//Register an user nd sign in
export const register = createAsyncThunk(
    "auth/register", 
    async (user, thunkAPI) => {

        const data = await authServices.register(user);

        //check for errors
        if(data.errors){
            return thunkAPI.rejectWithValue(data.errors[0])
        }

        return data;
    } 
);

// sign in an user
export const login = createAsyncThunk(
    "auth/login", 
    async (user, thunkAPI) => {

        const data = await authServices.login(user);

        //check for errors
        if(data.errors){
            return thunkAPI.rejectWithValue(data.errors[0])
        }

        return data;
    } 
);

// Logout an user
export const logout = createAsyncThunk("auth/logout", async () => {
    await authServices.logout();
})

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        reset: (state) =>{
            state.loading = false;
            state.error = false;
            state.success = false;
        },
    },
    extraReducers:(builder) => {
        builder
        .addCase(register.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(register.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.success = true;
            state.user = action.payload;
        })
        .addCase(register.rejected, (state,action) => {
            state.loading = false;
            state.error = action.payload;
            state.user = null;
        })
        .addCase(logout.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.success = true;
            state.user = null;
        })
        .addCase(login.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(login.fulfilled, (state, action) => {
            state.loading = false;
            state.error = true;
            state.success = null;
            state.user = action.payload;
        })
        .addCase(login.rejected, (state,action) => {
            state.loading = false;
            state.error = action.payload;
            state.user = null;
        })
    }

})

export const {reset} = authSlice.actions
export default authSlice.reducer;