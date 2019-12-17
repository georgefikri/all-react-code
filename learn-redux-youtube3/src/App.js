import React from 'react';

//import connect: this allows us to connect react and redux 
import { connect } from "react-redux"

//import actions
import {mapStateToProps,mapDispatchToProps} from "./actions/actions"

class App extends React.Component {

  render(){
    return (
      <div className="App">
        {/* we're creating 2 divs each have button to update and displaying the value through props */}
         <div className="col">
              <div>
                <span>A:</span><span>{this.props.a}</span>
              </div>
              <button onClick={() => this.props.updateA(this.props.b)}>Update A</button>
         </div>
  
         <div className="col">
              <div>
                <span>B:</span><span>{this.props.b}</span>
              </div>
              <button onClick={()=> this.props.updateB(this.props.a)}>Update B</button>
         </div>
      </div>
    );
  }
  
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
