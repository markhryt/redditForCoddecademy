import React from "react";
import { useDispatch } from "react-redux";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import { changeCurrentArticleId } from "../arcticleLIst/articleSlice";
import { CommentPage } from "../comments/CommentPage";
import './Article.css'
export function Article(props){
    let articles=props.articles
    const dispatch=useDispatch()
    return(
    <div className="articlecontainer">
        <ul>
        {articles.length!==0 && articles.data.children.map(child=>
        <div>
        <li id={child.data.name}>
        <Link to = {`comments/${child.data.name}/`} >
                <button onClick={()=>dispatch(changeCurrentArticleId(child.data))} className='button-article'>
                    <span>{child.data.author}</span>
                    <p>{child.data.title}</p>
                    <br/>
                </button>
              
            
        </Link>
        </li>
        </div>)}
        </ul>
     </div>
    )
}

//         <Route path={child.data.name} element={<CommentPage/>}/>