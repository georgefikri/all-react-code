import React from "react"
import Child1 from "./Child1"
import Child2 from "./Child2"


function Parent(){
    let firstName = "George"
    let lastName = "Emad"

    let date = new Date();
    let hours = date.getHours();
    let timeOfDay;

    if(hours < 12){
        timeOfDay = 'morning'
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = 'afternoon'
    } else {
        timeOfDay = 'night'
    }

    let cssObject = {
        color: "#fff" , 
        backgroundColor: "#000"
    }

    return (
        <div>
            <h1>hello {firstName} from Parent Component</h1>
            <Child1 />
            <Child2 />


            <h2>hello {`${firstName} bin  ${lastName}`} from Parent Component</h2>

            <p>Time of day</p>
            <h3>Good {timeOfDay}</h3>

            {/* try inline style 
                first {} : to create the object "style"  needs
                second {} : to jump from JSX to JS
            */}
            <h4 style = {{color: "red" , backgroundColor: "orange"}}>da el h4</h4>

            {/* i also can do this  */}
            <h4 style = {cssObject}> this is the H5</h4>



        </div>
    )
}

export default Parent