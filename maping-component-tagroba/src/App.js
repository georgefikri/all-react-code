import React from "react"
import FakeAPI from "./FakeAPI"
import data from "./Data"

function App(){

  /* single info: refers to every element in the array */

  let all = data.map((SingleInfo)=>{
      return <FakeAPI key={SingleInfo.id} userID={SingleInfo.userID} title={SingleInfo.title} body={SingleInfo.body} />
  })


  return (
      <div>
        {all}
      </div>
  )
}

export default App