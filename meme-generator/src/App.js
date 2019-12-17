import React from "react"
import "./App.css"

/* importing sub-compponent */
  /* Header.js to display data UI */
  import Header from "./components/Header"
  /* MemeGenerator will hold the logic & Data */
  import MemeGenerator from "./components/MemeGenerator"

class App extends React.Component {

  render(){
    return (
      <div>
          <Header />
          <MemeGenerator />
      </div>
    )
  }
}

export default App