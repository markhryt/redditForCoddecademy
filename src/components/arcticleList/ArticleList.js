import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Article } from "../Article/Article";
import { selectArticles, popular, searchFor } from "./articleSlice";
import { useSelector, useDispatch } from "react-redux";
import './ArticleList.css'
export function ArticleList(){
    const dispatch=useDispatch();

    let articles=[]

    articles=useSelector(selectArticles)

    return (
        <div className="ArticleList">
            <div className="articlecontainer">
                {articles.length!==0 && articles.data.children.map(child=>
                <div>
                <Link to = {child.data.name} id={child.data.name}>
                    <ul>
                        <span>{child.data.author}</span>
                        <li>{child.data.title}</li>
                    </ul>
                </Link>
                </div>)}
                 
             </div>
        </div>
    )

}