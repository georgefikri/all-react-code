import React from 'react';
import logo from './logo.svg';
import './App.css';

class App2 extends React.Component {

  constructor(){
    super();
    this.state = {
      firstName: "",
      lastName: "",
      textArea: "",
      isFriendly: true,
      gender: "",
      color: "red"
    }
    this.handleChange = this.handleChange.bind(this)
  }

  /* the onChange method */

  /* way 2 - object destructuring */
  handleChange(event){
    const {name , value , type, checked} = event.target

    if(type === "checkbox"){
        this.setState({
            [name] : checked
        })
    } else {
        this.setState({
            [name]: value
         })
    }


 }

 handleSubmit(){
     alert('finished ')
 }

  render(){
    return (
        <form onSubmit={this.handleSubmit}>
          {/* 
          name property here must be identical of what's inside "this.state"
          */}
          <input type="text" name="firstName" value={this.state.firstName} placeholder="firstName" onChange={this.handleChange} />

            <input type="text" name="lastName" value={this.state.lastName} placeholder="lastName" onChange={this.handleChange} />
          {/* h1 to display the state firstName value */}
          <h1>firstName: {this.state.firstName} & lastName: {this.state.lastName}</h1>



          {/* textArea */}
          <textarea name="textArea" value={this.state.textArea} onChange={this.handleChange} />
          <h1>
              textarea value : {this.state.textArea}
          </h1>


          {/* checkox */}
          <label>
            <input type="checkbox" checked={this.state.isFriendly} name="isFriendly" onChange={this.handleChange} />
            label
          </label>

          <br /><br /><br /> 

          
          {/* radio buttons */}


          <label>
            <input type="radio" checked={this.state.gender ==="male"} value="male" name="gender" onChange={this.handleChange} />
            radioButton 1
          </label>

          <label>
            <input type="radio" checked={this.state.gender ==="female"} value="female" name="gender" onChange={this.handleChange} />
            radioButton 2
          </label>

          <br /><br /><br /> 

           {/* Select */}
           <select value={this.state.color} onChange={this.handleChange} name="color">
               <option value="red">red</option>
               <option value="yellow">yellow</option>
               <option value="orange">orange</option>
           </select>
            <h2>select dropdown value state : {this.state.color}</h2>


            {/* submit
            <button> if found inside <form> acts like <input type="submit" /> 
            */}
            <button>click me </button>

        </form>
    )
  }
}

export default App2;
