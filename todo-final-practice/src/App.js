import React from "react"

/* importing the SubComponent */
import Sub from "./Sub"

/* importing data from our fake API */
import Data from "./Data"

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      items: Data
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id){
      this.setState((previousState)=>{

        let returnData = previousState.items.map((itemmm)=>{
            if(itemmm.id === id) {
              itemmm.status = !itemmm.status
            }

            return itemmm

        })

        return {
          items: returnData
        }

      })
  }

  render(){

    let all = this.state.items.map((item)=>{
      return <Sub key={item.id} data={item} change={this.handleChange}  />
    })

    return (
      <ul>
        {all}
      </ul>
    )
  }
}

export default App