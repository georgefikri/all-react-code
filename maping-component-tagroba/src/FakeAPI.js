import React from "react"

function FakeAPI(props){
    return (
        <div>
            <p>userID: {props.userID}</p>
            <p>title: {props.title}</p>
            <p>body: {props.body}</p>
            <hr />
        </div>
    )
}

export default FakeAPI