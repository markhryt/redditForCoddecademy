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
    
    export const loadComment= createAsyncThunk(
        'articles/comments',
        async(action)=>{
            const data = await fetch(`//www.reddit.com/${action.subreddit}/comments/${action.id}.json`)
            const response=await data.json()
            console.log(response)
            return response
        }
    )
export const articleListSlice = createSlice({
    name:'articles',
    initialState: {
        articles: [],
        comments: [],
        currentArticleId: {},
        //popular
        isLoadingPopular: false, 
        hasErrorPopular: false,
        //search
        isLoadingSearch: false,
        hasErrorSearch: false,
        //loading
        isLoadingComment: false,
        hasErrorComment: false 
    },
    reducers:{
        print: (state)=>{
            console.log()
        },
        changeCurrentArticleId: (state, action)=>{
            state.currentArticleId.id=action.payload.id
            state.currentArticleId.subreddit=action.payload.subreddit_name_prefixed
        }
    }
    ,

    extraReducers: (builder)=>{
        builder
        //popular
        .addCase(popular.pending, (state) => {
            state.isLoadingPopular=true;
            state.hasErrorPopular=false;
        })
        .addCase(popular.fulfilled, (state, action)=>{
            state.articles=action.payload
            state.isLoadingPopular=false;
            state.hasErrorPopular=false;
        })
        .addCase(popular.rejected, (state)=>{
            state.isLoadingPopular=false;
            state.hasErrorPopular=true;
        })
        //search
        .addCase(searchFor.pending, (state)=>{
            state.isLoadingSearch=true;
            state.hasErrorSearch=false;
        })
        .addCase(searchFor.fulfilled, (state, action)=>{
            state.articles=action.payload
            state.isLoadingSearch=false;
            state.hasErrorSearch=false;
        })
        .addCase(searchFor.rejected, (state)=>{
            state.isLoadingSearch=false;
            state.hasErrorSearch=true;
        })
        //load Comments
        .addCase(loadComment.pending, (state)=>{
            state.isLoadingComment=true;
            state.hasErrorComment=false;
        })
        .addCase(loadComment.fulfilled, (state, action)=>{
            state.comments=action.payload
            state.isLoadingComment=false;
            state.hasErrorComment=false;
        })
        .addCase(loadComment.rejected, (state)=>{
            state.isLoadingComment=false;
            state.hasErrorComment=true;
        })
    }
})
//reducer
export default articleListSlice.reducer
//selectors
export const selectArticles = (state) => state.articleList.articles
export const selectCurrentArticleId=(state)=>state.articleList.currentArticleId
export const selectComments = (state)=> state.articleList.comments
export const selecIsLoadingComment=(state)=> state.articleList.isLoadingComment
//actions
export const changeCurrentArticleId=articleListSlice.actions.changeCurrentArticleId
export const print=articleListSlice.actions.print

