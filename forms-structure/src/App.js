import React from 'react';
import './App.css';

import FormPresentation from "./FormPresentation"

class App extends React.Component {

  constructor(){
    super();
    this.state={
      firstName:"",
      lastName: "",
      age: "",
      gender: "",
      locations: "Germany",
      alergies: {
        isVegan: false,
        isKosher: false,
        isLactoseFree: false
      }
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event){
    const {name , value , type , checked } = event.target

    if(type === "checkbox") {
      this.setState((previousState)=>{
          return {
            alergies: {
             /* i gonna take all the properties from previous state (using spread oeprator) */
             ...previousState.alergies,
             [name] : checked
            }
          }
      })
    } else {
      this.setState({
        [name] : value
      })
    }

    
  }

  render(){
    return (
        <FormPresentation handleChange={this.handleChange} data={this.state} />
    )
  }
}

export default App;
