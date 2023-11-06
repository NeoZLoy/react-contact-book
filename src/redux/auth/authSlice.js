import { createSlice } from "@reduxjs/toolkit"
import { register, login, logOut, refreshUser} from "./operations";

const authSlice = createSlice({
    name: 'auth',
    initialState:{
        user: {
            name: null,
            email: null
        },
        isLogged: false,
        token: null,
        isRefreshing: false,
        isLoading: false,
        error: null
    },
    extraReducers: builder => {
        builder
        .addCase(register.pending, (state, action) => 
        {state.isLoading = true})
        .addCase(register.fulfilled, (state, action)=> {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLogged = true;
            state.isLoading = false;
        })
        .addCase(register.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        })
        .addCase(login.pending, (state, action) => 
        {state.isLoading = true})
        .addCase(login.fulfilled, (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLogged = true;
            state.isLoading = false;
        })
        .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        })
        .addCase(logOut.pending, (state, action) => {state.isLoading = true})
        .addCase(logOut.fulfilled, (state, action) => {
            state.isLogged = false;
            state.user.name = null;
            state.user.email = null;
            state.user.password = null;
            state.token = null;
            state.isLoading = false;
        })
        .addCase(logOut.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        })
        .addCase(refreshUser.fulfilled, (state, action) => {
            state.user = action.payload;
            if (state.token) {
                state.isLogged = true;
            }
        })
    }
})

export const authReducer = authSlice.reducer;