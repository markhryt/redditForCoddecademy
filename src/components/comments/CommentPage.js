import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Comment } from "./Comment";
import { loadComment, selectCurrentArticleId, selectComments, selecIsLoadingComment} from "../arcticleLIst/articleSlice";

export function CommentPage(){
    const dispatch=useDispatch()
    let isLoadingComment
    let currentArticleId
    let comments
    isLoadingComment=useSelector(selecIsLoadingComment)
    comments=useSelector(selectComments)
    currentArticleId=useSelector(selectCurrentArticleId)
    useEffect(()=>{
        if(currentArticleId!==undefined){
            dispatch(loadComment(currentArticleId))
        }
    }, [currentArticleId])
    
        if(isLoadingComment){
            return (
                <div className="commentPage">
                    <h1>Loading...</h1>
                    
                </div>
            )
        }
        if(comments !==undefined && comments[1]!=undefined){
            return(
                <div className="commentPage">
                     <h1>{comments[0].data.children[0].data.title}</h1>
                     <ul>
                        {comments[1].data.children.map(child=><Comment data={child.data}/>)}
                     </ul>
                </div>
            )
        }
}
    


