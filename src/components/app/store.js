import { configureStore } from "@reduxjs/toolkit";
import articleSliceReducer from "../arcticleLIst/articleSlice";
import {searchReducer} from '../searchbar/searchSlice'
export default configureStore({
    reducer: {
        articleList: articleSliceReducer,
        search: searchReducer
    },
})