import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { selectArticles, popular } from "./articleSlice";
import { useSelector, useDispatch } from "react-redux";
export function ArticleList(){
    const dispatch=useDispatch();
    const articles=useSelector(selectArticles)
    return (
        <div className="ArticleList">
            <div className="articlecontainer">
                <button onClick={()=>dispatch(popular)}>Make a fetch</button>
            </div>
        </div>
    )

}