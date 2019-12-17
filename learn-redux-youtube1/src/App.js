import React from 'react';
import './App.css';

//import connect: this allows us to connect react and redux 
import { connect } from "react-redux"


// //import actions , mapStateToProps has to be the first one
import {mapDispatchToProps, mapStateToProps} from "./actions/index"
 

class App extends React.Component {

  // constructor() {
  //   super()
  //   this.state = {
  //     age: 21
  //   }
  // }

  // //we gonna create 2 methods 1 for increase number another for decrease the number

  // /* increase */
  // increaseAge = () => {
  //   this.setState( (prevState) => {
  //     return  { age: prevState.age +1}
  //   } )
  // }

  // /* decrease */

  // decrease = () => {
  //   this.setState ( (prevState) => {
  //     return {
  //       age: prevState.age -1
  //     }
  //   })
  // }

  render() {
    return (
      <div>
        <div>age:   {this.props.age}</div>
        <button onClick={this.props.increase}>increase</button>
        <button onClick={ this.props.decrease } >decrease</button>
      </div>
    )
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(App);
