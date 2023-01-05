import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Link, Routes  } from "react-router-dom";
import { Article } from "../Article/Article";
import { selectArticles, popular, searchFor } from "./articleSlice";
import { useSelector, useDispatch } from "react-redux";
import { Home } from "../home/Home";
import './ArticleList.css'
import { CommentPage } from "../comments/CommentPage";
export function ArticleList(){
    let articles=[]

    articles=useSelector(selectArticles)
    return (
        <div className="ArticleList">
            <Routes>
                <Route path={`/popular/comments/:name`} element={<CommentPage/>}/>
                <Route path={`/search/:term/comments/:name`} element={<CommentPage/>}/>
                <Route exact path='/popular' element={<Article articles={articles}/>}/>
                <Route  path='/search/:term' element={<Article articles={articles}/>}/>
                <Route path='/' element={<Home/>}/>
                {/* <Route path='*' element={<CommentPage/>}/> */}
            </Routes>

        </div>
    )

}