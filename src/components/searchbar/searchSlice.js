import React from "react";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
    name: 'search',
    initialState:{
        searchTerm: ''
    },
   reducers:{
    defineSearchTerm:(state, action)=>{
        state.searchTerm=action.payload
    }
   }
})

export const searchReducer=searchSlice.reducer