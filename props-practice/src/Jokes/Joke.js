import React from "react"

function Joke(props) {
    return (
        <div>
            <h2>Question: {props.all.question}</h2>
            <h3>Answer: {props.all.answer}</h3>
        </div>
    )
}

export default Joke