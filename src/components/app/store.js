import { configureStore } from "@reduxjs/toolkit";
import articleSliceReducer from "../arcticleLIst/articleSlice";
export default configureStore({
    reducer: {
        articleList: articleSliceReducer
    },
})