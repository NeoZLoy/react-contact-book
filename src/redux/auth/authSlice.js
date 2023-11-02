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
    },
    extraReducers: builder => {
        builder
        .addCase(register.pending, (state, action) => state)
        .addCase(register.fulfilled, (state, action)=> {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLogged = true;
        })
        .addCase(register.rejected, (state, action) => state)
        .addCase(login.pending, (state, action) => state)
        .addCase(login.fulfilled, (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLogged = true;
        })
        .addCase(login.rejected, (state, action) => state)
        .addCase(logOut.pending, (state, action) => state)
        .addCase(logOut.fulfilled, (state, action) => {
            state.isLogged = false;
            state.user.name = null;
            state.user.email = null;
            state.user.password = null;
            state.token = null;
        })
        .addCase(logOut.rejected, (state, action) => state)
        .addCase(refreshUser.fulfilled, (state, action) => {
            state.user = action.payload;
            state.isLogged = true;
        })
    }
})

export const authReducer = authSlice.reducer;