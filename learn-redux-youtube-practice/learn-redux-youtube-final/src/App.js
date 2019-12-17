import React from 'react';

//import actions : mapStateToProps & mapDispatchToProps
import {mapStateToProps , mapDispatachToProps} from "./actions/action";

//connect: used to connect our App with the global store created
import { connect } from "react-redux"

class App extends React.Component {


  render(){
    return (
      <div className="app">

          {/* click to increase or decrese using Redux */}
          <div className="topDisplay">
            <h2>display age:  {this.props.age}</h2>
            <br/>
            <button onClick={this.props.increase}>increase</button> &nbsp;&nbsp;&nbsp;
            <button onClick={this.props.decrease}>decrease</button>  
          </div>
          
          {/* Display age number on click & onclick on each one removed */}
          <div className="displayData">
            <h3>add value of increase/decrease + onClick on anyone it deleted</h3>
            <ul className="ageList">
              {
                this.props.ageArray.map( (element) => {
                  return (
                    /* the click event should be here to target each element being clicked */
                    <li key={element.id} onClick={()=>this.props.delete(element.id)}>
                      {element.age}
                    </li>
                  )
                } )
              }
            </ul>
          </div>

          {/* increase the number asynchronously */}
          <div className="async">
             <h3><span style={{fontWeight:"normal"}}>Thunk async Number update:</span> <strong style={{fontSize:"1.2em"}}>{this.props.asyncNumber}</strong></h3>
             <button onClick={this.props.asyncUpdate}>update after 2 seconds</button>
          </div>

      </div>
    )
  }

}

//use connect to create higher order component, take comp. do something & return a new component
export default connect(mapStateToProps,mapDispatachToProps)(App);
