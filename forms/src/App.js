import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      firstName: "",
      lastName: ""
    }
    this.handleChange = this.handleChange.bind(this)
  }

  /* the onChange method */

  /* way 1  */
/*   handleChange(event){
     this.setState({
      //  computed property name
        [event.target.name]: event.target.value
     })
  } */

  /* way 2 - object destructuring */
  handleChange(event){
    const {name , value} = event.target

    this.setState({
       [name]: value
    })
 }

  render(){
    return (
        <form>
          {/* 
          name property here must be identical of what's inside "this.state"
          */}
          <input type="text" name="firstName" value={this.state.firstName} placeholder="firstName" onChange={this.handleChange} />

          <input type="text" name="lastName" value={this.state.lastName} placeholder="lastName" onChange={this.handleChange} />
          {/* h1 to display the state firstName value */}
          <h1>firstName: {this.state.firstName} & lastName: {this.state.lastName}</h1>
        </form>
    )
  }
}

export default App;
