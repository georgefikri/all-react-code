import React from "react"
/* import react for the JSX to work */
function Child1(){
    return (
        <header className="header">
            <h2>Child 1 </h2>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">about</a></li>
                <li><a href="#">Contact us</a></li>
            </ul>
        </header>
    )
}

export default Child1