import React from 'react';
import './App.css';
/* import subcomponent */
import SubComponent from "./SubComponent"
/* import data */
import Data from "./Data"

class App extends React.Component {
  constructor(){
    super();
    this.state ={
      todo: Data
    }
  }

  /* arrow function so  don't have to bind it in the constructor  */
  handleChange = (id) => {
      this.setState((prevState)=>{
        let updateData = prevState.todo.map((item)=>{
            if(item.id === id) {
              item.status = !item.status
            }

            return item
        })
        return {
          todo: updateData
        }
      })
  }

  render(){
    return (
      <SubComponent Data={this.state.todo} onChange={this.handleChange} />
    )
  }
}

export default App;
