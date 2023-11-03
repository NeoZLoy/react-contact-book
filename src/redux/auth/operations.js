import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = '';
};
  
export const register = createAsyncThunk('auth/signup', async (user, thunkAPI) => {
    try {
        const res = await axios.post('/users/signup', user)
        setAuthHeader(res.data.token)
        return res.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})

export const login = createAsyncThunk('auth/login', async (user, thunkAPI) => {
    try {
        const res = await axios.post('/users/login', user)
        setAuthHeader(res.data.token)
        return res.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);

    }
})

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
    try {
        const res = await axios.post('users/logout');
        clearAuthHeader()
        localStorage.clear();
        return res;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})

export const refreshUser = createAsyncThunk('/auth/refresh', async (_, thunkAPI) => {
    const token = thunkAPI.getState().auth.token;
    if(!token){
        return
    }else{
        setAuthHeader(token);
        try {
            const res = await axios.get('users/current');
            return res.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }   
})