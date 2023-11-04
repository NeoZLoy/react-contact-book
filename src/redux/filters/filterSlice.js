import { createSlice } from "@reduxjs/toolkit"

const filterSlice = createSlice({
    name: 'filter',
    initialState:{
        name: '',
    },
    reducers:{
        nameFilter(state, action){
            state.name = action.payload
        }
    }
})

export const filterReducer = filterSlice.reducer;
export const {nameFilter} = filterSlice.actions;