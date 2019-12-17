import React from "react"
import Navbar from "./Navbar"
import MainCont from "./MainCont"
import Footer from "./Footer"

function App(){
    return (
      <div>
        <h1>App Component</h1>
        <Navbar />
        <br />
        <MainCont />
        <br />
        <Footer />
      </div>
    )
}

export default App