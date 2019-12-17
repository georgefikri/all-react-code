import React from 'react';
import './App.css';
import Child from "./Child"

//1. to add state we need class-based component not functional component

//2. add a state with boolean true or false

//3. add a button on click change the status of the State from true to false or false to true 

//4. display text saying the status if the user logged in / out 

class App extends React.Component {

  constructor(){
    super();

    this.state = {
      isLoggedin : true
    }

    this.handleClick = this.handleClick.bind(this)
  }

 handleClick(){
    this.setState( (previousState) =>{
        /* way 1 long version */
        /* if(previousState.isLoggedin === true){
          return {
            isLoggedin: false
          }
        } else {
          return {
            isLoggedin: true
          }
        } */

        /* way 2 short better version.
          this return the opposite of the previous state
        */
        return {
          isLoggedin: !previousState.isLoggedin
        }
    })
}

  render(){
    return(
      <div>  
        <Child status={this.state.isLoggedin} theClick={this.handleClick} />
      </div>
    )
  }
}


export default App;
 