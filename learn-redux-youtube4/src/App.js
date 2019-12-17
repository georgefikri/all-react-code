import React from 'react';
import './App.css';

//import connect: this allows us to connect react and redux 
import { connect } from "react-redux"


// //import actions 
import {mapDispatchToProps, mapStateToProps} from "./actions/index"
 

class App extends React.Component {

  render() {
    return (
      <div>
        <div>age:   {this.props.age}</div>
        
        <br /><br />
        
        <button onClick={this.props.increase}>increase</button>
        <button onClick={ this.props.decrease } >decrease</button>

        <br /><br />

      </div>
    )
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(App);
