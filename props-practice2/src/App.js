import React from "react"
import Joke from "./Joke"
function App(){
  return (
    <div>

      <Joke data={{
        title:"new iphone" ,
        super:"expensive"
      }} />

      <hr />
      <Joke data={{
        title:"new samsung",
        super:"expensive"
      }} />
      <hr />
      
      <Joke data={{
        title:"new honor" ,
        super:"good value" 
      }}/>
      <hr />

      <Joke data={{
        title:"lg ",
         super:"sucks"
      }} />

    </div>
  )
}

export default App