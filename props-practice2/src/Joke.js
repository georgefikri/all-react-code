import React from "react"

function Joke(props){
    
    return (
        <div>
            <h1>title : {props.data.title}</h1>
            <h2>superName: {props.data.super}</h2>
        </div>
    )
}

export default Joke