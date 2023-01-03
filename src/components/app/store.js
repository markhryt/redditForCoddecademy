import { configureStore } from "@reduxjs/toolkit";
import articleSliceReducer from "../arcticleList/articleSlice";
export default configureStore({
    reducer: {
        articleList: articleSliceReducer

    },
})