import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const popular= createAsyncThunk(
    'articles/popular',
    async ()=>{
        console.log('asdf')
        const data = await fetch("https://www.reddit.com/r/popular.json");
        const response = await data.json()
        
        return 
    }
)

export const articleListSlice = createSlice({
    name:'articles',
    initialState: {
        articles:[],
        isLoading: false, 
        hasError: false
    },
    extraReducers: (builder)=>{
        builder
        .addCase(popular.pending, (state) => {
            state.isLoading=true;
            state.hasError=false;
        })
        .addCase(popular.fulfilled, (state, action)=>{
            state.articles=action.payload
            state.isLoading=false;
            state.hasError=false;
        })
        .addCase(popular.rejected, (state)=>{
            state.isLoading=false;
            state.hasError=true;
        })
    }
})

export default articleListSlice.reducer

export const selectArticles = state =>state.articles