import React from "react"
import Joke2 from "./Jokes/Joke2"
import dat from "./FakeAPI/Data"

function App2(){
        /* single here represents every element in data.js array of objects */
        let aaa = dat.map((single)=>{
           return  <Joke2 key={single.id} userID={single.userID} title={single.title} body={single.body} />
        })


    return (
        <div>
            {aaa}
        </div>
    )
}

export default App2