import React from 'react';
import './App.css';

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
        <form>

          {/***************************  first name ****************************/}
            <div>
              <span>First Name </span>
              <input type="text" name="firstName" placeholder="First Name" value={this.state.firstName} onChange={this.handleChange} />
            </div>

            {/**************************** last name ****************************/}
            <div>
              <span>last Name </span>
              <input type="text" name="lastName" placeholder="last Name" value={this.state.lastName} onChange={this.handleChange} />
            </div>

            {/**************************** age ****************************/}
            <div>
              <span>Age </span>
              <input type="number" name="age" placeholder="Age" value={this.state.age} onChange={this.handleChange} />
            </div>

            {/**************************** gender ****************************/}
            <div className="gender">
              <span>Gender </span>
              <span>
                <input type="radio" name="gender"  checked={this.state.gender === "Male"}  value="Male" onChange={this.handleChange} />
                <label>Male</label>

                <div className="clear"></div>
                <input type="radio" name="gender"  checked={this.state.gender === "Female"}  value="Female" onChange={this.handleChange} />
                <label>Female</label>
              </span>
            </div>

            {/**************************** traveling locations - dropdown ****************************/}
            <div className="dropDown">
              <span>Traveling Locations</span>
              <select name="locations" value={this.state.locations} onChange={this.handleChange}>
                <option value="Germany">Germany</option>
                <option value="Italy">Italy</option>
                <option value="Sweden">Sweden</option>
              </select>
            </div>


            {/****************************  dietary restrictions   - checkbox ****************************/}
            <div>
              <span>alergies</span>
              <span>
                <input type="checkbox"  checked={this.state.alergies.isVegan} name="isVegan" onChange={this.handleChange} />
                <label>Vegan</label>
                <br />
                <input type="checkbox"  checked={this.state.alergies.isKosher} name="isKosher" onChange={this.handleChange} />
                <label>Kosher</label>
                <br />
                <input type="checkbox"  checked={this.state.alergies.isLactoseFree} name="isLactoseFree" onChange={this.handleChange} />
                <label>isLactoseFree</label>
              </span>

            </div>

        </form>
    )
  }
}

export default App;
