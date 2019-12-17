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
        <button onClick={this.props.increase}>increase</button>
        <button onClick={ this.props.decrease } >decrease</button>

        <br /><br />
        {/* arrays values */}
        <ul>
          {
            this.props.history.map(element => (
              <li key={element.id} onClick={() => this.props.handleClickDel(element.id)}>
                {element.age}
              </li>
            ))
          }
        
        </ul>
      </div>
    )
  }
}

//mapStateToProps has to be the first one
export default connect(mapStateToProps,mapDispatchToProps)(App);
