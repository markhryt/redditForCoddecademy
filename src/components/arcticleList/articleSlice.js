import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const popular= createAsyncThunk(
    'articles/popular',
    async ()=>{
        console.log('this is fetch!!!')
        const data = await fetch("https://www.reddit.com/r/popular.json");
        const response = await data.json()
        return response
    }
    )
    export const searchFor=createAsyncThunk(
        'search/searchFor',
        async(searchTerm)=>{
            const data= await fetch(`//www.reddit.com/search.json?q=${searchTerm}`)
            const response=await data.json()
            return response
        }
    )       
export const articleListSlice = createSlice({
    name:'articles',
    initialState: {
        articles: [],
        isLoading: false, 
        hasError: false
    },
    reducers:{
        print: (state)=>{
            console.log()
        }
    }
    ,

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
        .addCase(searchFor.pending, (state)=>{
            state.isLoading=true;
            state.hasError=false;
        })
        .addCase(searchFor.fulfilled, (state, action)=>{
            state.articles=action.payload
            state.isLoading=false;
            state.hasError=false;
        })
        .addCase(searchFor.rejected, (state)=>{
            state.isLoading=false;
            state.hasError=true;
        })
    }
})

export default articleListSlice.reducer

export const selectArticles = (state) =>state.articleList.articles


export const print=articleListSlice.actions.print