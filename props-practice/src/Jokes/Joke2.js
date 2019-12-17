import React from "react"

function Joke2(props){
    return (
        <div>
            <p>userID {props.userID}</p>
            <p>title {props.title}</p>
            <p>body {props.body}</p>
        </div>
    )
}

export default Joke2