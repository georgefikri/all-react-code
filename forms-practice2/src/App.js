import React from 'react';
import './App.css';

/* Components of Form */
import FirstName from "./components/FirstName"
import LastName from "./components/LastName"
import Age from "./components/Age"
import Radio from "./components/Radio"
import Select from "./components/SelectDropDown"
import CheckBoxes from "./components/CheckBoxes"

class App extends React.Component{  
  constructor(){
    super();
    this.state = {
      firstName:"",
      LastName: "",
      Age: "",
      Gender:"",
      Select: "",
      food: {
        chocolate: false,
        orange: false,
        waterMelon: false
      }
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event){
    const {name , value , type , checked } = event.target

    if(type === "checkbox") {
      this.setState((previousState)=>{
          return {
            food: {
             /* i gonna take all the properties from previous state (using spread oeprator) */
             ...previousState.food,
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
        <form>


            <FirstName value={this.state.firstName} change={this.handleChange}/>

            <LastName value={this.state.LastName} change={this.handleChange} />

            <Age value={this.state.Age} change={this.handleChange}/>

            <Radio 
            checked={this.state.Gender ==="male"}
            checked2={this.state.Gender ==="female"}
            theData={this.state.Gender} 
            change={this.handleChange} 
            male="male"
            female="female"/>


            <Select value={this.state.Select} change={this.handleChange} propValue={this.state.Select} />



            <CheckBoxes name1="chocolate"
            name2="orange"
            name3="waterMelon"
            checked={this.state.food.chocolate}
            checked2={this.state.food.orange}
            checked3={this.state.food.waterMelon}
            change={this.handleChange}
            />


        </form>
    )
  }
}

export default App;
