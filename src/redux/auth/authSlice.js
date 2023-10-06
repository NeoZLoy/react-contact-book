import { createSlice } from "@reduxjs/toolkit"
import { register, login} from "./operations";

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
    }
})

export const authReducer = authSlice.reducer;