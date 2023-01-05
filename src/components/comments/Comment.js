import React from "react";

export function Comment(props){
    const data=props.data
    return(
        <div className="comment">
            <li>
                <span>{data.author}</span>
                <p>{data.body}</p>
            </li>
            <details>
                <summary>replies</summary>
                {data.replies !== undefined && data.replies.data.children.map(reply=>
                    <li>
                        <span>{reply.data.author}</span>
                        <p>{reply.data.body}</p>
                    </li>)}
            </details>
            <br/>
        </div>
    )
}